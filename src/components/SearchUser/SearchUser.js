import React, { useState } from "react";
import styles from "./SearchUser.module.css";
import Navbar from "../Navbar/Navbar";
import { Button, Stack, TextField } from "@mui/material";

export default function SearchUser(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUserFound(true);
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.subContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Stack spacing={0} direction="row">
            <TextField
              id="outlined-basic"
              label="Patient's Email Id"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
              autoComplete="off"
              required
              sx={{ width: "90%" }}
            />
            <Button type="submit" variant="outlined">
              Search
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}
