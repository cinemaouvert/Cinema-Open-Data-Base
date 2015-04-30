app.controller('ListMoviesController', function ($scope, $rootScope, MoviesFactory, FoundationApi) {
  $rootScope.title = "Liste des films";
  $scope.OptionListCard = true;
  $scope.OptionListList = false;
  $scope.Loader = true;
  $scope.resources = MoviesFactory.getMovies($rootScope.client_depots[0].href).then(function(data){
    $scope.resources = data;
    $scope.Loader = false;
  }, function(msg){
    FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: msg, color: 'alert' });
  });
});