var app = angular.module('MyApp');

app.factory('ContactService', ['$http', '$q',
	function($http, $q) {
		return {
			getContacts: function() {
				var deferred = $q.defer();

				$http.get('/contacts.json').success(function(result) {
					deferred.resolve(result);
				}).error(function(result) {
					deferred.reject(result);
				});

				return deferred.promise;
			}
		};
	}]);