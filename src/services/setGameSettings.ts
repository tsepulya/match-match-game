import { animalOptionOfSetCards, animals, flowers, flowersOptionOfSetCards,
  GAME_SETTINGS, numberOfCardsForBeginner, numberOfCardsForEasy, 
  numberOfCardsForHard, numberOfCardsForMedium } from "../constants/constants";

export function setNumberOfCards(): number {
  const selectDifValue = (<HTMLInputElement>(
      document.querySelector('.select_diff')
    )).value;
  if (selectDifValue === 'Beginner') {
    GAME_SETTINGS.numberOfCards = numberOfCardsForBeginner;
  }
  if (selectDifValue === 'Easy') {
    GAME_SETTINGS.numberOfCards = numberOfCardsForEasy;
  }
  if (selectDifValue === 'Medium') {
    GAME_SETTINGS.numberOfCards = numberOfCardsForMedium;
  }
  if (selectDifValue === 'Hard') {
    GAME_SETTINGS.numberOfCards = numberOfCardsForHard;
  }
  return GAME_SETTINGS.numberOfCards;
}
  
export function setPictureOfCards(): Array<string> {
  const selectPicValue = (<HTMLInputElement>(
      document.querySelector('.select_pic')
    )).value;
  if (selectPicValue === animalOptionOfSetCards) {
    GAME_SETTINGS.backCards = animals;
  }
  if (selectPicValue === flowersOptionOfSetCards) {
    GAME_SETTINGS.backCards = flowers;
  }
  return GAME_SETTINGS.backCards;
}