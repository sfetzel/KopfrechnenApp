function Exercise(text, answer)
{
	this.text = text;
	var expectedAnswer = answer;
	
	this.check = function(answer)
	{
		return (answer == expectedAnswer);
	}
}

module.exports = Exercise;
