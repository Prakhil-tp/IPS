var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    localStrategy = require('passport-local'),
    plmongoose = require('passport-local-mongoose'),
    report = require('../models/report');


exports.create = function(objReg,req,res){
  var newRt = new report({
                                username : "Nijinsha",
                                 title   : objReg.title,
                                 content : objReg.content,
                                 adharid : objReg.adharid

                                });

                                newRt.save(function (err, data) {
                                if (err) console.log(err);
                                else {
                                    res.redirect('/admin');
                                }

                                });
}
