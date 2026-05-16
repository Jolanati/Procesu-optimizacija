# RSU PRINCE2 — Procesu optimizācijas prezentācija

HTML/CSS/JS prezentācija (Reveal.js), gatava izvietošanai Vercel.

## Saturs

| Slaids | Tēma |
|--------|------|
| Titula | Procesu optimizācijas un produktivitātes uzlabošanas programma |
| 1 | Mērķa sadalījums un pamatprogrammas |
| 2 | Izvēlētā risinājuma pamatojums |
| 3 | Projekta apraksts (Project Brief — apvienots) |
| 4 | P1 Deliverable rezultāti |
| 5 | Riska novērtējums (draudi / iespējas) |
| 6 | Posma plāna izstrāde |

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

Viss saturs ir `index.html` (katrs `<section>` = viens slaids).
Stili — `css/theme.css`. Reveal.js konfigurācija — `js/main.js`.

> Piezīme: 2. slaida šūnu krāsojums seko leģendai pēc vērtības
> (Zems = zaļš, Vidējs = dzeltens, Augsts = sarkans), kas ir konsekventi
> ar leģendas tekstu.
