(function CodecDetectMethodsModule() {

  angular
    .module('com.codecdetect.constants.CodecDetectMethods', [])
    .constant('CodecDetectMethod', getCodecDetectMethods());

  function getCodecDetectMethods() {
    return {
      OPTIMISTIC: 'optimistic',
      PESSIMISTIC: 'pessimistic',
      EXACT: 'exact'
    };
  }

})();
