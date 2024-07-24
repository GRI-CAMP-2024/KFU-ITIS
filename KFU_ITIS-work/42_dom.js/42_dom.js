/* Работа с атрибутами и свойствами

Перед началом работы, необходимо получить конкретный элемент со страницы
В основном, тип получаемого атрибута элемента имеет строковый тип!

*/

const $IMAGE_1 = document.querySelector(".coaches__slider_coach img");
const $LINK_1 = document.querySelector(".coaches__slider_coach a");
const $H2 = document.querySelector(".coaches h2");

// Свойства имени тега и типа узла
let nodeType = $H2.nodeType;
let tagName = $H2.tagName;

console.log(nodeType, tagName);

// -----------------------------------------------

const alt = $IMAGE_1.alt;
console.log(alt); // irina.png

// -----------------------------------------------

// Некоторый свойства по сути представляют собой Getter / Setter:

const src = $IMAGE_1.src;

console.log(src); // http://127.0.0.1:5500/42_dom.js/img/irina.png - получили не относительный, а полный путь!!

// Запишем в свойство src путь к другому изображению из папки img:
$IMAGE_1.src = "../img/max.png";

const href = $LINK_1.href;
console.log(href); // http://127.0.0.1:5500/42_dom.js/*

// Запишем в свойство href путь к другому ресурсу:
$LINK_1.href = "https://kpfu.ru";

// -----------------------------------------------

// Работаем с дата-атрибутами (old school):

const dataTitle = $H2.dataset.info;

console.log(dataTitle); // title

// Работа с Атрибутами ---------------------------------

// Получение:

const SRC = $IMAGE_1.getAttribute("src");

console.log(SRC); // ./img/max.png, получили относительный путь

// Запись:

// $IMAGE_1.setAttribute("src", './img/irina.png')

// Удаление:

// $IMAGE_1.removeAttribute("src")

// Проверка наличия:

console.log($IMAGE_1.hasAttribute("title")); // false

// -----------------------------------------------

// Получение вложенной HTML-структуры элемента (строковый тип):
const html = document.querySelector(".coaches__slider").innerHTML;

// Перезапись вложенной HTML-структуры элемента:
// document.querySelector(".coaches__slider").innerHTML = `<H4>Все перетерли...</H4>`

// -----------------------------------------------

// Получение текстового содержимого элемента:
console.log($H2.textContent); // Профессиональные тренеры

// Перезапись текстового содержимого элемента:
// $H2.textContent = 'профессиональные инфо-цыгане'

// просто текст
// $H2.textContent = `<strong> профессиональные инфо-цыгане </strong>`;

// -----------------------------------------------

// Получение полной HTML-структуры элемента (строковый тип):
console.log(document.querySelector(".coaches__slider").outerHTML);

// Создание собственного атрибута ----------------------:

document.body.querySelector(".coaches").myCustomProp =
  "Our Custom Attribute 45";
// console.dir(document.body.querySelector(".coaches"))

// Создание собственного метода ----------------------:

Element.prototype.showElementInfo = function () {
  return {
    tagName: this.tagName,
    nodeType: this.nodeType,
    parentNode: this.parentNode,
    src: this.src || "No such Attribute",
    childNodes: this.childNodes,
  };
};

// console.log($H2.showElementInfo());

// -----------------------------------------------

// Использование шаблонных литералов для интерполяции и динамической генерации HTML-шаблонов
// Важно, innerHTML всегда перезаписывает предыдущее содержимое!

const data = [
  {
    tag: "LI",
    text: "Пункт 1",
  },
  {
    tag: "LI",
    text: "Пункт 2",
  },
  {
    tag: "LI",
    text: "Пункт 3",
  },
];

const UL = document.createElement("UL");
UL.classList.add("ul");

for (const { tag, text } of data) {
  UL.innerHTML += `<${tag}> ${text} </${tag}>`;
}

console.log(UL);
