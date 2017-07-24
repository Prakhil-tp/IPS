var express           = require('express'),
    app               = express(),
    mongoose          = require('mongoose'),
    passport          = require('passport'),
    localStrategy     = require('passport-local'),
    plmongoose        = require('passport-local-mongoose'),
    bodyParser        = require('body-parser'),
    userOperations    = require('../models/userOperations'),
    reportOperations  = require('../models/reportOperations'),
    missingOperations = require('../models/missingOperations'),
    report            = require('../models/report'),
    missing           = require('../models/missing');



//=============================get requests

exports.home = function(req, res) {
    res.render('home');
}
exports.admin = function(req, res) {
  var qrycount=missing.count({});
  var query =report.find({});
  var qrymissing=missing.find({});
   query.exec(function(err,data){
             if(! err){

                    qrymissing.exec(function(err,msdata){
                        if(! err){

                                      qrycount.exec(function(err,mscount){
                                              if(! err){
                                                res.render('index',{reports:data,missings:msdata,count:mscount});//sending reports & missings to admin page
                                              }
                                        });

                                }
                    });



             }
     });


}
exports.signUp = function(req, res) {
    res.render('registerdemo');
}

//=============================post requests

exports.registerPost = function(req, res) { //adding user
    var objReg = {};
    objReg.username = req.body.username;
    objReg.password = req.body.password;
    objReg.power = 'user';
    userOperations.create(objReg, req, res);
}

exports.reportadd = function(req,res){
  var objReg = {};
  objReg.title = req.body.title;
  objReg.content = req.body.desc;
  objReg.adharid = req.body.idm;
  reportOperations.create(objReg,req,res);
}

exports.missingadd = function(req,res){
  var objReg = {};
  objReg.title = req.body.title;
  objReg.content = req.body.moreinfo;
  objReg.adharid = req.body.idm;
  missingOperations.create(objReg,req,res);
}

exports.helpline = function(req,res){
  var objReg = {};
  objReg.title = "HELP I'M IN TROUBLE";
  objReg.content = 'location : Park Centre, Thiruvananthapuram, Kerala 695581 ';
  objReg.adharid = "";
  missingOperations.create(objReg,req,res);
}
