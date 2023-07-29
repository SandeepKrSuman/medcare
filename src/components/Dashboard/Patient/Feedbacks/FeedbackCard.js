import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FeedbackCard(props) {
  const [value, setValue] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = () => {
    console.log(feedbackText);
    console.log(value);
  };

  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Rate Your Appointment with
        </Typography>
        <Typography variant="h5" component="div">
          {props.appointment.doctor}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`on ${props.appointment.date}`}
        </Typography>
        <br />
        <TextField
          fullWidth
          label="your feedback..."
          value={feedbackText}
          id="fullWidth"
          autoComplete="off"
          onChange={(event) => setFeedbackText(event.target.value)}
        />
        <CardActions disableSpacing>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
          />
          <Button
            onClick={handleSubmit}
            disabled={!feedbackText && true}
            variant="contained"
            sx={{ marginLeft: "auto" }}
          >
            Submit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
