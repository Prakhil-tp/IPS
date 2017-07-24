var mongoose    = require('mongoose');
var plmongoose  = require('passport-local-mongoose');


var reportSchema = new mongoose.Schema({

    username    : String,
    title       : String,
    content     : String,
    adharid     : String


});

reportSchema.plugin(plmongoose);
module.exports = mongoose.model('report',reportSchema);
