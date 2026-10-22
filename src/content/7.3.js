/* 7.3 Double-angle formulae */
CONTENT['7.3'] = {
notes: R`
### Where they come from
Put $B = A$ in the addition formulae. For example $\sin(A+A) = \sin A\cos A + \cos A\sin A = 2\sin A\cos A$.

### Key formulae
> $$\sin 2A \equiv 2\sin A\cos A$$
> $$\cos 2A \equiv \cos^2 A - \sin^2 A \equiv 2\cos^2 A - 1 \equiv 1 - 2\sin^2 A$$
> $$\tan 2A \equiv \frac{2\tan A}{1-\tan^2 A}$$

### Picking the right version of cos 2A
- The rest of the expression is in **$\cos$**: use $2\cos^2A - 1$.
- The rest is in **$\sin$**: use $1 - 2\sin^2 A$.
- You want to **remove a square**: rearrange to $\cos^2 A = \frac{1+\cos2A}{2}$ or $\sin^2A = \frac{1-\cos2A}{2}$.

### They work for any "double"
$\sin x = 2\sin\frac x2\cos\frac x2$, $\cos 4\theta = 1 - 2\sin^2 2\theta$, $\sin 6x = 2\sin3x\cos3x$.

### Half angles
Reading $\cos2A = 2\cos^2A - 1$ with $A = \frac x2$ gives exact values for half angles:
> $$\cos^2\frac x2 = \frac{1 + \cos x}{2} \qquad \sin^2\frac x2 = \frac{1 - \cos x}{2}$$

For example $\sin^2 22.5^\circ = \dfrac{1 - \cos45^\circ}{2} = \dfrac{2 - \sqrt2}{4}$. Take the square root with the sign from the quadrant.

### $\cos 2x$ in terms of $\tan x$
Dividing $\cos^2x - \sin^2x$ by $\cos^2x + \sin^2x\ (= 1)$ gives $\cos2x \equiv \dfrac{1 - \tan^2x}{1 + \tan^2x}$. This is useful when you only know $\tan x$.

::: booklet
**Not in the formula booklet:** the booklet lists the addition formulae but not the double-angle formulae. They come from the addition formulae with $B = A$, so learn them, including all three forms of $\cos2A$.
:::

### Worked example 1
Given $\tan x = \frac34$ and $x$ is acute, find $\sin 2x$, $\cos 2x$ and $\tan 2x$.
1. 3-4-5 triangle: $\sin x = \frac35$, $\cos x = \frac45$.
2. $\sin2x = 2\cdot\frac35\cdot\frac45 = \frac{24}{25}$
3. $\cos 2x = \cos^2x - \sin^2x = \frac{16}{25} - \frac9{25} = \frac{7}{25}$
4. $\tan 2x = \dfrac{24/25}{7/25} = \frac{24}{7}$

### Worked example 2: two negatives make a positive
Given $\sin x = -\frac13$ with $180^\circ < x < 270^\circ$, find $\sin 2x$ exactly.
1. Third quadrant, so $\cos x$ is negative too: $\cos x = -\sqrt{1 - \frac19} = -\frac{2\sqrt2}{3}$.
2. $\sin2x = 2\left(-\frac13\right)\left(-\frac{2\sqrt2}{3}\right) = \frac{4\sqrt2}{9}$

**The trap:** expecting a negative answer because $\sin x$ is negative. Here $2x$ is between $360^\circ$ and $540^\circ$, where $\sin$ is positive.

### Watch out
- $\sin 2A \ne 2\sin A$.
- Find the sign of $\sin x$ or $\cos x$ from the quadrant **before** you double it.
- $\cos^2 A$ means $(\cos A)^2$.
`,
questions: [
{ id:'7.3-1', stars:3,
q: R`Given that $\cos x = -\frac13$ and $\dfrac{\pi}{2} < x < \pi$, find the exact values of

**(a)** $\sin x$ [[2]]

**(b)** $\sin 2x$ [[2]]

**(c)** $\cos 2x$ [[2]]

**(d)** $\tan 2x$ [[1]]`,
hints: [
  R`Use $\sin^2 x = 1 - \cos^2 x$. In the second quadrant $\sin x$ is positive.`,
  R`$\sin 2x = 2\sin x\cos x$. For $\cos 2x$, $2\cos^2x - 1$ is quickest because you already know $\cos x$.`
],
scheme: [
  ['(a)', 'M1', R`$\sin^2x = 1 - \frac19 = \frac89$`],
  ['(a)', 'A1', R`$\sin x = \frac{2\sqrt2}{3}$ (positive)`],
  ['(b)', 'M1', R`$2\sin x\cos x$ with their values`],
  ['(b)', 'A1', R`$-\frac{4\sqrt2}{9}$`],
  ['(c)', 'M1', R`Any correct form, e.g. $2\left(\frac19\right)-1$`],
  ['(c)', 'A1', R`$-\frac79$`],
  ['(d)', 'B1ft', R`$\frac{4\sqrt2}{7}$`]
],
answer: R`(a) $\frac{2\sqrt2}{3}$ (b) $-\frac{4\sqrt2}{9}$ (c) $-\frac{7}{9}$ (d) $\frac{4\sqrt2}{7}$`,
sol: R`
**(a)** $\sin^2 x = 1 - \left(-\frac13\right)^2 = \frac89$, so $\sin x = \pm\frac{\sqrt8}{3} = \pm\frac{2\sqrt2}3$. $x$ is in the second quadrant, where $\sin$ is positive, so $\sin x = \frac{2\sqrt2}{3}$.

**(b)** $\sin2x = 2\cdot\frac{2\sqrt2}3\cdot\left(-\frac13\right) = -\frac{4\sqrt2}{9}$

**(c)** $\cos2x = 2\cos^2x - 1 = 2\cdot\frac19 - 1 = -\frac79$

**(d)** $\tan 2x = \dfrac{\sin 2x}{\cos2x} = \dfrac{-4\sqrt2/9}{-7/9} = \frac{4\sqrt2}{7}$`
},
{ id:'7.3-2', stars:1,
q: R`Prove that $\dfrac{1-\cos2\theta}{\sin 2\theta} \equiv \tan\theta$. [[3]]`,
hints: [
  R`Which version of $\cos 2\theta$ makes $1 - \cos 2\theta$ simplify nicely?`,
  R`$1 - \cos2\theta = 2\sin^2\theta$ and $\sin2\theta = 2\sin\theta\cos\theta$.`
],
scheme: [
  ['', 'M1', R`$1 - \cos 2\theta = 2\sin^2\theta$`],
  ['', 'M1', R`$\sin2\theta = 2\sin\theta\cos\theta$`],
  ['', 'A1', R`$\dfrac{2\sin^2\theta}{2\sin\theta\cos\theta} = \dfrac{\sin\theta}{\cos\theta} = \tan\theta$ (cso)`]
],
answer: R`LHS $= \tan\theta$`,
sol: R`
1. Use $\cos2\theta = 1 - 2\sin^2\theta$, so the numerator is $1 - (1 - 2\sin^2\theta) = 2\sin^2\theta$.
2. The denominator is $\sin2\theta = 2\sin\theta\cos\theta$.
3. $\text{LHS} = \dfrac{2\sin^2\theta}{2\sin\theta\cos\theta} = \dfrac{\sin\theta}{\cos\theta} = \tan\theta = \text{RHS}$ $\blacksquare$`
},
{ id:'7.3-3', stars:3,
q: R`Show that $\cos3\theta \equiv 4\cos^3\theta - 3\cos\theta$. [[5]]`,
hints: [
  R`Write $3\theta = 2\theta + \theta$ and use the $\cos(A+B)$ formula.`,
  R`Replace $\cos2\theta$ with $2\cos^2\theta - 1$ and $\sin2\theta$ with $2\sin\theta\cos\theta$.`,
  R`You will get a $\sin^2\theta$. Replace it with $1 - \cos^2\theta$.`
],
scheme: [
  ['', 'M1', R`$\cos(2\theta+\theta) = \cos2\theta\cos\theta - \sin2\theta\sin\theta$`],
  ['', 'M1', R`Uses $\cos 2\theta = 2\cos^2\theta - 1$`],
  ['', 'M1', R`Uses $\sin2\theta = 2\sin\theta\cos\theta$`],
  ['', 'M1', R`Uses $\sin^2\theta = 1-\cos^2\theta$`],
  ['', 'A1', R`Simplifies to $4\cos^3\theta - 3\cos\theta$ (cso)`]
],
answer: R`$\cos3\theta = 4\cos^3\theta - 3\cos\theta$`,
sol: R`
1. $\cos3\theta = \cos(2\theta+\theta) = \cos2\theta\cos\theta - \sin2\theta\sin\theta$
2. Substitute the double-angle formulae: $(2\cos^2\theta - 1)\cos\theta - (2\sin\theta\cos\theta)\sin\theta$
3. $= 2\cos^3\theta - \cos\theta - 2\sin^2\theta\cos\theta$
4. Replace $\sin^2\theta$: $2\cos^3\theta - \cos\theta - 2(1-\cos^2\theta)\cos\theta$
5. $= 2\cos^3\theta - \cos\theta - 2\cos\theta + 2\cos^3\theta = 4\cos^3\theta - 3\cos\theta$ $\blacksquare$`
},
{ id:'7.3-4', stars:2,
q: R`By using a double-angle formula for $\cos 30^\circ$, find the exact value of $\cos 15^\circ$. [[3]]`,
hints: [
  R`$30^\circ$ is double $15^\circ$, so $\cos30^\circ = 2\cos^2 15^\circ - 1$.`,
  R`Rearrange for $\cos^2 15^\circ$, then square root. $15^\circ$ is acute, so take the positive root.`
],
scheme: [
  ['', 'M1', R`$\cos30^\circ = 2\cos^2 15^\circ - 1$`],
  ['', 'M1', R`$\cos^2 15^\circ = \dfrac{1 + \frac{\sqrt3}{2}}{2} = \dfrac{2+\sqrt3}{4}$`],
  ['', 'A1', R`$\cos15^\circ = \dfrac{\sqrt{2+\sqrt3}}{2}$ (positive root)`]
],
answer: R`$\cos 15^\circ = \dfrac{\sqrt{2+\sqrt3}}{2}$, which also equals $\dfrac{\sqrt6+\sqrt2}{4}$`,
sol: R`
1. $\cos30^\circ = 2\cos^2 15^\circ - 1$, so $\frac{\sqrt3}{2} = 2\cos^2 15^\circ - 1$.
2. $\cos^2 15^\circ = \dfrac{1+\frac{\sqrt3}{2}}{2} = \dfrac{2+\sqrt3}{4}$
3. $15^\circ$ is acute, so take the positive root: $\cos15^\circ = \dfrac{\sqrt{2+\sqrt3}}{2}$.

This matches the addition-formula answer $\frac{\sqrt6+\sqrt2}{4}$. Square it to check: $\frac{8+2\sqrt{12}}{16} = \frac{2+\sqrt3}{4}$ ✓`
},
{ id:'7.3-5', stars:1,
q: R`Write $2\sin3x\cos3x$ as a single trigonometric function. [[1]]`,
hints: [
  R`$\sin2A = 2\sin A\cos A$.`,
  R`Here $A = 3x$.`
],
scheme: [
  ['', 'B1', R`$\sin6x$`]
],
answer: R`$\sin6x$`,
sol: R`
$2\sin A\cos A = \sin2A$ with $A = 3x$, so $2\sin3x\cos3x = \sin6x$.`
},
{ id:'7.3-6', stars:1,
q: R`Find the exact value of $\cos^2 15^\circ - \sin^2 15^\circ$. [[2]]`,
hints: [
  R`$\cos^2A - \sin^2A$ is one form of $\cos 2A$.`,
  R`So the expression is $\cos30^\circ$.`
],
scheme: [
  ['', 'M1', R`Recognises $\cos2A$ with $A = 15^\circ$`],
  ['', 'A1', R`$\cos30^\circ = \frac{\sqrt3}{2}$`]
],
answer: R`$\frac{\sqrt3}{2}$`,
sol: R`
$\cos^2A - \sin^2A = \cos2A$, so the expression is $\cos30^\circ = \dfrac{\sqrt3}{2}$.`
},
{ id:'7.3-7', stars:2,
q: R`Given that $\tan x = -2$ and $270^\circ < x < 360^\circ$, find the exact values of $\sin2x$, $\cos2x$ and $\tan2x$. [[5]]`,
hints: [
  R`Fourth quadrant: $\cos$ positive, $\sin$ negative.`,
  R`A right-angled triangle with sides $1$ and $2$ has hypotenuse $\sqrt5$, so $\sin x = -\frac{2}{\sqrt5}$ and $\cos x = \frac{1}{\sqrt5}$.`
],
scheme: [
  ['', 'B1', R`$\sin x = -\frac{2}{\sqrt5}$ and $\cos x = \frac{1}{\sqrt5}$`],
  ['', 'M1', R`$\sin2x = 2\sin x\cos x$ with their values`],
  ['', 'A1', R`$\sin 2x = -\frac45$`],
  ['', 'A1', R`$\cos 2x = -\frac35$`],
  ['', 'B1ft', R`$\tan 2x = \frac43$`]
],
answer: R`$\sin2x = -\frac45$, $\cos2x = -\frac35$, $\tan2x = \frac43$`,
sol: R`
1. **Signs:** in the fourth quadrant $\cos x > 0$ and $\sin x < 0$. From a $1$, $2$, $\sqrt5$ triangle: $\sin x = -\frac{2}{\sqrt5}$, $\cos x = \frac{1}{\sqrt5}$.
2. $\sin2x = 2\left(-\frac{2}{\sqrt5}\right)\left(\frac1{\sqrt5}\right) = -\frac45$
3. $\cos2x = \cos^2x - \sin^2x = \frac15 - \frac45 = -\frac35$
4. $\tan2x = \dfrac{-4/5}{-3/5} = \frac43$

Check: $\dfrac{2\tan x}{1 - \tan^2x} = \dfrac{-4}{1 - 4} = \frac43$ ✓`
},
{ id:'7.3-8', stars:2,
q: R`Use the identity $\cos2A = 1 - 2\sin^2A$ to find the exact value of $\sin22.5^\circ$. [[3]]`,
hints: [
  R`Put $A = 22.5^\circ$, so $2A = 45^\circ$.`,
  R`$\sin^2 22.5^\circ = \dfrac{1 - \cos45^\circ}{2}$. Take the positive root.`
],
scheme: [
  ['', 'M1', R`$\cos45^\circ = 1 - 2\sin^2 22.5^\circ$`],
  ['', 'M1', R`$\sin^2 22.5^\circ = \dfrac{1 - \frac{\sqrt2}{2}}{2} = \dfrac{2 - \sqrt2}{4}$`],
  ['', 'A1', R`$\sin22.5^\circ = \dfrac{\sqrt{2 - \sqrt2}}{2}$`]
],
answer: R`$\sin22.5^\circ = \dfrac{\sqrt{2 - \sqrt2}}{2}$`,
sol: R`
1. **Set up:** $\cos45^\circ = 1 - 2\sin^2 22.5^\circ$
2. **Rearrange:** $\sin^2 22.5^\circ = \dfrac{1 - \frac{\sqrt2}{2}}{2} = \dfrac{2 - \sqrt2}{4}$
3. **Square root:** $22.5^\circ$ is acute, so take the positive root: $\sin22.5^\circ = \dfrac{\sqrt{2 - \sqrt2}}{2}$.`
},
{ id:'7.3-9', stars:2,
q: R`Express $\cos4\theta$ in terms of $\cos\theta$ only. [[4]]`,
hints: [
  R`$4\theta$ is double $2\theta$: $\cos4\theta = 2\cos^2 2\theta - 1$.`,
  R`Then replace $\cos2\theta$ with $2\cos^2\theta - 1$ and expand.`
],
scheme: [
  ['', 'M1', R`$\cos4\theta = 2\cos^2 2\theta - 1$`],
  ['', 'M1', R`Substitutes $\cos2\theta = 2\cos^2\theta - 1$`],
  ['', 'M1', R`Expands $(2\cos^2\theta - 1)^2$`],
  ['', 'A1', R`$8\cos^4\theta - 8\cos^2\theta + 1$`]
],
answer: R`$\cos4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$`,
sol: R`
1. **Double $2\theta$:** $\cos4\theta = 2\cos^2 2\theta - 1$
2. **Substitute:** $= 2(2\cos^2\theta - 1)^2 - 1$
3. **Expand:** $= 2(4\cos^4\theta - 4\cos^2\theta + 1) - 1 = 8\cos^4\theta - 8\cos^2\theta + 1$

Check with $\theta = 0$: both sides equal $1$ ✓`
},
{ id:'7.3-10', stars:3,
q: R`**(a)** Show that $\cos2x \equiv \dfrac{1 - \tan^2x}{1 + \tan^2x}$. [[3]]

**(b)** Hence find the exact value of $\cos2x$ when $\tan x = \frac13$. [[1]]

**(c)** Solve, for $0^\circ \le x < 180^\circ$, $2(1 - \tan^2x) = 1 + \tan^2x$. [[2]]`,
hints: [
  R`Start from the right-hand side and write $\tan x = \dfrac{\sin x}{\cos x}$.`,
  R`Multiply top and bottom by $\cos^2x$. The denominator becomes $\cos^2x + \sin^2x = 1$.`,
  R`For (c), divide both sides by $2(1 + \tan^2x)$: the equation says $\cos2x = \frac12$.`
],
scheme: [
  ['(a)', 'M1', R`Writes $\tan x$ as $\dfrac{\sin x}{\cos x}$`],
  ['(a)', 'M1', R`Multiplies through by $\cos^2x$`],
  ['(a)', 'A1', R`$\dfrac{\cos^2x - \sin^2x}{1} = \cos2x$ (cso)`],
  ['(b)', 'B1', R`$\cos2x = \frac45$`],
  ['(c)', 'M1', R`$\cos2x = \frac12$ with $0^\circ \le 2x < 360^\circ$`],
  ['(c)', 'A1', R`$x = 30^\circ, 150^\circ$`]
],
answer: R`(b) $\frac45$ (c) $x = 30^\circ, 150^\circ$`,
sol: R`
**(a)** $\text{RHS} = \dfrac{1 - \frac{\sin^2x}{\cos^2x}}{1 + \frac{\sin^2x}{\cos^2x}} = \dfrac{\cos^2x - \sin^2x}{\cos^2x + \sin^2x} = \dfrac{\cos2x}{1} = \cos2x$ $\blacksquare$

**(b)** $\dfrac{1 - \frac19}{1 + \frac19} = \dfrac{8/9}{10/9} = \dfrac45$

**(c)** Divide both sides by $2(1 + \tan^2x)$: $\dfrac{1 - \tan^2x}{1 + \tan^2x} = \dfrac12$, so $\cos2x = \frac12$.
$0^\circ \le 2x < 360^\circ$: $2x = 60^\circ, 300^\circ$, so $x = 30^\circ, 150^\circ$.`
},
{ id:'7.3-11', stars:3,
q: R`Given that $\sin x = \frac14$ and $0^\circ < x < 90^\circ$, find the exact values of

**(a)** $\sin2x$ [[3]]

**(b)** $\cos2x$ [[1]]

**(c)** $\sin4x$ [[2]]`,
hints: [
  R`$\cos x = \sqrt{1 - \frac{1}{16}} = \frac{\sqrt{15}}{4}$.`,
  R`For $\cos2x$, $1 - 2\sin^2x$ is quickest.`,
  R`$\sin4x = 2\sin2x\cos2x$.`
],
scheme: [
  ['(a)', 'B1', R`$\cos x = \frac{\sqrt{15}}{4}$`],
  ['(a)', 'M1', R`$2\sin x\cos x$`],
  ['(a)', 'A1', R`$\frac{\sqrt{15}}{8}$`],
  ['(b)', 'B1', R`$\frac78$`],
  ['(c)', 'M1', R`$\sin4x = 2\sin2x\cos2x$`],
  ['(c)', 'A1', R`$\frac{7\sqrt{15}}{32}$`]
],
answer: R`(a) $\frac{\sqrt{15}}{8}$ (b) $\frac78$ (c) $\frac{7\sqrt{15}}{32}$`,
sol: R`
**(a)** $x$ is acute, so $\cos x = \sqrt{1 - \frac1{16}} = \frac{\sqrt{15}}{4}$. Then $\sin2x = 2 \cdot \frac14 \cdot \frac{\sqrt{15}}{4} = \frac{\sqrt{15}}{8}$.

**(b)** $\cos2x = 1 - 2\sin^2x = 1 - \frac{2}{16} = \frac78$

**(c)** $\sin4x = 2\sin2x\cos2x = 2\cdot\frac{\sqrt{15}}{8}\cdot\frac78 = \frac{7\sqrt{15}}{32}$`
},
{ id:'7.3-12', stars:4,
q: R`**(a)** Show that $\cos^4x \equiv \frac38 + \frac12\cos2x + \frac18\cos4x$. [[5]]

**(b)** Hence find the exact value of $\cos^4\left(\dfrac{\pi}{8}\right)$. [[2]]`,
hints: [
  R`Start with $\cos^2x = \dfrac{1 + \cos2x}{2}$ and square it.`,
  R`You'll get a $\cos^2 2x$ term. Use the same idea again: $\cos^2 2x = \dfrac{1 + \cos4x}{2}$.`,
  R`For (b), $2x = \frac\pi4$ and $4x = \frac\pi2$.`
],
scheme: [
  ['(a)', 'M1', R`$\cos^2x = \frac12(1 + \cos2x)$`],
  ['(a)', 'M1', R`Squares: $\frac14(1 + 2\cos2x + \cos^2 2x)$`],
  ['(a)', 'M1', R`Uses $\cos^2 2x = \frac12(1 + \cos4x)$`],
  ['(a)', 'A1', R`$\frac14\left(\frac32 + 2\cos2x + \frac12\cos4x\right)$`],
  ['(a)', 'A1', R`$\frac38 + \frac12\cos2x + \frac18\cos4x$ (cso)`],
  ['(b)', 'M1', R`Substitutes $x = \frac\pi8$: $\cos\frac\pi4 = \frac{\sqrt2}2$, $\cos\frac\pi2 = 0$`],
  ['(b)', 'A1', R`$\dfrac{3 + 2\sqrt2}{8}$`]
],
answer: R`(b) $\dfrac{3 + 2\sqrt2}{8}$`,
sol: R`
**(a)**
1. $\cos^2x = \frac12(1 + \cos2x)$
2. **Square:** $\cos^4x = \frac14(1 + 2\cos2x + \cos^2 2x)$
3. **Remove the square again:** $\cos^2 2x = \frac12(1 + \cos4x)$, so $\cos^4x = \frac14\left(1 + 2\cos2x + \frac12 + \frac12\cos4x\right)$
4. **Simplify:** $= \frac38 + \frac12\cos2x + \frac18\cos4x$ $\blacksquare$

**(b)** $x = \frac\pi8$: $\frac38 + \frac12\cdot\frac{\sqrt2}{2} + \frac18\cdot0 = \frac38 + \frac{\sqrt2}{4} = \dfrac{3 + 2\sqrt2}{8}$

(This "powers of $\cos$ into multiple angles" trick is how you integrate $\cos^4x$ later in the course.)`
},
{ id:'7.3-13', stars:4,
q: R`The angle $x$ is acute and $\tan2x = \frac34$.

**(a)** Find the exact value of $\tan x$. [[4]]

**(b)** Hence find the exact value of $\sin x$. [[2]]

**(c)** Find the exact value of $\cos4x$. [[1]]`,
hints: [
  R`Let $t = \tan x$: $\dfrac{2t}{1 - t^2} = \dfrac34$ gives a quadratic.`,
  R`$x$ is acute, so $\tan x > 0$. Reject the negative root.`,
  R`For (c): $\tan2x = \frac34$ with $2x$ acute gives $\cos2x = \frac45$. Then $\cos4x = 2\cos^2 2x - 1$.`
],
scheme: [
  ['(a)', 'M1', R`$\dfrac{2t}{1 - t^2} = \dfrac34$`],
  ['(a)', 'A1', R`$3t^2 + 8t - 3 = 0$`],
  ['(a)', 'M1', R`Solves: $(3t - 1)(t + 3) = 0$`],
  ['(a)', 'A1', R`$\tan x = \frac13$ (rejects $-3$ because $x$ is acute)`],
  ['(b)', 'M1', R`Uses a right-angled triangle with sides $1$, $3$, $\sqrt{10}$`],
  ['(b)', 'A1', R`$\sin x = \frac{1}{\sqrt{10}} = \frac{\sqrt{10}}{10}$`],
  ['(c)', 'B1', R`$\cos4x = \frac{7}{25}$`]
],
answer: R`(a) $\frac13$ (b) $\frac{\sqrt{10}}{10}$ (c) $\frac{7}{25}$`,
sol: R`
**(a)**
1. $\dfrac{2t}{1 - t^2} = \dfrac34$, so $8t = 3 - 3t^2$, giving $3t^2 + 8t - 3 = 0$.
2. $(3t - 1)(t + 3) = 0$, so $t = \frac13$ or $t = -3$.
3. $x$ is acute, so $\tan x > 0$: $\tan x = \frac13$.

**(b)** A right-angled triangle with opposite $1$ and adjacent $3$ has hypotenuse $\sqrt{10}$, so $\sin x = \frac{1}{\sqrt{10}} = \frac{\sqrt{10}}{10}$.

**(c)** $\tan2x = \frac34$ and $2x$ is acute (since $\tan2x > 0$ with $0 < 2x < 180^\circ$), so $\cos2x = \frac45$. Then $\cos4x = 2\left(\frac45\right)^2 - 1 = \frac{32}{25} - 1 = \frac7{25}$.`
},
{ id:'7.3-14', stars:4,
fig: Fig.geo({ label: 'Isosceles triangle with equal sides 10 cm and apex angle 2 theta', pts: { A: [0, 8], B: [-6, 0], C: [6, 0] }, segs: 'AB AC BC', labels: { A: [0, -14], B: [-12, 6], C: [12, 6] },
  angles: [{ at: 'A', from: 'B', to: 'C', label: '2θ', r: 30 }], sides: [{ on: ['B', 'A'], label: '10 cm', off: 20 }, { on: ['A', 'C'], label: '10 cm', off: 20 }, { on: ['C', 'B'], label: 'b', off: 14 }], w: 320, h: 220 }),
q: R`The triangle $ABC$ has $AB = AC = 10$ cm and angle $BAC = 2\theta$, where $0^\circ < \theta < 90^\circ$.

**(a)** Show that the area of the triangle is $50\sin2\theta$ cm². [[2]]

**(b)** Show that the length of the base is $b = 20\sin\theta$ cm. [[2]]

**(c)** Given that $b = 12$ cm, find the exact area of the triangle. [[3]]`,
hints: [
  R`Area $= \frac12ab\sin C$.`,
  R`The line from $A$ to the midpoint of $BC$ bisects the angle $2\theta$, making two right-angled triangles with angle $\theta$ at $A$.`,
  R`For (c), $\sin\theta = \frac{12}{20} = \frac35$. Find $\cos\theta$, then $\sin2\theta$.`
],
scheme: [
  ['(a)', 'M1', R`$\frac12 \times 10 \times 10 \times \sin2\theta$`],
  ['(a)', 'A1', R`$50\sin2\theta$ (cso)`],
  ['(b)', 'M1', R`Half the base: $10\sin\theta$`],
  ['(b)', 'A1', R`$b = 20\sin\theta$ (cso)`],
  ['(c)', 'M1', R`$\sin\theta = \frac35$, $\cos\theta = \frac45$`],
  ['(c)', 'M1', R`$\sin2\theta = 2 \cdot \frac35 \cdot \frac45 = \frac{24}{25}$`],
  ['(c)', 'A1', R`Area $= 48$ cm²`]
],
answer: R`(c) $48$ cm²`,
sol: R`
**(a)** Area $= \frac12 \times AB \times AC \times \sin BAC = \frac12 \times 10 \times 10 \times \sin2\theta = 50\sin2\theta$ $\blacksquare$

**(b)** Drop a perpendicular from $A$ to the midpoint $M$ of $BC$. It bisects angle $A$, so angle $BAM = \theta$, and $BM = 10\sin\theta$. So $b = 2 \times 10\sin\theta = 20\sin\theta$. $\blacksquare$

**(c)** $20\sin\theta = 12$, so $\sin\theta = \frac35$ and $\cos\theta = \frac45$ (acute). Then $\sin2\theta = 2 \cdot \frac35 \cdot \frac45 = \frac{24}{25}$ and the area $= 50 \times \frac{24}{25} = 48$ cm².

Check: the height is $\sqrt{10^2 - 6^2} = 8$, and $\frac12 \times 12 \times 8 = 48$ ✓`
},
{ id:'7.3-15', stars:5,
q: R`Let $\theta = 18^\circ$.

**(a)** Explain why $\sin2\theta = \cos3\theta$. [[2]]

**(b)** Using $\cos3\theta \equiv 4\cos^3\theta - 3\cos\theta$, show that $4\sin^2\theta + 2\sin\theta - 1 = 0$. [[4]]

**(c)** Hence find the exact value of $\sin18^\circ$. [[2]]`,
hints: [
  R`$5\theta = 90^\circ$, so $2\theta = 90^\circ - 3\theta$. What is $\sin(90^\circ - x)$?`,
  R`Write $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$ and divide by $\cos\theta$ (why is that allowed?).`,
  R`Replace $\cos^2\theta$ with $1 - \sin^2\theta$, then solve the quadratic in $\sin\theta$. $\sin18^\circ > 0$.`
],
scheme: [
  ['(a)', 'M1', R`$5\theta = 90^\circ$, so $2\theta = 90^\circ - 3\theta$`],
  ['(a)', 'A1', R`$\sin2\theta = \sin(90^\circ - 3\theta) = \cos3\theta$`],
  ['(b)', 'M1', R`$2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$`],
  ['(b)', 'M1', R`Divides by $\cos\theta$, stating $\cos18^\circ \ne 0$`],
  ['(b)', 'M1', R`Uses $\cos^2\theta = 1 - \sin^2\theta$`],
  ['(b)', 'A1', R`$4\sin^2\theta + 2\sin\theta - 1 = 0$ (cso)`],
  ['(c)', 'M1', R`Quadratic formula`],
  ['(c)', 'A1', R`$\sin18^\circ = \dfrac{\sqrt5 - 1}{4}$, rejecting the negative root`]
],
answer: R`$\sin18^\circ = \dfrac{\sqrt5 - 1}{4}$`,
sol: R`
**(a)** $5 \times 18^\circ = 90^\circ$, so $2\theta = 90^\circ - 3\theta$. Then $\sin2\theta = \sin(90^\circ - 3\theta) = \cos3\theta$.

**(b)**
1. $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$
2. $\cos18^\circ \ne 0$, so divide by $\cos\theta$: $2\sin\theta = 4\cos^2\theta - 3$
3. Replace $\cos^2\theta$: $2\sin\theta = 4(1 - \sin^2\theta) - 3 = 1 - 4\sin^2\theta$
4. Rearrange: $4\sin^2\theta + 2\sin\theta - 1 = 0$ $\blacksquare$

**(c)** $\sin\theta = \dfrac{-2 \pm \sqrt{4 + 16}}{8} = \dfrac{-1 \pm \sqrt5}{4}$. Since $\sin18^\circ > 0$, $\sin18^\circ = \dfrac{\sqrt5 - 1}{4}$ ($\approx 0.309$ ✓).`
}
]
};
