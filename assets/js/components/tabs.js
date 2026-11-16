/**
 * Componente de pestañas accesible (WAI-ARIA tabs).
 * `render` genera el marcado; `mount` conecta la interacción tras insertarlo.
 */
export const render = (items, { label = "Secciones", accent = "mint" } = {}) => `
  <div class="tabs accent--${accent}" data-tabs>
    <div class="tabs__list" role="tablist" aria-label="${label}">
      ${items
        .map(
          (tab, index) => `
        <button
          class="tab${index === 0 ? " is-active" : ""}"
          type="button"
          role="tab"
          id="tab-${tab.id}"
          data-tab="${tab.id}"
          aria-selected="${index === 0}"
          aria-controls="panel-${tab.id}"
          tabindex="${index === 0 ? 0 : -1}"
        >
          ${tab.label}
        </button>`,
        )
        .join("")}
    </div>

    <div class="tabs__panels">
      ${items
        .map(
          (tab, index) => `
        <section
          class="tab-panel${index === 0 ? " is-active" : ""}"
          role="tabpanel"
          id="panel-${tab.id}"
          data-panel="${tab.id}"
          aria-labelledby="tab-${tab.id}"
          ${index === 0 ? "" : "hidden"}
        >
          ${tab.html ?? ""}
        </section>`,
        )
        .join("")}
    </div>
  </div>
`;

/** Conecta la interacción (clic + teclado) de todas las pestañas dentro del contenedor. */
export const mount = (root) => {
  root.querySelectorAll("[data-tabs]").forEach((tabsEl) => {
    const tabs = [...tabsEl.querySelectorAll('[role="tab"]')];
    const panels = [...tabsEl.querySelectorAll('[role="tabpanel"]')];

    const activate = (id, focus = false) => {
      tabs.forEach((tab) => {
        const on = tab.dataset.tab === id;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        if (on && focus) {
          tab.focus();
          tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
        }
      });

      panels.forEach((panel) => {
        const on = panel.dataset.panel === id;
        panel.hidden = !on;
        panel.classList.toggle("is-active", on);
        if (on) {
          panel.classList.remove("panel-enter");
          void panel.offsetWidth; // reinicia la animación
          panel.classList.add("panel-enter");
        }
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab.dataset.tab));

      tab.addEventListener("keydown", (event) => {
        const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();

        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;

        activate(tabs[next].dataset.tab, true);
      });
    });
  });
};
