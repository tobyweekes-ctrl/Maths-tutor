/* Statistics and Mechanics Year 1 · Chapter 11 Variable acceleration (sections 11.1 to 11.5) */
BOOK_CHAPTERS.push({ id:'A11', book:'Statistics & Mechanics Year 1', label:'Chapter 11', title:'Variable acceleration', mech: true, sections:[
  { id:'A11.1', num:'11.1', title:'Functions of time' },
  { id:'A11.2', num:'11.2', title:'Using differentiation' },
  { id:'A11.3', num:'11.3', title:'Maxima and minima problems' },
  { id:'A11.4', num:'11.4', title:'Using integration' },
  { id:'A11.5', num:'11.5', title:'Constant acceleration formulae' }
]});
// Graph of a function of time for 0 <= t <= T.
const A11g = ({ label, f, T, y0, y1, ylab = 's (m)', xt = 1, yt = 2, points = [], shade = null }) => {
  const ticks = (a, b, s) => { const r = []; for (let v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) if (Math.abs(v) > 1e-9) r.push([v, String(+v.toFixed(2))]); return r; };
  return Fig.graph({ label, x0: 0, x1: T * 1.05, y0, y1, xlab: 't (s)', ylab, xticks: ticks(0, T, xt), yticks: ticks(y0, y1, yt), points,
    fns: [{ f, from: 0, to: T }], regions: shade ? [{ from: shade[0], to: shade[1], lo: t => Math.min(0, f(t)), hi: t => Math.max(0, f(t)) }] : [] });
};
FIGS['A11.1-cubic'] = A11g({ label: 'Displacement s = t³ − 6t² + 9t: rises to 4 at t = 1, falls back to 0 at t = 3, then rises again', f: t => t ** 3 - 6 * t * t + 9 * t, T: 4.2, y0: -1, y1: 6, points: [{ x: 1, y: 4, label: '(1, 4)' }, { x: 3, y: 0, label: '(3, 0)' }] });
FIGS['A11.4-area'] = A11g({ label: 'Velocity v = t² − 4t + 3: positive for t < 1, negative between 1 and 3; the shaded areas are the distances', f: t => t * t - 4 * t + 3, T: 3, y0: -1.5, y1: 3.5, ylab: 'v (m s⁻¹)', yt: 1, shade: [0, 3] });

