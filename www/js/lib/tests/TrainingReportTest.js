var TrainingReport = require("../TrainingReport");
var Training = require("../Training");
var Exercise = require("../Exercise");

module.exports =
{
	testConstructorArgumentMissing: function(test)
	{
		test.throws(function(){ new TrainingReport(); });
		test.done();
	},
	
	testConstructorTrainingInvalidType: function(test)
	{
		var training = "I took the stairs to the second floor";
		test.throws(function(){ new TrainingReport(training); });
		test.done();
	},
	
	testConstructorUnfinishedTraining: function(test)
	{
		var training = new Training();
		training.start();
		
		test.throws(function(){ new TrainingReport(training) });
		test.done();
	},
	
	testConstructor: function(test)
	{
		var training = new Training();
		training.Difficulty = 123545;
		training.start();
		
		var correctAnswer = "dingding";
		var firstExercise = new Exercise("What does the fox say?", correctAnswer);
		firstExercise.check("wuff");
		firstExercise.check("meow");
		firstExercise.check("lolz");
		firstExercise.check(correctAnswer);
		
		training.exercisesDone = [
			 firstExercise
		 ]

		var duration = 0.4;
		setTimeout(function()
		{
			training.stop();

			var trainingReport = new TrainingReport(training);
			test.equal(trainingReport.Training, training);
			test.done();
			test.equal(trainingReport.ExercisesCount, 1);
			test.equal(trainingReport.Duration, duration);
			test.equal(trainingReport.WrongAnswersCount, 3);
			test.equal(trainingReport.Difficulty, training.Difficulty);
			test.equal(trainingReport.TimePerExercise, duration);
		}, duration * 1000);
		
	}
}
