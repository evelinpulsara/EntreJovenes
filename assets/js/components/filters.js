/**
 * Barra de filtros por categoría.
 * Muestra/oculta los elementos marcados con [data-filter-item="<id>"].
 */
export const render = (categories, { allLabel = "Todos", label = "Filtrar por categoría" } = {}) => `
  <div class="filters" data-filters role="group" aria-label="${label}">
    <button class="filter is-active" type="button" data-filter="all" aria-pressed="true">
      ${allLabel}
    </button>
    ${categories
      .map(
        (category) => `
      <button class="filter" type="button" data-filter="${category.id}" aria-pressed="false">
        ${category.label}
      </button>`,
      )
      .join("")}
  </div>
`;

/** Conecta los filtros presentes en el contenedor. */
export const mount = (root) => {
  root.querySelectorAll("[data-filters]").forEach((bar) => {
    const buttons = [...bar.querySelectorAll(".filter")];
    const items = [...root.querySelectorAll("[data-filter-item]")];

    const apply = (value) => {
      buttons.forEach((button) => {
        const on = button.dataset.filter === value;
        button.classList.toggle("is-active", on);
        button.setAttribute("aria-pressed", String(on));
      });

      items.forEach((item) => {
        const show = value === "all" || item.dataset.filterItem === value;
        item.hidden = !show;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => apply(button.dataset.filter));
    });
  });
};
