var Kopfrechnen = require("../Kopfrechnen");

module.exports =
{
	testSetDifficulty: function(test)
	{
		var kopfrechnen = new Kopfrechnen();
		var newDifficulty = 98;
		kopfrechnen.setDifficulty(newDifficulty);
		test.equal(newDifficulty, kopfrechnen.getDifficulty());
		test.done();
	},
	
	testGetExercise: function(test)
	{
		var kopfrechnen = new Kopfrechnen();
		var exercise = kopfrechnen.getRandomExercise();
		test.notEqual(undefined, exercise);
		test.done();
	}
}
