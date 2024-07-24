/*

1. Напишите функцию, принимающую два аргумента, отвечающие за ключ и значения свойства соответственно. Функция должна добавлять новые свойства в существующий объект и выводить в консоль актуальное число свойств в целевом объекте

2*. Дан объект, описывающий пользователя:

const user = {
  name: "GRI",
  citizen: "RU",
  age: 50,
  status: "guest",
  empty: null,
  address: {
    country: "Russia",
    city: "Rostov",
  },
  fn: () => {},
  arr: [1, 2, 3, 4, 5],
  num: 25,
  map: new Map(),
}

Задачи:
- Выведите значения всех вложенных св-вв, к примеру 'Russian Federation';

- Используя в т.ч. предыдущие знания курса, реализуйте функцию simplify, мутирующую исходный объект, оставляя в нем свойства, значения которых являются примитивными типами!
Например, значением passport является объект (структура данных), т.о. оно не должно попасть в объект user 
Результат: 
{
  name: "GRI",
  citizen: "RU",
  age: 50,    
  status: "guest",
  empty: null,
  num: 25,
}
 
3*. Используя в т.ч. предыдущие знания курса, добавьте все 'цифровые' ключи объекта в новый массив digits:
Ваша функция должна проверять каждый ключ и добавлять только 'цифровое' значение в массив. По итогу, функция должно вернуть массив цифровых ключей.
Подсказка:
В самом начале тела функции обьявите пустой массив: const digits = []
Прошедший проверку ключ key добавляется в конец массива методом push: digits.push(key)

const rand = {
    1: "One",
    name: 'Olesya',
    workArea: 'Medicine',
    5: "five",
    null: 678,
    undefined: undefined
}
Результатом функции getDigits в объекте выше будет массив вида: ['1','5']

4. Напишите функцию, объединяющие 2 произвольных объекта в один

*/

const rand = {
  1: "One",
  name: "Olesya",
  workArea: "Medicine",
  5: "five",
  null: 678,
  undefined: undefined,
};

function getD(o) {
  const digits = [];
  for (const key of Object.keys(o)) {
    if (key !== "" && isFinite(key)) digits.push(key);
  }
  return digits;
}
console.log(getD(rand));

// ---------------------------------------------------

const user = {
  name: "GRI",
  citizen: "RU",
  age: 50,
  status: "guest",
  empty: null,
  address: {
    country: "Russia",
    city: "Rostov",
  },
  fn: () => {},
  arr: [1, 2, 3, 4, 5],
  num: 25,
  map: new Map(),
};

(function simplify(o) {
  for (const prop in o) {
    if (
      (typeof o[prop] !== "object" && typeof o[prop] !== "function") ||
      o[prop] === null
    ) {
      continue;
    } else delete o[prop];
  }
})(user);
