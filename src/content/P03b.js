/* Pure Mathematics Year 1 · Chapter 3 Equations and inequalities (sections 3.5 to 3.7) */
FIGS['P3.5-sketch'] = Fig.graph({ label: 'y = x squared minus x minus 6, below the x-axis between x = -2 and x = 3', fns: [{ f: x => x * x - x - 6, label: 'y = x² − x − 6', lx: 4.4, ly: 7 }], x0: -3.5, x1: 4.5, y0: -7, y1: 8,
  regions: [{ lo: x => x * x - x - 6, hi: () => 0, from: -2, to: 3 }], xticks: [[-2, '−2'], [3, '3']], yticks: [[-6, '−6']], texts: [{ x: 0.5, y: -2.5, label: 'y < 0 here', col: 'var(--accent)' }] });
FIGS['P3.6-above'] = Fig.graph({ label: 'Curve y = x squared and line y = x + 2: the curve is below the line between x = -1 and x = 2', fns: [{ f: x => x * x, label: 'y = x²', lx: 3, ly: 8.6 }, { f: x => x + 2, label: 'y = x + 2', lx: 3, ly: 5.6 }],
  x0: -2.5, x1: 3, y0: -1, y1: 9, regions: [{ lo: x => x * x, hi: x => x + 2, from: -1, to: 2 }], xticks: [[-1, '−1'], [2, '2']], points: [{ x: -1, y: 1 }, { x: 2, y: 4 }] });
FIGS['P3.7-region'] = Fig.graph({ label: 'The region satisfying y ≥ x squared minus 4 and y ≤ 2x + 4, shaded', fns: [{ f: x => x * x - 4, label: 'y = x² − 4', lx: 4.6, ly: 14 }, { f: x => 2 * x + 4, label: 'y = 2x + 4', lx: 1.8, ly: 11.5 }],
  x0: -3.5, x1: 4.8, y0: -5, y1: 15, regions: [{ lo: x => x * x - 4, hi: x => 2 * x + 4, from: -2, to: 4 }], xticks: [[-2, '−2'], [4, '4']], yticks: [[12, '12'], [-4, '−4']], texts: [{ x: 1.2, y: 2.5, label: 'R', col: 'var(--accent)', size: 15 }] });

