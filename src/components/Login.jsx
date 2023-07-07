import React, { useState } from "react";
import { useUserContext } from "../contexts/userAuthcontext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user } = useUserContext();
  const navigate = useNavigate();
  console.log(user);

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setEmail('');
      setPassword('');
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={headingStyle}>Login</h2>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={buttonStyle} onClick={signInUser}>
          Sign In
        </button>
      </form>
    </div>
  );
};

// CSS styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "black",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "4px",
};

const headingStyle = {
  marginBottom: "20px",
  color: "black",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "15px",
};

const labelStyle = {
  marginBottom: "5px",
  color: "black",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid black",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
};

export default Login;
