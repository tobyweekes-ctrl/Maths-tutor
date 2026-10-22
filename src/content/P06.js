/* Pure Mathematics Year 1 · Chapter 6 Circles (sections 6.1 to 6.5) */
BOOK_CHAPTERS.push({ id:'P06', book:'Pure Mathematics Year 1', label:'Chapter 6', title:'Circles', sections:[
  { id:'P6.1', num:'6.1', title:'Midpoints and perpendicular bisectors' },
  { id:'P6.2', num:'6.2', title:'Equation of a circle' },
  { id:'P6.3', num:'6.3', title:'Intersections of straight lines and circles' },
  { id:'P6.4', num:'6.4', title:'Use tangent and chord properties' },
  { id:'P6.5', num:'6.5', title:'Circles and triangles' }
]});
{
  const C = (label, [x0, x1, y0, y1], more) => Fig.graph(Object.assign({ label, x0, x1, y0, y1, equal: true }, more));
  const pts = list => list.map(([x, y, label, dx, dy]) => ({ x, y, label, dx, dy }));
  FIGS['P6.1-bisector'] = C('A(2, 1) and B(6, 5) with midpoint M(4, 3); the perpendicular bisector y = −x + 7 passes through M at right angles to AB', [-0.5, 8, -0.5, 7.5], {
    segs: [{ x1: 2, y1: 1, x2: 6, y2: 5, col: 'var(--ink)', w: 2 }],
    fns: [{ f: x => 7 - x, label: 'y = −x + 7', lx: 7.6, ly: 0.6 }],
    points: pts([[2, 1, 'A(2, 1)', 28, 6], [6, 5, 'B(6, 5)', 28, 6], [4, 3, 'M(4, 3)', 30, 4]]) });
  FIGS['P6.2-circle'] = C('The circle (x − 3)² + (y + 2)² = 16: centre (3, −2), radius 4', [-2, 8, -7, 3], {
    circles: [{ x: 3, y: -2, r: 4 }], segs: [{ x1: 3, y1: -2, x2: 7, y2: -2, col: 'var(--pen)' }],
    points: pts([[3, -2, '(3, −2)', -4, 16]]), texts: [{ x: 5, y: -1.6, label: 'r = 4', col: 'var(--pen)' }] });
  FIGS['P6.3-meet'] = C('The line y = x + 1 cutting the circle x² + y² = 13 at (2, 3) and (−3, −2)', [-5, 5, -5, 5], {
    circles: [{ x: 0, y: 0, r: Math.sqrt(13) }], fns: [{ f: x => x + 1, label: 'y = x + 1', lx: 4.8, ly: 4.6, col: 'var(--pen)' }],
    points: pts([[2, 3, '(2, 3)', 26, 4], [-3, -2, '(−3, −2)', -34, 4]]) });
  FIGS['P6.4-tangent'] = C('The circle (x − 1)² + (y + 2)² = 25 with the radius to P(4, 2) and the tangent 3x + 4y − 20 = 0 at P, perpendicular to the radius', [-5, 9, -8, 6], {
    circles: [{ x: 1, y: -2, r: 5 }], segs: [{ x1: 1, y1: -2, x2: 4, y2: 2, col: 'var(--muted)', dash: true }, { x1: 3.76, y1: 1.68, x2: 4.08, y2: 1.44, col: 'var(--muted)' }, { x1: 4.08, y1: 1.44, x2: 4.32, y2: 1.76, col: 'var(--muted)' }],
    fns: [{ f: x => (20 - 3 * x) / 4, label: 'tangent', lx: 8.8, ly: -0.9, col: 'var(--pen)' }],
    points: pts([[1, -2, 'C(1, −2)', -4, 16], [4, 2, 'P(4, 2)', 24, -8]]) });
  FIGS['P6.4-chord'] = C('A chord AB with the perpendicular from the centre C meeting it at its midpoint M', [-5.5, 5.5, -5.5, 5.5], {
    circles: [{ x: 0, y: 0, r: 5 }], segs: [{ x1: -4, y1: 3, x2: 4, y2: 3, col: 'var(--ink)', w: 2 }, { x1: 0, y1: 0, x2: 0, y2: 3, col: 'var(--pen)', dash: true }, { x1: 0, y1: 2.6, x2: 0.4, y2: 2.6, col: 'var(--muted)' }, { x1: 0.4, y1: 2.6, x2: 0.4, y2: 3, col: 'var(--muted)' }],
    points: pts([[-4, 3, 'A', -10, -8], [4, 3, 'B', 10, -8], [0, 3, 'M', -4, -12], [0, 0, 'C', 12, 12]]), xlab: '', ylab: '' });
  FIGS['P6.5-semi'] = C('Triangle ABC with A(−3, 0), B(5, 0) and C(1, 4): the angle at C is 90°, so AB is a diameter of the circle (x − 1)² + y² = 16', [-4.5, 6.5, -4.5, 5], {
    circles: [{ x: 1, y: 0, r: 4 }], segs: [{ x1: -3, y1: 0, x2: 1, y2: 4, col: 'var(--pen)' }, { x1: 1, y1: 4, x2: 5, y2: 0, col: 'var(--pen)' }, { x1: -3, y1: 0, x2: 5, y2: 0, col: 'var(--pen)' },
      { x1: 0.65, y1: 3.65, x2: 1, y2: 3.3, col: 'var(--muted)' }, { x1: 1, y1: 3.3, x2: 1.35, y2: 3.65, col: 'var(--muted)' }],
    points: pts([[-3, 0, 'A', -12, 14], [5, 0, 'B', 12, 14], [1, 4, 'C(1, 4)', 30, -6], [1, 0, '(1, 0)', 0, 16]]) });
  FIGS['P6.5-circum'] = C('Triangle A(0, 0), B(6, 0), C(2, 4) with its circumcircle, centre (3, 1), radius √10, found where the perpendicular bisectors meet', [-1.5, 7, -2.6, 4.6], {
    circles: [{ x: 3, y: 1, r: Math.sqrt(10) }], segs: [{ x1: 0, y1: 0, x2: 6, y2: 0, col: 'var(--pen)' }, { x1: 6, y1: 0, x2: 2, y2: 4, col: 'var(--pen)' }, { x1: 2, y1: 4, x2: 0, y2: 0, col: 'var(--pen)' }],
    vlines: [{ x: 3, dash: true, col: 'var(--muted)' }], fns: [{ f: x => 2 - (x - 1) / 2, dash: true, col: 'var(--muted)' }],
    points: pts([[0, 0, 'A', -10, 14], [6, 0, 'B', 10, 14], [2, 4, 'C', -10, -8], [3, 1, '(3, 1)', 26, 6]]) });
  FIGS['P6.3-15'] = C('The circle (x − 3)² + (y − 2)² = 25 and the line y = x + 4 meeting it at A(3, 7) and B(−2, 2)', [-3.5, 9, -3.5, 8], {
    circles: [{ x: 3, y: 2, r: 5 }], fns: [{ f: x => x + 4, label: 'y = x + 4', lx: 1.2, ly: 2.2, col: 'var(--pen)' }],
    points: pts([[3, 7, 'A(3, 7)', 28, -4], [-2, 2, 'B(−2, 2)', -32, 6], [3, 2, '(3, 2)', 24, 8]]) });
  FIGS['P6.4-15'] = C('The circle (x − 3)² + (y − 1)² = 25 with tangents at (0, 5) and (0, −3), meeting at (−16/3, 1)', [-6.5, 8.5, -5, 7], {
    circles: [{ x: 3, y: 1, r: 5 }], fns: [{ f: x => 0.75 * x + 5, col: 'var(--pen)' }, { f: x => -0.75 * x - 3, col: 'var(--pen)' }],
    points: pts([[0, 5, '(0, 5)', 24, -6], [0, -3, '(0, −3)', 28, 8], [-16 / 3, 1, '(−16/3, 1)', 2, -12], [3, 1, '(3, 1)', 22, 6]]) });
  FIGS['P6.5-15'] = C('Triangle A(−3, 5), B(4, 6), C(5, −1) in the circle with diameter AC, centre (1, 2), radius 5', [-4.5, 7.5, -3.5, 7.5], {
    circles: [{ x: 1, y: 2, r: 5 }], segs: [{ x1: -3, y1: 5, x2: 4, y2: 6, col: 'var(--pen)' }, { x1: 4, y1: 6, x2: 5, y2: -1, col: 'var(--pen)' }, { x1: 5, y1: -1, x2: -3, y2: 5, col: 'var(--pen)' }],
    points: pts([[-3, 5, 'A', -12, -4], [4, 6, 'B', 10, -8], [5, -1, 'C', 12, 10], [1, 2, '(1, 2)', 0, 16]]) });
}

