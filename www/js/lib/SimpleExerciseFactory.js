var SpecificExerciseFactory = require("./SpecificExerciseFactory");
var Exercise = require("./Exercise");
var util = require("util");

function SimpleExerciseFactory()
{
	SpecificExerciseFactory.call(this);
}

util.inherits(SimpleExerciseFactory, SpecificExerciseFactory);

SimpleExerciseFactory.prototype.getFirstNumber = function(maximumNumber)
{
	var halfMaxNumber = Math.round(maximumNumber/2);
	var firstNumber = this.getRandomNumber(halfMaxNumber, maximumNumber);
	return firstNumber;
}

SimpleExerciseFactory.prototype.getSecondNumber = function(maximumNumber, firstNumber)
{
	return firstNumber + this.getFirstNumber(maximumNumber);
}

SimpleExerciseFactory.prototype.getText = function(firstNumber, secondNumber)
{
	return firstNumber + this.operationSymbol.toString() + secondNumber;
}

SimpleExerciseFactory.prototype.getRandomExercise = function(difficulty)
{
	if(difficulty == undefined || parseInt(difficulty) == Math.NaN)
		throw "difficulty argument missing";
	
	var maximumNumber = this.getMaximumNumber(difficulty);
	var minimumNumber = this.getMinimumNumber(difficulty);
	
	var randomNumber = this.getRandomNumber(minimumNumber, maximumNumber);
	var halfRandomMaxNumber = Math.round(randomNumber/2);
	
	var firstNumber = this.getFirstNumber(halfRandomMaxNumber);
	var secondNumber = this.getSecondNumber(halfRandomMaxNumber, firstNumber);

	var correctAnswer = this.calculate(firstNumber, secondNumber);

	var exercise = new Exercise(this.getText(firstNumber, secondNumber), correctAnswer);
	return exercise;
}

module.exports = SimpleExerciseFactory;
