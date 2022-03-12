import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Match from "./components/Match/Match";
import Rules from "./components/Rules/Rules";

import "./App.css";

function App() {
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const [myChoice, setMyChoice] = useState([]);
  return (
    <div className="App">
      <Navbar score={score} />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setMyChoice={setMyChoice} />
            </Route>
            <Route path="/match">
              <Match score={score} setScore={setScore} myChoice={myChoice} />
            </Route>
          </Switch>
        </Router>
        <Rules />
      </div>
    </div>
  );
}

export default App;
