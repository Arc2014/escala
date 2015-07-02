'use strict';

angular.module('escalaAppApp')
  .service('EscalaService', [ 'Ref', '$firebaseArray', function (Ref, $firebaseArray) {

    return {
      carregarListaMinistros: function () {
        return $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('MINISTRO')).$loaded();
      },

      carregarListaCoroinhas: function () {
        return $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('COROINHA')).$loaded();
      },

      carregarListaPadres: function () {
        return $firebaseArray(Ref.child('pessoa').orderByChild('funcao').equalTo('PADRE')).$loaded();
      }
    }

  }]);
