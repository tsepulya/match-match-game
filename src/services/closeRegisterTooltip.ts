export function closeRegisterTooltip(): void {
  const tooltip = <HTMLElement>document.querySelector('.tooltip');
  tooltip.remove();
}
