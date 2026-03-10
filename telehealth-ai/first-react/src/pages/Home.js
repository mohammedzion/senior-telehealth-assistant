import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import VoiceAssistant from "../components/VoiceAssistant";

function Home() {

  const navigate = useNavigate();

  // Voice welcome when page loads
useEffect(() => {
  setTimeout(() => {
    const message = new SpeechSynthesisUtterance(
      "Welcome to Senior Telehealth Assistant. How can I help you today?"
    );

    message.rate = 1;
    message.pitch = 1;
    message.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  }, 1000);
}, []);

  const containerStyle = {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "15px",
    width: "450px",
    margin: "60px auto",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  };

  const buttonStyle = {
    display: "block",
    width: "320px",
    padding: "18px",
    margin: "20px auto",
    fontSize: "18px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #43a047, #66bb6a)",
    color: "white",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "transform 0.2s"
  };

  return (
    <div>

      <Navbar />

      <div style={containerStyle}>

        <h1 style={{ color: "#2e7d32" }}>Senior Telehealth Assistant</h1>

        <button
          style={buttonStyle}
          onClick={() => navigate("/appointment")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Upcoming Appointment
        </button>

        <button
          style={buttonStyle}
          onClick={() => navigate("/exercise")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Start Exercise Session
        </button>

        <button
          style={buttonStyle}
          onClick={() => navigate("/report")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          View Progress Report
        </button>

        <VoiceAssistant />

      </div>

    </div>
  );
}

export default Home;