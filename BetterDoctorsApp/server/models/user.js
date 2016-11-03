var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: [true, "Must enter a unique username!"],
		},
	password: {
		type: String,
		required: [true, "Must enter a password!"],
	}

}, {timestamps: true})

var User = mongoose.model('User', UserSchema);