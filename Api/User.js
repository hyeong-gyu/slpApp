const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    if (req.body.type === "add") {
        const { token } = req.body;
        let user = {};
        // user.firstName = firstName;
        // user.lastName = lastName;
        user.token = token;
        let userModel = new User(user);
        await userModel.save();
        res.json(userModel);
    } else {
        await User.findOne({
            token: req.body.token
        }).then(user => {
            if(!user) {
                res.status(200).send({
                    msg: 'not! token!',
                    success: false
                });
            } else {
                res.status(200).send({
                    msg: 'yes! token!',
                    success: true
                })
            }
        });

    }
});

route.get('/', (req, res) => {
    User.find(function (err, token) {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(token);
    });
});

module.exports = route;