CONTENT['A11.1'] = {
notes: R`
### Motion as a function of time
When acceleration isn't constant, displacement, velocity and acceleration are given as functions of $t$, such as $s = t^3 - 6t^2 + 9t$. You **can't** use suvat.

- Substitute a value of $t$ to find $s$ or $v$ at that time.
- "At $O$" means $s = 0$; "at rest" means $v = 0$.
- A model usually has a range of validity, such as $0 \le t \le 4$.

[[fig:A11.1-cubic]]

::: booklet
**Learn this:** suvat only works for constant acceleration. If $s$, $v$ or $a$ is given as a function of $t$, use the functions themselves (and calculus, from section 11.2).
:::

### Worked example 1
A particle moves so that $s = t^3 - 6t^2 + 9t$ m. When is it at $O$?
- $t(t^2 - 6t + 9) = t(t - 3)^2 = 0$, so $t = 0$ or $t = 3$.

### Worked example 2: velocity isn't speed
A particle has $v = 6 + t - t^2$ m s$^{-1}$. Find its speed when $t = 4$.
- $v = 6 + 4 - 16 = -6$, so the speed is $6$ m s$^{-1}$ (moving in the negative direction).

**The trap:** giving the speed as $-6$. Speed is the magnitude of the velocity, so it can't be negative.

### Watch out
- Reject values of $t$ outside the range of validity.
`,
questions: [
Q('A11.1-1', 1, R`A particle moves so that $s = 4t + 2t^2$ m. Find $s$ when $t = 3$. [[1]]`,
  [R`Substitute $t = 3$.`, R`$12 + 18$.`],
  [R`|B1|$30$ m`], R`$30$ m`,
  R`$s = 4(3) + 2(9) = 30$ m.`, NF),
Q('A11.1-2', 1, R`A particle has velocity $v = 10 - 2t$ m s$^{-1}$. Write down its initial velocity. [[1]]`,
  [R`Initial means $t = 0$.`, R`$10 - 0$.`],
  [R`|B1|$10$ m s$^{-1}$`], R`$10$ m s$^{-1}$`,
  R`At $t = 0$, $v = 10$ m s$^{-1}$.`, NF),
Q('A11.1-3', 1, R`For $v = 10 - 2t$, find when the particle is at rest. [[1]]`,
  [R`At rest means $v = 0$.`, R`$10 - 2t = 0$.`],
  [R`|B1|$t = 5$ s`], R`$t = 5$ s`,
  R`$10 - 2t = 0$ gives $t = 5$ s.`, NF),
Q('A11.1-4', 2, R`A particle moves so that $s = t^3 - 6t^2 + 9t$ m. Find the times when it is at $O$. [[2]]`,
  [R`Set $s = 0$ and factorise.`, R`$t(t - 3)^2$.`],
  [R`|M1|$t(t^2 - 6t + 9) = 0$`, R`|A1|$t = 0$ and $t = 3$`], R`$t = 0$ and $t = 3$`,
  R`$s = t(t - 3)^2 = 0$, so $t = 0$ or $t = 3$.`, { fig: FIGS['A11.1-cubic'] }),
Q('A11.1-5', 2, R`A particle has $v = t^2 - 4t + 3$ m s$^{-1}$. Find when it is at rest. [[2]]`,
  [R`$v = 0$.`, R`Factorise.`],
  [R`|M1|$(t - 1)(t - 3) = 0$`, R`|A1|$t = 1$ and $t = 3$`], R`$t = 1$ and $t = 3$`,
  R`$(t - 1)(t - 3) = 0$, so the particle is at rest at $t = 1$ and $t = 3$.`, NF),
Q('A11.1-6', 2, R`A particle moves so that $s = 2t^2 - 8t$ m. Find its displacement when $t = 2$ and when $t = 5$. [[2]]`,
  [R`Substitute each time.`, R`A negative displacement is on the other side of $O$.`],
  [R`|B1|$t = 2$: $-8$ m`, R`|B1|$t = 5$: $10$ m`], R`$-8$ m and $10$ m`,
  R`$s(2) = 8 - 16 = -8$ m ($8$ m on the negative side of $O$) and $s(5) = 50 - 40 = 10$ m.`, NF),
Q('A11.1-7', 2, R`A ball's height is modelled by $s = 20t - 5t^2$ m. Find the range of values of $t$ for which the model is valid, and explain. [[2]]`,
  [R`When is $s = 0$?`, R`$5t(4 - t) = 0$.`],
  [R`|M1|$5t(4 - t) = 0$`, R`|A1|$0 \le t \le 4$: after $t = 4$ the ball would be underground`], R`$0 \le t \le 4$`,
  R`$s = 5t(4 - t) = 0$ at $t = 0$ and $t = 4$. For $t > 4$ the model gives negative heights, so it is valid for $0 \le t \le 4$.`, NF),
Q('A11.1-8', 3, R`A particle has $v = 6 + t - t^2$ m s$^{-1}$. **(a)** Find when it is at rest. **(b)** Find its speed when $t = 4$, and describe its motion then. [[3]]`,
  [R`$t^2 - t - 6 = 0$.`, R`$v(4) = -6$.`],
  [R`(a)|B1|$t = 3$ s`, R`(b)|B1|Speed $6$ m s$^{-1}$`, R`(b)|B1|Moving in the negative direction`], R`(a) $3$ s (b) $6$ m s$^{-1}$ in the negative direction`,
  R`**(a)** $t^2 - t - 6 = (t - 3)(t + 2) = 0$, and $t \ge 0$, so $t = 3$ s.
**(b)** $v(4) = 6 + 4 - 16 = -6$: speed $6$ m s$^{-1}$, moving in the negative direction.`, NF),
Q('A11.1-9', 3, R`A particle moves so that $s = t^3 - 9t^2 + 24t$ m. Find the times when $s = 16$. [[3]]`,
  [R`$t^3 - 9t^2 + 24t - 16 = 0$.`, R`$t = 1$ is a root.`],
  [R`|M1|$t^3 - 9t^2 + 24t - 16 = 0$`, R`|M1|$(t - 1)(t^2 - 8t + 16) = 0$`, R`|A1|$t = 1$ and $t = 4$`], R`$t = 1$ and $t = 4$`,
  R`$t = 1$ is a root, so $(t - 1)(t^2 - 8t + 16) = (t - 1)(t - 4)^2 = 0$, giving $t = 1$ and $t = 4$.`, NF),
Q('A11.1-10', 3, R`A particle has velocity $v = 4 - t^2$ m s$^{-1}$ for $0 \le t \le 3$. Sketch the velocity-time graph and find when the particle is at rest. [[2]]`,
  [R`An inverted parabola starting at $4$.`, R`$4 - t^2 = 0$.`],
  [R`|B1|Curve from $(0, 4)$ falling through $(2, 0)$ to $(3, -5)$`, R`|B1|At rest when $t = 2$ s`], R`At rest at $t = 2$ s`,
  R`The graph starts at $(0, 4)$, crosses the axis at $t = 2$ and ends at $(3, -5)$. The particle is at rest at $t = 2$ s.`,
  { solFig: A11g({ label: 'Velocity v = 4 − t² from (0, 4) through (2, 0) to (3, −5)', f: t => 4 - t * t, T: 3, y0: -5.5, y1: 5, ylab: 'v (m s⁻¹)', points: [{ x: 2, y: 0, label: '2', dy: -14 }] }), noFig: true }),
Q('A11.1-11', 3, R`A particle moves so that $s = 3t^2 - t^3$ m for $t \ge 0$. Find when it returns to $O$, and its displacement at $t = 1$. [[2]]`,
  [R`$t^2(3 - t) = 0$.`, R`$s(1) = 3 - 1$.`],
  [R`|B1|$t = 3$ s`, R`|B1|$2$ m`], R`$t = 3$ s; $2$ m`,
  R`$t^2(3 - t) = 0$, so it returns to $O$ at $t = 3$ s. $s(1) = 2$ m.`, NF),
Q('A11.1-12', 4, R`Particles $P$ and $Q$ move along the same line with $s_P = t^2 + 2t$ m and $s_Q = 12 + 4t - t^2$ m. Find when and where they meet. [[3]]`,
  [R`Set $s_P = s_Q$.`, R`$2t^2 - 2t - 12 = 0$.`],
  [R`|M1|$t^2 + 2t = 12 + 4t - t^2$`, R`|A1|$t = 3$ s`, R`|A1|$s = 15$ m`], R`$t = 3$ s at $s = 15$ m`,
  R`$2t^2 - 2t - 12 = 0$, so $t^2 - t - 6 = (t - 3)(t + 2) = 0$ and $t = 3$. Then $s = 9 + 6 = 15$ m.`, NF),
Q('A11.1-13', 4, R`A particle has $v = t^2 - 5t + 6$ m s$^{-1}$. Find the interval during which it moves in the negative direction. [[3]]`,
  [R`$v < 0$.`, R`$(t - 2)(t - 3) < 0$.`],
  [R`|M1|$v < 0$`, R`|M1|$(t - 2)(t - 3) < 0$`, R`|A1|$2 < t < 3$`], R`$2 < t < 3$`,
  R`$v = (t - 2)(t - 3) < 0$ between the roots, so $2 < t < 3$.`, NF),
Q('A11.1-14', 4, R`A particle moves so that $s = t(t - 4)^2$ m. Find its distance from $O$ when $t = 1$ and when $t = 6$. [[2]]`,
  [R`Substitute.`, R`$1 \times 9$ and $6 \times 4$.`],
  [R`|B1|$9$ m`, R`|B1|$24$ m`], R`$9$ m and $24$ m`,
  R`$s(1) = 1 \times 9 = 9$ m and $s(6) = 6 \times 4 = 24$ m.`, NF),
Q('A11.1-15', 5, R`A particle moves so that $s = t^3 - 7t^2 + 10t$ m. **(a)** Find the times when it is at $O$. **(b)** Find its displacement when $t = 3$. **(c)** State which side of $O$ it is on when $t = 1$ and when $t = 3$. [[5]]`,
  [R`$t(t^2 - 7t + 10) = 0$.`, R`Substitute for (b) and (c).`],
  [R`(a)|M1|$t(t - 2)(t - 5) = 0$`, R`(a)|A1|$t = 0, 2, 5$`, R`(b)|B1|$-6$ m`, R`(c)|B1|$t = 1$: $s = 4$, positive side`, R`(c)|B1|$t = 3$: negative side`], R`(a) $0, 2, 5$ (b) $-6$ m (c) positive, negative`,
  R`**(a)** $t(t - 2)(t - 5) = 0$: $t = 0$, $2$, $5$.
**(b)** $s(3) = 27 - 63 + 30 = -6$ m.
**(c)** $s(1) = 4 > 0$, so it is on the positive side; at $t = 3$, $s = -6$, on the negative side.`,
  { solFig: A11g({ label: 'Displacement s = t³ − 7t² + 10t: zero at t = 0, 2 and 5', f: t => t ** 3 - 7 * t * t + 10 * t, T: 5.5, y0: -13, y1: 10, yt: 4, points: [{ x: 2, y: 0, label: '2' }, { x: 5, y: 0, label: '5' }] }), noFig: true })
]};

