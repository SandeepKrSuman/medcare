import React from "react";
import styles from "./Page404.module.css";

export default function Page404() {
  return (
    <div className={styles.container}>
      <span className={styles.first}>404</span>
      <span className={styles.second}>This page could not be found.</span>
    </div>
  );
}
