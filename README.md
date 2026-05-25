# RSU PRINCE2 — Procesu optimizācijas prezentācija

HTML/CSS/JS prezentācija (Reveal.js), gatava izvietošanai Vercel.
12 slaidu naratīvs ar hibrīda dizainu: tumši zaļš titulslaids, akcentslaidi (procesu piemērs un noslēgums), gaiši satura slaidi.

## Saturs (12 slaidi)

| # | Tēma | Stils |
|---|------|-------|
| 1 | Ievads — projekta apraksts un dienaskārtība | Tumšs |
| 2 | Projekta problēma un mērķis | Gaišs |
| 3 | PRINCE2 pieeja projektam — 5 posmi | Gaišs |
| 4 | P1_1 · Esošo procesu analīze | Gaišs |
| 5 | P1_2 · Neefektīvo procesu identificēšana | Gaišs |
| 6 | P1_3 · Manuālo darbību samazināšanas plāns | Gaišs |
| 7 | P1_4 · Standartizētu procesu izstrāde | Gaišs |
| 8 | P1_5 · KPI un efektivitātes metriku definēšana | Gaišs |
| 9 | Stage Plan — projekta ieviešanas plāns | Gaišs |
| 10 | Risku novērtējums (draudi + iespējas) | Gaišs |
| 11 | Procesu optimizācijas piemērs (plūsma + Gantt) | **Tumšs** |
| 12 | Noslēgums | **Tumšs** |

## Lokāla apskate

Reveal.js tiek ielādēts no CDN, tāpēc build solis nav vajadzīgs.
Vienkārši palaid statisku serveri (lai relatīvie ceļi strādā):

```bash
npx serve .
# vai
python -m http.server 8000
```

Atver `http://localhost:8000`.

## Navigācija

- Bultiņas / atstarpe — nākamais/iepriekšējais slaids
- `Esc` — slaidu pārskats
- `S` — runātāja piezīmju logs
- `?` — visi īsinājumtaustiņi

## PDF eksports

Atver prezentāciju ar `?print-pdf` (piem. `index.html?print-pdf`),
tad `Ctrl/Cmd + P` → "Save as PDF", "Background graphics" ieslēgts.

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

- Saturs — `index.html` (katrs `<section>` = viens slaids).
- Stili — `css/theme.css`. Tumšie slaidi izmanto `.dark-slide` klasi un `data-background-color="#0a1612"`.
- Reveal.js konfigurācija — `js/main.js` (1280×720 viewport).

### Tumši zaļās tēmas mainīgie (`css/theme.css`)

| Mainīgais | Vērtība | Lietojums |
|-----------|---------|-----------|
| `--d-bg` | `#0a1612` | Slaida fons |
| `--d-accent` | `#5BC97B` | Zaļais akcents (ikonas, virsraksti, joslas) |
| `--d-card` | `rgba(74,222,128,.06)` | Karšu fons uz tumša |
| `--d-border` | `rgba(124,220,158,.28)` | Karšu apmales |
