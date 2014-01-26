var Training = require("./Training");
var util = require("util");

function TimeTraining(durationTime)
{
	Training.call(this);

	if(parseInt(durationTime) == Math.NaN || durationTime == undefined || durationTime <= 0)
		throw "durationTime missing";
	
	var self = this;
	this.DurationTime = parseInt(durationTime);
	
	var startFunction = this.start;
	
	this.start = function()
	{
		startFunction.call(this);
		
		setTimeout(function()
		{
			self.stop.call(self);
		}, durationTime * 1000)
	}
}

util.inherits(TimeTraining, Training);

module.exports = TimeTraining;
