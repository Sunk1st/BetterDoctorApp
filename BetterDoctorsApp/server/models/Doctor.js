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
	}
	category: {
		type: String,type: String,
	},
	}
}, {timestamps: true})

var Doctor = mongoose.model('Doctor', DoctorSchema);