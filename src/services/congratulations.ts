import { GAME_SETTINGS, TIMEOUTS, user } from "../constants/constants";
import { deleteMain } from "./deleteMain";
import { stopGame } from "./stopGame";

function findTimeforScore(): number {
  let timeForScore = 0;
  if (typeof TIMEOUTS.timer !== 'string') {
    const timeInArray = TIMEOUTS.timer.innerHTML.split(':');
    timeForScore = +timeInArray[0] * 60 + +timeInArray[1];
  }
  return timeForScore;
}
  
export function findScore(): number {
  GAME_SETTINGS.score = ((GAME_SETTINGS.countTrue - GAME_SETTINGS.countFalse) * 100 - findTimeforScore() * 10)
    * (GAME_SETTINGS.numberOfCards / 4);
  if (GAME_SETTINGS.score < 0) {
    return 0;
  }
  user.score = GAME_SETTINGS.score;
  return GAME_SETTINGS.score;
}
  
export function deleteCongratulations(): void {
  const congratulation = <HTMLElement>document.querySelector('.congratulation');
  congratulation.remove();
}
  
function returnToScore() {
  deleteCongratulations();
  stopGame();
  deleteMain();
  //   createPageScore();
  const iconScore = <HTMLElement>document.querySelector('.icon_score');
  const textScore = <HTMLElement>document.querySelector('.nav_text_score');
  iconScore.classList.add('active-icon');
  textScore.classList.add('active-text');
}
  
export function createCongratulations(): void {
  if (typeof TIMEOUTS.timer !== 'string') {
    const template = `
    <div class="congratulation_block">
      <p class="congratulation_text">Congratulations! You successfully found all matches on ${
  TIMEOUTS.timer.innerHTML
} minutes. Your score: ${findScore()}</p>
      <button class="congratulation_btn active-cursor">ok</button>
    </div>
    `;
    const congratulation = document.createElement('div');
    congratulation.className = 'congratulation';
    congratulation.innerHTML = template;
    const wrapper = <HTMLElement>document.querySelector('.wrapper');
    wrapper.append(congratulation);
    const congrarulationBtn = <HTMLElement>(
        document.querySelector('.congratulation_btn')
      );
    congrarulationBtn.addEventListener('click', returnToScore);
    if (user.score > 0) {
      // IDB();
    }
  }
}