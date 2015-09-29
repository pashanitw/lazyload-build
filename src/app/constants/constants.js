(function () {
  'use strict';
  var appConstants={
    dataUrls:{
      MODULES:'/data/modules.json',
      DRAG_DROP:'/data/dragdrop.json',
      MMCQ:'/data/mmcq.json'
    }
  };
  angular
    .module('templates')
    .constant('appConstants', appConstants);

  /** @ngInject */


})();
