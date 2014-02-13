angular.module('KopfrechnenApp').controller('TimeTrainingController', ["$scope", "TrainingService",
function($scope, TrainingService)
{
	$scope.TimeTrainingConfiguration = new TimeTrainingConfiguration();
	
	$scope.StartTimeTraining = function() {
		TrainingService.initialize($scope.TimeTrainingConfiguration, $scope.Difficulty);
	}
}]);
