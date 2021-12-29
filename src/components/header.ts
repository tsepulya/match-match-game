export function createHeaderContainer(): void {
  const template = `
    <header class="header">
        <div class="header-container">
        Hello world!
        </div>
    </header>
    `;
  const myContainer = <HTMLElement>document.querySelector('.wrapper');
  myContainer.innerHTML = template;
}