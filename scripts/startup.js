var app = angular.module('MyApp');

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/events.html',
			controller: 'EventController'
		}).otherwise('/');
	}]);

