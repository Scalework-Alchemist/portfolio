const express = require("express");
const clientRouter = express.Router();
const Client = require('../models/client');

clientRouter.get('/', (req,res,send,next) => {
    Client.find({}, (err, clients) =>{
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.send(clients)
    })
})

clientRouter.post("/", (req, res, next)=>{
   const client = new Client(req.body);
   client.user = req.user._id
    client.save(function(err, newClient) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newClient)
    })
})

module.exports = clientRouter;