import { WRAPPER } from "../../constants/constants";
import './about.css';

export function createPageAbout(): void {
  const template = `
    <h2 class="main__title">How to play?</h2>
    <div class="main-container">
        <div class="main__rules">
            <div class="rule rule-first">
                <div class="rule__number">1</div>
                <p class="rule__text">Register new player in game</p>
            </div>
            <div class="rule rule-second">
                <div class="rule__number">2</div>
                <p class="rule__text">Configure your game settings</p>
            </div>
            <div class="rule rule-third">
                <div class="rule__number">3</div>
                <p class="rule__text">Start you new game! Remember card positions and match it before times up.</p>
            </div>
        </div>
        <div class="main__example">
            <div class="example__registr">
                <h3 class="example__title">Register new Player</h3>
                <div class="example__forms">
                    <form class="forms-container">
                        <div class="example__form example__form_first-name">
                            <label for="first-name" class="example__label">First Name</label>
                            <input type="text" placeholder="John" id="first-name" class="example__input_text" disabled>
                            <input type="checkbox" class="example__checkbox" checked disabled>
                        </div>
                        <div class="example__form example__form_last-name">
                            <label for="last-name" class="example__label">Last Name</label>
                            <input type="text" placeholder="Doe" id="last-name" class="example__input_text" disabled>
                            <input type="checkbox" class="example__checkbox" checked disabled>
                        </div>
                        <div class="example__form example__form_e-name">
                            <label for="e-name" class="example__label">E-mail</label>
                            <input type="e-mail" placeholder="John.Doe@gmail.com"
                              id="e-male" class="example__input_text" disabled>
                            <input type="checkbox" class="example__checkbox" checked disabled>
                        </div>
                    </form>
                    <div class="registr__ava">
                        <img src="./assets/for-ava.png" alt="" class="registr__ava-img">
                    </div>
                </div>
                <div class="refistr__btn-container">
                    <button class="registr__btn_add">add user</button>
                    <button class="registr__btn_cancel">cancel</button>
                </div>
            </div>
            <div class="main__settings_example">
                <div class="main__settings_example-container">
                    <div class="nav_icon">
                        <img src="./assets/set.png" alt="" class="img_icon">
                    </div>
                    <div class="example_settings_text">Game Settings</div>
                </div>
            </div>
            <div class="main__cards_example">
              ${Array(6).fill('<div class="example__card"></div>').join('')}
              <div class="example__card example__card-opened">
                <div class="card-true"></div>
              </div>
              ${Array(3).fill('<div class="example__card"></div>').join('')}
              <div class="example__card example__card-opened">
                <div class="card-true"></div>
              </div>
              <div class="example__card"></div>
            </div>
          </div>
    </div>
  `;
  const mainPageAbout = document.createElement('main');
  mainPageAbout.className = 'main';
  mainPageAbout.innerHTML = template;
  WRAPPER.append(mainPageAbout);
}