/** Ilustraciones SVG animadas (CSS en vibrante.css). Una por método y por tema. */
const K = "#2a1065", P = "#ff3d81", V = "#7c3aed", Y = "#ffc93c", A = "#06d6c7", O = "#ff8a1f";
const LP = "#ffd0e8", LV = "#ddd0ff", W = "#fff", SK = "#ffd9b8";

const sp = (x, y, f = Y, d = "") =>
  `<g transform="translate(${x} ${y})"><path class="pu ${d}" stroke-width="2" fill="${f}" d="M0-9 2.5-2.5 9 0 2.5 2.5 0 9-2.5 2.5-9 0-2.5-2.5Z"/></g>`;
const svg = (body) =>
  `<svg class="art" viewBox="0 0 120 120" aria-hidden="true"><g stroke="${K}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">${body}</g></svg>`;
const thick = (d, c, w = 8) =>
  `<path d="${d}" fill="none" stroke-width="${w + 6}"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
const tShape = (c, extra = "") =>
  `<g class="fl">${thick("M34 30c8 10 18 12 26 12s18-2 26-12", c)}${thick("M60 42v56", c)}<path d="M60 100v10" stroke-width="2.5" fill="none"/>${extra}</g>`;

const blister = [36, 60, 84]
  .flatMap((x, i) => [50, 72].map((y, j) => `<circle class="pu d${(i + j) % 4}" cx="${x}" cy="${y}" r="9" fill="${(i + j) % 3 === 0 ? W : P}"/>`))
  .join("");
const days = Array.from({ length: 12 }, (_, i) => {
  const x = 36 + (i % 4) * 16, y = 68 + Math.floor(i / 4) * 12;
  return `<circle class="${i === 5 || i === 6 ? "bl d" + (i - 5) : ""}" cx="${x}" cy="${y}" r="4" fill="${i === 5 || i === 6 ? Y : LV}" stroke-width="2"/>`;
}).join("");

export const ART = {
  "preservativo-masculino": svg(
    `<g class="fl"><path d="M47 100V46a13 13 0 0 1 26 0v54Z" fill="${LP}"/><path d="M54 44v44" stroke="${W}" stroke-width="4" fill="none"/><rect x="41" y="96" width="38" height="11" rx="5.5" fill="${P}"/><circle cx="60" cy="28" r="4" fill="${P}"/></g>${sp(92, 30)}${sp(26, 48, A, "d2")}${sp(90, 82, P, "d3")}`),
  "preservativo-femenino": svg(
    `<g class="sw"><ellipse cx="60" cy="30" rx="22" ry="9" fill="${LV}"/><path d="M38 30c0 40 6 58 22 58s22-18 22-58" fill="${LV}"/><ellipse cx="60" cy="92" rx="14" ry="7" fill="${V}"/><ellipse cx="60" cy="30" rx="14" ry="5" fill="${W}"/></g>${sp(95, 36)}${sp(24, 70, P, "d2")}`),
  espermicida: svg(
    `<g class="sw"><path d="M44 14h32l-4 62H48Z" fill="${A}"/><rect x="52" y="76" width="16" height="12" rx="3" fill="${Y}"/><path d="M42 14h36" stroke-width="6" fill="none"/></g><path class="dr" d="M56 96c-3-5-4-7-4-9a4 4 0 0 1 8 0c0 2-1 4-4 9Z" fill="${LV}" stroke-width="2.5"/><path class="dr d2" d="M68 98c-3-5-4-7-4-9a4 4 0 0 1 8 0c0 2-1 4-4 9Z" fill="${LV}" stroke-width="2.5"/>${sp(94, 34, P)}`),
  pastillas: svg(
    `<g class="fl"><rect x="16" y="30" width="88" height="60" rx="12" fill="${LV}"/>${blister}</g>${sp(100, 20)}${sp(18, 100, A, "d2")}`),
  implante: svg(
    `<g class="fl"><path d="M12 50c22-10 74-10 96 0v30c-22 10-74 10-96 0Z" fill="${SK}"/><circle class="rp" cx="60" cy="65" r="14" fill="none" stroke="${P}" stroke-width="2.5"/><rect class="pu" x="38" y="61" width="44" height="8" rx="4" fill="${P}"/></g>${sp(100, 24)}${sp(20, 28, A, "d2")}`),
  inyeccion: svg(
    `<g transform="rotate(35 60 60)"><rect x="34" y="48" width="44" height="24" rx="5" fill="${W}"/><rect x="38" y="52" width="28" height="16" rx="3" fill="${A}"/><g class="sl"><rect x="18" y="55" width="16" height="10" fill="${Y}"/><rect x="10" y="48" width="6" height="24" rx="3" fill="${Y}"/></g><rect x="78" y="54" width="8" height="12" fill="${LV}"/><path d="M86 60h20" fill="none"/></g><path class="dr" d="M98 94c-3-5-4-7-4-9a4 4 0 0 1 8 0c0 2-1 4-4 9Z" fill="${A}" stroke-width="2.5"/>${sp(24, 28, P)}`),
  parche: svg(
    `<circle cx="60" cy="62" r="42" fill="${SK}"/><g class="sw"><rect x="38" y="42" width="44" height="44" rx="10" fill="${P}"/><path d="M60 52v24M48 64h24" stroke="${W}" fill="none"/><path d="M82 76l-10 10h10Z" fill="${LP}"/></g>${sp(100, 22)}`),
  anillo: svg(
    `<g class="sp"><circle cx="60" cy="60" r="30" fill="none" stroke-width="13"/><circle cx="60" cy="60" r="30" fill="none" stroke="${A}" stroke-width="7"/><circle cx="60" cy="30" r="6" fill="${Y}"/></g><circle class="pu" cx="60" cy="60" r="6" fill="${P}"/>${sp(100, 22, P)}${sp(18, 100, Y, "d2")}`),
  "diu-hormonal": svg(tShape(V, `<circle class="pu d2" cx="60" cy="72" r="5" fill="${Y}"/>`) + sp(98, 32) + sp(22, 90, P, "d2")),
  "diu-cobre": svg(tShape(O, `<path d="M52 62h16M52 74h16M52 86h16" stroke-width="2.5" fill="none"/>`) + sp(98, 32, A) + sp(22, 90, P, "d2")),
  ritmo: svg(
    `<g class="fl"><rect x="22" y="28" width="76" height="72" rx="10" fill="${W}"/><rect x="22" y="28" width="76" height="24" rx="10" fill="${P}"/><path d="M40 20v14M80 20v14" stroke-width="5" fill="none"/>${days}</g>${sp(104, 22)}`),
  retiro: svg(
    `<circle cx="58" cy="62" r="38" fill="${LV}"/><g class="sl"><path d="M28 62h54M64 46l18 16-18 16" fill="none" stroke-width="7"/></g><g class="bl"><path d="M98 18l14 26H84Z" fill="${Y}"/><path d="M98 27v8" stroke-width="3" fill="none"/></g>`),

  autocuidado: svg(
    `<g class="pu"><path d="M60 100 25 64C17 52 22 36 37 34c10-1 19 5 23 13 4-8 13-14 23-13 15 2 20 18 12 30Z" fill="${P}"/><path d="M38 50c2-4 6-6 10-6" stroke="${W}" fill="none"/></g>${sp(100, 28)}${sp(20, 34, A, "d2")}${sp(98, 94, Y, "d3")}`),
  anticonceptivos: svg(
    `<g class="sw"><g transform="rotate(-40 60 60)"><rect x="24" y="44" width="72" height="32" rx="16" fill="${W}"/><path d="M60 44H40a16 16 0 0 0 0 32h20Z" fill="${P}"/></g></g>${sp(98, 26)}${sp(20, 96, A, "d2")}${sp(100, 96, V, "d3")}`),
  its: svg(
    `<g class="pu"><path d="M60 14l36 14v30c0 24-16 40-36 48-20-8-36-24-36-48V28Z" fill="${Y}"/><path d="M60 42v34M43 59h34" stroke-width="7" fill="none"/></g>${sp(102, 100, P)}${sp(16, 98, A, "d2")}`),
  servicios: svg(
    `<rect x="24" y="52" width="72" height="50" rx="6" fill="${W}"/><path d="M16 56 60 26l44 30Z" fill="${P}"/><path d="M60 64v22M49 75h22" stroke="${P}" stroke-width="7" fill="none"/><g class="fl d2"><path d="M98 8c-9 0-15 6-15 14 0 10 15 24 15 24s15-14 15-24c0-8-6-14-15-14Z" fill="${A}"/><circle cx="98" cy="22" r="5" fill="${W}"/></g>`),
};
