export function deleteMain(): void {
  const myContainer = <HTMLElement>document.querySelector('.main');
  myContainer.remove();
}
