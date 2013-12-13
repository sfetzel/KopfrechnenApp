var Exercise = require("./Exercise");
var ExerciseFactory = require("./ExerciseFactory");
var ExerciseOperationType = require("./ExerciseOperationType");

function Kopfrechnen()
{
	var exerciseFactory = new ExerciseFactory();
	
	this.setDifficulty = function(difficulty)
	{
		exerciseFactory.Difficulty = difficulty;
	}
	
	
	this.getDifficulty = function()
	{
		return exerciseFactory.Difficulty;
	}
	
	this.getRandomExercise = function()
	{
		return exerciseFactory.getRandomExercise();
	}
}

module.exports = Kopfrechnen;
