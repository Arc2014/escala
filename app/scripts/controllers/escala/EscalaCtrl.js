'use strict';

angular.module('escalaAppApp')
  .controller('EscalaCtrl',['$scope','$q', 'Ref', 'EscalaService', '$firebaseObject',
    function ($scope, $q, Ref, EscalaService, $firebaseObject) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    $scope.mensagemSucesso = '';
    $scope.mensagensErro = [];
    var uid;

    var init = function () {
      uid = uid = new Date().getTime().toString();
      $scope.escala = $firebaseObject(Ref.child('escala').child(uid));
      EscalaService.carregarListaPadres().then(function (padres) {
        $scope.padres = padres;
      });
      EscalaService.carregarListaCoroinhas().then(function (coroinhas) {
        $scope.coroinhas = coroinhas;
      });;
      EscalaService.carregarListaMinistros().then(function (ministros) {
        $scope.ministros =  ministros;
      });;
    };

    $scope.abrirModal = function () {
      $scope.indice = '';
      $scope.evento = {};
      $('#idModalEvento').modal('show');
    };

    $scope.adicionarEvento = function() {
      if(!$scope.escala.eventos){
        $scope.escala.eventos = [];
      }
      $scope.escala.eventos.push($scope.evento);
      $('#idModalEvento').modal('hide');
    };

    $scope.editarEvento = function(index) {
      $scope.evento = angular.copy($scope.escala.eventos[index]);
      $scope.indice = index
      $('#idModalEvento').modal('show');
    };

    $scope.alterarEvento = function () {
      $scope.escala.eventos[$scope.indice] = angular.copy($scope.evento);
      $('#idModalEvento').modal('hide');
    };

    $scope.salvar = function () {
      $scope.escala.$save().then(function () {
        $scope.mensagemSucesso = 'Escala salva com sucesso!'
      });
    };

    init();
  }]);
