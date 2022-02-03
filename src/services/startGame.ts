import { GAME_SETTINGS, halfMinute, TIMEOUTS, user } from "../constants/constants";
import { closeCardsHalfMinute, openCardsHalfMinute } from "./beginning";
import { createCards } from "./createArrayOfCards";
import { addBack } from "./makeCardsActive";
import { setSizeOfField } from "./setSizeOfField";
import { uid } from "./userId";

// let halfMinuteClose: ReturnType<typeof setTimeout>;

function createCardsField() {
  createCards();
  setSizeOfField();
  addBack();
}

export function startGame(): void {
  GAME_SETTINGS.score = 0;
  GAME_SETTINGS.countTrue = 0;
  GAME_SETTINGS.countFalse = 0;
  user.id = uid();
  createCardsField();
  openCardsHalfMinute();
  TIMEOUTS.halfMinuteClose = setTimeout(closeCardsHalfMinute, halfMinute);
}
