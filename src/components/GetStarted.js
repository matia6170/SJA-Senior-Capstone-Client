import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div>
      <div className="container">
        <h1 className="display-4">Let's get started!</h1>
        <hr />
        <p className="lead">
          I created this project to bring awareness to students about the
          importance of following government guidelines for COVID-19 using
          simulation
        </p>
        <p className="lead">
          In this simulation you will be in control of a small society where you
          will have the power to control different parameters or policy(Mask
          on/off, limiting social gatherings, vaccination, etc...)
        </p>
        <p className="lead">You can play the simulation as long as you want.</p>
        <p className="lead">
          There is a very short survey next to the simulation which you are
          required submit after the simulation.
        </p>
        <Link
          to="/simulation"
          className="btn btn-outline-primary btn-lg btn-block"
        >
          <b>START</b>
        </Link>
        <br />
      </div>
    </div>
  );
}
