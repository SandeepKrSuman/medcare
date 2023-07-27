import React from "react";
import Navbar from "../../../Navbar/Navbar";
import styles from "./ViewLocation.module.css";

const googleMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231270952!2d88.2649510485971!3d22.53540637455742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690443338352!5m2!1sen!2sin";

export default function ViewLocation() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.frameContainer}>
        <p>{"**This map is for indicative purposes only**"}</p>
        <iframe
          className={styles.frame}
          src={googleMapUrl}
          title="Hospital Location"
          width={300}
          height={500}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
