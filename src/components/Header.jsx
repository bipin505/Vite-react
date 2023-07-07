import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userAuthcontext";
const Header = () => {
  const { user, logOut } = useUserContext();
  const navigate = useNavigate();

  const signout = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <header style={headerStyle}>
      <div className="logo">LOGO</div>
      <div className="buttons">
       
        {user && user.email ? (
            <>
            <span>{`hi, ${user.email}`}</span>
          <button className="log-out" style={buttonStyle} onClick={signout}>
            LogOut
          </button>
          </>
        ): (
            <button className="sign-in" style={buttonStyle}>
            <Link to="/">Sign In</Link>
          </button>
        )}
        <button className="sign-up" style={buttonStyle}>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </header>
  );
};

// CSS styles
const headerStyle = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
};

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  margin: "0 4px",
  cursor: "pointer",
};

export default Header;
