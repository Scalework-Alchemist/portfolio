import React, { Component } from "react";
import axios from "axios";
import "./contact.css";
import BackButton from "../about/BackButton";
import Button from "@material-ui/core/Button/";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
  }
});

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
    const { classes } = this.props;
    return (
      <div className="bodyWrapperStyle">
        <div
          className="leftPane"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.863)" }}
        >
          <div className="text">
            <div className="animate">
              <h1
                style={{
                  color: "white",
                  fontSize: "3rem",
                  paddingLeft: "30px"
                }}
              >
                Michel
              </h1>
            </div>
          </div>
          <div className="text">
            <div className="animate">
              <h1
                style={{
                  color: "white",
                  fontSize: "3rem",
                  paddingLeft: "30px"
                }}
              >
                Ferrer
              </h1>
            </div>
          </div>
          <Button onClick={() => (window.location = "/Portfolio")}>
            <BackButton
              style={{
                onHover: "text-shadow: 2px 6px 8px rgba(255, 0, 0, 0.438)"
              }}
            />
          </Button>
        </div>
        <div className="rightPane">
          <div className="sprawlContainer">
            <div className="headerText">
              <h1 style={{ color: "red", padding: "80px" }}>
                Drop me a line, We can Meet up some time!
              </h1>
            </div>
            <div className="mailContainer">
            <Paper  elevation={1}>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
                oValidate
                autoComplete="off"
                className={classes.container}
              >
                <TextField
                  className={classes.textField}
                  label="Name"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  type="email"
                  label="Email"
                  name="email"
                  onChange={this.handleChange}
                  aria-describedby="emailHelp"
                />
                <TextField
                  className={classes.textField}
                  label="Phone Number"
                  type="number"
                  name="phone"
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label="Company"
                  type="text"
                  name="company"
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label="Message"
                  type="text"
                  name="message"
                  multiline={true}
                  fullWidth
                  rows={1}
                  rowsMax={8}
                  onChange={this.handleChange}
                />
                <button type="submit" className={classes.button} variant="outlined" color="primary" size="medium">
                  Submit
                </button>
              </form>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ContactForm);
