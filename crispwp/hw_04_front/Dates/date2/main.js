'use strict';

var userDate = +prompt('Введите число от 1 до 1000', 'от 1 до 1000');

if (isNaN(userDate)) {
  document.write('Должно быть число!');
} else if (userDate < 1 || userDate > 1000) {
  document.write('Число от 1 до 1000!');
} else {
  getNewDate(userDate);
}

function getNewDate(newDate) {
  var months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ];
  var weekdays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
  ];

  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + newDate);

  var newYear = currentDate.getFullYear();
  var newMonth = currentDate.getMonth();
  var newWeekDay = currentDate.getDay();
  var newMonthDay = currentDate.getDate();

  document.write(
    'Через ' + newDate + ' дней будет вот такая дата:' + '<br>',
    'День недели: ' + '<b>' + weekdays[newWeekDay] + '</b>' + '<br>',
    'Число: ' + '<b>' + newMonthDay + '</b>' + '<br>',
    'Месяц: ' + '<b>' + months[newMonth] + '</b>' + '<br>',
    'Год: ' + '<b>' + newYear + '</b>' + '<br>'
  );
}
