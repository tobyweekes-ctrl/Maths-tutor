/* Pure Mathematics Year 1 · Chapter 10 Trigonometric identities and equations (sections 10.1 to 10.6) */
BOOK_CHAPTERS.push({ id:'P10', book:'Pure Mathematics Year 1', label:'Chapter 10', title:'Trigonometric identities and equations', sections:[
  { id:'P10.1', num:'10.1', title:'Angles in all four quadrants' },
  { id:'P10.2', num:'10.2', title:'Exact values of trigonometric ratios' },
  { id:'P10.3', num:'10.3', title:'Trigonometric identities' },
  { id:'P10.4', num:'10.4', title:'Simple trigonometric equations' },
  { id:'P10.5', num:'10.5', title:'Harder trigonometric equations' },
  { id:'P10.6', num:'10.6', title:'Equations and identities' }
]});
{
  const rad = d => d * Math.PI / 180, S = d => Math.sin(rad(d)), Cs = d => Math.cos(rad(d));
  const deg = [[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']];
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  FIGS['P10.1-unit'] = Fig.graph({ label: 'The unit circle: the point at angle θ = 210° from the positive x-axis is (cos θ, sin θ) = (−√3/2, −1/2). The CAST letters show which ratios are positive in each quadrant',
    x0: -1.5, x1: 1.5, y0: -1.3, y1: 1.3, equal: true, xlab: '', ylab: '', circles: [{ x: 0, y: 0, r: 1 }],
    segs: [{ x1: 0, y1: 0, x2: Cs(210), y2: S(210), col: 'var(--pen)', w: 2 }, { x1: Cs(210), y1: S(210), x2: Cs(210), y2: 0, dash: true }],
    points: [pt(Cs(210), S(210), '(cos 210°, sin 210°)', -10, 18)],
    texts: [{ x: 0.5, y: 0.5, label: 'A (all)' }, { x: -0.5, y: 0.5, label: 'S (sin)' }, { x: -0.2, y: -0.88, label: 'T (tan)' }, { x: 0.5, y: -0.5, label: 'C (cos)' }, { x: -0.42, y: -0.14, label: '30°', size: 11 }] });
  FIGS['P10.2-tris'] = Fig.geo({ label: 'Left: half an equilateral triangle with sides 1, √3 and 2 and angles 30°, 60°, 90°. Right: an isosceles right-angled triangle with sides 1, 1 and √2',
    pts: { A: [0, 0], B: [1.732, 0], C: [0, 1], D: [3, 0], E: [4, 0], F: [3, 1] }, segs: 'AB BC CA DE EF FD', right: ['BAC', 'EDF'],
    labels: { A: [-10, 10], B: [10, 10], C: [-10, -6], D: [-10, 10], E: [10, 10], F: [-10, -6] },
    angles: [{ at: 'B', from: 'A', to: 'C', label: '30°', r: 30 }, { at: 'C', from: 'A', to: 'B', label: '60°', r: 20 }, { at: 'E', from: 'D', to: 'F', label: '45°', r: 22 }],
    sides: [{ on: 'AB', label: '√3', off: 14 }, { on: 'CA', label: '1', off: 12 }, { on: 'BC', label: '2', off: 14 }, { on: 'DE', label: '1', off: 14 }, { on: 'FD', label: '1', off: 12 }, { on: 'EF', label: '√2', off: 14 }], w: 380 });
  FIGS['P10.4-sin'] = Fig.graph({ label: 'y = sin x and y = 0.4 meeting at x = 23.6° and x = 156.4°', x0: 0, x1: 360, y0: -1.4, y1: 1.4, xticks: deg, yticks: [[1, '1'], [-1, '−1']],
    fns: [{ f: S }], hlines: [{ y: 0.4, label: 'y = 0.4' }], points: [pt(23.58, 0.4, '23.6°', -4, -12), pt(156.42, 0.4, '156.4°', 8, -12)] });
  FIGS['P10.4-cos'] = Fig.graph({ label: 'y = cos x for −180° ≤ x ≤ 180° and y = −0.3, meeting at x = ±107.5°', x0: -180, x1: 180, y0: -1.4, y1: 1.4, xticks: [[-180, '−180°'], [-90, '−90°'], [90, '90°'], [180, '180°']], yticks: [[1, '1'], [-1, '−1']],
    fns: [{ f: Cs }], hlines: [{ y: -0.3, label: 'y = −0.3' }], points: [pt(-107.46, -0.3, '−107.5°', -26, 16), pt(107.46, -0.3, '107.5°', 22, 16)] });
  FIGS['P10.5-sin2x'] = Fig.graph({ label: 'y = sin 2x and y = 0.5 for 0° ≤ x ≤ 360°: four intersections at 15°, 75°, 195°, 255°', x0: 0, x1: 360, y0: -1.4, y1: 1.4, xticks: deg, yticks: [[1, '1'], [-1, '−1']],
    fns: [{ f: x => S(2 * x) }], hlines: [{ y: 0.5 }], points: [15, 75, 195, 255].map(v => pt(v, 0.5, v + '°', 0, -12)) });
  FIGS['P10.6-quad'] = Fig.graph({ label: 'y = sin x with the lines y = 1 and y = −1/2: sin x = 1 at 90°; sin x = −1/2 at 210° and 330°', x0: 0, x1: 360, y0: -1.4, y1: 1.4, xticks: deg, yticks: [[1, '1'], [-0.5, '−½']],
    fns: [{ f: S }], hlines: [{ y: 1 }, { y: -0.5 }], points: [pt(90, 1, '90°', 0, -12), pt(210, -0.5, '210°', -18, 14), pt(330, -0.5, '330°', 18, 14)] });
  FIGS['P10.4-15'] = Fig.graph({ label: 'y = sin x with y = 0.7 (meeting at 44.4° and 135.6°) and y = −0.7 (meeting at 224.4° and 315.6°)', x0: 0, x1: 360, y0: -1.4, y1: 1.4, xticks: deg, yticks: [[0.7, '0.7'], [-0.7, '−0.7']],
    fns: [{ f: S }], hlines: [{ y: 0.7 }, { y: -0.7 }], points: [pt(44.43, 0.7, '44.4°', -22, -10), pt(135.57, 0.7, '135.6°', 26, -10), pt(224.43, -0.7, '224.4°', -26, 14), pt(315.57, -0.7, '315.6°', 26, 14)] });
}

CONTENT['P10.1'] = {
notes: R`
### Angles of any size
Angles are measured **anticlockwise** from the positive $x$-axis (negative angles go clockwise). On a circle of radius $1$, the point at angle $\theta$ is $(\cos\theta, \sin\theta)$, and $\tan\theta = \frac{\sin\theta}{\cos\theta}$.

### CAST
Which ratios are positive in each quadrant:
- $0°$–$90°$: **A**ll
- $90°$–$180°$: **S**in
- $180°$–$270°$: **T**an
- $270°$–$360°$: **C**os

[[fig:P10.1-unit]]

### Related acute angle
Find the acute angle to the $x$-axis, then attach the sign from CAST:
- $\sin(180° - \theta) = \sin\theta$, $\cos(180° - \theta) = -\cos\theta$
- $\sin(180° + \theta) = -\sin\theta$, $\cos(180° + \theta) = -\cos\theta$
- $\sin(360° - \theta) = -\sin\theta$, $\cos(360° - \theta) = \cos\theta$

::: booklet
**Not in the formula booklet:** CAST or these results.
:::

### Worked example 1
Write $\sin 210°$ in terms of an acute angle.
- $210° = 180° + 30°$, third quadrant: only $\tan$ is positive. So $\sin 210° = -\sin 30° = -\frac12$.

### Worked example 2: a negative angle
Find $\cos(-120°)$.
- $-120°$ is $120°$ **clockwise**, landing in the third quadrant, $60°$ from the negative $x$-axis.
- $\cos$ is negative there: $\cos(-120°) = -\cos 60° = -\frac12$.

**The trap:** treating $-120°$ as if it were $120°$ in the second quadrant and then also flipping the sign. Draw it: $\cos(-\theta) = \cos\theta$, so $\cos(-120°) = \cos 120° = -\frac12$, and both routes agree.

### Watch out
- The related angle is always measured to the **$x$-axis**, never the $y$-axis.
`,
questions: [
Q('P10.1-1', 1, R`In which quadrant does an angle of $230°$ lie? [[1]]`,
  [R`The quadrants change at $90°$, $180°$, $270°$.`, R`$180° < 230° < 270°$.`],
  [R`|B1|Third`], R`Third quadrant`,
  R`$230°$ is between $180°$ and $270°$, so it's in the third quadrant.`),
Q('P10.1-2', 1, R`State whether $\cos 300°$ is positive or negative, giving a reason. [[1]]`,
  [R`Which quadrant is $300°$ in?`, R`Use CAST.`],
  [R`|B1|Positive: fourth quadrant, where $\cos$ is positive`], R`Positive`,
  R`$300°$ is in the fourth quadrant (the "C" of CAST), so $\cos 300° > 0$.`),
Q('P10.1-3', 1, R`Write $\sin 160°$ as the sine of an acute angle. [[1]]`,
  [R`$160° = 180° - 20°$.`, R`$\sin(180° - \theta) = \sin\theta$.`],
  [R`|B1|$\sin 20°$`], R`$\sin 20°$`,
  R`Second quadrant, where $\sin$ is positive: $\sin 160° = \sin 20°$.`),
Q('P10.1-4', 2, R`Write $\cos 250°$ in terms of the cosine of an acute angle. [[2]]`,
  [R`$250° = 180° + 70°$.`, R`$\cos$ is negative in the third quadrant.`],
  [R`|M1|Related angle $70°$`, R`|A1|$-\cos 70°$`], R`$-\cos 70°$`,
  R`Third quadrant: only $\tan$ is positive, so $\cos 250° = -\cos 70°$.`),
Q('P10.1-5', 2, R`Write $\tan 310°$ in terms of the tangent of an acute angle. [[2]]`,
  [R`$310° = 360° - 50°$.`, R`$\tan$ is negative in the fourth quadrant.`],
  [R`|M1|Related angle $50°$`, R`|A1|$-\tan 50°$`], R`$-\tan 50°$`,
  R`In the fourth quadrant only $\cos$ is positive, so $\tan 310° = -\tan 50°$.`),
Q('P10.1-6', 2, R`Write $\sin(-50°)$ in terms of the sine of an acute angle. [[2]]`,
  [R`$-50°$ is $50°$ clockwise: fourth quadrant.`, R`$\sin$ is negative there.`],
  [R`|M1|Fourth quadrant`, R`|A1|$-\sin 50°$`], R`$-\sin 50°$`,
  R`$\sin(-\theta) = -\sin\theta$, so $\sin(-50°) = -\sin 50°$.`),
Q('P10.1-7', 2, R`The point $P$ on the unit circle is at an angle of $135°$ from the positive $x$-axis. Find the exact coordinates of $P$. [[2]]`,
  [R`$P = (\cos 135°, \sin 135°)$.`, R`Related angle $45°$; second quadrant.`],
  [R`|M1|$(\cos 135°, \sin 135°)$`, R`|A1|$\left(-\frac{\sqrt2}{2}, \frac{\sqrt2}{2}\right)$`], R`$\left(-\frac{\sqrt2}{2}, \frac{\sqrt2}{2}\right)$`,
  R`$\cos 135° = -\cos 45°$ and $\sin 135° = \sin 45°$.`),
Q('P10.1-8', 3, R`Given that $\sin\theta = 0.6$ and $\theta$ is obtuse, find $\cos\theta$ and $\tan\theta$. [[3]]`,
  [R`Use a $3, 4, 5$ triangle: the related angle has $\cos = 0.8$.`, R`$\cos$ is negative in the second quadrant.`],
  [R`|M1|Related $\cos = 0.8$`, R`|A1|$\cos\theta = -0.8$`, R`|A1|$\tan\theta = -0.75$`], R`$\cos\theta = -0.8$, $\tan\theta = -0.75$`,
  R`$\tan\theta = \frac{0.6}{-0.8} = -0.75$.`),
Q('P10.1-9', 3, R`Write $\cos(-200°)$ in terms of the cosine of an acute angle. [[2]]`,
  [R`$\cos(-\theta) = \cos\theta$.`, R`$\cos 200° = \cos(180° + 20°)$.`],
  [R`|M1|$\cos(-200°) = \cos 200°$`, R`|A1|$-\cos 20°$`], R`$-\cos 20°$`,
  R`$-200°$ clockwise lands $20°$ above the negative $x$-axis (second quadrant), where $\cos$ is negative.`),
Q('P10.1-10', 3, R`Simplify $\sin(180° - \theta) + \sin(180° + \theta)$. [[2]]`,
  [R`$\sin(180° - \theta) = \sin\theta$.`, R`$\sin(180° + \theta) = -\sin\theta$.`],
  [R`|M1|Both rewritten`, R`|A1|$0$`], R`$0$`,
  R`$\sin\theta + (-\sin\theta) = 0$.`),
Q('P10.1-11', 3, R`Use the unit circle to explain why $\cos(180° - \theta) = -\cos\theta$. [[2]]`,
  [R`The points at $\theta$ and $180° - \theta$ are reflections of each other.`, R`Which coordinate changes sign?`],
  [R`|B1|The point at $180° - \theta$ is the reflection in the $y$-axis of the point at $\theta$`, R`|B1|So its $x$-coordinate (the cosine) changes sign`], R`Reflection in the $y$-axis changes the sign of $x$`,
  R`$(\cos\theta, \sin\theta)$ reflects to $(-\cos\theta, \sin\theta)$, which is the point at $180° - \theta$.`),
Q('P10.1-12', 4, R`Given that $\tan\theta = -2$ and $90° < \theta < 180°$, find the exact values of $\sin\theta$ and $\cos\theta$. [[4]]`,
  [R`Draw a right-angled triangle with opposite $2$, adjacent $1$: hypotenuse $\sqrt5$.`, R`Second quadrant: $\sin > 0$, $\cos < 0$.`],
  [R`|M1|Hypotenuse $\sqrt5$`, R`|M1|Signs from the quadrant`, R`|A1|$\sin\theta = \frac{2}{\sqrt5}$`, R`|A1|$\cos\theta = -\frac{1}{\sqrt5}$`], R`$\sin\theta = \frac{2\sqrt5}{5}$, $\cos\theta = -\frac{\sqrt5}{5}$`,
  R`Check: $\frac{2/\sqrt5}{-1/\sqrt5} = -2$.`),
Q('P10.1-13', 4, R`Simplify $\dfrac{\sin(360° - \theta)}{\cos(180° + \theta)}$. [[3]]`,
  [R`$\sin(360° - \theta) = -\sin\theta$.`, R`$\cos(180° + \theta) = -\cos\theta$.`],
  [R`|B1|$-\sin\theta$`, R`|B1|$-\cos\theta$`, R`|A1|$\tan\theta$`], R`$\tan\theta$`,
  R`$\frac{-\sin\theta}{-\cos\theta} = \tan\theta$.`),
Q('P10.1-14', 4, R`Find all angles $\theta$ in $0° \le \theta < 360°$ that have **(a)** the same cosine as $50°$ **(b)** the same tangent as $50°$. [[2]]`,
  [R`$\cos$ is positive in quadrants 1 and 4.`, R`$\tan$ is positive in quadrants 1 and 3.`],
  [R`(a)|B1|$50°$, $310°$`, R`(b)|B1|$50°$, $230°$`], R`(a) $50°$, $310°$ (b) $50°$, $230°$`,
  R`(a) $360° - 50° = 310°$. (b) $180° + 50° = 230°$.`),
Q('P10.1-15', 5, R`The angle $\theta$ satisfies $270° < \theta < 360°$ and $\cos\theta = \frac{5}{13}$.

**(a)** Find the exact values of $\sin\theta$ and $\tan\theta$. [[3]]

**(b)** Find the exact values of $\sin(180° + \theta)$ and $\cos(180° - \theta)$. [[2]]

**(c)** Find the exact value of $\tan(\theta - 180°)$. [[1]]

**(d)** Verify that $\sin^2\theta + \cos^2\theta = 1$ for your values. [[1]]`,
  [R`A $5, 12, 13$ triangle.`, R`Fourth quadrant: $\sin < 0$, $\tan < 0$.`],
  [R`(a)|M1|Uses $5, 12, 13$`, R`(a)|A1|$\sin\theta = -\frac{12}{13}$`, R`(a)|A1|$\tan\theta = -\frac{12}{5}$`, R`(b)|B1|$\sin(180° + \theta) = \frac{12}{13}$`, R`(b)|B1|$\cos(180° - \theta) = -\frac{5}{13}$`, R`(c)|B1|$-\frac{12}{5}$`, R`(d)|B1|$\frac{144}{169} + \frac{25}{169} = 1$`],
  R`(a) $-\frac{12}{13}$, $-\frac{12}{5}$ (b) $\frac{12}{13}$, $-\frac{5}{13}$ (c) $-\frac{12}{5}$`,
  R`(b) $\sin(180° + \theta) = -\sin\theta$ and $\cos(180° - \theta) = -\cos\theta$.

(c) $\tan$ has period $180°$.`)
]};

CONTENT['P10.2'] = {
notes: R`
### Two special triangles
Half an equilateral triangle of side $2$ has sides $1$, $\sqrt3$, $2$; an isosceles right-angled triangle has sides $1$, $1$, $\sqrt2$.

[[fig:P10.2-tris]]

| | $30°$ | $45°$ | $60°$ |
|---|---|---|---|
| $\sin$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\tan$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ |

Also $\sin 0° = 0$, $\cos 0° = 1$, $\sin 90° = 1$, $\cos 90° = 0$.

::: booklet
**Not in the formula booklet:** these exact values.
:::

### Worked example 1
Find $\sin 60°$ exactly.
- In the $30°$-$60°$-$90°$ triangle, opposite $60°$ is $\sqrt3$ and the hypotenuse is $2$: $\sin 60° = \frac{\sqrt3}{2}$.

### Worked example 2: other quadrants
Find exactly **(a)** $\cos 330°$ **(b)** $\tan 240°$.
- (a) Related angle $30°$, fourth quadrant ($\cos$ positive): $\frac{\sqrt3}{2}$.
- (b) Related angle $60°$, third quadrant ($\tan$ positive): $\sqrt3$.

**The trap:** using $\cos 60°$ for $\cos 330°$. The related angle is $360° - 330° = 30°$.

### Watch out
- $\frac{1}{\sqrt3} = \frac{\sqrt3}{3}$ and $\frac{1}{\sqrt2} = \frac{\sqrt2}{2}$: rationalise if asked.
`,
questions: [
Q('P10.2-1', 1, R`Write down the exact value of $\sin 45°$. [[1]]`,
  [R`Use the $1, 1, \sqrt2$ triangle.`, R`Opposite over hypotenuse.`],
  [R`|B1|$\frac{\sqrt2}{2}$`], R`$\frac{\sqrt2}{2}$`,
  R`$\sin 45° = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$.`),
Q('P10.2-2', 1, R`Write down the exact value of $\tan 60°$. [[1]]`,
  [R`Opposite $\sqrt3$, adjacent $1$.`, R`Opposite over adjacent.`],
  [R`|B1|$\sqrt3$`], R`$\sqrt3$`,
  R`In the $1, \sqrt3, 2$ triangle, $\tan 60° = \frac{\sqrt3}{1}$.`),
Q('P10.2-3', 1, R`Write down the exact value of $\cos 30°$. [[1]]`,
  [R`Adjacent to $30°$ is $\sqrt3$.`, R`Hypotenuse $2$.`],
  [R`|B1|$\frac{\sqrt3}{2}$`], R`$\frac{\sqrt3}{2}$`,
  R`$\cos 30° = \frac{\sqrt3}{2}$.`),
Q('P10.2-4', 2, R`Find the exact value of $\sin 135°$. [[2]]`,
  [R`Related angle $45°$.`, R`$\sin$ is positive in the second quadrant.`],
  [R`|M1|$\sin 135° = \sin 45°$`, R`|A1|$\frac{\sqrt2}{2}$`], R`$\frac{\sqrt2}{2}$`,
  R`$\sin(180° - 45°) = \sin 45°$.`),
Q('P10.2-5', 2, R`Find the exact value of $\cos 240°$. [[2]]`,
  [R`Related angle $60°$.`, R`Third quadrant: $\cos$ negative.`],
  [R`|M1|$-\cos 60°$`, R`|A1|$-\frac12$`], R`$-\frac12$`,
  R`$\cos(180° + 60°) = -\cos 60°$.`),
Q('P10.2-6', 2, R`Find the exact value of $\tan 300°$. [[2]]`,
  [R`Related angle $60°$.`, R`Fourth quadrant: $\tan$ negative.`],
  [R`|M1|$-\tan 60°$`, R`|A1|$-\sqrt3$`], R`$-\sqrt3$`,
  R`$\tan(360° - 60°) = -\tan 60°$.`),
Q('P10.2-7', 2, R`Find the exact value of $\sin 330° + \cos 60°$. [[2]]`,
  [R`$\sin 330° = -\sin 30°$.`, R`$\cos 60° = \frac12$.`],
  [R`|M1|$-\frac12 + \frac12$`, R`|A1|$0$`], R`$0$`,
  R`$\sin 330° = -\frac12$, so the sum is $0$.`),
Q('P10.2-8', 3, R`Find the exact value of $\sin 60°\cos 30° - \cos 60°\sin 30°$. [[2]]`,
  [R`$\frac{\sqrt3}{2} \cdot \frac{\sqrt3}{2} - \frac12 \cdot \frac12$.`, R`$\frac34 - \frac14$.`],
  [R`|M1|Substitutes exact values`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`$\frac34 - \frac14 = \frac12$ (it equals $\sin 30°$).`),
Q('P10.2-9', 3, R`Use a suitable triangle to show that $\tan 30° = \dfrac{\sqrt3}{3}$. [[2]]`,
  [R`Half an equilateral triangle of side $2$.`, R`Opposite $30°$ is $1$, adjacent is $\sqrt3$.`],
  [R`|M1|Triangle with sides $1$, $\sqrt3$, $2$`, R`|A1|$\frac{1}{\sqrt3} = \frac{\sqrt3}{3}$`], R`Shown`,
  R`Splitting an equilateral triangle of side $2$ gives a base of $1$ and height $\sqrt{4 - 1} = \sqrt3$.`),
Q('P10.2-10', 3, R`Find the exact value of $\sin^2 45° + \cos^2 120°$. [[2]]`,
  [R`$\sin^2 45° = \frac12$.`, R`$\cos 120° = -\frac12$, so $\cos^2 120° = \frac14$.`],
  [R`|M1|Both values`, R`|A1|$\frac34$`], R`$\frac34$`,
  R`$\frac12 + \frac14 = \frac34$.`),
Q('P10.2-11', 3, R`Find the exact value of $(\sin 120° + \cos 150°)\tan 225°$. [[3]]`,
  [R`$\sin 120° = \frac{\sqrt3}{2}$, $\cos 150° = -\frac{\sqrt3}{2}$.`, R`$\tan 225° = 1$.`],
  [R`|B1|$\sin 120° = \frac{\sqrt3}{2}$`, R`|B1|$\cos 150° = -\frac{\sqrt3}{2}$`, R`|A1|$0$`], R`$0$`,
  R`The bracket is $0$, so the product is $0$.`),
Q('P10.2-12', 4, R`Find the exact area of a triangle with sides $6$ cm and $10$ cm and an included angle of $135°$. [[3]]`,
  [R`$\frac12 ab\sin C$.`, R`$\sin 135° = \frac{\sqrt2}{2}$.`],
  [R`|M1|$\frac12 \times 6 \times 10 \times \sin 135°$`, R`|B1|$\sin 135° = \frac{\sqrt2}{2}$`, R`|A1|$15\sqrt2$ cm²`], R`$15\sqrt2$ cm²`,
  R`$30 \times \frac{\sqrt2}{2} = 15\sqrt2$.`),
Q('P10.2-13', 4, R`Find the exact value of $\dfrac{\cos 210°}{\sin 300°}$. [[2]]`,
  [R`$\cos 210° = -\frac{\sqrt3}{2}$.`, R`$\sin 300° = -\frac{\sqrt3}{2}$.`],
  [R`|M1|Both values`, R`|A1|$1$`], R`$1$`,
  R`$\frac{-\sqrt3/2}{-\sqrt3/2} = 1$.`),
Q('P10.2-14', 4, R`Show that $2\sin 30°\cos 30° = \sin 60°$. [[2]]`,
  [R`$2 \times \frac12 \times \frac{\sqrt3}{2}$.`, R`Compare with $\sin 60°$.`],
  [R`|M1|$2 \cdot \frac12 \cdot \frac{\sqrt3}{2}$`, R`|A1|$= \frac{\sqrt3}{2} = \sin 60°$`], R`Shown`,
  R`Both sides equal $\frac{\sqrt3}{2}$. (This is a case of $\sin 2A = 2\sin A\cos A$, met in Year 2.)`),
Q('P10.2-15', 5, R`**(a)** Using an equilateral triangle of side $2$, derive exact values of $\sin 60°$, $\cos 60°$ and $\tan 60°$. [[3]]

**(b)** Hence find the exact values of $\sin 240°$, $\cos 300°$ and $\tan 120°$. [[3]]

**(c)** Find the exact value of $(1 + \tan^2 60°)\cos^2 60°$. [[2]]`,
  [R`Drop a perpendicular: height $\sqrt3$, half-base $1$.`, R`Then use CAST with related angle $60°$.`],
  [R`(a)|M1|Height $\sqrt3$`, R`(a)|A1|$\sin 60° = \frac{\sqrt3}{2}$, $\cos 60° = \frac12$`, R`(a)|A1|$\tan 60° = \sqrt3$`, R`(b)|B1|$\sin 240° = -\frac{\sqrt3}{2}$`, R`(b)|B1|$\cos 300° = \frac12$`, R`(b)|B1|$\tan 120° = -\sqrt3$`, R`(c)|M1|$(1 + 3) \times \frac14$`, R`(c)|A1|$1$`],
  R`(b) $-\frac{\sqrt3}{2}$, $\frac12$, $-\sqrt3$ (c) $1$`,
  R`(b) $240°$: third quadrant, $\sin$ negative. $300°$: fourth, $\cos$ positive. $120°$: second, $\tan$ negative.

(c) $4 \times \frac14 = 1$. (In fact $(1 + \tan^2\theta)\cos^2\theta = \cos^2\theta + \sin^2\theta = 1$ for every $\theta$.)`)
]};

CONTENT['P10.3'] = {
notes: R`
### Two identities
$$\sin^2\theta + \cos^2\theta \equiv 1 \qquad \tan\theta \equiv \frac{\sin\theta}{\cos\theta}$$
Rearranged: $\sin^2\theta \equiv 1 - \cos^2\theta$ and $\cos^2\theta \equiv 1 - \sin^2\theta$.

Here $\sin^2\theta$ means $(\sin\theta)^2$.

### Proving an identity
Start with the more complicated side and simplify it until it becomes the other side. Don't work on both sides at once.

::: booklet
**Not in the formula booklet:** these identities (only the Year 2 ones appear).
:::

### Worked example 1
Simplify $\dfrac{1 - \cos^2\theta}{\sin\theta}$.
$$\frac{\sin^2\theta}{\sin\theta} = \sin\theta$$

### Worked example 2: watch the sign
Given $\sin\theta = \frac35$ and $\theta$ is obtuse, find $\cos\theta$ and $\tan\theta$.
1. $\cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, so $\cos\theta = \pm\frac45$.
2. Obtuse means second quadrant, so $\cos\theta = -\frac45$ and $\tan\theta = \frac{3/5}{-4/5} = -\frac34$.

**The trap:** taking only the positive square root. The quadrant decides the sign.

### Watch out
- $\sin^2\theta + \cos^2\theta = 1$ works for any angle, including $3\theta$: $\sin^2 3\theta + \cos^2 3\theta = 1$.
`,
questions: [
Q('P10.3-1', 1, R`Simplify $\sin^2 3\theta + \cos^2 3\theta$. [[1]]`,
  [R`The identity works for any angle.`, R`Here the angle is $3\theta$.`],
  [R`|B1|$1$`], R`$1$`,
  R`$\sin^2 A + \cos^2 A = 1$ with $A = 3\theta$.`),
Q('P10.3-2', 1, R`Simplify $\dfrac{\sin\theta}{\tan\theta}$. [[1]]`,
  [R`$\tan\theta = \frac{\sin\theta}{\cos\theta}$.`, R`Dividing by a fraction: multiply by its reciprocal.`],
  [R`|B1|$\cos\theta$`], R`$\cos\theta$`,
  R`$\sin\theta \times \frac{\cos\theta}{\sin\theta} = \cos\theta$.`),
Q('P10.3-3', 1, R`Simplify $5 - 5\cos^2\theta$. [[1]]`,
  [R`Factorise: $5(1 - \cos^2\theta)$.`, R`$1 - \cos^2\theta = \sin^2\theta$.`],
  [R`|B1|$5\sin^2\theta$`], R`$5\sin^2\theta$`,
  R`$5(1 - \cos^2\theta) = 5\sin^2\theta$.`),
Q('P10.3-4', 2, R`Simplify $\dfrac{1 - \sin^2\theta}{\cos\theta}$. [[2]]`,
  [R`$1 - \sin^2\theta = \cos^2\theta$.`, R`Cancel one $\cos\theta$.`],
  [R`|M1|$\frac{\cos^2\theta}{\cos\theta}$`, R`|A1|$\cos\theta$`], R`$\cos\theta$`,
  R`$\frac{\cos^2\theta}{\cos\theta} = \cos\theta$.`),
Q('P10.3-5', 2, R`Given $\cos\theta = 0.6$ and $\theta$ is acute, find $\sin\theta$ and $\tan\theta$. [[2]]`,
  [R`$\sin^2\theta = 1 - 0.36$.`, R`Acute: positive root.`],
  [R`|B1|$\sin\theta = 0.8$`, R`|B1|$\tan\theta = \frac43$`], R`$\sin\theta = 0.8$, $\tan\theta = \frac43$`,
  R`$\sin\theta = \sqrt{0.64} = 0.8$; $\tan\theta = \frac{0.8}{0.6}$.`),
Q('P10.3-6', 2, R`Show that $\tan\theta\cos\theta \equiv \sin\theta$. [[2]]`,
  [R`Replace $\tan\theta$.`, R`Cancel.`],
  [R`|M1|$\frac{\sin\theta}{\cos\theta} \times \cos\theta$`, R`|A1|$= \sin\theta$`], R`Shown`,
  R`$\frac{\sin\theta}{\cos\theta}\cos\theta = \sin\theta$ (for $\cos\theta \ne 0$).`),
Q('P10.3-7', 2, R`Simplify $(\sin\theta + \cos\theta)^2 - 2\sin\theta\cos\theta$. [[2]]`,
  [R`Expand the bracket.`, R`$\sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta$.`],
  [R`|M1|Expands`, R`|A1|$1$`], R`$1$`,
  R`The cross terms cancel, leaving $\sin^2\theta + \cos^2\theta = 1$.`),
Q('P10.3-8', 3, R`Given that $\sin\theta = \frac{5}{13}$ and $\theta$ is obtuse, find the exact values of $\cos\theta$ and $\tan\theta$. [[3]]`,
  [R`$\cos^2\theta = 1 - \frac{25}{169}$.`, R`Obtuse: $\cos\theta < 0$.`],
  [R`|M1|$\cos^2\theta = \frac{144}{169}$`, R`|A1|$\cos\theta = -\frac{12}{13}$`, R`|A1|$\tan\theta = -\frac{5}{12}$`], R`$\cos\theta = -\frac{12}{13}$, $\tan\theta = -\frac{5}{12}$`,
  R`$\tan\theta = \frac{5/13}{-12/13}$.`),
Q('P10.3-9', 3, R`Prove that $\dfrac{1 - \cos^2 x}{1 - \sin^2 x} \equiv \tan^2 x$. [[3]]`,
  [R`Numerator $= \sin^2 x$.`, R`Denominator $= \cos^2 x$.`],
  [R`|M1|$1 - \cos^2 x = \sin^2 x$`, R`|M1|$1 - \sin^2 x = \cos^2 x$`, R`|A1|$\frac{\sin^2 x}{\cos^2 x} = \tan^2 x$`], R`Shown`,
  R`LHS $= \frac{\sin^2 x}{\cos^2 x} = \left(\frac{\sin x}{\cos x}\right)^2 = \tan^2 x$.`),
Q('P10.3-10', 3, R`Prove that $\sin^4 x - \cos^4 x \equiv \sin^2 x - \cos^2 x$. [[3]]`,
  [R`Difference of two squares.`, R`$(\sin^2 x - \cos^2 x)(\sin^2 x + \cos^2 x)$.`],
  [R`|M1|Factorises as a difference of squares`, R`|M1|$\sin^2 x + \cos^2 x = 1$`, R`|A1|Concludes`], R`Shown`,
  R`LHS $= (\sin^2 x - \cos^2 x)(1) = $ RHS.`),
Q('P10.3-11', 3, R`Prove that $(\sin x + \cos x)^2 + (\sin x - \cos x)^2 \equiv 2$. [[3]]`,
  [R`Expand both brackets.`, R`The $2\sin x\cos x$ terms cancel.`],
  [R`|M1|Expands both`, R`|M1|Cross terms cancel`, R`|A1|$2(\sin^2 x + \cos^2 x) = 2$`], R`Shown`,
  R`$(\sin^2 x + 2\sin x\cos x + \cos^2 x) + (\sin^2 x - 2\sin x\cos x + \cos^2 x) = 2$.`),
Q('P10.3-12', 4, R`Prove that $\dfrac{1}{\cos x} - \cos x \equiv \sin x\tan x$. [[3]]`,
  [R`Common denominator $\cos x$.`, R`$1 - \cos^2 x = \sin^2 x$.`],
  [R`|M1|$\frac{1 - \cos^2 x}{\cos x}$`, R`|M1|$\frac{\sin^2 x}{\cos x}$`, R`|A1|$= \sin x \cdot \frac{\sin x}{\cos x} = \sin x\tan x$`], R`Shown`,
  R`Start from the left-hand side and combine into one fraction.`),
Q('P10.3-13', 4, R`Given that $\tan\theta = 2$ and $180° < \theta < 270°$, find the exact values of $\sin\theta$ and $\cos\theta$. [[4]]`,
  [R`Triangle with opposite $2$, adjacent $1$, hypotenuse $\sqrt5$.`, R`Third quadrant: both negative.`],
  [R`|M1|Hypotenuse $\sqrt5$`, R`|M1|Both negative in the third quadrant`, R`|A1|$\sin\theta = -\frac{2}{\sqrt5}$`, R`|A1|$\cos\theta = -\frac{1}{\sqrt5}$`], R`$\sin\theta = -\frac{2\sqrt5}{5}$, $\cos\theta = -\frac{\sqrt5}{5}$`,
  R`Check: $\frac{-2/\sqrt5}{-1/\sqrt5} = 2$ and $\frac45 + \frac15 = 1$.`),
Q('P10.3-14', 4, R`Prove that $\tan x + \dfrac{1}{\tan x} \equiv \dfrac{1}{\sin x\cos x}$. [[4]]`,
  [R`Write both in $\sin$ and $\cos$.`, R`Common denominator $\sin x\cos x$.`],
  [R`|M1|$\frac{\sin x}{\cos x} + \frac{\cos x}{\sin x}$`, R`|M1|$\frac{\sin^2 x + \cos^2 x}{\sin x\cos x}$`, R`|M1|Uses $\sin^2 x + \cos^2 x = 1$`, R`|A1|$= \frac{1}{\sin x\cos x}$`], R`Shown`,
  R`LHS $= \frac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \frac{1}{\sin x\cos x}$.`),
Q('P10.3-15', 5, R`**(a)** Show that $3\cos^2\theta + 5\sin\theta$ can be written as $3 + 5\sin\theta - 3\sin^2\theta$. [[1]]

**(b)** Given that $3\cos^2\theta + 5\sin\theta = 5$, find the possible values of $\sin\theta$. [[3]]

**(c)** Hence solve $3\cos^2\theta + 5\sin\theta = 5$ for $0° \le \theta < 360°$. [[3]]`,
  [R`$\cos^2\theta = 1 - \sin^2\theta$.`, R`(b) gives $3\sin^2\theta - 5\sin\theta + 2 = 0$.`],
  [R`(a)|B1|$3(1 - \sin^2\theta) + 5\sin\theta$`, R`(b)|M1|$3s^2 - 5s + 2 = 0$`, R`(b)|M1|$(3s - 2)(s - 1) = 0$`, R`(b)|A1|$\sin\theta = \frac23$ or $1$`, R`(c)|A1|$\theta = 90°$`, R`(c)|A1|$41.8°$`, R`(c)|A1|$138.2°$`],
  R`(b) $\frac23$ or $1$ (c) $41.8°$, $90°$, $138.2°$`,
  R`(b) $3 + 5s - 3s^2 = 5$, so $3s^2 - 5s + 2 = 0$.

(c) $\sin\theta = 1$: $90°$. $\sin\theta = \frac23$: $41.8°$ and $180° - 41.8° = 138.2°$.`)
]};

CONTENT['P10.4'] = {
notes: R`
### Solving $\sin x = k$, $\cos x = k$, $\tan x = k$
1. Use the inverse function on your calculator to get one solution (the **principal value**).
2. Use the graph's symmetry (or CAST) to find the others in the interval:
   - $\sin x = k$: $x$ and $180° - x$
   - $\cos x = k$: $x$ and $360° - x$ (or $-x$)
   - $\tan x = k$: $x$ and $x + 180°$
3. Add or subtract $360°$ (or $180°$ for $\tan$) to stay in the interval.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Solve $\sin x = 0.4$ for $0° \le x \le 360°$.
- $\sin^{-1} 0.4 = 23.6°$; second solution $180° - 23.6° = 156.4°$.

[[fig:P10.4-sin]]

### Worked example 2: a negative interval
Solve $\cos x = -0.3$ for $-180° \le x \le 180°$.
- $\cos^{-1}(-0.3) = 107.5°$. The cosine graph is symmetric about $x = 0$, so $x = \pm107.5°$.

[[fig:P10.4-cos]]

**The trap:** giving only $107.5°$, or using $360° - 107.5° = 252.5°$, which is outside the interval.

### Watch out
- Equations like $\sin x = 3\cos x$: divide by $\cos x$ to get $\tan x = 3$.
- Give angles to $1$ d.p. unless told otherwise.
`,
questions: [
Q('P10.4-1', 1, R`Solve $\sin x = \frac12$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\sin^{-1}\frac12 = 30°$.`, R`$180° - 30°$.`],
  [R`|B1|$30°$`, R`|B1|$150°$`], R`$30°$, $150°$`,
  R`$\sin$ is positive in quadrants 1 and 2.`),
Q('P10.4-2', 1, R`Solve $\cos x = \frac{\sqrt3}{2}$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\cos^{-1}\frac{\sqrt3}{2} = 30°$.`, R`$360° - 30°$.`],
  [R`|B1|$30°$`, R`|B1|$330°$`], R`$30°$, $330°$`,
  R`$\cos$ is positive in quadrants 1 and 4.`),
Q('P10.4-3', 1, R`Solve $\tan x = 1$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\tan^{-1} 1 = 45°$.`, R`Add $180°$.`],
  [R`|B1|$45°$`, R`|B1|$225°$`], R`$45°$, $225°$`,
  R`$\tan$ repeats every $180°$.`),
Q('P10.4-4', 2, R`Solve $\sin x = -0.6$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\sin^{-1}(-0.6) = -36.9°$, outside the interval.`, R`Use $180° + 36.9°$ and $360° - 36.9°$.`],
  [R`|B1|$216.9°$`, R`|B1|$323.1°$`], R`$216.9°$, $323.1°$`,
  R`$\sin$ is negative in quadrants 3 and 4; the related angle is $36.9°$.`),
Q('P10.4-5', 2, R`Solve $\cos x = -0.3$ for $-180° \le x \le 180°$. [[2]]`,
  [R`$\cos^{-1}(-0.3) = 107.5°$.`, R`$\cos(-x) = \cos x$.`],
  [R`|B1|$107.5°$`, R`|B1|$-107.5°$`], R`$\pm107.5°$`,
  R`The cosine graph is symmetric about the $y$-axis.`, { solFig: FIGS['P10.4-cos'] }),
Q('P10.4-6', 2, R`Solve $\tan x = -2$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\tan^{-1}(-2) = -63.4°$.`, R`Add $180°$ and $360°$.`],
  [R`|B1|$116.6°$`, R`|B1|$296.6°$`], R`$116.6°$, $296.6°$`,
  R`$-63.4° + 180° = 116.6°$ and $-63.4° + 360° = 296.6°$.`),
