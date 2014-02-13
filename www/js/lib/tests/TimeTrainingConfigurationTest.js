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
	},
	
	testCreate: function(test)
	{
		var trainingConfiguration = new TimeTrainingConfiguration();
		trainingConfiguration.Length = 12;
		var training = trainingConfiguration.create(50);
		
		test.notEqual(training, undefined);
		test.done();
	}
}
