import React,{useState,useMemo} from "react";
import {NAV} from "./data/dummy.js";
import Ringkasan from "./pages/Ringkasan.jsx";
import JaringanCors from "./pages/JaringanCors.jsx";
import DataQC from "./pages/DataQC.jsx";
import AsesmenStasiun from "./pages/AsesmenStasiun.jsx";
import ModulAnalisis from "./pages/ModulAnalisis.jsx";
import PetaRisiko from "./pages/PetaRisiko.jsx";

export default function App(){
 const [k,setK]=useState(()=>{const h=location.hash.slice(1);return NAV.some(n=>n[0]===h)?h:"ringkasan"});
 const go=x=>{setK(x);try{location.hash=x}catch(e){}window.scrollTo(0,0)};
 const V={ringkasan:Ringkasan,cors:JaringanCors,qc:DataQC,asesmen:AsesmenStasiun,modul:ModulAnalisis,risiko:PetaRisiko}[k];
 return <div className="app"><nav className="side"><div className="logo">〰<small>COASTMOTION</small></div>
  {NAV.map(([id,ic,l])=><button key={id} className={"nav"+(k===id?" on":"")} onClick={()=>go(id)}><span>{ic}</span>{l}</button>)}</nav>
  <main className="main"><V go={go}/></main></div>;
}
