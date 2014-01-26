var SimpleExerciseFactory = require("../SimpleExerciseFactory");
var util = require("util");

function MultiplicationExerciseFactory()
{
	SimpleExerciseFactory.call(this);
	this.operationSymbol = '*';
}

util.inherits(MultiplicationExerciseFactory, SimpleExerciseFactory);

MultiplicationExerciseFactory.prototype.calculate = function(firstNumber, secondNumber)
{
	return firstNumber * secondNumber;
}


module.exports = MultiplicationExerciseFactory;
