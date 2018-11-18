import React from "react";
import "./helloWorld.css";
//HelloWorld
const helloStyle = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center"
};

export const Helloworld = props => (
  <div className="HelloWorld" style={helloStyle}>
    <div className="group" onClick={() => props.history.push("/Portfolio")}>
      <div style={{ display: "inline" }}>
        <h1 className="left" />
      </div>
      <div style={{ display: "inline" }}>
        <h1 style={{ display: "inline", margin: "0" }} className="center" />
      </div>
      <div style={{ display: "inline" }}>
        <h1 className="right" />
      </div>
    </div>
  </div>
);
