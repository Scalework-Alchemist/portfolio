import React from "react";
import "./helloWorld.css"
//HelloWorld
const helloStyle = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center"
};


export const Helloworld = () => (
  <div 
  className="HelloWorld"
  style={helloStyle}>
    <div className="group">
      <div style={{display:"inline"}}>
        <h1 className="left"></h1>
      </div>
      <div style={{display:"inline"}} >
        <h1 style={{display:"inline", margin: "0" }} className="center"></h1>
      </div>
      <div style={{display:"inline"}}>
        <h1 className="right"></h1>
      </div>
    </div>
  </div>
);



