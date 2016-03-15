angular.module('testApi')
	.controller('mainCtrl', function($scope, mainSvc) {
	
	
		mainSvc.getUsers().then(function(users) {
			$scope.users = users.data;
		})
})