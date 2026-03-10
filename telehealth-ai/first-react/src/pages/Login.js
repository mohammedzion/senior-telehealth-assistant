import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Login button clicked");

  try {
    const data = await loginUser(email, password);

    console.log("Response:", data);

    localStorage.setItem("token", data.token);

    navigate("/home");

  } catch (error) {
    console.log(error);
    alert("Login failed");
  }
};

  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  };

  const boxStyle = {
    border: "3px solid black",
    padding: "40px",
    borderRadius: "15px",
    backgroundColor: "white",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  };

  const inputStyle = {
    width: "90%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid gray"
  };

  const buttonStyle = {
    width: "95%",
    padding: "12px",
    fontSize: "18px",
    marginTop: "10px",
    backgroundColor: "#6a3cff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h2>Patient Login</h2>

        <form onSubmit={handleLogin}>

          <input
            style={inputStyle}
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={inputStyle}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={buttonStyle} type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;