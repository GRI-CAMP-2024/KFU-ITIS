// Получение BODY

const $BODY = document.body;
const $HTML = document.documentElement;

// console.log($HTML.scrollHeight);

// Получение элементов со страницы по СSS-селектору (классу, тегу, id)

const $COACHES = document.querySelector(".coaches");

console.dir($COACHES);

// ПОЛУЧИМ ВСЕX ДЕТЕЙ (ПРЯМЫХ ПОТОМКОВ) СЕКЦИИ $COACHES:

const $COACHES_CHILDREN = $COACHES.children;

// ПОЛУЧИМ ЗАГОЛОВОК
const $COACHES_H1 = $COACHES_CHILDREN[0];

// ПОЛУЧИМ СОСЕДНИЙ С ЗАГОЛОВОК ЭЛЕМЕНТ
const $COACHES_SLIDER = $COACHES_H1.nextElementSibling;

console.dir($COACHES_SLIDER);

// ПОЛУЧИМ ССЫЛКУ С ID = 1
const $LINK_1 = document.getElementById("1");
console.log($LINK_1);

// ПОЛУЧИМ РОДИТЕЛЬСКИЙ ЭЛЕМЕНТ ССЫЛКИ С ID = 1
const $PARENT = $LINK_1.parentElement;

console.log($PARENT);

// ALIVE HTML COLLECTION:
const $COACHES_SLIDER_COACH = $COACHES.getElementsByClassName(
  "coaches__slider_coach"
);

// DEAD NODE LIST:
const $COACHES_SLIDER_COACH2 = $COACHES.querySelectorAll(
  ".coaches__slider_coach"
);

// РАЗНИЦА Хорошо проявляется при удалении элементов:

// $COACHES_SLIDER_COACH2[0].remove()
// $COACHES_SLIDER_COACH[0].remove()

// console.log($COACHES_SLIDER_COACH, $COACHES_SLIDER_COACH2);

// СОЗДАЕМ СВОЙ СПИСОК:

const $UL = document.createElement("UL");
$UL.classList.add("ul");

// вставляем внутрь тега body, в самое начало...
$BODY.prepend($UL);

for (let i = 0; i < 5; i++) {
  const $LI = document.createElement("li");
  $LI.id = i;
  $LI.classList.add("ul__li");

  // вставка текста внутрь $LI
  $LI.textContent = `${i + 1}. пункт`;

  // вставляем внутрь элемента $UL, в самый конец...
  $UL.append($LI);
}

// очистим все элементы внутри $UL:
$UL.querySelectorAll(".ul__li").forEach((li) => li.remove());

// Превращаем коллекцию элементов в массив элементов, которому будут лоступны все методы массивов:

const $COACHES_SLIDER_COACH_ARRAY = Array.from($COACHES_SLIDER_COACH);
console.log($COACHES_SLIDER_COACH_ARRAY);

console.log($COACHES_SLIDER_COACH_ARRAY.filter((sel, i) => i % 2));
