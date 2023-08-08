import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function DocListCard(props) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate({
      pathname: "/dashboard/admin/verify-user/addnew",
      search: `?${createSearchParams({
        uid: props.doctor.uid,
      })}`,
    });
  };

  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography variant="h5" component="div">
          {`Dr. ${props.doctor.fname} ${props.doctor.lname}`}
        </Typography>
        <Typography sx={{ mb: 0.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.doctor.speciality}
        </Typography>
        <Typography sx={{ mb: 3, fontSize: "0.9rem" }} color="text.secondary">
          {`Department of ${props.doctor.department}`}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 0.8 }}
          color="rgba(0, 0, 0, 0.26)"
        >
          {props.doctor.workDays.join(" | ")}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: "0.9rem" }}>
          {props.doctor.time}
        </Typography>
        <br />
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="warning"
            size="small"
            endIcon={<EditIcon />}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button sx={{ pointerEvents: "none", color: "#000" }}>
            {`₹ ${props.doctor.fee}/-`}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
