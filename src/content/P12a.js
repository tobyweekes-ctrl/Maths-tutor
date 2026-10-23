/* Pure Mathematics Year 1 · Chapter 12 Differentiation (sections 12.1 to 12.6) */
BOOK_CHAPTERS.push({ id:'P12', book:'Pure Mathematics Year 1', label:'Chapter 12', title:'Differentiation', sections:[
  { id:'P12.1', num:'12.1', title:'Gradients of curves' },
  { id:'P12.2', num:'12.2', title:'Finding the derivative' },
  { id:'P12.3', num:'12.3', title:'Differentiating xⁿ' },
  { id:'P12.4', num:'12.4', title:'Differentiating quadratics' },
  { id:'P12.5', num:'12.5', title:'Differentiating functions with two or more terms' },
  { id:'P12.6', num:'12.6', title:'Gradients, tangents and normals' },
  { id:'P12.7', num:'12.7', title:'Increasing and decreasing functions' },
  { id:'P12.8', num:'12.8', title:'Second order derivatives' },
  { id:'P12.9', num:'12.9', title:'Stationary points' },
  { id:'P12.10', num:'12.10', title:'Sketching gradient functions' },
  { id:'P12.11', num:'12.11', title:'Modelling with differentiation' }
]});
{
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  FIGS['P12.1-chords'] = Fig.graph({ label: 'y = x² with the tangent at (2, 4), gradient 4, and the chord from (2, 4) to (3, 9), gradient 5: as the second point slides towards (2, 4) the chord approaches the tangent',
    x0: -0.5, x1: 3.5, y0: -2, y1: 12, fns: [{ f: x => x * x, label: 'y = x²', lx: 3.5, ly: 11.5 }, { f: x => 4 * x - 4, col: 'var(--pen)', label: 'tangent', lx: 3.5, ly: 6.4 }, { f: x => 5 * x - 6, col: 'var(--muted)', dash: true, from: 1.2, to: 3.5 }],
    points: [pt(2, 4, '(2, 4)', -28, -4), pt(3, 9, '(3, 9)', -28, -4)], texts: [{ x: 1.7, y: 1.2, label: 'chord gradient 5', col: 'var(--muted)', anchor: 'start' }] });
  FIGS['P12.6-tn'] = Fig.graph({ label: 'y = x² − 4x + 5 with the tangent at (3, 2), gradient 2, and the normal there, gradient −1/2, drawn to equal scales',
    x0: -0.5, x1: 7, y0: -0.5, y1: 5, equal: true, fns: [{ f: x => x * x - 4 * x + 5 }, { f: x => 2 * x - 4, col: 'var(--pen)', label: 'tangent', lx: 4.3, ly: 4.6 }, { f: x => 3.5 - x / 2, col: 'var(--pen)', dash: true, label: 'normal', lx: 7, ly: 0.4 }],
    points: [pt(3, 2, '(3, 2)', 26, 6)] });
}

