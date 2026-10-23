/* Pure Mathematics Year 1 · Chapter 12 Differentiation (sections 12.7 to 12.11) */
{
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  // f (blue) and its gradient function f' (red, dashed) on one set of axes.
  const pair = (label, f, d, box, pts, lf, ld, more = {}) => Fig.graph(Object.assign({ label, x0: box[0], x1: box[1], y0: box[2], y1: box[3],
    fns: [{ f }, { f: d, col: 'var(--pen)', dash: true }], points: pts.map(p => pt(...p)),
    texts: [{ x: lf[0], y: lf[1], label: 'y = f(x)', col: 'var(--accent)' }, { x: ld[0], y: ld[1], label: 'y = f′(x)', col: 'var(--pen)' }] }, more));
  FIGS['P12.9-stat'] = Fig.graph({ label: 'y = x³ − 3x² − 9x + 5 with a maximum at (−1, 10) and a minimum at (3, −22); the gradient is zero at both',
    x0: -3, x1: 5, y0: -28, y1: 16, fns: [{ f: x => x ** 3 - 3 * x * x - 9 * x + 5 }], hlines: [],
    points: [pt(-1, 10, 'max (−1, 10)', 0, -12), pt(3, -22, 'min (3, −22)', 0, 18)] });
  FIGS['P12.9-x4'] = Fig.graph({ label: 'y = x⁴: the second derivative is 0 at the origin, but the gradient changes from negative to positive, so it is a minimum',
    x0: -1.6, x1: 1.6, y0: -0.6, y1: 4, fns: [{ f: x => x ** 4 }], points: [pt(0, 0, 'min (0, 0)', 0, 16)] });
  FIGS['P12.10-pair'] = pair("A cubic f with a maximum at x = −1 and a minimum at x = 3 (solid), and its gradient function f′, a positive quadratic crossing the x-axis at −1 and 3 (dashed)",
    x => (x ** 3) / 3 - x * x - 3 * x, x => x * x - 2 * x - 3, [-3, 5, -10, 10], [[-1, 0, '−1', -10, 14], [3, 0, '3', 10, 14]], [4.1, -7.6], [2.4, 8.6]);
  {
    const sq = (x1, y1, x2, y2) => [{ x1, y1, x2, y2: y1, col: 'var(--ink)', w: 2 }, { x1: x2, y1, x2, y2, col: 'var(--ink)', w: 2 }, { x1: x2, y1: y2, x2: x1, y2, col: 'var(--ink)', w: 2 }, { x1, y1: y2, x2: x1, y2: y1, col: 'var(--ink)', w: 2 }];
    const cut = (x1, y1) => [{ x1, y1, x2: x1 + 2, y2: y1, col: 'var(--pen)' }, { x1: x1 + 2, y1, x2: x1 + 2, y2: y1 + 2, col: 'var(--pen)' }, { x1: x1 + 2, y1: y1 + 2, x2: x1, y2: y1 + 2, col: 'var(--pen)' }, { x1, y1: y1 + 2, x2: x1, y2: y1, col: 'var(--pen)' }];
    FIGS['P12.11-box'] = Fig.graph({ label: 'A 12 cm square card with a square of side x cut from each corner (red); folding along the dashed lines makes an open box with base 12 − 2x and height x',
      x0: -1.5, x1: 13.5, y0: -1.5, y1: 13.5, equal: true, xlab: '', ylab: '', w: 300,
      segs: [...sq(0, 0, 12, 12), ...cut(0, 0), ...cut(10, 0), ...cut(10, 10), ...cut(0, 10),
        { x1: 2, y1: 2, x2: 10, y2: 2, dash: true }, { x1: 10, y1: 2, x2: 10, y2: 10, dash: true }, { x1: 10, y1: 10, x2: 2, y2: 10, dash: true }, { x1: 2, y1: 10, x2: 2, y2: 2, dash: true }],
      texts: [{ x: 1, y: 1, label: 'x', col: 'var(--pen)' }, { x: 11, y: 11, label: 'x', col: 'var(--pen)' }, { x: 6, y: 6, label: '12 − 2x' }, { x: 6, y: -0.8, label: '12 cm' }] });
  }
  FIGS['P12.10-4'] = pair('f(x) = x² (solid) and f′(x) = 2x (dashed), a straight line through the origin', x => x * x, x => 2 * x, [-3, 3, -6, 9], [], [-1.9, 7.6], [2.3, 2.6]);
  FIGS['P12.10-5'] = pair('f(x) = (x − 1)(x − 5) (solid) and f′(x) = 2x − 6 (dashed), crossing the x-axis at 3, below the vertex', x => (x - 1) * (x - 5), x => 2 * x - 6, [-0.5, 6.5, -6, 8], [[3, 0, '3', 0, -12]], [1.4, 6.4], [5.4, 1.8]);
  FIGS['P12.10-7'] = pair('f(x) = x³ (solid) and f′(x) = 3x² (dashed), which touches the x-axis at the origin', x => x ** 3, x => 3 * x * x, [-2, 2, -6, 8], [], [1.3, -3.4], [0, 7]);
  FIGS['P12.10-8'] = pair('f(x) = 1/x (solid) and f′(x) = −1/x² (dashed): always negative, with the axes as asymptotes', x => 1 / x, x => -1 / (x * x), [-4, 4, -5, 5], [], [2.4, 1.6], [-2.4, -2.4]);
  FIGS['P12.10-12'] = Fig.graph({ label: "f′ for a quartic with minima at x = −2 and 2 and a maximum at x = 0: a positive cubic crossing the x-axis at −2, 0 and 2",
    x0: -3, x1: 3, y0: -8, y1: 8, fns: [{ f: x => x * (x - 2) * (x + 2), col: 'var(--pen)', dash: true, label: "y = f′(x)", lx: 2.9, ly: 7 }], points: [pt(-2, 0, '−2', -10, 14), pt(0, 0, 'O', 10, 14), pt(2, 0, '2', 10, -12)] });
  FIGS['P12.10-14'] = pair('f(x) = x + 1/x (solid) and f′(x) = 1 − 1/x² (dashed): f′ crosses at ±1 and approaches 1 as |x| grows', x => x + 1 / x, x => 1 - 1 / (x * x), [-4, 4, -5, 5], [[1, 0, '1', 6, 14], [-1, 0, '−1', -6, 14]], [2.4, 4.5], [-2.4, 1.9], { hlines: [{ y: 1, label: 'y = 1' }] });
  FIGS['P12.10-15'] = pair('f(x) = x³ − 3x² (solid), with a maximum at (0, 0) and a minimum at (2, −4), and f′(x) = 3x² − 6x (dashed), crossing at 0 and 2 with its minimum at (1, −3)', x => x ** 3 - 3 * x * x, x => 3 * x * x - 6 * x, [-1.5, 3.6, -6, 6], [[2, -4, '(2, −4)', 0, 16], [1, -3, '(1, −3)', 0, 16]], [-0.6, -4.8], [1.1, 3]);
}

