"use strict";

document.documentElement.classList.add("js");

const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;
try {
  savedTheme = window.localStorage.getItem("iydi-theme");
} catch {
  savedTheme = null;
}
if (savedTheme !== "dark" && savedTheme !== "light") savedTheme = null;

function applyTheme(theme, remember = false) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selectedTheme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const darkIsActive = selectedTheme === "dark";
    button.setAttribute("aria-label", `Switch to ${darkIsActive ? "light" : "dark"} mode`);
    button.setAttribute("aria-pressed", String(darkIsActive));
    const icon = button.querySelector("[data-theme-icon]");
    const label = button.querySelector("[data-theme-label]");
    if (icon) icon.textContent = darkIsActive ? "\u2600" : "\u263E";
    if (label) label.textContent = darkIsActive ? "Light" : "Dark";
  });
  if (remember) {
    try {
      window.localStorage.setItem("iydi-theme", selectedTheme);
      savedTheme = selectedTheme;
    } catch {
      savedTheme = selectedTheme;
    }
  }
}

applyTheme(savedTheme || (themePreference.matches ? "dark" : "light"));
document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
  });
});
themePreference.addEventListener?.("change", (event) => {
  if (!savedTheme) applyTheme(event.matches ? "dark" : "light");
});

const menuButton = document.querySelector("#menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

function setMenuOpen(open) {
  if (!menuButton || !primaryNavigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  primaryNavigation.dataset.open = String(open);
}

if (menuButton && primaryNavigation) {
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (menuButton.getAttribute("aria-expanded") !== "true") return;
    if (event.target instanceof Node && !menuButton.contains(event.target) && !primaryNavigation.contains(event.target)) {
      setMenuOpen(false);
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`IYDI enquiry: ${String(formData.get("subject") ?? "")}`);
    const body = encodeURIComponent(
      `Name: ${String(formData.get("name") ?? "")}\nEmail: ${String(formData.get("email") ?? "")}\n\n${String(formData.get("message") ?? "")}`,
    );
    const status = document.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "If configured, your email application will open with a draft. The message has not been sent.";
    }
    window.location.href = `mailto:impactyouthd@gmail.com?subject=${subject}&body=${body}`;
  });
}

