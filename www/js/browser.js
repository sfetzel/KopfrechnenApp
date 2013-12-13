;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Exercise(firstNumber, secondNumber, operationType)
{
	this.firstNumber = firstNumber;
	this.secondNumber = secondNumber;
	this.operationType = operationType;
}

Exercise.prototype.toString = function()
{
	return this.firstNumber + " " + this.operationType + " " + this.secondNumber;
}

module.exports = Exercise;

},{}],2:[function(require,module,exports){
var Exercise = require("./Exercise");
var ExerciseOperationType = require("./ExerciseOperationType");

function ExerciseFactory(difficulty)
{
	this.Difficulty = difficulty == undefined ? 50 : difficulty;
}

/*
 * calculates how long the numbers are, which are used for training
 * depending on the Difficulty level
 */
ExerciseFactory.prototype.getNumberLength = function()
{
	// 100% means 4 digits length for the numbers
	return Math.ceil(4 / 100 * this.Difficulty);
}

ExerciseFactory.prototype.getRandomNumber = function()
{
	return Math.round(Math.random() * 100);
}

ExerciseFactory.prototype.getRandomAdditionExercise = function()
{
	var exercise = new Exercise();
	exercise.operationType = ExerciseOperationType.Addition;
	
	// Todo: maximum difference?
	exercise.firstNumber = this.getRandomNumber();
	exercise.secondNumber = this.getRandomNumber();
	
	return exercise;
}

ExerciseFactory.prototype.getRandomExercise = function()
{
	return this.getRandomAdditionExercise();
}



module.exports = ExerciseFactory;

},{"./Exercise":1,"./ExerciseOperationType":3}],3:[function(require,module,exports){
module.exports =
{
	Addition: '+',
	Subtraction: '-',
	Multiplication: '*',
	Division: ':'
}

},{}],4:[function(require,module,exports){
var Exercise = require("./Exercise");
var ExerciseFactory = require("./ExerciseFactory");
var ExerciseOperationType = require("./ExerciseOperationType");

function Kopfrechnen()
{
	var exerciseFactory = new ExerciseFactory();
	
	this.setDifficulty = function(difficulty)
	{
		exerciseFactory.Difficulty = difficulty;
	}
	
	
	this.getDifficulty = function()
	{
		return exerciseFactory.Difficulty;
	}
	
	this.getRandomExercise = function()
	{
		return exerciseFactory.getRandomExercise();
	}
}

module.exports = Kopfrechnen;

},{"./Exercise":1,"./ExerciseFactory":2,"./ExerciseOperationType":3}],5:[function(require,module,exports){
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
var Kopfrechnen = require("./Kopfrechnen");
 
var app = {
	kopfrechnenInstance: new Kopfrechnen(),
	
	// Application Constructor
	initialize: function()
	{
		this.bindEvents();
	},
	
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function()
	{
		document.addEventListener('deviceready', this.onDeviceReady, false);
		var self = this;
		$( "#KopfrechnenStartButton" ).bind( "click", function(event, ui)
		{
			self.kopfrechnenInstance.setDifficulty($("#DifficultySlider").val());
			var exercise = self.kopfrechnenInstance.getRandomExercise();
			$("#ExerciseText").html(exercise.toString());
		});
		
		
		// Event handler for the press of a number button
		// adds the pressed number to the solution number input
		$( ".number-button" ).bind("click", function(event, ui)
		{
			var number = parseInt($.trim($(this).text()));
			if(number != Number.NaN)
			{
				var solutionInput = $("#SolutionInput");
				var solution = solutionInput.val();
				var newSolution = solution + number;
				solutionInput.val(newSolution);
				
			}
		});
		
		$("#CheckButton").bind("click", function(event, ui)
		{
			console.log("kp!!");
		})
	},
	
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function()
	{
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id)
	{
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

app.initialize();

},{"./Kopfrechnen":4}]},{},[5])
;