let heights = [160, 175, 180, 165, 170, 185];

const heightList = document.querySelector("#height-list");
const addHeightBtn = document.querySelector("#add-height-btn");
const filterHeightBtn = document.querySelector("#filter-height-btn");


// Функция для отображения списка роста в DOM
function renderHeights(heightsArray = heights) {
    heightList.innerHTML = ""; // Очищаем предыдущие элементы
    heightsArray.forEach(height => {
      const listItem = document.createElement("li");
      listItem.textContent = height;
      heightList.appendChild(listItem);
    });
}

// Функция для добавления нового роста
function addHeight() {
  const newHeight = prompt("Введите рост нового ученика:");

    if (newHeight === null || newHeight.trim() === "") {
        alert("Рост не введён!");
        return;
    }

  const parsedHeight = parseFloat(newHeight);

  if (isNaN(parsedHeight)) {
       alert("Введено не число. Пожалуйста, введите число.");
       return;
    }


  heights.push(parsedHeight);
  renderHeights();
}


// Функция для фильтрации роста
function filterHeights() {
   const minHeight = prompt("Введите минимальный рост для фильтрации:");

    if (minHeight === null || minHeight.trim() === "") {
      renderHeights(); // Показываем все роста, если ничего не введено
      return;
    }

   const parsedMinHeight = parseFloat(minHeight);

    if (isNaN(parsedMinHeight)) {
       alert("Введено не число. Пожалуйста, введите число.");
       return;
    }

    const filteredHeights = heights.filter(height => height >= parsedMinHeight);
    renderHeights(filteredHeights);
}


// Обработчики событий
addHeightBtn.addEventListener("click", addHeight);
filterHeightBtn.addEventListener("click", filterHeights);

// Вызываем начальное отображение списка роста
renderHeights();