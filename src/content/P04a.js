/* Pure Mathematics Year 1 · Chapter 4 Graphs and transformations (sections 4.1 to 4.4) */
BOOK_CHAPTERS.push({ id:'P04', book:'Pure Mathematics Year 1', label:'Chapter 4', title:'Graphs and transformations', sections:[
  { id:'P4.1', num:'4.1', title:'Cubic graphs' },
  { id:'P4.2', num:'4.2', title:'Quartic graphs' },
  { id:'P4.3', num:'4.3', title:'Reciprocal graphs' },
  { id:'P4.4', num:'4.4', title:'Points of intersection' },
  { id:'P4.5', num:'4.5', title:'Translating graphs' },
  { id:'P4.6', num:'4.6', title:'Stretching graphs' },
  { id:'P4.7', num:'4.7', title:'Transforming functions' }
]});
{
  // A sketch: one or more curves, with labelled points instead of a grid.
  const sk = (label, fns, [x0, x1, y0, y1], pts = [], more = {}) => Fig.graph(Object.assign({ label, x0, x1, y0, y1,
    fns: fns.map(([f, l, lx, ly, extra]) => Object.assign({ f, label: fns.length > 1 ? l : undefined, lx, ly }, extra || {})),
    points: pts.map(([x, y, l, dx, dy]) => ({ x, y, label: l, dx, dy })) }, more));
  FIGS['P4.1-cubic'] = sk('Positive cubic y = (x − 1)(x + 2)(x − 3) crossing the x-axis at −2, 1 and 3 and the y-axis at 6',
    [[x => (x - 1) * (x + 2) * (x - 3), 'y = (x − 1)(x + 2)(x − 3)', 4.2, 13]], [-3, 4.2, -12, 15], [[-2, 0, '−2', -12, 14], [1, 0, '1', 10, -12], [3, 0, '3', 10, 14], [0, 6, '(0, 6)', 26, -6]]);
  FIGS['P4.1-neg'] = sk('Negative cubic y = x squared (3 − x): starts top left, touches the x-axis at the origin, crosses at 3',
    [[x => x * x * (3 - x), 'y = x²(3 − x)', 4.2, 6.5]], [-1.8, 4.2, -6, 8], [[0, 0, 'touches at O', 40, 16], [3, 0, '3', 10, -12]]);
  FIGS['P4.1-4'] = sk('y = x(x − 2)(x + 3): positive cubic through (−3, 0), (0, 0) and (2, 0)',
    [[x => x * (x - 2) * (x + 3), 'y = x(x − 2)(x + 3)', 3, 13]], [-4, 3, -10, 15], [[-3, 0, '−3', -12, 14], [0, 0, 'O', -10, 14], [2, 0, '2', 10, -12]]);
  FIGS['P4.1-5'] = sk('y = (x − 1) squared (x + 2): crosses at −2, touches at 1, y-intercept 2',
    [[x => (x - 1) ** 2 * (x + 2), 'y = (x − 1)²(x + 2)', 2.6, 9]], [-3, 2.6, -5, 10], [[-2, 0, '−2', -12, 14], [1, 0, 'touches at 1', 10, 16], [0, 2, '(0, 2)', 26, -8]]);
  FIGS['P4.1-6'] = sk('y = (2 − x)(x + 1)(x + 3): negative cubic crossing at −3, −1 and 2, y-intercept 6',
    [[x => (2 - x) * (x + 1) * (x + 3), 'y = (2 − x)(x + 1)(x + 3)', 3, 14]], [-4, 3, -10, 16], [[-3, 0, '−3', -12, 14], [-1, 0, '−1', 10, 14], [2, 0, '2', 10, -12], [0, 6, '(0, 6)', 26, -6]]);
  FIGS['P4.1-7'] = sk('y = x(x − 2) squared: crosses at the origin, touches the x-axis at 2',
    [[x => x * (x - 2) ** 2, 'y = x(x − 2)²', 3.6, 7]], [-1, 3.6, -4, 8], [[0, 0, 'O', -10, 14], [2, 0, 'touches at 2', 10, 16]]);
  FIGS['P4.1-8'] = sk('y = (x + 1) cubed: an S-shaped curve with a flat point of inflection at (−1, 0), crossing the y-axis at 1',
    [[x => (x + 1) ** 3, 'y = (x + 1)³', 1.4, 9]], [-3.4, 1.4, -8, 10], [[-1, 0, '(−1, 0)', -30, -10], [0, 1, '(0, 1)', 24, 6]]);
  FIGS['P4.1-11'] = sk('y = x(x − 3)(x + 1): positive cubic crossing at −1, 0 and 3',
    [[x => x * (x - 3) * (x + 1), 'y = x(x − 3)(x + 1)', 4, 11]], [-2, 4, -8, 12], [[-1, 0, '−1', -12, -12], [0, 0, 'O', 10, 14], [3, 0, '3', 10, -12]]);
  FIGS['P4.1-13'] = sk('y = x(2x − 3)(x + 2): positive cubic crossing at −2, 0 and 1.5',
    [[x => x * (2 * x - 3) * (x + 2), 'y = x(2x − 3)(x + 2)', 2.4, 10]], [-3, 2.4, -6, 12], [[-2, 0, '−2', -12, 14], [0, 0, 'O', -10, -12], [1.5, 0, '3/2', 6, 14]]);
  FIGS['P4.1-14'] = sk('y = x(x − k) squared for k = 3: crosses at the origin, touches at (k, 0)',
    [[x => x * (x - 3) ** 2, 'y = x(x − k)²', 4.4, 9]], [-1, 4.4, -5, 10], [[0, 0, 'O', -10, 14], [3, 0, '(k, 0)', 0, 16]]);
  FIGS['P4.1-15'] = sk('y = (x − 1) squared (x − 4): touches the x-axis at 1, crosses at 4, y-intercept −4',
    [[x => (x - 1) ** 2 * (x - 4), 'y = (x − 1)²(x − 4)', 5, 6]], [-0.8, 5, -12, 8], [[1, 0, 'touches at 1', 0, -12], [4, 0, '4', -10, -12], [0, -4, '(0, −4)', 30, 6]]);

  FIGS['P4.2-quartic'] = sk('Positive quartic y = (x + 2)(x + 1)(x − 1)(x − 3): W shape crossing at −2, −1, 1 and 3, y-intercept 6',
    [[x => (x + 2) * (x + 1) * (x - 1) * (x - 3), 'y = (x + 2)(x + 1)(x − 1)(x − 3)', 3.6, 14]], [-2.6, 3.6, -18, 16], [[-2, 0, '−2', -12, -12], [-1, 0, '−1', 10, -12], [1, 0, '1', -8, 14], [3, 0, '3', 10, -12], [0, 6, '(0, 6)', 26, -6]]);
  FIGS['P4.2-triple'] = sk('y = x cubed (2 − x): both ends point down; flat crossing at the origin (triple root) and a crossing at 2',
    [[x => x ** 3 * (2 - x), 'y = x³(2 − x)', 2.8, -6]], [-1.2, 2.8, -8, 3], [[0, 0, 'O (flat)', -26, -12], [2, 0, '2', 10, -12]]);
  FIGS['P4.2-4'] = sk('y = x squared (x − 3)(x + 2): touches at the origin, crosses at −2 and 3',
    [[x => x * x * (x - 3) * (x + 2), 'y = x²(x − 3)(x + 2)', 3.6, 24]], [-2.6, 3.6, -30, 30], [[-2, 0, '−2', -12, -12], [0, 0, 'O', 0, -12], [3, 0, '3', -10, -12]]);
  FIGS['P4.2-5'] = sk('y = (x − 1) squared (x + 2) squared: touches the x-axis at −2 and 1, y-intercept 4',
    [[x => (x - 1) ** 2 * (x + 2) ** 2, 'y = (x − 1)²(x + 2)²', 2.2, 13]], [-3.2, 2.2, -2, 14], [[-2, 0, '−2', 0, 16], [1, 0, '1', 0, 16], [0, 4, '(0, 4)', 26, 6]]);
  FIGS['P4.2-6'] = sk('y = −x(x − 2)(x + 1)(x + 4): an upside-down W, crossing at −4, −1, 0 and 2',
    [[x => -x * (x - 2) * (x + 1) * (x + 4), 'y = −x(x − 2)(x + 1)(x + 4)', 2.8, 26]], [-4.6, 2.8, -20, 32], [[-4, 0, '−4', -12, 14], [-1, 0, '−1', 12, -12], [0, 0, 'O', 10, 14], [2, 0, '2', 10, -12]]);
  FIGS['P4.2-7'] = sk('y = x to the 4 minus 5x squared + 4: W shape crossing at −2, −1, 1 and 2, y-intercept 4',
    [[x => x ** 4 - 5 * x * x + 4, 'y = x⁴ − 5x² + 4', 2.6, 9]], [-2.6, 2.6, -4, 10], [[-2, 0, '−2', -12, 14], [-1, 0, '−1', 12, 14], [1, 0, '1', -12, 14], [2, 0, '2', 12, 14], [0, 4, '(0, 4)', 24, -8]]);
  FIGS['P4.2-8'] = sk('y = x cubed (x − 2): flat crossing at the origin, crossing at 2, both ends up',
    [[x => x ** 3 * (x - 2), 'y = x³(x − 2)', 2.8, 6]], [-1.2, 2.8, -3, 8], [[0, 0, 'O (flat)', -26, -12], [2, 0, '2', 10, 14]]);
  FIGS['P4.2-10'] = sk('y = (x + 1) squared (2 − x)(x + 3): both ends down, crosses at −3 and 2, touches at −1, y-intercept 6',
    [[x => (x + 1) ** 2 * (2 - x) * (x + 3), 'y = (x + 1)²(2 − x)(x + 3)', 3, 26]], [-3.8, 3, -14, 30], [[-3, 0, '−3', -14, -10], [-1, 0, 'touches at −1', 0, 16], [2, 0, '2', 12, -12], [0, 6, '(0, 6)', 26, -4]]);
  FIGS['P4.2-11'] = sk('y = x squared (x − 2) squared: touches the x-axis at 0 and 2, never negative',
    [[x => x * x * (x - 2) ** 2, 'y = x²(x − 2)²', 3, 5]], [-1, 3, -1, 6], [[0, 0, 'O', -10, 14], [2, 0, '2', 10, 14]]);
  FIGS['P4.2-12'] = sk('y = (x² − 9)(x² − 1): W shape crossing at −3, −1, 1 and 3, y-intercept 9, minimum points at (±√5, −16)',
    [[x => (x * x - 9) * (x * x - 1), 'y = (x² − 9)(x² − 1)', 3.6, 14]], [-3.6, 3.6, -20, 16], [[-3, 0, '−3', -14, -12], [-1, 0, '−1', -12, 14], [1, 0, '1', 12, 14], [3, 0, '3', 14, -12], [0, 9, '(0, 9)', 26, -4], [Math.sqrt(5), -16, '(√5, −16)', 10, 18], [-Math.sqrt(5), -16, '(−√5, −16)', -10, 18]]);
  FIGS['P4.2-13'] = sk('y = 2(x + 2) squared (x − 1) squared: touches at −2 and 1, y-intercept 8',
    [[x => 2 * (x + 2) ** 2 * (x - 1) ** 2, 'y = 2(x + 2)²(x − 1)²', 2, 18]], [-3.2, 2, -2, 20], [[-2, 0, '−2', 0, 16], [1, 0, '1', 0, 16], [0, 8, '(0, 8)', 26, -6]]);
  FIGS['P4.2-15'] = sk('y = x squared (x − 2)(x + 3): touches at the origin, crosses at −3 and 2',
    [[x => x * x * (x - 2) * (x + 3), 'y = x²(x − 2)(x + 3)', 2.6, 20]], [-3.6, 2.6, -20, 24], [[-3, 0, '−3', -14, -12], [0, 0, 'O', 0, -12], [2, 0, '2', 12, -12]]);

  FIGS['P4.3-recip'] = sk('y = 2/x (in the first and third quadrants) and y = 2/x squared (above the x-axis on both sides), asymptotes the axes',
    [[x => 2 / x, 'y = 2/x', 4, 1.6], [x => 2 / (x * x), 'y = 2/x²', -1.4, 5.4]], [-4, 4, -5, 5]);
  FIGS['P4.3-neg'] = sk('y = −4/x squared: both branches below the x-axis', [[x => -4 / (x * x), 'y = −4/x²', 4, -1.2]], [-4, 4, -6, 2]);
  FIGS['P4.3-4'] = sk('y = 4/x and y = 4/x squared, meeting at (1, 4)', [[x => 4 / x, 'y = 4/x', 4, 2], [x => 4 / (x * x), 'y = 4/x²', -1, 7.5]], [-4, 4, -8, 8], [[1, 4, '(1, 4)', 26, -4]]);
  FIGS['P4.3-5'] = sk('y = −2/x squared: both branches below the x-axis, asymptotes x = 0 and y = 0', [[x => -2 / (x * x), 'y = −2/x²', 4, -1]], [-4, 4, -6, 2]);
  FIGS['P4.3-14'] = sk('y = 2/x squared and y = x + 1, meeting once at (1, 2)', [[x => 2 / (x * x), 'y = 2/x²', -0.6, 7], [x => x + 1, 'y = x + 1', 3.6, 2.2]], [-3, 3.6, -3, 8], [[1, 2, '(1, 2)', 24, -4]]);

  FIGS['P4.4-three'] = sk('y = 1/x and y = x squared − 4 meet three times: once for x > 2 and twice for −2 < x < 0',
    [[x => 1 / x, 'y = 1/x', -0.4, -6.5], [x => x * x - 4, 'y = x² − 4', 3.4, 6]], [-3.4, 3.4, -7, 7]);
  FIGS['P4.4-ex1'] = sk('y = x squared (x − 3) and y = 2x(3 − x), meeting at (−2, −20), (0, 0) and (3, 0)',
    [[x => x * x * (x - 3), 'y = x²(x − 3)', 4, 12], [x => 2 * x * (3 - x), 'y = 2x(3 − x)', -1, -20]], [-2.6, 4, -32, 16], [[-2, -20, '(−2, −20)', 34, 0], [0, 0, 'O', -10, -12], [3, 0, '(3, 0)', 22, 14]]);
  FIGS['P4.4-7'] = sk('y = 1/x squared and y = x + 3 meet three times', [[x => 1 / (x * x), 'y = 1/x²', -0.3, 6.5], [x => x + 3, 'y = x + 3', 1.8, 2.6]], [-3.6, 1.8, -1, 7]);
  FIGS['P4.4-9'] = sk('y = x(x − 3) squared and y = x meeting at (0, 0), (2, 2) and (4, 4)', [[x => x * (x - 3) ** 2, 'y = x(x − 3)²', 2.4, 6], [x => x, 'y = x', 1.4, 2.6]], [-0.8, 4.8, -2, 8], [[0, 0, 'O', -10, -10], [2, 2, '(2, 2)', 10, -14], [4, 4, '(4, 4)', -26, -6]]);
  FIGS['P4.4-13'] = sk('y = 2/x and y = 4 − x squared meet three times', [[x => 2 / x, 'y = 2/x', 3.4, 1.2], [x => 4 - x * x, 'y = 4 − x²', 3.4, -6]], [-3.4, 3.4, -7, 7]);
  FIGS['P4.4-15'] = sk('y = x squared (x − 4) and y = 5x meeting at (−1, −5), (0, 0) and (5, 25)', [[x => x * x * (x - 4), 'y = x²(x − 4)', 3.6, -20], [x => 5 * x, 'y = 5x', 3, 18]], [-2, 5.8, -24, 36], [[-1, -5, '(−1, −5)', -20, 16], [0, 0, 'O', 10, -10], [5, 25, '(5, 25)', -26, -6]]);
}

