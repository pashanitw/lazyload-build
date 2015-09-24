(function() {
  'use strict';

  angular
    .module('lastone')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$state) {
    var vm = this;
    vm.moduleList=[
      {
        name:"Drag and Drop",
        id:"12345"
      },
      {
        name:"Mmcq",
        id:"12345"
      }
    ]
    vm.goToModule=function(module){
      $state.go("dragdrop", {id:12345} );
    }
  }
})();
