import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useAuth } from "../../AuthContext";
import api from "../../api";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const userName = token ? jwt_decode(token)?.name : null;
  const { setUserType, setLoader, setAlert, setAlertMsg } = useAuth();

  const handleLogOut = async () => {
    try {
      setLoader(true);
      const refreshToken = localStorage.getItem("refreshToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      await api.logout({ data: { refreshToken } });
      setLoader(false);
      setUserType(null);
      navigate("/");
    } catch (error) {
      setLoader(false);
      setAlertMsg(error?.response?.data?.error || "An Error Occured!");
      setAlert(true);
      console.error(error);
    }
  };

  return (
    <div className={styles.appBar}>
      <p className={styles.userName}>
        {userName ? `Hello, ${userName}` : "Welcome!"}
      </p>
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