CONTENT['P12.7'] = {
notes: R`
### Increasing and decreasing
- $f$ is **increasing** on an interval if $f'(x) \ge 0$ there.
- $f$ is **decreasing** if $f'(x) \le 0$ there.

To find the intervals, solve the inequality $f'(x) > 0$ (or $< 0$).

::: booklet
**Not in the formula booklet:** these definitions.
:::

### Worked example 1
Find the interval on which $f(x) = x^2 - 4x$ is increasing.
- $f'(x) = 2x - 4 \ge 0$ when $x \ge 2$.

### Worked example 2: increasing everywhere
Show that $f(x) = x^3 + 3x$ is increasing for all $x$.
- $f'(x) = 3x^2 + 3$. Since $x^2 \ge 0$, $f'(x) \ge 3 > 0$ for every $x$.

**The trap:** checking a few values of $x$ and saying "it's always positive". You need an argument for **every** $x$: a square is never negative, or complete the square.

### Watch out
- Solving $f'(x) > 0$ for a quadratic $f'$ is a quadratic inequality: sketch it.
`,
questions: [
Q('P12.7-1', 1, R`Find the set of values of $x$ for which $f(x) = x^2 - 6x$ is increasing. [[2]]`,
  [R`$f'(x) = 2x - 6$.`, R`$2x - 6 \ge 0$.`],
  [R`|M1|$f'(x) = 2x - 6$`, R`|A1|$x \ge 3$`], R`$x \ge 3$`,
  R`$2x - 6 \ge 0$ when $x \ge 3$.`),
Q('P12.7-2', 1, R`Show that $f(x) = 5 - 2x$ is decreasing for all $x$. [[1]]`,
  [R`Find $f'(x)$.`, R`It's a negative constant.`],
  [R`|B1|$f'(x) = -2 < 0$ for all $x$`], R`$f'(x) = -2 < 0$`,
  R`A straight line with negative gradient always decreases.`),
Q('P12.7-3', 1, R`Find the set of values of $x$ for which $f(x) = x^2 + 4x$ is decreasing. [[2]]`,
  [R`$f'(x) = 2x + 4$.`, R`$2x + 4 \le 0$.`],
  [R`|M1|$f'(x) = 2x + 4$`, R`|A1|$x \le -2$`], R`$x \le -2$`,
  R`The vertex is at $x = -2$; the curve falls to the left of it.`),
Q('P12.7-4', 2, R`Show that $f(x) = x^3 + 3x$ is increasing for all $x$. [[2]]`,
  [R`$f'(x) = 3x^2 + 3$.`, R`$x^2 \ge 0$.`],
  [R`|M1|$3x^2 + 3$`, R`|A1|$3x^2 \ge 0$, so $f'(x) \ge 3 > 0$`], R`$f'(x) = 3x^2 + 3 > 0$`,
  R`The gradient is never less than $3$.`),
Q('P12.7-5', 2, R`Find the set of values of $x$ for which $f(x) = 4x - x^2$ is increasing. [[2]]`,
  [R`$f'(x) = 4 - 2x$.`, R`$4 - 2x \ge 0$.`],
  [R`|M1|$4 - 2x$`, R`|A1|$x \le 2$`], R`$x \le 2$`,
  R`The $\cap$-shaped curve rises up to its vertex at $x = 2$.`),
Q('P12.7-6', 2, R`Find the interval on which $f(x) = x^3 - 12x$ is decreasing. [[3]]`,
  [R`$f'(x) = 3x^2 - 12$.`, R`$3(x - 2)(x + 2) \le 0$.`],
  [R`|M1|$3x^2 - 12$`, R`|M1|Critical values $\pm2$`, R`|A1|$-2 \le x \le 2$`], R`$-2 \le x \le 2$`,
  R`$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2) \le 0$ between the roots, so $f$ is decreasing for $-2 \le x \le 2$.`),
Q('P12.7-7', 2, R`Show that $f(x) = \dfrac1x$ is decreasing for $x > 0$. [[2]]`,
  [R`$f'(x) = -x^{-2}$.`, R`$x^2 > 0$.`],
  [R`|M1|$f'(x) = -\frac{1}{x^2}$`, R`|A1|$< 0$ for all $x > 0$`], R`$f'(x) = -\frac{1}{x^2} < 0$`,
  R`The square is positive, so the gradient is negative.`),
Q('P12.7-8', 3, R`Find the set of values of $x$ for which $f(x) = x^3 - 6x^2 + 9x$ is increasing. [[4]]`,
  [R`$f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$.`, R`Positive outside the roots.`],
  [R`|M1|$f'(x)$`, R`|M1|Factorises`, R`|A1|Critical values $1$, $3$`, R`|A1|$x \le 1$ or $x \ge 3$`], R`$x \le 1$ or $x \ge 3$`,
  R`A positive quadratic is non-negative outside its roots.`),
Q('P12.7-9', 3, R`Find the interval on which $f(x) = 2x^3 + 3x^2 - 12x$ is decreasing. [[4]]`,
  [R`$f'(x) = 6x^2 + 6x - 12 = 6(x + 2)(x - 1)$.`, R`Negative between the roots.`],
  [R`|M1|$f'(x)$`, R`|M1|Factorises`, R`|A1|Critical values $-2$, $1$`, R`|A1|$-2 \le x \le 1$`], R`$-2 \le x \le 1$`,
  R`$6(x + 2)(x - 1) \le 0$ between $-2$ and $1$.`),
Q('P12.7-10', 3, R`Find the set of values of $x$ for which $f(x) = x + \dfrac4x$ is increasing. [[3]]`,
  [R`$f'(x) = 1 - 4x^{-2}$.`, R`$1 - \frac{4}{x^2} \ge 0$ means $x^2 \ge 4$.`],
  [R`|M1|$f'(x) = 1 - \frac{4}{x^2}$`, R`|M1|$x^2 \ge 4$`, R`|A1|$x \le -2$ or $x \ge 2$`], R`$x \le -2$ or $x \ge 2$`,
  R`Multiply by $x^2 > 0$: $x^2 - 4 \ge 0$.`),
Q('P12.7-11', 3, R`Show that $f(x) = x^3 - 3x^2 + 3x - 5$ is increasing for all $x$. [[3]]`,
  [R`$f'(x) = 3x^2 - 6x + 3$.`, R`$= 3(x - 1)^2$.`],
  [R`|M1|$3x^2 - 6x + 3$`, R`|M1|$3(x - 1)^2$`, R`|A1|$\ge 0$ for all $x$`], R`$f'(x) = 3(x - 1)^2 \ge 0$`,
  R`The gradient is never negative (it's $0$ only at $x = 1$).`),
Q('P12.7-12', 4, R`Find the set of values of $x$ for which $f(x) = \sqrt x - x$, $x > 0$, is decreasing. [[3]]`,
  [R`$f'(x) = \frac12 x^{-\frac12} - 1$.`, R`$\frac{1}{2\sqrt x} \le 1$ when $\sqrt x \ge \frac12$.`],
  [R`|M1|$f'(x)$`, R`|M1|$\frac{1}{2\sqrt x} \le 1$`, R`|A1|$x \ge \frac14$`], R`$x \ge \frac14$`,
  R`$\sqrt x \ge \frac12$ gives $x \ge \frac14$.`),
Q('P12.7-13', 4, R`$f(x) = x^3 + kx$. Find the set of values of $k$ for which $f$ is increasing for all $x$. [[3]]`,
  [R`$f'(x) = 3x^2 + k$.`, R`The smallest value of $3x^2$ is $0$.`],
  [R`|M1|$3x^2 + k$`, R`|M1|Needs $3x^2 + k \ge 0$ for all $x$`, R`|A1|$k \ge 0$`], R`$k \ge 0$`,
  R`If $k < 0$, $f'(0) = k < 0$, so $f$ decreases near $0$.`),
Q('P12.7-14', 4, R`Find the intervals on which $f(x) = x^4 - 8x^2$ is decreasing. [[4]]`,
  [R`$f'(x) = 4x^3 - 16x = 4x(x - 2)(x + 2)$.`, R`Sketch this positive cubic.`],
  [R`|M1|$f'(x)$`, R`|M1|Factorises`, R`|A1|$x \le -2$`, R`|A1|$0 \le x \le 2$`], R`$x \le -2$ or $0 \le x \le 2$`,
  R`The cubic $4x(x - 2)(x + 2)$ is negative for $x < -2$ and for $0 < x < 2$.`),
Q('P12.7-15', 5, R`$f(x) = x^3 - 3x^2 - 9x + 2$.

**(a)** Find $f'(x)$. [[1]]

**(b)** Find the intervals on which $f$ is increasing. [[3]]

**(c)** Find the set of values of $k$ for which $f(x) = k$ has three real solutions. [[4]]`,
  [R`$f'(x) = 3(x - 3)(x + 1)$.`, R`For (c), find $f$ at the turning points $x = -1$ and $x = 3$.`],
  [R`(a)|B1|$3x^2 - 6x - 9$`, R`(b)|M1|$3(x - 3)(x + 1)$`, R`(b)|A1|Critical values $-1$, $3$`, R`(b)|A1|$x \le -1$ or $x \ge 3$`, R`(c)|M1|$f(-1) = 7$`, R`(c)|M1|$f(3) = -25$`, R`(c)|M1|The line $y = k$ must lie between them`, R`(c)|A1|$-25 < k < 7$`],
  R`(a) $3x^2 - 6x - 9$ (b) $x \le -1$ or $x \ge 3$ (c) $-25 < k < 7$`,
  R`(c) $f$ rises to $7$ at $x = -1$, falls to $-25$ at $x = 3$, then rises. A horizontal line crosses three times only strictly between these values.`)
]};

