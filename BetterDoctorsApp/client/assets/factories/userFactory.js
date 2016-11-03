app.factory('userFactory', ['$http', function($http) {

  function userFactory(){
 	this.login = function(data, callback) {
 		console.log(data);
 		$http.get('/login', data).then(
 			function(returned_data) {
 				callback(returned_data);
        console.log('Returned Data', returned_data.data)
 			});
 		}
    }
    return new userFactory();
}]);