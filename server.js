const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 9090;
const app = express();

app.listen(PORT, ()=> {
    console.log(`[+] Starting Server on port ${PORT}`);
});