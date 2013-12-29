var app = angular.module('MyApp');

app.controller('EventController', ['$scope', 'EventService', '$compile',
	function($scope, EventService, $compile) {
		EventService.getEvents().then(function(events) {
			$scope.events = events;
			$scope.recentEvent = $scope.events[0];
		});

		$scope.dynamic = function() {
			var scope = angular.element("body").scope();
			// var scope = $scope;
			var html = $compile("<div ng-controller='ContactController'><ul ng-repeat='contact in contacts'><li>{{contact}}</li></ul></div>")(scope);
			$("body").append(html);
		};
	}]);