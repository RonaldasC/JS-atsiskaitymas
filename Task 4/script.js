/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    data;
    returnBrand(data);
  })
  .catch((err) => console.log(err));

/*buvau iskėlęs į atskirą failą funkciją, bet nusprendziau grąžint,
nes užduotis to neprašė nors ir kodas švaresnis atrodė*/

function returnBrand(arg) {
  for (let i = 0; i < arg.length; i++) {
    {
      let brand = arg[i].brand;
      let model = arg[i].models.join(`" "`);
      const cardForDisplayBrand = document.createElement("div");
      const cardForDisplayModel = document.createElement("div");
      const box = document.getElementById("output");
      cardForDisplayBrand.classList.add("brand-card");
      cardForDisplayModel.classList.add("model-card");
      cardForDisplayBrand.innerHTML = `<H2>${brand}</H2>`;
      cardForDisplayModel.innerHTML = `<H3>${model}</H3>`;
      box.append(cardForDisplayBrand);
      cardForDisplayBrand.append(cardForDisplayModel);
    }
  }
}
