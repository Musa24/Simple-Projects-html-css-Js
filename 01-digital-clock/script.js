let clock = document.querySelector('.clock');
let fullDate = document.querySelector('.date');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
window.document.onload = displayTime();
function displayTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let sess = 'AM';

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    sess = 'PM';
  }

  let time12 = `${hour}:${minutes}:${seconds} ${sess}`;
  clock.innerHTML = time12;

  //   date
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = date.getDate();
  fullDate.innerHTML = `${day}, ${month}, ${year}`;
}

setInterval(() => {
  displayTime();
}, 1000);
