'use strict';

$(document).ready(function() {
  $('.wrapper').on('click', '.btn-up-c', function() {
    var text = $('.text-field');
    text.val(text.val().toUpperCase());
  });
});
