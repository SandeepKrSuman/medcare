import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./GenerateStats.module.css";
import StatsCard from "./StatsCard";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function GenerateStats() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoader(true);
        const res = await api.generateStats();
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setStats(res.data);
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg);
        setAlert(true);
        console.log(error);
      }
    }
    fetchStats();
  }, [setLoader, setAlert, setAlertMsg]);

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
