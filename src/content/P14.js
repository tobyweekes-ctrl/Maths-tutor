/* Pure Mathematics Year 1 · Chapter 14 Exponentials and logarithms (sections 14.1 to 14.8) */
BOOK_CHAPTERS.push({ id:'P14', book:'Pure Mathematics Year 1', label:'Chapter 14', title:'Exponentials and logarithms', sections:[
  { id:'P14.1', num:'14.1', title:'Exponential functions' },
  { id:'P14.2', num:'14.2', title:'y = eˣ' },
  { id:'P14.3', num:'14.3', title:'Exponential modelling' },
  { id:'P14.4', num:'14.4', title:'Logarithms' },
  { id:'P14.5', num:'14.5', title:'Laws of logarithms' },
  { id:'P14.6', num:'14.6', title:'Solving equations using logarithms' },
  { id:'P14.7', num:'14.7', title:'Working with natural logarithms' },
  { id:'P14.8', num:'14.8', title:'Logarithms and non-linear data' }
]});
{
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  FIGS['P14.1-graphs'] = Fig.graph({ label: 'y = 2ˣ (growth) and y = (½)ˣ (decay): both pass through (0, 1), both have the x-axis as an asymptote, and each is the reflection of the other in the y-axis',
    x0: -3.2, x1: 3.2, y0: -0.6, y1: 8.5, fns: [{ f: x => 2 ** x, label: 'y = 2ˣ', lx: 3.1, ly: 6.4 }, { f: x => 0.5 ** x, col: 'var(--pen)', label: 'y = (½)ˣ', lx: -1.9, ly: 7.2 }],
    points: [pt(0, 1, '(0, 1)', 26, 4)] });
  FIGS['P14.2-e'] = Fig.graph({ label: 'y = eˣ with its tangent y = x + 1 at (0, 1): the gradient at every point equals the y-value there',
    x0: -3, x1: 2.2, y0: -1, y1: 8, fns: [{ f: Math.exp, label: 'y = eˣ', lx: 2.1, ly: 7.6 }, { f: x => x + 1, col: 'var(--pen)', dash: true, label: 'y = x + 1', lx: 2.2, ly: 2.2 }],
    points: [pt(0, 1, '(0, 1)', -26, -6)] });
  FIGS['P14.3-cool'] = Fig.graph({ label: 'T = 20 + 60e^(−0.05t): starts at 80 °C and falls towards the room temperature of 20 °C (the dashed asymptote)',
    x0: 0, x1: 100, y0: 0, y1: 90, xlab: 't (min)', ylab: 'T (°C)', fns: [{ f: t => 20 + 60 * Math.exp(-0.05 * t) }], hlines: [{ y: 20, label: 'T = 20' }],
    xticks: [[20, '20'], [40, '40'], [60, '60'], [80, '80']], yticks: [[80, '80'], [20, '20']], points: [pt(0, 80, '(0, 80)', 28, 4)] });
  FIGS['P14.8-line'] = Fig.graph({ label: 'Plotting log y against log x for data following y = axⁿ gives a straight line with gradient n = 2.5 and intercept log a = 0.3',
    x0: -0.1, x1: 1.6, y0: -0.2, y1: 4.6, xlab: 'log x', ylab: 'log y', fns: [{ f: X => 0.3 + 2.5 * X, col: 'var(--pen)' }],
    points: [[0.2, 0.82], [0.5, 1.53], [0.8, 2.33], [1.1, 3.04], [1.4, 3.83]].map(([X, Y]) => pt(X, Y)), texts: [{ x: 0.2, y: 0.12, label: 'intercept 0.3', anchor: 'start' }, { x: 1.0, y: 3.9, label: 'gradient 2.5', anchor: 'end' }] });
}

CONTENT['P14.1'] = {
notes: R`
### $y = a^x$
For $a > 0$:
- the graph passes through $(0, 1)$, since $a^0 = 1$
- the $x$-axis is an **asymptote**; $a^x > 0$ for every $x$
- if $a > 1$ it **grows**; if $0 < a < 1$ it **decays**.

$\left(\frac1a\right)^x = a^{-x}$, so $y = \left(\frac12\right)^x$ is the reflection of $y = 2^x$ in the $y$-axis.

[[fig:P14.1-graphs]]

::: booklet
**Not in the formula booklet:** these graphs.
:::

### Worked example 1
The curve $y = ka^x$ passes through $(0, 5)$ and $(2, 45)$. Find $k$ and $a$.
- $x = 0$: $k = 5$. $x = 2$: $5a^2 = 45$, so $a = 3$ (as $a > 0$).

### Worked example 2: transformations
Sketch $y = 2^x + 3$.
- Move $y = 2^x$ up $3$: the asymptote becomes $y = 3$ and the $y$-intercept is $(0, 4)$.

**The trap:** keeping the asymptote at $y = 0$. Translations move asymptotes too.

### Watch out
- To solve $2^x = 2^{3x - 4}$, equate powers of the same base: $x = 3x - 4$.
`,
questions: [
Q('P14.1-1', 1, R`Find the value of $y = 2^x$ when $x = 5$. [[1]]`,
  [R`$2^5$.`, R`$2 \times 2 \times 2 \times 2 \times 2$.`],
  [R`|B1|$32$`], R`$32$`,
  R`$2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$.`),
Q('P14.1-2', 1, R`Write down the coordinates of the point where $y = 5^x$ crosses the $y$-axis. [[1]]`,
  [R`Put $x = 0$.`, R`$5^0 = 1$.`],
  [R`|B1|$(0, 1)$`], R`$(0, 1)$`,
  R`Any positive number to the power $0$ is $1$.`),
Q('P14.1-3', 1, R`Write down the equation of the asymptote of $y = 3^x$. [[1]]`,
  [R`What happens as $x \to -\infty$?`, R`$3^x$ gets close to $0$ but never reaches it.`],
  [R`|B1|$y = 0$`], R`$y = 0$`,
  R`$3^x > 0$ always, and $3^x \to 0$ as $x \to -\infty$.`),
Q('P14.1-4', 2, R`Show that $\left(\frac12\right)^x = 2^{-x}$, and describe how the graph of $y = \left(\frac12\right)^x$ is related to $y = 2^x$. [[2]]`,
  [R`$\frac12 = 2^{-1}$.`, R`$f(-x)$ is a reflection.`],
  [R`|B1|$\left(2^{-1}\right)^x = 2^{-x}$`, R`|B1|Reflection in the $y$-axis`], R`Reflection in the $y$-axis`,
  R`$y = 2^{-x}$ is $y = f(-x)$ with $f(x) = 2^x$.`, { solFig: FIGS['P14.1-graphs'] }),
Q('P14.1-5', 2, R`For $y = 2^x + 3$, state the equation of the asymptote and the $y$-intercept. [[2]]`,
  [R`It's $y = 2^x$ moved up $3$.`, R`$2^0 + 3$.`],
  [R`|B1|$y = 3$`, R`|B1|$(0, 4)$`], R`$y = 3$; $(0, 4)$`,
  R`The asymptote moves from $y = 0$ to $y = 3$.`),
Q('P14.1-6', 2, R`The point $(2, 16)$ lies on $y = a^x$, where $a > 0$. Find $a$. [[2]]`,
  [R`$a^2 = 16$.`, R`$a > 0$.`],
  [R`|M1|$a^2 = 16$`, R`|A1|$a = 4$`], R`$a = 4$`,
  R`$a = \sqrt{16} = 4$ (the negative root is not allowed).`),
Q('P14.1-7', 2, R`Find the $y$-intercept of $y = 3^{x - 1}$, and describe its relationship to $y = 3^x$. [[2]]`,
  [R`$3^{-1}$.`, R`$f(x - 1)$ is a translation.`],
  [R`|B1|$\left(0, \frac13\right)$`, R`|B1|Translation $1$ to the right`], R`$\left(0, \frac13\right)$; translation right $1$`,
  R`$3^{0 - 1} = \frac13$.`),
Q('P14.1-8', 3, R`The curve $y = ka^x$, with $a > 0$, passes through $(0, 5)$ and $(2, 45)$. Find $k$ and $a$. [[3]]`,
  [R`$x = 0$ gives $k$.`, R`$5a^2 = 45$.`],
  [R`|B1|$k = 5$`, R`|M1|$5a^2 = 45$`, R`|A1|$a = 3$`], R`$k = 5$, $a = 3$`,
  R`$a^0 = 1$ so $k = 5$; then $a^2 = 9$.`),
Q('P14.1-9', 3, R`Solve $2^x = 2^{3x - 4}$. [[2]]`,
  [R`Same base, so equal powers.`, R`$x = 3x - 4$.`],
  [R`|M1|$x = 3x - 4$`, R`|A1|$x = 2$`], R`$x = 2$`,
  R`The bases are equal, so the powers are equal: $x = 3x - 4$, giving $2x = 4$ and $x = 2$.`),
Q('P14.1-10', 3, R`Solve $3^{x + 1} = 9^x$. [[3]]`,
  [R`$9 = 3^2$.`, R`$3^{x + 1} = 3^{2x}$.`],
  [R`|M1|$9^x = 3^{2x}$`, R`|M1|$x + 1 = 2x$`, R`|A1|$x = 1$`], R`$x = 1$`,
  R`$9^x = (3^2)^x = 3^{2x}$, so $x + 1 = 2x$ and $x = 1$. Check: $3^2 = 9^1$.`),
Q('P14.1-11', 3, R`Explain why $2^x = 3 - x$ has exactly one real solution. [[2]]`,
  [R`$y = 2^x$ is always increasing.`, R`$y = 3 - x$ is always decreasing.`],
  [R`|B1|One graph increases, the other decreases`, R`|B1|So they cross exactly once`], R`Exactly one crossing`,
  R`At $x = 0$, $2^x < 3 - x$; at $x = 2$, $2^x > 3 - x$; and the gap only grows in one direction.`),
Q('P14.1-12', 4, R`Find the coordinates of the point where $y = 4^x$ meets $y = 2^{x + 3}$. [[3]]`,
  [R`$4^x = 2^{2x}$.`, R`$2x = x + 3$.`],
  [R`|M1|$2^{2x} = 2^{x + 3}$`, R`|A1|$x = 3$`, R`|A1|$(3, 64)$`], R`$(3, 64)$`,
  R`$4^x = 2^{2x}$, so $2x = x + 3$ and $x = 3$; then $y = 4^3 = 64$.`),
Q('P14.1-13', 4, R`$y = a^x$ passes through $(1, 3)$ and $y = b^x$ passes through $(-1, 3)$. Find $a$ and $b$, and describe the geometric relationship between the curves. [[3]]`,
  [R`$a = 3$.`, R`$b^{-1} = 3$.`],
  [R`|B1|$a = 3$`, R`|B1|$b = \frac13$`, R`|B1|Reflections of each other in the $y$-axis`], R`$a = 3$, $b = \frac13$`,
  R`$\left(\frac13\right)^x = 3^{-x}$.`),
Q('P14.1-14', 4, R`Solve $2^{2x} - 5 \times 2^x + 4 = 0$. [[4]]`,
  [R`Let $u = 2^x$: $u^2 - 5u + 4 = 0$.`, R`$u = 1$ or $4$.`],
  [R`|M1|Substitution $u = 2^x$`, R`|M1|$(u - 1)(u - 4) = 0$`, R`|A1|$2^x = 1$ or $4$`, R`|A1|$x = 0$ or $2$`], R`$x = 0$ or $x = 2$`,
  R`$2^{2x} = (2^x)^2 = u^2$.`),
Q('P14.1-15', 5, R`$f(x) = 2^x$ and $g(x) = 8\left(\frac12\right)^x$.

**(a)** Sketch $y = f(x)$ and $y = g(x)$ on the same axes. [[2]]

**(b)** Find the exact coordinates of the point where the graphs meet. [[3]]

**(c)** Hence find the set of values of $x$ for which $f(x) > g(x)$. [[1]]

**(d)** Find $g(0) - f(0)$. [[1]]`,
  [R`$g(x) = 2^3 \times 2^{-x} = 2^{3 - x}$.`, R`$x = 3 - x$.`],
  [R`(a)|B1|$f$ increasing through $(0, 1)$`, R`(a)|B1|$g$ decreasing through $(0, 8)$`, R`(b)|M1|$2^x = 2^{3 - x}$`, R`(b)|A1|$x = \frac32$`, R`(b)|A1|$y = 2\sqrt2$`, R`(c)|B1|$x > \frac32$`, R`(d)|B1|$7$`],
  R`(b) $\left(\frac32, 2\sqrt2\right)$ (c) $x > \frac32$ (d) $7$`,
  R`(b) $2^{3/2} = 2\sqrt2$.

(c) $f$ is above $g$ to the right of the crossing.

(d) $8 - 1 = 7$.`)
]};

