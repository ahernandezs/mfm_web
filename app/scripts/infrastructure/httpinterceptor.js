'use strict';

angular.module('spaApp').factory('httpInterceptor', ['$q', '$location', '$rootScope', function httpInterceptor ($q, $window, $location, $rootScope) {
  return function (promise) {
    var success = function (response) {
      return response;
    };

    var error = function (response) {
      // TODO: Seems that in some time we don't get response.status

      if (!response.status) {
        console.log("Response undefined");
        $location.url('/login');
      }

      if (response.status === 400 || response.status === 503) {
        $rootScope.session_token = null;
        console.log("Status 400 or 503");
        $location.url('/login');
      }

      return $q.reject(response);
    };

    return promise.then(success, error);
  };
}]);
