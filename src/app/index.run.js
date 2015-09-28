(function() {
  'use strict';

  angular
    .module('lastone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state,$stateParams) {

    $log.debug('runBlock end',$stateParams);

  }

})();
