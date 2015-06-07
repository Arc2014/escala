'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('MainCtrl', function ($scope, Auth) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
