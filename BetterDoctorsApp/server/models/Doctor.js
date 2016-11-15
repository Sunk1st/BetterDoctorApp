var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
	doctor_uid: {
		
	name: {
		type: String,
	},
	category: {
		type: String,type: String,
	},
	}
}, {timestamps: true})

var Doctor = mongoose.model('Doctor', DoctorSchema);