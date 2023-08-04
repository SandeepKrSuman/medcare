import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

export default function StaffListCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography variant="h5" component="div" color="#071952">
          {props.staff.name}
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: "0.8rem" }} color="text.secondary">
          {props.staff.email}
        </Typography>
        <Typography sx={{ mb: 1, fontSize: "0.9rem" }} color="text.secondary">
          {props.staff.time}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1.5 }} color="#4682A9">
          {props.staff.days.join(" | ")}
        </Typography>
        <br />
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="grey"
            size="small"
            endIcon={<EditIcon />}
            //   onClick={handleClick}
          >
            Edit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
