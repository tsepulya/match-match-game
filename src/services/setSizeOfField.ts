import { GAME_SETTINGS, numberOfCardsForBeginner,
  numberOfCardsForEasy, numberOfCardsForHard, numberOfCardsForMedium } from "../constants/constants";

export function setSizeOfField(): void {
  const field = <HTMLElement>document.querySelector('.game-container');
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
  if (GAME_SETTINGS.numberOfCards === numberOfCardsForBeginner) {
    field.style.width = '650px';
    cards.forEach((elem) => {
      const card = elem;
      card.style.width = '150px';
      card.style.height = '150px';
    });
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForEasy) {
    field.style.width = '550px';
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForMedium) {
    field.style.width = '650px';
  } else if (GAME_SETTINGS.numberOfCards === numberOfCardsForHard) {
    field.style.width = '750px';
  }
}