var mongoose = require('mongoose');

var InsuranceSchema = new mongoose.Schema({
	insurance_uid: {
		type: String,
	},
	name: {
		type: String,
	},
	category: {
		type: String,
	}
}, {timestamps: true})

var Insurance = mongoose.model('Insurance', InsuranceSchema);