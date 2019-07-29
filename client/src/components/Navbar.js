import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Cards from "./Cards";
import Team from "./Team";

function Navbar() {
  return (
    <Router>
      <nav>
        <h1>Clout</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/team/">Team</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/projects/" component={Cards} />
      <Route path="/team/" component={Team} />
    </Router>
  );
}

export default Navbar;
