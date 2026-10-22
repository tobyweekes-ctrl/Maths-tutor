/* 7.2 Using the angle addition formulae */
CONTENT['7.2'] = {
notes: R`
### What this section is about
You use the addition formulae in three ways:
1. **Forwards.** Expand something like $\sin(x + 30^\circ)$.
2. **Backwards.** Spot a pattern and collapse it, e.g. $\sin3x\cos x + \cos3x\sin x \equiv \sin4x$.
3. **In equations.** Expand, collect the $\sin$ terms and the $\cos$ terms, then divide by $\cos x$ to get a single $\tan x$.

### Recognising the reverse pattern
> $$\sin A\cos B + \cos A\sin B = \sin(A+B) \qquad \cos A\cos B + \sin A\sin B = \cos(A-B)$$

Example: $\cos 50^\circ\cos 10^\circ - \sin 50^\circ\sin 10^\circ = \cos 60^\circ = \frac12$.

### Worked example: solving an equation
Solve $\cos(x - 30^\circ) = 2\sin x$ for $0^\circ \le x < 360^\circ$.
1. Expand: $\cos x\cos30^\circ + \sin x\sin30^\circ = 2\sin x$, so $\frac{\sqrt3}{2}\cos x + \frac12\sin x = 2\sin x$.
2. Collect: $\frac{\sqrt3}{2}\cos x = \frac32\sin x$.
3. Divide by $\cos x$: $\tan x = \dfrac{\sqrt3}{3}$.
4. Solve: $x = 30^\circ$ or $x = 30^\circ + 180^\circ = 210^\circ$.

### Writing one tan in terms of another
If an equation has $x$ and $y$ in it, e.g. $\sin(x+y) = 2\cos(x-y)$, expand both sides and **divide every term by $\cos x\cos y$**. Every $\sin$ over $\cos$ becomes a $\tan$. Then make $\tan x$ the subject.

::: booklet
**In the formula booklet:** the addition formulae. You still need to recognise them in reverse, which the booklet doesn't help with.
:::

### Worked example 2: when the $\cos$ terms cancel
Solve $\sin(x + 60^\circ) = \sin(x + 120^\circ)$ for $0^\circ \le x < 360^\circ$.
1. Expand: $\frac12\sin x + \frac{\sqrt3}{2}\cos x = -\frac12\sin x + \frac{\sqrt3}{2}\cos x$.
2. The $\cos x$ terms cancel, leaving $\sin x = 0$.
3. So $x = 0^\circ$ or $180^\circ$.

**The trap:** rushing to "divide by $\cos x$ to get $\tan x$". Collect the terms first, and see what is actually left.

### Watch out
- Dividing by $\cos x$ is fine when solving for $\tan x$, but check that $\cos x = 0$ isn't a solution you've thrown away.
- $\tan$ repeats every $180^\circ$ ($\pi$ radians). List every solution in the interval.
`,
questions: [
{ id:'7.2-1', stars:2,
q: R`Show that $\sin\left(x+\dfrac{\pi}{6}\right) - \cos\left(x+\dfrac{\pi}{3}\right) \equiv \sqrt3\sin x$. [[4]]`,
hints: [
  R`Expand each bracket separately with the addition formulae.`,
  R`$\sin\frac\pi6 = \frac12,\ \cos\frac\pi6 = \frac{\sqrt3}{2},\ \sin\frac\pi3=\frac{\sqrt3}2,\ \cos\frac\pi3 = \frac12$. Watch the minus sign in front of the second bracket.`
],
scheme: [
  ['', 'M1', R`$\sin x\cos\frac\pi6 + \cos x\sin\frac\pi6$`],
  ['', 'M1', R`$\cos x\cos\frac\pi3 - \sin x\sin\frac\pi3$`],
  ['', 'M1', R`Substitutes exact values and subtracts the whole second expansion`],
  ['', 'A1', R`$\frac{\sqrt3}{2}\sin x + \frac12\cos x - \frac12\cos x + \frac{\sqrt3}2\sin x = \sqrt3\sin x$ (cso)`]
],
answer: R`$\sqrt3\sin x$`,
sol: R`
1. $\sin\left(x+\frac\pi6\right) = \sin x\cdot\frac{\sqrt3}{2} + \cos x\cdot\frac12$
2. $\cos\left(x+\frac\pi3\right) = \cos x\cdot\frac12 - \sin x\cdot\frac{\sqrt3}2$
3. Subtract, keeping brackets: $\left(\frac{\sqrt3}2\sin x + \frac12\cos x\right) - \left(\frac12\cos x - \frac{\sqrt3}{2}\sin x\right)$
4. The $\cos x$ terms cancel, leaving $\frac{\sqrt3}{2}\sin x + \frac{\sqrt3}2\sin x = \sqrt3\sin x$.`
},
{ id:'7.2-2', stars:2,
q: R`Solve, for $0^\circ \le x < 360^\circ$, the equation $\sin(x + 30^\circ) = 2\cos x$. [[5]]`,
hints: [
  R`Expand the left-hand side, then put in exact values for $\sin30^\circ$ and $\cos30^\circ$.`,
  R`Get all the $\sin x$ terms on one side and the $\cos x$ terms on the other, then divide by $\cos x$.`
],
scheme: [
  ['', 'M1', R`Expands $\sin x\cos30^\circ + \cos x\sin30^\circ$`],
  ['', 'A1', R`$\frac{\sqrt3}{2}\sin x + \frac12\cos x = 2\cos x$`],
  ['', 'M1', R`Collects terms and divides by $\cos x$ to get $\tan x = k$`],
  ['', 'A1', R`$\tan x = \sqrt3$`],
  ['', 'A1', R`$x = 60^\circ, 240^\circ$ (both, no extras)`]
],
answer: R`$x = 60^\circ,\ 240^\circ$`,
sol: R`
1. **Expand:** $\sin x\cos30^\circ + \cos x \sin 30^\circ = 2\cos x$, so $\frac{\sqrt3}{2}\sin x + \frac12\cos x = 2\cos x$.
2. **Collect:** $\frac{\sqrt3}{2}\sin x = \frac32\cos x$.
3. **Divide by $\cos x$:** $\tan x = \dfrac{3/2}{\sqrt3/2} = \dfrac{3}{\sqrt3} = \sqrt3$.
4. **Solve:** principal value $60^\circ$. $\tan$ repeats every $180^\circ$, so $x = 60^\circ,\ 240^\circ$.`
},
{ id:'7.2-3', stars:3,
q: R`Given that $2\sin(x+y) = 3\cos(x-y)$, express $\tan x$ in terms of $\tan y$. [[4]]`,
hints: [
  R`Expand both sides with the addition formulae.`,
  R`Divide every term by $\cos x\cos y$. Then $\frac{\sin x}{\cos x} = \tan x$ and so on.`,
  R`Collect the $\tan x$ terms on one side and factorise.`
],
scheme: [
  ['', 'M1', R`Expands both sides correctly: $2\sin x\cos y + 2\cos x\sin y = 3\cos x\cos y + 3\sin x\sin y$`],
  ['', 'M1', R`Divides by $\cos x\cos y$: $2\tan x + 2\tan y = 3 + 3\tan x\tan y$`],
  ['', 'M1', R`Collects $\tan x$ terms and factorises`],
  ['', 'A1', R`$\tan x = \dfrac{3-2\tan y}{2-3\tan y}$ or equivalent`]
],
answer: R`$\tan x = \dfrac{3 - 2\tan y}{2 - 3\tan y}$`,
sol: R`
1. **Expand:** $2\sin x\cos y + 2\cos x\sin y = 3\cos x\cos y + 3\sin x \sin y$
2. **Divide every term by $\cos x\cos y$:** $2\tan x + 2\tan y = 3 + 3\tan x\tan y$
3. **Collect $\tan x$:** $2\tan x - 3\tan x\tan y = 3 - 2\tan y$
4. **Factorise and divide:** $\tan x(2 - 3\tan y) = 3 - 2\tan y$, so $\tan x = \dfrac{3-2\tan y}{2 - 3\tan y}$.`
},
{ id:'7.2-4', stars:2,
q: R`The acute angles $A$ and $B$ satisfy $\tan A = \frac13$ and $\tan B = \frac12$. Show that $A + B = \dfrac{\pi}{4}$. [[3]]`,
hints: [
  R`Find $\tan(A+B)$ using the formula.`,
  R`If $\tan(A+B) = 1$ and $A+B$ is between $0$ and $\pi$, which angle must it be?`
],
scheme: [
  ['', 'M1', R`$\tan(A+B) = \dfrac{\frac13+\frac12}{1-\frac13\cdot\frac12}$`],
  ['', 'A1', R`$\tan(A+B) = \dfrac{5/6}{5/6} = 1$`],
  ['', 'A1', R`Since $A$ and $B$ are acute, $0 < A+B < \pi$, so $A+B=\frac\pi4$ (conclusion stated)`]
],
answer: R`$\tan(A+B) = 1 \Rightarrow A+B = \frac{\pi}{4}$`,
sol: R`
1. $\tan(A+B) = \dfrac{\tan A + \tan B}{1 - \tan A\tan B} = \dfrac{\frac13 + \frac12}{1 - \frac16} = \dfrac{\frac56}{\frac56} = 1$
2. $A$ and $B$ are both acute, so $0 < A+B < \pi$. The only angle in that range with $\tan = 1$ is $\frac\pi4$.
3. So $A + B = \frac\pi4$. The range argument is needed for the final A mark, because $\frac{5\pi}{4}$ also has $\tan = 1$.`
},
{ id:'7.2-5', stars:1,
q: R`Write $\sin3x\cos x + \cos3x\sin x$ as a single trigonometric function. [[2]]`,
hints: [
  R`Compare with $\sin A\cos B + \cos A\sin B$.`,
  R`It is $\sin(A + B)$ with $A = 3x$ and $B = x$.`
],
scheme: [
  ['', 'M1', R`Recognises $\sin(A + B)$ with $A = 3x$, $B = x$`],
  ['', 'A1', R`$\sin4x$`]
],
answer: R`$\sin4x$`,
sol: R`
The pattern $\sin A\cos B + \cos A\sin B$ is the expansion of $\sin(A + B)$. With $A = 3x$ and $B = x$, the expression is $\sin(3x + x) = \sin4x$.`
},
{ id:'7.2-6', stars:1,
q: R`Find the exact value of $\sin70^\circ\cos25^\circ - \cos70^\circ\sin25^\circ$. [[2]]`,
hints: [
  R`Which formula has the pattern $\sin A\cos B - \cos A\sin B$?`,
  R`It is $\sin(70^\circ - 25^\circ)$.`
],
scheme: [
  ['', 'M1', R`Recognises $\sin(70^\circ - 25^\circ)$`],
  ['', 'A1', R`$\sin45^\circ = \frac{\sqrt2}{2}$`]
],
answer: R`$\frac{\sqrt2}{2}$`,
sol: R`
$\sin A\cos B - \cos A\sin B = \sin(A - B)$, so the expression is $\sin(70^\circ - 25^\circ) = \sin45^\circ = \dfrac{\sqrt2}{2}$.`
},
{ id:'7.2-7', stars:1,
q: R`Find the exact value of $\dfrac{\tan70^\circ - \tan25^\circ}{1 + \tan70^\circ\tan25^\circ}$. [[2]]`,
hints: [
  R`This is the right-hand side of one of the $\tan$ formulae.`,
  R`It is $\tan(70^\circ - 25^\circ)$.`
],
scheme: [
  ['', 'M1', R`Recognises $\tan(70^\circ - 25^\circ)$`],
  ['', 'A1', R`$\tan45^\circ = 1$`]
],
answer: R`$1$`,
sol: R`
$\dfrac{\tan A - \tan B}{1 + \tan A\tan B} = \tan(A - B)$, so the expression is $\tan(70^\circ - 25^\circ) = \tan45^\circ = 1$.`
},
{ id:'7.2-8', stars:2,
q: R`Given that $\tan(A + B) = 3$ and $\tan A = \frac12$, find the value of $\tan B$. [[4]]`,
hints: [
  R`Let $t = \tan B$ and write out the $\tan(A + B)$ formula.`,
  R`$\dfrac{\frac12 + t}{1 - \frac12t} = 3$. Multiply both sides by the denominator.`
],
scheme: [
  ['', 'M1', R`$\dfrac{\frac12 + \tan B}{1 - \frac12\tan B} = 3$`],
  ['', 'A1', R`$\frac12 + t = 3 - \frac32t$`],
  ['', 'M1', R`Collects terms and solves for $t$`],
  ['', 'A1', R`$\tan B = 1$`]
],
answer: R`$\tan B = 1$`,
sol: R`
1. **Formula, with $t = \tan B$:** $\dfrac{\frac12 + t}{1 - \frac12t} = 3$
2. **Multiply up:** $\frac12 + t = 3 - \frac32t$
3. **Collect:** $\frac52t = \frac52$, so $t = 1$.

Check: $\tan(A + B) = \dfrac{\frac12 + 1}{1 - \frac12} = 3$ ✓`
},
{ id:'7.2-9', stars:3,
q: R`Solve, for $0 \le x < 2\pi$, the equation $\cos\left(x + \dfrac{\pi}{3}\right) = \sin x$. Give your answers as exact multiples of $\pi$. [[5]]`,
hints: [
  R`Expand: $\cos x\cos\frac\pi3 - \sin x\sin\frac\pi3$.`,
  R`Collect to get $\tan x = \dfrac{1}{2 + \sqrt3}$. Rationalise it.`,
  R`$\dfrac{1}{2 + \sqrt3} = 2 - \sqrt3 = \tan\dfrac{\pi}{12}$ (that's $\tan15^\circ$ from section 7.1).`
],
scheme: [
  ['', 'M1', R`Expands $\cos(x + \frac\pi3)$ correctly`],
  ['', 'A1', R`$\frac12\cos x - \frac{\sqrt3}{2}\sin x = \sin x$`],
  ['', 'M1', R`Collects and divides by $\cos x$: $\tan x = k$`],
  ['', 'A1', R`$\tan x = \dfrac{1}{2 + \sqrt3} = 2 - \sqrt3$`],
  ['', 'A1', R`$x = \dfrac{\pi}{12}, \dfrac{13\pi}{12}$`]
],
answer: R`$x = \dfrac{\pi}{12},\ \dfrac{13\pi}{12}$`,
sol: R`
1. **Expand:** $\frac12\cos x - \frac{\sqrt3}{2}\sin x = \sin x$
2. **Collect:** $\frac12\cos x = \left(1 + \frac{\sqrt3}{2}\right)\sin x$, so $\tan x = \dfrac{\frac12}{1 + \frac{\sqrt3}{2}} = \dfrac{1}{2 + \sqrt3}$.
3. **Rationalise:** $\dfrac{1}{2 + \sqrt3}\cdot\dfrac{2 - \sqrt3}{2 - \sqrt3} = 2 - \sqrt3$.
4. **Recognise it:** $\tan\frac\pi{12} = \tan15^\circ = 2 - \sqrt3$. $\tan$ repeats every $\pi$, so $x = \dfrac{\pi}{12}$ and $\dfrac{13\pi}{12}$.

(Decimal check: $0.262$ and $3.40$.)`
},
{ id:'7.2-10', stars:3,
q: R`**(a)** Prove that $\dfrac{\sin(A + B)}{\cos A\cos B} \equiv \tan A + \tan B$. [[3]]

**(b)** Hence solve, for $0^\circ \le x < 360^\circ$, $\dfrac{\sin(x + 45^\circ)}{\cos x\cos45^\circ} = 3$. Give your answers to 1 decimal place. [[3]]`,
hints: [
  R`Expand $\sin(A + B)$, then split the fraction into two.`,
  R`For (b), the left side is $\tan x + \tan45^\circ = \tan x + 1$.`
],
scheme: [
  ['(a)', 'M1', R`Expands $\sin(A + B)$`],
  ['(a)', 'M1', R`Splits into $\dfrac{\sin A\cos B}{\cos A\cos B} + \dfrac{\cos A\sin B}{\cos A\cos B}$`],
  ['(a)', 'A1', R`$\tan A + \tan B$ (cso)`],
  ['(b)', 'M1', R`$\tan x + 1 = 3$`],
  ['(b)', 'A1', R`$x = 63.4^\circ$`],
  ['(b)', 'A1', R`$x = 243.4^\circ$`]
],
answer: R`(b) $x = 63.4^\circ, 243.4^\circ$`,
sol: R`
**(a)** $\text{LHS} = \dfrac{\sin A\cos B + \cos A\sin B}{\cos A\cos B} = \dfrac{\sin A}{\cos A} + \dfrac{\sin B}{\cos B} = \tan A + \tan B$ $\blacksquare$

**(b)** By (a) with $A = x$ and $B = 45^\circ$: $\tan x + 1 = 3$, so $\tan x = 2$.
$x = \tan^{-1}2 = 63.4^\circ$, and $63.4^\circ + 180^\circ = 243.4^\circ$.`
},
{ id:'7.2-11', stars:3,
q: R`Solve, for $-180^\circ < x \le 180^\circ$, the equation $2\sin(x - 60^\circ) = \cos(x + 30^\circ)$. [[6]]`,
hints: [
  R`Expand both sides with exact values.`,
  R`Collect the $\sin x$ terms on one side and the $\cos x$ terms on the other, then divide by $\cos x$.`,
  R`The interval is $-180^\circ < x \le 180^\circ$, so one answer is negative.`
],
scheme: [
  ['', 'M1', R`Expands both sides`],
  ['', 'A1', R`LHS $= \sin x - \sqrt3\cos x$`],
  ['', 'A1', R`RHS $= \frac{\sqrt3}{2}\cos x - \frac12\sin x$`],
  ['', 'M1', R`Collects terms and divides by $\cos x$`],
  ['', 'A1', R`$\tan x = \sqrt3$`],
  ['', 'A1', R`$x = 60^\circ, -120^\circ$`]
],
answer: R`$x = 60^\circ, -120^\circ$`,
sol: R`
1. **Left side:** $2(\sin x\cos60^\circ - \cos x\sin60^\circ) = \sin x - \sqrt3\cos x$
2. **Right side:** $\cos x\cos30^\circ - \sin x\sin30^\circ = \frac{\sqrt3}{2}\cos x - \frac12\sin x$
3. **Collect:** $\frac32\sin x = \frac{3\sqrt3}{2}\cos x$, so $\tan x = \sqrt3$.
4. **Solve in $-180^\circ < x \le 180^\circ$:** $x = 60^\circ$, and $60^\circ - 180^\circ = -120^\circ$.`
},
{ id:'7.2-12', stars:4,
q: R`**(a)** Show that $3\sin(x + 60^\circ) - 2\cos(x + 30^\circ)$ can be written as $a\sin x + b\cos x$, giving the exact values of $a$ and $b$. [[4]]

**(b)** Hence solve, for $0^\circ \le x < 360^\circ$, $3\sin(x + 60^\circ) - 2\cos(x + 30^\circ) = 0$. Give your answers to 1 decimal place. [[3]]`,
hints: [
  R`Expand each bracket with exact values, then collect the $\sin x$ terms and the $\cos x$ terms.`,
  R`For (b): $a\sin x + b\cos x = 0$ means $\tan x = -\dfrac{b}{a}$.`,
  R`$\tan x$ is negative, so the solutions are in the second and fourth quadrants.`
],
scheme: [
  ['(a)', 'M1', R`Expands $3\sin(x + 60^\circ)$`],
  ['(a)', 'M1', R`Expands $2\cos(x + 30^\circ)$ and subtracts`],
  ['(a)', 'A1', R`$a = \frac52$`],
  ['(a)', 'A1', R`$b = \frac{\sqrt3}{2}$`],
  ['(b)', 'M1', R`$\tan x = -\dfrac{\sqrt3}{5}$`],
  ['(b)', 'A1', R`$x = 160.9^\circ$`],
  ['(b)', 'A1', R`$x = 340.9^\circ$`]
],
answer: R`(a) $a = \frac52$, $b = \frac{\sqrt3}{2}$ (b) $x = 160.9^\circ, 340.9^\circ$`,
sol: R`
**(a)**
1. $3\sin(x + 60^\circ) = 3\left(\frac12\sin x + \frac{\sqrt3}{2}\cos x\right) = \frac32\sin x + \frac{3\sqrt3}{2}\cos x$
2. $2\cos(x + 30^\circ) = 2\left(\frac{\sqrt3}{2}\cos x - \frac12\sin x\right) = \sqrt3\cos x - \sin x$
3. **Subtract:** $\left(\frac32 + 1\right)\sin x + \left(\frac{3\sqrt3}{2} - \sqrt3\right)\cos x = \frac52\sin x + \frac{\sqrt3}{2}\cos x$

So $a = \frac52$ and $b = \frac{\sqrt3}{2}$.

**(b)** $\frac52\sin x + \frac{\sqrt3}{2}\cos x = 0$, so $\tan x = -\dfrac{\sqrt3}{5}$.
$\tan^{-1}\left(\frac{\sqrt3}{5}\right) = 19.1^\circ$. $\tan$ is negative in the second and fourth quadrants: $x = 180^\circ - 19.1^\circ = 160.9^\circ$ and $x = 360^\circ - 19.1^\circ = 340.9^\circ$.`
},
{ id:'7.2-13', stars:4,
q: R`The angles $x$ and $y$ satisfy $\cos(x - y) = 3\cos(x + y)$.

**(a)** Show that $\tan x\tan y = \frac12$. [[4]]

**(b)** Given also that $\tan(x + y) = 3$, find the possible values of $\tan x$. [[4]]`,
hints: [
  R`Expand both sides, collect terms, then divide by $\cos x\cos y$.`,
  R`For (b): $\tan(x + y) = \dfrac{\tan x + \tan y}{1 - \tan x\tan y}$. You know the product is $\frac12$.`,
  R`You get $\tan x + \tan y = \frac32$ and $\tan x\tan y = \frac12$. Substitute $\tan y = \dfrac{1}{2\tan x}$ to get a quadratic.`
],
scheme: [
  ['(a)', 'M1', R`Expands both sides`],
  ['(a)', 'A1', R`$4\sin x\sin y = 2\cos x\cos y$`],
  ['(a)', 'M1', R`Divides by $\cos x\cos y$`],
  ['(a)', 'A1', R`$\tan x\tan y = \frac12$ (cso)`],
  ['(b)', 'M1', R`$\dfrac{\tan x + \tan y}{1 - \frac12} = 3$`],
  ['(b)', 'A1', R`$\tan x + \tan y = \frac32$`],
  ['(b)', 'M1', R`Forms a quadratic in $\tan x$`],
  ['(b)', 'A1', R`$\tan x = 1$ or $\tan x = \frac12$`]
],
answer: R`(b) $\tan x = 1$ or $\frac12$`,
sol: R`
**(a)**
1. **Expand:** $\cos x\cos y + \sin x\sin y = 3\cos x\cos y - 3\sin x\sin y$
2. **Collect:** $4\sin x\sin y = 2\cos x\cos y$
3. **Divide by $4\cos x\cos y$:** $\tan x\tan y = \frac12$ $\blacksquare$

**(b)**
1. $\tan(x + y) = \dfrac{\tan x + \tan y}{1 - \frac12} = 3$, so $\tan x + \tan y = \frac32$.
2. Let $t = \tan x$. Then $\tan y = \dfrac{1}{2t}$, so $t + \dfrac{1}{2t} = \dfrac32$.
3. Multiply by $2t$: $2t^2 - 3t + 1 = 0$, so $(2t - 1)(t - 1) = 0$.
4. $\tan x = 1$ or $\tan x = \frac12$. (They swap with $\tan y$: one is $1$, the other $\frac12$.)`
},
{ id:'7.2-14', stars:4,
q: R`The angles $A$ and $B$ satisfy $\sin(A + B) = \frac35$ and $\sin(A - B) = \frac13$.

**(a)** Find the exact values of $\sin A\cos B$ and $\cos A\sin B$. [[5]]

**(b)** Hence show that $\tan A = \frac72\tan B$. [[2]]`,
hints: [
  R`Expand both: $\sin A\cos B + \cos A\sin B = \frac35$ and $\sin A\cos B - \cos A\sin B = \frac13$.`,
  R`Treat $p = \sin A\cos B$ and $q = \cos A\sin B$ as unknowns in simultaneous equations.`,
  R`For (b), divide $p$ by $q$: $\dfrac{\sin A\cos B}{\cos A\sin B} = \dfrac{\tan A}{\tan B}$.`
],
scheme: [
  ['(a)', 'M1', R`Expands both equations`],
  ['(a)', 'A1', R`Both equations correct`],
  ['(a)', 'M1', R`Adds or subtracts to eliminate one product`],
  ['(a)', 'A1', R`$\sin A\cos B = \frac{7}{15}$`],
  ['(a)', 'A1', R`$\cos A\sin B = \frac{2}{15}$`],
  ['(b)', 'M1', R`Divides: $\dfrac{\sin A\cos B}{\cos A\sin B} = \dfrac{\tan A}{\tan B}$`],
  ['(b)', 'A1', R`$\tan A = \frac72\tan B$ (cso)`]
],
answer: R`(a) $\sin A\cos B = \frac{7}{15}$, $\cos A\sin B = \frac{2}{15}$`,
sol: R`
**(a)** Let $p = \sin A\cos B$ and $q = \cos A\sin B$.
1. $\sin(A + B) = p + q = \frac35$ and $\sin(A - B) = p - q = \frac13$.
2. **Add:** $2p = \frac35 + \frac13 = \frac{14}{15}$, so $p = \frac{7}{15}$.
3. **Subtract:** $2q = \frac35 - \frac13 = \frac{4}{15}$, so $q = \frac{2}{15}$.

**(b)** $\dfrac{p}{q} = \dfrac{\sin A\cos B}{\cos A\sin B} = \dfrac{\tan A}{\tan B}$, and $\dfrac{p}{q} = \dfrac{7/15}{2/15} = \dfrac72$. So $\tan A = \frac72\tan B$. $\blacksquare$`
},
{ id:'7.2-15', stars:5,
q: R`**(a)** By writing $3\theta = 2\theta + \theta$, prove that $\tan3\theta \equiv \dfrac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}$. [[4]]

**(b)** Hence show that $t = \tan15^\circ$ is a root of the equation $t^3 - 3t^2 - 3t + 1 = 0$. [[2]]

**(c)** Find the other two roots exactly, and say which angles they are the tangents of. [[3]]`,
hints: [
  R`Use $\tan(2\theta + \theta)$ with $\tan2\theta = \dfrac{2t}{1 - t^2}$, then clear the fractions inside.`,
  R`For (b), $3 \times 15^\circ = 45^\circ$ and $\tan45^\circ = 1$.`,
  R`For (c), $\tan3\theta = 1$ also when $3\theta = 225^\circ$ or $405^\circ$. Or spot that $t = -1$ is a root and factorise.`
],
scheme: [
  ['(a)', 'M1', R`$\dfrac{\tan2\theta + \tan\theta}{1 - \tan2\theta\tan\theta}$`],
  ['(a)', 'M1', R`Substitutes $\tan2\theta = \dfrac{2t}{1 - t^2}$`],
  ['(a)', 'M1', R`Multiplies numerator and denominator by $1 - t^2$`],
  ['(a)', 'A1', R`$\dfrac{3t - t^3}{1 - 3t^2}$ (cso)`],
  ['(b)', 'M1', R`Sets $\dfrac{3t - t^3}{1 - 3t^2} = \tan45^\circ = 1$`],
  ['(b)', 'A1', R`Rearranges to $t^3 - 3t^2 - 3t + 1 = 0$ (cso)`],
  ['(c)', 'M1', R`Finds the factor $(t + 1)$ or uses $3\theta = 225^\circ, 405^\circ$`],
  ['(c)', 'A1', R`$(t + 1)(t^2 - 4t + 1) = 0$`],
  ['(c)', 'A1', R`$t = -1 = \tan135^\circ$ and $t = 2 + \sqrt3 = \tan75^\circ$`]
],
answer: R`(c) $t = -1$ ($\tan135^\circ$) and $t = 2 + \sqrt3$ ($\tan75^\circ$)`,
sol: R`
**(a)** Let $t = \tan\theta$.
1. $\tan3\theta = \dfrac{\tan2\theta + t}{1 - t\tan2\theta}$ with $\tan2\theta = \dfrac{2t}{1 - t^2}$.
2. **Multiply top and bottom by $1 - t^2$:** $\dfrac{2t + t(1 - t^2)}{(1 - t^2) - 2t^2} = \dfrac{3t - t^3}{1 - 3t^2}$ $\blacksquare$

**(b)** With $\theta = 15^\circ$, $\tan3\theta = \tan45^\circ = 1$. So $3t - t^3 = 1 - 3t^2$, which rearranges to $t^3 - 3t^2 - 3t + 1 = 0$. $\blacksquare$

**(c)** $\tan3\theta = 1$ also for $3\theta = 225^\circ$ and $405^\circ$, i.e. $\theta = 75^\circ$ and $135^\circ$. So the roots are $\tan15^\circ$, $\tan75^\circ$ and $\tan135^\circ$.
Algebra check: $t = -1$ works ($-1 - 3 + 3 + 1 = 0$), and $t^3 - 3t^2 - 3t + 1 = (t + 1)(t^2 - 4t + 1)$. The quadratic gives $t = 2 \pm \sqrt3$.
- $2 - \sqrt3 = \tan15^\circ$ (the root from (b))
- $2 + \sqrt3 = \tan75^\circ$
- $-1 = \tan135^\circ$`
}
]
};
