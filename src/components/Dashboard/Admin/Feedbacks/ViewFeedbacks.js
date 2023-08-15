import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./ViewFeedbacks.module.css";
import FeedbackCard from "./FeedbackCard";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function ViewFeedbacks() {
  const { setLoader } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setLoader(true);
        const res = await api.getFeedbacks();
        if (res.data.error) {
          setLoader(false);
          alert(res.data.errorMsg);
        } else {
          setLoader(false);
          setFeedbacks(res.data);
        }
      } catch (error) {
        setLoader(false);
        alert(error?.response?.data?.errorMsg);
        console.log(error);
      }
    }
    fetchFeedbacks();
  }, [setLoader]);

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
