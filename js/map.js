const map = L.map("map").setView([13.5, 124.0], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

let markers = {};

function updateMap(vessels) {
  vessels.forEach(v => {
    if (!v.latitude || !v.longitude) return;

    if (!markers[v.boat_id]) {
      markers[v.boat_id] = L.marker([v.latitude, v.longitude])
        .addTo(map)
        .bindPopup(v.boat_name);
    } else {
      markers[v.boat_id].setLatLng([v.latitude, v.longitude]);
    }
  });
}
