var SpecificExerciseFactory = require("../SpecificExerciseFactory");

module.exports = 
{
	testGetNumberLengthInvalidArgument: function(test)
	{
		var factory = new SpecificExerciseFactory();
		var result = factory.getNumberLength(-1);
		
		test.equal(result, undefined);
		test.done();
	},
	
	testGetNumberLengthInvalidArgument: function(test)
	{
		var factory = new SpecificExerciseFactory();
		var result = factory.getNumberLength(50);
		
		test.equal(result, 2);
		test.done();
	},
	
	testGetRandomNumberMaximum: function(test)
	{
		var factory = new SpecificExerciseFactory();
		
		for(var i = 0; i < 100; i++)
			test.ok(factory.getRandomNumber(0, 50) < 50);
		test.done();
	},
	
	testGetRandomNumberMinimum: function(test)
	{
		var factory = new SpecificExerciseFactory();
		
		for(var i = 0; i < 100; i++)
			test.ok(factory.getRandomNumber(10) > 10);
		test.done();
	}
}
