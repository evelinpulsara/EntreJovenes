import { render as renderTabs, mount as mountTabs } from "../components/tabs.js";
import { renderBlocks } from "../components/blocks.js";
import { pageHead } from "./partials.js";

/**
 * Construye la página de un tema interno a partir de su estructura de datos
 * (título, subtítulo y pestañas con bloques de contenido).
 */
export const renderThemeContent = (data) => ({
  html: `
    ${pageHead({ eyebrow: "Temas", title: data.title, lead: data.subtitle })}

    <section class="section wrap">
      ${renderTabs(
        data.tabs.map((tab) => ({
          id: tab.id,
          label: tab.label,
          html: renderBlocks(tab.blocks),
        })),
        { label: data.tabLabel, accent: data.accent },
      )}
    </section>
  `,
  mount: mountTabs,
});
