(function () {
    // Функция для создания заголовка приложения
    function createAppTitle(title) {
        // Создаем новый элемент h2
        let appTitle = document.createElement('h2');
        // Устанавливаем внутренний HTML элемента h2 равным переданному заголовку
        appTitle.innerHTML = title;
        // Возвращаем созданный элемент h2
        return appTitle;
    }   
  
    // Функция для создания формы элемента списка задач
    function createTodoItemForm () {
        // Создаем новые элементы формы, ввода, div и кнопки
        let form = document.createElement("form");
        let input = document.createElement("input");
        let buttonWrapper = document.createElement("div");
        let button = document.createElement("button");
    
        // Добавляем классы к элементам формы, ввода, div и кнопке
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
    
        // Добавляем кнопку в div и ввод и div в форму
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);
    
        // Устанавливаем атрибут disabled для кнопки, если поле ввода пустое
        input.addEventListener("keyup", function() {
            if (input.value.trim() === "") {
                button.disabled = true; // Отключаем кнопку, если поле ввода пустое
            } else {
                button.disabled = false; // Включаем кнопку, если поле ввода не пустое
            }
        });
    
        // Возвращаем объект, содержащий элементы формы, ввода и кнопки
        return {
            form,
            input,
            button
        };
    }
    
  
    // Функция для создания списка задач
    function createTodoList(){
        // Создаем новый элемент ul
        let list = document.createElement('ul');
        // Добавляем класс к элементу ul
        list.classList.add('list-group');
        // Возвращаем созданный элемент ul
        return list;
    }
  
    // Функция для создания элемента списка задач
function createTodoItem(todo){
   // Создаем новые элементы li, div и кнопки
   let item = document.createElement('li');
   let buttonGroup = document.createElement('div')
   let doneButton = document.createElement('button');
   let deleteButton = document.createElement('button');
   


   // Добавляем классы к элементам li, div и кнопкам
   item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
   item.textContent = todo.name;
   buttonGroup.classList.add('btn-group', 'btn-group-sm');
   doneButton.classList.add('btn', 'btn-success')
   doneButton.textContent = 'Готово';
   deleteButton.classList.add('btn', 'btn-danger')
   deleteButton.textContent = 'Удалить';

   // Если задача выполнена, добавляем соответствующий класс к элементу списка задач
   if (todo.done) {
       item.classList.add('list-group-item-success');
   }

   // Добавляем кнопки в div и div в li
   buttonGroup.append(doneButton);
   buttonGroup.append(deleteButton);
   item.append(buttonGroup);

   // Возвращаем объект, содержащий элементы li, doneButton и deleteButton
   return {
       item,
       doneButton,
       deleteButton,
   };
}

  
    
    function createTodoApp (container, title ='список дел', listName = 'todos'){
  
        // Создаем заголовок приложения, форму элемента списка задач и список задач
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let todos = loadFromLocalStorage(listName);

    
        // Добавляем заголовок приложения, форму элемента списка задач и список задач в контейнер
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
    
        // Добавляем обработчик события отправки формы
        todoItemForm.form.addEventListener('submit', function(e) {
           // Предотвращаем стандартное действие формы (перезагрузка страницы)
           e.preventDefault();
        
           // Если поле ввода пустое, возвращаемся и ничего не делаем
           if(!todoItemForm.input.value){
               return;
           }
        
           // Создаем новый элемент списка задач с введенным значением и уникальным id
           let id = todos.length + 1;
           let todoItem = createTodoItem({id: id, name: todoItemForm.input.value, done: false});
           todos.push(todoItem);
        
           // Добавляем обработчик события клика для кнопки "Готово", который переключает класс элемента списка задач и параметр done в массиве дел
           todoItem.doneButton.addEventListener('click', function (){
               todoItem.item.classList.toggle('list-group-item-success');
               let todo = todos.find(todo => todo.id === todoItem.id);
               if (todo) {
                   todo.done = !todo.done;
               }
               saveToLocalStorage(listName, todos);
           });
           
           
           // Добавляем обработчик события клика для кнопки "Удалить", который удаляет элемент списка задач и объект в массиве дел, если пользователь подтверждает действие
           todoItem.deleteButton.addEventListener('click', function(){
               if (confirm('вы уверены?')) {
                  todoItem.item.remove();
                  let index = todos.findIndex(todo => todo.id === todoItem.id);
                  if (index !== -1) {
                      todos.splice(index, 1);
                  }
                  saveToLocalStorage(listName, todos);
               }
               saveToLocalStorage(listName, todos);
           });
           
           // Добавляем созданный элемент списка задач в список задач
           todoList.append(todoItem.item);
           
           // Очищаем поле ввода формы
           todoItemForm.input.value = '';
        });
        
        
       
       }
        
       // Добавляем функцию createTodoApp в глобальный объект window, чтобы ее можно было вызывать из других частей кода
       window.createTodoApp = createTodoApp;
       // Функция для сохранения данных в LocalStorage
        function saveToLocalStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Функция для чтения данных из LocalStorage
        function loadFromLocalStorage(key) {
            let data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        }
        let todos = loadFromLocalStorage(listName);

        // Если в localStorage есть данные, то отрисовать их на экране
        todos.forEach(todo => {
            let todoItem = createTodoItem(todo);
            todoList.append(todoItem.item);
        });

    })();