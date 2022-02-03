export function uid() : string {
  const timmy = Date.now().toString(36).toUpperCase();
  const randy = Math.random() * Number.MAX_SAFE_INTEGER;
  const randyNew = randy.toString(36).slice(0, 12).padStart(12, '0').toUpperCase();
  return ''.concat(timmy, '-', randyNew);
}