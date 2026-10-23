/* Pure Mathematics Year 2 · Chapter 2 Functions and graphs (sections 2.1 to 2.7) */
BOOK_CHAPTERS.push({ id:'Y2P02', book:'Pure Mathematics Year 2', label:'Chapter 2', title:'Functions and graphs', sections:[
  { id:'2P2.1', num:'2.1', title:'The modulus function' },
  { id:'2P2.2', num:'2.2', title:'Functions and mappings' },
  { id:'2P2.3', num:'2.3', title:'Composite functions' },
  { id:'2P2.4', num:'2.4', title:'Inverse functions' },
  { id:'2P2.5', num:'2.5', title:'y = |f(x)| and y = f(|x|)' },
  { id:'2P2.6', num:'2.6', title:'Combining transformations' },
  { id:'2P2.7', num:'2.7', title:'Solving modulus problems' }
]});
// Curve sketch: fns [[f, label]], with integer ticks every `step`.
const Y2g = (label, fns, { x0 = -5, x1 = 5, y0 = -5, y1 = 5, step = 1, points = [], segs = [], hlines = [], vlines = [], equal = false, regions = [] } = {}) => {
  const t = (a, b) => { const r = []; for (let v = Math.ceil(a / step) * step; v <= b + 1e-9; v += step) if (Math.abs(v) > 1e-9) r.push([v, String(+v.toFixed(2))]); return r; };
  return Fig.graph({ label, x0, x1, y0, y1, xticks: t(x0, x1), yticks: t(y0, y1), points, segs, hlines, vlines, equal, regions,
    fns: fns.map(([f, lab, extra], i) => Object.assign({ f, label: lab || '', col: i ? 'var(--pen)' : 'var(--accent)' }, extra || {})) });
};
FIGS['2P2.1-mod'] = Y2g('Graph of y = |2x − 3|: a V shape with its vertex at (1.5, 0), crossing the y-axis at 3', [[x => Math.abs(2 * x - 3), 'y = |2x − 3|']], { x0: -2, x1: 5, y0: -1, y1: 7, points: [{ x: 1.5, y: 0, label: '(1.5, 0)' }, { x: 0, y: 3, label: '3', dx: 10 }] });
FIGS['2P2.4-inv'] = Y2g('Graphs of y = f(x) and y = f⁻¹(x), mirror images in the line y = x', [[x => Math.exp(x) + 1, 'y = eˣ + 1'], [x => (x > 1 ? Math.log(x - 1) : NaN), 'y = ln(x − 1)'], [x => x, 'y = x', { dash: true, col: 'var(--muted)' }]], { x0: -3, x1: 6, y0: -3, y1: 6, equal: true });
FIGS['2P2.5-abs'] = Y2g('y = |x² − 4|: the part of y = x² − 4 below the x-axis is reflected upwards', [[x => Math.abs(x * x - 4), 'y = |x² − 4|'], [x => x * x - 4, '', { dash: true, col: 'var(--muted)' }]], { x0: -4, x1: 4, y0: -5, y1: 8, points: [{ x: -2, y: 0, label: '−2' }, { x: 2, y: 0, label: '2' }, { x: 0, y: 4, label: '(0, 4)', dx: 22 }] });
FIGS['2P2.6-t'] = Y2g('y = |x| (dashed) and y = 2|x + 1| − 4, with vertex (−1, −4)', [[x => 2 * Math.abs(x + 1) - 4, 'y = 2|x + 1| − 4'], [x => Math.abs(x), '', { dash: true, col: 'var(--muted)' }]], { x0: -5, x1: 4, y0: -5, y1: 5, points: [{ x: -1, y: -4, label: '(−1, −4)', dy: 14 }, { x: -3, y: 0, label: '−3' }, { x: 1, y: 0, label: '1' }] });

CONTENT['2P2.1'] = {
notes: R`
### The modulus
The **modulus** $|x|$ is the size of $x$, ignoring its sign: $|x| = x$ if $x \ge 0$ and $|x| = -x$ if $x < 0$.

### Graphs of $y = |ax + b|$
The graph is a **V shape**: draw $y = ax + b$ and reflect any part below the $x$-axis in the $x$-axis. The vertex is where $ax + b = 0$.

[[fig:2P2.1-mod]]

### Solving $|f(x)| = g(x)$
Solve $f(x) = g(x)$ **and** $f(x) = -g(x)$, then **check** each answer in the original equation. A sketch shows how many solutions to expect.

::: booklet
**Learn these:** $|x| < a \iff -a < x < a$ and $|x| > a \iff x < -a$ or $x > a$ (for $a > 0$).
:::

### Worked example 1
Solve $|2x - 3| = 7$.
- $2x - 3 = 7$ gives $x = 5$; $2x - 3 = -7$ gives $x = -2$.

### Worked example 2: check your answers
Solve $|x + 1| = 2x$.
- $x + 1 = 2x$ gives $x = 1$. Check: $|2| = 2$ ✓.
- $-(x + 1) = 2x$ gives $x = -\frac13$. Check: $\left|\frac23\right| = \frac23$ but $2x = -\frac23$ ✗.
- So the only solution is $x = 1$.

**The trap:** keeping $x = -\frac13$. A modulus can't equal a negative number, so solutions that make $g(x) < 0$ must be rejected.

### Watch out
- When sketching, mark the vertex and both intercepts.
`,
questions: [
Q('2P2.1-1', 1, R`Evaluate $|-7| + |3|$. [[1]]`,
  [R`$|-7| = 7$.`, R`Add.`],
  [R`|B1|$10$`], R`$10$`,
  R`$|-7| = 7$ and $|3| = 3$, so the total is $10$.`),
Q('2P2.1-2', 1, R`Solve $|x| = 5$. [[1]]`,
  [R`Two numbers have size $5$.`, R`Positive and negative.`],
  [R`|B1|$x = 5$ or $x = -5$`], R`$x = \pm5$`,
  R`$x = 5$ or $x = -5$.`),
Q('2P2.1-3', 1, R`Sketch $y = |x - 2|$, giving the coordinates of the points where it meets the axes. [[2]]`,
  [R`Vertex where $x - 2 = 0$.`, R`$y$-intercept: $x = 0$.`],
  [R`|B1|V shape with vertex $(2, 0)$`, R`|B1|Meets the $y$-axis at $(0, 2)$`], R`Vertex $(2, 0)$; $(0, 2)$`,
  R`The graph is a V with its vertex at $(2, 0)$, meeting the $y$-axis at $(0, 2)$.`,
  { solFig: Y2g('y = |x − 2|: V with vertex (2, 0) and y-intercept 2', [[x => Math.abs(x - 2), 'y = |x − 2|']], { x0: -2, x1: 6, y0: -1, y1: 5, points: [{ x: 2, y: 0, label: '(2, 0)' }, { x: 0, y: 2, label: '2', dx: 10 }] }) }),
Q('2P2.1-4', 2, R`Solve $|2x - 3| = 7$. [[2]]`,
  [R`$2x - 3 = 7$ or $2x - 3 = -7$.`, R`Solve each.`],
  [R`|M1|$2x - 3 = \pm7$`, R`|A1|$x = 5$ or $x = -2$`], R`$x = 5$, $x = -2$`,
  R`$2x - 3 = 7$ gives $x = 5$; $2x - 3 = -7$ gives $x = -2$.`, { fig: FIGS['2P2.1-mod'] }),
Q('2P2.1-5', 2, R`Sketch $y = |2x + 4|$, giving the coordinates of the points where it meets the axes. [[2]]`,
  [R`Vertex where $2x + 4 = 0$.`, R`$y$-intercept at $x = 0$.`],
  [R`|B1|Vertex $(-2, 0)$`, R`|B1|$(0, 4)$`], R`Vertex $(-2, 0)$; $(0, 4)$`,
  R`V shape with its vertex at $(-2, 0)$ and $y$-intercept $(0, 4)$.`,
  { solFig: Y2g('y = |2x + 4|: V with vertex (−2, 0) and y-intercept 4', [[x => Math.abs(2 * x + 4), 'y = |2x + 4|']], { x0: -5, x1: 3, y0: -1, y1: 7, points: [{ x: -2, y: 0, label: '(−2, 0)' }, { x: 0, y: 4, label: '4', dx: 10 }] }) }),
Q('2P2.1-6', 2, R`Solve $|x + 1| = 2x$. [[3]]`,
  [R`Solve $x + 1 = 2x$ and $-(x + 1) = 2x$.`, R`Check each answer.`],
  [R`|M1|$x + 1 = 2x$ gives $x = 1$`, R`|M1|$-(x + 1) = 2x$ gives $x = -\frac13$`, R`|A1|Rejects $-\frac13$ (as $2x < 0$): $x = 1$ only`], R`$x = 1$`,
  R`$x = 1$ works. $x = -\frac13$ gives $2x < 0$, which a modulus can't equal, so it is rejected. Only $x = 1$.`),
Q('2P2.1-7', 2, R`$f(x) = 3|x - 1| - 6$. Find the coordinates of the vertex of $y = f(x)$ and where it crosses the $x$-axis. [[3]]`,
  [R`Vertex where $x - 1 = 0$.`, R`$|x - 1| = 2$ for the intercepts.`],
  [R`|B1|Vertex $(1, -6)$`, R`|M1|$|x - 1| = 2$`, R`|A1|$x = -1$ and $x = 3$`], R`Vertex $(1, -6)$; $x = -1, 3$`,
  R`The vertex is at $(1, -6)$. $f(x) = 0$ when $|x - 1| = 2$, so $x = -1$ or $x = 3$.`),
Q('2P2.1-8', 3, R`Solve $|3x - 2| = x + 4$. [[3]]`,
  [R`$3x - 2 = x + 4$ or $3x - 2 = -(x + 4)$.`, R`Check: $x + 4$ must be $\ge 0$.`],
  [R`|M1|$3x - 2 = x + 4$ gives $x = 3$`, R`|M1|$-(3x - 2) = x + 4$ gives $x = -\frac12$`, R`|A1|Both valid: $x = 3$, $x = -\frac12$`], R`$x = 3$, $x = -\frac12$`,
  R`$x = 3$: $|7| = 7$ ✓. $x = -\frac12$: $\left|-\frac72\right| = \frac72 = x + 4$ ✓.`,
  { fig: Y2g('y = |3x − 2| and y = x + 4, crossing twice', [[x => Math.abs(3 * x - 2), 'y = |3x − 2|'], [x => x + 4, 'y = x + 4']], { x0: -2, x1: 4, y0: -1, y1: 9 }) }),
Q('2P2.1-9', 3, R`Solve $|x - 3| < 5$. [[2]]`,
  [R`$-5 < x - 3 < 5$.`, R`Add $3$.`],
  [R`|M1|$-5 < x - 3 < 5$`, R`|A1|$-2 < x < 8$`], R`$-2 < x < 8$`,
  R`$-5 < x - 3 < 5$, so $-2 < x < 8$.`),
Q('2P2.1-10', 3, R`Solve $|2x + 1| > 3$. [[2]]`,
  [R`$2x + 1 > 3$ or $2x + 1 < -3$.`, R`Two separate regions.`],
  [R`|M1|$2x + 1 > 3$ or $2x + 1 < -3$`, R`|A1|$x > 1$ or $x < -2$`], R`$x < -2$ or $x > 1$`,
  R`$2x + 1 > 3$ gives $x > 1$; $2x + 1 < -3$ gives $x < -2$.`),
Q('2P2.1-11', 3, R`Find the coordinates of the points where $y = |x|$ meets $y = 4 - \frac{x}{2}$. [[3]]`,
  [R`For $x \ge 0$: $x = 4 - \frac{x}{2}$.`, R`For $x < 0$: $-x = 4 - \frac{x}{2}$.`],
  [R`|M1|Considers both cases`, R`|A1|$\left(\frac83, \frac83\right)$`, R`|A1|$(-8, 8)$`], R`$\left(\frac83, \frac83\right)$ and $(-8, 8)$`,
  R`$x \ge 0$: $\frac32x = 4$, $x = \frac83$, $y = \frac83$. $x < 0$: $-\frac{x}{2} = 4$, $x = -8$, $y = 8$.`),
Q('2P2.1-12', 4, R`Solve $|x - 2| = 3x + 6$. [[4]]`,
  [R`Two cases, then check $3x + 6 \ge 0$.`, R`One root will be rejected.`],
  [R`|M1|$x - 2 = 3x + 6$ gives $x = -4$`, R`|A1|Rejected, since $3x + 6 = -6 < 0$`, R`|M1|$-(x - 2) = 3x + 6$ gives $x = -1$`, R`|A1|$x = -1$ only`], R`$x = -1$`,
  R`$x = -4$ makes $3x + 6 = -6$, so it is rejected. $x = -1$: $|-3| = 3 = 3(-1) + 6$ ✓.`),
Q('2P2.1-13', 4, R`On the same axes, sketch $y = 2|x| - 3$ and $y = x$. Hence solve $2|x| - 3 = x$. [[4]]`,
  [R`$x \ge 0$: $2x - 3 = x$.`, R`$x < 0$: $-2x - 3 = x$.`],
  [R`|B1|Correct V with vertex $(0, -3)$ and the line`, R`|M1|$2x - 3 = x$ gives $x = 3$`, R`|M1|$-2x - 3 = x$ gives $x = -1$`, R`|A1|$x = 3$ and $x = -1$`], R`$x = 3$, $x = -1$`,
  R`For $x \ge 0$: $x = 3$. For $x < 0$: $-3x = 3$, $x = -1$. Both lie in their ranges.`,
  { solFig: Y2g('y = 2|x| − 3 and y = x, meeting at (−1, −1) and (3, 3)', [[x => 2 * Math.abs(x) - 3, 'y = 2|x| − 3'], [x => x, 'y = x']], { x0: -3, x1: 4, y0: -4, y1: 5, points: [{ x: -1, y: -1, label: '(−1, −1)', dx: -26 }, { x: 3, y: 3, label: '(3, 3)', dx: -24 }] }) }),
Q('2P2.1-14', 4, R`Solve $|x - 1| \le 2x + 1$. [[4]]`,
  [R`Find where $|x - 1| = 2x + 1$ first.`, R`Then use a sketch.`],
  [R`|M1|$x - 1 = 2x + 1$ gives $x = -2$, rejected`, R`|M1|$-(x - 1) = 2x + 1$ gives $x = 0$`, R`|M1|Line is above the V for $x > 0$`, R`|A1|$x \ge 0$`], R`$x \ge 0$`,
  R`$x = -2$ is rejected ($2x + 1 < 0$). The only crossing is at $x = 0$, and for $x > 0$ the line $y = 2x + 1$ lies above the V, so $x \ge 0$.`,
  { solFig: Y2g('y = |x − 1| and y = 2x + 1, crossing only at (0, 1)', [[x => Math.abs(x - 1), 'y = |x − 1|'], [x => 2 * x + 1, 'y = 2x + 1']], { x0: -3, x1: 3, y0: -2, y1: 6 }) }),
Q('2P2.1-15', 5, R`$f(x) = 4 - |2x - 3|$. **(a)** Find the coordinates of the vertex of $y = f(x)$. **(b)** Find where the graph crosses the $x$-axis. **(c)** Solve $f(x) = x$. **(d)** State the range of $f$. [[7]]`,
  [R`The vertex is where $2x - 3 = 0$.`, R`For (c), take $x \ge 1.5$ and $x < 1.5$ separately.`],
  [R`(a)|B1|$(1.5, 4)$`, R`(b)|M1|$|2x - 3| = 4$`, R`(b)|A1|$x = 3.5$ and $x = -0.5$`, R`(c)|M1|$x \ge 1.5$: $7 - 2x = x$, $x = \frac73$`, R`(c)|M1|$x < 1.5$: $1 + 2x = x$, $x = -1$`, R`(c)|A1|$x = \frac73$ and $x = -1$`, R`(d)|B1|$f(x) \le 4$`], R`(a) $(1.5, 4)$ (b) $x = 3.5, -0.5$ (c) $\frac73, -1$ (d) $f(x) \le 4$`,
  R`**(a)** $(1.5, 4)$, an inverted V.
**(b)** $|2x - 3| = 4$: $x = 3.5$ or $x = -0.5$.
**(c)** $x \ge 1.5$: $4 - 2x + 3 = x$, so $x = \frac73$. $x < 1.5$: $4 + 2x - 3 = x$, so $x = -1$.
**(d)** $f(x) \le 4$.`,
  { solFig: Y2g('y = 4 − |2x − 3| (inverted V with vertex (1.5, 4)) and y = x', [[x => 4 - Math.abs(2 * x - 3), 'y = f(x)'], [x => x, 'y = x']], { x0: -2, x1: 5, y0: -3, y1: 5 }) })
]};

