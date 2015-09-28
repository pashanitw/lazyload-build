(function () {
  'use strict';

  angular
    .module('lastone')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider,appConstants,$urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          moduleList:getResolvePromise(appConstants.dataUrls.MODULES)
        }

      })
      .state('dragdrop', {
        url: 'dragdrop/:id',
        templateUrl: 'app/dragdrop/dragdrop.html',
        controller: 'DragDropCtrl',
        controllerAs: 'ctrl',
        resolve:{
          data:getResolvePromise(appConstants.dataUrls.DRAG_DROP,true)
        }
      })
      .state('mmcq', {
        url: 'mmcq/:id',
        templateUrl: 'app/mmcq/mmcq.html',
        controller: 'MmcqCtrl',
        controllerAs: 'ctrl',
        resolve:{
          data:getResolvePromise(appConstants.dataUrls.MMCQ,true)

        }
      });

  //    $urlRouterProvider.otherwise('/');
  }

  function getResolvePromise(url,id){
   return ['fetchService', 'appConstants','$stateParams', function (fetchService, appConstants,$stateParams) {
     if(id){
       debugger;
       return fetchService.getData(url,$stateParams.id);
     }
     return fetchService.getData(url);
    }]
  }
})();
