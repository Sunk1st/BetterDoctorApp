app.controller('doctorController', ['$scope', '$window', '$http', 'doctorFactory', '$cookies', '$location', '$mdDialog', function($scope, $window, $http, doctorFactory, $cookies, $location, $mdDialog){
      $scope.doctors = [];
      $scope.specialties = [];
      $scope.insurances = [];
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
        console.log($scope.doctors)
      })
    }
    $scope.getMoreInfo = function(eve, doctor) {
      console.log(doctor)
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
    function DialogController($scope, dataToPass) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.doctor = dataToPass
    }
    // function insuranceController ($timeout, $q, $log) {
    //   var self = this;
    //   self.simulateQuery = false;
    //   self.isDisabled    = false;
    //   self.insurances        = $scope.insurances;
    //   self.querySearch   = querySearch;
    //   self.selectedItemChange = selectedItemChange;
    //   self.searchTextChange   = searchTextChange;
    // }


    // function querySearch (query) {
    //   var results = query ? $scope.insurances.filter( createFilterFor(query) ) : $scope.insurances;
    //   var deferred = $q.defer();
    //   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
    //   return deferred.promise;
    // }
    // function searchTextChange(text) {
    //   $log.info('Text changed to ' + text);
    // }

    // function selectedItemChange(item) {
    //   $log.info('Item changed to ' + JSON.stringify(item));
    // }

    // function createFilterFor(query) {
    //   var lowercaseQuery = angular.lowercase(query);
    //   return function filterFn(insurance) {
    //     return (insurance.value.indexOf(lowercaseQuery) === 0);
    //   };
    // }

}]);
