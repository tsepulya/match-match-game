import { GAME_SETTINGS, numberOfCardsForBeginner, numberOfCardsForEasy, 
  numberOfCardsForHard, numberOfCardsForMedium } from "../constants/constants";
import { createCard } from "./createCard";

export function createArrayOfСards(): Array<string> {
  let newArrayCards: Array<string> = [];
  if (GAME_SETTINGS.numberOfCards === numberOfCardsForBeginner) {
    newArrayCards = GAME_SETTINGS.backCards.filter((elem, index) => index < 6);
    newArrayCards = newArrayCards.concat(newArrayCards);
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForEasy) {
    newArrayCards = GAME_SETTINGS.backCards.filter((elem, index) => index < 8);
    newArrayCards = newArrayCards.concat(newArrayCards);
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForMedium) {
    newArrayCards = GAME_SETTINGS.backCards.filter((elem, index) => index < 10);
    newArrayCards = newArrayCards.concat(newArrayCards);
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForHard) {
    newArrayCards = GAME_SETTINGS.backCards.filter((elem, index) => index < 12);
    newArrayCards = newArrayCards.concat(newArrayCards);
  }
  return newArrayCards.sort(() => Math.random() - 0.5);
}
  
export function createCards(): void {
  for (let i = 0; i < GAME_SETTINGS.numberOfCards; i += 1) {
    const field = <HTMLElement>document.querySelector('.game-container');
    field.append(createCard());
  }
}