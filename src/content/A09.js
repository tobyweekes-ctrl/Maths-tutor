/* Statistics and Mechanics Year 1 · Chapter 9 Constant acceleration (sections 9.1 to 9.5) */
BOOK_CHAPTERS.push({ id:'A09', book:'Statistics & Mechanics Year 1', label:'Chapter 9', title:'Constant acceleration', mech: true, sections:[
  { id:'A9.1', num:'9.1', title:'Displacement-time graphs' },
  { id:'A9.2', num:'9.2', title:'Velocity-time graphs' },
  { id:'A9.3', num:'9.3', title:'Constant acceleration formulae 1' },
  { id:'A9.4', num:'9.4', title:'Constant acceleration formulae 2' },
  { id:'A9.5', num:'9.5', title:'Vertical motion' }
]});
// Piecewise-linear motion graph through pts [[t, y], ...] (uses cfLine from chapter 3).
const A9g = ({ label, pts, ylab = 'v (m s⁻¹)', xlab = 't (s)', xt, yt, y0 = null, y1 = null, x1 = null, extra = [], marks = true, texts = [] }) => {
  const ys = pts.flatMap(p => p[1]).concat(extra.flatMap(e => e.pts.map(p => p[1])));
  const lo = y0 != null ? y0 : Math.min(0, ...ys), hi = y1 != null ? y1 : Math.max(...ys) * 1.15;
  const X1 = x1 || Math.max(...pts.map(p => p[0]), ...extra.flatMap(e => e.pts.map(p => p[0]))) * 1.06;
  const ticks = (a, b, s) => { const r = []; for (let v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) if (Math.abs(v) > 1e-9) r.push([v, String(+v.toFixed(2))]); return r; };
  return Fig.graph({ label, x0: 0, x1: X1, y0: lo, y1: hi, xlab, ylab, xticks: ticks(0, X1, xt), yticks: ticks(lo, hi, yt), texts,
    fns: [{ f: cfLine(pts) }].concat(extra.map(e => ({ f: cfLine(e.pts), col: 'var(--pen)', dash: e.dash }))),
    points: marks ? pts.slice(1).map(([x, y]) => ({ x, y })) : [] });
};
// Straight-line motion: points along a line [{ x, name, note }] with a direction arrow and distance labels [{ from, to, label }].
const A9line = ({ label, pts, gaps = [] }) => Fig.graph({ label, x0: -0.6, x1: Math.max(...pts.map(p => p.x)) + 0.8, y0: -1.4, y1: 1.4, xlab: '', ylab: '', h: 130, axes: false,
  segs: [{ x1: -0.4, y1: 0, x2: Math.max(...pts.map(p => p.x)) + 0.6, y2: 0, col: 'var(--ink)', w: 1.6 }, { x1: 0, y1: 0.95, x2: 1.2, y2: 0.95, arrow: true, col: 'var(--muted)', w: 1.6 }],
  points: pts.map(p => ({ x: p.x, y: 0, label: p.name, dy: -14 })),
  texts: pts.filter(p => p.note).map(p => ({ x: p.x, y: -0.75, label: p.note, col: 'var(--accent)', size: 11 })).concat(gaps.map(gp => ({ x: (gp.from + gp.to) / 2, y: 0.4, label: gp.label, col: 'var(--muted)', size: 11 }))) });
// A cliff of height h (drawn as a shaded block) with a launch arrow.
const A9cliff = ({ label, h, up = null, down = null }) => Fig.graph({ label, x0: -4, x1: 10, y0: -2, y1: h * 1.45 + 4, xlab: '', ylab: '', h: 230, axes: false,
  regions: [{ from: -4, to: 0, lo: () => 0, hi: () => h }], hlines: [{ y: 0, label: 'ground / sea' }],
  segs: [up ? { x1: 0.6, y1: h, x2: 0.6, y2: h + h * 0.35 + 2, arrow: true, col: 'var(--accent)', w: 2.2 } : null, down ? { x1: 0.6, y1: h, x2: 0.6, y2: h - h * 0.3 - 1, arrow: true, col: 'var(--accent)', w: 2.2 } : null,
    { x1: 7, y1: 0, x2: 7, y2: h, col: 'var(--muted)', dash: true }].filter(Boolean),
  texts: [{ x: 8.3, y: h / 2, label: h + ' m' }, up ? { x: 3.2, y: h + h * 0.25 + 1, label: up, col: 'var(--accent)' } : null, down ? { x: 3.2, y: h - h * 0.15, label: down, col: 'var(--accent)' } : null].filter(Boolean) });
const A9st = A9g({ label: 'Displacement-time graph: from (0, 0) up to (4, 20), level to (6, 20), then down to (10, 0)', pts: [[0, 0], [4, 20], [6, 20], [10, 0]], ylab: 's (m)', xt: 2, yt: 5, y1: 24 });
const A9vtC = A9g({ label: 'Velocity-time graph: from (0, 0) up to (10, 20), level to (40, 20), then down to (50, 0)', pts: [[0, 0], [10, 20], [40, 20], [50, 0]], xt: 10, yt: 5, y1: 24 });
FIGS['A9.1-ex'] = A9st;
FIGS['A9.2-ex'] = A9vtC;