CONTENT['A11.2'] = {
notes: R`
### Differentiating
$$v = \frac{ds}{dt} \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

### Turning points and distance
- The particle changes direction when $v = 0$ (and $v$ changes sign).
- To find a **distance**, split the time interval at each point where it changes direction and add the separate distances.

::: booklet
**Learn these:** $v = \frac{ds}{dt}$ and $a = \frac{dv}{dt}$.
:::

### Worked example 1
$s = t^3 - 6t^2 + 9t$. Find when the particle is at rest, and where.
- $v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$, so it is at rest at $t = 1$ and $t = 3$.
- $s(1) = 4$ m and $s(3) = 0$ m.

### Worked example 2: distance in the first $3$ seconds
For the same particle, find the distance travelled in the first $3$ s.
- It moves from $s = 0$ out to $s = 4$ (at $t = 1$) and back to $s = 0$ (at $t = 3$).
- Distance $= 4 + 4 = 8$ m.

**The trap:** working out $s(3) - s(0) = 0$. That's the displacement. The particle turned round at $t = 1$, so you must split the motion there.

### Watch out
- Differentiate $s$ to get $v$, and $v$ to get $a$. Don't differentiate twice when you only need $v$.
`,
questions: [
Q('A11.2-1', 1, R`A particle moves so that $s = 3t^2 + 2t$ m. Find $v$. [[1]]`,
  [R`$v = \frac{ds}{dt}$.`, R`Differentiate each term.`],
  [R`|B1|$v = 6t + 2$`], R`$v = 6t + 2$`,
  R`$v = \frac{ds}{dt} = 6t + 2$.`, NF),
Q('A11.2-2', 1, R`A particle has $v = 4t^3 - t$ m s$^{-1}$. Find $a$. [[1]]`,
  [R`$a = \frac{dv}{dt}$.`, R`Differentiate each term.`],
  [R`|B1|$a = 12t^2 - 1$`], R`$a = 12t^2 - 1$`,
  R`$a = \frac{dv}{dt} = 12t^2 - 1$.`, NF),
Q('A11.2-3', 1, R`A particle moves so that $s = t^3$ m. Find its acceleration when $t = 2$. [[1]]`,
  [R`Differentiate twice.`, R`$a = 6t$.`],
  [R`|B1|$12$ m s$^{-2}$`], R`$12$ m s$^{-2}$`,
  R`$v = 3t^2$ and $a = 6t$, so at $t = 2$, $a = 12$ m s$^{-2}$.`, NF),
Q('A11.2-4', 2, R`A particle moves so that $s = 2t^3 - 9t^2 + 12t$ m. Find $v$ and the times when the particle is at rest. [[3]]`,
  [R`Differentiate.`, R`$6t^2 - 18t + 12 = 6(t - 1)(t - 2)$.`],
  [R`|B1|$v = 6t^2 - 18t + 12$`, R`|M1|$6(t - 1)(t - 2) = 0$`, R`|A1|$t = 1$ and $t = 2$`], R`$v = 6t^2 - 18t + 12$; $t = 1, 2$`,
  R`$v = 6t^2 - 18t + 12 = 6(t - 1)(t - 2)$, so it is at rest at $t = 1$ and $t = 2$.`, NF),
Q('A11.2-5', 2, R`A particle moves so that $s = 5t - t^2$ m. Find its velocity and speed when $t = 4$. [[2]]`,
  [R`$v = 5 - 2t$.`, R`Speed is the magnitude.`],
  [R`|B1|$v = -3$ m s$^{-1}$`, R`|B1|Speed $3$ m s$^{-1}$`], R`$-3$ m s$^{-1}$; $3$ m s$^{-1}$`,
  R`$v = 5 - 2t$, so $v(4) = -3$ m s$^{-1}$ and the speed is $3$ m s$^{-1}$.`, NF),
Q('A11.2-6', 2, R`A particle has $v = 8t - 2t^2$ m s$^{-1}$. Find its acceleration when $t = 3$. [[2]]`,
  [R`$a = 8 - 4t$.`, R`Substitute $t = 3$.`],
  [R`|M1|$a = 8 - 4t$`, R`|A1|$-4$ m s$^{-2}$`], R`$-4$ m s$^{-2}$`,
  R`$a = 8 - 4t$, so $a(3) = -4$ m s$^{-2}$.`, NF),
Q('A11.2-7', 2, R`A particle moves so that $s = t^4 - 4t^3$ m. Find when its acceleration is zero (for $t > 0$). [[2]]`,
  [R`$v = 4t^3 - 12t^2$, $a = 12t^2 - 24t$.`, R`$12t(t - 2) = 0$.`],
  [R`|M1|$a = 12t^2 - 24t$`, R`|A1|$t = 2$ s`], R`$t = 2$ s`,
  R`$a = 12t^2 - 24t = 12t(t - 2)$, which is zero for $t > 0$ at $t = 2$ s.`, NF),
Q('A11.2-8', 3, R`A particle moves so that $s = t^3 - 6t^2 + 9t$ m. Find the times when it is at rest and its displacement at each of these times. [[4]]`,
  [R`$v = 3t^2 - 12t + 9$.`, R`Factorise: $3(t - 1)(t - 3)$.`],
  [R`|M1|$v = 3t^2 - 12t + 9$`, R`|A1|$t = 1$ and $t = 3$`, R`|B1|$s(1) = 4$ m`, R`|B1|$s(3) = 0$ m`], R`$t = 1$ at $4$ m; $t = 3$ at $0$ m`,
  R`$v = 3(t - 1)(t - 3)$: at rest at $t = 1$ ($s = 4$ m) and $t = 3$ ($s = 0$, back at $O$).`, { fig: FIGS['A11.1-cubic'] }),
Q('A11.2-9', 3, R`A particle has $v = 2t^2 - 12t + 10$ m s$^{-1}$. Find its acceleration each time it is at rest. [[3]]`,
  [R`$v = 2(t - 1)(t - 5)$.`, R`$a = 4t - 12$.`],
  [R`|M1|$t = 1$ and $t = 5$`, R`|M1|$a = 4t - 12$`, R`|A1|$-8$ m s$^{-2}$ and $8$ m s$^{-2}$`], R`$-8$ and $8$ m s$^{-2}$`,
  R`$v = 2(t - 1)(t - 5) = 0$ at $t = 1$ and $t = 5$. $a = 4t - 12$ gives $-8$ m s$^{-2}$ and $8$ m s$^{-2}$.`, NF),
Q('A11.2-10', 3, R`A particle moves so that $s = 4\sqrt{t}$ m for $t > 0$. Find its velocity when $t = 4$. [[2]]`,
  [R`$s = 4t^{\frac12}$.`, R`$v = 2t^{-\frac12}$.`],
  [R`|M1|$v = 2t^{-\frac12}$`, R`|A1|$1$ m s$^{-1}$`], R`$1$ m s$^{-1}$`,
  R`$v = 4 \times \frac12 t^{-\frac12} = \frac{2}{\sqrt t}$, so $v(4) = 1$ m s$^{-1}$.`, NF),
Q('A11.2-11', 3, R`A particle moves so that $s = t^3 - 9t^2 + 24t$ m. Find the distance it travels in the first $4$ s. [[4]]`,
  [R`$v = 3(t - 2)(t - 4)$: it turns at $t = 2$.`, R`$s(2) = 20$, $s(4) = 16$.`],
  [R`|M1|$v = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)$`, R`|A1|Turns at $t = 2$`, R`|M1|$s(2) = 20$, $s(4) = 16$`, R`|A1|$24$ m`], R`$24$ m`,
  R`It moves out to $s(2) = 20$ m, then back to $s(4) = 16$ m. Distance $= 20 + 4 = 24$ m.`, NF),
Q('A11.2-12', 4, R`A particle has $v = 3t^2 - 12t + 9$ m s$^{-1}$ and $s = t^3 - 6t^2 + 9t$ m. Find the distance travelled in the first $3$ s. [[4]]`,
  [R`It changes direction at $t = 1$.`, R`$s(1) = 4$, $s(3) = 0$.`],
  [R`|M1|$v = 0$ at $t = 1$`, R`|M1|$s(1) = 4$`, R`|M1|$s(3) = 0$`, R`|A1|$8$ m`], R`$8$ m`,
  R`$v = 3(t - 1)(t - 3)$ changes sign at $t = 1$. It goes out $4$ m and back $4$ m: $8$ m.`, { fig: FIGS['A11.1-cubic'] }),
Q('A11.2-13', 4, R`A particle moves so that $s = 2t^3 - 15t^2 + 36t$ m. Find its acceleration each time it is at rest. [[4]]`,
  [R`$v = 6t^2 - 30t + 36 = 6(t - 2)(t - 3)$.`, R`$a = 12t - 30$.`],
  [R`|M1|$v = 6(t - 2)(t - 3)$`, R`|A1|$t = 2$ and $t = 3$`, R`|M1|$a = 12t - 30$`, R`|A1|$-6$ and $6$ m s$^{-2}$`], R`$-6$ and $6$ m s$^{-2}$`,
  R`$v = 0$ at $t = 2$ and $t = 3$. $a = 12t - 30$ gives $-6$ m s$^{-2}$ and $6$ m s$^{-2}$.`, NF),
Q('A11.2-14', 4, R`A particle of mass $0.5$ kg moves so that $s = t^3 - 2t^2$ m. Find the resultant force on it when $t = 3$. [[3]]`,
  [R`$a = 6t - 4$.`, R`$F = ma$.`],
  [R`|M1|$a = 6t - 4$`, R`|A1|$a(3) = 14$`, R`|A1|$7$ N`], R`$7$ N`,
  R`$v = 3t^2 - 4t$, $a = 6t - 4$, so $a(3) = 14$ m s$^{-2}$ and $F = 0.5 \times 14 = 7$ N.`, { fig: Fig.particle({ label: 'Particle with resultant force F in the direction of motion', forces: [{ deg: 0, label: 'F', len: 80 }] }) }),
Q('A11.2-15', 5, R`A particle moves so that $s = t^3 - 6t^2 + 9t + 2$ m for $0 \le t \le 4$. **(a)** Find $v$. **(b)** Find the times when it is at rest. **(c)** Find its acceleration at those times. **(d)** Find the total distance travelled. [[8]]`,
  [R`It turns at $t = 1$ and $t = 3$.`, R`$s(0) = 2$, $s(1) = 6$, $s(3) = 2$, $s(4) = 6$.`],
  [R`(a)|B1|$v = 3t^2 - 12t + 9$`, R`(b)|M1|$3(t - 1)(t - 3) = 0$`, R`(b)|A1|$t = 1$ and $3$`, R`(c)|M1|$a = 6t - 12$`, R`(c)|A1|$-6$ and $6$ m s$^{-2}$`, R`(d)|M1|$s(0) = 2$, $s(1) = 6$, $s(3) = 2$, $s(4) = 6$`, R`(d)|M1|$4 + 4 + 4$`, R`(d)|A1|$12$ m`], R`(b) $t = 1, 3$ (c) $-6$, $6$ m s$^{-2}$ (d) $12$ m`,
  R`**(a)** $v = 3t^2 - 12t + 9$.
**(b)** $3(t - 1)(t - 3) = 0$: $t = 1$ and $t = 3$.
**(c)** $a = 6t - 12$: $-6$ m s$^{-2}$ at $t = 1$, $6$ m s$^{-2}$ at $t = 3$.
**(d)** $s$ goes $2 \to 6 \to 2 \to 6$: distance $4 + 4 + 4 = 12$ m.`,
  { solFig: A11g({ label: 'Displacement s = t³ − 6t² + 9t + 2 for 0 to 4: up to 6, down to 2, up to 6', f: t => t ** 3 - 6 * t * t + 9 * t + 2, T: 4, y0: 0, y1: 7, points: [{ x: 1, y: 6, label: '(1, 6)' }, { x: 3, y: 2, label: '(3, 2)', dy: 14 }] }), noFig: true })
]};

