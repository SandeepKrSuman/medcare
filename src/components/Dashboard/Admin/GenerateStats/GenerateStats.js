import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./GenerateStats.module.css";
import StatsCard from "./StatsCard";
import api from "../../../../api";

export default function GenerateStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await api.generateStats();
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setStats(res.data);
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchStats();
  }, []);

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
