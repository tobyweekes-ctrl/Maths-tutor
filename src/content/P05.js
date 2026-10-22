/* Pure Mathematics Year 1 · Chapter 5 Straight line graphs (sections 5.1 to 5.5) */
BOOK_CHAPTERS.push({ id:'P05', book:'Pure Mathematics Year 1', label:'Chapter 5', title:'Straight line graphs', sections:[
  { id:'P5.1', num:'5.1', title:'y = mx + c' },
  { id:'P5.2', num:'5.2', title:'Equations of straight lines' },
  { id:'P5.3', num:'5.3', title:'Parallel and perpendicular lines' },
  { id:'P5.4', num:'5.4', title:'Length and area' },
  { id:'P5.5', num:'5.5', title:'Modelling with straight lines' }
]});
{
  const sk = (label, fns, [x0, x1, y0, y1], pts = [], more = {}) => Fig.graph(Object.assign({ label, x0, x1, y0, y1,
    fns: fns.map(([f, l, lx, ly, extra]) => Object.assign({ f, label: l, lx, ly }, extra || {})),
    points: pts.map(([x, y, l, dx, dy]) => ({ x, y, label: l, dx, dy })) }, more));
  FIGS['P5.1-grad'] = sk('The line through (−1, −4) and (2, 5): it rises 9 for a run of 3, so the gradient is 3',
    [[x => 3 * x - 1, 'y = 3x − 1', 3.2, 6.4]], [-2.5, 3.4, -6, 8], [[-1, -4, '(−1, −4)', -34, 0], [2, 5, '(2, 5)', -28, -4]],
    { segs: [{ x1: -1, y1: -4, x2: 2, y2: -4, dash: true }, { x1: 2, y1: -4, x2: 2, y2: 5, dash: true }], texts: [{ x: 0.5, y: -5, label: 'run 3' }, { x: 2.15, y: 0.5, label: 'rise 9', anchor: 'start' }] });
  FIGS['P5.3-perp'] = sk('Perpendicular lines drawn to equal scales: 2x − 3y + 6 = 0 (gradient 2/3) and the answer 3x + 2y − 11 = 0 (gradient −3/2), which passes through (3, 1)',
    [[x => (2 * x + 6) / 3], [x => (11 - 3 * x) / 2]], [-1.6, 6.4, -1.2, 4], [[3, 1, '(3, 1)', 26, 6]], { h: 256,
      texts: [{ x: 3.2, y: 3.7, label: '2x − 3y + 6 = 0', anchor: 'start', col: 'var(--accent)' }, { x: 4.6, y: -0.8, label: '3x + 2y − 11 = 0', anchor: 'start', col: 'var(--pen)' }],
      segs: [{ x1: 1.815, y1: 3.21, x2: 1.948, y2: 3.01 }, { x1: 1.948, y1: 3.01, x2: 1.749, y2: 2.877 }] });
  FIGS['P5.4-area'] = sk('The triangle formed by y = 2x + 2, y = −x + 5 and the x-axis, with vertices (−1, 0), (5, 0) and (1, 4); its height is 4',
    [[x => 2 * x + 2, 'y = 2x + 2', 2.6, 6.6], [x => 5 - x, 'y = −x + 5', 6, 0.2]], [-2, 6, -1, 7], [[-1, 0, '(−1, 0)', -18, 14], [5, 0, '(5, 0)', 10, 14], [1, 4, '(1, 4)', 26, -4]],
    { regions: [{ from: -1, to: 5, lo: () => 0, hi: x => Math.min(2 * x + 2, 5 - x) }], vlines: [{ x: 1, dash: true, col: 'var(--muted)' }], texts: [{ x: 1.4, y: 1.6, label: 'height 4', anchor: 'start' }] });
  FIGS['P5.4-9'] = sk('Triangle PQR: lines y = x + 2 and y = 8 − 2x meet at P(2, 4) and cross the x-axis at Q(−2, 0) and R(4, 0)',
    [[x => x + 2, 'y = x + 2', 4.6, 5.6], [x => 8 - 2 * x, 'y = 8 − 2x', 5, -1.6]], [-3, 5, -2, 7], [[-2, 0, 'Q', -6, 14], [4, 0, 'R', 8, 14], [2, 4, 'P(2, 4)', 26, -6]],
    { regions: [{ from: -2, to: 4, lo: () => 0, hi: x => Math.min(x + 2, 8 - 2 * x) }] });
  FIGS['P5.4-14'] = sk('Quadrilateral OABC with O(0, 0), A(4, 0), B(6, 3) and C(0, 5)',
    [[x => 5 - x / 3, '', 0, 0, { from: 0, to: 6 }], [x => 1.5 * (x - 4), '', 0, 0, { from: 4, to: 6 }]], [-1, 7, -1, 6], [[0, 0, 'O', -10, 14], [4, 0, 'A(4, 0)', 0, 14], [6, 3, 'B(6, 3)', 10, -10], [0, 5, 'C(0, 5)', 26, -8]],
    { regions: [{ from: 0, to: 6, lo: x => x < 4 ? 0 : 1.5 * (x - 4), hi: x => 5 - x / 3 }] });
  FIGS['P5.5-cost'] = sk('Cost C = 40 + 30h: the line starts at £40 (the call-out charge) and rises £30 per hour',
    [[x => 40 + 30 * x, 'C = 40 + 30h', 4, 150]], [0, 4.4, 0, 180], [[0, 40, '(0, 40)', 28, -4], [3, 130, '(3, 130)', -30, -6]], { xlab: 'h (hours)', ylab: 'C (£)', xticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yticks: [[40, '40'], [100, '100'], [160, '160']] });
  FIGS['P5.5-15'] = sk('Monthly cost of three gym plans against visits v: A = 20 + 3v, B = 45, C = 8v',
    [[v => 20 + 3 * v, 'A', 11.6, 50], [v => 45, 'B', 11.6, 41], [v => 8 * v, 'C', 6.6, 56]], [0, 12, 0, 70], [[4, 32, '(4, 32)', -30, -6], [25 / 3, 45, '', 0, 0]], { xlab: 'v', ylab: '£', xticks: [[4, '4'], [8, '8']], yticks: [[20, '20'], [45, '45']] });
}

