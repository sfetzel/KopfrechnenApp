var ExerciseFactoryConfiguration = require("./ExerciseFactoryConfiguration");

function SpecificExerciseFactory()
{
	this.getMaximumNumber = function(difficulty)
	{
		var maximumNumber = undefined;
		
		if(difficulty > 0)
		{
			maximumNumber = 10*difficulty;
		}
		
		return maximumNumber;
	}
	
	this.getMinimumNumber = function(difficulty)
	{
		var minimumNumber = undefined;
		
		if(difficulty > 0)
		{
			var maximumNumber = this.getMaximumNumber(difficulty);
			if(maximumNumber < 50)
				minimumNumber = 0;
			else
				minimumNumber = maximumNumber - Math.floor(maximumNumber*0.5);
		}
		
		return minimumNumber;
	}
	
	this.getRandomNumber = function(start, maximum)
	{
		var number = Math.random();
		
		if(maximum != undefined)
		{
			if(start != undefined)
				number *= maximum-start;
			else
				number *= maximum;
		}
		
		if(start != undefined)
			number += start;
		
		number = Math.floor(number);
		
		return number;
	}
	
}

SpecificExerciseFactory.prototype.getRandomExercise = function(difficulty)
{
	throw "Not implemented exception"; 
}

module.exports = SpecificExerciseFactory;
