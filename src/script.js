
var howMuchPLN = () => {

  let eur = document.querySelector('#eur-amount');
  let eurAmount = eur.value;
  if(isNaN(eurAmount)) eurAmount = 0;
  

  let rate = 4.2 * ( 1+ ((Math.random() * 100) - 50)/1000);
  let PLN = rate * eurAmount;
  PLN = PLN.toFixed(4);
  PLN = PLN.replace("." , ",");


  let d = new Date();
  let month = d.getMonth()+1;
  let day = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();

  month = (( month < 10)? '0' + month : month);  
  day = (( day < 10)? '0' + day : day);  
  hour = (( hour < 10)? '0' + hour : hour);  
  minutes = (( minutes < 10)? '0' + minutes : minutes);

  let currentDate= d.getFullYear() + '.' + month + '.' + day+ '&nbsp;' + hour + ':' + minutes;


  let element = document.createElement('li');
  element.className = 'tile';

  element.innerHTML = `<div class="row-container"><p class="row1">PLN AMOUNT</p><p class="row2">` + PLN +  `</p></div><p class=data-container><i class="icon icon-clock"></i><span class="data">&nbsp;`+ currentDate +`</span></p>`;

  const parent = document.querySelector('.pln-amount');
  parent.insertBefore(element, parent.firstChild);
  return 1;
};

const button = document.querySelector('.convert-button');
button.addEventListener('click', howMuchPLN);




