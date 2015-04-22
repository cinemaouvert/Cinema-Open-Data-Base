var app = angular.module('application', [
  'ui.router',
  'ngAnimate',

  //foundation
  'foundation',
  'foundation.dynamicRouting',
  'foundation.dynamicRouting.animations'
])
  .config(config)
  .run(run)
  ;

config.$inject = ['$urlRouterProvider', '$locationProvider'];

app.controller("AppController", function($scope,$rootScope) {
  $rootScope.client_depots = 
    [
      {
        href : 'http://localhost:8888/codb-depot/codb-depot-file/',
        depot_key_password : '',
        user_key : '',
        user_password : ''
      },
    ];
});

app.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});

function config($urlProvider, $locationProvider) {
$urlProvider.otherwise('/');

$locationProvider.html5Mode({
  enabled:false,
  requireBase: false
});

$locationProvider.hashPrefix('!');
}

function run() {
FastClick.attach(document.body);
}