let input = document.querySelector('input');
let button = document.querySelector('button');
let duplicateField = document.querySelector('#duplicateField');





button.onsubmit = function(evt) {
    evt.preventDefault();
    duplicateField.textContent = input.value;
    console.log(input.value);
    duplicateField.textContent = '';
    input.value = '';
};

button.addEventListener('click', button.onsubmit);



input.addEventListener('keypress', (event) => {
    duplicateField.textContent = duplicateField.textContent + event.key;
});