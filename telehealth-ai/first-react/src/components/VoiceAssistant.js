import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VoiceAssistant() {
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Voice recognition started");
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

      console.log("Voice command:", transcript);

      if (transcript.includes("appointment")) {
        navigate("/appointment");
      } else if (transcript.includes("exercise")) {
        navigate("/exercise");
      } else if (transcript.includes("report")) {
        navigate("/report");
      } else if (transcript.includes("home")) {
        navigate("/home");
      }
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      recognition.start(); // restart automatically
    };

    recognition.start();
  }, [navigate]);

  return (
    <div style={{ marginTop: "20px", color: "green" }}>
      🎤 Voice Assistant Listening...
    </div>
  );
}

export default VoiceAssistant;