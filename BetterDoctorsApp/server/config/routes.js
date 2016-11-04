var users = require('./../controllers/Users.js')
// var actions = require('./../controllers/actions.js')

//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	// Login/Registration
	app.post('/login', users.login);
	app.post('/register', users.register);

};