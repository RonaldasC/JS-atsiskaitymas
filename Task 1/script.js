/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict'

document.getElementById('submit-btn').addEventListener('click', converter);

function converter(event) {
    event.preventDefault();
    let imputValue = document.getElementById('search').value; //čia tikslingiau naudoti const vietoj let, nes tolimesnėje kodo dalyje reikšmė nekinta.
    const lbCalc= Number(imputValue) * 2.2046;
    const gCalc = Number(imputValue) / 0.0010000;
    const ozCalc = Number(imputValue) * 35.274;
    const returnCalcValues = `Svarai - ${lbCalc} (lb) <br> Gramai - ${gCalc} (g) <br> Uncijos - ${ozCalc} (oz)`;
    document.getElementById('output').innerHTML = returnCalcValues;
}