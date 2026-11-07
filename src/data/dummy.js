// Semua data dummy COASTMOTION
export const NAV=[["ringkasan","▦","Ringkasan"],["cors","📡","Jaringan CORS"],["qc","🗄","Data & QC"],["asesmen","📊","Asesmen Stasiun"],["modul","🧩","Modul Analisis"],["risiko","🗺","Peta Risiko"]];
export const STATIONS=[
 {id:"CSLN",nama:"CORS Sumatera Selatan",tipe:"rill",x:18,y:28,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Peringatan"},
 {id:"CPDG",nama:"CORS Padang",tipe:"rill",x:10,y:20,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CMDN",nama:"CORS Medan",tipe:"rill",x:8,y:10,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CJKT",nama:"CORS Jakarta",tipe:"rill",x:38,y:39,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CBDG",nama:"CORS Bandung",tipe:"rill",x:42,y:41,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CSMG",nama:"CORS Semarang",tipe:"rill",x:50,y:39,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CPNK",nama:"CORS Pontianak",tipe:"rill",x:46,y:24,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"CMKS",nama:"CORS Makassar",tipe:"rill",x:70,y:30,sumber:"BIG - CORS",skenario:"Operasional",periode:"2026 DOY 001-058",status:"Lolos QC"},
 {id:"SIM-DEMO-01",nama:"Stasiun virtual 01",tipe:"virtual",x:24,y:33,sumber:"Simulasi",skenario:"DEMO-01",periode:"Contoh",status:"Lolos QC"},
 {id:"SIM-DEMO-02",nama:"Stasiun virtual 02",tipe:"virtual",x:58,y:41,sumber:"Simulasi",skenario:"DEMO-02",periode:"Contoh",status:"Lolos QC"},
 {id:"SIM-DEMO-03",nama:"Stasiun virtual 03",tipe:"virtual",x:76,y:20,sumber:"Simulasi",skenario:"DEMO-03",periode:"Contoh",status:"Lolos QC"},
 {id:"SIM-DEMO-04",nama:"Stasiun virtual 04",tipe:"virtual",x:88,y:29,sumber:"Simulasi",skenario:"DEMO-04",periode:"Contoh",status:"Lolos QC"}];
export const FILES0=[
 {f:"csln0050.26o",s:"Rill - Unggah",p:"Sesi 005",st:"Peringatan",why:"Interval sampel tidak konsisten pada 3 epoch.",bukti:"SAMPLING_INTERVAL_MISMATCH"},
 {f:"csln0580.26o",s:"Rill - Unggah",p:"Sesi 058",st:"Tidak lengkap",why:"Penanda akhir header tidak ditemukan.",bukti:"MISSING_END_OF_HEADER"},
 {f:"sim-demo-01.obs",s:"Simulasi",p:"DEMO-01",st:"Lolos QC",why:"Semua pemeriksaan berhasil.",bukti:"ALL_CHECKS_PASSED"}];
export const MODUL=[
 {k:"def",n:"Deformasi daratan",sub:"",ico:"⬇",aktif:true,syarat:["Sesi observasi lolos QC","Pasangan observasi tersedia","Periode minimum terpenuhi"]},
 {k:"tma",n:"Tinggi muka air",sub:"GNSS-IR",ico:"↕",aktif:false,syarat:["Sektor refleksi terverifikasi","Satuan sinyal (SNR) terkonfirmasi","Minimal 30 hari data"]},
 {k:"kel",n:"Kelembapan tanah",sub:"",ico:"💧",aktif:false,syarat:["Antena dan lingkungan sesuai","Minimal 60 hari data"]},
 {k:"veg",n:"Vegetasi",sub:"VOD",ico:"🌿",aktif:false,syarat:["Multi-frekuensi tersedia","Minimal 90 hari data"]}];
export const WILAYAH=["Muara Sungsang (demo)","Pesisir Utara Jawa (demo)","Delta Mahakam (demo)"];
export const PERIODE=["Jan - Jun 2026","Jul - Des 2026","Tahunan 2026"];
export const LAPISAN=["Tingkat risiko","Laju deformasi (mm/th)","Cakupan data"];

/* ===== KOMPONEN KECIL ===== */
export const GEO={CSLN:[-3.0,104.7],CPDG:[-0.95,100.35],CMDN:[3.59,98.67],CJKT:[-6.2,106.85],CBDG:[-6.91,107.61],CSMG:[-6.97,110.42],CPNK:[-0.03,109.33],CMKS:[-5.15,119.43],"SIM-DEMO-01":[-2.1,106.1],"SIM-DEMO-02":[-8.6,115.2],"SIM-DEMO-03":[1.5,124.8],"SIM-DEMO-04":[-2.55,140.7]};
export const RC=[[-2.36,104.93],[-6.9,110.4],[-0.55,117.25]];
