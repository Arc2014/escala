'use strict';

angular.module('escalaAppApp')
  .controller('EscalasCtrl', function ($scope) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    var uid;
    $scope.mensagemSucesso = '';
    $scope.mensagensErro = [];
  });
