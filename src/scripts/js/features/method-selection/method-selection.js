(function MethodSelectionModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.MethodSelection', getDependencies())
    .controller('MethodSelectionController', MethodSelectionController)
    .directive('methodSelection', MethodSelection);

  /* @ngInject */
  function MethodSelection(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'MethodSelectionController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: TemplatesPath.METHOD_SELECTION
    };
  }

  /* @ngInject */
  function MethodSelectionController(supportModel) {

    // public api
    var vm = this;

    // properties
    vm.supportModel = supportModel;
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.models.SupportModel',
      'com.codecdetect.Templates'
    ]
  }

})();