Q('P10.4-7', 2, R`Solve $2\sin x = \sqrt3$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\sin x = \frac{\sqrt3}{2}$.`, R`$60°$ and $120°$.`],
  [R`|B1|$60°$`, R`|B1|$120°$`], R`$60°$, $120°$`,
  R`$\sin^{-1}\frac{\sqrt3}{2} = 60°$; $180° - 60° = 120°$.`),
Q('P10.4-8', 3, R`Solve $5\cos x + 2 = 0$ for $0° \le x \le 360°$. [[3]]`,
  [R`$\cos x = -0.4$.`, R`$360° - $ the first answer.`],
  [R`|M1|$\cos x = -0.4$`, R`|A1|$113.6°$`, R`|A1|$246.4°$`], R`$113.6°$, $246.4°$`,
  R`$\cos^{-1}(-0.4) = 113.6°$; $360° - 113.6° = 246.4°$.`),
Q('P10.4-9', 3, R`Solve $\sqrt3\tan x + 1 = 0$ for $-180° \le x \le 180°$. [[3]]`,
  [R`$\tan x = -\frac{1}{\sqrt3}$.`, R`Principal value $-30°$; add $180°$.`],
  [R`|M1|$\tan x = -\frac{1}{\sqrt3}$`, R`|A1|$-30°$`, R`|A1|$150°$`], R`$-30°$, $150°$`,
  R`$-30° + 180° = 150°$; $-30° - 180°$ is out of range.`),
