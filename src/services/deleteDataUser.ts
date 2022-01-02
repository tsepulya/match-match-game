export function deleteDataUser(): void {
  const form = <HTMLFormElement>document.querySelector('.tooltip__forms-container');
  form.reset();
  const checkbox: NodeListOf<HTMLElement> = document.querySelectorAll('.tooltip__checkbox');
  const checkboxes = Array.from(checkbox);
  checkboxes.forEach((elem) => {
    if (elem.hasAttribute('checked')) {
      elem.removeAttribute('checked');
    }
  });
}