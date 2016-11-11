app.controller('doctorController', ['$scope', '$window', '$http', 'doctorFactory', '$cookies', '$location', '$mdDialog', function($scope, $window, $http, doctorFactory, $cookies, $location, $mdDialog){
      $scope.insurances = [];
      $scope.doctorProfiles = [];
      $scope.doctors = [];
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
      doctorFactory.getInsurance( function (res) {
        console.log("response data = ", res);
        $scope.insurances = res
      })
    }
    $scope.getInsurance();
    $scope.getSpecialty = function () {
      specialty_url = 'https://api.betterdoctor.com/2016-03-01/specialties?user_key=042d852d3e7416f52f932e01afaee003'

      $http.get(specialty_url).then(function(res) {
        // console.log(res);
      })
    }
    // $scope.getSpecialty();

    $scope.findDoctors = function () {
      doctorFactory.findDoctors($scope, function (res) {
        console.log(res)
        for (var i = 0; i < res.data.data.length; i++) {
          $scope.doctorProfiles.push(res.data.data[i].profile)
          $scope.doctors.push(res.data.data[i])
        }
        console.log('doctors', $scope.doctors)
      })
    }
    $scope.showLocation = function(location, latitude, longitude) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'partials/doctorLocation.html',
        parent: angular.element(document.body),
        targetEvent: location,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
    }
}]);
