import { createNavigation } from '../../services/createNavigation';
import './nav.css';

export function createNav(): void {
  const template = `
          <a href="#about" class="nav__item nav__about active-cursor">
              <div class="nav_icon nav__about icon__about active-icon">
                  <div class="nav__icon nav__about">?</div>
              </div>
              <div class="nav_text nav__about nav_text_about active-text">About Game</div>
          </a>
          <a href="#score" class="nav__item nav__score active-cursor">
              <div class="nav_icon nav__score icon_score">
                  <img src="./assets/star.png" alt="" class="img_icon nav__score"></div>
              <div class="nav_text nav__score nav_text_score">Best Score</div>
          </a>
          <a href="#settings" class="nav__item nav__settings active-cursor">
              <div class="nav_icon icon_settings nav__settings">
                  <img src="./assets/set.png" alt="" class="img_icon nav__settings">
              </div>
                  <div class="nav_text nav_text_settings nav__settings">Game Settings</div>
          </a>
    `;
  const navigation = document.createElement('nav');
  navigation.className = 'nav';
  navigation.innerHTML = template;
  const myContainer = <HTMLElement>document.querySelector('.header-container');
  myContainer.append(navigation);
  document
    .querySelectorAll('.nav__item')
    .forEach((elem) => elem.addEventListener('click', createNavigation)); 
}