CONTENT['P14.2'] = {
notes: R`
### The number $e$
$e = 2.71828\ldots$ is the special base for which the gradient of $y = e^x$ at every point **equals the $y$-value** there.
$$\frac{d}{dx}\left(e^x\right) = e^x \qquad \frac{d}{dx}\left(e^{kx}\right) = ke^{kx}$$

[[fig:P14.2-e]]

::: booklet
**Not in the formula booklet:** these results (Year 2 adds more).
:::

### Worked example 1
Find the gradient of $y = e^{3x}$ at $x = 0$.
- $\frac{dy}{dx} = 3e^{3x}$; at $x = 0$ it's $3$.

### Worked example 2: a negative power
Differentiate $y = 2e^{-x}$.
- $\frac{dy}{dx} = 2 \times (-1)e^{-x} = -2e^{-x}$: always negative, so the curve always decreases.

**The trap:** writing $\frac{d}{dx}\left(e^{3x}\right) = e^{3x}$. The $k$ comes down in front: $3e^{3x}$.

### Watch out
- $y = e^{-x}$ is $y = e^x$ reflected in the $y$-axis.
- $e^x > 0$ for all $x$, so $y = e^x + c$ has asymptote $y = c$.
`,
questions: [
Q('P14.2-1', 1, R`Find $e^2$, to $3$ significant figures. [[1]]`,
  [R`Use the $e^x$ key.`, R`$e \approx 2.718$.`],
  [R`|B1|$7.39$`], R`$7.39$`,
  R`On a calculator, $e^2 = 7.389\ldots = 7.39$ (3 s.f.).`),
Q('P14.2-2', 1, R`Write down $\dfrac{d}{dx}\left(e^x\right)$. [[1]]`,
  [R`The special property of $e$.`, R`It's its own derivative.`],
  [R`|B1|$e^x$`], R`$e^x$`,
  R`The gradient of $y = e^x$ equals $y$ at every point.`),
Q('P14.2-3', 1, R`Differentiate $y = e^{4x}$. [[1]]`,
  [R`$\frac{d}{dx}e^{kx} = ke^{kx}$.`, R`$k = 4$.`],
  [R`|B1|$4e^{4x}$`], R`$4e^{4x}$`,
  R`$\frac{dy}{dx} = 4e^{4x}$.`),
Q('P14.2-4', 2, R`Find the gradient of $y = e^{2x}$ at $x = 0$. [[2]]`,
  [R`$\frac{dy}{dx} = 2e^{2x}$.`, R`$e^0 = 1$.`],
  [R`|M1|$2e^{2x}$`, R`|A1|$2$`], R`$2$`,
  R`$\frac{dy}{dx} = 2e^{2x}$, so at $x = 0$ the gradient is $2e^0 = 2$.`),
Q('P14.2-5', 2, R`Differentiate $y = 5e^{-3x}$. [[2]]`,
  [R`$k = -3$.`, R`$5 \times (-3)$.`],
  [R`|M1|$ke^{kx}$ with $k = -3$`, R`|A1|$-15e^{-3x}$`], R`$-15e^{-3x}$`,
  R`$\frac{dy}{dx} = 5(-3)e^{-3x}$.`),
Q('P14.2-6', 2, R`For $y = e^x + 1$, state the equation of the asymptote and the $y$-intercept. [[2]]`,
  [R`$e^x \to 0$ as $x \to -\infty$.`, R`$e^0 + 1$.`],
  [R`|B1|$y = 1$`, R`|B1|$(0, 2)$`], R`$y = 1$; $(0, 2)$`,
  R`The graph of $e^x$ moved up $1$.`),
Q('P14.2-7', 2, R`Describe the graph of $y = e^{-x}$: its $y$-intercept, asymptote and whether it increases or decreases. [[2]]`,
  [R`Reflect $y = e^x$ in the $y$-axis.`, R`$\frac{dy}{dx} = -e^{-x} < 0$.`],
  [R`|B1|$(0, 1)$; asymptote $y = 0$`, R`|B1|Decreasing for all $x$`], R`$(0, 1)$, $y = 0$, decreasing`,
  R`$\frac{dy}{dx} = -e^{-x}$ is always negative.`),
Q('P14.2-8', 3, R`Find the gradient of $y = 3e^{0.5x}$ at $x = 2$, to $3$ significant figures. [[2]]`,
  [R`$\frac{dy}{dx} = 1.5e^{0.5x}$.`, R`At $x = 2$: $1.5e$.`],
  [R`|M1|$1.5e^{0.5x}$`, R`|A1|$4.08$`], R`$4.08$`,
  R`$1.5 \times 2.718 = 4.08$.`),
Q('P14.2-9', 3, R`Find the equation of the tangent to $y = e^x$ at $(0, 1)$. [[3]]`,
  [R`Gradient $e^0 = 1$.`, R`$y - 1 = 1(x - 0)$.`],
  [R`|M1|Gradient $1$`, R`|M1|$y - 1 = x$`, R`|A1|$y = x + 1$`], R`$y = x + 1$`,
  R`The tangent at $(0, 1)$ has gradient $1$.`, { solFig: FIGS['P14.2-e'] }),
Q('P14.2-10', 3, R`Show that the gradient of $y = e^{kx}$ at the point $(0, 1)$ is $k$. [[2]]`,
  [R`$\frac{dy}{dx} = ke^{kx}$.`, R`$e^0 = 1$.`],
  [R`|M1|$ke^{kx}$`, R`|A1|$k \times 1 = k$`], R`Shown`,
  R`At $x = 0$, $ke^{0} = k$.`),
Q('P14.2-11', 3, R`For $y = 4 - e^x$, state the asymptote and the $y$-intercept, and explain whether the curve is increasing or decreasing. [[2]]`,
  [R`$-e^x$ is reflected in the $x$-axis, then moved up $4$.`, R`$\frac{dy}{dx} = -e^x$.`],
  [R`|B1|$y = 4$; $(0, 3)$`, R`|B1|Decreasing, as $\frac{dy}{dx} = -e^x < 0$`], R`$y = 4$; $(0, 3)$; decreasing`,
  R`As $x \to -\infty$, $e^x \to 0$ so $y \to 4$.`),
Q('P14.2-12', 4, R`Find the equation of the tangent to $y = 2e^{3x}$ at the point where $x = 0$. [[3]]`,
  [R`$\frac{dy}{dx} = 6e^{3x}$.`, R`The point is $(0, 2)$.`],
  [R`|B1|$(0, 2)$`, R`|M1|Gradient $6$`, R`|A1|$y = 6x + 2$`], R`$y = 6x + 2$`,
  R`At $x = 0$, $y = 2$; $\frac{dy}{dx} = 6e^{3x} = 6$ there. So $y - 2 = 6x$, i.e. $y = 6x + 2$.`),
Q('P14.2-13', 4, R`$y = e^{2x} - 4x$. Show that at a stationary point $e^{2x} = 2$. [[2]]`,
  [R`$\frac{dy}{dx} = 2e^{2x} - 4$.`, R`Set it to $0$.`],
  [R`|M1|$2e^{2x} - 4$`, R`|A1|$2e^{2x} = 4$, so $e^{2x} = 2$`], R`Shown`,
  R`(In 14.7 you'll solve this: $x = \frac12\ln 2$.)`),
Q('P14.2-14', 4, R`$f(x) = e^x + e^{-x}$. Find $f'(x)$, and show that $f'(0) = 0$. Find $f(0)$. [[3]]`,
  [R`$\frac{d}{dx}e^{-x} = -e^{-x}$.`, R`$e^0 = 1$.`],
  [R`|B1|$f'(x) = e^x - e^{-x}$`, R`|B1|$f'(0) = 1 - 1 = 0$`, R`|B1|$f(0) = 2$`], R`$f'(x) = e^x - e^{-x}$; $f(0) = 2$`,
  R`The curve has a stationary point (a minimum) at $(0, 2)$.`),
Q('P14.2-15', 5, R`$f(x) = 3e^{2x} + 1$.

**(a)** Find $f'(x)$. [[1]]

**(b)** Find $f'(0)$. [[1]]

**(c)** Find the equation of the tangent to $y = f(x)$ at $(0, 4)$. [[2]]

**(d)** Explain why $f$ is increasing for all $x$. [[1]]

**(e)** State the equation of the asymptote of $y = f(x)$ and the range of $f$. [[2]]`,
  [R`$f'(x) = 6e^{2x}$.`, R`$e^{2x} > 0$ for all $x$.`],
  [R`(a)|B1|$6e^{2x}$`, R`(b)|B1|$6$`, R`(c)|M1|$y - 4 = 6x$`, R`(c)|A1|$y = 6x + 4$`, R`(d)|B1|$f'(x) = 6e^{2x} > 0$`, R`(e)|B1|$y = 1$`, R`(e)|B1|$f(x) > 1$`],
  R`(a) $6e^{2x}$ (b) $6$ (c) $y = 6x + 4$ (e) $y = 1$; $f(x) > 1$`,
  R`(e) $3e^{2x} > 0$, so $f(x) > 1$, approaching $1$ as $x \to -\infty$.`)
]};

