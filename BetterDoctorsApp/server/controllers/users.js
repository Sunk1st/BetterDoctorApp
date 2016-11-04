var mongoose = require('mongoose');
var User = mongoose.model('User');
function UsersController() {
	this.register = function(req, res) {
		var user = new User({first_name:req.body.first_name, last_name:req.body.last_name, username:req.body.username, password:req.body.password})
		user.save(function(err, newUser) {
			if(err) {
				console.log("Error registering User")
				res.json(err);
			}
			else {
				console.log("User has been registered")
				res.json({
                    _id: newUser._id, first_name:req.body.first_name
                });
			}
		})
	}
	this.login = function(req, res) {
		User.findOne({email: req.body.email}, function(err, data) {
			console.log(data)
            if (err) {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            } else if (data && data.validPassword(req.body.password)) {
                res.json({
                    _id: data._id, first_name:data.first_name
                });
            } else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
    }

	
}
module.exports = new UsersController;