CONTENT['P12.8'] = {
notes: R`
### The second derivative
Differentiate twice: $\dfrac{d^2y}{dx^2}$ or $f''(x)$. It measures how fast the **gradient** is changing.

::: booklet
**Not in the formula booklet:** this notation.
:::

### Worked example 1
$y = x^4 - 3x^2$. Find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$.
- $\frac{dy}{dx} = 4x^3 - 6x$; $\frac{d^2y}{dx^2} = 12x^2 - 6$.

### Worked example 2: fractional powers
$y = \sqrt x$. Find $\frac{d^2y}{dx^2}$.
- $\frac{dy}{dx} = \frac12 x^{-\frac12}$, so $\frac{d^2y}{dx^2} = \frac12 \times \left(-\frac12\right)x^{-\frac32} = -\frac14 x^{-\frac32}$.

**The trap:** forgetting to multiply by the **new** power the second time, or subtracting $2$ from the power in one go without the coefficients.

### Watch out
- $\frac{d^2y}{dx^2}$ is not $\left(\frac{dy}{dx}\right)^2$.
`,
questions: [
Q('P12.8-1', 1, R`$y = x^3$. Find $\dfrac{d^2y}{dx^2}$. [[1]]`,
  [R`$\frac{dy}{dx} = 3x^2$.`, R`Differentiate again.`],
  [R`|B1|$6x$`], R`$6x$`,
  R`$\frac{dy}{dx} = 3x^2$, and differentiating again gives $\frac{d^2y}{dx^2} = 6x$.`),
Q('P12.8-2', 1, R`$y = 5x^2 - 3x$. Find $\dfrac{d^2y}{dx^2}$. [[1]]`,
  [R`$\frac{dy}{dx} = 10x - 3$.`, R`Again.`],
  [R`|B1|$10$`], R`$10$`,
  R`$\frac{dy}{dx} = 10x - 3$, and differentiating again gives $\frac{d^2y}{dx^2} = 10$.`),
Q('P12.8-3', 1, R`$f(x) = x^4 - 2x$. Find $f''(x)$. [[2]]`,
  [R`$f'(x) = 4x^3 - 2$.`, R`Differentiate again.`],
  [R`|M1|$f'(x) = 4x^3 - 2$`, R`|A1|$12x^2$`], R`$12x^2$`,
  R`The constant $-2$ disappears.`),
Q('P12.8-4', 2, R`$y = x^4 - 3x^2$. Find $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$. [[2]]`,
  [R`$4x^3 - 6x$.`, R`$12x^2 - 6$.`],
  [R`|B1|$4x^3 - 6x$`, R`|B1|$12x^2 - 6$`], R`$4x^3 - 6x$; $12x^2 - 6$`,
  R`Differentiate term by term, twice.`),
Q('P12.8-5', 2, R`$f(x) = \dfrac1x$. Find $f''(x)$. [[2]]`,
  [R`$f'(x) = -x^{-2}$.`, R`$-x^{-2} \to 2x^{-3}$.`],
  [R`|M1|$-x^{-2}$`, R`|A1|$2x^{-3}$`], R`$\frac{2}{x^3}$`,
  R`$(-1)(-2)x^{-3} = 2x^{-3}$.`),
Q('P12.8-6', 2, R`$y = \sqrt x$. Find $\dfrac{d^2y}{dx^2}$. [[2]]`,
  [R`$\frac12 x^{-\frac12}$.`, R`$\frac12 \times \left(-\frac12\right)$.`],
  [R`|M1|$\frac12 x^{-\frac12}$`, R`|A1|$-\frac14 x^{-\frac32}$`], R`$-\frac14 x^{-\frac32}$`,
  R`$-\frac{1}{4x\sqrt x}$.`),
Q('P12.8-7', 2, R`$f(x) = 2x^3 - 6x^2 + x$. Find $f''(1)$. [[2]]`,
  [R`$f'(x) = 6x^2 - 12x + 1$.`, R`$f''(x) = 12x - 12$.`],
  [R`|M1|$f''(x) = 12x - 12$`, R`|A1|$0$`], R`$0$`,
  R`$f'(x) = 6x^2 - 12x + 1$ and $f''(x) = 12x - 12$, so $f''(1) = 0$.`),
Q('P12.8-8', 3, R`$f(x) = x^3 + ax^2$. Given that $f''(2) = 0$, find $a$. [[3]]`,
  [R`$f''(x) = 6x + 2a$.`, R`$12 + 2a = 0$.`],
  [R`|M1|$f'(x) = 3x^2 + 2ax$`, R`|M1|$f''(x) = 6x + 2a$`, R`|A1|$a = -6$`], R`$a = -6$`,
  R`$f'(x) = 3x^2 + 2ax$ and $f''(x) = 6x + 2a$. Then $f''(2) = 12 + 2a = 0$, so $a = -6$.`),
Q('P12.8-9', 3, R`$y = 3x^{-2} + x$. Find $\dfrac{d^2y}{dx^2}$ and its value at $x = 1$. [[2]]`,
  [R`$\frac{dy}{dx} = -6x^{-3} + 1$.`, R`$18x^{-4}$.`],
  [R`|B1|$18x^{-4}$`, R`|B1|$18$`], R`$18x^{-4}$; $18$`,
  R`$\frac{dy}{dx} = -6x^{-3} + 1$, so $\frac{d^2y}{dx^2} = 18x^{-4}$, which is $18$ at $x = 1$.`),
Q('P12.8-10', 3, R`$y = x^2 + \dfrac1x$. Show that $\dfrac{d^2y}{dx^2} > 0$ for $x > 0$. [[3]]`,
  [R`$\frac{dy}{dx} = 2x - x^{-2}$.`, R`$\frac{d^2y}{dx^2} = 2 + 2x^{-3}$.`],
  [R`|M1|$2x - x^{-2}$`, R`|A1|$2 + \frac{2}{x^3}$`, R`|A1|Both terms positive for $x > 0$`], R`$2 + \frac{2}{x^3} > 0$`,
  R`For $x > 0$, $\frac{2}{x^3} > 0$, so the sum is more than $2$.`),
Q('P12.8-11', 3, R`$f(x) = x^{\frac52}$. Find $f''(4)$. [[2]]`,
  [R`$f'(x) = \frac52 x^{\frac32}$.`, R`$f''(x) = \frac{15}{4}x^{\frac12}$.`],
  [R`|M1|$\frac{15}{4}x^{\frac12}$`, R`|A1|$7.5$`], R`$7.5$`,
  R`$\frac{15}{4} \times 2 = 7.5$.`),
Q('P12.8-12', 4, R`$y = ax^3 + bx^2$. At $x = 1$, $\dfrac{dy}{dx} = 0$ and $\dfrac{d^2y}{dx^2} = 6$. Find $a$ and $b$. [[4]]`,
  [R`$\frac{dy}{dx} = 3ax^2 + 2bx$, $\frac{d^2y}{dx^2} = 6ax + 2b$.`, R`$3a + 2b = 0$ and $6a + 2b = 6$.`],
  [R`|M1|Both derivatives`, R`|M1|Two equations`, R`|A1|$a = 2$`, R`|A1|$b = -3$`], R`$a = 2$, $b = -3$`,
  R`Subtracting: $3a = 6$.`),
Q('P12.8-13', 4, R`$f(x) = x^4 - 6x^2$. Find the values of $x$ for which $f''(x) = 0$. [[2]]`,
  [R`$f''(x) = 12x^2 - 12$.`, R`$x^2 = 1$.`],
  [R`|M1|$12x^2 - 12$`, R`|A1|$x = \pm1$`], R`$x = \pm1$`,
  R`$f'(x) = 4x^3 - 12x$.`),
Q('P12.8-14', 4, R`$y = x^3 - 3x$. Find the set of values of $x$ for which $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$ are both negative. [[3]]`,
  [R`$\frac{dy}{dx} = 3x^2 - 3 < 0$ for $-1 < x < 1$.`, R`$\frac{d^2y}{dx^2} = 6x < 0$ for $x < 0$.`],
  [R`|M1|$-1 < x < 1$`, R`|M1|$x < 0$`, R`|A1|$-1 < x < 0$`], R`$-1 < x < 0$`,
  R`Both conditions hold together on $-1 < x < 0$.`),
Q('P12.8-15', 5, R`$f(x) = x^3 - 6x^2 + 9x + 1$.

**(a)** Find $f'(x)$ and $f''(x)$. [[2]]

**(b)** Find the value of $x$ for which $f''(x) = 0$. [[1]]

**(c)** By writing $f'(x)$ in the form $3(x - p)^2 + q$, show that the least value of $f'(x)$ is $-3$. [[3]]

**(d)** Find the equation of the tangent to $y = f(x)$ at the point where $x = 2$. [[2]]`,
  [R`$f'(x) = 3x^2 - 12x + 9$.`, R`$3(x^2 - 4x) + 9 = 3(x - 2)^2 - 3$.`],
  [R`(a)|B1|$3x^2 - 12x + 9$`, R`(a)|B1|$6x - 12$`, R`(b)|B1|$x = 2$`, R`(c)|M1|Completes the square`, R`(c)|A1|$3(x - 2)^2 - 3$`, R`(c)|A1|Least value $-3$ at $x = 2$`, R`(d)|M1|$f(2) = 3$, gradient $-3$`, R`(d)|A1|$y = -3x + 9$`],
  R`(a) $3x^2 - 12x + 9$; $6x - 12$ (b) $2$ (d) $y = -3x + 9$`,
  R`(c) $(x - 2)^2 \ge 0$, so $f'(x) \ge -3$, with equality at $x = 2$ (where $f''(x) = 0$).

(d) $f(2) = 8 - 24 + 18 + 1 = 3$, so $y - 3 = -3(x - 2)$.`)
]};

