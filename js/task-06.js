const input = document.getElementById('validation-input');
//console.log(input); // наш тег импут
input.addEventListener('blur', borderColor); // додаємо слухача події 'blur' на елемент. буде змінювати колір рамки импута

function borderColor(event) {
  const allowedLength = +input.dataset.length; //6 data-length="6"
  const inputLength = Number(input.value.length); // довжина, яку водить користувач

  if (allowedLength >= inputLength) {   // зленіий колір зі стилів додаємо клас
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');  // додаємо класс черв.колір
    input.classList.add('invalid');
    }   
}