Q('P10.4-10', 3, R`Solve $\sin x = 3\cos x$ for $0° \le x \le 360°$. [[3]]`,
  [R`Divide by $\cos x$.`, R`$\tan x = 3$.`],
  [R`|M1|$\tan x = 3$`, R`|A1|$71.6°$`, R`|A1|$251.6°$`], R`$71.6°$, $251.6°$`,
  R`$\tan^{-1} 3 = 71.6°$; $+180° = 251.6°$.`),
Q('P10.4-11', 3, R`Solve $4\sin x = 5\cos x$ for $-180° \le x \le 180°$. [[3]]`,
  [R`$\tan x = \frac54$.`, R`Subtract $180°$ for the second answer.`],
  [R`|M1|$\tan x = 1.25$`, R`|A1|$51.3°$`, R`|A1|$-128.7°$`], R`$51.3°$, $-128.7°$`,
  R`$\tan^{-1} 1.25 = 51.3°$; $51.3° - 180° = -128.7°$.`),
Q('P10.4-12', 4, R`Solve $2\cos x = -1$ for $0° \le x \le 720°$. [[3]]`,
  [R`$\cos x = -\frac12$: $120°$, $240°$.`, R`Add $360°$ to each.`],
  [R`|M1|$\cos x = -\frac12$`, R`|A1|$120°$, $240°$`, R`|A1|$480°$, $600°$`], R`$120°$, $240°$, $480°$, $600°$`,
  R`Two solutions in each $360°$.`),
