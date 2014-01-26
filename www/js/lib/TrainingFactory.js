var TimeTraining = require("./TimeTraining");
var util = require("util");
var EventEmitter = require("events").EventEmitter;

function TrainingFactory()
{
	this.getTimeTraining = function(duration)
	{
		var training = new TimeTraining(duration);
		this.emit("trainingCreated", training);
		return training;
	}
}

util.inherits(TrainingFactory, EventEmitter);

module.exports = new TrainingFactory();
