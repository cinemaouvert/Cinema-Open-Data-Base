app.controller('ViewMovieController', function ($scope, $rootScope, MoviesFactory, $stateParams) {
  $scope.resource = MoviesFactory.getMovie($stateParams.depot, $stateParams.id).then(function(data){
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

