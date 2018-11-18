import React from "react";
import "./checkBoard.css";

const checkerWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw"
};


export const CheckerBoard = () => (
  <div className="CheckerBoardWrapper" style={checkerWrapperStyle}>
    <div className="fiveByFive">
      <div className="a1 box">
        <h1>a1</h1>
      </div>
      <div className="a2 box">
        <h1>a2</h1>
      </div>
      <div className="a3 box">
        <h1>a3</h1>
      </div>

      <div className="b1 box">
        <h1>b1</h1>
      </div>
      <div className="b2 box">
        <h1>b2</h1>
      </div>
      <div className="b3 box">
        <h1>b3</h1>
      </div>

      <div className="c1 box">
        <h1>d1</h1>
      </div>
      <div className="c2 box">
        <h1>d2</h1>
      </div>
      <div className="c3 box">
        <h1>d3</h1>
      </div>
    </div>
  </div>
);
