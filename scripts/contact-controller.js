var app = angular.module('MyApp');

app.controller('ContactController', ['$scope', 'ContactService', '$compile',
	function($scope, ContactService, $compile) {
		ContactService.getContacts().then(function(contacts) {
			$scope.contacts = contacts;
		});

        $scope.submit = function() {
            $scope.$parent.toggleContactsPanel();
        };
	}]);