CONTENT['P6.1'] = {
notes: R`
### The midpoint
The midpoint of $(x_1, y_1)$ and $(x_2, y_2)$ is the average of the coordinates:
$$\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

### The perpendicular bisector
The perpendicular bisector of $AB$:
- passes through the **midpoint** of $AB$
- has gradient $-\dfrac{1}{m_{AB}}$.

Every point on it is the **same distance** from $A$ as from $B$.

::: booklet
**Not in the formula booklet:** the midpoint formula.
:::

### Worked example 1
Find the perpendicular bisector of $A(2, 1)$ and $B(6, 5)$.
1. Midpoint $M(4, 3)$.
2. $m_{AB} = \frac{4}{4} = 1$, so the bisector has gradient $-1$.
3. $y - 3 = -(x - 4)$, so $y = -x + 7$.

[[fig:P6.1-bisector]]

### Worked example 2: finding the other end
$M(4, 1)$ is the midpoint of $A(1, -3)$ and $B$. Find $B$.
- From $A$ to $M$ is $+3$ across and $+4$ up. Do it again: $B = (4 + 3, 1 + 4) = (7, 5)$.
- Or solve $\frac{1 + x}{2} = 4$ and $\frac{-3 + y}{2} = 1$.

**The trap:** averaging $A$ and $M$, which gives a point a quarter of the way along. $M$ is the **middle**, so $B$ is as far beyond $M$ as $A$ is before it.

### Watch out
- The perpendicular bisector of a chord of a circle passes through the centre (see 6.4).
`,
questions: [
Q('P6.1-1', 1, R`Find the midpoint of $(2, 5)$ and $(8, 9)$. [[1]]`,
  [R`Average the $x$-coordinates.`, R`Average the $y$-coordinates.`],
  [R`|B1|$(5, 7)$`], R`$(5, 7)$`,
  R`$\left(\frac{2 + 8}{2}, \frac{5 + 9}{2}\right) = (5, 7)$.`),
Q('P6.1-2', 1, R`Find the midpoint of $(-4, 3)$ and $(6, -7)$. [[1]]`,
  [R`$\frac{-4 + 6}{2}$.`, R`$\frac{3 + (-7)}{2}$.`],
  [R`|B1|$(1, -2)$`], R`$(1, -2)$`,
  R`$\left(\frac{2}{2}, \frac{-4}{2}\right) = (1, -2)$.`),
Q('P6.1-3', 1, R`Find the midpoint of $(a, 2b)$ and $(3a, -4b)$. [[1]]`,
  [R`Average algebraically.`, R`$\frac{a + 3a}{2}$.`],
  [R`|B1|$(2a, -b)$`], R`$(2a, -b)$`,
  R`$\left(\frac{4a}{2}, \frac{-2b}{2}\right) = (2a, -b)$.`),
Q('P6.1-4', 2, R`$M(3, -1)$ is the midpoint of $A(-2, 4)$ and $B$. Find $B$. [[2]]`,
  [R`$\frac{-2 + x}{2} = 3$.`, R`$\frac{4 + y}{2} = -1$.`],
  [R`|M1|Sets up either equation`, R`|A1|$B(8, -6)$`], R`$(8, -6)$`,
  R`$x = 6 + 2 = 8$, $y = -2 - 4 = -6$. (Or step $+5$, $-5$ from $A$ to $M$ and repeat.)`),
Q('P6.1-5', 2, R`Find the perpendicular bisector of $(0, 0)$ and $(6, 4)$, in the form $ax + by + c = 0$ with integer coefficients. [[3]]`,
  [R`Midpoint $(3, 2)$; gradient of the segment $\frac23$.`, R`The bisector has gradient $-\frac32$.`],
  [R`|B1|$(3, 2)$`, R`|M1|$y - 2 = -\frac32(x - 3)$`, R`|A1|$3x + 2y - 13 = 0$`], R`$3x + 2y - 13 = 0$`,
  R`$2y - 4 = -3x + 9$, so $3x + 2y - 13 = 0$.`),
Q('P6.1-6', 2, R`The midpoint of $(k, 3)$ and $(5, k + 1)$ lies on the line $y = 2x - 3$. Find $k$ and the midpoint. [[3]]`,
  [R`Midpoint $\left(\frac{k + 5}{2}, \frac{k + 4}{2}\right)$.`, R`Substitute into $y = 2x - 3$.`],
  [R`|B1|Midpoint in terms of $k$`, R`|M1|$\frac{k + 4}{2} = (k + 5) - 3$`, R`|A1|$k = 0$; midpoint $\left(\frac52, 2\right)$`], R`$k = 0$; $\left(\frac52, 2\right)$`,
  R`$\frac{k + 4}{2} = k + 2$, so $k + 4 = 2k + 4$ and $k = 0$. Check: $2 \times \frac52 - 3 = 2$.`),
Q('P6.1-7', 2, R`Show that $P(5, 5)$ lies on the perpendicular bisector of $A(1, 2)$ and $B(8, 1)$. [[2]]`,
  [R`Points on the bisector are equidistant from $A$ and $B$.`, R`Find $PA$ and $PB$.`],
  [R`|M1|$PA = \sqrt{16 + 9}$ and $PB = \sqrt{9 + 16}$`, R`|A1|Both $5$, so $P$ is on the bisector`], R`$PA = PB = 5$`,
  R`$PA = 5$ and $PB = 5$, so $P$ is equidistant from $A$ and $B$.`),
Q('P6.1-8', 3, R`Find the perpendicular bisector of $A(-1, 5)$ and $B(3, -3)$, in the form $ax + by + c = 0$. [[4]]`,
  [R`Midpoint $(1, 1)$.`, R`$m_{AB} = -2$, so the bisector has gradient $\frac12$.`],
  [R`|B1|$(1, 1)$`, R`|B1|$m_{AB} = -2$`, R`|M1|$y - 1 = \frac12(x - 1)$`, R`|A1|$x - 2y + 1 = 0$`], R`$x - 2y + 1 = 0$`,
  R`$2y - 2 = x - 1$, so $x - 2y + 1 = 0$.`),
Q('P6.1-9', 3, R`The perpendicular bisector of $A(2, k)$ and $B(6, 1)$ has gradient $2$. Find $k$ and the equation of the bisector. [[4]]`,
  [R`$m_{AB} = -\frac12$.`, R`$\frac{1 - k}{4} = -\frac12$.`],
  [R`|M1|$\frac{1 - k}{4} = -\frac12$`, R`|A1|$k = 3$`, R`|B1|Midpoint $(4, 2)$`, R`|A1|$y = 2x - 6$`], R`$k = 3$; $y = 2x - 6$`,
  R`$1 - k = -2$, $k = 3$. Midpoint $(4, 2)$: $y - 2 = 2(x - 4)$.`),
Q('P6.1-10', 3, R`The segment $AB$ has midpoint $(2, -1)$. $A$ lies on the $y$-axis and $B$ on the $x$-axis. Find $A$, $B$ and the exact length of $AB$. [[3]]`,
  [R`$A(0, a)$, $B(b, 0)$.`, R`Midpoint $\left(\frac{b}{2}, \frac{a}{2}\right)$.`],
  [R`|M1|$\frac{b}{2} = 2$, $\frac{a}{2} = -1$`, R`|A1|$A(0, -2)$, $B(4, 0)$`, R`|A1|$2\sqrt5$`], R`$A(0, -2)$, $B(4, 0)$; $2\sqrt5$`,
  R`$AB = \sqrt{16 + 4} = 2\sqrt5$.`),
Q('P6.1-11', 3, R`$A(-2, 1)$ and $B(4, 3)$. The perpendicular bisector of $AB$ meets the $y$-axis at $P$. Find $P$ and show that $PA = PB$. [[4]]`,
  [R`Midpoint $(1, 2)$, $m_{AB} = \frac13$.`, R`The bisector: $y - 2 = -3(x - 1)$.`],
  [R`|M1|Bisector $y = -3x + 5$`, R`|A1|$P(0, 5)$`, R`|M1|$PA = \sqrt{4 + 16}$, $PB = \sqrt{16 + 4}$`, R`|A1|Both $\sqrt{20}$`], R`$P(0, 5)$`,
  R`At $x = 0$, $y = 5$. $PA = \sqrt{(-2)^2 + (1 - 5)^2} = \sqrt{20} = PB$.`),
Q('P6.1-12', 4, R`$P(3, 1)$ and $Q(7, 9)$. The perpendicular bisector of $PQ$ meets the $x$-axis at $R$.

**(a)** Find $R$. [[3]]

**(b)** Find the area of triangle $PQR$. [[2]]`,
  [R`Midpoint $M(5, 5)$; bisector gradient $-\frac12$.`, R`$RM$ is perpendicular to $PQ$: use $PQ$ as the base and $RM$ as the height.`],
  [R`(a)|B1|$M(5, 5)$`, R`(a)|M1|$y - 5 = -\frac12(x - 5)$`, R`(a)|A1|$R(15, 0)$`, R`(b)|M1|$PQ = 4\sqrt5$, $RM = 5\sqrt5$`, R`(b)|A1|$50$`], R`(a) $(15, 0)$ (b) $50$`,
  R`(a) $y = 0$: $-5 = -\frac12(x - 5)$, $x = 15$. (b) $PQ = \sqrt{16 + 64} = 4\sqrt5$, $RM = \sqrt{100 + 25} = 5\sqrt5$, area $\frac12 \times 4\sqrt5 \times 5\sqrt5 = 50$.`),
Q('P6.1-13', 4, R`$A(1, 7)$, $B(5, 3)$ and $C(-3, -1)$. By finding the perpendicular bisectors of $AB$ and $BC$, find the point that is equidistant from $A$, $B$ and $C$. [[5]]`,
  [R`$AB$: midpoint $(3, 5)$, gradient $-1$. $BC$: midpoint $(1, 1)$, gradient $\frac12$.`, R`Solve the two bisector equations together.`],
  [R`|M1|Bisector of $AB$: $y = x + 2$`, R`|A1|Correct`, R`|M1|Bisector of $BC$: $y = -2x + 3$`, R`|A1|Correct`, R`|A1|$\left(\frac13, \frac73\right)$`], R`$\left(\frac13, \frac73\right)$`,
  R`$x + 2 = -2x + 3$ gives $x = \frac13$, $y = \frac73$. (It's also on the bisector of $AC$: midpoint $(-1, 3)$, gradient $-\frac12$; at $x = \frac13$, $y = 3 - \frac23 = \frac73$.)`),
Q('P6.1-14', 4, R`The point $(k, 2k)$ is equidistant from $(0, 0)$ and $(10, 0)$. Find $k$, and the equation of the perpendicular bisector of the two points. [[3]]`,
  [R`The bisector of $(0, 0)$ and $(10, 0)$ is vertical.`, R`It's $x = 5$.`],
  [R`|B1|Bisector $x = 5$`, R`|M1|$k = 5$`, R`|A1|Point $(5, 10)$`], R`$k = 5$; $x = 5$`,
  R`The segment is horizontal, so its bisector is the vertical line $x = 5$. So $k = 5$ and the point is $(5, 10)$.`),
Q('P6.1-15', 5, R`$A(0, 8)$, $B(7, 7)$ and $C(6, 0)$.

**(a)** Find the perpendicular bisector of $AB$. [[3]]

**(b)** Find the perpendicular bisector of $BC$. [[3]]

**(c)** Hence find the centre and radius of the circle through $A$, $B$ and $C$. [[2]]`,
  [R`$AB$: midpoint $\left(\frac72, \frac{15}{2}\right)$, gradient $-\frac17$.`, R`$BC$: midpoint $\left(\frac{13}{2}, \frac72\right)$, gradient $7$.`],
  [R`(a)|B1|Midpoint and $m_{AB} = -\frac17$`, R`(a)|M1|Gradient $7$`, R`(a)|A1|$y = 7x - 17$`, R`(b)|B1|Midpoint and $m_{BC} = 7$`, R`(b)|M1|Gradient $-\frac17$`, R`(b)|A1|$x + 7y = 31$`, R`(c)|M1|Solves: centre $(3, 4)$`, R`(c)|A1|Radius $5$`], R`(a) $y = 7x - 17$ (b) $x + 7y = 31$ (c) $(3, 4)$, $5$`,
  R`(a) $y - \frac{15}{2} = 7\left(x - \frac72\right)$, so $y = 7x - 17$.

(b) $y - \frac72 = -\frac17\left(x - \frac{13}{2}\right)$, so $7y - \frac{49}{2} = -x + \frac{13}{2}$, i.e. $x + 7y = 31$.

(c) $x + 7(7x - 17) = 31$ gives $50x = 150$, $x = 3$, $y = 4$. Radius: distance to $C(6, 0)$ is $\sqrt{9 + 16} = 5$.`)
]};

