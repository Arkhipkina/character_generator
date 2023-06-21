let buttonCreate = document.querySelector(".button_create");
let characters = document.querySelector(".characters");


let listMenNames = ["Марк", "Ростислав"];
let listMenSurnames = ["Лебедев", "Титов", "Иванов"];

let listWomenNames = ["Марго", "Даша", "Кристина"];
let listWomenSurnames = ["Архипкина", "Кудряшкина", "Лилипутова"];

let listProfessions = ["Врач", "Учитель", "Алхимик"]; 

buttonCreate.addEventListener("click", () => {
    let character = {};

    let age = Math.floor(Math.random() * 32);
    let randomProfessions = Math.floor(Math.random() * listProfessions.length);

    let gender = document.querySelector(".check").checked;
    if (gender) {
        let randomWomenNames = Math.floor(Math.random() * listWomenNames.length);
        let randomWomenSurnames = Math.floor(Math.random() * listWomenSurnames.length);

        character = {
            name: listWomenNames[randomWomenNames],
            surname: listWomenSurnames[randomWomenSurnames],
            profession: listProfessions[randomProfessions],
            age: age
        };
    } else {
        let randomMenNames = Math.floor(Math.random() * listMenNames.length);
        let randomMenSurnames = Math.floor(Math.random() * listMenSurnames.length);

        character = {
            name: listMenNames[randomMenNames],
            surname: listMenSurnames[randomMenSurnames],
            profession: listProfessions[randomProfessions],
            age: age
        };
    };
    
    let newDiv = document.createElement("div");
    for (let userInfo in character) {
        let paragraph = document.createElement("p");
        let text = `${userInfo}: ${character[userInfo]}`;
        paragraph.append(text);
        newDiv.append(paragraph);
    };
    characters.append(newDiv);
});