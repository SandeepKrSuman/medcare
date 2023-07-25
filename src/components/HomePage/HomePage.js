import React from "react";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <p className={styles.heading}>
          <span className={styles.p1}>Med</span>{" "}
          <span className={styles.p2}>Care</span>
        </p>
        <p className={styles.subHeading}>Hospital Management System</p>
        <div className={styles.authBtns}>
          <Button
            variant="outlined"
            color="warning"
            startIcon={<PersonAddIcon />}
          >
            Sign Up
          </Button>
          <Button variant="contained" color="success" endIcon={<LoginIcon />}>
            Sign In
          </Button>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img src="/health.png" alt="" draggable="false" />
      </div>
    </div>
  );
}
