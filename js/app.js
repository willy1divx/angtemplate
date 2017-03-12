var app = angular.module('myApp',['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/about', {
		templateUrl: 'about.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})



app.controller('myCtrl', function($scope){
	
	$scope.name = "Brian";
});




