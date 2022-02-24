import React from "react";
import Survey from "./Survey";

export default function Simulation() {
  return (
    <div className="row">
      <div className="col-8">
        <iframe
          title="simulation"
          style={{width:"100%", height:"100vh", border: "0" }}
          src="https://infallible-kowalevski-3aad64.netlify.app/"
        >
          {" "}
        </iframe>
      </div>
      <div className="col-4">
        <Survey />
      </div>
    </div>
  );
}
