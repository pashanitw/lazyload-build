(function () {
  'use strict';

  angular
    .module('templates')
    .factory('fetchService', fetchSerivice);

  /** @ngInject */
  function fetchSerivice($http, $q) {

    var getData = function (url, id) {
      debugger;
      if (!id) {
        return $http.get(url);
      } else {
        var deferred = $q.defer();
        $http.get(url).then(function (data) {

          deferred.resolve(data.data);
        });
        return deferred.promise;
      }
    };
    return {
      getData: getData
    }
  }
})();
