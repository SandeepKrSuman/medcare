import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DocListCard from "./DocListCard";
import SelectInput from "../../../SelectInput/SelectInput";
import styles from "./DocList.module.css";

const appointments = [
  {
    doctor: "Dr. A. K. Arya",
    speciality: "MBBS, Surgeon",
    department: "Gastrology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    doctor: "Dr. S. K. Choudhary",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    doctor: "Dr. B. K. Pandit",
    speciality: "MBBS, Surgeon",
    department: "Gastrology",
    days: ["Thu", "Fri", "Sat"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Mukharjee",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Fri", "Sat", "Sun"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    doctor: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    department: "Neurology",
    days: ["Wed", "Thu", "Fri"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
];

const options = ["All Departments", "Cardiology", "Gastrology", "Neurology"];

export default function DocList() {
  const [department, setDepartment] = useState("All Departments");
  const [apmt, setApmt] = useState(appointments);

  useEffect(() => {
    if (department === "All Departments") {
      setApmt(appointments);
    } else {
      const filteredData = appointments.filter(
        (appointment) =>
          appointment.department === department
      );
      setApmt(filteredData);
    }
  }, [department]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.filterContainer}>
        <SelectInput
          label=""
          value={department}
          setValue={setDepartment}
          options={options}
        />
      </div>
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {apmt.map((appointment, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <DocListCard appointment={appointment} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
