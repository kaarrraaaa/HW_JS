// Задаем параметры
let n = 0;
let m = 100;
let count = 100;

// Генерируем массив случайных чисел
let randomArray = [];
for (let i = 0; i < count; i++) {
 let randomNumber = Math.floor(Math.random() * (Math.abs(m - n) + 1)) + Math.min(n, m);
 randomArray.push(randomNumber);
}

// Выводим результат
console.log(randomArray);
