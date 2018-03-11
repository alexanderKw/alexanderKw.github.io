'use strict';

var userAnswer = +prompt('Введите число', 0);

// Loop
function sumTo1(n) {
  var sum = 0;
  var i = 0;

  while (i < n) {
    i++;
    sum += i;
  }

  return sum;
}

document.write(sumTo1(userAnswer) + ' - Loop' + '<br>');

// Recursion
function sumTo2(n) {
  if (n == 1 || n == 0) return n;

  return n + sumTo2(n - 1);
}

document.write(sumTo2(userAnswer) + ' - Recursion' + '<br>');
