(function SendInfoFormModelModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.SendInfoFormModel', [
      'ngMessages'
    ])
    .factory('sendInfoFormModel', SendInfoFormModel);

  function SendInfoFormModel() {
    // public api
    var _model = {
      // properties
      name: '',
      email: '',
      recipientEmail: '',
      // methods
      sendInfo: sendInfo
    };
    return _model;

    // method definitions
    function sendInfo() {
    }
  }

})();
