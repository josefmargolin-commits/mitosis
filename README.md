# Mitosis

A single-file idle game. Two rooms stacked vertically with one camera between
them: wizards on a castle battlement upstairs, a dish of balls downstairs.

Wizards cast balls down into the dish. Balls of the same colour that touch and
hold fuse into one bigger ball. Tapping or swiping splits balls back down the
ladder, and the smallest rung cashes out as mass. Mass buys more wizards and
faster ones. Bank enough and the camera pulls back a whole scale of reality.

Everything is in `index.html` — no build step, no dependencies, no server.
Open the file and it runs.

## Playing

- **Tap** a ball to split it. **Swipe** to cleave a line of them.
- Same-colour balls that stay in contact **fuse** into the next size up.
- The **arrow at the top** goes up to the wizard board.
- **Tap** a wizard to buy speed for every wizard of that kind.
- **Drag** one wizard onto another of the same kind to **merge** it up a rank.
- A wizard's **column** decides which lane its balls fall into, so where they
  stand changes how often they meet and fuse.

## On an iPhone

Open it in Safari, then Share → **Add to Home Screen**. It launches fullscreen
with its own icon, respects the notch and home indicator, and blocks the usual
mobile-web annoyances (rubber-band scroll, double-tap zoom, long-press callouts).

Progress saves to `localStorage`, so it persists between sessions on the same
device. Some embedded viewers block storage — the game detects that and says so
rather than silently losing your run.

Haptics use `navigator.vibrate`, which iOS Safari does not implement; the calls
are guarded and simply do nothing there. Sound works, and starts on your first
tap as the platform requires.

## Settings worth knowing

**Sandbox** is on by default while the balance is being tuned: unlimited mass
and spores, and the next scale always unlocked. Turn it off in Settings for a
real run.

**Magnetised balls** toggles the metaball rendering that makes touching balls
fuse into one silhouette. It is the most expensive thing on screen; the game
drops it automatically if a device cannot keep up.

## How it is built

- Three stacked canvases for the arena: a static background, a low-resolution
  "goo" layer run through an SVG alpha-threshold filter for the metaballs, and a
  crisp layer on top for the bodies, particles and text.
- The wizard board is DOM cells for hit-testing with one canvas painted over the
  top for the figures — DOM handles dragging and text, canvas handles the art.
- Collision uses sweep-and-prune on the x-axis, which is what keeps a dish full
  of small balls cheap.
- Audio is a small synth: layered voices through a limiter and a generated
  plate reverb, panned to wherever the event happened, pitched to a pentatonic
  ladder so cascades play a run rather than noise.