CONTENT['P5.1'] = {
notes: R`
### Gradient and intercept
A straight line can be written $y = mx + c$, where
- $m$ is the **gradient**: the change in $y$ for each $1$ across
- $c$ is the **$y$-intercept**: the line crosses the $y$-axis at $(0, c)$.

### Gradient from two points
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

### The form $ax + by + c = 0$
Exam questions often ask for this form with $a$, $b$, $c$ **integers**. Rearrange to $y = mx + c$ to read off the gradient.

::: booklet
**Not in the formula booklet:** the gradient formula and the forms of a line. Learn them.
:::

### Worked example 1
Find the gradient and $y$-intercept of $3x + 4y - 12 = 0$.
1. $4y = -3x + 12$.
2. $y = -\frac34 x + 3$: gradient $-\frac34$, intercept $(0, 3)$.

### Worked example 2: keep the order the same
Find the gradient of the line through $(2, 5)$ and $(-1, -4)$.
$$m = \frac{-4 - 5}{-1 - 2} = \frac{-9}{-3} = 3$$

[[fig:P5.1-grad]]

**The trap:** writing $\frac{-4 - 5}{2 - (-1)} = -3$. Subtract in the **same order** on the top and the bottom.

### Watch out
- To find where a line crosses the $x$-axis, put $y = 0$.
- A line with a negative gradient goes down from left to right.
`,
questions: [
Q('P5.1-1', 1, R`Write down the gradient and the coordinates of the $y$-intercept of $y = 4x - 7$. [[2]]`,
  [R`Compare with $y = mx + c$.`, R`The intercept is $(0, c)$.`],
  [R`|B1|Gradient $4$`, R`|B1|$(0, -7)$`], R`Gradient $4$; $(0, -7)$`,
  R`Comparing with $y = mx + c$: $m = 4$ and $c = -7$.`),
Q('P5.1-2', 1, R`Find the gradient of the line joining $(1, 3)$ and $(4, 9)$. [[1]]`,
  [R`$\frac{y_2 - y_1}{x_2 - x_1}$.`, R`$\frac{9 - 3}{4 - 1}$.`],
  [R`|B1|$2$`], R`$2$`,
  R`$m = \frac{9 - 3}{4 - 1} = \frac{6}{3} = 2$.`),
Q('P5.1-3', 1, R`Write $2x + y - 5 = 0$ in the form $y = mx + c$. [[1]]`,
  [R`Make $y$ the subject.`, R`Move $2x$ and $-5$ across.`],
  [R`|B1|$y = -2x + 5$`], R`$y = -2x + 5$`,
  R`$y = 5 - 2x = -2x + 5$.`),
Q('P5.1-4', 2, R`Find the gradient and $y$-intercept of the line $3x - 2y + 6 = 0$. [[2]]`,
  [R`Rearrange to $2y = \ldots$.`, R`$2y = 3x + 6$.`],
  [R`|M1|$y = \frac32 x + 3$`, R`|A1|Gradient $\frac32$, intercept $(0, 3)$`], R`Gradient $\frac32$; $(0, 3)$`,
  R`$2y = 3x + 6$, so $y = \frac32 x + 3$.`),
Q('P5.1-5', 2, R`Write $y = -\frac23 x + 4$ in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers. [[2]]`,
  [R`Multiply by $3$.`, R`$3y = -2x + 12$.`],
  [R`|M1|Clears the fraction`, R`|A1|$2x + 3y - 12 = 0$`], R`$2x + 3y - 12 = 0$`,
  R`$3y = -2x + 12$, so $2x + 3y - 12 = 0$.`),
Q('P5.1-6', 2, R`The line through $(2, k)$ and $(5, 11)$ has gradient $3$. Find $k$. [[2]]`,
  [R`$\frac{11 - k}{5 - 2} = 3$.`, R`$11 - k = 9$.`],
  [R`|M1|$\frac{11 - k}{3} = 3$`, R`|A1|$k = 2$`], R`$k = 2$`,
  R`$11 - k = 9$, so $k = 2$.`),
Q('P5.1-7', 2, R`Find the coordinates of the points where $4x + 5y = 20$ crosses the axes. [[2]]`,
  [R`$y = 0$ for the $x$-axis.`, R`$x = 0$ for the $y$-axis.`],
  [R`|B1|$(5, 0)$`, R`|B1|$(0, 4)$`], R`$(5, 0)$ and $(0, 4)$`,
  R`$y = 0$: $4x = 20$, $x = 5$. $x = 0$: $5y = 20$, $y = 4$.`),
Q('P5.1-8', 3, R`Show that the points $A(-2, 1)$, $B(1, 7)$ and $C(4, 13)$ lie on a straight line. [[3]]`,
  [R`Find the gradients of $AB$ and $BC$.`, R`Same gradient and a common point means one line.`],
  [R`|M1|Gradient $AB = \frac{6}{3} = 2$`, R`|M1|Gradient $BC = \frac{6}{3} = 2$`, R`|A1|Equal gradients and $B$ is common, so collinear`], R`Both gradients are $2$ and they share $B$`,
  R`$AB$: $\frac{7 - 1}{1 + 2} = 2$; $BC$: $\frac{13 - 7}{4 - 1} = 2$. Parallel lines through a common point are the same line.`),
Q('P5.1-9', 3, R`The line $3x - 4y + 8 = 0$ meets the $x$-axis at $P$ and the $y$-axis at $Q$. Find $P$, $Q$ and the gradient of the line. [[3]]`,
  [R`$y = 0$ and $x = 0$ in turn.`, R`$y = \frac34 x + 2$.`],
  [R`|B1|$P\left(-\frac83, 0\right)$`, R`|B1|$Q(0, 2)$`, R`|B1|Gradient $\frac34$`], R`$P\left(-\frac83, 0\right)$, $Q(0, 2)$, gradient $\frac34$`,
  R`$y = 0$: $3x = -8$. $x = 0$: $4y = 8$. Rearranging, $4y = 3x + 8$.`),
Q('P5.1-10', 3, R`The line through $(p, 3)$ and $(2p, 9)$, where $p \ne 0$, has gradient $2$. Find $p$. [[3]]`,
  [R`$\frac{9 - 3}{2p - p}$.`, R`$\frac6p = 2$.`],
  [R`|M1|$\frac{6}{2p - p}$`, R`|M1|$\frac6p = 2$`, R`|A1|$p = 3$`], R`$p = 3$`,
  R`The run is $2p - p = p$, so $\frac6p = 2$ and $p = 3$.`),
Q('P5.1-11', 3, R`Show that the line $ax + by + c = 0$ (with $b \ne 0$) has gradient $-\frac{a}{b}$ and $y$-intercept $-\frac{c}{b}$. Hence write down the gradient and intercept of $5x + 2y - 4 = 0$. [[3]]`,
  [R`$by = -ax - c$.`, R`Divide by $b$.`],
  [R`|M1|$y = -\frac{a}{b}x - \frac{c}{b}$`, R`|A1|Gradient $-\frac52$`, R`|A1|Intercept $(0, 2)$`], R`$-\frac52$; $(0, 2)$`,
  R`$y = -\frac{a}{b}x - \frac{c}{b}$. With $a = 5$, $b = 2$, $c = -4$: gradient $-\frac52$, intercept $\frac42 = 2$.`),
Q('P5.1-12', 4, R`The line $y = mx + c$ passes through $(1, 5)$ and crosses the $x$-axis at $x = -4$. Find $m$ and $c$. [[3]]`,
  [R`Two points: $(1, 5)$ and $(-4, 0)$.`, R`$5 = m + c$ and $0 = -4m + c$.`],
  [R`|M1|Two equations`, R`|A1|$m = 1$`, R`|A1|$c = 4$`], R`$m = 1$, $c = 4$`,
  R`Subtracting: $5 = 5m$, so $m = 1$ and $c = 4$.`),
Q('P5.1-13', 4, R`A line with gradient $-2$ passes through $(3, k)$ and $(k, 9)$. Find $k$. [[3]]`,
  [R`$\frac{9 - k}{k - 3} = -2$.`, R`Multiply out: $9 - k = -2k + 6$.`],
  [R`|M1|$\frac{9 - k}{k - 3} = -2$`, R`|M1|Linear equation in $k$`, R`|A1|$k = -3$`], R`$k = -3$`,
  R`$9 - k = -2(k - 3) = -2k + 6$, so $k = -3$. Check: $(3, -3)$ to $(-3, 9)$ has gradient $\frac{12}{-6} = -2$.`),
Q('P5.1-14', 4, R`The line $L$ has equation $(k - 1)x + 2y - 6 = 0$.

**(a)** Find $k$ if $L$ has gradient $3$. [[2]]

**(b)** Find $k$ if $L$ passes through $(2, 1)$. [[2]]`,
  [R`Gradient $-\frac{k - 1}{2}$.`, R`Substitute $x = 2$, $y = 1$.`],
  [R`(a)|M1|$-\frac{k - 1}{2} = 3$`, R`(a)|A1|$k = -5$`, R`(b)|M1|$2(k - 1) + 2 - 6 = 0$`, R`(b)|A1|$k = 3$`], R`(a) $k = -5$ (b) $k = 3$`,
  R`(a) $y = -\frac{k - 1}{2}x + 3$; $k - 1 = -6$. (b) $2k - 2 - 4 = 0$, $k = 3$.`),
Q('P5.1-15', 5, R`The line $L$ passes through $A(-1, 2)$ and $B(3, 8)$.

**(a)** Find the gradient of $L$. [[1]]

**(b)** Find an equation of $L$ in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers. [[2]]

**(c)** $L$ meets the $y$-axis at $C$ and the $x$-axis at $D$. Find the area of triangle $OCD$, where $O$ is the origin. [[3]]

**(d)** Find the point on $L$ whose $x$- and $y$-coordinates are equal. [[2]]`,
  [R`(b) $y - 2 = \frac32(x + 1)$.`, R`(c) The triangle is right-angled at $O$.`],
  [R`(a)|B1|$\frac32$`, R`(b)|M1|$y - 2 = \frac32(x + 1)$`, R`(b)|A1|$3x - 2y + 7 = 0$`, R`(c)|B1|$C\left(0, \frac72\right)$`, R`(c)|B1|$D\left(-\frac73, 0\right)$`, R`(c)|A1|Area $\frac{49}{12}$`, R`(d)|M1|$3x - 2x + 7 = 0$`, R`(d)|A1|$(-7, -7)$`],
  R`(a) $\frac32$ (b) $3x - 2y + 7 = 0$ (c) $\frac{49}{12}$ (d) $(-7, -7)$`,
  R`(a) $\frac{8 - 2}{3 + 1} = \frac32$.

(b) $2y - 4 = 3x + 3$, so $3x - 2y + 7 = 0$.

(c) $x = 0$: $y = \frac72$. $y = 0$: $x = -\frac73$. Area $= \frac12 \times \frac72 \times \frac73 = \frac{49}{12}$.

(d) Put $y = x$: $x + 7 = 0$, so $(-7, -7)$.`)
]};

