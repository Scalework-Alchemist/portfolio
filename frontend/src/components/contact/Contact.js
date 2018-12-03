import React, { Component } from "react";
import "./contact.css";
import Button from "@material-ui/core/Button";
import BackButton from "../about/BackButton";
import TextField from "@material-ui/core/TextField"


export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      name: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .addCart(this.state)
      .then(response => {
        this.clearInputs();
      })
      .catch(err => console.error(err.response.data.message));
  };
  render() {
    return (
      <div className="bodyWrapperStyle">
        <div
          className="leftPane"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.863)" }}
        >
          <Button onClick={() => this.props.history.push("/Portfolio")}>
            <BackButton
              style={{
                onHover: "text-shadow: 2px 6px 8px rgba(255, 0, 0, 0.438)"
              }}
            />
          </Button>
        </div>
        <div className="rightPane">
          <div className="sprawlContainer">
            <h1>Lets get familiar</h1>
            <div className="contactForm">
              <form action="">
                <TextField
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  margin="normal"
                />
                <TextField
                  id="last-name"
                  name="lastName"
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  margin="normal"
                />
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
