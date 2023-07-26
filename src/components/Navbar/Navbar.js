import React from "react";
import { Logout } from "@mui/icons-material";
import styles from "./Navbar.module.css";
import { Avatar, IconButton, Tooltip } from "@mui/material";

export default function Navbar() {
  const handleLogOut = () => {
    console.log("Logout!");
  };

  return (
    <div className={styles.appBar}>
      <p className={styles.userName}>Hi, Userxyz</p>
      <Tooltip title="Log Out">
        <IconButton onClick={handleLogOut} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "#fb4a59" }}>
            <Logout />
          </Avatar>
        </IconButton>
      </Tooltip>
    </div>
  );
}