CONTENT['A9.1'] = {
notes: R`
### Reading a displacement-time graph
- The **gradient** is the **velocity**.
- A horizontal line means the object is **at rest**.
- A negative gradient means it's moving back towards the start.
- A straight line means constant velocity; a curve means the velocity is changing.

$$\text{average velocity} = \frac{\text{total displacement}}{\text{total time}} \qquad \text{average speed} = \frac{\text{total distance}}{\text{total time}}$$

::: booklet
**Learn these:** gradient of a displacement-time graph $=$ velocity, and the two averages above.
:::

### Worked example 1
The graph shows a particle's displacement $s$ m from a point $O$.

[[fig:A9.1-ex]]

- $0$ to $4$ s: velocity $\frac{20}{4} = 5$ m s$^{-1}$.
- $4$ to $6$ s: at rest, $20$ m from $O$.
- $6$ to $10$ s: velocity $\frac{0 - 20}{4} = -5$ m s$^{-1}$, back to $O$.

### Worked example 2: average speed or average velocity?
For the same journey, the total distance is $40$ m but the final displacement is $0$.
- Average speed $= \frac{40}{10} = 4$ m s$^{-1}$.
- Average velocity $= \frac{0}{10} = 0$ m s$^{-1}$.

**The trap:** treating these as the same. Velocity uses displacement, which includes direction.

### Watch out
- Read the axis units carefully (seconds or minutes, metres or kilometres).
`,
questions: [
Q('A9.1-1', 1, R`The graph shows the displacement of a particle. Find its velocity in the first $4$ seconds. [[1]]`,
  [R`Velocity is the gradient.`, R`$\frac{20}{4}$.`],
  [R`|B1|$5$ m s$^{-1}$`], R`$5$ m s$^{-1}$`,
  R`Gradient $= \frac{20}{4} = 5$ m s$^{-1}$.`, { fig: A9st }),
Q('A9.1-2', 1, R`Using the same graph, describe the motion from $t = 4$ to $t = 6$. [[1]]`,
  [R`The line is horizontal.`, R`Zero gradient.`],
  [R`|B1|At rest, $20$ m from the start`], R`At rest`,
  R`The graph is horizontal, so the velocity is zero: the particle is at rest $20$ m from its starting point.`, { fig: A9st }),
Q('A9.1-3', 1, R`Using the same graph, find the velocity from $t = 6$ to $t = 10$. [[1]]`,
  [R`The gradient is negative.`, R`$\frac{0 - 20}{10 - 6}$.`],
  [R`|B1|$-5$ m s$^{-1}$`], R`$-5$ m s$^{-1}$`,
  R`$\frac{0 - 20}{4} = -5$ m s$^{-1}$: $5$ m s$^{-1}$ back towards the start.`, { fig: A9st }),
Q('A9.1-4', 2, R`Using the same graph, find the total distance travelled and the final displacement. [[2]]`,
  [R`It goes out $20$ m and back $20$ m.`, R`Where does it finish?`],
  [R`|B1|Distance $40$ m`, R`|B1|Displacement $0$ m`], R`$40$ m; $0$ m`,
  R`It travels $20$ m out and $20$ m back: $40$ m in total. It finishes where it started, so the displacement is $0$.`, { fig: A9st }),
Q('A9.1-5', 2, R`Using the same graph, find the average speed over the $10$ seconds. [[2]]`,
  [R`Average speed uses distance.`, R`$\frac{40}{10}$.`],
  [R`|M1|$\frac{\text{total distance}}{\text{total time}}$`, R`|A1|$4$ m s$^{-1}$`], R`$4$ m s$^{-1}$`,
  R`Average speed $= \frac{40}{10} = 4$ m s$^{-1}$.`, { fig: A9st }),
Q('A9.1-6', 2, R`A cyclist's displacement-time graph is a straight line from $(0, 0)$ to $(10, 40)$, then a straight line to $(30, 140)$ ($t$ in s, $s$ in m). Find the velocity in each stage. [[2]]`,
  [R`Find each gradient.`, R`Second stage: $\frac{100}{20}$.`],
  [R`|B1|$4$ m s$^{-1}$`, R`|B1|$5$ m s$^{-1}$`], R`$4$ m s$^{-1}$ then $5$ m s$^{-1}$`,
  R`First stage: $\frac{40}{10} = 4$ m s$^{-1}$. Second stage: $\frac{140 - 40}{30 - 10} = 5$ m s$^{-1}$.`,
  { fig: A9g({ label: 'Displacement-time graph from (0, 0) to (10, 40) to (30, 140)', pts: [[0, 0], [10, 40], [30, 140]], ylab: 's (m)', xt: 10, yt: 20 }) }),
Q('A9.1-7', 2, R`A person walks $300$ m from home in $100$ s, rests for $50$ s, then walks home in $150$ s. Find the average speed and the average velocity for the whole journey. [[2]]`,
  [R`Total distance $600$ m, total time $300$ s.`, R`They finish at home.`],
  [R`|B1|Average speed $2$ m s$^{-1}$`, R`|B1|Average velocity $0$`], R`$2$ m s$^{-1}$; $0$`,
  R`Total distance $600$ m in $300$ s: average speed $2$ m s$^{-1}$. The final displacement is $0$, so the average velocity is $0$.`,
  { solFig: A9g({ label: 'Displacement-time graph: up to (100, 300), level to (150, 300), down to (300, 0)', pts: [[0, 0], [100, 300], [150, 300], [300, 0]], ylab: 's (m)', xt: 50, yt: 100 }), noFig: true }),
Q('A9.1-8', 3, R`A particle's displacement-time graph is a straight line from $(0, 0)$ to $(5, 15)$, then a straight line to $(9, -5)$. Find **(a)** each velocity **(b)** the time at which the particle passes back through its starting point. [[3]]`,
  [R`Second gradient: $\frac{-5 - 15}{4}$.`, R`It loses $15$ m at $5$ m s$^{-1}$.`],
  [R`(a)|B1|$3$ m s$^{-1}$ and $-5$ m s$^{-1}$`, R`(b)|M1|$5 + \frac{15}{5}$`, R`(b)|A1|$t = 8$ s`], R`(a) $3$, $-5$ m s$^{-1}$ (b) $8$ s`,
  R`**(a)** $\frac{15}{5} = 3$ m s$^{-1}$, then $\frac{-20}{4} = -5$ m s$^{-1}$.
**(b)** From $s = 15$ at $t = 5$, it returns at $5$ m s$^{-1}$, taking $3$ s: $t = 8$ s.`,
  { fig: A9g({ label: 'Displacement-time graph from (0, 0) to (5, 15) to (9, −5)', pts: [[0, 0], [5, 15], [9, -5]], ylab: 's (m)', xt: 1, yt: 5, y0: -7, y1: 18 }) }),
Q('A9.1-9', 3, R`For the particle in question 8, find the average velocity and the average speed over the $9$ s. [[3]]`,
  [R`Final displacement $-5$ m.`, R`Distance: $15 + 20$.`],
  [R`|B1|Average velocity $-0.556$ m s$^{-1}$`, R`|M1|Distance $35$ m`, R`|A1|Average speed $3.89$ m s$^{-1}$`], R`$-0.556$ m s$^{-1}$; $3.89$ m s$^{-1}$`,
  R`Average velocity $= \frac{-5}{9} = -0.556$ m s$^{-1}$. Distance $= 15 + 20 = 35$ m, so average speed $= \frac{35}{9} = 3.89$ m s$^{-1}$.`, NF),
Q('A9.1-10', 3, R`Walker $A$ leaves $O$ at $1.5$ m s$^{-1}$. At the same time, walker $B$ leaves a point $300$ m away and walks towards $O$ at $2$ m s$^{-1}$. Find when and where they meet. [[3]]`,
  [R`$s_A = 1.5t$ and $s_B = 300 - 2t$.`, R`Set them equal.`],
  [R`|M1|$1.5t = 300 - 2t$`, R`|A1|$t = 85.7$ s`, R`|A1|$129$ m from $O$`], R`After $85.7$ s, $129$ m from $O$`,
  R`$1.5t = 300 - 2t$ gives $3.5t = 300$, $t = 85.7$ s. They meet $1.5 \times 85.7 = 129$ m from $O$.`,
  { fig: A9g({ label: 'Two displacement-time lines: A rising from (0, 0) and B falling from (0, 300); they cross near t = 86', pts: [[0, 0], [150, 225]], extra: [{ pts: [[0, 300], [150, 0]] }], ylab: 's (m)', xt: 25, yt: 50, marks: false, texts: [{ x: 135, y: 230, label: 'A' }, { x: 135, y: 55, label: 'B', col: 'var(--pen)' }] }) }),
Q('A9.1-11', 3, R`What does it mean if part of a displacement-time graph is curved? [[1]]`,
  [R`What is the gradient doing?`, R`Gradient is velocity.`],
  [R`|B1|The velocity is changing (the object is accelerating or decelerating)`], R`The velocity is changing`,
  R`The gradient, which is the velocity, is changing, so the object is accelerating or decelerating.`, NF),
Q('A9.1-12', 4, R`A runner goes $60$ m from $O$ at $4$ m s$^{-1}$, stops for $5$ s, then returns to $O$ at $6$ m s$^{-1}$. Find the total time and the average speed. [[4]]`,
  [R`Outward time $\frac{60}{4}$, return time $\frac{60}{6}$.`, R`Distance $120$ m.`],
  [R`|M1|Times $15$ s and $10$ s`, R`|A1|Total $30$ s`, R`|M1|$\frac{120}{30}$`, R`|A1|$4$ m s$^{-1}$`], R`$30$ s; $4$ m s$^{-1}$`,
  R`Out: $15$ s; rest: $5$ s; back: $10$ s. Total $30$ s, so average speed $= \frac{120}{30} = 4$ m s$^{-1}$.`,
  { solFig: A9g({ label: 'Displacement-time graph: up to (15, 60), level to (20, 60), down to (30, 0)', pts: [[0, 0], [15, 60], [20, 60], [30, 0]], ylab: 's (m)', xt: 5, yt: 20 }), noFig: true }),
Q('A9.1-13', 4, R`A lift rises $12$ m in $6$ s, waits $10$ s, then descends $20$ m in $8$ s. Find **(a)** its final displacement from the start **(b)** its average velocity **(c)** its average speed. [[4]]`,
  [R`$12 - 20$.`, R`Total time $24$ s.`],
  [R`(a)|B1|$-8$ m ($8$ m below the start)`, R`(b)|B1|$-0.333$ m s$^{-1}$`, R`(c)|M1|$\frac{32}{24}$`, R`(c)|A1|$1.33$ m s$^{-1}$`], R`(a) $-8$ m (b) $-0.333$ m s$^{-1}$ (c) $1.33$ m s$^{-1}$`,
  R`**(a)** $12 - 20 = -8$ m.
**(b)** $\frac{-8}{24} = -0.333$ m s$^{-1}$.
**(c)** Distance $32$ m, so $\frac{32}{24} = 1.33$ m s$^{-1}$.`,
  { fig: A9g({ label: 'Displacement-time graph of the lift: up to (6, 12), level to (16, 12), down to (24, −8)', pts: [[0, 0], [6, 12], [16, 12], [24, -8]], ylab: 's (m)', xt: 4, yt: 4, y0: -10, y1: 15 }) }),
Q('A9.1-14', 4, R`A car drives at $20$ m s$^{-1}$ for $30$ s, stops for $20$ s, and then returns to its start at $15$ m s$^{-1}$. Find the total time and the average speed. [[4]]`,
  [R`Distance out: $600$ m.`, R`Return time $\frac{600}{15}$.`],
  [R`|B1|$600$ m out`, R`|M1|Return takes $40$ s`, R`|A1|Total $90$ s`, R`|A1|$13.3$ m s$^{-1}$`], R`$90$ s; $13.3$ m s$^{-1}$`,
  R`It travels $600$ m out, then takes $\frac{600}{15} = 40$ s to return. Total time $90$ s, distance $1200$ m, average speed $13.3$ m s$^{-1}$.`, NF),
Q('A9.1-15', 5, R`Particle $P$ leaves $O$ at $t = 0$ and moves at $2$ m s$^{-1}$. Particle $Q$ leaves $O$ at $t = 4$ along the same line at $5$ m s$^{-1}$. **(a)** Write expressions for the displacements of $P$ and $Q$ for $t \ge 4$. **(b)** Find when and where $Q$ catches $P$. **(c)** Sketch both on one displacement-time graph. [[5]]`,
  [R`$s_Q = 5(t - 4)$.`, R`Set $2t = 5(t - 4)$.`],
  [R`(a)|B1|$s_P = 2t$, $s_Q = 5(t - 4)$`, R`(b)|M1|$2t = 5t - 20$`, R`(b)|A1|$t = 6.67$ s`, R`(b)|A1|$13.3$ m from $O$`, R`(c)|B1|Two lines from $(0, 0)$ and $(4, 0)$ crossing at $(6.67, 13.3)$`], R`(b) $t = 6.67$ s, $13.3$ m`,
  R`**(a)** $s_P = 2t$; $s_Q = 5(t - 4)$ for $t \ge 4$.
**(b)** $2t = 5t - 20$ gives $t = \frac{20}{3} = 6.67$ s, at $s = 13.3$ m.
**(c)** $P$'s line starts at the origin with gradient $2$; $Q$'s starts at $(4, 0)$ with gradient $5$; they cross at $(6.67, 13.3)$.`,
  { solFig: A9g({ label: 'P: line from (0, 0) with gradient 2; Q: line from (4, 0) with gradient 5; they cross at (6.67, 13.3)', pts: [[0, 0], [9, 18]], extra: [{ pts: [[4, 0], [8, 20]] }], ylab: 's (m)', xt: 1, yt: 5, marks: false, texts: [{ x: 8.6, y: 14, label: 'P' }, { x: 7.4, y: 21, label: 'Q', col: 'var(--pen)' }] }), noFig: true })
]};

