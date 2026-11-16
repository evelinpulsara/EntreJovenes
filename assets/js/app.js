import { Router } from "./router.js?v=2";
import { SITE } from "./content.js?v=3";
import * as home from "./views/home.js?v=4";
import * as temas from "./views/temas.js?v=2";
import * as tema from "./views/tema.js?v=2";
import * as recursos from "./views/recursos.js?v=3";
import * as nosotros from "./views/nosotros.js?v=3";
import * as contacto from "./views/contacto.js?v=2";
import * as notFound from "./views/notFound.js?v=2";

/* ---------- Elementos ---------- */
const viewEl = document.getElementById("view");
const backBar = document.getElementById("backBar");
const backButton = document.getElementById("backButton");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
const header = document.getElementById("siteHeader");

/* ---------- Navegación superior ---------- */
navLinks.innerHTML = SITE.nav
  .map(
    (item) =>
      `<li><a href="#${item.path}" data-root="/${item.path.split("/").filter(Boolean)[0]}">${item.label}</a></li>`,
  )
  .join("");

const setActive = (path) => {
  const root = `/${path.split("/").filter(Boolean)[0] ?? ""}`;
  navLinks.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.root === root);
  });
};

/* ---------- Menú móvil ---------- */
const closeMenu = () => {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menú");
};

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

/* ---------- Router ---------- */
const router = new Router({
  routes: [
    { path: "/inicio", handler: home },
    { path: "/temas", handler: temas },
    { path: "/temas/:slug", handler: tema },
    { path: "/recursos", handler: recursos },
    { path: "/nosotros", handler: nosotros },
    { path: "/contacto", handler: contacto },
  ],
  fallback: notFound,
  viewEl,
  backBar,
  backButton,
  onChange: (path) => {
    setActive(path);
    closeMenu();
  },
});

router.start();

/* ---------- Sombra del header al hacer scroll ---------- */
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
