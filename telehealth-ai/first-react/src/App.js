import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Exercise from "./pages/Exercise";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route path="/appointment" element={<Appointment />} />

      <Route path="/exercise" element={<Exercise />} />

      <Route path="/report" element={<Report />} />

    </Routes>
  );
}

export default App;