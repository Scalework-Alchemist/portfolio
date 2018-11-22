const express = require("express");
const clientRouter = express.Router();
const Client = require("../models/clients")

clientRouter.get("/", (req, res, next) => {
    Client.find({ client: req.user._id }, (err, clients) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(clients);
    });
});

module.exports = clientRouter;