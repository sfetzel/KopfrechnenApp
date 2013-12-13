var Exercise = require("../Exercise");

module.exports = 
{
	testCheck: function(test)
	{
		var correctAnswer = 1234;
		var exercise = new Exercise("Hello, solve 1200 + 34", correctAnswer);
		test.ok(exercise.check(correctAnswer));
		test.done();
	},
	
	testCheckIncorrectAnswer: function(test)
	{
		var correctAnswer = 1234;
		var exercise = new Exercise("Hello, solve 1200 + 34", correctAnswer);
		test.ok(!exercise.check(12345));
		test.done();
	}
}
