import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import FeedbackCard from "./FeedbackCard";
import styles from "./DocFeedbacks.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";

export default function DocFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.docFeedbacks({ docid: uid });
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
              <FeedbackCard feedback={feedback} usekey={index} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
