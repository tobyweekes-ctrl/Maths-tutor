/* Pure Mathematics Year 1 · Chapter 13 Integration (sections 13.1 to 13.7) */
BOOK_CHAPTERS.push({ id:'P13', book:'Pure Mathematics Year 1', label:'Chapter 13', title:'Integration', sections:[
  { id:'P13.1', num:'13.1', title:'Integrating xⁿ' },
  { id:'P13.2', num:'13.2', title:'Indefinite integrals' },
  { id:'P13.3', num:'13.3', title:'Finding functions' },
  { id:'P13.4', num:'13.4', title:'Definite integrals' },
  { id:'P13.5', num:'13.5', title:'Areas under curves' },
  { id:'P13.6', num:'13.6', title:'Areas under the x-axis' },
  { id:'P13.7', num:'13.7', title:'Areas between curves and lines' }
]});
{
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  const G = (label, box, fns, regions, pts = [], more = {}) => Fig.graph(Object.assign({ label, x0: box[0], x1: box[1], y0: box[2], y1: box[3],
    fns: fns.map(([f, l, lx, ly, col]) => ({ f, label: l, lx, ly, col })), regions, points: pts.map(p => pt(...p)) }, more));
  const zero = () => 0;
  FIGS['P13.5-area'] = G('The region between y = 4x − x² and the x-axis, from x = 0 to x = 4, with area 32/3', [-0.8, 4.8, -1, 5],
    [[x => 4 * x - x * x, 'y = 4x − x²', 4.7, 1.2]], [{ from: 0, to: 4, lo: zero, hi: x => 4 * x - x * x }], [[0, 0, 'O', -10, 14], [4, 0, '4', 8, 14]]);
  FIGS['P13.5-under'] = G('The area under y = x² + 1 between x = 0 and x = 2, which is 14/3', [-0.5, 2.6, -0.5, 6],
    [[x => x * x + 1, 'y = x² + 1', 2.5, 5]], [{ from: 0, to: 2, lo: zero, hi: x => x * x + 1 }], [], { xticks: [[2, '2']] });
  FIGS['P13.6-split'] = G('y = x³ − x for −1 ≤ x ≤ 1: one region above the x-axis and an equal one below, so the integral is 0 but the total area is 1/2', [-1.4, 1.4, -0.6, 0.6],
    [[x => x ** 3 - x, 'y = x³ − x', 1.4, 0.5]], [{ from: -1, to: 0, lo: zero, hi: x => x ** 3 - x }, { from: 0, to: 1, lo: x => x ** 3 - x, hi: zero }],
    [[-1, 0, '−1', -10, 14], [1, 0, '1', 10, -12]], { texts: [{ x: -0.55, y: 0.12, label: '+¼' }, { x: 0.55, y: -0.12, label: '−¼' }] });
  FIGS['P13.7-between'] = G('The region between the line y = 2x (above) and the curve y = x² (below), from x = 0 to x = 2, with area 4/3', [-0.5, 2.6, -0.5, 5.5],
    [[x => x * x, 'y = x²', 2.55, 5.4], [x => 2 * x, 'y = 2x', 2.5, 3.6, 'var(--pen)']], [{ from: 0, to: 2, lo: x => x * x, hi: x => 2 * x }], [[2, 4, '(2, 4)', -26, -6]]);
  FIGS['P13.7-ex2'] = G('The region bounded by y = 4 − x², the line y = 3x and the y-axis, for 0 ≤ x ≤ 1, with area 13/6', [-0.5, 2.3, -0.5, 4.6],
    [[x => 4 - x * x, 'y = 4 − x²', 2.2, 0.6], [x => 3 * x, 'y = 3x', 1.5, 4.4, 'var(--pen)']], [{ from: 0, to: 1, lo: x => 3 * x, hi: x => 4 - x * x }], [[1, 3, '(1, 3)', 24, -2]]);
  FIGS['P13.5-15'] = G('y = x(x − 3)², touching the x-axis at 3, with a maximum at (1, 4); the shaded area from 0 to 3 is 27/4', [-0.5, 4, -1, 5],
    [[x => x * (x - 3) ** 2, 'y = x(x − 3)²', 3.9, 4.4]], [{ from: 0, to: 3, lo: zero, hi: x => x * (x - 3) ** 2 }], [[1, 4, '(1, 4)', 0, -12], [3, 0, '3', 6, 14]]);
  FIGS['P13.6-15'] = G('y = x²(x − 2): below the x-axis between 0 and 2, above it from 2 to 3', [-0.5, 3.3, -2, 9.5],
    [[x => x * x * (x - 2), 'y = x²(x − 2)', 3.2, 8.5]], [{ from: 0, to: 2, lo: x => x * x * (x - 2), hi: zero }, { from: 2, to: 3, lo: zero, hi: x => x * x * (x - 2) }], [[2, 0, '2', -10, -12], [3, 0, '3', 8, 14]]);
  FIGS['P13.7-12'] = G('The region bounded by y = x², the tangent y = 2x − 1 at (1, 1) and the x-axis', [-0.3, 1.5, -0.3, 1.8],
    [[x => x * x, 'y = x²', 1.45, 1.75], [x => 2 * x - 1, 'y = 2x − 1', 1.45, 1.3, 'var(--pen)']], [{ from: 0, to: 1, lo: x => Math.max(0, 2 * x - 1), hi: x => x * x }], [[1, 1, '(1, 1)', -22, -6], [0.5, 0, '½', 0, 14]]);
  FIGS['P13.7-15'] = G('The curve y = x² − 4x + 5 and the line y = x + 1 meeting at A(1, 2) and B(4, 5); the region between them has area 9/2', [-0.3, 5, -0.5, 6.5],
    [[x => x * x - 4 * x + 5, 'y = x² − 4x + 5', 4.9, 3.6], [x => x + 1, 'y = x + 1', 2.2, 4.4, 'var(--pen)']], [{ from: 1, to: 4, lo: x => x * x - 4 * x + 5, hi: x => x + 1 }], [[1, 2, 'A', -10, -8], [4, 5, 'B', -12, -6]]);
}

