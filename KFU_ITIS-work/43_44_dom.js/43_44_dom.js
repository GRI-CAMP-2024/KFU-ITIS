/*
ИЗУЧАЕМ АТРИБУТЫ DOM-элементов:

- типизация атрибутов
- атрибут style
- data-атрибуты

При парсинге (чтении) Браузером нашего HTML-файла и формировании DOM-дерева HTML-атрибуты превращаются в свойства DOM-элементов!!

*/

const $COACHES = document.querySelectorAll(".coaches__slider_coach");

// Свойствa: attributes;
const attrs = $COACHES[0].attributes;

console.log(attrs);

for (const attr of attrs) {
  console.log(attr.name, attr.value);
}

// Аттрибут hidden:

// $COACHES[0].hidden = true;

// Работа с атрибутом style через JavaScript:

// Читаем CSSStyleDeclaration
for (const coach of $COACHES) {
  // console.log(coach.style);
}

// Записываем значения INLINE CSS-свойств через свойства DOM-элемента -----
// $COACHES[0].style.backgroundColor = 'teal'
// $COACHES[0].style.color = 'red'
// $COACHES[0].style.transform = "translateX(50px)";

// Работа с атрибутом style, который перехатирает все предыдущие стили!

// $COACHES[0].setAttribute("style", "background-color: teal; color: red;");

// Получаем строку инлайн-стилей 1:
const inlineStyles = $COACHES[0].getAttribute("style");
// console.log(inlineStyles);
// background-color: teal; color: red;

// Получаем строку инлайн-стилей 2:
// console.log($COACHES[0].style.cssText);
// background-color: teal; color: red;

// Запись инлайн-стиля с использованием выражения:
// let widthRate = 10;
// $COACHES[0].style.width = `${widthRate}%`;

// let int = setInterval(() => {
//   widthRate += 1
//   $COACHES[0].style.width =  `${widthRate}%`

//   if($COACHES[0].style.width === "100%") clearInterval(int)

// },50)

// Аттрибуты типизированы: -----

// checkbox.checked = true
// checkbox.checked = false

// button.disabled = true
// button.disabled = false

// Методы объекта сlassList -----
// Добавление класса:
$COACHES[0].classList.add("dynamic");
// Удаление класса:
$COACHES[0].classList.remove("dynamic");
// Добавление в цикле:
// $COACHES.forEach(el => el.classList.add("dynamic"))
// Переключение класса:
// setInterval(() => $COACHES[0].classList.toggle("dynamic"),500)
// Замена класса:
// $COACHES[0].classList.replace("dynamic", "superDynamic")
// Проверка класса:
// let hasClass = $COACHES[0].classList.contains("coaches__slider_coach");
// console.log(hasClass);

// Объект ClassList. Props: value, length

const [cls1, cls2] = $COACHES[0].classList.value.split(" ");
console.log(cls1, cls2);