CONTENT['P14.3'] = {
notes: R`
### Growth and decay
A quantity whose rate of change is proportional to its size can be modelled by
$$y = Ae^{kt}$$
- $A$ is the **initial value** (at $t = 0$).
- $k > 0$ gives **growth**; $k < 0$ gives **decay**.
- $\frac{dy}{dt} = ky$: the rate of change is $k$ times the current value.

Models like $T = 20 + 60e^{-0.05t}$ settle towards a long-term value ($20$).

[[fig:P14.3-cool]]

::: booklet
**Not in the formula booklet:** these models.
:::

### Worked example 1
A population is modelled by $P = 2000e^{0.05t}$ ($t$ in years). Find the population after $10$ years and the rate of growth then.
- $P = 2000e^{0.5} = 3297$. $\frac{dP}{dt} = 100e^{0.05t} = 0.05P = 165$ per year.

### Worked example 2: reading the parameters
A cup of tea cools as $T = 20 + 60e^{-0.05t}$.
- At $t = 0$, $T = 80$ °C. As $t \to \infty$, $e^{-0.05t} \to 0$, so $T \to 20$ °C (room temperature).

**The trap:** saying the initial temperature is $60$. Put $t = 0$ into the **whole** formula: $20 + 60 = 80$.

### Watch out
- Comment on a model's limits: populations can't grow forever.
`,
questions: [
Q('P14.3-1', 1, R`An amount of money is modelled by $A = 500e^{0.03t}$, where $t$ is in years. State the initial amount. [[1]]`,
  [R`Put $t = 0$.`, R`$e^0 = 1$.`],
  [R`|B1|£$500$`], R`£$500$`,
  R`At $t = 0$, $A = 500e^0 = 500$.`),
Q('P14.3-2', 1, R`Using $A = 500e^{0.03t}$, find $A$ when $t = 10$, to the nearest pound. [[1]]`,
  [R`$500e^{0.3}$.`, R`$e^{0.3} = 1.3499$.`],
  [R`|B1|£$675$`], R`£$675$`,
  R`$500 \times 1.34986 = 674.93$.`),
Q('P14.3-3', 1, R`State whether $T = 80e^{-0.1t}$ models growth or decay, giving a reason. [[1]]`,
  [R`Look at the sign of the power.`, R`$k = -0.1$.`],
  [R`|B1|Decay, since $k = -0.1 < 0$`], R`Decay`,
  R`A negative coefficient of $t$ in the power gives decay.`),
Q('P14.3-4', 2, R`A car's value is modelled by $V = 20\,000e^{-0.15t}$ after $t$ years. Find its value after $3$ years, to the nearest pound. [[2]]`,
  [R`$20\,000e^{-0.45}$.`, R`$e^{-0.45} = 0.6376$.`],
  [R`|M1|$20\,000e^{-0.45}$`, R`|A1|£$12\,752$`], R`£$12\,752$`,
  R`$20\,000 \times 0.63763 = 12\,752.6$.`),
Q('P14.3-5', 2, R`The number of bacteria is $N = 50e^{0.2t}$ after $t$ hours. Find the rate of increase when $t = 5$. [[3]]`,
  [R`$\frac{dN}{dt} = 10e^{0.2t}$.`, R`At $t = 5$: $10e$.`],
  [R`|M1|Differentiates`, R`|A1|$10e^{0.2t}$`, R`|A1|$27.2$ bacteria per hour`], R`$27.2$ per hour`,
  R`$\frac{dN}{dt} = 50 \times 0.2e^{0.2t} = 10e^{0.2t}$. At $t = 5$: $10e^1 = 27.2$ bacteria per hour.`),
Q('P14.3-6', 2, R`The temperature of a drink is $T = 20 + 60e^{-0.05t}$ °C after $t$ minutes. State the initial temperature and the long-term temperature. [[2]]`,
  [R`Put $t = 0$.`, R`As $t \to \infty$, $e^{-0.05t} \to 0$.`],
  [R`|B1|$80$ °C`, R`|B1|$20$ °C`], R`$80$ °C; $20$ °C`,
  R`$20 + 60 = 80$, and it approaches $20$.`, { solFig: FIGS['P14.3-cool'] }),
Q('P14.3-7', 2, R`The mass of a substance is $m = 100e^{-0.02t}$ grams. Find $\dfrac{dm}{dt}$ when $t = 10$, and interpret your answer. [[2]]`,
  [R`$\frac{dm}{dt} = -2e^{-0.02t}$.`, R`At $t = 10$: $-2e^{-0.2}$.`],
  [R`|M1|$-2e^{-0.02t}$`, R`|A1|$-1.64$: losing $1.64$ g per unit time`], R`$-1.64$`,
  R`$-2 \times 0.8187 = -1.637$. The negative sign means the mass is decreasing.`),
Q('P14.3-8', 3, R`A population is $P = 2000e^{0.05t}$ after $t$ years. Show that $\dfrac{dP}{dt} = 0.05P$, and find $P$ when $t = 10$. [[3]]`,
  [R`$\frac{dP}{dt} = 100e^{0.05t}$.`, R`$2000e^{0.5}$.`],
  [R`|M1|$100e^{0.05t}$`, R`|A1|$= 0.05 \times 2000e^{0.05t} = 0.05P$`, R`|A1|$3297$`], R`$P(10) = 3297$`,
  R`$2000 \times 1.6487 = 3297.4$.`),
Q('P14.3-9', 3, R`Car $A$ is worth $15\,000e^{-0.2t}$ and car $B$ is worth $12\,000e^{-0.1t}$ pounds after $t$ years. Find each value after $5$ years and state which is worth more. [[3]]`,
  [R`$15\,000e^{-1}$ and $12\,000e^{-0.5}$.`, R`Compare.`],
  [R`|B1|$A$: £$5518$`, R`|B1|$B$: £$7278$`, R`|B1|$B$ is worth more`], R`£$5518$; £$7278$; $B$`,
  R`$A$ loses value faster, so although it starts higher, $B$ is worth more by year $5$.`),
Q('P14.3-10', 3, R`A cooling liquid has temperature $T = 25 + 70e^{-0.04t}$ °C. Interpret the numbers $25$, $70$ and $0.04$. [[2]]`,
  [R`What is $T$ at $t = 0$ and as $t \to \infty$?`, R`$0.04$ controls the rate.`],
  [R`|B1|$25$: room temperature (long-term); $70$: how far it starts above room temperature (initial $95$ °C)`, R`|B1|$0.04$: the rate constant (larger means faster cooling)`], R`See solution`,
  R`At $t = 0$, $T = 95$ °C; the excess over $25$ °C decays by a factor $e^{-0.04}$ each minute.`),
Q('P14.3-11', 3, R`$P = 300e^{0.1t}$. Find $P$ when $t = 5$ and when $t = 10$, and show that the ratio $\frac{P(10)}{P(5)}$ is $e^{0.5}$. [[3]]`,
  [R`$300e^{0.5}$ and $300e^{1}$.`, R`$\frac{e^1}{e^{0.5}} = e^{0.5}$.`],
  [R`|B1|$P(5) = 495$`, R`|B1|$P(10) = 815$`, R`|B1|Ratio $\frac{e^1}{e^{0.5}} = e^{0.5} \approx 1.65$`], R`$495$; $815$; ratio $e^{0.5}$`,
  R`In equal time steps an exponential multiplies by the same factor.`),
Q('P14.3-12', 4, R`A town's population is modelled by $P = 8000e^{0.03t}$, $t$ years after 2020. Predict the population in 2050, and give one reason why the prediction may be unreliable. [[2]]`,
  [R`$t = 30$.`, R`Can growth continue forever?`],
  [R`|B1|$8000e^{0.9} = 19\,677$`, R`|B1|E.g. limited housing/resources; growth rates change`], R`About $19\,700$`,
  R`$8000 \times 2.4596 = 19\,677$. Exponential growth can't continue indefinitely.`),
Q('P14.3-13', 4, R`The concentration of a drug is $C = 15e^{-0.2t}$ mg/l after $t$ hours. Find $C$ after $4$ hours and the rate at which it is falling then. [[3]]`,
  [R`$15e^{-0.8}$.`, R`$\frac{dC}{dt} = -0.2C$.`],
  [R`|B1|$6.74$ mg/l`, R`|M1|$\frac{dC}{dt} = -3e^{-0.2t}$`, R`|A1|Falling at $1.35$ mg/l per hour`], R`$6.74$; $1.35$ mg/l per hour`,
  R`$15 \times 0.4493 = 6.74$; $0.2 \times 6.74 = 1.35$.`),
Q('P14.3-14', 4, R`A radioactive sample has mass $m = 80e^{-kt}$ grams. After $5$ years its mass is $60$ g.

**(a)** Show that $e^{-5k} = 0.75$. [[2]]

**(b)** Hence find the mass after $10$ years, without finding $k$. [[2]]`,
  [R`$80e^{-5k} = 60$.`, R`$e^{-10k} = \left(e^{-5k}\right)^2$.`],
  [R`(a)|M1|$80e^{-5k} = 60$`, R`(a)|A1|$e^{-5k} = \frac{60}{80} = 0.75$`, R`(b)|M1|$80\left(e^{-5k}\right)^2$`, R`(b)|A1|$45$ g`], R`(b) $45$ g`,
  R`(b) $80 \times 0.75^2 = 45$.`),
Q('P14.3-15', 5, R`Tea cools according to $T = 20 + 70e^{-kt}$ °C, where $t$ is in minutes. After $10$ minutes its temperature is $55$ °C.

**(a)** Explain the meaning of $20$ and $70$ in the model. [[2]]

**(b)** Show that $e^{-10k} = \frac12$. [[2]]

**(c)** Hence find the temperature after $20$ minutes. [[2]]

**(d)** Give one limitation of the model. [[1]]`,
  [R`$70e^{-10k} = 35$.`, R`$e^{-20k} = \left(e^{-10k}\right)^2$.`],
  [R`(a)|B1|$20$: room temperature`, R`(a)|B1|$70$: initial excess, so it starts at $90$ °C`, R`(b)|M1|$20 + 70e^{-10k} = 55$`, R`(b)|A1|$e^{-10k} = \frac12$`, R`(c)|M1|$20 + 70 \times \frac14$`, R`(c)|A1|$37.5$ °C`, R`(d)|B1|E.g. room temperature may change; $k$ may vary`],
  R`(c) $37.5$ °C`,
  R`(c) $e^{-20k} = \frac14$, so $T = 20 + 17.5 = 37.5$. The excess over room temperature halves every $10$ minutes.`)
]};

