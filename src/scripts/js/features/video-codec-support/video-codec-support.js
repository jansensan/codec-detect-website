(function VideoCodecSupportModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.VideoCodecSupport', getDependencies())
    .controller('VideoCodecSupportController', VideoCodecSupportController)
    .directive('videoCodecSupport', VideoCodecSupport);

  /* @ngInject */
  function VideoCodecSupport(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'VideoCodecSupportController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {},
      templateUrl: TemplatesPath.VIDEO_CODEC_SUPPORT
    };
  }

  /* @ngInject */
  function VideoCodecSupportController(supportModel) {

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