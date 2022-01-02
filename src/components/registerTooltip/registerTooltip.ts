import { WRAPPER } from "../../constants/constants";
import { closeRegisterTooltip } from "../../services/closeRegisterTooltip";
import { deleteDataUser } from "../../services/deleteDataUser";
import { loadImg } from "../../services/savePic";
import { isCorrectEmail, isCorrectName, isCorrectLastName, areAllCheckboxTrue } from "../../services/validation";
import './registerTooltip.css';

export function createRegisterTooltip(): void {
  const template = `
    <div class="tooltip__register">
    <h3 class="tooltip__title">Register new Player</h3>
    <div class="tooltip__forms">
        <form class="tooltip__forms-container">
            <div class="tooltip__form tooltip__form_first-name">
                <label for="first-name" class="tooltip__label">First Name</label>
                <input type="text" placeholder="John" id="first-name" class="tooltip__input_text input__first-name">
                <input type="checkbox" class="tooltip__checkbox checkbox__first-name" disabled>
            </div>
            <div class="tooltip__form tooltip__form_last-name">
                <label for="last-name" class="tooltip__label">Last Name</label>
                <input type="text" placeholder="Doe" id="last-name" class="tooltip__input_text input__last-name">
                <input type="checkbox" class="tooltip__checkbox checkbox__last-name" disabled>
            </div>
            <div class="tooltip__form tooltip__form_e-name">
                <label for="e-name" class="tooltip__label">E-mail</label>
                <input type="e-mail" placeholder="John.Doe@gmail.com" 
                  id="e-male" class="tooltip__input_text input__email">
                <input type="checkbox" class="tooltip__checkbox checkbox__email" disabled>
            </div>
        </form>
        <form method="post" action="" enctype="multipart/data">
          <label for="ava" class="tooltip__label">
            <img src="./assets/for-ava.png"" width="100" class="tooltip__register_ava" /></label>
          <input type="file" id="ava" name="ava" />
        </form>
    </div>
    <div class="tooltip__btn-container">
        <button class="tooltip__btn_add active-cursor">add user</button>
        <button class="tooltip__btn_cancel active-cursor">cancel</button>
        <button class="tooltip__btn_close active-cursor">close</button>
    </div>
  </div>
  </div>
    `;
  const registerTooltip = document.createElement('div');
  registerTooltip.className = 'tooltip';
  registerTooltip.innerHTML = template;
  WRAPPER.append(registerTooltip);
  const btnClose = <HTMLElement>document.querySelector('.tooltip__btn_close');
  btnClose.addEventListener('click', closeRegisterTooltip);
  const inputEmail = <HTMLElement>document.querySelector('.input__email');
  inputEmail.addEventListener('input', isCorrectEmail);
  const inputFN = <HTMLElement>document.querySelector('.input__first-name');
  inputFN.addEventListener('input', isCorrectName);
  const inputLN = <HTMLElement>document.querySelector('.input__last-name');
  inputLN.addEventListener('input', isCorrectLastName);
  const btnAdd = <HTMLElement>document.querySelector('.tooltip__btn_add');
  btnAdd.addEventListener('click', areAllCheckboxTrue);
  const btnCancel = <HTMLElement>document.querySelector('.tooltip__btn_cancel');
  btnCancel.addEventListener('click', deleteDataUser);
  const file = <HTMLFormElement>document.getElementById('ava');
  file.addEventListener('change', loadImg);
}