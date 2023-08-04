import React, { useState } from "react";
import styles from "./AddNew.module.css";
import Navbar from "../../../Navbar/Navbar";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AddNew() {
  const [userType, setUserType] = useState("doctor");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("demo@email.com");
  const [workDays, setWorkDays] = useState([]);
  const [department, setDepartment] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [fee, setFee] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userType, fullName, email, department, speciality, fee);
    console.log(workDays);
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
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Full Name ..."
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className={styles.rrow}>
            <div className={styles.col25}>
              <label htmlFor="workdays">Work Days</label>
            </div>
            <div className={styles.col75}>
              <div className={styles.checkboxContainer}>
                {days.map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
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
          {userType === "doctor" && (
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
