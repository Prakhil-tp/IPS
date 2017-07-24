var mongoose    = require('mongoose');
var plmongoose  = require('passport-local-mongoose');


var missingSchema = new mongoose.Schema({

    username    : String,
    title       : String,
    content     : String,
    adharid     : String


});

missingSchema.plugin(plmongoose);
module.exports = mongoose.model('missing',missingSchema);
