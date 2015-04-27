app.factory('MoviesFactory', function($http, $q) { // probleme $scope  - finir la factory avec graphikart
	var factory = {
		movie : false,
		movies : false,
		getMovie : function(depot,id) {
			var deferred = $q.defer();
				$http.get(depot+'resource/movie/id/'+id)
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Pas de contenu');
					}else{
						factory.movie = data;
						deferred.resolve(factory.movie); 
					}
				}).error(function(data, status){
					deferred.reject('Impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		getMovies : function(depot) {
			var deferred = $q.defer();
				$http.get(depot+'resolver/movie/')
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Pas de contenu');
					}else{
						factory.movies = data;
						deferred.resolve(factory.movies); 
					}
				}).error(function(data, status){
					deferred.reject('Impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		getMoviesMe : function(depot, key_user) {
			var deferred = $q.defer();
				$http.get(depot+'?resolver&movies&key_user='+key_user)
				.success(function(data, status){
					if(status == "204"){
						deferred.reject('Pas de contenu');
					}else{
						factory.movies = data;
						deferred.resolve(factory.movies); 
					}
				}).error(function(data, status){
					deferred.reject('Impossible de se connecter au depot');
				})
				return deferred.promise;
		},
		addMovie: function(depot, data) { 
			var deferred = $q.defer();
			$http({

                    url: depot+'resource/movie/',
                    data: data,
                    method: 'POST',
                    headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

                })
				.success(function(data, status){
					if(status == "204"){
						deferred.reject(data);
					}else{
						deferred.resolve(data);
					}
				}).error(function(data, status){
					deferred.reject('Impossible d\'ajouter le film');
				})
				return deferred.promise;
		}
	}
	return factory;
})