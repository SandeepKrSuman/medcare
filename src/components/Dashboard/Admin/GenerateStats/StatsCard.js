import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function StatsCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography sx={{ mb: 2 }} variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography
          sx={{ mb: 3, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {props.subheading}
        </Typography>
        <Typography variant="h6" color="primary" component="div">
          <BarChartIcon />
        </Typography>
        <br />
      </CardContent>
    </Card>
  );
}
