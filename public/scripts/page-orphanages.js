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
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {

  // coment
  // create poupup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src = "/images/arrow-white.svg"></a><a href="/delete-orphanage?id=${id}"><img src = "/images/exclude.png" weight="20px" height="20px"></a> `)
  

  //create and add marker
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  addMarker(orphanage)
})