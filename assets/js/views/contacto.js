import { CONTACTO, SERVICIOS, icon } from "../content.js";
import { renderBlock } from "../components/blocks.js";
import { pageHead } from "./partials.js";

/** Ubicación y horarios reutilizados del tema "Servicios amigables". */
const ubicacion = SERVICIOS.tabs.find((tab) => tab.id === "ubicacion");
const schedule = ubicacion?.blocks.find((block) => block.type === "schedule");

const { form, info } = CONTACTO;

/** Sección "Contacto": formulario confidencial y ubicación de la unidad. */
export const render = () => ({
  html: `
    ${pageHead({
      eyebrow: "Contacto",
      title: CONTACTO.title,
      lead: CONTACTO.lead,
    })}

    <section class="section wrap">
      <div class="contact accent--${CONTACTO.accent}">
        <form class="form" data-contact-form novalidate>
          <h2 class="form__title">${form.title}</h2>

          <aside class="callout callout--note">
            <span class="callout__icon" aria-hidden="true">${icon("lock")}</span>
            <p>${form.note}</p>
          </aside>

          <div class="field">
            <label for="c-name">${form.nameLabel}</label>
            <input id="c-name" name="name" type="text" placeholder="${form.namePlaceholder}" required />
          </div>

          <div class="field">
            <label for="c-email">${form.emailLabel}</label>
            <input id="c-email" name="email" type="email" placeholder="${form.emailPlaceholder}" />
          </div>

          <div class="field field--full">
            <label for="c-subject">${form.subjectLabel}</label>
            <select id="c-subject" name="subject">
              ${form.subjects.map((subject) => `<option>${subject}</option>`).join("")}
            </select>
          </div>

          <div class="field field--full">
            <label for="c-message">${form.messageLabel}</label>
            <textarea
              id="c-message"
              name="message"
              rows="5"
              placeholder="${form.messagePlaceholder}"
              required
            ></textarea>
          </div>

          <label class="consent field--full">
            <input type="checkbox" name="consent" required />
            <span>${form.consentLabel}</span>
          </label>

          <button class="btn btn--primary form__submit field--full" type="submit">
            ${icon("send")} ${form.submit}
          </button>

          <p class="form__success field--full" role="status" hidden>${form.success}</p>
        </form>

        <aside class="contact-info">
          <h2>${info.title}</h2>
          <p>${info.note}</p>
          ${schedule ? renderBlock(schedule) : ""}
        </aside>
      </div>
    </section>
  `,

  mount: (root) => {
    const formEl = root.querySelector("[data-contact-form]");
    const success = formEl.querySelector(".form__success");

    formEl.addEventListener("input", () => {
      if (!success.hidden) success.hidden = true;
    });

    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      success.hidden = false;
      formEl.reset();
    });
  },
});
