// import { setNumberOfCards, setPictureOfCards } from './script-game';

import { WRAPPER } from "../../constants/constants";
import './settings.css';

export function createPageSettings(): void {
  const template = `
    <div class="main__settings">
    <div class="settings__pictures">
        <h3 class="settings__name">Game cards</h3>
        <select name="pictures" class="select_name select_pic">
            <option class="option_title" selected disabled>select game cards type</option>
            <option class="option_name">Animals</option>
            <option class="option_name">Flowers</option>
        </select>
    <hr class="settings_hr">
    </div>
    <div class="settings__difficulty">
        <h3 class="settings__name">Difficulty</h3>
        <select name="difficulty" class="select_name select_diff">
            <option class="option_title" selected disabled>select game type</option>
            <option class="option_name">Beginner</option>
            <option class="option_name">Easy</option>
            <option class="option_name">Medium</option>
            <option class="option_name">Hard</option>
        </select>
    <hr class="settings_hr">
    </div>
</div>
    `;
  const mainPageSettings = document.createElement('main');
  mainPageSettings.className = 'main';
  mainPageSettings.innerHTML = template;
  WRAPPER.append(mainPageSettings);
//   const selectPic = <HTMLElement>document.querySelector('.select_pic');
//   selectPic.addEventListener('change', setPictureOfCards);
//   const selectDif = <HTMLElement>document.querySelector('.select_diff');
//   selectDif.addEventListener('change', setNumberOfCards);
}