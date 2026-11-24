# STOWAGE — Change Log

### v10.27
- Cargo manifest table is now dynamic: it uses the window width instead of a fixed cap,
  so at 100% zoom every column and number is visible (no more cut-off right-hand columns).
  Columns keep a readable minimum width and, when zoomed in or on a narrow window, an
  always-visible horizontal scrollbar reaches the rest. No packing-engine changes.

### v10.26
- Stacking is now always heaviest-on-the-bottom; a heavier piece is never placed on a
  lighter one (left side-by-side instead). New optional "Auto-stack cargo" toggle packs
  tighter using the same safe rules.

### v10.25
- Cargo input table easier to read: removed number-field spinner arrows and widened
  the numeric columns so 4-digit values (1200, 2950, 5400, 9800) show in full.

### v10.24
- Fixed the Stow Map so it is a true 90° rotation of the Top View (was left-right
  mirrored), so boxes line up between the two views.

### v10.23
- Added a per-container **Container No.** field, shown on the Stow Map and PDF.

### v10.22
- Stow Map restored to portrait layout (nose top / door bottom) with cargo colours,
  loading-step numbers and correct piece counts.

### v10.17–v10.21
- Save/resume of manual plans; resume from an exported PDF; Stow Map alignment and
  colour/number consistency with the Top View; PDF Stow Map rendered from the same map.

### v10.11–v10.16
- Manual adjust (move / rotate / re-sequence / move between containers); one-click
  "heaviest → door"; door clearance; drag-and-drop re-planning with optional auto re-pack.

### v10.1–v10.10
- Packing-list reader (Excel / CSV / PDF / image OCR) with auto column detection;
  "apply to all" buttons; Clear list; layout fixes; Core PDF export.
