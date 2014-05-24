
var app = angular.module('Application', []);

app.factory('$socket', function() {
	return io.connect(window.location.origin);
});

app.controller('applicationController', function($scope, $socket) {
	
});
