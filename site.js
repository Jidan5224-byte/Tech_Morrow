function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  const button = document.querySelector("#theme-toggle");
  if (button) button.textContent = dark ? "☀" : "☾";
  if (button) {
    const label = dark ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", label);
    button.title = label;
  }
}

const savedTheme = localStorage.getItem("techMorrowTheme") || "light";
applyTheme(savedTheme);

const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("techMorrowTheme", nextTheme);
    applyTheme(nextTheme);
  });
}
