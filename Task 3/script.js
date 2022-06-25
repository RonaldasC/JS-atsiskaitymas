/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";

const ENDPOINT = "https://api.github.com/users";

async function getResponse(arg) {
  const response = await fetch(arg);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  returnUserAvatar(data);
}

function returnUserAvatar(arg) {
  for (let i = 0; i < arg.length; i++) {
    let user = arg[i].login;
    let avatar = arg[i].avatar_url;
    const box = document.getElementById("output");
    const cardForDisplayBrand = document.createElement("div");
    const cardForDisplayModel = document.createElement("div");
    cardForDisplayBrand.classList.add("brand-card");
    cardForDisplayModel.classList.add("model-card");
    cardForDisplayBrand.innerHTML = `<H2>${user}</H2>`;
    cardForDisplayModel.innerHTML = `<img src="${avatar}" alt="face" height="80px" width="70px"></img>`;
    box.append(cardForDisplayBrand);
    cardForDisplayBrand.append(cardForDisplayModel);
  }
}

function removeElement() {
  const element = document.getElementById("message");
  element.remove();
}

function displayUsers() {
  removeElement();
  getResponse(ENDPOINT);
}

document.getElementById("btn").addEventListener("click", displayUsers);
