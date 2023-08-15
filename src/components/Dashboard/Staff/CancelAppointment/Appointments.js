import React, { useEffect, useState } from "react";
import styles from "./MyAppointments.module.css";
import AppointmentCard from "./AppointmentCard";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function Appointments(props) {
  const { setLoader } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setLoader(true);
        const res = await api.myAppointments({ patid: props.patid });
        if (res.data.error) {
          setLoader(false);
          alert(res.data.errorMsg);
        } else {
          setLoader(false);
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
        setLoader(false);
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchAppointments();
  }, [props.patid, setLoader]);

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
