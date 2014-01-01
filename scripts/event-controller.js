var app = angular.module('MyApp');

app.controller('EventController', ['$scope', 'EventService', '$compile',
	function($scope, EventService, $compile) {
		EventService.getEvents().then(function(events) {
			$scope.events = events;
			$scope.recentEvent = $scope.events[0];
		});

        $scope.showContacts = false;
        $scope.toggleContactsPanel = function() {
            $scope.showContacts = !$scope.showContacts;
        };
	}]);
