import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./GenerateStats.module.css";
import StatsCard from "./StatsCard";

const stats = [
  {
    subheading: "Most Rated Doctor",
    heading: "Dr. A.K. Arya",
  },
  {
    subheading: "Number of Staffs",
    heading: 25,
  },
  {
    subheading: "Number of Doctors",
    heading: 35,
  },
  {
    subheading: "Average Appointment Time",
    heading: "30 minutes",
  },
  {
    subheading: "Number of Patients Today",
    heading: 120,
  },
  {
    subheading: "Patient Satisfaction Rate",
    heading: "92%",
  },
  {
    subheading: "Number of Specialties",
    heading: 12,
  },
  {
    subheading: "Number of Clinics",
    heading: 8,
  },
];

export default function GenerateStats() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid key={index} item xs={12} md={6}>
              <StatsCard heading={stat.heading} subheading={stat.subheading} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
