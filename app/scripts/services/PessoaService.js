'use strict';

/**
 * @ngdoc service
 * @name escalaAppApp.pessoa
 * @description
 * # pessoa
 * Service in the escalaAppApp.
 */
angular.module('escalaAppApp').service('PessoaService', ['Ref', '$firebase', '$firebaseArray', '$firebaseObject', function (Ref, $firebase, $firebaseArray, $firebaseObject) {
  var pessoaRef = Ref.child('pessoa');

  return {
    gerarId : function () {
      return new Date().getTime().toString();
    },

    salvar: function (pessoa) {
        pessoa.$save();
    },

    listar: function (){
      return $firebaseArray(pessoaRef);
    },

    remover: function (p) {
      $firebaseArray(pessoaRef).$remove(p);
    },

    buscarPessoaPorId: function (uid) {
      if(!uid){
        var pessoa = pessoaRef.child(uid);
        return pessoa;
      }
    }
  };

}]);
