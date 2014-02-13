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
		var length = 0.2;
		var training = new TimeTraining(50, length);
		
		training.on("stop", function()
		{
			var milliseconds = training.stopTime.getTime() - training.startTime.getTime();
			var seconds = milliseconds / 1000;

			test.ok(seconds > length-0.05);
			test.ok(seconds < length+0.05);
			test.done();
		});
		
		training.start();
		if(length > 0)
			test.notEqual(training.stopsAt.getTime(), training.startTime.getTime());

		var stopTime = training.stopsAt.getTime() - training.startTime.getTime();
		
		test.equal(stopTime / 1000, length);
	},
	
	testGetRemainingSecondsOver: function(test)
	{
		var length = 0.1;
		var training = new TimeTraining(50, length);
		
		training.on("stop", function()
		{
			test.equal(training.getRemainingSeconds(), 0);
			test.done();
		});
		
		training.start();
	},
	
	testGetRemainingSeconds: function(test)
	{
		var length = 0.3;
		var training = new TimeTraining(50, length);
		training.start();
		test.equal(training.getRemainingSeconds(), length);
		test.done();
	}
}
