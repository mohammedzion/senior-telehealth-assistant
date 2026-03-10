import React from "react";

function AppointmentCard({ doctor, date, time }) {
  const cardStyle = {
    padding: "20px",
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    width: "300px",
    marginTop: "20px"
  };

  const buttonStyle = {
    padding: "10px 15px",
    marginTop: "10px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px"
  };

  return (
    <div style={cardStyle}>
      <h3>{doctor}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>

      <button
        style={buttonStyle}
        onClick={() => window.open("https://meet.google.com/", "_blank")}
      >
        Join Appointment
      </button>
    </div>
  );
}

export default AppointmentCard;