CONTENT['P3.5'] = {
notes: R`
### The method
1. Rearrange so one side is $0$: e.g. $x^2 - x - 6 < 0$.
2. Find the **critical values** by solving $= 0$: $x = -2$ and $x = 3$.
3. **Sketch** the graph and read off where it is above or below the axis.

[[fig:P3.5-sketch]]

For a "U" shape ($a > 0$):
- $f(x) < 0$ **between** the roots: $-2 < x < 3$.
- $f(x) > 0$ **outside** the roots: $x < -2$ or $x > 3$.

::: booklet
**Not in the formula booklet:** this method. Always sketch, and say which part you want.
:::

### Worked example 1
Solve $x^2 - 5x \ge 0$: $x(x - 5) \ge 0$, critical values $0$ and $5$, so $x \le 0$ or $x \ge 5$.

### Worked example 2: don't divide by $x$
Solve $x^2 < 4x$.
- $x^2 - 4x < 0$, so $x(x - 4) < 0$: $0 < x < 4$.

**The trap:** dividing by $x$ to get $x < 4$. That's wrong for negative $x$ (it would reverse the sign), and it includes values like $x = -1$, where $1 < -4$ is false.

### Unknown constants
"Find the values of $k$ for which there are no real roots" often leads to a quadratic inequality in $k$, such as $k^2 - 4k - 12 < 0$, giving $-2 < k < 6$.

### Watch out
- Two separate regions must be written as two inequalities ("or"), not as $3 < x < -2$.
- Set notation: $\{x : x < -2\} \cup \{x : x > 3\}$.
`,
questions: [
Q('P3.5-1', 1, R`Solve $(x - 1)(x - 4) < 0$. [[2]]`,
  [R`Critical values $1$ and $4$.`, R`A "U" shape is below the axis between its roots.`],
  [R`|B1|Critical values $1$, $4$`, R`|B1|$1 < x < 4$`], R`$1 < x < 4$`,
  R`The graph is U-shaped with roots $1$ and $4$, below the axis between them: $1 < x < 4$.`),
Q('P3.5-2', 1, R`Solve $x^2 - 9 > 0$. [[2]]`,
  [R`Critical values $\pm3$.`, R`Above the axis outside the roots.`],
  [R`|B1|$\pm3$`, R`|B1|$x < -3$ or $x > 3$`], R`$x < -3$ or $x > 3$`,
  R`$x^2 - 9 = 0$ at $x = \pm3$. The U-shape is positive outside: $x < -3$ or $x > 3$.`),
Q('P3.5-3', 1, R`Solve $x^2 - 5x \ge 0$. [[2]]`,
  [R`$x(x - 5) \ge 0$.`, R`Outside the roots, including them.`],
  [R`|B1|Critical values $0$, $5$`, R`|B1|$x \le 0$ or $x \ge 5$`], R`$x \le 0$ or $x \ge 5$`,
  R`$x(x - 5) \ge 0$ outside and at the roots: $x \le 0$ or $x \ge 5$.`),
Q('P3.5-4', 2, R`Solve $x^2 - x - 6 < 0$. [[3]]`,
  [R`Factorise: $(x - 3)(x + 2)$.`, R`Between the roots.`],
  [R`|M1|$(x - 3)(x + 2)$`, R`|A1|Critical values $-2$, $3$`, R`|A1|$-2 < x < 3$`], R`$-2 < x < 3$`,
  R`$(x - 3)(x + 2) < 0$: between the roots, $-2 < x < 3$.`),
Q('P3.5-5', 2, R`Solve $2x^2 + 5x - 3 \ge 0$. [[3]]`,
  [R`$(2x - 1)(x + 3)$.`, R`Outside the roots.`],
  [R`|M1|$(2x - 1)(x + 3)$`, R`|A1|$\frac12$, $-3$`, R`|A1|$x \le -3$ or $x \ge \frac12$`], R`$x \le -3$ or $x \ge \frac12$`,
  R`$(2x - 1)(x + 3) \ge 0$: $x \le -3$ or $x \ge \frac12$.`),
Q('P3.5-6', 2, R`Solve $x^2 < 4x$. [[3]]`,
  [R`Don't divide by $x$. Rearrange: $x^2 - 4x < 0$.`, R`$x(x - 4) < 0$.`],
  [R`|M1|$x^2 - 4x < 0$`, R`|A1|Critical values $0$, $4$`, R`|A1|$0 < x < 4$`], R`$0 < x < 4$`,
  R`$x(x - 4) < 0$, so $0 < x < 4$.`),
Q('P3.5-7', 2, R`Solve $12 + x - x^2 > 0$. [[3]]`,
  [R`Multiply by $-1$ and reverse: $x^2 - x - 12 < 0$.`, R`$(x - 4)(x + 3) < 0$.`],
  [R`|M1|$x^2 - x - 12 < 0$ or sketches the n-shape`, R`|A1|Critical values $4$, $-3$`, R`|A1|$-3 < x < 4$`], R`$-3 < x < 4$`,
  R`$x^2 - x - 12 < 0$, $(x - 4)(x + 3) < 0$: $-3 < x < 4$.`),
Q('P3.5-8', 3, R`Find the set of values of $k$ for which $x^2 + kx + 9 = 0$ has two distinct real roots. [[3]]`,
  [R`$k^2 - 36 > 0$.`, R`Outside $\pm6$.`],
  [R`|M1|$k^2 - 36 > 0$`, R`|A1|Critical values $\pm6$`, R`|A1|$k < -6$ or $k > 6$`], R`$k < -6$ or $k > 6$`,
  R`$k^2 - 36 > 0$: $k < -6$ or $k > 6$.`),
Q('P3.5-9', 3, R`Find the values of $p$ for which $px^2 + 4x + (p - 3) = 0$ has no real roots. [[4]]`,
  [R`$16 - 4p(p - 3) < 0$.`, R`$p^2 - 3p - 4 > 0$.`],
  [R`|M1|$16 - 4p(p - 3) < 0$`, R`|A1|$p^2 - 3p - 4 > 0$`, R`|M1|Critical values $4$, $-1$`, R`|A1|$p < -1$ or $p > 4$`], R`$p < -1$ or $p > 4$`,
  R`$16 - 4p^2 + 12p < 0$, so $p^2 - 3p - 4 > 0$, $(p - 4)(p + 1) > 0$: $p < -1$ or $p > 4$.`),
Q('P3.5-10', 3, R`Find the set of values of $x$ for which $x^2 - 6x + 5 < 0$ and $3x - 5 > 4$. [[4]]`,
  [R`First: $1 < x < 5$. Second: $x > 3$.`, R`The overlap.`],
  [R`|M1|Solves the quadratic inequality`, R`|A1|$1 < x < 5$`, R`|B1|$x > 3$`, R`|A1|$3 < x < 5$`], R`$3 < x < 5$`,
  R`$(x - 1)(x - 5) < 0$ gives $1 < x < 5$; $3x > 9$ gives $x > 3$. Both: $3 < x < 5$.`),
Q('P3.5-11', 3, R`Solve $(x + 2)^2 > 2x + 7$, giving your answer in set notation. [[4]]`,
  [R`Expand and rearrange: $x^2 + 2x - 3 > 0$.`, R`$(x + 3)(x - 1) > 0$.`],
  [R`|M1|$x^2 + 2x - 3 > 0$`, R`|A1|Critical values $-3$, $1$`, R`|M1|Outside the roots`, R`|A1|$\{x : x < -3\} \cup \{x : x > 1\}$`], R`$\{x : x < -3\} \cup \{x : x > 1\}$`,
  R`$x^2 + 4x + 4 > 2x + 7$, so $x^2 + 2x - 3 > 0$, $(x + 3)(x - 1) > 0$: $\{x : x < -3\} \cup \{x : x > 1\}$.`),
Q('P3.5-12', 4, R`Solve $x^2 - 2x - 1 \le 0$, giving the end values in surd form. [[4]]`,
  [R`It doesn't factorise: complete the square or use the formula.`, R`Roots $1 \pm \sqrt2$.`],
  [R`|M1|Formula or completing the square`, R`|A1|$1 \pm \sqrt2$`, R`|M1|Between the roots`, R`|A1|$1 - \sqrt2 \le x \le 1 + \sqrt2$`], R`$1 - \sqrt2 \le x \le 1 + \sqrt2$`,
  R`$(x - 1)^2 = 2$ gives $x = 1 \pm \sqrt2$. Between them: $1 - \sqrt2 \le x \le 1 + \sqrt2$.`),
Q('P3.5-13', 4, R`The equation $kx^2 - 2kx + 3 = 0$, where $k \ne 0$, has two distinct real roots. Find the set of possible values of $k$. [[5]]`,
  [R`$4k^2 - 12k > 0$.`, R`$4k(k - 3) > 0$.`, R`$k < 0$ or $k > 3$.`],
  [R`|M1|$(2k)^2 - 4k(3) > 0$`, R`|A1|$4k^2 - 12k > 0$`, R`|M1|Critical values $0$, $3$`, R`|A1|$k < 0$ or $k > 3$`, R`|B1|$k \ne 0$ is already excluded`],
  R`$k < 0$ or $k > 3$`,
  R`$b^2 - 4ac = 4k^2 - 12k = 4k(k - 3) > 0$: $k < 0$ or $k > 3$. ($k = 0$ isn't a quadratic, and it isn't in the answer anyway.)`),
Q('P3.5-14', 4, R`A rectangle has length $(x + 5)$ cm and width $(x - 1)$ cm. Its area is at most $27$ cm². Find the range of possible values of $x$. [[5]]`,
  [R`$x > 1$ for a positive width.`, R`$(x + 5)(x - 1) \le 27$.`],
  [R`|M1|$(x + 5)(x - 1) \le 27$`, R`|A1|$x^2 + 4x - 32 \le 0$`, R`|M1|$(x + 8)(x - 4)$`, R`|A1|$-8 \le x \le 4$`, R`|A1|With $x > 1$: $1 < x \le 4$`], R`$1 < x \le 4$`,
  R`$x^2 + 4x - 5 \le 27$, so $x^2 + 4x - 32 \le 0$, $(x + 8)(x - 4) \le 0$: $-8 \le x \le 4$. The width needs $x > 1$, so $1 < x \le 4$.`),
Q('P3.5-15', 5, R`**(a)** Show that $\dfrac{x + 3}{x - 1} > 2$ is equivalent, for $x \ne 1$, to $(x + 3)(x - 1) > 2(x - 1)^2$. [[2]]

**(b)** Hence solve $\dfrac{x + 3}{x - 1} > 2$. [[4]]

**(c)** Explain why multiplying both sides of the original inequality by $(x - 1)$ would be wrong. [[2]]`,
  [R`Multiply both sides by $(x - 1)^2$, which is positive.`, R`Bring everything to one side: $(x - 1)\big((x + 3) - 2(x - 1)\big) > 0$.`, R`$(x - 1)(5 - x) > 0$.`],
  [R`(a)|M1|Multiplies by $(x - 1)^2$`, R`(a)|A1|Notes $(x - 1)^2 > 0$ so the sign is kept (cso)`, R`(b)|M1|Factorises out $(x - 1)$`, R`(b)|A1|$(x - 1)(5 - x) > 0$`, R`(b)|M1|Critical values $1$ and $5$`, R`(b)|A1|$1 < x < 5$`, R`(c)|B1|$x - 1$ can be negative`, R`(c)|B1|Then the inequality sign would need reversing, so one case is lost`],
  R`(b) $1 < x < 5$`,
  R`**(a)** $(x - 1)^2 > 0$ for $x \ne 1$, so multiplying by it keeps the sign: $(x + 3)(x - 1) > 2(x - 1)^2$. $\blacksquare$

**(b)** $(x - 1)(x + 3) - 2(x - 1)^2 > 0$, so $(x - 1)\big(x + 3 - 2x + 2\big) > 0$, i.e. $(x - 1)(5 - x) > 0$. This is an n-shape with roots $1$ and $5$: positive for $1 < x < 5$.

**(c)** $x - 1$ is negative when $x < 1$. Multiplying by a negative number reverses the inequality, so multiplying by $(x - 1)$ treats every $x$ as if $x - 1 > 0$, and can give wrong answers. Multiplying by $(x - 1)^2$ avoids this.`)
]
};

