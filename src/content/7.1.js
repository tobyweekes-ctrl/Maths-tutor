/* 7.1 Addition formulae */
CONTENT['7.1'] = {
notes: R`
### The big idea
You cannot split a trig function across a sum: $\sin(A+B) \ne \sin A + \sin B$. The **addition formulae** tell you what to do instead. They are in the formula booklet, but you need to use them quickly and get the signs right.

### Key formulae
> $$\sin(A \pm B) \equiv \sin A\cos B \pm \cos A\sin B$$
> $$\cos(A \pm B) \equiv \cos A\cos B \mp \sin A\sin B$$
> $$\tan(A \pm B) \equiv \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$

**Sign check:** in the $\cos$ formula the sign *flips*, so $\cos(A+B)$ has a minus in the middle. In the $\sin$ formula the sign stays the same.

### Exact values you must know
| $\theta$ | $30^\circ = \frac{\pi}{6}$ | $45^\circ = \frac{\pi}{4}$ | $60^\circ = \frac{\pi}{3}$ |
|---|---|---|---|
| $\sin\theta$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos\theta$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\tan\theta$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ |

Split awkward angles into these: $75^\circ = 45^\circ + 30^\circ$, $15^\circ = 45^\circ - 30^\circ$, $105^\circ = 60^\circ + 45^\circ$.

### Worked example
Find the exact value of $\cos 15^\circ$.
1. Write $15^\circ = 45^\circ - 30^\circ$.
2. Use the formula: $\cos(45^\circ - 30^\circ) = \cos45^\circ\cos30^\circ + \sin45^\circ\sin30^\circ$.
3. Substitute: $\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \dfrac{\sqrt6+\sqrt2}{4}$.

### When you are given one ratio
If $\sin A = \frac35$, sketch a 3-4-5 right-angled triangle to read off $\cos A = \frac45$ and $\tan A = \frac34$. Then use the quadrant (CAST) to fix the sign. An **obtuse** angle has positive $\sin$ but negative $\cos$ and $\tan$.

::: booklet
**In the formula booklet:** all three addition formulae. **Not in the booklet, so learn them:** the exact values table above, and the CAST signs.
:::

### Worked example 2: watch the quadrant
Given $\sin A = \frac45$ with $A$ obtuse, and $\cos B = \frac{5}{13}$ with $B$ acute, find $\cos(A+B)$ exactly.
1. **$A$ is obtuse**, so $\cos A$ is negative: $\cos A = -\frac35$. **$B$ is acute**, so $\sin B = \frac{12}{13}$.
2. $\cos(A+B) = \cos A\cos B - \sin A\sin B = \left(-\frac35\right)\frac{5}{13} - \frac45\cdot\frac{12}{13} = -\frac{15}{65} - \frac{48}{65} = -\frac{63}{65}$

**The trap:** writing $\cos A = +\frac35$ because the triangle sides are positive. The triangle gives the size; the quadrant gives the sign.

### Watch out
- Using $\cos(A+B) = \cos A\cos B + \sin A\sin B$. The sign is wrong.
- Forgetting the sign of $\cos$ or $\sin$ for an obtuse or reflex angle.
- In "show that" questions, every line of working must be written. Jumping to the answer loses the A mark.
`,
questions: [
{ id:'7.1-1', stars:1,
q: R`Using the formula for $\sin(A+B)$, show that $\sin 75^\circ = \dfrac{\sqrt6+\sqrt2}{4}$. [[3]]`,
hints: [
  R`Write $75^\circ$ as the sum of two angles whose exact values you know.`,
  R`Use $75^\circ = 45^\circ + 30^\circ$, then $\sin(45^\circ+30^\circ) = \sin45^\circ\cos30^\circ + \cos45^\circ\sin30^\circ$.`
],
scheme: [
  ['', 'M1', R`Writes $\sin75^\circ = \sin(45^\circ+30^\circ)$ (or another valid split) and expands with the correct formula`],
  ['', 'M1', R`Substitutes correct exact values: $\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12$`],
  ['', 'A1', R`Reaches $\dfrac{\sqrt6+\sqrt2}{4}$ with no errors (cso)`]
],
answer: R`$\sin 75^\circ = \dfrac{\sqrt6+\sqrt2}{4}$`,
sol: R`
1. **Split the angle.** $75^\circ = 45^\circ + 30^\circ$, and we know exact values for both.
2. **Expand.** $\sin(45^\circ + 30^\circ) = \sin45^\circ\cos30^\circ + \cos45^\circ\sin30^\circ$
3. **Substitute exact values.**
$$= \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6}{4} + \frac{\sqrt2}{4}$$
4. **Combine.** $\sin75^\circ = \dfrac{\sqrt6+\sqrt2}{4}$, as required.`
},
{ id:'7.1-2', stars:3,
q: R`Given that $\sin A = \frac35$, where $A$ is acute, and $\cos B = -\frac{12}{13}$, where $B$ is obtuse, find the exact value of

**(a)** $\sin(A+B)$ [[4]]

**(b)** $\cos(A-B)$ [[2]]

**(c)** $\tan(A+B)$ [[2]]`,
hints: [
  R`Find $\cos A$ and $\sin B$ first. Use a right-angled triangle or $\sin^2\theta + \cos^2\theta = 1$.`,
  R`$B$ is obtuse, so $\sin B$ is **positive**: $\sin B = \frac5{13}$. Then $\cos A = \frac45$.`,
  R`For (c), you can use $\tan(A+B) = \dfrac{\sin(A+B)}{\cos(A+B)}$, so you also need $\cos(A+B)$.`
],
scheme: [
  ['(a)', 'B1', R`$\cos A = \frac45$`],
  ['(a)', 'B1', R`$\sin B = \frac5{13}$ (positive)`],
  ['(a)', 'M1', R`$\sin A\cos B + \cos A\sin B$ with their values`],
  ['(a)', 'A1', R`$-\frac{16}{65}$`],
  ['(b)', 'M1', R`$\cos A\cos B + \sin A\sin B$ with their values`],
  ['(b)', 'A1', R`$-\frac{33}{65}$`],
  ['(c)', 'M1', R`Uses $\tan A=\frac34,\ \tan B=-\frac5{12}$ in the $\tan(A+B)$ formula, or divides $\sin(A+B)$ by $\cos(A+B) = -\frac{63}{65}$`],
  ['(c)', 'A1', R`$\frac{16}{63}$`]
],
answer: R`(a) $-\frac{16}{65}$ (b) $-\frac{33}{65}$ (c) $\frac{16}{63}$`,
sol: R`
**Missing ratios first.** $A$ is acute with $\sin A = \frac35$, so a 3-4-5 triangle gives $\cos A = \frac45$, $\tan A = \frac34$.
$B$ is obtuse with $\cos B = -\frac{12}{13}$. A 5-12-13 triangle gives a size of $\frac5{13}$, and $\sin$ is positive in the second quadrant, so $\sin B = \frac5{13}$ and $\tan B = -\frac5{12}$.

**(a)** $\sin(A+B) = \sin A\cos B + \cos A \sin B = \frac35\left(-\frac{12}{13}\right) + \frac45\cdot\frac5{13} = -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65}$

**(b)** $\cos(A-B) = \cos A\cos B + \sin A\sin B = \frac45\left(-\frac{12}{13}\right) + \frac35\cdot\frac5{13} = -\frac{48}{65}+\frac{15}{65} = -\frac{33}{65}$

**(c)** $\tan(A+B) = \dfrac{\frac34 + \left(-\frac5{12}\right)}{1 - \frac34\left(-\frac5{12}\right)} = \dfrac{\frac13}{\frac{63}{48}} = \frac{16}{63}$

Check: $\cos(A+B) = -\frac{48}{65} - \frac{15}{65} = -\frac{63}{65}$, and $\dfrac{-16/65}{-63/65} = \frac{16}{63}$ ✓`
},
{ id:'7.1-3', stars:2,
q: R`Show that $\tan 15^\circ = 2 - \sqrt3$. [[4]]`,
hints: [
  R`$15^\circ = 45^\circ - 30^\circ$. Use the $\tan(A-B)$ formula.`,
  R`You will get $\dfrac{1-\frac{1}{\sqrt3}}{1+\frac{1}{\sqrt3}}$. Multiply top and bottom by $\sqrt3$, then rationalise the denominator.`
],
scheme: [
  ['', 'M1', R`Uses $\tan(45^\circ-30^\circ) = \dfrac{\tan45^\circ - \tan30^\circ}{1+\tan45^\circ\tan30^\circ}$`],
  ['', 'A1', R`$\dfrac{1-\frac{1}{\sqrt3}}{1+\frac{1}{\sqrt3}}$ or $\dfrac{\sqrt3-1}{\sqrt3+1}$`],
  ['', 'M1', R`Rationalises by multiplying by $\dfrac{\sqrt3-1}{\sqrt3-1}$`],
  ['', 'A1', R`$\dfrac{4-2\sqrt3}{2} = 2-\sqrt3$ (cso)`]
],
answer: R`$\tan15^\circ = 2-\sqrt3$`,
sol: R`
1. **Split.** $\tan15^\circ = \tan(45^\circ - 30^\circ) = \dfrac{\tan45^\circ - \tan30^\circ}{1 + \tan45^\circ\tan30^\circ} = \dfrac{1 - \frac1{\sqrt3}}{1+\frac1{\sqrt3}}$
2. **Clear the small fractions** by multiplying top and bottom by $\sqrt3$: $\dfrac{\sqrt3-1}{\sqrt3+1}$
3. **Rationalise** by multiplying by $\dfrac{\sqrt3-1}{\sqrt3-1}$:
$$\frac{(\sqrt3-1)^2}{3-1} = \frac{3 - 2\sqrt3 + 1}{2} = \frac{4-2\sqrt3}{2} = 2-\sqrt3$$`
},
{ id:'7.1-4', stars:1,
q: R`Show that $\cos(x + 45^\circ) \equiv \dfrac{\sqrt2}{2}(\cos x - \sin x)$. [[2]]`,
hints: [
  R`Use $\cos(A + B) = \cos A\cos B - \sin A\sin B$.`,
  R`$\cos45^\circ = \sin45^\circ = \frac{\sqrt2}{2}$, so you can take it out as a factor.`
],
scheme: [
  ['', 'M1', R`$\cos x\cos45^\circ - \sin x\sin45^\circ$`],
  ['', 'A1', R`$\frac{\sqrt2}{2}(\cos x - \sin x)$ (cso)`]
],
answer: R`$\cos(x+45^\circ) = \frac{\sqrt2}{2}(\cos x - \sin x)$`,
sol: R`
1. **Expand:** $\cos(x + 45^\circ) = \cos x\cos45^\circ - \sin x\sin45^\circ$
2. **Exact values:** $= \frac{\sqrt2}{2}\cos x - \frac{\sqrt2}{2}\sin x = \frac{\sqrt2}{2}(\cos x - \sin x)$ $\blacksquare$`
},
{ id:'7.1-5', stars:1,
q: R`Use the formula for $\sin(A - B)$ to show that $\sin(90^\circ - \theta) \equiv \cos\theta$. [[2]]`,
hints: [
  R`Put $A = 90^\circ$ and $B = \theta$.`,
  R`$\sin90^\circ = 1$ and $\cos90^\circ = 0$.`
],
scheme: [
  ['', 'M1', R`$\sin90^\circ\cos\theta - \cos90^\circ\sin\theta$`],
  ['', 'A1', R`$= 1\cdot\cos\theta - 0 = \cos\theta$ (cso)`]
],
answer: R`$\sin(90^\circ - \theta) = \cos\theta$`,
sol: R`
1. **Expand:** $\sin(90^\circ - \theta) = \sin90^\circ\cos\theta - \cos90^\circ\sin\theta$
2. **Exact values:** $= (1)\cos\theta - (0)\sin\theta = \cos\theta$ $\blacksquare$`
},
{ id:'7.1-6', stars:2,
q: R`Write $\tan75^\circ$ in the form $a + b\sqrt3$, where $a$ and $b$ are integers. [[4]]`,
hints: [
  R`$75^\circ = 45^\circ + 30^\circ$. Use the $\tan(A + B)$ formula.`,
  R`You'll get $\dfrac{\sqrt3 + 1}{\sqrt3 - 1}$. Rationalise by multiplying top and bottom by $\sqrt3 + 1$.`
],
scheme: [
  ['', 'M1', R`$\dfrac{\tan45^\circ + \tan30^\circ}{1 - \tan45^\circ\tan30^\circ}$`],
  ['', 'A1', R`$\dfrac{1 + \frac{1}{\sqrt3}}{1 - \frac{1}{\sqrt3}}$ or $\dfrac{\sqrt3+1}{\sqrt3-1}$`],
  ['', 'M1', R`Rationalises the denominator`],
  ['', 'A1', R`$2 + \sqrt3$`]
],
answer: R`$\tan75^\circ = 2 + \sqrt3$`,
sol: R`
1. **Formula:** $\tan(45^\circ + 30^\circ) = \dfrac{1 + \frac{1}{\sqrt3}}{1 - \frac1{\sqrt3}}$
2. **Multiply top and bottom by $\sqrt3$:** $\dfrac{\sqrt3 + 1}{\sqrt3 - 1}$
3. **Rationalise:** $\dfrac{(\sqrt3+1)^2}{(\sqrt3)^2 - 1} = \dfrac{4 + 2\sqrt3}{2} = 2 + \sqrt3$

So $a = 2$, $b = 1$. (Compare $\tan15^\circ = 2 - \sqrt3$ in question 3.)`
},
{ id:'7.1-7', stars:2,
q: R`Find the exact value of $\cos105^\circ$, giving your answer in the form $\dfrac{\sqrt a - \sqrt b}{4}$. [[3]]`,
hints: [
  R`$105^\circ = 60^\circ + 45^\circ$.`,
  R`$\cos(60^\circ + 45^\circ) = \cos60^\circ\cos45^\circ - \sin60^\circ\sin45^\circ$.`
],
scheme: [
  ['', 'M1', R`Splits $105^\circ$ and uses the correct $\cos(A + B)$ formula`],
  ['', 'M1', R`$\frac12\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2}$`],
  ['', 'A1', R`$\dfrac{\sqrt2 - \sqrt6}{4}$`]
],
answer: R`$\cos105^\circ = \dfrac{\sqrt2 - \sqrt6}{4}$`,
sol: R`
1. **Split:** $105^\circ = 60^\circ + 45^\circ$.
2. **Expand:** $\cos60^\circ\cos45^\circ - \sin60^\circ\sin45^\circ = \frac12\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2}$
3. **Simplify:** $\dfrac{\sqrt2}{4} - \dfrac{\sqrt6}{4} = \dfrac{\sqrt2 - \sqrt6}{4}$

It is negative, as it should be: $105^\circ$ is obtuse.`
},
{ id:'7.1-8', stars:2,
q: R`Show that $\cos(A + B) + \cos(A - B) \equiv 2\cos A\cos B$. [[3]]`,
hints: [
  R`Expand both brackets with the addition formulae.`,
  R`The $\sin A\sin B$ terms have opposite signs, so they cancel.`
],
scheme: [
  ['', 'M1', R`Expands $\cos(A+B)$ and $\cos(A-B)$ correctly`],
  ['', 'M1', R`Adds, so the $\sin A\sin B$ terms cancel`],
  ['', 'A1', R`$2\cos A\cos B$ (cso)`]
],
answer: R`$2\cos A\cos B$`,
sol: R`
1. **Expand:** $(\cos A\cos B - \sin A\sin B) + (\cos A\cos B + \sin A\sin B)$
2. **Add:** the $\sin A\sin B$ terms cancel, leaving $2\cos A\cos B$. $\blacksquare$`
},
{ id:'7.1-9', stars:3,
q: R`Prove that $\sin(A + B)\sin(A - B) \equiv \sin^2 A - \sin^2 B$. [[4]]`,
hints: [
  R`Expand both brackets. The product has the form $(p + q)(p - q)$.`,
  R`You get $\sin^2A\cos^2B - \cos^2A\sin^2B$. Now replace each $\cos^2$ with $1 - \sin^2$.`
],
scheme: [
  ['', 'M1', R`Expands both: $(\sin A\cos B + \cos A\sin B)(\sin A\cos B - \cos A\sin B)$`],
  ['', 'M1', R`Difference of two squares: $\sin^2A\cos^2B - \cos^2A\sin^2B$`],
  ['', 'M1', R`Uses $\cos^2 = 1 - \sin^2$ for both terms`],
  ['', 'A1', R`$\sin^2A - \sin^2B$ (cso)`]
],
answer: R`$\sin^2A - \sin^2B$`,
sol: R`
1. **Expand:** $\text{LHS} = (\sin A\cos B + \cos A\sin B)(\sin A\cos B - \cos A\sin B)$
2. **Difference of two squares:** $= \sin^2A\cos^2B - \cos^2A\sin^2B$
3. **Replace $\cos^2$:** $= \sin^2A(1 - \sin^2B) - (1 - \sin^2A)\sin^2B$
4. **Expand:** $= \sin^2A - \sin^2A\sin^2B - \sin^2B + \sin^2A\sin^2B = \sin^2A - \sin^2B$ $\blacksquare$`
},
{ id:'7.1-10', stars:3,
q: R`Given that $\sin A = -\frac35$, where $180^\circ < A < 270^\circ$, and $\tan B = -\frac{5}{12}$, where $90^\circ < B < 180^\circ$, find the exact value of

**(a)** $\cos(A + B)$ [[4]]

**(b)** $\tan(A - B)$ [[2]]`,
hints: [
  R`$A$ is in the third quadrant: $\sin$ and $\cos$ are both negative, $\tan$ is positive.`,
  R`$B$ is in the second quadrant: $\sin B = \frac{5}{13}$ and $\cos B = -\frac{12}{13}$.`,
  R`$\cos A = -\frac45$ and $\tan A = \frac34$.`
],
scheme: [
  ['(a)', 'B1', R`$\cos A = -\frac45$`],
  ['(a)', 'B1', R`$\sin B = \frac{5}{13}$ and $\cos B = -\frac{12}{13}$`],
  ['(a)', 'M1', R`$\cos A\cos B - \sin A\sin B$ with their values`],
  ['(a)', 'A1', R`$\frac{63}{65}$`],
  ['(b)', 'M1', R`$\dfrac{\tan A - \tan B}{1 + \tan A\tan B}$ with $\tan A = \frac34$`],
  ['(b)', 'A1', R`$\frac{56}{33}$`]
],
answer: R`(a) $\frac{63}{65}$ (b) $\frac{56}{33}$`,
sol: R`
**Signs first.**
- $A$ is in the third quadrant ($180^\circ$ to $270^\circ$): $\sin A = -\frac35$, so $\cos A = -\frac45$ and $\tan A = \frac34$.
- $B$ is in the second quadrant: from a $5$-$12$-$13$ triangle, $\sin B = \frac{5}{13}$ (positive) and $\cos B = -\frac{12}{13}$.

**(a)** $\cos(A + B) = \left(-\frac45\right)\left(-\frac{12}{13}\right) - \left(-\frac35\right)\left(\frac{5}{13}\right) = \frac{48}{65} + \frac{15}{65} = \frac{63}{65}$

**(b)** $\tan(A - B) = \dfrac{\frac34 - \left(-\frac{5}{12}\right)}{1 + \frac34\left(-\frac{5}{12}\right)} = \dfrac{\frac{14}{12}}{\frac{33}{48}} = \frac{56}{33}$

Check with $\sin(A-B) = \frac{56}{65}$ and $\cos(A-B) = \frac{33}{65}$ ✓`
},
{ id:'7.1-11', stars:3,
fig: Fig.geo({ label: 'Right-angled triangle ABD with C on BD', pts: { A: [0, 0], B: [4, 0], C: [4, 3], D: [4, 8] }, segs: 'AB BD AC AD', right: ['ABC'], labels: { A: [-12, 6], B: [12, 8], C: [14, 0], D: [12, -4] },
  angles: [{ at: 'A', from: 'B', to: 'C', label: 'α', r: 34 }, { at: 'A', from: 'C', to: 'D', label: 'β', r: 52 }],
  sides: [{ on: ['A', 'B'], label: '4', off: 14 }, { on: ['B', 'C'], label: '3', off: -14 }, { on: ['C', 'D'], label: '5', off: -14 }], w: 300, h: 260 }),
q: R`In the diagram, $ABD$ is a right-angled triangle with the right angle at $B$. The point $C$ lies on $BD$. $AB = 4$, $BC = 3$ and $CD = 5$. Angle $BAC = \alpha$ and angle $CAD = \beta$.

**(a)** Find the exact value of $\tan\beta$. [[4]]

**(b)** Hence find the exact value of $\sin\beta$. [[1]]`,
hints: [
  R`$\tan\alpha = \frac{BC}{AB}$, and angle $BAD = \alpha + \beta$, so $\tan(\alpha + \beta) = \frac{BD}{AB}$.`,
  R`$\beta = (\alpha + \beta) - \alpha$. Use the $\tan(A - B)$ formula.`,
  R`For (b), draw a right-angled triangle with $\tan\beta$ as opposite over adjacent.`
],
scheme: [
  ['(a)', 'B1', R`$\tan\alpha = \frac34$`],
  ['(a)', 'B1', R`$\tan(\alpha + \beta) = \frac84 = 2$`],
  ['(a)', 'M1', R`$\tan\beta = \dfrac{2 - \frac34}{1 + 2\cdot\frac34}$`],
  ['(a)', 'A1', R`$\tan\beta = \frac12$`],
  ['(b)', 'B1ft', R`$\sin\beta = \dfrac{1}{\sqrt5} = \dfrac{\sqrt5}{5}$`]
],
answer: R`(a) $\frac12$ (b) $\frac{\sqrt5}{5}$`,
sol: R`
**(a)**
1. **Read off the triangles:** $\tan\alpha = \frac{BC}{AB} = \frac34$. Angle $BAD = \alpha + \beta$ and $BD = 8$, so $\tan(\alpha + \beta) = \frac84 = 2$.
2. **Subtract the angles:** $\tan\beta = \tan\big((\alpha + \beta) - \alpha\big) = \dfrac{2 - \frac34}{1 + 2 \cdot \frac34} = \dfrac{\frac54}{\frac52} = \frac12$

**(b)** $\tan\beta = \frac12$: a right-angled triangle with sides $1$ and $2$ has hypotenuse $\sqrt5$. $\beta$ is acute, so $\sin\beta = \frac{1}{\sqrt5} = \frac{\sqrt5}{5}$.`
},
{ id:'7.1-12', stars:4,
q: R`**(a)** Show that $\cos(x - 60^\circ) + \cos(x + 60^\circ) \equiv \cos x$. [[3]]

**(b)** Hence, or otherwise, find the exact value of $\cos15^\circ + \cos105^\circ$. [[2]]

**(c)** Solve, for $0^\circ \le x < 360^\circ$, $\cos(x - 60^\circ) + \cos(x + 60^\circ) = \sin x$. [[2]]`,
hints: [
  R`Expand both brackets: the $\sin x\sin60^\circ$ terms cancel.`,
  R`For (b), choose $x$ so that $x - 60^\circ$ and $x + 60^\circ$ give $\pm15^\circ$ and $105^\circ$. Remember $\cos(-15^\circ) = \cos15^\circ$.`,
  R`For (c), the left side is $\cos x$, so you're solving $\cos x = \sin x$.`
],
scheme: [
  ['(a)', 'M1', R`Expands both brackets correctly`],
  ['(a)', 'M1', R`Adds: $2\cos x\cos60^\circ$`],
  ['(a)', 'A1', R`$= \cos x$ (cso)`],
  ['(b)', 'M1', R`Uses $x = 45^\circ$, with $\cos(-15^\circ) = \cos15^\circ$`],
  ['(b)', 'A1', R`$\frac{\sqrt2}{2}$`],
  ['(c)', 'M1', R`$\cos x = \sin x$, so $\tan x = 1$`],
  ['(c)', 'A1', R`$x = 45^\circ, 225^\circ$`]
],
answer: R`(b) $\frac{\sqrt2}{2}$ (c) $x = 45^\circ, 225^\circ$`,
sol: R`
**(a)** $(\cos x\cos60^\circ + \sin x\sin60^\circ) + (\cos x\cos60^\circ - \sin x\sin60^\circ) = 2\cos x\cos60^\circ = 2\cos x \cdot \frac12 = \cos x$ $\blacksquare$

**(b)** Put $x = 45^\circ$: $\cos(-15^\circ) + \cos105^\circ = \cos45^\circ$. Since $\cos(-15^\circ) = \cos15^\circ$, the answer is $\frac{\sqrt2}{2}$.

**(c)** The left side is $\cos x$, so $\cos x = \sin x$, giving $\tan x = 1$. Then $x = 45^\circ$ or $45^\circ + 180^\circ = 225^\circ$.`
},
{ id:'7.1-13', stars:4,
q: R`**(a)** Show that $\tan(\theta + 45^\circ) \equiv \dfrac{1 + \tan\theta}{1 - \tan\theta}$. [[2]]

**(b)** Hence solve, for $0^\circ \le \theta < 180^\circ$, the equation $\tan(\theta + 45^\circ) = 6\tan\theta$. Give your answers to 1 decimal place. [[6]]`,
hints: [
  R`$\tan45^\circ = 1$.`,
  R`Let $t = \tan\theta$. Cross-multiply $\dfrac{1 + t}{1 - t} = 6t$.`,
  R`You should get $6t^2 - 5t + 1 = 0$, which factorises.`
],
scheme: [
  ['(a)', 'M1', R`$\dfrac{\tan\theta + \tan45^\circ}{1 - \tan\theta\tan45^\circ}$`],
  ['(a)', 'A1', R`Uses $\tan45^\circ = 1$ (cso)`],
  ['(b)', 'M1', R`Multiplies out: $1 + t = 6t(1 - t)$`],
  ['(b)', 'A1', R`$6t^2 - 5t + 1 = 0$`],
  ['(b)', 'M1', R`Solves: $(3t - 1)(2t - 1) = 0$`],
  ['(b)', 'A1', R`$\tan\theta = \frac13$ or $\frac12$`],
  ['(b)', 'A1', R`$\theta = 18.4^\circ$`],
  ['(b)', 'A1', R`$\theta = 26.6^\circ$`]
],
answer: R`$\theta = 18.4^\circ, 26.6^\circ$`,
sol: R`
**(a)** $\tan(\theta + 45^\circ) = \dfrac{\tan\theta + \tan45^\circ}{1 - \tan\theta\tan45^\circ} = \dfrac{\tan\theta + 1}{1 - \tan\theta}$ $\blacksquare$

**(b)**
1. **Substitute $t = \tan\theta$:** $\dfrac{1 + t}{1 - t} = 6t$
2. **Multiply out:** $1 + t = 6t - 6t^2$, so $6t^2 - 5t + 1 = 0$.
3. **Factorise:** $(3t - 1)(2t - 1) = 0$, so $t = \frac13$ or $t = \frac12$.
4. **Solve:** $\theta = \tan^{-1}\frac13 = 18.4^\circ$ and $\theta = \tan^{-1}\frac12 = 26.6^\circ$. Adding $180^\circ$ takes both out of the range.`
},
{ id:'7.1-14', stars:4,
q: R`**(a)** Given that $\sin(x + \alpha) = 2\sin(x - \alpha)$, show that $\tan x = 3\tan\alpha$. [[4]]

**(b)** Hence solve, for $0^\circ \le x < 360^\circ$, $\sin(x + 30^\circ) = 2\sin(x - 30^\circ)$. [[3]]`,
hints: [
  R`Expand both sides, then collect the $\sin x\cos\alpha$ terms and the $\cos x\sin\alpha$ terms.`,
  R`Divide both sides by $\cos x\cos\alpha$.`,
  R`For (b), $\alpha = 30^\circ$, so $\tan x = 3\tan30^\circ = \sqrt3$.`
],
scheme: [
  ['(a)', 'M1', R`Expands both sides correctly`],
  ['(a)', 'M1', R`Collects terms: $3\cos x\sin\alpha = \sin x\cos\alpha$`],
  ['(a)', 'M1', R`Divides by $\cos x\cos\alpha$`],
  ['(a)', 'A1', R`$\tan x = 3\tan\alpha$ (cso)`],
  ['(b)', 'M1', R`$\tan x = 3\tan30^\circ$`],
  ['(b)', 'A1', R`$\tan x = \sqrt3$`],
  ['(b)', 'A1', R`$x = 60^\circ, 240^\circ$`]
],
answer: R`(b) $x = 60^\circ, 240^\circ$`,
sol: R`
**(a)**
1. **Expand:** $\sin x\cos\alpha + \cos x\sin\alpha = 2\sin x\cos\alpha - 2\cos x\sin\alpha$
2. **Collect:** $3\cos x\sin\alpha = \sin x\cos\alpha$
3. **Divide by $\cos x\cos\alpha$:** $3\tan\alpha = \tan x$ $\blacksquare$

**(b)** With $\alpha = 30^\circ$: $\tan x = 3 \times \frac{\sqrt3}{3} = \sqrt3$, so $x = 60^\circ$ or $240^\circ$.`
},
{ id:'7.1-15', stars:5,
q: R`**(a)** By writing $A + B + C$ as $(A + B) + C$, prove that
$$\tan(A + B + C) \equiv \frac{\tan A + \tan B + \tan C - \tan A\tan B\tan C}{1 - \tan A\tan B - \tan B\tan C - \tan C\tan A}$$ [[5]]

**(b)** Hence show that if $A$, $B$ and $C$ are the angles of a triangle, none of them a right angle, then $\tan A + \tan B + \tan C = \tan A\tan B\tan C$. [[2]]

**(c)** Verify the result in (b) for an equilateral triangle. [[1]]`,
hints: [
  R`Write $a = \tan A$, $b = \tan B$, $c = \tan C$ to keep the algebra tidy. Start with $\tan(A+B) = \dfrac{a + b}{1 - ab}$.`,
  R`$\tan\big((A + B) + C\big) = \dfrac{\tan(A+B) + c}{1 - \tan(A+B)\,c}$. Multiply top and bottom by $1 - ab$.`,
  R`For (b), $A + B + C = 180^\circ$ and $\tan180^\circ = 0$, so the numerator must be $0$.`
],
scheme: [
  ['(a)', 'M1', R`$\tan(A+B) = \dfrac{a + b}{1 - ab}$`],
  ['(a)', 'M1', R`Applies the formula again to $(A+B) + C$`],
  ['(a)', 'M1', R`Multiplies numerator and denominator by $1 - ab$`],
  ['(a)', 'A1', R`Numerator $a + b + c - abc$`],
  ['(a)', 'A1', R`Denominator $1 - ab - bc - ca$ (cso)`],
  ['(b)', 'M1', R`Uses $A + B + C = 180^\circ$, so $\tan(A+B+C) = 0$`],
  ['(b)', 'A1', R`Numerator $= 0$, giving the result (cso)`],
  ['(c)', 'B1', R`$3\sqrt3 = (\sqrt3)^3$`]
],
answer: R`(c) both sides equal $3\sqrt3$`,
sol: R`
**(a)** Let $a = \tan A$, $b = \tan B$, $c = \tan C$.
1. $\tan(A + B) = \dfrac{a + b}{1 - ab}$
2. $\tan\big((A + B) + C\big) = \dfrac{\frac{a + b}{1 - ab} + c}{1 - \frac{a + b}{1 - ab}\,c}$
3. **Multiply top and bottom by $1 - ab$:** $= \dfrac{a + b + c(1 - ab)}{(1 - ab) - (a + b)c} = \dfrac{a + b + c - abc}{1 - ab - bc - ca}$ $\blacksquare$

**(b)** In a triangle $A + B + C = 180^\circ$, so $\tan(A + B + C) = 0$. A fraction is zero only when its numerator is zero (the denominator is non-zero here), so $a + b + c - abc = 0$, i.e. $\tan A + \tan B + \tan C = \tan A\tan B\tan C$. $\blacksquare$

(No angle can be $90^\circ$, because $\tan90^\circ$ is undefined.)

**(c)** Equilateral: every angle is $60^\circ$ and $\tan60^\circ = \sqrt3$. Left side $3\sqrt3$; right side $(\sqrt3)^3 = 3\sqrt3$ ✓`
}
]
};
