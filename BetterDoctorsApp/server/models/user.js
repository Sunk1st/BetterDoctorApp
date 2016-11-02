var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, "Must enter a unique!"],
		},

}, {timestamps: true})

var User = mongoose.model('User', UserSchema);
