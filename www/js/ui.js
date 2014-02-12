var TimeTrainingConfiguration = require("./TimeTrainingConfiguration");
var ExerciseFactory = require("./ExerciseFactory");
var AdditionExerciseFactory = require("./AdditionExerciseFactory");

ExerciseFactory.registerFactory(new AdditionExerciseFactory());

angular.module('KopfrechnenApp', []).service('TrainingService', function ()
{
	var training = undefined;
	var trainingDifficulty = 50;
	
    var TrainingModeService = 
    {
    	initialize: function(TrainingConfiguration, difficulty)
    	{
			training = TrainingConfiguration.create(difficulty);
    	},
    	
    	getTraining: function()
    	{
    		return training;
    	}
    };
    
   return TrainingModeService;
	
}).controller('ExerciseController', ["$scope", "TrainingService", function($scope, TrainingService)
{
	$scope.getExercise = function() {
		var exerciseText = undefined;
		if(TrainingService.getTraining() !== undefined)
			exerciseText = TrainingService.getTraining().getCurrentExercise().text;
		return exerciseText;
	};
	
	$scope.Show = function() {
		return (TrainingService.getTraining() !== undefined);
	}
	
}]).controller('TrainingsController', ["$scope", "TrainingService", function ($scope, TrainingService)
{
	$scope.Difficulty = 50;
  
	$scope.TimeTrainingConfiguration = new TimeTrainingConfiguration();
	//$scope.CountTrainingConfiguration = new CountTrainingConfiguration();
	
	
	$scope.Show = function() {
		return (TrainingService.getTraining() === undefined);
	}
	
	$scope.StartTimeTraining = function() {
		TrainingService.initialize($scope.TimeTrainingConfiguration, $scope.Difficulty);
	}
	
	$scope.StartCountTraining = function()
	{
		
	}
}]);