CONTENT['A9.2'] = {
notes: R`
### Reading a velocity-time graph
- The **gradient** is the **acceleration**.
- The **area** between the graph and the $t$-axis is the **displacement**.
- A horizontal line means constant velocity.
- Area below the axis counts as negative displacement (moving backwards).

::: booklet
**Learn these:** gradient of a velocity-time graph $=$ acceleration, and area $=$ displacement.
:::

### Worked example 1
The graph shows a car's velocity.

[[fig:A9.2-ex]]

- Acceleration in the first $10$ s: $\frac{20}{10} = 2$ m s$^{-2}$.
- Deceleration in the last $10$ s: $2$ m s$^{-2}$.
- Distance: trapezium area $= \frac12(30 + 50) \times 20 = 800$ m.

### Worked example 2: when the graph crosses the axis
A particle's graph goes from $(0, 8)$ to $(4, 0)$ to $(6, -4)$.
- Area above: $\frac12 \times 4 \times 8 = 16$. Area below: $\frac12 \times 2 \times 4 = 4$.
- Displacement $= 16 - 4 = 12$ m, but distance $= 16 + 4 = 20$ m.

**The trap:** adding both areas as positive for the displacement. Area below the axis is motion in the opposite direction.

### Watch out
- Split complicated shapes into triangles, rectangles and trapezia.
- "Deceleration of $2$" means acceleration $-2$.
`,
questions: [
Q('A9.2-1', 1, R`The graph shows a car's velocity. Find the acceleration in the first $10$ s. [[1]]`,
  [R`Acceleration is the gradient.`, R`$\frac{20}{10}$.`],
  [R`|B1|$2$ m s$^{-2}$`], R`$2$ m s$^{-2}$`,
  R`Gradient $= \frac{20}{10} = 2$ m s$^{-2}$.`, { fig: A9vtC }),
Q('A9.2-2', 1, R`Using the same graph, find the deceleration in the last $10$ s. [[1]]`,
  [R`Gradient from $(40, 20)$ to $(50, 0)$.`, R`It's $-2$.`],
  [R`|B1|$2$ m s$^{-2}$`], R`$2$ m s$^{-2}$`,
  R`Gradient $= \frac{0 - 20}{10} = -2$, so the deceleration is $2$ m s$^{-2}$.`, { fig: A9vtC }),
Q('A9.2-3', 1, R`Using the same graph, describe the motion from $t = 10$ to $t = 40$. [[1]]`,
  [R`The line is horizontal.`, R`Zero gradient.`],
  [R`|B1|Constant velocity of $20$ m s$^{-1}$`], R`Constant velocity $20$ m s$^{-1}$`,
  R`The graph is horizontal, so the car moves at a constant $20$ m s$^{-1}$ (zero acceleration).`, { fig: A9vtC }),
Q('A9.2-4', 2, R`Using the same graph, find the total distance travelled. [[2]]`,
  [R`It's a trapezium.`, R`Parallel sides $30$ and $50$, height $20$.`],
  [R`|M1|$\frac12(30 + 50) \times 20$`, R`|A1|$800$ m`], R`$800$ m`,
  R`Area $= \frac12(30 + 50) \times 20 = 800$ m.`, { fig: A9vtC }),
Q('A9.2-5', 2, R`A train starts from rest and accelerates at $0.5$ m s$^{-2}$ for $40$ s. It then travels at constant speed for $T$ s and finally decelerates uniformly to rest in $50$ s. The total distance is $6000$ m. Sketch a velocity-time graph and find $T$. [[4]]`,
  [R`Top speed $0.5 \times 40 = 20$ m s$^{-1}$.`, R`Total area $= 400 + 20T + 500$.`],
  [R`|B1|Top speed $20$ m s$^{-1}$`, R`|M1|Area $= \frac12(40)(20) + 20T + \frac12(50)(20)$`, R`|M1|$900 + 20T = 6000$`, R`|A1|$T = 255$`], R`$T = 255$ s`,
  R`The top speed is $20$ m s$^{-1}$. Area: $400 + 20T + 500 = 6000$, so $20T = 5100$ and $T = 255$.`,
  { solFig: A9g({ label: 'Velocity-time graph: up to (40, 20), level to (295, 20), down to (345, 0)', pts: [[0, 0], [40, 20], [295, 20], [345, 0]], xt: 50, yt: 5, y1: 24 }), noFig: true }),
Q('A9.2-6', 2, R`Using the graph in question 1, find the average speed over the whole journey. [[2]]`,
  [R`Distance $800$ m.`, R`Time $50$ s.`],
  [R`|M1|$\frac{800}{50}$`, R`|A1|$16$ m s$^{-1}$`], R`$16$ m s$^{-1}$`,
  R`Average speed $= \frac{800}{50} = 16$ m s$^{-1}$.`, { fig: A9vtC }),
Q('A9.2-7', 2, R`A car decelerates uniformly from $25$ m s$^{-1}$ to $10$ m s$^{-1}$ in $6$ s. Find the deceleration and the distance travelled. [[2]]`,
  [R`Gradient $\frac{10 - 25}{6}$.`, R`Area of a trapezium.`],
  [R`|B1|$2.5$ m s$^{-2}$`, R`|B1|$105$ m`], R`$2.5$ m s$^{-2}$; $105$ m`,
  R`Gradient $= \frac{-15}{6} = -2.5$, so the deceleration is $2.5$ m s$^{-2}$. Distance $= \frac12(25 + 10) \times 6 = 105$ m.`,
  { solFig: A9g({ label: 'Velocity-time graph: straight line from (0, 25) down to (6, 10)', pts: [[0, 25], [6, 10]], xt: 1, yt: 5, y1: 28 }), noFig: true }),
Q('A9.2-8', 3, R`A particle's velocity-time graph is a straight line from $(0, 8)$ to $(4, 0)$ and then from $(4, 0)$ to $(6, -4)$. Find the displacement and the distance travelled in the $6$ s. [[3]]`,
  [R`Area above the axis: $16$.`, R`Area below: $4$.`],
  [R`|M1|Areas $16$ and $4$`, R`|A1|Displacement $12$ m`, R`|A1|Distance $20$ m`], R`Displacement $12$ m; distance $20$ m`,
  R`Above the axis: $\frac12 \times 4 \times 8 = 16$. Below: $\frac12 \times 2 \times 4 = 4$. Displacement $= 16 - 4 = 12$ m; distance $= 20$ m.`,
  { fig: A9g({ label: 'Velocity-time graph from (0, 8) down through (4, 0) to (6, −4)', pts: [[0, 8], [4, 0], [6, -4]], xt: 1, yt: 2, y0: -5, y1: 9 }) }),
Q('A9.2-9', 3, R`A cyclist accelerates uniformly from $4$ m s$^{-1}$ to $V$ m s$^{-1}$ in $10$ s, travelling $90$ m. Find $V$ and the acceleration. [[3]]`,
  [R`Area $= \frac12(4 + V) \times 10$.`, R`Then gradient.`],
  [R`|M1|$5(4 + V) = 90$`, R`|A1|$V = 14$`, R`|A1|$a = 1$ m s$^{-2}$`], R`$V = 14$; $a = 1$ m s$^{-2}$`,
  R`$5(4 + V) = 90$, so $V = 14$. Acceleration $= \frac{14 - 4}{10} = 1$ m s$^{-2}$.`, NF),
Q('A9.2-10', 3, R`Car $A$ passes a point $P$ at a constant $15$ m s$^{-1}$. At the same moment car $B$ starts from rest at $P$ with acceleration $1.5$ m s$^{-2}$. Find when $B$ overtakes $A$, and how far from $P$. [[3]]`,
  [R`Equal areas under the two graphs.`, R`$\frac12 t \times 1.5t = 15t$.`],
  [R`|M1|$0.75t^2 = 15t$`, R`|A1|$t = 20$ s`, R`|A1|$300$ m`], R`$20$ s; $300$ m`,
  R`$B$'s displacement is $\frac12 \times t \times 1.5t = 0.75t^2$ and $A$'s is $15t$. Equal when $t = 20$ s, at $300$ m from $P$.`,
  { solFig: A9g({ label: 'A: horizontal line at 15; B: straight line from (0, 0) with gradient 1.5', pts: [[0, 15], [25, 15]], extra: [{ pts: [[0, 0], [25, 37.5]] }], xt: 5, yt: 10, y1: 40, marks: false, texts: [{ x: 23, y: 18, label: 'A' }, { x: 21, y: 36, label: 'B', col: 'var(--pen)' }] }), noFig: true }),
Q('A9.2-11', 3, R`Using the graph in question 1, find the time at which the car has travelled $500$ m. [[2]]`,
  [R`The first $10$ s gives $100$ m.`, R`Then $20$ m every second.`],
  [R`|M1|$100 + 20(t - 10) = 500$`, R`|A1|$t = 30$ s`], R`$30$ s`,
  R`The first $10$ s covers $100$ m. Then $100 + 20(t - 10) = 500$ gives $t = 30$ s.`, { fig: A9vtC }),
Q('A9.2-12', 4, R`A car starts from rest, accelerates at $a$ m s$^{-2}$ to $30$ m s$^{-1}$, travels at $30$ m s$^{-1}$ for $60$ s, and then decelerates at $2a$ m s$^{-2}$ to rest. The whole journey takes $105$ s. Find $a$ and the total distance. [[4]]`,
  [R`Accelerating takes $\frac{30}{a}$ s; decelerating $\frac{15}{a}$ s.`, R`Distance is a trapezium.`],
  [R`|M1|$\frac{30}{a} + 60 + \frac{15}{a} = 105$`, R`|A1|$a = 1$`, R`|M1|$\frac12(105 + 60) \times 30$`, R`|A1|$2475$ m`], R`$a = 1$; $2475$ m`,
  R`$\frac{45}{a} = 45$, so $a = 1$. Distance $= \frac12(105 + 60) \times 30 = 2475$ m.`,
  { solFig: A9g({ label: 'Velocity-time graph: up to (30, 30), level to (90, 30), down to (105, 0)', pts: [[0, 0], [30, 30], [90, 30], [105, 0]], xt: 15, yt: 10, y1: 35 }), noFig: true }),
Q('A9.2-13', 4, R`A lift starts from rest and accelerates at $0.5$ m s$^{-2}$ up to $2$ m s$^{-1}$. It then moves at constant speed, and finally decelerates at $1$ m s$^{-2}$ to rest. It rises $30$ m altogether. Find the time spent at constant speed and the total time. [[4]]`,
  [R`Accelerating: $4$ s, covering $4$ m. Decelerating: $2$ s, covering $2$ m.`, R`$24$ m at $2$ m s$^{-1}$.`],
  [R`|M1|Times $4$ s and $2$ s`, R`|M1|Distances $4$ m and $2$ m`, R`|A1|Constant speed for $12$ s`, R`|A1|Total $18$ s`], R`$12$ s; $18$ s`,
  R`Accelerating takes $\frac{2}{0.5} = 4$ s ($4$ m); decelerating takes $2$ s ($2$ m). That leaves $24$ m at $2$ m s$^{-1}$: $12$ s. Total $18$ s.`,
  { solFig: A9g({ label: 'Velocity-time graph of the lift: up to (4, 2), level to (16, 2), down to (18, 0)', pts: [[0, 0], [4, 2], [16, 2], [18, 0]], xt: 2, yt: 1, y1: 2.6 }), noFig: true }),
Q('A9.2-14', 4, R`A sprinter accelerates uniformly from rest to $V$ m s$^{-1}$ in $4$ s and then runs at $V$ m s$^{-1}$, finishing $100$ m in $12$ s. Find $V$ and the acceleration. [[3]]`,
  [R`Area $= \frac12(4)V + 8V$.`, R`$10V = 100$.`],
  [R`|M1|$2V + 8V = 100$`, R`|A1|$V = 10$`, R`|A1|$a = 2.5$ m s$^{-2}$`], R`$V = 10$; $a = 2.5$ m s$^{-2}$`,
  R`$\frac12 \times 4 \times V + 8V = 10V = 100$, so $V = 10$ and $a = \frac{10}{4} = 2.5$ m s$^{-2}$.`,
  { solFig: A9g({ label: 'Velocity-time graph: up to (4, 10), level to (12, 10)', pts: [[0, 0], [4, 10], [12, 10]], xt: 2, yt: 2, y1: 12 }), noFig: true }),
Q('A9.2-15', 5, R`Train $P$ starts from rest at a station and accelerates at $0.8$ m s$^{-2}$ until it reaches $24$ m s$^{-1}$, then continues at that speed. At the moment $P$ starts, train $Q$ passes the station at a constant $20$ m s$^{-1}$ on a parallel track. **(a)** Find when $P$ reaches $24$ m s$^{-1}$. **(b)** Find when $P$ overtakes $Q$, and how far from the station. [[6]]`,
  [R`At $t = 30$, $P$ has gone $360$ m and $Q$ $600$ m.`, R`Then $360 + 24(t - 30) = 20t$.`],
  [R`(a)|B1|$30$ s`, R`(b)|M1|$P$: $360$ m at $t = 30$`, R`(b)|M1|$360 + 24(t - 30) = 20t$`, R`(b)|A1|$t = 90$ s`, R`(b)|M1|$20 \times 90$`, R`(b)|A1|$1800$ m`], R`(a) $30$ s (b) $90$ s, $1800$ m`,
  R`**(a)** $\frac{24}{0.8} = 30$ s.
**(b)** At $t = 30$, $P$ has travelled $\frac12 \times 30 \times 24 = 360$ m. For $t \ge 30$: $360 + 24(t - 30) = 20t$, so $4t = 360$ and $t = 90$ s. Distance $20 \times 90 = 1800$ m.`,
  { solFig: A9g({ label: 'P: up from (0, 0) to (30, 24) then level; Q: level at 20', pts: [[0, 0], [30, 24], [100, 24]], extra: [{ pts: [[0, 20], [100, 20]] }], xt: 10, yt: 4, y1: 28, marks: false, texts: [{ x: 90, y: 26, label: 'P' }, { x: 90, y: 18, label: 'Q', col: 'var(--pen)' }] }), noFig: true })
]};

