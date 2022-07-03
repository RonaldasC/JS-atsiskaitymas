/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict'

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        // žemiau eilutes būtų galima supaprastinti return this.budget > 100000000
        //taip pat, netikslinga čia naudoti template literals. Jie skirti tik išvedimui (console, innerHTML ir pan), bet ne skaičiavimams ar logikai
        if (`${this.budget}` > 100000000) {
        console.log(true) 
        } else { 
        console.log(false)
        };
    }
}

const biudzetas = new Movie('Jurassic Park', 'Steven Spielberg', 1046000000);
biudzetas.wasExpensive();