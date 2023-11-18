// Функция для создания списка студентов
function createStudentsList(listArr) {
 let ul = document.createElement('ul');

 listArr.forEach(function(student) {
  let li = document.createElement('li');
  let header = document.createElement('h2');
  let info = document.createElement('span');

  header.textContent = student.name;
  info.textContent = 'Возраст: ' + student.age + ' лет';

  li.appendChild(header);
  li.appendChild(info);
  ul.appendChild(li);
 });

 document.body.appendChild(ul);
}

// Создание массива студентов
let allStudents = [
 {name: 'Валя', age: 11},
 {name: 'Таня', age: 24},
 {name: 'Рома', age: 21},
 {name: 'Надя', age: 34},
 {name: 'Антон', age: 7}
];

// Вызов функции
createStudentsList(allStudents);
