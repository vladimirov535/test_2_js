// let login = prompt('login');

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
//   alert(login);



// let hour =  prompt('Время');

// let m1 =(hour < 10 || hour > 18)? 'Закрыто':
//  (hour > 10 || hour < 18)? 'Открыто':
//  (hour == '')? 'Ошибка':
//    '';
//   alert(m1);
//   console.log(hour);

// let hour =  prompt('Цифра');
// if (hour == 5) {
//   let message =('Это пятерка');
// } else {
//   let message =('Это не пятерка');
// }
// alert(message);

let time = prompt('Время', '');

let message;

if (time == 'Number.isInteger') {
  message = 'Ошибка';
} else  {
  time = Number(time)

  if (time > 10 || time < 18) {
    message = 'Открыто';
  } else {
    message = 'Закрыто';
  }
}

alert(message);