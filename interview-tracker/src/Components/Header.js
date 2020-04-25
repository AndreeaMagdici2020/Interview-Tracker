import React from "react";
import network from "./network.png";
const Header = () => {
  return (
    <div className="Div1">
      <div className="topDiv">
        <img className="logo" src={network}></img>
        <button className="LogIn">Log In</button>
        <p className="title">Interview Tracker</p>
        <div className="Header"></div>
      </div>
    </div>
  );
};

export default Header;
