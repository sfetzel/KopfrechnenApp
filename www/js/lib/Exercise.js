var EventEmitter = require("events").EventEmitter;
var util = require("util");

function Exercise(text, answer)
{
	this.text = text;
	var expectedAnswer = answer;
	var passedChecks = 0;
	var checkCount = 0;
	
	this.check = function(answer)
	{
		checkCount++;
		var correct = answer == expectedAnswer;
		
		// if exercise was correctly answered
		// and not answered before then emit event
		if(passedChecks == 0 && correct)
			this.emit("answered");
			
		if(correct)
			passedChecks++;
			
		return correct;
	}
	
	this.getPassedChecks = function()
	{
		return passedChecks;
	}
	
	this.getCheckCount = function()
	{
		return checkCount;
	}
}

util.inherits(Exercise, EventEmitter);

module.exports = Exercise;
