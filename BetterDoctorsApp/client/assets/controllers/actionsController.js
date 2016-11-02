app.controller('actionsController', ['$scope','actionsFactory', '$cookies', '$location', function($scope, actionsFactory, $cookies, $location){
		$scope.user = $cookies.get('name');
    // $scope.index = function(){
    //   actionsFactory.index($scope.actions, function (returned_data){
      
    //   })
    // }
    // $scope.index();
    	$scope.logOut = function() {
    		$cookies.remove('user');
			$location.url('/index');
    	}
}]);