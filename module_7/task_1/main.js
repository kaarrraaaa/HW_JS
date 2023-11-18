//Функция для создания карточки студента
function createStudentCard(name, age) {
 let card = document.createElement('div');
 let header = document.createElement('h2');
 header.textContent = name;
 
 let info = document.createElement('span');
 info.textContent = 'Возраст: ' + age + ' лет';
 card.appendChild(header);
 card.appendChild(info);

 document.body.appendChild(card);
}

// Вызов функции
createStudentCard('Игорь', 17);
