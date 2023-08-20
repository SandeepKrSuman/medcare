import React, { useEffect, useState } from "react";
import styles from "./MyAppointments.module.css";
import AppointmentCard from "./AppointmentCard";
import { Alert, Grid, Tab, Tabs } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import jwt_decode from "jwt-decode";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

export default function MyAppointments() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [apmts, setApmts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [unavailableMsg, setUnavailableMsg] = useState(null);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setLoader(true);
        setUnavailableMsg(null);
        const uid = jwt_decode(localStorage.getItem("accessToken")).uid;
        const res = await api.myAppointments({ patid: uid });
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
        } else {
          setLoader(false);
          setAppointments(res.data);
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg);
        console.log(error);
        if (error.response.status === 404) {
          setUnavailableMsg("** You have not made an appointment yet **");
        }
      }
    }
    fetchAppointments();
  }, [setLoader, setAlert, setAlertMsg]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    setUnavailableMsg(null);

    if (selectedTab === 0) {
      const apt = appointments.filter(
        (appointment) =>
          !appointment.cancel && appointment.payment && !appointment.completed
      );
      setApmts(apt);
      appointments.length > 0 &&
        apt.length === 0 &&
        setUnavailableMsg("** No Upcomig Appointment **");
    } else if (selectedTab === 1) {
      const apt = appointments.filter(
        (appointment) => !appointment.cancel && !appointment.payment
      );
      setApmts(apt);
      appointments.length > 0 &&
        apt.length === 0 &&
        setUnavailableMsg("** No Pending Appointment **");
    } else if (selectedTab === 2) {
      const apt = appointments.filter((appointment) => appointment.completed);
      setApmts(apt);
      appointments.length > 0 &&
        apt.length === 0 &&
        setUnavailableMsg("** Completed Appointments appear here **");
    } else if (selectedTab === 3) {
      const apt = appointments.filter((appointment) => appointment.cancel);
      setApmts(apt);
      appointments.length > 0 &&
        apt.length === 0 &&
        setUnavailableMsg("** Cancelled Appointments appear here **");
    }
  }, [selectedTab, appointments]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.filterContainer}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Confirmed" />
          <Tab label="Pending" />
          <Tab label="Completed" />
          <Tab label="Cancelled" />
        </Tabs>
      </div>
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {apmts.map((appointment, index) => (
            <Grid key={index} item xs={12}>
              <AppointmentCard appointment={appointment} />
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
