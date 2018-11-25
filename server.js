const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require("morgan")
const bodyParser = require('body-parser');
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 2020;
const app = express()

app.use(bodyParser.json());
app.use('./api', expressJwt({
    secret: process.env.SECRET
}));

app.use('/api/client', require("./routes/client"));
app.use((err, req, res, next) => {
    console.log(err);
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});