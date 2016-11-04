app.controller('loginController', ['$scope','userFactory', '$cookies', '$location', function($scope, userFactory, $cookies, $location){
    $scope.loginUser = function(){
      	userFactory.login($scope.user, function (returned_data){
      	console.log('loginController', returned_data.data);
        $cookies.put('first_name', returned_data.first_name);
        $cookies.put('_id', returned_data._id);
        $location.url('/dashboard')
      })
    }
    $scope.registerUser = function(){
      	userFactory.register($scope.user, function (returned_data){
      	console.log('loginController', returned_data.data);
        $cookies.put('first_name', returned_data.first_name);
        $cookies.put('_id', returned_data._id);
        $location.url('/dashboard')
      })
    }
}]);