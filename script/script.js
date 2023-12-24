const response = fetch("spanish-translation.json");
const translations = await response.json();
const translatedText = translations["Full-Stack Web Developer"];

console.log(translatedText);