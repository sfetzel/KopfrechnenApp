var TimeTrainingConfiguration = require("../TimeTrainingConfiguration");

module.exports =
{
	testCreateDifficultyMissing: function(test)
	{
		var trainingConfiguration = new TimeTrainingConfiguration();
		var training = trainingConfiguration.create();
		test.equal(training, undefined);
		test.done();
	},
	
	testCreateLengthMissing: function(test)
	{
		var trainingConfiguration = new TimeTrainingConfiguration();
		trainingConfiguration.Length = undefined;
		var training = trainingConfiguration.create(50);
		test.equal(training, undefined);
		test.done();
	}
}
