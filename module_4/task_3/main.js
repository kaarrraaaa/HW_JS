// Массив
let array = [2,5,1,3,4];

// Число
let n = 3;

// Поиск индекса элемента
let index = -1;
for (let i = 0; i < array.length; i++) {
 if (array[i] === n) {
 index = i;
 break;
 }
}

// Вывод результата
if (index !== -1) {
 console.log("Индекс элемента: " + index);
} else {
 console.log("Элемент не найден");
}