CONTENT['P5.2'] = {
notes: R`
### Point and gradient
The line with gradient $m$ through $(x_1, y_1)$ is
$$y - y_1 = m(x - x_1)$$

### Two points
1. Find the gradient $m = \frac{y_2 - y_1}{x_2 - x_1}$.
2. Use either point in $y - y_1 = m(x - x_1)$.

Horizontal lines are $y = k$; vertical lines are $x = k$ (no gradient).

::: booklet
**Not in the formula booklet:** $y - y_1 = m(x - x_1)$.
:::

### Worked example 1
Find the equation of the line with gradient $4$ through $(3, -2)$.
- $y + 2 = 4(x - 3)$, so $y = 4x - 14$.

### Worked example 2: watch the signs
Find the equation of the line through $(-2, 5)$ and $(4, -1)$.
1. $m = \frac{-1 - 5}{4 + 2} = -1$.
2. $y - 5 = -1(x - (-2)) = -(x + 2)$, so $y = -x + 3$.

**The trap:** writing $y - 5 = -1(x - 2)$. Subtracting $-2$ gives $x + 2$. Check your answer with the **other** point: $-4 + 3 = -1$. ✓

### Watch out
- If the question asks for $ax + by + c = 0$, clear fractions and make $a$, $b$, $c$ integers.
- Always check that both given points satisfy your equation.
`,
questions: [
Q('P5.2-1', 1, R`Find the equation of the line with gradient $3$ through $(1, 4)$, in the form $y = mx + c$. [[2]]`,
  [R`$y - 4 = 3(x - 1)$.`, R`Expand and tidy.`],
  [R`|M1|$y - 4 = 3(x - 1)$`, R`|A1|$y = 3x + 1$`], R`$y = 3x + 1$`,
  R`$y = 3x - 3 + 4 = 3x + 1$.`),
Q('P5.2-2', 1, R`Find the equation of the line with gradient $-2$ through $(-1, 3)$. [[2]]`,
  [R`$y - 3 = -2(x + 1)$.`, R`Careful with the sign of $-1$.`],
  [R`|M1|$y - 3 = -2(x + 1)$`, R`|A1|$y = -2x + 1$`], R`$y = -2x + 1$`,
  R`$y = -2x - 2 + 3 = -2x + 1$.`),
Q('P5.2-3', 1, R`Find the equation of the line with gradient $\frac12$ through $(4, 0)$. [[2]]`,
  [R`$y - 0 = \frac12(x - 4)$.`, R`Expand.`],
  [R`|M1|$y = \frac12(x - 4)$`, R`|A1|$y = \frac12 x - 2$`], R`$y = \frac12 x - 2$`,
  R`$y = \frac12 x - 2$.`),
Q('P5.2-4', 2, R`Find the equation of the line through $(2, 3)$ and $(6, 11)$. [[3]]`,
  [R`Gradient first.`, R`$m = \frac{8}{4}$.`],
  [R`|M1|$m = 2$`, R`|M1|$y - 3 = 2(x - 2)$`, R`|A1|$y = 2x - 1$`], R`$y = 2x - 1$`,
  R`$m = 2$; $y = 2x - 4 + 3 = 2x - 1$. Check: $2(6) - 1 = 11$.`),
Q('P5.2-5', 2, R`Find the equation of the line through $(-3, 4)$ and $(1, -4)$. [[3]]`,
  [R`$m = \frac{-4 - 4}{1 + 3}$.`, R`$m = -2$.`],
  [R`|M1|$m = -2$`, R`|M1|$y + 4 = -2(x - 1)$`, R`|A1|$y = -2x - 2$`], R`$y = -2x - 2$`,
  R`$y = -2x + 2 - 4 = -2x - 2$. Check: $-2(-3) - 2 = 4$.`),
Q('P5.2-6', 2, R`Find the equation of the line through $(1, 5)$ and $(4, 3)$ in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers. [[3]]`,
  [R`$m = -\frac23$.`, R`Multiply by $3$ to clear the fraction.`],
  [R`|M1|$m = -\frac23$`, R`|M1|$y - 5 = -\frac23(x - 1)$`, R`|A1|$2x + 3y - 17 = 0$`], R`$2x + 3y - 17 = 0$`,
  R`$3y - 15 = -2x + 2$, so $2x + 3y - 17 = 0$. Check $(4, 3)$: $8 + 9 - 17 = 0$.`),
Q('P5.2-7', 2, R`Write down the equations of the lines through $(5, -2)$ that are **(a)** parallel to the $x$-axis **(b)** parallel to the $y$-axis. [[2]]`,
  [R`Parallel to the $x$-axis: $y$ is constant.`, R`Parallel to the $y$-axis: $x$ is constant.`],
  [R`(a)|B1|$y = -2$`, R`(b)|B1|$x = 5$`], R`(a) $y = -2$ (b) $x = 5$`,
  R`A horizontal line keeps the $y$-coordinate; a vertical one keeps the $x$-coordinate.`),
Q('P5.2-8', 3, R`Find the equation of the line through $A(4, 1)$ and the point where $y = 3x - 5$ crosses the $y$-axis. [[3]]`,
  [R`The other point is $(0, -5)$.`, R`$m = \frac{1 + 5}{4 - 0}$.`],
  [R`|B1|$(0, -5)$`, R`|M1|$m = \frac32$`, R`|A1|$y = \frac32 x - 5$`], R`$y = \frac32 x - 5$`,
  R`The $y$-intercept is $(0, -5)$, so $c = -5$ and $m = \frac64 = \frac32$.`),
Q('P5.2-9', 3, R`The line $L$ passes through $(-2, 7)$ and $(4, -2)$. Find where $L$ crosses the $x$-axis. [[4]]`,
  [R`$m = -\frac96 = -\frac32$.`, R`Find the equation, then put $y = 0$.`],
  [R`|M1|$m = -\frac32$`, R`|M1|$y - 7 = -\frac32(x + 2)$`, R`|A1|$y = -\frac32 x + 4$`, R`|A1|$\left(\frac83, 0\right)$`], R`$\left(\frac83, 0\right)$`,
  R`$y = -\frac32 x - 3 + 7 = -\frac32 x + 4$. $y = 0$: $x = \frac83$.`),
Q('P5.2-10', 3, R`The lines $y = 2x + 1$ and $x + y = 7$ meet at $P$. Find the equation of the line through $P$ and $(0, -3)$. [[4]]`,
  [R`Solve simultaneously for $P$.`, R`$P(2, 5)$.`],
  [R`|M1|$x + 2x + 1 = 7$`, R`|A1|$P(2, 5)$`, R`|M1|$m = \frac{5 + 3}{2}$`, R`|A1|$y = 4x - 3$`], R`$y = 4x - 3$`,
  R`$3x = 6$, $x = 2$, $y = 5$. $m = 4$ and $c = -3$.`),
Q('P5.2-11', 3, R`Find the equation of the line with gradient $-1$ through the midpoint of $A(1, 4)$ and $B(5, 8)$. [[3]]`,
  [R`The midpoint is the average of the coordinates.`, R`$(3, 6)$.`],
  [R`|B1|$(3, 6)$`, R`|M1|$y - 6 = -(x - 3)$`, R`|A1|$y = -x + 9$`], R`$y = -x + 9$`,
  R`Midpoint $\left(\frac{1 + 5}{2}, \frac{4 + 8}{2}\right) = (3, 6)$; $y = -x + 3 + 6$.`),
Q('P5.2-12', 4, R`Triangle $ABC$ has vertices $A(0, 0)$, $B(6, 0)$ and $C(2, 4)$. Find the equation of the median from $B$ (the line from $B$ to the midpoint of $AC$), in the form $ax + by + c = 0$. [[4]]`,
  [R`The midpoint of $AC$ is $(1, 2)$.`, R`$m = \frac{2 - 0}{1 - 6}$.`],
  [R`|B1|$(1, 2)$`, R`|M1|$m = -\frac25$`, R`|M1|$y = -\frac25(x - 6)$`, R`|A1|$2x + 5y - 12 = 0$`], R`$2x + 5y - 12 = 0$`,
  R`$5y = -2x + 12$, so $2x + 5y - 12 = 0$. Check $(1, 2)$: $2 + 10 - 12 = 0$.`),
Q('P5.2-13', 4, R`A line passes through $(2, 5)$. Its $y$-intercept is twice its $x$-intercept, and neither is zero. Find its equation. [[4]]`,
  [R`If the $x$-intercept is $a$, the line goes through $(a, 0)$ and $(0, 2a)$: gradient $-2$.`, R`Gradient $-2$ through $(2, 5)$.`],
  [R`|M1|Points $(a, 0)$ and $(0, 2a)$`, R`|A1|Gradient $-2$`, R`|M1|$y - 5 = -2(x - 2)$`, R`|A1|$y = -2x + 9$`], R`$y = -2x + 9$`,
  R`The gradient is $\frac{2a - 0}{0 - a} = -2$, so $y = -2x + 9$. (Intercepts $4.5$ and $9$.)`),
Q('P5.2-14', 4, R`Show that $(1, 2)$, $(3, 8)$ and $(-1, -4)$ lie on one straight line, and find its equation. [[4]]`,
  [R`Compare two gradients.`, R`Both are $3$.`],
  [R`|M1|$\frac{8 - 2}{3 - 1} = 3$`, R`|M1|$\frac{-4 - 2}{-1 - 1} = 3$`, R`|A1|Same gradient through a common point`, R`|A1|$y = 3x - 1$`], R`$y = 3x - 1$`,
  R`Both gradients from $(1, 2)$ are $3$, so the points are collinear, on $y - 2 = 3(x - 1)$, i.e. $y = 3x - 1$.`),
Q('P5.2-15', 5, R`The line $L_1$ passes through $A(2, 3)$ and $B(8, 6)$.

**(a)** Find an equation of $L_1$. [[3]]

**(b)** The line $L_2$ has equation $y = -2x + 17$ and meets $L_1$ at $C$. Find $C$. [[3]]

**(c)** Find the ratio $AC : CB$. [[2]]`,
  [R`$m = \frac36 = \frac12$.`, R`For (c), compare the $x$-steps from $A$ to $C$ and $C$ to $B$ (they're on the same line).`],
  [R`(a)|M1|$m = \frac12$`, R`(a)|M1|$y - 3 = \frac12(x - 2)$`, R`(a)|A1|$y = \frac12 x + 2$`, R`(b)|M1|$\frac12 x + 2 = -2x + 17$`, R`(b)|A1|$x = 6$`, R`(b)|A1|$C(6, 5)$`, R`(c)|M1|$x$-steps $4$ and $2$`, R`(c)|A1|$2 : 1$`],
  R`(a) $y = \frac12 x + 2$ (b) $C(6, 5)$ (c) $2 : 1$`,
  R`(b) $\frac52 x = 15$, so $x = 6$, $y = 5$.

(c) From $A$ to $C$ the $x$-coordinate rises by $4$; from $C$ to $B$ by $2$. On a straight line the lengths are in the same ratio: $AC : CB = 2 : 1$.`)
]};

