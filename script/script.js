let englishKey = "fromEnglish.json";
let spanishKey = "fromSpanish.json"
let portugueseKey = "fromPortuguese.json"


async function main(translateFrom,translateTo) {
    console.log('comienzo de ejecucion de main')
    let translations = await getText(translateFrom);

    if (translations) {
        console.log('segundo paso de main')
        // Busca todos los elementos que contienen texto
        let elementsToTranslate = document.querySelectorAll('*:not(script):not(style):not(html):not(head)');

        // Itera sobre los elementos y cambia sus textos según la clave del JSON
        elementsToTranslate.forEach(element => {

            console.log('tercer paso de main')
            let textContent = element.textContent.trim();
            if (translations[textContent]) {
                // Si hay múltiples traducciones, elige la indicada
                console.log('cuarto paso de main')
                let translation = translations[textContent][translateTo];
                element.textContent = translation;
                console.log('main runed')
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

//acá estamos en la version de la pagina en ingles
let spanishButton = document.getElementById('spanishBut');
let portugueseButton = document.getElementById('portugueseBut');
let englishButton = document.getElementById('englishBut');

//acá estamos en la version de la pagina en espanol
let botonEspanol = document.getElementById('botonEspanol');
let botonPortugues = document.getElementById('botonPortugues');
let botonIngles = document.getElementById('botonIngles');

//acá estamos en la version de la pagina en portugues
let botaoEspanhol = document.getElementById('botaoEspanhol')
let botaoPortugues = document.getElementById('botaoPortugues')
let botaoIngles = document.getElementById('botaoIngles')

//acá estamos en la version de la pagina en ingles
spanishButton.onclick = function(){
    main(englishKey,0);
    spanishButton.id = "botonEspanol"
    portugueseButton.id = "botonPortugues"
    englishButton.id = "botonIngles"
    console.log('boton español tocado')
};
portugueseButton.onclick = function(){
    main(englishKey,1)
    spanishButton.id = "botaoEspanhol"
    portugueseButton.id = "botaoPortugues"
    englishButton.id = "botaoIngles"
    console.log('boton portugues tocado')
}
englishButton.onclick = function(){
    spanishButton.id = "spanishBut"
    portugueseButton.id = "portugueseBut"
    englishButton.id = "englishBut"
    console.log('boton ingles tocado')
}

//acá estamos en la version de la pagina en espanol

botonEspanol.onclick = function(){
    spanishButton.id = "botonEspanol"
    portugueseButton.id = "botonPortugues"
    englishButton.id = "botonIngles"
    console.log('boton espanol tocado')
};
botonPortugues.onclick = function(){
    main(spanishKey,1)
    spanishButton.id = "botaoEspanhol"
    portugueseButton.id = "botaoPortugues"
    englishButton.id = "botaoIngles"
    console.log('boton portugues tocado')
}
botonIngles.onclick = function(){
    main(spanishKey,0)
    spanishButton.id = "spanishBut"
    portugueseButton.id = "portugueseBut"
    englishButton.id = "englishBut"
    console.log('boton ingles tocado')
}

//acá estamos en la version de la pagina en portugues

botaoEspanhol.onclick = function(){
    main(portugueseKey,0);
    spanishButton.id = "botonEspanol"
    portugueseButton.id = "botonPortugues"
    englishButton.id = "botonIngles"
    console.log('boton español tocado');
};
botaoPortugues.onclick = function(){
    spanishButton.id = "botaoEspanhol"
    portugueseButton.id = "botaoPortugues"
    englishButton.id = "botaoIngles"
    console.log('boton portugues tocado')
}
botaoIngles.onclick = function(){
    main(portugueseKey,1)
    spanishButton.id = "botaoEspanhol"
    portugueseButton.id = "botaoPortugues"
    englishButton.id = "botaoIngles"
    console.log('boton portugues tocado')
}