import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DocListCard from "./DocListCard";
import SelectInput from "../../../SelectInput/SelectInput";
import styles from "./AvailableDoctors.module.css";

const doctors = [
  {
    name: "Dr. A. K. Arya",
    speciality: "MBBS, Surgeon",
    department: "Gastrology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    name: "Dr. S. K. Choudhary",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
  {
    name: "Dr. B. K. Pandit",
    speciality: "MBBS, Surgeon",
    department: "Gastrology",
    days: ["Thu", "Fri", "Sat"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    name: "Dr. Mukharjee",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Fri", "Sat", "Sun"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    name: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    department: "Cardiology",
    days: ["Mon", "Tue", "Wed"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: true,
  },
  {
    name: "Dr. Dwarka Prasad",
    speciality: "MBBS, Surgeon",
    department: "Neurology",
    days: ["Wed", "Thu", "Fri"],
    date: "30 Jan 2023",
    time: "6pM - 7pM",
    payment: false,
  },
];

const options = ["All Departments", "Cardiology", "Gastrology", "Neurology"];

export default function AvailableDoctors() {
  const [department, setDepartment] = useState("All Departments");
  const [docs, setDocs] = useState(doctors);

  useEffect(() => {
    if (department === "All Departments") {
      setDocs(doctors);
    } else {
      const filteredData = doctors.filter(
        (appointment) => appointment.department === department
      );
      setDocs(filteredData);
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
          {docs.map((doctor, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <DocListCard doctor={doctor} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
