angular.module('KopfrechnenApp').controller('TimeTrainingController', ["$scope", "$location", "TrainingService",
function($scope, $location, TrainingService)
{
	$scope.TimeTrainingConfiguration = new TimeTrainingConfiguration();
	
	$scope.StartTimeTraining = function() {
		TrainingService.initialize($scope.TimeTrainingConfiguration, $scope.Difficulty);
		$location.path("/exercise");
	}
}]);
