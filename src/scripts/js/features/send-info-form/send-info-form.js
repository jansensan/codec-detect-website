(function SendInfoFormModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.SendInfoForm', getDependencies())
    .controller('SendInfoFormController', SendInfoFormController)
    .directive('sendInfoForm', SendInfoForm);

  /* @ngInject */
  function SendInfoForm(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'SendInfoFormController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: TemplatesPath.SEND_INFO_FORM
    };
  }

  function SendInfoFormController() {
    // public api
    var vm = this;
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.Templates'
    ]
  }

})();
