import { pageHead, placeholder } from "./partials.js";

/** Vista por defecto para rutas no reconocidas. */
export const render = () => ({
  html: `
    ${pageHead({ eyebrow: "404", title: "Página no encontrada" })}
    <section class="section wrap">
      ${placeholder({
        tag: "Ups",
        title: "No encontramos esta página",
        message: "Usa la navegación superior para volver a una sección disponible.",
        iconName: "spark",
      })}
    </section>
  `,
});
