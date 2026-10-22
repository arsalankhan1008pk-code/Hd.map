"use client";
import { useEffect } from 'react';

export default function ApnaMap() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      const L = window.L;
      if (document.getElementById('map') && !document.getElementById('map')._leaflet_id) {
        const map = L.map('map').setView([30.3753, 69.3451], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{height:'100vh', width:'100vw', display:'flex', flexDirection:'column'}}>
      <div style={{background:'#0f172a', color:'white', padding:'10px', textAlign:'center', fontWeight:'bold'}}>
        🇵🇰 PURA PAKISTAN HD MAP - Har Road Gali Clear - Zoom Karo
      </div>
      <div id="map" style={{flex:1}}></div>
    </div>
  );
}
