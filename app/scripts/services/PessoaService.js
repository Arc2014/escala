'use strict';

/**
 * @ngdoc service
 * @name escalaAppApp.pessoa
 * @description
 * # pessoa
 * Service in the escalaAppApp.
 */
angular.module('escalaAppApp').service('PessoaService', ['Ref', '$firebase', function (Ref, $firebase) {

  var gerarId = function (tipo) {
    return tipo.substr(0,1) + new Date().getTime().toString();
  };

  return {
    salvar: function (pessoa) {
      pessoa.uid = gerarId(pessoa.funcao);
      var pessoaRef = Ref.child('pessoa/' + pessoa.uid);
      pessoaRef.set(pessoa);
    }
  };

}]);
