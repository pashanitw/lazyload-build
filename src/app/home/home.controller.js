(function() {
  'use strict';

  angular
    .module('templates')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($state,moduleList) {

    var vm = this;
    vm.moduleList=moduleList.data;
    vm.goToModule=function(module){
      $state.go(module.route, {id:module.id});
    }
  }
})();
