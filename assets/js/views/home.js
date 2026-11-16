import { ART } from "../art.js";
import { SITE, THEMES, icon } from "../content.js";

const card = (theme) => `
  <a class="card accent--${theme.accent}" href="#/temas/${theme.slug}">
    <span class="card__art" aria-hidden="true">${ART[theme.slug]}</span>
    <h3 class="card__title">${theme.title}</h3>
    <p class="card__desc">${theme.desc}</p>
    <span class="card__go">Explorar ${icon("arrow")}</span>
  </a>
`;

/** Vista de Inicio: Hero + mensaje de espacio seguro + accesos rápidos. */
export const render = () => ({
  html: `
    <section class="hero">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="wrap hero__inner"><div>
        <span class="badge">
          <span class="badge__dot" aria-hidden="true"></span>
          ${SITE.safeSpace}
        </span>

        <h1 class="hero__title">
          ${SITE.brand.split(" ")[0]} <span class="grad">${SITE.brand.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p class="hero__tagline">${SITE.tagline}</p>
        <p class="hero__lead">
          ${SITE.claim} ${SITE.intro}
        </p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#/temas">Explora los temas ${icon("arrow")}</a>
          <a class="btn btn--ghost" href="#/nosotros">Conoce más</a>
        </div></div>
        <figure class="hero-photo">
          <img
            src="assets/img/foto-grupo-inicio.jpeg"
            alt="Grupo de estudiantes que hace parte de la comunidad Entre Jóvenes"
            width="3754"
            height="1798"
            fetchpriority="high"
          />
        </figure>
      </div>
    </section>

    <section class="section wrap" aria-labelledby="temas-title">
      <div class="section-head">
        <span class="eyebrow">Temas</span>
        <h2 id="temas-title">Explora los temas</h2>
        <p>Elige por dónde quieres empezar. Información clara, cercana y sin juicios.</p>
      </div>
      <div class="cards">
        ${THEMES.map(card).join("")}
      </div>
    </section>
  `,
});
