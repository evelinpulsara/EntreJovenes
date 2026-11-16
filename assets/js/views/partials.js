import { icon } from "../content.js";

/**
 * Contenedor vacío reutilizable para las secciones pendientes.
 * Se irá reemplazando por el contenido real en los siguientes pasos.
 */
export const placeholder = ({ tag = "Próximamente", title, message, iconName = "spark" }) => `
  <div class="placeholder">
    <span class="placeholder__tag">${tag}</span>
    <span class="placeholder__icon" aria-hidden="true">${icon(iconName)}</span>
    <h3>${title}</h3>
    <p>${message}</p>
  </div>
`;

/** Encabezado estándar de una vista interna. */
export const pageHead = ({ eyebrow, title, lead }) => `
  <header class="wrap page-head">
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
    <h1>${title}</h1>
    ${lead ? `<p>${lead}</p>` : ""}
  </header>
`;
