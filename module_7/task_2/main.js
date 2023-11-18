// Функция для создания карточки студента
function createStudentCard(student) {
 let card = document.createElement('div');
 let header = document.createElement('h2');
 let info = document.createElement('span');

 header.textContent = student.name;
 info.textContent = 'Возраст: ' + student.age + ' лет';
 card.appendChild(header);
 card.appendChild(info);

 document.body.appendChild(card);
}

// Создание объекта студента
let studentObj = {
 name: 'Игорь',
 age: 17
}

// Вызов функции
createStudentCard(studentObj);
