import React from "react";

import "./Navbar.css";

function Navbar({ score }) {
  return (
    <div className="container_navbar">
      <div className="container_navbar_text">
        <span>rock</span>
        <span>paper</span>
        <span>scissors</span>
      </div>
      <div className="container_navbar_box">
        <div className="container_navbar_score">
          <p className="score">score</p>
          <div className="container_navbar_number">
            <p className="number">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
