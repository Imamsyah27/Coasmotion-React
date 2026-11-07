import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function Ringkasan({go}){
 const stat=[["CORS rill","8"],["Stasiun virtual","4"],["Data lolos QC","18 dari 24"],["Modul memenuhi syarat","1 dari 4"],["Analisis selesai","3"]];
 return <div><Head n="01" t="Ringkasan COASTMOTION" sub="Pemantauan GNSS pesisir Indonesia"/>
  <div className="cards">{stat.map(([l,v])=><div key={l} className="card stat"><span>{l}</span><b style={{fontSize:v.length>2?24:34,lineHeight:"44px"}}>{v}</b></div>)}</div>
  <div className="two"><div className="card"><IndoMap stations={STATIONS}/><Legend/></div>
   <div style={{display:"grid",gap:12,alignContent:"start"}}>
    <div className="card"><b>Ringkasan analisis</b><div className="kv"><b>Deformasi daratan</b><span className="pill ok">Prototipe aktif</span></div><button className="btn w" onClick={()=>go("risiko")}>Lihat hasil demo →</button></div>
    <div className="card"><b>Perlu ditinjau</b><ul className="list"><li>📄 2 berkas tidak lengkap</li><li>⚠ 1 sesi dengan peringatan</li></ul><button className="btn w" onClick={()=>go("qc")}>Buka Data &amp; QC</button></div>
   </div></div></div>;
}
