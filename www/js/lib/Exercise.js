var EventEmitter = require("events").EventEmitter;
var util = require("util");

function Exercise(text, answer)
{
	this.text = text;
	var expectedAnswer = answer;
	var isCorrectAnswered = false;
	
	this.check = function(answer)
	{
		var correct = answer == expectedAnswer;
		if(!isCorrectAnswered && correct)
		{
			isCorrectAnswered = true;
			this.emit("answered");
		}
			
		return correct;
	}
	
	this.getIsCorrectAnswered = function()
	{
		return isCorrectAnswered;
	}
}

util.inherits(Exercise, EventEmitter);

module.exports = Exercise;