CONTENT['A9.3'] = {
notes: R`
### Two formulae
For motion in a straight line with **constant** acceleration $a$:
$$v = u + at \qquad s = \left(\frac{u + v}{2}\right)t$$
where $u$ is the initial velocity, $v$ the final velocity, $t$ the time and $s$ the displacement.

Both come from the velocity-time graph: the gradient is $a$, and the area is a trapezium.

::: booklet
**Learn these:** both formulae. Choose a positive direction, and make anything in the opposite direction negative.
:::

### Worked example 1
A car slows uniformly from $30$ m s$^{-1}$ to rest in $6$ s. Find the deceleration and the distance.
- $0 = 30 + 6a$, so $a = -5$: the deceleration is $5$ m s$^{-2}$.
- $s = \frac{30 + 0}{2} \times 6 = 90$ m.

### Worked example 2: units first
A car travelling at $72$ km h$^{-1}$ stops in $8$ s.
- $u = 72 \div 3.6 = 20$ m s$^{-1}$.
- $a = \frac{0 - 20}{8} = -2.5$ m s$^{-2}$, and $s = \frac{20}{2} \times 8 = 80$ m.

**The trap:** using $u = 72$. The formulae only work if every quantity is in consistent units, here metres and seconds.

### Watch out
- List $s, u, v, a, t$ and tick the three you know before choosing a formula.
`,
questions: [
Q('A9.3-1', 1, R`A particle has $u = 3$ m s$^{-1}$ and $a = 2$ m s$^{-2}$. Find $v$ after $5$ s. [[1]]`,
  [R`$v = u + at$.`, R`$3 + 10$.`],
  [R`|B1|$13$ m s$^{-1}$`], R`$13$ m s$^{-1}$`,
  R`$v = 3 + 2 \times 5 = 13$ m s$^{-1}$.`, NF),
Q('A9.3-2', 1, R`A particle accelerates uniformly from $4$ m s$^{-1}$ to $10$ m s$^{-1}$ in $3$ s. Find the distance travelled. [[1]]`,
  [R`$s = \frac{u + v}{2}t$.`, R`$7 \times 3$.`],
  [R`|B1|$21$ m`], R`$21$ m`,
  R`$s = \frac{4 + 10}{2} \times 3 = 21$ m.`, NF),
Q('A9.3-3', 1, R`A particle moving in the positive direction has a deceleration of $2$ m s$^{-2}$. What value of $a$ should be used in the formulae? [[1]]`,
  [R`Deceleration slows it down.`, R`So the acceleration is negative.`],
  [R`|B1|$a = -2$`], R`$-2$ m s$^{-2}$`,
  R`Deceleration acts against the motion, so $a = -2$ m s$^{-2}$.`, NF),
Q('A9.3-4', 2, R`A car slows uniformly from $30$ m s$^{-1}$ to rest in $6$ s. Find the deceleration and the distance travelled. [[2]]`,
  [R`$0 = 30 + 6a$.`, R`$s = \frac{30 + 0}{2} \times 6$.`],
  [R`|B1|$5$ m s$^{-2}$`, R`|B1|$90$ m`], R`$5$ m s$^{-2}$; $90$ m`,
  R`$a = -5$, so the deceleration is $5$ m s$^{-2}$. $s = 15 \times 6 = 90$ m.`, { solFig: A9g({ label: 'Velocity-time graph: straight line from (0, 30) to (6, 0)', pts: [[0, 30], [6, 0]], xt: 1, yt: 10, y1: 34 }), noFig: true }),
Q('A9.3-5', 2, R`A particle starts at $12$ m s$^{-1}$ with acceleration $-3$ m s$^{-2}$. Find when it comes to rest. [[2]]`,
  [R`$0 = 12 - 3t$.`, R`Solve for $t$.`],
  [R`|M1|$0 = 12 - 3t$`, R`|A1|$t = 4$ s`], R`$4$ s`,
  R`$0 = 12 - 3t$, so $t = 4$ s.`, NF),
Q('A9.3-6', 2, R`A particle travels $40$ m in $5$ s with constant acceleration, reaching $10$ m s$^{-1}$. Find its initial speed and its acceleration. [[3]]`,
  [R`$40 = \frac{u + 10}{2} \times 5$.`, R`Then $10 = u + 5a$.`],
  [R`|M1|$\frac{u + 10}{2} \times 5 = 40$`, R`|A1|$u = 6$ m s$^{-1}$`, R`|A1|$a = 0.8$ m s$^{-2}$`], R`$u = 6$ m s$^{-1}$; $a = 0.8$ m s$^{-2}$`,
  R`$\frac{u + 10}{2} = 8$, so $u = 6$. Then $10 = 6 + 5a$ gives $a = 0.8$ m s$^{-2}$.`, NF),
Q('A9.3-7', 2, R`A cyclist starts from rest and accelerates at $0.6$ m s$^{-2}$ for $15$ s. Find the final speed and the distance travelled. [[2]]`,
  [R`$v = 0 + 0.6 \times 15$.`, R`Then $s = \frac{0 + v}{2} \times 15$.`],
  [R`|B1|$9$ m s$^{-1}$`, R`|B1|$67.5$ m`], R`$9$ m s$^{-1}$; $67.5$ m`,
  R`$v = 9$ m s$^{-1}$ and $s = 4.5 \times 15 = 67.5$ m.`, NF),
Q('A9.3-8', 3, R`A particle passes $A$ at $5$ m s$^{-1}$ and $B$, $8$ s later, at $21$ m s$^{-1}$. Find $AB$ and the acceleration. [[3]]`,
  [R`$s = \frac{5 + 21}{2} \times 8$.`, R`$a = \frac{21 - 5}{8}$.`],
  [R`|M1|$\frac{5 + 21}{2} \times 8$`, R`|A1|$AB = 104$ m`, R`|A1|$a = 2$ m s$^{-2}$`], R`$104$ m; $2$ m s$^{-2}$`,
  R`$AB = 13 \times 8 = 104$ m and $a = \frac{16}{8} = 2$ m s$^{-2}$.`, { fig: A9line({ label: 'A particle moves along a line from A at 5 m/s to B at 21 m/s, taking 8 s', pts: [{ x: 0, name: 'A', note: '5 m s⁻¹' }, { x: 6, name: 'B', note: '21 m s⁻¹' }], gaps: [{ from: 0, to: 6, label: '8 s' }] }) }),
Q('A9.3-9', 3, R`A car travelling at $72$ km h$^{-1}$ brakes uniformly and stops in $8$ s. Find the deceleration and the stopping distance. [[3]]`,
  [R`Convert to m s$^{-1}$ first.`, R`$72 \div 3.6 = 20$.`],
  [R`|B1|$u = 20$ m s$^{-1}$`, R`|B1|$2.5$ m s$^{-2}$`, R`|B1|$80$ m`], R`$2.5$ m s$^{-2}$; $80$ m`,
  R`$u = 20$ m s$^{-1}$. $a = \frac{0 - 20}{8} = -2.5$, so the deceleration is $2.5$ m s$^{-2}$. $s = \frac{20}{2} \times 8 = 80$ m.`, NF),
Q('A9.3-10', 3, R`A particle moving at $18$ m s$^{-1}$ decelerates at $4$ m s$^{-2}$. Find the time taken to stop and the distance travelled while stopping. [[3]]`,
  [R`$0 = 18 - 4t$.`, R`Then the average speed times $t$.`],
  [R`|M1|$0 = 18 - 4t$`, R`|A1|$t = 4.5$ s`, R`|A1|$40.5$ m`], R`$4.5$ s; $40.5$ m`,
  R`$t = 4.5$ s, and $s = \frac{18}{2} \times 4.5 = 40.5$ m.`, NF),
Q('A9.3-11', 3, R`A particle starts from rest and accelerates at $2$ m s$^{-2}$ for $5$ s, then moves at constant speed for $10$ s. Find the total distance. [[3]]`,
  [R`Speed after $5$ s: $10$ m s$^{-1}$.`, R`$25$ m then $100$ m.`],
  [R`|B1|$v = 10$ m s$^{-1}$`, R`|M1|$\frac{0 + 10}{2} \times 5 + 10 \times 10$`, R`|A1|$125$ m`], R`$125$ m`,
  R`$v = 10$ m s$^{-1}$ after $5$ s, having gone $25$ m. Then $10 \times 10 = 100$ m. Total $125$ m.`, NF),
Q('A9.3-12', 4, R`A train passes a signal and accelerates at $0.5$ m s$^{-2}$ for $20$ s, covering $300$ m. Find its speed at the signal and $20$ s later. [[4]]`,
  [R`$v = u + 10$.`, R`$\frac{u + (u + 10)}{2} \times 20 = 300$.`],
  [R`|M1|$v = u + 0.5 \times 20$`, R`|M1|$\frac{2u + 10}{2} \times 20 = 300$`, R`|A1|$u = 10$ m s$^{-1}$`, R`|A1|$v = 20$ m s$^{-1}$`], R`$10$ m s$^{-1}$ and $20$ m s$^{-1}$`,
  R`$v = u + 10$, so $(2u + 10) \times 10 = 300$, giving $u = 10$ m s$^{-1}$ and $v = 20$ m s$^{-1}$.`, NF),
Q('A9.3-13', 4, R`A particle moves with $u = 6$ m s$^{-1}$ and $a = -2$ m s$^{-2}$. Find the time when its velocity is $-4$ m s$^{-1}$, and its displacement at that time. [[3]]`,
  [R`$-4 = 6 - 2t$.`, R`$s = \frac{6 + (-4)}{2}t$.`],
  [R`|M1|$-4 = 6 - 2t$`, R`|A1|$t = 5$ s`, R`|A1|$s = 5$ m`], R`$5$ s; $5$ m`,
  R`$t = 5$ s. $s = \frac{6 - 4}{2} \times 5 = 5$ m. (It went $9$ m forwards, then $4$ m back.)`, NF),
Q('A9.3-14', 4, R`A particle passes $A$ at $3$ m s$^{-1}$ and reaches $B$ $6$ s later at $15$ m s$^{-1}$. Find **(a)** the acceleration **(b)** $AB$ **(c)** the speed halfway through the time. [[4]]`,
  [R`$a = \frac{15 - 3}{6}$.`, R`Halfway in time: $t = 3$.`],
  [R`(a)|B1|$2$ m s$^{-2}$`, R`(b)|M1|$\frac{3 + 15}{2} \times 6$`, R`(b)|A1|$54$ m`, R`(c)|B1|$9$ m s$^{-1}$`], R`(a) $2$ m s$^{-2}$ (b) $54$ m (c) $9$ m s$^{-1}$`,
  R`**(a)** $a = 2$ m s$^{-2}$.
**(b)** $AB = 9 \times 6 = 54$ m.
**(c)** $v = 3 + 2 \times 3 = 9$ m s$^{-1}$.`, NF),
Q('A9.3-15', 5, R`A car accelerates uniformly from $5$ m s$^{-1}$ to $25$ m s$^{-1}$ in $8$ s, and then decelerates uniformly to rest in $10$ s. Find **(a)** the acceleration **(b)** the deceleration **(c)** the total distance **(d)** the average speed. [[6]]`,
  [R`Draw a velocity-time graph.`, R`Total time $18$ s.`],
  [R`(a)|B1|$2.5$ m s$^{-2}$`, R`(b)|B1|$2.5$ m s$^{-2}$`, R`(c)|M1|$\frac{5 + 25}{2}(8) + \frac{25}{2}(10)$`, R`(c)|A1|$245$ m`, R`(d)|M1|$\frac{245}{18}$`, R`(d)|A1|$13.6$ m s$^{-1}$`], R`(a) $2.5$ (b) $2.5$ m s$^{-2}$ (c) $245$ m (d) $13.6$ m s$^{-1}$`,
  R`**(a)** $\frac{20}{8} = 2.5$ m s$^{-2}$.
**(b)** $\frac{25}{10} = 2.5$ m s$^{-2}$.
**(c)** $120 + 125 = 245$ m.
**(d)** $\frac{245}{18} = 13.6$ m s$^{-1}$.`,
  { solFig: A9g({ label: 'Velocity-time graph: from (0, 5) up to (8, 25), then down to (18, 0)', pts: [[0, 5], [8, 25], [18, 0]], xt: 2, yt: 5, y1: 28 }), noFig: true })
]};

