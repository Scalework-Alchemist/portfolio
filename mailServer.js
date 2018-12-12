const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
require("dotenv").config();
const nodemailer = require("nodemailer");
const creds = require("./config");

const port = process.env.PORT || 3000;
const app = express();



//body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//message template & output
app.post("/api/form", (req, res) => {
  const output = `
    <p> You have a new client</p>
    <h3> Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
    `;
    console.log(output)
  //transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"mail@michelferrer.com" <mail@michelferrer.com>', // sender address
    to: ["mail@michelferrer.com", 'mekosemail@gmail.com'], // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});
//server start sequence
app.use(logger({ format: "dev", immediate: true }));
app.listen(port, () => console.log(`yeah we running on port ${port}`));
