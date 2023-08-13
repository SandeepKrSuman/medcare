import React, { useState } from "react";
import styles from "./SearchUser.module.css";
import Navbar from "../Navbar/Navbar";
import { Box, Button, Stack, TextField } from "@mui/material";
import api from "../../api";

export default function SearchUser(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await api.findPatient({ email });
      if (res.data.error) {
        alert(res.data.errorMsg);
      } else {
        props.setPatid(res.data.uid);
        props.setPatname(`${res.data.fname} ${res.data.lname}`);
        props.setUserFound(true);
      }
    } catch (error) {
      alert(error?.response?.data?.errorMsg || "An Error Occured!");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.tabHeading}>
        <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
          {props.heading}
        </Box>
      </div>
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
