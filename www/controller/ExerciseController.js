angular.module('KopfrechnenApp').controller('ExerciseController', ["$scope", "$timeout", "$location", "TrainingService",
function($scope, $timeout, $location, TrainingService)
{
	$scope.solution = undefined;
	
	$scope.init = function()
	{
		$scope.IsTimeTraining = (TrainingService.getTraining() instanceof TimeTraining);
		TrainingService.getTraining().on('stop', function()
		{
			$location.path("/report");
		});
	};
	
	$scope.$on('$viewContentLoaded', function() {
		$scope.init();
	});
		
	$scope.AddNumber = function(number){
		var currentValue = 0;
		if($scope.solution !== undefined && parseInt($scope.solution) !== Math.NaN)
			currentValue = parseInt($scope.solution);
			
		//if(parseInt(number) !== Math.NaN && number != undefined)
			$scope.solution = currentValue * 10 + number;
	}
	
	$scope.Clear = function(){
		$scope.solution = undefined;
	}

	$scope.ShowMistakeHint = false;
	$scope.Next = function(){
		var solution = parseInt($scope.solution);
		var exercise = TrainingService.getTraining().getCurrentExercise();
		exercise.check(solution);
		$scope.solution = undefined;
		
		if(exercise.getCheckCount() > 0 && exercise.getPassedChecks() == 0){
			$scope.ShowMistakeHint = true;
		}
	}
	
	$scope.getExercise = function() {
		var exerciseText = undefined;
		if(TrainingService.getTraining() !== undefined)
			exerciseText = TrainingService.getTraining().getCurrentExercise().text;
		return exerciseText;
	};

	$scope.Cancel = function() {
		TrainingService.uninitialize();
		$location.path("/");
	}
	
	$scope.remainingSeconds = 0;
	$scope.timePercentage = 100;
	
	var updateTime = function(){
		if($scope.IsTimeTraining){
			var training = TrainingService.getTraining();
			if(training !== undefined)
			{
				var time = training.DurationTime;
				var remainingSeconds = training.getRemainingSeconds();
				$scope.timePercentage = Math.round(100 / time * remainingSeconds);
				$scope.remainingSeconds = Math.round(training.getRemainingSeconds());
				$timeout(updateTime, 1000);
			}
		}
	}
	$timeout(updateTime, 1000);
	
}])


