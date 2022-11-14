/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
//new pull req
const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];


function getUserAverageAge(users) {   // Funkcija amziaus vidurkiui
  return users.reduce((accumulator, object) => {
    return accumulator + object.age / users.length;
  }, 0);
}

console.log(getUserAverageAge (users)); // Amžiaus vidurkis

function getUsersNames(users) {  // Funkcija array kopija, bet tik su vardais
  const result = users.map(a => ({...a})); // array klonas
  result.forEach(object => {
    delete object['id'];
    delete object['age'];
  });
  return result;
}

console.log(users);  //Original Object
console.log(getUsersNames(users)); // Only user names
