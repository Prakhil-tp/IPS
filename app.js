var express                 = require('express'),
    app                     = express(),
    path                    = require('path'),
    mongoose                = require('mongoose'),
    routes                  = require('./routes'),
    bodyParser              = require('body-parser'),
    localStrategy           = require('passport-local'),
    plmongoose              = require('passport-local-mongoose'),
    passport                = require('passport'),
    user                    = require('./models/user'),
    port                    = 3000,
    ip                      = "";




/*============================================================*/
/*               DB connect                                   */
/*============================================================*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nextcops');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({
        secret : "Secret word goes here in production",
        resave :false,
        saveUninitialized :false}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
//=================================================================

app.use(express.static(path.join(__dirname, 'public'))); //using public folder for front-end
app.set('view engine','ejs');





//=======================================================get requests

app.get('/',routes.home);
app.get('/admin',routes.admin);
app.get('/signup',routes.signUp);

//=======================================================post requests

app.post('/register',routes.registerPost);  //registration
app.post('/crime',routes.reportadd);    //report adding
app.post('/missing',routes.missingadd);
app.post('/trouble',routes.helpline);










// launch ====================================================================================================================

app.listen(port,function(){
 console.log("The magic happens on port " + port);
});
