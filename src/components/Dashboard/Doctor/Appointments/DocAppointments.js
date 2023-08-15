import React, { useEffect, useState } from "react";
import styles from "./DocAppointments.module.css";
import AppointmentCard from "./AppointmentCard";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function DocAppointments() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setLoader(true);
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
      </div>
    </div>
  );
}
