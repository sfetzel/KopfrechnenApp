var SubtractionExerciseFactory = require("../SubtractionExerciseFactory");

module.exports = 
{
	getSecondNumberTest: function(test)
	{
		var factory = new SubtractionExerciseFactory();
		var firstNumber = 0;
		var secondNumber = 0;
		for(var difficulty = 1; difficulty <= 100; difficulty++)
		{
			firstNumber = factory.getFirstNumber(difficulty);
			secondNumber = factory.getSecondNumber(difficulty);
			test.ok(firstNumber > secondNumber);
		}
		test.done();
	}
}
