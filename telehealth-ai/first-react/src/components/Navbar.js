import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div style={{
      backgroundColor: "#333",
      padding: "15px",
      display: "flex",
      justifyContent: "space-around"
    }}>

      <Link style={{color:"white"}} to="/">Home</Link>
      <Link style={{color:"white"}} to="/appointment">Appointment</Link>
      <Link style={{color:"white"}} to="/exercise">Exercise</Link>
      <Link style={{color:"white"}} to="/report">Report</Link>

    </div>
  );
}

export default Navbar;