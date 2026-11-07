# COASTMOTION

Prototipe frontend pemantauan GNSS pesisir Indonesia. React + Vite + Leaflet (OpenStreetMap), data dummy.

## Struktur
- `src/data/dummy.js` : semua data dummy
- `src/pages/` : 6 layar (Ringkasan, JaringanCors, DataQC, AsesmenStasiun, ModulAnalisis, PetaRisiko)
- `src/components/` : komponen bersama (peta, badge, header)

## Jalankan lokal
```
npm install
npm run dev
```

## Deploy ke GitHub Pages
1. Push ke branch `main`.
2. Settings -> Pages -> Source: **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` akan build dan publish otomatis.

Peta (c) kontributor OpenStreetMap.
