# RSU PRINCE2 — Procesu optimizācijas prezentācija

Vertikāli ritināma HTML/CSS prezentācija — katrs slaids ir pilnekrāna izmēra (100vh × 100vw), navigācija ar ritināšanu, taustiņiem vai sānu punktu paneli. Hibrīda dizains: tumši zaļš titulslaids un akcentslaidi (procesu piemērs, noslēgums); gaiši satura slaidi.

## Saturs (12 slaidi)

| #  | Tēma | Stils |
|----|------|-------|
| 1  | Ievads — projekta apraksts un dienaskārtība | **Tumšs** |
| 2  | Projekta problēma un mērķis | Gaišs |
| 3  | PRINCE2 pieeja projektam — 5 posmi | Gaišs |
| 4  | P1_1 · Esošo procesu analīze | Gaišs |
| 5  | P1_2 · Neefektīvo procesu identificēšana | Gaišs |
| 6  | P1_3 · Manuālo darbību samazināšanas plāns | Gaišs |
| 7  | P1_4 · Standartizētu procesu izstrāde | Gaišs |
| 8  | P1_5 · KPI un efektivitātes metriku definēšana | Gaišs |
| 9  | Stage Plan — projekta ieviešanas plāns | Gaišs |
| 10 | Risku novērtējums (draudi + iespējas) | Gaišs |
| 11 | Procesu optimizācijas piemērs (plūsma + Gantt) | **Tumšs** |
| 12 | Noslēgums | **Tumšs** |

## Lokāla apskate

Atkarību nav — tikai HTML, CSS, JS. Palaid statisku serveri:

```bash
python -m http.server 8000
# vai
npx serve .
```

Atver `http://localhost:8000`.

## Navigācija

- **Ritināt uz augšu/leju** — pārvietoties starp slaidiem (scroll-snap apsnap'o uz katra slaida)
- **Bultiņas ↑/↓** vai **PgUp/PgDn** vai **atstarpe** — uz nākamo/iepriekšējo slaidu
- **Home/End** — uz pirmo/pēdējo slaidu
- **Sānu punkti** (pa labi) — klikšķis aizved uz konkrēto slaidu
- **URL hash** (`#s4` u.t.t.) — tiešas saites uz slaidu

## PDF eksports

Pārlūkprogrammā `Ctrl/Cmd + P` → "Save as PDF", iespējo "Background graphics". CSS `@media print` jau iestata katru slaidu kā atsevišķu lapu.

## Izvietošana Vercel

1. Iepush repozitoriju GitHub.
2. Vercel → **Add New → Project** → izvēlies repo.
3. Framework Preset: **Other**. Build Command: *(tukšs)*.
   Output Directory: *(tukšs / `.`)*.
4. **Deploy**.

Vai no termināļa:

```bash
npm i -g vercel
vercel        # priekšskatījums
vercel --prod # produkcija
```

## Rediģēšana

- Saturs — `index.html` (katrs `<section class="slide">` = viens slaids).
- Stili — `css/theme.css`. Tumšie slaidi izmanto `.dark-slide` klasi.
- Skripts — `js/main.js` (tastatūras navigācija + aktīvā punkta izsekošana ar IntersectionObserver).

### Slaida izmērs un mērogošana

- Slaids — `100vh × 100vw` ar `scroll-snap-align: start`.
- Bāzes fonta izmērs slaida iekšienē: `min(2.5vw, 4.4vh)` — saturs samērīgi mērogojas atkarībā no ekrāna izmēra.
- Atsevišķi elementi izmanto `em` vienības, lai sekotu bāzes fonta izmēram.

### Tumši zaļās tēmas mainīgie (`css/theme.css`)

| Mainīgais | Vērtība | Lietojums |
|-----------|---------|-----------|
| `--d-bg` | `#0a1612` | Slaida fons |
| `--d-accent` | `#5BC97B` | Zaļais akcents |
| `--d-card` | `rgba(74,222,128,.06)` | Karšu fons |
| `--d-border` | `rgba(124,220,158,.28)` | Karšu apmales |

### Mobilā skata atbalsts

`@media (max-width: 720px)` slaidiem stack'o režģus vertikāli un samazina sānu padding.
