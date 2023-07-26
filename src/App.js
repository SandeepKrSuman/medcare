import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Page404 from "./components/Page404/Page404";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
