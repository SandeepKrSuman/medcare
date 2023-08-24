import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useNavigate, createSearchParams } from "react-router-dom";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

const getDate = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(inputDate);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};

export default function BookingCard(props) {
  const navigate = useNavigate();
  const { setLoader, setAlert, setAlertMsg } = useAuth();

  const handleClick = async () => {
    try {
      setLoader(true);
      const postData = {
        patid: props.patid,
        docid: props.doctor.uid,
        patname: props.patname,
        docname: `Dr. ${props.doctor.fname} ${props.doctor.lname}`,
        speciality: props.doctor.speciality,
        doa: props.aptDate,
        date: getDate(props.aptDate),
        time: props.doctor.time,
        fee: props.doctor.fee,
      };
      const res = await api.bookAppointment(postData);
      if (res.data.error) {
        setLoader(false);
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        setLoader(false);
        navigate("/dashboard/staff/make-payment");
        navigate({
          pathname: "/dashboard/staff/make-payment",
          search: `?${createSearchParams({
            patid: props.patid,
          })}`,
        });
      }
    } catch (error) {
      setLoader(false);
      setAlertMsg(error?.response?.data?.errorMsg);
      setAlert(true);
      console.log(error);
    }
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
          sx={{ mb: 1.5 }}
          color="rgba(0, 0, 0, 0.26)"
        >
          {props.doctor.workDays.join(" | ")}
        </Typography>
        <br />
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="warning"
            endIcon={<AddTaskIcon />}
            onClick={handleClick}
          >
            BOOK
          </Button>
          <Button sx={{ pointerEvents: "none", color: "#000" }}>
            {`₹ ${props.doctor.fee}/-`}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
