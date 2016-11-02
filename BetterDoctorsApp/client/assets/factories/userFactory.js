app.factory('userFactory', ['$http', function($http) {
  // constructor for our factory

  function userFactory(){
 	this.login = function(data, callback) {
 		$http.post('/login', data).then(
 			function(returned_data) {
 				callback(returned_data);
        console.log('Returned Data', returned_data.data)
 			});
 		}
    }
    return new userFactory();
}]);