CONTENT['A9.4'] = {
notes: R`
### Three more formulae
$$v^2 = u^2 + 2as \qquad s = ut + \tfrac12at^2 \qquad s = vt - \tfrac12at^2$$
Each formula leaves out one of $s, u, v, a, t$:

| Formula | Leaves out |
|---|---|
| $v = u + at$ | $s$ |
| $s = \frac{u+v}{2}t$ | $a$ |
| $v^2 = u^2 + 2as$ | $t$ |
| $s = ut + \frac12at^2$ | $v$ |
| $s = vt - \frac12at^2$ | $u$ |

::: booklet
**Learn these:** all five formulae, and pick the one without the quantity you neither know nor need.
:::

### Worked example 1
A car brakes from $25$ m s$^{-1}$ to rest in $50$ m. Find the deceleration.
- $t$ isn't involved, so use $v^2 = u^2 + 2as$: $0 = 625 + 100a$, so $a = -6.25$.
- Deceleration $6.25$ m s$^{-2}$.

### Worked example 2: two times
A particle has $u = 12$ m s$^{-1}$ and $a = -3$ m s$^{-2}$. When is it $18$ m from its start?
- $18 = 12t - 1.5t^2$, so $t^2 - 8t + 12 = 0$ and $t = 2$ or $t = 6$.
- Both are valid: it passes the point going out at $t = 2$ and coming back at $t = 6$.

**The trap:** rejecting one of the roots without thinking. Only reject a time if it's negative or outside the motion described.

### Watch out
- Speed is $|v|$: $v^2 = u^2 + 2as$ gives $v = \pm\sqrt{\dots}$; choose the sign from the context.
`,
questions: [
Q('A9.4-1', 1, R`A particle starts from rest and accelerates at $3$ m s$^{-2}$ over $24$ m. Find its final speed. [[1]]`,
  [R`$v^2 = u^2 + 2as$.`, R`$v^2 = 144$.`],
  [R`|B1|$12$ m s$^{-1}$`], R`$12$ m s$^{-1}$`,
  R`$v^2 = 0 + 2 \times 3 \times 24 = 144$, so $v = 12$ m s$^{-1}$.`, NF),
Q('A9.4-2', 1, R`A particle has $u = 5$ m s$^{-1}$ and $a = 2$ m s$^{-2}$. Find its displacement after $4$ s. [[1]]`,
  [R`$s = ut + \frac12at^2$.`, R`$20 + 16$.`],
  [R`|B1|$36$ m`], R`$36$ m`,
  R`$s = 5 \times 4 + \frac12 \times 2 \times 16 = 36$ m.`, NF),
Q('A9.4-3', 1, R`A particle reaches $20$ m s$^{-1}$ after accelerating at $2$ m s$^{-2}$ for $3$ s. Find the distance it travelled in those $3$ s. [[1]]`,
  [R`$u$ isn't given: use $s = vt - \frac12at^2$.`, R`$60 - 9$.`],
  [R`|B1|$51$ m`], R`$51$ m`,
  R`$s = 20 \times 3 - \frac12 \times 2 \times 9 = 51$ m.`, NF),
Q('A9.4-4', 2, R`A car brakes uniformly from $25$ m s$^{-1}$ to rest in $50$ m. Find the deceleration. [[2]]`,
  [R`$v^2 = u^2 + 2as$.`, R`$0 = 625 + 100a$.`],
  [R`|M1|$0 = 25^2 + 2a(50)$`, R`|A1|$6.25$ m s$^{-2}$`], R`$6.25$ m s$^{-2}$`,
  R`$0 = 625 + 100a$, so $a = -6.25$: the deceleration is $6.25$ m s$^{-2}$.`, NF),
Q('A9.4-5', 2, R`A particle moving at $4$ m s$^{-1}$ accelerates at $1.5$ m s$^{-2}$ for $6$ s. Find the distance travelled. [[2]]`,
  [R`$s = ut + \frac12at^2$.`, R`$24 + 27$.`],
  [R`|M1|$4(6) + \frac12(1.5)(36)$`, R`|A1|$51$ m`], R`$51$ m`,
  R`$s = 24 + 27 = 51$ m.`, NF),
Q('A9.4-6', 2, R`A particle starts at $3$ m s$^{-1}$ and accelerates at $2$ m s$^{-2}$. Find the time taken to travel $18$ m. [[2]]`,
  [R`$18 = 3t + t^2$.`, R`Factorise.`],
  [R`|M1|$t^2 + 3t - 18 = 0$`, R`|A1|$t = 3$ s`], R`$3$ s`,
  R`$t^2 + 3t - 18 = 0$, which factorises as $(t + 6)(t - 3) = 0$. $t > 0$, so $t = 3$ s.`, NF),
Q('A9.4-7', 2, R`A particle is projected along a line at $10$ m s$^{-1}$ with acceleration $-2$ m s$^{-2}$. Find when it returns to its starting point. [[2]]`,
  [R`$s = 0$.`, R`$10t - t^2 = 0$.`],
  [R`|M1|$10t - t^2 = 0$`, R`|A1|$t = 10$ s`], R`$10$ s`,
  R`$s = 10t - t^2 = t(10 - t) = 0$, so it is back at the start when $t = 10$ s.`, NF),
Q('A9.4-8', 3, R`Car $A$ starts from rest at a junction with acceleration $2$ m s$^{-2}$. At the same moment car $B$ passes the junction at a constant $12$ m s$^{-1}$. Find when $A$ catches $B$, and how far from the junction. [[3]]`,
  [R`$s_A = t^2$; $s_B = 12t$.`, R`Set equal.`],
  [R`|M1|$t^2 = 12t$`, R`|A1|$t = 12$ s`, R`|A1|$144$ m`], R`$12$ s; $144$ m`,
  R`$t^2 = 12t$ gives $t = 12$ s (ignoring $t = 0$), at $144$ m.`, NF),
Q('A9.4-9', 3, R`A particle decelerates from $20$ m s$^{-1}$ at $4$ m s$^{-2}$. Find the distance travelled when its speed has fallen to $8$ m s$^{-1}$. [[2]]`,
  [R`$v^2 = u^2 + 2as$.`, R`$64 = 400 - 8s$.`],
  [R`|M1|$8^2 = 20^2 - 8s$`, R`|A1|$42$ m`], R`$42$ m`,
  R`$64 = 400 - 8s$, so $s = 42$ m.`, NF),
Q('A9.4-10', 3, R`A particle starts at $2$ m s$^{-1}$ and travels $30$ m in $5$ s with constant acceleration. Find the acceleration. [[2]]`,
  [R`$30 = 2(5) + \frac12a(25)$.`, R`$12.5a = 20$.`],
  [R`|M1|$30 = 10 + 12.5a$`, R`|A1|$a = 1.6$ m s$^{-2}$`], R`$1.6$ m s$^{-2}$`,
  R`$30 = 10 + 12.5a$, so $a = 1.6$ m s$^{-2}$.`, NF),
Q('A9.4-11', 3, R`A particle has $u = 2$ m s$^{-1}$ and $a = 4$ m s$^{-2}$. Find the distance it travels during the third second. [[3]]`,
  [R`Third second: from $t = 2$ to $t = 3$.`, R`$s(3) - s(2)$.`],
  [R`|M1|$s(3) = 6 + 18 = 24$`, R`|M1|$s(2) = 4 + 8 = 12$`, R`|A1|$12$ m`], R`$12$ m`,
  R`$s(3) = 24$ m and $s(2) = 12$ m, so the third second covers $12$ m.`, NF),
Q('A9.4-12', 4, R`A particle moving with constant acceleration passes $A$, $B$ and $C$, where $AB = 24$ m and $BC = 40$ m. It takes $2$ s from $A$ to $B$ and $2$ s from $B$ to $C$. Find its speed at $A$ and its acceleration. [[4]]`,
  [R`Use $A$ as the start for both: $AC = 64$ m in $4$ s.`, R`$24 = 2u + 2a$ and $64 = 4u + 8a$.`],
  [R`|M1|$24 = 2u + \frac12a(4)$`, R`|M1|$64 = 4u + \frac12a(16)$`, R`|A1|$a = 4$ m s$^{-2}$`, R`|A1|$u = 8$ m s$^{-1}$`], R`$u = 8$ m s$^{-1}$; $a = 4$ m s$^{-2}$`,
  R`$A$ to $B$: $24 = 2u + 2a$. $A$ to $C$: $64 = 4u + 8a$. Doubling the first gives $48 = 4u + 4a$; subtracting, $16 = 4a$, so $a = 4$ and $u = 8$.`, NF),
Q('A9.4-13', 4, R`A particle has $u = 12$ m s$^{-1}$ and $a = -3$ m s$^{-2}$. Find the length of time for which it is more than $18$ m from its starting point (in the positive direction). [[4]]`,
  [R`$18 = 12t - 1.5t^2$.`, R`$t^2 - 8t + 12 = 0$.`],
  [R`|M1|$12t - 1.5t^2 = 18$`, R`|M1|$t^2 - 8t + 12 = 0$`, R`|A1|$t = 2$ and $t = 6$`, R`|A1|$4$ s`], R`$4$ s`,
  R`$(t - 2)(t - 6) = 0$, so it is at $18$ m when $t = 2$ (going out) and $t = 6$ (coming back). It is beyond $18$ m for $4$ s.`, NF),
Q('A9.4-14', 4, R`$A$ and $B$ are $100$ m apart. Particle $P$ leaves $A$ towards $B$ at $4$ m s$^{-1}$ with acceleration $1$ m s$^{-2}$. At the same time particle $Q$ leaves $B$ towards $A$ at $2$ m s$^{-1}$ with acceleration $0.5$ m s$^{-2}$. Find when they meet. [[4]]`,
  [R`Their distances add to $100$.`, R`$4t + 0.5t^2 + 2t + 0.25t^2 = 100$.`],
  [R`|M1|$s_P = 4t + 0.5t^2$, $s_Q = 2t + 0.25t^2$`, R`|M1|$0.75t^2 + 6t - 100 = 0$`, R`|M1|Quadratic formula`, R`|A1|$t = 8.22$ s`], R`$8.22$ s`,
  R`$0.75t^2 + 6t - 100 = 0$ gives $t = \frac{-6 + \sqrt{36 + 300}}{1.5} = \frac{-6 + 18.33}{1.5} = 8.22$ s.`, NF),
Q('A9.4-15', 5, R`A car passes point $A$ and decelerates uniformly. It passes $B$, $100$ m further on, $5$ s later, with speed $15$ m s$^{-1}$. **(a)** Find the deceleration. **(b)** Find the speed at $A$. **(c)** Find how far beyond $B$ the car travels before it stops. **(d)** Find the total time from $A$ until it stops. [[7]]`,
  [R`$u$ is unknown: use $s = vt - \frac12at^2$.`, R`Then $v = u + at$ for (b).`],
  [R`(a)|M1|$100 = 15(5) - \frac12a(25)$`, R`(a)|M1|$12.5a = -25$`, R`(a)|A1|Deceleration $2$ m s$^{-2}$`, R`(b)|B1|$u = 25$ m s$^{-1}$`, R`(c)|M1|$0 = 225 - 4s$`, R`(c)|A1|$56.25$ m`, R`(d)|B1|$12.5$ s`], R`(a) $2$ m s$^{-2}$ (b) $25$ m s$^{-1}$ (c) $56.25$ m (d) $12.5$ s`,
  R`**(a)** $100 = 75 - 12.5a$, so $a = -2$: deceleration $2$ m s$^{-2}$.
**(b)** $15 = u - 10$, so $u = 25$ m s$^{-1}$.
**(c)** $0 = 15^2 - 4s$, so $s = 56.25$ m.
**(d)** From $B$ it takes $\frac{15}{2} = 7.5$ s more: $5 + 7.5 = 12.5$ s.`,
  { fig: A9line({ label: 'A car decelerates from A to B, 100 m in 5 s, passing B at 15 m/s, and stops at C', pts: [{ x: 0, name: 'A', note: 'u = ?' }, { x: 5, name: 'B', note: '15 m s⁻¹' }, { x: 7.8, name: 'C', note: 'at rest' }], gaps: [{ from: 0, to: 5, label: '100 m, 5 s' }] }) })
]};

