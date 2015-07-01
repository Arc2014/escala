'use strict';

angular.module('escalaAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ui.calendar',
    'ui.bootstrap.datetimepicker'
  ]).run(['$rootScope', 'Auth', '$location', function ($rootScope, Auth, $location) {
    $rootScope.logout = function() { Auth.$unauth();
      $location.path('/');
    };
}]);
