//tipos de dados
//String
//Number 01
//Object {}
//boolean trur or false
//Array[]

const map = L.map("mapid").setView([-23.422789, -46.4677688, 13], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos

function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo esta vazio, se sim , não adicionar ao container de fotos
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar o container de imagens
  input.value = "";
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar o campo
  span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {
  //retirar a class .active do botão clicado
  document.querySelectorAll(".button-select button")
  .forEach(button =>  button.classList.remove("active")) // arrow function
   
  
  // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')
  
  // atualizar o meu input hidden com o valor selecionados
  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value

}

function validate(event){

  //validar se lat e lng estão preenchidos
  const needsLatAndLng = false;
  if(needsLatAndLng){
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
}