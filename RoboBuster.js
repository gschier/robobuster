require('colors');
var prefix = 'RoboBuster:'.magenta+' ';

var RoboBuster = module.exports = function RoboBust(that, testName) {
  this.that = that;
  this.testName = testName;
  this.tests = { };
  return this;
};

RoboBuster.prototype.add = function(name, fn) {
  if (!name) { console.log(prefix+'You must pass a name with every test.'); }
  else { this.tests[name] = fn; }
  return this;
};

RoboBuster.prototype.bust = function() {
  var passed = 0;
  var failed = false;

  console.log('');
  console.log(prefix+'Picking on '+(this.testName || 'No Name').cyan);
  console.log(prefix+'\\');

  for (var fnName in this.tests) {
    var fn = this.tests[fnName];
    if (typeof fn === 'function') {
      try {
        fn.call(this.that);
        passed++;
        console.log(prefix+' | '+' ✔ '.green.inverse+' '+fnName);
      } catch(e) {
        console.log(prefix+' | '+' ✖ '.red.inverse+' '+fnName);
        console.log(e);
        console.log(e.stack);
        failed = true;
        break;
      }
    } else {
      console.log(prefix+'Tester passed was not a function, it was '+(typeof fn));
    }
  }

  console.log(prefix+' \\ Finished busting up '+(this.testName || 'No Name').cyan);

  if (failed) { console.log(prefix+'  | Passed '+passed.toString().green.bold+' but failed '+fnName.red.bold); }
  else { console.log(prefix+'  | Passed all '+passed.toString().green.bold+' tests'); }
  console.log('');

  if (failed) { process.exit(1); }
};
