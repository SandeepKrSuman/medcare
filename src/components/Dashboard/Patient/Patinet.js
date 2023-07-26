import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "View Location", redirect: "/" },
  { title: "My Appointments", redirect: "/" },
  { title: "Book Appointment", redirect: "/" },
  { title: "Make Payment", redirect: "/" },
  { title: "Prescriptions", redirect: "/" },
  { title: "Feedback", redirect: "/" },
];

export default function PatientDash() {
  return <Dashboard tabs={tabs} />;
}
