(function() {
  'use strict';

  angular
    .module('lastone')
    .controller('MmcqCtrl', MmcqCtrl);

  /** @ngInject */
  function MmcqCtrl(data,$state) {
    var vm=this;
    vm.data=data[$state.params.id];
    vm.prev=function(){
      var index=data.sequence.indexOf($state.params.id);
      if(index!==0&&index!=-1){
        $state.go("mmcq", {id:data.sequence[--index]});
      }
    };
    vm.next=function(){
      var index=data.sequence.indexOf($state.params.id);
      if(index!==data.sequence.length-1&&index!=-1){
        $state.go("mmcq", {id:data.sequence[++index]});
      }
    };
  }
})();
