(function SupportModelModule() {

  'use strict'

  angular
    .module('com.codecdetect.models.SupportModel', getDependencies())
    .factory('supportModel', SupportModel);

  /* @ngInject */
  function SupportModel(CodecDetectMethod) {

    // public api
    var _model = {
      // properties
      method: CodecDetect.method,
      // methods
      setAsExact: setAsExact,
      setAsOptimistic: setAsOptimistic,
      setAsPessimistic: setAsPessimistic,
      // audio support getters
      isAACAudioSupported: CodecDetect.isAACAudioSupported,
      isMP3AudioSupported: CodecDetect.isMP3AudioSupported,
      isOGGOpusAudioSupported: CodecDetect.isOGGOpusAudioSupported,
      isOGGVorbisAudioSupported: CodecDetect.isOGGVorbisAudioSupported,
      isWEBMAudioSupported: CodecDetect.isWEBMAudioSupported,
      isWaveAudioSupported: CodecDetect.isWaveAudioSupported,
      // video support getters
      isH264VideoSupported: CodecDetect.isH264VideoSupported,
      isMPEG4VideoSupported: CodecDetect.isMPEG4VideoSupported,
      isOGGVideoSupported: CodecDetect.isOGGVideoSupported,
      isWEBMVideoSupported: CodecDetect.isWEBMVideoSupported
    };
    return _model;

    // methods definitions
    function setAsExact() {
      CodecDetect.method = CodecDetectMethod.EXACT;
    }

    function setAsOptimistic() {
      CodecDetect.method = CodecDetectMethod.OPTIMISTIC;
    }

    function setAsPessimistic() {
      CodecDetect.method = CodecDetectMethod.PESSIMISTIC;
    }
  }

  function getDependencies() {
    return [
      'com.codecdetect.constants.CodecDetectMethods'
    ];
  }

})();
