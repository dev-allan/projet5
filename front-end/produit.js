const detailDuProduit = document.getElementById('descriptionCamera');
const img = document.querySelector('img');

//fonction permettant de récupérer l'ID de l'url
function getParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let id = getParamByName('id');

let Resquest = new XMLHttpRequest();

Resquest.open('GET', "http://localhost:3000/api/cameras/"+id, true)
Resquest.onload = function() {
  let theData = JSON.parse(Resquest.responseText);
  renderHTML(theData);
};
  
Resquest.send();

function renderHTML(data) {
      detailDuProduit.innerHTML += `<li class="articles__lists--item cards__item">
      <div class="cards__item__thumb">
      <img src = "${data.imageUrl}" alt = "image d'un appareil photo ancien" style="heigth:200px; width:200px;"/>
      </div>
      <div class="cards__item__body">
        <h3 class="cards__item__body--title">Appareil photo vintage ${data.name}</h3>
        <p class="cards__item__body--name"><strong>Marque : </strong>${data.name}</p>
        <p class="cards__item__body--lenses"><strong>Lentilles : </strong>${data.lenses}</p>
        <p class="cards__item__body--description"><strong>Description : </strong>${data.description}...</p>
        <p class="cards__item__body--price"><strong>Prix : </strong>${data.price}€</p>
        <div class="cards__item--button">
        </a>
      </div>
      </div>
    </li>`;

    for (let i = 0; i < data.lenses.length; i++) {
      detailDuProduit.innerHTML +=  `<input type="radio" name="lentille" value="${data.lenses[i]}" id="${data.lenses[i]}" required /> <label for="${data.lenses[i]}">${data.lenses[i]}</label><br />`
    }
    detailDuProduit.innerHTML += `<button type="submit" class="button" data-id="${id}" data-name="${data.name}" data-price="${data.price}">Ajouter au panier</button>
    `
    let addBasket = document.getElementsByTagName('button');

    if (addBasket.length){
    addBasket[0].addEventListener("click", function (e) {
        e.stopPropagation();
        localStorage.setItem("id", id);
    })
};
};