CONTENT['P12.1'] = {
notes: R`
### The gradient of a curve
The gradient of a curve at a point is the gradient of the **tangent** there. It changes from point to point.

### Chords close in on the tangent
A **chord** joins two points on the curve. As the second point moves closer to the first, the chord's gradient gets closer and closer to the tangent's gradient.

[[fig:P12.1-chords]]

::: booklet
**Not in the formula booklet:** this idea (the formal version appears in 12.2).
:::

### Worked example 1
Find the gradient of the chord of $y = x^2$ from $(2, 4)$ to $(2.1, 4.41)$, and estimate the gradient at $(2, 4)$.
- $\frac{4.41 - 4}{0.1} = 4.1$. With $x = 2.01$ the chord gradient is $4.01$; it's closing in on $4$.

### Worked example 2: a general chord
Find the gradient of the chord from $x = 2$ to $x = 2 + h$ on $y = x^2$.
$$\frac{(2 + h)^2 - 4}{h} = \frac{4h + h^2}{h} = 4 + h$$
As $h \to 0$ this tends to $4$: the gradient at $(2, 4)$ is exactly $4$.

**The trap:** using a chord to a far-away point, like $(3, 9)$, and calling its gradient ($5$) the gradient at $(2, 4)$. A chord only approximates the tangent when the points are very close.

### Watch out
- Cancel $h$ **before** letting $h \to 0$; you can't divide by zero.
`,
questions: [
Q('P12.1-1', 1, R`Find the gradient of the chord of $y = x^2$ from $x = 1$ to $x = 3$. [[1]]`,
  [R`The points are $(1, 1)$ and $(3, 9)$.`, R`$\frac{9 - 1}{3 - 1}$.`],
  [R`|B1|$4$`], R`$4$`,
  R`The chord joins $(1, 1)$ and $(3, 9)$: gradient $\frac{9 - 1}{3 - 1} = 4$.`),
Q('P12.1-2', 1, R`Find the gradient of the chord of $y = x^2$ from $x = 3$ to $x = 3.1$. [[1]]`,
  [R`$3.1^2 = 9.61$.`, R`$\frac{9.61 - 9}{0.1}$.`],
  [R`|B1|$6.1$`], R`$6.1$`,
  R`$\frac{0.61}{0.1} = 6.1$.`),
Q('P12.1-3', 1, R`Chords of $y = x^2$ from $x = 3$ to $x = 3.1$, $3.01$ and $3.001$ have gradients $6.1$, $6.01$ and $6.001$. Estimate the gradient of the curve at $x = 3$. [[1]]`,
  [R`What value are they approaching?`, R`The extra bit shrinks with $h$.`],
  [R`|B1|$6$`], R`$6$`,
  R`The chord gradients approach $6$ as the points get closer.`),
Q('P12.1-4', 2, R`Show that the chord of $y = x^2$ from $x = 2$ to $x = 2 + h$ has gradient $4 + h$, and hence find the gradient of the curve at $(2, 4)$. [[3]]`,
  [R`$(2 + h)^2 = 4 + 4h + h^2$.`, R`Let $h \to 0$.`],
  [R`|M1|$\frac{(2 + h)^2 - 4}{h}$`, R`|A1|$= 4 + h$`, R`|A1|Gradient $4$`], R`$4$`,
  R`$\frac{4h + h^2}{h} = 4 + h \to 4$.`),
Q('P12.1-5', 2, R`Find the gradient of the chord of $y = x^3$ from $x = 1$ to $x = 1.1$. [[2]]`,
  [R`$1.1^3 = 1.331$.`, R`$\frac{1.331 - 1}{0.1}$.`],
  [R`|M1|$\frac{1.1^3 - 1}{0.1}$`, R`|A1|$3.31$`], R`$3.31$`,
  R`$\frac{0.331}{0.1} = 3.31$ (the gradient at $x = 1$ is $3$).`),
Q('P12.1-6', 2, R`For $y = 2x^2$, show that the chord from $x = 1$ to $x = 1 + h$ has gradient $4 + 2h$. Hence find the gradient at $x = 1$. [[3]]`,
  [R`$2(1 + h)^2 = 2 + 4h + 2h^2$.`, R`Subtract $2$ and divide by $h$.`],
  [R`|M1|$\frac{2(1 + h)^2 - 2}{h}$`, R`|A1|$4 + 2h$`, R`|A1|$4$`], R`$4$`,
  R`$\frac{4h + 2h^2}{h} = 4 + 2h \to 4$.`),
Q('P12.1-7', 2, R`The gradient of $y = x^2$ at $(1, 1)$ is $2$. Find the equation of the tangent there. [[2]]`,
  [R`$y - 1 = 2(x - 1)$.`, R`Simplify.`],
  [R`|M1|$y - 1 = 2(x - 1)$`, R`|A1|$y = 2x - 1$`], R`$y = 2x - 1$`,
  R`Tangent through $(1, 1)$ with gradient $2$: $y - 1 = 2(x - 1)$, so $y = 2x - 1$.`),
Q('P12.1-8', 3, R`For $y = x^2 - 3x$, show that the chord from $x = 2$ to $x = 2 + h$ has gradient $1 + h$, and state the gradient at $x = 2$. [[3]]`,
  [R`At $x = 2$, $y = -2$.`, R`$(2 + h)^2 - 3(2 + h) = -2 + h + h^2$.`],
  [R`|M1|$\frac{(2 + h)^2 - 3(2 + h) + 2}{h}$`, R`|A1|$1 + h$`, R`|A1|$1$`], R`$1$`,
  R`$4 + 4h + h^2 - 6 - 3h + 2 = h + h^2$, divided by $h$ gives $1 + h$.`),
Q('P12.1-9', 3, R`For $y = \dfrac1x$, find the gradient of the chord from $x = 1$ to $x = 1 + h$, and hence the gradient of the curve at $(1, 1)$. [[3]]`,
  [R`$\frac{1}{1 + h} - 1 = \frac{-h}{1 + h}$.`, R`Divide by $h$.`],
  [R`|M1|$\frac{\frac{1}{1 + h} - 1}{h}$`, R`|A1|$-\frac{1}{1 + h}$`, R`|A1|$-1$`], R`$-1$`,
  R`$\frac{-h/(1 + h)}{h} = -\frac{1}{1 + h} \to -1$.`),
Q('P12.1-10', 3, R`Show that the chord of $y = x^3$ from $x$ to $x + h$ has gradient $3x^2 + 3xh + h^2$. What is the gradient of the curve at $x$? [[3]]`,
  [R`$(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$.`, R`Subtract $x^3$, divide by $h$.`],
  [R`|M1|Expands $(x + h)^3$`, R`|A1|$3x^2 + 3xh + h^2$`, R`|A1|$3x^2$`], R`$3x^2$`,
  R`As $h \to 0$ the $3xh$ and $h^2$ terms vanish.`),
Q('P12.1-11', 3, R`Chords of $y = x^2$ start at $x = 5$. Find their gradients when the other end is at $x = 5.1$, $5.01$ and $5.001$, and estimate the gradient at $x = 5$. [[2]]`,
  [R`The chord gradient is $10 + h$.`, R`$h = 0.1, 0.01, 0.001$.`],
  [R`|B1|$10.1$, $10.01$, $10.001$`, R`|B1|$10$`], R`$10.1$, $10.01$, $10.001$; $10$`,
  R`$\frac{(5 + h)^2 - 25}{h} = 10 + h$.`),
Q('P12.1-12', 4, R`Show that the chord of $y = x^2$ joining $x = a$ and $x = b$ has gradient $a + b$. Hence find the gradient of the curve at $x = a$. [[3]]`,
  [R`$\frac{b^2 - a^2}{b - a}$.`, R`Difference of two squares; then let $b \to a$.`],
  [R`|M1|$\frac{b^2 - a^2}{b - a}$`, R`|A1|$= \frac{(b - a)(b + a)}{b - a} = a + b$`, R`|A1|$2a$`], R`$a + b$; $2a$`,
  R`As $b$ approaches $a$, $a + b$ approaches $2a$.`),
Q('P12.1-13', 4, R`For $y = 4 - x^2$, find the gradient of the chord from $x = 1$ to $x = 1 + h$, and hence the gradient at $x = 1$. [[3]]`,
  [R`At $x = 1$, $y = 3$.`, R`$4 - (1 + h)^2 - 3 = -2h - h^2$.`],
  [R`|M1|$\frac{4 - (1 + h)^2 - 3}{h}$`, R`|A1|$-2 - h$`, R`|A1|$-2$`], R`$-2$`,
  R`Divide $-2h - h^2$ by $h$ and let $h \to 0$.`),
Q('P12.1-14', 4, R`Use a chord with $h = 0.001$ to estimate the gradient of $y = 2^x$ at $x = 0$, to $3$ decimal places. [[2]]`,
  [R`$\frac{2^{0.001} - 2^0}{0.001}$.`, R`$2^{0.001} = 1.000693\ldots$`],
  [R`|M1|$\frac{2^{0.001} - 1}{0.001}$`, R`|A1|$0.693$`], R`$0.693$`,
  R`$\frac{0.000693}{0.001} = 0.693$. (The exact value is $\ln 2 = 0.6931\ldots$, which you'll meet in Chapter 14.)`),
Q('P12.1-15', 5, R`The curve $C$ has equation $y = x^2 + 2x$.

**(a)** Show that the gradient of the chord from $x = 3$ to $x = 3 + h$ is $8 + h$. [[3]]

**(b)** Hence find the gradient of $C$ at $x = 3$. [[1]]

**(c)** Find the equation of the tangent to $C$ at $x = 3$. [[2]]

**(d)** Find where this tangent crosses the $x$-axis. [[1]]`,
  [R`At $x = 3$, $y = 15$.`, R`$(3 + h)^2 + 2(3 + h) - 15 = 8h + h^2$.`],
  [R`(a)|M1|$\frac{(3 + h)^2 + 2(3 + h) - 15}{h}$`, R`(a)|M1|Expands: $8h + h^2$`, R`(a)|A1|$8 + h$`, R`(b)|B1|$8$`, R`(c)|M1|$y - 15 = 8(x - 3)$`, R`(c)|A1|$y = 8x - 9$`, R`(d)|B1|$\left(\frac98, 0\right)$`],
  R`(b) $8$ (c) $y = 8x - 9$ (d) $\left(\frac98, 0\right)$`,
  R`(a) $9 + 6h + h^2 + 6 + 2h - 15 = 8h + h^2$.

(c) $y = 8x - 24 + 15$.`)
]};

