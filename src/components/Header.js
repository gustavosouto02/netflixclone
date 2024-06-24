import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import user from "../assets/userImg.jpg";

const Black = ({black}) => {
  return (
      <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img src={logo} alt="logo-netflix" />
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img src={user} alt="user-netflix" />
          </a>
        </div>
      </header>
  );
};

export default Black;
