# STOWAGE v10.26 — safe stacking order + optional auto-stack

## 1. A heavier piece is never stacked on a lighter one (safety fix)
You were right. Before, the packer could put a **small heavy** box on top of a
**big light** one (e.g. 50×50×50 cm / 500 kg sitting on 100×100×100 cm / 200 kg),
because it stacked by footprint, not by weight.

Now the rule is enforced in **both** stacking paths:
- Every stack is built **heaviest on the bottom**; a lighter piece never carries a
  heavier one.
- If the only way two pieces could stack is heavy-on-light, they are **left side by
  side on the floor** instead (the safe result).
- A stack still **never exceeds the container height** — it just uses fewer layers.

Verified: 1000³/200 kg + 500³/500 kg now both sit on the floor (the 500 kg is not put
on top). A genuine case (1000³/500 kg base + 600³/150 kg) still stacks correctly, with
the light piece on top.

## 2. New "Auto-stack cargo" option
A checkbox next to **Door clearance / Optimize load**.

- **OFF (default):** only pieces you tick **Stack** are stacked — unchanged safe
  behaviour.
- **ON:** the optimiser may stack **any** cargo to pack tighter, using the same safe
  rules — heaviest on the bottom, no heavier-on-lighter, never above container height.
  Use this when you don't know in advance which pieces are stackable and just want the
  densest safe plan.

Tick it once and press Optimize load — no need to set Stack on every row.

> **Important:** stacking assumes the lower piece can bear the weight above it. For
> fragile or weak items, set **Top load kg** on that row so the packer respects its
> crush limit; and always verify on site. Auto-stack handles the *order* safely, but it
> cannot know a box's crush strength unless you enter it.

## About the "over standard container size" error
If a single piece is taller/wider than even a High-Cube or Open-Top container, that is a
real limit (it needs special equipment) and the app still tells you — that message
should not be hidden. If the piece you saw the error on should actually fit, please send
me that cargo row (L×W×H and weight) and I'll confirm whether it's handled now or is a
genuine out-of-gauge case.

## No regression
Demo still packs to the same containers (40RH / 20OT / 40GP ×2), 0 console errors.

## Files
- `stowage-container-load-planner-v10_26.html` — the app (double-click)
- `stowage-v10_26.source.js` — readable source
