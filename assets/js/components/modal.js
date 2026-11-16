/**
 * Modal genérico (diálogo accesible).
 * `render` inserta la estructura vacía; `createController` devuelve los controles
 * de apertura/cierre para reutilizarlo con cualquier contenido.
 */
export const render = () => `
  <div class="modal" data-modal hidden>
    <div class="modal__backdrop" data-modal-close></div>
    <div
      class="modal__dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      data-modal-dialog
    >
      <button class="modal__close" type="button" data-modal-close aria-label="Cerrar">
        <span aria-hidden="true">×</span>
      </button>
      <div class="modal__body" data-modal-body></div>
    </div>
  </div>
`;

/** Estado y comportamiento del modal dentro de un contenedor. */
export const createController = (root) => {
  const el = root.querySelector("[data-modal]");
  const dialog = el.querySelector("[data-modal-dialog]");
  const body = el.querySelector("[data-modal-body]");
  let lastFocused = null;

  const open = (html) => {
    lastFocused = document.activeElement;
    body.innerHTML = html;
    el.hidden = false;
    document.body.classList.add("is-locked");
    dialog.focus();
  };

  const close = () => {
    el.hidden = true;
    body.innerHTML = "";
    document.body.classList.remove("is-locked");
    lastFocused?.focus?.();
  };

  el.querySelectorAll("[data-modal-close]").forEach((trigger) => {
    trigger.addEventListener("click", close);
  });

  // El evento burbujea desde el diálogo enfocado hasta el contenedor.
  el.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  return { open, close, el };
};
