import React, { useEffect, useState } from "react";
import { Alert, Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./VerifyUser.module.css";
import VerificationCard from "./VerificationCard";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function VerifyUser() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [users, setUsers] = useState(null);
  const [unavailableMsg, setUnavailableMsg] = useState(null);

  useEffect(() => {
    async function fetchUnverified() {
      try {
        setLoader(true);
        const res = await api.unverified();
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setUsers(res.data);
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
        setAlert(true);
        console.error(error);
        if (error.response.status === 404) {
          setUnavailableMsg("Unverified Users will appear here.");
        }
      }
    }

    fetchUnverified();
  }, [setLoader, setAlert, setAlertMsg]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {users?.map((user, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <VerificationCard user={user} />
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
