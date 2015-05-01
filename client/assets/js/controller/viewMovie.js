app.controller('ViewMovieController', function ($scope, $rootScope, MoviesFactory, $stateParams, FoundationApi, $location) {

  $scope.resource = MoviesFactory.getMovie($stateParams.depot, $stateParams.id).then(function(data){
    $scope.resource = data;
    if ($scope.resource._api_key_user == $rootScope.client_depots[0].user_key) {
    $scope.option = true;
    $scope.optionEdit = true;
    $scope.optionDelete = true;
    }else{
      $scope.option = false;
      $scope.optionEdit = false;
      $scope.optionDelete = false;
    }
  }, function(msg){
    FoundationApi.publish('notification-fail', {
                        title: 'Erreur :(',
                        content: msg,
                        color: 'alert'
                    });
    $location.path("ListMoviesController");
  });

  $rootScope.title = 'Consultation d\'un film';
  $scope.Tab1 = true;
  $scope.Tab2 = false;
  $scope.Tab3 = false;
  $scope.Tab4 = false;
  $scope.Tab5 = false;

  
  
});

