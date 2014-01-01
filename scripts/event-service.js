var app = angular.module('MyApp');

app.factory('EventService', ['$http', '$q',
	function($http, $q) {
		return {
			getEvents: function() {
				var deferred = $q.defer();

                var param = {
                    type: "events"
                };
				$http.post('/action.do', param).success(function(result) {
					deferred.resolve(result);
				}).error(function(result) {
					deferred.reject(result);
				});

				return deferred.promise;
			}
		};
	}]);
