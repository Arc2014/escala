'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('PessoaCtrl', ['$scope', 'PessoaService', '$routeParams', '$location', function ($scope, PessoaService, $routeParams, $location) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];
    $scope.semana = [
      {dia:'DOM', escolhido: false},
      {dia:'SEG', escolhido: false},
      {dia:'TER', escolhido: false},
      {dia:'QUA', escolhido: false},
      {dia:'QUI', escolhido: false},
      {dia:'SEX', escolhido: false},
      {dia:'SAB', escolhido: false},];

    var uid = $routeParams.uid || PessoaService.gerarId();
    $scope.pessoa = PessoaService.buscarPessoaPorId(uid);

    console.log('Pessoas', $scope.pessoa);

    $scope.salvar = function () {
        $scope.pessoa.semana = $scope.semana;
        $scope.pessoa.uid = uid;
        console.log($scope.pessoa);
        PessoaService.salvar($scope.pessoa);
    };


  }]);
