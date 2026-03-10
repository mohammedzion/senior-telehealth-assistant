import React from "react";
import Navbar from "../components/Navbar";
import AppointmentCard from "../components/AppointmentCard";

function Appointment() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h2>Your Appointment</h2>

        <AppointmentCard
          doctor="Dr. Smith"
          date="Tomorrow"
          time="10:00 AM"
        />
      </div>
    </div>
  );
}

export default Appointment;