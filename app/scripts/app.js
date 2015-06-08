'use strict';

/**
 * @ngdoc overview
 * @name escalaAppApp
 * @description
 * # escalaAppApp
 *
 * Main module of the application.
 */
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
    'firebase.auth'
  ]).run(['$rootScope', 'Auth', function ($rootScope, Auth) {
    $rootScope.logout = function() { Auth.$unauth(); };
}]);
