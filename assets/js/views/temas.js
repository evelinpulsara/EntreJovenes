import { THEMES, AUTOCUIDADO, ANTICONCEPTIVOS, ITS, SERVICIOS, RECURSOS, icon } from "../content.js";
import { ART } from "../art.js";
import { pageHead } from "./partials.js";

/** Subtemas de cada tema, tomados de los datos del sitio. */
const SUBTOPICS = {
  autocuidado: AUTOCUIDADO.tabs.map((tab) => tab.label),
  anticonceptivos: ANTICONCEPTIVOS.categories.flatMap((c) => c.methods.map((m) => m.name)),
  its: ITS.tabs.map((tab) => tab.label),
  servicios: SERVICIOS.tabs.map((tab) => tab.label),
};

const topic = (theme) => `
  <a class="topic accent--${theme.accent}" href="#/temas/${theme.slug}">
    <span class="topic__art" aria-hidden="true">${ART[theme.slug]}</span>
    <span>
      <h3>${theme.title}</h3>
      <p>${theme.desc}</p>
      <ul class="topic__chips">${SUBTOPICS[theme.slug].map((s) => `<li>${s}</li>`).join("")}</ul>
      <span class="card__go">Explorar ${icon("arrow")}</span>
    </span>
  </a>
`;

/** Sección "Temas": índice completo de lo que se aborda en la página. */
export const render = () => ({
  html: `
    ${pageHead({
      eyebrow: "Temas",
      title: "Explora los temas",
      lead: "Autocuidado, métodos anticonceptivos, ITS y servicios amigables. Elige el que quieras.",
    })}
    <section class="section wrap">
      <div class="topics">${THEMES.map(topic).join("")}</div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <h2>Más para explorar</h2>
        <p>Material, consejos y videos sobre estos temas en Recursos.</p>
      </div>
      <div class="pills">
        ${RECURSOS.topics.map((t) => `<a class="pill" href="#/recursos">${t.name}</a>`).join("")}
        <a class="pill" href="#/recursos">${RECURSOS.consejosLabel}</a>
        <a class="pill" href="#/recursos">${RECURSOS.videosLabel}</a>
      </div>
    </section>
  `,
});
