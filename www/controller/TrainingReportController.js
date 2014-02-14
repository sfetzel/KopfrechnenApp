angular.module('KopfrechnenApp').controller('TrainingReportController', ["$scope", "TrainingService",
function ($scope, TrainingService)
{
	$scope.getReport = function(){
		return TrainingService.getTrainingReport();
	}
	
	$scope.Show = function(){
		return TrainingService.getTrainingReport() !== undefined;
	}
	
	$scope.Destroy = function(){
		TrainingService.destroyTrainingReport();
	}
}]);