CONTENT['A11.3'] = {
notes: R`
### Greatest and least values
- **Greatest or least displacement:** solve $\frac{ds}{dt} = 0$, that is $v = 0$.
- **Greatest or least velocity:** solve $\frac{dv}{dt} = 0$, that is $a = 0$.
- Check which it is with the second derivative, or by looking at the shape of the graph.
- On a restricted interval, also check the **end points**.

::: booklet
**Learn this:** maximum velocity happens when $a = 0$; maximum displacement when $v = 0$.
:::

### Worked example 1
A particle has $v = 12t - 3t^2$. Find its maximum velocity.
- $a = 12 - 6t = 0$ at $t = 2$, and $\frac{da}{dt} = -6 < 0$, so it's a maximum.
- $v(2) = 24 - 12 = 12$ m s$^{-1}$.

### Worked example 2: end points
$v = t^2 - 2t - 3$ for $0 \le t \le 4$. Find the greatest speed.
- $a = 2t - 2 = 0$ at $t = 1$: $v(1) = -4$ (a minimum velocity).
- End points: $v(0) = -3$, $v(4) = 5$.
- Greatest speed $= 5$ m s$^{-1}$ at $t = 4$.

**The trap:** answering $4$ from the turning point. Speed is $|v|$, and here the largest value of $|v|$ is at an end point.

### Watch out
- Say whether your stationary point is a maximum or minimum, with a reason.
`,
questions: [
Q('A11.3-1', 1, R`A particle has $v = 12t - 3t^2$ m s$^{-1}$. Find its maximum velocity. [[2]]`,
  [R`Set $a = 0$.`, R`$12 - 6t = 0$.`],
  [R`|M1|$a = 12 - 6t = 0$, $t = 2$`, R`|A1|$12$ m s$^{-1}$`], R`$12$ m s$^{-1}$`,
  R`$a = 12 - 6t = 0$ at $t = 2$, giving $v = 24 - 12 = 12$ m s$^{-1}$.`, NF),
Q('A11.3-2', 1, R`A ball's height is $s = 20t - 5t^2$ m. Find its greatest height. [[2]]`,
  [R`Set $v = 0$.`, R`$20 - 10t = 0$.`],
  [R`|M1|$v = 20 - 10t = 0$, $t = 2$`, R`|A1|$20$ m`], R`$20$ m`,
  R`$v = 20 - 10t = 0$ at $t = 2$, so $s = 40 - 20 = 20$ m.`, NF),
Q('A11.3-3', 1, R`Explain how to find the time at which a particle's velocity is greatest. [[1]]`,
  [R`Velocity is stationary.`, R`Its derivative is ...`],
  [R`|B1|Solve $\frac{dv}{dt} = 0$, i.e. $a = 0$ (and check it's a maximum)`], R`Set $a = 0$`,
  R`Solve $a = \frac{dv}{dt} = 0$, then check (for example with $\frac{d^2v}{dt^2} < 0$) that it's a maximum.`, NF),
Q('A11.3-4', 2, R`A particle has $v = 6t - t^2$ m s$^{-1}$. Find the maximum velocity. [[2]]`,
  [R`$a = 6 - 2t$.`, R`$t = 3$.`],
  [R`|M1|$6 - 2t = 0$`, R`|A1|$9$ m s$^{-1}$`], R`$9$ m s$^{-1}$`,
  R`$a = 6 - 2t = 0$ at $t = 3$: $v = 18 - 9 = 9$ m s$^{-1}$.`, { fig: A11g({ label: 'Velocity v = 6t − t², peaking at (3, 9)', f: t => 6 * t - t * t, T: 6, y0: -1, y1: 10.5, ylab: 'v (m s⁻¹)', points: [{ x: 3, y: 9, label: '?' }] }) }),
Q('A11.3-5', 2, R`A particle moves so that $s = 24t - 2t^3$ m for $t \ge 0$. Find its greatest displacement. [[3]]`,
  [R`$v = 24 - 6t^2$.`, R`$t = 2$.`],
  [R`|M1|$v = 24 - 6t^2 = 0$`, R`|A1|$t = 2$`, R`|A1|$32$ m`], R`$32$ m`,
  R`$v = 24 - 6t^2 = 0$ gives $t = 2$ ($t \ge 0$). $s = 48 - 16 = 32$ m.`, NF),
Q('A11.3-6', 2, R`For $s = 24t - 2t^3$, show that $t = 2$ gives a maximum displacement. [[1]]`,
  [R`Find $\frac{d^2s}{dt^2}$.`, R`$-12t$.`],
  [R`|B1|$\frac{d^2s}{dt^2} = -12t = -24 < 0$, so maximum`], R`$\frac{d^2s}{dt^2} = -24 < 0$`,
  R`$\frac{d^2s}{dt^2} = -12t$, which is $-24 < 0$ at $t = 2$, so it is a maximum.`, NF),
Q('A11.3-7', 2, R`A particle has $v = 2 + 8t - 2t^2$ m s$^{-1}$ for $0 \le t \le 5$. Find its greatest velocity. [[2]]`,
  [R`$a = 8 - 4t$.`, R`$t = 2$.`],
  [R`|M1|$8 - 4t = 0$`, R`|A1|$10$ m s$^{-1}$`], R`$10$ m s$^{-1}$`,
  R`$a = 0$ at $t = 2$, where $v = 2 + 16 - 8 = 10$ m s$^{-1}$ (larger than the end values $2$ and $-8$).`, NF),
Q('A11.3-8', 3, R`A particle has $v = t^2 - 6t + 10$ m s$^{-1}$. Find its minimum velocity and show it is a minimum. [[3]]`,
  [R`$a = 2t - 6$.`, R`$\frac{da}{dt} = 2$.`],
  [R`|M1|$2t - 6 = 0$`, R`|A1|$v = 1$ m s$^{-1}$ at $t = 3$`, R`|B1|$\frac{d^2v}{dt^2} = 2 > 0$, so minimum`], R`$1$ m s$^{-1}$`,
  R`$a = 2t - 6 = 0$ at $t = 3$, $v = 9 - 18 + 10 = 1$ m s$^{-1}$. $\frac{d^2v}{dt^2} = 2 > 0$, so it is a minimum.`, NF),
Q('A11.3-9', 3, R`A particle has $v = t^2 - 2t - 3$ m s$^{-1}$ for $0 \le t \le 4$. Find its greatest speed. [[3]]`,
  [R`Check the turning point and the end points.`, R`Speed is $|v|$.`],
  [R`|M1|$a = 0$ at $t = 1$, $v = -4$`, R`|M1|$v(0) = -3$, $v(4) = 5$`, R`|A1|$5$ m s$^{-1}$ at $t = 4$`], R`$5$ m s$^{-1}$`,
  R`At $t = 1$, $v = -4$; at the ends $v(0) = -3$ and $v(4) = 5$. The greatest speed is $5$ m s$^{-1}$, at $t = 4$.`, { fig: A11g({ label: 'Velocity v = t² − 2t − 3 from (0, −3) down to (1, −4) and up to (4, 5)', f: t => t * t - 2 * t - 3, T: 4, y0: -5, y1: 6, ylab: 'v (m s⁻¹)' }) }),
Q('A11.3-10', 3, R`A particle moves so that $s = t^3 - 6t^2$ m for $0 \le t \le 5$. Find its greatest distance from $O$. [[3]]`,
  [R`$v = 3t^2 - 12t$: $t = 4$.`, R`Compare $|s(4)|$ with $|s(5)|$.`],
  [R`|M1|$v = 3t(t - 4) = 0$`, R`|M1|$s(4) = -32$, $s(5) = -25$`, R`|A1|$32$ m`], R`$32$ m`,
  R`$v = 0$ at $t = 4$, where $s = 64 - 96 = -32$. At $t = 5$, $s = -25$. The greatest distance is $32$ m.`, NF),
Q('A11.3-11', 3, R`A particle has $v = 4t - t^3$ m s$^{-1}$ for $t \ge 0$. Find its maximum velocity. [[3]]`,
  [R`$a = 4 - 3t^2$.`, R`$t = \frac{2}{\sqrt3}$.`],
  [R`|M1|$4 - 3t^2 = 0$`, R`|A1|$t = 1.15$`, R`|A1|$3.08$ m s$^{-1}$`], R`$3.08$ m s$^{-1}$`,
  R`$t = \sqrt{\frac43} = 1.155$, and $v = 4(1.155) - 1.155^3 = 3.08$ m s$^{-1}$.`, NF),
Q('A11.3-12', 4, R`A particle moves so that $s = t^3 - 12t + 5$ m for $t \ge 0$. Find its least displacement, and show it is a minimum. [[3]]`,
  [R`$v = 3t^2 - 12$.`, R`$\frac{d^2s}{dt^2} = 6t$.`],
  [R`|M1|$3t^2 - 12 = 0$, $t = 2$`, R`|A1|$s = -11$ m`, R`|B1|$\frac{d^2s}{dt^2} = 12 > 0$, minimum`], R`$-11$ m`,
  R`$v = 0$ at $t = 2$: $s = 8 - 24 + 5 = -11$ m. $\frac{d^2s}{dt^2} = 12 > 0$, so it is a minimum.`, NF),
Q('A11.3-13', 4, R`A car's velocity is modelled by $v = 0.3t^2 - 0.01t^3$ m s$^{-1}$ for $0 \le t \le 30$. Find its maximum velocity. [[4]]`,
  [R`$a = 0.6t - 0.03t^2$.`, R`$t = 20$.`],
  [R`|M1|$a = 0.6t - 0.03t^2$`, R`|M1|$0.03t(20 - t) = 0$`, R`|A1|$t = 20$`, R`|A1|$40$ m s$^{-1}$`], R`$40$ m s$^{-1}$`,
  R`$a = 0.03t(20 - t) = 0$ at $t = 20$. $v = 120 - 80 = 40$ m s$^{-1}$, larger than the end values $0$ and $0$.`, { fig: A11g({ label: 'Velocity of the car, rising to 40 at t = 20 and back to 0 at t = 30', f: t => 0.3 * t * t - 0.01 * t ** 3, T: 30, y0: -2, y1: 45, ylab: 'v (m s⁻¹)', xt: 5, yt: 10 }) }),
Q('A11.3-14', 4, R`A particle has $v = 9t^2 - t^3$ m s$^{-1}$ for $0 \le t \le 9$. Find its maximum acceleration. [[3]]`,
  [R`$a = 18t - 3t^2$.`, R`$\frac{da}{dt} = 18 - 6t = 0$.`],
  [R`|M1|$a = 18t - 3t^2$`, R`|M1|$18 - 6t = 0$`, R`|A1|$27$ m s$^{-2}$`], R`$27$ m s$^{-2}$`,
  R`$a = 18t - 3t^2$, stationary at $t = 3$: $a = 54 - 27 = 27$ m s$^{-2}$.`, NF),
Q('A11.3-15', 5, R`A lift's velocity is modelled by $v = 0.2t(10 - t)$ m s$^{-1}$ for $0 \le t \le 10$. **(a)** Find the maximum velocity. **(b)** Find the acceleration when $t = 2$. **(c)** Find the greatest magnitude of the acceleration. [[6]]`,
  [R`$v = 2t - 0.2t^2$.`, R`$a = 2 - 0.4t$ is largest in size at an end point.`],
  [R`(a)|M1|$a = 2 - 0.4t = 0$`, R`(a)|A1|$5$ m s$^{-1}$`, R`(b)|B1|$1.2$ m s$^{-2}$`, R`(c)|M1|$a$ is linear, so check $t = 0$ and $t = 10$`, R`(c)|A1|$|a| = 2$ m s$^{-2}$`, R`(c)|B1|At both $t = 0$ and $t = 10$`], R`(a) $5$ m s$^{-1}$ (b) $1.2$ m s$^{-2}$ (c) $2$ m s$^{-2}$`,
  R`**(a)** $a = 2 - 0.4t = 0$ at $t = 5$: $v = 0.2 \times 5 \times 5 = 5$ m s$^{-1}$.
**(b)** $a(2) = 2 - 0.8 = 1.2$ m s$^{-2}$.
**(c)** $a$ is linear in $t$, so its size is greatest at the ends: $a(0) = 2$ and $a(10) = -2$. Greatest magnitude $2$ m s$^{-2}$.`, { fig: A11g({ label: 'Lift velocity v = 0.2t(10 − t), peaking at 5 when t = 5', f: t => 0.2 * t * (10 - t), T: 10, y0: -0.5, y1: 6, ylab: 'v (m s⁻¹)' }) })
]};

