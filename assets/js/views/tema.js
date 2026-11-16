import { AUTOCUIDADO, SERVICIOS, findTheme } from "../content.js";
import { renderThemeContent } from "./themeContent.js";
import { pageHead, placeholder } from "./partials.js";
import * as anticonceptivos from "./anticonceptivos.js";
import * as its from "./its.js";

/** Vistas con interacción propia (filtros + modal, pestañas, etc.). */
const CUSTOM = {
  anticonceptivos,
  its,
};

/** Temas resueltos con la plantilla genérica de pestañas y bloques. */
const CONTENT = {
  autocuidado: AUTOCUIDADO,
  servicios: SERVICIOS,
};

/** Sub-vista de un tema interno (#/temas/:slug). El botón "← Volver" lo gestiona el router. */
export const render = (ctx) => {
  const slug = ctx.params?.slug;

  if (CUSTOM[slug]) return CUSTOM[slug].render(ctx);
  if (CONTENT[slug]) return renderThemeContent(CONTENT[slug]);

  const theme = findTheme(slug);
  if (theme) {
    return {
      html: `
        ${pageHead({ eyebrow: "Temas", title: theme.title, lead: theme.desc })}
        <section class="section wrap">
          ${placeholder({
            title: theme.title,
            message: "Contenedor vacío listo para agregar el contenido de este tema.",
            iconName: theme.icon,
          })}
        </section>
      `,
    };
  }

  return {
    html: `
      ${pageHead({ eyebrow: "Temas", title: "Tema no encontrado" })}
      <section class="section wrap">
        ${placeholder({
          tag: "Ups",
          title: "No encontramos este tema",
          message: "Revisa el enlace o vuelve al inicio para elegir un tema disponible.",
          iconName: "spark",
        })}
      </section>
    `,
  };
};
