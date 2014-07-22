var KopfrechnenApp = angular.module('KopfrechnenApp', ['ngTouch', 'ngRoute']);

// configure our routes
KopfrechnenApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'views/Training.html'
		}).when('/exercise', {
			templateUrl : 'views/Exercise.html',
			controller  : 'ExerciseController'
		})
		.when('/report', {
			templateUrl : 'views/TrainingReport.html',
			controller  : 'TrainingReportController'
		})

});
