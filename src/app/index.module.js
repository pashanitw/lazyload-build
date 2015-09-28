(function() {
  'use strict';

  angular
    .module('lastone', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'toastr']);
  angular
    .module('lastone').controller("something",function($scope,$state,$stateParams){
      $scope.init=function(){
        console.log("defenitely in the parent controller");
        $state.go($state.current, $stateParams, {reload: true, inherit: false});
      }
    })
})();
