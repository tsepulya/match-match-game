import { makeFrontActive } from "./makeCardsActive";
import { createTimerReverse } from "./timer";

function addCardsEventListener() {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
  cards.forEach((elem) => elem.addEventListener('click', makeFrontActive));
}

export function openCardsHalfMinute(): void {
  createTimerReverse();
  addCardsEventListener();
  document
    .querySelectorAll('.front')
    .forEach((elem) => elem.classList.add('front-close'));
  document
    .querySelectorAll('.back')
    .forEach((elem) => elem.classList.add('back-open'));
}
  
export function closeCardsHalfMinute(): void {
  document
    .querySelectorAll('.front')
    .forEach((elem) => elem.classList.remove('front-close'));
  document
    .querySelectorAll('.back')
    .forEach((elem) => elem.classList.remove('back-open'));
}