CONTENT['P12.9'] = {
notes: R`
### Stationary points
A **stationary point** is where $\frac{dy}{dx} = 0$. To classify it:
- $\frac{d^2y}{dx^2} > 0$: **minimum**
- $\frac{d^2y}{dx^2} < 0$: **maximum**
- $\frac{d^2y}{dx^2} = 0$: inconclusive. Check the sign of $\frac{dy}{dx}$ just either side.

If the gradient has the **same** sign on both sides, it's a **point of inflection**.

::: booklet
**Not in the formula booklet:** these tests.
:::

### Worked example 1
Find and classify the stationary points of $y = x^3 - 3x^2 - 9x + 5$.
1. $\frac{dy}{dx} = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0$, so $x = 3$ or $x = -1$.
2. $\frac{d^2y}{dx^2} = 6x - 6$: at $x = 3$ it's $12 > 0$ (minimum, $y = -22$); at $x = -1$ it's $-12 < 0$ (maximum, $y = 10$).

[[fig:P12.9-stat]]

### Worked example 2: when the second derivative is zero
Classify the stationary point of $y = x^4$.
- $\frac{dy}{dx} = 4x^3 = 0$ at $x = 0$, and $\frac{d^2y}{dx^2} = 12x^2 = 0$ there.
- At $x = -0.1$, $\frac{dy}{dx} < 0$; at $x = 0.1$, $\frac{dy}{dx} > 0$. So $(0, 0)$ is a **minimum**.

[[fig:P12.9-x4]]

**The trap:** concluding "$\frac{d^2y}{dx^2} = 0$, so it's a point of inflection". Zero tells you nothing; test the gradient either side.

### Watch out
- Give both coordinates of each stationary point.
`,
questions: [
Q('P12.9-1', 1, R`Find the coordinates of the stationary point of $y = x^2 - 8x + 3$. [[2]]`,
  [R`$2x - 8 = 0$.`, R`Then find $y$.`],
  [R`|M1|$2x - 8 = 0$`, R`|A1|$(4, -13)$`], R`$(4, -13)$`,
  R`$x = 4$, $y = 16 - 32 + 3 = -13$.`),
Q('P12.9-2', 1, R`Use the second derivative to show that the stationary point of $y = x^2 - 8x + 3$ is a minimum. [[1]]`,
  [R`$\frac{d^2y}{dx^2} = 2$.`, R`Positive means minimum.`],
  [R`|B1|$\frac{d^2y}{dx^2} = 2 > 0$, so minimum`], R`$\frac{d^2y}{dx^2} = 2 > 0$`,
  R`A positive second derivative means the gradient is increasing through zero.`),
Q('P12.9-3', 1, R`Find the stationary point of $y = 6x - x^2$ and state its nature. [[2]]`,
  [R`$6 - 2x = 0$.`, R`$\frac{d^2y}{dx^2} = -2$.`],
  [R`|M1|$x = 3$`, R`|A1|$(3, 9)$, maximum`], R`$(3, 9)$, maximum`,
  R`$y = 18 - 9 = 9$; $\frac{d^2y}{dx^2} < 0$.`),
Q('P12.9-4', 2, R`Find and classify the stationary points of $y = x^3 - 12x$. [[4]]`,
  [R`$3x^2 - 12 = 0$.`, R`$\frac{d^2y}{dx^2} = 6x$.`],
  [R`|M1|$3x^2 - 12 = 0$`, R`|A1|$x = \pm2$`, R`|A1|$(2, -16)$ minimum`, R`|A1|$(-2, 16)$ maximum`], R`$(2, -16)$ min; $(-2, 16)$ max`,
  R`At $x = 2$: $\frac{d^2y}{dx^2} = 12 > 0$; at $x = -2$: $-12 < 0$.`),
Q('P12.9-5', 2, R`Find and classify the stationary points of $y = 2x^3 - 3x^2$. [[4]]`,
  [R`$6x^2 - 6x = 6x(x - 1)$.`, R`$\frac{d^2y}{dx^2} = 12x - 6$.`],
  [R`|M1|$6x(x - 1) = 0$`, R`|A1|$x = 0$, $1$`, R`|A1|$(0, 0)$ maximum`, R`|A1|$(1, -1)$ minimum`], R`$(0, 0)$ max; $(1, -1)$ min`,
  R`At $x = 0$: $-6 < 0$; at $x = 1$: $6 > 0$.`),
Q('P12.9-6', 2, R`Find and classify the stationary points of $y = x + \dfrac9x$. [[4]]`,
  [R`$1 - 9x^{-2} = 0$.`, R`$\frac{d^2y}{dx^2} = 18x^{-3}$.`],
  [R`|M1|$1 - \frac{9}{x^2} = 0$`, R`|A1|$x = \pm3$`, R`|A1|$(3, 6)$ minimum`, R`|A1|$(-3, -6)$ maximum`], R`$(3, 6)$ min; $(-3, -6)$ max`,
  R`At $x = 3$: $\frac{18}{27} > 0$; at $x = -3$: $< 0$. (The maximum is lower than the minimum because the branches are separate.)`),
Q('P12.9-7', 2, R`Find and classify the stationary points of $y = x^3 + 3x^2 - 24x$. [[4]]`,
  [R`$3x^2 + 6x - 24 = 3(x + 4)(x - 2)$.`, R`$\frac{d^2y}{dx^2} = 6x + 6$.`],
  [R`|M1|$3(x + 4)(x - 2) = 0$`, R`|A1|$x = 2$, $-4$`, R`|A1|$(2, -28)$ minimum`, R`|A1|$(-4, 80)$ maximum`], R`$(2, -28)$ min; $(-4, 80)$ max`,
  R`$y(2) = 8 + 12 - 48 = -28$; $y(-4) = -64 + 48 + 96 = 80$.`),
Q('P12.9-8', 3, R`Find and classify the stationary points of $y = x^4 - 2x^2$. [[5]]`,
  [R`$4x^3 - 4x = 4x(x - 1)(x + 1)$.`, R`$\frac{d^2y}{dx^2} = 12x^2 - 4$.`],
  [R`|M1|$4x(x^2 - 1) = 0$`, R`|A1|$x = 0$, $\pm1$`, R`|M1|Second derivative test`, R`|A1|$(0, 0)$ maximum`, R`|A1|$(1, -1)$ and $(-1, -1)$ minima`], R`$(0, 0)$ max; $(\pm1, -1)$ min`,
  R`At $x = 0$: $-4 < 0$; at $x = \pm1$: $8 > 0$.`),
Q('P12.9-9', 3, R`Find the stationary point of $y = 4\sqrt x - x$, $x > 0$, and show that it is a maximum. [[4]]`,
  [R`$2x^{-\frac12} - 1 = 0$.`, R`$\frac{d^2y}{dx^2} = -x^{-\frac32}$.`],
  [R`|M1|$2x^{-\frac12} - 1 = 0$`, R`|A1|$x = 4$`, R`|A1|$(4, 4)$`, R`|A1|$\frac{d^2y}{dx^2} = -\frac18 < 0$, so maximum`], R`$(4, 4)$, maximum`,
  R`$\sqrt x = 2$; $y = 8 - 4 = 4$.`),
Q('P12.9-10', 3, R`Show that $y = x^3$ has a stationary point at the origin, and determine its nature. [[3]]`,
  [R`$3x^2 = 0$ at $x = 0$.`, R`$\frac{d^2y}{dx^2} = 0$ there, so check the gradient either side.`],
  [R`|B1|$\frac{dy}{dx} = 0$ at $x = 0$`, R`|M1|$\frac{dy}{dx} > 0$ either side`, R`|A1|Point of inflection`], R`Point of inflection`,
  R`$3x^2 > 0$ for $x \ne 0$: the gradient is positive on both sides, so it's not a turning point.`),
Q('P12.9-11', 3, R`The curve $y = x^3 + ax$ has a stationary point where $x = 2$. Find $a$. [[2]]`,
  [R`$3x^2 + a = 0$ at $x = 2$.`, R`$12 + a = 0$.`],
  [R`|M1|$12 + a = 0$`, R`|A1|$a = -12$`], R`$a = -12$`,
  R`$\frac{dy}{dx} = 3x^2 + a$ must be $0$ at $x = 2$.`),
Q('P12.9-12', 4, R`Find and classify the stationary points of $y = x^4 - 4x^3$. [[5]]`,
  [R`$4x^3 - 12x^2 = 4x^2(x - 3)$.`, R`At $x = 0$ the second derivative is $0$: check either side.`],
  [R`|M1|$4x^2(x - 3) = 0$`, R`|A1|$x = 0$, $3$`, R`|A1|$(3, -27)$ minimum`, R`|M1|Gradient negative both sides of $x = 0$`, R`|A1|$(0, 0)$ point of inflection`], R`$(3, -27)$ min; $(0, 0)$ inflection`,
  R`$\frac{d^2y}{dx^2} = 12x^2 - 24x$: $36 > 0$ at $x = 3$, $0$ at $x = 0$. Near $x = 0$, $4x^2(x - 3) < 0$ on both sides.`),
Q('P12.9-13', 4, R`The curve $y = ax^2 + bx + c$ has a maximum at $(2, 7)$ and passes through $(0, 3)$. Find $a$, $b$ and $c$. [[4]]`,
  [R`$c = 3$.`, R`$4a + b = 0$ and $4a + 2b + 3 = 7$.`],
  [R`|B1|$c = 3$`, R`|M1|$\frac{dy}{dx} = 0$ at $x = 2$: $4a + b = 0$`, R`|M1|$4a + 2b = 4$`, R`|A1|$a = -1$, $b = 4$`], R`$a = -1$, $b = 4$, $c = 3$`,
  R`Subtracting: $b = 4$, then $a = -1$. It is a maximum since $a < 0$.`),
Q('P12.9-14', 4, R`Find the minimum value of $x^2 + \dfrac{16}{x}$ for $x > 0$, justifying that it is a minimum. [[4]]`,
  [R`$2x - 16x^{-2} = 0$.`, R`$x^3 = 8$.`],
  [R`|M1|$2x - \frac{16}{x^2} = 0$`, R`|A1|$x = 2$`, R`|A1|Minimum value $12$`, R`|B1|$\frac{d^2y}{dx^2} = 2 + \frac{32}{x^3} = 6 > 0$`], R`$12$`,
  R`$\frac{dy}{dx} = 2x - \frac{16}{x^2} = 0$ gives $x^3 = 8$, so $x = 2$ and the value is $4 + 8 = 12$. $\frac{d^2y}{dx^2} = 2 + \frac{32}{x^3} = 6 > 0$, so it is a minimum.`),
Q('P12.9-15', 5, R`$f(x) = x^3 - 6x^2 + 9x - 4$.

**(a)** Find the coordinates of the stationary points of $y = f(x)$. [[4]]

**(b)** Determine their nature. [[2]]

**(c)** Hence state the number of distinct real roots of $f(x) = 0$, explaining your answer, and find them. [[2]]`,
  [R`$f'(x) = 3(x - 1)(x - 3)$.`, R`The maximum value is $0$.`],
  [R`(a)|M1|$3x^2 - 12x + 9 = 0$`, R`(a)|A1|$x = 1$, $3$`, R`(a)|A1|$(1, 0)$`, R`(a)|A1|$(3, -4)$`, R`(b)|B1|$(1, 0)$ maximum ($f''(1) = -6$)`, R`(b)|B1|$(3, -4)$ minimum ($f''(3) = 6$)`, R`(c)|M1|The curve touches the axis at the maximum and crosses once more`, R`(c)|A1|Two: $x = 1$ and $x = 4$`],
  R`(a) $(1, 0)$, $(3, -4)$ (b) max, min (c) two roots: $1$ and $4$`,
  R`(c) The maximum is on the $x$-axis, so the curve touches it at $x = 1$, falls to $-4$ and rises again to cross once more. In fact $f(x) = (x - 1)^2(x - 4)$.`)
]};

