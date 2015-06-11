'use strict';

angular.module('escalaAppApp')
  .controller('PessoaCtrl', ['$scope', '$routeParams', '$location', 'Ref', '$firebaseObject',
    function ($scope, $routeParams, $location, Ref, $firebaseObject) {
      $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS', 'Karma'];

      $scope.alertOnEventClick = function(){
        alert(' was clicked ');
      };

      /* config object */
      $scope.uiConfig = {
        calendar:{
          height: 450,
          editable: true,
          dayClick: function(date, jsEvent, view) {

            alert('Clicked on: ' + date.format());

            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

            alert('Current view: ' + view.name);
            // change the day's background color just for fun
            $(this).css('background-color', 'red');
          },
          header:{
            left: 'title',
            center: '',
            right: 'today prev,next'
          },
          eventClick: $scope.alertOnEventClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize,
          eventRender: $scope.eventRender
        }
      };

      $scope.uiConfig.calendar.dayNamesShort = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
      console.log('$scope.uiConfig.calendar', $scope.uiConfig.calendar);
      $scope.evento = [
        {title: 'Primeiro Evento',start: new Date()}
      ];

      $scope.agenda = [];

      $(function () {
        $('#abas a:last').tab('show');
      });

      var uid;
      $scope.mensagemSucesso = '';
      $scope.mensagensErro = [];
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

      $scope.salvar = function () {
        $scope.mensagemSucesso = '';
        $scope.mensagensErro = [];
        $scope.pessoa.semana = $scope.semana;
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
