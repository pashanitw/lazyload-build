(function() {
  'use strict';

  angular
    .module('lastone')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state,moduleList) {
console.log(moduleList);
    var vm = this;
    vm.moduleList=moduleList.data;
    vm.goToModule=function(module){
      $state.go(module.route, {id:module.id});
    }
  }
})();
