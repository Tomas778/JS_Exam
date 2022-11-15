/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
  //new pull req
let count = 0;
  document.getElementById("btn__element").onclick = () => {
  count += 1;
  document.querySelector("#btn__state").innerHTML = count;
};