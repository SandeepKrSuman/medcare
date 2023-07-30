import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "Book Appointment", redirect: "/dashboard/staff/book-appointment" },
  {
    title: "Cancel Appointment",
    redirect: "/dashboard/staff/cancel-appointment",
  },
  { title: "Make Payment", redirect: "/dashboard/staff/make-payment" },
  {
    title: "Available Doctors",
    redirect: "/dashboard/staff/available-doctors",
  },
];

export default function StaffDash() {
  return <Dashboard tabs={tabs} />;
}
