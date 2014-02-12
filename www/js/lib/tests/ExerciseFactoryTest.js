var ExerciseFactory = require("../ExerciseFactory");
var MockSpecificExerciseFactory = require("./MockSpecificExerciseFactory");

module.exports =
{
	testGetRandomExerciseNoFactories: function(test)
	{
		test.throws(function(){ ExerciseFactory.getRandomExercise(12); });
		test.done();
	},
	
	testRegisterNotInstanceOf: function(test)
	{
		test.throws(function(){ ExerciseFactory.registerFactory(Array); });
		test.done();
	},
	
	testRegister: function(test)
	{
		var mockFactory = new MockSpecificExerciseFactory();
		ExerciseFactory.registerFactory(mockFactory);
		ExerciseFactory.deregisterFactory(mockFactory);
		test.done();
	},
	
	testGetRandomExercise: function(test)
	{
		var mockFactory = new MockSpecificExerciseFactory();
		ExerciseFactory.registerFactory(mockFactory);
		
		var factoryExercise = ExerciseFactory.getRandomExercise(12);
		var mockFactoryExercise = mockFactory.getRandomExercise(12);
		
		test.equal(factoryExercise.text, mockFactoryExercise.text);
		
		ExerciseFactory.deregisterFactory(mockFactory);
		test.done();
	}
}
