import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DuePaymentCard from "./DuePaymentCard";
import styles from "./MakePayment.module.css";
import api from "../../../../api";

export default function MakePayment(props) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchUnpaid() {
      try {
        const uid = props.patid;
        const res = await api.duePayment({ uid });
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setAppointments(res.data.reverse());
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchUnpaid();
  }, [props.patid]);

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