CONTENT['P14.4'] = {
notes: R`
### What a logarithm is
$$\log_a n = x \iff a^x = n$$
"$\log_a n$ is the **power** you raise $a$ to, to get $n$." Here $a > 0$, $a \ne 1$ and $n > 0$.

Useful values: $\log_a 1 = 0$, $\log_a a = 1$, $\log_a a^k = k$.

$\log_{10}$ is often written $\log$ or $\lg$.

::: booklet
**Not in the formula booklet:** the definition.
:::

### Worked example 1
Find $\log_2 32$.
- $2^5 = 32$, so $\log_2 32 = 5$.

### Worked example 2: fractional answers
Find $\log_9 3$.
- $9^{\frac12} = 3$, so $\log_9 3 = \frac12$.

**The trap:** answering $3$ (confusing which number is the base). Ask "$9$ to what power gives $3$?"

### Watch out
- You can't take the log of $0$ or a negative number.
- $\log_a\left(\frac1n\right) = -\log_a n$: e.g. $\log_3\frac19 = -2$.
`,
questions: [
Q('P14.4-1', 1, R`Find $\log_2 8$. [[1]]`,
  [R`$2$ to what power is $8$?`, R`$2^3 = 8$.`],
  [R`|B1|$3$`], R`$3$`,
  R`$2^3 = 8$, so $\log_2 8 = 3$.`),
Q('P14.4-2', 1, R`Write $10^3 = 1000$ in logarithmic form. [[1]]`,
  [R`$a^x = n$ means $\log_a n = x$.`, R`Base $10$.`],
  [R`|B1|$\log_{10} 1000 = 3$`], R`$\log_{10} 1000 = 3$`,
  R`The power $3$ is the logarithm of $1000$ to base $10$.`),
Q('P14.4-3', 1, R`Find $\log_5 1$. [[1]]`,
  [R`$5$ to what power is $1$?`, R`Any base to the power $0$ is $1$.`],
  [R`|B1|$0$`], R`$0$`,
  R`Any base to the power $0$ is $1$: $5^0 = 1$, so $\log_5 1 = 0$.`),
Q('P14.4-4', 2, R`Find $\log_3 \frac19$. [[2]]`,
  [R`$\frac19 = 3^{-2}$.`, R`Negative power.`],
  [R`|M1|$\frac19 = 3^{-2}$`, R`|A1|$-2$`], R`$-2$`,
  R`$3^{-2} = \frac{1}{9}$.`),
Q('P14.4-5', 2, R`Find $\log_4 2$. [[2]]`,
  [R`$4$ to what power is $2$?`, R`$4^{\frac12} = 2$.`],
  [R`|M1|$4^{\frac12} = 2$`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`$4^{\frac12} = \sqrt4 = 2$, so $\log_4 2 = \frac12$.`),
Q('P14.4-6', 2, R`Write $\log_2 x = 5$ in index form, and hence find $x$. [[2]]`,
  [R`$2^5 = x$.`, R`Evaluate.`],
  [R`|B1|$2^5 = x$`, R`|B1|$x = 32$`], R`$x = 32$`,
  R`The log is the power: $x = 2^5$.`),
Q('P14.4-7', 2, R`$\log_a 64 = 3$. Find $a$. [[2]]`,
  [R`$a^3 = 64$.`, R`Cube root.`],
  [R`|M1|$a^3 = 64$`, R`|A1|$a = 4$`], R`$a = 4$`,
  R`In index form, $a^3 = 64$, so $a = \sqrt[3]{64} = 4$.`),
Q('P14.4-8', 3, R`Find $\log_9 27$. [[2]]`,
  [R`$9 = 3^2$, $27 = 3^3$.`, R`$9^x = 27$ means $3^{2x} = 3^3$.`],
  [R`|M1|$3^{2x} = 3^3$`, R`|A1|$\frac32$`], R`$\frac32$`,
  R`$9^x = 27$ means $3^{2x} = 3^3$, so $2x = 3$ and $\log_9 27 = \frac32$.`),
Q('P14.4-9', 3, R`Solve $\log_x 81 = 4$. [[2]]`,
  [R`$x^4 = 81$.`, R`The base must be positive.`],
  [R`|M1|$x^4 = 81$`, R`|A1|$x = 3$`], R`$x = 3$`,
  R`$x = -3$ isn't allowed as a base.`),
Q('P14.4-10', 3, R`Find $\log_{10} 0.001$. [[2]]`,
  [R`$0.001 = 10^{-3}$.`, R`Read off the power.`],
  [R`|M1|$10^{-3}$`, R`|A1|$-3$`], R`$-3$`,
  R`$0.001 = \frac{1}{1000} = 10^{-3}$.`),
Q('P14.4-11', 3, R`Solve $\log_3(2x + 1) = 2$. [[2]]`,
  [R`$2x + 1 = 3^2$.`, R`$2x + 1 = 9$.`],
  [R`|M1|$2x + 1 = 9$`, R`|A1|$x = 4$`], R`$x = 4$`,
  R`Rewrite in index form: $3^2 = 2x + 1$.`),
Q('P14.4-12', 4, R`Evaluate $\log_2\left(\log_3 81\right)$. [[3]]`,
  [R`Work from the inside: $\log_3 81$.`, R`$3^4 = 81$.`],
  [R`|M1|$\log_3 81 = 4$`, R`|M1|$\log_2 4$`, R`|A1|$2$`], R`$2$`,
  R`Inside first: $\log_3 81 = 4$ since $3^4 = 81$. Then $\log_2 4 = 2$.`),
Q('P14.4-13', 4, R`Find $\log_{\sqrt2} 8$. [[3]]`,
  [R`$\sqrt2 = 2^{\frac12}$, $8 = 2^3$.`, R`$2^{\frac{x}{2}} = 2^3$.`],
  [R`|M1|Writes both as powers of $2$`, R`|M1|$\frac{x}{2} = 3$`, R`|A1|$6$`], R`$6$`,
  R`$(\sqrt2)^6 = 2^3 = 8$.`),
Q('P14.4-14', 4, R`Solve $\log_x(2x + 3) = 2$. [[4]]`,
  [R`$x^2 = 2x + 3$.`, R`Reject any value that isn't a valid base.`],
  [R`|M1|$x^2 = 2x + 3$`, R`|M1|$(x - 3)(x + 1) = 0$`, R`|A1|$x = 3$`, R`|B1|Rejects $x = -1$ (a base must be positive)`], R`$x = 3$`,
  R`Check: $\log_3 9 = 2$.`),
Q('P14.4-15', 5, R`**(a)** Evaluate $\log_2 16$ and $\log_{16} 2$. [[2]]

**(b)** Verify that $\log_2 16 \times \log_{16} 2 = 1$. [[1]]

**(c)** Solve $\log_x 16 = 4$. [[2]]

**(d)** Solve $\log_2(x^2 - 1) = 3$. [[3]]`,
  [R`$16^{\frac14} = 2$.`, R`For (d): $x^2 - 1 = 8$.`],
  [R`(a)|B1|$4$`, R`(a)|B1|$\frac14$`, R`(b)|B1|$4 \times \frac14 = 1$`, R`(c)|M1|$x^4 = 16$`, R`(c)|A1|$x = 2$`, R`(d)|M1|$x^2 - 1 = 2^3$`, R`(d)|M1|$x^2 = 9$`, R`(d)|A1|$x = \pm3$ (both valid)`],
  R`(a) $4$, $\frac14$ (c) $2$ (d) $\pm3$`,
  R`(d) Both values give $x^2 - 1 = 8 > 0$, so both are valid.`)
]};

CONTENT['P14.5'] = {
notes: R`
### The three laws
For any valid base $a$:
$$\log_a x + \log_a y = \log_a(xy)$$
$$\log_a x - \log_a y = \log_a\left(\frac{x}{y}\right)$$
$$\log_a\left(x^k\right) = k\log_a x$$
So $\log_a\frac1x = -\log_a x$.

::: booklet
**Not in the formula booklet:** these laws. (It does give the change of base formula $\log_a x = \frac{\log_b x}{\log_b a}$.)
:::

### Worked example 1
Write $2\log 3 + \log 4$ as a single logarithm.
- $\log 9 + \log 4 = \log 36$.

### Worked example 2: solving with the laws
Solve $\log_2 x + \log_2(x + 2) = 3$.
1. $\log_2\left(x(x + 2)\right) = 3$, so $x^2 + 2x = 8$.
2. $(x + 4)(x - 2) = 0$. $x = -4$ is rejected (you can't take $\log_2(-4)$), so $x = 2$.

**The trap:** writing $\log(x + 2) = \log x + \log 2$. The laws work for **products**, not sums.

### Watch out
- Always check solutions in the original equation: every log must have a positive argument.
`,
questions: [
Q('P14.5-1', 1, R`Write $\log 3 + \log 5$ as a single logarithm. [[1]]`,
  [R`Adding logs multiplies.`, R`$3 \times 5$.`],
  [R`|B1|$\log 15$`], R`$\log 15$`,
  R`$\log 3 + \log 5 = \log(3 \times 5)$.`),
Q('P14.5-2', 1, R`Write $\log 20 - \log 4$ as a single logarithm. [[1]]`,
  [R`Subtracting logs divides.`, R`$20 \div 4$.`],
  [R`|B1|$\log 5$`], R`$\log 5$`,
  R`$\log\frac{20}{4} = \log 5$.`),
Q('P14.5-3', 1, R`Write $3\log 2$ as a single logarithm. [[1]]`,
  [R`$k\log x = \log x^k$.`, R`$2^3$.`],
  [R`|B1|$\log 8$`], R`$\log 8$`,
  R`$3\log 2 = \log 2^3 = \log 8$.`),
Q('P14.5-4', 2, R`Write $2\log 3 + \log 4$ as a single logarithm. [[2]]`,
  [R`$2\log 3 = \log 9$.`, R`Then add.`],
  [R`|M1|$\log 9$`, R`|A1|$\log 36$`], R`$\log 36$`,
  R`Apply the power law first, then the addition law.`),
Q('P14.5-5', 2, R`Evaluate $\log_2 40 - \log_2 5$. [[2]]`,
  [R`$\log_2\frac{40}{5}$.`, R`$\log_2 8$.`],
  [R`|M1|$\log_2 8$`, R`|A1|$3$`], R`$3$`,
  R`$\frac{40}{5} = 8 = 2^3$.`),
Q('P14.5-6', 2, R`Write $\log\dfrac{x^2 y}{z}$ in terms of $\log x$, $\log y$ and $\log z$. [[2]]`,
  [R`Split the product and quotient.`, R`$\log x^2 = 2\log x$.`],
  [R`|M1|Uses the laws`, R`|A1|$2\log x + \log y - \log z$`], R`$2\log x + \log y - \log z$`,
  R`$\log x^2 + \log y - \log z$.`),
Q('P14.5-7', 2, R`Evaluate $\log_3 54 - \log_3 2$. [[2]]`,
  [R`$\log_3 27$.`, R`$3^3 = 27$.`],
  [R`|M1|$\log_3 27$`, R`|A1|$3$`], R`$3$`,
  R`$\frac{54}{2} = 27$.`),
Q('P14.5-8', 3, R`Given $\log_a 2 = p$ and $\log_a 3 = q$, write **(a)** $\log_a 12$ **(b)** $\log_a 4.5$ in terms of $p$ and $q$. [[3]]`,
  [R`$12 = 2^2 \times 3$.`, R`$4.5 = \frac{9}{2} = \frac{3^2}{2}$.`],
  [R`(a)|M1|Uses the laws`, R`(a)|A1|$2p + q$`, R`(b)|A1|$2q - p$`], R`(a) $2p + q$ (b) $2q - p$`,
  R`(a) $\log_a 4 + \log_a 3$. (b) $\log_a 9 - \log_a 2$.`),
Q('P14.5-9', 3, R`Solve $\log_2 x + \log_2(x + 2) = 3$. [[4]]`,
  [R`Combine: $\log_2 x(x + 2) = 3$.`, R`$x^2 + 2x = 8$.`],
  [R`|M1|Combines the logs`, R`|M1|$x^2 + 2x - 8 = 0$`, R`|A1|$x = 2$ or $-4$`, R`|A1|$x = 2$ only`], R`$x = 2$`,
  R`$\log_2(-4)$ is undefined, so reject $x = -4$.`),
Q('P14.5-10', 3, R`Solve $\log_3(x + 5) - \log_3 x = 1$. [[3]]`,
  [R`$\log_3\frac{x + 5}{x} = 1$.`, R`$\frac{x + 5}{x} = 3$.`],
  [R`|M1|Combines`, R`|M1|$x + 5 = 3x$`, R`|A1|$x = 2.5$`], R`$x = 2.5$`,
  R`$\log_3\frac{x + 5}{x} = 1$, so $\frac{x + 5}{x} = 3$, $x + 5 = 3x$, $x = 2.5$.`),
Q('P14.5-11', 3, R`Show that $2\log_{10} 5 + \log_{10} 4 = 2$. [[2]]`,
  [R`$\log 25 + \log 4$.`, R`$\log 100$.`],
  [R`|M1|$\log_{10} 100$`, R`|A1|$= 2$`], R`Shown`,
  R`$25 \times 4 = 100 = 10^2$.`),
Q('P14.5-12', 4, R`Solve $2\log_5 x = \log_5(4x - 3)$. [[4]]`,
  [R`$\log_5 x^2 = \log_5(4x - 3)$.`, R`$x^2 = 4x - 3$.`],
  [R`|M1|Power law`, R`|M1|$x^2 - 4x + 3 = 0$`, R`|A1|$x = 1$ or $3$`, R`|B1|Both valid (all arguments positive)`], R`$x = 1$ or $x = 3$`,
  R`At $x = 1$: $4x - 3 = 1 > 0$; at $x = 3$: $9 > 0$.`),
Q('P14.5-13', 4, R`Write $\log_a\dfrac{\sqrt x}{y^3}$ in terms of $\log_a x$ and $\log_a y$. [[2]]`,
  [R`$\sqrt x = x^{\frac12}$.`, R`Quotient law, then power law.`],
  [R`|M1|Uses the laws`, R`|A1|$\frac12\log_a x - 3\log_a y$`], R`$\frac12\log_a x - 3\log_a y$`,
  R`$\log_a x^{\frac12} - \log_a y^3$.`),
Q('P14.5-14', 4, R`Solve $\log_2(x + 1) + \log_2(x - 1) = 3$. [[3]]`,
  [R`$\log_2(x^2 - 1) = 3$.`, R`$x^2 - 1 = 8$.`],
  [R`|M1|Combines`, R`|M1|$x^2 = 9$`, R`|A1|$x = 3$ ($-3$ rejected)`], R`$x = 3$`,
  R`$x = -3$ would need $\log_2(-2)$.`),
Q('P14.5-15', 5, R`**(a)** Show that $\log_4 x = \frac12\log_2 x$. [[2]]

**(b)** Hence solve $\log_2 x + \log_4 x = 6$. [[3]]

**(c)** Solve $2\log_4(x + 2) = \log_2(2x - 1)$. [[3]]`,
  [R`Let $\log_4 x = y$: $x = 4^y = 2^{2y}$.`, R`For (c), $2\log_4(x + 2) = \log_2(x + 2)$.`],
  [R`(a)|M1|$x = 4^y = 2^{2y}$`, R`(a)|A1|$\log_2 x = 2y$, so $y = \frac12\log_2 x$`, R`(b)|M1|$\frac32\log_2 x = 6$`, R`(b)|M1|$\log_2 x = 4$`, R`(b)|A1|$x = 16$`, R`(c)|M1|$\log_2(x + 2) = \log_2(2x - 1)$`, R`(c)|M1|$x + 2 = 2x - 1$`, R`(c)|A1|$x = 3$`],
  R`(b) $x = 16$ (c) $x = 3$`,
  R`(b) $\log_2 x + \frac12\log_2 x = 6$.

(c) By (a), $2\log_4(x + 2) = \log_2(x + 2)$. Then $x + 2 = 2x - 1$.`)
]};

CONTENT['P14.6'] = {
notes: R`
### Solving $a^x = b$
Take logs of both sides and use the power law:
$$x\log a = \log b \implies x = \frac{\log b}{\log a}$$
(Or use $x = \log_a b$ on a calculator.)

### Hidden quadratics
$2^{2x} = (2^x)^2$, so equations like $2^{2x} - 5 \times 2^x + 6 = 0$ become quadratics in $u = 2^x$.

::: booklet
**In the formula booklet:** the change of base formula $\log_a x = \dfrac{\log_b x}{\log_b a}$.
:::

### Worked example 1
Solve $3^x = 20$.
- $x = \frac{\log 20}{\log 3} = 2.73$ (3 s.f.).

### Worked example 2: a quadratic in $2^x$
Solve $2^{2x} - 5 \times 2^x + 6 = 0$.
1. $u^2 - 5u + 6 = 0$, so $u = 2$ or $3$.
2. $2^x = 2$ gives $x = 1$; $2^x = 3$ gives $x = \frac{\log 3}{\log 2} = 1.58$.

**The trap:** writing $\frac{\log 20}{\log 3} = \log 20 - \log 3$. Dividing logs is **not** subtracting them.

### Watch out
- $2^x$ is always positive: reject $2^x = $ a negative number.
`,
questions: [
Q('P14.6-1', 1, R`Solve $2^x = 10$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$x = \frac{\log 10}{\log 2}$.`, R`Or $\log_2 10$.`],
  [R`|M1|$\frac{\log 10}{\log 2}$`, R`|A1|$3.32$`], R`$3.32$`,
  R`$\frac{1}{0.30103} = 3.32$.`),
Q('P14.6-2', 1, R`Solve $5^x = 30$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$x = \frac{\log 30}{\log 5}$.`, R`Calculator.`],
  [R`|M1|Takes logs`, R`|A1|$2.11$`], R`$2.11$`,
  R`$\frac{1.4771}{0.6990} = 2.11$.`),
Q('P14.6-3', 1, R`Solve $3^x = 20$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$x\log 3 = \log 20$.`, R`Divide.`],
  [R`|M1|Takes logs`, R`|A1|$2.73$`], R`$2.73$`,
  R`$\frac{\log 20}{\log 3} = 2.727$.`),