CONTENT['P5.3'] = {
notes: R`
### Parallel lines
Parallel lines have **equal** gradients.

### Perpendicular lines
If two lines with gradients $m_1$ and $m_2$ are perpendicular, then
$$m_1 m_2 = -1, \quad \text{so} \quad m_2 = -\frac{1}{m_1}$$
Flip the fraction and change its sign: the **negative reciprocal**.

::: booklet
**Not in the formula booklet:** $m_1 m_2 = -1$.
:::

### Worked example 1
Find the line through $(3, 1)$ perpendicular to $2x - 3y + 6 = 0$.
1. $y = \frac23 x + 2$, so $m_1 = \frac23$.
2. $m_2 = -\frac32$.
3. $y - 1 = -\frac32(x - 3)$, so $2y - 2 = -3x + 9$, i.e. $3x + 2y - 11 = 0$.

[[fig:P5.3-perp]]

### Worked example 2: the negative reciprocal
A line has gradient $-\frac25$. Find the gradient of a perpendicular line.
- Flip: $-\frac52$. Change the sign: $+\frac52$.

**The trap:** only flipping, giving $-\frac52$. Check: $-\frac25 \times \frac52 = -1$. ✓

### Perpendicular bisectors
The perpendicular bisector of $AB$ goes through the **midpoint** of $AB$ with gradient $-\frac{1}{m_{AB}}$.

### Watch out
- A horizontal line ($m = 0$) is perpendicular to a **vertical** line $x = k$; the formula $-\frac1m$ doesn't work there.
- To test for a right angle at $B$ in triangle $ABC$, multiply the gradients of $AB$ and $BC$.
`,
questions: [
Q('P5.3-1', 1, R`Write down the gradient of a line that is **(a)** parallel to **(b)** perpendicular to $y = 5x - 2$. [[2]]`,
  [R`Parallel: same gradient.`, R`Perpendicular: negative reciprocal.`],
  [R`(a)|B1|$5$`, R`(b)|B1|$-\frac15$`], R`(a) $5$ (b) $-\frac15$`,
  R`$5 \times \left(-\frac15\right) = -1$.`),
Q('P5.3-2', 1, R`Determine whether $y = 3x + 1$ and $6x - 2y + 5 = 0$ are parallel. [[1]]`,
  [R`Rearrange the second.`, R`$2y = 6x + 5$.`],
  [R`|B1|Yes: both gradients are $3$`], R`Yes, both have gradient $3$`,
  R`$y = 3x + \frac52$ has gradient $3$, so the lines are parallel (and different).`),
Q('P5.3-3', 1, R`Show that $y = 2x + 3$ and $x + 2y = 4$ are perpendicular. [[2]]`,
  [R`Gradient of the second: $-\frac12$.`, R`Multiply the gradients.`],
  [R`|B1|Gradients $2$ and $-\frac12$`, R`|B1|Product $-1$`], R`$2 \times \left(-\frac12\right) = -1$`,
  R`$y = -\frac12 x + 2$. The product of the gradients is $-1$.`),
Q('P5.3-4', 2, R`Find the equation of the line through $(1, -2)$ parallel to $y = 4x + 7$. [[2]]`,
  [R`Gradient $4$.`, R`$y + 2 = 4(x - 1)$.`],
  [R`|M1|$y + 2 = 4(x - 1)$`, R`|A1|$y = 4x - 6$`], R`$y = 4x - 6$`,
  R`$y = 4x - 4 - 2 = 4x - 6$.`),
Q('P5.3-5', 2, R`Find the equation of the line through $(3, 5)$ perpendicular to $y = -3x + 1$. [[3]]`,
  [R`The perpendicular gradient is $\frac13$.`, R`$y - 5 = \frac13(x - 3)$.`],
  [R`|B1|$m = \frac13$`, R`|M1|$y - 5 = \frac13(x - 3)$`, R`|A1|$y = \frac13 x + 4$`], R`$y = \frac13 x + 4$`,
  R`$y = \frac13 x - 1 + 5$.`),
Q('P5.3-6', 2, R`The line $y = kx + 2$ is perpendicular to $2x - 5y + 1 = 0$. Find $k$. [[2]]`,
  [R`$5y = 2x + 1$: gradient $\frac25$.`, R`$k \times \frac25 = -1$.`],
  [R`|M1|Gradient $\frac25$`, R`|A1|$k = -\frac52$`], R`$k = -\frac52$`,
  R`$k = -\frac{1}{2/5} = -\frac52$.`),
Q('P5.3-7', 2, R`State whether each pair of lines is parallel, perpendicular or neither.

**(a)** $y = \frac12 x - 3$ and $2y = x + 4$

**(b)** $y = 3x$ and $3y = -x + 6$

**(c)** $y = 2x + 1$ and $y = -2x$ [[3]]`,
  [R`Find each gradient.`, R`Parallel: equal. Perpendicular: product $-1$.`],
  [R`(a)|B1|Parallel`, R`(b)|B1|Perpendicular`, R`(c)|B1|Neither`], R`(a) parallel (b) perpendicular (c) neither`,
  R`(a) $\frac12$ and $\frac12$. (b) $3$ and $-\frac13$: product $-1$. (c) $2$ and $-2$: product $-4$.`),
Q('P5.3-8', 3, R`Find the equation of the perpendicular bisector of $A(2, 1)$ and $B(6, 5)$. [[4]]`,
  [R`Midpoint $(4, 3)$; gradient of $AB$ is $1$.`, R`The bisector has gradient $-1$.`],
  [R`|B1|Midpoint $(4, 3)$`, R`|B1|$m_{AB} = 1$`, R`|M1|$y - 3 = -(x - 4)$`, R`|A1|$y = -x + 7$`], R`$y = -x + 7$`,
  R`$m_{AB} = \frac44 = 1$, so the bisector has gradient $-1$ through $(4, 3)$: $y = -x + 7$.`),
Q('P5.3-9', 3, R`Find the equation of the line through $(-2, 3)$ perpendicular to $3x + 4y - 12 = 0$, in the form $ax + by + c = 0$ with integer coefficients. [[3]]`,
  [R`The given line has gradient $-\frac34$.`, R`Perpendicular gradient $\frac43$.`],
  [R`|B1|$m = \frac43$`, R`|M1|$y - 3 = \frac43(x + 2)$`, R`|A1|$4x - 3y + 17 = 0$`], R`$4x - 3y + 17 = 0$`,
  R`$3y - 9 = 4x + 8$, so $4x - 3y + 17 = 0$. Check $(-2, 3)$: $-8 - 9 + 17 = 0$.`),
Q('P5.3-10', 3, R`$A(1, 3)$, $B(4, 7)$ and $C(8, 4)$. Show that angle $ABC$ is a right angle. [[3]]`,
  [R`Gradients of $AB$ and $BC$.`, R`Multiply them.`],
  [R`|M1|$m_{AB} = \frac43$`, R`|M1|$m_{BC} = -\frac34$`, R`|A1|Product $-1$, so $AB \perp BC$`], R`$\frac43 \times \left(-\frac34\right) = -1$`,
  R`$m_{AB} = \frac{7 - 3}{4 - 1} = \frac43$, $m_{BC} = \frac{4 - 7}{8 - 4} = -\frac34$.`),
Q('P5.3-11', 3, R`The line $L$ passes through $(4, 0)$ and is perpendicular to $y = 2x - 1$. Find the coordinates of the point where $L$ meets $y = 2x - 1$. [[4]]`,
  [R`$L$ has gradient $-\frac12$.`, R`Solve $2x - 1 = -\frac12 x + 2$.`],
  [R`|M1|$L$: $y = -\frac12(x - 4)$`, R`|A1|$y = -\frac12 x + 2$`, R`|M1|Solves simultaneously`, R`|A1|$\left(\frac65, \frac75\right)$`], R`$\left(\frac65, \frac75\right)$`,
  R`$\frac52 x = 3$, so $x = \frac65$ and $y = \frac{12}{5} - 1 = \frac75$.`),
Q('P5.3-12', 4, R`The point $P$ is $(5, 0)$ and the line $L$ is $y = x + 1$.

**(a)** Find the foot of the perpendicular from $P$ to $L$. [[3]]

**(b)** Hence find the shortest distance from $P$ to $L$. [[2]]`,
  [R`The perpendicular through $P$ has gradient $-1$.`, R`The shortest distance is along the perpendicular.`],
  [R`(a)|M1|$y = -x + 5$`, R`(a)|M1|$x + 1 = -x + 5$`, R`(a)|A1|$(2, 3)$`, R`(b)|M1|$\sqrt{3^2 + 3^2}$`, R`(b)|A1|$3\sqrt2$`], R`(a) $(2, 3)$ (b) $3\sqrt2$`,
  R`(a) $2x = 4$, so the foot is $(2, 3)$. (b) The distance from $(5, 0)$ to $(2, 3)$ is $\sqrt{9 + 9} = 3\sqrt2$.`),
Q('P5.3-13', 4, R`The lines $(k + 1)x + 2y = 3$ and $3x + (k - 2)y = 1$ are perpendicular. Find $k$. [[4]]`,
  [R`Gradients $-\frac{k + 1}{2}$ and $-\frac{3}{k - 2}$.`, R`Their product is $-1$.`],
  [R`|B1|Both gradients`, R`|M1|$\frac{3(k + 1)}{2(k - 2)} = -1$`, R`|M1|$3k + 3 = -2k + 4$`, R`|A1|$k = \frac15$`], R`$k = \frac15$`,
  R`$\left(-\frac{k + 1}{2}\right)\left(-\frac{3}{k - 2}\right) = -1$, so $3(k + 1) = -2(k - 2)$, $5k = 1$. (At $k = 2$ the second line would be vertical and the first would have gradient $-\frac32$, not perpendicular.)`),
Q('P5.3-14', 4, R`$ABCD$ is a square. $A(1, 1)$ and $C(5, 3)$ are opposite corners.

**(a)** Find the equation of the diagonal $BD$. [[4]]

**(b)** Find the coordinates of $B$ and $D$. [[2]]`,
  [R`The diagonals of a square bisect each other at right angles.`, R`From the centre $(3, 2)$, $C$ is $(2, 1)$ away; $B$ and $D$ are $(\mp1, \pm2)$ away.`],
  [R`(a)|B1|Centre $(3, 2)$`, R`(a)|B1|$m_{AC} = \frac12$`, R`(a)|M1|Gradient of $BD$ is $-2$`, R`(a)|A1|$y = -2x + 8$`, R`(b)|M1|Uses equal half-diagonals at right angles`, R`(b)|A1|$(2, 4)$ and $(4, 0)$`], R`(a) $y = -2x + 8$ (b) $(2, 4)$ and $(4, 0)$`,
  R`(a) $BD$ is the perpendicular bisector of $AC$: through $(3, 2)$ with gradient $-2$.

(b) The centre-to-corner vector $(2, 1)$ turned through $90°$ is $(-1, 2)$, giving $(2, 4)$ and $(4, 0)$. Both lie on $y = -2x + 8$.`),
Q('P5.3-15', 5, R`Triangle $ABC$ has vertices $A(-1, 2)$, $B(5, 4)$ and $C(3, -2)$.

**(a)** Find the equation of the perpendicular bisector of $AB$. [[3]]

**(b)** Find the equation of the perpendicular bisector of $AC$ and show that it passes through $B$. [[3]]

**(c)** Find the point where the two perpendicular bisectors meet. [[2]]`,
  [R`Midpoint of $AB$ is $(2, 3)$ and $m_{AB} = \frac13$.`, R`Midpoint of $AC$ is $(1, 0)$ and $m_{AC} = -1$.`],
  [R`(a)|B1|$(2, 3)$ and $m_{AB} = \frac13$`, R`(a)|M1|Gradient $-3$`, R`(a)|A1|$y = -3x + 9$`, R`(b)|M1|$(1, 0)$, gradient $1$`, R`(b)|A1|$y = x - 1$`, R`(b)|A1|$5 - 1 = 4$ so $B$ lies on it`, R`(c)|M1|$-3x + 9 = x - 1$`, R`(c)|A1|$\left(\frac52, \frac32\right)$`],
  R`(a) $y = -3x + 9$ (b) $y = x - 1$ (c) $\left(\frac52, \frac32\right)$`,
  R`(a) $y - 3 = -3(x - 2)$.

(b) $y = x - 1$; at $x = 5$, $y = 4$, which is $B$. (So $BA = BC$: the triangle is isosceles.)

(c) $4x = 10$, $x = \frac52$, $y = \frac32$. This point is the same distance from all three vertices.`)
]};

