app.controller('doctorController', ['$scope', '$window', '$http', 'doctorFactory', '$cookies', '$location', '$mdDialog', function($scope, $window, $http, doctorFactory, $cookies, $location, $mdDialog){
      $scope.doctors = [];
      $scope.specialties = [];
      $scope.insurances = [];
      $scope.first_name = $cookies.get('first_name')
      $scope._id = $cookies.get('_id')
     /*-------Navigator to get Latitude and Longitude of User-------*/
     $scope.getLatLong = function () {
        doctorFactory.getLocation( function (res) {
          console.log('Controller Lat/Long', res)
          $scope.latitude = res.location.lat
          $scope.longitude = res.location.lng
          })
      }
    $scope.getLatLong();
    /*----------Uses an API call to grab insurance info-------------*/
    $scope.getInsurance = function () {
      doctorFactory.getInsurance( function (res) {
        function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
        }
        res.sort(compare);
        $scope.insurances = res
      })
    }
    $scope.getInsurance();

    $scope.getSpecialty = function () {
       doctorFactory.getSpecialty( function (res) {
        function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
        }
        res.sort(compare);
        $scope.specialties = res
      })
    }
    $scope.getSpecialty();

    $scope.getDoctors = function () {
      $scope.doctors = []
      doctorFactory.getDoctors($scope, function (res) {
        for (var i = 0; i < res.data.data.length; i++) {
          $scope.doctors.push(res.data.data[i])
        }
      })
    }
    $scope.logOut = function() {
      $cookies.remove('first_name')
      $cookies.remove('_id')
      $location.url('/')
    }
    $scope.getMoreInfo = function(eve, doctor) {
      $mdDialog.show({
        controller: DialogController,
        locals:{dataToPass: doctor},
        templateUrl: 'partials/moreInformation.html',
        parent: angular.element(document.body),
        targetEvent: eve,
        clickOutsideToClose:true,
        // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    };
    $scope.myDoctors = function(eve, user) {
       $mdDialog.show({
        controller: DialogController,
        locals:{dataToPass: user},
        templateUrl: 'partials/myDoctors.html',
        parent: angular.element(document.body),
        targetEvent: eve,
        clickOutsideToClose:true,
        // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    }
    function DialogController($scope, dataToPass) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      }
      $scope.addDoctor = function() {
        console.log(this.doctor)
        doctorFactory.addDoctor(this.doctor, function (res) {
          console.log(res)
        })
      }
      $scope.doctor = dataToPass
    }
}]);
