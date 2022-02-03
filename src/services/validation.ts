import { emailPattern, namePattern, user } from "../constants/constants";
import { closeRegisterTooltip } from "./closeRegisterTooltip";
import { createAvatar } from "./savePic";

export function isCorrectName(): void {
  const inputValue = (<HTMLInputElement>(
      document.querySelector('.input__first-name')
    )).value;
  const checkboxFirstName = <HTMLInputElement>(
      document.querySelector('.checkbox__first-name')
    );
  const isValidName = namePattern.test(inputValue);
  if (isValidName) {
    checkboxFirstName.setAttribute('checked', 'checked');
    user.firstName = inputValue;
  } else {
    checkboxFirstName.removeAttribute('checked');
  }
}
  
export function isCorrectLastName(): void {
  const inputValue = (<HTMLInputElement>(
      document.querySelector('.input__last-name')
    )).value;
  const checkboxLastName = <HTMLInputElement>(
      document.querySelector('.checkbox__last-name')
    );
  const isValidName = namePattern.test(inputValue);
  if (isValidName) {
    checkboxLastName.setAttribute('checked', 'checked');
    user.lastName = inputValue;
  } else {
    checkboxLastName.removeAttribute('checked');
  }
}
  
export function isCorrectEmail(): void {
  const inputValue = (<HTMLInputElement>(
      document.querySelector('.input__email'))).value;
  const checkboxEmail = <HTMLElement>document.querySelector('.checkbox__email');
  const isValidEMail = emailPattern.test(inputValue);
  if (isValidEMail) {
    checkboxEmail.setAttribute('checked', 'checked');
    user.email = inputValue;
  } else {
    checkboxEmail.removeAttribute('checked');
  }
}
  
export function areAllCheckboxTrue(): void {
  const checkbox: NodeListOf<HTMLElement> = document.querySelectorAll('.tooltip__checkbox');
  const checkboxes = Array.from(checkbox);
  if (checkboxes.filter((elem) => elem.hasAttribute('checked')).length === 3) {
    const gameConditionBtn = <HTMLInputElement>(
        document.querySelector('.game-condition_btn')
      );
    gameConditionBtn.innerHTML = 'start game';
    closeRegisterTooltip();
    gameConditionBtn.style.width = '129px';
    const gameCondition = <HTMLInputElement>(
        document.querySelector('.game-condition')
      );
    gameCondition.append(createAvatar());
  }
}