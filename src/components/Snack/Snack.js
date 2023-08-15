import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "../../AuthContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snack() {
  const { showAlert, setAlert, alertMsg, alertType, setAlertType } = useAuth();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
    setAlertType("error");
  };

  return (
    <Snackbar
      key={alertType}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlert}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={alertType} sx={{ width: "100%" }}>
        {alertMsg}
      </Alert>
    </Snackbar>
  );
}
