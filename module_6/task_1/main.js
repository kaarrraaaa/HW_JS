// Функция для определения старшего пользователя
function getOlderUser(user1, user2) {
 if (user1.age > user2.age) {
  return user1.name;
 } else {
  return user2.name;
 }
}

// Создание объектов пользователей
let user1 = {
 name: 'Игорь',
 age: 17
};

let user2 = {
 name: 'Оля',
 age: 21
};

// Вызов функции и вывод результата
let result = getOlderUser(user1, user2);
console.log(result); // вернет 'Оля'
