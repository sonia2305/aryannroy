var app = angular.module("mainModule", [ 'ngRoute', 'controllers' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/sections', {
		templateUrl : 'app/components/home/SectionsPage.html',
		controller : 'MainController'
	}).

	otherwise({
		redirectTo : '/sections'
	});
} ]);