CONTENT['P4.1'] = {
notes: R`
### The shape of a cubic
A cubic is $y = ax^3 + bx^2 + cx + d$.
- If $a > 0$ the graph goes from **bottom left to top right**.
- If $a < 0$ it goes from **top left to bottom right**.

### Sketching from the factorised form
For $y = a(x - p)(x - q)(x - r)$:
- it crosses the $x$-axis at $p$, $q$ and $r$
- it crosses the $y$-axis where $x = 0$
- a **repeated** root $(x - p)^2$ means the curve **touches** the $x$-axis at $p$ (a turning point there)
- $y = (x - p)^3$ has a flat **point of inflection** at $(p, 0)$.

If you're given the expanded form, factorise first (take out $x$, or use the factor theorem in Chapter 7).

::: booklet
**Not in the formula booklet:** cubic shapes.
:::

### Worked example 1
Sketch $y = (x - 1)(x + 2)(x - 3)$.
1. Roots: $x = 1$, $-2$ and $3$.
2. $y$-intercept: $(0 - 1)(0 + 2)(0 - 3) = 6$.
3. Multiplying out starts $x^3$, so $a > 0$: bottom left to top right.

[[fig:P4.1-cubic]]

### Worked example 2: a negative cubic
Sketch $y = x^2(3 - x)$.
- Roots: $x = 0$ (repeated, so it **touches**) and $x = 3$.
- The $x^3$ term is $-x^3$, so the curve goes from **top left to bottom right**.

[[fig:P4.1-neg]]

**The trap:** seeing the factor $(3 - x)$ and drawing a positive cubic. Always find the sign of the $x^3$ term: here $x^2 \times (-x) = -x^3$.

### Watch out
- Label every point where the curve meets an axis, with coordinates.
- A sketch needs the right shape and the right intercepts. It doesn't need the turning points unless the question asks.
`,
questions: [
Q('P4.1-1', 1, R`Write down the coordinates of the points where $y = (x - 2)(x + 1)(x + 4)$ meets the axes. [[2]]`,
  [R`Each bracket gives a root.`, R`For the $y$-intercept put $x = 0$.`],
  [R`|B1|$(2, 0)$, $(-1, 0)$, $(-4, 0)$`, R`|B1|$(0, -8)$`], R`$(2, 0)$, $(-1, 0)$, $(-4, 0)$, $(0, -8)$`,
  R`Roots $x = 2$, $-1$, $-4$. At $x = 0$: $(-2)(1)(4) = -8$.`),
Q('P4.1-2', 1, R`State whether the graph of $y = 5 - 2x^3$ starts at the top left or the bottom left, and write down where it crosses the $y$-axis. [[2]]`,
  [R`Look at the sign of the $x^3$ term.`, R`Put $x = 0$.`],
  [R`|B1|Top left (the $x^3$ coefficient is negative)`, R`|B1|$(0, 5)$`], R`Top left; $(0, 5)$`,
  R`The $x^3$ coefficient is $-2 < 0$, so the curve runs from top left to bottom right. At $x = 0$, $y = 5$.`),
Q('P4.1-3', 1, R`Factorise $x^3 - 9x$ fully, and hence write down where $y = x^3 - 9x$ crosses the $x$-axis. [[2]]`,
  [R`Take out $x$ first.`, R`$x^2 - 9$ is a difference of two squares.`],
  [R`|M1|$x(x - 3)(x + 3)$`, R`|A1|$x = 0$, $3$, $-3$`], R`$x(x - 3)(x + 3)$; $x = 0, \pm3$`,
  R`$x^3 - 9x = x(x^2 - 9) = x(x - 3)(x + 3)$, so it crosses at $x = -3$, $0$, $3$.`),
Q('P4.1-4', 2, R`Sketch $y = x(x - 2)(x + 3)$, showing the coordinates of the points where it meets the axes. [[3]]`,
  [R`Roots from each factor.`, R`The $x^3$ coefficient is $+1$.`],
  [R`|B1|Positive cubic shape`, R`|B1|Through $(-3, 0)$ and $(2, 0)$`, R`|B1|Through the origin`], R`Positive cubic through $(-3, 0)$, $(0, 0)$, $(2, 0)$`,
  R`Roots $0$, $2$, $-3$, and the $y$-intercept is $0$. The leading term is $x^3$, so it goes bottom left to top right.`, { solFig: FIGS['P4.1-4'] }),
Q('P4.1-5', 2, R`Sketch $y = (x - 1)^2(x + 2)$, showing where it meets the axes. [[3]]`,
  [R`$(x - 1)^2$ is a repeated root: the curve touches there.`, R`$y$-intercept: $(-1)^2(2)$.`],
  [R`|B1|Positive cubic shape`, R`|B1|Crosses at $(-2, 0)$, touches at $(1, 0)$`, R`|B1|$(0, 2)$`], R`Crosses at $(-2, 0)$, touches at $(1, 0)$, $y$-intercept $(0, 2)$`,
  R`Leading term $x^3$: positive cubic. It crosses at $x = -2$, touches at $x = 1$, and at $x = 0$, $y = 1 \times 2 = 2$.`, { solFig: FIGS['P4.1-5'] }),
Q('P4.1-6', 2, R`Sketch $y = (2 - x)(x + 1)(x + 3)$, showing where it meets the axes. [[3]]`,
  [R`What is the sign of the $x^3$ term?`, R`$(-x)(x)(x) = -x^3$.`],
  [R`|B1|Negative cubic shape`, R`|B1|$(-3, 0)$, $(-1, 0)$, $(2, 0)$`, R`|B1|$(0, 6)$`], R`Negative cubic through $(-3, 0)$, $(-1, 0)$, $(2, 0)$ and $(0, 6)$`,
  R`The $x^3$ term is $-x^3$, so top left to bottom right. Roots $2$, $-1$, $-3$; $y$-intercept $2 \times 1 \times 3 = 6$.`, { solFig: FIGS['P4.1-6'] }),
Q('P4.1-7', 2, R`Factorise $x^3 - 4x^2 + 4x$ fully, and hence sketch $y = x^3 - 4x^2 + 4x$. [[3]]`,
  [R`Take out $x$.`, R`$x^2 - 4x + 4$ is a perfect square.`],
  [R`|M1|$x(x - 2)^2$`, R`|B1|Positive cubic through the origin`, R`|B1|Touches the $x$-axis at $(2, 0)$`], R`$x(x - 2)^2$: crosses at $O$, touches at $(2, 0)$`,
  R`$x(x^2 - 4x + 4) = x(x - 2)^2$. It crosses at $x = 0$ and touches at $x = 2$.`, { solFig: FIGS['P4.1-7'] }),
Q('P4.1-8', 3, R`Sketch $y = (x + 1)^3$, showing where it meets the axes. [[3]]`,
  [R`A triple root gives a flat point of inflection.`, R`$y$-intercept: $1^3$.`],
  [R`|B1|Positive cubic shape`, R`|B1|Point of inflection at $(-1, 0)$`, R`|B1|$(0, 1)$`], R`Point of inflection at $(-1, 0)$; $y$-intercept $(0, 1)$`,
  R`$y = (x + 1)^3$ is $y = x^3$ moved $1$ to the left: flat through $(-1, 0)$, and $y = 1$ at $x = 0$.`, { solFig: FIGS['P4.1-8'] }),
Q('P4.1-9', 3, R`The curve $y = (x + a)(x - 2)(x - 5)$ meets the $y$-axis at $(0, 30)$. Find $a$, and write down all the points where the curve meets the $x$-axis. [[3]]`,
  [R`Put $x = 0$: $a \times (-2) \times (-5)$.`, R`$10a = 30$.`],
  [R`|M1|$10a = 30$`, R`|A1|$a = 3$`, R`|A1|$(-3, 0)$, $(2, 0)$, $(5, 0)$`], R`$a = 3$; $(-3, 0)$, $(2, 0)$, $(5, 0)$`,
  R`At $x = 0$: $a(-2)(-5) = 10a = 30$, so $a = 3$. Roots $x = -3$, $2$, $5$.`),
Q('P4.1-10', 3, R`A cubic crosses the $x$-axis at $x = -1$, $2$ and $4$, and the $y$-axis at $(0, 16)$. Find its equation in the form $y = ax^3 + bx^2 + cx + d$. [[4]]`,
  [R`Start from $y = k(x + 1)(x - 2)(x - 4)$.`, R`Use $x = 0$ to find $k$.`],
  [R`|M1|$y = k(x + 1)(x - 2)(x - 4)$`, R`|A1|$8k = 16$ so $k = 2$`, R`|M1|Expands`, R`|A1|$y = 2x^3 - 10x^2 + 4x + 16$`], R`$y = 2x^3 - 10x^2 + 4x + 16$`,
  R`At $x = 0$: $k(1)(-2)(-4) = 8k = 16$, so $k = 2$. $(x + 1)(x - 2) = x^2 - x - 2$; times $(x - 4)$: $x^3 - 5x^2 + 2x + 8$. Doubling: $2x^3 - 10x^2 + 4x + 16$.`),
Q('P4.1-11', 3, R`Sketch $y = x^3 - 2x^2 - 3x$, showing where it meets the axes. [[3]]`,
  [R`Take out $x$.`, R`$x^2 - 2x - 3 = (x - 3)(x + 1)$.`],
  [R`|M1|$x(x - 3)(x + 1)$`, R`|B1|Positive cubic shape`, R`|B1|$(-1, 0)$, $(0, 0)$, $(3, 0)$`], R`Positive cubic through $(-1, 0)$, $(0, 0)$, $(3, 0)$`,
  R`$x(x^2 - 2x - 3) = x(x - 3)(x + 1)$: roots $-1$, $0$, $3$, positive cubic.`, { solFig: FIGS['P4.1-11'] }),
Q('P4.1-12', 4, R`The graph of $y = x^3 + bx^2 + cx + d$ touches the $x$-axis at $x = 3$ and crosses it at $x = -2$. Find $b$, $c$ and $d$. [[4]]`,
  [R`Touching means a repeated root: $(x - 3)^2$.`, R`$y = (x - 3)^2(x + 2)$, since the $x^3$ coefficient is $1$.`],
  [R`|M1|$(x - 3)^2(x + 2)$`, R`|M1|Expands`, R`|A1|$b = -4$, $c = -3$`, R`|A1|$d = 18$`], R`$b = -4$, $c = -3$, $d = 18$`,
  R`$(x^2 - 6x + 9)(x + 2) = x^3 + 2x^2 - 6x^2 - 12x + 9x + 18 = x^3 - 4x^2 - 3x + 18$.`),
Q('P4.1-13', 4, R`**(a)** Factorise $2x^3 + x^2 - 6x$ fully. [[2]]

**(b)** Hence sketch $y = 2x^3 + x^2 - 6x$, showing where it meets the axes. [[3]]`,
  [R`Take out $x$, then factorise $2x^2 + x - 6$.`, R`$2x^2 + x - 6 = (2x - 3)(x + 2)$.`],
  [R`(a)|M1|$x(2x^2 + x - 6)$`, R`(a)|A1|$x(2x - 3)(x + 2)$`, R`(b)|B1|Positive cubic shape`, R`(b)|B1|$(-2, 0)$ and $\left(\frac32, 0\right)$`, R`(b)|B1|Through the origin`], R`(a) $x(2x - 3)(x + 2)$ (b) positive cubic through $(-2, 0)$, $(0, 0)$, $\left(\frac32, 0\right)$`,
  R`$2x^2 + x - 6 = (2x - 3)(x + 2)$, so the roots are $-2$, $0$, $\frac32$. Leading term $2x^3$: positive cubic.`, { solFig: FIGS['P4.1-13'] }),
Q('P4.1-14', 4, R`The curve $C$ has equation $y = x(x - k)^2$, where $k$ is a positive constant.

**(a)** Sketch $C$, showing where it meets the axes. [[3]]

**(b)** The point $(1, 4)$ lies on $C$. Find the value of $k$. [[3]]`,
  [R`$(x - k)^2$ means the curve touches at $x = k$.`, R`$(1, 4)$: $1 \times (1 - k)^2 = 4$.`],
  [R`(a)|B1|Positive cubic shape`, R`(a)|B1|Through the origin`, R`(a)|B1|Touches at $(k, 0)$`, R`(b)|M1|$(1 - k)^2 = 4$`, R`(b)|A1|$k = 3$ or $k = -1$`, R`(b)|A1|$k = 3$ since $k > 0$`], R`(b) $k = 3$`,
  R`(a) Crosses at $O$, touches at $(k, 0)$. (b) $1 - k = \pm2$, so $k = -1$ or $3$; $k > 0$ gives $k = 3$.`, { solFig: FIGS['P4.1-14'] }),
Q('P4.1-15', 5, R`The function $f$ is given by $f(x) = (x - 1)(x^2 + bx + 4)$.

**(a)** Find the set of values of $b$ for which the graph of $y = f(x)$ meets the $x$-axis at exactly one point. [[4]]

**(b)** For $b = -5$, factorise $f(x)$ fully and sketch $y = f(x)$, showing where it meets the axes. [[4]]`,
  [R`It always crosses at $x = 1$. One point only means the quadratic has no real roots.`, R`(Check that the quadratic can't have $x = 1$ as a repeated root: that needs $b = -5$ **and** $b^2 = 16$.)`, R`For $b = -5$: $x^2 - 5x + 4 = (x - 1)(x - 4)$.`],
  [R`(a)|M1|Quadratic has no real roots: $b^2 - 16 < 0$`, R`(a)|A1|Critical values $\pm4$`, R`(a)|A1|$-4 < b < 4$`, R`(a)|B1|Rules out a repeated root at $x = 1$`, R`(b)|M1|$(x - 1)^2(x - 4)$`, R`(b)|B1|Positive cubic`, R`(b)|B1|Touches at $(1, 0)$, crosses at $(4, 0)$`, R`(b)|B1|$(0, -4)$`], R`(a) $-4 < b < 4$ (b) $(x - 1)^2(x - 4)$`,
  R`(a) The factor $(x - 1)$ always gives one point. For no others, $x^2 + bx + 4 = 0$ must have no real roots: $b^2 < 16$, so $-4 < b < 4$. (If $b = \pm 4$ the quadratic has a repeated root $\mp 2$, which is a second point; it can only have root $1$ if $1 + b + 4 = 0$, i.e. $b = -5$, which gives roots $1$ and $4$.)

(b) $b = -5$: $f(x) = (x - 1)(x - 1)(x - 4) = (x - 1)^2(x - 4)$. It touches at $(1, 0)$, crosses at $(4, 0)$, and $f(0) = 1 \times (-4) = -4$.`, { solFig: FIGS['P4.1-15'] })
]};

