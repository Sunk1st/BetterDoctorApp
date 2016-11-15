var users = require('./../controllers/Users.js')
var doctors = require('./../controllers/doctors.js')

//--------routes------------------//

var path = require('path');

module.exports = function(app){
	// Login/Registration
	app.post('/login', users.login);
	app.post('/register', users.register);
	app.post('/addDoctor', doctors.add);
	// app.post('/insurance', insurances.postInsurance);
};