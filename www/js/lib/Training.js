var ExerciseFactory = require("./ExerciseFactory");
var EventEmitter = require("events").EventEmitter;
var util = require("util");

function Training()
{		
	this.startTime = undefined;
	this.stopTime = undefined;
	this.exercisesDone = Array();
	
	var currentExercise = undefined;
	var isDone = false;
	
	var self = this;
	
	this.start = function()
	{
		if(!isDone)
		{
			if(this.startTime == undefined)
				this.startTime = new Date();
		}
	}

	this.stop = function()
	{
		if(this.startTime == undefined)
			throw "Training has not been started";
			
		this.stopTime = new Date();
		isDone = true;
		
		this.emit("stop", this);
	}
	
	function createExercise()
	{
		var exercise = ExerciseFactory.getRandomExercise();
		exercise.on("answered", function()
		{
			self.exercisesDone.push(exercise);
			self.emit("exerciseDone", exercise);
		});
		return exercise;
	}
	
	this.getCurrentExercise = function()
	{
		if(this.startTime == undefined)
			this.start();
		
		if(this.stopTime != undefined)
			throw "Training has already ended";
			
		if(currentExercise == undefined)
		{
			currentExercise = createExercise();		
		}
		
		return currentExercise;
	}
}

util.inherits(Training, EventEmitter);

module.exports = Training;