CONTENT['P4.2'] = {
notes: R`
### The shape of a quartic
A quartic is $y = ax^4 + bx^3 + cx^2 + dx + e$.
- If $a > 0$, **both ends point up** (a W shape, or a U).
- If $a < 0$, **both ends point down**.

### Roots
- A single root: the curve **crosses** the axis.
- A double root $(x - p)^2$: it **touches** the axis.
- A triple root $(x - p)^3$: it crosses with a **flat** point of inflection.

::: booklet
**Not in the formula booklet:** quartic shapes.
:::

### Worked example 1
Sketch $y = (x + 2)(x + 1)(x - 1)(x - 3)$.
- Roots $-2$, $-1$, $1$, $3$.
- $y$-intercept: $(2)(1)(-1)(-3) = 6$.
- The leading term is $x^4$: both ends up.

[[fig:P4.2-quartic]]

### Worked example 2: a triple root
Sketch $y = x^3(2 - x)$.
- $x^3$ gives a triple root at $0$: a **flat crossing**, not a touch.
- $x = 2$ is a single root.
- Leading term $x^3 \times (-x) = -x^4$: both ends point down.

[[fig:P4.2-triple]]

**The trap:** drawing the curve bouncing off the origin. Only an **even** power touches; an odd power (like $x^3$) crosses.

### Watch out
- Count the factors' powers: they must add up to $4$.
- $x^4 - 5x^2 + 4$ is a quadratic in $x^2$: $(x^2 - 1)(x^2 - 4)$.
`,
questions: [
Q('P4.2-1', 1, R`Write down the coordinates of the points where $y = (x - 1)(x - 2)(x + 1)(x + 3)$ meets the axes. [[2]]`,
  [R`Each bracket gives a root.`, R`At $x = 0$: $(-1)(-2)(1)(3)$.`],
  [R`|B1|$(1, 0)$, $(2, 0)$, $(-1, 0)$, $(-3, 0)$`, R`|B1|$(0, 6)$`], R`$(1, 0)$, $(2, 0)$, $(-1, 0)$, $(-3, 0)$; $(0, 6)$`,
  R`Roots $1$, $2$, $-1$, $-3$; $y$-intercept $(-1)(-2)(1)(3) = 6$.`),
Q('P4.2-2', 1, R`Describe what happens to $y = 3 - x^4$ as $x$ becomes large and positive, and as $x$ becomes large and negative. Write down its $y$-intercept. [[2]]`,
  [R`The $x^4$ coefficient is negative.`, R`$x^4$ is positive for all $x \ne 0$.`],
  [R`|B1|$y \to -\infty$ at both ends`, R`|B1|$(0, 3)$`], R`Both ends go down; $(0, 3)$`,
  R`$-x^4$ dominates and is negative for large $|x|$, so both ends point down. At $x = 0$, $y = 3$.`),
Q('P4.2-3', 1, R`Factorise $x^4 - 16$ as far as possible, and write down the real roots of $x^4 - 16 = 0$. [[2]]`,
  [R`Difference of two squares: $(x^2)^2 - 4^2$.`, R`Factorise $x^2 - 4$ again.`],
  [R`|M1|$(x^2 - 4)(x^2 + 4)$`, R`|A1|$(x - 2)(x + 2)(x^2 + 4)$; $x = \pm2$`], R`$(x - 2)(x + 2)(x^2 + 4)$; $x = \pm 2$`,
  R`$x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$. $x^2 + 4 > 0$, so the only real roots are $\pm2$.`),
Q('P4.2-4', 2, R`Sketch $y = x^2(x - 3)(x + 2)$, showing where it meets the axes. [[3]]`,
  [R`$x^2$ gives a touch at the origin.`, R`Leading term $x^4$: both ends up.`],
  [R`|B1|Both ends up`, R`|B1|Crosses at $(-2, 0)$ and $(3, 0)$`, R`|B1|Touches at the origin`], R`Touches at $O$, crosses at $(-2, 0)$ and $(3, 0)$, both ends up`,
  R`Roots $0$ (double), $3$, $-2$. Between $-2$ and $3$ the curve is below the axis except at $O$, where it touches.`, { solFig: FIGS['P4.2-4'] }),
Q('P4.2-5', 2, R`Sketch $y = (x - 1)^2(x + 2)^2$, showing where it meets the axes. [[3]]`,
  [R`Both roots are repeated.`, R`$y$-intercept: $1 \times 4$.`],
  [R`|B1|Both ends up, never below the axis`, R`|B1|Touches at $(-2, 0)$ and $(1, 0)$`, R`|B1|$(0, 4)$`], R`Touches at $(-2, 0)$ and $(1, 0)$; $(0, 4)$`,
  R`$y$ is a square, so $y \ge 0$. It touches at both roots and $y(0) = (-1)^2(2)^2 = 4$.`, { solFig: FIGS['P4.2-5'] }),
Q('P4.2-6', 2, R`Sketch $y = -x(x - 2)(x + 1)(x + 4)$, showing where it meets the axes. [[3]]`,
  [R`The minus sign makes the leading term $-x^4$.`, R`Roots $0$, $2$, $-1$, $-4$.`],
  [R`|B1|Both ends down`, R`|B1|Crosses at $(-4, 0)$, $(-1, 0)$, $(2, 0)$`, R`|B1|Through the origin`], R`Both ends down; crosses at $-4$, $-1$, $0$, $2$`,
  R`Leading term $-x^4$, so it's an upside-down W crossing at $-4$, $-1$, $0$ and $2$.`, { solFig: FIGS['P4.2-6'] }),
Q('P4.2-7', 2, R`Factorise $x^4 - 5x^2 + 4$ fully and hence sketch $y = x^4 - 5x^2 + 4$. [[3]]`,
  [R`Treat it as a quadratic in $x^2$.`, R`$(x^2 - 1)(x^2 - 4)$.`],
  [R`|M1|$(x - 1)(x + 1)(x - 2)(x + 2)$`, R`|B1|W shape crossing at $\pm1$, $\pm2$`, R`|B1|$(0, 4)$`], R`$(x - 1)(x + 1)(x - 2)(x + 2)$; crosses at $\pm1$, $\pm2$; $(0, 4)$`,
  R`$x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)$. Four roots $\pm1$, $\pm2$, both ends up, $y(0) = 4$.`, { solFig: FIGS['P4.2-7'] }),
Q('P4.2-8', 3, R`Sketch $y = x^3(x - 2)$, showing where it meets the axes. [[3]]`,
  [R`$x^3$ is a triple root.`, R`Triple roots cross flat; they don't touch.`],
  [R`|B1|Both ends up`, R`|B1|Flat crossing at the origin`, R`|B1|Crosses at $(2, 0)$`], R`Flat crossing at $O$, crosses at $(2, 0)$, both ends up`,
  R`Leading term $x^4$. For $0 < x < 2$, $y < 0$; for $x < 0$, $x^3 < 0$ and $x - 2 < 0$, so $y > 0$. It crosses at $O$ with a flat point of inflection.`, { solFig: FIGS['P4.2-8'] }),
Q('P4.2-9', 3, R`A quartic has the form $y = a(x - 1)(x + 1)(x - 2)(x + 2)$ and passes through $(0, 8)$. Find $a$ and write the equation in the form $y = px^4 + qx^2 + r$. [[3]]`,
  [R`Put $x = 0$.`, R`$(x^2 - 1)(x^2 - 4)$.`],
  [R`|M1|$4a = 8$`, R`|A1|$a = 2$`, R`|A1|$y = 2x^4 - 10x^2 + 8$`], R`$a = 2$; $y = 2x^4 - 10x^2 + 8$`,
  R`At $x = 0$: $a(-1)(1)(-2)(2) = 4a = 8$, so $a = 2$. $2(x^2 - 1)(x^2 - 4) = 2x^4 - 10x^2 + 8$.`),
Q('P4.2-10', 3, R`Sketch $y = (x + 1)^2(2 - x)(x + 3)$, showing where it meets the axes. [[3]]`,
  [R`Leading term: $x^2 \times (-x) \times x$.`, R`$y$-intercept: $1 \times 2 \times 3$.`],
  [R`|B1|Both ends down`, R`|B1|Crosses at $(-3, 0)$ and $(2, 0)$, touches at $(-1, 0)$`, R`|B1|$(0, 6)$`], R`Both ends down; crosses at $-3$, $2$; touches at $-1$; $(0, 6)$`,
  R`The leading term is $-x^4$, so both ends point down. It touches at $x = -1$ and $y(0) = 6$.`, { solFig: FIGS['P4.2-10'] }),
Q('P4.2-11', 3, R`**(a)** Show that $x^4 - 4x^3 + 4x^2 = x^2(x - 2)^2$. [[1]]

**(b)** Hence sketch $y = x^4 - 4x^3 + 4x^2$ and explain why $y \ge 0$ for all $x$. [[2]]`,
  [R`Take out $x^2$.`, R`A square is never negative.`],
  [R`(a)|B1|$x^2(x^2 - 4x + 4) = x^2(x - 2)^2$`, R`(b)|B1|Touches at $O$ and $(2, 0)$, both ends up`, R`(b)|B1|$y = (x(x - 2))^2 \ge 0$`], R`Touches the $x$-axis at $0$ and $2$; $y$ is a square`,
  R`$x^2(x^2 - 4x + 4) = x^2(x - 2)^2 = [x(x - 2)]^2$, which is never negative. The curve touches the axis at $0$ and $2$.`, { solFig: FIGS['P4.2-11'] }),
Q('P4.2-12', 4, R`**(a)** Show that $(x^2 - 9)(x^2 - 1) \equiv (x^2 - 5)^2 - 16$. [[2]]

**(b)** Hence state the minimum value of $y = (x^2 - 9)(x^2 - 1)$ and the values of $x$ where it occurs. [[2]]

**(c)** Sketch the curve, showing where it meets the axes. [[2]]`,
  [R`Expand both sides.`, R`$(x^2 - 5)^2 \ge 0$, with equality at $x^2 = 5$.`],
  [R`(a)|M1|Expands to $x^4 - 10x^2 + 9$`, R`(a)|A1|Both sides match`, R`(b)|B1|Minimum $-16$`, R`(b)|B1|At $x = \pm\sqrt5$`, R`(c)|B1|W shape crossing at $\pm1$, $\pm3$`, R`(c)|B1|$(0, 9)$`], R`(b) $-16$ at $x = \pm\sqrt5$`,
  R`(a) LHS $= x^4 - 10x^2 + 9$; RHS $= x^4 - 10x^2 + 25 - 16 = x^4 - 10x^2 + 9$.

(b) The smallest value of $(x^2 - 5)^2$ is $0$, at $x^2 = 5$, so $y_{\min} = -16$ at $x = \pm\sqrt5$.

(c) Roots $\pm1$, $\pm3$; $y(0) = 9$.`, { solFig: FIGS['P4.2-12'] }),
Q('P4.2-13', 4, R`A quartic curve touches the $x$-axis at $x = -2$ and at $x = 1$, and passes through $(0, 8)$. Find its equation and sketch it. [[4]]`,
  [R`$y = a(x + 2)^2(x - 1)^2$.`, R`At $x = 0$: $a \times 4 \times 1 = 8$.`],
  [R`|M1|$y = a(x + 2)^2(x - 1)^2$`, R`|A1|$a = 2$`, R`|B1|Both ends up, touching at $-2$ and $1$`, R`|B1|$(0, 8)$ shown`], R`$y = 2(x + 2)^2(x - 1)^2$`,
  R`Two double roots use up all four powers: $y = a(x + 2)^2(x - 1)^2$. $4a = 8$, so $a = 2$.`, { solFig: FIGS['P4.2-13'] }),
Q('P4.2-14', 4, R`The curve $y = x(x - 1)(x + 1)(x - a)$, where $a > 1$, passes through $(2, -6)$.

**(a)** Find $a$. [[2]]

**(b)** Hence write down all the points where the curve meets the $x$-axis, and state, with a reason, whether the curve is above or below the axis for $1 < x < a$. [[2]]`,
  [R`Substitute $x = 2$: $2 \times 1 \times 3 \times (2 - a)$.`, R`Between consecutive roots the sign alternates; the far right is positive.`],
  [R`(a)|M1|$6(2 - a) = -6$`, R`(a)|A1|$a = 3$`, R`(b)|B1|$(-1, 0)$, $(0, 0)$, $(1, 0)$, $(3, 0)$`, R`(b)|B1|Below, e.g. $(2, -6)$ is below`], R`(a) $a = 3$ (b) $-1$, $0$, $1$, $3$; below`,
  R`(a) $6(2 - a) = -6$, so $2 - a = -1$, $a = 3$. (b) Roots $-1$, $0$, $1$, $3$. The leading term is $x^4$, so the curve is above the axis for $x > 3$ and below between $1$ and $3$ (the point $(2, -6)$ confirms it).`),
Q('P4.2-15', 5, R`The curve $y = x^4 + bx^3 + cx^2$ touches the $x$-axis at the origin and crosses it at $x = 2$ and $x = -3$.

**(a)** Find $b$ and $c$. [[3]]

**(b)** Sketch the curve. [[2]]

**(c)** Hence find the set of values of $x$ for which $x^4 + bx^3 + cx^2 > 0$. [[3]]`,
  [R`$y = x^2(x - 2)(x + 3)$.`, R`$x^2 > 0$ for $x \ne 0$, so the sign comes from $(x - 2)(x + 3)$.`],
  [R`(a)|M1|$y = x^2(x - 2)(x + 3)$`, R`(a)|A1|$b = 1$`, R`(a)|A1|$c = -6$`, R`(b)|B1|Both ends up, touching at $O$`, R`(b)|B1|Crossing at $-3$ and $2$`, R`(c)|M1|Uses the sketch: above the axis outside the roots`, R`(c)|A1|Critical values $-3$ and $2$`, R`(c)|A1|$x < -3$ or $x > 2$`], R`(a) $b = 1$, $c = -6$ (c) $x < -3$ or $x > 2$`,
  R`(a) $x^2(x^2 + x - 6) = x^4 + x^3 - 6x^2$, so $b = 1$, $c = -6$.

(c) The curve is above the axis for $x < -3$ and $x > 2$. Between $-3$ and $2$ it's below, apart from touching at $O$ where $y = 0$ (not $> 0$). So $x < -3$ or $x > 2$.`, { solFig: FIGS['P4.2-15'] })
]};

