var TimeTrainingConfiguration = require("./TimeTrainingConfiguration");
var TrainingMode =
{
	Time: 1,
	Count: 2
}
angular.module('KopfrechnenApp', []).service('TrainingService', function ()
{
	var training = undefined;
	
        var TrainingModeService = 
        {
        	initialize: function(TrainingConfiguration)
        	{
			training = TrainingConfiguration.create();
        	},
        	
        	getTraining: function()
        	{
        		return training;
        	}
        };
        
       return TrainingModeService;
	
}).controller('ExerciseController', ["$scope", "TrainingService", function($scope, TrainingService)
{
	$scope.Show = function()
	{
		return (TrainingService.getTraining() !== undefined);
	}
	
}]).controller('TrainingsController', ["$scope", "TrainingService", function ($scope, TrainingService)
{
	$scope.Difficulty = 1;
  
	$scope.TimeTrainingConfiguration = new TimeTrainingConfiguration();
	//$scope.CountTrainingConfiguration = new CountTrainingConfiguration();
	
	$scope.Show = function() {
		return (TrainingService.getTraining() === undefined);
	}
	
	$scope.StartTimeTraining = function()
	{
		TrainingService.initialize($scope.TimeTrainingConfiguration);
	}
	
	$scope.StartCountTraining = function()
	{
		
	}
}]);
