import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function AsesmenStasiun({go}){
 const [id,setId]=useState("SIM-DEMO-01");const [open,setOpen]=useState(false);
 const ok=id==="SIM-DEMO-01";
 return <div><Head n="04" t="Asesmen Stasiun"/>
  <div className="g2" style={{gridTemplateColumns:"minmax(150px,.4fr) 1.6fr"}}>
   <div className="card"><b>Pilih Stasiun</b>{["SIM-DEMO-01","CSLN"].map(s=><label key={s} className="kv" style={{cursor:"pointer",background:id===s?"var(--teal2)":"none",color:id===s?"#fff":"inherit",borderRadius:8,padding:"8px",marginTop:6}}><span style={{color:"inherit"}}><input type="radio" checked={id===s} onChange={()=>setId(s)}/> {s}</span></label>)}</div>
   <div style={{display:"grid",gap:12}}>
    <div className="card"><b style={{fontSize:20}}>📍 {id}</b> <span className="pill gy">{ok?"Simulasi":"CORS rill"}</span></div>
    <div className="card"><h3 style={{margin:"0 0 8px"}}>Keputusan Eligibility Engine</h3>
     <div className="kv"><b>Deformasi daratan</b><span className={"pill "+(ok?"ok":"bd")}>{ok?"✓ Memenuhi syarat":"✕ Belum memenuhi"}</span></div>
     <p style={{margin:"8px 0 0"}}><b>Bukti teknis</b></p>
     <ul className="list">{(ok?["Sesi observasi lolos QC","Pasangan observasi tersedia","Periode simulasi terpenuhi"]:["Sesi 058 tidak lengkap (header)","Pasangan observasi belum tersedia","Periode minimum belum terpenuhi"]).map(t=><li key={t}>{ok?"✅":"❌"} {t}</li>)}</ul>
     <div className="kv"><b>Tinggi muka air</b><span className="pill gy">🕒 Bukti belum cukup</span></div></div>
    <div className="card"><h3 style={{margin:0}}>🤖 Rekomendasi AI Agent</h3><p style={{fontSize:13,color:"var(--mut)"}}>{ok?"Periksa sektor refleksi dan konfirmasi satuan sinyal.":"Unggah ulang berkas csln0580.26o dengan header lengkap."}</p>
     <button className="btn p" onClick={()=>setOpen(!open)}>Lihat detail</button>{open&&<pre>{"1. Verifikasi azimut sektor refleksi 90°–270°\n2. Konfirmasi satuan SNR (dB-Hz)\n3. Jalankan ulang QC lalu tinjau hasilnya"}</pre>}
     {ok&&<button className="btn w" onClick={()=>go("modul")}>Ke Modul Analisis →</button>}</div>
   </div></div></div>;
}
