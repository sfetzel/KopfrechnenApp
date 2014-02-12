var util = require("util");
var SpecificExerciseFactory = require("../SpecificExerciseFactory");
var Exercise = require("../Exercise");

function MockSpecificExerciseFactory()
{
	this.theSolution = "quatsch";
	
	this.getRandomExercise = function(difficulty)
	{
		if(difficulty === undefined)
			throw "Difficulty argument missing";
		var exercise = new Exercise("Find the corner of a circle!", this.theSolution);
		return exercise;
	}
}

util.inherits(MockSpecificExerciseFactory, SpecificExerciseFactory);

module.exports = MockSpecificExerciseFactory;
