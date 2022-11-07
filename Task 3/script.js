/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").onclick = showUsers;
//showUsers();


async function showUsers() {
    await fetch(ENDPOINT)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.statusText);
          }
        })
        .then((data) => {
          renderUserCard(data);
          return data;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const renderUserCard = (users) => {

        //Delete message if all good
        document.querySelector("#message").style.display = 'none';
//Main div
        const allcontacts = document.querySelector("#output")
        for (let i = 0; i < Object.keys(users).length; i++) {
//Create contact div for every user with Hyperlink
        const user = document.createElement('a');
        user.setAttribute('href', users[i].avatar_url);
        user.textContent = users[i].login ;
        user.className = 'output-cointainer';
        allcontacts.appendChild(user);
        };
      };   


