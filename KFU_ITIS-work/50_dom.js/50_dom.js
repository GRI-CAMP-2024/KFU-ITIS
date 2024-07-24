/*
Генерация HTML-шаблонов средствами JS. Рендеринг разметки, согласно модели данных!
*/
import { sliderModel } from "./model.js";

// Получение необходимых констант:
const $COACHES = document.querySelector(".coaches");
const $COACHES_SLIDER_TRACKER = $COACHES.querySelector(
  ".coaches__slider_tracker"
);

$COACHES.addEventListener("click", clickHandler);

function clickHandler(e) {
  if (!e.target.matches(".coaches__slider_coach a")) return;

  e.preventDefault();

  const id = e.target.id;
  const info = sliderModel.find((coach) => coach.id === id);

  console.log(id, info);
}

// Используем IIFE (immediate invoked functional expression)
(function render(list, container) {
  const html = list.map((item) => {
    const { id, img, name, area } = item;
    return `
        <article class="coaches__slider_coach">
          <figure>
            <img src="${img}" alt="${img}" />
            <figcaption>${name}</figcaption>
          </figure>
          <span>${area}</span>
          <a href="./" id="${id}">Подробнее </a>
      </article>
    `;
  });
  container.innerHTML = html.join("");
})(sliderModel, $COACHES_SLIDER_TRACKER);
