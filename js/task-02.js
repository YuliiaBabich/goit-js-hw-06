
const ingredients = [
 'Potatoes',
 'Mushrooms',
 'Garlic',
  'Tomatos',
 'Herbs',
 'Condiments',
];
console.log(ingredients);
const ul = document.querySelector('ul');
//const title= document.createElement("li");
//ul.append(title);
//title.textContent = 'Potatoes';
//title.classList.add("item");  
//console.log(ul);
//console.log(title);
ingredients.forEach(function (ingredient, index) {
  const title = document.createElement('li');
  ul.append(title);
  title.textContent = ingredient;
  title.classList.add("item"); 
  //title.style.backgroundColor = "pink";  
  return title 
});
console.log(ul);