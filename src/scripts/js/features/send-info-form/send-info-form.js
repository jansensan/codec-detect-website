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
      scope: {},
      templateUrl: TemplatesPath.SEND_INFO_FORM
    };
  }

  /* @ngInject */
  function SendInfoFormController(sendInfoFormModel) {
    // public api
    var vm = this;
    // properties
    vm.formModel = sendInfoFormModel;
    // methods
    vm.sendInfo = sendInfo;

    // methods definitions
    function sendInfo() {
      console.info('%c--- SendInfoFormController.sendInfo ---', 'color: #0000CC');
      sendDetailsForm.$submitted = true;

      // sendInfoFormModel.sendInfo();
    }
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.features.SendInfoFormModel',
      'com.codecdetect.Templates',
      'com.codecdetect.validators.Email',
      'com.codecdetect.validators.Name'
    ]
  }

})();
