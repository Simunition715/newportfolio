var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html',
		controller: 'EmailsController as EC'
	})
	.otherwise('/')
})