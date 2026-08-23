# Mitosis — icon brief for ChatGPT

Paste the block below into ChatGPT (image generation). It asks for one sheet at a
time — **do not ask for all 26 in one image**, you get mush. Four sheets, in this
order. Send me the PNGs when they're done and I'll cut them up and wire them in.

---

## The house style paragraph — paste this at the top of EVERY request

> Cartoon game icons, simple and bold, in the style of a modern casual mobile game
> (Royal Match / Monopoly Go). Flat vector shapes with soft rounded corners, thick
> friendly forms, ONE soft highlight per object, a subtle darker tone underneath for
> depth. No outlines, no gradients-on-gradients, no text, no drop shadows on the
> canvas. Fully transparent background. Each icon centred with even padding, must
> stay readable shrunk to 36×36 pixels — so: few shapes, big shapes, high contrast.
> Bright saturated colours. Square canvas, 512×512, one icon per tile, arranged on a
> plain transparent grid with clear gaps between tiles.

---

## Sheet 1 — Cash, five tiers (the pile grows)

> 5 icons in one row. The SAME pile of money getting bigger and richer left to right.
> Green banknotes with a pale mint band, gold coins.
> 1. A single folded banknote.
> 2. Two banknotes stacked.
> 3. Three banknotes stacked with one gold coin leaning on them.
> 4. Four banknotes stacked with two gold coins.
> 5. A fat bundle of five banknotes, three gold coins spilling around it, and one
>    small four-point sparkle at the top right.
> The growth must be obvious at a glance with no numbers.

## Sheet 2 — Mana, five tiers (the cluster grows)

> 5 icons in one row. Glowing blue orbs, deep blue core fading to pale blue, one
> white highlight dot on the upper left of each orb. Same cluster getting bigger.
> 1. One orb. 2. Two orbs. 3. Three orbs. 4. Five orbs. 5. Seven orbs plus one small
> four-point sparkle.

## Sheet 3 — Powers, six icons

> 6 icons. Each one must read as its own thing at a glance.
> 1. SCATTER — a bright burst: a solid centre dot with eight smaller dots radiating
>    out evenly, like a starburst.
> 2. RAPID LOAD — a chunky upward arrow with three speed lines beneath it and a small
>    charging bar under that.
> 3. FULL DISH — a shallow bowl overflowing with five or six coloured jelly balls
>    (green, blue, purple, orange) spilling over the rim.
> 4. FRENZY — a single bold cartoon flame, orange outside, yellow heart.
> 5. COLONY BOOST — two round cells, one big one small, with a gold sparkle above them.
> 6. BIG BANG — a comic-book explosion star, gold and orange, with a bright white
>    core.

## Sheet 4 — Upgrades, six icons

> 6 icons. Each must show WHAT IT DOES, not be a symbol.
> 1. BLADE — a round jelly ball sliced clean in two, the halves pushed slightly
>    apart, with a long bright diagonal slash streak passing right through and
>    extending past both sides. Red/crimson.
> 2. RELOAD — a circular clock ring nearly full, with a chunky upward arrow inside
>    it. Blue.
> 3. PAYLOAD — a small ball on the left becoming a much bigger ball on the right,
>    with a small curved arrow between them. Purple.
> 4. DISH — a wide round dish filled past a dashed line with coloured balls piled in
>    it. Teal.
> 5. PAYOUT — a stack of three banknotes with a bold multiplication cross on the top
>    one. Green.
> 6. COLONY — two or three round cells sitting still with gold sparkles rising off
>    them. Amber/orange.

---

## Sheet 5 — the crate itself (optional, ask for two images)

> Image A: a closed cartoon treasure chest, front view, wooden body with vertical
> planks, two dark iron bands, corner brackets, a gold lock plate with a keyhole,
> domed lid. Warm brown and gold.
> Image B: THE SAME chest with the lid hinged fully open backwards so you see into
> it, empty inside, warm gold light glowing from within.
> Both front-on, identical size and position so they can be swapped.

---

## What to send back

PNG with transparency, one file per sheet. Don't crop them — I'll cut the tiles.

## What I'll do with them

Each icon becomes a base64 data URI inline in `index.html`, so it stays one file with
no build step. Budget roughly 15–25KB per icon after compression; 26 icons is about
0.5MB, which the artifact handles fine (the cap is 16MB).

**Worth knowing before you commit to this:** the drawn-in-code icons currently in the
game scale to any size, recolour themselves per rarity, and cost zero bytes. PNGs
will look better but they're fixed — the cash pile can't grow procedurally, so I'd
need all five tiers as separate images (which is why the brief asks for them that
way). If you only want to replace some of them, Sheets 3 and 4 are where hand-drawn
art wins most; Sheets 1 and 2 the code already does well.
