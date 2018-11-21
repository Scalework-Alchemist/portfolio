import React from "react";
import "./checkBoard.css";
import Button from '@material-ui/core/Button/'

const checkerWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw"
};


export const CheckerBoard = (props) => (
  <div className="CheckerBoardWrapper" style={checkerWrapperStyle}>
    <div className="fiveByFive">
      <div className="a1 box" onClick={() => props.history.push("/About")}>
        <h1>About</h1>
      </div>
      <div className="a2 front box ">
        <h1>Contact</h1>
      </div>
      <div className="a3 box" onClick={()=> window.location = "https://github.com/Scalework-Alchemist"}>
        <h1>GitHub</h1>
      </div>

      <div className="b1 box">
        <h1>Resume</h1>
      </div>
      <div className="b2 box">
        <h1>Project 2</h1>
      </div>
      <div className="b3 box">
        <h1>Project 3</h1>
      </div>

      <div className="c1 box">
        <h1>Project 4</h1>
      </div>
      <div className="c2 box">
        <h1>Project 5</h1>
      </div>
      <div className="c3 box">
        <h1>Project 6</h1>
      </div>
    </div>
  </div>
);
