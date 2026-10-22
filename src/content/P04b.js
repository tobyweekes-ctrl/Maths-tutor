/* Pure Mathematics Year 1 · Chapter 4 Graphs and transformations (sections 4.5 to 4.7) */
{
  const sk = (label, fns, [x0, x1, y0, y1], pts = [], more = {}) => Fig.graph(Object.assign({ label, x0, x1, y0, y1,
    fns: fns.map(([f, l, lx, ly, extra]) => Object.assign({ f, label: fns.length > 1 ? l : undefined, lx, ly }, extra || {})),
    points: pts.map(([x, y, l, dx, dy]) => ({ x, y, label: l, dx, dy })) }, more));
  const fA = x => x * x * (x - 3), gB = x => 1 / (x - 1) + 2, fC = x => -0.75 * x * (x - 4);
  const MUTED = { col: 'var(--muted)', dash: true };

  FIGS['P4.5-trans'] = sk('y = f(x) = x squared (x − 3), dashed, and its translation y = f(x + 2), two units to the left',
    [[fA, 'y = f(x)', 4.2, 6, MUTED], [x => fA(x + 2), 'y = f(x + 2)', 1.6, 7]], [-3, 4.2, -8, 8], [[-2, 0, '−2', -10, 16], [1, 0, '1', 10, -12], [0, -4, '(0, −4)', 30, 6]]);
  FIGS['P4.5-recip'] = sk('y = 1/(x − 2), with vertical asymptote x = 2 and y-intercept −1/2',
    [[x => 1 / (x - 2), 'y = 1/(x − 2)', 6, 1.4]], [-2, 6, -5, 5], [[0, -0.5, '(0, −½)', -30, 14]], { vlines: [{ x: 2, dash: true, label: 'x = 2' }] });
  FIGS['P4.5-4'] = sk('y = f(x − 1) = x(x − 1)(x − 3): positive cubic crossing at 0, 1 and 3',
    [[x => x * (x - 1) * (x - 3), 'y = f(x − 1)', 4, 8]], [-1.2, 4, -6, 10], [[0, 0, 'O', -10, 14], [1, 0, '1', 6, -12], [3, 0, '3', -6, -12]]);
  FIGS['P4.5-5'] = sk('y = 1/x + 2: asymptotes x = 0 and y = 2, crossing the x-axis at −1/2',
    [[x => 1 / x + 2, 'y = 1/x + 2', 4, 3.4]], [-4, 4, -4, 7], [[-0.5, 0, '(−½, 0)', -28, 14]], { hlines: [{ y: 2, label: 'y = 2' }] });
  FIGS['P4.5-6'] = sk('y = 1/(x + 3): asymptotes x = −3 and y = 0, y-intercept 1/3',
    [[x => 1 / (x + 3), 'y = 1/(x + 3)', 2, 1.4]], [-7, 2, -4, 4], [[0, 1 / 3, '(0, ⅓)', 24, -10]], { vlines: [{ x: -3, dash: true, label: 'x = −3' }] });
  FIGS['P4.5-9'] = sk('y = f(x + 1) = x squared (x + 4): crosses at −4, touches at the origin',
    [[x => x * x * (x + 4), 'y = x²(x + 4)', 1.4, 10]], [-5, 1.4, -6, 14], [[-4, 0, '−4', -12, -12], [0, 0, 'touches at O', 30, 16]]);
  FIGS['P4.5-11'] = sk('y = 4/(x − 1) squared − 2: asymptotes x = 1 and y = −2, y-intercept 2, crossing the x-axis at 1 ± √2',
    [[x => 4 / (x - 1) ** 2 - 2, 'y = 4/(x − 1)² − 2', 5, 1.6]], [-3, 5, -4, 7], [[0, 2, '(0, 2)', -26, -4], [1 - Math.SQRT2, 0, '1 − √2', -30, 14], [1 + Math.SQRT2, 0, '1 + √2', 30, 14]],
    { vlines: [{ x: 1, dash: true, label: 'x = 1' }], hlines: [{ y: -2, label: 'y = −2' }] });
  FIGS['P4.5-14'] = sk('y = 3/(x + 2) − 1: asymptotes x = −2 and y = −1, y-intercept 1/2, x-intercept 1',
    [[x => 3 / (x + 2) - 1, 'y = 3/(x + 2) − 1', 4, 0.6]], [-6, 4, -6, 6], [[0, 0.5, '(0, ½)', 24, -10], [1, 0, '(1, 0)', 14, 14]],
    { vlines: [{ x: -2, dash: true, label: 'x = −2' }], hlines: [{ y: -1, label: 'y = −1' }] });
  FIGS['P4.5-15'] = sk('y = (x − 2)(x + 1) squared: touches at −1, crosses at 2, y-intercept −2',
    [[x => (x - 2) * (x + 1) ** 2, 'y = f(x)', 3, 6]], [-2.4, 3, -6, 8], [[-1, 0, 'touches at −1', 0, -12], [2, 0, '2', -10, -12], [0, -2, '(0, −2)', 30, 4]]);

  FIGS['P4.6-stretch'] = sk('y = f(x) = x(x − 2)(x + 3), dashed, and y = f(2x), squashed towards the y-axis, crossing at −3/2, 0 and 1',
    [[x => x * (x - 2) * (x + 3), 'y = f(x)', 3, 12, MUTED], [x => 2 * x * (2 * x - 2) * (2 * x + 3), 'y = f(2x)', 1.6, 12]], [-3.6, 3, -10, 14], [[-1.5, 0, '−3/2', 14, 14], [1, 0, '1', 8, 14], [-3, 0, '−3', -10, 14], [2, 0, '2', 10, 14]]);
  FIGS['P4.6-4'] = sk('y = f(2x) = 2x(2x − 4): U-shaped, crossing at 0 and 2, minimum (1, −4)',
    [[x => 2 * x * (2 * x - 4), 'y = f(2x)', 3.2, 9]], [-1.2, 3.2, -6, 10], [[0, 0, 'O', -10, -10], [2, 0, '2', 10, -12], [1, -4, '(1, −4)', 0, 18]]);
  FIGS['P4.6-5'] = sk('y = −f(x) = −(x + 1)(x − 3): upside-down parabola crossing at −1 and 3, y-intercept 3, maximum (1, 4)',
    [[x => -(x + 1) * (x - 3), 'y = −f(x)', 4.6, -4]], [-2.2, 4.6, -6, 6], [[-1, 0, '−1', -12, 14], [3, 0, '3', 10, 14], [0, 3, '(0, 3)', -24, -6], [1, 4, '(1, 4)', 0, -12]]);
  FIGS['P4.6-6'] = sk('y = f(−x) = x − x cubed: negative cubic crossing at −1, 0 and 1',
    [[x => x - x ** 3, 'y = f(−x)', 2, -4]], [-2, 2, -5, 5], [[-1, 0, '−1', -10, 14], [0, 0, 'O', 10, 14], [1, 0, '1', 10, -12]]);
  FIGS['P4.6-9'] = sk('y = f(x/2): touches at −2, crosses at 4, y-intercept −2',
    [[x => (x / 2 - 2) * (x / 2 + 1) ** 2, 'y = f(½x)', 5.4, 5]], [-4, 5.4, -6, 8], [[-2, 0, 'touches at −2', 0, -12], [4, 0, '4', -10, -12], [0, -2, '(0, −2)', 30, 4]]);
  FIGS['P4.6-15a'] = sk('y = x(x + 2)(x − 3): positive cubic crossing at −2, 0 and 3',
    [[x => x * (x + 2) * (x - 3), 'y = f(x)', 4, 10]], [-3, 4, -12, 12], [[-2, 0, '−2', -10, 14], [0, 0, 'O', 10, 14], [3, 0, '3', 10, -12]]);
  FIGS['P4.6-15b'] = sk('y = f(−2x): negative cubic crossing at −3/2, 0 and 1',
    [[x => -2 * x * (-2 * x + 2) * (-2 * x - 3), 'y = f(−2x)', 2, -9]], [-2.2, 2, -12, 12], [[-1.5, 0, '−3/2', -14, 14], [0, 0, 'O', 10, 14], [1, 0, '1', 10, -12]]);

  FIGS['P4.7-A'] = sk('y = f(x): a positive cubic with a maximum at the origin, a minimum at (2, −4), crossing the x-axis at 3',
    [[fA, 'y = f(x)', 4, 6]], [-1.6, 4, -6, 8], [[0, 0, '(0, 0)', -24, -10], [2, -4, '(2, −4)', 0, 18], [3, 0, '(3, 0)', 26, 14]]);
  FIGS['P4.7-A4'] = sk('y = f(x) + 4: maximum (0, 4), minimum (2, 0) touching the x-axis, crossing at −1',
    [[fA, 'y = f(x)', 4, -2, MUTED], [x => fA(x) + 4, 'y = f(x) + 4', 3.4, 9]], [-1.6, 4, -6, 10], [[0, 4, '(0, 4)', 0, -12], [2, 0, '(2, 0)', 0, -12], [-1, 0, '(−1, 0)', -26, 14]]);
  FIGS['P4.7-B'] = sk('y = g(x): a reciprocal curve with asymptotes x = 1 and y = 2, passing through (0, 1) and (1/2, 0)',
    [[gB, 'y = g(x)', 5, 3.4]], [-3, 5, -4, 7], [[0, 1, '(0, 1)', -26, -4], [0.5, 0, '(½, 0)', -24, 14]], { vlines: [{ x: 1, dash: true, label: 'x = 1' }], hlines: [{ y: 2, label: 'y = 2' }] });
  FIGS['P4.7-C'] = sk('y = h(x): an upside-down parabola through (0, 0) and (4, 0) with maximum (2, 3)',
    [[fC, 'y = h(x)', 5.4, -2]], [-1, 5.4, -3, 4.6], [[0, 0, 'O', -10, 14], [4, 0, '(4, 0)', 14, 14], [2, 3, '(2, 3)', 0, -12]]);
  FIGS['P4.7-4'] = sk('y = f(2x): maximum (0, 0), minimum (1, −4), crossing at 3/2',
    [[x => fA(2 * x), 'y = f(2x)', 2.2, 6]], [-0.9, 2.2, -6, 8], [[0, 0, '(0, 0)', -24, -10], [1, -4, '(1, −4)', 0, 18], [1.5, 0, '(3/2, 0)', 30, 14]]);
  FIGS['P4.7-5'] = sk('y = g(x) + 1: asymptotes x = 1 and y = 3, through (0, 2) and (2/3, 0)',
    [[x => gB(x) + 1, 'y = g(x) + 1', 5, 4.4]], [-3, 5, -4, 8], [[0, 2, '(0, 2)', -26, -4], [2 / 3, 0, '(⅔, 0)', -26, 14]], { vlines: [{ x: 1, dash: true, label: 'x = 1' }], hlines: [{ y: 3, label: 'y = 3' }] });
  FIGS['P4.7-6'] = sk('y = g(x + 1): asymptotes x = 0 and y = 2, crossing the x-axis at −1/2, no y-intercept',
    [[x => gB(x + 1), 'y = g(x + 1)', 4, 3.4]], [-4, 4, -4, 7], [[-0.5, 0, '(−½, 0)', -28, 14]], { hlines: [{ y: 2, label: 'y = 2' }] });
  FIGS['P4.7-7'] = sk('y = 2h(x): maximum (2, 6), through (0, 0) and (4, 0)',
    [[fC, 'y = h(x)', 5.4, -2.6, MUTED], [x => 2 * fC(x), 'y = 2h(x)', 5.4, -6]], [-1, 5.4, -8, 8], [[0, 0, 'O', -10, 14], [4, 0, '(4, 0)', 16, -10], [2, 6, '(2, 6)', 0, -12]]);
  FIGS['P4.7-8'] = sk('y = h(x/2): maximum (4, 3), through (0, 0) and (8, 0); y = h(x) − 3: maximum (2, 0)',
    [[x => fC(x / 2), 'y = h(½x)', 9, 1.2], [x => fC(x) - 3, 'y = h(x) − 3', 5, -5.4]], [-1, 9, -7, 4.6], [[8, 0, '(8, 0)', -12, -10], [4, 3, '(4, 3)', 0, -12], [2, 0, '(2, 0)', -16, 14]]);
  FIGS['P4.7-9'] = sk('y = 3g(x): asymptotes x = 1 and y = 6, through (0, 3) and (1/2, 0)',
    [[x => 3 * gB(x), 'y = 3g(x)', 5, 8.6]], [-3, 5, -6, 14], [[0, 3, '(0, 3)', -26, -4], [0.5, 0, '(½, 0)', -26, 14]], { vlines: [{ x: 1, dash: true, label: 'x = 1' }], hlines: [{ y: 6, label: 'y = 6' }] });
  FIGS['P4.7-10'] = sk('y = f(−x): reflection in the y-axis, maximum (0, 0), minimum (−2, −4), crossing at −3',
    [[x => fA(-x), 'y = f(−x)', 1.6, 6]], [-4, 1.6, -6, 8], [[0, 0, '(0, 0)', 24, -10], [-2, -4, '(−2, −4)', 0, 18], [-3, 0, '(−3, 0)', -26, 14]]);
  FIGS['P4.7-11'] = sk('y = f(x) with the lines y = 1, y = −2 and y = −4',
    [[fA, 'y = f(x)', 4, 6]], [-1.6, 4, -6, 8], [[0, 0, '(0, 0)', -24, -10], [2, -4, '(2, −4)', 0, 18]], { hlines: [{ y: 1, label: 'y = 1' }, { y: -2, label: 'y = −2' }, { y: -4, label: 'y = −4' }] });
  FIGS['P4.7-15'] = sk('y = f(x + 2) + 4 = x squared (x + 3): minimum at the origin, maximum (−2, 4), crossing at −3',
    [[x => x * x * (x + 3), 'y = x²(x + 3)', 1.6, 8]], [-4, 1.6, -6, 10], [[0, 0, 'O', 10, 14], [-2, 4, '(−2, 4)', 0, -12], [-3, 0, '(−3, 0)', -26, 14]]);
}