CONTENT['P12.2'] = {
notes: R`
### Differentiation from first principles
The **derivative** (gradient function) of $f(x)$ is
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$
It's the chord gradient from $x$ to $x + h$, with $h$ shrinking to zero. Also written $\dfrac{dy}{dx}$.

::: booklet
**In the formula booklet:** $f'(x) = \displaystyle\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$.
:::

### Worked example 1
Prove from first principles that the derivative of $x^2$ is $2x$.
$$\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h \to 2x \text{ as } h \to 0$$

### Worked example 2: more than one term
Find, from first principles, the derivative of $f(x) = 3x^2 - x$.
1. $f(x + h) - f(x) = 3(x + h)^2 - (x + h) - 3x^2 + x = 6xh + 3h^2 - h$.
2. Divide by $h$: $6x + 3h - 1$.
3. As $h \to 0$: $f'(x) = 6x - 1$.

**The trap:** dividing only some terms by $h$, or setting $h = 0$ before cancelling (giving $\frac00$). Simplify fully, **then** take the limit.

### Watch out
- Write "as $h \to 0$" (or "$\lim$") in your answer: it's needed for full marks.
`,
questions: [
Q('P12.2-1', 1, R`Write down the definition of $f'(x)$ from first principles. [[1]]`,
  [R`It's a limit of chord gradients.`, R`From $x$ to $x + h$.`],
  [R`|B1|$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$`], R`$\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$`,
  R`The gradient of the chord from $x$ to $x + h$, as $h \to 0$.`),
Q('P12.2-2', 1, R`Expand and simplify $(x + h)^2 - x^2$. [[1]]`,
  [R`$(x + h)^2 = x^2 + 2xh + h^2$.`, R`The $x^2$ terms cancel.`],
  [R`|B1|$2xh + h^2$`], R`$2xh + h^2$`,
  R`$x^2 + 2xh + h^2 - x^2 = 2xh + h^2$.`),
Q('P12.2-3', 1, R`Simplify $\dfrac{(x + h)^2 - x^2}{h}$ and find its limit as $h \to 0$. [[2]]`,
  [R`Top: $2xh + h^2$.`, R`Divide by $h$.`],
  [R`|M1|$2x + h$`, R`|A1|Limit $2x$`], R`$2x + h$; limit $2x$`,
  R`$\frac{2xh + h^2}{h} = 2x + h \to 2x$.`),
Q('P12.2-4', 2, R`Prove from first principles that the derivative of $5x$ is $5$. [[2]]`,
  [R`$\frac{5(x + h) - 5x}{h}$.`, R`$= \frac{5h}{h}$.`],
  [R`|M1|$\frac{5(x + h) - 5x}{h} = 5$`, R`|A1|Limit $5$`], R`$5$`,
  R`The chord gradient is $5$ for every $h$, so the limit is $5$. (A straight line has the same gradient everywhere.)`),
Q('P12.2-5', 2, R`Find, from first principles, the derivative of $f(x) = x^2 + 3$. [[3]]`,
  [R`$f(x + h) - f(x) = 2xh + h^2$.`, R`The $3$s cancel.`],
  [R`|M1|$\frac{(x + h)^2 + 3 - x^2 - 3}{h}$`, R`|A1|$2x + h$`, R`|A1|$f'(x) = 2x$ as $h \to 0$`], R`$2x$`,
  R`The constant disappears: adding $3$ just shifts the curve up.`),
Q('P12.2-6', 2, R`Find, from first principles, the derivative of $f(x) = 4x^2$. [[3]]`,
  [R`$4(x + h)^2 - 4x^2 = 8xh + 4h^2$.`, R`Divide by $h$.`],
  [R`|M1|$\frac{4(x + h)^2 - 4x^2}{h}$`, R`|A1|$8x + 4h$`, R`|A1|$8x$`], R`$8x$`,
  R`$8x + 4h \to 8x$ as $h \to 0$.`),
Q('P12.2-7', 2, R`Find, from first principles, the derivative of $f(x) = x^2 - 6x$. [[3]]`,
  [R`$f(x + h) - f(x) = 2xh + h^2 - 6h$.`, R`Divide by $h$.`],
  [R`|M1|Sets up the limit`, R`|A1|$2x + h - 6$`, R`|A1|$2x - 6$`], R`$2x - 6$`,
  R`$\frac{2xh + h^2 - 6h}{h} = 2x + h - 6 \to 2x - 6$.`),
Q('P12.2-8', 3, R`Prove from first principles that the derivative of $x^3$ is $3x^2$. [[4]]`,
  [R`$(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$.`, R`Divide by $h$, then $h \to 0$.`],
  [R`|M1|Expands $(x + h)^3$`, R`|M1|$\frac{3x^2h + 3xh^2 + h^3}{h}$`, R`|A1|$3x^2 + 3xh + h^2$`, R`|A1|$\to 3x^2$`], R`$3x^2$`,
  R`Every term except $3x^2$ contains $h$, so vanishes in the limit.`),
Q('P12.2-9', 3, R`Find, from first principles, the derivative of $f(x) = 2x^2 + 5x$. [[4]]`,
  [R`$f(x + h) - f(x) = 4xh + 2h^2 + 5h$.`, R`Divide by $h$.`],
  [R`|M1|$f(x + h) = 2(x + h)^2 + 5(x + h)$`, R`|M1|$4xh + 2h^2 + 5h$`, R`|A1|$4x + 2h + 5$`, R`|A1|$4x + 5$`], R`$4x + 5$`,
  R`$\lim_{h \to 0}(4x + 2h + 5) = 4x + 5$.`),
Q('P12.2-10', 3, R`Find, from first principles, the derivative of $f(x) = 1 - x^2$. [[3]]`,
  [R`$f(x + h) - f(x) = -2xh - h^2$.`, R`Divide by $h$.`],
  [R`|M1|Sets up the limit`, R`|A1|$-2x - h$`, R`|A1|$-2x$`], R`$-2x$`,
  R`$1 - (x + h)^2 - 1 + x^2 = -2xh - h^2$.`),
Q('P12.2-11', 3, R`Find, from first principles, the derivative of $f(x) = ax^2 + bx + c$, where $a$, $b$ and $c$ are constants. [[4]]`,
  [R`$f(x + h) - f(x) = 2axh + ah^2 + bh$.`, R`Divide by $h$.`],
  [R`|M1|$a(x + h)^2 + b(x + h) + c$`, R`|M1|$2axh + ah^2 + bh$`, R`|A1|$2ax + ah + b$`, R`|A1|$2ax + b$`], R`$2ax + b$`,
  R`This is the general rule for differentiating a quadratic.`),
Q('P12.2-12', 4, R`Find, from first principles, the derivative of $f(x) = x^3 - 2x$. [[4]]`,
  [R`$(x + h)^3 - 2(x + h) - x^3 + 2x$.`, R`$= 3x^2h + 3xh^2 + h^3 - 2h$.`],
  [R`|M1|Sets up the limit`, R`|M1|Expands`, R`|A1|$3x^2 + 3xh + h^2 - 2$`, R`|A1|$3x^2 - 2$`], R`$3x^2 - 2$`,
  R`Divide by $h$, then let $h \to 0$.`),
Q('P12.2-13', 4, R`Find, from first principles, the derivative of $f(x) = \dfrac1x$. [[4]]`,
  [R`$\frac{1}{x + h} - \frac1x = \frac{x - (x + h)}{x(x + h)}$.`, R`$= \frac{-h}{x(x + h)}$.`],
  [R`|M1|Common denominator`, R`|A1|$\frac{-h}{x(x + h)}$`, R`|M1|Divides by $h$: $\frac{-1}{x(x + h)}$`, R`|A1|$-\frac{1}{x^2}$`], R`$-\frac{1}{x^2}$`,
  R`As $h \to 0$, $x(x + h) \to x^2$.`),
Q('P12.2-14', 4, R`Prove from first principles that the derivative of $x^4$ is $4x^3$. [[4]]`,
  [R`$(x + h)^4 = x^4 + 4x^3h + 6x^2h^2 + 4xh^3 + h^4$.`, R`Use the binomial expansion.`],
  [R`|M1|Binomial expansion`, R`|M1|Subtracts $x^4$ and divides by $h$`, R`|A1|$4x^3 + 6x^2h + 4xh^2 + h^3$`, R`|A1|$\to 4x^3$`], R`$4x^3$`,
  R`Every term but $4x^3$ has a factor of $h$.`),
Q('P12.2-15', 5, R`$f(x) = 2x^3 + x^2$.

**(a)** Show that $f(x + h) - f(x) = 6x^2h + 6xh^2 + 2h^3 + 2xh + h^2$. [[3]]

**(b)** Hence find $f'(x)$ from first principles. [[2]]

**(c)** Find the gradient of $y = f(x)$ at $x = -1$. [[1]]

**(d)** Find the values of $x$ where the gradient is $0$. [[2]]`,
  [R`$2(x + h)^3 = 2x^3 + 6x^2h + 6xh^2 + 2h^3$.`, R`$(x + h)^2 = x^2 + 2xh + h^2$.`],
  [R`(a)|M1|Expands $2(x + h)^3$`, R`(a)|M1|Expands $(x + h)^2$`, R`(a)|A1|Subtracts to the given form`, R`(b)|M1|Divides by $h$`, R`(b)|A1|$6x^2 + 2x$ as $h \to 0$`, R`(c)|B1|$4$`, R`(d)|M1|$2x(3x + 1) = 0$`, R`(d)|A1|$x = 0$ or $-\frac13$`],
  R`(b) $6x^2 + 2x$ (c) $4$ (d) $0$, $-\frac13$`,
  R`(b) $\frac{f(x + h) - f(x)}{h} = 6x^2 + 6xh + 2h^2 + 2x + h \to 6x^2 + 2x$.

(c) $6 - 2 = 4$.`)
]};

