const express = require('express');
const userrouter = new express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = require('./hostel');
const jwt = require('jsonwebtoken');

userrouter.post('/usersignup', async (req, res, next) => {
    try {
        const { useremail, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new User instance with the hashed password
        const user = new User({
            useremail: useremail,
            password: hashedPassword,
        });

        // Save the user to the database
        const registeredUser = await user.save();

        res.status(200).json(registeredUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/userlogin', async (req, res, next) => {
    try {
        User.find({ useremail: req.body.useremail }).exec().then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    mag: "User not exist"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (error, result) => {
                if (!result) {
                    return res.status(401).json({
                        mag: "password matching fail"
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        useremail: user[0].useremail,

                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        }

                    );
                    res.status(200).json({
                        useremail: user[0].useremail,
                        token: token
                    })
                }
            })

        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

})


module.exports = userrouter;
