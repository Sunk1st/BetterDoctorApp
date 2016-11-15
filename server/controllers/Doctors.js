var mongoose = require('mongoose');
var Doctor = mongoose.model('Doctor');
function DoctorsController() {
    
	this.add = function(req, res){
      console.log(req)
	}
}
module.exports = new DoctorsController;