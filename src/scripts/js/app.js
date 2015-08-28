(function CodecDetectWebsiteModule() {

  'use strict';

  angular
    .module('com.codecdetect.App', getDependencies())
    .controller('CodecDetectAppController', CodecDetectAppController)
    .directive('codecDetectApp', CodecDetectApp);

  /* @ngInject */
  function CodecDetectApp(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'CodecDetectAppController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: TemplatesPath.APP
    };
  }

  function CodecDetectAppController() {
    var vm = this;
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.features.VideoCodecSupport',
      'com.codecdetect.features.AudioCodecSupport',
      'com.codecdetect.features.MethodSelection',
      'com.codecdetect.features.SendInfoForm',
      'com.codecdetect.Templates'
    ];
  }

})();
