var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	name: {type: String},
	city: {type: String},
	country: {type: String},
	skills: [{type: String}]
});

module.exports = mongoose.model('User', UserSchema);