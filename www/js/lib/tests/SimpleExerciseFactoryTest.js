var SimpleExerciseFactory = require("../SimpleExerciseFactory");
var MockSimpleExerciseFactory = require("./MockSimpleExerciseFactory");

module.exports =
{
	testGetRandomExercise: function(test)
	{
		var difficulty = 50;
		var factory = new MockSimpleExerciseFactory();

		var exercise = factory.getRandomExercise(difficulty);
		
		var maximumNumber = factory.getMaximumNumber(difficulty);
		test.notEqual(exercise, undefined);
		
		// check numbers
		var numbers = exercise.text.split(factory.operationSymbol);
		var firstNumber = parseInt(numbers[0]);
		var secondNumber = parseInt(numbers[1]);
		
		test.notEqual(firstNumber, Math.NaN);
		test.notEqual(secondNumber, Math.NaN);
		
		test.ok(firstNumber <= maximumNumber);
		test.ok(secondNumber <= maximumNumber);
		
		test.ok(exercise.check(firstNumber+secondNumber));
		
		test.done();
	},
	
	testGetRandomExerciseNumberDifference: function(test)
	{
		var difficulty = 50;
		var factory = new MockSimpleExerciseFactory();
		var exercise = factory.getRandomExercise(difficulty);
		
		var maximumNumber = factory.getMaximumNumber(difficulty);
		test.notEqual(exercise, undefined);
		
		// check numbers
		var numbers = exercise.text.split(factory.operationSymbol);
		var firstNumber = parseInt(numbers[0]);
		var secondNumber = parseInt(numbers[1]);
		
		test.notEqual(firstNumber, Math.NaN);
		test.notEqual(secondNumber, Math.NaN);
		
		var difference = Math.abs(firstNumber-secondNumber);
		
		test.ok(difference < maximumNumber);
		
		test.done();
	},
	
	testCalculate: function(test)
	{
		var firstNumber = 1234;
		var secondNumber = 5678;
		var expectedResult = 6912;
		
		var factory = new MockSimpleExerciseFactory();
		var actualResult = factory.calculate(firstNumber, secondNumber);
		
		test.equal(expectedResult, actualResult);
		test.done();
	},
	
	testGetRandomExerciseInvalidArgument: function(test)
	{
		var factory = new MockSimpleExerciseFactory();
		test.throws(function(){ factory.getRandomExercise(); });
		test.done();
	}
}
