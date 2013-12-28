var app = angular.module('MyApp');

app.factory('EventService', ['$http', '$q',
	function($http, $q) {
		return {
			getEvents: function() {
				var deferred = $q.defer();

				$http.get('/events.json').success(function(result) {
					deferred.resolve(result);
				}).error(function(result) {
					deferred.reject(result);
				});

				return deferred.promise;
			}
		};
	}]);