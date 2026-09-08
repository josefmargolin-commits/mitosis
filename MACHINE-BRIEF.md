# Mitosis — the two bottom machines

Three transparent PNGs. They sit at the bottom corners of a soft, rounded,
brightly-coloured cell-slicing game. **The single most important thing is that
they read as one set** — same hand, same materials, same light. Two machines
that are individually fine but drawn by different rules is the exact problem
we are fixing.

---

## Ask for all three in ONE image

Do not generate them separately. Style drifts between generations, and drift is
the whole problem. One image, transparent background, the three assets laid out
with clear empty space between them. I will cut them apart.

**Canvas:** 1536 × 1024, transparent.
**Layout:** incubator on the left, turret body in the middle, barrel on the
right. No overlap, no shadows touching, at least 80px of clear transparency
around each.

---

## The prompt

> A set of three 2D game asset sprites on a fully transparent background,
> laid out left to right with clear space between them. Chunky mobile-game
> art: thick dark outlines of even weight, soft cel shading in two or three
> tones, rounded corners everywhere, a single soft light source from the
> upper left, subtle rim light on the upper edges. Clean vector-like finish,
> no texture noise, no gradients into grey, no drop shadows, no ground, no
> background, no text, no logos.
>
> LEFT — a **cell incubator**: a wide, squat, friendly machine in cyan and
> pale teal with dark navy outlines. A rounded chamber body with a big
> curved glass window across the front showing glowing cyan fluid inside.
> A short wide funnel opening straight upward out of the top, its rim lit
> with a soft cyan glow. Two stubby feet. It looks like it grows things and
> pushes them up. Wider than it is tall.
>
> MIDDLE — a **laser turret body**: a compact, dangerous-looking turret base
> in coral red and deep crimson with the same dark navy outlines. A rounded
> armoured housing on a low mount, a small dark lens set into the front,
> and a visible circular rotation collar on top where a barrel would attach.
> No barrel. Roughly as wide as it is tall, and noticeably smaller than the
> incubator.
>
> RIGHT — a **laser barrel, alone, pointing straight up**: a long slim
> coral-red barrel with a slightly flared emitter tip, two thin metal bands
> around it, and a darker breech block at the bottom end. Vertical,
> about three times as tall as it is wide.
>
> The three must look like they came from the same art set: identical
> outline thickness, identical shading style, identical light direction,
> same material finish. The cyan machine should read as gentle and
> productive, the red turret as sharp and dangerous.

---

## Proportions the code expects

| asset | aspect (w : h) | drawn width on screen |
|---|---|---|
| incubator | about **1.35 : 1** | 30% of screen width |
| turret body | about **1 : 1** | 20.5% of screen width |
| barrel | about **1 : 3.2** | 7.8% of screen width |

The turret ends up noticeably smaller than the incubator. That is deliberate —
they are different machines, not a matched pair of bookends.

## Anchors and the pivot

- **Incubator** and **turret body**: the point that lands on the ground is
  50% across, 92% down. So leave a little empty transparency below the feet.
- **Barrel**: it rotates. Its pivot is **50% across, 44% down** — inside the
  breech block, not at the very bottom. Draw the barrel pointing **straight
  up**; the code turns it from there.
- The barrel attaches at **50% across, 42% down** of the turret body's box —
  that should land on the rotation collar.

All three numbers are in `MACH` at the top of the script and are easy to nudge
once the art exists; get the drawings right first and I will fit them.

## What the code does with them

- The incubator swells very slightly as the next cell loads and sits down
  when it throws one, with a splash of liquid out of the funnel.
- The barrel tracks the nearest cell, kicks back down its own bore when it
  fires, and gets a muzzle flash at the emitter tip.
- During Overdrive both machines are washed in a pulsing gold glow. Nothing
  else on the bottom lights up, so the art must not have any gold in it
  already.

## Delivering them

Paste the image into the chat. I will cut the three assets out, trim the
transparency, and drop them into the `MACH_ART` slots.
