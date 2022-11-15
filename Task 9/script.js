/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
//new pull req
//Constructor
function Movie (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;

    this.wasExpensive = function () {
    return budget > 100000000 ? true : false
    }
}

const Matrix = new Movie('Matrix', 'Wachowski', 999999999999999).wasExpensive();
console.log(Matrix); // TRUE

const Matrix2 = new Movie('Matrix2', 'Wachowski', 9999).wasExpensive();
console.log(Matrix2); //FALSE