var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    localStrategy = require('passport-local'),
    plmongoose = require('passport-local-mongoose'),
    missing = require('../models/missing');


exports.create = function(objReg,req,res){
  var newMs = new missing({
                                username : "Nijinsha",
                                 title   : objReg.title,
                                 content : objReg.content,
                                 adharid : objReg.adharid

                                });

                                newMs.save(function (err, data) {
                                if (err) console.log(err);
                                else {
                                    res.redirect('/admin');
                                }

                                });
}
