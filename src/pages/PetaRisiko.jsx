import React,{useState,useMemo} from "react";
import {Pill,Head,Legend} from "../components/ui.jsx";
import {IndoMap,RiskMap} from "../components/Maps.jsx";
import {NAV,STATIONS,FILES0,MODUL,WILAYAH,PERIODE,LAPISAN} from "../data/dummy.js";

export default function PetaRisiko(){
 const [w,setW]=useState(0);const [p,setP]=useState(0);const [l,setL]=useState(0);
 const cells=useMemo(()=>{let s=7+w*13+p*5;const r=()=>(s=(s*9301+49297)%233280)/233280;const o=[];
  for(let x=0;x<50;x++)for(let y=0;y<40;y++){const cx=x*2,cy=y*1.75;const d=(cy-(50-cx*0.55));if(d<0)continue;
   const near=Math.max(0,1-d/18);const v=near*0.9+r()*0.35-0.15;
   o.push({x:cx,y:cy,c:v>0.75?"#6b4fc2":v>0.45?"#e0a43c":v>0.3?"#f1e2b3":null,h:cx>55&&cy<28})}return o},[w,p]);
 const tren=useMemo(()=>Array.from({length:24},(_,i)=>({i,v:20+i*(1.1+w*.3+p*.2)+Math.sin(i/2+w)*2})),[w,p]);
 const pts=tren.map(t=>`${t.i*4.3},${t.v}`).join(" ");
 return <div><Head n="06" t="Peta Risiko Regional" sub="Deformasi daratan · Skenario DEMO-01"/>
  <div className="card row">{[["Wilayah demo",WILAYAH,w,setW],["Periode",PERIODE,p,setP],["Lapisan",LAPISAN,l,setL]].map(([n,o,v,f])=><label key={n} style={{flex:1,minWidth:120,fontSize:12,fontWeight:700}}>{n}<select style={{width:"100%",marginTop:4}} value={v} onChange={e=>f(+e.target.value)}>{o.map((x,i)=><option key={x} value={i}>{x}</option>)}</select></label>)}</div>
  <div className="two"><div className="card"><RiskMap w={w} p={p} l={l}/>
    <div className="leg"><span><i style={{background:"#f1e2b3"}}/>Rendah</span><span><i style={{background:"#e0a43c"}}/>Sedang</span><span><i style={{background:"#6b4fc2"}}/>Tinggi</span><span><i style={{background:"#ccc"}}/>Data terbatas</span></div><small style={{color:"var(--mut)"}}>Hasil ilustratif untuk prototipe</small></div>
   <div className="card"><h3 style={{margin:"0 0 6px"}}>Detail wilayah</h3><b style={{fontSize:13}}>↘ Tren deformasi vertikal</b>
    <svg viewBox="0 0 100 60" style={{width:"100%",background:"var(--panel)",borderRadius:8,margin:"6px 0"}}><polyline points={pts} fill="none" stroke="#1b8a94" strokeWidth="1.4" transform="translate(2,0)"/><text x="62" y="8" fontSize="4" fill="#5b7282">Data simulasi</text></svg>
    <b style={{fontSize:13}}>Parameter lingkungan</b><div className="kv"><span>Elevasi</span><b>{[2.4,3.1,1.8][w]} m</b></div><div className="kv"><span>Jarak ke pantai</span><b>{[0.9,1.4,0.6][w]} km</b></div>
    <b style={{fontSize:13}}>Ketidakpastian</b><div className="kv"><span>Interval estimasi</span><b>±{[0.8,1.1,0.6][p]} mm/th</b></div><div className="kv"><span>Cakupan data</span><b>{[92,87,95][p]}%</b></div></div></div></div>;
}

