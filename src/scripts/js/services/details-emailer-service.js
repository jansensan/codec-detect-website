(function DetailsEmailerModule() {

  'use strict';

  angular
    .module('com.codecdetect.services.DetailsEmailer', [])
    .factory('detailsEmailer', DetailsEmailer);

  /* @ngInject */
  function DetailsEmailer($http) {
    // public api
    var _service = {
      send: send
    };
    return _service;

    // methods definitions
    function send(data) {
      var url = 'http://codecdetect.com/scripts/php/email-details.php';

      return $http.post(url, data);
    }
  }

})();
