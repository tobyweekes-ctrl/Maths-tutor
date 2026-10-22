/* Pure Mathematics Year 1 · Chapter 2 Quadratics (sections 2.1 to 2.3) */
BOOK_CHAPTERS.push({ id:'P02', book:'Pure Mathematics Year 1', label:'Chapter 2', title:'Quadratics', sections:[
  { id:'P2.1', num:'2.1', title:'Solving quadratic equations' },
  { id:'P2.2', num:'2.2', title:'Completing the square' },
  { id:'P2.3', num:'2.3', title:'Functions' },
  { id:'P2.4', num:'2.4', title:'Quadratic graphs' },
  { id:'P2.5', num:'2.5', title:'The discriminant' },
  { id:'P2.6', num:'2.6', title:'Modelling with quadratics' }
]});

CONTENT['P2.1'] = {
notes: R`
### Three methods
A quadratic equation $ax^2 + bx + c = 0$ can be solved by:
1. **Factorising**, when it factorises: $x^2 - 5x + 6 = 0 \Rightarrow (x - 2)(x - 3) = 0 \Rightarrow x = 2$ or $3$.
2. **The quadratic formula**, which always works:
> $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
3. **Completing the square** (section 2.2).

Always rearrange to "$= 0$" first.

### Exact answers
"Give your answers in exact form" or "in simplified surd form" means use the formula and simplify the surd, e.g. $x = \dfrac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt3$.

### Disguised quadratics
$x^4 - 5x^2 + 4 = 0$ is a quadratic in $x^2$; $x - 5\sqrt x + 6 = 0$ is a quadratic in $\sqrt x$. Substitute $u = x^2$ or $u = \sqrt x$, solve for $u$, then go back to $x$.

::: booklet
**Not in the formula booklet:** the quadratic formula. You're expected to know it.
:::

### Worked example 1
Solve $2x^2 + 3x - 4 = 0$, giving answers to 3 s.f.
- $x = \dfrac{-3 \pm \sqrt{9 + 32}}{4} = \dfrac{-3 \pm \sqrt{41}}{4}$, so $x = 0.851$ or $x = -2.35$.

### Worked example 2: don't divide by $x$
Solve $3x^2 = 12x$.
- $3x^2 - 12x = 0$, so $3x(x - 4) = 0$, giving $x = 0$ or $x = 4$.

**The trap:** dividing both sides by $x$ and getting only $x = 4$. Dividing by $x$ throws away the solution $x = 0$.

### Watch out
- In the formula, $-b$ and $b^2$: if $b = -5$ then $-b = 5$ and $b^2 = 25$.
- When substituting $u = x^2$, reject any negative value of $u$.
`,
questions: [
Q('P2.1-1', 1, R`Solve $x^2 - 7x + 10 = 0$. [[2]]`,
  [R`Two numbers multiplying to $10$ and adding to $-7$.`, R`$(x - 2)(x - 5) = 0$.`],
  [R`|M1|$(x - 2)(x - 5)$`, R`|A1|$x = 2$, $x = 5$`], R`$x = 2$ or $x = 5$`,
  R`$(x - 2)(x - 5) = 0$, so $x = 2$ or $x = 5$.`),
Q('P2.1-2', 1, R`Solve $x^2 = 5x$. [[2]]`,
  [R`Bring everything to one side. Don't divide by $x$.`, R`$x(x - 5) = 0$.`],
  [R`|M1|$x(x - 5) = 0$`, R`|A1|$x = 0$, $x = 5$`], R`$x = 0$ or $x = 5$`,
  R`$x^2 - 5x = 0$, so $x(x - 5) = 0$, giving $x = 0$ or $x = 5$.`),
Q('P2.1-3', 1, R`Solve $(x - 3)^2 = 16$. [[2]]`,
  [R`Square root both sides, remembering $\pm$.`, R`$x - 3 = \pm4$.`],
  [R`|M1|$x - 3 = \pm4$`, R`|A1|$x = 7$, $x = -1$`], R`$x = 7$ or $x = -1$`,
  R`$x - 3 = 4$ or $x - 3 = -4$, so $x = 7$ or $x = -1$.`),
Q('P2.1-4', 2, R`Solve $3x^2 - 5x - 2 = 0$. [[3]]`,
  [R`$ac = -6$: numbers $-6$ and $1$.`, R`$(3x + 1)(x - 2) = 0$.`],
  [R`|M1|Attempts to factorise`, R`|A1|$(3x + 1)(x - 2)$`, R`|A1|$x = -\frac13$, $x = 2$`], R`$x = -\frac13$ or $x = 2$`,
  R`$(3x + 1)(x - 2) = 0$, so $x = -\frac13$ or $x = 2$.`),
Q('P2.1-5', 2, R`Solve $x^2 + 4x - 1 = 0$, giving your answers in simplified surd form. [[3]]`,
  [R`It doesn't factorise: use the formula with $a = 1$, $b = 4$, $c = -1$.`, R`$b^2 - 4ac = 20$, and $\sqrt{20} = 2\sqrt5$.`],
  [R`|M1|Correct use of the formula`, R`|A1|$\frac{-4 \pm \sqrt{20}}{2}$`, R`|A1|$-2 \pm \sqrt5$`], R`$x = -2 \pm \sqrt5$`,
  R`$x = \dfrac{-4 \pm \sqrt{16 + 4}}{2} = \dfrac{-4 \pm 2\sqrt5}{2} = -2 \pm \sqrt5$.`),
Q('P2.1-6', 2, R`Solve $2x^2 - 3x - 7 = 0$, giving your answers to 3 significant figures. [[3]]`,
  [R`$a = 2$, $b = -3$, $c = -7$.`, R`$b^2 - 4ac = 9 + 56 = 65$.`],
  [R`|M1|Correct use of the formula`, R`|A1|$\frac{3 \pm \sqrt{65}}{4}$`, R`|A1|$2.77$ and $-1.27$`], R`$x = 2.77$ or $x = -1.27$`,
  R`$x = \dfrac{3 \pm \sqrt{65}}{4}$, so $x = 2.77$ or $x = -1.27$ (3 s.f.).`),
Q('P2.1-7', 2, R`Solve $\dfrac{6}{x} = x - 1$, where $x \ne 0$. [[3]]`,
  [R`Multiply both sides by $x$.`, R`$6 = x^2 - x$, so $x^2 - x - 6 = 0$.`],
  [R`|M1|Multiplies by $x$ to get a quadratic`, R`|M1|$(x - 3)(x + 2) = 0$`, R`|A1|$x = 3$, $x = -2$`], R`$x = 3$ or $x = -2$`,
  R`$6 = x^2 - x$, so $x^2 - x - 6 = 0$ and $(x - 3)(x + 2) = 0$: $x = 3$ or $x = -2$.`),
Q('P2.1-8', 3, R`Solve $x^4 - 13x^2 + 36 = 0$. [[4]]`,
  [R`Let $u = x^2$.`, R`$u^2 - 13u + 36 = (u - 4)(u - 9)$.`, R`Each value of $u$ gives two values of $x$.`],
  [R`|M1|$u^2 - 13u + 36 = 0$ with $u = x^2$`, R`|A1|$u = 4$, $u = 9$`, R`|M1|$x = \pm\sqrt u$`, R`|A1|$x = \pm2, \pm3$`], R`$x = \pm2$, $x = \pm3$`,
  R`1. Let $u = x^2$: $u^2 - 13u + 36 = 0$, so $(u - 4)(u - 9) = 0$.
2. $x^2 = 4$ gives $x = \pm2$; $x^2 = 9$ gives $x = \pm3$.`),
Q('P2.1-9', 3, R`Solve $x - 7\sqrt x + 12 = 0$. [[4]]`,
  [R`Let $u = \sqrt x$, so $x = u^2$.`, R`$u^2 - 7u + 12 = 0$.`, R`Then $x = u^2$.`],
  [R`|M1|$u^2 - 7u + 12 = 0$`, R`|A1|$u = 3$, $u = 4$`, R`|M1|$x = u^2$`, R`|A1|$x = 9$, $x = 16$`], R`$x = 9$ or $x = 16$`,
  R`1. Let $u = \sqrt x$: $u^2 - 7u + 12 = 0$, so $(u - 3)(u - 4) = 0$.
2. $\sqrt x = 3$ gives $x = 9$; $\sqrt x = 4$ gives $x = 16$.

Check $x = 9$: $9 - 21 + 12 = 0$ ✓`),
Q('P2.1-10', 3, R`Solve $2(x + 1)^2 - 5(x + 1) - 3 = 0$. [[3]]`,
  [R`Let $u = x + 1$.`, R`$2u^2 - 5u - 3 = (2u + 1)(u - 3)$.`],
  [R`|M1|Substitutes $u = x + 1$ or expands`, R`|A1|$u = -\frac12$ or $u = 3$`, R`|A1|$x = -\frac32$, $x = 2$`], R`$x = -\frac32$ or $x = 2$`,
  R`1. Let $u = x + 1$: $2u^2 - 5u - 3 = 0$, so $(2u + 1)(u - 3) = 0$.
2. $u = -\frac12$ gives $x = -\frac32$; $u = 3$ gives $x = 2$.`),
Q('P2.1-11', 3, R`Solve $x(2x + 3) = 4x + 1$, giving exact answers. [[3]]`,
  [R`Expand and rearrange: $2x^2 - x - 1 = 0$.`, R`It factorises.`],
  [R`|M1|$2x^2 - x - 1 = 0$`, R`|M1|$(2x + 1)(x - 1) = 0$`, R`|A1|$x = -\frac12$, $x = 1$`], R`$x = -\frac12$ or $x = 1$`,
  R`$2x^2 + 3x = 4x + 1$, so $2x^2 - x - 1 = 0$ and $(2x + 1)(x - 1) = 0$: $x = -\frac12$ or $x = 1$.`),
Q('P2.1-12', 4, R`Solve $\dfrac{3}{x + 1} + \dfrac{2}{x - 2} = 1$, giving exact answers. [[5]]`,
  [R`Multiply through by $(x + 1)(x - 2)$.`, R`$3(x - 2) + 2(x + 1) = (x + 1)(x - 2)$.`, R`You get $x^2 - 6x + 2 = 0$. Use the formula.`],
  [R`|M1|Multiplies by $(x + 1)(x - 2)$`, R`|A1|$5x - 4 = x^2 - x - 2$`, R`|A1|$x^2 - 6x + 2 = 0$`, R`|M1|Quadratic formula`, R`|A1|$x = 3 \pm \sqrt7$`], R`$x = 3 \pm \sqrt7$`,
  R`1. $3(x - 2) + 2(x + 1) = (x + 1)(x - 2)$, so $5x - 4 = x^2 - x - 2$.
2. $x^2 - 6x + 2 = 0$, so $x = \dfrac{6 \pm \sqrt{28}}{2} = 3 \pm \sqrt7$.
3. Neither makes a denominator zero, so both are valid.`),
Q('P2.1-13', 4, R`Solve $9^x - 10 \times 3^x + 9 = 0$. [[4]]`,
  [R`$9^x = (3^x)^2$. Let $u = 3^x$.`, R`$u^2 - 10u + 9 = 0$.`],
  [R`|M1|$u^2 - 10u + 9 = 0$ with $u = 3^x$`, R`|A1|$u = 1$, $u = 9$`, R`|M1|Solves $3^x = 1$ and $3^x = 9$`, R`|A1|$x = 0$, $x = 2$`], R`$x = 0$ or $x = 2$`,
  R`1. Let $u = 3^x$: $u^2 - 10u + 9 = 0$, so $(u - 1)(u - 9) = 0$.
2. $3^x = 1$ gives $x = 0$; $3^x = 9$ gives $x = 2$.`),
Q('P2.1-14', 4, R`The equation $x^2 + kx + 12 = 0$ has a root $x = 3$.

**(a)** Find the value of $k$. [[2]]

**(b)** Find the other root. [[2]]

**(c)** Hence solve $(2y - 1)^2 + k(2y - 1) + 12 = 0$. [[2]]`,
  [R`Substitute $x = 3$.`, R`Factorise with your $k$.`, R`For (c), $x = 2y - 1$.`],
  [R`(a)|M1|$9 + 3k + 12 = 0$`, R`(a)|A1|$k = -7$`, R`(b)|M1|$(x - 3)(x - 4) = 0$`, R`(b)|A1|$x = 4$`, R`(c)|M1|$2y - 1 = 3$ or $4$`, R`(c)|A1|$y = 2$, $y = \frac52$`],
  R`(a) $k = -7$ (b) $x = 4$ (c) $y = 2$ or $y = \frac52$`,
  R`**(a)** $9 + 3k + 12 = 0$, so $k = -7$.

**(b)** $x^2 - 7x + 12 = (x - 3)(x - 4)$, so the other root is $x = 4$.

**(c)** With $x = 2y - 1$, the equation is the same quadratic, so $2y - 1 = 3$ or $4$: $y = 2$ or $y = \frac52$.`),
Q('P2.1-15', 5, R`**(a)** Show that $x = \dfrac{1 + \sqrt5}{2}$ is a solution of $x^2 = x + 1$. [[2]]

**(b)** Hence, or otherwise, show that $x^3 = 2x + 1$ for this value of $x$. [[2]]

**(c)** Hence find the exact value of $x^4$ for this $x$, in the form $a + b\sqrt5$. [[3]]`,
  [R`Solve $x^2 - x - 1 = 0$ with the formula, or substitute directly.`, R`$x^3 = x \cdot x^2 = x(x + 1) = x^2 + x$, then use $x^2 = x + 1$ again.`, R`$x^4 = x \cdot x^3 = 2x^2 + x = 2(x + 1) + x = 3x + 2$.`],
  [R`(a)|M1|Uses the formula on $x^2 - x - 1 = 0$ or substitutes`, R`(a)|A1|Shows it works (cso)`, R`(b)|M1|$x^3 = x(x + 1)$`, R`(b)|A1|$= x^2 + x = 2x + 1$ (cso)`, R`(c)|M1|$x^4 = 3x + 2$`, R`(c)|M1|Substitutes $x = \frac{1 + \sqrt5}{2}$`, R`(c)|A1|$\frac72 + \frac32\sqrt5$`],
  R`(c) $x^4 = \frac72 + \frac32\sqrt5$`,
  R`**(a)** $x^2 - x - 1 = 0$ gives $x = \dfrac{1 \pm \sqrt5}{2}$, so $\dfrac{1 + \sqrt5}{2}$ is a solution. $\blacksquare$

**(b)** $x^3 = x \cdot x^2 = x(x + 1) = x^2 + x = (x + 1) + x = 2x + 1$ $\blacksquare$

**(c)** $x^4 = x \cdot x^3 = 2x^2 + x = 2(x + 1) + x = 3x + 2 = \dfrac{3 + 3\sqrt5}{2} + 2 = \dfrac72 + \dfrac32\sqrt5$.

Using $x^2 = x + 1$ to lower the power avoids expanding $\left(\frac{1 + \sqrt5}{2}\right)^4$.`)
]
};

