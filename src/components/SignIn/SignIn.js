import React, { useState } from "react";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import api from "../../api";
import { useAuth } from "../../AuthContext";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const { setUserType, setLoader, setAlert, setAlertMsg } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = { email, password };

    try {
      setLoader(true);
      const res = await api.signin(postData);

      if (res.data.error) {
        setLoader(false);
        setPassword("");
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        setLoader(false);
        setEmail("");
        setPassword("");
        const loggedUser = res.data.userType;
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setUserType(loggedUser);
      }
    } catch (error) {
      setLoader(false);
      setPassword("");
      setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
      setAlert(true);
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <Box
          component="form"
          className={styles.form}
          validate="true"
          onSubmit={handleSubmit}
        >
          <Avatar
            alt="auth logo"
            src="/authimg.png"
            sx={{ width: 100, height: 100 }}
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* Email Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Link to="/signup" className={styles.linkBtn}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </div>
      <div className={styles.col2}>
        <img src="/medicine.svg" alt="doctor" draggable="false" />
      </div>
    </div>
  );
}
