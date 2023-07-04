// let time = prompt('Время', '');

// let message;

// time = Number(time)
// if (isNaN(time) || time == " " ) {
//   message = 'Ошибка';
// } else {

//   if (time > 10 && time < 18) {
//     message = 'Открыто';
//   } else {
//     message = 'Закрыто';
//   }
// }

// alert(message);

let timeString = prompt("Время", "");

let message;
let time = parseInt(timeString);
if ((time < 0 || time > 23) || isNaN(time)) {
  message = "ошибка";
} else {
  if (time => 10 && time <= 18) {
    message = "Открыто";
  } else {
    message = "Закрыто";
  }
}

alert(message);

// let time = prompt('Время', '');

// let message;

// time = Number(time);
// if (typeof time != 'number'
// ) {
//   message = 'Ошибка';
// } else {

//   if (time > 10 && time < 18) {
//     message = 'Открыто';
//   } else {
//     message = 'Закрыто';
//   }
// }

// alert(message);

// let time = prompt('Время', '');

// let message;

// time = Number(time);

// if (Number.isNaN(Number(time))
// ) {
//   message = 'Ошибка';
// } else {

//   if (time > 10 && time < 18) {
//     message = 'Открыто';
//   } else {
//     message = 'Закрыто';
//   }
// }

// alert(message);

// let userName = prompt("Время?", '');
// let message;

//   if (userName >= 10 $$ userName <= 18) {
//     message= 'Открыто' ;
//   } else if (!(userName >= 10 $$ userName <= 18)) {
//     message= 'Закрыто' ;
//   } else {
//     message= 'Ошибка' ;
//   }
//   alert(message);
