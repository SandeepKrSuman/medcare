import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Page404 from "./components/Page404/Page404";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PatientDash from "./components/Dashboard/Patient/Patinet";
import DoctorDash from "./components/Dashboard/Doctor/Doctor";
import StaffDash from "./components/Dashboard/Staff/Staff";
import AdminDash from "./components/Dashboard/Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/dashboard/patient" exact element={<PatientDash />} />
        <Route path="/dashboard/doctor" exact element={<DoctorDash />} />
        <Route path="/dashboard/staff" exact element={<StaffDash />} />
        <Route path="/dashboard/admin" exact element={<AdminDash />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
