import React, { useEffect, useState } from "react";
import styles from "./MyAppointments.module.css";
import AppointmentCard from "./AppointmentCard";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import api from "../../../../api";

export default function Appointments(props) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const res = await api.myAppointments({ patid: props.patid });
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          const apt = res.data.filter(
            (appointment) => !appointment.payment && !appointment.cancel
          );
          if (apt.length > 0) {
            setAppointments(apt);
          } else {
            if (!alert("No Appointment to Cancel!")) {
              window.location.reload();
            }
          }
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchAppointments();
  }, [props.patid]);

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
      </div>
    </div>
  );
}