CONTENT['P4.3'] = {
notes: R`
### $y = \dfrac{k}{x}$
- **Asymptotes:** $x = 0$ and $y = 0$. The curve gets closer and closer to them but never touches.
- If $k > 0$, the branches are in the **first and third** quadrants.
- If $k < 0$, they are in the **second and fourth**.

### $y = \dfrac{k}{x^2}$
- Same asymptotes.
- $x^2 > 0$, so if $k > 0$ **both branches are above** the $x$-axis; if $k < 0$, both are below.

::: booklet
**Not in the formula booklet:** these shapes.
:::

### Worked example 1
Sketch $y = \dfrac{2}{x}$ and $y = \dfrac{2}{x^2}$ on the same axes.

[[fig:P4.3-recip]]

They meet where $\frac2x = \frac{2}{x^2}$: $2x = 2$, so $x = 1$, the point $(1, 2)$.

### Worked example 2: a negative numerator
Sketch $y = -\dfrac{4}{x^2}$.
- $x^2$ is always positive, so $y$ is always **negative**: both branches are **below** the $x$-axis.

[[fig:P4.3-neg]]

**The trap:** treating it like $y = -\frac4x$ and putting the branches in opposite quadrants. Only $\frac{k}{x}$ changes sign with $x$.

### Watch out
- Draw the asymptotes as dashed lines if they aren't the axes, and never let the curve cross them.
- To find where a reciprocal graph meets another graph, multiply through by $x$ (or $x^2$), remembering $x \ne 0$.
`,
questions: [
Q('P4.3-1', 1, R`Write down the equations of the asymptotes of $y = \dfrac{5}{x}$. [[1]]`,
  [R`What values can't $x$ take?`, R`What does $y$ approach for large $x$?`],
  [R`|B1|$x = 0$ and $y = 0$`], R`$x = 0$ and $y = 0$`,
  R`$x$ can't be $0$, and $y \to 0$ as $x \to \pm\infty$: the asymptotes are the axes.`),
Q('P4.3-2', 1, R`State which quadrants the graph of $y = -\dfrac{3}{x}$ lies in. [[1]]`,
  [R`Try $x = 1$ and $x = -1$.`, R`$k < 0$.`],
  [R`|B1|Second and fourth`], R`Second and fourth`,
  R`At $x = 1$, $y = -3$ (fourth quadrant); at $x = -1$, $y = 3$ (second).`),
Q('P4.3-3', 1, R`Find the value of $y$ on the curve $y = \dfrac{6}{x^2}$ when $x = -2$. [[1]]`,
  [R`Square first.`, R`$(-2)^2 = 4$.`],
  [R`|B1|$\frac32$`], R`$\frac32$`,
  R`$\frac{6}{4} = \frac32$.`),
Q('P4.3-4', 2, R`Sketch $y = \dfrac{4}{x}$ and $y = \dfrac{4}{x^2}$ on the same axes, and find where they meet. [[3]]`,
  [R`One curve has branches in quadrants 1 and 3, the other in 1 and 2.`, R`Solve $\frac4x = \frac{4}{x^2}$.`],
  [R`|B1|$y = \frac4x$ in quadrants 1 and 3`, R`|B1|$y = \frac{4}{x^2}$ in quadrants 1 and 2`, R`|B1|$(1, 4)$`], R`They meet at $(1, 4)$`,
  R`$\frac4x = \frac{4}{x^2}$ gives $4x = 4$, so $x = 1$ and $y = 4$. They can only meet in the first quadrant.`, { solFig: FIGS['P4.3-4'] }),
Q('P4.3-5', 2, R`Sketch $y = -\dfrac{2}{x^2}$, stating the equations of its asymptotes. [[2]]`,
  [R`$x^2 > 0$, so what sign is $y$?`, R`The asymptotes are the axes.`],
  [R`|B1|Both branches below the $x$-axis`, R`|B1|$x = 0$, $y = 0$`], R`Both branches below the $x$-axis; asymptotes $x = 0$, $y = 0$`,
  R`$y = -\frac{2}{x^2} < 0$ for all $x \ne 0$, so both branches are under the $x$-axis.`, { solFig: FIGS['P4.3-5'] }),
Q('P4.3-6', 2, R`The point $(2, -3)$ lies on the curve $y = \dfrac{k}{x}$. Find $k$ and state which quadrants the curve lies in. [[2]]`,
  [R`$-3 = \frac{k}{2}$.`, R`The sign of $k$ decides the quadrants.`],
  [R`|B1|$k = -6$`, R`|B1|Second and fourth`], R`$k = -6$; second and fourth`,
  R`$k = 2 \times (-3) = -6 < 0$, so the branches are in the second and fourth quadrants.`),
Q('P4.3-7', 2, R`The point $(-1, 5)$ lies on $y = \dfrac{k}{x^2}$. Find $k$, and the other point on the curve with $y = 5$. [[2]]`,
  [R`$5 = \frac{k}{1}$.`, R`The curve is symmetric in the $y$-axis.`],
  [R`|B1|$k = 5$`, R`|B1|$(1, 5)$`], R`$k = 5$; $(1, 5)$`,
  R`$k = 5 \times (-1)^2 = 5$. $\frac{5}{x^2} = 5$ gives $x = \pm1$.`),
Q('P4.3-8', 3, R`Find the points where $y = \dfrac{8}{x}$ meets $y = 2x$. [[3]]`,
  [R`Multiply by $x$: $8 = 2x^2$.`, R`Two values of $x$.`],
  [R`|M1|$2x^2 = 8$`, R`|A1|$x = \pm2$`, R`|A1|$(2, 4)$ and $(-2, -4)$`], R`$(2, 4)$ and $(-2, -4)$`,
  R`$x^2 = 4$, $x = \pm2$; $y = 2x$ gives $(2, 4)$ and $(-2, -4)$.`),
Q('P4.3-9', 3, R`Find the exact coordinates of the points where $y = \dfrac{9}{x^2}$ meets $y = x^2$. [[3]]`,
  [R`$9 = x^4$.`, R`$x^2 = 3$ (the negative value is impossible).`],
  [R`|M1|$x^4 = 9$`, R`|A1|$x = \pm\sqrt3$`, R`|A1|$(\sqrt3, 3)$ and $(-\sqrt3, 3)$`], R`$(\pm\sqrt3, 3)$`,
  R`$x^4 = 9$ so $x^2 = 3$ ($x^2 = -3$ has no real solution). $x = \pm\sqrt3$, $y = 3$.`),
Q('P4.3-10', 3, R`Show that the curve $y = \dfrac{2}{x}$ and the line $y = x - 1$ meet where $x^2 - x - 2 = 0$, and find the points where they meet. [[4]]`,
  [R`Set $\frac2x = x - 1$ and multiply by $x$.`, R`$(x - 2)(x + 1) = 0$.`],
  [R`|M1|$2 = x^2 - x$`, R`|A1|$x^2 - x - 2 = 0$`, R`|M1|Factorises`, R`|A1|$(2, 1)$ and $(-1, -2)$`], R`$(2, 1)$ and $(-1, -2)$`,
  R`$2 = x(x - 1)$, so $x^2 - x - 2 = 0$, $(x - 2)(x + 1) = 0$. $x = 2$: $y = 1$; $x = -1$: $y = -2$.`),
Q('P4.3-11', 3, R`The curve $y = \dfrac{k}{x}$ passes through $(3, 4)$. Find $k$, and the points where the curve meets the line $y = x + 4$. [[4]]`,
  [R`$k = 3 \times 4$.`, R`$\frac{12}{x} = x + 4$ gives a quadratic.`],
  [R`|B1|$k = 12$`, R`|M1|$x^2 + 4x - 12 = 0$`, R`|A1|$x = 2$ or $-6$`, R`|A1|$(2, 6)$ and $(-6, -2)$`], R`$k = 12$; $(2, 6)$ and $(-6, -2)$`,
  R`$12 = x^2 + 4x$, so $(x + 6)(x - 2) = 0$. Points $(2, 6)$ and $(-6, -2)$.`),
Q('P4.3-12', 4, R`**(a)** Show that the line $y = c - x$ meets the curve $y = \dfrac{4}{x}$ where $x^2 - cx + 4 = 0$. [[1]]

**(b)** Find the values of $c$ for which the line is a tangent to the curve, and the point of contact for the positive value. [[3]]`,
  [R`Multiply $\frac4x = c - x$ by $x$.`, R`Tangent: discriminant $= 0$.`],
  [R`(a)|B1|$x^2 - cx + 4 = 0$`, R`(b)|M1|$c^2 - 16 = 0$`, R`(b)|A1|$c = \pm4$`, R`(b)|A1|$(2, 2)$`], R`(b) $c = \pm4$; $(2, 2)$`,
  R`(a) $4 = cx - x^2$, so $x^2 - cx + 4 = 0$. (b) One solution: $c^2 - 16 = 0$, $c = \pm4$. For $c = 4$: $(x - 2)^2 = 0$, $x = 2$, $y = 2$.`),
Q('P4.3-13', 4, R`Find the set of values of $k$ for which the line $y = kx$ meets the curve $y = \dfrac{3}{x}$, and explain your answer using the quadrants the curve lies in. [[3]]`,
  [R`$kx = \frac3x$ gives $kx^2 = 3$.`, R`$x^2 = \frac3k$ needs $\frac3k > 0$.`],
  [R`|M1|$kx^2 = 3$`, R`|A1|$k > 0$`, R`|B1|Lines through $O$ with $k > 0$ pass through quadrants 1 and 3, where the curve is`], R`$k > 0$`,
  R`$x^2 = \frac3k$ has real solutions only when $k > 0$. The curve is in the first and third quadrants; a line through the origin with negative gradient stays in the second and fourth, and $k = 0$ is the $x$-axis (an asymptote).`),
Q('P4.3-14', 4, R`**(a)** Show that the $x$-coordinates where $y = \dfrac{2}{x^2}$ meets $y = x + 1$ satisfy $x^3 + x^2 - 2 = 0$. [[1]]

**(b)** Show that $x^3 + x^2 - 2 = (x - 1)(x^2 + 2x + 2)$, and hence show that the curves meet at exactly one point. State the point. [[4]]`,
  [R`Multiply by $x^2$.`, R`Look at the discriminant of $x^2 + 2x + 2$.`],
  [R`(a)|B1|$2 = x^3 + x^2$`, R`(b)|B1|Expands $(x - 1)(x^2 + 2x + 2)$ correctly`, R`(b)|M1|Discriminant $4 - 8 < 0$`, R`(b)|A1|Only root $x = 1$`, R`(b)|A1|$(1, 2)$`], R`$(1, 2)$`,
  R`(a) $2 = x^2(x + 1) = x^3 + x^2$. (b) $(x - 1)(x^2 + 2x + 2) = x^3 + 2x^2 + 2x - x^2 - 2x - 2 = x^3 + x^2 - 2$. The quadratic has discriminant $-4$, so no real roots: only $x = 1$, giving $(1, 2)$.`, { solFig: FIGS['P4.3-14'] }),
Q('P4.3-15', 5, R`The curve $C$ has equation $y = \dfrac{a}{x}$ and passes through $(1, 3)$. The line $L$ has equation $y = b - x$.

**(a)** Find $a$. [[1]]

**(b)** Find the exact values of $b$ for which $L$ is a tangent to $C$. [[3]]

**(c)** For $b = 5$, find the exact $x$-coordinates of the points where $L$ meets $C$. [[3]]

**(d)** Hence find the set of positive values of $x$ for which $\dfrac{a}{x} > 5 - x$. [[3]]`,
  [R`$a = 3$. Then $\frac3x = b - x$ gives $x^2 - bx + 3 = 0$.`, R`For (d), with $x > 0$ you may multiply by $x$ without flipping the sign.`],
  [R`(a)|B1|$a = 3$`, R`(b)|M1|$x^2 - bx + 3 = 0$`, R`(b)|M1|$b^2 - 12 = 0$`, R`(b)|A1|$b = \pm2\sqrt3$`, R`(c)|M1|$x^2 - 5x + 3 = 0$`, R`(c)|M1|Quadratic formula`, R`(c)|A1|$x = \frac{5 \pm \sqrt{13}}{2}$`, R`(d)|M1|$x^2 - 5x + 3 > 0$ for $x > 0$`, R`(d)|A1|Outside the roots`, R`(d)|A1|$0 < x < \frac{5 - \sqrt{13}}{2}$ or $x > \frac{5 + \sqrt{13}}{2}$`],
  R`(a) $3$ (b) $\pm2\sqrt3$ (c) $\frac{5 \pm \sqrt{13}}{2}$ (d) $0 < x < \frac{5 - \sqrt{13}}{2}$ or $x > \frac{5 + \sqrt{13}}{2}$`,
  R`(b) $3 = bx - x^2$, so $x^2 - bx + 3 = 0$; tangent when $b^2 = 12$, $b = \pm2\sqrt3$.

(c) $x^2 - 5x + 3 = 0$: $x = \frac{5 \pm \sqrt{13}}{2}$.

(d) For $x > 0$: $\frac3x > 5 - x \iff 3 > 5x - x^2 \iff x^2 - 5x + 3 > 0$, which holds outside the roots. With $x > 0$: $0 < x < \frac{5 - \sqrt{13}}{2}$ or $x > \frac{5 + \sqrt{13}}{2}$. (The curve is above the line there.)`)
]};

