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
import ViewLocation from "./components/Dashboard/Patient/ViewLocation/ViewLocation";
import MakePayment from "./components/Dashboard/Patient/MakePayment/MakePayment";
import BookAppointment from "./components/Dashboard/Patient/BookAppointment/BookAppointment";
import MyAppointments from "./components/Dashboard/Patient/MyAppointments/MyAppointments";
import Prescriptions from "./components/Dashboard/Patient/Prescriptions/Prescriptions";
import Feedbacks from "./components/Dashboard/Patient/Feedbacks/Feedbacks";
import DocList from "./components/Dashboard/Admin/DocList/DocList";
import StaffList from "./components/Dashboard/Admin/StaffList/StaffList";
import GenerateStats from "./components/Dashboard/Admin/GenerateStats/GenerateStats";
import ViewFeedbacks from "./components/Dashboard/Admin/Feedbacks/ViewFeedbacks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signUp" exact element={<SignUp />} />

        {/* Patient Dashboard */}
        <Route path="/dashboard/patient" exact element={<PatientDash />} />
        <Route
          path="/dashboard/patient/view-location"
          exact
          element={<ViewLocation />}
        />
        <Route
          path="/dashboard/patient/book-appointment"
          exact
          element={<BookAppointment />}
        />
        <Route
          path="/dashboard/patient/make-payment"
          exact
          element={<MakePayment />}
        />
        <Route
          path="/dashboard/patient/my-appointments"
          exact
          element={<MyAppointments />}
        />
        <Route
          path="/dashboard/patient/prescriptions"
          exact
          element={<Prescriptions />}
        />
        <Route
          path="/dashboard/patient/feedbacks"
          exact
          element={<Feedbacks />}
        />

        {/* Doctor Dashboard */}
        <Route path="/dashboard/doctor" exact element={<DoctorDash />} />

        {/* Staff Dashboard */}
        <Route path="/dashboard/staff" exact element={<StaffDash />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard/admin" exact element={<AdminDash />} />
        <Route path="/dashboard/admin/doc-list" exact element={<DocList />} />
        <Route
          path="/dashboard/admin/staff-list"
          exact
          element={<StaffList />}
        />
        <Route
          path="/dashboard/admin/generate-stats"
          exact
          element={<GenerateStats />}
        />
        <Route
          path="/dashboard/admin/feedbacks"
          exact
          element={<ViewFeedbacks />}
        />

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
