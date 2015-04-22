app.controller('AddMovieController', function ($scope, $rootScope, MoviesFactory) {
  $rootScope.title = "Ajout d'un film";
  $scope.Tab1 = true;
  $scope.Tab2 = false;
  $scope.Tab3 = false;
  $scope.Tab4 = false;
  $scope.Tab5 = false;
});