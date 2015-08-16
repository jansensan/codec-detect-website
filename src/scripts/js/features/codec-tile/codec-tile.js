(function CodecTileModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.CodecTile', getDependencies())
    .controller('CodecTileController', CodecTileController)
    .directive('codecTile', CodecTile);

  /* @ngInject */
  function CodecTile(TemplatesPath) {
    return {
      restrict: 'E',
      controller: 'CodecTileController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        media: '@',
        codec: '@',
        support: '=',
        method: '='
      },
      templateUrl: TemplatesPath.CODEC_TILE
    };
  }

  /* @ngInject */
  function CodecTileController(
    CodecDetectMethod,
    SupportValue
  ) {

    // public api
    var vm = this;

    // methods
    vm.getLabel = getLabel;
    vm.getMediaStyle = getMediaStyle;
    vm.getSupportStyle = getSupportStyle;
    vm.isDetectingSupport = isDetectingSupport;

    // method definitions
    function isDetectingSupport() {
      return vm.support === SupportValue.PENDING;
    }

    function getMediaStyle() {
      var style;
      switch (vm.media) {
        case 'audio':
          style = 'audio-overlay';
          break;
        case 'video':
          style = 'video-overlay';
          break;
      }
      return style;
    }

    function getLabel() {
      var label;
      switch (vm.method) {
        case CodecDetectMethod.EXACT:
          if (vm.support === true || vm.support === 'true') {
            label = vm.codec.concat(' is supported');
          } else if (vm.support === false || vm.support === 'false') {
            label = vm.codec.concat(' is not supported');
          } else {
            label = vm.codec
              .concat(' is ')
              .concat(vm.support)
              .concat(' supported');
          }
          break;

        case CodecDetectMethod.OPTIMISTIC:
          if (vm.support !== false && vm.support !== 'false') {
            label = vm.codec.concat(' is supported');
          } else {
            label = vm.codec.concat(' is not supported');
          }
          break;

        case CodecDetectMethod.PESSIMISTIC:
          if (vm.support !== true && vm.support !== 'true') {
            label = vm.codec.concat(' is not supported');
          } else {
            label = vm.codec.concat(' is supported');
          }
          break;
      }
      return label;
    }

    function getSupportStyle() {
      var style;
      switch (vm.method) {
        case CodecDetectMethod.EXACT:
          if (vm.support === true || vm.support === 'true') {
            style = 'supported';
          } else if (vm.support === false || vm.support === 'false') {
            style = 'unsupported';
          } else {
            style = 'probably-supported';
          }
          break;

        case CodecDetectMethod.OPTIMISTIC:
          if (vm.support !== false && vm.support !== 'false') {
            style = 'supported';
          } else {
            style = 'unsupported';
          }
          break;

        case CodecDetectMethod.PESSIMISTIC:
          if (vm.support !== true && vm.support !== 'true') {
            style = 'unsupported';
          } else {
            style = 'supported';
          }
          break;
      }
      return style;
    }
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.CodecDetectMethods',
      'com.codecdetect.constants.SupportValues',
      'com.codecdetect.constants.TemplatesPaths',
      'com.codecdetect.Templates'
    ];
  }

})();
