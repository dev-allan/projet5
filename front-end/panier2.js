const idPanier = document.getElementById('panier');

let params = new URLSearchParams(document.location.search.substring(1));
let lentille = params.get("lentille");


function IndexLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        return JSON.parse(localStorage.getItem(localStorage.key(i)))
    }
};

let basket = IndexLocalStorage();

let localStorageData = {
    id : basket.id,
    nom : basket.nom,
    prix : basket.prix,
    optionchoisi : lentille,
}

console.log(localStorageData);
let stringify = JSON.stringify(localStorageData)
localStorage.setItem(localStorageData.nom, stringify);



//////////////////////////////////////////////////////////////////////////////////////////



// function IndexLocalStorage(){
//     for (let i = 0; i < localStorage.length; i++) {
//         let jsonParseProduit = JSON.parse(localStorage.getItem(localStorage.key(i)));

//         for (let i = 0; i < jsonParseProduit.option.length; i++){
//             if (lentille === jsonParseProduit.option[i]) {
//                 let choixLentille = jsonParseProduit.option.filter(item => item === lentille);
//                 console.log(jsonParseProduit.nom);
//                 console.log(choixLentille);
//                 localStorage.removeItem(jsonParseProduit);
//                 localStorage.setItem(jsonParseProduit.nom, choixLentille)
//             }
//         };
//     };
// }

// new IndexLocalStorage();