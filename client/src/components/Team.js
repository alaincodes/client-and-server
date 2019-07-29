import React from "react";
import "./Team.scss";
import azamat from "../assets/azamat-zhanisov-wO4gtmdlW5Y-unsplash.jpg";
import ethan from "../assets/ethan-haddox-NTjSR3zYpsY-unsplash.jpg";
import jack from "../assets/jack-finnigan-rriAI0nhcbc-unsplash.jpg";

function Team() {
  return (
    <section className="team-section">
      <h1 className="team-title">Hello Team.</h1>
      <div className="team-grid">
        <div className="team-grid-card">
          <h3 className="team-jobs">Azamat - Frontend</h3>
          <img className="team-img" src={azamat} alt="" />
          <p className="team-desc">Literally, La vie en rose.</p>
        </div>
        <div className="team-grid-card">
          <h3 className="team-jobs">Ethan - UX/UI Design</h3>
          <img className="team-img" src={ethan} alt="" />
          <p className="team-desc">Studied on the Moon! Can you believe ??</p>
        </div>
        <div className="team-grid-card">
          <h3 className="team-jobs">Jack - Marketing</h3>
          <img className="team-img" src={jack} alt="" />
          <p className="team-desc">Can sell spaceships..</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
