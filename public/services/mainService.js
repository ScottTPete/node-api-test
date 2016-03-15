angular.module('testApi')
	.service('mainSvc', function($http) {
	
	this.getUsers = function(){
		return $http({
			method: "GET",
			url: '/api/v1/users'
		})
	}
	
})