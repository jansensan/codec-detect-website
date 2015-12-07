(function AudioCodecSupportModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.AudioCodecSupport', getDependencies())
    .controller('AudioCodecSupportController', AudioCodecSupportController)
    .directive('audioCodecSupport', AudioCodecSupport);

  /* @ngInject */
  function AudioCodecSupport(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'AudioCodecSupportController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {},
      templateUrl: TemplatesPath.AUDIO_CODEC_SUPPORT
    };
  }

  /* @ngInject */
  function AudioCodecSupportController(supportModel) {

    // public api
    var vm = this;

    // properties
    vm.supportModel = supportModel;
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.features.CodecTile',
      'com.codecdetect.models.SupportModel',
      'com.codecdetect.Templates'
    ];
  }

})();