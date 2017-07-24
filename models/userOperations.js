var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    localStrategy = require('passport-local'),
    plmongoose = require('passport-local-mongoose'),
    user = require('../models/user');


//================================passport initialize and secure
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: "Secret word goes here in production",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
//===================================================================





//========================================================== db functions
exports.create = function(objReg, req, res) {
    user.register(
        new user({
            username: objReg.username,
            power: objReg.power,
            joinedAt: new Date()

        }), objReg.password,
        function(err, users) {
            if (!err) {
                passport.authenticate('local')(req, res, function() {
                    res.redirect('/');

                });
            }
            else {
              console.log(err);
            }
        }

    );
}
