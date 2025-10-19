// Находим все нужные элементы на странице
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// Слушаем отправку формы
taskForm.addEventListener('submit', function(event) {
    // Эта строка предотвращает перезагрузку страницы при нажатии на кнопку
    event.preventDefault();
    
    // Получаем значения из полей ввода
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    
    // Проверяем, что поле с названием не пустое
    if (title === '') {
        alert('Пожалуйста, введите название задачи!');
        return;
    }
    
    // Добавляем задачу в список
    addTask(title, description);
    
    // Очищаем поля ввода после добавления
    titleInput.value = '';
    descriptionInput.value = '';
});

// Функция для добавления новой задачи
function addTask(title, description) {
    // Создаем элементы для карточки задачи
    const taskItem = document.createElement('li');
    taskItem.className = 'task-card';
    
    // Заполняем карточку содержимым
    taskItem.innerHTML = `
        <h3>${title}</h3>
        ${description ? `<p>${description}</p>` : ''}
        <button class="delete-btn">Удалить</button>
    `;
    
    // Добавляем карточку в список
    taskList.appendChild(taskItem);
    
    // Находим кнопку удаления только что созданной задачи и вешаем на нее обработчик
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });
}
