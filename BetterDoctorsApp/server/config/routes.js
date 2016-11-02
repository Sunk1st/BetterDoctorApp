var users = require('./../controllers/users.js')
var actions = require('./../controllers/actions.js')

//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	// app.get('/users', users.index);
	app.post('/login', users.login);
	app.get('/dashboard', actions.index)

};