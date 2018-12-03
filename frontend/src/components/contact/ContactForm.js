import React from 'react'
import Button from "@material-ui/core/Button"
import BackButton from "../about/BackButton"
         
export const ContactForm = props=> (
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
          {" "}
          <div className="sprawlContainer">
          <form >
            <h1>Contact Me</h1>
            <input
              name="firstName"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="lastName"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              name="email"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="email"
            />
          </form>
          </div>
         
        </div>
      </div>
)