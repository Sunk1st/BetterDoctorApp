var users = require('./../controllers/Users.js')
var insurances = require('./../controllers/Insurances.js')

//--------routes------------------//

var path = require('path');

module.exports = function(app){
	// Login/Registration
	app.post('/login', users.login);
	app.post('/register', users.register);
	// app.post('/insurance', insurances.postInsurance);
};