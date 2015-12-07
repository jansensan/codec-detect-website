(function SendInfoFormModelModule() {

  'use strict';

  angular
    .module('com.codecdetect.features.SendInfoFormModel', getDependencies())
    .factory('sendInfoFormModel', SendInfoFormModel);

  /* @ngInject */
  function SendInfoFormModel(detailsEmailer) {

    // public api
    var _model = {
      // properties
      name: '',
      email: '',
      recipientEmail: '',
      // methods
      send: send
    };
    return _model;

    // method definitions
    function send() {
      // build data
      var data = {
        yourName: _model.name,
        yourEmail: _model.yourEmail,
        recipientsEmail: _model.recipientEmail
      };

      // send data
      detailsEmailer.send(data).then(
        onSentEmail,
        onFailedToSendEmail
      );

      // event handlers
      function onSentEmail(response) {
        var confirmation = 'Your email was sent to ' +
          _model.recipientEmail + '. ' +
          'Thanks for using Codec Detect!';
        alert(confirmation);
      }

      function onFailedToSendEmail(error) {
        var message = 'We could not complete your request, ' +
         'an error occured while attempting to send your email. ' +
         'Sorry for the inconvenience, please try later';
        alert(message);
      }
    }
  }

  function getDependencies() {
    return [
      'com.codecdetect.services.DetailsEmailer',
      'ngMessages'
    ]
  }

})();
