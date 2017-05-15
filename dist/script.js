"use strict";

var howMuchPLN = function howMuchPLN() {

  var eur = document.querySelector('#eur-amount');
  var eurAmount = eur.value;
  if (isNaN(eurAmount)) eurAmount = 0;

  var rate = 4.2 * (1 + (Math.random() * 100 - 50) / 1000);
  var PLN = rate * eurAmount;
  PLN = PLN.toFixed(4);
  PLN = PLN.replace(".", ",");

  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var currentDate = d.getFullYear() + '.' + month + '.' + day + '&nbsp;' + hour + ':' + minutes;

  var element = document.createElement('li');
  element.className = 'tile';

  element.innerHTML = "<div class=\"row-container\"><p class=\"row1\">PLN AMOUNT</p><p class=\"row2\">" + PLN + "</p></div><p class=data-container><i class=\"icon icon-clock\"></i><span class=\"data\">&nbsp;" + currentDate + "</span></p>";

  var parent = document.querySelector('.pln-amount');
  parent.insertBefore(element, parent.firstChild);
  return 1;
};

var button = document.querySelector('.convert-button');
button.addEventListener('click', howMuchPLN);