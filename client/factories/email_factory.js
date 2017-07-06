app.factory('EmailFactory', function($http){
	console.log('instanciating email factory');
	var factory = {};

	factory.create = function(email,callback){
		$http.post('/email',email).then(function(res){
			if(!res.data.errors){
				callback(res);
			}else {
				callback(res);
			}
		})
	}	
	factory.index = function(callback){
		$http.get('/email').then(function(res){
			callback(res);
		})
	}
	return factory;
});	