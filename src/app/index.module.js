(function() {
  'use strict';

  angular
    .module('templates', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'toastr']);
  angular
    .module('templates').controller("something",function($scope,$state,$stateParams){
      $scope.init=function(){
        console.log("defenitely in the parent controller");
    //    $state.go($state.current, $stateParams, {reload: true, inherit: false});
      }
    })
})();