Q('P10.4-13', 4, R`Solve $\sin x = 0.2$ for $-360° \le x \le 360°$. [[3]]`,
  [R`$11.5°$ and $168.5°$.`, R`Subtract $360°$ from each.`],
  [R`|M1|$11.5°$, $168.5°$`, R`|A1|$-191.5°$`, R`|A1|$-348.5°$`], R`$-348.5°$, $-191.5°$, $11.5°$, $168.5°$`,
  R`$11.5° - 360° = -348.5°$ and $168.5° - 360° = -191.5°$.`),
Q('P10.4-14', 4, R`Solve $3\sin x = 2\cos x$ for $0° \le x \le 360°$, and explain why dividing by $\cos x$ doesn't lose any solutions. [[4]]`,
  [R`$\tan x = \frac23$.`, R`If $\cos x = 0$, what would $\sin x$ have to be?`],
  [R`|M1|$\tan x = \frac23$`, R`|A1|$33.7°$`, R`|A1|$213.7°$`, R`|B1|If $\cos x = 0$ then $\sin x = 0$ too, which is impossible`], R`$33.7°$, $213.7°$`,
  R`$\sin x$ and $\cos x$ are never both $0$, so no solution has $\cos x = 0$.`),
Q('P10.4-15', 5, R`**(a)** Sketch $y = \sin x$ and $y = 0.7$ for $0° \le x \le 360°$. [[2]]

**(b)** Solve $\sin x = 0.7$ for $0° \le x \le 360°$. [[2]]

**(c)** Hence, using the symmetry of the graph, solve $\sin x = -0.7$ for $0° \le x \le 360°$. [[2]]

**(d)** State the number of solutions of $\sin x = 0.7$ for $0° \le x \le 1800°$. [[2]]`,
  [R`(b): $44.4°$ and $180° - 44.4°$.`, R`(c): add $180°$ to each answer to (b).`],
  [R`(a)|B1|Sine curve`, R`(a)|B1|Line crosses it twice`, R`(b)|B1|$44.4°$`, R`(b)|B1|$135.6°$`, R`(c)|B1|$224.4°$`, R`(c)|B1|$315.6°$`, R`(d)|M1|Two per $360°$`, R`(d)|A1|$10$`],
  R`(b) $44.4°$, $135.6°$ (c) $224.4°$, $315.6°$ (d) $10$`,
  R`(c) $\sin(x + 180°) = -\sin x$: $44.4° + 180°$ and $135.6° + 180°$.

(d) $1800° = 5 \times 360°$, and there are two solutions in each.`, { solFig: FIGS['P10.4-15'] })
]};

