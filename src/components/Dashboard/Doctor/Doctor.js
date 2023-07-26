import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "Appointments", redirect: "/" },
  { title: "Upload Prescription", redirect: "/" },
  { title: "Take a Leave", redirect: "/" },
  { title: "Feedbacks", redirect: "/" },
];

export default function DoctorDash() {
  return <Dashboard tabs={tabs} />;
}
