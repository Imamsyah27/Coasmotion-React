import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function JaringanCors(){
 const [q,setQ]=useState("");const [f,setF]=useState("semua");const [sel,setSel]=useState("SIM-DEMO-01");
 const list=STATIONS.filter(s=>s.id.toLowerCase().includes(q.toLowerCase())&&(f==="semua"||s.tipe===f));
 const s=STATIONS.find(x=>x.id===sel);
 return <div><Head n="02" t="Jaringan CORS Indonesia"/>
  <div className="row"><input placeholder="Cari kode stasiun" value={q} onChange={e=>setQ(e.target.value)} style={{flex:1}}/>
   <div className="tabs" style={{margin:0}}>{[["semua","Semua"],["rill","CORS rill"],["virtual","Stasiun virtual"]].map(([k,l])=><button key={k} className={"tab"+(f===k?" on":"")} onClick={()=>setF(k)}>{l}</button>)}</div></div>
  <div className="two"><div className="card"><IndoMap stations={list} sel={sel} onSel={setSel}/><Legend/></div>
   <div className="card"><h2 style={{margin:"0 0 6px"}}>{s.id}</h2><span className={"pill "+(s.tipe==="rill"?"ok":"gy")}>{s.tipe==="rill"?"CORS rill":"Stasiun virtual"}</span>
    {[["Sumber data",s.sumber],["Skenario",s.skenario],["Periode",s.periode]].map(([k,v])=><div className="kv" key={k}><span>{k}</span><b>{v}</b></div>)}
    <div className="kv"><span>Status data</span><Pill s={s.status}/></div>
    <button className="btn w">📄 Metadata stasiun</button><button className="btn p w">Lihat asesmen</button></div></div></div>;
}
