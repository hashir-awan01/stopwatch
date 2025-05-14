// script.js
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (isRunning) return; // Prevent multiple start clicks

  isRunning = true;
  timer = setInterval(updateTime, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('time').textContent = '00:00:00';
}

function updateTime() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  const timeDisplay = document.getElementById('time');
  timeDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(unit) {
  return unit < 10 ? '0' + unit : unit;
}
