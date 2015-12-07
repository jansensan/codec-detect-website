(function SupportValuesModule() {

  angular
    .module('com.codecdetect.constants.SupportValues', [])
    .constant('SupportValue', getSupportValues())

  function getSupportValues() {
    return {
      PENDING: 'pending',
      PROBABLY: 'probably',
      MAYBE: 'maybe'
    };
  }

})();
