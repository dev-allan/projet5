const idPanier = document.getElementById('panier');

let params = new URLSearchParams(document.location.search.substring(1));
let lentille = params.get("lentille");

function IndexLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        let produit = localStorage.getItem(localStorage.key(i));
        let jsonParseProduit = JSON.parse(produit);
        let camera = localStorage.key(i);

        for (let i = 0; i < jsonParseProduit.option.length; i++){
            if (lentille === jsonParseProduit.option[i]) {
                let choixLentille = jsonParseProduit.option.filter(item => item === lentille);
                console.log(camera.name);
                console.log(choixLentille);
                localStorage.setItem(camera, choixLentille)
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