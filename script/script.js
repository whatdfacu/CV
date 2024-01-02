let englishKey = "fromEnglish.json";
let spanishKey = "fromSpanish.json";
let portugueseKey = "fromPortuguese.json";

async function mainEnglish(translateTo) {
  let translations = await getText(englishKey);

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
        console.log("mainEnglish runed");
      }
    });
  }
}

async function mainSpanish(translateTo) {
  let translations = await getText(spanishKey);

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
        console.log("mainSpanish runed");
      }
    });
  }
}

async function mainPortughese(translateTo) {
  let translations = await getText(portugueseKey);

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
        console.log("mainPortughese runed");
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

//acá estamos en la version de la pagina en ingles
spanishButton.onclick = function () {
  mainEnglish(0);
  mainPortughese(1);
  console.log("boton español tocado");
};
portugueseButton.onclick = function () {
  mainEnglish(1);
  mainSpanish(1);
  console.log("boton portugues tocado");
};
englishButton.onclick = function () {
  mainSpanish(0);
  mainPortughese(0);
  console.log("boton ingles tocado");
};