CONTENT['P12.3'] = {
notes: R`
### The power rule
$$y = x^n \implies \frac{dy}{dx} = nx^{n - 1}$$
It works for **any** real power $n$: positive, negative or fractional. Multiply by the power, then reduce the power by $1$.

### Rewrite first
- $\sqrt{x} = x^{\frac12}$, $\sqrt[3]{x} = x^{\frac13}$
- $\dfrac{1}{x^3} = x^{-3}$, $\dfrac{1}{\sqrt{x}} = x^{-\frac12}$
- $x\sqrt{x} = x^{\frac32}$

::: booklet
**Not in the formula booklet:** the power rule.
:::

### Worked example 1
Differentiate **(a)** $x^5$ **(b)** $\sqrt{x}$.
- (a) $5x^4$. (b) $x^{\frac12} \to \frac12 x^{-\frac12} = \frac{1}{2\sqrt{x}}$.

### Worked example 2: negative powers
Differentiate $\dfrac{1}{x^3}$.
- $x^{-3} \to -3x^{-4} = -\dfrac{3}{x^4}$.

**The trap:** reducing $-3$ by $1$ and getting $-2$. One less than $-3$ is $-4$.

### Watch out
- Write roots and fractions as powers of $x$ **before** differentiating.
`,
questions: [
Q('P12.3-1', 1, R`Differentiate $y = x^6$. [[1]]`,
  [R`Bring the power down.`, R`Reduce the power by $1$.`],
  [R`|B1|$6x^5$`], R`$6x^5$`,
  R`$\frac{dy}{dx} = 6x^{6 - 1} = 6x^5$.`),
Q('P12.3-2', 1, R`Differentiate $y = x^{-2}$. [[1]]`,
  [R`$n = -2$.`, R`$-2 - 1 = -3$.`],
  [R`|B1|$-2x^{-3}$`], R`$-2x^{-3}$`,
  R`$\frac{dy}{dx} = -2x^{-3} = -\frac{2}{x^3}$.`),
Q('P12.3-3', 1, R`Differentiate $y = x^{\frac12}$. [[1]]`,
  [R`$n = \frac12$.`, R`$\frac12 - 1 = -\frac12$.`],
  [R`|B1|$\frac12 x^{-\frac12}$`], R`$\frac12 x^{-\frac12}$`,
  R`$\frac{dy}{dx} = \frac12 x^{-\frac12} = \frac{1}{2\sqrt x}$.`),
Q('P12.3-4', 2, R`Differentiate $y = \dfrac{1}{x^4}$. [[2]]`,
  [R`Rewrite as $x^{-4}$.`, R`$-4 - 1 = -5$.`],
  [R`|M1|$x^{-4}$`, R`|A1|$-4x^{-5}$`], R`$-4x^{-5}$`,
  R`$\frac{dy}{dx} = -4x^{-5} = -\frac{4}{x^5}$.`),
Q('P12.3-5', 2, R`Differentiate $y = \sqrt[3]{x}$. [[2]]`,
  [R`$x^{\frac13}$.`, R`$\frac13 - 1 = -\frac23$.`],
  [R`|M1|$x^{\frac13}$`, R`|A1|$\frac13 x^{-\frac23}$`], R`$\frac13 x^{-\frac23}$`,
  R`$\frac{dy}{dx} = \frac13 x^{-\frac23}$.`),
Q('P12.3-6', 2, R`Differentiate $y = x\sqrt{x}$. [[2]]`,
  [R`$x \times x^{\frac12} = x^{\frac32}$.`, R`$\frac32 - 1 = \frac12$.`],
  [R`|M1|$x^{\frac32}$`, R`|A1|$\frac32 x^{\frac12}$`], R`$\frac32 x^{\frac12}$`,
  R`$\frac{dy}{dx} = \frac32\sqrt{x}$.`),
Q('P12.3-7', 2, R`Differentiate $y = \dfrac{1}{\sqrt x}$. [[2]]`,
  [R`$x^{-\frac12}$.`, R`$-\frac12 - 1 = -\frac32$.`],
  [R`|M1|$x^{-\frac12}$`, R`|A1|$-\frac12 x^{-\frac32}$`], R`$-\frac12 x^{-\frac32}$`,
  R`$\frac{dy}{dx} = -\frac{1}{2x\sqrt x}$.`),
Q('P12.3-8', 3, R`Differentiate $y = \dfrac{x^3}{\sqrt[3]{x}}$. [[2]]`,
  [R`$x^3 \div x^{\frac13} = x^{\frac83}$.`, R`$\frac83 - 1 = \frac53$.`],
  [R`|M1|$x^{\frac83}$`, R`|A1|$\frac83 x^{\frac53}$`], R`$\frac83 x^{\frac53}$`,
  R`Subtract the powers to simplify, then differentiate.`),
Q('P12.3-9', 3, R`Find the gradient of $y = \sqrt x$ at $x = 4$. [[2]]`,
  [R`$\frac{dy}{dx} = \frac12 x^{-\frac12}$.`, R`$4^{-\frac12} = \frac12$.`],
  [R`|M1|$\frac12 x^{-\frac12}$`, R`|A1|$\frac14$`], R`$\frac14$`,
  R`$\frac12 \times \frac12 = \frac14$.`),
Q('P12.3-10', 3, R`Find the gradient of $y = \dfrac{1}{x^2}$ at $x = 2$. [[2]]`,
  [R`$\frac{dy}{dx} = -2x^{-3}$.`, R`$2^{-3} = \frac18$.`],
  [R`|M1|$-2x^{-3}$`, R`|A1|$-\frac14$`], R`$-\frac14$`,
  R`$-2 \times \frac18 = -\frac14$.`),
Q('P12.3-11', 3, R`Find the point on $y = x^{\frac32}$ where the gradient is $6$. [[3]]`,
  [R`$\frac32 x^{\frac12} = 6$.`, R`$\sqrt x = 4$.`],
  [R`|M1|$\frac32 x^{\frac12} = 6$`, R`|A1|$x = 16$`, R`|A1|$(16, 64)$`], R`$(16, 64)$`,
  R`$16^{\frac32} = 4^3 = 64$.`),
Q('P12.3-12', 4, R`Find the points on $y = \dfrac1x$ where the gradient is $-4$. [[3]]`,
  [R`$-x^{-2} = -4$.`, R`$x^2 = \frac14$.`],
  [R`|M1|$-\frac{1}{x^2} = -4$`, R`|A1|$x = \pm\frac12$`, R`|A1|$\left(\frac12, 2\right)$ and $\left(-\frac12, -2\right)$`], R`$\left(\frac12, 2\right)$, $\left(-\frac12, -2\right)$`,
  R`Two points, one on each branch.`),
Q('P12.3-13', 4, R`Find the gradient of $y = x^{-\frac12}$ at $x = \frac14$. [[3]]`,
  [R`$\frac{dy}{dx} = -\frac12 x^{-\frac32}$.`, R`$\left(\frac14\right)^{-\frac32} = 4^{\frac32} = 8$.`],
  [R`|M1|$-\frac12 x^{-\frac32}$`, R`|M1|$\left(\frac14\right)^{-\frac32} = 8$`, R`|A1|$-4$`], R`$-4$`,
  R`$-\frac12 \times 8 = -4$.`),
Q('P12.3-14', 4, R`The curve $y = x^n$, where $n$ is a positive integer, has gradient $32$ at $x = 2$. Find $n$. [[3]]`,
  [R`$n \times 2^{n - 1} = 32$.`, R`Try values of $n$.`],
  [R`|M1|$n \cdot 2^{n - 1} = 32$`, R`|M1|Tests values`, R`|A1|$n = 4$`], R`$n = 4$`,
  R`$n = 3$: $12$; $n = 4$: $4 \times 8 = 32$; $n = 5$: $80$. The left side increases with $n$, so $n = 4$ is the only answer.`),
Q('P12.3-15', 5, R`The curve $C$ has equation $y = x^{\frac23}$.

**(a)** Find $\dfrac{dy}{dx}$. [[1]]

**(b)** Find the gradient of $C$ at $x = 8$. [[1]]

**(c)** Find the equation of the tangent to $C$ at $(8, 4)$. [[3]]

**(d)** Find the point on $C$ where the gradient is $\frac16$. [[3]]`,
  [R`$\frac23 x^{-\frac13}$.`, R`$8^{-\frac13} = \frac12$.`],
  [R`(a)|B1|$\frac23 x^{-\frac13}$`, R`(b)|B1|$\frac13$`, R`(c)|M1|$y - 4 = \frac13(x - 8)$`, R`(c)|M1|Expands`, R`(c)|A1|$y = \frac13 x + \frac43$`, R`(d)|M1|$\frac23 x^{-\frac13} = \frac16$`, R`(d)|M1|$x^{-\frac13} = \frac14$`, R`(d)|A1|$(64, 16)$`],
  R`(a) $\frac23 x^{-\frac13}$ (b) $\frac13$ (c) $y = \frac13 x + \frac43$ (d) $(64, 16)$`,
  R`(d) $x^{\frac13} = 4$, so $x = 64$ and $y = 64^{\frac23} = 16$.`)
]};

