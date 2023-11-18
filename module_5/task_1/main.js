// Функция для вычисления возраста
function getAge(birthYear) {
 let currentDate = new Date();
 let currentYear = currentDate.getFullYear();
 let age = currentYear - birthYear;
 return age;
}

// Вызов функции и вывод результата
console.log(getAge(1998)); 
console.log(getAge(1991)); 
console.log(getAge(2007)); 