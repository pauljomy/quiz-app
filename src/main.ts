import { quizzes } from "./data.json";

const toggle = document.querySelector(
  "input[type='checkbox']",
) as HTMLInputElement;
const headingEl = document.getElementById("heading");
const questionsEl = document.getElementById("questions");

const logoEL = document.getElementById("logo");

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.dataset.subject === "html") {
    htmlQuestions();
  }
});

function htmlQuestions() {
  quizzes.forEach((quiz) => {
    console.log(quiz.title);
  });
}

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  toggle.checked = true;
}

toggle?.addEventListener("change", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  localStorage.theme = isDark ? "dark" : "light";
});
