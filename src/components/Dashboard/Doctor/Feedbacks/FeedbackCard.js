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
        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="#96B6C5" gutterBottom>
          {`appointemnt date: ${props.feedback.date}`}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {props.feedback.patname}
        </Typography>
        <Rating name="read-only" value={props.feedback.rating} readOnly />
        <br />
      </CardContent>
    </Card>
  );
}
