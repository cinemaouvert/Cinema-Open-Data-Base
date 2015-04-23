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
		}
	}
	return factory;
})