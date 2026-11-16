/**
 * Router de vistas basado en hash (#/ruta).
 *
 * - Las rutas se definen con patrones; ":slug" actúa como parámetro dinámico.
 * - Cualquier subruta (nivel >= 2) activa automáticamente el botón "← Volver",
 *   que regresa a la ruta padre dentro de la jerarquía.
 */
export class Router {
  #routes;
  #fallback;
  #viewEl;
  #backBar;
  #backButton;
  #onChange;

  /**
   * @param {Object} options
   * @param {Array<{ path: string, handler: { render: Function } }>} options.routes
   * @param {{ render: Function }} options.fallback Vista para rutas no encontradas.
   * @param {HTMLElement} options.viewEl Contenedor de vistas.
   * @param {HTMLElement} options.backBar Contenedor de la barra "Volver".
   * @param {HTMLButtonElement} options.backButton Botón "Volver".
   * @param {(path: string, depth: number) => void} [options.onChange] Callback tras renderizar.
   */
  constructor({ routes, fallback, viewEl, backBar, backButton, onChange }) {
    this.#routes = routes;
    this.#fallback = fallback;
    this.#viewEl = viewEl;
    this.#backBar = backBar;
    this.#backButton = backButton;
    this.#onChange = onChange;

    this.#backButton.addEventListener("click", () => this.back());
  }

  /** Inicia el router y resuelve la ruta actual. */
  start() {
    window.addEventListener("hashchange", () => this.resolve());
    if (!window.location.hash) {
      window.location.replace("#/inicio");
      return;
    }
    this.resolve();
  }

  /** Navega de forma programática a una ruta. */
  go(path) {
    const target = path.startsWith("/") ? path : `/${path}`;
    if (window.location.hash === `#${target}`) {
      this.resolve();
      return;
    }
    window.location.hash = target;
  }

  /** Regresa a la ruta padre (o al inicio si ya estamos en un nivel raíz). */
  back() {
    const segments = this.#segments();
    const parent = segments.slice(0, -1);
    this.go(parent.length ? `/${parent.join("/")}` : "/inicio");
  }

  /** Resuelve la ruta actual y renderiza su vista. */
  resolve() {
    const segments = this.#segments();
    const depth = segments.length;
    const match = this.#match(segments);

    const handler = match?.handler ?? this.#fallback;
    const result =
      handler.render({
        path: `/${segments.join("/")}`,
        segments,
        params: match?.params ?? {},
      }) ?? { html: "" };

    this.#viewEl.innerHTML = result.html;
    result.mount?.(this.#viewEl);
    this.#backBar.hidden = depth <= 1;
    document.body.classList.toggle("has-back", depth > 1);
    this.#animate();

    window.scrollTo({ top: 0, behavior: "auto" });
    this.#viewEl.focus({ preventScroll: true });
    this.#onChange?.(`/${segments.join("/")}`, depth);
  }

  /* ---------- internos ---------- */

  #segments() {
    return window.location.hash.replace(/^#/, "").split("/").filter(Boolean);
  }

  /** Empareja los segmentos con un patrón de ruta y extrae sus parámetros. */
  #match(segments) {
    for (const route of this.#routes) {
      const pattern = route.path.split("/").filter(Boolean);
      if (pattern.length !== segments.length) continue;

      const params = {};
      const ok = pattern.every((part, i) => {
        if (part.startsWith(":")) {
          params[part.slice(1)] = segments[i];
          return true;
        }
        return part === segments[i];
      });
      if (ok) return { handler: route.handler, params };
    }
    return null;
  }

  #animate() {
    this.#viewEl.classList.remove("enter");
    void this.#viewEl.offsetWidth; // reinicia la animación
    this.#viewEl.classList.add("enter");
  }
}
