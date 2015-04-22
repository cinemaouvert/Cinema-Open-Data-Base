app.controller('ListMoviesController', function ($scope, $rootScope, MoviesFactory) {
  $rootScope.title = "Liste des films";
  $scope.OptionListCard = true;
  $scope.OptionListList = false;
  $scope.resources = MoviesFactory.getMovies($rootScope.client_depots[0].href).then(function(data){
    $scope.resources = data;
  }, function(msg){
    alert(msg);
  });
});