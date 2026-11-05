// Brand mark — Libre Caslon "L" with brass ledger lines on an oxblood tile.
const L_PATH = 'M299 57H548Q577 96 596 135.5Q615 175 639 234H691L649 0H42V37L127 56V714L42 733V770H393V733L299 713Z';
const L_TRANSFORM = 'translate(7.60 36) scale(0.03247 -0.03247)';
const LINES = [[15.4, 12], [20.4, 12], [25.4, 9]];

/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'lm', cls = 'brand__mark') {
  const rules = LINES.map(([y, w]) => `<rect x="27.6" y="${y}" width="${w}" height="1.7" rx=".85" fill="#C9A15A"/>`).join('');
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6B2530"/><stop offset="1" stop-color="#3E1219"/></linearGradient></defs><rect width="48" height="48" rx="11" fill="url(#${id})"/><path transform="${L_TRANSFORM}" fill="#F4EEE4" d="${L_PATH}"/>${rules}</svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