Q('P14.6-4', 2, R`Solve $7^{2x} = 50$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$2x\log 7 = \log 50$.`, R`$2x = 2.0104$.`],
  [R`|M1|$2x = \frac{\log 50}{\log 7}$`, R`|A1|$1.01$`], R`$1.01$`,
  R`$2x\log 7 = \log 50$, so $2x = \frac{\log 50}{\log 7} = 2.0104$ and $x = 1.01$ (3 s.f.).`),
Q('P14.6-5', 2, R`Solve $4^{x - 1} = 12$, giving $x$ to $3$ significant figures. [[3]]`,
  [R`$(x - 1)\log 4 = \log 12$.`, R`$x - 1 = 1.7925$.`],
  [R`|M1|Takes logs`, R`|M1|$x - 1 = \frac{\log 12}{\log 4}$`, R`|A1|$2.79$`], R`$2.79$`,
  R`$(x - 1)\log 4 = \log 12$, so $x - 1 = \frac{\log 12}{\log 4} = 1.7925$ and $x = 2.79$ (3 s.f.).`),
Q('P14.6-6', 2, R`Solve $3^{x + 2} = 2^x$, giving $x$ to $3$ significant figures. [[3]]`,
  [R`$(x + 2)\log 3 = x\log 2$.`, R`Collect $x$: $x(\log 3 - \log 2) = -2\log 3$.`],
  [R`|M1|Takes logs of both sides`, R`|M1|Collects $x$ terms`, R`|A1|$-5.42$`], R`$-5.42$`,
  R`$x = \frac{-2\log 3}{\log 3 - \log 2} = \frac{-0.9542}{0.1761} = -5.42$.`),