CONTENT['P13.1'] = {
notes: R`
### Integration reverses differentiation
$$\int x^n\,dx = \frac{x^{n + 1}}{n + 1} + c, \qquad n \ne -1$$
**Add one to the power, then divide by the new power.** The $+ c$ (constant of integration) is needed because any constant differentiates to $0$.

::: booklet
**Not in the formula booklet:** this rule.
:::

### Worked example 1
Find $\displaystyle\int x^4\,dx$.
- $\frac{x^5}{5} + c$. Check: differentiating gives $x^4$. ✓

### Worked example 2: fractional powers
Find $\displaystyle\int x^{-\frac12}\,dx$.
- The new power is $\frac12$, so $\frac{x^{1/2}}{1/2} + c = 2x^{\frac12} + c$.

**The trap:** dividing by the **old** power, or getting the new power wrong: $-\frac12 + 1 = +\frac12$. Dividing by $\frac12$ means multiplying by $2$.

### Watch out
- $\int x^{-1}\,dx$ can't be done with this rule (it would divide by $0$); you'll meet it in Year 2.
- Always include $+ c$ in an indefinite integral.
`,
questions: [
Q('P13.1-1', 1, R`Find $\displaystyle\int x^3\,dx$. [[1]]`,
  [R`Add one to the power.`, R`Divide by the new power, $4$.`],
  [R`|B1|$\frac{x^4}{4} + c$`], R`$\frac14 x^4 + c$`,
  R`$\frac{x^{3 + 1}}{3 + 1} + c = \frac{x^4}{4} + c$.`),
Q('P13.1-2', 1, R`Find $\displaystyle\int 5\,dx$. [[1]]`,
  [R`$5 = 5x^0$.`, R`$x^0 \to x^1$.`],
  [R`|B1|$5x + c$`], R`$5x + c$`,
  R`Differentiating $5x$ gives $5$, so $\int 5\,dx = 5x + c$.`),
Q('P13.1-3', 1, R`Find $\displaystyle\int x^{-2}\,dx$. [[1]]`,
  [R`New power $-1$.`, R`Divide by $-1$.`],
  [R`|B1|$-x^{-1} + c$`], R`$-\frac1x + c$`,
  R`$\frac{x^{-1}}{-1} + c = -\frac1x + c$.`),
Q('P13.1-4', 2, R`Find $\displaystyle\int x^{\frac12}\,dx$. [[2]]`,
  [R`New power $\frac32$.`, R`Dividing by $\frac32$ means multiplying by $\frac23$.`],
  [R`|M1|Power $\frac32$`, R`|A1|$\frac23 x^{\frac32} + c$`], R`$\frac23 x^{\frac32} + c$`,
  R`$\frac{x^{3/2}}{3/2} + c = \frac23 x^{\frac32} + c$.`),
Q('P13.1-5', 2, R`Find $\displaystyle\int 6x^2\,dx$. [[2]]`,
  [R`$6 \times \frac{x^3}{3}$.`, R`Simplify.`],
  [R`|M1|$\frac{6x^3}{3}$`, R`|A1|$2x^3 + c$`], R`$2x^3 + c$`,
  R`Constants multiply through: $6 \times \frac{x^3}{3} = 2x^3$.`),
Q('P13.1-6', 2, R`Find $\displaystyle\int x^{-\frac12}\,dx$. [[2]]`,
  [R`$-\frac12 + 1 = \frac12$.`, R`Divide by $\frac12$.`],
  [R`|M1|Power $\frac12$`, R`|A1|$2x^{\frac12} + c$`], R`$2\sqrt x + c$`,
  R`$\frac{x^{1/2}}{1/2} = 2x^{1/2}$.`),
Q('P13.1-7', 2, R`$\dfrac{dy}{dx} = 4x^3 - 2x$. Find $y$. [[2]]`,
  [R`Integrate each term.`, R`Don't forget $+ c$.`],
  [R`|M1|Integrates both terms`, R`|A1|$y = x^4 - x^2 + c$`], R`$y = x^4 - x^2 + c$`,
  R`$\frac{4x^4}{4} - \frac{2x^2}{2} + c$.`),
Q('P13.1-8', 3, R`Find $\displaystyle\int \frac{3}{x^2}\,dx$. [[2]]`,
  [R`$3x^{-2}$.`, R`$3 \times \frac{x^{-1}}{-1}$.`],
  [R`|M1|$3x^{-2}$`, R`|A1|$-3x^{-1} + c$`], R`$-\frac3x + c$`,
  R`$\int 3x^{-2}\,dx = -3x^{-1} + c$.`),
Q('P13.1-9', 3, R`Find $\displaystyle\int x^{\frac23}\,dx$. [[2]]`,
  [R`New power $\frac53$.`, R`Multiply by $\frac35$.`],
  [R`|M1|Power $\frac53$`, R`|A1|$\frac35 x^{\frac53} + c$`], R`$\frac35 x^{\frac53} + c$`,
  R`$\frac{x^{5/3}}{5/3} + c$.`),
Q('P13.1-10', 3, R`Find $\displaystyle\int 4x^{-3}\,dx$. [[2]]`,
  [R`New power $-2$.`, R`$\frac{4}{-2} = -2$.`],
  [R`|M1|Power $-2$`, R`|A1|$-2x^{-2} + c$`], R`$-\frac{2}{x^2} + c$`,
  R`$4 \times \frac{x^{-2}}{-2} + c$.`),
Q('P13.1-11', 3, R`$f'(x) = 6x^{\frac12}$. Find $f(x)$. [[2]]`,
  [R`New power $\frac32$.`, R`$6 \times \frac23 = 4$.`],
  [R`|M1|Power $\frac32$`, R`|A1|$f(x) = 4x^{\frac32} + c$`], R`$4x^{\frac32} + c$`,
  R`$6 \times \frac{x^{3/2}}{3/2} + c$.`),
Q('P13.1-12', 4, R`Find $\displaystyle\int 5x^{\frac32}\,dx$. [[2]]`,
  [R`New power $\frac52$.`, R`$5 \times \frac25 = 2$.`],
  [R`|M1|Power $\frac52$`, R`|A1|$2x^{\frac52} + c$`], R`$2x^{\frac52} + c$`,
  R`$5 \times \frac{x^{5/2}}{5/2} + c = 2x^{\frac52} + c$.`),
Q('P13.1-13', 4, R`Show that differentiating $\dfrac{x^{n + 1}}{n + 1}$ gives $x^n$, and explain why the integration rule fails when $n = -1$. [[2]]`,
  [R`Bring down the power $n + 1$.`, R`What is $n + 1$ when $n = -1$?`],
  [R`|B1|$\frac{(n + 1)x^n}{n + 1} = x^n$`, R`|B1|For $n = -1$ we'd divide by $0$`], R`Shown`,
  R`The rule needs $n + 1 \ne 0$.`),
Q('P13.1-14', 4, R`Find $\displaystyle\int x^{-\frac54}\,dx$. [[2]]`,
  [R`$-\frac54 + 1 = -\frac14$.`, R`Divide by $-\frac14$: multiply by $-4$.`],
  [R`|M1|Power $-\frac14$`, R`|A1|$-4x^{-\frac14} + c$`], R`$-4x^{-\frac14} + c$`,
  R`$\frac{x^{-1/4}}{-1/4} + c$.`),
Q('P13.1-15', 5, R`$f'(x) = 3x^2 - 4x^{-2}$.

**(a)** Find $f(x)$. [[3]]

**(b)** Given $f(1) = 7$, find the constant of integration. [[2]]

**(c)** Find $f(2)$. [[1]]

**(d)** Check your answer to (a) by differentiating. [[1]]`,
  [R`$\int 3x^2 = x^3$; $\int -4x^{-2} = 4x^{-1}$.`, R`Substitute $x = 1$.`],
  [R`(a)|M1|Integrates`, R`(a)|A1|$x^3$`, R`(a)|A1|$+ 4x^{-1} + c$`, R`(b)|M1|$1 + 4 + c = 7$`, R`(b)|A1|$c = 2$`, R`(c)|B1|$12$`, R`(d)|B1|$3x^2 - 4x^{-2}$`],
  R`(a) $x^3 + \frac4x + c$ (b) $c = 2$ (c) $12$`,
  R`(c) $8 + 2 + 2 = 12$.`)
]};

