var mongoose = require('mongoose');
var User = mongoose.model('User');
function UsersController() {
	this.login = function(req, res) {

		User.findOne({username: req.body.username, password: req.body.password})

		var user = new User({username: req.body.username, password: req.body.password})
		// user.save(function(err, newUser) {
		// 	if (err) {
		// 		console.log('Error creating new User. Find that User.')
		// 		User.find({name: req.body.name}, function(err2, oldUser) {
		// 			if (err2) {
		// 				console.log("Error Finding Old User: ", err2.message);
		// 			}
		// 			else {
		// 				res.json(req.body.name)
		// 				console.log("Sending back an old user")
		// 			}
		// 		})
		// 	}
		// 	else {
		// 		res.json(req.body.name);
		// 		console.log("Sending back New User", user)
		// 	}
		// });
	}
}
module.exports = new UsersController;