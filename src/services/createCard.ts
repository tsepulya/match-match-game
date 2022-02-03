export function createCardTrue(card1: HTMLElement): void {
  const cardTrue = document.createElement('div');
  cardTrue.className = 'card-true';
  card1.append(cardTrue);
}
  
export function createCardFalse(card1: HTMLElement): void {
  const cardFalse = document.createElement('div');
  cardFalse.className = 'card-false';
  card1.append(cardFalse);
}
  
export function removeCardFalse(): void {
  if (document.querySelectorAll('.card-false').length) {
    document.querySelectorAll('.card-false').forEach((elem) => elem.remove());
  }
}
  
export function createCard(): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="front"></div>
    <div class="back"></div>
    `;
  return card;
}