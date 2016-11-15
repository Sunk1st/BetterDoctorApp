app.factory('userFactory', ['$http', function($http) {

  function userFactory(){
 	this.login = function(data, callback) {
 		console.log(data);
 		$http.post('/login', data).then(
 			function(returned_data) {
 				callback(returned_data);
 			});
 		}
  	this.register = function(data, callback) {
		console.log(data);
		$http.post('/register', data).then(
			function(returned_data) {
				callback(returned_data);
		});
	}
    }
    return new userFactory();
}]);