CONTENT['2P2.2'] = {
notes: R`
### Mappings and functions
A **mapping** sends each input to one or more outputs. A **function** sends every input in its domain to **exactly one** output.
- **One-to-one:** different inputs always give different outputs (e.g. $f(x) = 2x + 1$).
- **Many-to-one:** some outputs come from more than one input (e.g. $f(x) = x^2$).
- One-to-many mappings (such as $y = \pm\sqrt{x}$) are **not** functions.

The **domain** is the set of allowed inputs; the **range** is the set of outputs.

::: booklet
**Learn these:** find a range by sketching the graph over the domain, or by completing the square. Write it in terms of $f(x)$, e.g. $f(x) \ge 3$.
:::

### Worked example 1
Find the range of $f(x) = x^2 - 6x + 10$, $x \in \mathbb{R}$.
- $f(x) = (x - 3)^2 + 1$, so $f(x) \ge 1$.

### Worked example 2: a restricted domain
Find the range of $f(x) = 3 - 2x^2$ for $-1 \le x \le 2$.
- The maximum is at $x = 0$: $f(0) = 3$. At the ends, $f(-1) = 1$ and $f(2) = -5$.
- Range: $-5 \le f(x) \le 3$.

**The trap:** using only the end values and writing $-5 \le f(x) \le 1$. A turning point inside the domain can give a larger (or smaller) value than either end.

### Watch out
- For a piecewise function, use the right rule for each part of the domain.
`,
questions: [
Q('2P2.2-1', 1, R`$f(x) = 2x + 3$. Find $f(4)$. [[1]]`,
  [R`Substitute $x = 4$.`, R`$8 + 3$.`],
  [R`|B1|$11$`], R`$11$`,
  R`$f(4) = 2(4) + 3 = 11$.`),
Q('2P2.2-2', 1, R`Is $f(x) = x^2$, $x \in \mathbb{R}$, one-to-one or many-to-one? [[1]]`,
  [R`Is $f(2) = f(-2)$?`, R`Two inputs, one output.`],
  [R`|B1|Many-to-one, e.g. $f(2) = f(-2) = 4$`], R`Many-to-one`,
  R`Many-to-one: for example $f(2) = f(-2) = 4$.`),
Q('2P2.2-3', 1, R`Explain why $y = \pm\sqrt{x}$ is not a function. [[1]]`,
  [R`How many outputs for $x = 4$?`, R`Two.`],
  [R`|B1|Each positive input has two outputs (it's one-to-many)`], R`It's one-to-many`,
  R`For example, $x = 4$ gives $y = 2$ and $y = -2$. A function must give exactly one output for each input.`),
Q('2P2.2-4', 2, R`State the range of $f(x) = x^2 + 3$, $x \in \mathbb{R}$. [[1]]`,
  [R`$x^2 \ge 0$.`, R`Add $3$.`],
  [R`|B1|$f(x) \ge 3$`], R`$f(x) \ge 3$`,
  R`$x^2 \ge 0$, so $f(x) \ge 3$.`),
Q('2P2.2-5', 2, R`Find the range of $f(x) = 2x - 1$ for $0 \le x \le 5$. [[2]]`,
  [R`It's increasing.`, R`Find $f(0)$ and $f(5)$.`],
  [R`|M1|$f(0) = -1$, $f(5) = 9$`, R`|A1|$-1 \le f(x) \le 9$`], R`$-1 \le f(x) \le 9$`,
  R`$f$ is increasing, so the range runs from $f(0) = -1$ to $f(5) = 9$.`),
Q('2P2.2-6', 2, R`$f(x) = x^2$ for $x < 2$ and $f(x) = 8 - 2x$ for $x \ge 2$. Find $f(1) + f(3)$. [[2]]`,
  [R`Use the first rule for $x = 1$.`, R`Use the second rule for $x = 3$.`],
  [R`|M1|$f(1) = 1$ and $f(3) = 2$`, R`|A1|$3$`], R`$3$`,
  R`$f(1) = 1^2 = 1$ and $f(3) = 8 - 6 = 2$, so the sum is $3$.`,
  { fig: Y2g('Piecewise function: y = x² for x < 2, then y = 8 − 2x for x ≥ 2', [[x => (x < 2 ? x * x : NaN), 'y = x²', { lx: -1.6, ly: 3.2 }], [x => (x >= 2 ? 8 - 2 * x : NaN), 'y = 8 − 2x', { col: 'var(--accent)' }]], { x0: -3, x1: 5, y0: -3, y1: 9 }) }),
Q('2P2.2-7', 2, R`State the range of $f(x) = \dfrac{1}{x - 2}$, $x > 2$. [[1]]`,
  [R`Is $x - 2$ positive?`, R`It can be as small or large as you like.`],
  [R`|B1|$f(x) > 0$`], R`$f(x) > 0$`,
  R`For $x > 2$, $x - 2 > 0$ takes every positive value, so $f(x)$ takes every positive value: $f(x) > 0$.`),
Q('2P2.2-8', 3, R`Find the range of $f(x) = x^2 - 6x + 10$, $x \in \mathbb{R}$. [[2]]`,
  [R`Complete the square.`, R`$(x - 3)^2 + 1$.`],
  [R`|M1|$(x - 3)^2 + 1$`, R`|A1|$f(x) \ge 1$`], R`$f(x) \ge 1$`,
  R`$f(x) = (x - 3)^2 + 1 \ge 1$.`),
Q('2P2.2-9', 3, R`For the function in question 6, solve $f(x) = 5$. [[3]]`,
  [R`Try each rule, and check its domain.`, R`$8 - 2x = 5$ gives $x = 1.5$, but that rule needs $x \ge 2$.`],
  [R`|M1|$x^2 = 5$ with $x < 2$`, R`|A1|$x = -\sqrt5$ (and $\sqrt5 > 2$ is rejected)`, R`|B1|$8 - 2x = 5$ gives $x = 1.5 < 2$, rejected`], R`$x = -\sqrt5$`,
  R`$x^2 = 5$ gives $x = \pm\sqrt5$, but only $-\sqrt5 < 2$. $8 - 2x = 5$ gives $1.5$, not $\ge 2$. So $x = -\sqrt5$.`),
Q('2P2.2-10', 3, R`State the range of $f(x) = e^x + 2$, $x \in \mathbb{R}$. [[1]]`,
  [R`$e^x > 0$.`, R`Add $2$.`],
  [R`|B1|$f(x) > 2$`], R`$f(x) > 2$`,
  R`$e^x$ takes every positive value, so $f(x) > 2$.`),
Q('2P2.2-11', 3, R`Find the range of $f(x) = 3 - 2x^2$ for $-1 \le x \le 2$. [[3]]`,
  [R`There's a turning point at $x = 0$.`, R`Check both ends too.`],
  [R`|B1|Maximum $f(0) = 3$`, R`|M1|$f(-1) = 1$, $f(2) = -5$`, R`|A1|$-5 \le f(x) \le 3$`], R`$-5 \le f(x) \le 3$`,
  R`The maximum is $f(0) = 3$; the smallest value is at $x = 2$: $f(2) = -5$. Range $-5 \le f(x) \le 3$.`),
Q('2P2.2-12', 4, R`$f(x) = ax + 1$ for $x \le 2$ and $f(x) = x^2 - 1$ for $x > 2$. Find $a$ so that the graph has no break at $x = 2$. [[3]]`,
  [R`The two rules must agree at $x = 2$.`, R`$2a + 1 = 3$.`],
  [R`|M1|Sets $2a + 1 = 2^2 - 1$`, R`|A1|$2a + 1 = 3$`, R`|A1|$a = 1$`], R`$a = 1$`,
  R`At $x = 2$ the second rule gives $3$, so $2a + 1 = 3$ and $a = 1$.`),
Q('2P2.2-13', 4, R`$f(x) = x^2 - 4x + 1$. State the largest domain of the form $x \ge k$ on which $f$ is one-to-one, and give the range on that domain. [[3]]`,
  [R`$f(x) = (x - 2)^2 - 3$.`, R`The turning point is at $x = 2$.`],
  [R`|M1|$(x - 2)^2 - 3$`, R`|A1|$x \ge 2$`, R`|A1|$f(x) \ge -3$`], R`$x \ge 2$; $f(x) \ge -3$`,
  R`$f(x) = (x - 2)^2 - 3$ is one-to-one for $x \ge 2$, where it takes values $f(x) \ge -3$.`),
Q('2P2.2-14', 4, R`$f(x) = x + 4$ for $x < -1$, $x^2 + 2$ for $-1 \le x \le 2$, and $10 - x$ for $x > 2$. Find the range of $f$. [[3]]`,
  [R`Find the range of each piece.`, R`$f(x) < 3$, $2 \le f(x) \le 6$, $f(x) < 8$.`],
  [R`|M1|Ranges of each piece`, R`|M1|$f(x) < 3$, $2 \le f(x) \le 6$, $f(x) < 8$`, R`|A1|$f(x) < 8$`], R`$f(x) < 8$`,
  R`For $x < -1$: $f(x) < 3$. For $-1 \le x \le 2$: $2 \le f(x) \le 6$. For $x > 2$: $f(x) < 8$. Together, $f(x) < 8$.`),
Q('2P2.2-15', 5, R`$f(x) = 2x^2 - 8x + 5$, $x \in \mathbb{R}$. **(a)** Write $f(x)$ in the form $a(x + b)^2 + c$. **(b)** State the range of $f$. **(c)** Solve $f(x) = 15$. **(d)** Explain why $f$ has no inverse. [[6]]`,
  [R`$2(x^2 - 4x) + 5$.`, R`A function needs to be one-to-one to have an inverse.`],
  [R`(a)|M1|$2(x - 2)^2 - 8 + 5$`, R`(a)|A1|$2(x - 2)^2 - 3$`, R`(b)|B1|$f(x) \ge -3$`, R`(c)|M1|$2x^2 - 8x - 10 = 0$`, R`(c)|A1|$x = 5$ or $x = -1$`, R`(d)|B1|It is many-to-one (e.g. part (c) gives two inputs for $15$)`], R`(a) $2(x - 2)^2 - 3$ (b) $f(x) \ge -3$ (c) $5, -1$`,
  R`**(a)** $2(x - 2)^2 - 3$.
**(b)** $f(x) \ge -3$.
**(c)** $x^2 - 4x - 5 = (x - 5)(x + 1) = 0$: $x = 5$ or $x = -1$.
**(d)** $f$ is many-to-one: both $5$ and $-1$ map to $15$, so the inverse would be one-to-many.`)
]};

