app.controller('ViewMovieController', function ($scope, $rootScope, MoviesFactory) {
  $scope.resource = MoviesFactory.getMovie($rootScope.client_depots[0].href, '1').then(function(data){
    $scope.resource = data;
  }, function(msg){
    alert(msg);
  });
  $rootScope.title = 'Consultation d\'un film';
  $scope.Tab1 = true;
  $scope.Tab2 = false;
  $scope.Tab3 = false;
  $scope.Tab4 = false;
  $scope.Tab5 = false;
});

