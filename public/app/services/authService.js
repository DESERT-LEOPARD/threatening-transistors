angular.module('app.authFact', [])
.factory('authFactory', function($q, $http){
	var login = function(email, password){
		console.log("authFactory getting email: " + email + ", password: " + password);
		return $http({
			method: 'POST',
			url: '/login',
			data: {email: email, password: password}
		}).then(function(res){
			console.log(res);
		});
	}

	var signup = function(email, name, password){
		console.log("authFactory signup getting email: " + email + ", name: " + name + ", password: " + password);
		return $http({
			method: 'POST',
			url: '/signup',
			data: {email: email, name: name, password: password}
		}).then(function(res){
			console.log(res);
		});
	}

	return {
		login: login,
		signup: signup
	}
});