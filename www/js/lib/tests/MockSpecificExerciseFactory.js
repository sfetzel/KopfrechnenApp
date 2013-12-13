var util = require("util");
var SpecificExerciseFactory = require("../SpecificExerciseFactory");
var Exercise = require("../Exercise");

function MockSpecificExerciseFactory()
{
	this.getRandomExercise = function(difficulty)
	{
		var exercise = new Exercise();
		exercise.text = "Find the corner of a circle!";
		return exercise;
	}
}

util.inherits(MockSpecificExerciseFactory, SpecificExerciseFactory);

module.exports = MockSpecificExerciseFactory;