CONTENT['P4.5'] = {
notes: R`
### Two translations
- $y = f(x) + a$ moves the graph **up** by $a$: a translation by the vector $\begin{pmatrix} 0 \\ a \end{pmatrix}$.
- $y = f(x + a)$ moves the graph **left** by $a$: a translation by $\begin{pmatrix} -a \\ 0 \end{pmatrix}$.

So $f(x - 3)$ moves the graph **right** by $3$. Changes **inside** the bracket act on $x$ and do the opposite of what they look like.

### Asymptotes move too
If $y = f(x)$ has an asymptote $x = 0$, then $y = f(x - 2)$ has the asymptote $x = 2$. Adding $a$ moves a horizontal asymptote $y = 0$ to $y = a$.

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
$f(x) = x^2(x - 3)$. Sketch $y = f(x + 2)$.
1. Replace $x$ by $x + 2$: $y = (x + 2)^2(x - 1)$.
2. It touches at $x = -2$ and crosses at $x = 1$ (each root of $f$ moves $2$ to the left).
3. $y$-intercept: $f(0 + 2) = 4 \times (-1) = -4$.

[[fig:P4.5-trans]]

### Worked example 2: the direction trap
Sketch $y = \dfrac{1}{x - 2}$.
- This is $f(x - 2)$ with $f(x) = \frac1x$: a translation **right** by $2$.
- Asymptotes $x = 2$ and $y = 0$; at $x = 0$, $y = -\frac12$.

[[fig:P4.5-recip]]

**The trap:** seeing "$-2$" and moving left. Check with a point: the asymptote is where the denominator is zero, $x - 2 = 0$, so $x = 2$.

### Watch out
- To find the new $y$-intercept, put $x = 0$ in the **new** equation.
- Describe a translation with a column vector.
`,
questions: [
Q('P4.5-1', 1, R`Describe fully the single transformation that maps $y = f(x)$ onto $y = f(x) + 3$. [[1]]`,
  [R`Adding outside the function moves the graph vertically.`, R`Use a column vector.`],
  [R`|B1|Translation by $\begin{pmatrix} 0 \\ 3 \end{pmatrix}$`], R`Translation by $\begin{pmatrix} 0 \\ 3 \end{pmatrix}$`,
  R`Every $y$-value increases by $3$: the graph moves up $3$.`),
Q('P4.5-2', 1, R`Describe the transformation that maps $y = x^2$ onto $y = (x - 4)^2$. [[1]]`,
  [R`$(x - 4)^2$ is $f(x - 4)$.`, R`Inside the bracket: opposite direction.`],
  [R`|B1|Translation by $\begin{pmatrix} 4 \\ 0 \end{pmatrix}$`], R`Translation by $\begin{pmatrix} 4 \\ 0 \end{pmatrix}$`,
  R`$f(x - 4)$ moves the graph $4$ to the right; the vertex goes from $(0, 0)$ to $(4, 0)$.`),
Q('P4.5-3', 1, R`The point $(2, 5)$ lies on $y = f(x)$. Write down the point it moves to on $y = f(x + 3)$. [[1]]`,
  [R`$f(x + 3)$ moves the graph left by $3$.`, R`Only the $x$-coordinate changes.`],
  [R`|B1|$(-1, 5)$`], R`$(-1, 5)$`,
  R`On the new graph $x + 3 = 2$ gives the same height $5$, so $x = -1$.`),
Q('P4.5-4', 2, R`$f(x) = x(x - 2)(x + 1)$. Sketch $y = f(x - 1)$, showing where it meets the axes. [[3]]`,
  [R`Each root moves $1$ to the right.`, R`$f(x - 1) = (x - 1)(x - 3)x$.`],
  [R`|M1|Roots of $f$ moved right by $1$`, R`|A1|Crosses at $0$, $1$, $3$`, R`|B1|Positive cubic shape`], R`Crosses at $(0, 0)$, $(1, 0)$, $(3, 0)$`,
  R`$f$ has roots $-1$, $0$, $2$; adding $1$ gives $0$, $1$, $3$. So the curve passes through the origin.`, { solFig: FIGS['P4.5-4'] }),
Q('P4.5-5', 2, R`Sketch $y = \dfrac1x + 2$, giving the equations of the asymptotes and the coordinates of any point where it meets the axes. [[3]]`,
  [R`$y = \frac1x$ moved up $2$.`, R`$x$-intercept: $\frac1x = -2$.`],
  [R`|B1|Correct shape`, R`|B1|Asymptotes $x = 0$, $y = 2$`, R`|B1|$\left(-\frac12, 0\right)$`], R`Asymptotes $x = 0$, $y = 2$; crosses at $\left(-\frac12, 0\right)$`,
  R`The horizontal asymptote moves up to $y = 2$. It crosses the $x$-axis where $\frac1x = -2$, $x = -\frac12$. No $y$-intercept.`, { solFig: FIGS['P4.5-5'] }),
Q('P4.5-6', 2, R`Sketch $y = \dfrac{1}{x + 3}$, showing the asymptotes and any intercepts. [[3]]`,
  [R`$\frac1x$ moved $3$ to the left.`, R`$y$-intercept: $\frac13$.`],
  [R`|B1|Correct shape`, R`|B1|Asymptotes $x = -3$, $y = 0$`, R`|B1|$\left(0, \frac13\right)$`], R`Asymptotes $x = -3$, $y = 0$; $\left(0, \frac13\right)$`,
  R`The vertical asymptote is where $x + 3 = 0$. At $x = 0$, $y = \frac13$. It never meets the $x$-axis.`, { solFig: FIGS['P4.5-6'] }),
Q('P4.5-7', 2, R`$f(x) = x^2 - 4x$. Find $f(x + 2)$ in its simplest form. [[2]]`,
  [R`Replace every $x$ with $(x + 2)$.`, R`$(x + 2)^2 - 4(x + 2)$.`],
  [R`|M1|$(x + 2)^2 - 4(x + 2)$`, R`|A1|$x^2 - 4$`], R`$x^2 - 4$`,
  R`$x^2 + 4x + 4 - 4x - 8 = x^2 - 4$.`),
Q('P4.5-8', 3, R`The curve $y = x^3$ is translated by the vector $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Write down the equation of the new curve and find where it crosses the $y$-axis. [[3]]`,
  [R`Right $2$: replace $x$ by $x - 2$. Down $1$: subtract $1$.`, R`Put $x = 0$.`],
  [R`|B1|$(x - 2)^3$`, R`|B1|$y = (x - 2)^3 - 1$`, R`|B1|$(0, -9)$`], R`$y = (x - 2)^3 - 1$; $(0, -9)$`,
  R`$y = (x - 2)^3 - 1$. At $x = 0$: $-8 - 1 = -9$.`),
Q('P4.5-9', 3, R`$f(x) = (x - 1)^2(x + 3)$. Sketch $y = f(x + 1)$, showing where it meets the axes. [[3]]`,
  [R`$f(x + 1) = x^2(x + 4)$.`, R`Repeated root at $0$.`],
  [R`|M1|$f(x + 1) = x^2(x + 4)$ or roots moved left $1$`, R`|A1|Touches at $O$, crosses at $(-4, 0)$`, R`|B1|Positive cubic shape`], R`Touches at $(0, 0)$, crosses at $(-4, 0)$`,
  R`The double root $1$ moves to $0$ and the root $-3$ moves to $-4$: $y = x^2(x + 4)$.`, { solFig: FIGS['P4.5-9'] }),
Q('P4.5-10', 3, R`$f(x) = x^2(x - 3)$. The graph of $y = f(x + a)$, where $a \ne 0$, passes through the origin. Find $a$. [[3]]`,
  [R`At $x = 0$: $f(a) = 0$.`, R`$a^2(a - 3) = 0$.`],
  [R`|M1|$f(a) = 0$`, R`|M1|$a^2(a - 3) = 0$`, R`|A1|$a = 3$`], R`$a = 3$`,
  R`$f(0 + a) = a^2(a - 3) = 0$, so $a = 0$ or $3$. As $a \ne 0$, $a = 3$: the root at $3$ moves to the origin.`),
Q('P4.5-11', 3, R`The curve $y = \dfrac{4}{x^2}$ is translated so that its asymptotes become $x = 1$ and $y = -2$. Write down the new equation, and find the exact coordinates of the points where the new curve meets the axes. [[4]]`,
  [R`Right $1$ and down $2$.`, R`$x$-axis: $\frac{4}{(x - 1)^2} = 2$.`],
  [R`|B1|$y = \frac{4}{(x - 1)^2} - 2$`, R`|B1|$(0, 2)$`, R`|M1|$(x - 1)^2 = 2$`, R`|A1|$(1 \pm \sqrt2, 0)$`], R`$y = \frac{4}{(x - 1)^2} - 2$; $(0, 2)$, $(1 \pm \sqrt2, 0)$`,
  R`At $x = 0$: $4 - 2 = 2$. At $y = 0$: $(x - 1)^2 = 2$, $x = 1 \pm \sqrt2$.`, { solFig: FIGS['P4.5-11'] }),
Q('P4.5-12', 4, R`The curve $y = x^2 - 6x + 11$ is a translation of $y = x^2$. Find the translation vector. [[3]]`,
  [R`Complete the square.`, R`$(x - 3)^2 + 2$.`],
  [R`|M1|Completes the square`, R`|A1|$(x - 3)^2 + 2$`, R`|A1|$\begin{pmatrix} 3 \\ 2 \end{pmatrix}$`], R`$\begin{pmatrix} 3 \\ 2 \end{pmatrix}$`,
  R`$x^2 - 6x + 11 = (x - 3)^2 + 2$: right $3$, up $2$. The vertex moves from $(0, 0)$ to $(3, 2)$.`),
Q('P4.5-13', 4, R`$f(x) = x(x - 4)$.

**(a)** The curve $y = f(x + a)$ has its minimum point on the $y$-axis. Find $a$. [[2]]

**(b)** The curve $y = f(x) + k$ touches the $x$-axis. Find $k$. [[2]]`,
  [R`$f(x) = (x - 2)^2 - 4$: minimum at $(2, -4)$.`, R`Move the minimum to $x = 0$, or up to $y = 0$.`],
  [R`(a)|M1|Minimum of $f$ at $(2, -4)$`, R`(a)|A1|$a = 2$`, R`(b)|M1|Minimum must move up to $0$`, R`(b)|A1|$k = 4$`], R`(a) $a = 2$ (b) $k = 4$`,
  R`(a) The minimum is at $x = 2$; moving left by $2$ puts it on the $y$-axis, so $a = 2$ (check: $f(x + 2) = x^2 - 4$). (b) The minimum value is $-4$, so $k = 4$.`),
Q('P4.5-14', 4, R`The curve $C$ has equation $y = \dfrac{3}{x + 2} - 1$.

**(a)** Describe the translation that maps $y = \dfrac3x$ onto $C$. [[1]]

**(b)** Write down the equations of the asymptotes of $C$. [[2]]

**(c)** Find the points where $C$ meets the axes. [[2]]`,
  [R`Left $2$, down $1$.`, R`$x$-axis: $\frac{3}{x + 2} = 1$.`],
  [R`(a)|B1|$\begin{pmatrix} -2 \\ -1 \end{pmatrix}$`, R`(b)|B1|$x = -2$`, R`(b)|B1|$y = -1$`, R`(c)|B1|$\left(0, \frac12\right)$`, R`(c)|B1|$(1, 0)$`], R`(a) $\begin{pmatrix} -2 \\ -1 \end{pmatrix}$ (b) $x = -2$, $y = -1$ (c) $\left(0, \frac12\right)$, $(1, 0)$`,
  R`(c) At $x = 0$: $\frac32 - 1 = \frac12$. At $y = 0$: $x + 2 = 3$, $x = 1$.`, { solFig: FIGS['P4.5-14'] }),
Q('P4.5-15', 5, R`$f(x) = (x - 2)(x + 1)^2$.

**(a)** Sketch $y = f(x)$, showing where it meets the axes. [[3]]

**(b)** The graph of $y = f(x + a)$ passes through the origin. Find the two possible values of $a$. [[2]]

**(c)** For each value of $a$, write $f(x + a)$ in factorised form and state whether the curve crosses or touches the $x$-axis at the origin. [[3]]`,
  [R`For (b), one of the roots has to move to $x = 0$.`, R`Moving the double root gives a touch; moving the single root gives a crossing.`],
  [R`(a)|B1|Positive cubic`, R`(a)|B1|Touches at $(-1, 0)$, crosses at $(2, 0)$`, R`(a)|B1|$(0, -2)$`, R`(b)|M1|$f(a) = 0$`, R`(b)|A1|$a = 2$ or $a = -1$`, R`(c)|B1|$a = 2$: $x(x + 3)^2$`, R`(c)|B1|$a = -1$: $(x - 3)x^2$`, R`(c)|B1|$a = 2$ crosses, $a = -1$ touches`],
  R`(b) $a = 2$ or $-1$ (c) $a = 2$: $x(x + 3)^2$, crosses; $a = -1$: $x^2(x - 3)$, touches`,
  R`(a) $f(0) = (-2)(1) = -2$.

(b) $f(a) = 0$ gives $a = 2$ or $a = -1$.

(c) $f(x + 2) = x(x + 3)^2$: the single root reaches $O$, so it crosses there. $f(x - 1) = (x - 3)x^2$: the double root reaches $O$, so it touches there.`, { solFig: FIGS['P4.5-15'] })
]};

