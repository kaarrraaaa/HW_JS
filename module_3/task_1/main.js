// Записываем строку с произвольным паролем в переменную password
let password = "1234-";

// Проверяем надежность пароля
if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
   console.log("Пароль надёжный");
} else {
   console.log("Пароль недостаточно надёжный");
}
