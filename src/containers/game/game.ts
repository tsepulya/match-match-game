import { WRAPPER } from "../../constants/constants";
import { startGame } from "../../services/startGame";
import './game.css';

export function createPageGame(): void {
  const template = `
    <div class="main__timer">00:30</div>
    <div class="game-container">
    `;
  const mainPageGame = document.createElement('main');
  mainPageGame.className = 'main';
  mainPageGame.innerHTML = template;
  WRAPPER.append(mainPageGame);

  const iconScore = <HTMLElement>document.querySelector('.icon_score');
  const textScore = <HTMLElement>document.querySelector('.nav_text_score');
  const iconAbout = <HTMLElement>document.querySelector('.icon__about');
  const textAbout = <HTMLElement>document.querySelector('.nav_text_about');
  const iconSettings = <HTMLElement>document.querySelector('.icon_settings');
  const textSettings = <HTMLElement>document.querySelector('.nav_text_settings');
  if (iconScore.classList.contains('active-icon')) {
    iconScore.classList.remove('active-icon');
    textScore.classList.remove('active-text');
  }
  if (iconAbout.classList.contains('active-icon')) {
    iconAbout.classList.remove('active-icon');
    textAbout.classList.remove('active-text');
  }
  if (iconSettings.classList.contains('active-icon')) {
    iconSettings.classList.remove('active-icon');
    textSettings.classList.remove('active-text');
  }
  startGame();
}