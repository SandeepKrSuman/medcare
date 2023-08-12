import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import UploadPrescriptionCard from "./UploadPrescriptionCard";
import styles from "./UploadPrescription.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";

export default function UploadPrescription() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.docAppointments({ docid: uid });
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setAppointments(
            res.data.sort((a, b) => {
              const dateA = new Date(a.doa);
              const dateB = new Date(b.doa);
              return dateA - dateB;
            })
          );
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
              <UploadPrescriptionCard
                appointment={appointment}
                useKey={index}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
