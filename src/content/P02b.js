/* Pure Mathematics Year 1 · Chapter 2 Quadratics (sections 2.4 to 2.6) */
FIGS['P2.4-sketch'] = Fig.graph({ label: 'Sketch of y = x squared minus 2x minus 3 with roots, y-intercept and turning point marked',
  fns: [{ f: x => x * x - 2 * x - 3, label: 'y = x² − 2x − 3', lx: 4.4, ly: 7 }], x0: -2.5, x1: 4.5, y0: -5, y1: 8,
  xticks: [[-1, '−1'], [1, '1'], [3, '3']], yticks: [[-3, '−3'], [-4, '−4']],
  points: [{ x: -1, y: 0, label: '(−1, 0)', dx: -22, dy: -12 }, { x: 3, y: 0, label: '(3, 0)', dx: 22, dy: -12 }, { x: 0, y: -3, label: '(0, −3)', dx: -28 }, { x: 1, y: -4, label: 'min (1, −4)', dx: 40, dy: 4 }] });

CONTENT['P2.4'] = {
notes: R`
### The shape
The graph of $y = ax^2 + bx + c$ is a parabola.
- $a > 0$: a "U" shape with a **minimum** point.
- $a < 0$: an "n" shape with a **maximum** point.

### Sketching: what to show
1. Where it **crosses the $y$-axis**: put $x = 0$, so $(0, c)$.
2. Where it **crosses the $x$-axis**: solve $ax^2 + bx + c = 0$.
3. The **turning point**: complete the square. $y = a(x + p)^2 + q$ has its turning point at $(-p, q)$.
4. The **line of symmetry** $x = -p$, halfway between the roots.

[[fig:P2.4-sketch]]

For $y = x^2 - 2x - 3 = (x - 3)(x + 1) = (x - 1)^2 - 4$: roots $-1$ and $3$, $y$-intercept $-3$, minimum $(1, -4)$.

::: booklet
**Not in the formula booklet:** none of the sketching facts. Label every point with its coordinates.
:::

### Worked example 1
Sketch $y = -x^2 + 4x$.
- $y = -x(x - 4)$: crosses at $x = 0$ and $x = 4$. $a < 0$, so it's an "n" shape.
- Line of symmetry $x = 2$, so the maximum is at $(2, 4)$.

### Worked example 2: no real roots
Sketch $y = x^2 + 2x + 5$.
- $y = (x + 1)^2 + 4$: minimum $(-1, 4)$, which is **above** the $x$-axis. So there are no $x$-intercepts.
- $y$-intercept $(0, 5)$.

**The trap:** forcing the curve to cross the $x$-axis because "quadratics have two roots". If the minimum is above the axis, it doesn't cross.

### Watch out
- A sketch must show the intercepts and turning point with coordinates, not just the shape.
- Check the symmetry: the turning point is halfway between the roots.
`,
questions: [
Q('P2.4-1', 1, R`Write down the coordinates of the point where $y = x^2 - 5x + 6$ crosses the $y$-axis. [[1]]`,
  [R`Put $x = 0$.`, R`$y = 6$.`],
  [R`|B1|$(0, 6)$`], R`$(0, 6)$`,
  R`At $x = 0$, $y = 6$, so the curve crosses the $y$-axis at $(0, 6)$.`),
Q('P2.4-2', 1, R`Find the coordinates of the points where $y = x^2 - 9$ crosses the $x$-axis. [[2]]`,
  [R`Set $y = 0$.`, R`$x^2 = 9$.`],
  [R`|M1|$x^2 - 9 = 0$`, R`|A1|$(-3, 0)$ and $(3, 0)$`], R`$(-3, 0)$ and $(3, 0)$`,
  R`$x^2 - 9 = 0$ gives $x = \pm3$: the points $(-3, 0)$ and $(3, 0)$.`),
Q('P2.4-3', 1, R`Write down the coordinates of the turning point of $y = (x + 2)^2 - 5$, and say whether it is a maximum or a minimum. [[2]]`,
  [R`$y = (x + p)^2 + q$ has its turning point at $(-p, q)$.`, R`The $x^2$ coefficient is positive.`],
  [R`|B1|$(-2, -5)$`, R`|B1|Minimum`], R`$(-2, -5)$, a minimum`,
  R`The turning point is $(-2, -5)$. The coefficient of $x^2$ is positive (a "U" shape), so it's a minimum.`),
Q('P2.4-4', 2, R`Find the turning point of $y = x^2 - 6x + 5$ and the equation of its line of symmetry. [[3]]`,
  [R`Complete the square.`, R`$(x - 3)^2 - 4$.`],
  [R`|M1|$(x - 3)^2 - 4$`, R`|A1|$(3, -4)$`, R`|B1|$x = 3$`], R`Minimum $(3, -4)$; line of symmetry $x = 3$`,
  R`$y = (x - 3)^2 - 9 + 5 = (x - 3)^2 - 4$: minimum $(3, -4)$, line of symmetry $x = 3$.`),
Q('P2.4-5', 2, R`Sketch the graph of $y = x^2 + 2x - 8$, showing the coordinates of the points where it meets the axes and its turning point. [[4]]`,
  [R`Factorise to find the roots.`, R`$y$-intercept at $x = 0$. Turning point halfway between the roots.`],
  [R`|B1|U-shaped parabola`, R`|B1|$x$-intercepts $(-4, 0)$ and $(2, 0)$`, R`|B1|$y$-intercept $(0, -8)$`, R`|B1|Minimum $(-1, -9)$`],
  R`Roots $(-4, 0)$, $(2, 0)$; $y$-intercept $(0, -8)$; minimum $(-1, -9)$`,
  R`1. $y = (x + 4)(x - 2)$: crosses the $x$-axis at $(-4, 0)$ and $(2, 0)$.
2. $y$-intercept: $(0, -8)$.
3. Symmetry: $x = -1$, and $y(-1) = 1 - 2 - 8 = -9$, so the minimum is $(-1, -9)$.`,
  { solFig: Fig.graph({ label: 'Sketch of y = x² + 2x − 8', fns: [{ f: x => x * x + 2 * x - 8, label: 'y = x² + 2x − 8', lx: 3, ly: 8 }], x0: -5.5, x1: 3.5, y0: -10, y1: 9,
    xticks: [[-4, '−4'], [-1, '−1'], [2, '2']], yticks: [[-8, '−8'], [-9, '−9']], points: [{ x: -4, y: 0 }, { x: 2, y: 0 }, { x: 0, y: -8 }, { x: -1, y: -9, label: '(−1, −9)', dx: -32, dy: 8 }] }) }),
Q('P2.4-6', 2, R`Sketch $y = 4x - x^2$, showing where it meets the axes and its turning point. [[3]]`,
  [R`$y = x(4 - x)$.`, R`The $x^2$ coefficient is negative, so it's an "n" shape.`],
  [R`|B1|n-shaped parabola through $(0, 0)$ and $(4, 0)$`, R`|B1|Maximum at $x = 2$`, R`|B1|Maximum $(2, 4)$`],
  R`Through $(0, 0)$ and $(4, 0)$; maximum $(2, 4)$`,
  R`$y = x(4 - x)$ meets the $x$-axis at $x = 0$ and $x = 4$ (and the $y$-axis at the origin). The maximum is at $x = 2$: $y = 2 \times 2 = 4$. So $(2, 4)$.`),
Q('P2.4-7', 2, R`The curve $y = x^2 + bx + c$ has its minimum point at $(3, -2)$. Find $b$ and $c$. [[3]]`,
  [R`The curve must be $y = (x - 3)^2 - 2$.`, R`Expand it.`],
  [R`|M1|$(x - 3)^2 - 2$`, R`|A1|$b = -6$`, R`|A1|$c = 7$`], R`$b = -6$, $c = 7$`,
  R`$y = (x - 3)^2 - 2 = x^2 - 6x + 9 - 2 = x^2 - 6x + 7$, so $b = -6$, $c = 7$.`),
Q('P2.4-8', 3, R`Sketch $y = 2x^2 - 3x - 2$, showing the coordinates of all intercepts and the turning point. [[5]]`,
  [R`$(2x + 1)(x - 2)$.`, R`Line of symmetry halfway between $-\frac12$ and $2$: $x = \frac34$.`],
  [R`|B1|U-shape`, R`|B1|$(-\frac12, 0)$ and $(2, 0)$`, R`|B1|$(0, -2)$`, R`|M1|$x = \frac34$`, R`|A1|Minimum $\left(\frac34, -\frac{25}{8}\right)$`],
  R`Roots $\left(-\frac12, 0\right)$, $(2, 0)$; $(0, -2)$; minimum $\left(\frac34, -\frac{25}{8}\right)$`,
  R`1. $y = (2x + 1)(x - 2)$: roots $-\frac12$ and $2$.
2. $y$-intercept $(0, -2)$.
3. Symmetry $x = \frac{-\frac12 + 2}{2} = \frac34$: $y = 2\left(\frac9{16}\right) - \frac94 - 2 = \frac98 - \frac{18}{8} - \frac{16}{8} = -\frac{25}{8}$.`),
Q('P2.4-9', 3, R`A parabola crosses the $x$-axis at $(-1, 0)$ and $(5, 0)$, and the $y$-axis at $(0, 10)$. Find its equation and its turning point. [[4]]`,
  [R`$y = a(x + 1)(x - 5)$.`, R`Use $(0, 10)$ to find $a$.`],
  [R`|M1|$y = a(x + 1)(x - 5)$`, R`|A1|$a = -2$`, R`|M1|Turning point at $x = 2$`, R`|A1|Maximum $(2, 18)$`], R`$y = -2(x + 1)(x - 5)$; maximum $(2, 18)$`,
  R`1. $y = a(x + 1)(x - 5)$. At $(0, 10)$: $10 = a(1)(-5)$, so $a = -2$.
2. $y = -2(x + 1)(x - 5) = -2x^2 + 8x + 10$.
3. Symmetry $x = 2$: $y = -2(3)(-3) = 18$. Maximum $(2, 18)$, since $a < 0$.`),
Q('P2.4-10', 3, R`Show that the curve $y = x^2 - 4x + 7$ does not meet the $x$-axis, and sketch it. [[4]]`,
  [R`Complete the square.`, R`$(x - 2)^2 + 3$: where is the minimum?`],
  [R`|M1|$(x - 2)^2 + 3$`, R`|A1|Minimum $(2, 3)$ above the axis, so no $x$-intercepts`, R`|B1|U-shape with minimum $(2, 3)$`, R`|B1|$y$-intercept $(0, 7)$`],
  R`Minimum $(2, 3)$; $y$-intercept $(0, 7)$; no $x$-intercepts`,
  R`$y = (x - 2)^2 + 3 \ge 3$, so the curve never reaches $y = 0$: it doesn't meet the $x$-axis. Its minimum is $(2, 3)$ and it crosses the $y$-axis at $(0, 7)$.`),
Q('P2.4-11', 3, R`The graph of $y = a(x - p)^2 + q$ passes through $(0, 5)$ and has a maximum at $(2, 13)$. Find $a$, $p$ and $q$. [[3]]`,
  [R`The maximum gives $p$ and $q$ directly.`, R`Substitute $(0, 5)$ to find $a$.`],
  [R`|B1|$p = 2$, $q = 13$`, R`|M1|$5 = a(0 - 2)^2 + 13$`, R`|A1|$a = -2$`], R`$a = -2$, $p = 2$, $q = 13$`,
  R`1. Maximum at $(2, 13)$: $p = 2$, $q = 13$.
2. $5 = a(4) + 13$, so $a = -2$ (negative, which fits a maximum).`),
Q('P2.4-12', 4, R`The curve $C$ has equation $y = x^2 - 2kx + 3k$, where $k$ is a positive constant.

**(a)** Find, in terms of $k$, the coordinates of the turning point of $C$. [[3]]

**(b)** Given that the turning point lies on the line $y = 2$, find the possible values of $k$. [[3]]`,
  [R`$(x - k)^2 - k^2 + 3k$.`, R`Set $-k^2 + 3k = 2$.`],
  [R`(a)|M1|Completes the square`, R`(a)|A1|$x = k$`, R`(a)|A1|$y = 3k - k^2$`, R`(b)|M1|$3k - k^2 = 2$`, R`(b)|M1|$(k - 1)(k - 2) = 0$`, R`(b)|A1|$k = 1$ or $k = 2$`],
  R`(a) $(k, 3k - k^2)$ (b) $k = 1$ or $2$`,
  R`**(a)** $y = (x - k)^2 - k^2 + 3k$, so the turning point is $(k, 3k - k^2)$.

**(b)** $3k - k^2 = 2$, so $k^2 - 3k + 2 = 0$ and $(k - 1)(k - 2) = 0$: $k = 1$ or $k = 2$.`),
Q('P2.4-13', 4, R`The parabola $y = x^2 + bx + c$ has line of symmetry $x = -3$ and passes through $(1, 4)$.

**(a)** Find $b$ and $c$. [[3]]

**(b)** Find the minimum value of $y$, and the $x$-coordinates where the curve crosses the $x$-axis, in surd form. [[4]]`,
  [R`Line of symmetry $x = -\frac b2$.`, R`So $b = 6$; use $(1, 4)$ for $c$.`, R`$y = (x + 3)^2 - 12$.`],
  [R`(a)|M1|$-\frac b2 = -3$`, R`(a)|A1|$b = 6$`, R`(a)|A1|$c = -3$`, R`(b)|M1|$(x + 3)^2 - 12$`, R`(b)|A1|Minimum $-12$`, R`(b)|M1|$(x + 3)^2 = 12$`, R`(b)|A1|$x = -3 \pm 2\sqrt3$`],
  R`(a) $b = 6$, $c = -3$ (b) minimum $-12$; $x = -3 \pm 2\sqrt3$`,
  R`**(a)** $-\frac b2 = -3$, so $b = 6$. Then $4 = 1 + 6 + c$, so $c = -3$.

**(b)** $y = x^2 + 6x - 3 = (x + 3)^2 - 12$. Minimum $-12$. Roots: $(x + 3)^2 = 12$, so $x = -3 \pm 2\sqrt3$.`),
Q('P2.4-14', 4, R`The curve $y = (x - a)(x - b)$, where $a < b$, has its minimum point at $(4, -9)$. Find $a$ and $b$. [[4]]`,
  [R`The minimum is halfway between the roots: $\frac{a + b}{2} = 4$.`, R`The curve is $y = (x - 4)^2 - 9$. Find its roots.`],
  [R`|M1|$y = (x - 4)^2 - 9$`, R`|M1|Solves $(x - 4)^2 = 9$`, R`|A1|$x = 1$ or $7$`, R`|A1|$a = 1$, $b = 7$`],
  R`$a = 1$, $b = 7$`,
  R`1. The coefficient of $x^2$ is $1$ and the minimum is $(4, -9)$, so $y = (x - 4)^2 - 9$.
2. Roots: $(x - 4)^2 = 9$, so $x = 1$ or $7$. Since $a < b$: $a = 1$, $b = 7$.`),
Q('P2.4-15', 5, R`The curve $y = x^2 - 4x + 3$ is reflected in the $x$-axis and then translated $5$ units up.

**(a)** Find the equation of the new curve, in the form $y = px^2 + qx + r$. [[3]]

**(b)** Find the coordinates of the points where the original and new curves meet. [[4]]

**(c)** Show that the two curves are symmetrical about the line $y = \frac52$. [[2]]`,
  [R`Reflecting in the $x$-axis changes $y$ to $-y$: $y = -(x^2 - 4x + 3)$. Then add $5$.`, R`Set the two equations equal.`, R`A point $(x, y)$ on one curve corresponds to $(x, 5 - y)$ on the other. What is the midpoint of $y$ and $5 - y$?`],
  [R`(a)|M1|$-(x^2 - 4x + 3)$`, R`(a)|M1|Adds $5$`, R`(a)|A1|$y = -x^2 + 4x + 2$`, R`(b)|M1|$x^2 - 4x + 3 = -x^2 + 4x + 2$`, R`(b)|A1|$2x^2 - 8x + 1 = 0$`, R`(b)|A1|$x = 2 \pm \frac{\sqrt{14}}{2}$`, R`(b)|A1|$y = \frac52$ at both points`, R`(c)|M1|Each point $(x, y)$ maps to $(x, 5 - y)$`, R`(c)|A1|The midpoint has $y = \frac52$ (cso)`],
  R`(a) $y = -x^2 + 4x + 2$ (b) $\left(2 \pm \frac{\sqrt{14}}{2}, \frac52\right)$`,
  R`**(a)** Reflect: $y = -x^2 + 4x - 3$. Translate up $5$: $y = -x^2 + 4x + 2$.

**(b)** $x^2 - 4x + 3 = -x^2 + 4x + 2$, so $2x^2 - 8x + 1 = 0$ and $x = \dfrac{8 \pm \sqrt{56}}{4} = 2 \pm \dfrac{\sqrt{14}}{2}$.
At these points $y = x^2 - 4x + 3$. From $2x^2 - 8x = -1$, $x^2 - 4x = -\frac12$, so $y = \frac52$. Both points have $y = \frac52$.

**(c)** For each $x$, the original curve has height $y_1 = x^2 - 4x + 3$ and the new one $y_2 = 5 - y_1$. Their average is $\frac{y_1 + y_2}{2} = \frac52$, so the curves are mirror images in $y = \frac52$. $\blacksquare$`)
]
};

