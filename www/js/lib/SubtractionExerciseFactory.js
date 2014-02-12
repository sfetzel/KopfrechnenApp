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


module.exports = SubtractionExerciseFactory;