CONTENT['P6.2'] = {
notes: R`
### The equation of a circle
The circle with centre $(a, b)$ and radius $r$ is
$$(x - a)^2 + (y - b)^2 = r^2$$
It comes from Pythagoras: every point $(x, y)$ is distance $r$ from the centre.

### Expanded form
A circle can also appear as $x^2 + y^2 + 2fx + 2gy + c = 0$. **Complete the square** in $x$ and in $y$ to find the centre and radius. It's a real circle only if the right-hand side comes out positive.

::: booklet
**Not in the formula booklet:** the equation of a circle.
:::

### Worked example 1
Write down the equation of the circle with centre $(2, -3)$ and radius $5$.
- $(x - 2)^2 + (y + 3)^2 = 25$.

### Worked example 2: completing the square
Find the centre and radius of $x^2 + y^2 - 6x + 4y - 3 = 0$.
1. $(x - 3)^2 - 9 + (y + 2)^2 - 4 - 3 = 0$.
2. $(x - 3)^2 + (y + 2)^2 = 16$.
3. Centre $(3, -2)$, radius $4$.

[[fig:P6.2-circle]]

**The trap:** reading the centre as $(-3, 2)$ from the expanded form, or forgetting to subtract the $9$ and $4$ and getting $r^2 = 3$. The centre has the **opposite** signs to the numbers in the brackets.

### Watch out
- Leave $r$ as a surd if $r^2$ isn't a square number: $r^2 = 20$ gives $r = 2\sqrt5$.
- A point is **inside** the circle if its distance from the centre is less than $r$.
`,
questions: [
Q('P6.2-1', 1, R`Write down the centre and radius of $(x - 4)^2 + (y + 1)^2 = 9$. [[2]]`,
  [R`Compare with $(x - a)^2 + (y - b)^2 = r^2$.`, R`$y + 1 = y - (-1)$.`],
  [R`|B1|Centre $(4, -1)$`, R`|B1|Radius $3$`], R`Centre $(4, -1)$, radius $3$`,
  R`$a = 4$, $b = -1$, $r = \sqrt9 = 3$.`),
Q('P6.2-2', 1, R`Write down the equation of the circle with centre $(-2, 5)$ and radius $6$. [[2]]`,
  [R`$(x - a)^2 + (y - b)^2 = r^2$.`, R`$x - (-2) = x + 2$.`],
  [R`|B1|$(x + 2)^2 + (y - 5)^2$`, R`|B1|$= 36$`], R`$(x + 2)^2 + (y - 5)^2 = 36$`,
  R`Substitute $a = -2$, $b = 5$, $r^2 = 36$.`),
Q('P6.2-3', 1, R`Write down the centre and the exact radius of $x^2 + (y - 3)^2 = 20$. [[2]]`,
  [R`$x^2 = (x - 0)^2$.`, R`$\sqrt{20} = 2\sqrt5$.`],
  [R`|B1|Centre $(0, 3)$`, R`|B1|Radius $2\sqrt5$`], R`Centre $(0, 3)$, radius $2\sqrt5$`,
  R`$r = \sqrt{20} = 2\sqrt5$.`),
Q('P6.2-4', 2, R`Show that $(5, 2)$ lies on the circle $(x - 1)^2 + (y + 1)^2 = 25$. [[2]]`,
  [R`Substitute the point.`, R`$4^2 + 3^2$.`],
  [R`|M1|$(5 - 1)^2 + (2 + 1)^2$`, R`|A1|$= 16 + 9 = 25$, so it lies on the circle`], R`$16 + 9 = 25$`,
  R`The left-hand side equals $25$, the right-hand side.`),
Q('P6.2-5', 2, R`Find the centre and radius of $x^2 + y^2 - 8x + 2y + 8 = 0$. [[3]]`,
  [R`$(x - 4)^2 - 16$ and $(y + 1)^2 - 1$.`, R`Collect the constants on the right.`],
  [R`|M1|Completes the square in $x$ and $y$`, R`|A1|Centre $(4, -1)$`, R`|A1|Radius $3$`], R`Centre $(4, -1)$, radius $3$`,
  R`$(x - 4)^2 + (y + 1)^2 = 16 + 1 - 8 = 9$.`),
Q('P6.2-6', 2, R`A circle has centre $(3, 1)$ and passes through $(7, 4)$. Find its equation. [[3]]`,
  [R`The radius is the distance from the centre to the point.`, R`$\sqrt{16 + 9}$.`],
  [R`|M1|$r^2 = 4^2 + 3^2$`, R`|A1|$r^2 = 25$`, R`|A1|$(x - 3)^2 + (y - 1)^2 = 25$`], R`$(x - 3)^2 + (y - 1)^2 = 25$`,
  R`$r^2 = 16 + 9 = 25$.`),
Q('P6.2-7', 2, R`The points $(-1, 2)$ and $(5, 10)$ are the ends of a diameter of a circle. Find its equation. [[3]]`,
  [R`The centre is the midpoint.`, R`The radius is half the diameter.`],
  [R`|B1|Centre $(2, 6)$`, R`|M1|$r^2 = 3^2 + 4^2$`, R`|A1|$(x - 2)^2 + (y - 6)^2 = 25$`], R`$(x - 2)^2 + (y - 6)^2 = 25$`,
  R`Centre $(2, 6)$; distance to $(5, 10)$ is $\sqrt{9 + 16} = 5$.`),
Q('P6.2-8', 3, R`The circle $x^2 + y^2 + 6x - 10y + k = 0$ has radius $4$. Find $k$. [[3]]`,
  [R`$(x + 3)^2 + (y - 5)^2 = 9 + 25 - k$.`, R`Set this equal to $16$.`],
  [R`|M1|Completes the square`, R`|M1|$34 - k = 16$`, R`|A1|$k = 18$`], R`$k = 18$`,
  R`$r^2 = 34 - k = 16$.`),
Q('P6.2-9', 3, R`Find the set of values of $k$ for which $x^2 + y^2 - 4x + 6y + k = 0$ represents a circle. [[3]]`,
  [R`$(x - 2)^2 + (y + 3)^2 = 13 - k$.`, R`$r^2$ must be positive.`],
  [R`|M1|$(x - 2)^2 + (y + 3)^2 = 13 - k$`, R`|M1|$13 - k > 0$`, R`|A1|$k < 13$`], R`$k < 13$`,
  R`A circle needs $r^2 > 0$. (At $k = 13$ it's a single point.)`),
Q('P6.2-10', 3, R`The point $(k, 3)$ lies on the circle $(x - 2)^2 + (y + 1)^2 = 25$. Find the possible values of $k$. [[3]]`,
  [R`$(k - 2)^2 + 16 = 25$.`, R`$k - 2 = \pm3$.`],
  [R`|M1|$(k - 2)^2 + 4^2 = 25$`, R`|M1|$k - 2 = \pm3$`, R`|A1|$k = 5$ or $-1$`], R`$k = 5$ or $k = -1$`,
  R`$(k - 2)^2 + 4^2 = 25$, so $(k - 2)^2 = 9$ and $k = 2 \pm 3$.`),
Q('P6.2-11', 3, R`Find the centre and radius of $2x^2 + 2y^2 - 8x + 12y - 6 = 0$. [[3]]`,
  [R`Divide by $2$ first.`, R`$x^2 + y^2 - 4x + 6y - 3 = 0$.`],
  [R`|M1|Divides by $2$`, R`|M1|$(x - 2)^2 + (y + 3)^2 = 16$`, R`|A1|Centre $(2, -3)$, radius $4$`], R`Centre $(2, -3)$, radius $4$`,
  R`$(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0$, so $r^2 = 16$.`),
Q('P6.2-12', 4, R`A circle has its centre on the line $y = x$ and passes through $(0, 2)$ and $(4, 6)$. Find its equation. [[4]]`,
  [R`Let the centre be $(a, a)$.`, R`It's the same distance from both points.`],
  [R`|M1|$a^2 + (a - 2)^2 = (a - 4)^2 + (a - 6)^2$`, R`|A1|$a = 3$`, R`|M1|$r^2 = 9 + 1$`, R`|A1|$(x - 3)^2 + (y - 3)^2 = 10$`], R`$(x - 3)^2 + (y - 3)^2 = 10$`,
  R`$2a^2 - 4a + 4 = 2a^2 - 20a + 52$, so $16a = 48$, $a = 3$. $r^2 = 3^2 + 1^2 = 10$.`),
Q('P6.2-13', 4, R`Determine whether the point $(1, 1)$ lies inside, on or outside the circle $x^2 + y^2 - 6x - 4y + 9 = 0$. [[3]]`,
  [R`Find the centre and radius.`, R`Compare the distance from the centre with $r$.`],
  [R`|M1|$(x - 3)^2 + (y - 2)^2 = 4$`, R`|M1|Distance$^2 = 4 + 1 = 5$`, R`|A1|$5 > 4$, so outside`], R`Outside`,
  R`Centre $(3, 2)$, $r = 2$. The distance to $(1, 1)$ is $\sqrt5 > 2$.`),
Q('P6.2-14', 4, R`The circle $C$ has equation $(x - 5)^2 + (y - 3)^2 = 9$. Find the exact shortest and greatest distances from the origin to a point on $C$. [[4]]`,
  [R`The nearest and furthest points lie on the line through $O$ and the centre.`, R`Distance from $O$ to the centre is $\sqrt{34}$.`],
  [R`|M1|$OC = \sqrt{25 + 9}$`, R`|A1|$\sqrt{34}$`, R`|A1|Shortest $\sqrt{34} - 3$`, R`|A1|Greatest $\sqrt{34} + 3$`], R`$\sqrt{34} - 3$ and $\sqrt{34} + 3$`,
  R`$O$ is outside $C$ since $\sqrt{34} > 3$. The closest point is $3$ nearer than the centre, the furthest $3$ further.`),
Q('P6.2-15', 5, R`The circle $C$ has equation $x^2 + y^2 - 10x + 4y + 4 = 0$.

**(a)** Find the centre and radius of $C$. [[3]]

**(b)** Show that $C$ touches the $y$-axis, and find the point of contact. [[2]]

**(c)** Find the exact $x$-coordinates of the points where $C$ meets the $x$-axis. [[3]]`,
  [R`$(x - 5)^2 + (y + 2)^2 = 25$.`, R`The centre is $5$ from the $y$-axis.`],
  [R`(a)|M1|Completes the square`, R`(a)|A1|Centre $(5, -2)$`, R`(a)|A1|Radius $5$`, R`(b)|M1|Distance from centre to $y$-axis is $5 = r$`, R`(b)|A1|$(0, -2)$`, R`(c)|M1|$x^2 - 10x + 4 = 0$`, R`(c)|M1|Formula or completing the square`, R`(c)|A1|$x = 5 \pm \sqrt{21}$`],
  R`(a) $(5, -2)$, $5$ (b) $(0, -2)$ (c) $5 \pm \sqrt{21}$`,
  R`(a) $(x - 5)^2 - 25 + (y + 2)^2 - 4 + 4 = 0$, so $r^2 = 25$.

(b) Put $x = 0$: $(y + 2)^2 = 0$, a repeated root, so it touches at $(0, -2)$.

(c) Put $y = 0$: $(x - 5)^2 = 21$, $x = 5 \pm \sqrt{21}$.`)
]};