const heroSlideshow = document.querySelector("[data-hero-slideshow]");
if (heroSlideshow) {
  const slides = Array.from(heroSlideshow.querySelectorAll(".hero-slide"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeSlide = 0;
  let heroTimer;
  const stopHero = () => window.clearInterval(heroTimer);
  const startHero = () => {
    stopHero();
    if (reducedMotion.matches || document.hidden || slides.length < 2) return;
    heroTimer = window.setInterval(() => {
      slides[activeSlide].classList.remove("is-active");
      activeSlide = (activeSlide + 1) % slides.length;
      slides[activeSlide].classList.add("is-active");
    }, 6000);
  };
  document.addEventListener("visibilitychange", startHero);
  reducedMotion.addEventListener?.("change", startHero);
  startHero();
}
const eventGalleries = {
  "impact-business-innovation-summit-2026": [
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.13.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.14 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.14.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.15.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.16 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.16.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.22 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.22.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.23 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.23.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.24 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.24.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.25 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.25 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.25.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.26 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.26.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.27 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.27.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.28 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.28.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.29 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.29.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.30 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.30.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.31 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.31.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.32 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.32 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.32.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.33.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.39.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.40 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.40.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.41 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.41.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.42 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.42.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.44 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.44.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.45 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.45.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.46.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.47.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.48.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.49 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.49.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.50.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.52 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.52.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.53.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.54 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.54 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.54.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.57 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.57.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.58 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.58.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.43.59.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.00 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.00 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.00.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.01.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.03.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.04 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.04.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.06 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.06 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.06.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.07.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.11.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.13 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.13.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.14 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.14.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.15 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.15 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.15.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.16.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.17 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.17 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.17.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.18 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.18.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.19 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.19.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.20 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.20.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.21 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.21.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.22 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.22.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.23 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.23 (2).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.23.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.24 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.24.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.25 (1).jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
    { src: "images/" + encodeURI("WhatsApp Image 2026-10-08 at 06.44.25.jpeg"), alt: "Impact Business Innovation Summit 2026 â€” IYDI event photograph", caption: "Impact Business Innovation Summit 2026 â€” IYDI event photograph" },
  ],
};

const lightbox = document.querySelector("#photo-lightbox");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxCount = document.querySelector("[data-lightbox-count]");
const lightboxPrevious = document.querySelector("[data-lightbox-previous]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
let activePhotos = [];
let activePhotoIndex = 0;

function updateLightbox() {
  const photo = activePhotos[activePhotoIndex];
  if (!photo || !lightboxImage || !lightboxCaption || !lightboxCount) return;
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxImage.hidden = false;
  lightboxCaption.textContent = photo.caption ?? photo.alt;
  lightboxCount.textContent = `${activePhotoIndex + 1} / ${activePhotos.length}`;
  if (lightboxPrevious instanceof HTMLButtonElement) lightboxPrevious.hidden = activePhotos.length < 2;
  if (lightboxNext instanceof HTMLButtonElement) lightboxNext.hidden = activePhotos.length < 2;
}

function moveLightbox(step) {
  if (!activePhotos.length) return;
  activePhotoIndex = (activePhotoIndex + step + activePhotos.length) % activePhotos.length;
  updateLightbox();
}

document.querySelectorAll("[data-event-gallery]").forEach((gallery) => {
  if (!(gallery instanceof HTMLElement)) return;
  const eventId = gallery.dataset.eventGallery;
  const photos = eventId ? eventGalleries[eventId] : undefined;
  if (!photos || photos.length === 0) return;

  const emptyState = gallery.querySelector("[data-gallery-empty]");
  if (emptyState) emptyState.remove();

  photos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = "photo-card";
    button.type = "button";
    button.setAttribute("aria-label", `View photograph: ${photo.alt}`);
    button.dataset.photoIndex = String(index);
    button.dataset.eventId = eventId;

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = "lazy";
    image.decoding = "async";
    button.append(image);

    const caption = document.createElement("span");
    caption.textContent = photo.caption ?? photo.alt;
    button.append(caption);
    gallery.append(button);
  });
});

const revealMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !revealMotionPreference.matches) {
  const revealTargets = Array.from(document.querySelectorAll(
    ".page-hero > .container, .section > .container, .summit-band > .container, .join-band > .container, .values-band > .container, .site-footer > .container, .programme-card, .contact-card, .values-grid article",
  )).filter((target) => !target.querySelector("[data-event-gallery]"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    if (target.matches(".programme-card, .contact-card, .values-grid article")) {
      target.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    }
    revealObserver.observe(target);
  });
}

document.querySelectorAll(".photo-card[data-event-id]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!(lightbox instanceof HTMLDialogElement)) return;
    const photos = eventGalleries[button.dataset.eventId];
    const index = Number(button.dataset.photoIndex);
    if (!photos || !Number.isInteger(index) || !photos[index]) return;
    activePhotos = photos;
    activePhotoIndex = index;
    updateLightbox();
    lightbox.showModal();
    if (lightboxClose instanceof HTMLButtonElement) lightboxClose.focus();
  });
});

if (lightbox instanceof HTMLDialogElement) {
  lightboxPrevious?.addEventListener("click", () => moveLightbox(-1));
  lightboxNext?.addEventListener("click", () => moveLightbox(1));
  lightboxClose?.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
  lightbox.addEventListener("close", () => {
    activePhotos = [];
    if (lightboxImage) {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
      lightboxImage.hidden = true;
    }
    if (lightboxCaption) lightboxCaption.textContent = "";
    if (lightboxCount) lightboxCount.textContent = "";
  });
}
