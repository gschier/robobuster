RoboBuster
==========

We all know your code could use some abuse. RoboBuster will help you kick the crap out
of your code until it can handle anything.

## Installation
``` shell
npm install robobuster
```
## Sample Usage
For more detailed usage see the `test.js` script.

``` js
var assert     = require('assert');
var RoboBuster = require('./RoboBuster');

// Tests are run within whatever scope is passed (ex: this)
var buster = new RoboBuster(this, 'Name Of Test Suite');

var variableInScope = 'foo';

buster.add('First Test Name', function() {
  // Do anything you want. Test will fail if something throws
  assert.equal(variableInScope, 'foo');
});

buster.bust();

```

The output from above test

```
RoboBuster: Picking on Sample Test Suite
RoboBuster: \
RoboBuster:  |  ✔  Test1
RoboBuster:  \ Finished busting up Sample Test Suite
RoboBuster:   | Passed all 1 tests
```

## Run RoboBust on Itself

Want to see RoboBust beat itself up?

``` shell
# run from root module directory
npm test
```
