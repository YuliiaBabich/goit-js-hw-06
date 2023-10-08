document.querySelector('body').style.backgroundColor = '#edddd8';
const input = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

//input.addEventListener('focus', fontHight);

function fontHight(event) {
    textSpan.style.fontSize = event.currentTarget.value + '5%';
   // textSpan.style.fontSize = event.currentTarget.value + 'px';
}

input.addEventListener('input', fontHight);