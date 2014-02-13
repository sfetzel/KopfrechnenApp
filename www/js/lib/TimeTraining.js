var Training = require("./Training");
var util = require("util");

function TimeTraining(difficulty, durationTime)
{
	Training.call(this, difficulty);

	if(parseInt(durationTime) == Math.NaN || durationTime == undefined || durationTime <= 0)
		throw "durationTime missing";
	
	var self = this;
	this.DurationTime = parseFloat(durationTime);

	this.StopsAt = undefined;
	var startFunction = this.start;
	
	this.start = function()
	{
		startFunction.call(this);
		this.stopsAt = new Date(this.startTime.getTime() + self.DurationTime * 1000);
		
		setTimeout(function()
		{
			self.stop.call(self);
		}, durationTime * 1000)
	}
}

util.inherits(TimeTraining, Training);

TimeTraining.prototype.getRemainingSeconds = function(referenceDate)
{
	var seconds = 0;
	if(referenceDate  === undefined || typeof(referenceDate) !== "Date")
		referenceDate = new Date();
	
	if(this.startTime !== undefined)
	{
		if(this.stopTime === undefined)
		{
			var timeDifference = this.stopsAt.getTime() - referenceDate.getTime();
			return timeDifference / 1000;
		}
	}
	return seconds;
}

module.exports = TimeTraining;
