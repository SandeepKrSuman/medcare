import React, { useEffect, useState } from "react";
import styles from "./AddNew.module.css";
import Navbar from "../../../Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import api from "../../../../api";
import { useAuth } from "../../../../AuthContext";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AddNew() {
  const { setLoader, setAlert, setAlertMsg, setAlertType } = useAuth();
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [workDays, setWorkDays] = useState([]);
  const [time, setTime] = useState("");
  const [department, setDepartment] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [fee, setFee] = useState("");

  useEffect(() => {
    async function findUser(uid) {
      try {
        setLoader(true);
        const res = await api.findUser({ uid });
        if (res.data.error) {
          setLoader(false);
          setAlertMsg(res.data.errorMsg);
          setAlert(true);
        } else {
          setLoader(false);
          setUserType(res.data.userType || "");
          setFullName(`${res.data.fname || ""} ${res.data.lname || ""}`);
          setEmail(res.data.email || "");
          setWorkDays(res.data.workDays || []);
          setTime(res.data.time || "");
          setDepartment(res.data.department || "");
          setSpeciality(res.data.speciality || "");
          setFee(res.data.fee || "");
        }
      } catch (error) {
        setLoader(false);
        setAlertMsg(error?.response?.data?.errorMsg || "An Error Occured!");
        setAlert(true);
        console.error(error);
      }
    }
    const uid = searchParams.get("uid");
    findUser(uid);
  }, [searchParams, setLoader, setAlert, setAlertMsg]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setWorkDays((prevSelectedDays) => [...prevSelectedDays, value]);
    } else {
      setWorkDays((prevSelectedDays) =>
        prevSelectedDays.filter((day) => day !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uid = searchParams.get("uid");
    try {
      setLoader(true);
      const res = await api.verify({
        uid,
        workDays,
        time,
        department,
        speciality,
        fee,
      });
      if (res.data.error) {
        setLoader(false);
        setAlertMsg(res.data.errorMsg);
        setAlert(true);
      } else {
        setLoader(false);
        setAlertMsg(res.data.msg);
        setAlertType("success");
        setAlert(true);
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
      <div className={styles.formContainer}>
        <form className={styles.form} validate="true" onSubmit={handleSubmit}>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <label htmlFor="usertype">User Type</label>
            </div>
            <div className={styles.col75}>
              <input
                className={styles.input}
                type="text"
                id="usertype"
                name="usertype"
                value={userType}
                disabled={true}
                required
              />
            </div>
          </div>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.col75}>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                value={email}
                disabled={true}
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <label htmlFor="fullname">Full Name</label>
            </div>
            <div className={styles.col75}>
              <input
                className={styles.input}
                type="text"
                id="fullname"
                name="fullname"
                value={fullName}
                placeholder="Full Name ..."
                autoComplete="off"
                disabled={true}
                required
              />
            </div>
          </div>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <p className={styles.workdaysLabel}>Work Days</p>
            </div>
            <div className={styles.col75}>
              <div className={styles.checkboxContainer}>
                {days.map((day) => (
                  <label key={day} htmlFor={`workday-${day}`}>
                    <input
                      type="checkbox"
                      name="workday"
                      id={`workday-${day}`}
                      value={day}
                      checked={workDays.includes(day)}
                      onChange={handleCheckboxChange}
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <label htmlFor="time">Time</label>
            </div>
            <div className={styles.col75}>
              <input
                className={styles.input}
                type="text"
                id="time"
                name="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                placeholder="Time ..."
                autoComplete="off"
                required
              />
            </div>
          </div>
          {userType === "Doctor" && (
            <>
              <div className={styles.rrow}>
                <div className={styles.col25}>
                  <label htmlFor="department">Department</label>
                </div>
                <div className={styles.col75}>
                  <input
                    className={styles.input}
                    type="text"
                    id="department"
                    name="department"
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
                    placeholder="Department ..."
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className={styles.rrow}>
                <div className={styles.col25}>
                  <label htmlFor="speciality">Speciality</label>
                </div>
                <div className={styles.col75}>
                  <input
                    className={styles.input}
                    type="text"
                    id="speciality"
                    name="speciality"
                    value={speciality}
                    onChange={(event) => setSpeciality(event.target.value)}
                    placeholder="Speciality ..."
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className={styles.rrow}>
                <div className={styles.col25}>
                  <label htmlFor="fee">Fee</label>
                </div>
                <div className={styles.col75}>
                  <input
                    className={styles.input}
                    type="number"
                    id="fee"
                    name="fee"
                    value={fee}
                    onChange={(event) => setFee(event.target.value)}
                    placeholder="Appointment fee..."
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </>
          )}
          <br />
          <div className={styles.rrow}>
            <input className={styles.submit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
