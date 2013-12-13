function Exercise(firstNumber, secondNumber, operationType)
{
	this.firstNumber = firstNumber;
	this.secondNumber = secondNumber;
	this.operationType = operationType;
}

Exercise.prototype.toString = function()
{
	return this.firstNumber + " " + this.operationType + " " + this.secondNumber;
}

module.exports = Exercise;
