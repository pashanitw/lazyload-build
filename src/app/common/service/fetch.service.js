(function () {
  'use strict';

  angular
    .module('lastone')
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
          debugger;
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