CONTENT['P13.2'] = {
notes: R`
### Several terms
Integrate term by term:
$$\int \left(f(x) + g(x)\right)dx = \int f(x)\,dx + \int g(x)\,dx$$
One $+ c$ at the end is enough.

### Simplify first
- Expand brackets.
- Split a fraction with a single-term denominator into separate powers.
- Write roots as powers.

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
Find $\displaystyle\int (3x^2 - 4x + 5)\,dx$.
- $x^3 - 2x^2 + 5x + c$.

### Worked example 2: split the fraction
Find $\displaystyle\int \frac{x^2 + 1}{x^2}\,dx$.
1. $\frac{x^2 + 1}{x^2} = 1 + x^{-2}$.
2. $\int (1 + x^{-2})\,dx = x - x^{-1} + c$.

**The trap:** integrating the top and the bottom separately. There's no "quotient rule" for integrals: rewrite as a sum of powers.

### Watch out
- Check by differentiating your answer.
`,
questions: [
Q('P13.2-1', 1, R`Find $\displaystyle\int (2x + 3)\,dx$. [[2]]`,
  [R`Term by term.`, R`$\int 2x = x^2$.`],
  [R`|M1|Integrates`, R`|A1|$x^2 + 3x + c$`], R`$x^2 + 3x + c$`,
  R`$\int 2x\,dx = x^2$ and $\int 3\,dx = 3x$.`),
Q('P13.2-2', 1, R`Find $\displaystyle\int (3x^2 - 4x + 5)\,dx$. [[2]]`,
  [R`$3x^2 \to x^3$.`, R`$-4x \to -2x^2$.`],
  [R`|M1|At least two terms correct`, R`|A1|$x^3 - 2x^2 + 5x + c$`], R`$x^3 - 2x^2 + 5x + c$`,
  R`Integrate each term separately.`),
Q('P13.2-3', 1, R`Find $\displaystyle\int (x^3 + x)\,dx$. [[2]]`,
  [R`$\frac{x^4}{4}$.`, R`$\frac{x^2}{2}$.`],
  [R`|M1|Integrates`, R`|A1|$\frac14 x^4 + \frac12 x^2 + c$`], R`$\frac14 x^4 + \frac12 x^2 + c$`,
  R`Add one to each power and divide by the new power.`),
Q('P13.2-4', 2, R`Find $\displaystyle\int (x + 2)^2\,dx$. [[3]]`,
  [R`Expand: $x^2 + 4x + 4$.`, R`Then integrate each term.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$\frac13 x^3 + 2x^2 + 4x + c$`], R`$\frac13 x^3 + 2x^2 + 4x + c$`,
  R`$\int (x^2 + 4x + 4)\,dx$.`),
Q('P13.2-5', 2, R`Find $\displaystyle\int \left(4\sqrt x - \frac{1}{x^2}\right)dx$. [[3]]`,
  [R`$4x^{\frac12} - x^{-2}$.`, R`$4 \times \frac23 = \frac83$.`],
  [R`|M1|Powers of $x$`, R`|A1|$\frac83 x^{\frac32}$`, R`|A1|$+ x^{-1} + c$`], R`$\frac83 x^{\frac32} + \frac1x + c$`,
  R`$\int -x^{-2}\,dx = x^{-1}$.`),
Q('P13.2-6', 2, R`Find $\displaystyle\int x(x - 3)\,dx$. [[2]]`,
  [R`Expand: $x^2 - 3x$.`, R`Integrate.`],
  [R`|M1|Expands`, R`|A1|$\frac13 x^3 - \frac32 x^2 + c$`], R`$\frac13 x^3 - \frac32 x^2 + c$`,
  R`$\int (x^2 - 3x)\,dx$.`),
Q('P13.2-7', 2, R`Find $\displaystyle\int \frac{x^2 + 1}{x^2}\,dx$. [[3]]`,
  [R`$1 + x^{-2}$.`, R`$\int x^{-2} = -x^{-1}$.`],
  [R`|M1|Splits the fraction`, R`|M1|$1 + x^{-2}$`, R`|A1|$x - x^{-1} + c$`], R`$x - \frac1x + c$`,
  R`Split the fraction, then integrate each power.`),
Q('P13.2-8', 3, R`Find $\displaystyle\int (2x + 1)(x - 4)\,dx$. [[3]]`,
  [R`Expand: $2x^2 - 7x - 4$.`, R`Integrate.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$\frac23 x^3 - \frac72 x^2 - 4x + c$`], R`$\frac23 x^3 - \frac72 x^2 - 4x + c$`,
  R`$\int (2x^2 - 7x - 4)\,dx$.`),
Q('P13.2-9', 3, R`Find $\displaystyle\int \frac{x + 3}{\sqrt x}\,dx$. [[3]]`,
  [R`$x^{\frac12} + 3x^{-\frac12}$.`, R`Integrate each.`],
  [R`|M1|Splits`, R`|A1|$\frac23 x^{\frac32}$`, R`|A1|$+ 6x^{\frac12} + c$`], R`$\frac23 x^{\frac32} + 6\sqrt x + c$`,
  R`$\frac{x}{x^{1/2}} = x^{\frac12}$ and $\frac{3}{x^{1/2}} = 3x^{-\frac12}$.`),
Q('P13.2-10', 3, R`Find $\displaystyle\int \left(3 - \frac{2}{x^3}\right)dx$. [[2]]`,
  [R`$3 - 2x^{-3}$.`, R`$-2 \times \frac{x^{-2}}{-2} = x^{-2}$.`],
  [R`|M1|$-2x^{-3}$`, R`|A1|$3x + x^{-2} + c$`], R`$3x + \frac{1}{x^2} + c$`,
  R`$\int -2x^{-3}\,dx = x^{-2}$.`),
Q('P13.2-11', 3, R`Find $\displaystyle\int (\sqrt x + 1)^2\,dx$. [[3]]`,
  [R`Expand: $x + 2\sqrt x + 1$.`, R`$\int 2x^{\frac12} = \frac43 x^{\frac32}$.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$\frac12 x^2 + \frac43 x^{\frac32} + x + c$`], R`$\frac12 x^2 + \frac43 x^{\frac32} + x + c$`,
  R`$(\sqrt x + 1)^2 = x + 2x^{\frac12} + 1$, which integrates to $\frac12 x^2 + \frac43 x^{\frac32} + x + c$.`),
Q('P13.2-12', 4, R`Find $\displaystyle\int \frac{x^2 - 4}{x + 2}\,dx$. [[3]]`,
  [R`Factorise the top.`, R`$\frac{(x - 2)(x + 2)}{x + 2} = x - 2$.`],
  [R`|M1|Factorises and cancels`, R`|M1|$x - 2$`, R`|A1|$\frac12 x^2 - 2x + c$`], R`$\frac12 x^2 - 2x + c$`,
  R`Simplify first: the fraction is just $x - 2$ (for $x \ne -2$).`),
Q('P13.2-13', 4, R`Find $\displaystyle\int \frac{2x^3 + 5x}{x}\,dx$. [[2]]`,
  [R`$2x^2 + 5$.`, R`Integrate.`],
  [R`|M1|$2x^2 + 5$`, R`|A1|$\frac23 x^3 + 5x + c$`], R`$\frac23 x^3 + 5x + c$`,
  R`Dividing each term by $x$ first.`),
Q('P13.2-14', 4, R`Find $\displaystyle\int (1 + x)^3\,dx$ by expanding first. [[3]]`,
  [R`$1 + 3x + 3x^2 + x^3$.`, R`Integrate each term.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$x + \frac32 x^2 + x^3 + \frac14 x^4 + c$`], R`$x + \frac32 x^2 + x^3 + \frac14 x^4 + c$`,
  R`Use the binomial expansion of $(1 + x)^3$.`),
Q('P13.2-15', 5, R`$f'(x) = \dfrac{(x^2 - 3)^2}{x^2}$, $x \ne 0$.

**(a)** Show that $f'(x) = x^2 - 6 + 9x^{-2}$. [[2]]

**(b)** Find $f(x)$. [[3]]

**(c)** Given that $y = f(x)$ passes through $(3, 0)$, find $f(x)$ fully. [[2]]`,
  [R`$(x^2 - 3)^2 = x^4 - 6x^2 + 9$.`, R`$\int 9x^{-2} = -9x^{-1}$.`],
  [R`(a)|M1|Expands the numerator`, R`(a)|A1|Divides each term by $x^2$`, R`(b)|M1|Integrates`, R`(b)|A1|$\frac13 x^3 - 6x$`, R`(b)|A1|$- 9x^{-1} + c$`, R`(c)|M1|$9 - 18 - 3 + c = 0$`, R`(c)|A1|$c = 12$`],
  R`(b) $\frac13 x^3 - 6x - \frac9x + c$ (c) $\frac13 x^3 - 6x - \frac9x + 12$`,
  R`(c) $f(3) = 9 - 18 - 3 + c = 0$, so $c = 12$.`)
]};

