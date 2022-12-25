import translations from "./translations.js";

// const languageSelector =  document.querySelector('#langSelect');
// languageSelector.addEventListener("change", (event) => {
//     debugger
//   setLanguage(event.target.value);
//   localStorage.setItem("lang", event.target.value);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
//   setLanguage(language);
// });

// const setLanguage = (language) => {
//   const elements = document.querySelectorAll("[data-i18n]");
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute("data-i18n");
//     element.textContent = translations[language][translationKey];
//   });
//   document.dir = language === "ar" ? "rtl" : "ltr";
// };


function onSelectLang() {
    setLanguage(document.getElementById("language-select").value);
    localStorage.setItem("lang", document.getElementById("language-select").value);
}
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
});

const setLanguage = (language) => {
    debugger
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
};