CONTENT['P12.10'] = {
notes: R`
### From $y = f(x)$ to $y = f'(x)$
| On $y = f(x)$ | On $y = f'(x)$ |
|---|---|
| stationary point | crosses (or touches) the $x$-axis |
| increasing | above the $x$-axis |
| decreasing | below the $x$-axis |
| vertical asymptote | vertical asymptote |
| horizontal asymptote | $f' \to 0$ |

[[fig:P12.10-pair]]

::: booklet
**Not in the formula booklet:** these links.
:::

### Worked example 1
$f$ is a positive cubic with a maximum at $x = -1$ and a minimum at $x = 3$. Describe $y = f'(x)$.
- $f'(x) = 0$ at $x = -1$ and $3$; positive outside, negative between: a $\cup$-shaped parabola crossing at $-1$ and $3$.

### Worked example 2: up and down shifts
Explain why $y = x^2 + 5$ and $y = x^2 - 2$ have the same gradient function.
- Moving a curve up or down doesn't change its steepness anywhere, so both have $f'(x) = 2x$.

**The trap:** copying the shape of $f$ for $f'$. The gradient function shows **steepness**, not height: a maximum on $f$ becomes a zero on $f'$.

### Watch out
- A point of inflection on $f$ where the gradient is zero becomes a point where $f'$ **touches** the axis.
`,
questions: [
Q('P12.10-1', 1, R`The only stationary point of $y = f(x)$ is a maximum at $x = 2$. Write down $f'(2)$. [[1]]`,
  [R`What is the gradient at a maximum?`, R`It's a stationary point.`],
  [R`|B1|$0$`], R`$0$`,
  R`At any stationary point the gradient is zero.`),
Q('P12.10-2', 1, R`$f$ is increasing for $x > 1$. What can you say about the graph of $y = f'(x)$ for $x > 1$? [[1]]`,
  [R`Increasing means positive gradient.`, R`Where is $f'$ positive?`],
  [R`|B1|It's above the $x$-axis`], R`Above the $x$-axis`,
  R`$f'(x) > 0$ wherever $f$ increases.`),
Q('P12.10-3', 1, R`Describe the graph of the gradient function of $y = 3x - 1$. [[1]]`,
  [R`The gradient is the same everywhere.`, R`$f'(x) = 3$.`],
  [R`|B1|A horizontal line $y = 3$`], R`The line $y = 3$`,
  R`A straight line has constant gradient.`),
Q('P12.10-4', 2, R`Sketch the gradient function of $f(x) = x^2$. [[2]]`,
  [R`$f$ decreases for $x < 0$ and increases for $x > 0$.`, R`$f'(x) = 2x$.`],
  [R`|B1|Straight line through the origin`, R`|B1|Gradient $2$ (negative for $x < 0$, positive for $x > 0$)`], R`The line $y = 2x$`,
  R`The steepness grows steadily from negative to positive, crossing zero at the vertex.`, { solFig: FIGS['P12.10-4'] }),
Q('P12.10-5', 2, R`$f(x) = (x - 1)(x - 5)$. Find where the graph of $y = f'(x)$ crosses the $x$-axis, and sketch it. [[2]]`,
  [R`$f$ has its vertex halfway between the roots.`, R`$f'(x) = 2x - 6$.`],
  [R`|B1|$x = 3$`, R`|B1|Straight line with positive gradient through $(3, 0)$`], R`At $x = 3$; $y = 2x - 6$`,
  R`$f(x) = x^2 - 6x + 5$, so $f'(x) = 2x - 6$.`, { solFig: FIGS['P12.10-5'] }),
Q('P12.10-6', 2, R`$y = f(x)$ is a positive cubic with a maximum at $(-1, 4)$ and a minimum at $(3, -2)$. Sketch $y = f'(x)$. [[3]]`,
  [R`$f'$ is zero at $x = -1$ and $x = 3$.`, R`$f$ increases, then decreases, then increases.`],
  [R`|B1|$\cup$-shaped curve`, R`|B1|Crosses the $x$-axis at $-1$ and $3$`, R`|B1|Negative between them`], R`$\cup$-shaped, crossing at $-1$ and $3$`,
  R`The heights $4$ and $-2$ don't appear on $f'$; only the $x$-coordinates of the turning points matter.`, { solFig: FIGS['P12.10-pair'] }),
Q('P12.10-7', 2, R`Sketch the gradient function of $f(x) = x^3$. [[2]]`,
  [R`$f'(x) = 3x^2$.`, R`The gradient is zero only at the origin.`],
  [R`|B1|$\cup$-shape`, R`|B1|Touches the $x$-axis at the origin`], R`$y = 3x^2$, touching at $O$`,
  R`$x^3$ is increasing everywhere, so $f'$ is never negative.`, { solFig: FIGS['P12.10-7'] }),
Q('P12.10-8', 3, R`Sketch the gradient function of $f(x) = \dfrac1x$, giving its asymptotes. [[3]]`,
  [R`$f'(x) = -x^{-2}$.`, R`It's always negative.`],
  [R`|B1|Both branches below the $x$-axis`, R`|B1|Asymptote $x = 0$`, R`|B1|Asymptote $y = 0$`], R`$y = -\frac{1}{x^2}$; asymptotes $x = 0$, $y = 0$`,
  R`$\frac1x$ decreases on both branches, more and more gently as $|x|$ grows.`, { solFig: FIGS['P12.10-8'] }),
Q('P12.10-9', 3, R`Explain why $y = x^2 + 5$ and $y = x^2 - 2$ have the same gradient function. [[2]]`,
  [R`Differentiate both.`, R`What does a vertical translation do to steepness?`],
  [R`|B1|Both give $2x$ (constants differentiate to $0$)`, R`|B1|A vertical shift doesn't change the gradient at any $x$`], R`Both are $2x$`,
  R`One curve is the other moved up $7$; the steepness at each $x$ is unchanged.`),
Q('P12.10-10', 3, R`$f'(x) = (x + 1)(x - 2)$. Find the $x$-coordinates of the stationary points of $f$ and state their nature. [[3]]`,
  [R`$f'(x) = 0$ at $-1$ and $2$.`, R`Look at how the sign of $f'$ changes.`],
  [R`|B1|$x = -1$, $2$`, R`|B1|$x = -1$: $f'$ goes $+$ to $-$, maximum`, R`|B1|$x = 2$: $f'$ goes $-$ to $+$, minimum`], R`Maximum at $x = -1$, minimum at $x = 2$`,
  R`$f'$ is a positive quadratic: positive, negative, positive.`),
Q('P12.10-11', 3, R`$f'(x)$ is positive for $x < 1$ and negative for $x > 1$. Describe the graph of $y = f(x)$ near $x = 1$. [[2]]`,
  [R`Increasing then decreasing.`, R`What happens at $x = 1$?`],
  [R`|B1|$f$ increases then decreases`, R`|B1|Maximum at $x = 1$`], R`A maximum at $x = 1$`,
  R`The gradient changes from positive to negative, so the curve peaks at $x = 1$.`),
Q('P12.10-12', 4, R`A quartic $y = f(x)$ has minima at $x = -2$ and $x = 2$ and a maximum at $x = 0$. Sketch $y = f'(x)$. [[3]]`,
  [R`$f'$ is a cubic with roots $-2$, $0$, $2$.`, R`$f$ decreases for $x < -2$, so $f'$ starts negative.`],
  [R`|B1|Cubic shape`, R`|B1|Crosses at $-2$, $0$, $2$`, R`|B1|Positive cubic (negative for $x < -2$)`], R`A positive cubic crossing at $-2$, $0$, $2$`,
  R`$f$: down, up, down, up, so $f'$: negative, positive, negative, positive.`, { solFig: FIGS['P12.10-12'] }),
Q('P12.10-13', 4, R`$f'(x) = x^2(x - 3)$. Find the $x$-coordinates of the stationary points of $f$ and determine their nature. [[3]]`,
  [R`$f'(x) = 0$ at $x = 0$ and $x = 3$.`, R`Near $0$, $x^2 \ge 0$ and $x - 3 < 0$.`],
  [R`|B1|$x = 0$, $3$`, R`|B1|$x = 0$: $f'$ negative on both sides, point of inflection`, R`|B1|$x = 3$: $f'$ goes $-$ to $+$, minimum`], R`Inflection at $x = 0$; minimum at $x = 3$`,
  R`$f'$ touches the axis at $0$ without changing sign.`),
Q('P12.10-14', 4, R`$f(x) = x + \dfrac1x$. Sketch $y = f'(x)$, giving its asymptotes and where it crosses the $x$-axis. [[3]]`,
  [R`$f'(x) = 1 - x^{-2}$.`, R`$f'(x) = 0$ at $x = \pm1$.`],
  [R`|B1|$f'(x) = 1 - \frac{1}{x^2}$`, R`|B1|Asymptotes $x = 0$ and $y = 1$`, R`|B1|Crosses at $(\pm1, 0)$`], R`Crosses at $\pm1$; asymptotes $x = 0$, $y = 1$`,
  R`As $|x|$ grows, $\frac{1}{x^2} \to 0$ and $f' \to 1$; near $0$, $f' \to -\infty$.`, { solFig: FIGS['P12.10-14'] }),
Q('P12.10-15', 5, R`$f(x) = x^3 - 3x^2$.

**(a)** Find $f'(x)$. [[1]]

**(b)** Sketch $y = f(x)$ and $y = f'(x)$ on the same axes, showing the turning points of each. [[4]]

**(c)** Explain, using $f'$, why $f$ has a minimum at $x = 2$. [[1]]

**(d)** Find the least value of $f'(x)$. [[2]]`,
  [R`$f'(x) = 3x^2 - 6x = 3x(x - 2)$.`, R`$f'(x) = 3(x - 1)^2 - 3$.`],
  [R`(a)|B1|$3x^2 - 6x$`, R`(b)|B1|$f$: max $(0, 0)$, min $(2, -4)$`, R`(b)|B1|$f$ crosses at $(3, 0)$`, R`(b)|B1|$f'$: crosses at $0$ and $2$`, R`(b)|B1|$f'$: minimum $(1, -3)$`, R`(c)|B1|$f'$ changes from negative to positive at $x = 2$`, R`(d)|M1|Completes the square or uses $f''(x) = 0$`, R`(d)|A1|$-3$`],
  R`(a) $3x^2 - 6x$ (d) $-3$`,
  R`(d) $f'(x) = 3(x - 1)^2 - 3 \ge -3$. On $f$, $x = 1$ is where the curve is steepest going down.`, { solFig: FIGS['P12.10-15'] })
]};

