import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import PrescriptionCard from "./PrescriptionCard";
import styles from "./Prescriptions.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    async function fetchPrescription() {
      try {
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.prescriptions({ patid: uid });
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setPrescriptions(res.data);
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchPrescription();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {prescriptions.map((prescription, index) => (
            <Grid key={index} item xs={12}>
              <PrescriptionCard prescription={prescription} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
