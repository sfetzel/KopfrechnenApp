var TrainingFactory = require("../TrainingFactory");
var TimeTraining = require("../TimeTraining");

module.exports = 
{
	testTrainingFactoryGetTimeTrainingEventRaised: function(test)
	{
		TrainingFactory.on("trainingCreated", function()
		{
			test.done();
		});
		
		var training = TrainingFactory.getTimeTraining(1234);
		test.notEqual(training, undefined);
		test.ok(training instanceof TimeTraining);
	}
}
