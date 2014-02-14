var Training = require("./Training");


function TrainingReport(training)
{
	if(training == undefined)
		throw "Training argument missing";
	
	if(!(training instanceof Training))
		throw "Training must be instance of Training prototype";
	
	if(training.stopTime === undefined)
		throw "Training must be finished to create report";
		
	this.Training = training;

	this.StartTime = training.startTime;
	this.StopTime = training.stopTime;
	this.Duration = Math.round((training.stopTime.getTime() - training.startTime.getTime()) / 100) / 10;
	
	if(training.exercisesDone !== undefined)
		this.ExercisesCount = training.exercisesDone.length;
	this.Difficulty = training.Difficulty;
	this.TimePerExercise = Math.round(this.Duration / this.ExercisesCount * 10) / 10;
	
	this.WrongAnswersCount = 0;
	this.AnswersCount = 0;
	
	var exercise = undefined;
	for(var key in training.exercisesDone)
	{
		exercise = training.exercisesDone[key];
		this.WrongAnswersCount += exercise.getCheckCount() - exercise.getPassedChecks();
		this.AnswersCount += exercise.getCheckCount();
	}
	
}

module.exports = TrainingReport;
