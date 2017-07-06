app.controller('EmailsController', function(EmailFactory, $location, $routeParams){
	console.log('instanciating email controller...');
	var self = this;
	var emails = [];

	self.email = function(email){
		console.log(email);
		EmailFactory.create(email, function(res){
			if(res.data.errors){
				console.log(res.data);
				for(key in res.data.errors){
					var error = res.data.errors[key]	
				}
			}else {
				console.log('Success');
			}
		})
	}
	self.index = function(){
		EmailFactory.index(function(res){
			if(res.data.errors){
				console.log(res.data.errors)
			}else{
				console.log(res.data);
				self.emails = res.data;

			}	
		})
	}

});