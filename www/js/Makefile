LIB="lib/"
TESTDIR=$(LIB)/tests

test:
	nodeunit $(TESTDIR)/*Test.js

browser:
	browserify $(LIB)/*.js -o browser.js


