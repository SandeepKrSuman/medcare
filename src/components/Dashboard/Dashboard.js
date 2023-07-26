import React from "react";
import Navbar from "../Navbar/Navbar";
import DashTabs from "../DashTabs/DashTabs";
import styles from "./Dashboard.module.css";

export default function Dashboard({ tabs }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <DashTabs tabs={tabs} />
    </div>
  );
}
