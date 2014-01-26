var SimpleExerciseFactory = require("../SimpleExerciseFactory");
var MockSimpleExerciseFactory = require("./MockSimpleExerciseFactory");

module.exports =
{
	testGetRandomExercise: function(test)
	{
		var difficulty = 50;
		var factory = new MockSimpleExerciseFactory();

		var exercise = factory.getRandomExercise(difficulty);
		
		var numberLength = factory.getNumberLength(difficulty);
		test.notEqual(exercise, undefined);
		
		// check numbers
		var numbers = exercise.text.split(factory.operationSymbol);
		var firstNumber = parseInt(numbers[0]);
		var secondNumber = parseInt(numbers[1]);
		
		test.notEqual(firstNumber, Math.NaN);
		test.notEqual(secondNumber, Math.NaN);
		
		test.ok(firstNumber >= Math.pow(10,numberLength-1));
		test.ok(firstNumber <= Math.pow(10, numberLength));
		test.ok(secondNumber >= Math.pow(10,numberLength-1));
		test.ok(secondNumber <= Math.pow(10, numberLength));
		
		test.ok(exercise.check(firstNumber+secondNumber));
		
		test.done();
	},
	
	testGetRandomExerciseNumberDifference: function(test)
	{
		var difficulty = 50;
		var factory = new MockSimpleExerciseFactory();
		var exercise = factory.getRandomExercise(difficulty);
		
		var numberLength = factory.getNumberLength(difficulty);
		test.notEqual(exercise, undefined);
		
		// check numbers
		var numbers = exercise.text.split(factory.operationSymbol);
		var firstNumber = parseInt(numbers[0]);
		var secondNumber = parseInt(numbers[1]);
		
		test.notEqual(firstNumber, Math.NaN);
		test.notEqual(secondNumber, Math.NaN);
		
		var difference = Math.abs(firstNumber-secondNumber);
		
		test.ok(difference < 10^numberLength);
		
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
