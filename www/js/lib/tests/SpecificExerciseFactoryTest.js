var SpecificExerciseFactory = require("../SpecificExerciseFactory");
var ExerciseFactoryConfiguration = require("../ExerciseFactoryConfiguration");

module.exports = 
{
	testGetMaximumNumberInvalidArgument: function(test)
	{
		var factory = new SpecificExerciseFactory();
		var result = factory.getMaximumNumber(-1);
		
		test.equal(result, undefined);
		test.done();
	},
	
	testGetRandomNumberMaximum: function(test)
	{
		var factory = new SpecificExerciseFactory();
		
		for(var i = 0; i < 100; i++)
			test.ok(factory.getRandomNumber(0, 50) <= 50);
		test.done();
	},
	
	testGetRandomNumberMinimum: function(test)
	{
		var factory = new SpecificExerciseFactory();
		
		for(var i = 0; i < 100; i++)
			test.ok(factory.getRandomNumber(10) >= 10);
		test.done();
	},
	
	testGetRandomNumberInNaturalNumbers: function(test)
	{
		var factory = new SpecificExerciseFactory();
		var maximumNumber = 50;
		var minimumNumber = 0;
		var randomNumber = factory.getRandomNumber(minimumNumber, maximumNumber);
		
		var foundNaturalNumber = false;
		for(var i = minimumNumber; i < maximumNumber; i++)
		{
			if(randomNumber == i)
			{
				foundNaturalNumber = true;
				break;
			}
		}
		
		test.ok(foundNaturalNumber);
		test.done();
	},
	
	testGetRandomExercise: function(test)
	{
		var factory = new SpecificExerciseFactory();
		test.throws(function(){ factory.getRandomExercise(); });
		test.done();
	},
	
	testGetMinimumNumber: function(test)
	{
		var factory = new SpecificExerciseFactory();
		test.ok(factory.getMinimumNumber(1) >= 0);
		
		var maximumNumber = factory.getMaximumNumber(1);
		var minimumNumber = factory.getMinimumNumber(1);
		
		test.ok(minimumNumber < maximumNumber);
		test.done();
	}
}
