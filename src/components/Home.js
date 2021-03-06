import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

//
//style={{ width: "100%", height: "100vh" }}

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <div className="home">
            <h1 className="display-3">CoSim</h1>
            <hr />
            <p className="lead">A Covid Simulation</p>
            <Link to="/getstarted" className="btn btn-outline-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
