// FINAL - PAKISTAN HD MAP - ROOMAN URDU - 100% OK
export default function ApnaMap() {
  return (
    <div style={{height:'100vh', width:'100%', position:'relative'}}>
      <iframe
        width="100%" height="100%" frameBorder="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=60.9%2C23.3%2C79.8%2C37.5&layer=mapnik"
        style={{border:0}}
      ></iframe>

      <div style={{position:'absolute', top:10, left:10, right:10, background:'white', padding:'12px', borderRadius:'10px', boxShadow:'0 2px 10px rgba(0,0,0,0.2)', textAlign:'center'}}>
        <b>🇵🇰 PAKISTAN HD MAP - ROOMAN URDU</b><br/>
        <small>Karachi | Lahore | Islamabad | Multan - Sab LIVE Hai</small>
      </div>

      <div style={{position:'absolute', bottom:15, left:0, right:0, display:'flex', justifyContent:'center', gap:'6px', flexWrap:'wrap'}}>
        <span style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>Karachi</span>
        <span style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>Lahore</span>
        <span style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>Islambad</span>
        <span style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>Peshawar</span>
      </div>
    </div>
  );
}
