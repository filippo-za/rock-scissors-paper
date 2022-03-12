import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Match.css";

function Match({ score, setScore, myChoice }) {
  const [computer, setComputer] = useState([]);
  const [result, setResult] = useState("");
  const [timer, setTimer] = useState(3);

  const computerChoice = () => {
    const choice = ["rock", "scissors", "paper"];
    setComputer(choice[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    computerChoice();
  }, []);

  const match = () => {
    if (myChoice === "rock" && computer === "scissors") {
      setResult("you win!");
      setScore(score + 1);
    } else if (myChoice === "rock" && computer === "paper") {
      setResult("you lose!");
      setScore(score - 1);
    } else if (myChoice === "scissors" && computer === "paper") {
      setResult("you win!");
      setScore(score + 1);
    } else if (myChoice === "scissors" && computer == "rock") {
      setResult("you lose!");
      setScore(score - 1);
    } else if (myChoice === "paper" && computer === "scissors") {
      setResult("you win!");
      setScore(score + 1);
    } else if (myChoice === "paper" && computer === "rock") {
      setResult("you lose!");
      setScore(score - 1);
    } else {
      setResult("draw!");
    }
  };

  useEffect(() => {
    const counter =
      timer > 0
        ? setInterval(() => {
            setTimer(timer - 1);
          }, 1000)
        : match();
    return () => {
      clearInterval(counter);
    };
  }, [computer, timer]);

  return (
    <div className="container_match">
      <div className="you_picked">
        <p className="you_picked_text">you picked</p>
        <div className={`icons choices_${myChoice}`}></div>
      </div>
      <div className="container_who_win">
        <p className="result">{result}</p>
        <div className="container_btn">
          <Link to="/">
            <button className="btn">play again</button>
          </Link>
        </div>
      </div>
      <div className="computer_picked">
        <p className="computer_picked_text">computer picked</p>
        {timer === 0 ? (
          <div className={`icons choices_${computer}`}></div>
        ) : (
          <div className="timer">{timer}</div>
        )}
      </div>
    </div>
  );
}

export default Match;
