document.querySelector('body').style.backgroundColor = '#f0d0ff';
const input = document.getElementById('name-input');
//console.log(input);
const output = document.getElementById('name-output');
//console.log(output);
//console.log(output.textContent);
const enterName = (event) => {
    output.textContent = input.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};
input.addEventListener('input', enterName);

