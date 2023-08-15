import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DuePaymentCard from "./DuePaymentCard";
import styles from "./MakePayment.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function MakePayment() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchUnpaid() {
      try {
        setLoader(true);
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.duePayment({ uid });
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setAppointments(res.data.reverse());
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg);
        setAlert(true);
        console.log(error);
      }
    }
    fetchUnpaid();
  }, [setLoader, setAlert, setAlertMsg]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {appointments.map((appointment, index) => (
            <Grid key={index} item xs={12}>
              <DuePaymentCard appointment={appointment} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
