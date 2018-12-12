import React, { Component } from "react";
import axios from "axios";
import "./contact.css";
import BackButton from '../about/BackButton'
import Button from "@material-ui/core/Button/";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      phone: "",
      company: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message, phone, company } = this.state;
    const form = axios.post("/api/form", {
      name,
      email,
      message,
      phone,
      company
    });
  }

  resetForm() {}

  render() {
    return (
      <div className="bodyWrapperStyle">
        <div className="leftPane" style={{ backgroundColor: "rgba(0, 0, 0, 0.863)" }}>
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
      <Button onClick={()=> window.location = "/Portfolio"}>
        <BackButton
          style={{ onHover: "text-shadow: 2px 6px 8px rgba(255, 0, 0, 0.438)" }}
        />
      </Button>
        </div>
        <div className="rightPane">
          <div className="mailContainer">
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="contactFormInput">
                <label for="name">Name</label>
                <input type="text" name="name" onChange={this.handleChange} />
              </div>
              <div className="contactFormInput">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="contactFormInput">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="contactFormInput">
                <label for="exampleInputEmail1">Company Name</label>
                <input
                  type="text"
                  name="company"
                  onChange={this.handleChange}
                />
              </div>
              <div className="contactFormInput">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  id="message"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm
