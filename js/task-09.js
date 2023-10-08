function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBody = document.body; // body, який будмо змінювати 
const namеNewColor = document.querySelector('.color'); //span куди виводиться назва нового коліру
//console.log(namеNewColor); 

const changeColorBtn = document.querySelector('.change-color'); // кнопка зміни кольору
//console.log(changeColorBtn); 

const changeColor = () => {
   namеNewColor.textContent = getRandomHexColor();
   changeBody.style.backgroundColor = namеNewColor.textContent;
 };
// змінюємо рамдомно background колір за допомогою функціі getRandomHexColor
changeColorBtn.addEventListener('click', changeColor);