CONTENT['P4.4'] = {
notes: R`
### Solutions are intersections
The solutions of $f(x) = g(x)$ are the $x$-coordinates of the points where $y = f(x)$ and $y = g(x)$ meet. So:
- **sketch** both graphs to see **how many** solutions there are
- **solve** algebraically to find them exactly.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Sketch $y = x^2(x - 3)$ and $y = 2x(3 - x)$ on the same axes, and find where they meet.
1. Set equal: $x^2(x - 3) = 2x(3 - x) = -2x(x - 3)$.
2. Rearrange: $x^2(x - 3) + 2x(x - 3) = 0$, so $x(x - 3)(x + 2) = 0$.
3. $x = 0$, $3$, $-2$: points $(0, 0)$, $(3, 0)$, $(-2, -20)$.

[[fig:P4.4-ex1]]

**The trap:** dividing both sides by $x$ or by $(x - 3)$. That throws away a solution. Always **factorise**, never divide by an expression that could be zero.

### Worked example 2: counting from a sketch
How many real solutions does $\dfrac1x = x^2 - 4$ have?

[[fig:P4.4-three]]

The curves meet **three** times: once for $x > 2$, and twice between $-2$ and $0$ (where the parabola is below the axis, like the left branch of $\frac1x$). So $x^3 - 4x - 1 = 0$ has three real roots.

### Watch out
- When you're asked for the **number** of solutions, a clear sketch with a sentence is enough.
- Check where each graph is positive and negative; that tells you which quadrants they can meet in.
`,
questions: [
Q('P4.4-1', 1, R`Sketch $y = x^2$ and $y = \dfrac{1}{x}$ on the same axes, and write down how many times they meet. [[2]]`,
  [R`$x^2 \ge 0$, so they can only meet where $\frac1x > 0$.`, R`$x^3 = 1$.`],
  [R`|B1|Both curves correct`, R`|B1|Once, at $(1, 1)$`], R`Once, at $(1, 1)$`,
  R`$\frac1x$ is negative for $x < 0$, where the parabola is positive, so they meet only in the first quadrant: $x^3 = 1$, $(1, 1)$.`),
Q('P4.4-2', 1, R`By considering the graphs of $y = x^3$ and $y = 4 - x$, state the number of real solutions of $x^3 = 4 - x$. [[2]]`,
  [R`One graph always rises, the other always falls.`, R`They can cross only once.`],
  [R`|B1|$y = x^3$ increasing, $y = 4 - x$ decreasing`, R`|B1|One solution`], R`One`,
  R`$y = x^3$ always increases and $y = 4 - x$ always decreases, so they cross exactly once.`),
Q('P4.4-3', 1, R`Find the points of intersection of $y = x^2 - 1$ and $y = 1 - x^2$. [[2]]`,
  [R`$x^2 - 1 = 1 - x^2$.`, R`$2x^2 = 2$.`],
  [R`|M1|$x^2 = 1$`, R`|A1|$(1, 0)$ and $(-1, 0)$`], R`$(\pm1, 0)$`,
  R`$2x^2 = 2$, $x = \pm1$, and $y = 0$ at both.`),
Q('P4.4-4', 2, R`Find the points where $y = x^3$ meets $y = 4x$. [[3]]`,
  [R`$x^3 - 4x = 0$. Don't divide by $x$.`, R`$x(x - 2)(x + 2) = 0$.`],
  [R`|M1|$x(x^2 - 4) = 0$`, R`|A1|$x = 0$, $\pm2$`, R`|A1|$(0, 0)$, $(2, 8)$, $(-2, -8)$`], R`$(0, 0)$, $(2, 8)$, $(-2, -8)$`,
  R`$x(x - 2)(x + 2) = 0$. Dividing by $x$ would lose the origin.`),
Q('P4.4-5', 2, R`Show that the $x$-coordinates of the intersections of $y = \dfrac{2}{x}$ and $y = x^2 + 1$ satisfy $x^3 + x - 2 = 0$. Given that $x^3 + x - 2 = (x - 1)(x^2 + x + 2)$, show that there is exactly one intersection and find it. [[3]]`,
  [R`Multiply by $x$.`, R`Check the discriminant of $x^2 + x + 2$.`],
  [R`|B1|$2 = x^3 + x$`, R`|M1|Discriminant $1 - 8 < 0$`, R`|A1|$(1, 2)$ only`], R`$(1, 2)$`,
  R`$\frac2x = x^2 + 1$ gives $x^3 + x - 2 = 0$. The quadratic factor has discriminant $-7$, so the only real root is $x = 1$, giving $(1, 2)$.`),
Q('P4.4-6', 2, R`Find the points where the curves $y = x^2(x - 2)$ and $y = x(x - 2)$ meet. [[3]]`,
  [R`Bring everything to one side and factorise.`, R`$x(x - 2)(x - 1) = 0$.`],
  [R`|M1|$x^2(x - 2) - x(x - 2) = 0$`, R`|A1|$x(x - 2)(x - 1) = 0$`, R`|A1|$(0, 0)$, $(2, 0)$, $(1, -1)$`], R`$(0, 0)$, $(2, 0)$, $(1, -1)$`,
  R`$x(x - 2)(x - 1) = 0$, so $x = 0$, $1$, $2$. At $x = 1$, $y = 1 \times (-1) = -1$.`),
Q('P4.4-7', 2, R`Use a sketch of $y = \dfrac{1}{x^2}$ and $y = x + 3$ to find the number of real solutions of $\dfrac{1}{x^2} = x + 3$. [[3]]`,
  [R`$\frac{1}{x^2} > 0$, so the line must be above the axis: $x > -3$.`, R`Look at $x > 0$ and $-3 < x < 0$ separately.`],
  [R`|B1|Both graphs sketched`, R`|B1|One intersection for $x > 0$`, R`|B1|Two for $-3 < x < 0$: three in total`], R`Three`,
  R`For $x > 0$ the curve falls from $\infty$ to $0$ and the line rises from $3$: one crossing. For $-3 < x < 0$: at $x = -3$ the curve ($\frac19$) is above the line ($0$); at $x = -1$ it is below ($1 < 2$); near $x = 0$ it shoots above again. That's two more crossings, so three altogether. (For $x < -3$ the line is negative and the curve positive.)`, { solFig: FIGS['P4.4-7'] }),
Q('P4.4-8', 3, R`Show that the line $y = 2x - 4$ meets the curve $y = x^2 - 2x$ at exactly one point, and find it. [[3]]`,
  [R`$x^2 - 2x = 2x - 4$.`, R`$x^2 - 4x + 4 = (x - 2)^2$.`],
  [R`|M1|$x^2 - 4x + 4 = 0$`, R`|A1|$(x - 2)^2 = 0$: one root`, R`|A1|$(2, 0)$`], R`$(2, 0)$`,
  R`$(x - 2)^2 = 0$ has the single root $x = 2$, so the line is a tangent at $(2, 0)$.`),
Q('P4.4-9', 3, R`Sketch $y = x(x - 3)^2$ and $y = x$ on the same axes, and find the coordinates of all the points where they meet. [[4]]`,
  [R`$x(x - 3)^2 - x = 0$. Take out $x$.`, R`$(x - 3)^2 = 1$.`],
  [R`|B1|Cubic crossing at $O$ and touching at $(3, 0)$`, R`|M1|$x[(x - 3)^2 - 1] = 0$`, R`|A1|$x = 0$, $2$, $4$`, R`|A1|$(0, 0)$, $(2, 2)$, $(4, 4)$`], R`$(0, 0)$, $(2, 2)$, $(4, 4)$`,
  R`$x[(x - 3)^2 - 1] = 0$: $x = 0$ or $x - 3 = \pm1$, giving $x = 2$, $4$.`, { solFig: FIGS['P4.4-9'] }),
Q('P4.4-10', 3, R`Find the number of points of intersection of $y = \dfrac{3}{x}$ and $y = x^2 + 2x$, and find their coordinates. You may use $x^3 + 2x^2 - 3 = (x - 1)(x^2 + 3x + 3)$. [[4]]`,
  [R`Multiply by $x$: $3 = x^3 + 2x^2$.`, R`The discriminant of $x^2 + 3x + 3$ is $9 - 12$.`],
  [R`|M1|$x^3 + 2x^2 - 3 = 0$`, R`|M1|Considers the quadratic factor`, R`|A1|Discriminant $-3 < 0$, so one root`, R`|A1|One point, $(1, 3)$`], R`One point, $(1, 3)$`,
  R`$x^3 + 2x^2 - 3 = (x - 1)(x^2 + 3x + 3)$. The quadratic has no real roots, so only $x = 1$, $y = 3$.`),
Q('P4.4-11', 3, R`Find the coordinates of the points where $y = x^3 - x$ meets $y = 3x$. [[3]]`,
  [R`$x^3 - 4x = 0$.`, R`Factorise fully.`],
  [R`|M1|$x(x^2 - 4) = 0$`, R`|A1|$x = 0$, $\pm2$`, R`|A1|$(0, 0)$, $(2, 6)$, $(-2, -6)$`], R`$(0, 0)$, $(2, 6)$, $(-2, -6)$`,
  R`$x^3 - x - 3x = x(x - 2)(x + 2) = 0$.`),
Q('P4.4-12', 4, R`The curve $y = x^2(x + 3)$ has turning points at $(-2, 4)$ and $(0, 0)$.

**(a)** Find the values of $k$ for which $y = k$ meets the curve at exactly two points. [[2]]

**(b)** Find the set of values of $k$ for which $x^2(x + 3) = k$ has three real solutions. [[2]]`,
  [R`A horizontal line meets the cubic twice only when it passes through a turning point.`, R`Three times: strictly between the turning values.`],
  [R`(a)|B1|$k = 0$`, R`(a)|B1|$k = 4$`, R`(b)|M1|Between the turning values`, R`(b)|A1|$0 < k < 4$`], R`(a) $k = 0$ or $4$ (b) $0 < k < 4$`,
  R`(a) The line $y = k$ meets a positive cubic twice when it goes through the maximum ($k = 4$) or the minimum ($k = 0$). (b) Three solutions for $0 < k < 4$.`),
Q('P4.4-13', 4, R`By sketching $y = \dfrac2x$ and $y = 4 - x^2$ on the same axes, show that the equation $x^3 - 4x + 2 = 0$ has three real solutions. [[4]]`,
  [R`First show the intersections satisfy $x^3 - 4x + 2 = 0$.`, R`Think about quadrant 1 and quadrant 3 separately.`],
  [R`|M1|$\frac2x = 4 - x^2 \Rightarrow 2 = 4x - x^3$`, R`|B1|Both graphs correct`, R`|B1|Two intersections in the first quadrant`, R`|A1|One in the third: three solutions`], R`Three`,
  R`$\frac2x = 4 - x^2$ gives $x^3 - 4x + 2 = 0$. In the first quadrant the hyperbola comes down from $\infty$ through the parabola's arch and back out (the arch reaches $y = 4$ at $x = 0$): two crossings. For $x < -2$ the parabola is below the axis and falls steeply while $\frac2x$ is close to $0$: one more crossing. Three in total.`, { solFig: FIGS['P4.4-13'] }),
Q('P4.4-14', 4, R`**(a)** Show that the line $y = x + k$ meets the curve $y = \dfrac1x$ at two points for every value of $k$. [[3]]

**(b)** Find the exact $x$-coordinates of the points when $k = 3$. [[2]]`,
  [R`$\frac1x = x + k$ gives $x^2 + kx - 1 = 0$.`, R`The discriminant $k^2 + 4$ is always positive.`],
  [R`(a)|M1|$x^2 + kx - 1 = 0$`, R`(a)|M1|Discriminant $k^2 + 4$`, R`(a)|A1|$> 0$ for all $k$, so two points`, R`(b)|M1|$x^2 + 3x - 1 = 0$`, R`(b)|A1|$x = \frac{-3 \pm \sqrt{13}}{2}$`], R`(b) $x = \frac{-3 \pm \sqrt{13}}{2}$`,
  R`(a) $1 = x^2 + kx$, so $x^2 + kx - 1 = 0$, with discriminant $k^2 + 4 > 0$: always two roots (and neither is $0$). (b) $x = \frac{-3 \pm \sqrt{9 + 4}}{2}$.`),
Q('P4.4-15', 5, R`**(a)** On the same axes, sketch $y = x^2(x - 4)$ and $y = 5x$. [[3]]

**(b)** Find the coordinates of the points where they meet. [[3]]

**(c)** Hence find the set of values of $x$ for which $x^2(x - 4) > 5x$. [[2]]`,
  [R`$x^3 - 4x^2 - 5x = 0$. Take out $x$.`, R`The cubic is above the line where the cubic graph is higher on your sketch.`],
  [R`(a)|B1|Cubic touching at $O$, crossing at $(4, 0)$`, R`(a)|B1|Line through $O$ with gradient $5$`, R`(a)|B1|Three intersections shown`, R`(b)|M1|$x(x^2 - 4x - 5) = 0$`, R`(b)|A1|$x = 0$, $5$, $-1$`, R`(b)|A1|$(0, 0)$, $(5, 25)$, $(-1, -5)$`, R`(c)|M1|Reads off where the cubic is above the line`, R`(c)|A1|$-1 < x < 0$ or $x > 5$`], R`(b) $(0, 0)$, $(5, 25)$, $(-1, -5)$ (c) $-1 < x < 0$ or $x > 5$`,
  R`(b) $x(x - 5)(x + 1) = 0$. (c) The cubic is above the line between $-1$ and $0$ and to the right of $5$: $-1 < x < 0$ or $x > 5$.`, { solFig: FIGS['P4.4-15'] })
]};
