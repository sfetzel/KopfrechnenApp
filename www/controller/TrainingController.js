angular.module('KopfrechnenApp').controller('TrainingController', ["$scope", "TrainingService",
function ($scope, TrainingService)
{
	$scope.Difficulty = 35;
  
	$scope.Show = function() {
		return (TrainingService.getTraining() === undefined);
	}
}]);
