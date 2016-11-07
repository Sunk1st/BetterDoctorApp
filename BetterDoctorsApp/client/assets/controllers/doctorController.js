app.controller('doctorController', ['$scope', '$window', '$http', 'doctorFactory', '$cookies', '$location', function($scope, $window, $http, doctorFactory, $cookies, $location){
      $scope.insurances = [];
      //Use Navigator to get Latitude and Longitude of User
     $scope.getLatLong = function () {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
                $scope.accuracy = position.coords.accuracy;
            });
            }, function(error) {
                alert(error);
        });
      }
    $scope.getLatLong();
    $scope.getInsurance = function () {
      insurance_url = 'https://api.betterdoctor.com/2016-03-01/insurances?user_key=042d852d3e7416f52f932e01afaee003'
      if ($scope.insurances != [])
        $http.get(insurance_url).then(function(res) {
          console.log('insurances', res)
          console.log(res.data.data)
        })
    }
    $scope.getInsurance();

    $scope.findDoctors = function () {
      doctorFactory.findDoctors($scope, function (res) {
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
        console.log('Total Doctors', res.data.meta.total)
      })
    }
    

}]);