CONTENT['2P2.3'] = {
notes: R`
### Composite functions
$fg(x)$ means $f(g(x))$: apply $g$ **first**, then $f$.
- In general $fg(x) \ne gf(x)$.
- $ff(x) = f(f(x))$, sometimes written $f^2(x)$.
- The domain of $fg$ is the inputs of $g$ whose outputs are allowed inputs of $f$.

::: booklet
**Learn this:** work from the right. In $fg(x)$, $g$ acts first.
:::

### Worked example 1
$f(x) = 2x + 1$ and $g(x) = x^2$. Find $fg(3)$ and $gf(3)$.
- $g(3) = 9$, so $fg(3) = f(9) = 19$.
- $f(3) = 7$, so $gf(3) = g(7) = 49$.

### Worked example 2: order matters
With the same functions, find $fg(x)$.
- $fg(x) = f(x^2) = 2x^2 + 1$.

**The trap:** applying $f$ first and writing $(2x + 1)^2$. That is $gf(x)$.

### Watch out
- Simplify your composite, but keep any domain restriction it needs.
`,
questions: [
Q('2P2.3-1', 1, R`$f(x) = 2x + 1$ and $g(x) = x^2$. Find $fg(3)$. [[1]]`,
  [R`$g$ first: $g(3) = 9$.`, R`Then $f(9)$.`],
  [R`|B1|$19$`], R`$19$`,
  R`$g(3) = 9$, and $f(9) = 19$.`),
Q('2P2.3-2', 1, R`With $f$ and $g$ as in question 1, find $gf(3)$. [[1]]`,
  [R`$f$ first: $f(3) = 7$.`, R`Then $g(7)$.`],
  [R`|B1|$49$`], R`$49$`,
  R`$f(3) = 7$, and $g(7) = 49$.`),
Q('2P2.3-3', 1, R`With $f$ and $g$ as in question 1, find $fg(x)$. [[1]]`,
  [R`Substitute $x^2$ into $f$.`, R`$2(x^2) + 1$.`],
  [R`|B1|$2x^2 + 1$`], R`$fg(x) = 2x^2 + 1$`,
  R`$fg(x) = f(x^2) = 2x^2 + 1$.`),
Q('2P2.3-4', 2, R`With $f$ and $g$ as in question 1, solve $fg(x) = gf(x)$. [[3]]`,
  [R`$gf(x) = (2x + 1)^2$.`, R`$2x^2 + 1 = 4x^2 + 4x + 1$.`],
  [R`|B1|$gf(x) = 4x^2 + 4x + 1$`, R`|M1|$2x^2 + 4x = 0$`, R`|A1|$x = 0$ or $x = -2$`], R`$x = 0$, $x = -2$`,
  R`$2x^2 + 1 = 4x^2 + 4x + 1$ gives $2x(x + 2) = 0$: $x = 0$ or $x = -2$.`),
Q('2P2.3-5', 2, R`$f(x) = 2x + 1$. Find $ff(x)$. [[1]]`,
  [R`$f(2x + 1)$.`, R`$2(2x + 1) + 1$.`],
  [R`|B1|$4x + 3$`], R`$ff(x) = 4x + 3$`,
  R`$ff(x) = 2(2x + 1) + 1 = 4x + 3$.`),
Q('2P2.3-6', 2, R`$f(x) = 3x - 2$ and $g(x) = \dfrac1x$, $x \ne 0$. Find $fg(x)$ and $gf(x)$. [[2]]`,
  [R`$fg(x) = f\left(\frac1x\right)$.`, R`$gf(x) = g(3x - 2)$.`],
  [R`|B1|$fg(x) = \frac3x - 2$`, R`|B1|$gf(x) = \frac{1}{3x - 2}$`], R`$fg(x) = \frac3x - 2$; $gf(x) = \frac{1}{3x - 2}$`,
  R`$fg(x) = \frac3x - 2$ and $gf(x) = \frac{1}{3x - 2}$ (for $x \ne \frac23$).`),
Q('2P2.3-7', 2, R`$f(x) = x + 4$ and $g(x) = \sqrt{x}$, $x \ge 0$. Find $gf(5)$. [[1]]`,
  [R`$f(5) = 9$.`, R`$\sqrt9$.`],
  [R`|B1|$3$`], R`$3$`,
  R`$f(5) = 9$ and $g(9) = 3$.`),
Q('2P2.3-8', 3, R`$f(x) = e^x$ and $g(x) = \ln(2x)$, $x > 0$. Find, in their simplest forms, $fg(x)$ and $gf(x)$. [[2]]`,
  [R`$e^{\ln(2x)} = 2x$.`, R`$\ln(2e^x) = \ln2 + x$.`],
  [R`|B1|$fg(x) = 2x$`, R`|B1|$gf(x) = x + \ln 2$`], R`$fg(x) = 2x$; $gf(x) = x + \ln2$`,
  R`$fg(x) = e^{\ln 2x} = 2x$. $gf(x) = \ln(2e^x) = \ln 2 + \ln e^x = x + \ln 2$.`),
Q('2P2.3-9', 3, R`$f(x) = 2x - 1$ and $g(x) = x^2 + 1$. Solve $fg(x) = 7$. [[3]]`,
  [R`$fg(x) = 2(x^2 + 1) - 1$.`, R`$2x^2 + 1 = 7$.`],
  [R`|M1|$fg(x) = 2x^2 + 1$`, R`|M1|$2x^2 + 1 = 7$`, R`|A1|$x = \pm\sqrt3$`], R`$x = \pm\sqrt3$`,
  R`$fg(x) = 2x^2 + 1 = 7$, so $x^2 = 3$ and $x = \pm\sqrt3$.`),
Q('2P2.3-10', 3, R`$f(x) = \dfrac{1}{x - 1}$, $x \ne 1$. Show that $ff(x) = \dfrac{x - 1}{2 - x}$. [[3]]`,
  [R`$ff(x) = \dfrac{1}{\frac{1}{x - 1} - 1}$.`, R`Multiply top and bottom by $x - 1$.`],
  [R`|M1|$\frac{1}{\frac{1}{x - 1} - 1}$`, R`|M1|$\frac{x - 1}{1 - (x - 1)}$`, R`|A1|$\frac{x - 1}{2 - x}$`], R`Shown`,
  R`$ff(x) = \dfrac{1}{\frac{1}{x - 1} - 1} = \dfrac{x - 1}{1 - (x - 1)} = \dfrac{x - 1}{2 - x}$.`),
Q('2P2.3-11', 3, R`$f(x) = \sqrt{x - 2}$, $x \ge 2$, and $g(x) = x - 3$. Find $fg(x)$ and state its domain. [[2]]`,
  [R`$fg(x) = \sqrt{(x - 3) - 2}$.`, R`What's inside the root must be $\ge 0$.`],
  [R`|B1|$fg(x) = \sqrt{x - 5}$`, R`|B1|$x \ge 5$`], R`$\sqrt{x - 5}$, $x \ge 5$`,
  R`$fg(x) = \sqrt{x - 5}$, which needs $x \ge 5$.`),
Q('2P2.3-12', 4, R`$f(x) = x^2 - 2x$ and $g(x) = x + 1$. **(a)** Find $fg(x)$ and $gf(x)$. **(b)** Solve $fg(x) = gf(x)$. [[4]]`,
  [R`$fg(x) = (x + 1)^2 - 2(x + 1)$.`, R`$gf(x) = x^2 - 2x + 1$.`],
  [R`(a)|M1|$(x + 1)^2 - 2(x + 1)$`, R`(a)|A1|$fg(x) = x^2 - 1$, $gf(x) = x^2 - 2x + 1$`, R`(b)|M1|$x^2 - 1 = x^2 - 2x + 1$`, R`(b)|A1|$x = 1$`], R`(b) $x = 1$`,
  R`**(a)** $fg(x) = x^2 + 2x + 1 - 2x - 2 = x^2 - 1$; $gf(x) = x^2 - 2x + 1$.
**(b)** $-1 = -2x + 1$ gives $x = 1$.`),
Q('2P2.3-13', 4, R`$f(x) = e^x$ and $g(x) = x^2 - 1$, both for $x \in \mathbb{R}$. Find $fg(x)$ and its range. [[2]]`,
  [R`$fg(x) = e^{x^2 - 1}$.`, R`$x^2 - 1 \ge -1$.`],
  [R`|B1|$fg(x) = e^{x^2 - 1}$`, R`|B1|$fg(x) \ge e^{-1}$`], R`$e^{x^2 - 1}$; $fg(x) \ge \frac1e$`,
  R`$fg(x) = e^{x^2 - 1}$. Since $x^2 - 1 \ge -1$ and $e^x$ is increasing, $fg(x) \ge e^{-1}$.`),
Q('2P2.3-14', 4, R`$f(x) = \dfrac{x + 3}{x - 1}$, $x \ne 1$. Show that $ff(x) = x$. [[4]]`,
  [R`$f\left(\frac{x + 3}{x - 1}\right)$.`, R`Multiply top and bottom by $x - 1$.`],
  [R`|M1|$\dfrac{\frac{x + 3}{x - 1} + 3}{\frac{x + 3}{x - 1} - 1}$`, R`|M1|Multiplies by $x - 1$`, R`|M1|$\frac{x + 3 + 3x - 3}{x + 3 - x + 1}$`, R`|A1|$\frac{4x}{4} = x$`], R`Shown`,
  R`$ff(x) = \dfrac{(x + 3) + 3(x - 1)}{(x + 3) - (x - 1)} = \dfrac{4x}{4} = x$.`),
Q('2P2.3-15', 5, R`$f(x) = 3x + k$ and $g(x) = x^2$, where $k$ is a constant. Given that $fg(2) = gf(1)$, find the possible values of $k$, giving your answers to $3$ significant figures. [[5]]`,
  [R`$fg(2) = 12 + k$ and $gf(1) = (3 + k)^2$.`, R`Solve the quadratic in $k$.`],
  [R`|M1|$fg(2) = 12 + k$`, R`|M1|$gf(1) = (3 + k)^2$`, R`|M1|$k^2 + 5k - 3 = 0$`, R`|M1|Quadratic formula`, R`|A1|$k = 0.541$ or $k = -5.54$`], R`$k = 0.541$ or $-5.54$`,
  R`$12 + k = 9 + 6k + k^2$, so $k^2 + 5k - 3 = 0$ and $k = \frac{-5 \pm \sqrt{37}}{2}$: $k = 0.541$ or $k = -5.54$.`)
]};

