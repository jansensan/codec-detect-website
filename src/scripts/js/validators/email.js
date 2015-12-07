(function EmailValidatorModule() {

  'use strict';

  angular
    .module('com.codecdetect.validators.Email', [])
    .directive('cdEmail', Email);

  function Email() {
    // return validator
    return {
      require: 'ngModel',
      link: link
    };

    // method definitions
    function link($scope, element, attrs, model) {
      model.$validators.email = validate;

      function validate(modelValue, viewValue) {
        var value = viewValue || modelValue,

          // FIXME: see why email regex fails for color coding ide
          emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,

          isValid = emailPattern.test(value);
        return isValid;
      }
    }
  }

})();
