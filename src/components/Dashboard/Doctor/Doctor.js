import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "Appointments", redirect: "/dashboard/doctor/appointments" },
  {
    title: "Upload Prescription",
    redirect: "/dashboard/doctor/upload-prescription",
  },
  { title: "Feedbacks", redirect: "/dashboard/doctor/feedbacks" },
];

export default function DoctorDash() {
  return <Dashboard tabs={tabs} />;
}
