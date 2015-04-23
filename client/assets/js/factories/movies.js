app.factory('MoviesFactory', function($http, $q) { // probleme $scope  - finir la factory avec graphikart
	var factory = {
		movie : false,
		movies : false,
		getMovie : function(depot,id) {
			var deferred = $q.defer();
				$http.get(depot+'resource/movie/id/'+id)
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Erreur : Pas de contenu');
					}else{
						factory.movie = data;
						deferred.resolve(factory.movie); 
					}
				}).error(function(data, status){
					deferred.reject('Erreur : impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		getMovies : function(depot) {
			var deferred = $q.defer();
				$http.get(depot+'resolver/movie/')
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Erreur : Pas de contenu');
					}else{
						factory.movies = data;
						deferred.resolve(factory.movies); 
					}
				}).error(function(data, status){
					deferred.reject('Erreur : impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		getMoviesMe : function(depot, key_user) {
			var deferred = $q.defer();
				$http.get(depot+'?resolver&movies&key_user='+key_user)
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Erreur : Pas de contenu');
					}else{
						factory.movies = data;
						deferred.resolve(factory.movies); 
					}
				}).error(function(data, status){
					deferred.reject('Erreur : impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		addMovie: function(depot, data) { // A refaire
			var deferred = $q.defer();
				$http.post(depot+'resource/movie/', data, {headers:{'Content-Type': 'application/json'}})
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Erreur : Pas de contenu');
					}else{
						deferred.resolve('Film ajouté'); 
					}
				}).error(function(data, status){
					deferred.reject('Erreur : impossible d\'ajouter le film');
				})
				return deferred.promise;
		}
	}
	return factory;
})