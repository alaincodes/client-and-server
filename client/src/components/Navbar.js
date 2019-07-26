import React from "react";
import "./Navbar.scss";

function Navbar() {
  function handleClick(e) {
    e.preventDefault();
    console.log("clickclickcck");
  }

  return (
    <nav>
      <h1>Clout</h1>
      <ul>
        <li>
          <a href="#" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
