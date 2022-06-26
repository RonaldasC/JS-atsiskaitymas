/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict'
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// function showObjectKeys(objArg) {
//   const objValues = Object.values(objArg);
// console.log(objValues);
// }
// showObjectKeys(audi);

/**** nesupratau salygos ar keys grazint reik ar values todel parasiau abu variantus */

function showObjectKeys(objArg) {
  const objkeys = Object.keys(objArg);
console.log(objkeys);
}

showObjectKeys(audi);
