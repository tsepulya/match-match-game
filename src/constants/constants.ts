export const WRAPPER = <HTMLElement>document.querySelector('.wrapper');
export const animals = [
  'penguin',
  'tiger',
  'mouse',
  'fox',
  'lazy',
  'squirell',
  'giraffe',
  'panda',
  'rabbit',
  'unknown',
  'pantera',
  'enot',
];
export const flowers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
export const numberOfCardsForBeginner = 12;
export const numberOfCardsForEasy = 16;
export const numberOfCardsForMedium = 20;
export const numberOfCardsForHard = 24;
export const animalOptionOfSetCards = 'Animals';
export const flowersOptionOfSetCards = 'Flowers';
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  avatar: string;
};
export const user: User = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  score: 0,
  avatar: './assets/unknown.png',
};
export const btnNameStart = 'start game';
export const btnNameStop = 'stop game';
export const btnNameRegister = 'register new player';
export const halfMinute = 30000;
export const namePattern = new RegExp('^[а-яА-ЯёЁa-zA-Z ]{1,30}$');
export const emailPattern = new RegExp('[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-])+[.]+[A-Za-z]{2,6}');
export const arrayIndex: Array<number> = [];

export type GameSettings = {
  score: number,
  countTrue: number,
  countFalse: number,
  numberOfCards: number,
  backCards: Array<string>,
};

export const GAME_SETTINGS = {
  score: 0,
  countTrue: 0,
  countFalse: 0,
  numberOfCards: numberOfCardsForBeginner,
  backCards: animals,
}

export type Timeouts = {
  halfMinuteClose: string | NodeJS.Timeout,
  createTimer: string | NodeJS.Timeout,
  showTime: string | NodeJS.Timeout,
  timer: string | HTMLElement
};


export const TIMEOUTS: Timeouts = {
  halfMinuteClose: '',
  createTimer: '',
  showTime: '',
  timer: ''
}
