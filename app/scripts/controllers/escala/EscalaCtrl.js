'use strict';

angular.module('escalaAppApp')
  .controller('EscalasCtrl',['$scope', 'Ref', '$firebaseArray', 'EscalaService',  function ($scope, Ref, $firebaseArray, EscalaService) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    var uid;
    $scope.mensagemSucesso = '';
    $scope.mensagensErro = [];

    $scope.padres = $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('PADRE'));
    $scope.coroinhas = $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('COROINHA'));
    $scope.ministros = $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('MINISTRO'));

  }]);
