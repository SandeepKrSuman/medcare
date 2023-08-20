import React, { useEffect, useState } from "react";
import { Alert, Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import FeedbackCard from "./FeedbackCard";
import styles from "./DocFeedbacks.module.css";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function DocFeedbacks() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [unavailableMsg, setUnavailableMsg] = useState(null);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setLoader(true);
        setUnavailableMsg(null);
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.docFeedbacks({ docid: uid });
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setFeedbacks(res.data);
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
        setAlert(true);
        console.log(error);
        if (error.response.status === 404) {
          setUnavailableMsg(
            "Feedbacks given by the patients will appear here."
          );
        }
      }
    }
    fetchFeedbacks();
  }, [setLoader, setAlert, setAlertMsg]);

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
        {unavailableMsg && (
          <Alert icon={false} severity="error">
            {unavailableMsg}
          </Alert>
        )}
      </div>
    </div>
  );
}
