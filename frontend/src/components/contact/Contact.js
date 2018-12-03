import React, { Component } from "react";
import {ContactForm} from "./ContactForm" 
import "./contact.css";


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleChange = e => {
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
    this.props.addClientRequest(this.state).then(response => {
      this.clearInputs();
    });
  };
  render() {
    return (
      <ContactForm/>
    );
  }
}

export default Contact;
