app.controller('ViewMovieController', function ($scope, $rootScope, MoviesFactory, AttachmentsFactory, $stateParams, FoundationApi, $location) {

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

  $scope.DeleteMovie = function() {

    $scope.auth = 
      {
        _api_key_user : $rootScope.client_depots[0].user_key,
        _api_key_password : $rootScope.client_depots[0].user_password,
        _api_key_access : $rootScope.client_depots[0].depot_key_password
      };

    if (angular.isDefined( $scope.resource ) && angular.isDefined( $scope.resource._api_data.images_from_movie )) {
      AttachmentsFactory.delAttachment($scope.resource._api_data.images_from_movie[1]._api_rsc_link._depot, $scope.auth, $scope.resource._api_data.images_from_movie[1]._api_rsc_link._id).then(function(data){});
    }

    if (angular.isDefined( $scope.resource ) && angular.isDefined( $scope.resource._api_data.attached_pdf )) {
      AttachmentsFactory.delAttachment($scope.resource._api_data.attached_pdf[1]._api_rsc_link._depot, $scope.auth, $scope.resource._api_data.attached_pdf[1]._api_rsc_link._id).then(function(data){});
    }

    MoviesFactory.delMovie($scope.resource._api_rsc._depot, $scope.auth, $scope.resource._api_rsc._id).then(function(data){
      FoundationApi.publish('notification-panel', { title: 'Film supprimé !', content: '', color: 'success' });
      $location.path("ListMoviesController");
    });

  }

  
  
});