CONTENT['P2.5'] = {
notes: R`
### The discriminant
For $ax^2 + bx + c = 0$, the **discriminant** is $b^2 - 4ac$, the part under the square root in the formula.

| $b^2 - 4ac$ | Roots | Graph of $y = ax^2 + bx + c$ |
|---|---|---|
| $> 0$ | two distinct real roots | crosses the $x$-axis twice |
| $= 0$ | one repeated root | touches the $x$-axis |
| $< 0$ | no real roots | doesn't meet the $x$-axis |

### Finding an unknown constant
Questions often say "the equation has equal roots" or "has no real roots" and ask for an unknown $k$. Write down $b^2 - 4ac$ in terms of $k$ and set up the equation or inequality.

::: booklet
**Not in the formula booklet:** the discriminant conditions.
:::

### Worked example 1
Find $k$ such that $x^2 + kx + 9 = 0$ has equal roots.
- $b^2 - 4ac = k^2 - 36 = 0$, so $k = \pm6$.

### Worked example 2: identify $a$, $b$, $c$ carefully
Find the values of $k$ for which $kx^2 + 4x + (k - 3) = 0$ has two distinct real roots.
1. $a = k$, $b = 4$, $c = k - 3$: $16 - 4k(k - 3) > 0$.
2. $16 - 4k^2 + 12k > 0$, so $k^2 - 3k - 4 < 0$, i.e. $(k - 4)(k + 1) < 0$.
3. So $-1 < k < 4$ (and $k \ne 0$, or it isn't a quadratic).

**The trap:** using $c = k$ or $c = -3$. The whole constant term $(k - 3)$ is $c$. You'll solve the quadratic inequality properly in section 3.5.

### Watch out
- Rearrange to "$= 0$" before reading off $a$, $b$ and $c$.
- "Real roots" includes the equal-roots case: $b^2 - 4ac \ge 0$.
`,
questions: [
Q('P2.5-1', 1, R`Find the value of the discriminant of $x^2 + 5x + 3$. [[1]]`,
  [R`$b^2 - 4ac$ with $a = 1$, $b = 5$, $c = 3$.`, R`$25 - 12$.`],
  [R`|B1|$13$`], R`$13$`,
  R`$b^2 - 4ac = 25 - 12 = 13$.`),
Q('P2.5-2', 1, R`State how many real roots $2x^2 - 3x + 4 = 0$ has, giving a reason. [[2]]`,
  [R`Work out $b^2 - 4ac$.`, R`$9 - 32$.`],
  [R`|M1|$9 - 32 = -23$`, R`|A1|No real roots, since the discriminant is negative`], R`None, because $b^2 - 4ac = -23 < 0$`,
  R`$b^2 - 4ac = 9 - 32 = -23 < 0$, so there are no real roots.`),
Q('P2.5-3', 1, R`Show that $x^2 - 6x + 9 = 0$ has a repeated root. [[1]]`,
  [R`Find the discriminant.`, R`$36 - 36$.`],
  [R`|B1|$b^2 - 4ac = 36 - 36 = 0$, so a repeated root`], R`$b^2 - 4ac = 0$`,
  R`$b^2 - 4ac = 36 - 36 = 0$, so there is one repeated root (in fact $(x - 3)^2 = 0$).`),
Q('P2.5-4', 2, R`Find the values of $k$ for which $x^2 + kx + 16 = 0$ has equal roots. [[2]]`,
  [R`Equal roots: $b^2 - 4ac = 0$.`, R`$k^2 - 64 = 0$.`],
  [R`|M1|$k^2 - 64 = 0$`, R`|A1|$k = \pm8$`], R`$k = \pm8$`,
  R`$k^2 - 4(1)(16) = 0$, so $k^2 = 64$ and $k = \pm8$.`),
Q('P2.5-5', 2, R`Find the value of $p$ for which $px^2 - 6x + 1 = 0$ has equal roots. [[2]]`,
  [R`$a = p$, $b = -6$, $c = 1$.`, R`$36 - 4p = 0$.`],
  [R`|M1|$36 - 4p = 0$`, R`|A1|$p = 9$`], R`$p = 9$`,
  R`$(-6)^2 - 4p(1) = 0$, so $p = 9$.`),
Q('P2.5-6', 2, R`Find the range of values of $c$ for which $x^2 - 4x + c = 0$ has two distinct real roots. [[2]]`,
  [R`$b^2 - 4ac > 0$.`, R`$16 - 4c > 0$.`],
  [R`|M1|$16 - 4c > 0$`, R`|A1|$c < 4$`], R`$c < 4$`,
  R`$16 - 4c > 0$, so $c < 4$.`),
Q('P2.5-7', 2, R`Find the range of values of $m$ for which $2x^2 + 3x + m = 0$ has no real roots. [[2]]`,
  [R`No real roots: $b^2 - 4ac < 0$.`, R`$9 - 8m < 0$.`],
  [R`|M1|$9 - 8m < 0$`, R`|A1|$m > \frac98$`], R`$m > \frac98$`,
  R`$9 - 8m < 0$, so $m > \frac98$.`),
Q('P2.5-8', 3, R`The equation $x^2 + (k + 1)x + 4 = 0$ has equal roots. Find the possible values of $k$. [[3]]`,
  [R`$b = k + 1$.`, R`$(k + 1)^2 - 16 = 0$.`],
  [R`|M1|$(k + 1)^2 - 16 = 0$`, R`|M1|$k + 1 = \pm4$`, R`|A1|$k = 3$ or $k = -5$`], R`$k = 3$ or $k = -5$`,
  R`$(k + 1)^2 = 16$, so $k + 1 = \pm4$: $k = 3$ or $k = -5$.`),
Q('P2.5-9', 3, R`Find the values of $k$ for which $kx^2 + 4x + k = 0$ has equal roots, and find the root in each case. [[4]]`,
  [R`$16 - 4k^2 = 0$.`, R`A repeated root is $x = -\frac{b}{2a}$.`],
  [R`|M1|$16 - 4k^2 = 0$`, R`|A1|$k = \pm2$`, R`|M1|Root $= -\frac{4}{2k}$`, R`|A1|$k = 2$: $x = -1$; $k = -2$: $x = 1$`],
  R`$k = 2$ (root $-1$) or $k = -2$ (root $1$)`,
  R`1. $16 - 4k^2 = 0$, so $k = \pm2$.
2. Repeated root $x = -\frac{4}{2k}$: for $k = 2$, $x = -1$; for $k = -2$, $x = 1$.`),
Q('P2.5-10', 3, R`Show that $x^2 + 2px + p^2 + 1 = 0$ has no real roots for any real value of $p$. [[3]]`,
  [R`$b^2 - 4ac = 4p^2 - 4(p^2 + 1)$.`, R`Simplify.`],
  [R`|M1|$4p^2 - 4(p^2 + 1)$`, R`|A1|$= -4$`, R`|A1|$-4 < 0$ for every $p$, so no real roots (conclusion)`], R`$b^2 - 4ac = -4 < 0$`,
  R`$b^2 - 4ac = 4p^2 - 4p^2 - 4 = -4$, which is negative whatever $p$ is. So there are never any real roots. $\blacksquare$`),
Q('P2.5-11', 3, R`Show that $x^2 + kx + k - 1 = 0$ has real roots for every value of $k$. [[3]]`,
  [R`$b^2 - 4ac = k^2 - 4(k - 1)$.`, R`$k^2 - 4k + 4$ is a perfect square.`],
  [R`|M1|$k^2 - 4k + 4$`, R`|A1|$(k - 2)^2$`, R`|A1|$(k - 2)^2 \ge 0$, so always real roots (conclusion)`], R`$b^2 - 4ac = (k - 2)^2 \ge 0$`,
  R`$b^2 - 4ac = k^2 - 4k + 4 = (k - 2)^2 \ge 0$ for all $k$, so the roots are always real. $\blacksquare$`),
Q('P2.5-12', 4, R`The equation $(k - 1)x^2 + 4x + (k + 2) = 0$, where $k \ne 1$, has equal roots.

**(a)** Show that $k^2 + k - 6 = 0$. [[3]]

**(b)** Hence find the possible values of $k$, and the root for each. [[3]]`,
  [R`$a = k - 1$, $c = k + 2$.`, R`$16 - 4(k - 1)(k + 2) = 0$.`, R`Repeated root $x = -\frac{4}{2(k - 1)}$.`],
  [R`(a)|M1|$16 - 4(k - 1)(k + 2) = 0$`, R`(a)|M1|Expands $(k - 1)(k + 2) = k^2 + k - 2$`, R`(a)|A1|$k^2 + k - 6 = 0$ (cso)`, R`(b)|A1|$k = 2$ or $k = -3$`, R`(b)|M1|Root $-\frac{2}{k - 1}$`, R`(b)|A1|$k = 2$: $x = -2$; $k = -3$: $x = \frac12$`],
  R`$k = 2$ (root $-2$) or $k = -3$ (root $\frac12$)`,
  R`**(a)** $16 - 4(k - 1)(k + 2) = 0$, so $(k - 1)(k + 2) = 4$, $k^2 + k - 2 = 4$, $k^2 + k - 6 = 0$. $\blacksquare$

**(b)** $(k + 3)(k - 2) = 0$, so $k = 2$ or $k = -3$.
Root $x = -\dfrac{4}{2(k - 1)}$: $k = 2$ gives $x = -2$; $k = -3$ gives $x = -\dfrac{4}{-8} = \dfrac12$.`),
Q('P2.5-13', 4, R`The line $y = 2x + c$ is a tangent to the curve $y = x^2 - 4x + 7$. Find $c$, and the point where the line touches the curve. [[5]]`,
  [R`Set the equations equal: $x^2 - 6x + 7 - c = 0$.`, R`A tangent meets the curve once: discriminant $= 0$.`],
  [R`|M1|$x^2 - 6x + 7 - c = 0$`, R`|M1|$36 - 4(7 - c) = 0$`, R`|A1|$c = -2$`, R`|M1|Solves for $x$`, R`|A1|$(3, 4)$`],
  R`$c = -2$; touches at $(3, 4)$`,
  R`1. $x^2 - 4x + 7 = 2x + c$, so $x^2 - 6x + (7 - c) = 0$.
2. Tangent: $36 - 4(7 - c) = 0$, so $c = -2$.
3. Then $x^2 - 6x + 9 = 0$, $x = 3$, $y = 2(3) - 2 = 4$: the point $(3, 4)$.`),
Q('P2.5-14', 4, R`Given that $p$ is a positive constant, find the value of $p$ for which the equation $px^2 + px + 1 = 0$ has equal roots, and show that for this $p$ the root is $x = -\frac12$. [[4]]`,
  [R`$p^2 - 4p = 0$.`, R`$p > 0$ rules out one value.`],
  [R`|M1|$p^2 - 4p = 0$`, R`|A1|$p = 4$ (rejecting $p = 0$)`, R`|M1|$4x^2 + 4x + 1 = 0$`, R`|A1|$(2x + 1)^2 = 0$, so $x = -\frac12$`],
  R`$p = 4$; root $x = -\frac12$`,
  R`1. $p^2 - 4p = 0$, so $p(p - 4) = 0$. $p$ is positive, so $p = 4$. (Also $p = 0$ wouldn't give a quadratic.)
2. $4x^2 + 4x + 1 = (2x + 1)^2 = 0$, so $x = -\frac12$. $\blacksquare$`),
Q('P2.5-15', 5, R`The equation $x^2 - 2ax + b = 0$ has roots that differ by $2$.

**(a)** By writing the roots using the quadratic formula, show that $a^2 - b = 1$. [[4]]

**(b)** Given also that one root is $3$, find the two possible pairs $(a, b)$. [[4]]`,
  [R`The roots are $a \pm \sqrt{a^2 - b}$.`, R`Their difference is $2\sqrt{a^2 - b}$.`, R`For (b): the other root is $1$ or $5$. Use the sum and the product of the roots.`],
  [R`(a)|M1|Uses the formula`, R`(a)|A1|Roots $a \pm \sqrt{a^2 - b}$`, R`(a)|M1|Difference $2\sqrt{a^2 - b} = 2$`, R`(a)|A1|$a^2 - b = 1$ (cso)`, R`(b)|M1|Other root $1$ or $5$`, R`(b)|M1|$a$ is the mean of the roots`, R`(b)|A1|$a = 2$, $b = 3$`, R`(b)|A1|$a = 4$, $b = 15$`],
  R`(b) $(a, b) = (2, 3)$ or $(4, 15)$`,
  R`**(a)** $x = \dfrac{2a \pm \sqrt{4a^2 - 4b}}{2} = a \pm \sqrt{a^2 - b}$. The difference is $2\sqrt{a^2 - b} = 2$, so $a^2 - b = 1$. $\blacksquare$

**(b)** The roots are $a - 1$ and $a + 1$ (since $\sqrt{a^2 - b} = 1$). If $3$ is a root, $a = 4$ or $a = 2$.
- $a = 2$: $b = a^2 - 1 = 3$. Roots $1$ and $3$: $x^2 - 4x + 3$ ✓
- $a = 4$: $b = 15$. Roots $3$ and $5$: $x^2 - 8x + 15$ ✓`)
]
};

