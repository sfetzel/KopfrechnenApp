var util = require("util");
var TrainingConfiguration = require("./TrainingConfiguration");
var TimeTraining = require("./TimeTraining");

function TimeTrainingConfiguration()
{
	this.Length = 60;
}

TrainingConfiguration.prototype.create = function(difficulty)
{
	var training = undefined;
	
	if(parseInt(this.Length) !== Math.NaN && this.Length !== undefined)
	{
		if(parseInt(difficulty) !== Math.NaN && difficulty !== undefined)
			training = new TimeTraining(difficulty, length);
	}
	
	return training;
}

util.inherits(TimeTrainingConfiguration, TrainingConfiguration);

module.exports = TimeTrainingConfiguration;
