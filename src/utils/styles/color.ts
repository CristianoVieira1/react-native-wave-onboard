/**
 * Clareia uma cor em formato hexadecimal.
 * @param color - Cor em formato hexadecimal (e.g. "#RRGGBB").
 * @param amount - Valor de clareamento, um número entre 0 e 1.
 * @returns Cor clareada em formato hexadecimal.
 */
export function lightenColor(color: string, amount: number): string {
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    throw new Error('Formato de cor inválido');
  }

  let usePound = false;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + Math.round(255 * amount);
  let g = ((num >> 8) & 0x00ff) + Math.round(255 * amount);
  let b = (num & 0x0000ff) + Math.round(255 * amount);

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return (
    (usePound ? '#' : '') +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}
