app.controller('doctorController', ['$scope','userFactory', '$cookies', '$location', function($scope, userFactory, $cookies, $location){
    $scope.user = {}
    $scope.userLat
    $scope.userLong

    $scope.successFunction = function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      $scope.userLat = lat
      $scope.userLong = lon
      console.log($scope)
    }

    $scope.getLocation = function(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.successFunction);
      } else {
        console.log("No geolocation")  
      }
    }
    $scope.getLocation();
}]);

