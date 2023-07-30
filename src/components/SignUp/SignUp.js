import React, { useState } from "react";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import SelectInput from "../SelectInput/SelectInput";

const options = ["Patient", "Staff", "Doctor"];

export default function SignUp() {
  const [user, setUser] = useState("Patient");
  const [department, setDepartment] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    speciality && console.log(speciality);
    console.log(fname, " ", lname);
    console.log(email);
    console.log(password);

    setUser("patient");
    setSpeciality("");
    setFname("");
    setLname("");
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
          Sign Up
        </Typography>

        {/* User Type Field */}
        <SelectInput
          label="User Type"
          value={user}
          setValue={setUser}
          options={options}
        />

        {user === "Doctor" && (
          <TextField
            name="department"
            required
            fullWidth
            id="department"
            label="Department"
            sx={{ marginBottom: "10px" }}
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          />
        )}

        {user === "Doctor" && (
          <TextField
            name="speciality"
            required
            fullWidth
            id="speciality"
            label="Speciality"
            sx={{ marginBottom: "10px" }}
            value={speciality}
            onChange={(event) => setSpeciality(event.target.value)}
          />
        )}

        {/* Name Fields */}
        <Box component="div" className={styles.nameContainer}>
          <TextField
            className={styles.nameInput}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={fname}
            autoFocus
            onChange={(event) => setFname(event.target.value)}
          />
          <TextField
            className={styles.nameInput}
            autoComplete="given-name"
            name="LastName"
            required
            fullWidth
            id="LastName"
            label="Last Name"
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
        </Box>

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
          Sign Up
        </Button>

        <Link to="/signin" className={styles.linkBtn}>
          {"Already have an account? Sign In"}
        </Link>
      </Box>
    </div>
  );
}
