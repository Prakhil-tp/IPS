var express = require('express'),
    app = express(),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    plmongoose = require('passport-local-mongoose');



var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    adharid: String,
    power: String,
    joinedAt: Date





});


userSchema.plugin(plmongoose);
module.exports = mongoose.model('user', userSchema);