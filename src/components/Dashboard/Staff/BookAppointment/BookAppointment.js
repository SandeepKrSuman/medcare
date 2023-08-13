import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import BookingCard from "./BookingCard";
import styles from "./BookAppointment.module.css";
import DateSelector from "../../../DateSelector/DateSelector";
import SelectInput from "../../../SelectInput/SelectInput";
import api from "../../../../api";

const options = ["All Departments", "Cardiology", "Gastrology", "Neurology"];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getWeekDay = (dt) => weekdays[dt.getDay()];

export default function BookAppointment(props) {
  const [currDate, setCurrDate] = useState(new Date());
  const [department, setDepartment] = useState("All Departments");
  const [docs, setDocs] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const res = await api.docList();
        if (res.data.error) {
          alert(res.data.errorMsg);
        } else {
          setDocs(res.data);
        }
      } catch (error) {
        alert(error?.response?.data?.errorMsg || "An Error Occured!");
        console.error(error);
      }
    }

    fetchDocs();
  }, []);

  useEffect(() => {
    if (department === "All Departments") {
      const filteredData = docs.filter((doc) =>
        doc.workDays.includes(getWeekDay(currDate))
      );
      setDoctors(filteredData);
    } else {
      const filteredData = docs.filter(
        (doc) =>
          doc.workDays.includes(getWeekDay(currDate)) &&
          doc.department === department
      );
      setDoctors(filteredData);
    }
  }, [department, currDate, docs]);

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
        <DateSelector currDate={currDate} setCurrDate={setCurrDate} />
      </div>
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {doctors.map((doctor, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <BookingCard
                doctor={doctor}
                aptDate={currDate}
                patid={props.patid}
                patname={props.patname}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
