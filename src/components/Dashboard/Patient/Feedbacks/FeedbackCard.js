import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Fab, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../../../api";

export default function FeedbackCard(props) {
  const [value, setValue] = useState(props.appointment?.rating || 0);
  const [feedbackText, setFeedbackText] = useState(
    props.appointment?.review || ""
  );
  const [hideSubmit, setHideSubmit] = useState(
    props.appointment?.feedback || false
  );

  const handleSubmit = async () => {
    try {
      const res = await api.writeFeedback({
        aptid: props.appointment.aptid,
        review: feedbackText,
        rating: value,
      });
      if (res.data.error) {
        alert(res.data.errorMsg);
      } else {
        if (!alert(res.data.msg)) {
          window.location.reload();
        }
      }
    } catch (error) {
      alert(error?.response?.errorMsg);
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await api.deleteFeedback({
        aptid: props.appointment.aptid,
      });
      if (res.data.error) {
        alert(res.data.errorMsg);
      } else {
        if (!alert(res.data.msg)) {
          window.location.reload();
        }
      }
    } catch (error) {
      alert(error?.response?.errorMsg);
      console.error(error);
    }
  };

  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Rate Your Appointment with
        </Typography>
        <Typography variant="h5" component="div">
          {props.appointment.docname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`on ${props.appointment.date}`}
        </Typography>
        <br />
        <TextField
          fullWidth
          label="your feedback..."
          value={feedbackText}
          autoComplete="off"
          inputProps={{
            maxLength: 280,
          }}
          onChange={(event) => {
            setFeedbackText(event.target.value);
            setHideSubmit(false);
          }}
        />
        <CardActions disableSpacing>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setHideSubmit(false);
            }}
          />
          {hideSubmit ? (
            <Tooltip title="Delete your feedback">
              <Fab
                onClick={handleDelete}
                sx={{ color: "#f44336", marginLeft: "auto" }}
                aria-label="delete"
              >
                <DeleteIcon />
              </Fab>
            </Tooltip>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!feedbackText}
              variant="contained"
              sx={{ marginLeft: "auto" }}
            >
              Submit
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
