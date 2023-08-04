import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Cancel, DoneOutline } from "@mui/icons-material";

export default function VerificationCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography variant="h5" component="div">
          {props.user.name}
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.user.email}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: "1rem" }}
          color="text.secondary"
        >{`Position Applied for: ${props.user.role}`}</Typography>
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
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Verify
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            endIcon={<Cancel />}
            // onClick={handleCancel}
            // disabled={dateInPast() ? true : false}
          >
            Reject
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
