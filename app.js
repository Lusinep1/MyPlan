// SELECTORS
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

// VARIABLES

const newYears = '1 Jan, 2024';


// FUNCTIONS

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown()
setInterval(countdown, 1000)



