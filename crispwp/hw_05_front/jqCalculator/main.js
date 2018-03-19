'use strict';

$(document).ready(function() {
  $('.buttons').on('click', '.btn', function() {
    var field1 = $('.field-1');
    var field2 = $('.field-2');

    var num1 = parseFloat(field1.val());
    var num2 = parseFloat(field2.val());

    var result = 0;
    var success = false;

    if ($.isNumeric(num1) && $.isNumeric(num2)) {
      switch ($(this).text()) {
        case '+':
          result = num1 + num2;
          success = true;
          break;
        case '-':
          result = num1 - num2;
          success = true;
          break;
        case '*':
          result = num1 * num2;
          success = true;
          break;
        case '/':
          result = num1 / num2;
          success = true;
          break;
      }
    } else {
      result = 'Оба значения должны быть числами!';
    }

    $('.result').val(result);

    if (success) {
      field1.val('');
      field2.val('');
    }
  });
});
