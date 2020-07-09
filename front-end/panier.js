const idPanier = document.getElementById('panier');

let params = new URLSearchParams(document.location.search.substring(1));
let lentille = params.get("lentille");

function IndexLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        localStorage.key(i);
        console.log(localStorage.key(i));
        let produit = localStorage.getItem(localStorage.key(i));
        let jsonParseProduit = JSON.parse(produit);
        let lentilles = localStorage.key(i);
        idPanier.innerHTML += `<div> ${localStorage.key(i)}</div> <div>${jsonParseProduit.prix} € </div>` ;
    
        for (let i = 0; i < jsonParseProduit.option.length; i++){
            if (lentille === jsonParseProduit.option[i]) {
                let choixLentille = jsonParseProduit.option.filter(item => item === lentille);
                console.log(choixLentille);
                // let lentilles = [localStorage.key(i)];
                localStorage.setItem(lentilles, choixLentille)
            }
        };
    };
}

new IndexLocalStorage;

// function ajouteLentilleStorage() {
//     localStorage.key(0);
//     localStorage.setItem("lentille", lentille);
// }

// new ajouteLentilleStorage();