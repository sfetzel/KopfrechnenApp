var SimpleExerciseFactory = require("./SimpleExerciseFactory");
var util = require("util");

function AdditionExerciseFactory()
{
	SimpleExerciseFactory.call(this);
	this.operationSymbol = '+';
}

util.inherits(AdditionExerciseFactory, SimpleExerciseFactory);

AdditionExerciseFactory.prototype.calculate = function(firstNumber, secondNumber)
{
	return firstNumber + secondNumber;
}


module.exports = AdditionExerciseFactory;
