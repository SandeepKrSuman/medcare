import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DocListCard from "./DocListCard";
import SelectInput from "../../../SelectInput/SelectInput";
import styles from "./DocList.module.css";
import api from "../../../../api";
import { departments } from "../../Doctor/doctorDepartments";
import { useAuth } from "../../../../AuthContext";

export default function DocList() {
  const { setLoader, setAlert, setAlertMsg } = useAuth();
  const [department, setDepartment] = useState("All Departments");
  const [docs, setDocs] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      try {
        setLoader(true);
        const res = await api.docList();
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setDocs(res.data);
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
        setAlert(true);
        console.error(error);
      }
    }

    fetchDocs();
  }, [setLoader, setAlert, setAlertMsg]);

  useEffect(() => {
    if (department === "All Departments") {
      setDoctors(docs);
    } else {
      const filteredData = docs.filter((doc) => doc.department === department);
      setDoctors(filteredData);
    }
  }, [department, docs]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.filterContainer}>
        <SelectInput
          label=""
          value={department}
          setValue={setDepartment}
          options={departments}
        />
      </div>
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {doctors.map((doctor, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <DocListCard doctor={doctor} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