Q('P14.6-7', 2, R`Solve $2^x = 3^{x - 1}$, giving $x$ to $3$ significant figures. [[3]]`,
  [R`$x\log 2 = (x - 1)\log 3$.`, R`$x(\log 3 - \log 2) = \log 3$.`],
  [R`|M1|Takes logs`, R`|M1|Collects $x$ terms`, R`|A1|$2.71$`], R`$2.71$`,
  R`$x = \frac{0.4771}{0.1761} = 2.71$.`),
Q('P14.6-8', 3, R`Solve $2^{2x} - 5 \times 2^x + 6 = 0$, giving answers to $3$ significant figures where necessary. [[4]]`,
  [R`$u = 2^x$: $u^2 - 5u + 6 = 0$.`, R`$u = 2$ or $3$.`],
  [R`|M1|Substitution`, R`|M1|$(u - 2)(u - 3) = 0$`, R`|A1|$x = 1$`, R`|A1|$x = 1.58$`], R`$x = 1$ or $1.58$`,
  R`$2^x = 3$ gives $x = \frac{\log 3}{\log 2}$.`),
Q('P14.6-9', 3, R`Solve $3^{2x} - 4 \times 3^x + 3 = 0$. [[4]]`,
  [R`$u = 3^x$: $u^2 - 4u + 3 = 0$.`, R`$u = 1$ or $3$.`],
  [R`|M1|Substitution`, R`|M1|$(u - 1)(u - 3) = 0$`, R`|A1|$x = 0$`, R`|A1|$x = 1$`], R`$x = 0$ or $1$`,
  R`$3^x = 1$ gives $0$; $3^x = 3$ gives $1$.`),
Q('P14.6-10', 3, R`Solve $5^{2x} - 5^{x + 1} + 4 = 0$, giving answers to $3$ significant figures where necessary. [[4]]`,
  [R`$5^{x + 1} = 5 \times 5^x$.`, R`$u^2 - 5u + 4 = 0$.`],
  [R`|M1|$5^{x + 1} = 5u$`, R`|M1|$(u - 1)(u - 4) = 0$`, R`|A1|$x = 0$`, R`|A1|$x = 0.861$`], R`$x = 0$ or $0.861$`,
  R`$5^x = 4$ gives $x = \frac{\log 4}{\log 5} = 0.861$.`),
Q('P14.6-11', 3, R`Solve $6^x = 4$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$x = \frac{\log 4}{\log 6}$.`, R`Calculator.`],
  [R`|M1|Takes logs`, R`|A1|$0.774$`], R`$0.774$`,
  R`$\frac{0.6021}{0.7782} = 0.774$.`),
Q('P14.6-12', 4, R`Solve $2^{2x + 1} - 7 \times 2^x + 3 = 0$, giving answers to $3$ significant figures where necessary. [[4]]`,
  [R`$2^{2x + 1} = 2u^2$.`, R`$2u^2 - 7u + 3 = 0$.`],
  [R`|M1|$2u^2 - 7u + 3 = 0$`, R`|M1|$(2u - 1)(u - 3) = 0$`, R`|A1|$x = -1$`, R`|A1|$x = 1.58$`], R`$x = -1$ or $1.58$`,
  R`$2^x = \frac12$ gives $-1$; $2^x = 3$ gives $1.585$.`),
Q('P14.6-13', 4, R`Solve $3^x \times 2^{x + 1} = 50$, giving $x$ to $3$ significant figures. [[3]]`,
  [R`$3^x \times 2^x \times 2 = 2 \times 6^x$.`, R`$6^x = 25$.`],
  [R`|M1|$2 \times 6^x = 50$`, R`|M1|$6^x = 25$`, R`|A1|$1.80$`], R`$1.80$`,
  R`$x = \frac{\log 25}{\log 6} = 1.796$.`),
Q('P14.6-14', 4, R`£$1000$ is invested at $4\%$ per year compound interest. After how many whole years will it first exceed £$2000$? [[3]]`,
  [R`$1000 \times 1.04^n > 2000$.`, R`$n > \frac{\log 2}{\log 1.04}$.`],
  [R`|M1|$1.04^n > 2$`, R`|M1|$n > 17.67$`, R`|A1|$18$ years`], R`$18$ years`,
  R`$\frac{0.30103}{0.017033} = 17.67$, so after $18$ whole years.`),
Q('P14.6-15', 5, R`**(a)** Show that $4^x - 6 \times 2^x + 8 = 0$ can be written as $u^2 - 6u + 8 = 0$, where $u = 2^x$. [[2]]

**(b)** Hence solve $4^x - 6 \times 2^x + 8 = 0$. [[2]]

**(c)** Solve $4^x - 6 \times 2^x + 5 = 0$, giving answers to $3$ significant figures where necessary. [[3]]`,
  [R`$4^x = (2^2)^x = (2^x)^2$.`, R`For (c), $u^2 - 6u + 5 = 0$.`],
  [R`(a)|M1|$4^x = (2^x)^2$`, R`(a)|A1|$u^2 - 6u + 8 = 0$`, R`(b)|M1|$u = 2$ or $4$`, R`(b)|A1|$x = 1$ or $2$`, R`(c)|M1|$(u - 1)(u - 5) = 0$`, R`(c)|A1|$x = 0$`, R`(c)|A1|$x = 2.32$`],
  R`(b) $x = 1$, $2$ (c) $x = 0$, $2.32$`,
  R`(c) $2^x = 5$ gives $x = \frac{\log 5}{\log 2} = 2.32$.`)
]};

