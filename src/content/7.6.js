/* 7.6 Proving trigonometric identities */
CONTENT['7.6'] = {
notes: R`
### How to set out a proof
- Start from **one side**, usually the more complicated one, and work until you reach the other side.
- Write $\text{LHS} = \ldots = \ldots = \text{RHS}$. Do not work on both sides at once, and do not start by assuming the identity is true.
- Finish with a statement or $\blacksquare$.

### Toolkit
> $$\sin^2\theta + \cos^2\theta \equiv 1 \qquad 1 + \tan^2\theta \equiv \sec^2\theta \qquad 1 + \cot^2\theta \equiv \text{cosec}^2\theta$$
> $$\sin2\theta \equiv 2\sin\theta\cos\theta \qquad \cos2\theta \equiv \cos^2\theta - \sin^2\theta \equiv 2\cos^2\theta - 1 \equiv 1 - 2\sin^2\theta$$

Plus the addition formulae and $\sec\theta = \frac1{\cos\theta}$, $\text{cosec}\,\theta = \frac{1}{\sin\theta}$, $\cot\theta = \frac{\cos\theta}{\sin\theta}$.

### Moves that usually work
1. Write everything in terms of $\sin$ and $\cos$.
2. Combine fractions into a single fraction.
3. Look for $1 \pm \cos2\theta$, which simplifies to $2\cos^2\theta$ or $2\sin^2\theta$.
4. Look for a difference of two squares: $\cos^2 A - \sin^2 A = (\cos A - \sin A)(\cos A + \sin A)$.

### Disproving a false identity
To show a statement is **not** an identity, one counter-example is enough. Pick a value, work out both sides, and show they're different. Say clearly: "so the statement is false".

### Proof questions with "hence"
Many questions ask you to prove an identity, then use it: "Hence solve ...". Replace the complicated expression with the simpler side, solve, then **check** your solutions don't make the original expression undefined (a zero denominator, for example).

::: booklet
**In the formula booklet:** the addition formulae. **Not in the booklet:** $\sin^2 + \cos^2 = 1$, $1 + \tan^2 = \sec^2$, $1 + \cot^2 = \text{cosec}^2$ and the double-angle formulae. Learn these.
:::

### Worked example 1
Prove $\dfrac{1+\cos2x}{\sin2x} \equiv \cot x$.
$$\text{LHS} = \frac{1 + (2\cos^2x - 1)}{2\sin x\cos x} = \frac{2\cos^2 x}{2\sin x\cos x} = \frac{\cos x}{\sin x} = \cot x = \text{RHS}$$

### Worked example 2: don't work on both sides
Prove $\sec^2x + \text{cosec}^2x \equiv \sec^2x\,\text{cosec}^2x$.
$$\text{LHS} = \frac{1}{\cos^2x} + \frac{1}{\sin^2x} = \frac{\sin^2x + \cos^2x}{\cos^2x\sin^2x} = \frac{1}{\cos^2x\sin^2x} = \sec^2x\,\text{cosec}^2x = \text{RHS}\ \blacksquare$$

**The trap:** writing "$\sec^2x + \text{cosec}^2x = \sec^2x\,\text{cosec}^2x$" as your first line and then changing both sides. That assumes what you're trying to prove, and loses the marks.

### Watch out
- Each line must follow from the one before. Examiners withhold the final A mark (cso) if any step is missing or wrong.
`,
questions: [
{ id:'7.6-1', stars:1,
q: R`Prove that $\dfrac{\cos2A}{\cos A + \sin A} \equiv \cos A - \sin A$. [[3]]`,
hints: [
  R`Use the version $\cos2A = \cos^2A - \sin^2A$.`,
  R`That is a difference of two squares.`
],
scheme: [
  ['', 'M1', R`$\cos 2A = \cos^2A - \sin^2A$`],
  ['', 'M1', R`Factorises: $(\cos A - \sin A)(\cos A + \sin A)$`],
  ['', 'A1', R`Cancels to $\cos A - \sin A$ (cso)`]
],
answer: R`LHS $= \cos A - \sin A$`,
sol: R`
$$\text{LHS} = \frac{\cos^2A - \sin^2A}{\cos A + \sin A} = \frac{(\cos A - \sin A)(\cos A + \sin A)}{\cos A + \sin A} = \cos A - \sin A = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-2', stars:1,
q: R`Prove that $\dfrac{\sin 2x}{1 + \cos 2x} \equiv \tan x$. [[3]]`,
hints: [
  R`Which form of $\cos 2x$ turns $1 + \cos2x$ into a single term?`,
  R`$1 + \cos2x = 2\cos^2x$.`
],
scheme: [
  ['', 'M1', R`$\sin2x = 2\sin x\cos x$`],
  ['', 'M1', R`$1 + \cos 2x = 2\cos^2 x$`],
  ['', 'A1', R`$\dfrac{2\sin x\cos x}{2\cos^2x} = \tan x$ (cso)`]
],
answer: R`LHS $= \tan x$`,
sol: R`
$$\text{LHS} = \frac{2\sin x\cos x}{1 + (2\cos^2x - 1)} = \frac{2\sin x\cos x}{2\cos^2x} = \frac{\sin x}{\cos x} = \tan x = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-3', stars:2,
q: R`Prove that $\cot\theta - \tan\theta \equiv 2\cot2\theta$. [[4]]`,
hints: [
  R`Write $\cot\theta$ and $\tan\theta$ in terms of $\sin\theta$ and $\cos\theta$, then combine into one fraction.`,
  R`The numerator becomes $\cos^2\theta - \sin^2\theta = \cos2\theta$. The denominator $\sin\theta\cos\theta = \frac12\sin2\theta$.`
],
scheme: [
  ['', 'M1', R`$\dfrac{\cos\theta}{\sin\theta} - \dfrac{\sin\theta}{\cos\theta}$`],
  ['', 'M1', R`Single fraction: $\dfrac{\cos^2\theta - \sin^2\theta}{\sin\theta\cos\theta}$`],
  ['', 'M1', R`Uses $\cos2\theta$ in the numerator and $\sin\theta\cos\theta = \frac12\sin2\theta$`],
  ['', 'A1', R`$\dfrac{2\cos2\theta}{\sin2\theta} = 2\cot2\theta$ (cso)`]
],
answer: R`LHS $= 2\cot 2\theta$`,
sol: R`
1. $\text{LHS} = \dfrac{\cos\theta}{\sin\theta} - \dfrac{\sin\theta}{\cos\theta} = \dfrac{\cos^2\theta - \sin^2\theta}{\sin\theta\cos\theta}$
2. Numerator: $\cos^2\theta - \sin^2\theta = \cos 2\theta$. Denominator: $\sin\theta\cos\theta = \frac12\sin2\theta$.
3. $\text{LHS} = \dfrac{\cos2\theta}{\frac12\sin2\theta} = \dfrac{2\cos 2\theta}{\sin2\theta} = 2\cot 2\theta = \text{RHS}$ $\blacksquare$`
},
{ id:'7.6-4', stars:3,
q: R`Prove that $\sin3\theta \equiv 3\sin\theta - 4\sin^3\theta$. [[4]]`,
hints: [
  R`Write $\sin 3\theta = \sin(2\theta + \theta)$.`,
  R`Use $\sin2\theta = 2\sin\theta\cos\theta$ and $\cos2\theta = 1 - 2\sin^2\theta$, because the answer is all in $\sin$.`,
  R`Replace the $\cos^2\theta$ that appears with $1 - \sin^2\theta$.`
],
scheme: [
  ['', 'M1', R`$\sin2\theta\cos\theta + \cos2\theta\sin\theta$`],
  ['', 'M1', R`Substitutes $2\sin\theta\cos\theta$ and $1 - 2\sin^2\theta$`],
  ['', 'M1', R`Uses $\cos^2\theta = 1 - \sin^2\theta$`],
  ['', 'A1', R`$3\sin\theta - 4\sin^3\theta$ (cso)`]
],
answer: R`LHS $= 3\sin\theta - 4\sin^3\theta$`,
sol: R`
1. $\sin3\theta = \sin(2\theta+\theta) = \sin2\theta\cos\theta + \cos2\theta\sin\theta$
2. $= 2\sin\theta\cos^2\theta + (1 - 2\sin^2\theta)\sin\theta$
3. $= 2\sin\theta(1 - \sin^2\theta) + \sin\theta - 2\sin^3\theta$
4. $= 2\sin\theta - 2\sin^3\theta + \sin\theta - 2\sin^3\theta = 3\sin\theta - 4\sin^3\theta$ $\blacksquare$`
},
{ id:'7.6-5', stars:1,
q: R`Prove that $(\sin x + \cos x)^2 \equiv 1 + \sin2x$. [[2]]`,
hints: [
  R`Expand the bracket.`,
  R`$\sin^2x + \cos^2x = 1$ and $2\sin x\cos x = \sin2x$.`
],
scheme: [
  ['', 'M1', R`Expands to $\sin^2x + 2\sin x\cos x + \cos^2x$`],
  ['', 'A1', R`Uses both identities to reach $1 + \sin2x$ (cso)`]
],
answer: R`LHS $= 1 + \sin2x$`,
sol: R`
$$\text{LHS} = \sin^2x + 2\sin x\cos x + \cos^2x = (\sin^2x + \cos^2x) + 2\sin x\cos x = 1 + \sin2x = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-6', stars:2,
q: R`Prove that $\dfrac{1 - \cos2x}{1 + \cos2x} \equiv \tan^2x$. [[3]]`,
hints: [
  R`Choose the forms of $\cos2x$ that make $1 - \cos2x$ and $1 + \cos2x$ each a single term.`,
  R`$1 - \cos2x = 2\sin^2x$ and $1 + \cos2x = 2\cos^2x$.`
],
scheme: [
  ['', 'M1', R`$1 - \cos2x = 2\sin^2x$`],
  ['', 'M1', R`$1 + \cos2x = 2\cos^2x$`],
  ['', 'A1', R`$\dfrac{2\sin^2x}{2\cos^2x} = \tan^2x$ (cso)`]
],
answer: R`LHS $= \tan^2x$`,
sol: R`
$$\text{LHS} = \frac{1 - (1 - 2\sin^2x)}{1 + (2\cos^2x - 1)} = \frac{2\sin^2x}{2\cos^2x} = \tan^2x = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-7', stars:2,
q: R`Prove that $\sin^4\theta - \cos^4\theta \equiv -\cos2\theta$. [[3]]`,
hints: [
  R`$\sin^4\theta - \cos^4\theta$ is a difference of two squares.`,
  R`$(\sin^2\theta - \cos^2\theta)(\sin^2\theta + \cos^2\theta)$. One bracket is $1$.`
],
scheme: [
  ['', 'M1', R`$(\sin^2\theta - \cos^2\theta)(\sin^2\theta + \cos^2\theta)$`],
  ['', 'M1', R`Uses $\sin^2\theta + \cos^2\theta = 1$`],
  ['', 'A1', R`$\sin^2\theta - \cos^2\theta = -(\cos^2\theta - \sin^2\theta) = -\cos2\theta$ (cso)`]
],
answer: R`LHS $= -\cos2\theta$`,
sol: R`
1. **Difference of two squares:** $\text{LHS} = (\sin^2\theta - \cos^2\theta)(\sin^2\theta + \cos^2\theta)$
2. **One bracket is $1$:** $= \sin^2\theta - \cos^2\theta$
3. **Double angle:** $= -(\cos^2\theta - \sin^2\theta) = -\cos2\theta = \text{RHS}$ $\blacksquare$`
},
{ id:'7.6-8', stars:2,
q: R`**(a)** Show, using a counter-example, that the statement $\sin2x \equiv 2\sin x$ is false. [[2]]

**(b)** Write down the correct identity for $\sin2x$. [[1]]`,
hints: [
  R`Choose a value of $x$ where both sides are easy to work out, such as $x = 90^\circ$.`,
  R`Work out each side separately and compare.`
],
scheme: [
  ['(a)', 'M1', R`Chooses a value (e.g. $x = 90^\circ$) and evaluates both sides`],
  ['(a)', 'A1', R`$\sin180^\circ = 0 \ne 2 = 2\sin90^\circ$, so the statement is false`],
  ['(b)', 'B1', R`$\sin2x \equiv 2\sin x\cos x$`]
],
answer: R`(a) e.g. $x = 90^\circ$ gives $0 \ne 2$ (b) $\sin2x \equiv 2\sin x\cos x$`,
sol: R`
**(a)** Take $x = 90^\circ$: the left side is $\sin180^\circ = 0$ and the right side is $2\sin90^\circ = 2$. Since $0 \ne 2$, the statement is not true for all $x$, so it is false.

**(b)** $\sin2x \equiv 2\sin x\cos x$`
},
{ id:'7.6-9', stars:3,
q: R`Prove that $\text{cosec}\,2x + \cot2x \equiv \cot x$. [[4]]`,
hints: [
  R`Write both terms over $\sin2x$.`,
  R`You get $\dfrac{1 + \cos2x}{\sin2x}$. Simplify the top and the bottom with double-angle formulae.`
],
scheme: [
  ['', 'M1', R`Writes as a single fraction $\dfrac{1 + \cos2x}{\sin2x}$`],
  ['', 'M1', R`$1 + \cos2x = 2\cos^2x$`],
  ['', 'M1', R`$\sin2x = 2\sin x\cos x$`],
  ['', 'A1', R`$\dfrac{\cos x}{\sin x} = \cot x$ (cso)`]
],
answer: R`LHS $= \cot x$`,
sol: R`
$$\text{LHS} = \frac{1}{\sin2x} + \frac{\cos2x}{\sin2x} = \frac{1 + \cos2x}{\sin2x} = \frac{2\cos^2x}{2\sin x\cos x} = \frac{\cos x}{\sin x} = \cot x = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-10', stars:3,
q: R`**(a)** Prove that $\dfrac{\sin2x}{\sin x} - \dfrac{\cos2x}{\cos x} \equiv \sec x$. [[3]]

**(b)** Hence solve, for $0^\circ < x < 360^\circ$, $\dfrac{\sin2x}{\sin x} - \dfrac{\cos2x}{\cos x} = 2$. [[3]]`,
hints: [
  R`$\dfrac{\sin2x}{\sin x} = 2\cos x$.`,
  R`Put $2\cos x - \dfrac{\cos2x}{\cos x}$ over a common denominator, then use $\cos2x = 2\cos^2x - 1$.`,
  R`For (b), $\sec x = 2$ means $\cos x = \frac12$. Check neither answer makes $\sin x$ or $\cos x$ zero.`
],
scheme: [
  ['(a)', 'M1', R`$\dfrac{\sin2x}{\sin x} = 2\cos x$`],
  ['(a)', 'M1', R`Common denominator: $\dfrac{2\cos^2x - \cos2x}{\cos x}$`],
  ['(a)', 'A1', R`$\dfrac{1}{\cos x} = \sec x$ (cso)`],
  ['(b)', 'M1', R`$\sec x = 2$, so $\cos x = \frac12$`],
  ['(b)', 'A1', R`$x = 60^\circ$`],
  ['(b)', 'A1', R`$x = 300^\circ$`]
],
answer: R`(b) $x = 60^\circ, 300^\circ$`,
sol: R`
**(a)**
1. $\dfrac{\sin2x}{\sin x} = \dfrac{2\sin x\cos x}{\sin x} = 2\cos x$
2. $\text{LHS} = 2\cos x - \dfrac{\cos2x}{\cos x} = \dfrac{2\cos^2x - \cos2x}{\cos x} = \dfrac{2\cos^2x - (2\cos^2x - 1)}{\cos x} = \dfrac{1}{\cos x} = \sec x$ $\blacksquare$

**(b)** $\sec x = 2$, so $\cos x = \frac12$: $x = 60^\circ$ or $300^\circ$. Neither makes $\sin x$ or $\cos x$ zero, so both are valid.`
},
{ id:'7.6-11', stars:3,
q: R`A student tries to prove that $\dfrac{\sin2\theta}{1 - \cos2\theta} \equiv \cot\theta$. Their working is:

> $\text{LHS} = \dfrac{2\sin\theta\cos\theta}{1 - 1 - 2\sin^2\theta}$
> $= \dfrac{2\sin\theta\cos\theta}{-2\sin^2\theta}$
> $= -\cot\theta$

**(a)** Identify the error and explain why it is wrong. [[2]]

**(b)** Write out a correct proof. [[3]]`,
hints: [
  R`Look at how $1 - \cos2\theta$ was expanded in the first line.`,
  R`$\cos2\theta$ is subtracted as a whole: $1 - (1 - 2\sin^2\theta)$.`
],
scheme: [
  ['(a)', 'B1', R`The error is in line 1, in the denominator`],
  ['(a)', 'B1', R`$1 - \cos2\theta$ should be $1 - (1 - 2\sin^2\theta) = 2\sin^2\theta$; the minus sign must apply to both terms`],
  ['(b)', 'M1', R`Denominator $= 2\sin^2\theta$`],
  ['(b)', 'M1', R`Numerator $= 2\sin\theta\cos\theta$ and cancels $2\sin\theta$`],
  ['(b)', 'A1', R`$\dfrac{\cos\theta}{\sin\theta} = \cot\theta$ (cso)`]
],
answer: R`(a) $1 - \cos2\theta = 2\sin^2\theta$, not $-2\sin^2\theta$`,
sol: R`
**(a)** The mistake is in the denominator on the first line. $\cos2\theta = 1 - 2\sin^2\theta$ must be subtracted as a whole, in a bracket:
$$1 - \cos2\theta = 1 - (1 - 2\sin^2\theta) = 2\sin^2\theta$$
The student wrote $1 - 1 - 2\sin^2\theta$, which changes the sign. A wrong sign is a common way to "prove" the wrong answer, here $-\cot\theta$.

**(b)**
$$\text{LHS} = \frac{2\sin\theta\cos\theta}{1 - (1 - 2\sin^2\theta)} = \frac{2\sin\theta\cos\theta}{2\sin^2\theta} = \frac{\cos\theta}{\sin\theta} = \cot\theta = \text{RHS}\ \blacksquare$$`
},
{ id:'7.6-12', stars:4,
q: R`**(a)** Prove that $\tan(45^\circ + x) - \tan(45^\circ - x) \equiv 2\tan2x$. [[5]]

**(b)** Hence solve, for $0^\circ < x < 90^\circ$, $\tan(45^\circ + x) - \tan(45^\circ - x) = 2$. [[2]]`,
hints: [
  R`Let $t = \tan x$. Then $\tan(45^\circ + x) = \dfrac{1 + t}{1 - t}$ and $\tan(45^\circ - x) = \dfrac{1 - t}{1 + t}$.`,
  R`Subtract over the common denominator $(1 - t)(1 + t) = 1 - t^2$.`,
  R`$(1 + t)^2 - (1 - t)^2 = 4t$. Then compare with $\tan2x = \dfrac{2t}{1 - t^2}$.`
],
scheme: [
  ['(a)', 'M1', R`Uses the addition formulae with $\tan45^\circ = 1$`],
  ['(a)', 'M1', R`Combines over a common denominator`],
  ['(a)', 'M1', R`Numerator $(1+t)^2 - (1-t)^2 = 4t$`],
  ['(a)', 'M1', R`Denominator $1 - t^2$`],
  ['(a)', 'A1', R`$\dfrac{4t}{1 - t^2} = 2\tan2x$ (cso)`],
  ['(b)', 'M1', R`$\tan2x = 1$`],
  ['(b)', 'A1', R`$x = 22.5^\circ$`]
],
answer: R`(b) $x = 22.5^\circ$`,
sol: R`
**(a)** Let $t = \tan x$.
1. $\tan(45^\circ + x) = \dfrac{1 + t}{1 - t}$ and $\tan(45^\circ - x) = \dfrac{1 - t}{1 + t}$.
2. **Subtract:** $\dfrac{(1 + t)^2 - (1 - t)^2}{(1 - t)(1 + t)} = \dfrac{4t}{1 - t^2}$
3. $\dfrac{4t}{1 - t^2} = 2 \cdot \dfrac{2t}{1 - t^2} = 2\tan2x$ $\blacksquare$

**(b)** $2\tan2x = 2$, so $\tan2x = 1$. For $0^\circ < x < 90^\circ$, $0^\circ < 2x < 180^\circ$, so $2x = 45^\circ$ and $x = 22.5^\circ$.`
},
{ id:'7.6-13', stars:4,
q: R`**(a)** By writing $3x = 2x + x$ and $x = 2x - x$, prove that $\cos3x + \cos x \equiv 2\cos2x\cos x$. [[3]]

**(b)** Hence solve, for $0^\circ \le x \le 180^\circ$, $\cos3x + \cos x = 0$. [[4]]`,
hints: [
  R`Expand $\cos(2x + x)$ and $\cos(2x - x)$ and add. The $\sin$ terms cancel.`,
  R`For (b), $2\cos2x\cos x = 0$, so $\cos2x = 0$ or $\cos x = 0$.`,
  R`For $\cos2x = 0$, use $0^\circ \le 2x \le 360^\circ$.`
],
scheme: [
  ['(a)', 'M1', R`Expands both $\cos(2x + x)$ and $\cos(2x - x)$`],
  ['(a)', 'M1', R`Adds, so the $\sin2x\sin x$ terms cancel`],
  ['(a)', 'A1', R`$2\cos2x\cos x$ (cso)`],
  ['(b)', 'M1', R`Sets each factor equal to zero`],
  ['(b)', 'A1', R`$\cos x = 0$: $x = 90^\circ$`],
  ['(b)', 'M1', R`$\cos2x = 0$ on $0^\circ \le 2x \le 360^\circ$`],
  ['(b)', 'A1', R`$x = 45^\circ, 135^\circ$`]
],
answer: R`(b) $x = 45^\circ, 90^\circ, 135^\circ$`,
sol: R`
**(a)** $\cos(2x + x) + \cos(2x - x) = (\cos2x\cos x - \sin2x\sin x) + (\cos2x\cos x + \sin2x\sin x) = 2\cos2x\cos x$ $\blacksquare$

**(b)** $2\cos2x\cos x = 0$.
- $\cos x = 0$: $x = 90^\circ$.
- $\cos2x = 0$: $2x = 90^\circ, 270^\circ$, so $x = 45^\circ, 135^\circ$.

So $x = 45^\circ, 90^\circ, 135^\circ$.`
},
{ id:'7.6-14', stars:4,
q: R`**(a)** Prove that $\dfrac{\sin x + \sin2x}{1 + \cos x + \cos2x} \equiv \tan x$. [[4]]

**(b)** State the values of $x$ in $0^\circ \le x < 360^\circ$ for which the left-hand side is undefined. [[2]]

**(c)** Hence solve, for $0^\circ \le x < 360^\circ$, $\dfrac{\sin x + \sin2x}{1 + \cos x + \cos2x} = \sqrt3$. [[2]]`,
hints: [
  R`Numerator: $\sin x + 2\sin x\cos x = \sin x(1 + 2\cos x)$.`,
  R`Denominator: use $\cos2x = 2\cos^2x - 1$, then factorise.`,
  R`The denominator is $\cos x(1 + 2\cos x)$. It is zero if either factor is zero. Check your answers to (c) against (b).`
],
scheme: [
  ['(a)', 'M1', R`Numerator $\sin x(1 + 2\cos x)$`],
  ['(a)', 'M1', R`Uses $\cos2x = 2\cos^2x - 1$ in the denominator`],
  ['(a)', 'M1', R`Denominator $\cos x(1 + 2\cos x)$`],
  ['(a)', 'A1', R`Cancels to $\tan x$ (cso)`],
  ['(b)', 'B1', R`$x = 90^\circ, 270^\circ$`],
  ['(b)', 'B1', R`$x = 120^\circ, 240^\circ$`],
  ['(c)', 'M1', R`$\tan x = \sqrt3$, giving $60^\circ$ and $240^\circ$`],
  ['(c)', 'A1', R`$x = 60^\circ$ only, rejecting $240^\circ$ because the expression is undefined there`]
],
answer: R`(b) $90^\circ, 120^\circ, 240^\circ, 270^\circ$ (c) $x = 60^\circ$ only`,
sol: R`
**(a)**
1. **Numerator:** $\sin x + 2\sin x\cos x = \sin x(1 + 2\cos x)$
2. **Denominator:** $1 + \cos x + 2\cos^2x - 1 = \cos x + 2\cos^2x = \cos x(1 + 2\cos x)$
3. **Cancel:** $\dfrac{\sin x(1 + 2\cos x)}{\cos x(1 + 2\cos x)} = \dfrac{\sin x}{\cos x} = \tan x$ $\blacksquare$

**(b)** The expression is undefined where the denominator $\cos x(1 + 2\cos x) = 0$:
- $\cos x = 0$: $x = 90^\circ, 270^\circ$
- $\cos x = -\frac12$: $x = 120^\circ, 240^\circ$

**(c)** $\tan x = \sqrt3$ gives $x = 60^\circ$ or $240^\circ$. But at $240^\circ$ the original expression is undefined (from (b)), so reject it. The only solution is $x = 60^\circ$.

This is the trap: the identity is only true where both sides exist.`
},
{ id:'7.6-15', stars:5,
q: R`**(a)** By expanding $(\cos^2x + \sin^2x)^3$, prove that $\cos^6x + \sin^6x \equiv 1 - \frac34\sin^2 2x$. [[4]]

**(b)** Hence show that $\cos^6x + \sin^6x \equiv \dfrac{5 + 3\cos4x}{8}$. [[3]]

**(c)** Find the minimum value of $\cos^6x + \sin^6x$, and the smallest positive value of $x$ at which it occurs. [[2]]`,
hints: [
  R`$(c^2 + s^2)^3 = c^6 + 3c^4s^2 + 3c^2s^4 + s^6$, and the left side is $1$.`,
  R`$3c^4s^2 + 3c^2s^4 = 3c^2s^2(c^2 + s^2) = 3c^2s^2$. And $c^2s^2 = \frac14\sin^2 2x$.`,
  R`For (b), $\sin^2 2x = \dfrac{1 - \cos4x}{2}$. For (c), the expression is smallest when $\cos4x = -1$.`
],
scheme: [
  ['(a)', 'M1', R`Expands $(c^2 + s^2)^3$ and uses $c^2 + s^2 = 1$`],
  ['(a)', 'M1', R`$c^6 + s^6 = 1 - 3c^2s^2(c^2 + s^2) = 1 - 3c^2s^2$`],
  ['(a)', 'M1', R`$c^2s^2 = \frac14\sin^2 2x$`],
  ['(a)', 'A1', R`$1 - \frac34\sin^2 2x$ (cso)`],
  ['(b)', 'M1', R`$\sin^2 2x = \frac12(1 - \cos4x)$`],
  ['(b)', 'M1', R`$1 - \frac38(1 - \cos4x)$`],
  ['(b)', 'A1', R`$\dfrac{5 + 3\cos4x}{8}$ (cso)`],
  ['(c)', 'B1', R`Minimum $\frac14$`],
  ['(c)', 'B1', R`$x = 45^\circ$`]
],
answer: R`(c) minimum $\frac14$ at $x = 45^\circ$`,
sol: R`
**(a)** Write $c = \cos x$ and $s = \sin x$.
1. $1 = (c^2 + s^2)^3 = c^6 + 3c^4s^2 + 3c^2s^4 + s^6 = c^6 + s^6 + 3c^2s^2(c^2 + s^2)$
2. Since $c^2 + s^2 = 1$: $c^6 + s^6 = 1 - 3c^2s^2$.
3. $cs = \frac12\sin2x$, so $c^2s^2 = \frac14\sin^2 2x$ and $c^6 + s^6 = 1 - \frac34\sin^2 2x$. $\blacksquare$

**(b)** $\sin^2 2x = \frac12(1 - \cos4x)$, so $1 - \frac34\cdot\frac12(1 - \cos4x) = 1 - \frac38 + \frac38\cos4x = \dfrac{5 + 3\cos4x}{8}$. $\blacksquare$

**(c)** Smallest when $\cos4x = -1$: $\dfrac{5 - 3}{8} = \frac14$. The smallest positive $x$ has $4x = 180^\circ$, so $x = 45^\circ$.

Check: at $45^\circ$, $\cos^6 + \sin^6 = 2\left(\frac{1}{\sqrt2}\right)^6 = 2 \times \frac18 = \frac14$ ✓`
}
]
};
