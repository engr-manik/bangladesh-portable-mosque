// IMPORTANT: Replace this with the official, monitored project email before publishing.
const OFFICIAL_EMAIL = "YOUR-OFFICIAL-EMAIL@example.com";

const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-en][data-bn]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageToggle.textContent = language === "en" ? "বাংলা" : "English";
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "bn" : "en"));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (OFFICIAL_EMAIL.includes("bpmcharity@yahoo.com")) {
    alert("Website setup reminder: please add the official email address in script.js before using this form.");
    return;
  }
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website enquiry: ${form.get("interest")}`);
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nInterested in: ${form.get("interest")}\n\nMessage:\n${form.get("message")}`
  );
  window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
});
