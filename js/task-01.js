"use strict";
/*--------Завдання 1 (several variants)----*/

console.log('Number of categories:', document.getElementById('categories').getElementsByClassName('item').length);
//console.log('Number of categories:', document.querySelectorAll(".item").length);
//console.log('Number of categories:',document.querySelector('ul').children.length);

const totalul = document.querySelector('ul'); // головний список
//console.log(totalul);
const allitem = document.querySelectorAll('.item'); //всі li
//console.log(allitem);
allitem.forEach(item => {
  const innerli = item.querySelectorAll('li');
  // console.log(item.firstElementChild.textContent);
  console.log('Category:', item.querySelector('h2').textContent, 'Elements:',
    innerli.length); 
  //console.log([...item].querySelectorAll('li').length);
});

