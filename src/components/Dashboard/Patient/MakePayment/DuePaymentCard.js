import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Contactless, DoNotDisturb } from "@mui/icons-material";

export default function DuePaymentCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography
          sx={{ fontSize: "0.9rem" }}
          color="text.secondary"
          gutterBottom
        >
          Payment Due for Appointment with
        </Typography>
        <Typography variant="h5" component="div">
          {props.appointment.docname}
        </Typography>
        <Typography sx={{ mb: 1, fontSize: "0.8rem" }} color="text.secondary">
          {props.appointment.speciality}
        </Typography>
        <Typography
          sx={{ mb: 1, fontSize: "1rem" }}
          color="text.secondary"
        >{`${props.appointment.date} (${props.appointment.time})`}</Typography>
        <br />
        <Typography variant="h6" component="div" color="blue">
          {`₹ ${props.appointment.fee}/-`}
        </Typography>
        <br />
        <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<Contactless />}
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Pay Now
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DoNotDisturb />}
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Cancel
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