CONTENT['P10.5'] = {
notes: R`
### Equations like $\sin 2x = k$ or $\cos(x + 30°) = k$
1. **Change the interval** to match the inside of the function.
2. Solve for the inside expression in that new interval.
3. Undo the inside to get $x$.

For $\sin 2x$ with $0° \le x \le 360°$, use $0° \le 2x \le 720°$: twice as many solutions.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Solve $\sin 2x = 0.5$ for $0° \le x \le 360°$.
1. $0° \le 2x \le 720°$.
2. $2x = 30°, 150°, 390°, 510°$.
3. $x = 15°, 75°, 195°, 255°$.

[[fig:P10.5-sin2x]]

### Worked example 2: shifting the interval
Solve $\cos(x - 40°) = 0.6$ for $0° \le x \le 360°$.
1. $-40° \le x - 40° \le 320°$.
2. $\cos^{-1} 0.6 = 53.1°$; the other is $360° - 53.1° = 306.9°$ (and $-53.1°$, which is below $-40°$).
3. $x = 93.1°$ or $346.9°$.

**The trap:** solving for $x - 40°$ in $0°$ to $360°$ and then adding $40°$: that can include answers outside the range and miss ones inside it.

### Watch out
- List all solutions for the inside first, then convert. Check the count: $\sin(nx)$ has $2n$ solutions per $360°$ of $x$ (when $|k| < 1$).
`,
questions: [
Q('P10.5-1', 1, R`Solve $\sin 2x = \frac12$ for $0° \le x \le 180°$. [[2]]`,
  [R`$0° \le 2x \le 360°$.`, R`$2x = 30°, 150°$.`],
  [R`|M1|$2x = 30°, 150°$`, R`|A1|$x = 15°, 75°$`], R`$15°$, $75°$`,
  R`Halve each value of $2x$.`),
Q('P10.5-2', 1, R`Solve $\cos 3x = 0$ for $0° \le x \le 180°$. [[2]]`,
  [R`$0° \le 3x \le 540°$.`, R`$3x = 90°, 270°, 450°$.`],
  [R`|M1|$3x = 90°, 270°, 450°$`, R`|A1|$x = 30°, 90°, 150°$`], R`$30°$, $90°$, $150°$`,
  R`$\cos$ is $0$ at odd multiples of $90°$.`),
Q('P10.5-3', 1, R`Solve $\tan\frac{x}{2} = 1$ for $0° \le x \le 360°$. [[2]]`,
  [R`$0° \le \frac{x}{2} \le 180°$.`, R`$\frac{x}{2} = 45°$.`],
  [R`|M1|$\frac{x}{2} = 45°$`, R`|A1|$x = 90°$`], R`$90°$`,
  R`$225°$ is outside $0°$ to $180°$, so there's only one solution.`),
Q('P10.5-4', 2, R`Solve $\sin 2x = 0.5$ for $0° \le x \le 360°$. [[3]]`,
  [R`$0° \le 2x \le 720°$.`, R`$2x = 30°, 150°, 390°, 510°$.`],
  [R`|M1|Changes the interval`, R`|A1|$2x = 30°, 150°, 390°, 510°$`, R`|A1|$x = 15°, 75°, 195°, 255°$`], R`$15°$, $75°$, $195°$, $255°$`,
  R`Four solutions, as $\sin 2x$ completes two cycles.`, { solFig: FIGS['P10.5-sin2x'] }),
Q('P10.5-5', 2, R`Solve $\cos(x + 30°) = 0.5$ for $0° \le x \le 360°$. [[3]]`,
  [R`$30° \le x + 30° \le 390°$.`, R`$x + 30° = 60°, 300°$.`],
  [R`|M1|New interval`, R`|A1|$x + 30° = 60°, 300°$`, R`|A1|$x = 30°, 270°$`], R`$30°$, $270°$`,
  R`$420°$ is beyond $390°$, so there are only two.`),
Q('P10.5-6', 2, R`Solve $\tan 2x = 1$ for $0° \le x \le 360°$. [[3]]`,
  [R`$0° \le 2x \le 720°$.`, R`$2x = 45°, 225°, 405°, 585°$.`],
  [R`|M1|New interval`, R`|A1|Four values of $2x$`, R`|A1|$x = 22.5°, 112.5°, 202.5°, 292.5°$`], R`$22.5°$, $112.5°$, $202.5°$, $292.5°$`,
  R`$\tan$ repeats every $180°$ in $2x$, i.e. every $90°$ in $x$.`),
Q('P10.5-7', 2, R`Solve $\sin(x - 20°) = -1$ for $0° \le x \le 360°$. [[2]]`,
  [R`$-20° \le x - 20° \le 340°$.`, R`$\sin\theta = -1$ at $270°$.`],
  [R`|M1|$x - 20° = 270°$`, R`|A1|$x = 290°$`], R`$290°$`,
  R`$-90°$ is outside the new interval, so only $270°$ works.`),
Q('P10.5-8', 3, R`Solve $\cos(x - 40°) = 0.6$ for $0° \le x \le 360°$. [[3]]`,
  [R`$-40° \le x - 40° \le 320°$.`, R`$53.1°$ and $306.9°$.`],
  [R`|M1|New interval`, R`|A1|$x - 40° = 53.1°, 306.9°$`, R`|A1|$x = 93.1°, 346.9°$`], R`$93.1°$, $346.9°$`,
  R`$-53.1°$ is below $-40°$, so it's excluded.`),
Q('P10.5-9', 3, R`Solve $2\sin 3x = \sqrt3$ for $0° \le x \le 180°$. [[4]]`,
  [R`$\sin 3x = \frac{\sqrt3}{2}$; $0° \le 3x \le 540°$.`, R`$3x = 60°, 120°, 420°, 480°$.`],
  [R`|M1|$\sin 3x = \frac{\sqrt3}{2}$`, R`|M1|New interval`, R`|A1|$3x = 60°, 120°, 420°, 480°$`, R`|A1|$x = 20°, 40°, 140°, 160°$`], R`$20°$, $40°$, $140°$, $160°$`,
  R`Divide each value of $3x$ by $3$.`),
Q('P10.5-10', 3, R`Solve $\tan(x + 45°) = -1$ for $0° \le x \le 360°$. [[3]]`,
  [R`$45° \le x + 45° \le 405°$.`, R`$x + 45° = 135°, 315°$.`],
  [R`|M1|New interval`, R`|A1|$135°$, $315°$`, R`|A1|$x = 90°, 270°$`], R`$90°$, $270°$`,
  R`At $x = 90°$, $\tan 135° = -1$; at $x = 270°$, $\tan 315° = -1$.`),
Q('P10.5-11', 3, R`Solve $\cos 2x = -0.8$ for $0° \le x \le 180°$. [[3]]`,
  [R`$0° \le 2x \le 360°$.`, R`$2x = 143.1°, 216.9°$.`],
  [R`|M1|New interval`, R`|A1|$2x = 143.1°, 216.9°$`, R`|A1|$x = 71.6°, 108.4°$`], R`$71.6°$, $108.4°$`,
  R`$\cos^{-1}(-0.8) = 143.13°$, and $360° - 143.13° = 216.87°$.`),
Q('P10.5-12', 4, R`Solve $\sin(2x + 30°) = 0.5$ for $0° \le x \le 360°$. [[4]]`,
  [R`$30° \le 2x + 30° \le 750°$.`, R`Values: $30°, 150°, 390°, 510°, 750°$.`],
  [R`|M1|New interval $30°$ to $750°$`, R`|A1|All five values of $2x + 30°$`, R`|M1|Subtract $30°$, halve`, R`|A1|$x = 0°, 60°, 180°, 240°, 360°$`], R`$0°$, $60°$, $180°$, $240°$, $360°$`,
  R`Both ends of the interval are solutions here, so check endpoints carefully.`),
Q('P10.5-13', 4, R`Solve $\cos\frac{x}{2} = -\frac12$ for $0° \le x \le 720°$. [[3]]`,
  [R`$0° \le \frac{x}{2} \le 360°$.`, R`$\frac{x}{2} = 120°, 240°$.`],
  [R`|M1|New interval`, R`|A1|$\frac{x}{2} = 120°, 240°$`, R`|A1|$x = 240°, 480°$`], R`$240°$, $480°$`,
  R`$\frac{x}{2} = 120°$ or $240°$, so doubling gives $x = 240°$ or $480°$.`),
Q('P10.5-14', 4, R`Solve $3\tan(2x - 10°) = \sqrt3$ for $0° \le x \le 360°$. [[4]]`,
  [R`$\tan(2x - 10°) = \frac{1}{\sqrt3}$; $-10° \le 2x - 10° \le 710°$.`, R`$2x - 10° = 30°, 210°, 390°, 570°$.`],
  [R`|M1|$\tan(2x - 10°) = \frac{\sqrt3}{3}$`, R`|M1|New interval`, R`|A1|$30°, 210°, 390°, 570°$`, R`|A1|$x = 20°, 110°, 200°, 290°$`], R`$20°$, $110°$, $200°$, $290°$`,
  R`Add $10°$ and halve each value.`),
Q('P10.5-15', 5, R`**(a)** Solve $\sin(2\theta - 30°) = \frac{\sqrt3}{2}$ for $0° \le \theta \le 360°$. [[4]]

**(b)** Find the smallest positive value of $\theta$ for which $\sin(2\theta - 30°) = -\frac{\sqrt3}{2}$. [[2]]

**(c)** State the period of $y = \sin(2\theta - 30°)$. [[1]]`,
  [R`$-30° \le 2\theta - 30° \le 690°$.`, R`For (b), $2\theta - 30° = 240°$ is the first value giving a positive $\theta$.`],
  [R`(a)|M1|New interval`, R`(a)|A1|$60°, 120°, 420°, 480°$`, R`(a)|M1|Add $30°$ and halve`, R`(a)|A1|$\theta = 45°, 75°, 225°, 255°$`, R`(b)|M1|$2\theta - 30° = 240°$ ($-60°$ gives $\theta < 0$)`, R`(b)|A1|$135°$`, R`(c)|B1|$180°$`],
  R`(a) $45°$, $75°$, $225°$, $255°$ (b) $135°$ (c) $180°$`,
  R`(b) $\sin\alpha = -\frac{\sqrt3}{2}$ for $\alpha = -60°, 240°, 300°, \ldots$ With $\alpha = 2\theta - 30°$: $-60°$ gives $\theta = -15°$; $240°$ gives $\theta = 135°$.

(c) $\frac{360°}{2}$.`)
]};

