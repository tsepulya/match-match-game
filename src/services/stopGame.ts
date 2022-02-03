import { arrayIndex, btnNameStart, TIMEOUTS } from "../constants/constants";

export function stopGame(): void {
  arrayIndex.splice(0,arrayIndex.length);
  if (typeof TIMEOUTS.halfMinuteClose !== 'string') {
    clearTimeout(TIMEOUTS.halfMinuteClose);
  }
  if (typeof TIMEOUTS.showTime !== 'string') {
    clearInterval(TIMEOUTS.showTime);
  }
  if (typeof TIMEOUTS.createTimer !== 'string') {
    clearInterval(TIMEOUTS.createTimer);
  }
  const gameBtn = <HTMLElement>document.querySelector('.game-condition_btn');
  gameBtn.innerHTML = btnNameStart;
}