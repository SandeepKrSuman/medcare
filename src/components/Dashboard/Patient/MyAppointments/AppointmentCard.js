import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Cancel, Contactless, Feedback } from "@mui/icons-material";
import api from "../../../../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../AuthContext";

export default function AppointmentCard(props) {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const navigate = useNavigate();

  const handleCancel = async () => {
    const aptid = props.appointment.aptid;
    try {
      setLoader(true);
      const res = await api.cancelAppointment({ aptid });
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
      console.error(error);
    }
  };

  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography
          sx={{ fontSize: "0.9rem" }}
          color="text.secondary"
          gutterBottom
        >
          Appointment with
        </Typography>
        <Typography variant="h5" component="div">
          {props.appointment.docname}
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.appointment.speciality}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: "1rem" }}
          color="text.secondary"
        >{`${props.appointment.date} (${props.appointment.time})`}</Typography>
        <br />
        <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
          <Button
            variant="contained"
            color="error"
            size="small"
            endIcon={<Cancel />}
            onClick={handleCancel}
            disabled={props.appointment.cancel || props.appointment.payment}
          >
            Cancel
          </Button>
          {props.appointment.completed ? (
            <Button
              variant="contained"
              color="success"
              size="small"
              endIcon={<Feedback />}
              onClick={() => navigate("/dashboard/patient/feedbacks")}
            >
              Feedback
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Contactless />}
              onClick={() => navigate("/dashboard/patient/make-payment")}
              disabled={props.appointment.cancel || props.appointment.payment}
            >
              Payment
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