CONTENT['P14.7'] = {
notes: R`
### Natural logarithms
$\ln x = \log_e x$. It's the inverse of $e^x$:
$$e^{\ln x} = x \quad (x > 0) \qquad \ln\left(e^x\right) = x$$
The laws of logs work for $\ln$ as for any base.

### Solving
- $e^{ax + b} = c$: take $\ln$: $ax + b = \ln c$.
- $\ln(ax + b) = c$: take $e$ to both sides: $ax + b = e^c$.

::: booklet
**Not in the formula booklet:** these results.
:::

### Worked example 1
Solve $e^{2x} = 7$.
- $2x = \ln 7$, so $x = \frac12\ln 7 = 0.973$.

### Worked example 2: a hidden quadratic
Solve $e^{2x} - 5e^x + 6 = 0$.
- $(e^x - 2)(e^x - 3) = 0$, so $x = \ln 2$ or $x = \ln 3$.

**The trap:** writing $\ln(e^x + 3) = x + \ln 3$. $\ln$ undoes $e$ only when the $e$ is the **whole** argument.

### Watch out
- Give exact answers in terms of $\ln$ when asked; otherwise round at the end.
`,
questions: [
Q('P14.7-1', 1, R`Solve $e^x = 5$, giving $x$ exactly and to $3$ significant figures. [[1]]`,
  [R`Take $\ln$ of both sides.`, R`$x = \ln 5$.`],
  [R`|B1|$\ln 5 = 1.61$`], R`$\ln 5 \approx 1.61$`,
  R`$\ln(e^x) = x$, so $x = \ln 5$.`),
Q('P14.7-2', 1, R`Solve $\ln x = 2$. [[1]]`,
  [R`$x = e^2$.`, R`$e$ to both sides.`],
  [R`|B1|$x = e^2 \approx 7.39$`], R`$e^2$`,
  R`Apply $e$ to both sides: $x = e^{\ln x} = e^2 \approx 7.39$.`),
Q('P14.7-3', 1, R`Simplify $e^{\ln 7}$. [[1]]`,
  [R`$e^x$ and $\ln x$ are inverses.`, R`They cancel.`],
  [R`|B1|$7$`], R`$7$`,
  R`$e^{\ln a} = a$ for $a > 0$.`),
Q('P14.7-4', 2, R`Solve $e^{2x} = 7$, giving the exact answer. [[2]]`,
  [R`$2x = \ln 7$.`, R`Divide by $2$.`],
  [R`|M1|$2x = \ln 7$`, R`|A1|$x = \frac12\ln 7$`], R`$\frac12\ln 7$`,
  R`$x = \frac12\ln 7 \approx 0.973$.`),
Q('P14.7-5', 2, R`Solve $\ln(3x - 1) = 2$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$3x - 1 = e^2$.`, R`$x = \frac{e^2 + 1}{3}$.`],
  [R`|M1|$3x - 1 = e^2$`, R`|A1|$2.80$`], R`$\frac{e^2 + 1}{3} \approx 2.80$`,
  R`$\frac{7.389 + 1}{3} = 2.80$.`),
Q('P14.7-6', 2, R`Solve $e^{x + 1} = 10$, giving $x$ to $3$ significant figures. [[2]]`,
  [R`$x + 1 = \ln 10$.`, R`Subtract $1$.`],
  [R`|M1|$x + 1 = \ln 10$`, R`|A1|$1.30$`], R`$\ln 10 - 1 \approx 1.30$`,
  R`$2.3026 - 1 = 1.3026$.`),
Q('P14.7-7', 2, R`Solve $3e^{-x} = 12$, giving the exact answer. [[2]]`,
  [R`$e^{-x} = 4$.`, R`$-x = \ln 4$.`],
  [R`|M1|$e^{-x} = 4$`, R`|A1|$x = -\ln 4$`], R`$-\ln 4$`,
  R`$x = -\ln 4 = \ln\frac14 \approx -1.39$.`),
Q('P14.7-8', 3, R`Solve $e^{2x} - 5e^x + 6 = 0$, giving exact answers. [[4]]`,
  [R`$u = e^x$: $u^2 - 5u + 6 = 0$.`, R`$u = 2$ or $3$.`],
  [R`|M1|Substitution`, R`|M1|$(u - 2)(u - 3) = 0$`, R`|A1|$x = \ln 2$`, R`|A1|$x = \ln 3$`], R`$\ln 2$, $\ln 3$`,
  R`With $u = e^x$: $u^2 - 5u + 6 = (u - 2)(u - 3) = 0$, so $e^x = 2$ or $3$, giving $x = \ln 2$ or $\ln 3$.`),
Q('P14.7-9', 3, R`Solve $\ln x + \ln 3 = \ln 12$. [[2]]`,
  [R`$\ln 3x = \ln 12$.`, R`$3x = 12$.`],
  [R`|M1|$\ln 3x$`, R`|A1|$x = 4$`], R`$x = 4$`,
  R`Combine with the addition law, then compare arguments.`),
Q('P14.7-10', 3, R`Solve $2\ln x = \ln(x + 6)$. [[3]]`,
  [R`$\ln x^2 = \ln(x + 6)$.`, R`$x^2 - x - 6 = 0$.`],
  [R`|M1|Power law`, R`|M1|$(x - 3)(x + 2) = 0$`, R`|A1|$x = 3$ ($-2$ rejected)`], R`$x = 3$`,
  R`$\ln(-2)$ is undefined, so $x = 3$ only.`),
Q('P14.7-11', 3, R`Solve $e^{2x} = 3e^x$, giving the exact answer. [[3]]`,
  [R`Divide by $e^x$ (never zero).`, R`$e^x = 3$.`],
  [R`|M1|$e^x(e^x - 3) = 0$`, R`|B1|$e^x \ne 0$`, R`|A1|$x = \ln 3$`], R`$\ln 3$`,
  R`$e^x > 0$, so only $e^x = 3$.`),
Q('P14.7-12', 4, R`A population is $P = 200e^{0.03t}$ after $t$ years. Find, to $3$ significant figures, how long it takes to double. [[3]]`,
  [R`$200e^{0.03t} = 400$.`, R`$e^{0.03t} = 2$.`],
  [R`|M1|$e^{0.03t} = 2$`, R`|M1|$0.03t = \ln 2$`, R`|A1|$23.1$ years`], R`$23.1$ years`,
  R`$t = \frac{\ln 2}{0.03} = 23.1$.`),
Q('P14.7-13', 4, R`Solve $e^x + 2e^{-x} = 3$, giving exact answers. [[4]]`,
  [R`Multiply by $e^x$: $e^{2x} + 2 = 3e^x$.`, R`$(e^x - 1)(e^x - 2) = 0$.`],
  [R`|M1|Multiplies by $e^x$`, R`|M1|Quadratic in $e^x$`, R`|A1|$x = 0$`, R`|A1|$x = \ln 2$`], R`$0$, $\ln 2$`,
  R`$e^x = 1$ gives $0$; $e^x = 2$ gives $\ln 2$.`),
Q('P14.7-14', 4, R`Find the exact solution of $4e^{3x - 1} = 20$. [[3]]`,
  [R`$e^{3x - 1} = 5$.`, R`$3x - 1 = \ln 5$.`],
  [R`|M1|$e^{3x - 1} = 5$`, R`|M1|$3x - 1 = \ln 5$`, R`|A1|$x = \frac{1 + \ln 5}{3}$`], R`$\frac{1 + \ln 5}{3}$`,
  R`$e^{3x - 1} = 5$, so $3x - 1 = \ln 5$ and $x = \frac{1 + \ln 5}{3} \approx 0.870$.`),
Q('P14.7-15', 5, R`Tea cools according to $T = 20 + 70e^{-kt}$ °C, and $T = 55$ when $t = 10$ minutes.

**(a)** Show that $k = \frac{\ln 2}{10}$. [[3]]

**(b)** Find the time taken for the tea to cool to $30$ °C. [[3]]

**(c)** Find the rate of cooling at $t = 0$. [[2]]`,
  [R`$70e^{-10k} = 35$, so $e^{-10k} = \frac12$.`, R`$\frac{dT}{dt} = -70ke^{-kt}$.`],
  [R`(a)|M1|$e^{-10k} = \frac12$`, R`(a)|M1|$-10k = \ln\frac12 = -\ln 2$`, R`(a)|A1|$k = \frac{\ln 2}{10}$`, R`(b)|M1|$70e^{-kt} = 10$`, R`(b)|M1|$t = \frac{\ln 7}{k}$`, R`(b)|A1|$28.1$ minutes`, R`(c)|M1|$-70k$`, R`(c)|A1|$4.85$ °C per minute`],
  R`(b) $28.1$ minutes (c) $4.85$ °C/min`,
  R`(b) $e^{-kt} = \frac17$, so $t = \frac{\ln 7}{k} = \frac{10\ln 7}{\ln 2} = 28.07$.

(c) $\frac{dT}{dt} = -70k = -7\ln 2 = -4.85$: cooling at $4.85$ °C per minute.`)
]};

