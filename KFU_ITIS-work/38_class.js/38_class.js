/*

Классы в JS - это синтаксический сахар над функциями-конструкторами (функциями вызываемыми через оператор new). Работают классы на прототипном наследовании (просто запомните)

По сути класс - это функция, используемая для конструирования переиспользуемых сущностей!

Синтаксис:

class Parent {

  constructor(...args) {
    // создание экземпляра
  }

  method1() {

  }

  method2() {
    
  }

  ...

  methodN() {
    
  }
}


*/

// Ex.1...Простейший пример использования класса - это создание объекта элемента ******************************
/*

constructor(option) {
    this.tag = option.tag;
    this.bg = option.bg;
    this.fw = option.fw;
  }
*/

class Parent {
  constructor(option) {
    this.tag = option.tag;
    this.bg = option.bg;
    this.fw = option.fw;
  }

  method1() {
    console.log(`${this.tag} has background ${this.bg}`);
  }

  method2() {}
}

// const parent = new Parent({tag: "h1", bg: "#000", fw: 700})
// console.log( parent);

// Ex.2 Cоздание простейшего класса автомобиля  ******************************
/*
  constructor(option) {
      this.brand = option.brand;
      this.boost = option.boost;
      this.speed = 0;
      this.isStarted = false;
    }
  */

class Car {
  constructor(option) {
    this.brand = option.brand;
    this.boost = option.boost;
    this.speed = 0;
    this.isStarted = false;
  }

  toggleEngine() {
    this.isStarted = !this.isStarted;
    return this;
  }

  accelerate() {
    this.speed += this.boost;
    return this;
  }

  showSpeed() {
    console.log(this.speed);
    return this;
  }

  stop() {
    setTimeout(() => {
      this.speed = 0;
      this.toggleEngine();
      console.log(this);
    }, 2000);
  }
}

// const toyota = new Car ({brand: "Toyota", boost: 5})

// Заведем двигатель
// toyota.toggleEngine()

// Ускоряемся
// toyota.accelerate()
// toyota.accelerate()

// Покажем скорость
// toyota.showSpeed()

// Останавливаемся
// toyota.stop()

// Вызовы методов по цепочке *********************************************

// new Car ({brand: "Toyota", boost: 5})
//   .toggleEngine()
//   .accelerate()
//   .accelerate()
//   .showSpeed()
//   .stop()

// Наследуемся, используя оригинальный конструктор родителя.
// Старый конструктор родителя будет вызван автоматически

class HyperCar extends Car {}

// const lamba = new HyperCar({brand: "Lamba", boost: 30})
// console.log( lamba);

// Наследуемся, добавляя в родительский конструктор новые свойства!

class autoCar extends Car {
  #owner = "GRI_CAMP";
  constructor({ autoPilot, ...options }) {
    super(options);
    this.autoPilot = autoPilot;
  }

  stop() {
    console.log(`Наша ${this.brand} остановилась...`);
  }

  get owner() {
    return this.#owner;
  }

  set setOwner(value) {
    if (typeof value === "string") {
      this.#owner = value;
    }
  }
}

const tesla = new autoCar({ autoPilot: true, brand: "Tesla", boost: 30 });

tesla.toggleEngine().accelerate().accelerate().showSpeed().stop();

// GETTER:
console.log(tesla.owner);
// SETTER:
tesla.setOwner = "NEW OWNER";

// Работа с DOM. *********************************************
class newDomElem {
  constructor(selector, tag, children, styles = {}) {
    this.$container = document.querySelector(selector);
    this.$el = null;
    // Вызов метода в конструкторе:
    this.builder(styles, tag, children);
  }

  builder(styles, ...args) {
    // Важна очередность....
    this.createElement(...args);
    this.addStyles(styles);
    this.appendElement();
    this.addListenerToEl();
  }

  createElement(tag, children) {
    this.$el = document.createElement(tag);
    this.$el.textContent = children;
  }

  addStyles(styles) {
    if (this.isEmptyStyles(styles)) return;
    console.log("Inside addStyles");

    Object.keys(styles).forEach(
      (prop) => (this.$el.style[prop] = styles[prop])
    );
  }

  appendElement() {
    this.$container.append(this.$el);
    return this;
  }

  isEmptyStyles(styles) {
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  // СОБЫТИЯ -----------------------

  handler = (e) => alert(e.target.style.cssText);

  addListenerToEl() {
    this.$el.addEventListener("click", this.handler);
  }
}

new newDomElem(".elements", "button", "PUSH", {
  padding: "10px",
  borderRadius: "5px",
  fontFamily: "Roboto",
  background: "teal",
})
  .appendElement()
  .addListenerToEl();
