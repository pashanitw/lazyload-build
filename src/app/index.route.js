(function () {
  'use strict';

  angular
    .module('templates')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider,appConstants,$urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        resolve: {
          moduleList:getResolvePromise(appConstants.dataUrls.MODULES)
        }

      })
      .state('dragdrop', {
        url: 'dragdrop/:id',
        templateUrl: 'app/dragdrop/dragdrop.html',
        controller: 'DragDropCtrl',
        controllerAs: 'dragdrop',
        resolve:{
          loadModule:function($ocLazyLoad){
            return $ocLazyLoad.load('modules/dragdrop.module.js');
          },
          data:getResolvePromise(appConstants.dataUrls.DRAG_DROP,true)
        }
      })
      .state('mmcq', {
        url: 'mmcq/:id',
        templateUrl: 'app/mmcq/mmcq.html',
        controller: 'MmcqCtrl',
        controllerAs: 'mmcq',
        resolve:{
          loadModule:function($ocLazyLoad){
            return $ocLazyLoad.load('modules/mmcq.module.js');
          },
          data:getResolvePromise(appConstants.dataUrls.MMCQ,true)
        }
      });

  //    $urlRouterProvider.otherwise('/');
  }

  function getResolvePromise(url,id){
   return ['fetchService', 'appConstants','$stateParams', function (fetchService, appConstants,$stateParams) {
     if(id){
       return fetchService.getData(url,$stateParams.id);
     }
     return fetchService.getData(url);
    }]
  }
})();
