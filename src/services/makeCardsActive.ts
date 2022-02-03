import { animals, arrayIndex, GAME_SETTINGS } from "../constants/constants";
import { createCongratulations, findScore } from "./congratulations";
import { createArrayOfСards } from "./createArrayOfCards";
import { createCardFalse, createCardTrue, removeCardFalse } from "./createCard";
import { stopTimer } from "./timer";

let cardsFront: NodeListOf<HTMLElement>;
let cardsBack: NodeListOf<HTMLElement>;

export function addBack(): void {
  const cardsBacks: NodeListOf<HTMLElement> = document.querySelectorAll('.back');
  const arrayOfCards = createArrayOfСards();
  const allCardsBack = Array.from(cardsBacks);
  if (animals.includes(arrayOfCards[0])) {
    for (let i = 0; i < allCardsBack.length; i += 1) {
      allCardsBack[
        i
      ].style.background = `url(./assets/animal-${arrayOfCards[i]}.png) no-repeat center / cover`;
    }
  } else {
    for (let i = 0; i < allCardsBack.length; i += 1) {
      allCardsBack[
        i
      ].style.background = `url(./assets/flower-${arrayOfCards[i]}.png) no-repeat center / cover`;
    }
  }
}

function IsAllCardsOpen() {
  return document.querySelectorAll('.card-true').length === GAME_SETTINGS.numberOfCards;
}

export function makeFrontActive(e: Event): void {
  const eTarget = <HTMLElement>e.target;
  cardsFront = document.querySelectorAll('.front');
  cardsBack = document.querySelectorAll('.back');
  const cardsFrontArray = Array.from(cardsFront);
  const cardsBackArray = Array.from(cardsBack);
  if (cardsFrontArray.includes(eTarget)) {
    removeCardFalse();
    const i: number = cardsFrontArray.indexOf(eTarget);
    if (
      cardsFrontArray.filter((elem) => elem.classList.contains('front-close'))
        .length === 0
    ) {
      cardsFrontArray[i].classList.add('front-close');
      cardsBackArray[i].classList.add('back-open');
      arrayIndex.push(i);
    } else if (
      cardsFrontArray.filter((elem) => elem.classList.contains('front-close'))
        .length === 1
    ) {
      arrayIndex.push(i);
      cardsFrontArray[i].classList.add('front-close');
      cardsBackArray[i].classList.add('back-open');
      const cardShort = cardsBackArray
        .filter((elem) => elem.classList.contains('back-open'))
        .map((elem) => elem.outerHTML);
      if (cardShort[0] === cardShort[1]) {
        GAME_SETTINGS.countTrue += 1;
        createCardTrue(cardsBackArray[arrayIndex[0]]);
        createCardTrue(cardsBackArray[arrayIndex[1]]);
        cardsFrontArray[arrayIndex[0]].classList.add('front-stable');
        cardsBackArray[arrayIndex[0]].classList.add('back-stable');
        cardsFrontArray[arrayIndex[1]].classList.add('front-stable');
        cardsBackArray[arrayIndex[1]].classList.add('back-stable');
        if (IsAllCardsOpen() === true) {
          stopTimer();
          findScore();
          createCongratulations();
        }
      } else {
        GAME_SETTINGS.countFalse += 1;
        createCardFalse(cardsBackArray[arrayIndex[0]]);
        createCardFalse(cardsBackArray[arrayIndex[1]]);
      }
    } else {
      arrayIndex.splice(0,arrayIndex.length);
      for (let j = 0; j < cardsFrontArray.length; j += 1) {
        if (cardsFrontArray[j].classList.contains('front-close')) {
          cardsFrontArray[j].classList.remove('front-close');
          cardsBackArray[j].classList.remove('back-open');
        }
      }
      makeFrontActive(e);
    }
  }
}
