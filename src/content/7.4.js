/* 7.4 Solving trigonometric equations */
CONTENT['7.4'] = {
notes: R`
### The strategy
Turn the equation into one trig function of one angle, then solve it.

| The equation contains | Replace with |
|---|---|
| $\cos 2x$ and $\cos x$ | $\cos 2x = 2\cos^2x - 1$ |
| $\cos 2x$ and $\sin x$ | $\cos 2x = 1 - 2\sin^2x$ |
| $\sin 2x$ with $\sin x$ or $\cos x$ | $\sin 2x = 2\sin x\cos x$, then **factorise** |
| $\tan 2x$ and $\tan x$ | $\tan 2x = \frac{2\tan x}{1 - \tan^2x}$ |

You usually end up with a quadratic in $\sin x$ or $\cos x$, or a product equal to zero.

### Never divide by sin x or cos x
If $\sin x$ is a common factor, **factorise it out**. Dividing by it loses every solution where $\sin x = 0$.

### Multiple angles: change the interval
To solve $\sin 2x = \frac12$ for $0 \le x < 360^\circ$, solve for $2x$ on $0 \le 2x < 720^\circ$, then halve every answer.

### Mixing in sec, cosec and cot (Chapter 6)
Exam questions often combine double angles with the reciprocal functions. Rewrite everything in $\sin$ and $\cos$ first:
> $$\sec x = \frac{1}{\cos x} \qquad \text{cosec}\,x = \frac{1}{\sin x} \qquad \cot x = \frac{\cos x}{\sin x}$$

Then multiply through to clear the fractions, and **note the values you must exclude**: $\cot x$ and $\text{cosec}\,x$ don't exist where $\sin x = 0$, and $\sec x$ doesn't exist where $\cos x = 0$. The identities $1 + \tan^2x = \sec^2x$ and $1 + \cot^2x = \text{cosec}^2x$ are often useful too.

::: booklet
**Not in the formula booklet:** the double-angle formulae and the reciprocal identities. Learn them, and learn the solving strategy table above.
:::

### Worked example 1
Solve $\sin2x = \sin x$ for $0^\circ \le x \le 360^\circ$.
1. $2\sin x\cos x - \sin x = 0$
2. Factorise: $\sin x(2\cos x - 1) = 0$
3. $\sin x = 0$ gives $x = 0^\circ, 180^\circ, 360^\circ$.
4. $\cos x = \frac12$ gives $x = 60^\circ, 300^\circ$.

### Worked example 2: don't stop too early
Solve $\cos3x = \frac12$ for $0^\circ \le x < 180^\circ$.
1. The range for $3x$ is $0^\circ \le 3x < 540^\circ$.
2. $\cos^{-1}\frac12 = 60^\circ$, so $3x = 60^\circ,\ 300^\circ,\ 420^\circ$ (that's $360^\circ + 60^\circ$; the next, $660^\circ$, is too big).
3. Divide by $3$: $x = 20^\circ,\ 100^\circ,\ 140^\circ$.

**The trap:** stopping at $3x = 60^\circ, 300^\circ$ and missing $x = 140^\circ$. List every solution in the stretched interval before dividing.

### Watch out
- Reject impossible values with a reason, e.g. "$\sin x = -2$ has no solutions since $-1 \le \sin x \le 1$".
- Check whether the interval is in degrees or radians, and whether it is $<$ or $\le$.
- Give answers to the accuracy asked for (often 1 d.p. or 3 s.f.).
`,
questions: [
{ id:'7.4-1', stars:2,
q: R`Solve, for $0^\circ \le x < 360^\circ$, $\cos2x = 3\sin x - 1$. [[5]]`,
hints: [
  R`The rest of the equation is in $\sin x$, so use $\cos 2x = 1 - 2\sin^2x$.`,
  R`Rearrange to a quadratic in $\sin x$: $2\sin^2x + 3\sin x - 2 = 0$.`
],
scheme: [
  ['', 'M1', R`Uses $\cos 2x = 1 - 2\sin^2x$`],
  ['', 'A1', R`$2\sin^2x + 3\sin x - 2 = 0$`],
  ['', 'M1', R`Solves the quadratic: $(2\sin x - 1)(\sin x + 2) = 0$`],
  ['', 'A1', R`$\sin x = \frac12$ (rejects $\sin x = -2$)`],
  ['', 'A1', R`$x = 30^\circ, 150^\circ$`]
],
answer: R`$x = 30^\circ,\ 150^\circ$`,
sol: R`
1. Substitute: $1 - 2\sin^2 x = 3\sin x - 1$
2. Rearrange: $2\sin^2x + 3\sin x - 2 = 0$
3. Factorise: $(2\sin x - 1)(\sin x + 2) = 0$
4. $\sin x = \frac12$, or $\sin x = -2$, which has no solutions since $|\sin x| \le 1$.
5. $\sin x = \frac12$: $x = 30^\circ$ and $180^\circ - 30^\circ = 150^\circ$.`
},
{ id:'7.4-2', stars:3,
q: R`Solve, for $0 \le \theta \le 2\pi$, the equation $\sin 2\theta = \tan\theta$. Give your answers in terms of $\pi$. [[6]]`,
hints: [
  R`Write $\sin2\theta = 2\sin\theta\cos\theta$ and $\tan\theta = \frac{\sin\theta}{\cos\theta}$.`,
  R`Multiply through by $\cos\theta$, bring everything to one side and **factorise out $\sin\theta$**. Do not divide by it.`,
  R`You will get $\sin\theta(2\cos^2\theta - 1) = 0$.`
],
scheme: [
  ['', 'M1', R`$2\sin\theta\cos\theta = \dfrac{\sin\theta}{\cos\theta}$`],
  ['', 'M1', R`Multiplies by $\cos\theta$ and factorises out $\sin\theta$`],
  ['', 'A1', R`$\sin\theta(2\cos^2\theta - 1) = 0$`],
  ['', 'B1', R`$\theta = 0,\ \pi,\ 2\pi$`],
  ['', 'M1', R`$\cos\theta = \pm\frac{1}{\sqrt2}$`],
  ['', 'A1', R`$\theta = \frac\pi4,\ \frac{3\pi}4,\ \frac{5\pi}{4},\ \frac{7\pi}{4}$`]
],
answer: R`$\theta = 0,\ \frac\pi4,\ \frac{3\pi}4,\ \pi,\ \frac{5\pi}4,\ \frac{7\pi}4,\ 2\pi$`,
sol: R`
1. $2\sin\theta\cos\theta = \dfrac{\sin\theta}{\cos\theta}$
2. Multiply by $\cos\theta$: $2\sin\theta\cos^2\theta = \sin\theta$, so $2\sin\theta\cos^2\theta - \sin\theta = 0$.
3. Factorise: $\sin\theta(2\cos^2\theta - 1) = 0$
4. $\sin\theta = 0$ gives $\theta = 0, \pi, 2\pi$.
5. $\cos^2\theta = \frac12$, so $\cos\theta = \pm\frac{1}{\sqrt2}$, giving $\theta = \frac\pi4, \frac{3\pi}4, \frac{5\pi}4, \frac{7\pi}4$.

None of these make $\cos\theta = 0$, so $\tan\theta$ is defined at every one: seven solutions.`
},
{ id:'7.4-3', stars:3,
q: R`Solve, for $0^\circ \le x < 360^\circ$, $3\cos 2x + 5\cos x + 4 = 0$. Give non-exact answers to 1 decimal place. [[6]]`,
hints: [
  R`Use $\cos2x = 2\cos^2x - 1$, since everything else is in $\cos x$.`,
  R`You should get $6\cos^2x + 5\cos x + 1 = 0$, which factorises.`
],
scheme: [
  ['', 'M1', R`Uses $\cos 2x = 2\cos^2 x - 1$`],
  ['', 'A1', R`$6\cos^2x + 5\cos x + 1 = 0$`],
  ['', 'M1', R`Solves: $(3\cos x + 1)(2\cos x + 1) = 0$`],
  ['', 'A1', R`$\cos x = -\frac12$ and $\cos x = -\frac13$`],
  ['', 'A1', R`$x = 120^\circ, 240^\circ$`],
  ['', 'A1', R`$x = 109.5^\circ, 250.5^\circ$`]
],
answer: R`$x = 109.5^\circ,\ 120^\circ,\ 240^\circ,\ 250.5^\circ$`,
sol: R`
1. $3(2\cos^2x - 1) + 5\cos x + 4 = 0$, so $6\cos^2x + 5\cos x + 1 = 0$.
2. $(3\cos x + 1)(2\cos x + 1) = 0$, so $\cos x = -\frac13$ or $\cos x = -\frac12$.
3. $\cos x = -\frac12$: $x = 120^\circ$ and $360^\circ - 120^\circ = 240^\circ$.
4. $\cos x = -\frac13$: $x = \cos^{-1}\left(-\frac13\right) = 109.47\ldots^\circ$ and $360^\circ - 109.47^\circ = 250.53^\circ$, so $109.5^\circ$ and $250.5^\circ$ to 1 d.p.`
},
{ id:'7.4-4', stars:2,
q: R`Solve, for $0^\circ \le x < 180^\circ$, the equation $\sin x\cos x = \frac14$. [[4]]`,
hints: [
  R`$\sin x\cos x$ is half of $\sin 2x$.`,
  R`Solve $\sin 2x = \frac12$ on the interval $0^\circ \le 2x < 360^\circ$, then halve.`
],
scheme: [
  ['', 'M1', R`$\sin x\cos x = \frac12\sin2x$`],
  ['', 'A1', R`$\sin 2x = \frac12$`],
  ['', 'M1', R`Solves on $0 \le 2x < 360^\circ$: $2x = 30^\circ, 150^\circ$`],
  ['', 'A1', R`$x = 15^\circ, 75^\circ$`]
],
answer: R`$x = 15^\circ,\ 75^\circ$`,
sol: R`
1. $\sin2x = 2\sin x\cos x$, so $\sin x\cos x = \frac12\sin2x$ and the equation becomes $\frac12\sin2x = \frac14$, i.e. $\sin2x = \frac12$.
2. $0^\circ \le x < 180^\circ$ means $0^\circ \le 2x < 360^\circ$.
3. $2x = 30^\circ$ or $180^\circ - 30^\circ = 150^\circ$.
4. Halve: $x = 15^\circ, 75^\circ$.`
},
{ id:'7.4-5', stars:1,
q: R`Solve, for $0^\circ \le x < 180^\circ$, $\sin2x = \dfrac{\sqrt3}{2}$. [[2]]`,
hints: [
  R`The range for $2x$ is $0^\circ \le 2x < 360^\circ$.`,
  R`$\sin2x = \frac{\sqrt3}{2}$ gives $2x = 60^\circ$ or $120^\circ$.`
],
scheme: [
  ['', 'M1', R`$2x = 60^\circ$ or $120^\circ$`],
  ['', 'A1', R`$x = 30^\circ, 60^\circ$`]
],
answer: R`$x = 30^\circ, 60^\circ$`,
sol: R`
1. **Stretch the interval:** $0^\circ \le 2x < 360^\circ$.
2. **Solve for $2x$:** $2x = 60^\circ$ or $180^\circ - 60^\circ = 120^\circ$.
3. **Halve:** $x = 30^\circ$ or $60^\circ$.`
},
{ id:'7.4-6', stars:1,
q: R`Solve, for $0^\circ \le x < 180^\circ$, $\cos2x = 0$. [[2]]`,
hints: [
  R`Solve for $2x$ on $0^\circ \le 2x < 360^\circ$ first.`,
  R`$\cos = 0$ at $90^\circ$ and $270^\circ$.`
],
scheme: [
  ['', 'M1', R`$2x = 90^\circ$ or $270^\circ$`],
  ['', 'A1', R`$x = 45^\circ, 135^\circ$`]
],
answer: R`$x = 45^\circ, 135^\circ$`,
sol: R`
$0^\circ \le 2x < 360^\circ$, and $\cos2x = 0$ when $2x = 90^\circ$ or $270^\circ$. So $x = 45^\circ$ or $135^\circ$.`
},
{ id:'7.4-7', stars:1,
q: R`Solve, for $0^\circ \le x < 360^\circ$, $2\sin x\cos x = \cos x$. [[3]]`,
hints: [
  R`Don't divide by $\cos x$. Bring everything to one side and factorise.`,
  R`$\cos x(2\sin x - 1) = 0$.`
],
scheme: [
  ['', 'M1', R`$\cos x(2\sin x - 1) = 0$`],
  ['', 'A1', R`$\cos x = 0$: $x = 90^\circ, 270^\circ$`],
  ['', 'A1', R`$\sin x = \frac12$: $x = 30^\circ, 150^\circ$`]
],
answer: R`$x = 30^\circ, 90^\circ, 150^\circ, 270^\circ$`,
sol: R`
1. **Factorise:** $2\sin x\cos x - \cos x = 0$, so $\cos x(2\sin x - 1) = 0$.
2. **$\cos x = 0$:** $x = 90^\circ, 270^\circ$.
3. **$\sin x = \frac12$:** $x = 30^\circ, 150^\circ$.

Dividing by $\cos x$ at the start would have lost $90^\circ$ and $270^\circ$.`
},
{ id:'7.4-8', stars:2,
q: R`Solve, for $-180^\circ < x \le 180^\circ$, $\cos2x + \sin x = 0$. [[5]]`,
hints: [
  R`Use $\cos2x = 1 - 2\sin^2x$, because the other term is in $\sin x$.`,
  R`You'll get $2\sin^2x - \sin x - 1 = 0$.`,
  R`The interval includes negative angles: $\sin x = -\frac12$ has two solutions between $-180^\circ$ and $0^\circ$.`
],
scheme: [
  ['', 'M1', R`Uses $\cos2x = 1 - 2\sin^2x$`],
  ['', 'A1', R`$2\sin^2x - \sin x - 1 = 0$`],
  ['', 'M1', R`Solves: $(2\sin x + 1)(\sin x - 1) = 0$`],
  ['', 'A1', R`$x = 90^\circ$`],
  ['', 'A1', R`$x = -30^\circ, -150^\circ$`]
],
answer: R`$x = -150^\circ, -30^\circ, 90^\circ$`,
sol: R`
1. **Substitute:** $1 - 2\sin^2x + \sin x = 0$, so $2\sin^2x - \sin x - 1 = 0$.
2. **Factorise:** $(2\sin x + 1)(\sin x - 1) = 0$.
3. **$\sin x = 1$:** $x = 90^\circ$.
4. **$\sin x = -\frac12$:** the principal value is $-30^\circ$. The other solution in the interval is $-180^\circ + 30^\circ = -150^\circ$.

Sketch $y = \sin x$ from $-180^\circ$ to $180^\circ$ to see both negative solutions.`
},
{ id:'7.4-9', stars:2,
q: R`Solve, for $0^\circ \le x < 180^\circ$, $\tan2x = 3\tan x$. [[5]]`,
hints: [
  R`Use $\tan2x = \dfrac{2\tan x}{1 - \tan^2x}$ and let $t = \tan x$.`,
  R`Multiply by $1 - t^2$, bring everything to one side and factorise out $t$.`
],
scheme: [
  ['', 'M1', R`Uses $\tan2x = \dfrac{2t}{1 - t^2}$`],
  ['', 'M1', R`Rearranges and factorises out $t$: $t(3t^2 - 1) = 0$`],
  ['', 'A1', R`$t = 0$ or $t = \pm\frac{1}{\sqrt3}$`],
  ['', 'A1', R`$x = 0^\circ$`],
  ['', 'A1', R`$x = 30^\circ, 150^\circ$`]
],
answer: R`$x = 0^\circ, 30^\circ, 150^\circ$`,
sol: R`
1. **Substitute:** $\dfrac{2t}{1 - t^2} = 3t$, so $2t = 3t - 3t^3$.
2. **Factorise:** $3t^3 - t = 0$, so $t(3t^2 - 1) = 0$.
3. **$t = 0$:** $x = 0^\circ$.
4. **$t = \pm\frac{1}{\sqrt3}$:** $x = 30^\circ$ or $x = 180^\circ - 30^\circ = 150^\circ$.`
},
{ id:'7.4-10', stars:3,
q: R`Solve, for $0 \le x < \pi$, $\sin4x = \sin2x$. Give your answers as exact multiples of $\pi$. [[6]]`,
hints: [
  R`$\sin4x = 2\sin2x\cos2x$ (the double-angle formula with $A = 2x$).`,
  R`Factorise out $\sin2x$. Don't divide by it.`,
  R`The range for $2x$ is $0 \le 2x < 2\pi$.`
],
scheme: [
  ['', 'M1', R`$\sin4x = 2\sin2x\cos2x$`],
  ['', 'M1', R`Factorises: $\sin2x(2\cos2x - 1) = 0$`],
  ['', 'A1', R`$\sin2x = 0$ or $\cos2x = \frac12$`],
  ['', 'M1', R`Uses $0 \le 2x < 2\pi$`],
  ['', 'A1', R`$x = 0, \frac\pi2$`],
  ['', 'A1', R`$x = \frac\pi6, \frac{5\pi}6$`]
],
answer: R`$x = 0, \frac\pi6, \frac\pi2, \frac{5\pi}6$`,
sol: R`
1. **Double angle with $A = 2x$:** $2\sin2x\cos2x = \sin2x$
2. **Factorise:** $\sin2x(2\cos2x - 1) = 0$
3. **Interval:** $0 \le 2x < 2\pi$.
4. **$\sin2x = 0$:** $2x = 0, \pi$, so $x = 0, \frac\pi2$.
5. **$\cos2x = \frac12$:** $2x = \frac\pi3, \frac{5\pi}{3}$, so $x = \frac\pi6, \frac{5\pi}{6}$.`
},
{ id:'7.4-11', stars:3,
q: R`Solve, for $0^\circ < x < 360^\circ$, $3\sin2x = 2\cot x$. Give non-exact answers to 1 decimal place. [[7]]`,
hints: [
  R`Write $\sin2x = 2\sin x\cos x$ and $\cot x = \dfrac{\cos x}{\sin x}$.`,
  R`Multiply by $\sin x$. Then factorise out $\cos x$, don't divide by it.`,
  R`You get $\cos x(3\sin^2x - 1) = 0$. $\cot x$ isn't defined where $\sin x = 0$, but none of the solutions are there.`
],
scheme: [
  ['', 'M1', R`Uses $\sin2x = 2\sin x\cos x$ and $\cot x = \dfrac{\cos x}{\sin x}$`],
  ['', 'M1', R`Multiplies by $\sin x$ and factorises out $\cos x$`],
  ['', 'A1', R`$\cos x(3\sin^2x - 1) = 0$`],
  ['', 'B1', R`$x = 90^\circ, 270^\circ$`],
  ['', 'M1', R`$\sin x = \pm\frac{1}{\sqrt3}$`],
  ['', 'A1', R`$x = 35.3^\circ, 144.7^\circ$`],
  ['', 'A1', R`$x = 215.3^\circ, 324.7^\circ$`]
],
answer: R`$x = 35.3^\circ, 90^\circ, 144.7^\circ, 215.3^\circ, 270^\circ, 324.7^\circ$`,
sol: R`
1. **In $\sin$ and $\cos$:** $6\sin x\cos x = \dfrac{2\cos x}{\sin x}$
2. **Multiply by $\sin x$:** $6\sin^2x\cos x = 2\cos x$, so $2\cos x(3\sin^2x - 1) = 0$.
3. **$\cos x = 0$:** $x = 90^\circ, 270^\circ$ (here $\sin x \ne 0$, so $\cot x$ exists).
4. **$\sin^2x = \frac13$:** $\sin x = \pm0.5774$. $\sin^{-1}0.5774 = 35.3^\circ$, giving $x = 35.3^\circ, 144.7^\circ$ (positive) and $215.3^\circ, 324.7^\circ$ (negative).

Six solutions in total.`
},
{ id:'7.4-12', stars:4,
q: R`A student is asked to solve $\sin2x = \sqrt3\sin x$ for $0^\circ \le x < 360^\circ$. Their working is:

> $2\sin x\cos x = \sqrt3\sin x$
> $2\cos x = \sqrt3$
> $\cos x = \frac{\sqrt3}{2}$, so $x = 30^\circ, 330^\circ$

**(a)** Explain the error in the student's working. [[1]]

**(b)** Give the full correct solution. [[3]]

**(c)** Hence solve, for $0^\circ \le \theta < 180^\circ$, $\sin4\theta = \sqrt3\sin2\theta$. [[3]]`,
hints: [
  R`What did the student do between line 1 and line 2? What if $\sin x = 0$?`,
  R`Factorise instead: $\sin x(2\cos x - \sqrt3) = 0$.`,
  R`For (c), let $x = 2\theta$. Then $0^\circ \le x < 360^\circ$ and you can use (b).`
],
scheme: [
  ['(a)', 'B1', R`They divided by $\sin x$, losing the solutions of $\sin x = 0$`],
  ['(b)', 'M1', R`$\sin x(2\cos x - \sqrt3) = 0$`],
  ['(b)', 'A1', R`$x = 0^\circ, 180^\circ$`],
  ['(b)', 'A1', R`$x = 30^\circ, 330^\circ$`],
  ['(c)', 'M1', R`Lets $x = 2\theta$ with $0^\circ \le x < 360^\circ$`],
  ['(c)', 'A1', R`$\theta = 0^\circ, 90^\circ$`],
  ['(c)', 'A1', R`$\theta = 15^\circ, 165^\circ$`]
],
answer: R`(b) $x = 0^\circ, 30^\circ, 180^\circ, 330^\circ$ (c) $\theta = 0^\circ, 15^\circ, 90^\circ, 165^\circ$`,
sol: R`
**(a)** Going from line 1 to line 2, the student divided both sides by $\sin x$. That's only allowed if $\sin x \ne 0$, so the solutions where $\sin x = 0$ were lost.

**(b)**
1. $2\sin x\cos x - \sqrt3\sin x = 0$, so $\sin x(2\cos x - \sqrt3) = 0$.
2. $\sin x = 0$: $x = 0^\circ, 180^\circ$.
3. $\cos x = \frac{\sqrt3}{2}$: $x = 30^\circ, 330^\circ$.

**(c)** Let $x = 2\theta$. Then $\sin4\theta = \sin2x$ and the equation is exactly the one in (b). $0^\circ \le \theta < 180^\circ$ means $0^\circ \le x < 360^\circ$, so $x = 0^\circ, 30^\circ, 180^\circ, 330^\circ$ and $\theta = 0^\circ, 15^\circ, 90^\circ, 165^\circ$.`
},
{ id:'7.4-13', stars:4,
q: R`**(a)** Solve, for $0^\circ \le \theta < 360^\circ$, $2\cos^2\theta + 3\sin\theta - 3 = 0$. [[4]]

**(b)** Hence solve, for $0^\circ \le x < 180^\circ$, $2\cos^2(2x - 30^\circ) + 3\sin(2x - 30^\circ) - 3 = 0$. [[3]]`,
hints: [
  R`Use $\cos^2\theta = 1 - \sin^2\theta$ to get a quadratic in $\sin\theta$.`,
  R`For (b), let $\theta = 2x - 30^\circ$. Work out the interval for $\theta$ when $0^\circ \le x < 180^\circ$.`,
  R`$-30^\circ \le \theta < 330^\circ$. Check which solutions from (a) lie in that interval, then $x = \dfrac{\theta + 30^\circ}{2}$.`
],
scheme: [
  ['(a)', 'M1', R`Uses $\cos^2\theta = 1 - \sin^2\theta$`],
  ['(a)', 'A1', R`$2\sin^2\theta - 3\sin\theta + 1 = 0$`],
  ['(a)', 'M1', R`Solves: $(2\sin\theta - 1)(\sin\theta - 1) = 0$`],
  ['(a)', 'A1', R`$\theta = 30^\circ, 90^\circ, 150^\circ$`],
  ['(b)', 'M1', R`Interval $-30^\circ \le 2x - 30^\circ < 330^\circ$`],
  ['(b)', 'M1', R`$x = \dfrac{\theta + 30^\circ}{2}$`],
  ['(b)', 'A1', R`$x = 30^\circ, 60^\circ, 90^\circ$`]
],
answer: R`(a) $\theta = 30^\circ, 90^\circ, 150^\circ$ (b) $x = 30^\circ, 60^\circ, 90^\circ$`,
sol: R`
**(a)**
1. $2(1 - \sin^2\theta) + 3\sin\theta - 3 = 0$, so $2\sin^2\theta - 3\sin\theta + 1 = 0$.
2. $(2\sin\theta - 1)(\sin\theta - 1) = 0$, so $\sin\theta = \frac12$ or $1$.
3. $\theta = 30^\circ, 150^\circ$ or $90^\circ$.

**(b)** Let $\theta = 2x - 30^\circ$.
1. **Interval:** $0^\circ \le x < 180^\circ$ gives $-30^\circ \le \theta < 330^\circ$.
2. **Solutions in that interval:** $\sin\theta = \frac12$ or $1$ give $\theta = 30^\circ, 90^\circ, 150^\circ$ (no others between $-30^\circ$ and $330^\circ$).
3. **Back to $x$:** $x = \dfrac{\theta + 30^\circ}{2} = 30^\circ, 60^\circ, 90^\circ$.`
},
{ id:'7.4-14', stars:4,
q: R`Solve, for $0 \le x < 2\pi$, $4\cos2x + 10\sin x = 7$. Give exact answers where possible, and other answers to 3 significant figures. [[7]]`,
hints: [
  R`Use $\cos2x = 1 - 2\sin^2x$.`,
  R`You'll get $8\sin^2x - 10\sin x + 3 = 0$, which factorises.`,
  R`$\sin x = \frac12$ gives exact answers. $\sin x = \frac34$ needs a calculator in **radian** mode.`
],
scheme: [
  ['', 'M1', R`Uses $\cos2x = 1 - 2\sin^2x$`],
  ['', 'A1', R`$8\sin^2x - 10\sin x + 3 = 0$`],
  ['', 'M1', R`Solves: $(4\sin x - 3)(2\sin x - 1) = 0$`],
  ['', 'A1', R`$\sin x = \frac34$ or $\frac12$`],
  ['', 'B1', R`$x = \frac\pi6, \frac{5\pi}6$`],
  ['', 'M1', R`$\sin^{-1}0.75$ and $\pi - \sin^{-1}0.75$`],
  ['', 'A1', R`$x = 0.848, 2.29$`]
],
answer: R`$x = \frac\pi6,\ 0.848,\ 2.29,\ \frac{5\pi}6$`,
sol: R`
1. **Substitute:** $4(1 - 2\sin^2x) + 10\sin x = 7$, so $8\sin^2x - 10\sin x + 3 = 0$.
2. **Factorise:** $(4\sin x - 3)(2\sin x - 1) = 0$, so $\sin x = \frac34$ or $\frac12$.
3. **$\sin x = \frac12$:** $x = \frac\pi6, \frac{5\pi}6$.
4. **$\sin x = \frac34$:** $x = \sin^{-1}0.75 = 0.848$ and $x = \pi - 0.848 = 2.29$ (3 s.f.).`
},
{ id:'7.4-15', stars:5,
q: R`**(a)** Show that the equation $8\cos^3x - 6\cos x + 1 = 0$ can be written as $\cos3x = -\frac12$. You may use $\cos3x \equiv 4\cos^3x - 3\cos x$. [[2]]

**(b)** Hence solve $8\cos^3x - 6\cos x + 1 = 0$ for $0^\circ \le x \le 180^\circ$. [[3]]

**(c)** By considering the roots of the cubic $8c^3 - 6c + 1 = 0$, show that $\cos40^\circ + \cos80^\circ + \cos160^\circ = 0$. [[3]]`,
hints: [
  R`$8\cos^3x - 6\cos x = 2\cos3x$.`,
  R`For (b), $0^\circ \le 3x \le 540^\circ$. Find every $3x$ with $\cos3x = -\frac12$ in that range.`,
  R`For (c): the three answers to (b) give three different values of $c = \cos x$, so they are the three roots of the cubic. Write $8c^3 - 6c + 1 = 8(c - p)(c - q)(c - r)$ and compare the $c^2$ terms on each side.`
],
scheme: [
  ['(a)', 'M1', R`$8\cos^3x - 6\cos x = 2(4\cos^3x - 3\cos x) = 2\cos3x$`],
  ['(a)', 'A1', R`$2\cos3x + 1 = 0$, so $\cos3x = -\frac12$ (cso)`],
  ['(b)', 'M1', R`Uses $0^\circ \le 3x \le 540^\circ$`],
  ['(b)', 'A1', R`$3x = 120^\circ, 240^\circ, 480^\circ$`],
  ['(b)', 'A1', R`$x = 40^\circ, 80^\circ, 160^\circ$`],
  ['(c)', 'M1', R`States the roots of the cubic are $\cos40^\circ$, $\cos80^\circ$, $\cos160^\circ$ (three distinct values)`],
  ['(c)', 'M1', R`Writes $8(c - p)(c - q)(c - r)$ and compares $c^2$ coefficients`],
  ['(c)', 'A1', R`Sum $= 0$ (cso)`]
],
answer: R`(b) $x = 40^\circ, 80^\circ, 160^\circ$`,
sol: R`
**(a)** $8\cos^3x - 6\cos x = 2(4\cos^3x - 3\cos x) = 2\cos3x$. So the equation is $2\cos3x + 1 = 0$, i.e. $\cos3x = -\frac12$. $\blacksquare$

**(b)** $0^\circ \le x \le 180^\circ$ gives $0^\circ \le 3x \le 540^\circ$. $\cos3x = -\frac12$ at $3x = 120^\circ, 240^\circ, 480^\circ$ (the next is $600^\circ$, too big). So $x = 40^\circ, 80^\circ, 160^\circ$.

**(c)** Let $c = \cos x$. The cubic $8c^3 - 6c + 1 = 0$ has at most three roots, and (b) gives three different ones: $\cos40^\circ$, $\cos80^\circ$ and $\cos160^\circ$. So these **are** its roots.
So $8c^3 - 6c + 1 = 8(c - p)(c - q)(c - r)$ with $p, q, r$ these three values. Expanding the right side, the $c^2$ term is $-8(p + q + r)c^2$. The left side has no $c^2$ term, so $p + q + r = 0$:
$$\cos40^\circ + \cos80^\circ + \cos160^\circ = 0 \ \blacksquare$$
(Check: $0.7660 + 0.1736 - 0.9397 = -0.0001 \approx 0$ ✓)`
}
]
};
