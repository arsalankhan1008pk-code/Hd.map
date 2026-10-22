export default function Page() {
  return (
    <div style={{height:'100vh', width:'100vw', position:'relative'}}>
      <iframe
        title="Pakistan HD Map - Roman Urdu"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{border:0}}
        src="https://www.openstreetmap.org/export/embed.html?bbox=60.0%2C23.0%2C80.0%2C38.0&layer=mapnik"
      ></iframe>

      <div style={{position:'absolute', top:15, left:15, right:15, background:'white', padding:'12px', borderRadius:'12px', textAlign:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
        <b>🇵🇰 PAKISTAN HD MAP - ROOMAN URDU</b><br/>
        <span style={{fontSize:'12px'}}>Karachi | Lahore | Islamabad | Peshawar | Multan</span>
      </div>

      <div style={{position:'absolute', bottom:20, left:10, right:10, display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap'}}>
        <div style={{background:'white', padding:'8px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold', boxShadow:'0 2px 6px rgba(0,0,0,0.2)'}}>Karachi</div>
        <div style={{background:'white', padding:'8px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold', boxShadow:'0 2px 6px rgba(0,0,0,0.2)'}}>Lahore</div>
        <div style={{background:'white', padding:'8px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold', boxShadow:'0 2px 6px rgba(0,0,0,0.2)'}}>Islamabad</div>
      </div>
    </div>
  );
}
