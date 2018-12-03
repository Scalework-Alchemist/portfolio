import React from "react";
import "./about.css";
import BackButton from "./BackButton";
import Button from "@material-ui/core/Button/";

export const About = props => (
  <div className="bodyWrapperStyle">
    <div
      className="leftPane"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.863)" }}
    >
      <div className="text">
        <div className="animate">
          <h1 style={{ color: "white", fontSize: "3rem", paddingLeft: "30px" }}>
            Michel
          </h1>
        </div>
      </div>
      <div className="text">
        <div className="animate">
          <h1 style={{ color: "white", fontSize: "3rem", paddingLeft: "30px" }}>
            Ferrer
          </h1>
        </div>
      </div>
      <Button onClick={() => props.history.push("/Portfolio")}>
        <BackButton
          style={{ onHover: "text-shadow: 2px 6px 8px rgba(255, 0, 0, 0.438)" }}
        />
      </Button>
    </div>
    <div className="rightPane">
      <div className="sprawlContainer">
        <div className="headerText">
          <h1 style={{ color: "red", padding: "80px" }}> Hello friend, </h1>
        </div>
        <div className="bodyText">
          <h2>
            Im a Full-Stack Web Developer.
          </h2>
          <h3>
            I have spent the last 10 years honing my skills as a technologist. I
            have picked up a wide array of disciplines, ranging from military
            equipment to automation solutions. I enjoy challenges dealing with
            customer interactions, i want to be part of a team who is closing
            the gap between the digital space to bring tangible solutions.
          </h3>

          <h2>Solve et Coagula</h2>
          <h3>
            Disassmble to its simplelist state, its atomic form and rebuild. In
            princible this is how the modern web is built. Simple components
            that have one purpose and are easily adabtable and scalable. 
          </h3>
        </div>
      </div>
    </div>
  </div>
);