CONTENT['P14.8'] = {
notes: R`
### Turning curves into lines
- $y = ax^n$: taking logs gives $\log y = n\log x + \log a$. Plot $\log y$ against $\log x$: a straight line with **gradient $n$** and **intercept $\log a$**.
- $y = ab^x$: $\log y = x\log b + \log a$. Plot $\log y$ against $x$: gradient $\log b$, intercept $\log a$.

[[fig:P14.8-line]]

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
A graph of $\log y$ against $\log x$ is a line with gradient $2.5$ and intercept $0.3$. Find the model.
- $n = 2.5$, $\log a = 0.3$, so $a = 10^{0.3} = 2.00$: $y = 2.00x^{2.5}$.

### Worked example 2: exponential data
A graph of $\log y$ against $x$ has gradient $0.2$ and intercept $1.5$. Find $a$ and $b$ in $y = ab^x$.
- $b = 10^{0.2} = 1.58$ and $a = 10^{1.5} = 31.6$.

**The trap:** taking the intercept itself as $a$. The intercept is $\log a$, so $a = 10^{\text{intercept}}$.

### Watch out
- Use the same base throughout. With $\ln$, $a = e^{\text{intercept}}$.
`,
questions: [
Q('P14.8-1', 1, R`Show that $y = ax^n$ can be written $\log y = \log a + n\log x$. [[1]]`,
  [R`Take logs of both sides.`, R`Use the product and power laws.`],
  [R`|B1|$\log y = \log(ax^n) = \log a + n\log x$`], R`Shown`,
  R`$\log(ax^n) = \log a + \log x^n$.`),
Q('P14.8-2', 1, R`Show that $y = ab^x$ can be written $\log y = \log a + x\log b$. [[1]]`,
  [R`Take logs.`, R`$\log b^x = x\log b$.`],
  [R`|B1|$\log y = \log a + x\log b$`], R`Shown`,
  R`$\log(ab^x) = \log a + \log b^x$.`),
Q('P14.8-3', 1, R`A graph of $\log y$ against $\log x$ is a straight line with gradient $3$ and intercept $0.5$. Find $a$ and $n$ in $y = ax^n$. [[2]]`,
  [R`Gradient $= n$.`, R`Intercept $= \log a$.`],
  [R`|B1|$n = 3$`, R`|B1|$a = 10^{0.5} = 3.16$`], R`$n = 3$, $a = 3.16$`,
  R`$a = 10^{0.5} = \sqrt{10}$.`),
Q('P14.8-4', 2, R`A graph of $\log y$ against $x$ is a line with gradient $0.3$ and intercept $1$. Find $a$ and $b$ in $y = ab^x$. [[2]]`,
  [R`$\log b = 0.3$.`, R`$\log a = 1$.`],
  [R`|B1|$b = 10^{0.3} = 2.00$`, R`|B1|$a = 10$`], R`$a = 10$, $b = 2.00$`,
  R`$\log b = 0.3$ gives $b = 10^{0.3} = 2.00$, and $\log a = 1$ gives $a = 10$.`),
Q('P14.8-5', 2, R`Points on a graph of $\log y$ against $\log x$ lie on the line through $(1, 3.2)$ and $(2, 5.7)$. Find the model $y = ax^n$. [[3]]`,
  [R`Gradient $\frac{5.7 - 3.2}{2 - 1}$.`, R`Intercept: $3.2 - 2.5$.`],
  [R`|M1|Gradient $2.5$`, R`|M1|Intercept $0.7$`, R`|A1|$y = 5.01x^{2.5}$`], R`$y = 5.01x^{2.5}$`,
  R`$a = 10^{0.7} = 5.01$.`),
Q('P14.8-6', 2, R`You suspect data follow $y = ab^x$. Which graph should you plot to test this, and what would confirm it? [[1]]`,
  [R`$\log y = \log a + x\log b$.`, R`What are the variables?`],
  [R`|B1|$\log y$ against $x$; a straight line confirms it`], R`$\log y$ against $x$`,
  R`If the points lie close to a straight line, the model fits.`),
Q('P14.8-7', 2, R`A line on a graph of $\log y$ against $x$ passes through $(0, 0.48)$ and $(5, 1.98)$. Find $a$ and $b$ in $y = ab^x$. [[3]]`,
  [R`Gradient $\frac{1.5}{5} = 0.3$.`, R`Intercept $0.48$.`],
  [R`|M1|Gradient $0.3$`, R`|A1|$b = 2.00$`, R`|A1|$a = 3.02$`], R`$a = 3.02$, $b = 2.00$`,
  R`$a = 10^{0.48} = 3.02$; $b = 10^{0.3} = 1.995$.`),
Q('P14.8-8', 3, R`Data: $x = 1, 2, 4$ with $y = 3, 12, 48$. Show that the points $(\log x, \log y)$ lie on a straight line, and find the model $y = ax^n$. [[3]]`,
  [R`Compute $\log x$ and $\log y$.`, R`$\frac{\log 12 - \log 3}{\log 2 - \log 1} = \frac{\log 4}{\log 2}$.`],
  [R`|M1|Gradients between pairs of points both $2$`, R`|A1|$n = 2$`, R`|A1|$a = 3$, so $y = 3x^2$`], R`$y = 3x^2$`,
  R`$\frac{\log 4}{\log 2} = 2$ both times; at $\log x = 0$, $\log y = \log 3$.`),
Q('P14.8-9', 3, R`A graph of $\ln y$ against $x$ is a straight line: $\ln y = 0.4x + 2$. Write $y$ in the form $Ae^{kx}$. [[2]]`,
  [R`$y = e^{0.4x + 2}$.`, R`$e^{0.4x + 2} = e^2 e^{0.4x}$.`],
  [R`|M1|$e$ to both sides`, R`|A1|$y = 7.39e^{0.4x}$`], R`$y = e^2 e^{0.4x} \approx 7.39e^{0.4x}$`,
  R`$y = e^{0.4x + 2} = e^2 \times e^{0.4x}$, and $e^2 = 7.39$, so $y = 7.39e^{0.4x}$.`),
Q('P14.8-10', 3, R`For the model $y = 2 \times 5^x$, find the gradient and intercept of the graph of $\log y$ against $x$. [[2]]`,
  [R`$\log y = \log 2 + x\log 5$.`, R`Gradient $\log 5$.`],
  [R`|B1|Gradient $\log 5 = 0.699$`, R`|B1|Intercept $\log 2 = 0.301$`], R`$0.699$; $0.301$`,
  R`Compare with $\log y = \log a + x\log b$.`),
Q('P14.8-11', 3, R`For planets, a graph of $\log T$ against $\log r$ has gradient $1.5$ and intercept $-0.2$. Find the model $T = ar^n$. [[3]]`,
  [R`$n = 1.5$.`, R`$a = 10^{-0.2}$.`],
  [R`|B1|$n = 1.5$`, R`|M1|$a = 10^{-0.2}$`, R`|A1|$T = 0.631r^{1.5}$`], R`$T = 0.631r^{1.5}$`,
  R`$10^{-0.2} = 0.631$.`),
Q('P14.8-12', 4, R`The number of bacteria is modelled by $N = ab^t$. A graph of $\log N$ against $t$ is a line through $(0, 2)$ and $(6, 3.2)$.

**(a)** Find $a$ and $b$. [[3]]

**(b)** Predict $N$ when $t = 10$. [[1]]`,
  [R`Gradient $0.2$; intercept $2$.`, R`$\log N = 2 + 0.2 \times 10$.`],
  [R`(a)|M1|Gradient $0.2$`, R`(a)|A1|$a = 100$`, R`(a)|A1|$b = 1.58$`, R`(b)|B1|$10\,000$`], R`(a) $a = 100$, $b = 1.58$ (b) $10\,000$`,
  R`(b) $\log N = 4$, so $N = 10^4$.`),
Q('P14.8-13', 4, R`The curve $y = ax^n$ passes through $(2, 24)$ and $(4, 192)$. Find $a$ and $n$. [[3]]`,
  [R`Divide: $\frac{a \cdot 4^n}{a \cdot 2^n} = 8$.`, R`$2^n = 8$.`],
  [R`|M1|$2^n = 8$`, R`|A1|$n = 3$`, R`|A1|$a = 3$`], R`$a = 3$, $n = 3$`,
  R`Dividing: $\frac{a \cdot 4^n}{a \cdot 2^n} = 2^n = \frac{192}{24} = 8$, so $n = 3$; then $8a = 24$, $a = 3$.`),
Q('P14.8-14', 4, R`Explain why plotting $\log y$ against $\log x$ is useful when you suspect $y = ax^n$, and what the gradient tells you. [[2]]`,
  [R`It turns a curve into a line.`, R`The gradient is the power.`],
  [R`|B1|A straight line is easy to recognise and fit, confirming the model`, R`|B1|The gradient gives the power $n$`], R`See solution`,
  R`Lines are much easier to judge by eye, and the gradient and intercept give $n$ and $\log a$ directly.`),
Q('P14.8-15', 5, R`The value $V$ (thousands of pounds) of a car $t$ years after purchase is modelled by $V = ab^t$. The graph of $\log V$ against $t$ is a straight line through $(1, 1.20)$ and $(5, 0.88)$.

**(a)** Find the gradient and intercept of the line. [[2]]

**(b)** Find $a$ and $b$. [[3]]

**(c)** Interpret $a$ and $b$ in context. [[2]]

**(d)** Predict the value after $8$ years. [[1]]`,
  [R`Gradient $\frac{0.88 - 1.20}{4} = -0.08$.`, R`Intercept $1.20 + 0.08 = 1.28$.`],
  [R`(a)|B1|Gradient $-0.08$`, R`(a)|B1|Intercept $1.28$`, R`(b)|M1|$a = 10^{1.28}$, $b = 10^{-0.08}$`, R`(b)|A1|$a = 19.1$`, R`(b)|A1|$b = 0.832$`, R`(c)|B1|$a$: value when new (about £$19\,100$)`, R`(c)|B1|$b$: each year the value is multiplied by $0.832$ (a $16.8\%$ fall)`, R`(d)|B1|About £$4370$`],
  R`(b) $a = 19.1$, $b = 0.832$ (d) about £$4370$`,
  R`(d) $\log V = 1.28 - 0.64 = 0.64$, so $V = 10^{0.64} = 4.37$ thousand pounds.`)
]};
