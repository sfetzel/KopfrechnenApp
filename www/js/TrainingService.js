var TimeTrainingConfiguration = require("./TimeTrainingConfiguration");
var TimeTraining = require("./TimeTraining");
var TrainingReport = require("./TrainingReport");
var ExerciseFactory = require("./ExerciseFactory");
var AdditionExerciseFactory = require("./AdditionExerciseFactory");
var SubtractionExerciseFactory = require("./SubtractionExerciseFactory");
var MultiplicationExerciseFactory = require("./MultiplicationExerciseFactory");
var DivisionExerciseFactory = require("./DivisionExerciseFactory");

// Initialization for Library
// Todo

ExerciseFactory.registerFactory(new AdditionExerciseFactory());
ExerciseFactory.registerFactory(new SubtractionExerciseFactory());
ExerciseFactory.registerFactory(new MultiplicationExerciseFactory());
ExerciseFactory.registerFactory(new DivisionExerciseFactory());

angular.module('KopfrechnenApp').service('TrainingService', function ()
{
	var training = undefined;
	var trainingDifficulty = 50;
	var trainingReport = undefined;
		
	var TrainingModeService = 
    {
    	initialize: function(TrainingConfiguration, difficulty)
    	{
			training = TrainingConfiguration.create(difficulty);
			training.on('stop', function(){
				trainingReport = new TrainingReport(training);
				training = undefined;
			});
    	},
    	
    	uninitialize: function()
    	{
    		training = undefined;
    	},
    	
    	getTraining: function()
    	{
    		return training;
    	},
    	
    	getTrainingReport: function()
    	{
    		return trainingReport;
    	},
    	
    	destroyTrainingReport: function()
    	{
    		trainingReport = undefined;
    	}
    };
    
   return TrainingModeService;
	
});
