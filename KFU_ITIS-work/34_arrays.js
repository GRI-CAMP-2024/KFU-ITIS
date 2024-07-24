/*

0. Создайте массив четных и нечетных числовых значений. Напишите код, заполняющий пустую строку только нечетными значениями массива.

1. Создайте стрелочную ф-цию, принимающую 2 аргумента: исходный массив и элемент. Функция должна добавить элемент в конец массива, независимо от его длины:
const addToEnd = (arr, el) => {Ваш код.....}

2. Что выведет консоль? Объясните что здесь происходит

const genres = ["rock", "pop", "classic"] 

const genres2 = genres

genres.push("Jazz", "RnB", "Funk")

console.log(genres2)

3*. Используя методы push, pop, unshift, shift

- реализуйте функцию mutation, изменяющую числовой массив т.о., чтобы на месте элемента оказался квадрат его значения. Важно, элементы должны сохранить исходный порядок! Для получения квадрата рекомендуем завести отдельную callback-функцию.
Пример:
const digits = [1,3,5,9]
После вызова функции:
console.log(digits) - [1,9,25,81]

4. Создайте функцию, возвращающую сумму элементов числового массива

5. Создайте функцию, возвращающую минимальное / максимальное значение элемента в массиве
const arr = [1, 100, -900, -1200, 56.7, 555, 2e5].
Не используйте метод Math.max для решения!

6. Создайте функцию, создающую новый массив, явялющийся обратной копией исходного
Исходный:
[1,2,3,4,5]
Новый массив:
[5,4,3,2,1]
Не используйте метод reverse() для решения!

7. Напишите функцию, создающую массив уникальных значений из исходного массива
Исходный:
const legacy = [7, 7, 5, 4, 2, 100, 100, 57, 69]
Новый массив:
const unique = [7, 5, 4, 2, 100, 57, 69]


*/

// ------------------

const digits = [1, 3, 5, 9];

const Sqrt = (el) => el ** 2;

function mutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    let popped = arr.pop();
    arr.unshift(Sqrt(popped));
  }
}
mutation(digits);

console.log(digits);

// ------------------

const arr = [1, 100, -900, -1200, 56.7, 555, 2e5];

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(getMax(arr));

// ------------------

const asc = [1, 2, 3, 4, 5];

function getReversed(l) {
  const arr = [];
  for (let i = 0; i < l.length; i++) {
    arr[i] = l[l.length - 1 - i];
  }
  return arr;
}

getReversed(asc);

console.log(getReversed(asc), asc);

// ------------------

const legacy = [7, 7, 5, 4, 2, 100, 100, 57, 69];

function u(l) {
  let arr = [];

  for (const el of l) {
    if (arr.includes(el)) continue;
    arr.push(el);

    // !arr.includes(el) && arr.push(el);
  }

  return arr;
}

console.log(u(legacy));
