app.factory('doctorFactory', ['$http', function($http) {

  function doctorFactory(){
 	this.login = function(data, callback) {
 		console.log(data);
 		$http.post('/login', data).then(
 			function(returned_data) {
 				callback(returned_data);
        		console.log('Returned Data', returned_data.data)
 			});
 		}
 	this.getLocation = function(callback) {
 		
 	}

    }
    return new doctorFactory();
}]);