CONTENT['A11.4'] = {
notes: R`
### Integrating
$$s = \int v \, dt \qquad v = \int a \, dt$$
Each integration gives a constant $c$. Find it from a known value, such as "starts from rest at $O$".

### Displacement and distance
- Displacement from $t_1$ to $t_2$: $\displaystyle\int_{t_1}^{t_2} v \, dt$.
- **Distance:** split at the times when $v = 0$ and add the **sizes** of each part.

[[fig:A11.4-area]]

::: booklet
**Learn these:** $s = \int v \, dt$ and $v = \int a \, dt$, and always find the constant of integration.
:::

### Worked example 1
$a = 6t - 4$, and the particle starts from rest at $O$. Find $s$.
- $v = 3t^2 - 4t + c$, and $v(0) = 0$ gives $c = 0$.
- $s = t^3 - 2t^2 + c'$, and $s(0) = 0$ gives $c' = 0$.

### Worked example 2: distance when the velocity changes sign
$v = t^2 - 4t + 3$. Find the distance travelled for $0 \le t \le 3$.
- $v = (t - 1)(t - 3)$, which is zero at $t = 1$.
- $\int_0^1 v \, dt = \frac43$ and $\int_1^3 v \, dt = -\frac43$.
- Distance $= \frac43 + \frac43 = \frac83$ m.

**The trap:** working out $\int_0^3 v \, dt = 0$ and calling it the distance. Area below the axis cancels area above it.

### Watch out
- Don't forget $+c$ for an indefinite integral.
`,
questions: [
Q('A11.4-1', 1, R`A particle has $v = 3t^2$ m s$^{-1}$ and starts at $O$. Find $s$. [[1]]`,
  [R`Integrate.`, R`$s = 0$ at $t = 0$, so $c = 0$.`],
  [R`|B1|$s = t^3$`], R`$s = t^3$`,
  R`$s = t^3 + c$, and $s(0) = 0$ gives $c = 0$, so $s = t^3$.`, NF),
Q('A11.4-2', 1, R`A particle has $a = 6t$ m s$^{-2}$ and initial velocity $2$ m s$^{-1}$. Find $v$. [[1]]`,
  [R`$v = 3t^2 + c$.`, R`$v(0) = 2$.`],
  [R`|B1|$v = 3t^2 + 2$`], R`$v = 3t^2 + 2$`,
  R`$v = 3t^2 + c$ with $c = 2$.`, NF),
Q('A11.4-3', 1, R`A particle has $v = 4t$ m s$^{-1}$. Find its displacement from $t = 0$ to $t = 2$. [[1]]`,
  [R`$\int_0^2 4t\,dt$.`, R`$[2t^2]_0^2$.`],
  [R`|B1|$8$ m`], R`$8$ m`,
  R`$\int_0^2 4t\,dt = [2t^2]_0^2 = 8$ m.`, NF),
Q('A11.4-4', 2, R`A particle has $v = 6t^2 - 2t$ m s$^{-1}$ and is $5$ m from $O$ when $t = 0$. Find $s$. [[2]]`,
  [R`$s = 2t^3 - t^2 + c$.`, R`$c = 5$.`],
  [R`|M1|$s = 2t^3 - t^2 + c$`, R`|A1|$s = 2t^3 - t^2 + 5$`], R`$s = 2t^3 - t^2 + 5$`,
  R`Integrating, $s = 2t^3 - t^2 + c$, and $s(0) = 5$ gives $c = 5$.`, NF),
Q('A11.4-5', 2, R`A particle starts from rest with $a = 4 - 2t$ m s$^{-2}$. Find its velocity when $t = 3$. [[2]]`,
  [R`$v = 4t - t^2 + c$, $c = 0$.`, R`Substitute $t = 3$.`],
  [R`|M1|$v = 4t - t^2$`, R`|A1|$3$ m s$^{-1}$`], R`$3$ m s$^{-1}$`,
  R`$v = 4t - t^2$ (starting from rest), so $v(3) = 12 - 9 = 3$ m s$^{-1}$.`, NF),
Q('A11.4-6', 2, R`A particle has $v = t^2 + 1$ m s$^{-1}$. Find the distance travelled between $t = 1$ and $t = 3$. [[2]]`,
  [R`$v > 0$ throughout, so just integrate.`, R`$\left[\frac{t^3}{3} + t\right]_1^3$.`],
  [R`|M1|$\left[\frac{t^3}{3} + t\right]_1^3$`, R`|A1|$\frac{32}{3} = 10.7$ m`], R`$10.7$ m`,
  R`$(9 + 3) - \left(\frac13 + 1\right) = \frac{32}{3} = 10.7$ m.`, NF),
Q('A11.4-7', 2, R`A particle has $v = 12 - 3t^2$ m s$^{-1}$. Find the distance travelled in the first $2$ s. [[2]]`,
  [R`$v \ge 0$ for $0 \le t \le 2$.`, R`$[12t - t^3]_0^2$.`],
  [R`|M1|$\int_0^2 (12 - 3t^2)\,dt$`, R`|A1|$16$ m`], R`$16$ m`,
  R`$v \ge 0$ on $[0, 2]$, so the distance is $[12t - t^3]_0^2 = 24 - 8 = 16$ m.`, NF),
Q('A11.4-8', 3, R`A particle has $v = t^2 - 4t + 3$ m s$^{-1}$. Find the distance travelled for $0 \le t \le 3$. [[4]]`,
  [R`$v = 0$ at $t = 1$: split there.`, R`$\int_0^1 = \frac43$, $\int_1^3 = -\frac43$.`],
  [R`|M1|Splits at $t = 1$`, R`|M1|$\int_0^1 v\,dt = \frac43$`, R`|M1|$\int_1^3 v\,dt = -\frac43$`, R`|A1|$\frac83$ m`], R`$\frac83$ m`,
  R`$\left[\frac{t^3}{3} - 2t^2 + 3t\right]$: from $0$ to $1$ gives $\frac43$; from $1$ to $3$ gives $0 - \frac43 = -\frac43$. Distance $\frac83 = 2.67$ m.`, { fig: FIGS['A11.4-area'] }),
Q('A11.4-9', 3, R`A particle starts from rest at $O$ with $a = 6t - 4$ m s$^{-2}$. Find $v$ and $s$, and the time when it returns to $O$. [[4]]`,
  [R`Both constants are $0$.`, R`$t^3 - 2t^2 = 0$.`],
  [R`|B1|$v = 3t^2 - 4t$`, R`|B1|$s = t^3 - 2t^2$`, R`|M1|$t^2(t - 2) = 0$`, R`|A1|$t = 2$ s`], R`$v = 3t^2 - 4t$, $s = t^3 - 2t^2$; $t = 2$ s`,
  R`$v = 3t^2 - 4t$ and $s = t^3 - 2t^2$. $s = t^2(t - 2) = 0$ at $t = 2$ s.`, NF),
Q('A11.4-10', 3, R`A lift's velocity is $v = 0.2t(10 - t)$ m s$^{-1}$ for $0 \le t \le 10$. Find the distance it travels. [[2]]`,
  [R`$v \ge 0$ throughout.`, R`$\int_0^{10} (2t - 0.2t^2)\,dt$.`],
  [R`|M1|$\left[t^2 - \frac{0.2t^3}{3}\right]_0^{10}$`, R`|A1|$33.3$ m`], R`$33.3$ m`,
  R`$100 - \frac{200}{3} = \frac{100}{3} = 33.3$ m.`, NF),
Q('A11.4-11', 3, R`A particle starts at $O$ with $v = 3t^2 - 12t + 9$ m s$^{-1}$. Find the distance travelled in the first $4$ s. [[4]]`,
  [R`$s = t^3 - 6t^2 + 9t$; it turns at $t = 1$ and $t = 3$.`, R`$s(1) = 4$, $s(3) = 0$, $s(4) = 4$.`],
  [R`|B1|$s = t^3 - 6t^2 + 9t$`, R`|M1|Turns at $t = 1$ and $3$`, R`|M1|$s(1) = 4$, $s(3) = 0$, $s(4) = 4$`, R`|A1|$12$ m`], R`$12$ m`,
  R`$s$ goes $0 \to 4 \to 0 \to 4$, so the distance is $4 + 4 + 4 = 12$ m.`, NF),
Q('A11.4-12', 4, R`A particle has $a = 2t - 6$ m s$^{-2}$ and $v = 8$ m s$^{-1}$ when $t = 0$. It starts at $O$. Find $v$, the times when it is at rest, and its displacement at the first of these. [[4]]`,
  [R`$v = t^2 - 6t + 8$.`, R`$s = \frac{t^3}{3} - 3t^2 + 8t$.`],
  [R`|B1|$v = t^2 - 6t + 8$`, R`|B1|$t = 2$ and $t = 4$`, R`|M1|$s = \frac{t^3}{3} - 3t^2 + 8t$`, R`|A1|$s(2) = 6.67$ m`], R`$t = 2, 4$; $6.67$ m`,
  R`$v = t^2 - 6t + 8 = (t - 2)(t - 4)$: at rest at $t = 2$ and $4$. $s(2) = \frac83 - 12 + 16 = \frac{20}{3} = 6.67$ m.`, NF),
Q('A11.4-13', 4, R`A particle has $v = kt(4 - t)$ m s$^{-1}$ for $0 \le t \le 4$, and travels $32$ m. Find $k$. [[3]]`,
  [R`$\int_0^4 kt(4 - t)\,dt$.`, R`$k\left[2t^2 - \frac{t^3}{3}\right]_0^4$.`],
  [R`|M1|$k\left[2t^2 - \frac{t^3}{3}\right]_0^4$`, R`|M1|$\frac{32}{3}k = 32$`, R`|A1|$k = 3$`], R`$k = 3$`,
  R`$k\left(32 - \frac{64}{3}\right) = \frac{32}{3}k = 32$, so $k = 3$.`, NF),
Q('A11.4-14', 4, R`A particle has $v = 2t$ m s$^{-1}$ for $0 \le t \le 3$ and $v = 6$ m s$^{-1}$ for $3 < t \le 5$. Find the total distance travelled. [[3]]`,
  [R`Two parts.`, R`$\int_0^3 2t\,dt + 6 \times 2$.`],
  [R`|M1|$\int_0^3 2t\,dt = 9$`, R`|M1|$6 \times 2 = 12$`, R`|A1|$21$ m`], R`$21$ m`,
  R`$[t^2]_0^3 = 9$, then $12$ m at constant speed: total $21$ m.`, { fig: A9g({ label: 'Velocity rising from 0 to 6 over 3 s, then constant at 6 until t = 5', pts: [[0, 0], [3, 6], [5, 6]], xt: 1, yt: 2, y1: 7 }) }),
Q('A11.4-15', 5, R`A particle moves with $a = 6 - 2t$ m s$^{-2}$. At $t = 0$ it is at $O$ with velocity $7$ m s$^{-1}$. **(a)** Find $v$. **(b)** Find when it comes to rest. **(c)** Find its displacement then. **(d)** Find its maximum velocity. [[8]]`,
  [R`$v = 7 + 6t - t^2$.`, R`$s = 7t + 3t^2 - \frac{t^3}{3}$.`],
  [R`(a)|M1|$v = 6t - t^2 + c$`, R`(a)|A1|$v = 7 + 6t - t^2$`, R`(b)|M1|$t^2 - 6t - 7 = 0$`, R`(b)|A1|$t = 7$ s`, R`(c)|M1|$s = 7t + 3t^2 - \frac{t^3}{3}$`, R`(c)|A1|$81.7$ m`, R`(d)|M1|$a = 0$ at $t = 3$`, R`(d)|A1|$16$ m s$^{-1}$`], R`(a) $v = 7 + 6t - t^2$ (b) $7$ s (c) $81.7$ m (d) $16$ m s$^{-1}$`,
  R`**(a)** $v = 7 + 6t - t^2$.
**(b)** $(t - 7)(t + 1) = 0$, so $t = 7$ s.
**(c)** $s(7) = 49 + 147 - \frac{343}{3} = 81.7$ m.
**(d)** $a = 0$ at $t = 3$: $v = 7 + 18 - 9 = 16$ m s$^{-1}$.`, NF)
]};

