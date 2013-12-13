var ExerciseFactory = require("../ExerciseFactory");
var Exercise = require("../Exercise");
var ExerciseOperationType = require("../ExerciseOperationType");

module.exports =
{
	testGetNumberLengthMaxDifficulty: function(test)
	{
		var exerciseFactory = new ExerciseFactory();
		exerciseFactory.Difficulty = 100;
		var numberLength = exerciseFactory.getNumberLength();
		test.equal(numberLength, 4);
		test.done();
	},
	
	testGetNumberLengthMinDifficulty: function(test)
	{
		var exerciseFactory = new ExerciseFactory();
		exerciseFactory.Difficulty = 1;
		var numberLength = exerciseFactory.getNumberLength();
		test.ok(numberLength > 0);
		test.done();
	},
	
	testGetRandomNumber: function(test)
	{
		var exerciseFactory = new ExerciseFactory();
		test.ok(exerciseFactory.getRandomNumber() < 10^exerciseFactory.getNumberLength());
		test.done();
	},
	
	testGetRandomAdditionExercise: function(test)
	{
		var exerciseFactory = new ExerciseFactory();
		var exercise = exerciseFactory.getRandomAdditionExercise();
		test.ok(exercise != undefined);
		test.ok(exercise.operationType  == ExerciseOperationType.Addition);
		test.ok(exercise.firstNumber > 0);
		test.ok(exercise.secondNumber > 0);
		test.done();
	}
}
