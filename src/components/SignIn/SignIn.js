import React, { useState } from "react";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles.container}>
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
  );
}
