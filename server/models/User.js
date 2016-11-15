var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "Must enter a first name!"],
	},
	last_name: {
		type: String,
		required: [true, "Must enter a last name!"],
	},
	username: {
		type: String,
		unique: true,
		required: [true, "Must enter a unique username!"],
	},
	password: {
		type: String,
		required: [true, "Must enter a password!"],
	}

}, {timestamps: true})

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

var User = mongoose.model('User', UserSchema);