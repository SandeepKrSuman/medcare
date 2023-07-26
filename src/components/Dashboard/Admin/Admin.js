import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "List of Doctors", redirect: "/" },
  { title: "List of Staffs", redirect: "/" },
  { title: "Generate Stats", redirect: "/" },
  { title: "Verify User", redirect: "/" },
  { title: "Feedbacks", redirect: "/" },
];

export default function AdminDash() {
  return <Dashboard tabs={tabs} />;
}