CONTENT['P12.4'] = {
notes: R`
### Differentiating a quadratic
$$y = ax^2 + bx + c \implies \frac{dy}{dx} = 2ax + b$$
- A constant differentiates to $0$.
- $bx$ differentiates to $b$.
- The vertex of a parabola is where $\frac{dy}{dx} = 0$.

::: booklet
**Not in the formula booklet:** this rule.
:::

### Worked example 1
Find the gradient of $y = x^2 - 6x + 5$ at $x = 1$.
- $\frac{dy}{dx} = 2x - 6$; at $x = 1$ it's $-4$.

### Worked example 2: expand first
Differentiate $y = (2x - 1)^2$.
- $y = 4x^2 - 4x + 1$, so $\frac{dy}{dx} = 8x - 4$.

**The trap:** writing $2(2x - 1)$ by treating the bracket like $x^2$. Expand first; the power rule only applies to a plain power of $x$.

### Watch out
- To find where the gradient has a given value, set $\frac{dy}{dx}$ equal to it and solve, then find $y$ from the **curve**.
`,
questions: [
Q('P12.4-1', 1, R`Differentiate $y = x^2 + 4x$. [[1]]`,
  [R`Each term separately.`, R`$x^2 \to 2x$, $4x \to 4$.`],
  [R`|B1|$2x + 4$`], R`$2x + 4$`,
  R`$\frac{dy}{dx} = 2x + 4$.`),
Q('P12.4-2', 1, R`Differentiate $y = 3x^2 - 5x + 2$. [[1]]`,
  [R`$2ax + b$.`, R`The constant goes.`],
  [R`|B1|$6x - 5$`], R`$6x - 5$`,
  R`$\frac{dy}{dx} = 6x - 5$; the $+2$ becomes $0$.`),
Q('P12.4-3', 1, R`Differentiate $y = 7 - 2x^2$. [[1]]`,
  [R`$7 \to 0$.`, R`$-2x^2 \to -4x$.`],
  [R`|B1|$-4x$`], R`$-4x$`,
  R`$\frac{dy}{dx} = -4x$.`),
Q('P12.4-4', 2, R`Find the gradient of $y = x^2 - 6x + 5$ at $x = 1$. [[2]]`,
  [R`$\frac{dy}{dx} = 2x - 6$.`, R`Substitute $x = 1$.`],
  [R`|M1|$2x - 6$`, R`|A1|$-4$`], R`$-4$`,
  R`$\frac{dy}{dx} = 2x - 6$, so at $x = 1$ the gradient is $2 - 6 = -4$.`),
Q('P12.4-5', 2, R`Find the point on $y = x^2 - 4x + 1$ where the gradient is zero. [[2]]`,
  [R`$2x - 4 = 0$.`, R`Then find $y$.`],
  [R`|M1|$2x - 4 = 0$`, R`|A1|$(2, -3)$`], R`$(2, -3)$`,
  R`$x = 2$, $y = 4 - 8 + 1 = -3$: the vertex.`),
Q('P12.4-6', 2, R`Differentiate $y = (x + 3)(x - 1)$. [[2]]`,
  [R`Expand first.`, R`$x^2 + 2x - 3$.`],
  [R`|M1|$x^2 + 2x - 3$`, R`|A1|$2x + 2$`], R`$2x + 2$`,
  R`$\frac{dy}{dx} = 2x + 2$.`),
Q('P12.4-7', 2, R`Differentiate $y = (2x - 1)^2$. [[2]]`,
  [R`$(2x - 1)^2 = 4x^2 - 4x + 1$.`, R`Then differentiate.`],
  [R`|M1|Expands`, R`|A1|$8x - 4$`], R`$8x - 4$`,
  R`$\frac{dy}{dx} = 8x - 4$.`),
Q('P12.4-8', 3, R`Find the coordinates of the point on $y = 2x^2 - 3x + 1$ where the gradient is $5$. [[3]]`,
  [R`$4x - 3 = 5$.`, R`$x = 2$.`],
  [R`|M1|$4x - 3 = 5$`, R`|A1|$x = 2$`, R`|A1|$(2, 3)$`], R`$(2, 3)$`,
  R`$y = 8 - 6 + 1 = 3$.`),
Q('P12.4-9', 3, R`The curve $y = ax^2 + 3x$ has gradient $11$ at $x = 2$. Find $a$. [[2]]`,
  [R`$\frac{dy}{dx} = 2ax + 3$.`, R`$4a + 3 = 11$.`],
  [R`|M1|$4a + 3 = 11$`, R`|A1|$a = 2$`], R`$a = 2$`,
  R`$\frac{dy}{dx} = 2ax + 3$, so at $x = 2$: $4a + 3 = 11$.`),
Q('P12.4-10', 3, R`The curve $y = x^2 + bx + c$ passes through $(1, 4)$, where its gradient is $6$. Find $b$ and $c$. [[3]]`,
  [R`$2 + b = 6$.`, R`$1 + b + c = 4$.`],
  [R`|M1|$2(1) + b = 6$`, R`|A1|$b = 4$`, R`|A1|$c = -1$`], R`$b = 4$, $c = -1$`,
  R`$1 + 4 + c = 4$ gives $c = -1$.`),
Q('P12.4-11', 3, R`Use differentiation to find the maximum point of $y = 5 + 4x - x^2$. [[3]]`,
  [R`$4 - 2x = 0$.`, R`It's a $\cap$ shape, so this is a maximum.`],
  [R`|M1|$4 - 2x = 0$`, R`|A1|$x = 2$`, R`|A1|$(2, 9)$`], R`$(2, 9)$`,
  R`$y = 5 + 8 - 4 = 9$.`),
Q('P12.4-12', 4, R`Find the value of $x$ at which $y = x^2$ and $y = 6x - x^2$ have the same gradient. [[3]]`,
  [R`$2x = 6 - 2x$.`, R`Solve.`],
  [R`|M1|Both derivatives`, R`|M1|$2x = 6 - 2x$`, R`|A1|$x = \frac32$`], R`$x = \frac32$`,
  R`The gradients are $2x$ and $6 - 2x$. Setting them equal: $4x = 6$, so $x = \frac32$.`),
Q('P12.4-13', 4, R`Find the point on $y = (3 - x)(x + 5)$ where the gradient is $-4$. [[3]]`,
  [R`$y = -x^2 - 2x + 15$.`, R`$-2x - 2 = -4$.`],
  [R`|M1|Expands`, R`|M1|$-2x - 2 = -4$`, R`|A1|$(1, 12)$`], R`$(1, 12)$`,
  R`$x = 1$, $y = 2 \times 6 = 12$.`),
Q('P12.4-14', 4, R`The curve $y = px^2 + qx$ has gradient $1$ at $x = 1$ and gradient $-7$ at $x = -1$. Find $p$ and $q$. [[3]]`,
  [R`$\frac{dy}{dx} = 2px + q$.`, R`$2p + q = 1$ and $-2p + q = -7$.`],
  [R`|M1|Two equations`, R`|A1|$q = -3$`, R`|A1|$p = 2$`], R`$p = 2$, $q = -3$`,
  R`$\frac{dy}{dx} = 2px + q$, so $2p + q = 1$ and $-2p + q = -7$. Adding: $2q = -6$, $q = -3$, then $p = 2$.`),
Q('P12.4-15', 5, R`The curve $C$ has equation $y = x^2 - 5x + 6$.

**(a)** Find $\dfrac{dy}{dx}$. [[1]]

**(b)** Find the gradient of $C$ at each point where it crosses the $x$-axis. [[3]]

**(c)** Show that the tangents at these points are perpendicular. [[1]]

**(d)** Find the point where these tangents meet. [[3]]`,
  [R`$C$ crosses the axis at $x = 2$ and $x = 3$.`, R`Tangents: through $(2, 0)$ and $(3, 0)$.`],
  [R`(a)|B1|$2x - 5$`, R`(b)|M1|$(x - 2)(x - 3) = 0$`, R`(b)|A1|$-1$ at $x = 2$`, R`(b)|A1|$1$ at $x = 3$`, R`(c)|B1|$(-1)(1) = -1$`, R`(d)|M1|$y = -(x - 2)$ and $y = x - 3$`, R`(d)|M1|Solves`, R`(d)|A1|$\left(\frac52, -\frac12\right)$`],
  R`(a) $2x - 5$ (b) $-1$, $1$ (d) $\left(\frac52, -\frac12\right)$`,
  R`(d) $-x + 2 = x - 3$ gives $x = \frac52$, $y = -\frac12$, directly below the vertex.`)
]};

