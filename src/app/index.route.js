(function() {
  'use strict';

  angular
    .module('lastone')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dragdrop', {
        url: 'dragdrop/:id',
        templateUrl: 'app/dragdrop/dragdrop.html',
        controller: 'DragDropCtrl',
        controllerAs: 'ctrl'
      })
      .state('mmcq', {
        url: 'mmcq/:id',
        templateUrl: 'app/mmcq/mmcq.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      });

  //  $urlRouterProvider.otherwise('/');
  }

})();