CONTENT['P13.3'] = {
notes: R`
### Using a known point to find $c$
If you know $f'(x)$ and one point on the curve:
1. Integrate to get $f(x)$ with $+ c$.
2. Substitute the point to find $c$.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
$\frac{dy}{dx} = 6x^2 - 2$ and the curve passes through $(1, 5)$. Find $y$.
1. $y = 2x^3 - 2x + c$.
2. $5 = 2 - 2 + c$, so $c = 5$: $y = 2x^3 - 2x + 5$.

### Worked example 2: displacement from velocity
A particle has velocity $v = 3t^2 - 4t$ m s⁻¹, and $s = 2$ m when $t = 0$. Find $s$ when $t = 3$.
1. $s = t^3 - 2t^2 + c$, and $s(0) = c = 2$.
2. $s(3) = 27 - 18 + 2 = 11$ m.

**The trap:** forgetting $+ c$, or substituting the point into $\frac{dy}{dx}$ instead of $y$.

### Watch out
- Different values of $c$ give vertical translations of the same curve: the point picks out one of them.
`,
questions: [
Q('P13.3-1', 1, R`$\dfrac{dy}{dx} = 2x$ and the curve passes through $(0, 3)$. Find $y$ in terms of $x$. [[2]]`,
  [R`$y = x^2 + c$.`, R`Substitute $(0, 3)$.`],
  [R`|M1|$x^2 + c$`, R`|A1|$y = x^2 + 3$`], R`$y = x^2 + 3$`,
  R`At $x = 0$: $3 = 0 + c$.`),
Q('P13.3-2', 1, R`$f'(x) = 4$ and $f(1) = 7$. Find $f(x)$. [[2]]`,
  [R`$f(x) = 4x + c$.`, R`$4 + c = 7$.`],
  [R`|M1|$4x + c$`, R`|A1|$f(x) = 4x + 3$`], R`$4x + 3$`,
  R`$f(x) = 4x + c$ and $f(1) = 4 + c = 7$, so $c = 3$: $f(x) = 4x + 3$.`),
Q('P13.3-3', 1, R`$\dfrac{dy}{dx} = 3x^2$ and the curve passes through $(2, 10)$. Find $y$. [[2]]`,
  [R`$y = x^3 + c$.`, R`$8 + c = 10$.`],
  [R`|M1|$x^3 + c$`, R`|A1|$y = x^3 + 2$`], R`$y = x^3 + 2$`,
  R`$y = x^3 + c$, and at $(2, 10)$: $8 + c = 10$, so $c = 2$ and $y = x^3 + 2$.`),
Q('P13.3-4', 2, R`$\dfrac{dy}{dx} = 6x^2 - 2$ and the curve passes through $(1, 5)$. Find $y$. [[3]]`,
  [R`$y = 2x^3 - 2x + c$.`, R`$5 = 2 - 2 + c$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes $(1, 5)$`, R`|A1|$y = 2x^3 - 2x + 5$`], R`$y = 2x^3 - 2x + 5$`,
  R`$y = 2x^3 - 2x + c$; at $(1, 5)$: $5 = 2 - 2 + c$, so $c = 5$ and $y = 2x^3 - 2x + 5$.`),
Q('P13.3-5', 2, R`$f'(x) = 2x - 5$ and $f(2) = 0$. Find $f(x)$ and factorise it. [[3]]`,
  [R`$f(x) = x^2 - 5x + c$.`, R`$4 - 10 + c = 0$.`],
  [R`|M1|$x^2 - 5x + c$`, R`|A1|$c = 6$`, R`|A1|$(x - 2)(x - 3)$`], R`$x^2 - 5x + 6 = (x - 2)(x - 3)$`,
  R`$c = 6$, giving $x^2 - 5x + 6$.`),
Q('P13.3-6', 2, R`$\dfrac{dy}{dx} = \dfrac{1}{x^2}$ and the curve passes through $(1, 4)$. Find $y$. [[3]]`,
  [R`$y = -x^{-1} + c$.`, R`$-1 + c = 4$.`],
  [R`|M1|$-\frac1x + c$`, R`|M1|Substitutes`, R`|A1|$y = 5 - \frac1x$`], R`$y = 5 - \frac1x$`,
  R`$y = -x^{-1} + c$; at $(1, 4)$: $-1 + c = 4$, so $c = 5$ and $y = 5 - \frac1x$.`),
Q('P13.3-7', 2, R`$f'(x) = 3\sqrt x$ and $f(4) = 20$. Find $f(x)$. [[3]]`,
  [R`$f(x) = 2x^{\frac32} + c$.`, R`$4^{\frac32} = 8$.`],
  [R`|M1|$2x^{\frac32} + c$`, R`|M1|$16 + c = 20$`, R`|A1|$f(x) = 2x^{\frac32} + 4$`], R`$2x^{\frac32} + 4$`,
  R`$3 \times \frac23 = 2$; $c = 4$.`),
Q('P13.3-8', 3, R`A curve has gradient $4x - 3$ and passes through $(2, 1)$. Find its equation. [[3]]`,
  [R`$y = 2x^2 - 3x + c$.`, R`$8 - 6 + c = 1$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$y = 2x^2 - 3x - 1$`], R`$y = 2x^2 - 3x - 1$`,
  R`$y = 2x^2 - 3x + c$; at $(2, 1)$: $8 - 6 + c = 1$, so $c = -1$ and $y = 2x^2 - 3x - 1$.`),
Q('P13.3-9', 3, R`$\dfrac{dy}{dx} = (x + 1)(x - 3)$ and the curve passes through $(0, 2)$. Find $y$. [[3]]`,
  [R`Expand: $x^2 - 2x - 3$.`, R`$y = \frac13 x^3 - x^2 - 3x + c$.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$y = \frac13 x^3 - x^2 - 3x + 2$`], R`$y = \frac13 x^3 - x^2 - 3x + 2$`,
  R`At $x = 0$, $y = c = 2$.`),
Q('P13.3-10', 3, R`$f'(x) = x - \dfrac{4}{x^2}$ and $f(2) = 5$. Find $f(x)$. [[3]]`,
  [R`$f(x) = \frac12 x^2 + 4x^{-1} + c$.`, R`$2 + 2 + c = 5$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$f(x) = \frac12 x^2 + \frac4x + 1$`], R`$\frac12 x^2 + \frac4x + 1$`,
  R`$f(x) = \frac12 x^2 + 4x^{-1} + c$; $f(2) = 2 + 2 + c = 5$, so $c = 1$.`),
Q('P13.3-11', 3, R`$\dfrac{dy}{dx} = kx^2$, where $k$ is a constant. The curve passes through $(0, 1)$ and $(3, 19)$. Find $k$ and the equation of the curve. [[3]]`,
  [R`$y = \frac{k}{3}x^3 + c$.`, R`$(0, 1)$ gives $c$; $(3, 19)$ gives $k$.`],
  [R`|M1|$\frac{k}{3}x^3 + c$`, R`|A1|$c = 1$`, R`|A1|$k = 2$; $y = \frac23 x^3 + 1$`], R`$k = 2$; $y = \frac23 x^3 + 1$`,
  R`$y = \frac{k}{3}x^3 + c$. At $(0, 1)$, $c = 1$. At $(3, 19)$: $9k + 1 = 19$, so $k = 2$ and $y = \frac23 x^3 + 1$.`),
Q('P13.3-12', 4, R`A curve has $\dfrac{dy}{dx} = 3x^2 - 6x$, and its minimum point lies on the $x$-axis. Find the equation of the curve. [[4]]`,
  [R`Stationary points at $x = 0$ and $x = 2$; the minimum is at $x = 2$.`, R`$y = x^3 - 3x^2 + c$ and $y(2) = 0$.`],
  [R`|M1|$y = x^3 - 3x^2 + c$`, R`|M1|Minimum at $x = 2$`, R`|M1|$8 - 12 + c = 0$`, R`|A1|$y = x^3 - 3x^2 + 4$`], R`$y = x^3 - 3x^2 + 4$`,
  R`$\frac{d^2y}{dx^2} = 6x - 6 = 6 > 0$ at $x = 2$, so that's the minimum; $c = 4$.`),
Q('P13.3-13', 4, R`$f''(x) = 6x$, $f'(1) = 5$ and $f(1) = 2$. Find $f(x)$. [[4]]`,
  [R`Integrate twice; each time use a condition.`, R`$f'(x) = 3x^2 + 2$.`],
  [R`|M1|$f'(x) = 3x^2 + a$`, R`|A1|$a = 2$`, R`|M1|$f(x) = x^3 + 2x + b$`, R`|A1|$f(x) = x^3 + 2x - 1$`], R`$x^3 + 2x - 1$`,
  R`$3 + a = 5$; then $1 + 2 + b = 2$, $b = -1$.`),
Q('P13.3-14', 4, R`A particle has velocity $v = 3t^2 - 4t$ m s⁻¹. When $t = 0$, its displacement is $s = 2$ m. Find $s$ when $t = 3$. [[3]]`,
  [R`$s = t^3 - 2t^2 + c$.`, R`$c = 2$.`],
  [R`|M1|Integrates`, R`|A1|$s = t^3 - 2t^2 + 2$`, R`|A1|$11$ m`], R`$11$ m`,
  R`$s = \int (3t^2 - 4t)\,dt = t^3 - 2t^2 + c$, and $s(0) = 2$ gives $c = 2$. Then $s(3) = 27 - 18 + 2 = 11$ m.`),
Q('P13.3-15', 5, R`A curve has $\dfrac{dy}{dx} = 2x - \dfrac{16}{x^2}$, $x > 0$, and passes through $(1, 10)$.

**(a)** Find the equation of the curve. [[3]]

**(b)** Find the coordinates of the stationary point. [[3]]

**(c)** Determine its nature. [[2]]`,
  [R`$y = x^2 + 16x^{-1} + c$.`, R`$2x = \frac{16}{x^2}$ gives $x^3 = 8$.`],
  [R`(a)|M1|Integrates`, R`(a)|M1|$1 + 16 + c = 10$`, R`(a)|A1|$y = x^2 + \frac{16}{x} - 7$`, R`(b)|M1|$2x - \frac{16}{x^2} = 0$`, R`(b)|A1|$x = 2$`, R`(b)|A1|$(2, 5)$`, R`(c)|M1|$\frac{d^2y}{dx^2} = 2 + \frac{32}{x^3}$`, R`(c)|A1|$6 > 0$: minimum`],
  R`(a) $y = x^2 + \frac{16}{x} - 7$ (b) $(2, 5)$ (c) minimum`,
  R`(b) $y = 4 + 8 - 7 = 5$.`)
]};

