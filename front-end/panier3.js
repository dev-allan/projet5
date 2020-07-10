const idPanier = document.getElementById('panier');

let params = new URLSearchParams(document.location.search.substring(1));
let lentille = params.get("lentille");


function IndexLocalStorage (){
    for (let i = 0; i < localStorage.length; i++) {
    return JSON.parse(localStorage.getItem(localStorage.key(i)))
    }
};

new IndexLocalStorage();

const localStorageData = {
    id : IndexLocalStorage().id,
    nom : IndexLocalStorage().nom,
    prix : IndexLocalStorage().prix,
    option : lentille,
}

const stringify = JSON.stringify(localStorageData) 
localStorage.setItem(localStorageData.option + ' ' + localStorageData.nom, stringify);

let panierDeCamera = [localStorageData,];

console.log(panierDeCamera);

for (let i = 0; i < localStorage.length; i++) {
    localStorage.removeItem(localStorage.key(i))
};

// for (let i = 0; i < localStorage.length; i++) {
//     const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
//     console.log(data);

//     const localStorageData = {
//         id : data.id,
//         nom : data.nom,
//         prix : data.prix,
//         optionchoisi : localStorage.getItem('option'),
//     }

//     const stringify = JSON.stringify(localStorageData)
//     localStorage.setItem(localStorageData.nom, stringify);
    
// };