import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import DocListCard from "./DocListCard";
import SelectInput from "../../../SelectInput/SelectInput";
import styles from "./DocList.module.css";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

const options = ["All Departments", "Cardiology", "Gastrology", "Neurology"];

export default function DocList() {
  const { setLoader } = useAuth();
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
          alert(res.data.errorMsg);
        } else {
          setLoader(false);
          setDocs(res.data);
        }
      } catch (error) {
        setLoader(false);
        alert(error?.response?.data?.errorMsg || "An Error Occured!");
        console.error(error);
      }
    }

    fetchDocs();
  }, [setLoader]);

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
          options={options}
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
