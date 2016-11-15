var mongoose = require('mongoose');
var Insurance = mongoose.model('Insurance');
function InsurancesController() {
    
	// this.postInsurance = function(req, res){
 //        for (var i = 0; i < req.body.length; i++) {
 //            var insurance = new Insurance({uid:req.body[i].uid, name:req.body[i].name, category:req.body[i].category})
 //            insurance.save(function(err, newInsurance) {
 //                if (err) {
 //                    console.log("Not adding User", err.body)
 //                }
 //                else {
 //                    res.json('Added User', {uid:req.body[i].uid, name:req.body[i].name, category:req.body[i].category})
 //                }
 //            })
 //        }
	// }
}
module.exports = new InsurancesController;