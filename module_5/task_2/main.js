// Функция для фильтрации email-адресов
function filter(whiteList, blackList) {
 let result = [];
  for (let i=0; i< whiteList.lenght; i++){
    if(!blackList.includes(whiteList[i])){
        result.push(whiteList[i]);
    }
  }
   return result;
}

// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];

// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];

// Вызов созданной функции:
let result = filter(whiteList, blackList);

// Вывод результата
console.log(result); 
