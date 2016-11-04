var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMaterial', 'ngMessages']);
app.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '300', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('amber', {
      'default': '700' // use shade 200 for default, and keep all other shades the same
    });
});
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'loginController',
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
	})
	.when('/searchDoctor', {
		templateUrl: 'partials/searchDoctor.html',
		controller: 'doctorController',
	})
	.when('/searchPractice', {
		templateUrl: 'partials/searchPractice.html',
	})
	.otherwise({
		templateUrl: 'partials/login.html',
	})
})