app.controller('AddMovieController', function ($scope, $rootScope, AttachmentsFactory) {
  $rootScope.title = "Ajout d'un film";
  $scope.Tab1 = true;
  $scope.Tab2 = false;
  $scope.Tab3 = false;
  $scope.Tab4 = false;
  $scope.Tab5 = false;
  $scope.submitMovie = function() {
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
    	$scope.results = AttachmentsFactory.addAttachment($rootScope.client_depots[0].href,$scope.attachment).then(function(msg){
			alert(msg);
			}, function(msg){
				alert(msg);
			})
    }
});