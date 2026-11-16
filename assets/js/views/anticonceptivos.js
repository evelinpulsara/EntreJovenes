import { ANTICONCEPTIVOS, icon } from "../content.js";
import { ART } from "../art.js";
import { pageHead } from "./partials.js";
import * as filters from "../components/filters.js";
import * as modal from "../components/modal.js";

const ACCENT = ANTICONCEPTIVOS.accent;

/** Índice plano método → categoría, para resolver las fichas del modal. */
const INDEX = Object.fromEntries(
  ANTICONCEPTIVOS.categories.flatMap((category) =>
    category.methods.map((method) => [method.id, { method, category }]),
  ),
);

/** Extrae el porcentaje de efectividad de la ficha del método (si existe). */
const effectiveness = (method) => {
  const value = method.facts?.find((fact) => fact.label === "Efectividad")?.value;
  const match = value?.match(/\d+\s*%/);
  return match ? match[0].replace(/\s+/g, "") : null;
};

/** Tarjeta-resumen que abre la ficha completa. */
const methodCard = (method, category) => {
  const pct = effectiveness(method);

  return `
  <button class="method accent--${ACCENT} cat--${category.id}" type="button" data-method="${method.id}">
    <span class="method__art" aria-hidden="true">${ART[method.id] ?? ""}${pct ? `<span class="method__badge" title="Efectividad">${pct}</span>` : ""}</span>
    <span class="method__name">${method.name}</span>
    <span class="method__short">${method.short}</span>
    <span class="method__go">Ver ficha ${icon("arrow")}</span>
  </button>
`;
};

/** Contenido de la ficha clínica dentro del modal. */
const ficha = (method, category) => {
  const alert = method.alert ?? category.alert;

  return `
    <div class="ficha accent--${ACCENT} cat--${category.id}">
      <div class="ficha__art">${ART[method.id] ?? ""}</div>
      <span class="modal__eyebrow">${category.label}</span>
      <h2 class="modal__title" id="modal-title">${method.name}</h2>
      ${method.how ? `<p class="block-lead">${method.how}</p>` : ""}
      ${
        method.facts?.length
          ? `<dl class="facts">
              ${method.facts
                .map(
                  (fact) => `
                <div class="fact">
                  <dt>${fact.label}</dt>
                  <dd>${fact.value}</dd>
                </div>`,
                )
                .join("")}
            </dl>`
          : ""
      }
      ${
        alert
          ? `<aside class="callout callout--alert">
              <span class="callout__icon" aria-hidden="true">${icon("alert")}</span>
              <p><strong>¡Importante!</strong> ${alert}</p>
            </aside>`
          : ""
      }
    </div>
  `;
};

const group = (category) => `
  <section class="method-group accent--${ACCENT} cat--${category.id}" data-filter-item="${category.id}">
    <header class="method-group__head">
      <span class="method-group__icon" aria-hidden="true">${icon(category.icon)}</span>
      <div>
        <h2>${category.label}</h2>
        ${category.description ? `<p>${category.description}</p>` : ""}
      </div>
    </header>

    <div class="methods">
      ${category.methods.map((method) => methodCard(method, category)).join("")}
    </div>

    ${
      category.alert
        ? `<aside class="callout callout--alert">
            <span class="callout__icon" aria-hidden="true">${icon("alert")}</span>
            <p><strong>¡Importante!</strong> ${category.alert}</p>
          </aside>`
        : ""
    }
  </section>
`;

/** Vista de Métodos anticonceptivos: filtros por tipo + fichas en modal. */
export const render = () => ({
  html: `
    ${pageHead({
      eyebrow: "Temas",
      title: ANTICONCEPTIVOS.title,
      lead: ANTICONCEPTIVOS.subtitle,
    })}

    <section class="section wrap">
      <p class="block-tagline accent--${ACCENT}">${ANTICONCEPTIVOS.tagline}</p>

      ${filters.render(ANTICONCEPTIVOS.categories, {
        allLabel: ANTICONCEPTIVOS.allLabel,
        label: ANTICONCEPTIVOS.filterLabel,
      })}

      <div class="method-groups">
        ${ANTICONCEPTIVOS.categories.map(group).join("")}
      </div>
    </section>

    ${modal.render()}
  `,

  mount: (root) => {
    filters.mount(root);

    const controller = modal.createController(root);
    root.querySelectorAll("[data-method]").forEach((card) => {
      card.addEventListener("click", () => {
        const entry = INDEX[card.dataset.method];
        if (entry) controller.open(ficha(entry.method, entry.category));
      });
    });
  },
});
