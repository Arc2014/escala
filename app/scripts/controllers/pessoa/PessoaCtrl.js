'use strict';

angular.module('escalaAppApp')
  .controller('PessoaCtrl', ['$scope', '$routeParams', '$location', 'Ref', '$firebaseObject', 'uiCalendarConfig', '$compile',
    function ($scope, $routeParams, $location, Ref, $firebaseObject, uiCalendarConfig, $compile) {
      var uid;
      $scope.agenda = $scope.agenda || [];
      $scope.mensagemSucesso = '';
      $scope.mensagensErro = [];
      $scope.impedimentos = [];

      function montarImpedimentosParaSalvar (jsonsImpedimento) {
        var datasImpedimento = [];
        angular.forEach(jsonsImpedimento, function (item) {
          datasImpedimento.push(item.start.format());
        });
        return datasImpedimento;
      };

      function montarImpedimentosParaCalendario (datasImpedimento) {
        angular.forEach(datasImpedimento, function (item) {
          $scope.impedimentos.push({title: 'IMPEDIMENTO', start: moment(item)});
        });
      };

      function init () {
        if($routeParams.uid){
          $firebaseObject(Ref.child('pessoa').child($routeParams.uid)).$loaded().then(function (pessoa) {
            $scope.pessoa = pessoa;
            montarImpedimentosParaCalendario(pessoa.datasIndisponiveis);
          });
        } else {
          uid = new Date().getTime().toString();
          $scope.pessoa = $firebaseObject(Ref.child('pessoa').child(uid));
        }
      };

      init();

      function dayClick (date, jsEvent, view) {
        var json = {title: 'IMPEDIMENTO', start: date};
        $scope.impedimentos.push(json);
      };

      function eventClick (date, jsEvent, view) {
        var i;
        for(i = 0; i < $scope.impedimentos.length; i++){
          if($scope.impedimentos[i].start.format() === date.start.format()){
            $scope.impedimentos.splice(i,1);
          }
        }
      };

      /* config object */
      $scope.uiConfig = {
        calendar:{
          lang: 'pt',
          titleFormat: 'MMMM YYYY',
          height: 450,
          editable: true,
          dayClick: dayClick,
          eventClick: eventClick,
          events : $scope.impedimentos,
          header:{
            left: 'title',
            center: '',
            right: 'today prev,next'
          }
        }
      };

      $(function () {
        $('#abas a:last').tab('show');
      });

      $scope.salvar = function () {
        $scope.mensagemSucesso = '';
        $scope.mensagensErro = [];
        $scope.pessoa.datasIndisponiveis = montarImpedimentosParaSalvar($scope.impedimentos);
          if(uid) {
            $scope.pessoa.uid = uid;
          }
          $scope.pessoa.$save().then(function () {
            $scope.mensagemSucesso = 'Pessoa cadastrada com sucesso!';
          }).catch(function () {
            $scope.mensagensErro.push('Ocorreu um erro ao tentar salvar esta Pessoa');
          });
      };

  }]);
