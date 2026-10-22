/* 7.5 Simplifying a cos x ± b sin x */
const DEG = Math.PI / 180;
FIGS['7.5-graph'] = Fig.graph({ label: 'Graph of y = 3 sin x + 4 cos x, which is 5 sin(x + 53.13 degrees), with the line y = 2',
  fns: [{ f: x => 3 * Math.sin(x * DEG) + 4 * Math.cos(x * DEG), label: 'y = 5 sin(x + 53.1°)', lx: 300, ly: 5.6 }],
  x0: 0, x1: 360, y0: -6, y1: 6, xticks: [[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']], yticks: [[5, '5'], [2, '2'], [-5, '−5']],
  hlines: [{ y: 2, label: 'y = 2' }], points: [{ x: 36.87, y: 5, label: 'max (36.9°, 5)', dx: 30 }, { x: 103.29, y: 2 }, { x: 330.45, y: 2 }] });

CONTENT['7.5'] = {
notes: R`
### Why bother?
An expression like $3\sin x + 4\cos x$ is awkward to solve or find a maximum of. Rewrite it as **one** trig function, $R\sin(x+\alpha)$, and it becomes easy.

### The four forms
> $$a\sin x \pm b\cos x = R\sin(x\pm\alpha) \qquad a\cos x \pm b\sin x = R\cos(x\mp\alpha)$$
> $$R = \sqrt{a^2+b^2}, \qquad \tan\alpha = \frac{b}{a}$$

Use the form the question asks for, and check the sign carefully.

### Method (show this in the exam)
For $3\sin x + 4\cos x = R\sin(x+\alpha)$:
1. Expand: $R\sin(x+\alpha) = R\sin x\cos\alpha + R\cos x\sin\alpha$
2. Compare coefficients: $R\cos\alpha = 3$ and $R\sin\alpha = 4$.
3. Square and add: $R^2 = 3^2 + 4^2$, so $R = 5$.
4. Divide: $\tan\alpha = \frac43$, so $\alpha = 53.13^\circ$.

### Max and min
Since $-1 \le \sin(x+\alpha) \le 1$:
- maximum of $R\sin(x+\alpha)$ is $R$, when $x + \alpha = 90^\circ$
- minimum is $-R$, when $x + \alpha = 270^\circ$

For $\dfrac{1}{k + R\sin(x+\alpha)}$, the **maximum** happens when the denominator is smallest.

### Solving $a\sin x + b\cos x = c$
Write it as $R\sin(x+\alpha) = c$. Then solve for $x + \alpha$ on the **shifted interval** $\alpha \le x+\alpha < 360^\circ + \alpha$, and subtract $\alpha$.

### As a transformation
$R\sin(x + \alpha)$ is the graph of $y = \sin x$ **translated $\alpha$ to the left** and then **stretched vertically by scale factor $R$**. So $3\sin x + 4\cos x$ has the shape of a sine wave with amplitude $5$:

[[fig:7.5-graph]]

Each crossing with a horizontal line $y = k$ is a solution of $3\sin x + 4\cos x = k$. If $|k| > R$ the line misses the curve completely, so there are **no solutions**.

::: booklet
**Not in the formula booklet:** $R = \sqrt{a^2 + b^2}$ and the method. You need the addition formulae (which are in the booklet) to expand $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$, then compare coefficients.
:::

### Worked example 2: choosing the right form
Write $3\cos x - 4\sin x$ in the form $R\cos(x + \alpha)$ with $0 < \alpha < 90^\circ$.
1. $R\cos(x + \alpha) = R\cos x\cos\alpha - R\sin x\sin\alpha$
2. Compare: $R\cos\alpha = 3$ and $R\sin\alpha = 4$ (the minus sign is already in the expansion).
3. $R = 5$ and $\tan\alpha = \frac43$, so $3\cos x - 4\sin x = 5\cos(x + 53.13^\circ)$.

**The trap:** using $R\cos(x - \alpha)$ here gives $R\sin\alpha = -4$, which makes $\alpha$ negative. Pick the form whose expansion has the **same signs** as the expression.

### Watch out
- $\tan\alpha = \frac ba$ is $\frac{\sin\text{ coefficient}}{\cos\text{ coefficient}}$ from your comparison. Don't guess it. Write out $R\cos\alpha = \ldots$ and $R\sin\alpha = \ldots$.
- Keep $\alpha$ to at least 2 d.p. (or 4 s.f. in radians) during working.
`,
questions: [
{ id:'7.5-1', stars:3,
solFig: FIGS['7.5-graph'],
q: R`**(a)** Express $3\sin x + 4\cos x$ in the form $R\sin(x+\alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Hence write down the maximum value of $3\sin x + 4\cos x$ and the value of $x$, $0^\circ \le x < 360^\circ$, at which it occurs. [[2]]

**(c)** Solve, for $0^\circ \le x < 360^\circ$, $3\sin x + 4\cos x = 2$. [[4]]`,
hints: [
  R`Compare coefficients: $R\cos\alpha = 3$, $R\sin\alpha = 4$.`,
  R`Maximum when $\sin(x+\alpha) = 1$, i.e. $x + \alpha = 90^\circ$.`,
  R`In (c), solve $\sin(x + 53.13^\circ) = 0.4$ on $53.13^\circ \le x + 53.13^\circ < 413.13^\circ$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 5$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac43$`],
  ['(a)', 'A1', R`$\alpha = 53.13^\circ$`],
  ['(b)', 'B1ft', R`Maximum $= 5$`],
  ['(b)', 'B1ft', R`$x = 36.87^\circ$`],
  ['(c)', 'M1', R`$\sin(x+53.13^\circ) = \frac25$`],
  ['(c)', 'M1', R`Finds $x + \alpha = 156.42^\circ$ or $383.58^\circ$, using the shifted interval`],
  ['(c)', 'A1', R`$x = 103.29^\circ$`],
  ['(c)', 'A1', R`$x = 330.45^\circ$`]
],
answer: R`(a) $5\sin(x + 53.13^\circ)$ (b) max $5$ at $x = 36.87^\circ$ (c) $x = 103.29^\circ,\ 330.45^\circ$`,
sol: R`
**(a)** $R\sin(x+\alpha) = R\sin x\cos\alpha + R\cos x\sin\alpha$. Comparing: $R\cos\alpha = 3$, $R\sin\alpha = 4$.
$R = \sqrt{3^2+4^2} = 5$ and $\tan\alpha = \frac43$, so $\alpha = 53.13^\circ$. So $3\sin x + 4\cos x = 5\sin(x + 53.13^\circ)$.

**(b)** The maximum of $\sin$ is $1$, so the maximum is $5$. It occurs when $x + 53.13^\circ = 90^\circ$, i.e. $x = 36.87^\circ$.

**(c)** $5\sin(x+53.13^\circ) = 2$, so $\sin(x + 53.13^\circ) = 0.4$.
The interval becomes $53.13^\circ \le x + 53.13^\circ < 413.13^\circ$.
$\sin^{-1}0.4 = 23.58^\circ$, which is outside that interval. The solutions inside it are $180^\circ - 23.58^\circ = 156.42^\circ$ and $360^\circ + 23.58^\circ = 383.58^\circ$.
Subtract $53.13^\circ$: $x = 103.29^\circ$ and $x = 330.45^\circ$.`
},
{ id:'7.5-2', stars:2,
q: R`**(a)** Express $\cos\theta - \sqrt3\sin\theta$ in the form $R\cos(\theta + \alpha)$, where $R>0$ and $0 < \alpha < \frac{\pi}{2}$. [[3]]

**(b)** Hence solve, for $0 \le \theta < 2\pi$, $\cos\theta - \sqrt3\sin\theta = 1$. [[3]]`,
hints: [
  R`$R\cos(\theta+\alpha) = R\cos\theta\cos\alpha - R\sin\theta\sin\alpha$. So $R\cos\alpha = 1$ and $R\sin\alpha = \sqrt3$.`,
  R`$\tan\alpha = \sqrt3$ gives an exact angle. In (b), shift the interval to $\frac\pi3 \le \theta + \frac\pi3 < \frac{7\pi}{3}$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 2$`],
  ['(a)', 'M1', R`$\tan\alpha = \sqrt3$`],
  ['(a)', 'A1', R`$\alpha = \frac\pi3$`],
  ['(b)', 'M1', R`$\cos\left(\theta+\frac\pi3\right) = \frac12$`],
  ['(b)', 'M1', R`$\theta + \frac\pi3 = \frac\pi3,\ \frac{5\pi}3$ (within the shifted interval)`],
  ['(b)', 'A1', R`$\theta = 0,\ \frac{4\pi}{3}$`]
],
answer: R`(a) $2\cos\left(\theta + \frac\pi3\right)$ (b) $\theta = 0,\ \frac{4\pi}3$`,
sol: R`
**(a)** $R\cos(\theta+\alpha) = R\cos\theta\cos\alpha - R\sin\theta\sin\alpha$. Comparing with $\cos\theta - \sqrt3\sin\theta$: $R\cos\alpha = 1$ and $R\sin\alpha = \sqrt3$.
$R = \sqrt{1+3} = 2$ and $\tan\alpha = \sqrt3$, so $\alpha = \frac\pi3$.

**(b)** $2\cos\left(\theta + \frac\pi3\right) = 1$, so $\cos\left(\theta+\frac\pi3\right) = \frac12$.
The interval is $\frac\pi3 \le \theta+\frac\pi3 < \frac{7\pi}3$. The solutions of $\cos = \frac12$ there are $\frac\pi3$ and $2\pi - \frac\pi3 = \frac{5\pi}3$. ($\frac{7\pi}{3}$ is excluded.)
Subtract $\frac\pi3$: $\theta = 0$ and $\theta = \frac{4\pi}3$.`
},
{ id:'7.5-3', stars:4,
q: R`**(a)** Express $12\cos x - 5\sin x$ in the form $R\cos(x+\alpha)$, where $R>0$ and $0<\alpha<90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Hence find the maximum and minimum values of
$$f(x) = \frac{20}{12\cos x - 5\sin x + 20}$$ [[3]]`,
hints: [
  R`$R\cos\alpha = 12$, $R\sin\alpha = 5$.`,
  R`$13\cos(x+\alpha)$ lies between $-13$ and $13$, so the denominator lies between $7$ and $33$.`,
  R`A fraction is biggest when its denominator is smallest.`
],
scheme: [
  ['(a)', 'B1', R`$R = 13$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac5{12}$`],
  ['(a)', 'A1', R`$\alpha = 22.62^\circ$`],
  ['(b)', 'M1', R`Denominator ranges from $20-13 = 7$ to $20+13 = 33$`],
  ['(b)', 'A1', R`Maximum $= \frac{20}{7}$`],
  ['(b)', 'A1', R`Minimum $= \frac{20}{33}$`]
],
answer: R`(a) $13\cos(x + 22.62^\circ)$ (b) max $\frac{20}{7}$, min $\frac{20}{33}$`,
sol: R`
**(a)** $R\cos(x+\alpha) = R\cos x\cos\alpha - R\sin x\sin\alpha$, so $R\cos\alpha = 12$ and $R\sin\alpha = 5$.
$R = \sqrt{144+25} = 13$ and $\tan\alpha = \frac{5}{12}$, so $\alpha = 22.62^\circ$.

**(b)** $f(x) = \dfrac{20}{13\cos(x + 22.62^\circ) + 20}$.
Since $-1 \le \cos(x+\alpha) \le 1$, the denominator runs from $7$ to $33$.
- Maximum of $f$: smallest denominator, $\frac{20}{7}$.
- Minimum of $f$: largest denominator, $\frac{20}{33}$.`
},
{ id:'7.5-4', stars:1,
q: R`Write down

**(a)** the maximum value of $5\sin(x + 40^\circ)$ [[1]]

**(b)** the minimum value of $3 - 2\cos(x - 20^\circ)$ [[1]]`,
hints: [
  R`$\sin$ and $\cos$ always lie between $-1$ and $1$.`,
  R`$3 - 2\cos(\ldots)$ is smallest when $\cos(\ldots)$ is largest.`
],
scheme: [
  ['(a)', 'B1', R`$5$`],
  ['(b)', 'B1', R`$1$`]
],
answer: R`(a) $5$ (b) $1$`,
sol: R`
**(a)** The largest value of $\sin$ is $1$, so the maximum is $5 \times 1 = 5$.

**(b)** $3 - 2\cos(x - 20^\circ)$ is smallest when $\cos(x - 20^\circ) = 1$: $3 - 2 = 1$.`
},
{ id:'7.5-5', stars:1,
q: R`Given that $\sqrt3\sin x + \cos x \equiv R\sin(x + \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$, find $R$ and $\alpha$. [[2]]`,
hints: [
  R`$R\cos\alpha = \sqrt3$ and $R\sin\alpha = 1$.`,
  R`$R = \sqrt{3 + 1}$ and $\tan\alpha = \frac{1}{\sqrt3}$.`
],
scheme: [
  ['', 'B1', R`$R = 2$`],
  ['', 'B1', R`$\alpha = 30^\circ$`]
],
answer: R`$R = 2$, $\alpha = 30^\circ$`,
sol: R`
1. Expanding, $R\cos\alpha = \sqrt3$ and $R\sin\alpha = 1$.
2. $R = \sqrt{(\sqrt3)^2 + 1^2} = 2$ and $\tan\alpha = \frac{1}{\sqrt3}$, so $\alpha = 30^\circ$.`
},
{ id:'7.5-6', stars:1,
q: R`Express $\sin x - \cos x$ in the form $R\sin(x - \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. [[3]]`,
hints: [
  R`$R\sin(x - \alpha) = R\sin x\cos\alpha - R\cos x\sin\alpha$.`,
  R`So $R\cos\alpha = 1$ and $R\sin\alpha = 1$.`
],
scheme: [
  ['', 'B1', R`$R = \sqrt2$`],
  ['', 'M1', R`$\tan\alpha = 1$`],
  ['', 'A1', R`$\sqrt2\sin(x - 45^\circ)$`]
],
answer: R`$\sqrt2\sin(x - 45^\circ)$`,
sol: R`
1. **Expand:** $R\sin(x - \alpha) = R\sin x\cos\alpha - R\cos x\sin\alpha$
2. **Compare with $\sin x - \cos x$:** $R\cos\alpha = 1$, $R\sin\alpha = 1$.
3. $R = \sqrt2$, $\tan\alpha = 1$, so $\alpha = 45^\circ$: $\sin x - \cos x = \sqrt2\sin(x - 45^\circ)$.`
},
{ id:'7.5-7', stars:2,
q: R`Express $2\cos x + 3\sin x$ in the form $R\cos(x - \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give the exact value of $R$ and $\alpha$ to 2 decimal places. [[3]]`,
hints: [
  R`$R\cos(x - \alpha) = R\cos x\cos\alpha + R\sin x\sin\alpha$.`,
  R`$R\cos\alpha = 2$, $R\sin\alpha = 3$.`
],
scheme: [
  ['', 'B1', R`$R = \sqrt{13}$`],
  ['', 'M1', R`$\tan\alpha = \frac32$`],
  ['', 'A1', R`$\alpha = 56.31^\circ$`]
],
answer: R`$\sqrt{13}\cos(x - 56.31^\circ)$`,
sol: R`
1. **Expand:** $R\cos(x - \alpha) = R\cos x\cos\alpha + R\sin x\sin\alpha$
2. **Compare:** $R\cos\alpha = 2$ and $R\sin\alpha = 3$.
3. $R = \sqrt{4 + 9} = \sqrt{13}$ and $\tan\alpha = \frac32$, so $\alpha = 56.31^\circ$.`
},
{ id:'7.5-8', stars:2,
q: R`Express $4\sin\theta - 3\cos\theta$ in the form $R\sin(\theta - \alpha)$, where $R > 0$ and $0 < \alpha < \dfrac{\pi}{2}$. Give $\alpha$ in radians to 3 significant figures. [[3]]`,
hints: [
  R`$R\cos\alpha = 4$ and $R\sin\alpha = 3$.`,
  R`Set your calculator to **radians** before finding $\tan^{-1}\frac34$.`
],
scheme: [
  ['', 'B1', R`$R = 5$`],
  ['', 'M1', R`$\tan\alpha = \frac34$`],
  ['', 'A1', R`$\alpha = 0.644$`]
],
answer: R`$5\sin(\theta - 0.644)$`,
sol: R`
1. **Expand:** $R\sin(\theta - \alpha) = R\sin\theta\cos\alpha - R\cos\theta\sin\alpha$, so $R\cos\alpha = 4$ and $R\sin\alpha = 3$.
2. $R = 5$ and $\tan\alpha = \frac34$, so $\alpha = 0.6435\ldots = 0.644$ radians.`
},
{ id:'7.5-9', stars:2,
q: R`**(a)** Show that the equation $2\sin x + \cos x = 3$ has no real solutions. [[4]]

**(b)** State the set of values of $k$ for which $2\sin x + \cos x = k$ has solutions. [[1]]`,
hints: [
  R`Write $2\sin x + \cos x$ as $R\sin(x + \alpha)$. You only need $R$.`,
  R`The largest value of $R\sin(x + \alpha)$ is $R$.`
],
scheme: [
  ['(a)', 'M1', R`Attempts $R$ form`],
  ['(a)', 'A1', R`$R = \sqrt5$`],
  ['(a)', 'M1', R`Compares the maximum $\sqrt5$ with $3$`],
  ['(a)', 'A1', R`$\sqrt5 \approx 2.24 < 3$, so no solutions (conclusion)`],
  ['(b)', 'B1ft', R`$-\sqrt5 \le k \le \sqrt5$`]
],
answer: R`(a) the maximum is $\sqrt5 < 3$ (b) $-\sqrt5 \le k \le \sqrt5$`,
sol: R`
**(a)** $2\sin x + \cos x = R\sin(x + \alpha)$ with $R = \sqrt{2^2 + 1^2} = \sqrt5$.
Since $-1 \le \sin(x + \alpha) \le 1$, the expression is never more than $\sqrt5 \approx 2.24$. It can't equal $3$, so there are no solutions.

**(b)** It takes every value from $-\sqrt5$ to $\sqrt5$, so $-\sqrt5 \le k \le \sqrt5$.`
},
{ id:'7.5-10', stars:3,
solFig: Fig.graph({ label: 'Graph of y = sin x and y = 2 sin(x + 60 degrees)', fns: [{ f: x => 2 * Math.sin((x + 60) * DEG), label: 'y = 2 sin(x + 60°)', lx: 250, ly: 2.5 }, { f: x => Math.sin(x * DEG), label: 'y = sin x', lx: 360, ly: -1.3 }],
  x0: 0, x1: 360, y0: -2.5, y1: 2.5, xticks: [[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']], yticks: [[2, '2'], [1, '1'], [-1, '−1'], [-2, '−2']], points: [{ x: 30, y: 2, label: '(30°, 2)', dx: 26 }] }),
q: R`**(a)** Express $\sin x + \sqrt3\cos x$ in the form $R\sin(x + \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. [[3]]

**(b)** Describe fully two transformations that map the graph of $y = \sin x$ onto the graph of $y = \sin x + \sqrt3\cos x$. [[2]]

**(c)** Write down the coordinates of the maximum point of $y = \sin x + \sqrt3\cos x$ for $0^\circ \le x < 360^\circ$. [[1]]`,
hints: [
  R`$R\cos\alpha = 1$, $R\sin\alpha = \sqrt3$.`,
  R`$y = \sin(x + \alpha)$ is a horizontal translation. Multiplying by $R$ is a vertical stretch.`,
  R`The maximum is where $x + \alpha = 90^\circ$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 2$`],
  ['(a)', 'M1', R`$\tan\alpha = \sqrt3$`],
  ['(a)', 'A1', R`$2\sin(x + 60^\circ)$`],
  ['(b)', 'B1', R`Translation by $\begin{pmatrix}-60\\0\end{pmatrix}$ ($60^\circ$ to the left)`],
  ['(b)', 'B1', R`Vertical stretch, scale factor $2$`],
  ['(c)', 'B1ft', R`$(30^\circ, 2)$`]
],
answer: R`(a) $2\sin(x + 60^\circ)$ (b) translate $60^\circ$ left; vertical stretch factor $2$ (c) $(30^\circ, 2)$`,
sol: R`
**(a)** $R\cos\alpha = 1$, $R\sin\alpha = \sqrt3$, so $R = 2$ and $\tan\alpha = \sqrt3$, giving $\alpha = 60^\circ$. So $\sin x + \sqrt3\cos x = 2\sin(x + 60^\circ)$.

**(b)**
- A **translation** by $\begin{pmatrix}-60\\0\end{pmatrix}$, i.e. $60^\circ$ to the left, gives $y = \sin(x + 60^\circ)$.
- A **vertical stretch** with scale factor $2$ then gives $y = 2\sin(x + 60^\circ)$.

**(c)** The maximum is $2$, where $x + 60^\circ = 90^\circ$, i.e. $x = 30^\circ$: the point $(30^\circ, 2)$.`
},
{ id:'7.5-11', stars:3,
solFig: Fig.graph({ label: 'Graph of y = 5 cos(x minus 53.13 degrees) with the lines y = 6, 5 and 2', fns: [{ f: x => 3 * Math.cos(x * DEG) + 4 * Math.sin(x * DEG), label: 'y = 5 cos(x − 53.1°)', lx: 230, ly: -5.7 }],
  x0: 0, x1: 360, y0: -6, y1: 7, xticks: [[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']], yticks: [[6, '6'], [5, '5'], [2, '2'], [-5, '−5']],
  hlines: [{ y: 6, label: 'k = 6' }, { y: 5, label: 'k = 5' }, { y: 2, label: 'k = 2' }] }),
q: R`**(a)** Express $3\cos x + 4\sin x$ in the form $R\cos(x - \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** State the number of solutions of $3\cos x + 4\sin x = k$ in the interval $0^\circ \le x < 360^\circ$ when

(i) $k = 5$ (ii) $k = 2$ (iii) $k = 6$ [[3]]`,
hints: [
  R`$R\cos\alpha = 3$, $R\sin\alpha = 4$.`,
  R`Sketch $y = 5\cos(x - \alpha)$ and imagine the horizontal line $y = k$. How many times does it cross?`,
  R`$k = 5$ touches the maximum once; $k = 6$ is above the maximum.`
],
scheme: [
  ['(a)', 'B1', R`$R = 5$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac43$`],
  ['(a)', 'A1', R`$\alpha = 53.13^\circ$`],
  ['(b)', 'B1', R`(i) $1$`],
  ['(b)', 'B1', R`(ii) $2$`],
  ['(b)', 'B1', R`(iii) $0$`]
],
answer: R`(a) $5\cos(x - 53.13^\circ)$ (b) (i) $1$ (ii) $2$ (iii) $0$`,
sol: R`
**(a)** $R\cos(x - \alpha) = R\cos x\cos\alpha + R\sin x\sin\alpha$, so $R\cos\alpha = 3$, $R\sin\alpha = 4$. $R = 5$ and $\alpha = \tan^{-1}\frac43 = 53.13^\circ$.

**(b)** The graph is a cosine wave of amplitude $5$, with its maximum at $x = 53.13^\circ$.
- (i) $k = 5$: the line just touches the maximum: **one** solution ($x = 53.13^\circ$).
- (ii) $k = 2$: the line cuts the wave twice in one cycle: **two** solutions.
- (iii) $k = 6$: the line is above the maximum: **no** solutions.`
},
{ id:'7.5-12', stars:3,
q: R`**(a)** Express $5\sin x - 12\cos x$ in the form $R\sin(x - \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Hence solve, for $0^\circ \le x < 360^\circ$, $5\sin x - 12\cos x = 6.5$. Give your answers to 1 decimal place. [[4]]`,
hints: [
  R`$R\cos\alpha = 5$, $R\sin\alpha = 12$.`,
  R`$13\sin(x - \alpha) = 6.5$, so $\sin(x - \alpha) = \frac12$.`,
  R`The interval for $x - 67.38^\circ$ is $-67.38^\circ \le x - 67.38^\circ < 292.62^\circ$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 13$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac{12}{5}$`],
  ['(a)', 'A1', R`$\alpha = 67.38^\circ$`],
  ['(b)', 'M1', R`$\sin(x - 67.38^\circ) = \frac12$`],
  ['(b)', 'M1', R`$x - 67.38^\circ = 30^\circ$ or $150^\circ$, using the shifted interval`],
  ['(b)', 'A1', R`$x = 97.4^\circ$`],
  ['(b)', 'A1', R`$x = 217.4^\circ$`]
],
answer: R`(a) $13\sin(x - 67.38^\circ)$ (b) $x = 97.4^\circ, 217.4^\circ$`,
sol: R`
**(a)** $R\sin(x - \alpha) = R\sin x\cos\alpha - R\cos x\sin\alpha$, so $R\cos\alpha = 5$ and $R\sin\alpha = 12$. $R = 13$ and $\alpha = \tan^{-1}\frac{12}{5} = 67.38^\circ$.

**(b)**
1. $13\sin(x - 67.38^\circ) = 6.5$, so $\sin(x - 67.38^\circ) = \frac12$.
2. **Interval:** $-67.38^\circ \le x - 67.38^\circ < 292.62^\circ$.
3. In that interval, $\sin = \frac12$ at $30^\circ$ and $150^\circ$. (The next, $390^\circ$, is too big, and $-210^\circ$ too small.)
4. **Add $67.38^\circ$:** $x = 97.4^\circ$ and $217.4^\circ$.`
},
{ id:'7.5-13', stars:4,
q: R`**(a)** Express $2\cos\theta - \sin\theta$ in the form $R\cos(\theta + \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Hence find the maximum value of $(2\cos\theta - \sin\theta)^2 + 3$, and the smallest positive value of $\theta$ at which it occurs. [[3]]

**(c)** Find the minimum value of $\dfrac{4}{1 + (2\cos\theta - \sin\theta)^2}$. [[2]]`,
hints: [
  R`$R\cos\alpha = 2$ and $R\sin\alpha = 1$.`,
  R`The square $R^2\cos^2(\theta + \alpha)$ is largest when $\cos(\theta + \alpha) = \pm1$. The smallest positive $\theta$ comes from $\theta + \alpha = 180^\circ$, since $\theta + \alpha = 0$ gives a negative $\theta$.`,
  R`The fraction is smallest when its denominator is largest.`
],
scheme: [
  ['(a)', 'B1', R`$R = \sqrt5$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac12$`],
  ['(a)', 'A1', R`$\alpha = 26.57^\circ$`],
  ['(b)', 'M1', R`Maximum of the square is $R^2 = 5$`],
  ['(b)', 'A1', R`Maximum value $8$`],
  ['(b)', 'A1', R`$\theta = 153.43^\circ$`],
  ['(c)', 'M1', R`Largest denominator $1 + 5 = 6$`],
  ['(c)', 'A1', R`Minimum $\frac23$`]
],
answer: R`(a) $\sqrt5\cos(\theta + 26.57^\circ)$ (b) $8$ at $\theta = 153.43^\circ$ (c) $\frac23$`,
sol: R`
**(a)** $R\cos(\theta + \alpha) = R\cos\theta\cos\alpha - R\sin\theta\sin\alpha$, so $R\cos\alpha = 2$ and $R\sin\alpha = 1$. $R = \sqrt5$ and $\alpha = \tan^{-1}\frac12 = 26.57^\circ$.

**(b)** $(2\cos\theta - \sin\theta)^2 = 5\cos^2(\theta + 26.57^\circ)$, which is at most $5$, when $\cos(\theta + 26.57^\circ) = \pm1$. So the maximum is $5 + 3 = 8$.
$\theta + 26.57^\circ = 0^\circ$ gives a negative $\theta$; the next is $\theta + 26.57^\circ = 180^\circ$, so $\theta = 153.43^\circ$.

**(c)** The denominator is at most $1 + 5 = 6$, so the minimum of the fraction is $\frac46 = \frac23$.`
},
{ id:'7.5-14', stars:4,
q: R`**(a)** Show that $3\sin2x + 4\cos^2x$ can be written as $2 + 3\sin2x + 2\cos2x$. [[2]]

**(b)** Express $3\sin2x + 2\cos2x$ in the form $R\sin(2x + \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$. Give $\alpha$ to 2 decimal places. [[3]]

**(c)** Hence state the maximum value of $3\sin2x + 4\cos^2x$, and find the smallest positive value of $x$ at which it occurs. [[3]]`,
hints: [
  R`$\cos^2x = \dfrac{1 + \cos2x}{2}$.`,
  R`$R\cos\alpha = 3$, $R\sin\alpha = 2$.`,
  R`The maximum is $2 + R$, when $2x + \alpha = 90^\circ$.`
],
scheme: [
  ['(a)', 'M1', R`Uses $4\cos^2x = 2(1 + \cos2x)$`],
  ['(a)', 'A1', R`$2 + 3\sin2x + 2\cos2x$ (cso)`],
  ['(b)', 'B1', R`$R = \sqrt{13}$`],
  ['(b)', 'M1', R`$\tan\alpha = \frac23$`],
  ['(b)', 'A1', R`$\alpha = 33.69^\circ$`],
  ['(c)', 'B1ft', R`Maximum $2 + \sqrt{13}$`],
  ['(c)', 'M1', R`$2x + 33.69^\circ = 90^\circ$`],
  ['(c)', 'A1', R`$x = 28.2^\circ$`]
],
answer: R`(b) $\sqrt{13}\sin(2x + 33.69^\circ)$ (c) $2 + \sqrt{13}$ at $x = 28.2^\circ$`,
sol: R`
**(a)** $4\cos^2x = 4 \cdot \dfrac{1 + \cos2x}{2} = 2 + 2\cos2x$, so $3\sin2x + 4\cos^2x = 2 + 3\sin2x + 2\cos2x$. $\blacksquare$

**(b)** $R\sin(2x + \alpha) = R\sin2x\cos\alpha + R\cos2x\sin\alpha$: $R\cos\alpha = 3$, $R\sin\alpha = 2$. $R = \sqrt{13}$ and $\alpha = \tan^{-1}\frac23 = 33.69^\circ$.

**(c)** $3\sin2x + 4\cos^2x = 2 + \sqrt{13}\sin(2x + 33.69^\circ)$. The maximum is $2 + \sqrt{13}$, when $2x + 33.69^\circ = 90^\circ$, so $x = \dfrac{56.31^\circ}{2} = 28.2^\circ$.`
},
{ id:'7.5-15', stars:5,
q: R`The equation $\sin x + p\cos x = 2$, where $p$ is a constant, has at least one real solution.

**(a)** Find the set of possible values of $p$. [[4]]

**(b)** For $p = \sqrt3$, solve the equation for $0^\circ \le x < 360^\circ$. [[3]]

**(c)** Explain, with reference to a graph, why there is only one solution in (b). [[1]]`,
hints: [
  R`Write $\sin x + p\cos x = R\sin(x + \alpha)$. What is $R$ in terms of $p$?`,
  R`There are solutions only if $R \ge 2$. Square both sides of $\sqrt{1 + p^2} \ge 2$.`,
  R`For $p = \sqrt3$, $R = 2$ exactly. What does that mean for the line $y = 2$?`
],
scheme: [
  ['(a)', 'M1', R`$R = \sqrt{1 + p^2}$`],
  ['(a)', 'M1', R`Requires $R \ge 2$`],
  ['(a)', 'A1', R`$p^2 \ge 3$`],
  ['(a)', 'A1', R`$p \le -\sqrt3$ or $p \ge \sqrt3$`],
  ['(b)', 'M1', R`$2\sin(x + 60^\circ) = 2$`],
  ['(b)', 'A1', R`$\sin(x + 60^\circ) = 1$`],
  ['(b)', 'A1', R`$x = 30^\circ$ only`],
  ['(c)', 'B1', R`$2$ is the maximum value, so the line $y = 2$ just touches the curve once per cycle`]
],
answer: R`(a) $p \le -\sqrt3$ or $p \ge \sqrt3$ (b) $x = 30^\circ$`,
sol: R`
**(a)**
1. $\sin x + p\cos x = R\sin(x + \alpha)$ with $R = \sqrt{1 + p^2}$.
2. $R\sin(x + \alpha)$ takes every value from $-R$ to $R$, so the equation has a solution exactly when $R \ge 2$.
3. $\sqrt{1 + p^2} \ge 2$ gives $1 + p^2 \ge 4$, so $p^2 \ge 3$.
4. So $p \le -\sqrt3$ or $p \ge \sqrt3$.

**(b)** $p = \sqrt3$: $R = 2$ and $\tan\alpha = \sqrt3$, so $\alpha = 60^\circ$. Then $2\sin(x + 60^\circ) = 2$, so $\sin(x + 60^\circ) = 1$ and $x + 60^\circ = 90^\circ$ (the next, $450^\circ$, is out of range). So $x = 30^\circ$.

**(c)** With $p = \sqrt3$, the maximum value of $\sin x + \sqrt3\cos x$ is exactly $2$. The line $y = 2$ only touches the top of the curve, once in each $360^\circ$ cycle.`
}
]
};
