angular.module('pgaApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			});

	});

//Main Controller
angular.module('pgaApp').controller('MainCtrl', function($scope, $http){
	
	//addGolfer
	$scope.addGolfer = function(golfer){
		$http.post('/golfer', golfer).success(function(response){
			console.log(response);
		});
	};

	//get golfers
	$http.get('/golfers').success(function(response){
		$scope.golfers = response;
	})
});