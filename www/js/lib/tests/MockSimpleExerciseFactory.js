var SimpleExerciseFactory = require("../SimpleExerciseFactory");
var util = require("util");

function MockSimpleExerciseFactory()
{
	SimpleExerciseFactory.call(this);
	
	this.operationSymbol = '+';
}

util.inherits(MockSimpleExerciseFactory, SimpleExerciseFactory);

MockSimpleExerciseFactory.prototype.calculate = function(firstNumber, secondNumber)
{
	return firstNumber + secondNumber;
}


module.exports = MockSimpleExerciseFactory;
