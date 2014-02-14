var TimeTrainingConfiguration = require("./TimeTrainingConfiguration");
var TimeTraining = require("./TimeTraining");
var ExerciseFactory = require("./ExerciseFactory");
var AdditionExerciseFactory = require("./AdditionExerciseFactory");
var SubtractionExerciseFactory = require("./SubtractionExerciseFactory");
var MultiplicationExerciseFactory = require("./MultiplicationExerciseFactory");

// Initialization for Library
// Todo
ExerciseFactory.registerFactory(new AdditionExerciseFactory());
ExerciseFactory.registerFactory(new SubtractionExerciseFactory());
ExerciseFactory.registerFactory(new MultiplicationExerciseFactory());

var KopfrechnenApp = angular.module('KopfrechnenApp', ['ngTouch']).service('TrainingService', function ()
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
	
});
