(function () {

  'use strict';

  angular
    .module('com.codecdetect.constants.TemplatesPaths', [])
    .constant('TemplatesPath', getTemplatesPaths());

  function getTemplatesPaths() {
    var basePath = 'src/scripts/js/';
    var featuresPath = basePath.concat('features/');

    return {
      APP: basePath.concat('app-template.html'),
      CODEC_TILE: featuresPath.concat('codec-tile/codec-tile-template.html'),
      METHOD_SELECTION: featuresPath.concat('method-selection/method-selection-template.html'),
      AUDIO_CODEC_SUPPORT: featuresPath.concat('audio-codec-support/audio-codec-support-template.html'),
      VIDEO_CODEC_SUPPORT: featuresPath.concat('video-codec-support/video-codec-support-template.html')
    };
  }

})();
