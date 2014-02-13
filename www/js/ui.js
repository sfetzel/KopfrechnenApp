var TimeTrainingConfiguration = require("./TimeTrainingConfiguration");
var TimeTraining = require("./TimeTraining");
var ExerciseFactory = require("./ExerciseFactory");
var AdditionExerciseFactory = require("./AdditionExerciseFactory");

ExerciseFactory.registerFactory(new AdditionExerciseFactory());

angular.module('KopfrechnenApp', ['ngTouch']).service('TrainingService', function ()
{
	var training = undefined;
	var trainingDifficulty = 50;
	
	var TrainingModeService = 
    {
    	initialize: function(TrainingConfiguration, difficulty)
    	{
			training = TrainingConfiguration.create(difficulty);
    	},
    	
    	uninitialize: function()
    	{
    		training = undefined;
    	},
    	
    	getTraining: function()
    	{
    		return training;
    	}
    };
    
   return TrainingModeService;
	
}).controller('ExerciseController', ["$scope", "$timeout", "TrainingService", function($scope, $timeout, TrainingService)
{
	$scope.solution = undefined;
	
	$scope.AddNumber = function(number){
		var currentValue = 0;
		if($scope.solution !== undefined && parseInt($scope.solution) !== Math.NaN)
			currentValue = parseInt($scope.solution);
			
		if(parseInt(number) !== Math.NaN && number != undefined)
			$scope.solution = currentValue * 10 + number;
	}
	
	$scope.Clear = function(){
		$scope.solution = undefined;
	}
	
	$scope.Next = function(){
		var solution = parseInt($scope.solution);
		var exercise = TrainingService.getTraining().getCurrentExercise();
		exercise.check(solution);
		$scope.solution = undefined;
	}
	
	$scope.getExercise = function() {
		var exerciseText = undefined;
		if(TrainingService.getTraining() !== undefined)
			exerciseText = TrainingService.getTraining().getCurrentExercise().text;
		return exerciseText;
	};

	$scope.Cancel = function() {
		TrainingService.uninitialize();
	}
	
	$scope.Show = function() {
		return (TrainingService.getTraining() !== undefined);
	}
	
	$scope.IsTimeTraining = function(){
		return TrainingService.getTraining() instanceof TimeTraining;
	}
	
	$scope.remainingSeconds = 0;
	$scope.timePercentage = 100;
	
	var updateTime = function(){
		if($scope.IsTimeTraining()){
			var training = TrainingService.getTraining();
			var time = training.DurationTime;
			var remainingSeconds = training.getRemainingSeconds();
			$scope.timePercentage = Math.round(100 / time * remainingSeconds);
			$scope.remainingSeconds = Math.round(training.getRemainingSeconds());
		}
		$timeout(updateTime, 1000);
	}
	$timeout(updateTime, 1000);
	
	
	$scope.getRemainingSeconds = function(){
		var seconds = undefined;
		if($scope.IsTimeTraining()){
			seconds = TrainingService.getTraining().getRemainingSeconds();
		}
		return seconds;
	}
	
}]).controller('TrainingsController', ["$scope", "TrainingService", function ($scope, TrainingService)
{
	$scope.Difficulty = 35;
  
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
