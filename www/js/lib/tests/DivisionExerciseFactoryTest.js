var DivisionExerciseFactory = require("../DivisionExerciseFactory");

module.exports =
{
	getSecondNumberTest: function(test)
	{
		// second numer must be a natural number, when input is a natural number
		var factory = new DivisionExerciseFactory();
		var firstNumber = 500;
		var secondNumber = factory.getSecondNumber(1000, firstNumber);
		var quotient = secondNumber / firstNumber;
		
		// natural numbers stay the same when they are rounded
		test.equal(quotient, Math.round(quotient));
		test.done();
	},
	getText: function(test)
	{
		var firstNumber = 1234;
		var secondNumber = 5678;
		var factory = new DivisionExerciseFactory();
		var expectedText = secondNumber + ":" + firstNumber;
		var actualText = factory.getText(firstNumber, secondNumber);
		
		test.equal(expectedText, actualText);
		test.done();
	}
}
