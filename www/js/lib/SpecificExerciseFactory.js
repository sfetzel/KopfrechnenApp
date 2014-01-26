
function SpecificExerciseFactory()
{
	this.getNumberLength = function(difficulty)
	{
		var numberLength = undefined;
		
		if(difficulty > 0)
		{
			numberLength = Math.floor(4 / 100 * difficulty) + 1;
		}
		
		return numberLength;
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
