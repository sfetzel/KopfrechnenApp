var util = require("util");
var TrainingConfiguration = require("./TrainingConfiguration");
var TimeTraining = require("./TimeTraining");

function TimeTrainingConfiguration()
{
	this.Length = 50;
}

TrainingConfiguration.prototype.create = function()
{
	var training = undefined;
	var length = parseInt(this.Length)
	
	if(length != Math.NaN)
	{
		training = new TimeTraining(length);
	}
	
	return training;
}

util.inherits(TimeTrainingConfiguration, TrainingConfiguration);

module.exports = TimeTrainingConfiguration;
