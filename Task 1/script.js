/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
//new pull req
//Tomas Stirblys
//Result with CSS properties
const output = document.querySelector("#output");
output.style.paddingLeft = '10vh'; 
output.style.color = '#505050';

//Function for calculation
document.querySelector("#submit-btn").onclick = (event) => {

    const inputvalue = document.querySelector("#search");
    
    const pounds = inputvalue.value * 2.2046;
    const grams = inputvalue.value  / 0.001;
    const ounce = inputvalue.value  * 35.274;

    output.innerText = 'Results:' + '\n' 
    + 'Pounds: ' + pounds + ' lb' + '\n' 
    + 'Grams: ' + grams + ' g' + '\n' 
    + 'Ounce: ' + ounce + ' oz';
    event.preventDefault();
};