CONTENT['P6.3'] = {
notes: R`
### Line meets circle
Substitute the line into the circle to get a quadratic in one variable. Then the discriminant $b^2 - 4ac$ tells you:
- $> 0$: the line cuts the circle at **two** points (a chord)
- $= 0$: it **touches** at one point (a tangent)
- $< 0$: it **misses** the circle.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Find where $y = x + 1$ meets $x^2 + y^2 = 13$.
1. $x^2 + (x + 1)^2 = 13$, so $2x^2 + 2x - 12 = 0$, i.e. $x^2 + x - 6 = 0$.
2. $x = 2$ or $x = -3$, giving $(2, 3)$ and $(-3, -2)$.

[[fig:P6.3-meet]]

### Worked example 2: a tangent condition
Find $k$ so that $y = x + k$ is a tangent to $x^2 + y^2 = 8$.
1. $x^2 + (x + k)^2 = 8$, so $2x^2 + 2kx + k^2 - 8 = 0$.
2. Tangent: $(2k)^2 - 4(2)(k^2 - 8) = 0$, so $-4k^2 + 64 = 0$, $k = \pm4$.

**The trap:** expanding $(x + k)^2$ as $x^2 + k^2$. The middle term $2kx$ matters, and it's what puts $k$ into $b$.

### Watch out
- After finding $x$, substitute into the **line** (not the circle) to get $y$: it gives one value, not two.
- The length of a chord is the distance between the two intersection points.
`,
questions: [
Q('P6.3-1', 1, R`Find the points where the line $y = 3$ meets the circle $x^2 + y^2 = 25$. [[2]]`,
  [R`$x^2 + 9 = 25$.`, R`$x = \pm4$.`],
  [R`|M1|$x^2 = 16$`, R`|A1|$(4, 3)$ and $(-4, 3)$`], R`$(\pm4, 3)$`,
  R`$x^2 = 16$, $x = \pm4$.`),
Q('P6.3-2', 1, R`Find where the line $x = 1$ meets $(x - 1)^2 + (y - 2)^2 = 9$. [[2]]`,
  [R`$(y - 2)^2 = 9$.`, R`$y - 2 = \pm3$.`],
  [R`|M1|$(y - 2)^2 = 9$`, R`|A1|$(1, 5)$ and $(1, -1)$`], R`$(1, 5)$ and $(1, -1)$`,
  R`$x = 1$ goes through the centre, so it's a diameter: $y = 2 \pm 3$.`),
Q('P6.3-3', 1, R`Explain why the line $y = 6$ doesn't meet the circle $x^2 + y^2 = 25$. [[1]]`,
  [R`$x^2 = 25 - 36$.`, R`Can $x^2$ be negative?`],
  [R`|B1|$x^2 = -11$ has no solutions (the circle only reaches $y = 5$)`], R`$x^2 = -11$; the circle reaches only $y = 5$`,
  R`The radius is $5$, so every point has $|y| \le 5$.`),
Q('P6.3-4', 2, R`Find the points where $y = x + 1$ meets $x^2 + y^2 = 5$. [[3]]`,
  [R`$x^2 + (x + 1)^2 = 5$.`, R`$x^2 + x - 2 = 0$.`],
  [R`|M1|$2x^2 + 2x - 4 = 0$`, R`|A1|$x = 1$ or $-2$`, R`|A1|$(1, 2)$ and $(-2, -1)$`], R`$(1, 2)$ and $(-2, -1)$`,
  R`$(x + 2)(x - 1) = 0$; $y = x + 1$.`),
Q('P6.3-5', 2, R`Find the points where $y = 2x$ meets $(x - 1)^2 + (y - 2)^2 = 5$. [[3]]`,
  [R`$(x - 1)^2 + (2x - 2)^2 = 5$.`, R`$5(x - 1)^2 = 5$.`],
  [R`|M1|Substitutes`, R`|A1|$x = 0$ or $2$`, R`|A1|$(0, 0)$ and $(2, 4)$`], R`$(0, 0)$ and $(2, 4)$`,
  R`$(2x - 2)^2 = 4(x - 1)^2$, so $(x - 1)^2 = 1$.`),
Q('P6.3-6', 2, R`Show that $y = x + 4$ is a tangent to $x^2 + y^2 = 8$, and find the point of contact. [[3]]`,
  [R`$x^2 + (x + 4)^2 = 8$.`, R`$x^2 + 4x + 4 = 0$.`],
  [R`|M1|$2x^2 + 8x + 8 = 0$`, R`|A1|$(x + 2)^2 = 0$: one repeated root`, R`|A1|$(-2, 2)$`], R`Touches at $(-2, 2)$`,
  R`A repeated root means one point of contact: $x = -2$, $y = 2$.`),
Q('P6.3-7', 2, R`Show that the line $y = x + 5$ does not meet the circle $(x - 2)^2 + y^2 = 4$. [[3]]`,
  [R`$(x - 2)^2 + (x + 5)^2 = 4$.`, R`Find the discriminant.`],
  [R`|M1|$2x^2 + 6x + 25 = 0$`, R`|M1|$36 - 200$`, R`|A1|$< 0$, so no intersection`], R`Discriminant $-164 < 0$`,
  R`$x^2 - 4x + 4 + x^2 + 10x + 25 = 4$ gives $2x^2 + 6x + 25 = 0$, with discriminant $36 - 200 < 0$.`),
Q('P6.3-8', 3, R`Find the points where $x + y = 7$ meets $(x - 1)^2 + (y - 2)^2 = 10$. [[4]]`,
  [R`$y = 7 - x$, so $y - 2 = 5 - x$.`, R`$(x - 1)^2 + (5 - x)^2 = 10$.`],
  [R`|M1|Substitutes`, R`|M1|$x^2 - 6x + 8 = 0$`, R`|A1|$x = 2$, $4$`, R`|A1|$(2, 5)$ and $(4, 3)$`], R`$(2, 5)$ and $(4, 3)$`,
  R`$2x^2 - 12x + 26 = 10$, so $x^2 - 6x + 8 = 0$.`),
Q('P6.3-9', 3, R`The line $y = kx$ is a tangent to the circle $(x - 4)^2 + y^2 = 8$. Find the possible values of $k$. [[4]]`,
  [R`$(1 + k^2)x^2 - 8x + 8 = 0$.`, R`Discriminant $= 0$.`],
  [R`|M1|$(1 + k^2)x^2 - 8x + 8 = 0$`, R`|M1|$64 - 32(1 + k^2) = 0$`, R`|A1|$k^2 = 1$`, R`|A1|$k = \pm1$`], R`$k = \pm1$`,
  R`$x^2 - 8x + 16 + k^2x^2 = 8$. Then $64 = 32(1 + k^2)$.`),
Q('P6.3-10', 3, R`The line $y = x + c$ meets $x^2 + y^2 = 18$ at two distinct points. Find the set of possible values of $c$. [[4]]`,
  [R`$2x^2 + 2cx + c^2 - 18 = 0$.`, R`Discriminant $> 0$.`],
  [R`|M1|Quadratic in $x$`, R`|M1|$4c^2 - 8(c^2 - 18) > 0$`, R`|A1|$c^2 < 36$`, R`|A1|$-6 < c < 6$`], R`$-6 < c < 6$`,
  R`$b^2 - 4ac = 4c^2 - 8c^2 + 144 = 144 - 4c^2 > 0$, so $c^2 < 36$.`),
Q('P6.3-11', 3, R`Find the exact length of the chord cut from the circle $x^2 + y^2 = 25$ by the line $y = x + 1$. [[4]]`,
  [R`Find the two intersection points.`, R`$x^2 + x - 12 = 0$.`],
  [R`|M1|$2x^2 + 2x - 24 = 0$`, R`|A1|$(3, 4)$ and $(-4, -3)$`, R`|M1|Distance formula`, R`|A1|$7\sqrt2$`], R`$7\sqrt2$`,
  R`$(x + 4)(x - 3) = 0$. Length $\sqrt{7^2 + 7^2} = 7\sqrt2$.`),
Q('P6.3-12', 4, R`The line $y = 2x + k$ is a tangent to the circle $x^2 + y^2 - 2x - 4 = 0$. Find the possible values of $k$. [[5]]`,
  [R`$5x^2 + (4k - 2)x + k^2 - 4 = 0$.`, R`Set the discriminant to $0$.`],
  [R`|M1|Substitutes`, R`|A1|$5x^2 + (4k - 2)x + k^2 - 4 = 0$`, R`|M1|$(4k - 2)^2 - 20(k^2 - 4) = 0$`, R`|A1|$k^2 + 4k - 21 = 0$`, R`|A1|$k = 3$ or $-7$`], R`$k = 3$ or $k = -7$`,
  R`$x^2 + 4x^2 + 4kx + k^2 - 2x - 4 = 0$. Discriminant: $16k^2 - 16k + 4 - 20k^2 + 80 = -4k^2 - 16k + 84 = 0$, so $(k + 7)(k - 3) = 0$.`),
Q('P6.3-13', 4, R`Show that the line $3x + 4y = 25$ is a tangent to the circle $x^2 + y^2 = 25$, and find the point of contact. [[4]]`,
  [R`$y = \frac{25 - 3x}{4}$.`, R`Multiply through by $16$.`],
  [R`|M1|Substitutes`, R`|M1|$25x^2 - 150x + 225 = 0$`, R`|A1|$(x - 3)^2 = 0$, a repeated root`, R`|A1|$(3, 4)$`], R`$(3, 4)$`,
  R`$16x^2 + (25 - 3x)^2 = 400$ gives $25x^2 - 150x + 225 = 0$, i.e. $x^2 - 6x + 9 = 0$.`),
Q('P6.3-14', 4, R`The line $x = k$ meets the circle $(x - 2)^2 + (y + 1)^2 = 16$ at two points that are $4\sqrt3$ apart. Find the possible values of $k$. [[4]]`,
  [R`$(y + 1)^2 = 16 - (k - 2)^2$.`, R`The chord length is $2\sqrt{16 - (k - 2)^2}$.`],
  [R`|M1|$y = -1 \pm \sqrt{16 - (k - 2)^2}$`, R`|M1|$2\sqrt{16 - (k - 2)^2} = 4\sqrt3$`, R`|A1|$(k - 2)^2 = 4$`, R`|A1|$k = 0$ or $4$`], R`$k = 0$ or $k = 4$`,
  R`$16 - (k - 2)^2 = 12$, so $k - 2 = \pm2$.`),
Q('P6.3-15', 5, R`The circle $C$ has equation $(x - 3)^2 + (y - 2)^2 = 25$ and the line $L$ has equation $y = x + 4$.

**(a)** Find the coordinates of the points $A$ and $B$ where $L$ meets $C$. [[4]]

**(b)** Find the exact length of $AB$. [[2]]

**(c)** Find the exact distance from the centre of $C$ to the midpoint of $AB$, and show that your answers satisfy Pythagoras with the radius. [[2]]`,
  [R`$(x - 3)^2 + (x + 2)^2 = 25$.`, R`The line from the centre to the midpoint of a chord is perpendicular to it.`],
  [R`(a)|M1|Substitutes`, R`(a)|M1|$x^2 - x - 6 = 0$`, R`(a)|A1|$x = 3$, $-2$`, R`(a)|A1|$A(3, 7)$, $B(-2, 2)$`, R`(b)|M1|$\sqrt{25 + 25}$`, R`(b)|A1|$5\sqrt2$`, R`(c)|B1|$\frac{5\sqrt2}{2}$`, R`(c)|B1|$\left(\frac{5\sqrt2}{2}\right)^2 + \left(\frac{5\sqrt2}{2}\right)^2 = 25$`],
  R`(a) $(3, 7)$, $(-2, 2)$ (b) $5\sqrt2$ (c) $\frac{5\sqrt2}{2}$`,
  R`(a) $2x^2 - 2x + 13 = 25$, so $x^2 - x - 6 = 0$.

(b) $AB = \sqrt{5^2 + 5^2} = 5\sqrt2$.

(c) The midpoint is $\left(\frac12, \frac92\right)$; its distance from $(3, 2)$ is $\sqrt{\frac{25}{4} + \frac{25}{4}} = \frac{5\sqrt2}{2}$. Half the chord is also $\frac{5\sqrt2}{2}$, and $12.5 + 12.5 = 25 = r^2$.`, { solFig: FIGS['P6.3-15'] })
]};

