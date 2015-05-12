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

app.controller("AppController", function($scope,$rootScope, FoundationApi, $location, $window) {
  $rootScope.client_depots = 
    [
      {
        href : localStorage.client_depots_1_href,
        depot_key_password : localStorage.client_depots_1_depot_key_password,
        user_key : localStorage.client_depots_1_user_key,
        user_password : localStorage.client_depots_1_user_password
      },
    ];
  $scope.submitConfig = function() {
    localStorage.setItem("client_depots_1_href", $scope.client_depots[0].href);
    localStorage.setItem("client_depots_1_depot_key_password", $scope.client_depots[0].depot_key_password);
    localStorage.setItem("client_depots_1_user_key", $scope.client_depots[0].user_key);
    localStorage.setItem("client_depots_1_user_password", $scope.client_depots[0].user_password);
    $window.location.reload();
  }
  $scope.submitInit = function() {
    localStorage.setItem("client_depots_1_href", $scope.init.client_depots[0].href);
    $window.location.reload();
  }
});

app.directive('baseSixtyFourInput', ['$window', function ($window) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModel) {
      var fileObject = {};

      scope.readerOnload = function(e){
        var base64 = _arrayBufferToBase64(e.target.result);
        fileObject.base64 = base64;
        scope.$apply(function(){
          ngModel.$setViewValue(fileObject);
        });
      };

      var reader = new FileReader();
      reader.onload = scope.readerOnload;

      elem.on('change', function() {
        var file = elem[0].files[0];
        fileObject.filetype = file.type;
        fileObject.filename = file.name;
        fileObject.filesize = file.size;
        reader.readAsArrayBuffer(file);
      });

      //http://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
      function _arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return $window.btoa( binary );
      }
    }
  };
}]);

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