CONTENT['P10.6'] = {
notes: R`
### Using identities in equations
- If an equation has $\sin x$ and $\cos x$ **to the same power**, divide to get $\tan x$.
- If it mixes $\sin^2 x$ and $\cos x$ (or $\cos^2 x$ and $\sin x$), use $\sin^2 x + \cos^2 x = 1$ to get a **quadratic** in one function.
- Factorise; never divide by a function that could be zero.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Solve $2\sin^2 x - \sin x - 1 = 0$ for $0° \le x \le 360°$.
1. $(2\sin x + 1)(\sin x - 1) = 0$.
2. $\sin x = 1$: $x = 90°$. $\sin x = -\frac12$: $x = 210°, 330°$.

[[fig:P10.6-quad]]

### Worked example 2: don't divide by $\sin x$
Solve $\sin x = 2\sin x\cos x$ for $0° \le x \le 360°$.
1. $\sin x - 2\sin x\cos x = 0$, so $\sin x(1 - 2\cos x) = 0$.
2. $\sin x = 0$: $0°, 180°, 360°$. $\cos x = \frac12$: $60°, 300°$.

**The trap:** dividing both sides by $\sin x$ to get $\cos x = \frac12$. That loses the three solutions where $\sin x = 0$.

### Watch out
- Reject values like $\sin x = 2$: there's no solution for those.
`,
questions: [
Q('P10.6-1', 1, R`Solve $\sin x(2\cos x - 1) = 0$ for $0° \le x \le 360°$. [[3]]`,
  [R`Either $\sin x = 0$ or $\cos x = \frac12$.`, R`$\sin x = 0$ at $0°$, $180°$, $360°$.`],
  [R`|M1|Two factors`, R`|A1|$0°, 180°, 360°$`, R`|A1|$60°, 300°$`], R`$0°$, $60°$, $180°$, $300°$, $360°$`,
  R`$\cos x = \frac12$ gives $60°$ and $300°$.`),
Q('P10.6-2', 1, R`Solve $\tan^2 x = 1$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\tan x = \pm1$.`, R`Each gives two solutions.`],
  [R`|M1|$\tan x = \pm1$`, R`|A1|$45°, 135°, 225°, 315°$`], R`$45°$, $135°$, $225°$, $315°$`,
  R`$\tan x = 1$: $45°$, $225°$. $\tan x = -1$: $135°$, $315°$.`),
Q('P10.6-3', 1, R`Solve $4\sin^2 x = 1$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\sin x = \pm\frac12$.`, R`Remember both signs.`],
  [R`|M1|$\sin x = \pm\frac12$`, R`|A1|$30°, 150°, 210°, 330°$`], R`$30°$, $150°$, $210°$, $330°$`,
  R`$\sin x = \frac12$: $30°$, $150°$. $\sin x = -\frac12$: $210°$, $330°$.`),
