app.factory('AttachmentsFactory', function($http, $q) { 
	var factory = {
		Attachment : false,
		addAttachment: function(depot, data) { 
			var deferred = $q.defer();
			$http({

                    url: depot+'resource/attachment/',
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
					deferred.reject('Erreur : impossible d\'ajouter le film');
				})
				return deferred.promise;
		},
		delAttachment : function(depot,id) {
			var deferred = $q.defer();
			$http.delete(depot+'resource/attachment/id/'+id)
			.success(function(data, status){
				deferred.resolve('Film supprimé'); 
			}).error(function(data, status){
				if(status == "404"){
					deferred.reject('Pas de contenu');
				}else{
					factory.movie = data;
					deferred.resolve(factory.movie); 
				}
				deferred.reject('Impossible de se connecter au depot');
			})
			return deferred.promise;
		}
	}
	return factory;
})