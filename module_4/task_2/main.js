// Задаем параметры
let count = 5;

// Создаем массив
let array = [];
for (let i = 1; i <= count; i++) {
 array.push(i);
}

// Перемешиваем массив
for (let i = array.length - 1; i > 0; i--) {
 let j = Math.floor(Math.random() * (i + 1));
 let temp = array[i];
 array[i] = array[j];
 array[j] = temp;
}

// Выводим результат
console.log(array);