CONTENT['P12.11'] = {
notes: R`
### Rates of change
$\frac{dy}{dx}$ is the rate of change of $y$ with respect to $x$. In context: velocity $= \frac{ds}{dt}$, marginal cost $= \frac{dC}{dx}$, and so on.

### Optimisation
To find a maximum or minimum of a quantity:
1. Write it as a function of **one** variable (use any constraint to eliminate the others).
2. Differentiate and set the derivative to $0$.
3. Check with the second derivative, and that the answer makes sense.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
The volume of a sphere is $V = \frac43\pi r^3$. Find $\frac{dV}{dr}$ when $r = 3$ cm.
- $\frac{dV}{dr} = 4\pi r^2 = 36\pi$ cm³ per cm.

### Worked example 2: a box
Squares of side $x$ cm are cut from the corners of a $12$ cm square card, and the sides are folded up into an open box.

[[fig:P12.11-box]]

1. $V = x(12 - 2x)^2 = 144x - 48x^2 + 4x^3$.
2. $\frac{dV}{dx} = 144 - 96x + 12x^2 = 12(x - 2)(x - 6) = 0$, so $x = 2$ or $6$.
3. $x = 6$ uses the whole card ($V = 0$). At $x = 2$: $\frac{d^2V}{dx^2} = -96 + 48 = -48 < 0$, a maximum, $V = 2 \times 8^2 = 128$ cm³.

**The trap:** giving $x = 6$ as an answer without checking it. Reject values that don't make physical sense.

### Watch out
- Give units, and answer the question asked (the maximum **volume**, not just $x$).
`,
questions: [
Q('P12.11-1', 1, R`The area of a circle is $A = \pi r^2$. Find $\dfrac{dA}{dr}$. [[1]]`,
  [R`Differentiate with respect to $r$.`, R`$\pi$ is a constant.`],
  [R`|B1|$2\pi r$`], R`$2\pi r$`,
  R`$\frac{dA}{dr} = 2\pi r$ (the circumference).`),
Q('P12.11-2', 1, R`A stone falls $s = 5t^2$ metres in $t$ seconds. Find its speed when $t = 3$. [[2]]`,
  [R`Speed $= \frac{ds}{dt}$.`, R`$10t$.`],
  [R`|M1|$\frac{ds}{dt} = 10t$`, R`|A1|$30$ m s⁻¹`], R`$30$ m s⁻¹`,
  R`Speed is $\frac{ds}{dt} = 10t$, so at $t = 3$ it is $30$ m s⁻¹.`),
Q('P12.11-3', 1, R`The cost of making $x$ items is $C = 0.5x^2 + 20x$. Find $\dfrac{dC}{dx}$ when $x = 10$. [[1]]`,
  [R`$\frac{dC}{dx} = x + 20$.`, R`Substitute.`],
  [R`|B1|$30$`], R`$30$ (pounds per item)`,
  R`$10 + 20 = 30$: each extra item costs about £$30$ at this level.`),
Q('P12.11-4', 2, R`A ball's height is $h = 20t - 5t^2$ metres after $t$ seconds. Find its velocity at $t = 1$ and its maximum height. [[3]]`,
  [R`$\frac{dh}{dt} = 20 - 10t$.`, R`Maximum when $\frac{dh}{dt} = 0$.`],
  [R`|B1|$10$ m s⁻¹`, R`|M1|$20 - 10t = 0$, $t = 2$`, R`|A1|$20$ m`], R`$10$ m s⁻¹; $20$ m`,
  R`$h(2) = 40 - 20 = 20$.`),
Q('P12.11-5', 2, R`A rectangle has perimeter $40$ cm. Find the dimensions that give the largest area, and that area. [[3]]`,
  [R`Sides $x$ and $20 - x$: $A = 20x - x^2$.`, R`$\frac{dA}{dx} = 20 - 2x$.`],
  [R`|M1|$A = x(20 - x)$`, R`|M1|$20 - 2x = 0$`, R`|A1|$10$ cm by $10$ cm; $100$ cm²`], R`$10 \times 10$; $100$ cm²`,
  R`The best rectangle is a square.`),
Q('P12.11-6', 2, R`A cube has side $x$ cm. Find the rate of change of its volume with respect to $x$ when $x = 4$. [[2]]`,
  [R`$V = x^3$.`, R`$\frac{dV}{dx} = 3x^2$.`],
  [R`|M1|$3x^2$`, R`|A1|$48$ cm³ per cm`], R`$48$`,
  R`$V = x^3$, so $\frac{dV}{dx} = 3x^2 = 48$ cm³ per cm when $x = 4$.`),
Q('P12.11-7', 2, R`A firm's profit is $P = 40x - x^2 - 100$, where $x$ is the number of items sold. Find the maximum profit. [[3]]`,
  [R`$\frac{dP}{dx} = 40 - 2x$.`, R`$x = 20$.`],
  [R`|M1|$40 - 2x = 0$`, R`|A1|$x = 20$`, R`|A1|$300$`], R`$300$ at $x = 20$`,
  R`$800 - 400 - 100 = 300$. $\frac{d^2P}{dx^2} = -2 < 0$ confirms a maximum.`),
Q('P12.11-8', 3, R`Squares of side $x$ cm are cut from each corner of a $12$ cm square card, and the sides folded up to make an open box. Find the maximum volume. [[5]]`,
  [R`$V = x(12 - 2x)^2$.`, R`$\frac{dV}{dx} = 12(x - 2)(x - 6)$.`],
  [R`|M1|$V = x(12 - 2x)^2$`, R`|M1|Expands and differentiates`, R`|A1|$x = 2$ or $6$`, R`|M1|Rejects $x = 6$ / second derivative test`, R`|A1|$128$ cm³`], R`$128$ cm³`,
  R`$V = 144x - 48x^2 + 4x^3$. At $x = 2$, $\frac{d^2V}{dx^2} = -48 < 0$; $V = 2 \times 64 = 128$.`, { fig: FIGS['P12.11-box'] }),
Q('P12.11-9', 3, R`A rectangular garden is fenced on three sides using $60$ m of fencing; the fourth side is a wall. Find the largest possible area. [[4]]`,
  [R`Two sides of $x$, one of $60 - 2x$.`, R`$A = 60x - 2x^2$.`],
  [R`|M1|$A = x(60 - 2x)$`, R`|M1|$60 - 4x = 0$`, R`|A1|$x = 15$`, R`|A1|$450$ m²`], R`$450$ m²`,
  R`The side parallel to the wall is $30$ m; $15 \times 30 = 450$.`),
Q('P12.11-10', 3, R`The temperature of a cooling liquid is $T = 80 - 4t + 0.1t^2$ °C for $0 \le t \le 20$ minutes. Find $\dfrac{dT}{dt}$ when $t = 10$ and interpret it. [[2]]`,
  [R`$\frac{dT}{dt} = -4 + 0.2t$.`, R`At $t = 10$: $-2$.`],
  [R`|B1|$-2$`, R`|B1|Falling at $2$ °C per minute`], R`$-2$ °C/min`,
  R`The negative sign means the temperature is decreasing.`),
Q('P12.11-11', 3, R`The fuel cost per hour of a boat at speed $v$ is modelled by $C = 4v + \dfrac{400}{v}$. Find the speed that minimises $C$ and the minimum cost. [[4]]`,
  [R`$\frac{dC}{dv} = 4 - 400v^{-2}$.`, R`$v^2 = 100$.`],
  [R`|M1|$4 - \frac{400}{v^2} = 0$`, R`|A1|$v = 10$`, R`|A1|$C = 80$`, R`|B1|$\frac{d^2C}{dv^2} = \frac{800}{v^3} > 0$, minimum`], R`$v = 10$; $80$`,
  R`$\frac{dC}{dv} = 4 - \frac{400}{v^2} = 0$ gives $v^2 = 100$, so $v = 10$ and $C = 40 + 40 = 80$. $\frac{d^2C}{dv^2} = \frac{800}{v^3} > 0$, so this is a minimum.`),
Q('P12.11-12', 4, R`A closed cylinder has volume $250\pi$ cm³. Show that its surface area is $S = 2\pi r^2 + \dfrac{500\pi}{r}$, and find the minimum surface area. [[5]]`,
  [R`$\pi r^2 h = 250\pi$, so $h = \frac{250}{r^2}$.`, R`$\frac{dS}{dr} = 4\pi r - 500\pi r^{-2}$.`],
  [R`|M1|$h = \frac{250}{r^2}$`, R`|A1|$S = 2\pi r^2 + \frac{500\pi}{r}$`, R`|M1|$4\pi r - \frac{500\pi}{r^2} = 0$`, R`|A1|$r = 5$`, R`|A1|$150\pi$ cm²`], R`$150\pi$ cm²`,
  R`$r^3 = 125$; $S = 50\pi + 100\pi$. $\frac{d^2S}{dr^2} = 4\pi + \frac{1000\pi}{r^3} > 0$, so a minimum.`),
Q('P12.11-13', 4, R`An open box has a square base of side $x$ cm and volume $32$ cm³. Find the dimensions that minimise the surface area. [[5]]`,
  [R`$x^2h = 32$, so $h = \frac{32}{x^2}$.`, R`$S = x^2 + 4xh = x^2 + \frac{128}{x}$.`],
  [R`|M1|$S = x^2 + \frac{128}{x}$`, R`|M1|$2x - \frac{128}{x^2} = 0$`, R`|A1|$x = 4$`, R`|A1|$h = 2$`, R`|B1|Second derivative positive, so minimum ($S = 48$)`], R`Base $4 \times 4$, height $2$ ($S = 48$ cm²)`,
  R`$x^3 = 64$; $S = 16 + 32 = 48$.`),
Q('P12.11-14', 4, R`A particle moves so that $s = t^3 - 6t^2 + 9t$ metres after $t$ seconds. Find when it is momentarily at rest, and its displacement then. [[4]]`,
  [R`At rest: $\frac{ds}{dt} = 0$.`, R`$3t^2 - 12t + 9 = 3(t - 1)(t - 3)$.`],
  [R`|M1|$\frac{ds}{dt} = 3t^2 - 12t + 9$`, R`|A1|$t = 1$ and $t = 3$`, R`|A1|$s = 4$ m at $t = 1$`, R`|A1|$s = 0$ m at $t = 3$`], R`$t = 1$ ($4$ m) and $t = 3$ ($0$ m)`,
  R`$s(1) = 1 - 6 + 9 = 4$; $s(3) = 27 - 54 + 27 = 0$.`),
Q('P12.11-15', 5, R`A rectangle is drawn under the curve $y = 12 - x^2$ with its base on the $x$-axis and its top corners on the curve at $(\pm x, 12 - x^2)$.

**(a)** Show that the area is $A = 24x - 2x^3$. [[2]]

**(b)** Find the value of $x$ that maximises $A$. [[3]]

**(c)** Find the maximum area, justifying that it is a maximum. [[3]]`,
  [R`Width $2x$, height $12 - x^2$.`, R`$\frac{dA}{dx} = 24 - 6x^2$.`],
  [R`(a)|M1|$2x(12 - x^2)$`, R`(a)|A1|$24x - 2x^3$`, R`(b)|M1|$24 - 6x^2 = 0$`, R`(b)|M1|$x^2 = 4$`, R`(b)|A1|$x = 2$ ($x > 0$)`, R`(c)|M1|$\frac{d^2A}{dx^2} = -12x$`, R`(c)|A1|$-24 < 0$, maximum`, R`(c)|A1|$A = 32$`],
  R`(b) $x = 2$ (c) $32$`,
  R`(c) $A = 48 - 16 = 32$: a $4$ by $8$ rectangle.`)
]};
