/*

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  }
]

let users = [
  { id: 1, name: "Вася", job: "programmer", age: 22 },
  { id: 10, name: "Петя", job: "doctor", age: 45 },
  { id: 17, name: "Маша", job: "fighter", age: 27 },
  { id: 300, name: "Викентий", job: "singer", age: 30 },
  { id: 400, name: "Евлампия", job: "teacher", age: 50 },
  { id: 71, name: "Ефросинья", job: "director", age: 36  },
  { id: 22, name: "Перзасрак", job: "programmer", age: 40  },
  { id: -100, name: "Даздраперма", job: "cleaner", age: 19 }
];

1. Создайте на основе users новый массив, в котором останутся только программисты (job: "programmer")

2. Создайте на основе users новый массив, в котором каждый объект будет содержать 2 свойства: id и name:
[{ id: 1, name: "Вася"}, { id: 2, name: "Петя"},...]

3. Рассчитайте сумму всех id массива users

4. отсортируйте массив users по свойству id в возрастающем порядке

5. Напишите функцию getCamalCased, принимающую в качестве параметра строку из слов, разделенных дефисом и возвращающую новую строку в верблюжьей нотации (сamalCase):
На входе: "list-style-type" 
На выходе: "listStyleType"

6. В массиве data - найдите максимальное значение id, используя метод sort, который будет обязательно принимать 
callback- функцию. Запишите Ваш код в переменную max.

7. Создайте функцию filterByRange, принимающую исх. массив, нижний значение диапазона, верхнее значение диапазона:
function filterByRange(arr, start, end) { Ваш код...}. Функция должна изменить исходный массив, удалив из него элементы за пределами заданного Вами диапазона.
Исходный массив: 
const numbers = [11, 21, 20, 33, 40, 45, 50]

8. Напишите функцию getAverageAge, вычисляющую средний возраст пользователей в массиве users

9. Создайте из исходного persons - новый массив, где каждый объект содержит два свойства: age и name. При этом свойство name содержит строку из имени и фамилии, разделенную пробелом

const persons = [
  { name: "George", age: "30", surname: "Carl" },
  { name: "Ramil", age: "30", surname: "Galiev" },
  { name: "Annet", age: "30", surname: "Rose" },
];


*/

let users = [
  { id: 1, name: "Вася", job: "programmer", age: 22 },
  { id: 10, name: "Петя", job: "doctor", age: 45 },
  { id: 17, name: "Маша", job: "fighter", age: 27 },
  { id: 300, name: "Викентий", job: "singer", age: 30 },
  { id: 400, name: "Евлампия", job: "teacher", age: 50 },
  { id: 71, name: "Ефросинья", job: "director", age: 36 },
  { id: 22, name: "Перзасрак", job: "programmer", age: 40 },
  { id: -100, name: "Даздраперма", job: "cleaner", age: 19 },
];

console.log(users.sort((a, b) => a.id - b.id));

// --------------------------

function getCamalCased(s) {
  return s
    .split("-")
    .map((l, i) => (i > 0 ? l[0].toUpperCase() + l.slice(1) : l))
    .join("");
}

console.log(getCamalCased("font-size"));

// --------------------------

const numbers = [11, 21, 20, 33, 40, 45, 50];

function filterByRange(arr, start, end) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < start || arr[i] > end) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterByRange(numbers, 30, 40);

console.log(numbers);
