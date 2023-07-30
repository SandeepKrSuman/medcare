import React from "react";
import Dashboard from "../Dashboard";

const tabs = [
  { title: "List of Doctors", redirect: "/dashboard/admin/doc-list" },
  { title: "List of Staffs", redirect: "/dashboard/admin/staff-list" },
  { title: "Generate Stats", redirect: "/dashboard/admin/generate-stats" },
  { title: "Verify User", redirect: "/dashboard/admin/verify-user" },
  { title: "Feedbacks", redirect: "/dashboard/admin/feedbacks" },
];

export default function AdminDash() {
  return <Dashboard tabs={tabs} />;
}