CONTENT['P5.4'] = {
notes: R`
### Distance between two points
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
This is Pythagoras: the horizontal and vertical steps are the two shorter sides.

### Areas
- For a triangle use $\frac12 \times$ base $\times$ **perpendicular** height.
- A side on an axis makes a good base; the height is then a coordinate.
- If two sides are perpendicular, they are a base and height.

::: booklet
**Not in the formula booklet:** the distance formula.
:::

### Worked example 1
Find the distance between $(-2, 3)$ and $(4, -5)$.
- $\sqrt{6^2 + (-8)^2} = \sqrt{100} = 10$.

### Worked example 2: use a perpendicular height
Find the area of the triangle formed by $y = 2x + 2$, $y = -x + 5$ and the $x$-axis.
1. $x$-intercepts: $(-1, 0)$ and $(5, 0)$, so the base is $6$.
2. The lines meet where $2x + 2 = -x + 5$: $x = 1$, $y = 4$. The height is $4$.
3. Area $= \frac12 \times 6 \times 4 = 12$.

[[fig:P5.4-area]]

**The trap:** using a sloping side as the height. The height must be perpendicular to the base.

### Watch out
- Leave lengths as exact surds unless told otherwise: $\sqrt{20} = 2\sqrt5$.
- Sketch the points first; it shows you a sensible base.
`,
questions: [
Q('P5.4-1', 1, R`Find the distance between $(1, 2)$ and $(4, 6)$. [[2]]`,
  [R`Steps of $3$ and $4$.`, R`$\sqrt{9 + 16}$.`],
  [R`|M1|$\sqrt{3^2 + 4^2}$`, R`|A1|$5$`], R`$5$`,
  R`$d = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$.`),
Q('P5.4-2', 1, R`Find the distance between $(-3, 1)$ and $(2, -11)$. [[2]]`,
  [R`Steps of $5$ and $-12$.`, R`$\sqrt{25 + 144}$.`],
  [R`|M1|$\sqrt{5^2 + 12^2}$`, R`|A1|$13$`], R`$13$`,
  R`$d = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$.`),
Q('P5.4-3', 1, R`Find the exact distance from the origin to $(2, 4)$, in simplified surd form. [[2]]`,
  [R`$\sqrt{4 + 16}$.`, R`$\sqrt{20} = \sqrt{4}\sqrt5$.`],
  [R`|M1|$\sqrt{20}$`, R`|A1|$2\sqrt5$`], R`$2\sqrt5$`,
  R`$\sqrt{20} = 2\sqrt5$.`),
Q('P5.4-4', 2, R`The points $A(1, k)$ and $B(4, 5)$ are $5$ units apart. Find the possible values of $k$. [[3]]`,
  [R`$3^2 + (5 - k)^2 = 25$.`, R`$(5 - k)^2 = 16$.`],
  [R`|M1|$9 + (5 - k)^2 = 25$`, R`|M1|$5 - k = \pm4$`, R`|A1|$k = 1$ or $9$`], R`$k = 1$ or $k = 9$`,
  R`$5 - k = \pm4$, so $k = 1$ or $9$.`),
Q('P5.4-5', 2, R`Find the area of the triangle formed by the line $2x + 3y = 12$ and the coordinate axes. [[3]]`,
  [R`Intercepts $(6, 0)$ and $(0, 4)$.`, R`Right angle at the origin.`],
  [R`|B1|$(6, 0)$`, R`|B1|$(0, 4)$`, R`|B1|Area $12$`], R`$12$`,
  R`$\frac12 \times 6 \times 4 = 12$.`),
Q('P5.4-6', 2, R`Show that the triangle with vertices $A(1, 1)$, $B(4, 5)$ and $C(-3, 4)$ is isosceles. [[3]]`,
  [R`Work out all three lengths.`, R`Two of them are equal.`],
  [R`|M1|Uses the distance formula`, R`|A1|$AB = 5$ and $AC = 5$`, R`|A1|$BC = \sqrt{50}$, so exactly two sides are equal`], R`$AB = AC = 5$`,
  R`$AB = \sqrt{9 + 16} = 5$, $AC = \sqrt{16 + 9} = 5$, $BC = \sqrt{49 + 1} = 5\sqrt2$.`),
Q('P5.4-7', 2, R`Find the exact perimeter of the triangle with vertices $(0, 0)$, $(3, 0)$ and $(0, 3)$. [[2]]`,
  [R`Two sides are $3$.`, R`The hypotenuse is $\sqrt{9 + 9}$.`],
  [R`|M1|$3\sqrt2$`, R`|A1|$6 + 3\sqrt2$`], R`$6 + 3\sqrt2$`,
  R`$3 + 3 + \sqrt{18} = 6 + 3\sqrt2$.`),
Q('P5.4-8', 3, R`$A(2, 1)$, $B(6, 4)$ and $C(3, 8)$.

**(a)** Show that $AB$ is perpendicular to $BC$. [[2]]

**(b)** Find the area of triangle $ABC$. [[2]]`,
  [R`$m_{AB} = \frac34$, $m_{BC} = -\frac43$.`, R`The perpendicular sides are the base and height.`],
  [R`(a)|M1|Both gradients`, R`(a)|A1|Product $-1$`, R`(b)|M1|$AB = BC = 5$`, R`(b)|A1|$\frac{25}{2}$`], R`(b) $\frac{25}{2}$`,
  R`(a) $\frac34 \times \left(-\frac43\right) = -1$. (b) $AB = \sqrt{16 + 9} = 5$, $BC = \sqrt{9 + 16} = 5$; area $\frac12 \times 5 \times 5$.`),
Q('P5.4-9', 3, R`The lines $y = x + 2$ and $y = 8 - 2x$ meet at $P$. They cross the $x$-axis at $Q$ and $R$ respectively. Find the area of triangle $PQR$. [[4]]`,
  [R`$P$: $x + 2 = 8 - 2x$.`, R`$QR$ is the base; the height is the $y$-coordinate of $P$.`],
  [R`|B1|$P(2, 4)$`, R`|B1|$Q(-2, 0)$`, R`|B1|$R(4, 0)$`, R`|A1|Area $12$`], R`$12$`,
  R`$P(2, 4)$, $QR = 6$, area $\frac12 \times 6 \times 4 = 12$.`, { solFig: FIGS['P5.4-9'] }),
Q('P5.4-10', 3, R`The point $P(t, 2t)$ is $5$ units from $(1, 7)$. Find the possible coordinates of $P$. [[4]]`,
  [R`$(t - 1)^2 + (2t - 7)^2 = 25$.`, R`$5t^2 - 30t + 25 = 0$.`],
  [R`|M1|Distance equation`, R`|M1|$t^2 - 6t + 5 = 0$`, R`|A1|$t = 1$ or $5$`, R`|A1|$(1, 2)$ or $(5, 10)$`], R`$(1, 2)$ or $(5, 10)$`,
  R`$t^2 - 2t + 1 + 4t^2 - 28t + 49 = 25$, so $5t^2 - 30t + 25 = 0$, $(t - 1)(t - 5) = 0$.`),
Q('P5.4-11', 3, R`Find the point on the $x$-axis that is the same distance from $A(1, 3)$ as from $B(5, 1)$. [[3]]`,
  [R`Let it be $(x, 0)$.`, R`$(x - 1)^2 + 9 = (x - 5)^2 + 1$.`],
  [R`|M1|Equates squared distances`, R`|M1|$8x = 16$`, R`|A1|$(2, 0)$`], R`$(2, 0)$`,
  R`$x^2 - 2x + 10 = x^2 - 10x + 26$, so $8x = 16$, $x = 2$.`),
Q('P5.4-12', 4, R`The line $L$ has equation $y = 2x - 4$ and meets the $x$-axis at $A$. The line through $B(0, 6)$ perpendicular to $L$ meets $L$ at $C$. Find the area of triangle $ABC$. [[5]]`,
  [R`The perpendicular has gradient $-\frac12$: $y = -\frac12 x + 6$.`, R`The right angle is at $C$, so use $CA$ and $CB$.`],
  [R`|B1|$A(2, 0)$`, R`|M1|$y = -\frac12 x + 6$`, R`|A1|$C(4, 4)$`, R`|M1|$CA = CB = \sqrt{20}$`, R`|A1|Area $10$`], R`$10$`,
  R`$2x - 4 = -\frac12 x + 6$ gives $x = 4$, $C(4, 4)$. $CA = \sqrt{4 + 16}$, $CB = \sqrt{16 + 4}$. Area $\frac12 \times 20 = 10$.`),
Q('P5.4-13', 4, R`Find the area of the triangle with vertices $A(-1, 4)$, $B(3, 2)$ and $C(4, 4)$. [[4]]`,
  [R`Check whether two sides are perpendicular.`, R`$m_{AB} = -\frac12$, $m_{BC} = 2$.`],
  [R`|M1|Gradients of $AB$ and $BC$`, R`|A1|Right angle at $B$`, R`|M1|$AB = 2\sqrt5$, $BC = \sqrt5$`, R`|A1|Area $5$`], R`$5$`,
  R`$m_{AB} \times m_{BC} = -1$. $AB = \sqrt{16 + 4} = 2\sqrt5$, $BC = \sqrt{1 + 4} = \sqrt5$. Area $\frac12 \times 2\sqrt5 \times \sqrt5 = 5$. (Or base $AC = 5$ along $y = 4$, height $2$.)`),
Q('P5.4-14', 4, R`Find the area of the quadrilateral $OABC$ with $O(0, 0)$, $A(4, 0)$, $B(6, 3)$ and $C(0, 5)$. [[4]]`,
  [R`Take the trapezium under $CB$ (from $x = 0$ to $6$) and remove a triangle.`, R`The triangle under $AB$ has base $2$ and height $3$.`],
  [R`|M1|Splits into simpler shapes`, R`|A1|Trapezium area $\frac{5 + 3}{2} \times 6 = 24$`, R`|A1|Triangle $3$`, R`|A1|$21$`], R`$21$`,
  R`$24 - \frac12 \times 2 \times 3 = 21$.`, { fig: FIGS['P5.4-14'] }),
Q('P5.4-15', 5, R`The line $L_1$ has equation $y = 3x - 2$. The line $L_2$ passes through $R(8, 0)$ and is perpendicular to $L_1$.

**(a)** Find an equation of $L_2$. [[2]]

**(b)** Find the point $P$ where $L_1$ and $L_2$ meet. [[2]]

**(c)** $L_1$ meets the $x$-axis at $Q$. Find the exact area of triangle $PQR$. [[3]]

**(d)** Find the exact shortest distance from $R$ to $L_1$. [[1]]`,
  [R`$L_2$ has gradient $-\frac13$.`, R`For (c), $QR$ is on the $x$-axis; the height is the $y$-coordinate of $P$.`],
  [R`(a)|M1|$y = -\frac13(x - 8)$`, R`(a)|A1|$x + 3y - 8 = 0$`, R`(b)|M1|$3x - 2 = \frac{8 - x}{3}$`, R`(b)|A1|$P\left(\frac75, \frac{11}{5}\right)$`, R`(c)|B1|$Q\left(\frac23, 0\right)$`, R`(c)|M1|$\frac12 \times \frac{22}{3} \times \frac{11}{5}$`, R`(c)|A1|$\frac{121}{15}$`, R`(d)|B1|$RP = \frac{11\sqrt{10}}{5}$`],
  R`(a) $x + 3y - 8 = 0$ (b) $\left(\frac75, \frac{11}{5}\right)$ (c) $\frac{121}{15}$ (d) $\frac{11\sqrt{10}}{5}$`,
  R`(b) $9x - 6 = 8 - x$, so $x = \frac75$, $y = \frac{21}{5} - 2 = \frac{11}{5}$.

(c) $QR = 8 - \frac23 = \frac{22}{3}$. Area $= \frac12 \times \frac{22}{3} \times \frac{11}{5} = \frac{121}{15}$.

(d) $RP$ is perpendicular to $L_1$: $\sqrt{\left(\frac{33}{5}\right)^2 + \left(\frac{11}{5}\right)^2} = \frac{11}{5}\sqrt{9 + 1} = \frac{11\sqrt{10}}{5}$.`)
]};

