import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DocListCard(props) {
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
      </CardContent>
    </Card>
  );
}
