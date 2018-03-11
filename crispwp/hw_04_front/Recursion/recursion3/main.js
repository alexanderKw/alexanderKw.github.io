'use strict';

// Interval
function outputIntervalNums() {
  var i = 1;
  var timer = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timer);
    i++;
  }, 100);
}
outputIntervalNums();

// Timeout
function outputTimeoutNums() {
  var i = 1;
  var timer = setTimeout(function numsCount() {
    console.log(i);
    if (i < 20) {
      setTimeout(numsCount, 100);
    }
    i++;
  }, 0);
}
outputTimeoutNums();
