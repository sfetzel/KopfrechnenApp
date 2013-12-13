var SpecificExerciseFactory = require("./SpecificExerciseFactory");

var specificExerciseFactories = [];

module.exports =
{
	getRandomExercise: function()
	{
		if(specificExerciseFactories.length == 0)
			throw "Cannot get random exercise because there are no factories registred";
		
		var lastFactoryIndex = specificExerciseFactories.length;
		var randomFactory = Math.floor((Math.random() * lastFactoryIndex));
		
		return specificExerciseFactories[randomFactory].getRandomExercise();
	},
	
	registerFactory: function(factory)
	{
		if(!(factory instanceof SpecificExerciseFactory))
			throw "new factory must be instance of SpecificExerciseFactory";
		
		specificExerciseFactories.push(factory);
	},
	
	deregisterFactory: function(factory)
	{
		var factoryIndex = specificExerciseFactories.indexOf(factory);
		if(factoryIndex != -1)
			specificExerciseFactories.splice(factoryIndex, 1);
	}
}
