import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "Book Appointment", redirect: "/" },
  { title: "Cancel Appointment", redirect: "/" },
  { title: "Make Payment", redirect: "/" },
  { title: "Available Doctors", redirect: "/" },
];

export default function StaffDash() {
  return <Dashboard tabs={tabs} />;
}
