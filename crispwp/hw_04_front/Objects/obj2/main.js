'use strict';

var salaries = {
  Вася: 100,
  Петя: 300,
  Даша: 250
};

function getBiggestSalary(obj) {
  var higher = 0;
  var name = '';

  for (var key in obj) {
    if (higher < obj[key]) {
      higher = obj[key];
      name = key;
    }
  }
  if (Object.keys(obj).length == 0) {
    document.write('Нет сотрудников');
  } else if (!higher) {
    document.write('Все сотрудники без зарплаты');
  } else {
    document.write(name);
  }
}

getBiggestSalary(salaries);