CONTENT['P3.6'] = {
notes: R`
### Reading inequalities from graphs
- $f(x) > g(x)$ where the graph of $y = f(x)$ is **above** $y = g(x)$.
- $f(x) < g(x)$ where it is **below**.

Find where the graphs **intersect** (the critical values), then look at the sketch.

[[fig:P3.6-above]]

Here $x^2 < x + 2$ between the intersections: $-1 < x < 2$.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Use the graph above to solve $x^2 \ge x + 2$: outside the intersections, $x \le -1$ or $x \ge 2$.

### Worked example 2: graphs with asymptotes
Solve $\dfrac{2}{x} < 1$ for $x \ne 0$.
1. The graphs of $y = \frac2x$ and $y = 1$ meet where $x = 2$.
2. Sketching $y = \frac2x$: for $x < 0$ it is negative, so below $1$; for $0 < x < 2$ it is above $1$; for $x > 2$ it is below $1$.
3. So $x < 0$ or $x > 2$.

**The trap:** multiplying by $x$ to get $2 < x$ and missing every negative $x$.

### Watch out
- Use the **intersections** as critical values, not the roots of either graph on its own.
`,
questions: [
Q('P3.6-1', 1, R`The graphs of $y = f(x)$ and $y = g(x)$ meet only at $x = -1$ and $x = 4$, and $f(x) > g(x)$ for $-1 < x < 4$. Write down the solution of $f(x) \le g(x)$. [[1]]`,
  [R`$\le$ is everywhere else, including the meeting points.`, R`Outside the interval.`],
  [R`|B1|$x \le -1$ or $x \ge 4$`], R`$x \le -1$ or $x \ge 4$`,
  R`$f(x) \le g(x)$ outside $-1 < x < 4$, including the intersections: $x \le -1$ or $x \ge 4$.`),
Q('P3.6-2', 1, R`Find the $x$-coordinates of the points where $y = x^2$ and $y = x + 2$ meet, and hence solve $x^2 < x + 2$. [[2]]`,
  [R`$x^2 - x - 2 = 0$.`, R`The parabola is below the line between the intersections.`],
  [R`|M1|$x = -1$ and $x = 2$`, R`|A1|$-1 < x < 2$`], R`$-1 < x < 2$`,
  R`$(x - 2)(x + 1) = 0$: $x = -1$ and $2$. The parabola is below the line between them: $-1 < x < 2$.`, { fig: FIGS['P3.6-above'] }),
Q('P3.6-3', 1, R`Solve $x^2 > 3x$ by considering the graphs of $y = x^2$ and $y = 3x$. [[2]]`,
  [R`They meet at $x = 0$ and $x = 3$.`, R`The parabola is above the line outside these.`],
  [R`|B1|Intersections $x = 0$, $3$`, R`|B1|$x < 0$ or $x > 3$`], R`$x < 0$ or $x > 3$`,
  R`$x^2 = 3x$ at $x = 0$ and $3$. The parabola is above the line outside: $x < 0$ or $x > 3$.`),
Q('P3.6-4', 2, R`Find the set of values of $x$ for which the curve $y = x^2 - 2x$ is below the line $y = x + 4$. [[3]]`,
  [R`$x^2 - 2x < x + 4$.`, R`$x^2 - 3x - 4 < 0$.`],
  [R`|M1|$x^2 - 3x - 4 < 0$`, R`|A1|Critical values $-1$, $4$`, R`|A1|$-1 < x < 4$`], R`$-1 < x < 4$`,
  R`$(x - 4)(x + 1) < 0$: $-1 < x < 4$.`),
Q('P3.6-5', 2, R`Solve $\dfrac{6}{x} < 2$ for $x \ne 0$. [[3]]`,
  [R`Intersection of $y = \frac6x$ and $y = 2$ is at $x = 3$.`, R`For negative $x$, $\frac6x$ is negative.`],
  [R`|B1|Intersection at $x = 3$`, R`|B1|$x < 0$`, R`|B1|$x > 3$`], R`$x < 0$ or $x > 3$`,
  R`$\frac6x = 2$ at $x = 3$. For $x < 0$ the left side is negative, so less than $2$. For $0 < x < 3$ it's more than $2$; for $x > 3$ less. So $x < 0$ or $x > 3$.`),
Q('P3.6-6', 2, R`Find where the line $y = 2x - 3$ lies above the curve $y = x^2 - 4x + 5$. [[3]]`,
  [R`$2x - 3 > x^2 - 4x + 5$.`, R`$x^2 - 6x + 8 < 0$.`],
  [R`|M1|$x^2 - 6x + 8 < 0$`, R`|A1|Critical values $2$, $4$`, R`|A1|$2 < x < 4$`], R`$2 < x < 4$`,
  R`$x^2 - 6x + 8 < 0$, $(x - 2)(x - 4) < 0$: $2 < x < 4$.`),
Q('P3.6-7', 2, R`Solve $4 - x^2 \ge x + 2$. [[3]]`,
  [R`$x^2 + x - 2 \le 0$.`, R`$(x + 2)(x - 1) \le 0$.`],
  [R`|M1|$x^2 + x - 2 \le 0$`, R`|A1|$-2$, $1$`, R`|A1|$-2 \le x \le 1$`], R`$-2 \le x \le 1$`,
  R`$x^2 + x - 2 \le 0$, $(x + 2)(x - 1) \le 0$: $-2 \le x \le 1$.`),
Q('P3.6-8', 3, R`The curves $y = x^2 - 4$ and $y = 4 - x^2$ meet at $A$ and $B$.

**(a)** Find $A$ and $B$. [[2]]

**(b)** Find the values of $x$ for which $x^2 - 4 > 4 - x^2$. [[2]]`,
  [R`$2x^2 = 8$.`, R`The upward parabola is above outside the intersections.`],
  [R`(a)|M1|$2x^2 = 8$`, R`(a)|A1|$(-2, 0)$ and $(2, 0)$`, R`(b)|M1|$2x^2 - 8 > 0$`, R`(b)|A1|$x < -2$ or $x > 2$`],
  R`(a) $(\pm2, 0)$ (b) $x < -2$ or $x > 2$`,
  R`**(a)** $x^2 - 4 = 4 - x^2$, $x^2 = 4$, $x = \pm2$, $y = 0$.

**(b)** $2x^2 > 8$, so $x^2 > 4$: $x < -2$ or $x > 2$.`),
Q('P3.6-9', 3, R`Solve $\dfrac{x^2 + 2}{3} > x$. [[3]]`,
  [R`Multiply by $3$ (positive).`, R`$x^2 - 3x + 2 > 0$.`],
  [R`|M1|$x^2 - 3x + 2 > 0$`, R`|A1|Critical values $1$, $2$`, R`|A1|$x < 1$ or $x > 2$`], R`$x < 1$ or $x > 2$`,
  R`$x^2 + 2 > 3x$, $(x - 1)(x - 2) > 0$: $x < 1$ or $x > 2$.`),
Q('P3.6-10', 3, R`On the same axes, $y = 2x + 1$ and $y = x^2 - 2$ are drawn. Find the exact set of values of $x$ for which the line is above the curve. [[4]]`,
  [R`$x^2 - 2x - 3 < 0$.`, R`$(x - 3)(x + 1)$.`],
  [R`|M1|$x^2 - 2x - 3 < 0$`, R`|M1|$(x - 3)(x + 1)$`, R`|A1|Critical values $-1$, $3$`, R`|A1|$-1 < x < 3$`], R`$-1 < x < 3$`,
  R`$2x + 1 > x^2 - 2$, so $x^2 - 2x - 3 < 0$: $-1 < x < 3$.`),
Q('P3.6-11', 3, R`Solve $\dfrac{4}{x} > x$ for $x \ne 0$. [[4]]`,
  [R`$y = \frac4x$ and $y = x$ meet where $x^2 = 4$.`, R`Sketch both: compare in each of the four intervals.`],
  [R`|B1|Intersections $x = \pm2$`, R`|M1|Uses a sketch or considers the sign of $x$`, R`|A1|$x < -2$`, R`|A1|$0 < x < 2$`], R`$x < -2$ or $0 < x < 2$`,
  R`The graphs meet at $x = \pm2$. For $0 < x < 2$: e.g. $x = 1$, $4 > 1$ ✓. For $x > 2$: ✗. For $-2 < x < 0$: e.g. $x = -1$, $-4 > -1$ ✗. For $x < -2$: e.g. $x = -4$, $-1 > -4$ ✓. So $x < -2$ or $0 < x < 2$.`),
Q('P3.6-12', 4, R`**(a)** Find the coordinates of the points where $y = x^2 - 3x + 2$ meets $y = 2x - 2$. [[3]]

**(b)** Hence find the set of values of $x$ for which $x^2 - 3x + 2 > 2x - 2$, in set notation. [[2]]`,
  [R`$x^2 - 5x + 4 = 0$.`, R`The parabola is above the line outside the intersections.`],
  [R`(a)|M1|$x^2 - 5x + 4 = 0$`, R`(a)|A1|$x = 1$, $4$`, R`(a)|A1|$(1, 0)$ and $(4, 6)$`, R`(b)|M1|Outside the roots`, R`(b)|A1|$\{x : x < 1\} \cup \{x : x > 4\}$`],
  R`(a) $(1, 0)$, $(4, 6)$ (b) $\{x : x < 1\} \cup \{x : x > 4\}$`,
  R`**(a)** $x^2 - 5x + 4 = 0$, so $x = 1$ or $4$: $(1, 0)$ and $(4, 6)$.

**(b)** $\{x : x < 1\} \cup \{x : x > 4\}$.`),
Q('P3.6-13', 4, R`Solve $\dfrac{3}{x - 1} \ge 1$, for $x \ne 1$. [[4]]`,
  [R`The graph of $y = \frac{3}{x - 1}$ has an asymptote at $x = 1$ and meets $y = 1$ at $x = 4$.`, R`For $x < 1$ the left side is negative.`],
  [R`|B1|Asymptote $x = 1$`, R`|B1|Intersection $x = 4$`, R`|M1|Considers each side of $x = 1$`, R`|A1|$1 < x \le 4$`], R`$1 < x \le 4$`,
  R`$\frac{3}{x - 1} = 1$ at $x = 4$. For $x < 1$ the fraction is negative, so it fails. For $1 < x \le 4$ the fraction is at least $1$. For $x > 4$ it is less than $1$. So $1 < x \le 4$.`),
Q('P3.6-14', 4, R`Find the set of values of $x$ for which the curve $y = x^2 - 6x + 5$ lies below the line $y = 2x - 10$. [[4]]`,
  [R`$x^2 - 6x + 5 < 2x - 10$.`, R`$x^2 - 8x + 15 < 0$.`],
  [R`|M1|$x^2 - 8x + 15 < 0$`, R`|M1|$(x - 3)(x - 5)$`, R`|A1|Critical values $3$, $5$`, R`|A1|$3 < x < 5$`], R`$3 < x < 5$`,
  R`$x^2 - 8x + 15 < 0$, $(x - 3)(x - 5) < 0$: $3 < x < 5$.`),
Q('P3.6-15', 5, R`The curve $C$ has equation $y = x^2 - kx + 4$ and the line $L$ has equation $y = x$.

**(a)** Find the values of $k$ for which $L$ is a tangent to $C$. [[3]]

**(b)** For $k = 6$, find the set of values of $x$ for which $C$ lies below $L$, giving exact values. [[4]]

**(c)** Explain why, for $-5 < k < 3$, $C$ never lies below $L$. [[2]]`,
  [R`$x^2 - (k + 1)x + 4 = 0$; tangent when $(k + 1)^2 = 16$.`, R`For (b): $x^2 - 7x + 4 < 0$.`, R`For (c): the discriminant is negative, so $x^2 - (k + 1)x + 4 > 0$ always.`],
  [R`(a)|M1|$x^2 - (k + 1)x + 4 = 0$`, R`(a)|M1|$(k + 1)^2 - 16 = 0$`, R`(a)|A1|$k = 3$ or $k = -5$`, R`(b)|M1|$x^2 - 7x + 4 < 0$`, R`(b)|M1|Formula`, R`(b)|A1|Critical values $\frac{7 \pm \sqrt{33}}{2}$`, R`(b)|A1|$\frac{7 - \sqrt{33}}{2} < x < \frac{7 + \sqrt{33}}{2}$`, R`(c)|M1|Discriminant $(k + 1)^2 - 16 < 0$ for $-5 < k < 3$`, R`(c)|A1|So $C - L > 0$ for all $x$: $C$ is always above $L$`],
  R`(a) $k = 3$ or $-5$ (b) $\frac{7 - \sqrt{33}}{2} < x < \frac{7 + \sqrt{33}}{2}$`,
  R`**(a)** $x^2 - kx + 4 = x$ gives $x^2 - (k + 1)x + 4 = 0$. Tangent: $(k + 1)^2 = 16$, $k = 3$ or $k = -5$.

**(b)** $x^2 - 7x + 4 < 0$: roots $\frac{7 \pm \sqrt{33}}{2}$, so $\frac{7 - \sqrt{33}}{2} < x < \frac{7 + \sqrt{33}}{2}$.

**(c)** For $-5 < k < 3$, $-4 < k + 1 < 4$, so $(k + 1)^2 < 16$ and $x^2 - (k + 1)x + 4$ has no real roots. It is a U-shape that never reaches zero, so it is always positive: $C$ is always above $L$.`)
]
};

