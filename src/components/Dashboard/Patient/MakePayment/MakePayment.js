import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DuePaymentCard from "./DuePaymentCard";
import styles from "./MakePayment.module.css";

const appointments = [
  {
    doctor: "Dr. A. K. Arya",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    doctor: "Dr. S. K. Choudhary",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    doctor: "Dr. B. K. Pandit",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Mukharjee",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
];

export default function MakePayment() {
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
