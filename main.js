// 1 задание :  Сделать Counter: добавить две кнопки + и - будет let num = 0при клике на кнопку + добавлять к num 1при клике на кнопку - отнимать к num 1

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");

let num = 0;

function numberCounter() {
  counter.textContent = num.toString();
}

addBtn.addEventListener("click", () => {
  num++;
  numberCounter();

});

subBtn.addEventListener("click", () => {
  num--;
  numberCounter();

});

numberCounter();
