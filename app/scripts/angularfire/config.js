angular.module('firebase.config', [])
  .constant('FBURL', 'https://escalaapp.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])
  .constant('loginRedirectPath', '/login');
