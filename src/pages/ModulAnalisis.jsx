import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function ModulAnalisis({go}){
 const [st,setSt]=useState("SIM-DEMO-01");const [run,setRun]=useState(0);const [req,setReq]=useState(null);
 const start=()=>{setRun(1);setTimeout(()=>setRun(2),1200)};
 return <div><Head n="05" t="Modul Analisis" sub="Pilih stasiun dan periksa syarat sebelum menjalankan modul"/>
  <div className="card row" style={{alignItems:"center"}}><b>📍 Stasiun</b><select value={st} onChange={e=>setSt(e.target.value)} style={{flex:1}}>{STATIONS.map(s=><option key={s.id}>{s.id}</option>)}</select><span className="pill ok">{st.startsWith("SIM")?"Simulasi":"CORS rill"}</span></div>
  <div className="g2">{MODUL.map(m=><div key={m.k} className={"card"+(m.aktif?"":" lock")}>
   <div style={{display:"flex",gap:12}}><div style={{fontSize:36}}>{m.ico}</div><div style={{flex:1}}><h3 style={{margin:0}}>{m.n}</h3>{m.sub&&<small style={{color:"var(--mut)"}}>{m.sub}</small>}<div style={{margin:"8px 0"}}><span className={"pill "+(m.aktif?"ok":"gy")}>{m.aktif?"● Aktif di prototipe":"🔒 Terkunci"}</span></div>
    {m.aktif?<button className="btn p" onClick={start}>{run===1?"Memproses…":"▶ Jalankan analisis"}</button>:<button className="btn" onClick={()=>setReq(req===m.k?null:m.k)}>Lihat persyaratan ↗</button>}
    {req===m.k&&<ul className="list">{m.syarat.map(s=><li key={s}>• {s}</li>)}</ul>}
    {m.aktif&&run===2&&<div style={{marginTop:8,fontSize:13}}>✅ Selesai: laju −3,2 mm/th (data simulasi). <a href="#risiko" onClick={e=>{e.preventDefault();go("risiko")}}>Buka peta risiko</a></div>}</div></div></div>)}</div>
  <p style={{color:"var(--mut)",fontSize:13}}>ⓘ Aktivasi mengikuti kelayakan data per stasiun</p></div>;
}