CONTENT['A11.5'] = {
notes: R`
### Where the suvat formulae come from
If $a$ is **constant**:
- $v = \int a\,dt = at + c$. At $t = 0$, $v = u$, so $v = u + at$.
- $s = \int (u + at)\,dt = ut + \frac12at^2 + c$. At $t = 0$, $s = 0$, so $s = ut + \frac12at^2$.
- The others follow by algebra. For example, substituting $t = \frac{v - u}{a}$ into $s = ut + \frac12at^2$ gives $v^2 = u^2 + 2as$.

### Choosing a method
- Constant acceleration: suvat or calculus both work.
- Acceleration that depends on $t$: **only** calculus works.

::: booklet
**Learn this:** suvat is the special case of calculus when $a$ is constant.
:::

### Worked example 1
Show that $v^2 = u^2 + 2as$.
- From $v = u + at$, $t = \frac{v - u}{a}$.
- $s = u\left(\frac{v - u}{a}\right) + \frac12a\left(\frac{v - u}{a}\right)^2 = \frac{2u(v - u) + (v - u)^2}{2a} = \frac{v^2 - u^2}{2a}$.
- So $v^2 = u^2 + 2as$.

### Worked example 2: is it constant?
$s = t^3 + 2t$. Can suvat be used?
- $v = 3t^2 + 2$ and $a = 6t$, which changes with time. So **no**.

**The trap:** using $u = 2$ and "$a = 6$" in suvat. The acceleration is only $6$ at the instant $t = 1$.

### Watch out
- Check the acceleration is constant before reaching for suvat.
`,
questions: [
Q('A11.5-1', 1, R`A particle moves with constant acceleration $a$ and initial velocity $u$. Use integration to show that $v = u + at$. [[2]]`,
  [R`$v = \int a\,dt$.`, R`Use $v = u$ at $t = 0$.`],
  [R`|M1|$v = at + c$`, R`|A1|$c = u$, so $v = u + at$`], R`$v = u + at$`,
  R`$v = \int a\,dt = at + c$. When $t = 0$, $v = u$, so $c = u$ and $v = u + at$.`, NF),
Q('A11.5-2', 1, R`Use integration to show that $s = ut + \frac12at^2$, given $s = 0$ when $t = 0$. [[2]]`,
  [R`Integrate $v = u + at$.`, R`$c = 0$.`],
  [R`|M1|$s = ut + \frac12at^2 + c$`, R`|A1|$c = 0$`], R`$s = ut + \frac12at^2$`,
  R`$s = \int(u + at)\,dt = ut + \frac12at^2 + c$, and $s(0) = 0$ gives $c = 0$.`, NF),
Q('A11.5-3', 1, R`State the condition needed for the suvat formulae to be used. [[1]]`,
  [R`What must be true of $a$?`, R`It mustn't change.`],
  [R`|B1|The acceleration must be constant`], R`Constant acceleration`,
  R`The suvat formulae only apply when the acceleration is constant.`, NF),
Q('A11.5-4', 2, R`A particle has $a = 3t$ m s$^{-2}$. Explain which method you should use to find its velocity. [[1]]`,
  [R`Is $a$ constant?`, R`It depends on $t$.`],
  [R`|B1|Calculus (integration), because $a$ varies with $t$`], R`Integration`,
  R`The acceleration depends on $t$, so it isn't constant and suvat can't be used. Integrate: $v = \frac32t^2 + c$.`, NF),
Q('A11.5-5', 2, R`Starting from $v = u + at$ and $s = ut + \frac12at^2$, show that $v^2 = u^2 + 2as$. [[3]]`,
  [R`Square $v = u + at$.`, R`$v^2 = u^2 + 2uat + a^2t^2$.`],
  [R`|M1|$v^2 = u^2 + 2uat + a^2t^2$`, R`|M1|$= u^2 + 2a\left(ut + \frac12at^2\right)$`, R`|A1|$= u^2 + 2as$`], R`Shown`,
  R`$v^2 = (u + at)^2 = u^2 + 2uat + a^2t^2 = u^2 + 2a\left(ut + \frac12at^2\right) = u^2 + 2as$.`, NF),
Q('A11.5-6', 2, R`Starting from $v = u + at$ and $s = ut + \frac12at^2$, show that $s = \frac{(u + v)t}{2}$. [[2]]`,
  [R`$at = v - u$.`, R`$s = ut + \frac12(v - u)t$.`],
  [R`|M1|$s = ut + \frac12(at)t = ut + \frac12(v - u)t$`, R`|A1|$= \frac{(u + v)t}{2}$`], R`Shown`,
  R`$at = v - u$, so $s = ut + \frac12(v - u)t = \frac{2u + v - u}{2}t = \frac{(u + v)t}{2}$.`, NF),
Q('A11.5-7', 2, R`Starting from $s = ut + \frac12at^2$ and $v = u + at$, show that $s = vt - \frac12at^2$. [[2]]`,
  [R`$u = v - at$.`, R`Substitute.`],
  [R`|M1|$s = (v - at)t + \frac12at^2$`, R`|A1|$= vt - \frac12at^2$`], R`Shown`,
  R`$u = v - at$, so $s = vt - at^2 + \frac12at^2 = vt - \frac12at^2$.`, NF),
Q('A11.5-8', 3, R`A particle has $v = 3 + 2t$ m s$^{-1}$. **(a)** Show that its acceleration is constant. **(b)** Use a suvat formula to find the distance travelled in the first $4$ s, and check by integration. [[3]]`,
  [R`$a = 2$.`, R`$s = 3(4) + \frac12(2)(16)$.`],
  [R`(a)|B1|$a = \frac{dv}{dt} = 2$, constant`, R`(b)|M1|$s = 12 + 16$`, R`(b)|A1|$28$ m, and $[3t + t^2]_0^4 = 28$`], R`(b) $28$ m`,
  R`**(a)** $a = 2$, which doesn't depend on $t$.
**(b)** $u = 3$, $a = 2$: $s = 12 + 16 = 28$ m. Integration: $[3t + t^2]_0^4 = 28$ m.`, NF),
Q('A11.5-9', 3, R`A particle moves so that $s = 4t + 3t^2$ m. Show that it moves with constant acceleration, and state $u$ and $a$. [[2]]`,
  [R`$v = 4 + 6t$.`, R`$a = 6$.`],
  [R`|M1|$v = 4 + 6t$, $a = 6$`, R`|A1|$u = 4$ m s$^{-1}$, $a = 6$ m s$^{-2}$`], R`$u = 4$, $a = 6$`,
  R`$v = 4 + 6t$ and $a = 6$, which is constant. Comparing with $s = ut + \frac12at^2$: $u = 4$ m s$^{-1}$, $a = 6$ m s$^{-2}$.`, NF),
Q('A11.5-10', 3, R`A particle moves so that $s = t^3 + 2t$ m. **(a)** Explain why suvat can't be used. **(b)** Find its velocity when $t = 2$. [[3]]`,
  [R`Find $a$.`, R`$v = 3t^2 + 2$.`],
  [R`(a)|B1|$a = 6t$ is not constant`, R`(b)|M1|$v = 3t^2 + 2$`, R`(b)|A1|$14$ m s$^{-1}$`], R`(b) $14$ m s$^{-1}$`,
  R`**(a)** $v = 3t^2 + 2$ and $a = 6t$, which varies with time.
**(b)** $v(2) = 14$ m s$^{-1}$.`, NF),
Q('A11.5-11', 3, R`A ball is thrown upwards with speed $u$. Taking upwards as positive, use integration to show that $v = u - gt$ and $s = ut - \frac12gt^2$. [[2]]`,
  [R`$a = -g$.`, R`Integrate twice.`],
  [R`|M1|$v = -gt + c$, $c = u$`, R`|A1|$s = ut - \frac12gt^2$ (with $s(0) = 0$)`], R`Shown`,
  R`$v = \int -g\,dt = -gt + u$. Then $s = \int (u - gt)\,dt = ut - \frac12gt^2 + c$, and $s(0) = 0$ gives $c = 0$.`, { fig: Fig.particle({ label: 'Ball in flight with only its weight acting, so a = g downwards', forces: [{ deg: 270, label: 'mg', len: 70, weight: true }] }) }),
Q('A11.5-12', 4, R`A particle has constant acceleration $2$ m s$^{-2}$. At $t = 0$ it is at $s = 5$ m with velocity $-3$ m s$^{-1}$. **(a)** Find $s$ in terms of $t$. **(b)** Find its least displacement. [[4]]`,
  [R`$s = 5 - 3t + t^2$.`, R`$v = 0$ at $t = 1.5$.`],
  [R`(a)|M1|$v = -3 + 2t$`, R`(a)|A1|$s = 5 - 3t + t^2$`, R`(b)|M1|$v = 0$ at $t = 1.5$`, R`(b)|A1|$2.75$ m`], R`(a) $s = 5 - 3t + t^2$ (b) $2.75$ m`,
  R`**(a)** $v = -3 + 2t$, and $s = 5 - 3t + t^2$.
**(b)** $v = 0$ at $t = 1.5$: $s = 5 - 4.5 + 2.25 = 2.75$ m.`, NF),
Q('A11.5-13', 4, R`A particle has $v = 6 - 2t$ m s$^{-1}$. Find the displacement when it comes to rest, first using suvat and then by integration. [[3]]`,
  [R`$u = 6$, $a = -2$, $v = 0$.`, R`$\int_0^3 (6 - 2t)\,dt$.`],
  [R`|B1|$a = -2$ is constant`, R`|M1|$0 = 36 - 4s$`, R`|A1|$9$ m, and $[6t - t^2]_0^3 = 9$`], R`$9$ m`,
  R`$a = -2$ is constant. $0 = 6^2 - 4s$ gives $s = 9$ m. Integration: $v = 0$ at $t = 3$, and $[6t - t^2]_0^3 = 9$ m.`, NF),
Q('A11.5-14', 4, R`A particle starts from rest and accelerates at $4$ m s$^{-2}$ for $3$ s, then moves at constant velocity. Find the distance travelled in the first $5$ s. [[3]]`,
  [R`Two stages with different constant accelerations.`, R`$v(3) = 12$.`],
  [R`|M1|First stage: $\frac12(4)(9) = 18$ m`, R`|M1|$v = 12$, then $12 \times 2 = 24$ m`, R`|A1|$42$ m`], R`$42$ m`,
  R`First $3$ s: $18$ m, reaching $12$ m s$^{-1}$. Next $2$ s: $24$ m. Total $42$ m.`, { fig: A9g({ label: 'Velocity rising from 0 to 12 over 3 s, then constant at 12', pts: [[0, 0], [3, 12], [5, 12]], xt: 1, yt: 4, y1: 14 }) }),
Q('A11.5-15', 5, R`A particle has $v = 5 - 2t$ m s$^{-1}$ and is $1$ m from $O$ when $t = 0$. **(a)** Show that the acceleration is constant. **(b)** Find $s$. **(c)** Find its greatest displacement. **(d)** Find when it passes through $O$. [[7]]`,
  [R`$s = 1 + 5t - t^2$.`, R`For (d), $t^2 - 5t - 1 = 0$.`],
  [R`(a)|B1|$a = -2$, constant`, R`(b)|M1|$s = 5t - t^2 + c$`, R`(b)|A1|$s = 1 + 5t - t^2$`, R`(c)|M1|$v = 0$ at $t = 2.5$`, R`(c)|A1|$7.25$ m`, R`(d)|M1|$t^2 - 5t - 1 = 0$`, R`(d)|A1|$t = 5.19$ s`], R`(b) $s = 1 + 5t - t^2$ (c) $7.25$ m (d) $5.19$ s`,
  R`**(a)** $a = \frac{dv}{dt} = -2$, constant.
**(b)** $s = 5t - t^2 + c$ with $c = 1$.
**(c)** $v = 0$ at $t = 2.5$: $s = 1 + 12.5 - 6.25 = 7.25$ m.
**(d)** $t = \frac{5 + \sqrt{29}}{2} = 5.19$ s (the negative root is rejected).`, NF)
]};