CONTENT['P2.2'] = {
notes: R`
### The method
> $$x^2 + bx = \left(x + \frac b2\right)^2 - \left(\frac b2\right)^2$$

Halve the coefficient of $x$, square the bracket, then subtract the square of that half.
$x^2 + 6x + 2 = (x + 3)^2 - 9 + 2 = (x + 3)^2 - 7$.

### When $a \ne 1$
Take $a$ out of the $x^2$ and $x$ terms first:
$2x^2 - 12x + 5 = 2(x^2 - 6x) + 5 = 2\big((x - 3)^2 - 9\big) + 5 = 2(x - 3)^2 - 13$.

### What it tells you
For $a(x + p)^2 + q$ with $a > 0$:
- the **minimum** value is $q$, when $x = -p$;
- the graph's turning point is $(-p, q)$.

It also solves equations: $(x + 3)^2 = 7 \Rightarrow x = -3 \pm \sqrt7$.

::: booklet
**Not in the formula booklet:** completing the square. It's how the quadratic formula is proved.
:::

### Worked example 1
Write $x^2 - 10x + 30$ as $(x + p)^2 + q$: $(x - 5)^2 - 25 + 30 = (x - 5)^2 + 5$. Minimum $5$ at $x = 5$.

### Worked example 2: a negative $a$
Write $5 + 4x - x^2$ in the form $a - (x + b)^2$.
1. $-(x^2 - 4x) + 5 = -\big((x - 2)^2 - 4\big) + 5 = -(x - 2)^2 + 9$.
2. So $9 - (x - 2)^2$: a **maximum** of $9$ at $x = 2$.

**The trap:** losing the minus sign: $-\big((x - 2)^2 - 4\big)$ becomes $-(x - 2)^2 + 4$, with a plus.

### Watch out
- Subtract $\left(\frac b2\right)^2$; don't add it.
- With a factor outside, the subtracted square is multiplied by that factor too.
`,
questions: [
Q('P2.2-1', 1, R`Write $x^2 + 8x$ in the form $(x + p)^2 + q$. [[2]]`,
  [R`Halve $8$.`, R`$(x + 4)^2 - 16$.`],
  [R`|B1|$p = 4$`, R`|B1|$q = -16$`], R`$(x + 4)^2 - 16$`,
  R`Half of $8$ is $4$: $x^2 + 8x = (x + 4)^2 - 16$.`),
Q('P2.2-2', 1, R`Write $x^2 - 6x + 11$ in the form $(x + p)^2 + q$. [[2]]`,
  [R`Half of $-6$ is $-3$.`, R`$(x - 3)^2 - 9 + 11$.`],
  [R`|B1|$p = -3$`, R`|B1|$q = 2$`], R`$(x - 3)^2 + 2$`,
  R`$(x - 3)^2 - 9 + 11 = (x - 3)^2 + 2$.`),
Q('P2.2-3', 1, R`Write down the minimum value of $(x - 4)^2 + 7$ and the value of $x$ at which it occurs. [[2]]`,
  [R`A square is never negative.`, R`The smallest value of $(x - 4)^2$ is $0$.`],
  [R`|B1|Minimum $7$`, R`|B1|At $x = 4$`], R`Minimum $7$ at $x = 4$`,
  R`$(x - 4)^2 \ge 0$, with $0$ when $x = 4$, so the minimum is $7$ at $x = 4$.`),
Q('P2.2-4', 2, R`Write $x^2 + 5x + 3$ in the form $(x + p)^2 + q$. [[2]]`,
  [R`Half of $5$ is $\frac52$.`, R`$\left(\frac52\right)^2 = \frac{25}{4}$.`],
  [R`|B1|$p = \frac52$`, R`|B1|$q = -\frac{13}{4}$`], R`$\left(x + \frac52\right)^2 - \frac{13}{4}$`,
  R`$\left(x + \frac52\right)^2 - \frac{25}{4} + 3 = \left(x + \frac52\right)^2 - \frac{13}4$.`),
Q('P2.2-5', 2, R`Write $2x^2 + 12x + 7$ in the form $a(x + b)^2 + c$. [[3]]`,
  [R`Take out $2$: $2(x^2 + 6x) + 7$.`, R`$x^2 + 6x = (x + 3)^2 - 9$.`],
  [R`|B1|$a = 2$`, R`|B1|$b = 3$`, R`|B1|$c = -11$`], R`$2(x + 3)^2 - 11$`,
  R`$2(x^2 + 6x) + 7 = 2\big((x + 3)^2 - 9\big) + 7 = 2(x + 3)^2 - 11$.`),
Q('P2.2-6', 2, R`Solve $x^2 - 4x - 3 = 0$ by completing the square. Give exact answers. [[3]]`,
  [R`$(x - 2)^2 - 4 - 3 = 0$.`, R`$(x - 2)^2 = 7$.`],
  [R`|M1|$(x - 2)^2 - 7 = 0$`, R`|M1|Square roots with $\pm$`, R`|A1|$x = 2 \pm \sqrt7$`], R`$x = 2 \pm \sqrt7$`,
  R`$(x - 2)^2 - 7 = 0$, so $(x - 2)^2 = 7$, $x - 2 = \pm\sqrt7$, $x = 2 \pm \sqrt7$.`),
Q('P2.2-7', 2, R`Write $3x^2 - 6x + 1$ in the form $a(x + b)^2 + c$, and state the minimum value. [[3]]`,
  [R`$3(x^2 - 2x) + 1$.`, R`$x^2 - 2x = (x - 1)^2 - 1$.`],
  [R`|M1|$3(x^2 - 2x) + 1$`, R`|A1|$3(x - 1)^2 - 2$`, R`|B1ft|Minimum $-2$`], R`$3(x - 1)^2 - 2$, minimum $-2$`,
  R`$3\big((x - 1)^2 - 1\big) + 1 = 3(x - 1)^2 - 2$. The minimum is $-2$, at $x = 1$.`),
Q('P2.2-8', 3, R`Write $7 + 6x - x^2$ in the form $a - (x + b)^2$, and hence state the maximum value of $7 + 6x - x^2$. [[3]]`,
  [R`$-(x^2 - 6x) + 7$.`, R`$-\big((x - 3)^2 - 9\big) + 7$. Watch the sign.`],
  [R`|M1|$-(x^2 - 6x) + 7$`, R`|A1|$16 - (x - 3)^2$`, R`|B1ft|Maximum $16$`], R`$16 - (x - 3)^2$; maximum $16$`,
  R`$-\big((x - 3)^2 - 9\big) + 7 = 16 - (x - 3)^2$. Since $(x - 3)^2 \ge 0$, the maximum is $16$, at $x = 3$.`),
Q('P2.2-9', 3, R`Solve $2x^2 + 8x + 5 = 0$ by completing the square. Give exact answers. [[4]]`,
  [R`$2(x + 2)^2 - 8 + 5 = 0$.`, R`$(x + 2)^2 = \frac32$.`],
  [R`|M1|$2(x + 2)^2 - 3$`, R`|A1|$(x + 2)^2 = \frac32$`, R`|M1|Square roots with $\pm$`, R`|A1|$x = -2 \pm \sqrt{\frac32}$ or $-2 \pm \frac{\sqrt6}{2}$`], R`$x = -2 \pm \frac{\sqrt6}{2}$`,
  R`1. $2(x^2 + 4x) + 5 = 2(x + 2)^2 - 8 + 5 = 2(x + 2)^2 - 3$.
2. $2(x + 2)^2 = 3$, so $(x + 2)^2 = \frac32$.
3. $x = -2 \pm \sqrt{\frac32} = -2 \pm \frac{\sqrt6}{2}$.`),
Q('P2.2-10', 3, R`Given that $x^2 + px + 13 \equiv (x - 3)^2 + q$, find $p$ and $q$. [[3]]`,
  [R`Expand the right side: $x^2 - 6x + 9 + q$.`, R`Compare coefficients.`],
  [R`|M1|Expands $(x - 3)^2 + q$`, R`|A1|$p = -6$`, R`|A1|$q = 4$`], R`$p = -6$, $q = 4$`,
  R`$x^2 - 6x + 9 + q$: comparing, $p = -6$ and $9 + q = 13$, so $q = 4$.`),
Q('P2.2-11', 3, R`Use completing the square to show that $x^2 - 8x + 20 > 0$ for all real $x$. [[3]]`,
  [R`$(x - 4)^2 + 4$.`, R`A square is never negative.`],
  [R`|M1|$(x - 4)^2 - 16 + 20$`, R`|A1|$(x - 4)^2 + 4$`, R`|A1|$(x - 4)^2 \ge 0$, so the expression $\ge 4 > 0$ (conclusion)`], R`$(x - 4)^2 + 4 \ge 4$`,
  R`$x^2 - 8x + 20 = (x - 4)^2 + 4$. Since $(x - 4)^2 \ge 0$, the expression is at least $4$, so it is always positive. $\blacksquare$`),
Q('P2.2-12', 4, R`**(a)** Write $4x^2 - 12x + 13$ in the form $(ax + b)^2 + c$, where $a > 0$. [[3]]

**(b)** Hence find the maximum value of $\dfrac{8}{4x^2 - 12x + 13}$, and the value of $x$ at which it occurs. [[3]]`,
  [R`$(2x - 3)^2 = 4x^2 - 12x + 9$.`, R`The fraction is largest when the denominator is smallest.`],
  [R`(a)|B1|$a = 2$`, R`(a)|B1|$b = -3$`, R`(a)|B1|$c = 4$`, R`(b)|M1|Least denominator is $4$`, R`(b)|A1|Maximum $2$`, R`(b)|A1|At $x = \frac32$`],
  R`(a) $(2x - 3)^2 + 4$ (b) maximum $2$ at $x = \frac32$`,
  R`**(a)** $(2x - 3)^2 = 4x^2 - 12x + 9$, so $4x^2 - 12x + 13 = (2x - 3)^2 + 4$.

**(b)** The denominator is at least $4$, with equality when $2x - 3 = 0$, so $x = \frac32$. The maximum of the fraction is $\frac84 = 2$.`),
Q('P2.2-13', 4, R`Prove, by completing the square, that the solutions of $ax^2 + bx + c = 0$, $a \ne 0$, are $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. [[5]]`,
  [R`Divide by $a$: $x^2 + \frac bax + \frac ca = 0$.`, R`Complete the square: $\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac ca = 0$.`, R`Rearrange and square root.`],
  [R`|M1|Divides by $a$`, R`|M1|$\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}$`, R`|A1|$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$`, R`|M1|Square roots with $\pm$`, R`|A1|Quadratic formula (cso)`],
  R`The quadratic formula`,
  R`1. Divide by $a$: $x^2 + \dfrac bax + \dfrac ca = 0$.
2. Complete the square: $\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{b^2}{4a^2} + \dfrac ca = 0$.
3. Rearrange: $\left(x + \dfrac{b}{2a}\right)^2 = \dfrac{b^2}{4a^2} - \dfrac{4ac}{4a^2} = \dfrac{b^2 - 4ac}{4a^2}$.
4. Square root: $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{b^2 - 4ac}}{2a}$, so $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. $\blacksquare$`),
Q('P2.2-14', 4, R`The function $f(x) = x^2 + 2kx + 3k + 4$, where $k$ is a constant.

**(a)** Write $f(x)$ in the form $(x + p)^2 + q$, giving $p$ and $q$ in terms of $k$. [[2]]

**(b)** Given that the minimum value of $f(x)$ is $0$, find the possible values of $k$. [[3]]`,
  [R`Half of $2k$ is $k$.`, R`$q = 3k + 4 - k^2$. Set $q = 0$.`],
  [R`(a)|B1|$p = k$`, R`(a)|B1|$q = 3k + 4 - k^2$`, R`(b)|M1|$3k + 4 - k^2 = 0$`, R`(b)|M1|$(k - 4)(k + 1) = 0$`, R`(b)|A1|$k = 4$ or $k = -1$`],
  R`(a) $(x + k)^2 + 3k + 4 - k^2$ (b) $k = 4$ or $-1$`,
  R`**(a)** $f(x) = (x + k)^2 - k^2 + 3k + 4$, so $p = k$ and $q = 3k + 4 - k^2$.

**(b)** Minimum value $q = 0$: $k^2 - 3k - 4 = 0$, so $(k - 4)(k + 1) = 0$ and $k = 4$ or $k = -1$.`),
Q('P2.2-15', 5, R`**(a)** By completing the square, show that $x^2 + y^2 - 6x + 4y + 13 = (x - 3)^2 + (y + 2)^2$. [[2]]

**(b)** Hence find the only pair of real numbers $(x, y)$ that satisfies $x^2 + y^2 - 6x + 4y + 13 = 0$. [[2]]

**(c)** Find the least value of $x^2 + y^2 - 6x + 4y + 20$ over all real $x$ and $y$, and state where it occurs. [[3]]`,
  [R`Complete the square separately in $x$ and in $y$.`, R`A sum of two squares is zero only if each square is zero.`, R`$x^2 + y^2 - 6x + 4y + 20 = (x - 3)^2 + (y + 2)^2 + 7$.`],
  [R`(a)|M1|$(x - 3)^2 - 9 + (y + 2)^2 - 4$`, R`(a)|A1|$+13$ cancels (cso)`, R`(b)|M1|Each square must be zero`, R`(b)|A1|$(3, -2)$`, R`(c)|M1|$(x - 3)^2 + (y + 2)^2 + 7$`, R`(c)|A1|Least value $7$`, R`(c)|A1|At $x = 3$, $y = -2$`],
  R`(b) $(3, -2)$ (c) $7$ at $(3, -2)$`,
  R`**(a)** $(x - 3)^2 - 9 + (y + 2)^2 - 4 + 13 = (x - 3)^2 + (y + 2)^2$ $\blacksquare$

**(b)** $(x - 3)^2 + (y + 2)^2 = 0$. Each square is at least $0$, so both must be $0$: $x = 3$, $y = -2$.

**(c)** The expression is $(x - 3)^2 + (y + 2)^2 + 7 \ge 7$, with equality at $(3, -2)$. Least value $7$.

(You'll meet this idea again with circles in Chapter 6.)`)
]
};

