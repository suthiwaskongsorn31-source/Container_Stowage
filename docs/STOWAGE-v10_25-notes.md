# STOWAGE v10.25 — cargo input table easier to read

## What you reported
The data-input fields in the Cargo Manifest were hard to read — the numbers were
cut off (e.g. "1200" showed as "12(", "1000" as "10(").

## What changed
1. **Removed the up/down spinner arrows** from the number fields. Those arrows were
   eating ~16 px inside each already-narrow box, which is what clipped the last
   digit. Removing them gives the full width back to the number.
2. **Widened the numeric columns** a little for comfort:
   - L / W / H, Top load, Contact: 78 → 92 px
   - KG/UNIT: 84 → 100 px
   - QTY, Drop stop: 60 → 72 px
   - PKG, Max layers: 66 → 80 px

Now 4-digit values like **1200 / 2950 / 5400 / 9800** show in full, and you can still
type freely in every field.

## No change to anything else
Only the field sizing/spinner styling changed — the packer, results, PDF, import
readers, manual adjust and resume are all untouched. Verified: demo still packs to
the same containers (40RH / 20OT / 40GP ×2) with 0 console errors.

## Files
- `stowage-container-load-planner-v10_25.html` — the app (~18.7 MB, double-click)
- `stowage-v10_25.source.js` — prettified working source
