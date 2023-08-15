import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PublishIcon from "@mui/icons-material/Publish";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import api from "../../api";
import { useAuth } from "../../AuthContext";

const Input = styled("input")({
  display: "none",
});

const useStyle = {
  border: "4px dotted #A2D2FF",
  width: "100%",
  height: "100px",
  fontSize: "1.2rem",
};

export default function FileUploader(props) {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [fileName, setFileName] = useState(null);
  const [errFileName, setErrFileName] = useState(null);
  const [file, setFile] = useState(null);

  function handleChange(e) {
    const fname = e.target.files[0].name;
    const size = parseInt(e.target.files[0].size);
    if (size < 1000000) {
      setFileName(fname);
    } else {
      const errFname = "Allowed file size: < 1MB";
      setErrFileName(errFname);
    }

    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("aptid", props.appointment.aptid);
    formData.append("patid", props.appointment.patid);
    formData.append("docid", props.appointment.docid);
    formData.append("patname", props.appointment.patname);
    formData.append("docname", props.appointment.docname);
    formData.append("date", props.appointment.date);
    formData.append("file", file);

    try {
      setLoader(true);
      const res = await api.uploadPrescription(formData);

      if (res.data.error) {
        setLoader(false);
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        setLoader(false);
        setFileName(null);
        setErrFileName(null);
        if (!alert(res.data.msg)) {
          window.location.reload();
        }
      }
    } catch (error) {
      setLoader(false);
      setAlertMsg(error.response.data.errorMsg);
      setAlert(true);
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <FormGroup>
        <label htmlFor={`file-uploader-${props.useKey}`}>
          <Input
            onChange={handleChange}
            accept="image/*, application/pdf"
            name="prescriptionFile"
            id={`file-uploader-${props.useKey}`}
            type="file"
          />
          <Button
            style={useStyle}
            variant="outlined"
            component="span"
            startIcon={<PublishIcon />}
          >
            Upload
          </Button>
        </label>
        <br />
        <Typography
          sx={{ textAlign: "center" }}
          variant="caption"
          color={fileName ? "green" : "red"}
          display="block"
          gutterBottom
        >
          {fileName ? fileName : errFileName}
        </Typography>
        <br />
      </FormGroup>
      <Button
        disabled={fileName ? false : true}
        onClick={handleSubmit}
        variant="contained"
        sx={{ width: "100%" }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
