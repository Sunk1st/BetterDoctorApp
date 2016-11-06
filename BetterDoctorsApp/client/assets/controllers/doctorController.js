app.controller('doctorController', ['$scope', '$window', '$http', 'userFactory', '$cookies', '$location', function($scope, $window, $http, userFactory, $cookies, $location){
     $scope.getDoctors = function () {
            $window.navigator.geolocation.getCurrentPosition(function(position) {
                $scope.$apply(function() {
                    $scope.latitude = position.coords.latitude;
                    $scope.longitude = position.coords.longitude;
                    $scope.accuracy = position.coords.accuracy;
                    $scope.url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=' + $scope.latitude.toString() + '%2C-' + $scope.longitude.toString()
                    console.log($scope.url)
                });
                }, function(error) {
                    alert(error);
            });
        }
    $scope.findDoctors = function () {
      console.log("Find Doctors", $scope.filter)
    }
    

}]);

