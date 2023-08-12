import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import FileDownload from "@mui/icons-material/FileDownload";

export default function PrescriptionCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "center" }} variant="outlined">
      <CardContent>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prescription By
        </Typography>
        <Typography variant="h5" component="div">
          {props.prescription.docname}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          variant="caption"
          color="text.secondary"
          component="div"
        >
          {`appointment on: ${props.prescription.date}`}
        </Typography>
        <Typography variant="caption" color="#96B6C5" component="div">
          {`prescribed on: ${props.prescription.pdate}`}
        </Typography>
        <br /> <br />
        <Fab
          href={props.prescription.file}
          download="my-prescription"
          color="primary"
          variant="extended"
        >
          <FileDownload /> {"Prescription"}
        </Fab>
      </CardContent>
    </Card>
  );
}
