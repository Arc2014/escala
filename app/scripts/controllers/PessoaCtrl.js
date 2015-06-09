'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('PessoaCtrl', ['$scope', 'PessoaService', function ($scope, PessoaService) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];
    $scope.salvar = function () {
        PessoaService.salvar($scope.pessoa);
    };
  }]);
