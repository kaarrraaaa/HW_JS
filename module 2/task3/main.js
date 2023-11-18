// Задаем границы диапазона
let n = -3;
let m = -10;

// Генерируем первое случайное число в диапазоне от n до m
let firstRandom = Math.floor(Math.random() * (Math.abs(m - n )+ 1)) + Math.min(n, m);

// Генерируем второе случайное число в том же диапазоне
let secondRandom = Math.floor(Math.random() *  (Math.abs(m - n )+ 1)) + Math.min(n, m);

// Выводим полученные случайные числа
console.log('Первое случайное число:', firstRandom);
console.log('Второе случайное число:', secondRandom);

// Сравниваем полученные числа и выводим результаты сравнения
console.log('Первое число > второго:', firstRandom > secondRandom);
console.log('Первое число < второго:', firstRandom < secondRandom);
console.log('Первое число >= второго:', firstRandom >= secondRandom);
console.log('Первое число <= второго:', firstRandom <= secondRandom);
console.log('Первое число === второго:', firstRandom === secondRandom);
console.log('Первое число !== второго:', firstRandom !== secondRandom);
