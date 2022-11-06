const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
});

let message = prompt("Введите текст");
link.textContent = message;
