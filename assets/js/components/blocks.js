import { icon } from "../content.js";

/** Renderiza un bloque de contenido según su tipo. */
export const renderBlock = (block) => {
  switch (block.type) {
    case "tagline":
      return `<p class="block-tagline">${block.text}</p>`;

    case "lead":
      return `<p class="block-lead">${block.text}</p>`;

    case "list":
      return `
        <ul class="block-list">
          ${block.items
            .map(
              (item, index) => `
            <li class="block-list__item">
              <span class="block-list__num" aria-hidden="true">${index + 1}</span>
              <p><strong>${item.title}</strong> ${item.text}</p>
            </li>`,
            )
            .join("")}
        </ul>`;

    case "note":
      return `
        <aside class="callout callout--note">
          <span class="callout__icon" aria-hidden="true">${icon("heart")}</span>
          <p>${block.title ? `<strong>${block.title}:</strong> ` : ""}${block.text}</p>
        </aside>`;

    case "quote":
      return `
        <blockquote class="callout callout--quote">
          <span class="callout__icon" aria-hidden="true">${icon("quote")}</span>
          <div>
            ${block.title ? `<span class="callout__title">${block.title}</span>` : ""}
            <p>Según la ${block.source}, ${block.text}</p>
          </div>
        </blockquote>`;

    case "chips":
      return `
        <ul class="chips">
          ${block.items
            .map(
              (item) => `
            <li class="chip">
              <span class="chip__icon" aria-hidden="true">${icon("check")}</span>
              ${item}
            </li>`,
            )
            .join("")}
        </ul>`;

    case "schedule":
      return `
        <div class="schedule">
          <table class="schedule__table">
            <thead>
              <tr>${block.columns.map((c) => `<th scope="col">${c}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${block.rows
                .map(
                  (row) => `
                <tr>
                  <th scope="row">${row[0]}</th>
                  ${row
                    .slice(1)
                    .map((cell) => `<td>${icon("clock")}<span>${cell}</span></td>`)
                    .join("")}
                </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </div>`;

    default:
      return "";
  }
};

/** Renderiza una lista de bloques. */
export const renderBlocks = (blocks = []) => blocks.map(renderBlock).join("");
