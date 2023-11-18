// Массивы
let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];

// Объединение массивов
let arrNew = [];
for (let i = 0; i < arr1.length; i++) {
 arrNew.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
 arrNew.push(arr2[i]);
}

// Вывод результата
console.log(arrNew);
