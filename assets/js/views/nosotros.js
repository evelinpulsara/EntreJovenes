import { NOSOTROS } from "../content.js?v=3";
import { pageHead } from "./partials.js";

/** Sección "Nosotros": texto institucional del proyecto. */
export const render = () => ({
  html: `
    ${pageHead({
      eyebrow: "Nosotros",
      title: NOSOTROS.title,
      lead: NOSOTROS.lead,
    })}

    <section class="section wrap">
      <article class="project accent--${NOSOTROS.accent}">
        <span class="eyebrow">${NOSOTROS.project.tagline}</span>
        <h2>${NOSOTROS.project.name}</h2>
        ${NOSOTROS.project.paragraphs.map((text) => `<p>${text}</p>`).join("")}

        <dl class="facts">
          ${NOSOTROS.facts
            .map(
              (fact) => `
            <div class="fact">
              <dt>${fact.label}</dt>
              <dd>${fact.value}</dd>
            </div>`,
            )
            .join("")}
        </dl>
      </article>
    </section>
  `,

  mount: () => {},
});
