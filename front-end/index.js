const listCamera = document.getElementById('listCamera');
const img = document.querySelector('img');

let Resquest = new XMLHttpRequest();

Resquest.open('GET', 'http://localhost:3000/api/cameras')
Resquest.onload = function() {
  let theData = JSON.parse(Resquest.responseText);
  renderHTML(theData);
};
  
Resquest.send();

console.log(Resquest);

function renderHTML(data) {
  for (let i = 0; i < data.length; i++) {
    listCamera.innerHTML += `<li class="articles__lists--item cards__item">
    <div class="cards__item__thumb">
    <img src = "${data[i].imageUrl}" alt = "image d'un appareil photo ancien" style="heigth:200px; width:200px;"/>
    </div>
    <div class="cards__item__body">
      <h3 class="cards__item__body--title">Appareil photo vintage ${data[i].name}</h3>
      <p class="cards__item__body--name"><strong>Marque : </strong>${data[i].name}</p>
      <p class="cards__item__body--lenses"><strong>Lentilles : </strong>${data[i].lenses}</p>
      <p class="cards__item__body--description"><strong>Description : </strong>${data[i].description}...</p>
      <p class="cards__item__body--price"><strong>Prix : </strong>${data[i].price}€</p>
      <div class="cards__item--button">
      <a class="btn" href="produit.html?id=${data[i]._id}" aria-label="Sélectionner l’appareil photo vintage ${
      data[i].name
    }">Voir les détails</a>
      </a>
    </div>
    </div>
  </li>`;
  }

};

