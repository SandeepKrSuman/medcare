import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "View Location", redirect: "/dashboard/patient/view-location" },
  {
    title: "Book Appointment",
    redirect: "/dashboard/patient/book-appointment",
  },
  { title: "Make Payment", redirect: "/dashboard/patient/make-payment" },
  { title: "My Appointments", redirect: "/dashboard/patient/my-appointments" },
  { title: "Prescriptions", redirect: "/dashboard/patient/prescriptions" },
  { title: "Feedbacks", redirect: "/dashboard/patient/feedbacks" },
];

export default function PatientDash() {
  return <Dashboard tabs={tabs} />;
}