Q('P10.6-4', 2, R`Solve $2\cos^2 x - \cos x - 1 = 0$ for $0° \le x \le 360°$. [[3]]`,
  [R`$(2\cos x + 1)(\cos x - 1) = 0$.`, R`$\cos x = 1$ or $-\frac12$.`],
  [R`|M1|Factorises`, R`|A1|$0°, 360°$`, R`|A1|$120°, 240°$`], R`$0°$, $120°$, $240°$, $360°$`,
  R`$\cos x = 1$ at $0°$ and $360°$; $\cos x = -\frac12$ at $120°$ and $240°$.`),
Q('P10.6-5', 2, R`Solve $\sin^2 x = 3\cos^2 x$ for $0° \le x \le 360°$. [[3]]`,
  [R`Divide by $\cos^2 x$: $\tan^2 x = 3$.`, R`$\tan x = \pm\sqrt3$.`],
  [R`|M1|$\tan^2 x = 3$`, R`|A1|$60°, 240°$`, R`|A1|$120°, 300°$`], R`$60°$, $120°$, $240°$, $300°$`,
  R`$\cos x = 0$ isn't a solution (it would need $\sin x = 0$ too), so dividing is safe.`),
Q('P10.6-6', 2, R`Solve $2\sin^2 x + 3\sin x - 2 = 0$ for $0° \le x \le 360°$. [[3]]`,
  [R`$(2\sin x - 1)(\sin x + 2) = 0$.`, R`$\sin x = -2$ is impossible.`],
  [R`|M1|Factorises`, R`|B1|Rejects $\sin x = -2$`, R`|A1|$30°, 150°$`], R`$30°$, $150°$`,
  R`$\sin x = \frac12$ only.`),
