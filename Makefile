LIB="www/js/lib/"
TESTDIR=$(LIB)/tests

test:
	nodeunit $(TESTDIR)/*Test.js

browser:
	cd $(LIB); browserify -r ./TimeTrainingConfiguration -r ./ExerciseFactory \
	-r ./AdditionExerciseFactory -r ./TimeTraining -r ./SpecificExerciseFactory \
	-r ./SubtractionExerciseFactory -r ./MultiplicationExerciseFactory \
	-r ./TrainingReport -r ./DivisionExerciseFactory -o ../browser.js


