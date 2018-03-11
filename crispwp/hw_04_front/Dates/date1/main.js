'use strict';

var time = new Date();

var hours = time.getHours();
var minutes =
  time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
var seconds =
  time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

document.write(hours + ':' + minutes + ':' + seconds);
