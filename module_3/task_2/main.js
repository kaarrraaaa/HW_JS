// Имя и фамилия пользователя
let userName = "john";
let userSurname = "DOE";

// Преобразование строк в верхний регистр
let subStringNameFirst = userName.substring(0,1).toUpperCase();
let subStringSurnameFirst= userSurname.charAt(0).toUpperCase();
let subStringName = userName.substring(1).toLowerCase();
let subStringSurname = userSurname.substring(1).toLowerCase();

// Преобразуем имя и фамилию в верхний и нижний ргистр 
let formattedName = subStringNameFirst + subStringName;
let formattedSurname = subStringSurnameFirst + subStringSurname;

// Вывод преобразованных строк
console.log('Форматированное имя', formattedName);
console.log('Форматированная фамилия', formattedSurname);

// Проверка, были ли исходные строки равны преобразованным
let messageUserName = userName !== formattedName ? "Имя было преобразовано" : "Имя осталось без изменений";
let messageUserSurname = userSurname !== formattedSurname ? "Фамилия была преобразована" : "Фамилия осталась без изменений";

// Вывод сообщений
console.log(messageUserName);
console.log(messageUserSurname);
