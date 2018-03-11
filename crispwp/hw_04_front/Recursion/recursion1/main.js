'use strict';

var userAnswer = +prompt('Введите натуральное число', 0);

function getNumbers(n) {
  if (n >= 1) {
    getNumbers(n - 1);
    document.write(n);
  }
}

getNumbers(userAnswer);