CONTENT['2P2.4'] = {
notes: R`
### Inverse functions
The inverse $f^{-1}$ undoes $f$: $f^{-1}f(x) = x$. Only **one-to-one** functions have inverses.
- To find $f^{-1}(x)$: write $y = f(x)$, rearrange to make $x$ the subject, then swap $x$ and $y$.
- The domain of $f^{-1}$ is the range of $f$, and the range of $f^{-1}$ is the domain of $f$.
- The graph of $y = f^{-1}(x)$ is the reflection of $y = f(x)$ in the line $y = x$.

[[fig:2P2.4-inv]]

::: booklet
**Learn this:** swap domain and range. Always state the domain of $f^{-1}$.
:::

### Worked example 1
$f(x) = e^x + 1$, $x \in \mathbb{R}$. Find $f^{-1}(x)$ and its domain.
- $y = e^x + 1$, so $x = \ln(y - 1)$. Hence $f^{-1}(x) = \ln(x - 1)$.
- The range of $f$ is $f(x) > 1$, so the domain of $f^{-1}$ is $x > 1$.

### Worked example 2: a restricted quadratic
$f(x) = x^2 - 4x$, $x \ge 2$. Find $f^{-1}(x)$.
- $y = (x - 2)^2 - 4$, so $x - 2 = \pm\sqrt{y + 4}$.
- Since $x \ge 2$, take the **positive** root: $f^{-1}(x) = 2 + \sqrt{x + 4}$, $x \ge -4$.

**The trap:** writing $2 \pm \sqrt{x + 4}$. An inverse function must give one output, and the domain $x \ge 2$ tells you which sign.

### Watch out
- $f^{-1}(x)$ is not $\frac{1}{f(x)}$.
`,
questions: [
Q('2P2.4-1', 1, R`$f(x) = 3x - 2$. Find $f^{-1}(x)$. [[2]]`,
  [R`$y = 3x - 2$; make $x$ the subject.`, R`Then swap $x$ and $y$.`],
  [R`|M1|$x = \frac{y + 2}{3}$`, R`|A1|$f^{-1}(x) = \frac{x + 2}{3}$`], R`$f^{-1}(x) = \frac{x + 2}{3}$`,
  R`$y = 3x - 2$ gives $x = \frac{y + 2}{3}$, so $f^{-1}(x) = \frac{x + 2}{3}$.`),
Q('2P2.4-2', 1, R`$f(x) = x^3$. Find $f^{-1}(8)$. [[1]]`,
  [R`Which input gives $8$?`, R`$2^3 = 8$.`],
  [R`|B1|$2$`], R`$2$`,
  R`$f(2) = 8$, so $f^{-1}(8) = 2$.`),
Q('2P2.4-3', 1, R`Describe the geometrical relationship between the graphs of $y = f(x)$ and $y = f^{-1}(x)$. [[1]]`,
  [R`Think of a mirror.`, R`Which line?`],
  [R`|B1|Reflections of each other in the line $y = x$`], R`Reflection in $y = x$`,
  R`They are reflections of each other in the line $y = x$.`, { fig: FIGS['2P2.4-inv'] }),
Q('2P2.4-4', 2, R`$f(x) = \dfrac{x + 5}{2}$. Find $f^{-1}(x)$. [[2]]`,
  [R`$2y = x + 5$.`, R`Swap.`],
  [R`|M1|$x = 2y - 5$`, R`|A1|$f^{-1}(x) = 2x - 5$`], R`$f^{-1}(x) = 2x - 5$`,
  R`$x = 2y - 5$, so $f^{-1}(x) = 2x - 5$.`),
Q('2P2.4-5', 2, R`$f(x) = \dfrac{1}{x - 3}$, $x \ne 3$. Find $f^{-1}(x)$ and state its domain. [[3]]`,
  [R`$x - 3 = \frac1y$.`, R`The range of $f$ excludes $0$.`],
  [R`|M1|$x = 3 + \frac1y$`, R`|A1|$f^{-1}(x) = 3 + \frac1x$`, R`|B1|Domain $x \ne 0$`], R`$f^{-1}(x) = 3 + \frac1x$, $x \ne 0$`,
  R`$y = \frac{1}{x - 3}$ gives $x = 3 + \frac1y$, so $f^{-1}(x) = 3 + \frac1x$. $f$ never takes the value $0$, so the domain is $x \ne 0$.`),
Q('2P2.4-6', 2, R`$f(x) = \sqrt{x - 1}$, $x \ge 1$. State the range of $f$, and find $f^{-1}(x)$ with its domain. [[3]]`,
  [R`Square roots are $\ge 0$.`, R`$x = y^2 + 1$.`],
  [R`|B1|$f(x) \ge 0$`, R`|M1|$x = y^2 + 1$`, R`|A1|$f^{-1}(x) = x^2 + 1$, $x \ge 0$`], R`$f^{-1}(x) = x^2 + 1$, $x \ge 0$`,
  R`$f(x) \ge 0$. $y^2 = x - 1$ gives $f^{-1}(x) = x^2 + 1$ with domain $x \ge 0$ (the range of $f$).`,
  { fig: Y2g('y = √(x − 1) and its inverse y = x² + 1 for x ≥ 0, reflected in y = x', [[x => (x >= 1 ? Math.sqrt(x - 1) : NaN), 'y = f(x)'], [x => (x >= 0 ? x * x + 1 : NaN), 'y = f⁻¹(x)'], [x => x, 'y = x', { dash: true, col: 'var(--muted)' }]], { x0: -1, x1: 6, y0: -1, y1: 6, equal: true }) }),
Q('2P2.4-7', 2, R`$f(x) = e^x + 1$, $x \in \mathbb{R}$. Find $f^{-1}(x)$ and state its domain. [[3]]`,
  [R`$e^x = y - 1$.`, R`The range of $f$ is $f(x) > 1$.`],
  [R`|M1|$x = \ln(y - 1)$`, R`|A1|$f^{-1}(x) = \ln(x - 1)$`, R`|B1|$x > 1$`], R`$f^{-1}(x) = \ln(x - 1)$, $x > 1$`,
  R`$x = \ln(y - 1)$, so $f^{-1}(x) = \ln(x - 1)$, with domain $x > 1$.`, { fig: FIGS['2P2.4-inv'] }),
Q('2P2.4-8', 3, R`$f(x) = x^2 - 4x$, $x \ge 2$. Find $f^{-1}(x)$ and state its domain. [[4]]`,
  [R`Complete the square: $(x - 2)^2 - 4$.`, R`Take the positive root because $x \ge 2$.`],
  [R`|M1|$y = (x - 2)^2 - 4$`, R`|M1|$x = 2 \pm \sqrt{y + 4}$`, R`|A1|$f^{-1}(x) = 2 + \sqrt{x + 4}$`, R`|B1|Domain $x \ge -4$`], R`$f^{-1}(x) = 2 + \sqrt{x + 4}$, $x \ge -4$`,
  R`$x - 2 = \sqrt{y + 4}$ (positive since $x \ge 2$), so $f^{-1}(x) = 2 + \sqrt{x + 4}$. The range of $f$ is $f(x) \ge -4$, so the domain is $x \ge -4$.`,
  { solFig: Y2g('y = x² − 4x for x ≥ 2 and its inverse y = 2 + √(x + 4), reflected in y = x', [[x => (x >= 2 ? x * x - 4 * x : NaN), 'y = f(x)'], [x => (x >= -4 ? 2 + Math.sqrt(x + 4) : NaN), 'y = f⁻¹(x)'], [x => x, 'y = x', { dash: true, col: 'var(--muted)' }]], { x0: -5, x1: 7, y0: -5, y1: 7, equal: true }), }),
Q('2P2.4-9', 3, R`$f(x) = \dfrac{2x + 1}{x - 3}$, $x \ne 3$. Find $f^{-1}(x)$. [[3]]`,
  [R`$y(x - 3) = 2x + 1$.`, R`Collect the $x$ terms.`],
  [R`|M1|$xy - 3y = 2x + 1$`, R`|M1|$x(y - 2) = 3y + 1$`, R`|A1|$f^{-1}(x) = \frac{3x + 1}{x - 2}$, $x \ne 2$`], R`$f^{-1}(x) = \frac{3x + 1}{x - 2}$`,
  R`$xy - 2x = 3y + 1$, so $x = \frac{3y + 1}{y - 2}$ and $f^{-1}(x) = \frac{3x + 1}{x - 2}$, $x \ne 2$.`),
Q('2P2.4-10', 3, R`$f(x) = \ln(2x - 1)$, $x > \frac12$. Find $f^{-1}(x)$ and state its domain. [[3]]`,
  [R`$e^y = 2x - 1$.`, R`The range of $\ln$ is all real numbers.`],
  [R`|M1|$2x - 1 = e^y$`, R`|A1|$f^{-1}(x) = \frac{e^x + 1}{2}$`, R`|B1|$x \in \mathbb{R}$`], R`$f^{-1}(x) = \frac{e^x + 1}{2}$, $x \in \mathbb{R}$`,
  R`$x = \frac{e^y + 1}{2}$, so $f^{-1}(x) = \frac{e^x + 1}{2}$, for all real $x$.`),
Q('2P2.4-11', 3, R`$f(x) = 2x - 3$. Solve $f(x) = f^{-1}(x)$. [[2]]`,
  [R`For an increasing line, they meet on $y = x$.`, R`Or find $f^{-1}(x) = \frac{x + 3}{2}$.`],
  [R`|M1|$2x - 3 = \frac{x + 3}{2}$ (or $2x - 3 = x$)`, R`|A1|$x = 3$`], R`$x = 3$`,
  R`$f^{-1}(x) = \frac{x + 3}{2}$, so $4x - 6 = x + 3$ and $x = 3$.`),
Q('2P2.4-12', 4, R`$f(x) = x^2 + 6x + 5$, $x \ge -3$. **(a)** Find the range of $f$. **(b)** Find $f^{-1}(x)$, stating its domain and range. [[5]]`,
  [R`$(x + 3)^2 - 4$.`, R`Take the positive root.`],
  [R`(a)|M1|$(x + 3)^2 - 4$`, R`(a)|A1|$f(x) \ge -4$`, R`(b)|M1|$x + 3 = \sqrt{y + 4}$`, R`(b)|A1|$f^{-1}(x) = -3 + \sqrt{x + 4}$`, R`(b)|B1|Domain $x \ge -4$, range $f^{-1}(x) \ge -3$`], R`$f^{-1}(x) = -3 + \sqrt{x + 4}$, $x \ge -4$`,
  R`**(a)** $f(x) = (x + 3)^2 - 4 \ge -4$.
**(b)** $x + 3 = \sqrt{y + 4}$ (positive as $x \ge -3$), so $f^{-1}(x) = -3 + \sqrt{x + 4}$, domain $x \ge -4$, range $f^{-1}(x) \ge -3$.`),
Q('2P2.4-13', 4, R`$f(x) = 4 - x^2$, $x \ge 0$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ meet on the line $y = x$. Find the $x$-coordinate of the point where they meet. [[3]]`,
  [R`Solve $f(x) = x$.`, R`$x^2 + x - 4 = 0$.`],
  [R`|M1|$4 - x^2 = x$`, R`|M1|Quadratic formula`, R`|A1|$x = 1.56$`], R`$x = \frac{-1 + \sqrt{17}}{2} = 1.56$`,
  R`$x^2 + x - 4 = 0$ gives $x = \frac{-1 + \sqrt{17}}{2} = 1.56$ (the negative root is outside $x \ge 0$).`),
Q('2P2.4-14', 4, R`$f(x) = \dfrac{x + 3}{x - 1}$, $x \ne 1$. Show that $f^{-1}(x) = f(x)$. [[2]]`,
  [R`$y(x - 1) = x + 3$.`, R`$x(y - 1) = y + 3$.`],
  [R`|M1|$x(y - 1) = y + 3$`, R`|A1|$f^{-1}(x) = \frac{x + 3}{x - 1} = f(x)$`], R`Shown`,
  R`$xy - y = x + 3$ gives $x(y - 1) = y + 3$, so $f^{-1}(x) = \frac{x + 3}{x - 1}$, the same as $f$. (A function like this is called self-inverse.)`),
Q('2P2.4-15', 5, R`$f(x) = 2e^x - 3$, $x \in \mathbb{R}$. **(a)** State the range of $f$. **(b)** Find $f^{-1}(x)$ and state its domain. **(c)** Solve $f^{-1}(x) = 0$. **(d)** Sketch $y = f(x)$ and $y = f^{-1}(x)$ on the same axes. [[6]]`,
  [R`$e^x > 0$.`, R`$x = \ln\frac{y + 3}{2}$.`],
  [R`(a)|B1|$f(x) > -3$`, R`(b)|M1|$e^x = \frac{y + 3}{2}$`, R`(b)|A1|$f^{-1}(x) = \ln\left(\frac{x + 3}{2}\right)$`, R`(b)|B1|$x > -3$`, R`(c)|B1|$x = -1$`, R`(d)|B1|Reflections in $y = x$, with asymptotes $y = -3$ and $x = -3$`], R`(b) $\ln\frac{x + 3}{2}$, $x > -3$ (c) $x = -1$`,
  R`**(a)** $f(x) > -3$.
**(b)** $f^{-1}(x) = \ln\left(\frac{x + 3}{2}\right)$, $x > -3$.
**(c)** $\frac{x + 3}{2} = 1$, so $x = -1$ (check: $f(0) = -1$).
**(d)** $y = f(x)$ has asymptote $y = -3$; $y = f^{-1}(x)$ has asymptote $x = -3$; they are mirror images in $y = x$.`,
  { solFig: Y2g('y = 2eˣ − 3 and y = ln((x + 3)/2), mirror images in y = x', [[x => 2 * Math.exp(x) - 3, 'y = f(x)'], [x => (x > -3 ? Math.log((x + 3) / 2) : NaN), 'y = f⁻¹(x)'], [x => x, 'y = x', { dash: true, col: 'var(--muted)' }]], { x0: -4, x1: 4, y0: -4, y1: 4, equal: true }) })
]};

