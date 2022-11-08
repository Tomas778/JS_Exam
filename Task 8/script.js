/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

//Constructor
function Calculator (a, b) {
    this.a = a;
    this.b = b;
    this.sum = a+b;
    this.sub = a-b;
    this.mul = a*b;
    this.div = a/b;
}

const calc1 = new Calculator(10, 5);

console.log(calc1);