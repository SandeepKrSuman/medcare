import React, { useEffect, useState } from "react";
import styles from "./DocAppointments.module.css";
import AppointmentCard from "./AppointmentCard";
import { Alert, Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function DocAppointments() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [unavailableMsg, setUnavailableMsg] = useState(null);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setLoader(true);
        setUnavailableMsg(null);
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.docAppointments({ docid: uid });
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setAppointments(
            res.data.sort((a, b) => {
              const dateA = new Date(a.doa);
              const dateB = new Date(b.doa);
              return dateA - dateB;
            })
          );
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
        setAlert(true);
        console.log(error);
        if (error.response.status === 404) {
          setUnavailableMsg("** No Upcoming Appointment **");
        }
      }
    }
    fetchAppointments();
  }, [setLoader, setAlert, setAlertMsg]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {appointments.map((appointment, index) => (
            <Grid key={index} item xs={12}>
              <AppointmentCard appointment={appointment} />
            </Grid>
          ))}
        </Grid>
        {unavailableMsg && (
          <Alert icon={false} severity="error">
            {unavailableMsg}
          </Alert>
        )}
      </div>
    </div>
  );
}
