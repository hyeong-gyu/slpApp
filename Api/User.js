const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { token } = req.body;
    let user = {};
    // user.firstName = firstName;
    // user.lastName = lastName;
    user.token = token;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

route.get('/', (req, res) => {
    User.find(function (err, token) {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(token);
    });
});

module.exports = route;