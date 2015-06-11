'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:ListapessoaCtrl
 * @description
 * # ListapessoaCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('ListaPessoaCtrl', ['$scope','Ref', '$firebaseArray', function ($scope, Ref, $firebaseArray) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];

    $scope.pessoas = $firebaseArray(Ref.child('pessoa'));

  }]);
