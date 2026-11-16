import { RECURSOS, icon } from "../content.js?v=3";
import { pageHead } from "./partials.js";

/** Tarjeta de recurso que abre su infografía en PDF. */
const topicCard = (topic) => `
  <a
    class="card accent--${topic.accent}"
    href="${topic.pdf}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Abrir la infografía en PDF: ${topic.name}"
  >
    <span class="card__icon" aria-hidden="true">${icon(topic.icon)}</span>
    <h3 class="card__title">${topic.name}</h3>
    <p class="card__desc">${topic.short}</p>
    <span class="card__go">Abrir infografía PDF ${icon("arrow")}</span>
  </a>
`;

/** Tarjeta de video con vista previa; al pulsarla se reproduce en la misma página. */
const videoCard = (video, category) => `
  <div
    class="video accent--${category.accent}"
    data-video-id="${video.id}"
    data-label="${category.label}"
  >
    <button
      class="video__poster"
      type="button"
      aria-label="Reproducir el video de ${category.label}"
    >
      <img
        class="video__thumb"
        src="https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg"
        alt="Vista previa del video de ${category.label}"
        loading="lazy"
      />
      <span class="video__play" aria-hidden="true">${icon("play")}</span>
    </button>
    <div class="video__meta">
      <span class="video__cat">${category.label}</span>
      <a
        class="video__go"
        href="https://www.youtube.com/watch?v=${video.id}"
        target="_blank"
        rel="noopener noreferrer"
        >Ver en YouTube ${icon("arrow")}</a
      >
    </div>
  </div>
`;

/** Bloque de videos de una categoría. */
const videoGroup = (category) => `
  <div class="video-group accent--${category.accent}">
    <h3 class="video-group__title">
      <span class="video-group__icon" aria-hidden="true">${icon(category.icon)}</span>
      ${category.label}
    </h3>
    ${
      category.videos.length
        ? `<div class="videos">${category.videos.map((video) => videoCard(video, category)).join("")}</div>`
        : `<p class="video-group__empty">Próximamente: videos de esta categoría.</p>`
    }
  </div>
`;

/** Reproduce el video incrustado al pulsar la tarjeta. */
const mountVideos = (root) => {
  root.querySelectorAll(".video").forEach((card) => {
    const { videoId, label } = card.dataset;
    const poster = card.querySelector(".video__poster");
    const thumb = poster.querySelector(".video__thumb");

    // Si la vista previa en alta resolución no existe, usa la estándar.
    thumb.addEventListener(
      "error",
      () => {
        thumb.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      },
      { once: true },
    );

    poster.addEventListener("click", () => {
      poster.outerHTML = `
        <div class="video__frame">
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
            title="Video de ${label}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>`;
    });
  });
};

/** Sección "Recursos": material informativo, consejos clave y galería de videos. */
export const render = () => ({
  html: `
    ${pageHead({
      eyebrow: "Recursos",
      title: RECURSOS.title,
      lead: RECURSOS.lead,
    })}

    <section class="section wrap">
      <div class="section-head">
        <h2>${RECURSOS.topicsLabel}</h2>
        <p>Infografías para consultar y descargar. Toca una tarjeta para abrir el PDF en otra pestaña.</p>
      </div>
      <div class="cards">
        ${RECURSOS.topics.map(topicCard).join("")}
      </div>
    </section>

    <section class="section wrap">
      <div class="section-head">
        <h2>${RECURSOS.consejosLabel}</h2>
      </div>
      <p class="slogan">${icon("spark")}<span>${RECURSOS.slogan}</span></p>
      <ul class="tips">
        ${RECURSOS.consejos
          .map(
            (consejo) => `
          <li class="tip">
            <span class="tip__icon" aria-hidden="true">${icon("quote")}</span>
            <span>${consejo}</span>
          </li>`,
          )
          .join("")}
      </ul>
    </section>

    <section class="section wrap">
      <div class="section-head">
        <h2>${RECURSOS.videosLabel}</h2>
        <p>${RECURSOS.videosNote}</p>
      </div>
      <div class="video-groups">
        ${RECURSOS.videoCategories.map(videoGroup).join("")}
      </div>
    </section>
  `,
  mount: mountVideos,
});