CONTENT['2P2.5'] = {
notes: R`
### Two modulus graphs
- **$y = |f(x)|$:** any part of $y = f(x)$ **below the $x$-axis** is reflected in the $x$-axis. Nothing is ever below the axis.
- **$y = f(|x|)$:** the part of $y = f(x)$ for $x \ge 0$ is kept and **reflected in the $y$-axis**. The graph is symmetrical about the $y$-axis.

[[fig:2P2.5-abs]]

::: booklet
**Learn these:** $|f(x)|$ reflects the negative $y$ parts; $f(|x|)$ copies the right half onto the left.
:::

### Worked example 1
Sketch $y = |x^2 - 4|$.
- $y = x^2 - 4$ crosses the $x$-axis at $\pm2$ and dips to $-4$ at $x = 0$.
- Reflect the part between $-2$ and $2$: the graph touches the axis at $\pm2$ and has a local maximum at $(0, 4)$.

### Worked example 2: $f(|x|)$
$f(x) = (x - 1)(x - 3)$. Sketch $y = f(|x|)$.
- For $x \ge 0$ it's the usual parabola, crossing at $1$ and $3$.
- Reflect that in the $y$-axis: the graph also crosses at $-1$ and $-3$, with $y$-intercept $3$.

**The trap:** reflecting in the $x$-axis instead. For $f(|x|)$, the input is made positive, so it's the **left** half that changes.

### Watch out
- Show where the graph meets both axes and any turning points.
`,
questions: [
Q('2P2.5-1', 1, R`Describe how to obtain the graph of $y = |f(x)|$ from the graph of $y = f(x)$. [[1]]`,
  [R`Which parts change?`, R`The parts below the $x$-axis.`],
  [R`|B1|Reflect any part below the $x$-axis in the $x$-axis`], R`Reflect parts below the $x$-axis in the $x$-axis`,
  R`Keep the parts with $y \ge 0$, and reflect any part below the $x$-axis in the $x$-axis.`),
Q('2P2.5-2', 1, R`Describe how to obtain the graph of $y = f(|x|)$ from the graph of $y = f(x)$. [[1]]`,
  [R`Which half is kept?`, R`$x \ge 0$.`],
  [R`|B1|Keep the part for $x \ge 0$ and reflect it in the $y$-axis`], R`Reflect the right half in the $y$-axis`,
  R`Keep the part of $y = f(x)$ for $x \ge 0$, delete the rest, and reflect the kept part in the $y$-axis.`),
Q('2P2.5-3', 1, R`$f(x) = x - 3$. Find the value of $|f(0)|$. [[1]]`,
  [R`$f(0) = -3$.`, R`Take the modulus.`],
  [R`|B1|$3$`], R`$3$`,
  R`$f(0) = -3$, so $|f(0)| = 3$.`),
Q('2P2.5-4', 2, R`Sketch $y = |x^2 - 4|$, giving the coordinates of the points where it meets the axes. [[2]]`,
  [R`Start with $y = x^2 - 4$.`, R`Reflect the part between $-2$ and $2$.`],
  [R`|B1|Correct shape with the middle reflected`, R`|B1|$(-2, 0)$, $(2, 0)$ and $(0, 4)$`], R`Touches at $(\pm2, 0)$; $(0, 4)$`,
  R`The section of $y = x^2 - 4$ between $x = -2$ and $x = 2$ is reflected, so the graph meets the $x$-axis at $(\pm2, 0)$ and the $y$-axis at $(0, 4)$.`, { solFig: FIGS['2P2.5-abs'] }),
Q('2P2.5-5', 2, R`Sketch $y = |(x - 1)(x - 3)|$, giving the coordinates of the turning point between $x = 1$ and $x = 3$. [[2]]`,
  [R`The parabola's minimum is at $(2, -1)$.`, R`Reflected, it becomes $(2, 1)$.`],
  [R`|B1|Correct shape meeting the $x$-axis at $1$ and $3$`, R`|B1|Local maximum $(2, 1)$`], R`$(2, 1)$`,
  R`$y = (x - 1)(x - 3)$ has minimum $(2, -1)$. Reflecting the negative part gives a local maximum at $(2, 1)$.`,
  { solFig: Y2g('y = |(x − 1)(x − 3)| with a local maximum at (2, 1)', [[x => Math.abs((x - 1) * (x - 3)), 'y = |(x − 1)(x − 3)|']], { x0: -1, x1: 5, y0: -1, y1: 5, points: [{ x: 2, y: 1, label: '(2, 1)' }] }) }),
Q('2P2.5-6', 2, R`$f(x) = x^2 - 4x$. Find $f(|x|)$ when $x = -1$. [[1]]`,
  [R`$|{-1}| = 1$.`, R`$f(1)$.`],
  [R`|B1|$-3$`], R`$-3$`,
  R`$f(|-1|) = f(1) = 1 - 4 = -3$.`),
Q('2P2.5-7', 2, R`Sketch $y = |\ln x|$, $x > 0$. [[2]]`,
  [R`$\ln x < 0$ for $0 < x < 1$.`, R`Reflect that part.`],
  [R`|B1|Part for $0 < x < 1$ reflected above the axis`, R`|B1|Touches the $x$-axis at $(1, 0)$; asymptote $x = 0$`], R`Touches at $(1, 0)$`,
  R`$y = \ln x$ is negative for $0 < x < 1$, so that part is reflected upwards. The graph touches the axis at $(1, 0)$ and the $y$-axis is still an asymptote.`,
  { solFig: Y2g('y = |ln x|: falls to (1, 0) then rises', [[x => (x > 0 ? Math.abs(Math.log(x)) : NaN), 'y = |ln x|']], { x0: -1, x1: 6, y0: -1, y1: 4, points: [{ x: 1, y: 0, label: '(1, 0)' }] }) }),
Q('2P2.5-8', 3, R`Solve $|x^2 - 4| = 3$. [[3]]`,
  [R`$x^2 - 4 = 3$ or $x^2 - 4 = -3$.`, R`Four solutions.`],
  [R`|M1|$x^2 - 4 = \pm3$`, R`|A1|$x = \pm\sqrt7$`, R`|A1|$x = \pm1$`], R`$x = \pm1$, $\pm\sqrt7$`,
  R`$x^2 = 7$ gives $x = \pm\sqrt7$; $x^2 = 1$ gives $x = \pm1$.`, { fig: FIGS['2P2.5-abs'] }),
Q('2P2.5-9', 3, R`$f(x) = (x - 1)(x - 3)$. Sketch $y = f(|x|)$ and state where it meets the $x$-axis. [[2]]`,
  [R`Keep $x \ge 0$, then reflect in the $y$-axis.`, R`The roots double up.`],
  [R`|B1|Symmetrical W-like shape with $y$-intercept $3$`, R`|B1|$x = \pm1$, $\pm3$`], R`$x = \pm1$, $\pm3$`,
  R`The right half crosses at $1$ and $3$; reflecting it in the $y$-axis gives crossings at $-1$ and $-3$ too.`,
  { solFig: Y2g('y = f(|x|) for f(x) = (x − 1)(x − 3): symmetrical, crossing at ±1 and ±3', [[x => (Math.abs(x) - 1) * (Math.abs(x) - 3), 'y = f(|x|)']], { x0: -5, x1: 5, y0: -2, y1: 6 }) }),
Q('2P2.5-10', 3, R`State the period of $y = |\sin x|$. [[1]]`,
  [R`The negative half-waves are flipped up.`, R`The pattern repeats twice as often.`],
  [R`|B1|$\pi$`], R`$\pi$`,
  R`Each negative half of $\sin x$ is reflected upwards, so the graph repeats every $\pi$.`),
Q('2P2.5-11', 3, R`Using a sketch, state how many solutions $|x^2 - 4| = k$ has when $0 < k < 4$. [[2]]`,
  [R`Draw a horizontal line $y = k$ on the sketch of $y = |x^2 - 4|$.`, R`It cuts the middle bump too.`],
  [R`|M1|Horizontal line on the sketch`, R`|A1|$4$ solutions`], R`$4$`,
  R`A line $y = k$ with $0 < k < 4$ meets each outer branch once and the middle hump twice: $4$ solutions.`, { fig: FIGS['2P2.5-abs'] }),
Q('2P2.5-12', 4, R`Solve $|x^2 - 2x - 3| = 5$. [[4]]`,
  [R`$x^2 - 2x - 3 = 5$ or $-5$.`, R`One of the quadratics has no real roots.`],
  [R`|M1|$x^2 - 2x - 8 = 0$`, R`|A1|$x = 4$ or $x = -2$`, R`|M1|$x^2 - 2x + 2 = 0$`, R`|A1|Discriminant $< 0$: no real roots. So $x = 4, -2$`], R`$x = 4$, $x = -2$`,
  R`$x^2 - 2x - 8 = (x - 4)(x + 2) = 0$. $x^2 - 2x + 2 = 0$ has discriminant $4 - 8 < 0$. So $x = 4$ or $x = -2$.`),
Q('2P2.5-13', 4, R`Find the value of $k$ for which $|x^2 - 4| = k$ has exactly three solutions. [[2]]`,
  [R`The line must touch the middle peak.`, R`The peak is at $(0, 4)$.`],
  [R`|M1|Line through the local maximum`, R`|A1|$k = 4$`], R`$k = 4$`,
  R`Three solutions happen when $y = k$ passes through the local maximum $(0, 4)$: $k = 4$ (giving $x = 0$ and $x = \pm2\sqrt2$).`, { fig: FIGS['2P2.5-abs'] }),
Q('2P2.5-14', 4, R`Sketch $y = |e^x - 2|$, giving the point where it meets the $x$-axis, the $y$-intercept and the equation of the asymptote. [[3]]`,
  [R`$e^x - 2 = 0$ at $x = \ln 2$.`, R`As $x \to -\infty$, $e^x - 2 \to -2$.`],
  [R`|B1|$(\ln 2, 0)$`, R`|B1|$(0, 1)$`, R`|B1|Asymptote $y = 2$`], R`$(\ln2, 0)$; $(0, 1)$; $y = 2$`,
  R`It touches the $x$-axis at $(\ln 2, 0)$, meets the $y$-axis at $|1 - 2| = 1$, and approaches $y = 2$ as $x \to -\infty$.`,
  { solFig: Y2g('y = |eˣ − 2|: asymptote y = 2 on the left, touches the x-axis at ln 2', [[x => Math.abs(Math.exp(x) - 2), 'y = |eˣ − 2|']], { x0: -4, x1: 2, y0: -1, y1: 5, hlines: [{ y: 2, label: 'y = 2' }], points: [{ x: Math.log(2), y: 0, label: 'ln 2' }] }) }),
Q('2P2.5-15', 5, R`$f(x) = x^2 - 6x + 5$. **(a)** Sketch $y = |f(x)|$, giving the coordinates of the turning point between the roots. **(b)** Solve $|f(x)| = 3$. **(c)** Sketch $y = f(|x|)$. **(d)** Solve $f(|x|) = 0$. [[7]]`,
  [R`$f(x) = (x - 1)(x - 5)$, minimum $(3, -4)$.`, R`For (b), $f(x) = 3$ or $f(x) = -3$.`],
  [R`(a)|B1|Shape with roots $1$, $5$`, R`(a)|B1|Local maximum $(3, 4)$`, R`(b)|M1|$x^2 - 6x + 2 = 0$`, R`(b)|A1|$x = 3 \pm \sqrt7$`, R`(b)|A1|$x = 2$ and $x = 4$`, R`(c)|B1|Symmetrical graph with roots $\pm1$, $\pm5$`, R`(d)|B1|$x = \pm1$, $\pm5$`], R`(b) $3 \pm \sqrt7$, $2$, $4$ (d) $\pm1$, $\pm5$`,
  R`**(a)** $f(x) = (x - 1)(x - 5)$ with minimum $(3, -4)$; reflected, it becomes a local maximum $(3, 4)$.
**(b)** $x^2 - 6x + 5 = 3$: $x = 3 \pm \sqrt7$. $x^2 - 6x + 5 = -3$: $(x - 2)(x - 4) = 0$, so $x = 2, 4$.
**(c)** Keep the right half (roots $1$ and $5$) and reflect it in the $y$-axis.
**(d)** $x = \pm1$, $\pm5$.`,
  { solFig: Y2g('y = |x² − 6x + 5| with local maximum (3, 4)', [[x => Math.abs(x * x - 6 * x + 5), 'y = |f(x)|']], { x0: -1, x1: 7, y0: -1, y1: 7, points: [{ x: 3, y: 4, label: '(3, 4)' }] }) })
]};

