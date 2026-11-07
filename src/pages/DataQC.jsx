import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function DataQC(){
 const [tab,setTab]=useState("inv");const [files,setFiles]=useState(FILES0);const [sel,setSel]=useState(1);const [js,setJs]=useState(false);
 const [src,setSrc]=useState("");const [st,setSt]=useState("");
 const rows=files.filter(r=>(!src||r.s.startsWith(src))&&(!st||r.st===st));
 const cur=files[sel]||files[0];
 const up=()=>{setFiles([...files,{f:"cmks0100.26o",s:"Rill - Unggah",p:"Sesi 010",st:"Lolos QC",why:"Semua pemeriksaan berhasil.",bukti:"ALL_CHECKS_PASSED"}])};
 const hist=[["Unggah","14 Okt 2026 09:12"],["Audit","14 Okt 2026 09:13"],["Validasi header","14 Okt 2026 09:13"],["Hasil QC","14 Okt 2026 09:14"]];
 return <div><Head n="03" t="Data & Quality Control"/>
  <div className="row" style={{justifyContent:"space-between"}}><div className="tabs" style={{margin:0}}>{[["inv","Inventaris RINEX"],["riw","Riwayat proses"]].map(([k,l])=><button key={k} className={"tab"+(tab===k?" on":"")} onClick={()=>setTab(k)}>{l}</button>)}</div><button className="btn p" onClick={up}>⬆ Unggah RINEX</button></div>
  <div className="row"><select value={src} onChange={e=>setSrc(e.target.value)}><option value="">Semua sumber</option><option>Rill</option><option>Simulasi</option></select><select><option>Periode observasi</option><option>Sesi 001-060</option></select><select value={st} onChange={e=>setSt(e.target.value)}><option value="">Status QC</option><option>Lolos QC</option><option>Peringatan</option><option>Tidak lengkap</option></select></div>
  {tab==="inv"?<div className="two"><div className="card tw"><table><thead><tr><th>Berkas</th><th>Sumber</th><th>Periode observasi</th><th>Status QC</th></tr></thead><tbody>{rows.map(r=>{const i=files.indexOf(r);return <tr key={i} className={i===sel?"sel":""} onClick={()=>{setSel(i);setJs(false)}}><td>{r.f}</td><td>{r.s}</td><td>{r.p}</td><td><Pill s={r.st}/></td></tr>})}</tbody></table></div>
   <div className="card"><h3 style={{margin:"0 0 8px"}}>{cur.f}</h3><div className={"card "+(cur.st==="Lolos QC"?"ok":"bd")} style={{border:0}}><b>{cur.st==="Lolos QC"?"Lolos semua pemeriksaan":"Mengapa "+(cur.st==="Peringatan"?"ada peringatan?":"tidak lengkap?")}</b><div style={{fontSize:12}}>{cur.why}</div></div>
    <p style={{margin:"10px 0 4px"}}><b>Bukti teknis</b></p><pre>{cur.bukti}</pre>
    <button className="btn w" onClick={()=>setJs(!js)}>⬇ Unduh JSON</button>{js&&<pre>{JSON.stringify({berkas:cur.f,status:cur.st,kode:cur.bukti},null,2)}</pre>}
    <p><b>Riwayat proses</b></p><div className="steps">{["Unggah","Audit","QC"].map((x,i)=><React.Fragment key={x}><span><span className="dot">✓</span> {x}</span>{i<2&&"→"}</React.Fragment>)}</div></div></div>
  :<div className="card tw"><table><thead><tr><th>Proses</th><th>Waktu</th><th>Berkas</th></tr></thead><tbody>{hist.map(([a,b])=><tr key={a}><td>{a}</td><td>{b}</td><td>{cur.f}</td></tr>)}</tbody></table></div>}
 </div>;
}
