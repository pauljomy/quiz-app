const toggle = document.querySelector("input[type='checkbox']");

toggle?.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark");
});

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

localStorage.theme = document.documentElement.classList.contains("dark")
  ? "dark"
  : "light";
