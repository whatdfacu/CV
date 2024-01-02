const languageKeys = {
    english: "fromEnglish.json",
    spanish: "fromSpanish.json",
    portuguese: "fromPortuguese.json",
  };
  
  async function main(translateTo, languageKey) {
    let translations = await getText(languageKey);
  
    if (translations) {
      // Busca todos los elementos que contienen texto
      let elementsToTranslate = document.querySelectorAll(
        "*:not(script):not(style):not(html):not(head)"
      );
  
      // Itera sobre los elementos y cambia sus textos según la clave del JSON
      elementsToTranslate.forEach((element) => {
        let textContent = element.textContent.trim();
        if (translations[textContent]) {
          // Si hay múltiples traducciones, elige la indicada
          let translation = translations[textContent][translateTo];
          element.textContent = translation;
          console.log(`main(${translateTo}, ${languageKey}) runed`);
        }
      });
    }
  }
  
  async function getText(file) {
    try {
      let myObject = await fetch(file);
  
      if (!myObject.ok) {
        throw new Error(`Error: ${myObject.status} - ${myObject.statusText}`);
      }
  
      let translations = await myObject.json();
      return translations;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  let spanishButton = document.getElementById("spanishBut");
  let portugueseButton = document.getElementById("portugueseBut");
  let englishButton = document.getElementById("englishBut");
  
  // Ahora, los eventos del botón llaman a la función main con el idioma correspondiente
  spanishButton.onclick = function () {
    main(0, languageKeys.english);
    main(1, languageKeys.portuguese);
    console.log("boton español tocado");
  };
  portugueseButton.onclick = function () {
    main(1, languageKeys.english);
    main(1, languageKeys.spanish);
    console.log("boton portugues tocado");
  };
  englishButton.onclick = function () {
    main(0, languageKeys.spanish);
    main(0, languageKeys.portuguese);
    console.log("boton ingles tocado");
  };