Q('P10.6-7', 2, R`Solve $\tan x = 2\sin x$ for $0° \le x \le 360°$. [[4]]`,
  [R`$\frac{\sin x}{\cos x} = 2\sin x$, so $\sin x = 2\sin x\cos x$.`, R`$\sin x(1 - 2\cos x) = 0$.`],
  [R`|M1|Multiplies by $\cos x$`, R`|M1|Factorises (doesn't divide by $\sin x$)`, R`|A1|$0°, 180°, 360°$`, R`|A1|$60°, 300°$`], R`$0°$, $60°$, $180°$, $300°$, $360°$`,
  R`$\sin x = 0$ or $\cos x = \frac12$.`),
Q('P10.6-8', 3, R`Solve $2\sin^2 x + \cos x - 1 = 0$ for $0° \le x \le 360°$. [[4]]`,
  [R`$\sin^2 x = 1 - \cos^2 x$.`, R`$2\cos^2 x - \cos x - 1 = 0$.`],
  [R`|M1|Uses $\sin^2 x = 1 - \cos^2 x$`, R`|M1|$(2\cos x + 1)(\cos x - 1) = 0$`, R`|A1|$0°, 360°$`, R`|A1|$120°, 240°$`], R`$0°$, $120°$, $240°$, $360°$`,
  R`$2 - 2\cos^2 x + \cos x - 1 = 0$ gives $2\cos^2 x - \cos x - 1 = 0$.`),
Q('P10.6-9', 3, R`Solve $6\cos^2 x + \sin x - 5 = 0$ for $0° \le x \le 360°$. [[4]]`,
  [R`$6(1 - \sin^2 x) + \sin x - 5 = 0$.`, R`$6\sin^2 x - \sin x - 1 = 0$.`],
  [R`|M1|Uses the identity`, R`|M1|$(3\sin x + 1)(2\sin x - 1) = 0$`, R`|A1|$30°, 150°$`, R`|A1|$199.5°, 340.5°$`], R`$30°$, $150°$, $199.5°$, $340.5°$`,
  R`$\sin x = \frac12$: $30°$, $150°$. $\sin x = -\frac13$: $180° + 19.5°$ and $360° - 19.5°$.`),
Q('P10.6-10', 3, R`Solve $3\sin x = 2\cos^2 x$ for $0° \le x \le 360°$. [[4]]`,
  [R`$3\sin x = 2(1 - \sin^2 x)$.`, R`$2\sin^2 x + 3\sin x - 2 = 0$.`],
  [R`|M1|Uses the identity`, R`|M1|$(2\sin x - 1)(\sin x + 2) = 0$`, R`|B1|Rejects $\sin x = -2$`, R`|A1|$30°, 150°$`], R`$30°$, $150°$`,
  R`Only $\sin x = \frac12$ is possible, giving $30°$ and $180° - 30° = 150°$.`),
Q('P10.6-11', 3, R`Solve $\sin x\tan x = 2$ for $0° \le x \le 360°$. [[4]]`,
  [R`$\frac{\sin^2 x}{\cos x} = 2$, so $1 - \cos^2 x = 2\cos x$.`, R`$\cos^2 x + 2\cos x - 1 = 0$.`],
  [R`|M1|Multiplies by $\cos x$ and uses the identity`, R`|M1|Formula: $\cos x = -1 \pm \sqrt2$`, R`|B1|Rejects $-1 - \sqrt2$`, R`|A1|$65.5°, 294.5°$`], R`$65.5°$, $294.5°$`,
  R`$\cos x = \sqrt2 - 1 = 0.4142$, so $x = 65.5°$ or $360° - 65.5° = 294.5°$.`),
Q('P10.6-12', 4, R`Solve $4\cos^2 x + 5\sin x = 3$ for $0° \le x \le 360°$. [[5]]`,
  [R`$4 - 4\sin^2 x + 5\sin x = 3$.`, R`$4\sin^2 x - 5\sin x - 1 = 0$: use the formula.`],
  [R`|M1|Uses the identity`, R`|A1|$4\sin^2 x - 5\sin x - 1 = 0$`, R`|M1|$\sin x = \frac{5 \pm \sqrt{41}}{8}$`, R`|B1|Rejects $1.425$`, R`|A1|$190.1°, 349.9°$`], R`$190.1°$, $349.9°$`,
  R`$\sin x = \frac{5 - \sqrt{41}}{8} = -0.1754$: related angle $10.1°$, so $180° + 10.1°$ and $360° - 10.1°$.`),
Q('P10.6-13', 4, R`Solve $\tan^2 2x = 3$ for $0° \le x \le 360°$. [[4]]`,
  [R`$\tan 2x = \pm\sqrt3$; $0° \le 2x \le 720°$.`, R`$2x = 60°, 120°, 240°, 300°, 420°, 480°, 600°, 660°$.`],
  [R`|M1|$\tan 2x = \pm\sqrt3$`, R`|M1|New interval`, R`|A1|Eight values of $2x$`, R`|A1|$x = 30°, 60°, 120°, 150°, 210°, 240°, 300°, 330°$`], R`$30°, 60°, 120°, 150°, 210°, 240°, 300°, 330°$`,
  R`Halve each value of $2x$.`),
Q('P10.6-14', 4, R`**(a)** Show that the equation $2\sin x\tan x = 3$ can be written as $2\cos^2 x + 3\cos x - 2 = 0$. [[3]]

**(b)** Hence solve $2\sin x\tan x = 3$ for $0° \le x \le 360°$. [[2]]`,
  [R`$\frac{2\sin^2 x}{\cos x} = 3$, so $2(1 - \cos^2 x) = 3\cos x$.`, R`$(2\cos x - 1)(\cos x + 2) = 0$.`],
  [R`(a)|M1|$\tan x = \frac{\sin x}{\cos x}$`, R`(a)|M1|Uses $\sin^2 x = 1 - \cos^2 x$`, R`(a)|A1|Rearranges to the given form`, R`(b)|M1|$\cos x = \frac12$ ($-2$ rejected)`, R`(b)|A1|$60°, 300°$`], R`(b) $60°$, $300°$`,
  R`(a) $2\sin^2 x = 3\cos x$, $2 - 2\cos^2 x = 3\cos x$.

(b) $\cos x = -2$ is impossible.`),
Q('P10.6-15', 5, R`**(a)** Show that $4\sin^2\theta + 8\cos\theta - 7 = 0$ can be written as $4\cos^2\theta - 8\cos\theta + 3 = 0$. [[2]]

**(b)** Hence solve $4\sin^2\theta + 8\cos\theta - 7 = 0$ for $0° \le \theta < 360°$. [[3]]

**(c)** Hence solve $4\sin^2 2\alpha + 8\cos 2\alpha - 7 = 0$ for $0° \le \alpha < 180°$. [[3]]`,
  [R`$(2\cos\theta - 1)(2\cos\theta - 3) = 0$.`, R`For (c), $\theta = 2\alpha$ with $0° \le 2\alpha < 360°$.`],
  [R`(a)|M1|$4(1 - \cos^2\theta) + 8\cos\theta - 7 = 0$`, R`(a)|A1|Rearranges`, R`(b)|M1|Factorises`, R`(b)|B1|Rejects $\cos\theta = \frac32$`, R`(b)|A1|$60°, 300°$`, R`(c)|M1|$2\alpha = 60°, 300°$`, R`(c)|A1|$\alpha = 30°$`, R`(c)|A1|$\alpha = 150°$`],
  R`(b) $60°$, $300°$ (c) $30°$, $150°$`,
  R`(a) $4 - 4\cos^2\theta + 8\cos\theta - 7 = 0$, then multiply by $-1$.

(b) $\cos\theta = \frac12$.

(c) Same equation with $\theta = 2\alpha$; $2\alpha$ runs from $0°$ to $360°$.`)
]};
