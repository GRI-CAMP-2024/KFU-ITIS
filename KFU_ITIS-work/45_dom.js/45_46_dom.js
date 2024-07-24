import { LIST } from "./data.js";
/*
ТЕОРИЯ...
СОБЫТИЯ - это асинхронные действия пользователя на сайте:
  - клик по кнопке
  - отправка формы
  - прокрутка страницы 
  и т.д.

Обработчик события - представляет собой callback-функции (далее CB), вызываемые после срабатывания события 

CB обработчика события принимает в качестве аргумента абстрактный класс EVENT, содержащий всю информацию о событии, и о элементе на котором произошла событие (так называемый target)
*/

// Получение необходимых констант:
const $COACHES = document.querySelector(".coaches");
const SQUARES = document.querySelector(".squares");

// Как создать обработчик события? Записываем в свойство onclick элемента MAIN наш CB ----

// $COACHES.onclick = (e) => {
//   console.log(e.type);
// }

// $COACHES.onclick = (e) => {
//   console.log(e.target);
// }

// Способ 2 --- Прямо в HTML

// Способ 3 -- метод addEventListener c объектом опций
/*

  el.addEventListener("event", callback, options)

    options = {
      once: true,
      passive: false (по-умолчанию)
      capture: false (по-умолчанию)
    }

    Дополнительный объект со свойствами:
      once: если true, тогда обработчик будет автоматически удалён после выполнения.
      capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение. Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
      passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), подробнее об этом будет рассказано в главе Действия браузера по умолчанию.

  addEventListener позволяет навесить несколько одноименных обработчиков на один элемент (с onclick такое не прокатит!)
    
    
*/

const handler = function (e) {
  console.log(e.target.className);
};

const handler2 = function (e) {
  console.log(e.target);
};

// $COACHES.addEventListener("click", handler, { once: false });
// $COACHES.addEventListener("click", handler2, {once: false})

// Удаление обработчика события:
// $COACHES.removeEventListener("click", handler)

// Поговорим о некоторых свойствах объекта Event:

// $COACHES.addEventListener("click", (e) => {
//   console.log({
//     type: e.type,
//     target: e.target,
//     cls: e.target.className,
//     isBubbles: e.bubbles,
//     tag: e.target.tagName,
//   });

// })

// Создаем кастомное событие с классом Event  **********************

// $COACHES.addEventListener("custom", (e) => console.log(e.type))

// let ev = new Event("custom", { bubbles: true });
// $COACHES.dispatchEvent(ev);

// ЧАСТЬ 2 --------------------------------------------------------------

// ФАЗЫ CОБЫТИЯ: ПОГРУЖЕНИЕ, СРАБАТЫВАНИЕ И ВСПЛЫТИЕ
// Прием делегирования (базируется на всплытии)

// Отменяем всплытие для всех карточек с тренерами **********************
// document
//   .querySelectorAll(".coaches__slider_coach")
//   .forEach((card) => (card.onclick = (e) => e.stopPropagation()));

// ИСПОЛЬЗУЕМ ДЕЛЕГИРОВАНИЕ:

function createElem(id) {
  const DIV = document.createElement("DIV");
  DIV.classList.add("squares__el");
  DIV.setAttribute("id", id);
  DIV.textContent = id;
  return DIV;
}

function Render(container, list) {
  let arr = [];
  for (const { id } of list) {
    arr.push(createElem(id));
  }
  container.append(...arr);
}

Render(SQUARES, LIST);

SQUARES.addEventListener("click", (e) => {
  if (!e.target.matches(".squares__el")) return;
  console.log(e.target.id);
});

// СОБЫТИЯ МЫШИ MOUSEENTER / MOUSELEAVE (НЕ ВСПЛЫВАЮТ!):

// SQUARES.addEventListener("mouseenter", (e) => {
//   console.log(e.currentTarget.tagName + "  " + "enter");
// });

// SQUARES.addEventListener("mouseleave", (e) => {
//   console.log(e.currentTarget.tagName + "  " + "leave");
// });

// MOUSEOVER / MOUSEOUT (ВСПЛЫВАЮТ!)

// SQUARES.addEventListener("mouseover", mouseHandler);
// SQUARES.addEventListener("mouseout", mouseHandler);

// function mouseHandler(e) {
//   console.log(e.target.id);
// }

// СОБЫТИЯ ИНПУТОВ  ----------------------------------------------------------
// text.oninput = function (e) {
//   console.log(this.value);
// }

// text.onchange = function (e) {
//   console.log(this.value);
// }

// text.addEventListener("paste", (e) => {
//   e.target.style.background = "green"
// })

// text.addEventListener("cut", (e) => {
//   console.log("Deleted");

// })

// События клавиатуры ----------------------------------------------------------

text.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    console.log(e.target.value);
  }
});

// ЧАСТЬ 3 --------------------------------------------------------------
// Отмена стандартного поведения Браузера при событиях:

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ОТМЕНА ПОВЕДЕНИЯ");
  console.log(e.type);
});

document.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.href);
  })
);

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e.type);
});

text.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.type);
});

checkbox.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.checked);
});
