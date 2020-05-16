
function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor(timeRemaining / 60 / 60);
        if (hours >= 0 && hours < 10) {
            hours = '0' + hours;
        } else if (hours < 0) {
            hours = '00';
        }
        if (minutes >= 0 && minutes < 10) {
            minutes = '0' + minutes;
        }  else if (minutes < 0) {
            minutes = '00';
        }
        if (seconds >= 0 && seconds < 10) {
            seconds = '0' + seconds;
        }  else if (seconds < 0) {
            seconds = '00';
        }
        return { timeRemaining, hours, minutes, seconds };
    }
    function updateClock() {
        const timer = getTimeRemaining();
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
    }
    updateClock();
}

export default countTimer;
