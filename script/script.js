async function main(a) {
    let translations = await getText("spanish-translation.json");

    if (translations) {
        // Busca todos los elementos que contienen texto
        let elementsToTranslate = document.querySelectorAll('*:not(script):not(style):not(html):not(head)');

        // Itera sobre los elementos y cambia sus textos según la clave del JSON
        elementsToTranslate.forEach(element => {
            let textContent = element.textContent.trim();
            if (translations[textContent]) {
                // Si hay múltiples traducciones, elige la primera (índice 0)
                let translation = translations[textContent][a];
                element.textContent = translation;
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


let spanishButton = document.getElementById('spanishBut');
let portuguesehButton = document.getElementById('portugueseBut');
let englishhButton = document.getElementById('englishBut');

spanishButton.onclick = function(){
    main(0);
    console.log('boton español tocado');
};

portuguesehButton.onclick = function(){
    main(1)
    console.log('boton portugues tocado')
}

englishhButton.onclick = function(){
    location.reload()
    console.log('boton ingles tocado')
}