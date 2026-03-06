const toggle = document.querySelector(
  "input[type='checkbox']",
) as HTMLInputElement;

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  toggle.checked = true;
}

toggle?.addEventListener("change", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  localStorage.theme = isDark ? "dark" : "light";
});
