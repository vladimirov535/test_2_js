

let timeString = prompt("Время", "");

let message;
let time = parseInt(timeString);
if (isNaN(time) || time < 0 || time > 23  ) {
  message = "ошибка";
} else {
  if (time >= 10 && time <= 18) {
    message = "Открыто";
  } else {
    message = "Закрыто";
  }
}

alert(message);

