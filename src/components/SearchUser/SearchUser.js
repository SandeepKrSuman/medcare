import React, { useState } from "react";
import styles from "./SearchUser.module.css";
import Navbar from "../Navbar/Navbar";
import { Box, Button, Stack, TextField } from "@mui/material";
import api from "../../api";
import { useAuth } from "../../AuthContext";

export default function SearchUser(props) {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      const res = await api.findPatient({ email });
      if (res.data.error) {
        setLoader(false);
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        props.setPatid(res.data.uid);
        props.setPatname(`${res.data.fname} ${res.data.lname}`);
        setLoader(false);
        props.setUserFound(true);
      }
    } catch (error) {
      setLoader(false);
      setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
      setAlert(true);
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
