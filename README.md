# STOWAGE — Container Load Planner

**STOWAGE** is a single-file, fully-offline HTML application for planning how industrial
cargo is loaded into shipping containers. It is used by **Kintetsu World Express
(Thailand), Project Sales Division / Land Freight Department** for freight-forwarding work.

> Current version: **v10.27** · Early Access · Developed by *Suthiwas Kongsorn*

## Open it

Just **double-click `stowage-container-load-planner-v10_27.html`** — it runs in any
modern browser (Chrome / Edge recommended). No install, no server, no internet required;
nothing leaves the computer.

## What it does

- **Auto-plans** how cargo fits into containers — how many containers, where each piece
  sits, the loading sequence, weight, volume used, and centre of gravity (CG).
- **Reads customer packing lists** — Excel / CSV / text-PDF, and photos/scans via OCR
  (English, beta). Auto-detects the columns (name, L/W/H, weight, qty) in Thai / English /
  Japanese, with an editable confirm-before-import screen.
- **Manual adjust & drag-and-drop** — move, rotate, re-sequence, send-to-door, move
  between containers; the container re-packs around your change (or move freely with
  re-pack off).
- **Door clearance** — real-world loadable length (e.g. a 40′ loads to 11,750 mm).
- **Save / resume** — save a plan (incl. manual edits) and continue later, from a
  `.json` **or** from an exported PDF (the plan is embedded inside the PDF).
- **PDF export** — full Loader PDF, or a Core PDF (3D stow plan, top view by layer,
  stow map, loading sequence) with the container number, ready to send to the customer.

## Files in this repo

| Path | What it is |
|---|---|
| `stowage-container-load-planner-v10_27.html` | The application (open this) |
| `src/stowage-v10_27.source.js` | Readable (prettified) source of the app script |
| `docs/STOWAGE-User-Manual-TH.pdf` | User manual in Thai (คู่มือการใช้งาน), with screenshots |
| `docs/STOWAGE-v10_25-notes.md` | Release notes for this version |

## Notes

- **Early Access** — results are decision support only. Verify container selection,
  weight, CG, and lashing against carrier and CTU Code requirements before shipping.
- Image OCR is English-only (beta) and must be checked digit-by-digit before import.
