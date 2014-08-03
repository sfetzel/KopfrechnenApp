var SimpleExerciseFactory = require("./SimpleExerciseFactory");
var util = require("util");

function SubtractionExerciseFactory()
{
	SimpleExerciseFactory.call(this);
	this.operationSymbol = '-';
}

util.inherits(SubtractionExerciseFactory, SimpleExerciseFactory);

SubtractionExerciseFactory.prototype.calculate = function(firstNumber, secondNumber)
{
	return firstNumber - secondNumber;
}


SubtractionExerciseFactory.prototype.getSecondNumber = function(maximumNumber, firstNumber)
{
	return this.getRandomNumber(0, firstNumber);
}


module.exports = SubtractionExerciseFactory;