CONTENT['P4.6'] = {
notes: R`
### Four stretches and reflections
- $y = af(x)$: **vertical** stretch, scale factor $a$. Each $y$-value is multiplied by $a$.
- $y = f(ax)$: **horizontal** stretch, scale factor $\dfrac1a$. Each $x$-value is **divided** by $a$.
- $y = -f(x)$: reflection in the **$x$-axis**.
- $y = f(-x)$: reflection in the **$y$-axis**.

Points on the axis of a stretch stay put: $af(x)$ keeps the roots, and $f(ax)$ keeps the $y$-intercept.

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
$f(x) = x(x - 2)(x + 3)$. Sketch $y = f(2x)$.
- The roots of $f$ are $-3$, $0$, $2$. Halve them: $-\frac32$, $0$, $1$.
- The $y$-intercept stays at $0$.

[[fig:P4.6-stretch]]

### Worked example 2: the scale-factor trap
$f(x) = x^2 - 9$. Find the roots of $y = f(3x)$.
- $f(3x) = 9x^2 - 9 = 0$, so $x = \pm1$.
- The roots of $f$ ($\pm3$) are **divided** by $3$, not multiplied.

**The trap:** thinking $f(3x)$ stretches the graph out by $3$. It squashes it towards the $y$-axis: scale factor $\frac13$.

### Watch out
- Describe a stretch fully: "a stretch, **horizontal** (or parallel to the $x$-axis), scale factor $\frac13$".
- $f(-x)$ and $-f(x)$ are different: test a point.
`,
questions: [
Q('P4.6-1', 1, R`Describe fully the transformation that maps $y = f(x)$ onto $y = 3f(x)$. [[1]]`,
  [R`Multiplying outside acts on $y$.`, R`Give the direction and the scale factor.`],
  [R`|B1|Vertical stretch, scale factor $3$`], R`Vertical stretch, scale factor $3$`,
  R`Every $y$-value is tripled: a stretch parallel to the $y$-axis, scale factor $3$.`),
Q('P4.6-2', 1, R`Describe fully the transformation that maps $y = f(x)$ onto $y = f(4x)$. [[1]]`,
  [R`Inside the bracket acts on $x$, the opposite way.`, R`Divide $x$-values by $4$.`],
  [R`|B1|Horizontal stretch, scale factor $\frac14$`], R`Horizontal stretch, scale factor $\frac14$`,
  R`A stretch parallel to the $x$-axis with scale factor $\frac14$.`),
Q('P4.6-3', 1, R`The point $(6, -2)$ lies on $y = f(x)$. Write down the point it moves to on **(a)** $y = f(2x)$ **(b)** $y = -f(x)$. [[2]]`,
  [R`$f(2x)$: halve the $x$-coordinate.`, R`$-f(x)$: change the sign of $y$.`],
  [R`(a)|B1|$(3, -2)$`, R`(b)|B1|$(6, 2)$`], R`(a) $(3, -2)$ (b) $(6, 2)$`,
  R`(a) At $x = 3$, $f(2x) = f(6) = -2$. (b) $-f(6) = 2$.`),
Q('P4.6-4', 2, R`$f(x) = x(x - 4)$. Sketch $y = f(2x)$, showing the roots and the minimum point. [[3]]`,
  [R`$f$ has roots $0$, $4$ and minimum $(2, -4)$.`, R`Halve the $x$-coordinates.`],
  [R`|B1|U shape`, R`|B1|Roots $0$ and $2$`, R`|B1|Minimum $(1, -4)$`], R`Roots $0$, $2$; minimum $(1, -4)$`,
  R`$f(2x) = 2x(2x - 4)$. The roots halve to $0$ and $2$; the minimum moves to $(1, -4)$ (same height).`, { solFig: FIGS['P4.6-4'] }),
Q('P4.6-5', 2, R`$f(x) = (x + 1)(x - 3)$. Sketch $y = -f(x)$, showing where it meets the axes and its turning point. [[3]]`,
  [R`Reflect in the $x$-axis: roots stay.`, R`$f(0) = -3$ and $f$ has its minimum at $(1, -4)$.`],
  [R`|B1|$\cap$ shape through $(-1, 0)$ and $(3, 0)$`, R`|B1|$(0, 3)$`, R`|B1|Maximum $(1, 4)$`], R`Crosses at $-1$ and $3$; $(0, 3)$; maximum $(1, 4)$`,
  R`The roots don't move. $-f(0) = 3$. The minimum of $f$, $(1, -4)$, becomes a maximum $(1, 4)$.`, { solFig: FIGS['P4.6-5'] }),
Q('P4.6-6', 2, R`$f(x) = x^3 - x$. Find $f(-x)$, and sketch $y = f(-x)$. What do you notice? [[3]]`,
  [R`$(-x)^3 = -x^3$.`, R`Compare with $-f(x)$.`],
  [R`|B1|$f(-x) = x - x^3$`, R`|B1|Negative cubic crossing at $-1$, $0$, $1$`, R`|B1|$f(-x) = -f(x)$: the same as reflecting in the $x$-axis`], R`$f(-x) = x - x^3 = -f(x)$`,
  R`$f(-x) = -x^3 + x = -(x^3 - x)$. For this (odd) function, reflecting in the $y$-axis gives the same graph as reflecting in the $x$-axis.`, { solFig: FIGS['P4.6-6'] }),
Q('P4.6-7', 2, R`Show that the graph of $y = 9x^2$ can be obtained from $y = x^2$ by a vertical stretch and, separately, by a horizontal stretch, giving each scale factor. [[2]]`,
  [R`$9x^2 = 9f(x)$.`, R`$9x^2 = (3x)^2 = f(3x)$.`],
  [R`|B1|Vertical, scale factor $9$`, R`|B1|Horizontal, scale factor $\frac13$`], R`Vertical sf $9$; horizontal sf $\frac13$`,
  R`$9x^2 = 9f(x)$, a vertical stretch with scale factor $9$; and $9x^2 = (3x)^2 = f(3x)$, a horizontal stretch with scale factor $\frac13$.`),
Q('P4.6-8', 3, R`$f(x) = \dfrac4x$. Show that $f(2x) = \frac12 f(x)$, and hence describe two different single transformations that map $y = f(x)$ onto $y = f(2x)$. [[3]]`,
  [R`$f(2x) = \frac{4}{2x}$.`, R`$f(2x)$ is a horizontal stretch; $\frac12 f(x)$ is a vertical one.`],
  [R`|B1|$\frac{4}{2x} = \frac2x = \frac12 \times \frac4x$`, R`|B1|Horizontal stretch, scale factor $\frac12$`, R`|B1|Vertical stretch, scale factor $\frac12$`], R`Horizontal stretch sf $\frac12$, or vertical stretch sf $\frac12$`,
  R`$f(2x) = \frac2x = \frac12 f(x)$, so the same curve comes from either stretch with scale factor $\frac12$.`),
Q('P4.6-9', 3, R`$f(x) = (x - 2)(x + 1)^2$. Sketch $y = f\!\left(\frac12 x\right)$, showing where it meets the axes. [[3]]`,
  [R`$f(\frac12 x)$ doubles the $x$-coordinates.`, R`The $y$-intercept doesn't change.`],
  [R`|B1|Positive cubic`, R`|B1|Touches at $(-2, 0)$, crosses at $(4, 0)$`, R`|B1|$(0, -2)$`], R`Touches at $(-2, 0)$, crosses at $(4, 0)$; $(0, -2)$`,
  R`The roots $-1$ (double) and $2$ become $-2$ and $4$; $f(0) = -2$ stays.`, { solFig: FIGS['P4.6-9'] }),
Q('P4.6-10', 3, R`$f(x) = x^2 - 2x - 8$. The curve $y = af(x)$ passes through $(0, 24)$. Find $a$, and write down the roots of $af(x) = 0$. [[3]]`,
  [R`$af(0) = -8a$.`, R`A vertical stretch doesn't move the roots.`],
  [R`|M1|$-8a = 24$`, R`|A1|$a = -3$`, R`|B1|$x = 4$ and $x = -2$`], R`$a = -3$; $x = 4$, $-2$`,
  R`$a \times (-8) = 24$, so $a = -3$. $f(x) = (x - 4)(x + 2)$, and the roots stay at $4$ and $-2$.`),
Q('P4.6-11', 3, R`The curve $y = f(x)$ has a maximum at $(2, 5)$ and meets the $x$-axis only at $(-1, 0)$ and $(4, 0)$. Write down the maximum point and the $x$-intercepts of **(a)** $y = f(2x)$ **(b)** $y = 3f(x)$ **(c)** $y = f(-x)$. [[4]]`,
  [R`(a) halve the $x$-values; (b) triple the $y$-values.`, R`(c) change the sign of the $x$-values.`],
  [R`(a)|B1|$(1, 5)$; $-\frac12$, $2$`, R`(b)|B1|$(2, 15)$; $-1$, $4$`, R`(c)|B1|$(-2, 5)$`, R`(c)|B1|$1$, $-4$`], R`(a) $(1, 5)$; $-\frac12$, $2$ (b) $(2, 15)$; $-1$, $4$ (c) $(-2, 5)$; $1$, $-4$`,
  R`(a) $x \div 2$. (b) $y \times 3$, roots unchanged. (c) $x \times (-1)$.`),
Q('P4.6-12', 4, R`$f(x) = x^2 - 4$. The curve $y = f(ax)$, where $a > 0$, passes through $(1, 5)$. Find $a$ and the roots of $f(ax) = 0$. [[3]]`,
  [R`$f(a \times 1) = a^2 - 4 = 5$.`, R`The roots of $f$ ($\pm2$) are divided by $a$.`],
  [R`|M1|$a^2 - 4 = 5$`, R`|A1|$a = 3$`, R`|A1|$x = \pm\frac23$`], R`$a = 3$; $x = \pm\frac23$`,
  R`$a^2 = 9$, $a = 3$. $f(3x) = 9x^2 - 4 = 0$ gives $x = \pm\frac23$.`),
Q('P4.6-13', 4, R`The curve $y = x(x - 6)$ is stretched horizontally so that the new curve meets the $x$-axis at $0$ and $2$. State the scale factor, and find the equation of the new curve in the form $y = px^2 + qx$. [[3]]`,
  [R`$6$ has to become $2$.`, R`A horizontal stretch with scale factor $\frac13$ is $f(3x)$.`],
  [R`|B1|Scale factor $\frac13$`, R`|M1|$f(3x) = 3x(3x - 6)$`, R`|A1|$y = 9x^2 - 18x$`], R`Scale factor $\frac13$; $y = 9x^2 - 18x$`,
  R`$6 \to 2$ means dividing $x$ by $3$, which is $f(3x) = 3x(3x - 6) = 9x^2 - 18x$.`),
Q('P4.6-14', 4, R`$f(x) = \dfrac{1}{x^2}$.

**(a)** Show that $f(2x) = \frac14 f(x)$. [[1]]

**(b)** Hence describe $y = f(2x)$ as a vertical stretch of $y = f(x)$. [[1]]

**(c)** Explain why $y = f(-x)$ is the same curve as $y = f(x)$. [[2]]`,
  [R`$(2x)^2 = 4x^2$.`, R`$(-x)^2 = x^2$.`],
  [R`(a)|B1|$\frac{1}{4x^2} = \frac14 \cdot \frac{1}{x^2}$`, R`(b)|B1|Vertical stretch, scale factor $\frac14$`, R`(c)|M1|$f(-x) = \frac{1}{(-x)^2}$`, R`(c)|A1|$= \frac{1}{x^2} = f(x)$: the curve is symmetric in the $y$-axis`], R`(b) vertical stretch sf $\frac14$ (c) $f(-x) = f(x)$`,
  R`(c) $(-x)^2 = x^2$, so $f(-x) = f(x)$: reflecting in the $y$-axis leaves the curve unchanged.`),
Q('P4.6-15', 5, R`$f(x) = x(x + 2)(x - 3)$.

**(a)** Sketch $y = f(x)$, showing where it meets the axes. [[3]]

**(b)** Sketch $y = f(-2x)$, showing where it meets the axes. [[3]]

**(c)** The curve $y = af(x)$ passes through $(1, 12)$. Find $a$. [[2]]`,
  [R`$f(-2x)$: divide each root by $-2$.`, R`$f(1) = 1 \times 3 \times (-2)$.`],
  [R`(a)|B1|Positive cubic`, R`(a)|B1|$(-2, 0)$, $(0, 0)$, $(3, 0)$`, R`(a)|B1|Correct shape between roots`, R`(b)|M1|Roots divided by $-2$`, R`(b)|A1|$\left(-\frac32, 0\right)$, $(0, 0)$, $(1, 0)$`, R`(b)|B1|Negative cubic shape`, R`(c)|M1|$af(1) = -6a = 12$`, R`(c)|A1|$a = -2$`], R`(b) crosses at $-\frac32$, $0$, $1$ (negative cubic) (c) $a = -2$`,
  R`(b) $-2x = -2 \Rightarrow x = 1$; $-2x = 3 \Rightarrow x = -\frac32$. The leading term is $(-2x)^3 = -8x^3$, so it's a negative cubic.

(c) $f(1) = -6$, so $-6a = 12$ and $a = -2$.`, { solFig: FIGS['P4.6-15b'] })
]};

