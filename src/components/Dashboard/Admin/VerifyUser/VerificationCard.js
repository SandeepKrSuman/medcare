import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Cancel, DoneOutline } from "@mui/icons-material";
import { useNavigate, createSearchParams } from "react-router-dom";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function VerificationCard(props) {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate({
      pathname: "/dashboard/admin/verify-user/addnew",
      search: `?${createSearchParams({
        uid: props.user.uid,
      })}`,
    });
  };

  const handleReject = async () => {
    try {
      setLoader(true);
      const res = await api.reject({ data: { uid: props.user.uid } });
      if (res.data.error) {
        setLoader(false);
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        setLoader(false);
        if (!alert(res.data.msg)) {
          window.location.reload();
        }
      }
    } catch (error) {
      setLoader(false);
      setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
      setAlert(true);
      console.log(error);
    }
  };

  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography variant="h5" component="div">
          {`${props.user.fname} ${props.user.lname}`}
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.user.email}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: "1rem" }}
          color="text.secondary"
        >{`Position Applied for: ${props.user.userType}`}</Typography>
        <Typography sx={{ mb: 1.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.user.department
            ? `Department of ${props.user.department}`
            : "\u00A0"}
        </Typography>
        <br />
        <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
          <Button
            variant="contained"
            color="success"
            size="small"
            endIcon={<DoneOutline />}
            onClick={handleVerify}
          >
            Verify
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            endIcon={<Cancel />}
            onClick={handleReject}
          >
            Reject
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
