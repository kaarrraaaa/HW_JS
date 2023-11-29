// Функция для фильтрации массива объектов
function filter(objects, property, value) {
 return objects.filter(object => object[property] === value);
}

// Создание массива объектов
let objects = [
 { name: 'Василий', surname: 'Васильев' },
 { name: 'Иван', surname: 'Иванов' },
 { name: 'Пётр', surname: 'Петров' }
];

// Вызов функции и вывод результата
let result = filter(objects, 'name', 'Иван');
console.log(result); 
