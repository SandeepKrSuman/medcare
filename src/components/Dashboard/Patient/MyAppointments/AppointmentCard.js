import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Cancel, Contactless, Feedback } from "@mui/icons-material";

export default function AppointmentCard(props) {
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
          {props.appointment.doctor}
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: "0.8rem" }} color="text.secondary">
          {`(${props.appointment.speciality})`}
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
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<Contactless />}
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Payment
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
