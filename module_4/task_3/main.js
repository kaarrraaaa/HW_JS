
// Массив
let array = [2,5,1,3,4];

// Число
let n = 3;

// Поиск индекса элемента
let index = array.findIndex(element => element === n);

// Вывод результата
if (index !== -1) {
 console.log("Индекс элемента: " + index);
} else {
 console.log("Элемент не найден");
}
