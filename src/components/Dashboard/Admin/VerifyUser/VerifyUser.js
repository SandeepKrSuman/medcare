import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./VerifyUser.module.css";
import VerificationCard from "./VerificationCard";

const users = [
  {
    name: "Staff Xyz",
    email: "staff@xyz.com",
    role: "Staff",
  },
  {
    name: "Dr. A.K. Arya",
    email: "doct@ary.com",
    role: "Doctor",
    department: "Cardiology",
  },
  {
    name: "Nurse Jane Doe",
    email: "nurse@doe.com",
    role: "Nurse",
    department: "Emergency",
  },
  {
    name: "Dr. John Smith",
    email: "drsmith@example.com",
    role: "Doctor",
    department: "Pediatrics",
  },
  {
    name: "Pharmacist Mary Johnson",
    email: "pharmacy@example.com",
    role: "Pharmacist",
  },
  {
    name: "Receptionist Bob Brown",
    email: "reception@example.com",
    role: "Receptionist",
  },
];

export default function VerifyUser() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {users.map((user, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <VerificationCard user={user} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
