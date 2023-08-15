import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import PrescriptionCard from "./PrescriptionCard";
import styles from "./Prescriptions.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function Prescriptions() {
  const { setLoader } = useAuth();
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    async function fetchPrescription() {
      try {
        setLoader(true);
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.prescriptions({ patid: uid });
        if (res.data.error) {
          setLoader(false);
          alert(res.data.errorMsg);
        } else {
          setLoader(false);
          setPrescriptions(res.data);
        }
      } catch (error) {
        setLoader(false);
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchPrescription();
  }, [setLoader]);

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