CONTENT['P2.3'] = {
notes: R`
### What a function is
A function takes an input $x$ and gives exactly one output $f(x)$. For $f(x) = x^2 - 3x$, $f(4) = 16 - 12 = 4$.

### Domain and range
- The **domain** is the set of inputs allowed.
- The **range** is the set of outputs you get.

For $f(x) = x^2 - 3x$ with domain all real numbers, completing the square gives $\left(x - \frac32\right)^2 - \frac94$, so the range is $f(x) \ge -\frac94$.

### Roots of a function
The roots of $f(x)$ are the solutions of $f(x) = 0$. They are where the graph $y = f(x)$ crosses the $x$-axis.

::: booklet
**Not in the formula booklet:** function notation or ranges.
:::

### Worked example 1
$g(x) = 2x^2 + 1$. Find $g(-3)$ and solve $g(a) = 19$.
- $g(-3) = 2(9) + 1 = 19$.
- $2a^2 + 1 = 19$ gives $a^2 = 9$, so $a = \pm3$.

### Worked example 2: range on a restricted domain
Find the range of $f(x) = x^2 - 4x + 1$ for $0 \le x \le 5$.
1. $f(x) = (x - 2)^2 - 3$: the minimum $-3$ is at $x = 2$, which is inside the domain.
2. Check the ends: $f(0) = 1$, $f(5) = 6$.
3. Range: $-3 \le f(x) \le 6$.

**The trap:** only working out $f(0)$ and $f(5)$, giving $1 \le f(x) \le 6$. The minimum is in the middle of the domain.

### Watch out
- $f(x + 1)$ means replace every $x$ with $(x + 1)$, in brackets.
- $f(x)^2$ and $f(x^2)$ are different.
`,
questions: [
Q('P2.3-1', 1, R`Given $f(x) = 3x^2 - 2x$, find $f(-2)$. [[1]]`,
  [R`Replace $x$ with $-2$.`, R`$3(4) - 2(-2)$.`],
  [R`|B1|$16$`], R`$16$`,
  R`$f(-2) = 3(-2)^2 - 2(-2) = 12 + 4 = 16$.`),
Q('P2.3-2', 1, R`Find the roots of $f(x) = x^2 - 9x + 20$. [[2]]`,
  [R`Solve $f(x) = 0$.`, R`$(x - 4)(x - 5)$.`],
  [R`|M1|$(x - 4)(x - 5) = 0$`, R`|A1|$x = 4$, $x = 5$`], R`$x = 4$ and $x = 5$`,
  R`$x^2 - 9x + 20 = (x - 4)(x - 5) = 0$, so the roots are $4$ and $5$.`),
Q('P2.3-3', 1, R`Given $g(x) = 2x + 5$, solve $g(a) = 17$. [[1]]`,
  [R`$2a + 5 = 17$.`, R`Rearrange.`],
  [R`|B1|$a = 6$`], R`$a = 6$`,
  R`$2a + 5 = 17$, so $a = 6$.`),
Q('P2.3-4', 2, R`Given $f(x) = x^2 + 3$, find and simplify $f(x + 2)$. [[2]]`,
  [R`Replace $x$ with $(x + 2)$.`, R`$(x + 2)^2 + 3$.`],
  [R`|M1|$(x + 2)^2 + 3$`, R`|A1|$x^2 + 4x + 7$`], R`$x^2 + 4x + 7$`,
  R`$f(x + 2) = (x + 2)^2 + 3 = x^2 + 4x + 4 + 3 = x^2 + 4x + 7$.`),
Q('P2.3-5', 2, R`Find the range of $f(x) = x^2 + 6x + 11$, where $x$ can be any real number. [[2]]`,
  [R`Complete the square.`, R`$(x + 3)^2 + 2$.`],
  [R`|M1|$(x + 3)^2 + 2$`, R`|A1|$f(x) \ge 2$`], R`$f(x) \ge 2$`,
  R`$f(x) = (x + 3)^2 + 2$. The square is at least $0$, so $f(x) \ge 2$.`),
Q('P2.3-6', 2, R`Given $h(x) = x^2 - 2x$, solve $h(x) = 15$. [[2]]`,
  [R`$x^2 - 2x - 15 = 0$.`, R`Factorise.`],
  [R`|M1|$(x - 5)(x + 3) = 0$`, R`|A1|$x = 5$, $x = -3$`], R`$x = 5$ or $x = -3$`,
  R`$x^2 - 2x - 15 = 0$, so $(x - 5)(x + 3) = 0$: $x = 5$ or $x = -3$.`),
Q('P2.3-7', 2, R`Given $f(x) = 5 - x^2$ and that $f(a) = f(a + 2)$, find $a$. [[3]]`,
  [R`$5 - a^2 = 5 - (a + 2)^2$.`, R`Expand and simplify: the $a^2$ terms cancel.`],
  [R`|M1|$5 - a^2 = 5 - (a + 2)^2$`, R`|M1|$a^2 = a^2 + 4a + 4$`, R`|A1|$a = -1$`], R`$a = -1$`,
  R`$a^2 = (a + 2)^2 = a^2 + 4a + 4$, so $4a = -4$ and $a = -1$. (Then $f(-1) = f(1) = 4$, by symmetry about $x = 0$.)`),
Q('P2.3-8', 3, R`Find the range of $f(x) = x^2 - 4x + 1$ for the domain $0 \le x \le 5$. [[4]]`,
  [R`$f(x) = (x - 2)^2 - 3$. Is $x = 2$ in the domain?`, R`Check both ends of the domain too.`],
  [R`|M1|Completes the square`, R`|A1|Minimum $-3$ at $x = 2$, inside the domain`, R`|M1|Evaluates $f(0)$ and $f(5)$`, R`|A1|$-3 \le f(x) \le 6$`], R`$-3 \le f(x) \le 6$`,
  R`1. $f(x) = (x - 2)^2 - 3$: the minimum $-3$ is at $x = 2$, inside $0 \le x \le 5$.
2. Ends: $f(0) = 1$, $f(5) = 6$. The largest is $6$.
3. Range: $-3 \le f(x) \le 6$.`),
Q('P2.3-9', 3, R`Given $f(x) = x^2 - 2x - 3$, solve $f(2x) = 0$. [[3]]`,
  [R`$f(2x) = (2x)^2 - 2(2x) - 3$.`, R`$4x^2 - 4x - 3 = 0$.`],
  [R`|M1|$4x^2 - 4x - 3 = 0$`, R`|M1|$(2x - 3)(2x + 1) = 0$`, R`|A1|$x = \frac32$, $x = -\frac12$`], R`$x = \frac32$ or $x = -\frac12$`,
  R`$f(2x) = 4x^2 - 4x - 3 = (2x - 3)(2x + 1)$, so $x = \frac32$ or $-\frac12$. (These are half the roots $3$ and $-1$ of $f$.)`),
Q('P2.3-10', 3, R`The function $f(x) = x^2 + bx + c$ has roots $-2$ and $7$. Find $b$ and $c$, and the minimum value of $f(x)$. [[4]]`,
  [R`$f(x) = (x + 2)(x - 7)$.`, R`The minimum is halfway between the roots.`],
  [R`|M1|$(x + 2)(x - 7)$`, R`|A1|$b = -5$, $c = -14$`, R`|M1|$x = \frac52$`, R`|A1|Minimum $-\frac{81}{4}$`], R`$b = -5$, $c = -14$, minimum $-\frac{81}{4}$`,
  R`1. $f(x) = (x + 2)(x - 7) = x^2 - 5x - 14$, so $b = -5$, $c = -14$.
2. The minimum is at $x = \frac{-2 + 7}{2} = \frac52$: $f\left(\frac52\right) = \left(\frac92\right)\left(-\frac92\right) = -\frac{81}{4}$.`),
Q('P2.3-11', 3, R`Find the range of $g(x) = 3 + 2x - x^2$, $x \in \mathbb R$. [[3]]`,
  [R`Complete the square with a negative $x^2$ coefficient.`, R`$4 - (x - 1)^2$.`],
  [R`|M1|$-(x^2 - 2x) + 3$`, R`|A1|$4 - (x - 1)^2$`, R`|A1|$g(x) \le 4$`], R`$g(x) \le 4$`,
  R`$g(x) = -\big((x - 1)^2 - 1\big) + 3 = 4 - (x - 1)^2$. So $g(x) \le 4$.`),
Q('P2.3-12', 4, R`The function $f(x) = 2x^2 - 8x + k$ has a minimum value of $3$.

**(a)** Find $k$. [[3]]

**(b)** Find the range of $f(x)$ for $-1 \le x \le 4$. [[3]]`,
  [R`$2(x - 2)^2 - 8 + k$.`, R`Minimum $= k - 8 = 3$.`, R`For (b), the minimum at $x = 2$ is inside the domain. Check $f(-1)$ and $f(4)$.`],
  [R`(a)|M1|$2(x - 2)^2 + k - 8$`, R`(a)|M1|$k - 8 = 3$`, R`(a)|A1|$k = 11$`, R`(b)|B1|Minimum $3$ at $x = 2$`, R`(b)|M1|$f(-1) = 21$, $f(4) = 11$`, R`(b)|A1|$3 \le f(x) \le 21$`],
  R`(a) $k = 11$ (b) $3 \le f(x) \le 21$`,
  R`**(a)** $f(x) = 2(x - 2)^2 + k - 8$, so the minimum is $k - 8 = 3$ and $k = 11$.

**(b)** $f(x) = 2(x - 2)^2 + 3$. The minimum $3$ is at $x = 2$, inside the domain. $f(-1) = 18 + 3 = 21$ and $f(4) = 8 + 3 = 11$. Range: $3 \le f(x) \le 21$.`),
Q('P2.3-13', 4, R`Given $f(x) = x^2 - 3x$ and $g(x) = 2x + 1$, solve $f(x) = g(x) + f(1)$. [[4]]`,
  [R`$f(1) = -2$.`, R`$x^2 - 3x = 2x + 1 - 2$.`],
  [R`|B1|$f(1) = -2$`, R`|M1|$x^2 - 5x + 1 = 0$`, R`|M1|Quadratic formula`, R`|A1|$x = \frac{5 \pm \sqrt{21}}{2}$`], R`$x = \frac{5 \pm \sqrt{21}}{2}$`,
  R`1. $f(1) = 1 - 3 = -2$.
2. $x^2 - 3x = 2x - 1$, so $x^2 - 5x + 1 = 0$.
3. $x = \dfrac{5 \pm \sqrt{25 - 4}}{2} = \dfrac{5 \pm \sqrt{21}}{2}$.`),
Q('P2.3-14', 4, R`The function $f(x) = ax^2 + bx + c$ satisfies $f(0) = 4$, $f(1) = 3$ and $f(-1) = 9$. Find $a$, $b$ and $c$, then find the roots of $f(x)$. [[5]]`,
  [R`$f(0) = c$.`, R`$a + b + c = 3$ and $a - b + c = 9$.`, R`Add and subtract those two equations.`],
  [R`|B1|$c = 4$`, R`|M1|Forms two equations in $a$ and $b$`, R`|A1|$a = 2$, $b = -3$`, R`|M1|Solves $2x^2 - 3x + 4 = 0$ or uses the discriminant`, R`|A1|No real roots, since $9 - 32 < 0$`],
  R`$a = 2$, $b = -3$, $c = 4$; no real roots`,
  R`1. $f(0) = c = 4$.
2. $a + b + 4 = 3$ and $a - b + 4 = 9$, so $a + b = -1$ and $a - b = 5$: $a = 2$, $b = -3$.
3. $2x^2 - 3x + 4 = 0$ has $b^2 - 4ac = 9 - 32 = -23 < 0$, so $f$ has **no real roots**.`),
Q('P2.3-15', 5, R`The function $f(x) = x^2 - 6x + 13$ is defined for all real $x$.

**(a)** Find the range of $f$. [[2]]

**(b)** Find the range of $\dfrac{1}{f(x)}$. [[3]]

**(c)** Solve $f(x) = f(2x)$, and explain your answer with reference to the line of symmetry of $y = f(x)$. [[4]]`,
  [R`$f(x) = (x - 3)^2 + 4$.`, R`If $f(x) \ge 4$, then $0 < \frac{1}{f(x)} \le \frac14$.`, R`Equal outputs happen when the inputs are equal, or are the same distance either side of $x = 3$.`],
  [R`(a)|M1|$(x - 3)^2 + 4$`, R`(a)|A1|$f(x) \ge 4$`, R`(b)|M1|Takes reciprocals and reverses the inequality`, R`(b)|A1|$\frac{1}{f(x)} \le \frac14$`, R`(b)|A1|$\frac1{f(x)} > 0$`, R`(c)|M1|$(x - 3)^2 = (2x - 3)^2$ or expands`, R`(c)|A1|$x = 0$`, R`(c)|A1|$x = 2$`, R`(c)|B1|$x = 2$: inputs $2$ and $4$ are equally far either side of $x = 3$; $x = 0$: equal inputs`],
  R`(a) $f(x) \ge 4$ (b) $0 < \frac1{f(x)} \le \frac14$ (c) $x = 0$ or $x = 2$`,
  R`**(a)** $f(x) = (x - 3)^2 + 4 \ge 4$.

**(b)** $f(x) \ge 4 > 0$, so $\dfrac{1}{f(x)} \le \dfrac14$, and it is always positive: $0 < \dfrac{1}{f(x)} \le \dfrac14$. (As $x$ gets large, $\frac1{f(x)}$ gets close to $0$ but never reaches it.)

**(c)** $(x - 3)^2 + 4 = (2x - 3)^2 + 4$, so $x - 3 = \pm(2x - 3)$.
- $x - 3 = 2x - 3$ gives $x = 0$ (both inputs are $0$).
- $x - 3 = -(2x - 3)$ gives $3x = 6$, so $x = 2$: the inputs are $2$ and $4$, which are equally far either side of the line of symmetry $x = 3$, so $f(2) = f(4) = 5$.`)
]
};