CONTENT['P12.5'] = {
notes: R`
### Term by term
Differentiate each term separately:
$$\frac{d}{dx}\left(f(x) \pm g(x)\right) = f'(x) \pm g'(x), \qquad \frac{d}{dx}\left(kf(x)\right) = kf'(x)$$

### Simplify first
- Expand brackets.
- Split fractions with a single-term denominator: $\frac{x^2 + 3}{x} = x + 3x^{-1}$.
- Write roots as powers.

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
Differentiate $y = 4x^3 - 3x + \dfrac2x$.
$$\frac{dy}{dx} = 12x^2 - 3 - 2x^{-2}$$

### Worked example 2: split the fraction
Differentiate $y = \dfrac{x^2 + 3}{\sqrt x}$.
1. $y = \frac{x^2}{x^{1/2}} + \frac{3}{x^{1/2}} = x^{\frac32} + 3x^{-\frac12}$.
2. $\frac{dy}{dx} = \frac32 x^{\frac12} - \frac32 x^{-\frac32}$.

**The trap:** differentiating the top and bottom separately: $\frac{2x}{\frac12 x^{-1/2}}$ is wrong. Rewrite as a sum of powers first.

### Watch out
- $\frac{a}{x^n} = ax^{-n}$: the constant stays on top.
`,
questions: [
Q('P12.5-1', 1, R`Differentiate $y = x^3 + 2x^2 - 5$. [[1]]`,
  [R`Each term separately.`, R`$-5 \to 0$.`],
  [R`|B1|$3x^2 + 4x$`], R`$3x^2 + 4x$`,
  R`$\frac{dy}{dx} = 3x^2 + 4x$.`),
Q('P12.5-2', 1, R`Differentiate $y = 2x^4 - 3x + 7$. [[1]]`,
  [R`$2x^4 \to 8x^3$.`, R`$-3x \to -3$.`],
  [R`|B1|$8x^3 - 3$`], R`$8x^3 - 3$`,
  R`$\frac{dy}{dx} = 8x^3 - 3$.`),
Q('P12.5-3', 1, R`Differentiate $f(x) = x^2 + \dfrac1x$. [[2]]`,
  [R`$\frac1x = x^{-1}$.`, R`$x^{-1} \to -x^{-2}$.`],
  [R`|M1|$x^{-1}$`, R`|A1|$2x - x^{-2}$`], R`$2x - \frac{1}{x^2}$`,
  R`$f'(x) = 2x - x^{-2}$.`),
Q('P12.5-4', 2, R`Differentiate $y = 4x^3 - 3x + \dfrac{2}{x}$. [[2]]`,
  [R`$\frac2x = 2x^{-1}$.`, R`$2x^{-1} \to -2x^{-2}$.`],
  [R`|M1|Powers of $x$`, R`|A1|$12x^2 - 3 - 2x^{-2}$`], R`$12x^2 - 3 - \frac{2}{x^2}$`,
  R`Write $\frac2x = 2x^{-1}$, then differentiate term by term: $\frac{dy}{dx} = 12x^2 - 3 - 2x^{-2}$.`),
Q('P12.5-5', 2, R`Differentiate $y = 6\sqrt x + x$. [[2]]`,
  [R`$6x^{\frac12}$.`, R`$6 \times \frac12 = 3$.`],
  [R`|M1|$6x^{\frac12}$`, R`|A1|$3x^{-\frac12} + 1$`], R`$\frac{3}{\sqrt x} + 1$`,
  R`$\frac{dy}{dx} = 3x^{-\frac12} + 1$.`),
Q('P12.5-6', 2, R`Differentiate $y = x(x^2 - 4)$. [[2]]`,
  [R`Expand: $x^3 - 4x$.`, R`Then differentiate.`],
  [R`|M1|$x^3 - 4x$`, R`|A1|$3x^2 - 4$`], R`$3x^2 - 4$`,
  R`$\frac{dy}{dx} = 3x^2 - 4$.`),
Q('P12.5-7', 2, R`Differentiate $y = \dfrac{x^2 + 3}{x}$. [[2]]`,
  [R`$x + 3x^{-1}$.`, R`$3x^{-1} \to -3x^{-2}$.`],
  [R`|M1|$x + 3x^{-1}$`, R`|A1|$1 - 3x^{-2}$`], R`$1 - \frac{3}{x^2}$`,
  R`Split the fraction first.`),
Q('P12.5-8', 3, R`Differentiate $y = \dfrac{x^2 + 3}{\sqrt x}$. [[3]]`,
  [R`$x^{\frac32} + 3x^{-\frac12}$.`, R`Differentiate each power.`],
  [R`|M1|Splits the fraction`, R`|M1|$x^{\frac32} + 3x^{-\frac12}$`, R`|A1|$\frac32 x^{\frac12} - \frac32 x^{-\frac32}$`], R`$\frac32 x^{\frac12} - \frac32 x^{-\frac32}$`,
  R`$3 \times \left(-\frac12\right) = -\frac32$.`),
Q('P12.5-9', 3, R`Differentiate $f(x) = \dfrac{(2x + 1)(x - 3)}{x}$. [[3]]`,
  [R`Expand: $\frac{2x^2 - 5x - 3}{x}$.`, R`$2x - 5 - 3x^{-1}$.`],
  [R`|M1|Expands the numerator`, R`|M1|$2x - 5 - 3x^{-1}$`, R`|A1|$2 + 3x^{-2}$`], R`$2 + \frac{3}{x^2}$`,
  R`$-3x^{-1} \to 3x^{-2}$.`),
Q('P12.5-10', 3, R`Find the gradient of $y = x^3 - 12x$ at $x = 3$. [[2]]`,
  [R`$3x^2 - 12$.`, R`Substitute $x = 3$.`],
  [R`|M1|$3x^2 - 12$`, R`|A1|$15$`], R`$15$`,
  R`$\frac{dy}{dx} = 3x^2 - 12$; at $x = 3$ this is $27 - 12 = 15$.`),
Q('P12.5-11', 3, R`Find the gradient of $y = 3\sqrt x - \dfrac{4}{\sqrt x}$ at $x = 4$. [[3]]`,
  [R`$3x^{\frac12} - 4x^{-\frac12}$.`, R`$\frac32 x^{-\frac12} + 2x^{-\frac32}$.`],
  [R`|M1|Powers of $x$`, R`|A1|$\frac32 x^{-\frac12} + 2x^{-\frac32}$`, R`|A1|$1$`], R`$1$`,
  R`At $x = 4$: $\frac32 \times \frac12 + 2 \times \frac18 = \frac34 + \frac14 = 1$.`),
Q('P12.5-12', 4, R`$f(x) = (x - 2)^2(x + 1)$.

**(a)** Find $f'(x)$. [[3]]

**(b)** Solve $f'(x) = 0$. [[1]]`,
  [R`Expand: $(x^2 - 4x + 4)(x + 1) = x^3 - 3x^2 + 4$.`, R`$3x^2 - 6x = 3x(x - 2)$.`],
  [R`(a)|M1|Expands`, R`(a)|A1|$x^3 - 3x^2 + 4$`, R`(a)|A1|$3x^2 - 6x$`, R`(b)|B1|$x = 0$ or $2$`], R`(a) $3x^2 - 6x$ (b) $0$, $2$`,
  R`The $x$ terms cancel: $-4x + 4x = 0$.`),
Q('P12.5-13', 4, R`Find the gradient of $y = (1 + \sqrt x)^2$ at $x = 9$. [[3]]`,
  [R`$1 + 2\sqrt x + x$.`, R`$\frac{dy}{dx} = x^{-\frac12} + 1$.`],
  [R`|M1|Expands`, R`|A1|$x^{-\frac12} + 1$`, R`|A1|$\frac43$`], R`$\frac43$`,
  R`$\frac13 + 1 = \frac43$.`),
Q('P12.5-14', 4, R`$f(x) = ax^3 + bx$. Given that $f'(1) = 7$ and $f'(2) = 34$, find $a$ and $b$. [[3]]`,
  [R`$f'(x) = 3ax^2 + b$.`, R`$3a + b = 7$ and $12a + b = 34$.`],
  [R`|M1|Two equations`, R`|A1|$a = 3$`, R`|A1|$b = -2$`], R`$a = 3$, $b = -2$`,
  R`Subtracting: $9a = 27$.`),
Q('P12.5-15', 5, R`$f(x) = \dfrac{3x - 2\sqrt x}{x^2}$, $x > 0$.

**(a)** Write $f(x)$ in the form $px^a + qx^b$. [[2]]

**(b)** Find $f'(x)$. [[2]]

**(c)** Find $f'(4)$. [[2]]

**(d)** Solve $f'(x) = 0$. [[2]]`,
  [R`$\frac{3x}{x^2} = 3x^{-1}$ and $\frac{2x^{1/2}}{x^2} = 2x^{-\frac32}$.`, R`$f'(x) = -3x^{-2} + 3x^{-\frac52}$.`],
  [R`(a)|M1|Splits the fraction`, R`(a)|A1|$3x^{-1} - 2x^{-\frac32}$`, R`(b)|M1|Power rule`, R`(b)|A1|$-3x^{-2} + 3x^{-\frac52}$`, R`(c)|M1|Substitutes`, R`(c)|A1|$-\frac{3}{32}$`, R`(d)|M1|$3x^{-\frac52} = 3x^{-2}$`, R`(d)|A1|$x = 1$`],
  R`(a) $3x^{-1} - 2x^{-\frac32}$ (b) $-3x^{-2} + 3x^{-\frac52}$ (c) $-\frac{3}{32}$ (d) $x = 1$`,
  R`(c) $-\frac{3}{16} + \frac{3}{32} = -\frac{3}{32}$.

(d) Multiply by $x^{5/2}$: $3 = 3x^{1/2}$, so $x = 1$.`)
]};

