app.factory('actionsFactory', ['$http', function($http) {
  // constructor for our factory

  function actionsFactory(){
 	this.index = function(data, callback) {
 		$http.get('/actions', data).then(
 			function(returned_data) {
 				callback(returned_data);
 				
 			});
 		}
    }
    return new actionsFactory();
}]);