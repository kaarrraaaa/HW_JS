// Функция для определения старшего пользователя из массива
function getOlderUserArray(users) {
 let oldestUser = users[0];
 for (let i = 1; i< users.length; i++){
    if(users[i].age > oldestUser.age){
        oldestUser = users[i];
    }
 }
 return oldestUser.name;
}

// Создание массива пользователей
let allUsers = [
 {name: 'Валя', age: 11},
 {name: 'Таня', age: 24},
 {name: 'Рома', age: 21},
 {name: 'Надя', age: 34},
 {name: 'Антон', age: 7}
];

// Вызов функции и вывод результата
let result = getOlderUserArray(allUsers);
console.log(result); 