CONTENT['P12.6'] = {
notes: R`
### Tangents and normals
At the point $(x_1, y_1)$ on a curve:
1. Find $\frac{dy}{dx}$ and substitute $x_1$: the **tangent** gradient $m$.
2. Tangent: $y - y_1 = m(x - x_1)$.
3. The **normal** is perpendicular to the tangent: gradient $-\frac1m$.

[[fig:P12.6-tn]]

::: booklet
**Not in the formula booklet:** these steps.
:::

### Worked example 1
Find the tangent to $y = x^3 - 2x$ at $(2, 4)$.
- $\frac{dy}{dx} = 3x^2 - 2 = 10$ at $x = 2$. Tangent: $y - 4 = 10(x - 2)$, i.e. $y = 10x - 16$.

### Worked example 2: the normal
Find the normal to $y = x^2 - 4x + 5$ at $(3, 2)$.
1. $\frac{dy}{dx} = 2x - 4 = 2$ at $x = 3$.
2. Normal gradient $-\frac12$: $y - 2 = -\frac12(x - 3)$, so $x + 2y - 7 = 0$.

**The trap:** using the derivative $2x - 4$ itself (instead of its **value**, $2$) as the gradient, or forgetting to flip **and** change the sign for the normal.

### Watch out
- If you're only given $x$, find $y$ from the curve's equation first.
`,
questions: [
Q('P12.6-1', 1, R`Find the gradient of $y = x^2$ at the point $(3, 9)$. [[1]]`,
  [R`$\frac{dy}{dx} = 2x$.`, R`Substitute $x = 3$.`],
  [R`|B1|$6$`], R`$6$`,
  R`$\frac{dy}{dx} = 2x$, so at $x = 3$ the gradient is $6$.`),
Q('P12.6-2', 1, R`Find the equation of the tangent to $y = x^2$ at $(3, 9)$. [[2]]`,
  [R`Gradient $6$.`, R`$y - 9 = 6(x - 3)$.`],
  [R`|M1|$y - 9 = 6(x - 3)$`, R`|A1|$y = 6x - 9$`], R`$y = 6x - 9$`,
  R`The gradient at $(3, 9)$ is $6$, so $y - 9 = 6(x - 3)$, giving $y = 6x - 9$.`),
Q('P12.6-3', 1, R`The tangent to a curve at a point has gradient $4$. Write down the gradient of the normal there. [[1]]`,
  [R`Perpendicular gradients multiply to $-1$.`, R`Flip and change the sign.`],
  [R`|B1|$-\frac14$`], R`$-\frac14$`,
  R`$4 \times \left(-\frac14\right) = -1$.`),
Q('P12.6-4', 2, R`Find the equation of the tangent to $y = x^3 - 2x$ at $(2, 4)$. [[3]]`,
  [R`$\frac{dy}{dx} = 3x^2 - 2$.`, R`At $x = 2$: $10$.`],
  [R`|M1|$3x^2 - 2$`, R`|A1|Gradient $10$`, R`|A1|$y = 10x - 16$`], R`$y = 10x - 16$`,
  R`$y - 4 = 10(x - 2)$.`),
Q('P12.6-5', 2, R`Find the equation of the normal to $y = x^2 - 4x + 5$ at $(3, 2)$, in the form $ax + by + c = 0$. [[3]]`,
  [R`Tangent gradient $2$.`, R`Normal gradient $-\frac12$.`],
  [R`|M1|Tangent gradient $2$`, R`|M1|$y - 2 = -\frac12(x - 3)$`, R`|A1|$x + 2y - 7 = 0$`], R`$x + 2y - 7 = 0$`,
  R`$\frac{dy}{dx} = 2x - 4 = 2$ at $x = 3$, so the normal has gradient $-\frac12$: $y - 2 = -\frac12(x - 3)$, i.e. $2y - 4 = -x + 3$, so $x + 2y - 7 = 0$.`, { solFig: FIGS['P12.6-tn'] }),
Q('P12.6-6', 2, R`Find the equation of the tangent to $y = \dfrac1x$ at $(1, 1)$. [[3]]`,
  [R`$\frac{dy}{dx} = -x^{-2}$.`, R`Gradient $-1$ at $x = 1$.`],
  [R`|M1|$-x^{-2}$`, R`|A1|$-1$`, R`|A1|$y = -x + 2$`], R`$y = -x + 2$`,
  R`$\frac{dy}{dx} = -\frac{1}{x^2} = -1$ at $x = 1$, so $y - 1 = -(x - 1)$, i.e. $y = -x + 2$.`),
Q('P12.6-7', 2, R`Find the equation of the tangent to $y = \sqrt x$ at $(4, 2)$. [[3]]`,
  [R`$\frac12 x^{-\frac12}$.`, R`At $x = 4$: $\frac14$.`],
  [R`|M1|$\frac12 x^{-\frac12}$`, R`|A1|$\frac14$`, R`|A1|$y = \frac14 x + 1$`], R`$y = \frac14 x + 1$`,
  R`$y - 2 = \frac14(x - 4)$.`),
Q('P12.6-8', 3, R`Find the equation of the normal to $y = 2x^2 - 3x$ at the point where $x = 1$. [[3]]`,
  [R`At $x = 1$, $y = -1$.`, R`Tangent gradient $4x - 3 = 1$.`],
  [R`|B1|$(1, -1)$`, R`|M1|Normal gradient $-1$`, R`|A1|$y = -x$`], R`$y = -x$`,
  R`$y + 1 = -(x - 1)$, so $y = -x$.`),
Q('P12.6-9', 3, R`The tangent to $y = x^3$ at $x = 1$ meets the curve again at $P$. Find $P$. [[4]]`,
  [R`Tangent: $y = 3x - 2$.`, R`$x^3 - 3x + 2 = (x - 1)^2(x + 2)$.`],
  [R`|M1|Tangent $y = 3x - 2$`, R`|M1|$x^3 = 3x - 2$`, R`|M1|$(x - 1)^2(x + 2) = 0$`, R`|A1|$P(-2, -8)$`], R`$(-2, -8)$`,
  R`The double root at $x = 1$ is the point of contact; the other root is $x = -2$.`),
Q('P12.6-10', 3, R`Find the points on $y = x^3 - 3x$ where the tangent is parallel to $y = 9x$. [[3]]`,
  [R`$3x^2 - 3 = 9$.`, R`$x^2 = 4$.`],
  [R`|M1|$3x^2 - 3 = 9$`, R`|A1|$x = \pm2$`, R`|A1|$(2, 2)$ and $(-2, -2)$`], R`$(2, 2)$, $(-2, -2)$`,
  R`$y(2) = 8 - 6 = 2$; $y(-2) = -2$.`),
Q('P12.6-11', 3, R`The normal to $y = x^2$ at $(1, 1)$ meets the curve again at $Q$. Find $Q$. [[4]]`,
  [R`Normal gradient $-\frac12$: $y = -\frac12 x + \frac32$.`, R`$2x^2 + x - 3 = 0$.`],
  [R`|M1|Normal equation`, R`|M1|$x^2 = -\frac12 x + \frac32$`, R`|M1|$(2x + 3)(x - 1) = 0$`, R`|A1|$Q\left(-\frac32, \frac94\right)$`], R`$\left(-\frac32, \frac94\right)$`,
  R`$x = -\frac32$, $y = \frac94$.`),
Q('P12.6-12', 4, R`The tangent to $y = \dfrac4x$ at $(2, 2)$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$. [[4]]`,
  [R`$\frac{dy}{dx} = -4x^{-2} = -1$ at $x = 2$.`, R`Tangent $y = -x + 4$.`],
  [R`|M1|Gradient $-1$`, R`|A1|$y = -x + 4$`, R`|A1|$A(4, 0)$, $B(0, 4)$`, R`|A1|$8$`], R`$8$`,
  R`$\frac12 \times 4 \times 4 = 8$.`),
Q('P12.6-13', 4, R`The line $y = 4x - 5$ is a tangent to the curve $y = x^2 + c$. Find $c$ and the point of contact. [[3]]`,
  [R`At the point of contact the gradients match: $2x = 4$.`, R`Then the $y$-values match.`],
  [R`|M1|$2x = 4$`, R`|A1|$(2, 3)$`, R`|A1|$c = -1$`], R`$c = -1$; $(2, 3)$`,
  R`At $x = 2$ the line gives $y = 3$, so $4 + c = 3$.`),
Q('P12.6-14', 4, R`Find where the normal to $y = x^3 - 4x$ at the point where $x = 1$ crosses the $x$-axis. [[3]]`,
  [R`$(1, -3)$; gradient $3x^2 - 4 = -1$.`, R`Normal gradient $1$.`],
  [R`|M1|Tangent gradient $-1$`, R`|A1|Normal $y = x - 4$`, R`|A1|$(4, 0)$`], R`$(4, 0)$`,
  R`At $x = 1$, $y = 1 - 4 = -3$ and $\frac{dy}{dx} = 3 - 4 = -1$, so the normal has gradient $1$: $y + 3 = x - 1$, i.e. $y = x - 4$, which meets the $x$-axis at $(4, 0)$.`),
Q('P12.6-15', 5, R`The curve $C$ has equation $y = x^2 - 2x + 3$, and $P(2, 3)$ lies on $C$.

**(a)** Find the equation of the tangent to $C$ at $P$. [[3]]

**(b)** Find the equation of the normal to $C$ at $P$. [[2]]

**(c)** Find the area of the triangle formed by the tangent, the normal and the $y$-axis. [[3]]`,
  [R`$\frac{dy}{dx} = 2x - 2 = 2$ at $P$.`, R`Each line meets the $y$-axis at its intercept; the height is the $x$-coordinate of $P$.`],
  [R`(a)|M1|$2x - 2$`, R`(a)|A1|Gradient $2$`, R`(a)|A1|$y = 2x - 1$`, R`(b)|M1|Gradient $-\frac12$`, R`(b)|A1|$y = -\frac12 x + 4$`, R`(c)|M1|Intercepts $-1$ and $4$`, R`(c)|M1|$\frac12 \times 5 \times 2$`, R`(c)|A1|$5$`],
  R`(a) $y = 2x - 1$ (b) $y = -\frac12 x + 4$ (c) $5$`,
  R`(c) The base on the $y$-axis runs from $-1$ to $4$, length $5$; the perpendicular height to $P$ is $2$.`)
]};
