import { TIMEOUTS } from "../constants/constants";

let createTimer: ReturnType<typeof setTimeout>;
let showTime: ReturnType<typeof setTimeout>;
let sec: number;

export function createGameTimer(): void {
  let secString = '00';
  let minString = '00';
  TIMEOUTS.timer = <HTMLElement>document.querySelector('.main__timer');
  TIMEOUTS.timer.innerHTML = `${minString}:${secString}`;
  function putMinAndSec() {
    const secNumber = +secString + 1;
    if (secNumber < 10) {
      secString = `0${secNumber}`;
    }
    if (secNumber === 60) {
      secString = '00';
      const minNumber = +minString + 1;
      if (minNumber < 10) {
        minString = `0${minNumber}`;
      }
      if (minNumber > 9 && minNumber < 60) {
        minString = minNumber.toString();
      }
    }
    if (secNumber > 9 && secNumber < 60) {
      secString = secNumber.toString();
    }
    TIMEOUTS.timer = <HTMLElement>document.querySelector('.main__timer');
    TIMEOUTS.timer.innerHTML = `${minString}:${secString}`;
  }
  createTimer = setInterval(putMinAndSec, 1000);
}
  
export function stopTimer(): void {
  clearInterval(createTimer);
}

function reverseTime(): void {
  if (sec === 1) {
    clearInterval(showTime);
    createGameTimer();
  }
  sec -= 1;
  TIMEOUTS.timer = <HTMLElement>document.querySelector('.main__timer');
  if (sec < 10) {
    TIMEOUTS.timer.innerHTML = `00:0${sec}`;
  } else {
    TIMEOUTS.timer.innerHTML = `00:${sec}`;
  }
}
    
export function createTimerReverse(): void {
  sec = 30;
  showTime = setInterval(reverseTime, 1000);
}