CONTENT['P13.4'] = {
notes: R`
### Definite integrals
$$\int_a^b f'(x)\,dx = \big[f(x)\big]_a^b = f(b) - f(a)$$
Integrate, then substitute the **upper** limit minus the **lower** limit. The $c$ cancels, so leave it out.

::: booklet
**Not in the formula booklet:** this notation.
:::

### Worked example 1
Evaluate $\displaystyle\int_1^3 (2x + 1)\,dx$.
$$\big[x^2 + x\big]_1^3 = (9 + 3) - (1 + 1) = 10$$

### Worked example 2: both limits matter
Evaluate $\displaystyle\int_1^4 \sqrt x\,dx$.
$$\left[\tfrac23 x^{\frac32}\right]_1^4 = \tfrac23(8) - \tfrac23(1) = \tfrac{14}{3}$$

**The trap:** forgetting to subtract the value at the lower limit (it isn't always $0$), or subtracting the wrong way round.

### Watch out
- Use brackets when substituting negative limits: $(-1)^3 = -1$.
`,
questions: [
Q('P13.4-1', 1, R`Evaluate $\displaystyle\int_0^2 x^2\,dx$. [[2]]`,
  [R`$\left[\frac{x^3}{3}\right]_0^2$.`, R`$\frac83 - 0$.`],
  [R`|M1|$\left[\frac{x^3}{3}\right]$`, R`|A1|$\frac83$`], R`$\frac83$`,
  R`$\frac{8}{3} - 0 = \frac83$.`),
Q('P13.4-2', 1, R`Evaluate $\displaystyle\int_1^3 (2x + 1)\,dx$. [[2]]`,
  [R`$\big[x^2 + x\big]_1^3$.`, R`$12 - 2$.`],
  [R`|M1|$\big[x^2 + x\big]$`, R`|A1|$10$`], R`$10$`,
  R`$(9 + 3) - (1 + 1) = 10$.`),
Q('P13.4-3', 1, R`Evaluate $\displaystyle\int_0^1 (3x^2 + 1)\,dx$. [[2]]`,
  [R`$\big[x^3 + x\big]_0^1$.`, R`$2 - 0$.`],
  [R`|M1|$\big[x^3 + x\big]$`, R`|A1|$2$`], R`$2$`,
  R`$\int_0^1 (3x^2 + 1)\,dx = \big[x^3 + x\big]_0^1 = (1 + 1) - 0 = 2$.`),
Q('P13.4-4', 2, R`Evaluate $\displaystyle\int_1^4 \sqrt x\,dx$. [[3]]`,
  [R`$\left[\frac23 x^{\frac32}\right]_1^4$.`, R`$4^{\frac32} = 8$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes both limits`, R`|A1|$\frac{14}{3}$`], R`$\frac{14}{3}$`,
  R`$\frac{16}{3} - \frac23 = \frac{14}{3}$.`),
Q('P13.4-5', 2, R`Evaluate $\displaystyle\int_1^2 \frac{1}{x^2}\,dx$. [[3]]`,
  [R`$\left[-\frac1x\right]_1^2$.`, R`$-\frac12 - (-1)$.`],
  [R`|M1|$\left[-x^{-1}\right]$`, R`|M1|Substitutes`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`$-\frac12 + 1 = \frac12$.`),
Q('P13.4-6', 2, R`Evaluate $\displaystyle\int_{-1}^{2} (x^3 - x)\,dx$. [[3]]`,
  [R`$\left[\frac{x^4}{4} - \frac{x^2}{2}\right]$.`, R`At $-1$: $\frac14 - \frac12 = -\frac14$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes both limits`, R`|A1|$\frac94$`], R`$\frac94$`,
  R`$(4 - 2) - \left(-\frac14\right) = \frac94$.`),
Q('P13.4-7', 2, R`Evaluate $\displaystyle\int_0^3 (x - 1)(x - 3)\,dx$. [[3]]`,
  [R`Expand: $x^2 - 4x + 3$.`, R`$\left[\frac{x^3}{3} - 2x^2 + 3x\right]_0^3$.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|A1|$0$`], R`$0$`,
  R`$9 - 18 + 9 = 0$. (Positive and negative parts cancel; see 13.6.)`),
Q('P13.4-8', 3, R`Evaluate $\displaystyle\int_1^9 \left(\sqrt x - \frac{1}{\sqrt x}\right)dx$. [[3]]`,
  [R`$\left[\frac23 x^{\frac32} - 2x^{\frac12}\right]_1^9$.`, R`$9^{\frac32} = 27$.`],
  [R`|M1|Integrates`, R`|M1|$(18 - 6) - \left(\frac23 - 2\right)$`, R`|A1|$\frac{40}{3}$`], R`$\frac{40}{3}$`,
  R`$12 + \frac43 = \frac{40}{3}$.`),
Q('P13.4-9', 3, R`Given that $\displaystyle\int_0^k 2x\,dx = 9$ and $k > 0$, find $k$. [[3]]`,
  [R`$\big[x^2\big]_0^k = k^2$.`, R`$k^2 = 9$.`],
  [R`|M1|$k^2$`, R`|M1|$k^2 = 9$`, R`|A1|$k = 3$`], R`$k = 3$`,
  R`Reject $k = -3$ because $k > 0$.`),
Q('P13.4-10', 3, R`Evaluate $\displaystyle\int_1^2 \frac{x^2 + 1}{x^2}\,dx$. [[3]]`,
  [R`$1 + x^{-2}$.`, R`$\left[x - \frac1x\right]_1^2$.`],
  [R`|M1|Splits`, R`|M1|Integrates`, R`|A1|$\frac32$`], R`$\frac32$`,
  R`$\left(2 - \frac12\right) - (1 - 1) = \frac32$.`),
Q('P13.4-11', 3, R`Evaluate $\displaystyle\int_{-2}^{2} (4 - x^2)\,dx$. [[3]]`,
  [R`$\left[4x - \frac{x^3}{3}\right]$.`, R`At $-2$: $-8 + \frac83$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$\left(8 - \frac83\right) - \left(-8 + \frac83\right) = \frac{32}{3}$.`),
Q('P13.4-12', 4, R`Given that $\displaystyle\int_1^a (2x - 3)\,dx = 6$, where $a > 1$, find $a$. [[4]]`,
  [R`$\big[x^2 - 3x\big]_1^a = a^2 - 3a + 2$.`, R`$a^2 - 3a - 4 = 0$.`],
  [R`|M1|Integrates`, R`|M1|$a^2 - 3a + 2 = 6$`, R`|M1|$(a - 4)(a + 1) = 0$`, R`|A1|$a = 4$`], R`$a = 4$`,
  R`$a = -1$ is rejected as $a > 1$.`),
Q('P13.4-13', 4, R`Given that $\displaystyle\int_0^k (k - x)\,dx = 8$, where $k > 0$, find $k$. [[3]]`,
  [R`$\left[kx - \frac{x^2}{2}\right]_0^k = \frac{k^2}{2}$.`, R`$k^2 = 16$.`],
  [R`|M1|Integrates with respect to $x$`, R`|M1|$\frac{k^2}{2} = 8$`, R`|A1|$k = 4$`], R`$k = 4$`,
  R`$k^2 - \frac{k^2}{2} = \frac{k^2}{2}$.`),
Q('P13.4-14', 4, R`Evaluate $\displaystyle\int_4^9 \frac{x - 2}{\sqrt x}\,dx$. [[4]]`,
  [R`$x^{\frac12} - 2x^{-\frac12}$.`, R`$\left[\frac23 x^{\frac32} - 4x^{\frac12}\right]_4^9$.`],
  [R`|M1|Splits`, R`|M1|Integrates`, R`|M1|$(18 - 12) - \left(\frac{16}{3} - 8\right)$`, R`|A1|$\frac{26}{3}$`], R`$\frac{26}{3}$`,
  R`$6 + \frac83 = \frac{26}{3}$.`),
Q('P13.4-15', 5, R`$f(x) = 3x^2 + px$, where $p$ is a constant.

**(a)** Given that $\displaystyle\int_1^3 f(x)\,dx = 30$, find $p$. [[3]]

**(b)** Evaluate $\displaystyle\int_0^2 f(x)\,dx$. [[2]]

**(c)** Evaluate $\displaystyle\int_{-1}^{1} f(x)\,dx$. [[2]]`,
  [R`$\left[x^3 + \frac{p}{2}x^2\right]_1^3 = 26 + 4p$.`, R`For (c), the $px$ term contributes $0$ over $-1$ to $1$.`],
  [R`(a)|M1|Integrates`, R`(a)|M1|$26 + 4p = 30$`, R`(a)|A1|$p = 1$`, R`(b)|M1|$\left[x^3 + \frac12 x^2\right]_0^2$`, R`(b)|A1|$10$`, R`(c)|M1|$\left(1 + \frac12\right) - \left(-1 + \frac12\right)$`, R`(c)|A1|$2$`],
  R`(a) $p = 1$ (b) $10$ (c) $2$`,
  R`(a) $(27 + \frac92 p) - (1 + \frac12 p) = 26 + 4p$.

(b) $8 + 2 = 10$.

(c) $\frac32 + \frac12 = 2$.`)
]};

CONTENT['P13.5'] = {
notes: R`
### Area under a curve
The area between $y = f(x)$, the $x$-axis and the lines $x = a$ and $x = b$ (with the curve **above** the axis) is
$$\int_a^b f(x)\,dx$$

[[fig:P13.5-under]]

If the limits aren't given, find where the curve crosses the $x$-axis first.

::: booklet
**Not in the formula booklet:** this result.
:::

### Worked example 1
Find the area under $y = x^2 + 1$ from $x = 0$ to $x = 2$.
$$\left[\tfrac13 x^3 + x\right]_0^2 = \tfrac83 + 2 = \tfrac{14}{3}$$

### Worked example 2: find the limits
Find the area enclosed by $y = 4x - x^2$ and the $x$-axis.
1. $4x - x^2 = x(4 - x) = 0$ at $x = 0$ and $4$.
2. $\left[2x^2 - \frac13 x^3\right]_0^4 = 32 - \frac{64}{3} = \frac{32}{3}$.

[[fig:P13.5-area]]

**The trap:** guessing limits, or using the $y$-intercept. Sketch the curve and solve $f(x) = 0$.

### Watch out
- An area is positive. If an integral comes out negative, the region is below the axis (see 13.6).
`,
questions: [
Q('P13.5-1', 1, R`Find the area under $y = 3x^2$ between $x = 0$ and $x = 2$. [[2]]`,
  [R`$\big[x^3\big]_0^2$.`, R`$8 - 0$.`],
  [R`|M1|$\big[x^3\big]$`, R`|A1|$8$`], R`$8$`,
  R`$\int_0^2 3x^2\,dx = 8$.`),
Q('P13.5-2', 1, R`Find the area under $y = x + 1$ between $x = 1$ and $x = 3$. [[2]]`,
  [R`$\left[\frac12 x^2 + x\right]_1^3$.`, R`$7.5 - 1.5$.`],
  [R`|M1|Integrates`, R`|A1|$6$`], R`$6$`,
  R`$(4.5 + 3) - (0.5 + 1) = 6$ (a trapezium with parallel sides $2$ and $4$).`),
Q('P13.5-3', 1, R`Find the area under $y = x^3$ between $x = 0$ and $x = 2$. [[2]]`,
  [R`$\left[\frac{x^4}{4}\right]_0^2$.`, R`$\frac{16}{4}$.`],
  [R`|M1|Integrates`, R`|A1|$4$`], R`$4$`,
  R`$\frac{16}{4} - 0 = 4$.`),
Q('P13.5-4', 2, R`Find the area under $y = x^2 + 1$ between $x = 0$ and $x = 2$. [[3]]`,
  [R`$\left[\frac13 x^3 + x\right]_0^2$.`, R`$\frac83 + 2$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac{14}{3}$`], R`$\frac{14}{3}$`,
  R`$\frac83 + 2 = \frac{14}{3}$.`, { solFig: FIGS['P13.5-under'] }),
Q('P13.5-5', 2, R`Find the area enclosed by $y = 4x - x^2$ and the $x$-axis. [[4]]`,
  [R`Limits: $x = 0$ and $x = 4$.`, R`$\left[2x^2 - \frac13 x^3\right]_0^4$.`],
  [R`|M1|Finds the roots $0$ and $4$`, R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$32 - \frac{64}{3} = \frac{32}{3}$.`, { solFig: FIGS['P13.5-area'] }),
Q('P13.5-6', 2, R`Find the area under $y = \sqrt x$ between $x = 0$ and $x = 9$. [[3]]`,
  [R`$\left[\frac23 x^{\frac32}\right]_0^9$.`, R`$9^{\frac32} = 27$.`],
  [R`|M1|Integrates`, R`|M1|$\frac23 \times 27$`, R`|A1|$18$`], R`$18$`,
  R`$\frac23 \times 27 = 18$.`),
Q('P13.5-7', 2, R`Find the area under $y = \dfrac{1}{x^2}$ between $x = 1$ and $x = 4$. [[3]]`,
  [R`$\left[-\frac1x\right]_1^4$.`, R`$-\frac14 + 1$.`],
  [R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac34$`], R`$\frac34$`,
  R`$-\frac14 - (-1) = \frac34$.`),
Q('P13.5-8', 3, R`Find the area enclosed by $y = (x - 1)(3 - x)$ and the $x$-axis. [[4]]`,
  [R`Roots $1$ and $3$; expand: $-x^2 + 4x - 3$.`, R`$\left[-\frac13 x^3 + 2x^2 - 3x\right]_1^3$.`],
  [R`|M1|Limits $1$ and $3$`, R`|M1|Expands and integrates`, R`|M1|Substitutes`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$(-9 + 18 - 9) - \left(-\frac13 + 2 - 3\right) = 0 + \frac43$.`),
Q('P13.5-9', 3, R`Find the area between $y = x(x - 2)^2$ and the $x$-axis from $x = 0$ to $x = 2$. [[4]]`,
  [R`Expand: $x^3 - 4x^2 + 4x$.`, R`$\left[\frac{x^4}{4} - \frac43 x^3 + 2x^2\right]_0^2$.`],
  [R`|M1|Expands`, R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$4 - \frac{32}{3} + 8 = \frac43$.`),
Q('P13.5-10', 3, R`Find the area enclosed by $y = 6x^2 - x^3$ and the $x$-axis. [[4]]`,
  [R`$x^2(6 - x) = 0$: limits $0$ and $6$.`, R`$\left[2x^3 - \frac{x^4}{4}\right]_0^6$.`],
  [R`|M1|Limits`, R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$108$`], R`$108$`,
  R`$6x^2 - x^3 = x^2(6 - x)$ is zero at $0$ and $6$ and positive between. $\left[2x^3 - \frac{x^4}{4}\right]_0^6 = 432 - 324 = 108$.`),
Q('P13.5-11', 3, R`The area under $y = kx^2$ between $x = 0$ and $x = 3$ is $18$. Find $k$. [[3]]`,
  [R`$\left[\frac{k}{3}x^3\right]_0^3 = 9k$.`, R`$9k = 18$.`],
  [R`|M1|Integrates`, R`|M1|$9k = 18$`, R`|A1|$k = 2$`], R`$k = 2$`,
  R`$\frac{k}{3} \times 27 = 9k$.`),
Q('P13.5-12', 4, R`Find the area under $y = x + \dfrac{4}{x^2}$ between $x = 1$ and $x = 4$. [[4]]`,
  [R`$\left[\frac12 x^2 - \frac4x\right]_1^4$.`, R`At $4$: $8 - 1$; at $1$: $\frac12 - 4$.`],
  [R`|M1|$x + 4x^{-2}$`, R`|M1|Integrates`, R`|M1|Substitutes`, R`|A1|$\frac{21}{2}$`], R`$\frac{21}{2}$`,
  R`$7 - \left(-\frac72\right) = \frac{21}{2}$.`),
Q('P13.5-13', 4, R`The area under $y = 9 - x^2$ from $x = 0$ to $x = a$, where $0 < a \le 3$, is $18$. Find $a$. [[3]]`,
  [R`$9a - \frac{a^3}{3} = 18$.`, R`Try $a = 3$.`],
  [R`|M1|$\left[9x - \frac13 x^3\right]_0^a$`, R`|M1|$9a - \frac{a^3}{3} = 18$`, R`|A1|$a = 3$`], R`$a = 3$`,
  R`$27 - 9 = 18$ ✓. The area from $0$ to $a$ increases with $a$ on this interval, so $a = 3$ is the only solution.`),
Q('P13.5-14', 4, R`Find the area enclosed by $y = \sqrt x(4 - x)$ and the $x$-axis. [[4]]`,
  [R`Roots $0$ and $4$; $y = 4x^{\frac12} - x^{\frac32}$.`, R`$\left[\frac83 x^{\frac32} - \frac25 x^{\frac52}\right]_0^4$.`],
  [R`|M1|Expands into powers`, R`|M1|Integrates`, R`|M1|$\frac{64}{3} - \frac{64}{5}$`, R`|A1|$\frac{128}{15}$`], R`$\frac{128}{15}$`,
  R`$4^{\frac32} = 8$ and $4^{\frac52} = 32$.`),
Q('P13.5-15', 5, R`The curve $C$ has equation $y = x^3 - 6x^2 + 9x$.

**(a)** Factorise $x^3 - 6x^2 + 9x$ and hence state where $C$ meets the $x$-axis. [[2]]

**(b)** Find the area enclosed by $C$ and the $x$-axis. [[4]]

**(c)** Find the coordinates of the maximum point of $C$. [[2]]`,
  [R`$x(x - 3)^2$.`, R`$\left[\frac{x^4}{4} - 2x^3 + \frac92 x^2\right]_0^3$.`],
  [R`(a)|M1|$x(x - 3)^2$`, R`(a)|A1|$(0, 0)$ and $(3, 0)$ (touching)`, R`(b)|M1|Limits $0$ and $3$`, R`(b)|M1|Integrates`, R`(b)|M1|Substitutes`, R`(b)|A1|$\frac{27}{4}$`, R`(c)|M1|$3x^2 - 12x + 9 = 0$`, R`(c)|A1|$(1, 4)$`],
  R`(a) $x(x - 3)^2$ (b) $\frac{27}{4}$ (c) $(1, 4)$`,
  R`(b) $\frac{81}{4} - 54 + \frac{81}{2} = \frac{27}{4}$.

(c) $3(x - 1)(x - 3) = 0$; $x = 1$ gives the maximum $y = 1 - 6 + 9 = 4$.`, { solFig: FIGS['P13.5-15'] })
]};

CONTENT['P13.6'] = {
notes: R`
### Regions below the axis
Where the curve is **below** the $x$-axis, the integral is **negative**. The area is its size (modulus).

### Regions on both sides
If the curve crosses the axis between the limits, **split** the integral at each crossing, find each part separately, and add their sizes.

[[fig:P13.6-split]]

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Find the area between $y = x^2 - 2x$ and the $x$-axis.
- Roots $0$ and $2$. $\left[\frac13 x^3 - x^2\right]_0^2 = \frac83 - 4 = -\frac43$, so the area is $\frac43$.

### Worked example 2: cancelling parts
Find the total area between $y = x^3 - x$ and the $x$-axis for $-1 \le x \le 1$.
- $\int_{-1}^0 = \frac14$ and $\int_0^1 = -\frac14$. The total area is $\frac14 + \frac14 = \frac12$.

**The trap:** integrating straight from $-1$ to $1$ and getting $0$. The parts cancel in the integral but not in the area.

### Watch out
- Always sketch first to see which parts are below the axis.
`,
questions: [
Q('P13.6-1', 1, R`Evaluate $\displaystyle\int_0^2 (x^2 - 2x)\,dx$, and hence state the area between $y = x^2 - 2x$ and the $x$-axis. [[2]]`,
  [R`$\left[\frac13 x^3 - x^2\right]_0^2$.`, R`The area is the size of the answer.`],
  [R`|B1|$-\frac43$`, R`|B1|Area $\frac43$`], R`$-\frac43$; area $\frac43$`,
  R`The curve is below the axis between $0$ and $2$, so the integral is negative.`),
Q('P13.6-2', 1, R`Find the area enclosed by $y = x^2 - 4$ and the $x$-axis. [[3]]`,
  [R`Roots $\pm2$.`, R`$\left[\frac13 x^3 - 4x\right]_{-2}^2$.`],
  [R`|M1|Limits $\pm2$`, R`|M1|Integral $= -\frac{32}{3}$`, R`|A1|Area $\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$\left(\frac83 - 8\right) - \left(-\frac83 + 8\right) = -\frac{32}{3}$.`),
Q('P13.6-3', 1, R`Explain why $\displaystyle\int_a^b f(x)\,dx$ is negative when the curve $y = f(x)$ lies below the $x$-axis for $a < x < b$. [[1]]`,
  [R`The integral adds up $f(x) \times$ (tiny width).`, R`What sign is $f(x)$ there?`],
  [R`|B1|$f(x) < 0$ throughout, so every strip contributes a negative amount`], R`$f(x)$ is negative there`,
  R`Each thin strip has height $f(x) < 0$ and positive width, so the sum is negative.`),
Q('P13.6-4', 2, R`Find the area between $y = x^3$ and the $x$-axis for $-2 \le x \le 0$. [[2]]`,
  [R`$\left[\frac{x^4}{4}\right]_{-2}^0 = -4$.`, R`Take the size.`],
  [R`|M1|Integral $-4$`, R`|A1|Area $4$`], R`$4$`,
  R`$0 - \frac{16}{4} = -4$, so the area is $4$.`),
Q('P13.6-5', 2, R`Find the total area between $y = x^3 - x$ and the $x$-axis for $-1 \le x \le 1$. [[4]]`,
  [R`Split at $x = 0$.`, R`Each part has size $\frac14$.`],
  [R`|M1|Splits at $0$`, R`|A1|$\int_{-1}^0 = \frac14$`, R`|A1|$\int_0^1 = -\frac14$`, R`|A1|Total $\frac12$`], R`$\frac12$`,
  R`$\left[\frac{x^4}{4} - \frac{x^2}{2}\right]$ gives $\frac14$ and $-\frac14$.`, { solFig: FIGS['P13.6-split'] }),
Q('P13.6-6', 2, R`Find the area enclosed by $y = x(x - 3)$ and the $x$-axis. [[3]]`,
  [R`Roots $0$ and $3$.`, R`$\left[\frac13 x^3 - \frac32 x^2\right]_0^3$.`],
  [R`|M1|Limits`, R`|M1|Integral $-\frac92$`, R`|A1|$\frac92$`], R`$\frac92$`,
  R`$9 - \frac{27}{2} = -\frac92$.`),
Q('P13.6-7', 2, R`Show that $\displaystyle\int_0^3 (x^2 - 4x + 3)\,dx = 0$, and explain why this doesn't mean the area is $0$. [[3]]`,
  [R`$\left[\frac13 x^3 - 2x^2 + 3x\right]_0^3$.`, R`The curve crosses at $x = 1$.`],
  [R`|M1|Integrates`, R`|A1|$9 - 18 + 9 = 0$`, R`|B1|The part above ($0$ to $1$) and below ($1$ to $3$) cancel`], R`Shown`,
  R`$\int_0^1 = \frac43$ and $\int_1^3 = -\frac43$.`),
Q('P13.6-8', 3, R`Find the total area between $y = x^2 - 4x + 3$ and the $x$-axis from $x = 0$ to $x = 3$. [[4]]`,
  [R`Split at $x = 1$.`, R`$\frac43$ and $-\frac43$.`],
  [R`|M1|Splits at $x = 1$`, R`|A1|$\frac43$`, R`|A1|$-\frac43$`, R`|A1|$\frac83$`], R`$\frac83$`,
  R`Add the sizes: $\frac43 + \frac43$.`),
Q('P13.6-9', 3, R`Find the total area between $y = x(x - 1)(x - 2)$ and the $x$-axis for $0 \le x \le 2$. [[4]]`,
  [R`Expand: $x^3 - 3x^2 + 2x$.`, R`Split at $x = 1$.`],
  [R`|M1|Expands`, R`|M1|Splits at $1$`, R`|A1|Parts $\frac14$ and $-\frac14$`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`$\left[\frac{x^4}{4} - x^3 + x^2\right]$: from $0$ to $1$ gives $\frac14$; from $1$ to $2$ gives $0 - \frac14 = -\frac14$.`),
Q('P13.6-10', 3, R`Find the area enclosed by $y = x^2 - 6x + 5$ and the $x$-axis. [[3]]`,
  [R`Roots $1$ and $5$.`, R`$\left[\frac13 x^3 - 3x^2 + 5x\right]_1^5$.`],
  [R`|M1|Limits`, R`|M1|Integral $-\frac{32}{3}$`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$\left(\frac{125}{3} - 50\right) - \frac73 = -\frac{32}{3}$.`),
Q('P13.6-11', 3, R`Find the total area between $y = 1 - x^2$ and the $x$-axis from $x = 0$ to $x = 2$. [[4]]`,
  [R`Split at $x = 1$.`, R`$\left[x - \frac13 x^3\right]$.`],
  [R`|M1|Splits`, R`|A1|$\frac23$`, R`|A1|$-\frac43$`, R`|A1|$2$`], R`$2$`,
  R`$\int_0^1 = \frac23$; $\int_1^2 = \left(2 - \frac83\right) - \frac23 = -\frac43$.`),
Q('P13.6-12', 4, R`Find the total area between $y = x^3 - 4x$ and the $x$-axis for $-2 \le x \le 2$. [[4]]`,
  [R`Roots $-2$, $0$, $2$.`, R`By symmetry the two parts have the same size.`],
  [R`|M1|Splits at $0$`, R`|M1|$\left[\frac{x^4}{4} - 2x^2\right]_0^2 = -4$`, R`|A1|Each part has size $4$`, R`|A1|$8$`], R`$8$`,
  R`From $-2$ to $0$ the integral is $+4$; from $0$ to $2$, $-4$.`),
Q('P13.6-13', 4, R`The curve $y = x^2 - kx$, where $k > 0$, encloses a region of area $36$ with the $x$-axis. Find $k$. [[4]]`,
  [R`Roots $0$ and $k$.`, R`$\left[\frac13 x^3 - \frac{k}{2}x^2\right]_0^k = -\frac{k^3}{6}$.`],
  [R`|M1|Limits $0$, $k$`, R`|M1|Integrates`, R`|A1|$\frac{k^3}{6} = 36$`, R`|A1|$k = 6$`], R`$k = 6$`,
  R`The roots are $0$ and $k$, and $\int_0^k (x^2 - kx)\,dx = \frac{k^3}{3} - \frac{k^3}{2} = -\frac{k^3}{6}$. So $\frac{k^3}{6} = 36$, $k^3 = 216$, $k = 6$.`),
Q('P13.6-14', 4, R`Find the total area between $y = x^3 - 3x^2 + 2x$ and the $x$-axis for $0 \le x \le 3$. [[5]]`,
  [R`$x(x - 1)(x - 2)$: split at $1$ and $2$.`, R`$\left[\frac{x^4}{4} - x^3 + x^2\right]$.`],
  [R`|M1|Roots $0$, $1$, $2$`, R`|A1|$\int_0^1 = \frac14$`, R`|A1|$\int_1^2 = -\frac14$`, R`|A1|$\int_2^3 = \frac94$`, R`|A1|$\frac{11}{4}$`], R`$\frac{11}{4}$`,
  R`$\int_2^3 = \left(\frac{81}{4} - 27 + 9\right) - (4 - 8 + 4) = \frac94$. Total $\frac14 + \frac14 + \frac94$.`),
Q('P13.6-15', 5, R`The curve $C$ has equation $y = x^2(x - 2)$.

**(a)** Sketch $C$ for $0 \le x \le 3$, showing where it meets the $x$-axis. [[2]]

**(b)** Evaluate $\displaystyle\int_0^3 x^2(x - 2)\,dx$. [[2]]

**(c)** Find the total area between $C$ and the $x$-axis for $0 \le x \le 3$. [[3]]

**(d)** Explain why your answers to (b) and (c) are different. [[1]]`,
  [R`Touches at $0$, crosses at $2$.`, R`$\left[\frac{x^4}{4} - \frac23 x^3\right]$; split at $2$.`],
  [R`(a)|B1|Touches at $O$, crosses at $(2, 0)$`, R`(a)|B1|Below the axis for $0 < x < 2$`, R`(b)|M1|Integrates`, R`(b)|A1|$\frac94$`, R`(c)|M1|Splits at $2$`, R`(c)|A1|$-\frac43$ and $\frac{43}{12}$`, R`(c)|A1|$\frac{59}{12}$`, R`(d)|B1|The integral subtracts the region below the axis`],
  R`(b) $\frac94$ (c) $\frac{59}{12}$`,
  R`(b) $\frac{81}{4} - 18 = \frac94$.

(c) $\int_0^2 = 4 - \frac{16}{3} = -\frac43$; $\int_2^3 = \frac94 - \left(-\frac43\right) = \frac{43}{12}$. Total $\frac43 + \frac{43}{12} = \frac{59}{12}$.`, { solFig: FIGS['P13.6-15'] })
]};

CONTENT['P13.7'] = {
notes: R`
### Area between two graphs
If $y = f(x)$ is **above** $y = g(x)$ for $a \le x \le b$, the area between them is
$$\int_a^b \big(f(x) - g(x)\big)\,dx$$
(top minus bottom). The limits are usually where the graphs meet.

[[fig:P13.7-between]]

::: booklet
**Not in the formula booklet:** this result.
:::

### Worked example 1
Find the area between $y = x^2$ and $y = 2x$.
1. $x^2 = 2x$ at $x = 0$ and $x = 2$; the line is on top.
2. $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac13 x^3\right]_0^2 = 4 - \frac83 = \frac43$.

### Worked example 2: a region with three edges
Find the area bounded by $y = 4 - x^2$, $y = 3x$ and the $y$-axis.
1. $4 - x^2 = 3x$ gives $x = 1$ (the other root, $-4$, is on the wrong side of the $y$-axis).
2. $\int_0^1 (4 - x^2 - 3x)\,dx = 4 - \frac13 - \frac32 = \frac{13}{6}$.

[[fig:P13.7-ex2]]

**The trap:** subtracting in the wrong order, giving a negative area, or using the wrong pair of intersections.

### Watch out
- Sometimes it's easier to find an area under a curve and subtract a triangle or trapezium.
`,
questions: [
Q('P13.7-1', 1, R`Find the area of the region between $y = x^2$ and $y = 2x$. [[3]]`,
  [R`They meet at $x = 0$ and $2$.`, R`$\int_0^2 (2x - x^2)\,dx$.`],
  [R`|M1|Limits $0$ and $2$`, R`|M1|Line minus curve`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$4 - \frac83 = \frac43$.`, { solFig: FIGS['P13.7-between'] }),
Q('P13.7-2', 1, R`Find the area between $y = x$ and $y = x^2$. [[3]]`,
  [R`They meet at $0$ and $1$.`, R`$\int_0^1 (x - x^2)\,dx$.`],
  [R`|M1|Limits`, R`|M1|$x - x^2$`, R`|A1|$\frac16$`], R`$\frac16$`,
  R`$\frac12 - \frac13 = \frac16$.`),
Q('P13.7-3', 1, R`Find the area between $y = 4 - x^2$ and the line $y = 3$. [[3]]`,
  [R`$4 - x^2 = 3$ at $x = \pm1$.`, R`$\int_{-1}^1 (1 - x^2)\,dx$.`],
  [R`|M1|Limits $\pm1$`, R`|M1|Curve minus line`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$\left[x - \frac13 x^3\right]_{-1}^1 = \frac23 + \frac23$.`),
Q('P13.7-4', 2, R`Find the area between $y = x^2$ and the line $y = 4$. [[3]]`,
  [R`Limits $\pm2$.`, R`$\int_{-2}^2 (4 - x^2)\,dx$.`],
  [R`|M1|Limits`, R`|M1|Line minus curve`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$\left(8 - \frac83\right) \times 2 = \frac{32}{3}$.`),
Q('P13.7-5', 2, R`Find the area between $y = x^2 - 2x$ and $y = x$. [[4]]`,
  [R`$x^2 - 3x = 0$: $x = 0, 3$.`, R`$\int_0^3 (3x - x^2)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Line minus curve`, R`|M1|Integrates`, R`|A1|$\frac92$`], R`$\frac92$`,
  R`$\frac{27}{2} - 9 = \frac92$.`),
Q('P13.7-6', 2, R`Find the area between $y = 6x - x^2$ and $y = 2x$. [[4]]`,
  [R`$x^2 - 4x = 0$: $x = 0, 4$.`, R`$\int_0^4 (4x - x^2)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Curve minus line`, R`|M1|Integrates`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$32 - \frac{64}{3} = \frac{32}{3}$.`),
Q('P13.7-7', 2, R`Find the area of the region bounded by $y = 4 - x^2$, the line $y = 3x$ and the $y$-axis. [[4]]`,
  [R`$4 - x^2 = 3x$ at $x = 1$ (for $x \ge 0$).`, R`$\int_0^1 (4 - x^2 - 3x)\,dx$.`],
  [R`|M1|$x = 1$`, R`|M1|Curve minus line`, R`|M1|Integrates`, R`|A1|$\frac{13}{6}$`], R`$\frac{13}{6}$`,
  R`$4 - \frac13 - \frac32 = \frac{13}{6}$.`, { solFig: FIGS['P13.7-ex2'] }),
Q('P13.7-8', 3, R`Find the area between $y = x^2 + 2$ and $y = 2x + 5$. [[4]]`,
  [R`$x^2 - 2x - 3 = 0$: $x = -1, 3$.`, R`$\int_{-1}^3 (2x + 3 - x^2)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Line minus curve`, R`|M1|Integrates`, R`|A1|$\frac{32}{3}$`], R`$\frac{32}{3}$`,
  R`$\left[x^2 + 3x - \frac13 x^3\right]_{-1}^3 = 9 - \left(-\frac53\right) = \frac{32}{3}$.`),
Q('P13.7-9', 3, R`Find the area between $y = \sqrt x$ and $y = \frac12 x$. [[4]]`,
  [R`$\sqrt x = \frac{x}{2}$ at $x = 0$ and $4$.`, R`$\int_0^4 \left(\sqrt x - \frac{x}{2}\right)dx$.`],
  [R`|M1|Intersections`, R`|M1|Curve minus line`, R`|M1|Integrates`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$\frac23 \times 8 - 4 = \frac43$.`),
Q('P13.7-10', 3, R`Find the area between $y = x^3$ and $y = x$ for $x \ge 0$. [[3]]`,
  [R`They meet at $x = 0$ and $1$.`, R`$\int_0^1 (x - x^3)\,dx$.`],
  [R`|M1|Limits`, R`|M1|$x - x^3$`, R`|A1|$\frac14$`], R`$\frac14$`,
  R`$\frac12 - \frac14 = \frac14$.`),
Q('P13.7-11', 3, R`Find the area between $y = x^2$ and $y = 8 - x^2$. [[4]]`,
  [R`$2x^2 = 8$: $x = \pm2$.`, R`$\int_{-2}^2 (8 - 2x^2)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Top minus bottom`, R`|M1|Integrates`, R`|A1|$\frac{64}{3}$`], R`$\frac{64}{3}$`,
  R`$2\left(16 - \frac{16}{3}\right) = \frac{64}{3}$.`),
Q('P13.7-12', 4, R`The tangent to $y = x^2$ at $(1, 1)$ meets the $x$-axis at $A$. Find the area of the region bounded by the curve, the tangent and the $x$-axis. [[5]]`,
  [R`Tangent $y = 2x - 1$, so $A = \left(\frac12, 0\right)$.`, R`Area under the curve from $0$ to $1$, minus the triangle under the tangent.`],
  [R`|M1|Tangent $y = 2x - 1$`, R`|A1|$A\left(\frac12, 0\right)$`, R`|M1|$\int_0^1 x^2\,dx = \frac13$`, R`|M1|Triangle $\frac12 \times \frac12 \times 1 = \frac14$`, R`|A1|$\frac{1}{12}$`], R`$\frac{1}{12}$`,
  R`$\frac13 - \frac14 = \frac{1}{12}$.`, { solFig: FIGS['P13.7-12'] }),
Q('P13.7-13', 4, R`Find the area between $y = x(4 - x)$ and $y = x$. [[4]]`,
  [R`$4x - x^2 = x$ at $x = 0$ and $3$.`, R`$\int_0^3 (3x - x^2)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Curve minus line`, R`|M1|Integrates`, R`|A1|$\frac92$`], R`$\frac92$`,
  R`$\frac{27}{2} - 9 = \frac92$.`),
Q('P13.7-14', 4, R`Find the area between $y = x^2 - 2x + 4$ and $y = 2x + 1$. [[4]]`,
  [R`$x^2 - 4x + 3 = 0$: $x = 1, 3$.`, R`$\int_1^3 (-x^2 + 4x - 3)\,dx$.`],
  [R`|M1|Intersections`, R`|M1|Line minus curve`, R`|M1|Integrates`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$\left[-\frac13 x^3 + 2x^2 - 3x\right]_1^3 = 0 - \left(-\frac43\right)$.`),
Q('P13.7-15', 5, R`The curve $C$ has equation $y = x^2 - 4x + 5$. The points $A(1, 2)$ and $B(4, 5)$ lie on $C$.

**(a)** Find the equation of the line $AB$. [[2]]

**(b)** Find the area of the region between $C$ and $AB$. [[4]]

**(c)** Find the area under $C$ from $x = 1$ to $x = 4$, and check your answer to (b) using a trapezium. [[2]]`,
  [R`Gradient $1$: $y = x + 1$.`, R`$\int_1^4 (x + 1 - x^2 + 4x - 5)\,dx = \int_1^4 (-x^2 + 5x - 4)\,dx$.`],
  [R`(a)|M1|Gradient $1$`, R`(a)|A1|$y = x + 1$`, R`(b)|M1|Line minus curve`, R`(b)|M1|Integrates`, R`(b)|M1|Substitutes`, R`(b)|A1|$\frac92$`, R`(c)|B1|$6$`, R`(c)|B1|Trapezium $10.5$; $10.5 - 6 = 4.5$`],
  R`(a) $y = x + 1$ (b) $\frac92$ (c) $6$`,
  R`(b) $\left[-\frac13 x^3 + \frac52 x^2 - 4x\right]_1^4 = \frac83 - \left(-\frac{11}{6}\right) = \frac92$.

(c) $\left[\frac13 x^3 - 2x^2 + 5x\right]_1^4 = \frac{28}{3} - \frac{10}{3} = 6$. The trapezium under $AB$ has area $\frac{2 + 5}{2} \times 3 = 10.5$.`, { solFig: FIGS['P13.7-15'] })
]};
