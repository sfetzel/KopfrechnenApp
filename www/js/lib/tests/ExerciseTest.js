var Exercise = require("../Exercise");

module.exports = 
{
	testCheck: function(test)
	{
		var correctAnswer = 1234;
		var exercise = new Exercise("Hello, solve 1200 + 34", correctAnswer);
		test.ok(exercise.check(correctAnswer));
		test.equal(exercise.getPassedChecks(), 1);
		test.done();
	},
	
	testGetPassedChecks: function(test)
	{
		var correctAnswer = 1234;
		var exercise = new Exercise("Hello, solve 1200 + 34", correctAnswer);
		test.equal(exercise.getPassedChecks(), 0);
		exercise.check(1234)
		test.ok(exercise.getPassedChecks(), 1);
		test.done();
	},
	
	testGetCheckCount: function(test)
	{
		var exercise = new Exercise("123", "123123");
		exercise.check(123);
		test.equal(exercise.getCheckCount(), 1);
		test.done();
	}
}
