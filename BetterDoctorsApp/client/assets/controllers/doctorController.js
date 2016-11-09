app.controller('doctorController', ['$scope', '$window', '$http', 'doctorFactory', '$cookies', '$location', function($scope, $window, $http, doctorFactory, $cookies, $location){
      $scope.insurance_uids = [];
      $scope.doctorProfiles = [];
     /*-------Navigator to get Latitude and Longitude of User-------*/
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
    /*----------Uses an API call to grab insurance info-------------*/
    $scope.getInsurance = function () {
      insurance_url = 'https://api.betterdoctor.com/2016-03-01/insurances?user_key=042d852d3e7416f52f932e01afaee003'

        $http.get(insurance_url).then(function(res) {
          //loop to create array with insurance information
            for (var i =0; i < res.data.data.length; i++) {
              for (var k = 0; k < res.data.data[i].plans.length; k++) {
                $scope.insurance_uids.push(res.data.data[i].plans[k])
              }
            }
            // doctorFactory.postInsurance($scope.insurance_uids, function (res) {
            //   console.log('DoctorController Res', res)
            // })
        })
    }
    $scope.getInsurance();

    $scope.findDoctors = function () {
      doctorFactory.findDoctors($scope, function (res) {
        for (var i = 0; i < res.data.data.length; i++) {
          $scope.doctorProfiles.push(res.data.data[i].profile)
        }
        console.log($scope.doctorProfiles)
      })
    }
}]);
