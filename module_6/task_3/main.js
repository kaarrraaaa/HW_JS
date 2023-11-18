// Функция для фильтрации массива объектов
function filter(objects, property, value) {
let filterObjects = [];
for (let i = 0; i< objects.length; i++){
    if (objects[i][property] === value ){
        filterObjects.push(objects[i]);
    }
}
}
return filterObjects;
// Создание массива объектов
let objects = [
 { name: 'Василий', surname: 'Васильев' },
 { name: 'Иван', surname: 'Иванов' },
 { name: 'Пётр', surname: 'Петров' }
];

// Вызов функции и вывод результата
let result = filter(objects, 'name', 'Иван');
console.log(result); 
