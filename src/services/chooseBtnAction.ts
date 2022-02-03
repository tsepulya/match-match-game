import { createRegisterTooltip } from "../components/registerTooltip/registerTooltip";
import { btnNameRegister, btnNameStart, btnNameStop } from "../constants/constants";
import { createPageAbout } from "../containers/about/about";
import { createPageGame } from "../containers/game/game";
import { deleteMain } from "./deleteMain";
import { stopGame } from "./stopGame";

export function chooseBtnAction(): void {
  const btn = <HTMLElement>document.querySelector('.game-condition_btn');
  if (btn.innerHTML === btnNameRegister) {
    createRegisterTooltip();
  } else if (btn.innerHTML === btnNameStart) {
    stopGame();
    deleteMain();
    createPageGame();
    btn.innerHTML = btnNameStop;
  } else if (btn.innerHTML === btnNameStop) {
    stopGame();
    deleteMain();
    createPageAbout();
    btn.innerHTML = btnNameStart;
  }
}