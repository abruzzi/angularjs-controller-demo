var app = angular.module('MyApp');

app.factory('ContactService', ['$http', '$q',
	function($http, $q) {
		return {
			getContacts: function() {
				var deferred = $q.defer();
                
                var param = {
                    type: "contacts"
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