CONTENT['P4.7'] = {
notes: R`
### Track the key features
When a graph is given as a sketch, apply the transformation to its key points and asymptotes.

| Transformation | Point $(p, q)$ goes to | Asymptote $y = c$ | Asymptote $x = d$ |
|---|---|---|---|
| $f(x) + a$ | $(p, q + a)$ | $y = c + a$ | $x = d$ |
| $f(x + a)$ | $(p - a, q)$ | $y = c$ | $x = d - a$ |
| $af(x)$ | $(p, aq)$ | $y = ac$ | $x = d$ |
| $f(ax)$ | $\left(\frac{p}{a}, q\right)$ | $y = c$ | $x = \frac{d}{a}$ |
| $-f(x)$ | $(p, -q)$ | $y = -c$ | $x = d$ |
| $f(-x)$ | $(-p, q)$ | $y = c$ | $x = -d$ |

::: booklet
**Not in the formula booklet:** this table.
:::

### Worked example 1
The graph of $y = f(x)$ has a maximum at $(0, 0)$ and a minimum at $(2, -4)$ and crosses the axis at $(3, 0)$.

[[fig:P4.7-A]]

Sketch $y = f(x) + 4$: maximum $(0, 4)$, minimum $(2, 0)$, so it now **touches** the axis at $(2, 0)$. (Since $f(x) = x^2(x - 3)$, $f(x) + 4 = (x - 2)^2(x + 1)$, so it also crosses at $(-1, 0)$.)

[[fig:P4.7-A4]]

### Worked example 2: which asymptote moves?
$y = g(x)$ has asymptotes $x = 1$ and $y = 2$.

[[fig:P4.7-B]]

- $y = g(2x)$: a **horizontal** stretch, so only the vertical asymptote moves: $x = \frac12$. It's still $y = 2$.
- $y = 2g(x)$: a **vertical** stretch, so only the horizontal asymptote moves: $y = 4$. It's still $x = 1$.

**The trap:** stretching both asymptotes. A horizontal line isn't changed by a horizontal stretch.

### Watch out
- Label the images of every point marked on the original.
- Do one transformation at a time if there are two.
`,
questions: [
Q('P4.7-1', 1, R`The diagram shows $y = f(x)$, with a maximum at $(0, 0)$ and a minimum at $(2, -4)$. Write down the coordinates of the minimum point of $y = f(x) + 3$. [[1]]`,
  [R`$+3$ outside: up $3$.`, R`Only the $y$-coordinate changes.`],
  [R`|B1|$(2, -1)$`], R`$(2, -1)$`,
  R`$(2, -4 + 3) = (2, -1)$.`, { fig: FIGS['P4.7-A'] }),
Q('P4.7-2', 1, R`Using the same graph of $y = f(x)$, write down the coordinates of the minimum point of $y = f(x - 2)$. [[1]]`,
  [R`$f(x - 2)$ moves right $2$.`, R`Only $x$ changes.`],
  [R`|B1|$(4, -4)$`], R`$(4, -4)$`,
  R`$(2 + 2, -4) = (4, -4)$.`, { fig: FIGS['P4.7-A'] }),
Q('P4.7-3', 1, R`Using the same graph of $y = f(x)$, describe the turning points of $y = -f(x)$. [[2]]`,
  [R`Reflect in the $x$-axis.`, R`A maximum becomes a minimum.`],
  [R`|B1|Minimum at $(0, 0)$`, R`|B1|Maximum at $(2, 4)$`], R`Minimum $(0, 0)$; maximum $(2, 4)$`,
  R`Change the sign of every $y$: the maximum at $O$ becomes a minimum at $O$, and the minimum $(2, -4)$ becomes a maximum $(2, 4)$.`, { fig: FIGS['P4.7-A'] }),
Q('P4.7-4', 2, R`Using the graph of $y = f(x)$, sketch $y = f(2x)$, labelling the images of the turning points and of $(3, 0)$. [[3]]`,
  [R`Halve every $x$-coordinate.`, R`$y$-coordinates don't change.`],
  [R`|B1|Same shape`, R`|B1|$(0, 0)$ and $(1, -4)$`, R`|B1|$\left(\frac32, 0\right)$`], R`Maximum $(0, 0)$, minimum $(1, -4)$, crosses at $\left(\frac32, 0\right)$`,
  R`Horizontal stretch, scale factor $\frac12$: $(0, 0) \to (0, 0)$, $(2, -4) \to (1, -4)$, $(3, 0) \to \left(\frac32, 0\right)$.`, { fig: FIGS['P4.7-A'], solFig: FIGS['P4.7-4'] }),
Q('P4.7-5', 2, R`The diagram shows $y = g(x)$, with asymptotes $x = 1$ and $y = 2$, passing through $(0, 1)$ and $\left(\frac12, 0\right)$. Sketch $y = g(x) + 1$, giving the asymptotes and the $y$-intercept. [[3]]`,
  [R`Up $1$: the horizontal asymptote moves.`, R`$(0, 1) \to (0, 2)$.`],
  [R`|B1|Same shape`, R`|B1|Asymptotes $x = 1$, $y = 3$`, R`|B1|$(0, 2)$`], R`Asymptotes $x = 1$, $y = 3$; $(0, 2)$`,
  R`Everything moves up $1$. (The new $x$-intercept isn't the image of a marked point; for $g(x) = \frac{1}{x - 1} + 2$ it would be $\left(\frac23, 0\right)$.)`, { fig: FIGS['P4.7-B'], solFig: FIGS['P4.7-5'] }),
Q('P4.7-6', 2, R`Using the graph of $y = g(x)$, sketch $y = g(x + 1)$, giving the asymptotes and the coordinates of the point where it crosses the $x$-axis. [[3]]`,
  [R`Left $1$: the vertical asymptote moves.`, R`$\left(\frac12, 0\right) \to \left(-\frac12, 0\right)$.`],
  [R`|B1|Asymptotes $x = 0$, $y = 2$`, R`|B1|$\left(-\frac12, 0\right)$`, R`|B1|No $y$-intercept (the $y$-axis is now an asymptote)`], R`Asymptotes $x = 0$, $y = 2$; $\left(-\frac12, 0\right)$`,
  R`The point $(0, 1)$ moves to $(-1, 1)$, and the vertical asymptote moves to the $y$-axis, so the curve no longer crosses it.`, { fig: FIGS['P4.7-B'], solFig: FIGS['P4.7-6'] }),
Q('P4.7-7', 2, R`The diagram shows $y = h(x)$, a $\cap$-shaped curve through $(0, 0)$ and $(4, 0)$ with a maximum at $(2, 3)$. Sketch $y = 2h(x)$. [[2]]`,
  [R`Double every $y$.`, R`The roots stay put.`],
  [R`|B1|Roots $0$ and $4$`, R`|B1|Maximum $(2, 6)$`], R`Roots $0$, $4$; maximum $(2, 6)$`,
  R`A vertical stretch, scale factor $2$.`, { fig: FIGS['P4.7-C'], solFig: FIGS['P4.7-7'] }),
Q('P4.7-8', 3, R`Using the graph of $y = h(x)$, give the coordinates of the maximum point and the $x$-intercepts of **(a)** $y = h\!\left(\frac12 x\right)$ **(b)** $y = h(x) - 3$. [[3]]`,
  [R`(a) double the $x$-values.`, R`(b) down $3$: the maximum reaches the axis.`],
  [R`(a)|B1|Maximum $(4, 3)$`, R`(a)|B1|$x = 0$ and $8$`, R`(b)|B1|Maximum $(2, 0)$, touching the axis only there`], R`(a) $(4, 3)$; $0$, $8$ (b) $(2, 0)$; touches at $x = 2$`,
  R`(a) Horizontal stretch, scale factor $2$. (b) The maximum height is $3$, so after moving down $3$ the curve just touches the $x$-axis at $(2, 0)$.`, { fig: FIGS['P4.7-C'], solFig: FIGS['P4.7-8'] }),
Q('P4.7-9', 3, R`Using the graph of $y = g(x)$ (asymptotes $x = 1$, $y = 2$, through $(0, 1)$ and $\left(\frac12, 0\right)$), sketch $y = 3g(x)$, giving the asymptotes and the points where it meets the axes. [[3]]`,
  [R`Triple every $y$, including the asymptote $y = 2$.`, R`Points on the $x$-axis stay put.`],
  [R`|B1|Asymptotes $x = 1$ and $y = 6$`, R`|B1|$(0, 3)$`, R`|B1|$\left(\frac12, 0\right)$`], R`Asymptotes $x = 1$, $y = 6$; $(0, 3)$, $\left(\frac12, 0\right)$`,
  R`A vertical stretch moves $y = 2$ to $y = 6$ but not $x = 1$.`, { fig: FIGS['P4.7-B'], solFig: FIGS['P4.7-9'] }),
Q('P4.7-10', 3, R`Using the graph of $y = f(x)$ (maximum $(0, 0)$, minimum $(2, -4)$, crossing at $(3, 0)$), sketch $y = f(-x)$. [[3]]`,
  [R`Reflect in the $y$-axis.`, R`Change the sign of $x$.`],
  [R`|B1|Reflected shape`, R`|B1|Minimum $(-2, -4)$`, R`|B1|Crosses at $(-3, 0)$, touches at $O$`], R`Minimum $(-2, -4)$; crosses at $(-3, 0)$; turning point at $O$`,
  R`Every point $(p, q)$ goes to $(-p, q)$.`, { fig: FIGS['P4.7-A'], solFig: FIGS['P4.7-10'] }),
Q('P4.7-11', 3, R`Using the graph of $y = f(x)$, state the number of real solutions of $f(x) = k$ when **(a)** $k = 1$ **(b)** $k = -2$ **(c)** $k = -4$. [[3]]`,
  [R`Draw the horizontal line $y = k$.`, R`Count crossings, and remember lines through a turning point.`],
  [R`(a)|B1|$1$`, R`(b)|B1|$3$`, R`(c)|B1|$2$`], R`(a) $1$ (b) $3$ (c) $2$`,
  R`(a) $y = 1$ is above the maximum, so it meets only the right-hand branch. (b) $y = -2$ lies between the turning values: three. (c) $y = -4$ goes through the minimum: two.`, { fig: FIGS['P4.7-A'], solFig: FIGS['P4.7-11'] }),
Q('P4.7-12', 4, R`Using the graph of $y = f(x)$, find the set of values of $k$ for which $y = f(x) + k$ meets the $x$-axis at three distinct points. [[3]]`,
  [R`$f(x) + k = 0 \iff f(x) = -k$.`, R`Three solutions when $-4 < -k < 0$.`],
  [R`|M1|$f(x) = -k$`, R`|M1|$-4 < -k < 0$`, R`|A1|$0 < k < 4$`], R`$0 < k < 4$`,
  R`Raising the graph by $k$ with $0 < k < 4$ keeps the minimum below the axis ($-4 + k < 0$) and lifts the maximum above it ($0 + k > 0$), so the curve crosses three times.`, { fig: FIGS['P4.7-A'] }),
Q('P4.7-13', 4, R`The curve $y = h(x)$ in the diagram is a quadratic.

**(a)** Find $h(x)$. [[2]]

**(b)** Find the equation of $y = h(x + 2)$ in its simplest form. [[2]]`,
  [R`$h(x) = ax(x - 4)$; use the maximum $(2, 3)$.`, R`Replace $x$ by $x + 2$.`],
  [R`(a)|M1|$a(2)(-2) = 3$`, R`(a)|A1|$h(x) = -\frac34 x(x - 4)$`, R`(b)|M1|$-\frac34(x + 2)(x - 2)$`, R`(b)|A1|$y = 3 - \frac34 x^2$`], R`(a) $h(x) = -\frac34 x(x - 4)$ (b) $y = 3 - \frac34 x^2$`,
  R`(a) $-4a = 3$, $a = -\frac34$. (b) $-\frac34(x + 2)(x - 2) = -\frac34(x^2 - 4) = 3 - \frac34 x^2$. Check: the maximum moves to $(0, 3)$.`, { fig: FIGS['P4.7-C'] }),
Q('P4.7-14', 4, R`The curve $y = g(x)$ in the diagram has equation $g(x) = \dfrac{1}{x - 1} + 2$. The curve $y = g(ax)$ crosses the $x$-axis at $x = \frac14$.

**(a)** Find $a$. [[2]]

**(b)** Write down the equations of the asymptotes of $y = g(ax)$. [[2]]`,
  [R`$g$ crosses at $x = \frac12$; $g(ax)$ divides that by $a$.`, R`Only the vertical asymptote changes.`],
  [R`(a)|M1|$\frac{1}{2a} = \frac14$, or solves $\frac{1}{a/4 - 1} + 2 = 0$`, R`(a)|A1|$a = 2$`, R`(b)|B1|$x = \frac12$`, R`(b)|B1|$y = 2$`], R`(a) $a = 2$ (b) $x = \frac12$, $y = 2$`,
  R`(a) The $x$-intercept $\frac12$ becomes $\frac{1}{2a} = \frac14$, so $a = 2$. Check: $g(2x) = \frac{1}{2x - 1} + 2 = 0$ at $2x - 1 = -\frac12$, $x = \frac14$. (b) $x = 1 \to x = \frac12$; $y = 2$ stays.`, { fig: FIGS['P4.7-B'] }),
Q('P4.7-15', 5, R`The diagram shows $y = f(x)$, where $f(x) = x^2(x - 3)$, with a maximum at $(0, 0)$ and a minimum at $(2, -4)$.

**(a)** The curve $y = f(x - a) + b$ has its **minimum** at the origin. Find $a$ and $b$. [[2]]

**(b)** Show that the new curve has equation $y = x^2(x + 3)$. [[3]]

**(c)** Write down the coordinates of its maximum point. [[1]]

**(d)** Hence, or otherwise, solve $f(x) + 4 = 0$. [[2]]`,
  [R`The minimum moves from $(2, -4)$ to $(0, 0)$: left $2$, up $4$.`, R`For (d), $y = f(x) + 4$ is the new curve moved right $2$.`],
  [R`(a)|B1|$a = -2$`, R`(a)|B1|$b = 4$`, R`(b)|M1|$f(x + 2) + 4 = (x + 2)^2(x - 1) + 4$`, R`(b)|M1|Expands`, R`(b)|A1|$x^3 + 3x^2 = x^2(x + 3)$`, R`(c)|B1|$(-2, 4)$`, R`(d)|M1|Roots of the new curve $0$, $-3$ moved right $2$`, R`(d)|A1|$x = 2$ or $x = -1$`], R`(a) $a = -2$, $b = 4$ (c) $(-2, 4)$ (d) $x = 2$, $-1$`,
  R`(a) $f(x - a)$ moves right $a$, so $a = -2$; $b = 4$.

(b) $(x + 2)^2(x - 1) + 4 = (x^2 + 4x + 4)(x - 1) + 4 = x^3 + 3x^2 - 4 + 4 = x^2(x + 3)$.

(c) The maximum $(0, 0)$ moves to $(-2, 4)$.

(d) $y = f(x) + 4$ is $y = x^2(x + 3)$ moved right $2$: roots $0 + 2$ and $-3 + 2$, so $x = 2$ or $x = -1$. Check: $f(2) + 4 = -4 + 4 = 0$ and $f(-1) + 4 = -4 + 4 = 0$.`, { fig: FIGS['P4.7-A'], solFig: FIGS['P4.7-15'] })
]};
