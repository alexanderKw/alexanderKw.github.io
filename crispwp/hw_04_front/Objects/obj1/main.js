'use strict';

var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};

function getSumSalaries(obj) {
  var sum = 0;

  for (var key in obj) {
    if (!isNaN(obj[key])) {
      sum += +obj[key];
    }
  }

  return sum;
}

document.write(getSumSalaries(salaries));
