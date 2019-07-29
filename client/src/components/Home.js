import React from "react";
import "./Home.scss";
import dreamImg from "../assets/undraw_dreamer_gxxi.svg";

function Home() {
  return (
    <main>
      <div className="home-text">
        <h1>
          Your Idea. <br /> Our Creation. <br /> Meet our talented team. <br />{" "}
          And build your dream digital products.
        </h1>
        <p>Want to talk about a project ?</p>
        <button>Contact Us</button>
      </div>
      <img className="main-img" src={dreamImg} alt="" />
    </main>
  );
}

export default Home;
