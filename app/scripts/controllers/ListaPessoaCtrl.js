'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:ListapessoaCtrl
 * @description
 * # ListapessoaCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('ListaPessoaCtrl', ['$scope', 'PessoaService', function ($scope, PessoaService) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];

    $scope.pessoas = PessoaService.listar();

  }]);
