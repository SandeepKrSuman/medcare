import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./StaffList.module.css";
import StaffListCard from "./StaffListCard";

const staffs = [
  {
    name: "A. K. Arya",
    email: "ak@arya.com",
    days: ["Mon", "Tue", "Wed"],
    time: "6pM - 7pM",
  },
  {
    name: "B. R. Patel",
    email: "br@patel.com",
    days: ["Tue", "Thu", "Fri"],
    time: "4pM - 6pM",
  },
  {
    name: "C. S. Gupta",
    email: "cs@gupta.com",
    days: ["Wed", "Thu", "Fri"],
    time: "9aM - 11aM",
  },
  {
    name: "D. M. Sharma",
    email: "dm@sharma.com",
    days: ["Mon", "Wed", "Fri"],
    time: "2pM - 4pM",
  },
  {
    name: "E. L. Singh",
    email: "el@singh.com",
    days: ["Tue", "Wed", "Thu"],
    time: "10aM - 12pM",
  },
  {
    name: "F. N. Khan",
    email: "fn@khan.com",
    days: ["Mon", "Thu", "Fri"],
    time: "3pM - 5pM",
  },
];

export default function StaffList() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {staffs.map((staff, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <StaffListCard staff={staff} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
