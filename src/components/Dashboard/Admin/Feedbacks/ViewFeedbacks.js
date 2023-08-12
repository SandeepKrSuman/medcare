import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./ViewFeedbacks.module.css";
import FeedbackCard from "./FeedbackCard";
import api from "../../../../api";

export default function ViewFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const res = await api.getFeedbacks();
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setFeedbacks(res.data);
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchFeedbacks();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {feedbacks.map((feedback, index) => (
            <Grid key={index} item xs={12}>
              <FeedbackCard feedback={feedback} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
