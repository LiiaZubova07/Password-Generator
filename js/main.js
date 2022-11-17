//Создать инпут
//Стилизация
//Добавить плейсхолдер
//Сбросить стандартное поведение инпута
//Навесить обработчик по нажатию
//Добавить кнопки: скопировать, сгенерировать
//Создать функцию генерации пароля

const mainEl = document.querySelector('.main');

//переменная равна инпуту
const passwordEl = document.createElement('input');

//к инпуту добавляется класс
passwordEl.classList.add('password');

//добавить плейсхолдер через атрибут
passwordEl.setAttribute('placeholder', 'Сгенерировать пароль');

//сбросить стандартное поведение
passwordEl.addEventListener('keypress', (e) => {
  e.preventDefault();
});

//добавить обработчик по нажатию
passwordEl.addEventListener('focus', (e) => {
  //вернёмся, когда добавим кнопку сгенерировать
  //копирование при нажатии на кнопку
  navigator.clipboard.writeText(passwordEl.value);
});

//добавить кнопку скопировать
const copyBtn = document.createElement('button');
//задать стиль
copyBtn.classList.add('password-button');
//положить значение внутрь
copyBtn.innerText = 'Скопировать';
//навесить обработчик при клике, чтоб что-то происходило
copyBtn.addEventListener('click', (e) => {
  //вернёмся позже, потому что нечего копировать
  
  //пароль выделяется, когда копируешь пароль
  passwordEl.select();
  //для мобилки
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});

//добавить кнопку генерации
const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Сгенерировать';
generateBtn.addEventListener('click', (e) => {
  //вызов  функции генерации паролей
  let password = generatePassword(12);
  console.log(password);
  passwordEl.value = password;
});
//значение, которое функция будет возвращать
function generatePassword(passwordLength) {
  const numberChars = '0123456789';
  const upperChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const lowerChars = 'qwertyuiopasdfghjklzxcvbnm';
  const symbolChars = '!@#$%^&*()_+';

  //функция
  const allChars = numberChars + upperChars + lowerChars + symbolChars;
  let randomString = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomString += allChars[randomNumber];
  }
  return randomString;
}

//сбросить стандартное поведение
mainEl.appendChild(passwordEl);

//добавить кнопку и отобразить
mainEl.appendChild(copyBtn);

mainEl.appendChild(generateBtn);
