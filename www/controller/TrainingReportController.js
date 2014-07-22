angular.module('KopfrechnenApp').controller('TrainingReportController', ["$scope", "$location", "TrainingService",
function ($scope, $location, TrainingService)
{
	$scope.getReport = function(){
		return TrainingService.getTrainingReport();
	}
	
	$scope.Destroy = function(){
		TrainingService.destroyTrainingReport();
		$location.path("/");
	}
}]);
