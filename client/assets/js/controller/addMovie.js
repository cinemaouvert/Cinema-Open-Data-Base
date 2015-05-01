app.controller('AddMovieController', function ($scope, $rootScope, AttachmentsFactory, MoviesFactory, FoundationApi, $location) {
  $rootScope.title = "Ajout d'un film";
  $scope.Tab1 = true;
  $scope.Tab2 = false;
  $scope.Tab3 = false;
  $scope.Tab4 = false;
  $scope.Tab5 = false;
  $scope.submitMovie = function() {
    if (angular.isDefined( $scope.movie ) && angular.isDefined( $scope.movie.original_title ) && angular.isDefined( $scope.movie.genre ) && angular.isDefined( $scope.movie.pitch )) {

      if (angular.isDefined( $scope.movie ) && angular.isDefined( $scope.movie.images_from_movie )) {
        $scope.attachment = 
          {
            _api_key_user : $rootScope.client_depots[0].user_key,
            _api_key_password : $rootScope.client_depots[0].user_password,
            _api_key_access : $rootScope.client_depots[0].depot_key_password,
            _api_data : 
            {
              data_type : $scope.movie.images_from_movie.filetype,
              data : $scope.movie.images_from_movie.base64
            }
          };
        AttachmentsFactory.addAttachment($rootScope.client_depots[0].href,$scope.attachment).then(function(data){
          $scope.movie.images_from_movie = 
            {
              1 : 
              {
                type : 'poster',
                _api_rsc_link : 
                {
                  _name : data._api_rsc._name,
                  _id : data._api_rsc._id,
                  _depot : data._api_rsc._depot
                }
              }
            };
          if (angular.isDefined( $scope.movie ) && angular.isDefined( $scope.movie.attached_pdf )) {
            $scope.attachment = 
            {
              _api_key_user : $rootScope.client_depots[0].user_key,
              _api_key_password : $rootScope.client_depots[0].user_password,
              _api_key_access : $rootScope.client_depots[0].depot_key_password,
              _api_data : 
              {
                data_type : $scope.movie.attached_pdf.filetype,
                data : $scope.movie.attached_pdf.base64
              }
            };
            AttachmentsFactory.addAttachment($rootScope.client_depots[0].href,$scope.attachment).then(function(data){
              $scope.movie.attached_pdf = 
              {
                1 : 
                {
                  type : 'pdf',
                  _api_rsc_link : 
                  {
                    _name : data._api_rsc._name,
                    _id : data._api_rsc._id,
                    _depot : data._api_rsc._depot
                  }
                }
              };
              $scope.moviePost = 
                {
                  _api_key_user : $rootScope.client_depots[0].user_key,
                  _api_key_password : $rootScope.client_depots[0].user_password,
                  _api_key_access : $rootScope.client_depots[0].depot_key_password,
                  _api_data : $scope.movie
                };
              MoviesFactory.addMovie($rootScope.client_depots[0].href,$scope.moviePost).then(function(data){
                FoundationApi.publish('notification-panel', { title: 'Film Ajouté !', content: '', color: 'success' });
                $location.path("ListMoviesController");
              }, function(data){
                FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: 'Votre film n\'a pas était ajouté', color: 'alert' });
              })
            });
          }else{
              $scope.moviePost = 
                {
                  _api_key_user : $rootScope.client_depots[0].user_key,
                  _api_key_password : $rootScope.client_depots[0].user_password,
                  _api_key_access : $rootScope.client_depots[0].depot_key_password,
                  _api_data : $scope.movie
                };
              MoviesFactory.addMovie($rootScope.client_depots[0].href,$scope.moviePost).then(function(data){
                FoundationApi.publish('notification-panel', { title: 'Film Ajouté !', content: '', color: 'success' });
                $location.path("ListMoviesController");
              }, function(data){
                FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: 'Votre film n\'a pas était ajouté', color: 'alert' });
              })
          }  
        }, function(data){
          images_from_movie = true;
        });
      }else{
          if (angular.isDefined( $scope.movie ) && angular.isDefined( $scope.movie.attached_pdf )) {
            $scope.attachment = 
            {
              _api_key_user : $rootScope.client_depots[0].user_key,
              _api_key_password : $rootScope.client_depots[0].user_password,
              _api_key_access : $rootScope.client_depots[0].depot_key_password,
              _api_data : 
              {
                data_type : $scope.movie.attached_pdf.filetype,
                data : $scope.movie.attached_pdf.base64
              }
            };
            AttachmentsFactory.addAttachment($rootScope.client_depots[0].href,$scope.attachment).then(function(data){
              $scope.movie.attached_pdf = 
              {
                1 : 
                {
                  type : 'pdf',
                  _api_rsc_link : 
                  {
                    _name : data._api_rsc._name,
                    _id : data._api_rsc._id,
                    _depot : data._api_rsc._depot
                  }
                }
              };
              $scope.moviePost = 
                {
                  _api_key_user : $rootScope.client_depots[0].user_key,
                  _api_key_password : $rootScope.client_depots[0].user_password,
                  _api_key_access : $rootScope.client_depots[0].depot_key_password,
                  _api_data : $scope.movie
                };
              MoviesFactory.addMovie($rootScope.client_depots[0].href,$scope.moviePost).then(function(data){
                FoundationApi.publish('notification-panel', { title: 'Film Ajouté !', content: '', color: 'success' });
                $location.path("ListMoviesController");
              }, function(data){
                FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: 'Votre film n\'a pas était ajouté', color: 'alert' });
              })
            });
          }else{
              $scope.moviePost = 
                {
                  _api_key_user : $rootScope.client_depots[0].user_key,
                  _api_key_password : $rootScope.client_depots[0].user_password,
                  _api_key_access : $rootScope.client_depots[0].depot_key_password,
                  _api_data : $scope.movie
                };
              MoviesFactory.addMovie($rootScope.client_depots[0].href,$scope.moviePost).then(function(data){
                FoundationApi.publish('notification-panel', { title: 'Film Ajouté !', content: '', color: 'success' });
                $location.path("ListMoviesController");
              }, function(data){
                FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: 'Votre film n\'a pas était ajouté', color: 'alert' });
              })
          }
      }



      
        
    

    }
    else{
      FoundationApi.publish('notification-panel', { title: 'Erreur :(', content: 'Vous n\'avez pas rempli les champs obligatoire', color: 'alert' });
    }
  }
});