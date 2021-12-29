import { WRAPPER } from '../../constants/constants';
import { createLogo } from './logo';
import { createNav } from './nav';
import './header.css';

export function createHeaderContainer(): void {
  const template = `
    <header class="header">
        <div class="header-container">
        </div>
    </header>
    `;
  WRAPPER.innerHTML = template;
}


function createBtn() {
  const btn = document.createElement('button');
  btn.className = 'game-condition_btn active-cursor';
  btn.innerHTML = 'register new player';
  // btn.addEventListener('click', chooseBtnAction);
  return btn;
}
  
function createGameCondition() {
  const gameCondition = document.createElement('div');
  gameCondition.className = 'game-condition';
  const myContainer = <HTMLElement>document.querySelector('.header-container');
  myContainer.append(gameCondition);
  gameCondition.append(createBtn());
}

export function createHeader(): void {
  createHeaderContainer();
  createLogo();
  createNav();
  createGameCondition();
}
  