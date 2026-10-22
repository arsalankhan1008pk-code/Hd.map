// File name: index.js
// Pakistan Street Map + Live GPS

const map = L.map("map", {
  zoomControl: true
}).setView([30.3753, 69.3451], 5);

L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    minZoom: 4,
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }
).addTo(map);

// Pakistan ka map screen par theek fit karein
setTimeout(() => map.invalidateSize(), 300);

// GPS marker aur accuracy circle
let marker = null;
let accuracyCircle = null;
let watchId = null;

// Current location button
const gpsControl = L.control({
  position: "topleft"
});

gpsControl.onAdd = function () {
  const button = L.DomUtil.create("button");
  button.textContent = "📍 My Location";
  button.style.cssText =
    "padding:10px;background:white;border:1px solid #777;border-radius:8px;font-size:15px";

  L.DomEvent.disableClickPropagation(button);

  button.onclick = function () {
    if (!navigator.geolocation) {
      alert("Aap ke browser mein GPS support nahi hai.");
      return;
    }

    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
    }

    watchId = navigator.geolocation.watchPosition(
      function (position) {
        const point = [
          position.coords.latitude,
          position.coords.longitude
        ];

        const accuracy = position.coords.accuracy;

        if (marker) {
          marker.setLatLng(point);
        } else {
          marker = L.marker(point)
            .addTo(map)
            .bindPopup("Aap ki current location");
        }

        if (accuracyCircle) {
          accuracyCircle.setLatLng(point);
          accuracyCircle.setRadius(accuracy);
        } else {
          accuracyCircle = L.circle(point, {
            radius: accuracy,
            color: "#087443",
            fillOpacity: 0.12
          }).addTo(map);
        }

        map.setView(point, 16);
      },
      function () {
        alert(
          "Phone ki Location ON karein aur browser ko permission dein."
        );
      },
      {
        enableHighAccuracy: true,
        maximumAge: 2000,
        timeout: 20000
      }
    );
  };

  return button;
};

gpsControl.addTo(map);
