const fonts = ["serif", "sans", "mono", "dyslexic"];
const fontLabels = {
  serif: "Serif",
  sans: "Sans",
  mono: "Monospace",
  dyslexic: "Dyslexic",
};

// Get font data from local storage
const currentFont = localStorage.getItem("font");

function getPreferFont() {
  // return font value in local storage if it is set
  if (currentFont && fonts.includes(currentFont)) return currentFont;
  // default font
  return "serif";
}

let fontValue = getPreferFont();

function setFontPreference() {
  localStorage.setItem("font", fontValue);
  reflectFontPreference();
}

function reflectFontPreference() {
  document.firstElementChild.setAttribute("data-font", fontValue);

  const btn = document.querySelector("#font-btn");
  btn?.setAttribute("aria-label", fontLabels[fontValue]);
  // Update inner text/icon if we placed text node
  const labelNode = btn?.querySelector("#font-btn-label");
  if (labelNode) {
    labelNode.textContent = fontLabels[fontValue][0];
  }
}

// set early so no page flashes / CSS is made aware
reflectFontPreference();

window.addEventListener("load", () => {
  function setFontFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectFontPreference();

    document.querySelector("#font-btn")?.addEventListener("click", () => {
      const currentIndex = fonts.indexOf(fontValue);
      fontValue = fonts[(currentIndex + 1) % fonts.length];
      setFontPreference();
    });
  }

  setFontFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setFontFeature);
});