CONTENT['P6.4'] = {
notes: R`
### Three properties
1. A **tangent** is perpendicular to the **radius** at the point of contact.
2. The perpendicular from the centre to a **chord** bisects the chord.
3. So the perpendicular bisector of any chord passes through the **centre**.

[[fig:P6.4-chord]]

::: booklet
**Not in the formula booklet:** these properties.
:::

### Worked example 1
Find the tangent to $(x - 1)^2 + (y + 2)^2 = 25$ at $P(4, 2)$.
1. Centre $(1, -2)$. Gradient of the radius: $\frac{2 + 2}{4 - 1} = \frac43$.
2. The tangent has gradient $-\frac34$.
3. $y - 2 = -\frac34(x - 4)$, so $3x + 4y - 20 = 0$.

[[fig:P6.4-tangent]]

### Worked example 2: tangent length
Find the length of the tangent from $T(7, 1)$ to the circle $(x - 2)^2 + (y - 1)^2 = 9$.
- $T$ is $5$ from the centre. The radius ($3$) meets the tangent at $90°$, so the tangent length is $\sqrt{5^2 - 3^2} = 4$.

**The trap:** using the radius's gradient for the tangent. The tangent's gradient is the **negative reciprocal** of the radius's.

### Watch out
- The **normal** at a point on the circle is the line through that point and the centre.
`,
questions: [
Q('P6.4-1', 1, R`The radius from the centre $(0, 0)$ to the point $(3, 4)$ of a circle has gradient $\frac43$. Write down the gradient of the tangent at $(3, 4)$. [[1]]`,
  [R`Tangent $\perp$ radius.`, R`Negative reciprocal.`],
  [R`|B1|$-\frac34$`], R`$-\frac34$`,
  R`$\frac43 \times \left(-\frac34\right) = -1$.`),
Q('P6.4-2', 1, R`Complete the statement: "The perpendicular from the centre of a circle to a chord …" [[1]]`,
  [R`Think about where it meets the chord.`, R`It cuts the chord into two equal parts.`],
  [R`|B1|… bisects the chord`], R`… bisects the chord`,
  R`It meets the chord at its midpoint.`),
Q('P6.4-3', 1, R`A chord of a circle with centre $C(3, 2)$ has midpoint $M(5, 3)$. Find the gradient of the chord. [[2]]`,
  [R`$CM$ is perpendicular to the chord.`, R`$m_{CM} = \frac12$.`],
  [R`|M1|$m_{CM} = \frac12$`, R`|A1|$-2$`], R`$-2$`,
  R`$m_{CM} = \frac{3 - 2}{5 - 3} = \frac12$, so the chord has gradient $-2$.`),
Q('P6.4-4', 2, R`Find the equation of the tangent to $x^2 + y^2 = 10$ at $(1, 3)$, in the form $ax + by + c = 0$. [[3]]`,
  [R`The radius has gradient $3$.`, R`Tangent gradient $-\frac13$.`],
  [R`|B1|Radius gradient $3$`, R`|M1|$y - 3 = -\frac13(x - 1)$`, R`|A1|$x + 3y - 10 = 0$`], R`$x + 3y - 10 = 0$`,
  R`$y - 3 = -\frac13(x - 1)$, so $3y - 9 = -x + 1$.`),
Q('P6.4-5', 2, R`Find the equation of the tangent to $(x - 2)^2 + (y - 1)^2 = 13$ at $(4, 4)$. [[3]]`,
  [R`Radius gradient $\frac32$.`, R`Tangent gradient $-\frac23$.`],
  [R`|B1|$\frac32$`, R`|M1|$y - 4 = -\frac23(x - 4)$`, R`|A1|$2x + 3y - 20 = 0$`], R`$2x + 3y - 20 = 0$`,
  R`$3y - 12 = -2x + 8$.`),
Q('P6.4-6', 2, R`Find the equation of the normal to $(x - 1)^2 + (y + 2)^2 = 25$ at $(5, 1)$. [[3]]`,
  [R`The normal passes through the centre.`, R`Gradient $\frac{1 + 2}{5 - 1}$.`],
  [R`|B1|Centre $(1, -2)$`, R`|M1|Gradient $\frac34$`, R`|A1|$3x - 4y - 11 = 0$`], R`$3x - 4y - 11 = 0$`,
  R`$y - 1 = \frac34(x - 5)$, so $4y - 4 = 3x - 15$.`),
Q('P6.4-7', 2, R`Show that the tangent to $x^2 + y^2 = 25$ at $(-3, 4)$ passes through $(1, 7)$. [[3]]`,
  [R`Radius gradient $-\frac43$.`, R`Tangent gradient $\frac34$.`],
  [R`|B1|$\frac34$`, R`|M1|$y - 4 = \frac34(x + 3)$`, R`|A1|At $x = 1$, $y = 7$`], R`Tangent $y = \frac34 x + \frac{25}{4}$ passes through $(1, 7)$`,
  R`At $x = 1$: $y = 4 + \frac34 \times 4 = 7$.`),
Q('P6.4-8', 3, R`The tangent to $x^2 + y^2 = 13$ at $(2, 3)$ meets the $x$-axis at $P$ and the $y$-axis at $Q$. Find the area of triangle $OPQ$. [[4]]`,
  [R`Tangent gradient $-\frac23$.`, R`$2x + 3y = 13$.`],
  [R`|M1|Tangent $2x + 3y = 13$`, R`|A1|$P\left(\frac{13}{2}, 0\right)$`, R`|A1|$Q\left(0, \frac{13}{3}\right)$`, R`|A1|$\frac{169}{12}$`], R`$\frac{169}{12}$`,
  R`$y - 3 = -\frac23(x - 2)$ gives $2x + 3y = 13$. Area $\frac12 \times \frac{13}{2} \times \frac{13}{3}$.`),
Q('P6.4-9', 3, R`Find the length of the tangent from $T(7, 1)$ to the circle $(x - 2)^2 + (y - 1)^2 = 9$. [[3]]`,
  [R`Right angle between radius and tangent.`, R`$CT = 5$.`],
  [R`|B1|$CT = 5$`, R`|M1|$\sqrt{25 - 9}$`, R`|A1|$4$`], R`$4$`,
  R`Pythagoras in the triangle centre, point of contact, $T$.`),
Q('P6.4-10', 3, R`The line $y = 2x + 3$ is a tangent to a circle with centre $(4, 1)$. Find the radius. [[4]]`,
  [R`The radius to the point of contact is perpendicular to the tangent.`, R`Line through $(4, 1)$ with gradient $-\frac12$.`],
  [R`|M1|$y = -\frac12 x + 3$`, R`|M1|Meets $y = 2x + 3$`, R`|A1|At $(0, 3)$`, R`|A1|$r = 2\sqrt5$`], R`$2\sqrt5$`,
  R`$2x + 3 = -\frac12 x + 3$ gives $x = 0$. Radius $\sqrt{16 + 4} = 2\sqrt5$.`),
Q('P6.4-11', 3, R`A circle with centre $C$ and radius $5$ has a chord of length $8$. Find the distance from $C$ to the chord. [[2]]`,
  [R`The perpendicular from $C$ bisects the chord.`, R`Half the chord is $4$.`],
  [R`|M1|$\sqrt{5^2 - 4^2}$`, R`|A1|$3$`], R`$3$`,
  R`A right-angled triangle with hypotenuse $5$ and side $4$.`),
Q('P6.4-12', 4, R`$A(1, 6)$ and $B(7, 2)$ lie on a circle whose centre is on the line $y = 1$. Find the equation of the circle. [[5]]`,
  [R`The centre lies on the perpendicular bisector of the chord $AB$.`, R`Midpoint $(4, 4)$; bisector gradient $\frac32$.`],
  [R`|B1|Midpoint $(4, 4)$, $m_{AB} = -\frac23$`, R`|M1|$y - 4 = \frac32(x - 4)$`, R`|A1|Centre $(2, 1)$`, R`|M1|$r^2 = 1 + 25$`, R`|A1|$(x - 2)^2 + (y - 1)^2 = 26$`], R`$(x - 2)^2 + (y - 1)^2 = 26$`,
  R`At $y = 1$: $-3 = \frac32(x - 4)$, so $x = 2$. $r^2 = (1 - 2)^2 + (6 - 1)^2 = 26$.`),
Q('P6.4-13', 4, R`Show that the tangents to $x^2 + y^2 = 20$ at $(2, 4)$ and $(4, -2)$ are perpendicular. [[3]]`,
  [R`Find the tangent gradients.`, R`Radii gradients $2$ and $-\frac12$.`],
  [R`|M1|Radii gradients $2$ and $-\frac12$`, R`|A1|Tangent gradients $-\frac12$ and $2$`, R`|A1|Product $-1$`], R`Tangent gradients $-\frac12$ and $2$`,
  R`The radii are perpendicular, so the tangents (each perpendicular to its radius) are too.`),
Q('P6.4-14', 4, R`A circle has its centre on the $x$-axis and passes through $A(-1, 0)$ and $B(5, 4)$. Find its equation. [[4]]`,
  [R`Centre $(a, 0)$, equidistant from $A$ and $B$.`, R`$(a + 1)^2 = (a - 5)^2 + 16$.`],
  [R`|M1|$(a + 1)^2 = (a - 5)^2 + 16$`, R`|A1|$a = \frac{10}{3}$`, R`|A1|$r = \frac{13}{3}$`, R`|A1|$\left(x - \frac{10}{3}\right)^2 + y^2 = \frac{169}{9}$`], R`$\left(x - \frac{10}{3}\right)^2 + y^2 = \frac{169}{9}$`,
  R`$2a + 1 = -10a + 41$, so $a = \frac{10}{3}$; $r = \frac{10}{3} + 1 = \frac{13}{3}$.`),
Q('P6.4-15', 5, R`The circle $C$ has equation $x^2 + y^2 - 6x - 2y - 15 = 0$.

**(a)** Find the centre and radius of $C$. [[2]]

**(b)** Find the points where $C$ meets the $y$-axis. [[2]]

**(c)** Find the equations of the tangents to $C$ at these points. [[3]]

**(d)** Find the point where the two tangents meet. [[1]]`,
  [R`$(x - 3)^2 + (y - 1)^2 = 25$.`, R`Each tangent is perpendicular to its radius.`],
  [R`(a)|M1|Completes the square`, R`(a)|A1|$(3, 1)$, $5$`, R`(b)|M1|$y^2 - 2y - 15 = 0$`, R`(b)|A1|$(0, 5)$, $(0, -3)$`, R`(c)|M1|Radius gradients $-\frac43$, $\frac43$`, R`(c)|A1|$y = \frac34 x + 5$`, R`(c)|A1|$y = -\frac34 x - 3$`, R`(d)|B1|$\left(-\frac{16}{3}, 1\right)$`],
  R`(a) $(3, 1)$, $5$ (b) $(0, 5)$, $(0, -3)$ (c) $y = \frac34 x + 5$, $y = -\frac34 x - 3$ (d) $\left(-\frac{16}{3}, 1\right)$`,
  R`(b) $(y - 5)(y + 3) = 0$.

(c) At $(0, 5)$ the radius has gradient $\frac{4}{-3}$, so the tangent has gradient $\frac34$. At $(0, -3)$ the radius has gradient $\frac{-4}{-3} = \frac43$, so the tangent has gradient $-\frac34$.

(d) $\frac34 x + 5 = -\frac34 x - 3$ gives $x = -\frac{16}{3}$, $y = 1$. (By symmetry it lies on $y = 1$, the line through the centre.)`, { solFig: FIGS['P6.4-15'] })
]};