CONTENT['P2.6'] = {
notes: R`
### Quadratic models
Many real situations are modelled by quadratics: the height of a ball $h = 20t - 5t^2$, profit against price, or the area of a fenced region.

### What to do
- **Roots** answer "when is it zero?" (e.g. when the ball lands).
- **The turning point** answers "what is the greatest/least, and when?" Complete the square.
- **Reject** answers that don't make sense, like negative times or lengths.

### Evaluating the model
Exam questions often ask you to criticise the model: it may ignore air resistance, assume something stays constant, or give impossible values outside a sensible range.

::: booklet
**Not in the formula booklet:** anything specific. Show your working and answer in context, with units.
:::

### Worked example 1
A ball's height is $h = 1.5 + 14t - 4.9t^2$ metres. Find its greatest height.
- $h = -4.9\left(t - \frac{10}{7}\right)^2 + 1.5 + 10 = 11.5 - 4.9\left(t - \frac{10}{7}\right)^2$. Greatest height $11.5$ m at $t = 1.43$ s.

### Worked example 2: reject the impossible root
When does that ball land?
- $4.9t^2 - 14t - 1.5 = 0$ gives $t = 2.96$ or $t = -0.103$.
- The ball lands at $t = 2.96$ s.

**The trap:** giving both answers. A negative time is before the ball was thrown, so it doesn't fit the context.

### Watch out
- Read what each variable means and its units before you start.
- "Hence" usually means: use the completed square form you just found.
`,
questions: [
Q('P2.6-1', 1, R`A stone is thrown upwards. Its height after $t$ seconds is $h = 20t - 5t^2$ metres. Find its height after $1$ second. [[1]]`,
  [R`Substitute $t = 1$.`, R`$20 - 5$.`],
  [R`|B1|$15$ m`], R`$15$ m`,
  R`$h = 20(1) - 5(1)^2 = 15$ m.`),
Q('P2.6-2', 1, R`For $h = 20t - 5t^2$, find when the stone hits the ground. [[2]]`,
  [R`It hits the ground when $h = 0$.`, R`$5t(4 - t) = 0$.`],
  [R`|M1|$20t - 5t^2 = 0$`, R`|A1|$t = 4$ seconds`], R`$t = 4$ s`,
  R`$5t(4 - t) = 0$ gives $t = 0$ (thrown) or $t = 4$ (lands). It hits the ground after $4$ seconds.`),
Q('P2.6-3', 1, R`For $h = 20t - 5t^2$, find the greatest height reached. [[2]]`,
  [R`The maximum is halfway between the roots $t = 0$ and $t = 4$.`, R`$t = 2$.`],
  [R`|M1|$t = 2$`, R`|A1|$20$ m`], R`$20$ m`,
  R`The maximum is at $t = 2$: $h = 40 - 20 = 20$ m.`),
Q('P2.6-4', 2, R`A farmer has $60$ m of fencing to make a rectangular pen of width $x$ m.

**(a)** Show that the area is $A = 30x - x^2$. [[1]]

**(b)** Find the greatest possible area. [[2]]`,
  [R`The perimeter is $60$, so length $+$ width $= 30$.`, R`Complete the square: $225 - (x - 15)^2$.`],
  [R`(a)|B1|Length $30 - x$, so $A = x(30 - x)$ (cso)`, R`(b)|M1|$225 - (x - 15)^2$`, R`(b)|A1|$225$ m²`],
  R`(b) $225$ m²`,
  R`**(a)** Perimeter $60$, so the length is $30 - x$ and $A = x(30 - x) = 30x - x^2$.

**(b)** $A = 225 - (x - 15)^2$, so the greatest area is $225$ m², when $x = 15$ (a square).`),
Q('P2.6-5', 2, R`A company's profit $P$ thousand pounds when it sells $x$ thousand items is $P = -2x^2 + 24x - 40$. Find the maximum profit and the number of items needed. [[3]]`,
  [R`Complete the square with $-2$ taken out.`, R`$-2(x - 6)^2 + 32$.`],
  [R`|M1|$-2(x^2 - 12x) - 40$`, R`|A1|$32 - 2(x - 6)^2$`, R`|A1|£32 000 when $6000$ items are sold`], R`£32 000 at $6000$ items`,
  R`$P = -2\big((x - 6)^2 - 36\big) - 40 = 32 - 2(x - 6)^2$. The maximum is $32$, i.e. **£32 000**, when $x = 6$: **6000 items**.`),
Q('P2.6-6', 2, R`For the profit model $P = -2x^2 + 24x - 40$, find the range of $x$ for which the company makes a profit, giving exact values. [[3]]`,
  [R`Solve $P = 0$ first.`, R`$x^2 - 12x + 20 = 0$.`],
  [R`|M1|$-2x^2 + 24x - 40 = 0$`, R`|A1|$x = 2$, $x = 10$`, R`|A1|$2 < x < 10$`], R`$2 < x < 10$ (thousand items)`,
  R`$P = 0$ gives $x^2 - 12x + 20 = 0$, so $x = 2$ or $x = 10$. The curve is "n"-shaped, so $P > 0$ between them: $2 < x < 10$, i.e. between 2000 and 10 000 items.`),
Q('P2.6-7', 2, R`A ball is kicked from the ground. Its height is $h = 12t - 4.9t^2$ metres after $t$ seconds. Find how long it is in the air, to 3 s.f. [[2]]`,
  [R`$h = 0$: $t(12 - 4.9t) = 0$.`, R`$t = \frac{12}{4.9}$.`],
  [R`|M1|$t(12 - 4.9t) = 0$`, R`|A1|$2.45$ s`], R`$2.45$ s`,
  R`$t(12 - 4.9t) = 0$: $t = 0$ or $t = \frac{12}{4.9} = 2.45$ s.`),
Q('P2.6-8', 3, R`The height of a diver above the water is $h = 10 + 5t - 4.9t^2$ metres, $t$ seconds after leaving the board.

**(a)** Write $h$ in the form $A - B(t - C)^2$. [[3]]

**(b)** Hence find the greatest height of the diver above the water, and when it happens. [[2]]`,
  [R`$-4.9\left(t^2 - \frac{5}{4.9}t\right) + 10$.`, R`$C = \frac{5}{9.8}$.`],
  [R`(a)|M1|Takes out $-4.9$`, R`(a)|M1|Completes the square`, R`(a)|A1|$11.28 - 4.9(t - 0.510)^2$`, R`(b)|A1|$11.3$ m`, R`(b)|A1|At $t = 0.510$ s`],
  R`(a) $11.28 - 4.9(t - 0.510)^2$ (b) $11.3$ m at $0.510$ s`,
  R`**(a)** $C = \frac{5}{2 \times 4.9} = 0.5102$. Then $h = 10 + \frac{25}{4 \times 4.9} - 4.9(t - 0.5102)^2 = 11.28 - 4.9(t - 0.510)^2$.

**(b)** Greatest height $11.3$ m, at $t = 0.510$ s.`),
Q('P2.6-9', 3, R`For the diver in the previous question, $h = 10 + 5t - 4.9t^2$. Find when the diver enters the water, and explain why one solution of $h = 0$ is rejected. [[3]]`,
  [R`$4.9t^2 - 5t - 10 = 0$. Use the formula.`, R`One root is negative.`],
  [R`|M1|Formula on $4.9t^2 - 5t - 10 = 0$`, R`|A1|$t = 2.03$ s`, R`|B1|$t = -1.01$ rejected: before the dive started`], R`$t = 2.03$ s`,
  R`$t = \dfrac{5 \pm \sqrt{25 + 196}}{9.8} = \dfrac{5 \pm 14.87}{9.8}$, so $t = 2.03$ or $t = -1.01$. The negative time is before the diver left the board, so it is rejected: the diver enters the water at $t = 2.03$ s.`),
Q('P2.6-10', 3, R`A rectangular garden is $3$ m longer than it is wide. A path $1$ m wide runs all the way round the outside of it. The total area of the garden and path is $70$ m². Find the width of the garden. [[4]]`,
  [R`Let the width be $x$. With the path, the outer rectangle is $(x + 2)$ by $(x + 5)$.`, R`$(x + 2)(x + 5) = 70$.`],
  [R`|M1|$(x + 2)(x + 5) = 70$`, R`|A1|$x^2 + 7x - 60 = 0$`, R`|M1|$(x + 12)(x - 5) = 0$`, R`|A1|$x = 5$ m (rejecting $-12$)`], R`$5$ m`,
  R`1. Garden $x$ by $x + 3$; with the path, $(x + 2)$ by $(x + 5)$.
2. $(x + 2)(x + 5) = 70$, so $x^2 + 7x - 60 = 0$ and $(x + 12)(x - 5) = 0$.
3. A width can't be negative, so $x = 5$ m.`),
Q('P2.6-11', 3, R`The number of visitors $N$ to a museum on day $d$ of a $30$-day exhibition is modelled by $N = 40d - d^2 + 100$.

**(a)** Find the day on which the most visitors are expected, and how many. [[2]]

**(b)** Use the model to predict the visitors on day $45$ and explain why the model isn't valid then. [[2]]`,
  [R`$N = 500 - (d - 20)^2$.`, R`Day $45$ is outside the exhibition.`],
  [R`(a)|M1|Completes the square or uses symmetry`, R`(a)|A1|Day $20$, $500$ visitors`, R`(b)|B1|$N = 1800 - 2025 + 100 = -125$`, R`(b)|B1|Negative visitors is impossible; the model only applies during the 30 days`],
  R`(a) Day 20, 500 visitors (b) $-125$: impossible`,
  R`**(a)** $N = -(d - 20)^2 + 400 + 100 = 500 - (d - 20)^2$. Most visitors on day $20$: $500$.

**(b)** $N(45) = 1800 - 2025 + 100 = -125$. A negative number of visitors is impossible, and day 45 is outside the 30-day exhibition the model was built for.`),
Q('P2.6-12', 4, R`A ball is thrown so that its height is $h = 1.2 + 9t - 4.9t^2$ metres.

**(a)** Find the time for which the ball is more than $4$ m above the ground. [[4]]

**(b)** State one modelling assumption, and how it affects your answer. [[1]]`,
  [R`Solve $1.2 + 9t - 4.9t^2 = 4$.`, R`$4.9t^2 - 9t + 2.8 = 0$. The difference between the roots is the time.`],
  [R`(a)|M1|$4.9t^2 - 9t + 2.8 = 0$`, R`(a)|M1|Quadratic formula`, R`(a)|A1|$t = 0.397$ and $t = 1.44$`, R`(a)|A1|$1.04$ s`, R`(b)|B1|For example, no air resistance, so the real time would be slightly less`],
  R`(a) $1.04$ s`,
  R`**(a)** $4.9t^2 - 9t + 2.8 = 0$: $t = \dfrac{9 \pm \sqrt{81 - 54.88}}{9.8} = \dfrac{9 \pm 5.111}{9.8}$, so $t = 0.397$ or $1.440$. Time above $4$ m $= 1.440 - 0.397 = 1.04$ s.

**(b)** For example: no air resistance. In reality air resistance would slow the ball, so it would be above $4$ m for slightly less time.`),
Q('P2.6-13', 4, R`A shop sells $200 - 10p$ T-shirts a week when the price is £$p$, for $0 < p < 20$. Each T-shirt costs the shop £$5$.

**(a)** Show that the weekly profit is $P = -10p^2 + 250p - 1000$. [[2]]

**(b)** Find the price that gives the greatest profit, and that profit. [[3]]`,
  [R`Profit per T-shirt is $p - 5$.`, R`$P = (p - 5)(200 - 10p)$.`, R`Complete the square, or use symmetry between the roots $p = 5$ and $p = 20$.`],
  [R`(a)|M1|$(p - 5)(200 - 10p)$`, R`(a)|A1|Expands correctly (cso)`, R`(b)|M1|$p = 12.5$`, R`(b)|A1|Price £$12.50$`, R`(b)|A1|Profit £$562.50$`],
  R`(b) £12.50, giving £562.50`,
  R`**(a)** $P = (p - 5)(200 - 10p) = 200p - 10p^2 - 1000 + 50p = -10p^2 + 250p - 1000$. $\blacksquare$

**(b)** The roots are $p = 5$ and $p = 20$, so the maximum is at $p = 12.5$: $P = (7.5)(75) = 562.5$. Price **£12.50**, profit **£562.50**.`),
Q('P2.6-14', 4, R`A rectangle has perimeter $20$ cm and area $A$ cm². Show that $A \le 25$, and find the dimensions when $A = 25$. [[4]]`,
  [R`Let one side be $x$; the other is $10 - x$.`, R`$A = 10x - x^2 = 25 - (x - 5)^2$.`],
  [R`|M1|$A = x(10 - x)$`, R`|M1|$25 - (x - 5)^2$`, R`|A1|$A \le 25$ since $(x - 5)^2 \ge 0$`, R`|A1|$5$ cm by $5$ cm`],
  R`$A = 25 - (x - 5)^2 \le 25$; a $5$ cm square`,
  R`$A = x(10 - x) = 25 - (x - 5)^2$. A square is never negative, so $A \le 25$, with equality when $x = 5$: a $5$ cm by $5$ cm square.`),
Q('P2.6-15', 5, R`A cricket ball is hit from a height of $1$ m. Its height above the ground is modelled by $h = 1 + kx - 0.02x^2$, where $x$ m is the horizontal distance travelled and $k$ is a constant. The ball is $6$ m above the ground when it has travelled $50$ m horizontally.

**(a)** Find $k$. [[2]]

**(b)** Find the greatest height of the ball. [[3]]

**(c)** Find how far the ball travels horizontally before landing. [[3]]`,
  [R`Substitute $x = 50$, $h = 6$.`, R`Complete the square with your $k$.`, R`Solve $h = 0$ and take the positive root.`],
  [R`(a)|M1|$6 = 1 + 50k - 50$`, R`(a)|A1|$k = 1.1$`, R`(b)|M1|$-0.02(x^2 - 55x) + 1$`, R`(b)|M1|Turning point at $x = 27.5$`, R`(b)|A1|$16.1$ m`, R`(c)|M1|$0.02x^2 - 1.1x - 1 = 0$`, R`(c)|M1|Quadratic formula`, R`(c)|A1|$55.9$ m`],
  R`(a) $k = 1.1$ (b) $16.1$ m (c) $55.9$ m`,
  R`**(a)** $6 = 1 + 50k - 0.02(2500) = 50k - 49$, so $k = 1.1$.

**(b)** $h = 1 + 1.1x - 0.02x^2$. The maximum is at $x = \frac{1.1}{0.04} = 27.5$: $h = 1 + 30.25 - 15.125 = 16.125$, so $16.1$ m.

**(c)** $0.02x^2 - 1.1x - 1 = 0$: $x = \dfrac{1.1 \pm \sqrt{1.21 + 0.08}}{0.04} = \dfrac{1.1 \pm 1.1358}{0.04}$. The positive root is $x = 55.9$ m.`)
]
};
