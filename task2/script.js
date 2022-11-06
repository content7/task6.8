const consoleLog = document.querySelector('#consoleLog');
const Prompt = document.querySelector('#prompt');
const Alert = document.querySelector('#alert');


consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})


Alert.addEventListener('click', () => {
    alert('Функция выводит в браузере окно с сообщением');
})


Prompt.addEventListener('click', () => {
    alert('Функция отображает окно с текстом и предлагает пользователю ввести текст');
})


