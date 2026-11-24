# STOWAGE v10.27 — release notes

## Fix: dynamic cargo-manifest table (no more cut-off columns / numbers)

**Reported:** at 100% browser zoom some manifest columns and numbers were missing
(cut off on the right). Needed to stay fully readable at any zoom in/out.

**Cause:** the whole app was capped at a fixed `max-width: 1240px` and centered, but
the manifest table (16 columns) is wider than that, so the right-hand columns
(ROTATE, REEFER, IMDG, DROP STOP) overflowed the cap and were clipped — with no
obvious way to scroll to them.

**Changes:**
- App container is now fluid: `width:100%; max-width:min(1680px, 98vw)` with
  `clamp()` side padding. It uses the available window width instead of a hard cap,
  so on a normal office monitor every column is visible at 100% zoom.
- Manifest table minimum width raised 860 → 1180 px so columns never collapse to an
  unreadable width (which was squeezing the numbers).
- The table's scroll area gets an always-visible, styled horizontal scrollbar
  (`.manifest-scroll`), so when the window is narrow or zoomed in, every column is
  still reachable with an obvious scrollbar.

**No engine changes.** Packing/stacking logic is unchanged from v10.26.

## Verification
- 1440px & 1366px viewport: all 16 columns + delete button fully visible, numbers
  clear (e.g. 5400 / 2200 / 2950 / 9800), no truncation.
- 1024px viewport (simulates ~135% zoom): horizontal scrollbar active, far-right
  columns reachable.
- Demo regression: **1×40RH + 1×20OT + 2×40GP**, 43,640 kg, 132.5 m³, 55 units,
  0 packing errors — identical to v10.26.
