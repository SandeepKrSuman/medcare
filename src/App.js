import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Page404 from "./components/Page404/Page404";

import PatientDash from "./components/Dashboard/Patient/Patinet";
import {
  BookAppointment,
  Feedbacks,
  MakePayment,
  MyAppointments,
  Prescriptions,
  ViewLocation,
} from "./components/Dashboard/Patient/PatientTabs";

import DoctorDash from "./components/Dashboard/Doctor/Doctor";
import {
  DocAppointments,
  FeedbacksDoc,
  UploadPrescription,
} from "./components/Dashboard/Doctor/DoctorTabs";

import StaffDash from "./components/Dashboard/Staff/Staff";
import {
  AvailableDoctors,
  BookAppointmentStaff,
  CancelAppointment,
  MakePaymentStaff,
} from "./components/Dashboard/Staff/StaffTabs";

import AdminDash from "./components/Dashboard/Admin/Admin";
import {
  DocList,
  ViewFeedbacks,
  GenerateStats,
  StaffList,
  VerifyUser,
  AddNew,
} from "./components/Dashboard/Admin/AdminTabs";

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
        <Route
          path="/dashboard/doctor/feedbacks"
          exact
          element={<FeedbacksDoc />}
        />
        <Route
          path="/dashboard/doctor/appointments"
          exact
          element={<DocAppointments />}
        />
        <Route
          path="/dashboard/doctor/upload-prescription"
          exact
          element={<UploadPrescription />}
        />

        {/* Staff Dashboard */}
        <Route path="/dashboard/staff" exact element={<StaffDash />} />
        <Route
          path="/dashboard/staff/available-doctors"
          exact
          element={<AvailableDoctors />}
        />
        <Route
          path="/dashboard/staff/book-appointment"
          exact
          element={<BookAppointmentStaff />}
        />
        <Route
          path="/dashboard/staff/cancel-appointment"
          exact
          element={<CancelAppointment />}
        />
        <Route
          path="/dashboard/staff/make-payment"
          exact
          element={<MakePaymentStaff />}
        />

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
        <Route
          path="/dashboard/admin/verify-user"
          exact
          element={<VerifyUser />}
        />
        <Route
          path="/dashboard/admin/verify-user/addnew"
          exact
          element={<AddNew />}
        />

        {/* Unknown Routes */}
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
