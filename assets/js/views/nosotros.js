import { NOSOTROS } from "../content.js?v=3";
import { pageHead } from "./partials.js";

/**
 * Tarjeta de un integrante del equipo.
 * El <img> apunta a la ruta real de la foto: mientras el archivo no exista,
 * la tarjeta muestra el texto guía para reemplazarlo.
 */
const teammate = (member) => `
  <figure class="team-card accent--${member.accent}">
    <div class="team-card__frame">
      <span class="team-card__ph">[Colocar aquí foto del equipo / integrante]</span>
      <img
        class="team-card__photo"
        src="${member.photo}"
        alt="Fotografía de ${member.name}"
        loading="lazy"
      />
    </div>
    <figcaption class="team-card__caption">
      <strong>${member.name}</strong>
      <span>${member.role}</span>
    </figcaption>
  </figure>
`;

/** Sección "Nosotros": texto institucional del proyecto y equipo creador. */
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

    <section class="section wrap">
      <div class="section-head">
        <span class="eyebrow">${NOSOTROS.team.label}</span>
        <h2>${NOSOTROS.team.title}</h2>
        <p>${NOSOTROS.team.note}</p>
      </div>

      <div class="team">
        ${NOSOTROS.team.members.map(teammate).join("")}
      </div>
    </section>
  `,

  mount: (root) => {
    // Revela cada foto solo cuando la imagen real cargue correctamente.
    root.querySelectorAll(".team-card__photo").forEach((photo) => {
      const reveal = () => photo.classList.add("is-loaded");
      if (photo.complete && photo.naturalWidth > 0) reveal();
      else photo.addEventListener("load", reveal);
    });
  },
});
