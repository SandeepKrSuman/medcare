import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function FeedbackCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography sx={{ mb: 2.5 }} variant="h5" component="div">
          {props.feedback.review}
        </Typography>
        <Typography
          sx={{ mb: 1, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {`Patient: ${props.feedback.patname}`}
        </Typography>
        <Typography
          sx={{ mb: 1, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {`Doctor: ${props.feedback.docname}`}
        </Typography>
        <Typography
          sx={{ mb: 2.5, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {`Appointment: ${props.feedback.date}`}
        </Typography>
        <Rating name="read-only" value={props.feedback.rating} readOnly />
        <br />
      </CardContent>
    </Card>
  );
}