CONTENT['2P2.6'] = {
notes: R`
### Transformations
| Equation | Effect on $y = f(x)$ |
|---|---|
| $y = f(x) + a$ | translate by $a$ upwards |
| $y = f(x + a)$ | translate by $a$ to the **left** |
| $y = af(x)$ | stretch vertically, scale factor $a$ |
| $y = f(ax)$ | stretch horizontally, scale factor $\frac1a$ |
| $y = -f(x)$ | reflect in the $x$-axis |
| $y = f(-x)$ | reflect in the $y$-axis |

For combinations such as $y = af(bx + c) + d$, apply the changes **inside** the bracket (horizontal) and **outside** it (vertical) separately. Track a point: $(x, y)$ on $y = f(x)$ goes to the point on the new graph.

[[fig:2P2.6-t]]

::: booklet
**Learn these:** inside the bracket affects $x$ (and does the opposite of what it looks like); outside affects $y$.
:::

### Worked example 1
$(4, 6)$ lies on $y = f(x)$. Find its image on $y = 2f(x - 1)$.
- $x - 1 = 4$, so $x = 5$. Then $y = 2 \times 6 = 12$. The image is $(5, 12)$.

### Worked example 2: order of operations
Find the image of $(6, 4)$ on $y = 3f(2x) - 1$.
- Inside: $2x = 6$, so $x = 3$.
- Outside: $y = 3 \times 4 - 1 = 11$. The image is $(3, 11)$.

**The trap:** doubling the $x$-coordinate to get $12$. $f(2x)$ squashes the graph horizontally: solve $2x = 6$.

### Watch out
- For $y = f(2x + 1)$, solve $2x + 1 = $ (old $x$) for the new $x$.
`,
questions: [
Q('2P2.6-1', 1, R`Describe the transformation that maps $y = f(x)$ onto $y = f(x + 2)$. [[1]]`,
  [R`Inside the bracket affects $x$.`, R`$+2$ moves it left.`],
  [R`|B1|Translation by $2$ units to the left`], R`Translate $2$ left`,
  R`A translation by $\begin{pmatrix} -2 \\ 0 \end{pmatrix}$: $2$ units to the left.`),
Q('2P2.6-2', 1, R`Describe the transformation that maps $y = f(x)$ onto $y = 3f(x)$. [[1]]`,
  [R`Outside the bracket affects $y$.`, R`It multiplies $y$ by $3$.`],
  [R`|B1|Vertical stretch, scale factor $3$`], R`Vertical stretch, s.f. $3$`,
  R`A stretch parallel to the $y$-axis with scale factor $3$.`),
Q('2P2.6-3', 1, R`Describe the transformation that maps $y = f(x)$ onto $y = f(2x)$. [[1]]`,
  [R`Inside: $x$ is doubled before $f$ acts.`, R`The graph is squashed.`],
  [R`|B1|Horizontal stretch, scale factor $\frac12$`], R`Horizontal stretch, s.f. $\frac12$`,
  R`A stretch parallel to the $x$-axis with scale factor $\frac12$.`),
Q('2P2.6-4', 2, R`The point $(4, 6)$ lies on $y = f(x)$. Find its image on $y = 2f(x - 1)$. [[2]]`,
  [R`$x - 1 = 4$.`, R`$y$ doubles.`],
  [R`|B1|$x = 5$`, R`|B1|$y = 12$`], R`$(5, 12)$`,
  R`$x - 1 = 4$ gives $x = 5$, and $y = 2 \times 6 = 12$: $(5, 12)$.`),
Q('2P2.6-5', 2, R`The point $(4, 6)$ lies on $y = f(x)$. Find its image on $y = f(2x) + 3$. [[2]]`,
  [R`$2x = 4$.`, R`Add $3$ to $y$.`],
  [R`|B1|$x = 2$`, R`|B1|$y = 9$`], R`$(2, 9)$`,
  R`$2x = 4$ gives $x = 2$, and $y = 6 + 3 = 9$: $(2, 9)$.`),
Q('2P2.6-6', 2, R`The point $(4, 6)$ lies on $y = f(x)$. Find its image on $y = -f(x) + 1$. [[2]]`,
  [R`$x$ is unchanged.`, R`$y = -6 + 1$.`],
  [R`|B1|$x = 4$`, R`|B1|$y = -5$`], R`$(4, -5)$`,
  R`The $x$-coordinate stays at $4$, and $y = -6 + 1 = -5$: $(4, -5)$.`),
Q('2P2.6-7', 2, R`$y = f(x)$ has a maximum at $(2, 5)$. Find the coordinates of the maximum of $y = f(x + 3) - 2$. [[2]]`,
  [R`$x + 3 = 2$.`, R`Subtract $2$ from $y$.`],
  [R`|B1|$x = -1$`, R`|B1|$y = 3$`], R`$(-1, 3)$`,
  R`$x + 3 = 2$ gives $x = -1$, and $y = 5 - 2 = 3$: the maximum is at $(-1, 3)$.`),
Q('2P2.6-8', 3, R`The point $(6, 4)$ lies on $y = f(x)$. Find its image on $y = 3f(2x) - 1$. [[2]]`,
  [R`$2x = 6$.`, R`$y = 3(4) - 1$.`],
  [R`|B1|$x = 3$`, R`|B1|$y = 11$`], R`$(3, 11)$`,
  R`$2x = 6$ gives $x = 3$, and $y = 12 - 1 = 11$: $(3, 11)$.`),
Q('2P2.6-9', 3, R`Describe a sequence of transformations that maps $y = x^2$ onto $y = 2(x - 3)^2 + 1$. [[3]]`,
  [R`Three changes: inside, multiply, add.`, R`Translate right, stretch, translate up.`],
  [R`|B1|Translation $3$ units right`, R`|B1|Vertical stretch, scale factor $2$`, R`|B1|Translation $1$ unit up`], R`Right $3$, stretch ×$2$ vertically, up $1$`,
  R`Translate by $\begin{pmatrix} 3 \\ 0 \end{pmatrix}$, then stretch parallel to the $y$-axis with scale factor $2$, then translate by $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$.`),
Q('2P2.6-10', 3, R`$f(x) = |x|$. Sketch $y = 2f(x + 1) - 4$, giving the vertex and the $x$-intercepts. [[3]]`,
  [R`The vertex moves from $(0, 0)$.`, R`Solve $2|x + 1| = 4$.`],
  [R`|B1|Vertex $(-1, -4)$`, R`|M1|$|x + 1| = 2$`, R`|A1|$x = 1$ and $x = -3$`], R`Vertex $(-1, -4)$; $x = 1, -3$`,
  R`The vertex $(0, 0)$ moves to $(-1, -4)$. $2|x + 1| = 4$ gives $x = 1$ or $x = -3$.`, { solFig: FIGS['2P2.6-t'] }),
Q('2P2.6-11', 3, R`Find the coordinates of the first maximum point with $x > 0$ of $y = 3\sin 2x$, $x$ in radians. [[2]]`,
  [R`$\sin$ has a maximum at $\frac\pi2$.`, R`$2x = \frac\pi2$.`],
  [R`|B1|$x = \frac\pi4$`, R`|B1|$y = 3$`], R`$\left(\frac\pi4, 3\right)$`,
  R`$\sin 2x$ has its first maximum at $2x = \frac\pi2$, so $x = \frac\pi4$, and $y = 3$.`,
  { solFig: Y2g('y = 3 sin 2x: first maximum at (π/4, 3)', [[x => 3 * Math.sin(2 * x), 'y = 3 sin 2x']], { x0: -0.5, x1: 3.5, y0: -4, y1: 4, points: [{ x: Math.PI / 4, y: 3, label: '(π/4, 3)' }] }) }),
Q('2P2.6-12', 4, R`$y = f(x)$ passes through $(0, 2)$, $(3, 0)$ and $(5, -1)$. Find the images of these points on $y = -2f(x - 1) + 3$. [[3]]`,
  [R`New $x$ = old $x$ + $1$.`, R`New $y = -2(\text{old } y) + 3$.`],
  [R`|B1|$(1, -1)$`, R`|B1|$(4, 3)$`, R`|B1|$(6, 5)$`], R`$(1, -1)$, $(4, 3)$, $(6, 5)$`,
  R`Each $x$ increases by $1$, and $y \to -2y + 3$: $(1, -1)$, $(4, 3)$, $(6, 5)$.`),
Q('2P2.6-13', 4, R`The graph of $y = \dfrac1x$ is transformed to $y = \dfrac{2}{x - 3} + 1$. State the equations of the asymptotes and find where the curve crosses the $x$-axis. [[3]]`,
  [R`$x - 3 = 0$ gives one asymptote.`, R`Solve $\frac{2}{x - 3} = -1$.`],
  [R`|B1|$x = 3$`, R`|B1|$y = 1$`, R`|B1|$(1, 0)$`], R`$x = 3$, $y = 1$; $(1, 0)$`,
  R`Asymptotes $x = 3$ and $y = 1$. $\frac{2}{x - 3} = -1$ gives $x - 3 = -2$, $x = 1$.`,
  { solFig: Y2g('y = 2/(x − 3) + 1 with asymptotes x = 3 and y = 1', [[x => 2 / (x - 3) + 1, 'y = 2/(x − 3) + 1']], { x0: -2, x1: 8, y0: -4, y1: 6, hlines: [{ y: 1, label: 'y = 1' }], vlines: [{ x: 3, label: 'x = 3', dash: true }], points: [{ x: 1, y: 0, label: '(1, 0)' }] }) }),
Q('2P2.6-14', 4, R`The graph of $y = e^x$ is transformed to $y = 3e^{x - 2} + 1$. State the equation of the asymptote and find the $y$-intercept. [[3]]`,
  [R`$e^{x - 2} \to 0$ as $x \to -\infty$.`, R`Substitute $x = 0$.`],
  [R`|B1|$y = 1$`, R`|M1|$3e^{-2} + 1$`, R`|A1|$1.41$`], R`$y = 1$; $(0, 1.41)$`,
  R`As $x \to -\infty$, $y \to 1$, so the asymptote is $y = 1$. At $x = 0$: $3e^{-2} + 1 = 1.41$.`),
Q('2P2.6-15', 5, R`$f(x) = |2x - 4|$ and $g(x) = 3 - f(x + 1)$. **(a)** Show that $g(x) = 3 - |2x - 2|$. **(b)** Sketch $y = g(x)$, giving its vertex and $x$-intercepts. **(c)** Solve $g(x) = \frac{x}{2}$. [[7]]`,
  [R`$f(x + 1) = |2(x + 1) - 4|$.`, R`For (c), consider $x \ge 1$ and $x < 1$.`],
  [R`(a)|B1|$|2x + 2 - 4| = |2x - 2|$`, R`(b)|B1|Vertex $(1, 3)$`, R`(b)|M1|$|2x - 2| = 3$`, R`(b)|A1|$x = 2.5$ and $x = -0.5$`, R`(c)|M1|$x \ge 1$: $5 - 2x = \frac{x}{2}$, $x = 2$`, R`(c)|M1|$x < 1$: $1 + 2x = \frac{x}{2}$, $x = -\frac23$`, R`(c)|A1|$x = 2$ and $x = -\frac23$`], R`(b) $(1, 3)$; $2.5$, $-0.5$ (c) $2$, $-\frac23$`,
  R`**(a)** $f(x + 1) = |2x + 2 - 4| = |2x - 2|$.
**(b)** An inverted V with vertex $(1, 3)$, crossing the $x$-axis where $|2x - 2| = 3$: $x = 2.5$ and $x = -0.5$.
**(c)** $x \ge 1$: $3 - 2x + 2 = \frac{x}{2}$ gives $x = 2$. $x < 1$: $3 + 2x - 2 = \frac{x}{2}$ gives $x = -\frac23$.`,
  { solFig: Y2g('y = 3 − |2x − 2| (inverted V with vertex (1, 3)) and the line y = x/2', [[x => 3 - Math.abs(2 * x - 2), 'y = g(x)'], [x => x / 2, 'y = x/2']], { x0: -2, x1: 4, y0: -3, y1: 4 }) })
]};