CONTENT['P6.5'] = {
notes: R`
### Angle in a semicircle
The angle in a semicircle is a **right angle**. So:
- if $AB$ is a diameter and $C$ is on the circle, $\angle ACB = 90°$
- if $\angle ACB = 90°$, then $AB$ is a **diameter** of the circle through $A$, $B$ and $C$.

### The circumcircle
The circle through all three vertices of a triangle has its centre where the **perpendicular bisectors** of the sides meet.

::: booklet
**Not in the formula booklet:** these results.
:::

### Worked example 1
$A(-3, 0)$, $B(5, 0)$, $C(1, 4)$. Show that $\angle ACB = 90°$ and find the circle through $A$, $B$, $C$.
1. $m_{AC} = \frac44 = 1$, $m_{BC} = \frac{4}{-4} = -1$. Product $-1$, so $\angle ACB = 90°$.
2. $AB$ is a diameter: centre $(1, 0)$, radius $4$. The circle is $(x - 1)^2 + y^2 = 16$.

[[fig:P6.5-semi]]

### Worked example 2: a triangle with no right angle
Find the circumcircle of $A(0, 0)$, $B(6, 0)$, $C(2, 4)$.
1. Bisector of $AB$: $x = 3$.
2. Bisector of $AC$: midpoint $(1, 2)$, gradient $-\frac12$: $y = -\frac12 x + \frac52$.
3. At $x = 3$: $y = 1$. Centre $(3, 1)$, $r^2 = 9 + 1 = 10$: $(x - 3)^2 + (y - 1)^2 = 10$.

[[fig:P6.5-circum]]

**The trap:** averaging the three vertices. That gives the centroid $\left(\frac83, \frac43\right)$, which isn't equidistant from the vertices.

### Watch out
- Check your centre is the same distance from **all three** points.
`,
questions: [
Q('P6.5-1', 1, R`$AB$ is a diameter of a circle and $C$ is another point on the circle. Write down the size of $\angle ACB$. [[1]]`,
  [R`Angle in a semicircle.`, R`It's always the same.`],
  [R`|B1|$90°$`], R`$90°$`,
  R`The angle in a semicircle is a right angle.`),
Q('P6.5-2', 1, R`Triangle $ABC$ has $A(0, 0)$, $B(8, 0)$ and a right angle at $C$. Write down the centre and radius of the circle through $A$, $B$ and $C$. [[2]]`,
  [R`$AB$ is a diameter.`, R`Its midpoint is the centre.`],
  [R`|B1|$(4, 0)$`, R`|B1|$4$`], R`Centre $(4, 0)$, radius $4$`,
  R`The hypotenuse $AB$ is a diameter: centre $(4, 0)$, radius $\frac82$.`),
Q('P6.5-3', 1, R`Find the centre and radius of the circle through $(0, 0)$, $(4, 0)$ and $(0, 3)$. [[2]]`,
  [R`The angle at the origin is $90°$.`, R`The hypotenuse joins $(4, 0)$ and $(0, 3)$.`],
  [R`|B1|Centre $\left(2, \frac32\right)$`, R`|B1|Radius $\frac52$`], R`Centre $\left(2, \frac32\right)$, radius $\frac52$`,
  R`The hypotenuse has length $5$ and is a diameter.`),
Q('P6.5-4', 2, R`$A(-2, 1)$ and $B(4, 1)$ are the ends of a diameter. Show that $C(1, 4)$ lies on the circle, and verify that $\angle ACB = 90°$. [[3]]`,
  [R`Centre $(1, 1)$, radius $3$.`, R`$m_{AC}$ and $m_{BC}$.`],
  [R`|B1|$C$ is $3$ from $(1, 1)$`, R`|M1|$m_{AC} = 1$, $m_{BC} = -1$`, R`|A1|Product $-1$`], R`$C$ is on the circle; $1 \times (-1) = -1$`,
  R`$C$ is directly above the centre by $3$. $m_{AC} = \frac{3}{3}$, $m_{BC} = \frac{3}{-3}$.`),
Q('P6.5-5', 2, R`Find the circle through $A(1, 1)$, $B(7, 1)$ and $C(1, 9)$. [[3]]`,
  [R`The angle at $A$ is $90°$ ($AB$ is horizontal, $AC$ vertical).`, R`$BC$ is a diameter.`],
  [R`|B1|Right angle at $A$`, R`|B1|Centre $(4, 5)$`, R`|A1|$(x - 4)^2 + (y - 5)^2 = 25$`], R`$(x - 4)^2 + (y - 5)^2 = 25$`,
  R`$BC = \sqrt{36 + 64} = 10$, so $r = 5$.`),
Q('P6.5-6', 2, R`Find the centre and exact radius of the circle through $(0, 0)$, $(4, 0)$ and $(0, 6)$. [[3]]`,
  [R`Right angle at the origin.`, R`Diameter from $(4, 0)$ to $(0, 6)$.`],
  [R`|B1|Right angle at $O$`, R`|B1|Centre $(2, 3)$`, R`|B1|Radius $\sqrt{13}$`], R`Centre $(2, 3)$, radius $\sqrt{13}$`,
  R`Radius $= \sqrt{2^2 + 3^2} = \sqrt{13}$.`),
Q('P6.5-7', 2, R`$AB$ is a diameter of a circle, with $A(2, 5)$ and $B(8, -3)$. Find the equation of the circle. [[3]]`,
  [R`Centre at the midpoint.`, R`Radius: half of $AB$.`],
  [R`|B1|$(5, 1)$`, R`|M1|$r^2 = 9 + 16$`, R`|A1|$(x - 5)^2 + (y - 1)^2 = 25$`], R`$(x - 5)^2 + (y - 1)^2 = 25$`,
  R`$AB = \sqrt{36 + 64} = 10$.`),
Q('P6.5-8', 3, R`Find the equation of the circle through $A(0, 0)$, $B(6, 0)$ and $C(2, 4)$. [[4]]`,
  [R`Bisector of $AB$: $x = 3$.`, R`Bisector of $AC$: through $(1, 2)$, gradient $-\frac12$.`],
  [R`|B1|$x = 3$`, R`|M1|$y - 2 = -\frac12(x - 1)$`, R`|A1|Centre $(3, 1)$`, R`|A1|$(x - 3)^2 + (y - 1)^2 = 10$`], R`$(x - 3)^2 + (y - 1)^2 = 10$`,
  R`At $x = 3$: $y = 2 - 1 = 1$. Check with $C$: $1 + 9 = 10$.`),
Q('P6.5-9', 3, R`The circle $(x - 3)^2 + (y + 1)^2 = 25$ has a diameter $AB$ with $A(0, 3)$. Find $B$. [[2]]`,
  [R`The centre is the midpoint of $AB$.`, R`$B = 2 \times$ centre $- A$.`],
  [R`|M1|Centre $(3, -1)$ is the midpoint`, R`|A1|$B(6, -5)$`], R`$(6, -5)$`,
  R`From $A$ to the centre is $(+3, -4)$; repeat to get $(6, -5)$.`),
Q('P6.5-10', 3, R`$A(-3, 0)$ and $B(5, 0)$. The point $C(1, k)$ satisfies $\angle ACB = 90°$. Find $k$. [[3]]`,
  [R`$C$ is on the circle with diameter $AB$.`, R`Centre $(1, 0)$, radius $4$.`],
  [R`|M1|Circle with diameter $AB$`, R`|M1|$k^2 = 16$`, R`|A1|$k = \pm4$`], R`$k = \pm4$`,
  R`$(1 - 1)^2 + k^2 = 16$. (Or $m_{AC} m_{BC} = \frac{k}{4} \cdot \frac{k}{-4} = -1$.)`),
Q('P6.5-11', 3, R`$A(1, 2)$ and $B(7, 2)$ are the ends of a diameter of a circle. Show that $C(4, 5)$ lies on the circle, and hence state the size of $\angle ACB$. Check your answer using gradients. [[3]]`,
  [R`Centre $(4, 2)$, radius $3$.`, R`$m_{AC} = 1$, $m_{BC} = -1$.`],
  [R`|B1|$C$ is $3$ from the centre`, R`|B1|$90°$ (angle in a semicircle)`, R`|B1|$1 \times (-1) = -1$`], R`On the circle; $\angle ACB = 90°$`,
  R`The centre is $(4, 2)$ and $C$ is $3$ above it. $m_{AC} = \frac{3}{3} = 1$, $m_{BC} = \frac{3}{-3} = -1$.`),
Q('P6.5-12', 4, R`$P(-1, 3)$, $Q(3, 5)$ and $R(5, 1)$.

**(a)** Show that triangle $PQR$ has a right angle at $Q$. [[2]]

**(b)** Find the equation of the circle through $P$, $Q$ and $R$. [[3]]`,
  [R`$m_{PQ} = \frac12$, $m_{QR} = -2$.`, R`$PR$ is a diameter.`],
  [R`(a)|M1|Both gradients`, R`(a)|A1|Product $-1$`, R`(b)|B1|Centre $(2, 2)$`, R`(b)|M1|$r^2 = 9 + 1$`, R`(b)|A1|$(x - 2)^2 + (y - 2)^2 = 10$`], R`(b) $(x - 2)^2 + (y - 2)^2 = 10$`,
  R`(b) The midpoint of $PR$ is $(2, 2)$, and $(5 - 2)^2 + (1 - 2)^2 = 10$.`),
Q('P6.5-13', 4, R`Find the equation of the circle through $A(1, 2)$, $B(5, 6)$ and $C(7, 0)$. [[5]]`,
  [R`Bisector of $AB$: midpoint $(3, 4)$, gradient $-1$.`, R`Bisector of $BC$: midpoint $(6, 3)$, gradient $\frac13$.`],
  [R`|M1|$y = -x + 7$`, R`|M1|$y = \frac13 x + 1$`, R`|M1|Solves`, R`|A1|Centre $\left(\frac92, \frac52\right)$`, R`|A1|$\left(x - \frac92\right)^2 + \left(y - \frac52\right)^2 = \frac{25}{2}$`], R`$\left(x - \frac92\right)^2 + \left(y - \frac52\right)^2 = \frac{25}{2}$`,
  R`$-x + 7 = \frac13 x + 1$, so $x = \frac92$, $y = \frac52$. $r^2 = \left(\frac72\right)^2 + \left(\frac12\right)^2 = \frac{50}{4}$. Check $C$: $\left(\frac52\right)^2 + \left(\frac52\right)^2 = \frac{50}{4}$.`),
Q('P6.5-14', 4, R`A circle passes through $(0, 0)$, $(8, 0)$ and $(0, 6)$. Find the equation of the circle and of the tangent to it at the origin. [[4]]`,
  [R`Right angle at $O$: the diameter joins $(8, 0)$ and $(0, 6)$.`, R`The radius to $O$ has gradient $\frac34$.`],
  [R`|B1|Centre $(4, 3)$`, R`|A1|$(x - 4)^2 + (y - 3)^2 = 25$`, R`|M1|Tangent gradient $-\frac43$`, R`|A1|$y = -\frac43 x$`], R`$(x - 4)^2 + (y - 3)^2 = 25$; $y = -\frac43 x$`,
  R`The radius from $(4, 3)$ to $(0, 0)$ has gradient $\frac34$, so the tangent has gradient $-\frac43$ and passes through $O$.`),
Q('P6.5-15', 5, R`$A(-3, 5)$, $B(4, 6)$ and $C(5, -1)$.

**(a)** Show that $\angle ABC = 90°$. [[2]]

**(b)** Find the equation of the circle through $A$, $B$ and $C$. [[3]]

**(c)** Find the equation of the tangent to the circle at $C$, in the form $ax + by + c = 0$. [[3]]`,
  [R`$m_{AB} = \frac17$, $m_{BC} = -7$.`, R`$AC$ is a diameter; the tangent at $C$ is perpendicular to the radius.`],
  [R`(a)|M1|Both gradients`, R`(a)|A1|Product $-1$`, R`(b)|B1|Centre $(1, 2)$`, R`(b)|M1|$r^2 = 16 + 9$`, R`(b)|A1|$(x - 1)^2 + (y - 2)^2 = 25$`, R`(c)|M1|Radius gradient $-\frac34$`, R`(c)|M1|$y + 1 = \frac43(x - 5)$`, R`(c)|A1|$4x - 3y - 23 = 0$`],
  R`(b) $(x - 1)^2 + (y - 2)^2 = 25$ (c) $4x - 3y - 23 = 0$`,
  R`(b) The midpoint of $AC$ is $(1, 2)$ and $(5 - 1)^2 + (-1 - 2)^2 = 25$.

(c) The radius to $C$ has gradient $\frac{-1 - 2}{5 - 1} = -\frac34$, so the tangent has gradient $\frac43$: $3y + 3 = 4x - 20$.`, { solFig: FIGS['P6.5-15'] })
]};
