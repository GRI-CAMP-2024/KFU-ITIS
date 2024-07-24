/*

Контекст в JS обозначается как 'this', что дословно можно перевести как "этот".

Рассматривать Контекст будем на примере объектов, точнее их методов.

Важно, ключевое слово 'this' в JS - динамичное и вычисляется в момент вызова метода объекта!

Функции, объявленные через function создают контекст, в отличии от стрелочных функций

*/

//  И снова Объекты **************************************************

let album = {
  name: "Forever",
  artist: "John Doe",
  release: 2014,
  sales: 1e6,
  showAlbumInfo() {
    console.log(
      `Album "${this.name}" is masterpiece released in may ${this.release}...`
    );
  },
};

const copy = album;
album = null;

// Контекст, то что стоит слева от точки!
// copy.showAlbumInfo()

// Чтобы переиспользовать метод в контексте другого объекта с другими данными, нам необходимо сделать метод showAlbumInfo универсальным

// const album = {
//   name: "Forever",
//   artist: "John Doe",
//   release: 2014,
//   sales: 1e6,
//   showAlbumInfo() {
//     console.log(
//       `Album "${this.name}" is masterpiece released in may ${this.release}...`
//     );
//     return function () {
//       console.log(this);
//     };
//   },
// };

// Методы массивов тоже работают на контексте ********************************************

let double = [1, 2, 3].map((item) => item * 2);

// Реализуем упрощенно метод map

Array.prototype.myMap = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }

  return res;
};

console.log([-5, 2, 3].myMap((item, i) => (i ? item ** 3 : item)));

// Примеры потери контекста ********************************************

let f = copy.showAlbumInfo;
console.log(f());
// Album "" is masterpiece released in may undefined...

// Переиспользование методов ********************************************

const newAlbum = {
  name: "She's gone again",
  artist: "Tearful Marcus",
  release: 2023,
  sales: 10000,
};

// Привязываем контекст разными способами
copy.showAlbumInfo.call(newAlbum, "USA");
copy.showAlbumInfo.apply(newAlbum, ["USA"]);

// Контекст в событиях ********************************************

document.querySelector("p").onclick = function () {
  console.log(this.nodeType, this.textContent, this.tagName)
};


