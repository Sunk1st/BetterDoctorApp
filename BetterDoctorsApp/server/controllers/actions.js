var mongoose = require('mongoose');
var Action = mongoose.model('Action');
function ActionsController() {
	this.index = function(req, res) {
		User.find({}, function(err, users) {
			if (err) {
				console.log("Can't find users!")
			}
			else {
				res.json(users);
			}
		})
	}
}
module.exports = new ActionsController;