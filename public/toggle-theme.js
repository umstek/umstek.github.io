function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeMode() {
  const stored = localStorage.getItem("theme");
  return stored || "system";
}

function resolveTheme(mode) {
  return mode === "system" ? getSystemTheme() : mode;
}

let themeMode = getThemeMode();

function setPreference() {
  localStorage.setItem("theme", themeMode);
  reflectPreference();
}

function updateIconVisibility() {
  const btn = document.querySelector("#theme-btn");
  if (!btn) return;

  const sun = btn.querySelector(".theme-icon-sun");
  const moon = btn.querySelector(".theme-icon-moon");
  const system = btn.querySelector(".theme-icon-system");

  if (sun) {
    sun.style.transform = themeMode === "light"
      ? "translate(-50%, -50%) scale(1) rotate(0deg)"
      : "translate(-50%, -50%) scale(0) rotate(90deg)";
  }
  if (moon) {
    moon.style.transform = themeMode === "dark"
      ? "translate(-50%, -50%) scale(1) rotate(0deg)"
      : "translate(-50%, -50%) scale(0) rotate(90deg)";
  }
  if (system) {
    system.style.transform = themeMode === "system"
      ? "translate(-50%, -50%) scale(1) rotate(0deg)"
      : "translate(-50%, -50%) scale(0) rotate(90deg)";
  }
}

function reflectPreference() {
  const resolved = resolveTheme(themeMode);
  document.firstElementChild.setAttribute("data-theme", resolved);
  document.firstElementChild.setAttribute("data-theme-mode", themeMode);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeMode);

  updateIconVisibility();

  const body = document.body;
  if (body) {
    const bgColor = window.getComputedStyle(body).backgroundColor;
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

reflectPreference();

window.addEventListener("load", () => {
  function setThemeFeature() {
    reflectPreference();

    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      if (themeMode === "light") themeMode = "dark";
      else if (themeMode === "dark") themeMode = "system";
      else themeMode = "light";
      setPreference();
    });
  }

  setThemeFeature();

  document.addEventListener("astro:after-swap", setThemeFeature);
});

document.addEventListener("astro:before-swap", event => {
  const bgColor = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");

  event.newDocument
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bgColor);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (themeMode === "system") {
      reflectPreference();
    }
  });