CONTENT['P3.7'] = {
notes: R`
### Regions
An inequality in $x$ and $y$ describes a **region** of the graph.
- Draw each boundary: $y = f(x)$.
- **Solid** line for $\le$ or $\ge$ (the boundary is included); **dashed** for $<$ or $>$.
- $y > f(x)$ is the region **above** the curve; $y < f(x)$ is below.

### Several inequalities
The required region is where **all** of them are true. Exam questions usually ask you to shade it, or to describe a shaded region with inequalities.

[[fig:P3.7-region]]

The shaded region $R$ satisfies $y \ge x^2 - 4$ and $y \le 2x + 4$. The boundaries meet at $(-2, 0)$ and $(4, 12)$.

::: booklet
**Not in the formula booklet:** the conventions. If unsure, test a point: substitute it into each inequality.
:::

### Worked example 1
Is the point $(1, 3)$ in $R$? $3 \ge 1 - 4$ ✓ and $3 \le 6$ ✓. Yes.

### Worked example 2: lines like $x + y < 4$
Rearrange to $y < 4 - x$: the region below the line $y = 4 - x$, drawn dashed.

**The trap:** shading the wrong side of a line that isn't in $y = \ldots$ form. Rearrange, or test the origin: $0 + 0 < 4$ is true, so the origin's side is included.

### Watch out
- Find the intersections of the boundaries: they're the corners of the region.
`,
questions: [
Q('P3.7-1', 1, R`State whether the point $(2, 1)$ lies in the region $y > x^2 - 5$. [[1]]`,
  [R`Substitute $x = 2$: $x^2 - 5 = -1$.`, R`Is $1 > -1$?`],
  [R`|B1|Yes, since $1 > -1$`], R`Yes`,
  R`At $x = 2$, $x^2 - 5 = -1$, and $1 > -1$, so yes.`),
Q('P3.7-2', 1, R`Write down whether the line $y = 3x + 1$ should be drawn solid or dashed when showing the region $y < 3x + 1$, and which side is required. [[2]]`,
  [R`Strict inequality.`, R`$y <$ means below.`],
  [R`|B1|Dashed`, R`|B1|Below the line`], R`Dashed; below`,
  R`$<$ is strict, so the boundary isn't included: dashed. $y < \ldots$ is the region below the line.`),
Q('P3.7-3', 1, R`Write down the inequality, in the form $y \ldots$, that describes the region below and on the line $x + y = 6$. [[1]]`,
  [R`Rearrange: $y = 6 - x$.`, R`Below and on: $\le$.`],
  [R`|B1|$y \le 6 - x$`], R`$y \le 6 - x$`,
  R`$x + y = 6$ is $y = 6 - x$. Below and including it: $y \le 6 - x$ (equivalently $x + y \le 6$).`),
Q('P3.7-4', 2, R`Find the coordinates of the corners of the region where $y \ge x^2 - 4$ and $y \le 2x + 4$. [[3]]`,
  [R`The corners are where the boundaries meet.`, R`$x^2 - 4 = 2x + 4$.`],
  [R`|M1|$x^2 - 2x - 8 = 0$`, R`|A1|$x = -2$, $4$`, R`|A1|$(-2, 0)$ and $(4, 12)$`], R`$(-2, 0)$ and $(4, 12)$`,
  R`$x^2 - 2x - 8 = (x - 4)(x + 2) = 0$: $(-2, 0)$ and $(4, 12)$.`, { fig: FIGS['P3.7-region'] }),
Q('P3.7-5', 2, R`Test whether the points $(0, 0)$ and $(3, 1)$ satisfy both $y > x - 2$ and $y < 4 - x^2$. [[3]]`,
  [R`Substitute each point into each inequality.`, R`$(3, 1)$: $4 - 9 = -5$.`],
  [R`|B1|$(0, 0)$: $0 > -2$ and $0 < 4$, both true`, R`|M1|Tests $(3, 1)$`, R`|A1|$1 < -5$ is false, so $(3, 1)$ is not in the region`], R`$(0, 0)$ yes; $(3, 1)$ no`,
  R`$(0, 0)$: $0 > -2$ ✓ and $0 < 4$ ✓. $(3, 1)$: $1 > 1$ is false (and $1 < -5$ false). So only $(0, 0)$ is in the region.`),
Q('P3.7-6', 2, R`Describe with inequalities the region bounded by the $x$-axis and the curve $y = 9 - x^2$, including the boundaries. [[3]]`,
  [R`Above or on the $x$-axis: $y \ge 0$.`, R`Below or on the curve.`],
  [R`|B1|$y \ge 0$`, R`|B1|$y \le 9 - x^2$`, R`|B1|Correct combination`], R`$y \ge 0$ and $y \le 9 - x^2$`,
  R`The region is above (or on) the $x$-axis and below (or on) the curve: $y \ge 0$ and $y \le 9 - x^2$. (This forces $-3 \le x \le 3$.)`),
Q('P3.7-7', 2, R`Find the area of the triangle defined by $y \ge 0$, $x \ge 0$ and $2x + y \le 8$. [[3]]`,
  [R`$2x + y = 8$ meets the axes at $(4, 0)$ and $(0, 8)$.`, R`Right-angled triangle.`],
  [R`|B1|$(4, 0)$ and $(0, 8)$`, R`|M1|$\frac12 \times 4 \times 8$`, R`|A1|$16$`], R`$16$`,
  R`Corners $(0, 0)$, $(4, 0)$ and $(0, 8)$: area $\frac12 \times 4 \times 8 = 16$.`),
Q('P3.7-8', 3, R`Find the corners of the region defined by $y \ge 1$, $y \le x + 3$ and $y \le 7 - x$, and the area of the region. [[4]]`,
  [R`Find each pair of intersections.`, R`$y = 1$ with each line, and the two lines with each other.`],
  [R`|M1|Finds intersections`, R`|A1|$(-2, 1)$, $(6, 1)$`, R`|A1|$(2, 5)$`, R`|A1|Area $16$`], R`Corners $(-2, 1)$, $(6, 1)$, $(2, 5)$; area $16$`,
  R`$y = 1$ meets $y = x + 3$ at $(-2, 1)$ and $y = 7 - x$ at $(6, 1)$; the lines meet at $x + 3 = 7 - x$, $(2, 5)$. Triangle: base $8$, height $4$, area $16$.`),
Q('P3.7-9', 3, R`The region $R$ is bounded by $y = x^2$ and $y = 4$. Write down the inequalities that define $R$ (including the boundaries) and the range of $x$-values in $R$. [[3]]`,
  [R`Above the curve and below the line.`, R`They meet at $x = \pm2$.`],
  [R`|B1|$y \ge x^2$`, R`|B1|$y \le 4$`, R`|B1|$-2 \le x \le 2$`], R`$x^2 \le y \le 4$; $-2 \le x \le 2$`,
  R`$x^2 \le y \le 4$. The curve meets $y = 4$ at $x = \pm2$, so $-2 \le x \le 2$.`),
Q('P3.7-10', 3, R`Show that the point $(1, 2)$ lies in the region $x^2 + y^2 < 9$, $y > x$, and find a point with integer coordinates in the region $x^2 + y^2 < 9$, $y < x$. [[3]]`,
  [R`$1 + 4 = 5 < 9$ and $2 > 1$.`, R`Try $(2, 1)$.`],
  [R`|B1|$1 + 4 < 9$`, R`|B1|$2 > 1$`, R`|B1|e.g. $(2, 1)$: $5 < 9$ and $1 < 2$`], R`e.g. $(2, 1)$`,
  R`$(1, 2)$: $1 + 4 = 5 < 9$ ✓ and $2 > 1$ ✓. For example $(2, 1)$: $5 < 9$ and $1 < 2$ ✓.`),
Q('P3.7-11', 3, R`Describe the region where $y > x^2 - 2x$ and $y < x$, giving the range of $x$ for which it exists. [[4]]`,
  [R`Boundaries meet where $x^2 - 2x = x$.`, R`$x(x - 3) = 0$.`],
  [R`|M1|$x^2 - 3x = 0$`, R`|A1|$x = 0$, $3$`, R`|M1|The region lies between them`, R`|A1|$0 < x < 3$, between the curve and the line`], R`For $0 < x < 3$, between the curve (below) and the line (above)`,
  R`$x^2 - 2x = x$ at $x = 0$ and $3$. For $0 < x < 3$ the line is above the curve, so the region is the strip between them for $0 < x < 3$.`),
Q('P3.7-12', 4, R`The region $R$ satisfies $y \le 6 - x^2$, $y \ge x$ and $x \ge 0$.

**(a)** Find the coordinates of the corners of $R$. [[4]]

**(b)** Explain whether the point $(1, 4)$ lies in $R$. [[1]]`,
  [R`$6 - x^2 = x$ gives $x = 2$ (for $x \ge 0$).`, R`Also check where each boundary meets $x = 0$.`],
  [R`(a)|M1|$x^2 + x - 6 = 0$`, R`(a)|A1|$(2, 2)$`, R`(a)|A1|$(0, 0)$`, R`(a)|A1|$(0, 6)$`, R`(b)|B1|$4 \le 5$, $4 \ge 1$, $1 \ge 0$: yes`],
  R`(a) $(0, 0)$, $(0, 6)$, $(2, 2)$ (b) yes`,
  R`**(a)** $6 - x^2 = x$ gives $(x + 3)(x - 2) = 0$; with $x \ge 0$, $(2, 2)$. On $x = 0$: the line gives $(0, 0)$, the curve $(0, 6)$.

**(b)** $4 \le 6 - 1 = 5$ ✓, $4 \ge 1$ ✓, $1 \ge 0$ ✓. Yes.`),
Q('P3.7-13', 4, R`A region is defined by $x + y \le 10$, $y \ge 2x - 2$, $y \ge 0$ and $x \ge 0$. Find the greatest value of $x + 2y$ in the region, and where it occurs. [[5]]`,
  [R`The greatest value of a linear expression is at a corner.`, R`Find all the corners.`],
  [R`|M1|Finds the corners`, R`|A1|$(0, 0)$, $(1, 0)$, $(4, 6)$, $(0, 10)$`, R`|M1|Evaluates $x + 2y$ at each corner`, R`|A1|$20$`, R`|A1|At $(0, 10)$`], R`$20$ at $(0, 10)$`,
  R`Corners: $(0, 0)$; $y = 2x - 2$ meets $y = 0$ at $(1, 0)$; it meets $x + y = 10$ at $x + 2x - 2 = 10$, $(4, 6)$; and $x + y = 10$ meets $x = 0$ at $(0, 10)$.
Values of $x + 2y$: $0$, $1$, $16$, $20$. Greatest $20$ at $(0, 10)$.`),
Q('P3.7-14', 4, R`Find the inequalities that define the region inside the triangle with corners $(0, 0)$, $(4, 0)$ and $(0, 6)$, including its edges. [[4]]`,
  [R`Two edges are on the axes.`, R`The third edge joins $(4, 0)$ and $(0, 6)$: $y = 6 - \frac32x$.`],
  [R`|B1|$x \ge 0$`, R`|B1|$y \ge 0$`, R`|M1|Line through $(4, 0)$ and $(0, 6)$`, R`|A1|$3x + 2y \le 12$`], R`$x \ge 0$, $y \ge 0$, $3x + 2y \le 12$`,
  R`Edges on the axes give $x \ge 0$ and $y \ge 0$. The third edge has gradient $-\frac32$ and intercept $6$: $y = 6 - \frac32x$, i.e. $3x + 2y = 12$. The triangle is below it: $3x + 2y \le 12$.`),
Q('P3.7-15', 5, R`The region $R$ is defined by $y \ge x^2 - 4x + 3$ and $y \le 3 - x$.

**(a)** Find the coordinates of the points where the boundaries meet. [[3]]

**(b)** Find the range of $x$-values in $R$, and the greatest value of $y$ in $R$. [[3]]

**(c)** Find the greatest vertical height of $R$, i.e. the greatest value of $(3 - x) - (x^2 - 4x + 3)$ for points in $R$, and where it occurs. [[3]]`,
  [R`$x^2 - 4x + 3 = 3 - x$ gives $x(x - 3) = 0$.`, R`In $R$, $y \le 3 - x$; $3 - x$ is greatest at the smallest $x$.`, R`The height is $3x - x^2$. Complete the square.`],
  [R`(a)|M1|$x^2 - 3x = 0$`, R`(a)|A1|$(0, 3)$`, R`(a)|A1|$(3, 0)$`, R`(b)|B1|$0 \le x \le 3$`, R`(b)|M1|Greatest $y$ on the upper boundary at $x = 0$`, R`(b)|A1|$y = 3$`, R`(c)|M1|Height $3x - x^2$`, R`(c)|M1|$\frac94 - \left(x - \frac32\right)^2$`, R`(c)|A1|$\frac94$ at $x = \frac32$`],
  R`(a) $(0, 3)$, $(3, 0)$ (b) $0 \le x \le 3$; greatest $y = 3$ (c) $\frac94$ at $x = \frac32$`,
  R`**(a)** $x^2 - 4x + 3 = 3 - x$, so $x^2 - 3x = 0$: $(0, 3)$ and $(3, 0)$.

**(b)** The region exists where the line is above the curve: $0 \le x \le 3$. The top boundary $y = 3 - x$ is highest at $x = 0$, so the greatest $y$ is $3$.

**(c)** Height $= (3 - x) - (x^2 - 4x + 3) = 3x - x^2 = \frac94 - \left(x - \frac32\right)^2$, greatest $\frac94$ at $x = \frac32$.`)
]
};
