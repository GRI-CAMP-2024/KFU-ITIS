// Получение Формы:
const $FORM1 = document.forms[0];
// const $FORM2 = document.getElementById("form")
// const $FORM3 = document.querySelector(".form")

// console.log($FORM1);

// получение коллекции элементов формы:
const $FORM_ELEMS = $FORM1.elements;
// преобразуем коллецию в массив элементов формы:
const $FORM_ELEMS_ARR = Array.from($FORM_ELEMS).slice(0, -1);

// Заполним объект данных формы:

const data = {};

for (const el of $FORM_ELEMS_ARR) {
  if (el.name === "radio" || el.name === "checkbox") {
    data[el.name] = el.checked;
    continue;
  }
  data[el.name] = el.value;
}

// console.log(data);

// Обработка события отправки формы, отмена действия по-умолчанию

$FORM1.addEventListener("submit", submitHandler);

// function submitHandler(e) {
//   e.preventDefault();

//   const checkedRadioInput = Array.from(this.radio).find(
//     (radio) => radio.checked
//   );

//   const data = {};

//   $FORM_ELEMS_ARR.forEach((el) => {
//     if (el.type === "radio") {
//       data[el.name] = checkedRadioInput ? checkedRadioInput.value : "";
//       return;
//     }
//     if (el.type === "checkbox") {
//       data[el.name] = el.checked;
//       return;
//     }
//     data[el.name] = el.value;
//   });

//   if (Object.values(data).some((v) => !v)) {
//     alert("Заполните форму!");
//     return;
//   }

//   const json = JSON.stringify(data);
//   console.log(json);

//   this.reset()
// }

function submitHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {};

  formData.forEach((val, name) => {
    data[name] = val;
  });

  // for (const key of formData.keys()) {
  //   console.log(key );
  // }

  // В Форм Дату не включаются поля с пустыми значениями, поэтому не заполняем
  if (Object.keys(data).length < 6 || Object.values(data).some((v) => !v)) {
    alert("Заполните форму!");
    return;
  }

  console.log(data);
}
