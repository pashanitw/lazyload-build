(function() {
  'use strict';

  angular
    .module('templates')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state,$stateParams) {

    $log.debug('runBlock end',$stateParams);

  }

})();
