/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
//new pull req
const ENDPOINT = 'cars.json';
printJSON();

async function printJSON() {
    const response = await fetch(ENDPOINT);
    const json = await response.json();
    printresult(json);
}

function printresult(data){
    console.log(data);
    const alldata = document.querySelector("#output");
    for (let i = 0; i < Object.keys(data).length; i++) {
        //Create div
        const user = document.createElement('div');
        user.innerHTML = 'Gamintojas: ' +  data[i].brand + "<br/>"+ "<br/>" + 'Modeliai: ' + data[i].models + "<br/>" + "<br/>" ;
        user.className = 'output-container';
        alldata.appendChild(user);
        };
}
