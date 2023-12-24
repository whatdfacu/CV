getText("spanish-translation.json");

async function getText(file){
    let myObject = await fetch(file);
    let myText = await myObject.text();
    console.log(myText);

}