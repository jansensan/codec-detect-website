(function NameValidatorModule() {

  'use strict';

  angular
    .module('com.codecdetect.validators.Name', [])
    .directive('cdName', Name);

  function Name() {
    // return validator
    return {
      require: 'ngModel',
      link: link
    };

    // method definitions
    function link($scope, element, attrs, model) {
      model.$validators.name = validate;

      function validate(modelValue, viewValue) {
        var value = viewValue || modelValue,
          senderName = /^[a-zA-Z\ \-\'']+$/,
          isValid = senderName.test(value);
        return isValid;
      }
    }
  }

})();
