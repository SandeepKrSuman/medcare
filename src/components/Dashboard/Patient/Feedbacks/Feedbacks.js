import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import FeedbackCard from "./FeedbackCard";
import styles from "./Feedbacks.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";

export default function Feedbacks() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.myAppointments({ patid: uid });
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          const completedAppointments = res.data.filter(
            (appointment) => appointment.completed
          );
          setAppointments(completedAppointments);
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchAppointments();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {appointments.map((appointment, index) => (
            <Grid key={index} item xs={12}>
              <FeedbackCard appointment={appointment} usekey={index} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
