
function SpecificExerciseFactory()
{
	this.getRandomExercise = function(difficulty)
	{
		throw "Not implemented exception"; 
	}
	
	this.getNumberLength = function(difficulty)
	{
		var numberLength = undefined;
		
		if(difficulty > 0)
		{
			numberLength = Math.floor(4 / 100 * difficulty);
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
			
		return number;
	}
	
}

module.exports = SpecificExerciseFactory;
