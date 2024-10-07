// {
let map = L.map('property-map').setView({lat: 41.816651, lng: -87.616797}, 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
// } Uncomment to save variables from global scope
