// File name: index.js

const map = L.map("map").setView(
  [30.3753, 69.3451],
  5
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }
).addTo(map);
