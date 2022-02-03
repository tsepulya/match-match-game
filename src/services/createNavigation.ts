import { createPageAbout } from "../containers/about/about";
import { createPageScore } from "../containers/score/score";
import { createPageSettings } from "../containers/settings/settings";
import { deleteMain } from "./deleteMain";
import { stopGame } from "./stopGame";

export function createNavigation(e: Event): void {
  const btn = <HTMLElement>document.querySelector('.game-condition_btn');
  document
    .querySelectorAll('.active-icon')
    .forEach((elem) => elem.classList.remove('active-icon'));
  document
    .querySelectorAll('.active-text')
    .forEach((elem) => elem.classList.remove('active-text'));
  const ev = <HTMLElement>e.target;
  if (ev.classList.contains('nav__about')) {
    if (btn.innerHTML !== 'register new player') { stopGame(); }
    const iconAbout = <HTMLElement>document.querySelector('.icon__about');
    iconAbout.classList.add('active-icon');
    const textAbout = <HTMLElement>document.querySelector('.nav_text_about');
    textAbout.classList.add('active-text');
    deleteMain();
    createPageAbout();
  } else if (ev.classList.contains('nav__score')) {
    if (btn.innerHTML !== 'register new player') { stopGame(); }
    const iconScore = <HTMLElement>document.querySelector('.icon_score');
    iconScore.classList.add('active-icon');
    const textScore = <HTMLElement>document.querySelector('.nav_text_score');
    textScore.classList.add('active-text');
    deleteMain();
    createPageScore();
  } else if (ev.classList.contains('nav__settings')) {
    if (btn.innerHTML !== 'register new player') { stopGame(); }
    const iconSet = <HTMLElement>document.querySelector('.icon_settings');
    iconSet.classList.add('active-icon');
    const textSet = <HTMLElement>document.querySelector('.nav_text_settings');
    textSet.classList.add('active-text');
    deleteMain();
    createPageSettings(); 
  }
} 