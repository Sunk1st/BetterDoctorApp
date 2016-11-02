app.controller('loginController', ['$scope','userFactory', '$cookies', '$location', function($scope, userFactory, $cookies, $location){
    $scope.loginUser = function(){

      userFactory.login($scope.user, function (returned_data){
      	console.log('loginController', returned_data.data);
      	
        $cookies.put('name', returned_data.data)
        $location.url('/dashboard')
      })
    }
}]);