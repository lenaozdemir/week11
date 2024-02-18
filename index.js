const button = document.getElementById("button");
const ul = document.getElementById("ul");
const input = document.getElementById("input");
let allLi = document.querySelectorAll("#ul li");

function createTask() {
  let newLi = document.createElement("li");
  newLi.textContent = input.value;
  ul.append(newLi);
}

document.querySelector(".todo__button").onclick = createTask;

ul.addEventListener("click", checkTask);

function checkTask(event) {
  // Проверяем, что кликнули на элемент списка
  if (event.target.tagName === "LI") {
    // Переключаем состояние выполнения задачи
    event.target.classList.toggle("completed");
  }
}

ul.addEventListener("mouseover", changeCursor);

function changeCursor(event) {
  event.target.style.cursor = "pointer";
}
