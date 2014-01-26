var TimeTraining = require("../TimeTraining");

module.exports =
{
	testConstructorInvalidArgument: function(test)
	{
		test.throws(function(){ new TimeTraining(-1234); });
		test.done();
	},
	
	testStart: function(test)
	{
		var length = 0.1;
		var training = new TimeTraining(length);
		
		training.on("stop", function()
		{
			var milliseconds = training.stopTime.getTime() - training.startTime.getTime();
			var seconds = milliseconds / 1000;

			test.ok(seconds > length-0.05);
			test.ok(seconds < length+0.05);
			test.done();
		});
		
		training.start();
	}
}
