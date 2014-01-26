var SpecificExerciseFactory = require("./SpecificExerciseFactory");
var Exercise = require("./Exercise");
var util = require("util");

function SimpleExerciseFactory()
{
	SpecificExerciseFactory.call(this);
}

util.inherits(SimpleExerciseFactory, SpecificExerciseFactory);

SimpleExerciseFactory.prototype.getRandomExercise = function(difficulty)
{
	if(difficulty == undefined || parseInt(difficulty) == Math.NaN)
		throw "difficulty argument missing";
	
	var numberLength = this.getNumberLength(difficulty);

	var firstNumber = this.getRandomNumber(Math.pow(10, numberLength-1), Math.pow(10, numberLength));
	var secondNumber = this.getRandomNumber(Math.pow(10, numberLength-1), Math.pow(10, numberLength));

	var correctAnswer = this.calculate(firstNumber, secondNumber);

	var exercise = new Exercise(firstNumber + this.operationSymbol.toString() + secondNumber, correctAnswer);
	return exercise;
}


module.exports = SimpleExerciseFactory;
