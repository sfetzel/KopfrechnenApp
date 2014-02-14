var SpecificExerciseFactory = require("./SpecificExerciseFactory");
var factory = new SpecificExerciseFactory();

angular.module('KopfrechnenApp').controller('TrainingController', ["$scope", "TrainingService",
function ($scope, TrainingService)
{
	$scope.Difficulty = 10;

	$scope.getMinimumNumber = function(){
		return factory.getMinimumNumber($scope.Difficulty);
	}
	
	$scope.getMaximumNumber = function(){
		return factory.getMaximumNumber($scope.Difficulty);
	}
  
	$scope.Show = function() {
		return (TrainingService.getTraining() === undefined) &&
			(TrainingService.getTrainingReport() === undefined);
	}
}]);
