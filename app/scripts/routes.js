'use strict';

angular.module('escalaAppApp')

  .config(['$routeProvider', 'SECURED_ROUTES', function($routeProvider, SECURED_ROUTES) {
    $routeProvider.whenAuthenticated = function(path, route) {
      route.resolve = route.resolve || {};
      route.resolve.user = ['Auth', function(Auth) {
        return Auth.$requireAuth();
      }];
      $routeProvider.when(path, route);
      SECURED_ROUTES[path] = true;
      return $routeProvider;
    };
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .whenAuthenticated('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/pessoa', {
        templateUrl: 'views/pessoa/pessoa.html',
        controller: 'PessoaCtrl'
      })
      .when('/pessoa/:uid', {
        templateUrl: 'views/pessoa/pessoa.html',
        controller: 'PessoaCtrl'
      })
      .when('/listaPessoa', {
        templateUrl: 'views/pessoa/listapessoa.html',
        controller: 'ListaPessoaCtrl'
      })
      .when('/listaEscala', {
        templateUrl: 'views/escala/listaescala.html',
        controller: 'ListaEscalaCtrl'
      })
      .when('/escala', {
        templateUrl: 'views/escala/escala.html',
        controller: 'PessoaCtrl'
      })
      .when('/escala/:uid', {
        templateUrl: 'views/escala/escala.html',
        controller: 'PessoaCtrl'
      })
      .otherwise({redirectTo: '/'});
  }])

  .run(['$rootScope', '$location', 'Auth', 'SECURED_ROUTES', 'loginRedirectPath',
    function($rootScope, $location, Auth, SECURED_ROUTES, loginRedirectPath) {
      Auth.$onAuth(check);

      $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
        if( err === 'AUTH_REQUIRED' ) {
          $location.path(loginRedirectPath);
        }
      });

      function check(user) {
        if( !user && authRequired($location.path()) ) {
          $location.path(loginRedirectPath);
        }
      }

      function authRequired(path) {
        return SECURED_ROUTES.hasOwnProperty(path);
      }
    }
  ])

  .constant('SECURED_ROUTES', {});
