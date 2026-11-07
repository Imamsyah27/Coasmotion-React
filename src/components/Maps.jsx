import React,{useState,useMemo} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {GEO,RC} from "../data/dummy.js";

const TILE="https://tile.openstreetmap.org/{z}/{x}/{y}.png",ATTR="&copy; OpenStreetMap contributors";
export function IndoMap({stations,sel,onSel,filter="semua"}){
 const el=React.useRef(null),map=React.useRef(null),lay=React.useRef(null),first=React.useRef(true);
 React.useEffect(()=>{const m=L.map(el.current,{scrollWheelZoom:false}).setView([-2.5,118],4);
  L.tileLayer(TILE,{maxZoom:18,attribution:ATTR}).addTo(m);lay.current=L.layerGroup().addTo(m);map.current=m;return()=>m.remove()},[]);
 React.useEffect(()=>{lay.current.clearLayers();
  stations.filter(s=>filter==="semua"||s.tipe===filter).forEach(s=>{
   const ic=L.divIcon({className:"",html:`<div class="pin ${s.tipe}${sel===s.id?" sel":""}"></div>`,iconSize:[18,18],iconAnchor:[9,9]});
   L.marker(GEO[s.id],{icon:ic,title:s.id}).bindTooltip(s.id).on("click",()=>onSel&&onSel(s.id)).addTo(lay.current)})},[stations,sel,filter]);
 React.useEffect(()=>{if(first.current){first.current=false;return}if(onSel&&sel&&GEO[sel])map.current.flyTo(GEO[sel],6,{duration:.8})},[sel]);
 return <div ref={el} className="lmap"/>;
}
export function RiskMap({w,p,l}){
 const el=React.useRef(null),map=React.useRef(null),lay=React.useRef(null);
 React.useEffect(()=>{const m=L.map(el.current,{scrollWheelZoom:false}).setView(RC[0],10);
  L.tileLayer(TILE,{maxZoom:18,attribution:ATTR}).addTo(m);L.control.scale().addTo(m);lay.current=L.layerGroup().addTo(m);map.current=m;return()=>m.remove()},[]);
 React.useEffect(()=>{const m=map.current;m.setView(RC[w],10);lay.current.clearLayers();
  let s=7+w*13+p*5+l*3;const r=()=>(s=(s*9301+49297)%233280)/233280;const[c0,c1]=RC[w],d=0.01;
  for(let i=0;i<36;i++)for(let j=0;j<28;j++){
   const dx=(i-18)/18,dy=(j-14)/14,v=(1-Math.hypot(dx,dy))*0.9+r()*0.5-0.2;
   let col=v>0.7?"#6b4fc2":v>0.45?"#e0a43c":v>0.3?"#f1e2b3":null;
   if(l===2&&r()>0.8)col="#999";if(!col)continue;
   const la=c0+(j-14)*d,lo=c1+(i-18)*d;
   L.rectangle([[la,lo],[la+d,lo+d]],{stroke:false,fillColor:col,fillOpacity:.55}).addTo(lay.current)}},[w,p,l]);
 return <div ref={el} className="lmap"/>;
}
