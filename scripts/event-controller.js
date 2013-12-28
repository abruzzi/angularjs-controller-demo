var app = angular.module('MyApp');

app.controller('EventController', ['$scope', 'EventService',
	function($scope, EventService) {
		EventService.getEvents().then(function(events) {
			$scope.events = events;
			$scope.recentEvent = $scope.events[0];
		});
	}]);