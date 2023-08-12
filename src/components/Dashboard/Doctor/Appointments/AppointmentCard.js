import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function AppointmentCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography
          sx={{ fontSize: "0.8rem" }}
          color="text.secondary"
          gutterBottom
        >
          Your Appointment with Patient
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          {props.appointment.patname}
        </Typography>
        <Typography sx={{ fontSize: "1rem" }} color="text.secondary">
          {props.appointment.date}
        </Typography>
        <br />
      </CardContent>
    </Card>
  );
}
