var mongoose = require('mongoose')

var ActionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Must enter a title!"],
		},
	description: {
		type: String,
		required: [true, "Must enter a title!"],
		},

}, {timestamps: true})

var Action = mongoose.model('Action', ActionSchema);
