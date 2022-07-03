/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict'

document.getElementById('btn__element').addEventListener('click', paspaudimuSkaiciuokle);

let counter = 0;

function paspaudimuSkaiciuokle() {
    counter++;
    document.getElementById("btn__state").innerHTML = `${counter}`; //kadangi counter neturi jokių html tagų, tikslingiau vietoj innerHTML naudoti innerText
}