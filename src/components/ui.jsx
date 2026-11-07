import React,{useState,useMemo} from "react";
export const Pill=({s})=><span className={"pill "+({"Lolos QC":"ok","Peringatan":"wn","Tidak lengkap":"bd"}[s]||"gy")}>{s}</span>;
export const Head=({n,t,sub})=><div><div className="top"><div><span className="num">{n}</span><b style={{color:"var(--mut)"}}>{t}</b></div><span className="badge">DATA DEMO</span></div><h1>{t}</h1>{sub&&<p className="sub">{sub}</p>}</div>;

export const Legend=()=><div className="leg"><span><i style={{background:"#2e9e6b",borderRadius:"50%"}}/>CORS rill</span><span><i style={{border:"1px solid #1b8a94",background:"var(--card)",transform:"rotate(45deg)"}}/>Stasiun virtual</span><span>Peta: OpenStreetMap</span></div>;

