//document.body.style.backgroundColor = '#ccdbd4';
document.body.style.color = '#4CAF50';
document.querySelector('button').style.backgroundColor = '#4CAF50'
document.querySelector('button').style.color = 'white'

const imputForm = document.querySelector('.login-form');
//console.log(imputForm); 
imputForm.addEventListener('submit', imputSubmit); //отклик на подію submit ввдення даних
const subscriberData = {};// створюю пустий об'єкт куди буд записуватись введені дані

 function imputSubmit (event) {
   event.preventDefault(); // щоб сторінка не перезавантажувалася
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
     if (email.value === '' || password.value === '') {  
     alert('Please fill out all fields!');         //якщо одна із Форм пуста буде повідомлення
   } else {
    subscriberData.email = email.value;
     subscriberData.password = password.value;     // в іншому випадку дані запишуться в обєкт 

     console.log(subscriberData);
   }
  event.currentTarget.reset();   // перезавантажуеємо/онолюємо
}

