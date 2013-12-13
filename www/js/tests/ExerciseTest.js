var Exercise = require("../Exercise");
var ExerciseOperationType = require("../ExerciseOperationType");

module.exports =
{
	testToString: function(test)
	{
		var firstNumber = 10;
		var secondNumber = 20;
		var operationType = ExerciseOperationType.Addition;
		
		var expected = firstNumber + " " + operationType + " " + secondNumber;
		var exercise = new Exercise(firstNumber, secondNumber, operationType);
		
		test.equals(expected, exercise.toString());
		test.done();
	}
}