CONTENT['A9.5'] = {
notes: R`
### Free fall
An object moving vertically under gravity alone has constant acceleration $g = 9.8$ m s$^{-2}$ **downwards**.
- Choose up (or down) as positive and stick to it.
- If up is positive, $a = -9.8$.
- At the top of its path, an object thrown upwards has $v = 0$.
- The time to go up equals the time to come back down to the same level.

::: booklet
**Learn this:** use $g = 9.8$ m s$^{-2}$, and give answers to $2$ or $3$ significant figures. The value of $g$ is given on the front of the paper.
:::

### Worked example 1
A ball is thrown up at $14.7$ m s$^{-1}$. Find the greatest height and the time to reach it.
- Up positive, $a = -9.8$, $v = 0$ at the top.
- $0 = 14.7^2 - 19.6s$, so $s = 11.0$ m.
- $0 = 14.7 - 9.8t$, so $t = 1.5$ s.

### Worked example 2: displacement below the start
A ball is thrown up at $12$ m s$^{-1}$ from $2$ m above the ground. When does it land?
- Up positive: the ground is at $s = -2$.
- $-2 = 12t - 4.9t^2$, so $4.9t^2 - 12t - 2 = 0$ and $t = 2.61$ s.

**The trap:** using $s = +2$. Landing is below the point of projection, so with up positive its displacement is negative.

### Watch out
- When asked for a speed, give a positive number.
`,
questions: [
Q('A9.5-1', 1, R`A ball is dropped from rest. Find its speed after $2$ s. [[1]]`,
  [R`$v = u + at$ with down positive.`, R`$9.8 \times 2$.`],
  [R`|B1|$19.6$ m s$^{-1}$`], R`$19.6$ m s$^{-1}$`,
  R`$v = 0 + 9.8 \times 2 = 19.6$ m s$^{-1}$.`, NF),
Q('A9.5-2', 1, R`A stone is dropped from rest. How far does it fall in $3$ s? [[1]]`,
  [R`$s = \frac12gt^2$.`, R`$4.9 \times 9$.`],
  [R`|B1|$44.1$ m`], R`$44.1$ m`,
  R`$s = \frac12 \times 9.8 \times 9 = 44.1$ m.`, NF),
Q('A9.5-3', 1, R`A ball is thrown vertically upwards at $14.7$ m s$^{-1}$. Find the time it takes to reach its highest point. [[1]]`,
  [R`$v = 0$ at the top.`, R`$0 = 14.7 - 9.8t$.`],
  [R`|B1|$1.5$ s`], R`$1.5$ s`,
  R`$0 = 14.7 - 9.8t$, so $t = 1.5$ s.`, NF),
Q('A9.5-4', 2, R`For the ball in question 3, find the greatest height above the point of projection. [[2]]`,
  [R`$v^2 = u^2 + 2as$ with $v = 0$.`, R`$0 = 14.7^2 - 19.6s$.`],
  [R`|M1|$0 = 14.7^2 - 2(9.8)s$`, R`|A1|$11.0$ m`], R`$11.0$ m`,
  R`$s = \frac{14.7^2}{19.6} = 11.0$ m (to $3$ s.f.).`, NF),
Q('A9.5-5', 2, R`A stone is dropped from a bridge $40$ m above a river. Find the time it takes to reach the water and its speed when it does. [[3]]`,
  [R`Down positive: $40 = 4.9t^2$.`, R`Then $v = 9.8t$.`],
  [R`|M1|$40 = 4.9t^2$`, R`|A1|$t = 2.86$ s`, R`|A1|$28$ m s$^{-1}$`], R`$2.86$ s; $28$ m s$^{-1}$`,
  R`$t = \sqrt{\frac{40}{4.9}} = 2.86$ s, and $v = 9.8 \times 2.857 = 28.0$ m s$^{-1}$.`, { fig: A9cliff({ label: 'Stone dropped from a bridge 40 m above the river', h: 40, down: 'dropped from rest' }) }),
Q('A9.5-6', 2, R`A ball is thrown vertically upwards at $19.6$ m s$^{-1}$. Find the time until it returns to its starting point. [[2]]`,
  [R`$s = 0$: $19.6t - 4.9t^2 = 0$.`, R`Or double the time to the top.`],
  [R`|M1|$19.6t - 4.9t^2 = 0$`, R`|A1|$t = 4$ s`], R`$4$ s`,
  R`$t(19.6 - 4.9t) = 0$, so $t = 4$ s.`, NF),
Q('A9.5-7', 2, R`A ball is thrown vertically upwards at $10$ m s$^{-1}$. Find its speed when it is $3$ m above the point of projection. [[2]]`,
  [R`$v^2 = 100 - 2(9.8)(3)$.`, R`Speed is positive.`],
  [R`|M1|$v^2 = 10^2 - 2(9.8)(3)$`, R`|A1|$6.42$ m s$^{-1}$`], R`$6.42$ m s$^{-1}$`,
  R`$v^2 = 100 - 58.8 = 41.2$, so the speed is $6.42$ m s$^{-1}$ (going up or coming down).`, NF),
Q('A9.5-8', 3, R`A ball is thrown vertically upwards at $12$ m s$^{-1}$ from a point $2$ m above the ground. Find the time it takes to hit the ground. [[3]]`,
  [R`Up positive, so the ground is at $s = -2$.`, R`$4.9t^2 - 12t - 2 = 0$.`],
  [R`|M1|$-2 = 12t - 4.9t^2$`, R`|M1|Quadratic formula`, R`|A1|$2.61$ s`], R`$2.61$ s`,
  R`$4.9t^2 - 12t - 2 = 0$ gives $t = \frac{12 + \sqrt{144 + 39.2}}{9.8} = 2.61$ s (rejecting the negative root).`, NF),
Q('A9.5-9', 3, R`A ball is thrown vertically upwards at $14$ m s$^{-1}$. Find how long it is more than $5$ m above the point of projection. [[4]]`,
  [R`$5 = 14t - 4.9t^2$.`, R`Subtract the two roots.`],
  [R`|M1|$4.9t^2 - 14t + 5 = 0$`, R`|M1|Quadratic formula`, R`|A1|$t = 0.418$ and $2.44$`, R`|A1|$2.02$ s`], R`$2.02$ s`,
  R`$t = \frac{14 \pm \sqrt{196 - 98}}{9.8} = \frac{14 \pm 9.90}{9.8}$, so $0.418$ and $2.44$. The ball is above $5$ m for $2.02$ s.`, NF),
Q('A9.5-10', 3, R`A stone is thrown vertically downwards at $5$ m s$^{-1}$ from the top of a cliff $30$ m high. Find its speed when it hits the ground. [[2]]`,
  [R`Down positive: $v^2 = 25 + 2(9.8)(30)$.`, R`$v^2 = 613$.`],
  [R`|M1|$v^2 = 5^2 + 2(9.8)(30)$`, R`|A1|$24.8$ m s$^{-1}$`], R`$24.8$ m s$^{-1}$`,
  R`$v^2 = 25 + 588 = 613$, so $v = 24.8$ m s$^{-1}$.`, { fig: A9cliff({ label: 'Stone thrown down at 5 m/s from the top of a 30 m cliff', h: 30, down: '5 m/s' }) }),
Q('A9.5-11', 3, R`A stone is thrown vertically upwards at $8$ m s$^{-1}$ from the top of a cliff $50$ m above the sea. Find the time it takes to reach the sea. [[3]]`,
  [R`Up positive: the sea is at $s = -50$.`, R`$4.9t^2 - 8t - 50 = 0$.`],
  [R`|M1|$-50 = 8t - 4.9t^2$`, R`|M1|Quadratic formula`, R`|A1|$4.11$ s`], R`$4.11$ s`,
  R`$t = \frac{8 + \sqrt{64 + 980}}{9.8} = \frac{8 + 32.31}{9.8} = 4.11$ s.`, { fig: A9cliff({ label: 'Stone thrown up at 8 m/s from the top of a 50 m cliff above the sea', h: 50, up: '8 m/s' }) }),
Q('A9.5-12', 4, R`Ball $A$ is dropped from $20$ m above the ground. At the same moment, ball $B$ is thrown upwards at $10$ m s$^{-1}$ from the ground directly below. Find when and at what height they meet. [[4]]`,
  [R`Heights: $h_A = 20 - 4.9t^2$, $h_B = 10t - 4.9t^2$.`, R`Set them equal.`],
  [R`|M1|$h_A = 20 - 4.9t^2$, $h_B = 10t - 4.9t^2$`, R`|M1|$20 = 10t$`, R`|A1|$t = 2$ s`, R`|A1|$0.4$ m above the ground`], R`$2$ s; $0.4$ m`,
  R`Setting the heights equal: $20 - 4.9t^2 = 10t - 4.9t^2$, so $t = 2$ s. Height $= 20 - 19.6 = 0.4$ m.`, NF),
Q('A9.5-13', 4, R`A ball is thrown vertically upwards and reaches a greatest height of $10$ m above the point of projection. Find the speed of projection and the time taken to reach the top. [[3]]`,
  [R`At the top $v = 0$: $0 = u^2 - 19.6 \times 10$.`, R`Then $0 = u - 9.8t$.`],
  [R`|M1|$0 = u^2 - 2(9.8)(10)$`, R`|A1|$u = 14$ m s$^{-1}$`, R`|A1|$t = 1.43$ s`], R`$14$ m s$^{-1}$; $1.43$ s`,
  R`$u^2 = 196$, so $u = 14$ m s$^{-1}$. Time to the top $= \frac{14}{9.8} = 1.43$ s.`, NF),
Q('A9.5-14', 4, R`A ball is thrown vertically upwards at $u$ m s$^{-1}$. It is $6$ m above the point of projection after $0.5$ s. Find $u$, and the other time at which it is $6$ m above that point. [[4]]`,
  [R`$6 = 0.5u - 4.9(0.25)$.`, R`Then solve $6 = ut - 4.9t^2$.`],
  [R`|M1|$6 = 0.5u - 1.225$`, R`|A1|$u = 14.45$ m s$^{-1}$`, R`|M1|$4.9t^2 - 14.45t + 6 = 0$`, R`|A1|$t = 2.45$ s`], R`$u = 14.45$ m s$^{-1}$; $2.45$ s`,
  R`$0.5u = 7.225$, so $u = 14.45$ m s$^{-1}$. Then $4.9t^2 - 14.45t + 6 = 0$ has roots $0.5$ and $\frac{6}{4.9 \times 0.5} = 2.45$ s.`, NF),
Q('A9.5-15', 5, R`A stone is thrown vertically upwards at $15$ m s$^{-1}$ from a point $25$ m above the ground. Find **(a)** its greatest height above the ground **(b)** the time it takes to reach the ground **(c)** its speed when it hits the ground **(d)** the length of time for which it is above the point of projection. [[8]]`,
  [R`Up positive, ground at $s = -25$.`, R`For (d), find when it is back at $s = 0$.`],
  [R`(a)|M1|$0 = 15^2 - 19.6s$`, R`(a)|A1|$36.5$ m`, R`(b)|M1|$-25 = 15t - 4.9t^2$`, R`(b)|M1|Quadratic formula`, R`(b)|A1|$4.26$ s`, R`(c)|M1|$v^2 = 15^2 + 2(9.8)(25)$`, R`(c)|A1|$26.7$ m s$^{-1}$`, R`(d)|B1|$\frac{30}{9.8} = 3.06$ s`], R`(a) $36.5$ m (b) $4.26$ s (c) $26.7$ m s$^{-1}$ (d) $3.06$ s`,
  R`**(a)** It rises $\frac{225}{19.6} = 11.48$ m, so the greatest height is $36.5$ m above the ground.
**(b)** $4.9t^2 - 15t - 25 = 0$: $t = \frac{15 + \sqrt{715}}{9.8} = 4.26$ s.
**(c)** $v^2 = 225 + 490 = 715$, so the speed is $26.7$ m s$^{-1}$.
**(d)** $15t - 4.9t^2 = 0$ at $t = \frac{15}{4.9} = 3.06$ s.`, { fig: A9cliff({ label: 'Stone thrown up at 15 m/s from a point 25 m above the ground', h: 25, up: '15 m/s' }) })
]};
