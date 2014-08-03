var SimpleExerciseFactory = require("./SimpleExerciseFactory");
var util = require("util");

// For division exercises, there are 2 random numbers taken, which are
// the dividor and the quotient;

function DivisionExerciseFactory()
{
	SimpleExerciseFactory.call(this);
	this.operationSymbol = ':';
}

util.inherits(DivisionExerciseFactory, SimpleExerciseFactory);

DivisionExerciseFactory.prototype.calculate = function(firstNumber, secondNumber)
{
	return firstNumber / secondNumber;	
}

DivisionExerciseFactory.prototype.getText = function(firstNumber, secondNumber)
{
	return secondNumber + ':' + firstNumber;
}

DivisionExerciseFactory.prototype.getSecondNumber = function(maximumNumber, firstNumber)
{
	var quotient = this.getRandomNumber(0, firstNumber);
	return firstNumber * quotient;
}


module.exports = DivisionExerciseFactory;
