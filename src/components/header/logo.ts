import './logo.css';

export function createLogo(): void {
  const template = `
                  <div class="logo">
                      <div class="logoMatch logoMatchTop">match</div>
                      <div class="logoMatch logoMatchBottom">match</div>
                  </div>
      `;
  const myContainer = <HTMLElement>document.querySelector('.header-container');
  myContainer.innerHTML = template;
}