CONTENT['P5.5'] = {
notes: R`
### Linear models
If one quantity changes at a **constant rate** with another, a straight line models it: $y = mx + c$.
- The **gradient** $m$ is the rate of change (units of $y$ per unit of $x$).
- The **intercept** $c$ is the value of $y$ when $x = 0$ (a starting value or fixed charge).

If $y$ is **directly proportional** to $x$, then $y = kx$: the line goes through the origin.

::: booklet
**Not in the formula booklet:** linear modelling.
:::

### Worked example 1
A plumber charges a £$40$ call-out fee plus £$30$ per hour. Model the cost $C$ for $h$ hours.
- $C = 30h + 40$. For a $3$-hour job, $C = 130$, i.e. £$130$.

[[fig:P5.5-cost]]

### Worked example 2: interpret, don't just calculate
A car is worth £$18\,000$ new and £$12\,600$ after $3$ years. Assume a linear model.
1. $m = \frac{12\,600 - 18\,000}{3} = -1800$: the car **loses £$1800$ a year**.
2. $V = 18\,000 - 1800t$.
3. $V = 0$ when $t = 10$; the model says the car is worthless after $10$ years.

**The trap:** stating the gradient as a bare number. Give its meaning with units ("£$1800$ per year"), and say what the model gets wrong (real cars lose value fastest when new, and a value can't go negative).

### Watch out
- Use the model only near the data (extrapolating far beyond it is unreliable).
- Check whether the answer has to be a whole number (people, items, visits).
`,
questions: [
Q('P5.5-1', 1, R`A taxi charges £$3$ plus £$1.50$ per mile. Write a model for the cost £$C$ of a journey of $m$ miles. [[1]]`,
  [R`Fixed part plus rate times miles.`, R`$C = \ldots m + \ldots$.`],
  [R`|B1|$C = 1.5m + 3$`], R`$C = 1.5m + 3$`,
  R`The fixed charge is the intercept and the cost per mile is the gradient.`),
Q('P5.5-2', 1, R`For the taxi model $C = 1.5m + 3$, interpret the gradient and the intercept. [[2]]`,
  [R`What does $1.5$ measure?`, R`What is the cost when $m = 0$?`],
  [R`|B1|Gradient: each extra mile costs £$1.50$`, R`|B1|Intercept: a fixed charge of £$3$`], R`£1.50 per mile; £3 fixed charge`,
  R`The gradient is the cost per mile; the intercept is the cost before any miles are driven.`),
Q('P5.5-3', 1, R`A tank holds $500$ litres and drains at $20$ litres per minute. Write a model for the volume $V$ after $t$ minutes, and find when the tank is empty. [[2]]`,
  [R`Start at $500$; lose $20$ each minute.`, R`Set $V = 0$.`],
  [R`|B1|$V = 500 - 20t$`, R`|B1|$t = 25$ minutes`], R`$V = 500 - 20t$; $25$ minutes`,
  R`$500 - 20t = 0$ gives $t = 25$.`),
Q('P5.5-4', 2, R`A spring is $12$ cm long with no mass attached and $15$ cm long with a $200$ g mass. Assuming the length $L$ cm varies linearly with the mass $m$ g, find $L$ in terms of $m$. [[3]]`,
  [R`Gradient $= \frac{15 - 12}{200}$.`, R`Intercept $12$.`],
  [R`|M1|$\frac{3}{200}$`, R`|A1|Gradient $0.015$`, R`|A1|$L = 12 + 0.015m$`], R`$L = 12 + 0.015m$`,
  R`The spring stretches $0.015$ cm per gram.`),
Q('P5.5-5', 2, R`Water freezes at $0°$C ($32°$F) and boils at $100°$C ($212°$F). Find a linear model for $F$ in terms of $C$, and convert $37°$C to Fahrenheit. [[3]]`,
  [R`Gradient $\frac{212 - 32}{100}$.`, R`Intercept $32$.`],
  [R`|M1|Gradient $1.8$`, R`|A1|$F = 1.8C + 32$`, R`|A1|$98.6°$F`], R`$F = 1.8C + 32$; $98.6°$F`,
  R`$F = 1.8(37) + 32 = 66.6 + 32 = 98.6$.`),
Q('P5.5-6', 2, R`Contract A costs £$15$ a month plus $10$p per minute. Contract B costs £$25$ a month with unlimited minutes. Find the number of minutes for which they cost the same. [[2]]`,
  [R`$15 + 0.1m = 25$.`, R`Work in pounds.`],
  [R`|M1|$15 + 0.1m = 25$`, R`|A1|$100$ minutes`], R`$100$ minutes`,
  R`$0.1m = 10$, $m = 100$.`),
Q('P5.5-7', 2, R`A $30$ cm candle burns down at $2.5$ cm per hour. Write a model for its height $h$ after $t$ hours, and find when it is $10$ cm tall. [[2]]`,
  [R`$h = 30 - 2.5t$.`, R`Set $h = 10$.`],
  [R`|B1|$h = 30 - 2.5t$`, R`|B1|$t = 8$ hours`], R`$h = 30 - 2.5t$; $8$ hours`,
  R`$2.5t = 20$, $t = 8$.`),
Q('P5.5-8', 3, R`A car is worth £$18\,000$ when new and £$12\,600$ after $3$ years.

**(a)** Assuming the value falls linearly, find a model for the value £$V$ after $t$ years. [[2]]

**(b)** Find when the model predicts the value will be £$3600$. [[1]]

**(c)** Give one reason why the model may not be realistic. [[1]]`,
  [R`Gradient $\frac{12\,600 - 18\,000}{3}$.`, R`Real cars lose value fastest in the first years.`],
  [R`(a)|M1|Gradient $-1800$`, R`(a)|A1|$V = 18\,000 - 1800t$`, R`(b)|B1|$t = 8$`, R`(c)|B1|E.g. depreciation is faster when new; the model gives negative values after $10$ years`], R`(a) $V = 18\,000 - 1800t$ (b) $8$ years`,
  R`(b) $1800t = 14\,400$, $t = 8$. (c) Depreciation isn't constant, and the model goes negative for $t > 10$.`),
Q('P5.5-9', 3, R`$y$ is directly proportional to $x$, and $y = 12$ when $x = 8$. Find $y$ when $x = 10$, and explain why the graph of $y$ against $x$ passes through the origin. [[3]]`,
  [R`$y = kx$.`, R`$k = \frac{12}{8}$.`],
  [R`|M1|$y = kx$, $k = 1.5$`, R`|A1|$y = 15$`, R`|B1|When $x = 0$, $y = k \times 0 = 0$`], R`$y = 15$`,
  R`$k = 1.5$, so $y = 1.5 \times 10 = 15$. Direct proportion has no constant term.`),
Q('P5.5-10', 3, R`A plant is $5$ cm tall after $2$ weeks and $11$ cm tall after $5$ weeks.

**(a)** Find a linear model for its height $h$ cm after $t$ weeks. [[2]]

**(b)** Interpret the gradient and intercept. [[1]]

**(c)** Explain why the model is not suitable for large values of $t$. [[1]]`,
  [R`Gradient $\frac{11 - 5}{5 - 2}$.`, R`$h = 2t + 1$.`],
  [R`(a)|M1|Gradient $2$`, R`(a)|A1|$h = 2t + 1$`, R`(b)|B1|Grows $2$ cm a week; $1$ cm tall at the start`, R`(c)|B1|Plants stop growing, so height won't keep rising`], R`(a) $h = 2t + 1$`,
  R`(a) $5 = 2(2) + c$ gives $c = 1$. (c) After, say, $5$ years it would predict over $5$ m.`),
Q('P5.5-11', 3, R`The cost of making $n$ items is £$(250 + 4n)$. Each item sells for £$9$. Find the number of items needed to break even. [[3]]`,
  [R`Break even: income $=$ cost.`, R`$9n = 250 + 4n$.`],
  [R`|M1|$9n = 250 + 4n$`, R`|A1|$n = 50$`, R`|B1|Sells at least $50$ items`], R`$50$ items`,
  R`$5n = 250$, $n = 50$. More than $50$ items makes a profit.`),
Q('P5.5-12', 4, R`A company's profit was £$42\,000$ in 2018 and £$57\,000$ in 2021. A model $P = a + bt$ is used, where $t$ is the number of years after 2018.

**(a)** Find $a$ and $b$. [[2]]

**(b)** Use the model to predict the profit in 2025. [[1]]

**(c)** Comment on the reliability of your prediction. [[1]]`,
  [R`$t = 0$ in 2018 and $t = 3$ in 2021.`, R`$b = \frac{15\,000}{3}$.`],
  [R`(a)|B1|$a = 42\,000$`, R`(a)|B1|$b = 5000$`, R`(b)|B1|£$77\,000$`, R`(c)|B1|Extrapolation from two data points; unreliable`], R`(a) $a = 42\,000$, $b = 5000$ (b) £$77\,000$`,
  R`(b) $t = 7$: $42\,000 + 35\,000 = 77\,000$. (c) It's $4$ years beyond the data and based on just two values; profits rarely grow steadily.`),
Q('P5.5-13', 4, R`A metal rod is $120.0$ cm long at $20°$C and $120.6$ cm long at $220°$C. Assume $L = a + bT$.

**(a)** Find $a$ and $b$. [[2]]

**(b)** Find the temperature at which the rod is $120.3$ cm long. [[1]]

**(c)** Find the predicted length at $-40°$C. [[1]]`,
  [R`$b = \frac{0.6}{200}$.`, R`Then $a = 120 - 20b$.`],
  [R`(a)|B1|$b = 0.003$`, R`(a)|B1|$a = 119.94$`, R`(b)|B1|$120°$C`, R`(c)|B1|$119.82$ cm`], R`(a) $a = 119.94$, $b = 0.003$ (b) $120°$C (c) $119.82$ cm`,
  R`(b) $0.36 = 0.003T$, $T = 120$. (Or: halfway in length, halfway in temperature.) (c) $119.94 - 0.12 = 119.82$.`),
Q('P5.5-14', 4, R`Candle $A$ is $20$ cm tall and burns $2$ cm per hour. Candle $B$ is $15$ cm tall and burns $1.2$ cm per hour. They are lit at the same time.

**(a)** Find when they are the same height, and that height. [[2]]

**(b)** Which candle goes out first, and how much later does the other go out? [[2]]`,
  [R`$20 - 2t = 15 - 1.2t$.`, R`Each goes out when its height is $0$.`],
  [R`(a)|M1|$20 - 2t = 15 - 1.2t$`, R`(a)|A1|$6.25$ hours, $7.5$ cm`, R`(b)|M1|$A$ at $10$ h, $B$ at $12.5$ h`, R`(b)|A1|$A$ first; $2.5$ hours later`], R`(a) $6.25$ h, $7.5$ cm (b) $A$; $2.5$ h later`,
  R`(a) $0.8t = 5$, $t = 6.25$; height $20 - 12.5 = 7.5$. (b) $\frac{20}{2} = 10$ and $\frac{15}{1.2} = 12.5$.`),
Q('P5.5-15', 5, R`A gym offers three monthly plans: Plan A costs £$20$ plus £$3$ per visit; Plan B costs £$45$ with unlimited visits; Plan C costs £$8$ per visit with no fee.

**(a)** Write down the monthly cost of each plan for $v$ visits. [[2]]

**(b)** Find the numbers of visits per month for which Plan A is the cheapest. [[4]]

**(c)** Give two limitations of these models. [[2]]`,
  [R`A is cheaper than C when $20 + 3v < 8v$, and cheaper than B when $20 + 3v < 45$.`, R`Visits are whole numbers.`],
  [R`(a)|B1|$A = 20 + 3v$, $C = 8v$`, R`(a)|B1|$B = 45$`, R`(b)|M1|$20 + 3v < 8v$`, R`(b)|A1|$v > 4$`, R`(b)|M1|$20 + 3v < 45$ so $v < 8\frac13$`, R`(b)|A1|$v = 5$, $6$, $7$ or $8$`, R`(c)|B1|E.g. visits must be whole numbers`, R`(c)|B1|E.g. prices may change; visits vary month to month`],
  R`(a) $A = 20 + 3v$, $B = 45$, $C = 8v$ (b) $5$ to $8$ visits`,
  R`(b) $5v > 20$ gives $v > 4$ (at $v = 4$, A and C both cost £$32$). $3v < 25$ gives $v < 8\frac13$. So $5 \le v \le 8$. At $v = 8$, A costs £$44$, just under B.`, { solFig: FIGS['P5.5-15'] })
]};
