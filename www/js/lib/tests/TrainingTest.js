var Training = require("../Training");
var MockSpecificExerciseFactory = require("./MockSpecificExerciseFactory");
var ExerciseFactory = require("../ExerciseFactory");
module.exports =
{
	setUp: function(callback)
	{
		ExerciseFactory.registerFactory(new MockSpecificExerciseFactory());
		callback();
	},
	
	tearDown: function(callback)
	{
		ExerciseFactory.deregisterFactory(new MockSpecificExerciseFactory());
		callback();
	},
	
	testStart: function(test)
	{
		var training = new Training();
		test.equal(training.startTime, undefined);
		training.start();
		test.notEqual(training.startTime, undefined);
		test.done();
	},
	
	testDoubleStart: function(test)
	{
		var training = new Training();
		training.start();
		var date = training.startTime;
		training.start();
		test.equal(training.startTime, date);
		test.done();
	},
	
	testStop: function(test)
	{
		var training = new Training();
		test.equal(training.stopTime, undefined);
		training.start();
		training.stop();
		test.notEqual(training.stopTime, undefined);
		test.done();
	},
	
	testGetCurrentExercise: function(test)
	{
		var training = new Training(12);
		var exercise = training.getCurrentExercise();
		test.notEqual(exercise, undefined);
		test.done();
	},
	
	testExerciseDone: function(test)
	{
		var training = new Training(12);
		var exercise = training.getCurrentExercise();
		test.notEqual(exercise, undefined);
		exercise.check((new MockSpecificExerciseFactory()).theSolution);
		
		test.notEqual(training.exercisesDone.indexOf(exercise), -1);
		test.done();
		
		var newExercise = training.getCurrentExercise();
		test.notEqual(exercise, newExercise);
	},
	
	exerciseDoneEventRaised: function(test)
	{
		var training = new Training(12);
		var isEventRaised = false;
		training.on("exerciseDone", function(){ isEventRaised = true; });
		
		var exercise = training.getCurrentExercise();
		exercise.check((new MockSpecificExerciseFactory()).theSolution);
		test.ok(isEventRaised);
		test.done();
	},
	
	stopEventRaised: function(test)
	{
		var training = new Training(12);
		var isEventRaised = false;
		training.on("stop", function(){ isEventRaised = true; });
		
		training.start();
		training.stop();
		test.ok(isEventRaised);
		test.done();
	},
	
	getCurrentExerciseTrainingStopped: function(test)
	{
		var training = new Training();
		training.start();
		training.stop();
		test.throws(function(){ training.getCurrentExercise(); });
		test.done();
	}
}