CONTENT['2P2.7'] = {
notes: R`
### Equations with two moduli
For $|f(x)| = |g(x)|$, solve $f(x) = g(x)$ **and** $f(x) = -g(x)$. (Both sides are non-negative, so no answers need rejecting.)

### Inequalities
- $|f(x)| < a$ means $-a < f(x) < a$.
- $|f(x)| > a$ means $f(x) < -a$ or $f(x) > a$.
- For $|f(x)| < |g(x)|$, **square both sides** (both are non-negative): $f(x)^2 < g(x)^2$.
- Otherwise, find where the graphs cross and use a sketch.

::: booklet
**Learn this:** squaring is safe when both sides are moduli; with anything else, solve the equation and use a sketch.
:::

### Worked example 1
Solve $|2x - 1| = |x + 2|$.
- $2x - 1 = x + 2$ gives $x = 3$; $2x - 1 = -(x + 2)$ gives $x = -\frac13$.

### Worked example 2: squaring
Solve $|x + 2| > |x - 4|$.
- Square: $x^2 + 4x + 4 > x^2 - 8x + 16$, so $12x > 12$ and $x > 1$.

**The trap:** "solving" $x + 2 > x - 4$, which is true for every $x$. You can't simply remove the modulus signs.

### Watch out
- Give an inequality answer as an inequality (or interval), not just the boundary values.
`,
questions: [
Q('2P2.7-1', 1, R`Solve $|x - 4| = 3$. [[1]]`,
  [R`$x - 4 = \pm3$.`, R`Two answers.`],
  [R`|B1|$x = 1$ or $x = 7$`], R`$x = 1$, $x = 7$`,
  R`$x - 4 = 3$ gives $7$; $x - 4 = -3$ gives $1$.`),
Q('2P2.7-2', 1, R`Solve $|x| < 3$. [[1]]`,
  [R`$-3 < x < 3$.`, R`Between the two values.`],
  [R`|B1|$-3 < x < 3$`], R`$-3 < x < 3$`,
  R`$|x| < 3$ means $-3 < x < 3$.`),
Q('2P2.7-3', 1, R`Solve $|2x| \ge 6$. [[1]]`,
  [R`$|x| \ge 3$.`, R`Outside the interval.`],
  [R`|B1|$x \le -3$ or $x \ge 3$`], R`$x \le -3$ or $x \ge 3$`,
  R`$|x| \ge 3$, so $x \le -3$ or $x \ge 3$.`),
Q('2P2.7-4', 2, R`Solve $|x - 1| = |x + 3|$. [[2]]`,
  [R`$x - 1 = x + 3$ has no solution.`, R`$x - 1 = -(x + 3)$.`],
  [R`|M1|$x - 1 = -(x + 3)$`, R`|A1|$x = -1$`], R`$x = -1$`,
  R`$x - 1 = x + 3$ is impossible; $x - 1 = -x - 3$ gives $x = -1$. (The point halfway between $1$ and $-3$.)`),
Q('2P2.7-5', 2, R`Solve $|2x - 1| = |x + 2|$. [[3]]`,
  [R`$2x - 1 = x + 2$ or $2x - 1 = -(x + 2)$.`, R`Both are valid.`],
  [R`|M1|$2x - 1 = x + 2$ gives $x = 3$`, R`|M1|$2x - 1 = -(x + 2)$`, R`|A1|$x = -\frac13$`], R`$x = 3$, $x = -\frac13$`,
  R`$x = 3$, and $3x = -1$ gives $x = -\frac13$.`,
  { fig: Y2g('y = |2x − 1| and y = |x + 2|, crossing twice', [[x => Math.abs(2 * x - 1), 'y = |2x − 1|'], [x => Math.abs(x + 2), 'y = |x + 2|']], { x0: -3, x1: 5, y0: -1, y1: 8 }) }),
Q('2P2.7-6', 2, R`Solve $|x + 2| > |x - 4|$. [[3]]`,
  [R`Square both sides.`, R`$x^2 + 4x + 4 > x^2 - 8x + 16$.`],
  [R`|M1|Squares both sides`, R`|M1|$12x > 12$`, R`|A1|$x > 1$`], R`$x > 1$`,
  R`$x^2 + 4x + 4 > x^2 - 8x + 16$ gives $12x > 12$, so $x > 1$.`),
Q('2P2.7-7', 2, R`Solve $|3 - x| \le 1$. [[2]]`,
  [R`$-1 \le 3 - x \le 1$.`, R`Rearrange carefully.`],
  [R`|M1|$-1 \le 3 - x \le 1$`, R`|A1|$2 \le x \le 4$`], R`$2 \le x \le 4$`,
  R`$-1 \le 3 - x \le 1$ gives $2 \le x \le 4$.`),
Q('2P2.7-8', 3, R`Solve $|x^2 - 5| = 4$. [[3]]`,
  [R`$x^2 - 5 = 4$ or $x^2 - 5 = -4$.`, R`Four answers.`],
  [R`|M1|$x^2 - 5 = \pm4$`, R`|A1|$x = \pm3$`, R`|A1|$x = \pm1$`], R`$x = \pm1$, $\pm3$`,
  R`$x^2 = 9$ gives $\pm3$; $x^2 = 1$ gives $\pm1$.`),
Q('2P2.7-9', 3, R`Solve $|x - 2| < 2x - 1$. [[4]]`,
  [R`Find where $|x - 2| = 2x - 1$.`, R`Then use a sketch.`],
  [R`|M1|$x - 2 = 2x - 1$ gives $x = -1$, rejected ($2x - 1 < 0$)`, R`|M1|$-(x - 2) = 2x - 1$ gives $x = 1$`, R`|M1|Line above the V for $x > 1$`, R`|A1|$x > 1$`], R`$x > 1$`,
  R`$x = -1$ makes $2x - 1 = -3$, so it's not a crossing. The only crossing is at $x = 1$, and the line is above the V to the right of it: $x > 1$.`),
Q('2P2.7-10', 3, R`Solve $|x - 3| = 2|x|$. [[3]]`,
  [R`$x - 3 = 2x$ or $x - 3 = -2x$.`, R`Both valid.`],
  [R`|M1|$x - 3 = 2x$ gives $x = -3$`, R`|M1|$x - 3 = -2x$`, R`|A1|$x = 1$`], R`$x = -3$, $x = 1$`,
  R`$x = -3$: $|-6| = 6 = 2|-3|$ ✓. $3x = 3$ gives $x = 1$: $|-2| = 2 = 2|1|$ ✓.`),
Q('2P2.7-11', 3, R`Solve $|2x + 3| < |x|$. [[4]]`,
  [R`Square: $(2x + 3)^2 < x^2$.`, R`$3x^2 + 12x + 9 < 0$.`],
  [R`|M1|Squares both sides`, R`|M1|$x^2 + 4x + 3 < 0$`, R`|M1|Critical values $-3$ and $-1$`, R`|A1|$-3 < x < -1$`], R`$-3 < x < -1$`,
  R`$4x^2 + 12x + 9 < x^2$, so $3(x + 1)(x + 3) < 0$ and $-3 < x < -1$.`),
Q('2P2.7-12', 4, R`Solve $|x^2 - 3x| = 2$. [[4]]`,
  [R`$x^2 - 3x = 2$ or $x^2 - 3x = -2$.`, R`One factorises; one needs the formula.`],
  [R`|M1|$x^2 - 3x - 2 = 0$`, R`|A1|$x = \frac{3 \pm \sqrt{17}}{2}$`, R`|M1|$x^2 - 3x + 2 = 0$`, R`|A1|$x = 1$ or $x = 2$`], R`$1$, $2$, $\frac{3 \pm \sqrt{17}}{2}$`,
  R`$x^2 - 3x - 2 = 0$ gives $x = \frac{3 \pm \sqrt{17}}{2}$ (that is, $3.56$ and $-0.562$). $(x - 1)(x - 2) = 0$ gives $1$ and $2$.`),
Q('2P2.7-13', 4, R`Given $a > 0$, solve $|x - a| = 2a$. [[2]]`,
  [R`$x - a = \pm2a$.`, R`Two answers in terms of $a$.`],
  [R`|M1|$x - a = \pm 2a$`, R`|A1|$x = 3a$ or $x = -a$`], R`$x = 3a$, $x = -a$`,
  R`$x = a + 2a = 3a$ or $x = a - 2a = -a$.`),
Q('2P2.7-14', 4, R`Solve $|x + 1| + |x - 3| = 6$. [[4]]`,
  [R`Split at $x = -1$ and $x = 3$.`, R`Between them the sum is always $4$.`],
  [R`|M1|$x \ge 3$: $2x - 2 = 6$, $x = 4$`, R`|M1|$x \le -1$: $-2x + 2 = 6$, $x = -2$`, R`|B1|$-1 < x < 3$: sum is $4 \ne 6$`, R`|A1|$x = 4$ and $x = -2$`], R`$x = 4$, $x = -2$`,
  R`For $x \ge 3$: $2x - 2 = 6$, $x = 4$. For $x \le -1$: $2 - 2x = 6$, $x = -2$. In between, $(x + 1) + (3 - x) = 4$, never $6$.`),
Q('2P2.7-15', 5, R`$f(x) = |2x - 5|$ and $g(x) = 3 - |x|$. **(a)** Sketch both graphs on the same axes. **(b)** Solve $f(x) = g(x)$. **(c)** Hence solve $f(x) < g(x)$. [[6]]`,
  [R`Split at $x = 0$ and $x = 2.5$.`, R`Read the inequality from the sketch.`],
  [R`(a)|B1|Both graphs correct`, R`(b)|M1|$x \ge 2.5$: $2x - 5 = 3 - x$, $x = \frac83$`, R`(b)|M1|$0 \le x < 2.5$: $5 - 2x = 3 - x$, $x = 2$`, R`(b)|B1|$x < 0$: $5 - 2x = 3 + x$ gives $x = \frac23$, rejected`, R`(b)|A1|$x = 2$ and $x = \frac83$`, R`(c)|B1|$2 < x < \frac83$`], R`(b) $x = 2, \frac83$ (c) $2 < x < \frac83$`,
  R`**(b)** For $x \ge 2.5$: $3x = 8$, $x = \frac83$. For $0 \le x < 2.5$: $x = 2$. For $x < 0$: $3x = 2$ gives $x = \frac23$, which isn't negative, so it's rejected.
**(c)** $f$ is below $g$ between the crossings: $2 < x < \frac83$.`,
  { fig: Y2g('y = |2x − 5| (V with vertex (2.5, 0)) and y = 3 − |x| (inverted V with vertex (0, 3))', [[x => Math.abs(2 * x - 5), 'y = f(x)'], [x => 3 - Math.abs(x), 'y = g(x)']], { x0: -4, x1: 5, y0: -2, y1: 6 }) })
]};
