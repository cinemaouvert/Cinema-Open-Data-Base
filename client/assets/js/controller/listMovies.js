app.controller('ListMoviesController', function ($scope, $rootScope, MoviesFactory, FoundationApi) {
  $rootScope.title = "Liste des films";
  $scope.OptionListCard = true;
  $scope.OptionListList = false;
  $scope.resources = MoviesFactory.getMovies($rootScope.client_depots[0].href).then(function(data){
    $scope.resources = data;
  }, function(msg){
    FoundationApi.publish('notification-fail', {
                        title: 'Erreur :(',
                        content: msg,
                        color: 'alert'
                    });
  });
});