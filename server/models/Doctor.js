var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
	doctor_uid: {
		type: String,
	},
	first_name: {
		type: String,
	},
	middle_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	practices: {
		type: Array,
	},
	phoneNumbers: {
		type: Array,
	},
}, {timestamps: true})

var Doctor = mongoose.model('Doctor', DoctorSchema);