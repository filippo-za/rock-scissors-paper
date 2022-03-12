import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import Triangle from "../../images/bg-triangle.svg";

function Home({ setMyChoice }) {
  const choice = (e) => {
    setMyChoice(e.target.dataset.name);
  };
  return (
    <div className="container_home">
      <img className="img_triangle" src={Triangle} alt=""></img>
      <div className="choice">
        <Link to="/match">
          <div
            onClick={choice}
            data-name="paper"
            className="icon choice_paper"
          ></div>
        </Link>
        <Link to="/match">
          <div
            onClick={choice}
            data-name="scissors"
            className="icon choice_scissors"
          ></div>
        </Link>
        <Link to="/match">
          <div
            onClick={choice}
            data-name="rock"
            className="icon choice_rock"
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
