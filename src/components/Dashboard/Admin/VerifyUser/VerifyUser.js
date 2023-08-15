import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./VerifyUser.module.css";
import VerificationCard from "./VerificationCard";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function VerifyUser() {
  const { setLoader } = useAuth();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUnverified() {
      try {
        setLoader(true);
        const res = await api.unverified();
        if (res.data.error) {
          setLoader(false);
          alert(res.data.errorMsg);
        } else {
          setLoader(false);
          setUsers(res.data);
        }
      } catch (error) {
        setLoader(false);
        alert(error?.response?.data?.errorMsg || "An Error Occured!");
        console.error(error);
      }
    }

    fetchUnverified();
  }, [setLoader]);

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
      </div>
    </div>
  );
}
