'use strict';

/**
 * @ngdoc function
 * @name escalaAppApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the escalaAppApp
 */
angular.module('escalaAppApp')
  .controller('PessoaCtrl', ['$scope', '$routeParams', '$location', 'Ref', '$firebaseObject',
    function ($scope, $routeParams, $location, Ref, $firebaseObject) {
      $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];
      var uid;
      $scope.semana = [
      {dia:'DOM', escolhido: false},
      {dia:'SEG', escolhido: false},
      {dia:'TER', escolhido: false},
      {dia:'QUA', escolhido: false},
      {dia:'QUI', escolhido: false},
      {dia:'SEX', escolhido: false},
      {dia:'SAB', escolhido: false},];

      if($routeParams.uid){
        $firebaseObject(Ref.child('pessoa').child($routeParams.uid)).$loaded().then(function (pessoa) {
          $scope.pessoa = pessoa;
          $scope.semana = pessoa.semana;
        });
      } else {
        uid = new Date().getTime().toString();
        $scope.pessoa = $firebaseObject(Ref.child('pessoa').child(uid));
      }

      console.log('Pessoas', $scope.pessoa);

      $scope.salvar = function () {
          $scope.pessoa.semana = $scope.semana;
          if(uid) {
            $scope.pessoa.uid = uid;
          }
          $scope.pessoa.$save();
      };

  }]);
