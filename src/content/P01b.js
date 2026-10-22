/* Pure Mathematics Year 1 · Chapter 1 Algebraic expressions (sections 1.4 to 1.6) */
CONTENT['P1.4'] = {
notes: R`
### Negative and fractional indices
> $$a^0 = 1 \qquad a^{-m} = \frac{1}{a^m} \qquad a^{\frac1n} = \sqrt[n]{a} \qquad a^{\frac mn} = \left(\sqrt[n]{a}\right)^m$$

The same index laws as section 1.1 still apply.

### Working out $a^{\frac mn}$
Take the **root first**, then the power: the numbers stay small.
$27^{\frac23} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$.

### Writing expressions as $ax^n$
This is vital for differentiation and integration later.
- $\dfrac{3}{x^2} = 3x^{-2}$
- $\sqrt x = x^{\frac12}$, and $\dfrac{1}{\sqrt x} = x^{-\frac12}$
- $\dfrac{x^2 + 4}{\sqrt x} = x^{\frac32} + 4x^{-\frac12}$ (split the fraction first)

::: booklet
**Not in the formula booklet:** the meaning of negative and fractional indices.
:::

### Worked example 1
Evaluate $\left(\dfrac{16}{81}\right)^{-\frac34}$.
1. Negative power: flip the fraction: $\left(\dfrac{81}{16}\right)^{\frac34}$.
2. Fourth root: $\dfrac{3}{2}$. Then cube: $\dfrac{27}{8}$.

### Worked example 2: where the coefficient goes
Write $\dfrac{1}{4x^3}$ in the form $ax^n$.
- $\dfrac{1}{4x^3} = \dfrac14 x^{-3}$

**The trap:** writing $4x^{-3}$. Only the $x^3$ moves up and becomes $x^{-3}$. The $4$ stays in the denominator as $\frac14$.

### Watch out
- $x^{-2}$ is not negative: it's $\dfrac{1}{x^2}$.
- $(2x)^{-1} = \dfrac{1}{2x}$, but $2x^{-1} = \dfrac{2}{x}$.
`,
questions: [
Q('P1.4-1', 1, R`Evaluate $25^{\frac12}$. [[1]]`,
  [R`A power of $\frac12$ means square root.`, R`$\sqrt{25}$.`],
  [R`|B1|$5$`], R`$5$`,
  R`$25^{\frac12} = \sqrt{25} = 5$.`),
Q('P1.4-2', 1, R`Evaluate $2^{-3}$. [[1]]`,
  [R`A negative power means one over.`, R`$2^{-3} = \dfrac{1}{2^3}$.`],
  [R`|B1|$\frac18$`], R`$\frac18$`,
  R`$2^{-3} = \dfrac{1}{2^3} = \dfrac18$.`),
Q('P1.4-3', 1, R`Write $\dfrac{5}{x^2}$ in the form $ax^n$. [[1]]`,
  [R`$\dfrac{1}{x^2} = x^{-2}$.`, R`The $5$ stays as the coefficient.`],
  [R`|B1|$5x^{-2}$`], R`$5x^{-2}$`,
  R`$\dfrac{5}{x^2} = 5 \times \dfrac{1}{x^2} = 5x^{-2}$.`),
Q('P1.4-4', 2, R`Evaluate $8^{\frac23}$. [[2]]`,
  [R`Cube root first, then square.`, R`$\sqrt[3]{8} = 2$.`],
  [R`|M1|$\left(\sqrt[3]{8}\right)^2$`, R`|A1|$4$`], R`$4$`,
  R`$8^{\frac23} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.`),
Q('P1.4-5', 2, R`Evaluate $\left(\dfrac{9}{4}\right)^{-\frac12}$. [[2]]`,
  [R`Negative power: flip the fraction.`, R`$\left(\dfrac49\right)^{\frac12}$.`],
  [R`|M1|Flips the fraction or takes the square root`, R`|A1|$\frac23$`], R`$\frac23$`,
  R`$\left(\dfrac94\right)^{-\frac12} = \left(\dfrac49\right)^{\frac12} = \dfrac{2}{3}$.`),
Q('P1.4-6', 2, R`Write $\dfrac{1}{3\sqrt x}$ in the form $ax^n$. [[2]]`,
  [R`$\sqrt x = x^{\frac12}$.`, R`The $3$ stays in the denominator: $\dfrac13 \times \dfrac{1}{x^{1/2}}$.`],
  [R`|B1|$a = \frac13$`, R`|B1|$n = -\frac12$`], R`$\frac13x^{-\frac12}$`,
  R`$\dfrac{1}{3\sqrt x} = \dfrac13 \times \dfrac{1}{x^{\frac12}} = \dfrac13x^{-\frac12}$.`),
Q('P1.4-7', 2, R`Simplify $(64x^6)^{\frac13}$. [[2]]`,
  [R`Apply the power to both factors.`, R`$64^{\frac13} = 4$ and $(x^6)^{\frac13} = x^2$.`],
  [R`|B1|$4$`, R`|B1|$x^2$`], R`$4x^2$`,
  R`$(64x^6)^{\frac13} = 64^{\frac13} \times x^{6 \times \frac13} = 4x^2$.`),
Q('P1.4-8', 3, R`Write $\dfrac{x^3 - 4}{2\sqrt x}$ in the form $ax^p + bx^q$. [[3]]`,
  [R`Split into two fractions: $\dfrac{x^3}{2x^{1/2}} - \dfrac{4}{2x^{1/2}}$.`, R`Subtract powers in each.`],
  [R`|M1|Splits into two terms`, R`|A1|$\frac12x^{\frac52}$`, R`|A1|$-2x^{-\frac12}$`], R`$\frac12x^{\frac52} - 2x^{-\frac12}$`,
  R`1. **Split:** $\dfrac{x^3}{2x^{\frac12}} - \dfrac{4}{2x^{\frac12}}$
2. **First term:** $\frac12x^{3 - \frac12} = \frac12x^{\frac52}$. **Second:** $2x^{-\frac12}$.
3. So $\dfrac12x^{\frac52} - 2x^{-\frac12}$.`),
Q('P1.4-9', 3, R`Solve $x^{\frac32} = 27$. [[2]]`,
  [R`Raise both sides to the power $\frac23$.`, R`$27^{\frac23} = 9$.`],
  [R`|M1|$x = 27^{\frac23}$`, R`|A1|$x = 9$`], R`$x = 9$`,
  R`$x = 27^{\frac23} = \left(\sqrt[3]{27}\right)^2 = 9$. Check: $9^{\frac32} = 3^3 = 27$ ✓`),
Q('P1.4-10', 3, R`Given that $y = \dfrac{1}{16}x^4$, express $y^{-\frac12}$ in the form $kx^n$. [[3]]`,
  [R`Apply the power $-\frac12$ to both factors.`, R`$\left(\frac1{16}\right)^{-\frac12} = 16^{\frac12} = 4$.`],
  [R`|M1|Applies the power to both factors`, R`|A1|$k = 4$`, R`|A1|$n = -2$`], R`$4x^{-2}$`,
  R`$y^{-\frac12} = \left(\dfrac1{16}\right)^{-\frac12} \times (x^4)^{-\frac12} = 16^{\frac12} \times x^{-2} = 4x^{-2}$.`),
Q('P1.4-11', 3, R`Solve $4^{x} = \dfrac{1}{8}$. [[3]]`,
  [R`Write both sides as powers of $2$.`, R`$4^x = 2^{2x}$ and $\dfrac18 = 2^{-3}$.`],
  [R`|M1|$2^{2x}$`, R`|M1|$2^{-3}$`, R`|A1|$x = -\frac32$`], R`$x = -\frac32$`,
  R`$2^{2x} = 2^{-3}$, so $2x = -3$ and $x = -\frac32$.`),
Q('P1.4-12', 4, R`**(a)** Write $\sqrt[3]{x^2}$ and $\dfrac{4}{x}$ as powers of $x$. [[2]]

**(b)** Hence write $\dfrac{(2\sqrt x)^3 - 4}{x}$ in the form $ax^p + bx^q$. [[3]]`,
  [R`$\sqrt[3]{x^2} = x^{\frac23}$.`, R`$(2\sqrt x)^3 = 8x^{\frac32}$.`, R`Divide each term by $x$.`],
  [R`(a)|B1|$x^{\frac23}$`, R`(a)|B1|$4x^{-1}$`, R`(b)|M1|$(2\sqrt x)^3 = 8x^{\frac32}$`, R`(b)|A1|$8x^{\frac12}$`, R`(b)|A1|$-4x^{-1}$`],
  R`(a) $x^{\frac23}$, $4x^{-1}$ (b) $8x^{\frac12} - 4x^{-1}$`,
  R`**(a)** $\sqrt[3]{x^2} = x^{\frac23}$ and $\dfrac4x = 4x^{-1}$.

**(b)** $(2\sqrt x)^3 = 8x^{\frac32}$, so $\dfrac{8x^{\frac32} - 4}{x} = 8x^{\frac12} - 4x^{-1}$.`),
Q('P1.4-13', 4, R`Solve $2^{2x+1} = 8^{x-1}$, then evaluate $x^{-\frac12}$ for your value of $x$. [[5]]`,
  [R`$8^{x-1} = 2^{3x-3}$.`, R`$2x + 1 = 3x - 3$.`],
  [R`|M1|$8^{x-1} = 2^{3(x-1)}$`, R`|M1|$2x + 1 = 3x - 3$`, R`|A1|$x = 4$`, R`|M1|$4^{-\frac12} = \frac{1}{\sqrt4}$`, R`|A1|$\frac12$`],
  R`$x = 4$, $x^{-\frac12} = \frac12$`,
  R`1. $2^{2x+1} = 2^{3x - 3}$, so $2x + 1 = 3x - 3$ and $x = 4$.
2. $4^{-\frac12} = \dfrac{1}{\sqrt4} = \dfrac12$.`),
Q('P1.4-14', 4, R`Find the value of $x$ such that $\dfrac{9^{x}}{3^{x+2}} = 27^{\frac13}$. [[4]]`,
  [R`Write everything as powers of $3$.`, R`$9^x = 3^{2x}$ and $27^{\frac13} = 3$.`],
  [R`|M1|$9^x = 3^{2x}$`, R`|M1|$3^{2x - (x + 2)} = 3^{x - 2}$`, R`|B1|$27^{\frac13} = 3$`, R`|A1|$x = 3$`],
  R`$x = 3$`,
  R`1. $\dfrac{3^{2x}}{3^{x+2}} = 3^{x - 2}$
2. $27^{\frac13} = 3 = 3^1$
3. $x - 2 = 1$, so $x = 3$.`),
Q('P1.4-15', 5, R`**(a)** Given that $y = 2^x$, write $4^x$ and $2^{x+3}$ in terms of $y$. [[2]]

**(b)** Hence solve $4^x - 2^{x+3} + 16 = 0$. [[3]]

**(c)** Show that $9^x - 4 \times 3^x + 3 = 0$ has two solutions, and find them. [[4]]`,
  [R`$4^x = (2^x)^2 = y^2$ and $2^{x+3} = 8 \times 2^x$.`, R`You get a quadratic in $y$.`, R`For (c), let $u = 3^x$.`],
  [R`(a)|B1|$4^x = y^2$`, R`(a)|B1|$2^{x+3} = 8y$`, R`(b)|M1|$y^2 - 8y + 16 = 0$`, R`(b)|A1|$y = 4$`, R`(b)|A1|$x = 2$`, R`(c)|M1|$u^2 - 4u + 3 = 0$ with $u = 3^x$`, R`(c)|A1|$u = 1$ or $u = 3$`, R`(c)|A1|$x = 0$`, R`(c)|A1|$x = 1$`],
  R`(b) $x = 2$ (c) $x = 0$ or $x = 1$`,
  R`**(a)** $4^x = (2^2)^x = (2^x)^2 = y^2$ and $2^{x+3} = 2^3 \times 2^x = 8y$.

**(b)** $y^2 - 8y + 16 = 0$, so $(y - 4)^2 = 0$ and $y = 4$. Then $2^x = 4$, so $x = 2$.

**(c)** Let $u = 3^x$. Then $9^x = u^2$ and $u^2 - 4u + 3 = 0$, so $(u - 1)(u - 3) = 0$.
$3^x = 1$ gives $x = 0$; $3^x = 3$ gives $x = 1$. Both are valid (each $u$ is positive), so there are two solutions.`)
]
};

CONTENT['P1.5'] = {
notes: R`
### Surds
A surd is a root that can't be written as a whole number or fraction, such as $\sqrt2$ or $\sqrt{12}$.
> $$\sqrt{ab} = \sqrt a\sqrt b \qquad \sqrt{\frac ab} = \frac{\sqrt a}{\sqrt b} \qquad \sqrt a \times \sqrt a = a$$

### Simplifying
Find the **largest square factor**: $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt2$.

### Adding and subtracting
Only like surds combine, just like algebra: $3\sqrt2 + 5\sqrt2 = 8\sqrt2$. Simplify each surd first: $\sqrt{50} + \sqrt{18} = 5\sqrt2 + 3\sqrt2 = 8\sqrt2$.

### Expanding brackets
Expand as normal, using $\sqrt a\sqrt a = a$:
$(2 + \sqrt3)(4 - \sqrt3) = 8 - 2\sqrt3 + 4\sqrt3 - 3 = 5 + 2\sqrt3$.

::: booklet
**Not in the formula booklet:** the surd rules. You'll need them on the non-calculator style questions.
:::

### Worked example 1
Simplify $\sqrt{48} - \sqrt{12}$: $4\sqrt3 - 2\sqrt3 = 2\sqrt3$.

### Worked example 2: roots don't split over addition
Is $\sqrt{9 + 16}$ equal to $\sqrt9 + \sqrt{16}$?
- $\sqrt{25} = 5$, but $3 + 4 = 7$. So no.

**The trap:** writing $\sqrt{a + b} = \sqrt a + \sqrt b$. Roots only split over **multiplication** and division.

### Watch out
- $(\sqrt5)^2 = 5$, and $(2\sqrt5)^2 = 4 \times 5 = 20$.
- Always look for the **largest** square factor, or you'll need to simplify twice.
`,
questions: [
Q('P1.5-1', 1, R`Simplify $\sqrt{50}$. [[1]]`,
  [R`Find the largest square factor of $50$.`, R`$50 = 25 \times 2$.`],
  [R`|B1|$5\sqrt2$`], R`$5\sqrt2$`,
  R`$\sqrt{50} = \sqrt{25}\sqrt2 = 5\sqrt2$.`),
Q('P1.5-2', 1, R`Simplify $\sqrt{12} \times \sqrt3$. [[1]]`,
  [R`$\sqrt a\sqrt b = \sqrt{ab}$.`, R`$\sqrt{36}$.`],
  [R`|B1|$6$`], R`$6$`,
  R`$\sqrt{12}\sqrt3 = \sqrt{36} = 6$.`),
Q('P1.5-3', 1, R`Simplify $3\sqrt5 + 4\sqrt5 - \sqrt5$. [[1]]`,
  [R`They're all multiples of $\sqrt5$.`, R`$3 + 4 - 1$.`],
  [R`|B1|$6\sqrt5$`], R`$6\sqrt5$`,
  R`$(3 + 4 - 1)\sqrt5 = 6\sqrt5$.`),
Q('P1.5-4', 2, R`Simplify $\sqrt{75} - \sqrt{27}$. [[2]]`,
  [R`Simplify each surd first.`, R`$\sqrt{75} = 5\sqrt3$ and $\sqrt{27} = 3\sqrt3$.`],
  [R`|M1|Simplifies at least one surd`, R`|A1|$2\sqrt3$`], R`$2\sqrt3$`,
  R`$5\sqrt3 - 3\sqrt3 = 2\sqrt3$.`),
Q('P1.5-5', 2, R`Expand and simplify $(3 + \sqrt2)(5 - \sqrt2)$. [[2]]`,
  [R`Four terms, using $\sqrt2 \times \sqrt2 = 2$.`, R`$15 - 3\sqrt2 + 5\sqrt2 - 2$.`],
  [R`|M1|Four terms`, R`|A1|$13 + 2\sqrt2$`], R`$13 + 2\sqrt2$`,
  R`$15 - 3\sqrt2 + 5\sqrt2 - 2 = 13 + 2\sqrt2$.`),
Q('P1.5-6', 2, R`Expand and simplify $(2\sqrt3 - 1)^2$. [[2]]`,
  [R`$(2\sqrt3)^2 = 12$.`, R`Middle term: $2 \times 2\sqrt3 \times (-1)$.`],
  [R`|M1|Correct expansion method`, R`|A1|$13 - 4\sqrt3$`], R`$13 - 4\sqrt3$`,
  R`$(2\sqrt3)^2 - 2(2\sqrt3)(1) + 1 = 12 - 4\sqrt3 + 1 = 13 - 4\sqrt3$.`),
Q('P1.5-7', 2, R`Simplify $\sqrt{8} + \sqrt{18} + \sqrt{32}$. [[2]]`,
  [R`Each is a multiple of $\sqrt2$.`, R`$2\sqrt2 + 3\sqrt2 + 4\sqrt2$.`],
  [R`|M1|Simplifies each surd`, R`|A1|$9\sqrt2$`], R`$9\sqrt2$`,
  R`$\sqrt8 = 2\sqrt2$, $\sqrt{18} = 3\sqrt2$, $\sqrt{32} = 4\sqrt2$, so the sum is $9\sqrt2$.`),
Q('P1.5-8', 3, R`A rectangle has sides $(4 + \sqrt5)$ cm and $(4 - \sqrt5)$ cm. Find, without a calculator, its exact area and the exact length of its diagonal. [[4]]`,
  [R`Area: a difference of two squares.`, R`Diagonal$^2$ = sum of the squares of the sides. Expand each square.`],
  [R`|M1|$(4 + \sqrt5)(4 - \sqrt5)$`, R`|A1|Area $11$ cm²`, R`|M1|$(4 + \sqrt5)^2 + (4 - \sqrt5)^2$`, R`|A1|Diagonal $\sqrt{42}$ cm`],
  R`Area $11$ cm², diagonal $\sqrt{42}$ cm`,
  R`1. **Area:** $(4 + \sqrt5)(4 - \sqrt5) = 16 - 5 = 11$ cm².
2. **Diagonal:** $(4 + \sqrt5)^2 + (4 - \sqrt5)^2 = (21 + 8\sqrt5) + (21 - 8\sqrt5) = 42$, so the diagonal is $\sqrt{42}$ cm.`),
Q('P1.5-9', 3, R`Show that $\sqrt{20} + \sqrt{45} - \sqrt{80}$ can be written as $k\sqrt5$, stating the value of $k$. [[3]]`,
  [R`Simplify each surd as a multiple of $\sqrt5$.`, R`$2\sqrt5 + 3\sqrt5 - 4\sqrt5$.`],
  [R`|M1|Simplifies two surds correctly`, R`|M1|All three as multiples of $\sqrt5$`, R`|A1|$k = 1$`], R`$k = 1$`,
  R`$\sqrt{20} = 2\sqrt5$, $\sqrt{45} = 3\sqrt5$, $\sqrt{80} = 4\sqrt5$. So the total is $(2 + 3 - 4)\sqrt5 = \sqrt5$, and $k = 1$.`),
Q('P1.5-10', 3, R`Solve the equation $x\sqrt2 + 5 = \sqrt{50}$, giving your answer in the form $a + b\sqrt2$. [[3]]`,
  [R`$\sqrt{50} = 5\sqrt2$.`, R`$x\sqrt2 = 5\sqrt2 - 5$, then divide by $\sqrt2$.`, R`$\dfrac{5}{\sqrt2} = \dfrac{5\sqrt2}{2}$.`],
  [R`|M1|$x\sqrt2 = 5\sqrt2 - 5$`, R`|M1|Divides by $\sqrt2$ and simplifies $\frac{5}{\sqrt2}$`, R`|A1|$5 - \frac52\sqrt2$`], R`$x = 5 - \frac52\sqrt2$`,
  R`1. $x\sqrt2 = 5\sqrt2 - 5$
2. $x = 5 - \dfrac{5}{\sqrt2} = 5 - \dfrac{5\sqrt2}{2}$`),
Q('P1.5-11', 3, R`Expand and simplify $(\sqrt7 + \sqrt3)(\sqrt7 - \sqrt3) + (\sqrt7 + \sqrt3)^2$. [[3]]`,
  [R`The first product is a difference of two squares.`, R`$(\sqrt7 + \sqrt3)^2 = 7 + 2\sqrt{21} + 3$.`],
  [R`|B1|$(\sqrt7 + \sqrt3)(\sqrt7 - \sqrt3) = 4$`, R`|M1|Expands the square`, R`|A1|$14 + 2\sqrt{21}$`], R`$14 + 2\sqrt{21}$`,
  R`1. $(\sqrt7 + \sqrt3)(\sqrt7 - \sqrt3) = 7 - 3 = 4$
2. $(\sqrt7 + \sqrt3)^2 = 7 + 2\sqrt{21} + 3 = 10 + 2\sqrt{21}$
3. Total: $14 + 2\sqrt{21}$`),
Q('P1.5-12', 4, R`The point $A$ has coordinates $(1 + \sqrt3, 2)$ and $B$ has coordinates $(1 - \sqrt3, 2 + 2\sqrt3)$. Show that $AB = 2\sqrt6$. [[4]]`,
  [R`$AB^2 = (\Delta x)^2 + (\Delta y)^2$.`, R`$\Delta x = -2\sqrt3$ and $\Delta y = 2\sqrt3$.`],
  [R`|M1|Finds both differences`, R`|M1|$(2\sqrt3)^2 + (2\sqrt3)^2$`, R`|A1|$AB^2 = 24$`, R`|A1|$AB = \sqrt{24} = 2\sqrt6$ (cso)`],
  R`$AB = 2\sqrt6$`,
  R`1. $\Delta x = (1 - \sqrt3) - (1 + \sqrt3) = -2\sqrt3$ and $\Delta y = 2\sqrt3$.
2. $AB^2 = 12 + 12 = 24$, so $AB = \sqrt{24} = \sqrt{4 \times 6} = 2\sqrt6$. $\blacksquare$`),
Q('P1.5-13', 4, R`Given that $(a + b\sqrt2)^2 = 11 + 6\sqrt2$, where $a$ and $b$ are positive integers, find $a$ and $b$. [[4]]`,
  [R`Expand: $a^2 + 2b^2 + 2ab\sqrt2$.`, R`Compare: $a^2 + 2b^2 = 11$ and $2ab = 6$.`, R`$ab = 3$ with positive integers: try $a = 3, b = 1$ or $a = 1, b = 3$.`],
  [R`|M1|Expands to $a^2 + 2b^2 + 2ab\sqrt2$`, R`|M1|Equates rational and surd parts`, R`|A1|$a = 3$`, R`|A1|$b = 1$`],
  R`$a = 3$, $b = 1$`,
  R`1. $(a + b\sqrt2)^2 = a^2 + 2ab\sqrt2 + 2b^2$
2. Compare: $a^2 + 2b^2 = 11$ and $2ab = 6$, so $ab = 3$.
3. Positive integers with $ab = 3$: $(3, 1)$ gives $9 + 2 = 11$ ✓; $(1, 3)$ gives $1 + 18 \ne 11$. So $a = 3$, $b = 1$.`),
Q('P1.5-14', 4, R`A right-angled triangle has shorter sides $(2 + \sqrt3)$ cm and $(2 - \sqrt3)$ cm. Find, in simplest form, its exact area and the exact length of its hypotenuse. [[5]]`,
  [R`Area $= \frac12 \times$ base $\times$ height.`, R`Hypotenuse$^2 = (2 + \sqrt3)^2 + (2 - \sqrt3)^2$.`],
  [R`|M1|$\frac12(2 + \sqrt3)(2 - \sqrt3)$`, R`|A1|Area $\frac12$ cm²`, R`|M1|Sum of squares`, R`|A1|$14$`, R`|A1|Hypotenuse $\sqrt{14}$ cm`],
  R`Area $\frac12$ cm², hypotenuse $\sqrt{14}$ cm`,
  R`1. **Area:** $\frac12(4 - 3) = \frac12$ cm².
2. **Hypotenuse:** $(7 + 4\sqrt3) + (7 - 4\sqrt3) = 14$, so it is $\sqrt{14}$ cm.`),
Q('P1.5-15', 5, R`**(a)** Show that $(\sqrt{n + 1} - \sqrt n)(\sqrt{n + 1} + \sqrt n) = 1$ for any positive integer $n$. [[2]]

**(b)** Hence show that $\dfrac{1}{\sqrt{n+1} + \sqrt n} = \sqrt{n+1} - \sqrt n$. [[1]]

**(c)** Hence find the exact value of $\dfrac{1}{\sqrt2 + \sqrt1} + \dfrac{1}{\sqrt3 + \sqrt2} + \cdots + \dfrac{1}{\sqrt{100} + \sqrt{99}}$. [[4]]`,
  [R`Difference of two squares.`, R`Divide both sides of (a) by $\sqrt{n+1} + \sqrt n$.`, R`For (c), write each term using (b). Most terms cancel in pairs.`],
  [R`(a)|M1|Expands as a difference of two squares`, R`(a)|A1|$(n + 1) - n = 1$ (cso)`, R`(b)|B1|Divides by $\sqrt{n+1} + \sqrt n$`, R`(c)|M1|Writes each term as $\sqrt{n+1} - \sqrt n$`, R`(c)|M1|Recognises the cancelling`, R`(c)|A1|$\sqrt{100} - \sqrt1$`, R`(c)|A1|$9$`],
  R`(c) $9$`,
  R`**(a)** $(\sqrt{n+1})^2 - (\sqrt n)^2 = (n + 1) - n = 1$ $\blacksquare$

**(b)** Divide (a) by $\sqrt{n+1} + \sqrt n$ (which is positive). $\blacksquare$

**(c)** By (b), the sum is $(\sqrt2 - \sqrt1) + (\sqrt3 - \sqrt2) + \cdots + (\sqrt{100} - \sqrt{99})$. Every term cancels except $\sqrt{100} - \sqrt1 = 10 - 1 = 9$.`)
]
};

CONTENT['P1.6'] = {
notes: R`
### Rationalising the denominator
"Rationalise" means removing surds from the bottom of a fraction.
- **One surd on the bottom:** multiply top and bottom by that surd.
$$\frac{6}{\sqrt3} = \frac{6\sqrt3}{3} = 2\sqrt3$$
- **A bracket like $a + \sqrt b$:** multiply top and bottom by the **conjugate** $a - \sqrt b$. The bottom becomes a difference of two squares, so the surd disappears.
$$\frac{1}{3 + \sqrt2} = \frac{3 - \sqrt2}{(3 + \sqrt2)(3 - \sqrt2)} = \frac{3 - \sqrt2}{7}$$

::: booklet
**Not in the formula booklet:** this method. Multiply by the conjugate, which is the same bracket with the sign in the middle flipped.
:::

### Worked example 1
Rationalise $\dfrac{4}{\sqrt5 - 1}$.
1. Multiply by $\dfrac{\sqrt5 + 1}{\sqrt5 + 1}$: the bottom is $5 - 1 = 4$.
2. $\dfrac{4(\sqrt5 + 1)}{4} = \sqrt5 + 1$.

### Worked example 2: multiply the whole numerator
Rationalise $\dfrac{2 + \sqrt3}{2 - \sqrt3}$.
1. Multiply top and bottom by $2 + \sqrt3$. Bottom: $4 - 3 = 1$.
2. Top: $(2 + \sqrt3)^2 = 4 + 4\sqrt3 + 3 = 7 + 4\sqrt3$.

**The trap:** multiplying only one term of the numerator by the conjugate. The **whole** numerator gets multiplied.

### Watch out
- Multiply top **and** bottom by the same thing, so the value doesn't change.
- Simplify at the end: cancel common factors.
`,
questions: [
Q('P1.6-1', 1, R`Rationalise the denominator of $\dfrac{10}{\sqrt5}$. [[2]]`,
  [R`Multiply top and bottom by $\sqrt5$.`, R`$\dfrac{10\sqrt5}{5}$.`],
  [R`|M1|Multiplies by $\frac{\sqrt5}{\sqrt5}$`, R`|A1|$2\sqrt5$`], R`$2\sqrt5$`,
  R`$\dfrac{10}{\sqrt5} \times \dfrac{\sqrt5}{\sqrt5} = \dfrac{10\sqrt5}{5} = 2\sqrt5$.`),
Q('P1.6-2', 1, R`Rationalise the denominator of $\dfrac{1}{\sqrt7}$. [[1]]`,
  [R`Multiply top and bottom by $\sqrt7$.`, R`$\sqrt7 \times \sqrt7 = 7$.`],
  [R`|B1|$\frac{\sqrt7}{7}$`], R`$\frac{\sqrt7}{7}$`,
  R`$\dfrac{1}{\sqrt7} \times \dfrac{\sqrt7}{\sqrt7} = \dfrac{\sqrt7}{7}$.`),
Q('P1.6-3', 1, R`Rationalise the denominator of $\dfrac{3}{2\sqrt3}$. [[2]]`,
  [R`Multiply by $\dfrac{\sqrt3}{\sqrt3}$.`, R`The bottom becomes $2 \times 3 = 6$.`],
  [R`|M1|Multiplies by $\frac{\sqrt3}{\sqrt3}$`, R`|A1|$\frac{\sqrt3}{2}$`], R`$\frac{\sqrt3}{2}$`,
  R`$\dfrac{3\sqrt3}{2 \times 3} = \dfrac{3\sqrt3}{6} = \dfrac{\sqrt3}{2}$.`),
Q('P1.6-4', 2, R`Rationalise the denominator of $\dfrac{1}{3 + \sqrt2}$. [[2]]`,
  [R`Multiply by the conjugate $3 - \sqrt2$.`, R`Bottom: $9 - 2 = 7$.`],
  [R`|M1|Multiplies by $\frac{3 - \sqrt2}{3 - \sqrt2}$`, R`|A1|$\frac{3 - \sqrt2}{7}$`], R`$\frac{3 - \sqrt2}{7}$`,
  R`$\dfrac{3 - \sqrt2}{(3 + \sqrt2)(3 - \sqrt2)} = \dfrac{3 - \sqrt2}{9 - 2} = \dfrac{3 - \sqrt2}{7}$.`),
Q('P1.6-5', 2, R`Rationalise the denominator of $\dfrac{6}{\sqrt5 - \sqrt3}$. [[2]]`,
  [R`Conjugate: $\sqrt5 + \sqrt3$.`, R`Bottom: $5 - 3 = 2$.`],
  [R`|M1|Multiplies by the conjugate`, R`|A1|$3(\sqrt5 + \sqrt3)$`], R`$3\sqrt5 + 3\sqrt3$`,
  R`$\dfrac{6(\sqrt5 + \sqrt3)}{5 - 3} = 3(\sqrt5 + \sqrt3) = 3\sqrt5 + 3\sqrt3$.`),
Q('P1.6-6', 2, R`Write $\dfrac{4}{\sqrt3 + 1}$ in the form $a\sqrt3 + b$. [[3]]`,
  [R`Multiply by $\dfrac{\sqrt3 - 1}{\sqrt3 - 1}$.`, R`Bottom: $3 - 1 = 2$.`],
  [R`|M1|Multiplies by the conjugate`, R`|A1|$\frac{4(\sqrt3 - 1)}{2}$`, R`|A1|$2\sqrt3 - 2$`], R`$2\sqrt3 - 2$`,
  R`$\dfrac{4(\sqrt3 - 1)}{3 - 1} = 2(\sqrt3 - 1) = 2\sqrt3 - 2$, so $a = 2$, $b = -2$.`),
Q('P1.6-7', 2, R`Simplify $\dfrac{\sqrt{12}}{\sqrt{27}}$. [[2]]`,
  [R`Simplify each surd, or combine into one root.`, R`$\dfrac{2\sqrt3}{3\sqrt3}$.`],
  [R`|M1|$\frac{2\sqrt3}{3\sqrt3}$ or $\sqrt{\frac{12}{27}}$`, R`|A1|$\frac23$`], R`$\frac23$`,
  R`$\dfrac{2\sqrt3}{3\sqrt3} = \dfrac23$. (Or $\sqrt{\frac{12}{27}} = \sqrt{\frac49} = \frac23$.)`),
Q('P1.6-8', 3, R`Write $\dfrac{2 + \sqrt3}{2 - \sqrt3}$ in the form $a + b\sqrt3$. [[3]]`,
  [R`Multiply top and bottom by $2 + \sqrt3$.`, R`Bottom $= 1$. Expand $(2 + \sqrt3)^2$.`],
  [R`|M1|Multiplies by the conjugate`, R`|M1|Expands the numerator`, R`|A1|$7 + 4\sqrt3$`], R`$7 + 4\sqrt3$`,
  R`$\dfrac{(2 + \sqrt3)^2}{4 - 3} = 4 + 4\sqrt3 + 3 = 7 + 4\sqrt3$.`),
Q('P1.6-9', 3, R`Write $\dfrac{5 - \sqrt2}{3 + \sqrt2}$ in the form $a + b\sqrt2$, where $a$ and $b$ are rational. [[3]]`,
  [R`Multiply top and bottom by $3 - \sqrt2$.`, R`Top: $(5 - \sqrt2)(3 - \sqrt2) = 15 - 5\sqrt2 - 3\sqrt2 + 2$.`],
  [R`|M1|Multiplies by the conjugate`, R`|A1|Numerator $17 - 8\sqrt2$, denominator $7$`, R`|A1|$\frac{17}{7} - \frac87\sqrt2$`], R`$\frac{17}{7} - \frac{8}{7}\sqrt2$`,
  R`1. Bottom: $9 - 2 = 7$.
2. Top: $15 - 5\sqrt2 - 3\sqrt2 + 2 = 17 - 8\sqrt2$.
3. So $\dfrac{17}{7} - \dfrac87\sqrt2$.`),
Q('P1.6-10', 3, R`Show that $\dfrac{1}{\sqrt2 - 1} - \dfrac{1}{\sqrt2 + 1} = 2$. [[3]]`,
  [R`Rationalise each fraction, or combine over a common denominator.`, R`The common denominator is $(\sqrt2 - 1)(\sqrt2 + 1) = 1$.`],
  [R`|M1|Common denominator or rationalises both`, R`|A1|$(\sqrt2 + 1) - (\sqrt2 - 1)$`, R`|A1|$= 2$ (cso)`], R`$2$`,
  R`$\dfrac{(\sqrt2 + 1) - (\sqrt2 - 1)}{(\sqrt2 - 1)(\sqrt2 + 1)} = \dfrac{2}{2 - 1} = 2$ $\blacksquare$`),
Q('P1.6-11', 3, R`A rectangle has area $(10 + 4\sqrt3)$ cm² and width $(2 + \sqrt3)$ cm. Find its length in the form $(a + b\sqrt3)$ cm. [[3]]`,
  [R`Length $= \dfrac{\text{area}}{\text{width}}$.`, R`Rationalise: multiply by $\dfrac{2 - \sqrt3}{2 - \sqrt3}$.`],
  [R`|M1|$\frac{10 + 4\sqrt3}{2 + \sqrt3}$ and multiplies by the conjugate`, R`|A1|Numerator $8 - 2\sqrt3$, denominator $1$`, R`|A1|$8 - 2\sqrt3$`], R`$(8 - 2\sqrt3)$ cm`,
  R`1. Length $= \dfrac{10 + 4\sqrt3}{2 + \sqrt3} \times \dfrac{2 - \sqrt3}{2 - \sqrt3}$. Bottom: $4 - 3 = 1$.
2. Top: $20 - 10\sqrt3 + 8\sqrt3 - 12 = 8 - 2\sqrt3$.
3. Length $= (8 - 2\sqrt3)$ cm. Check: $(2 + \sqrt3)(8 - 2\sqrt3) = 16 - 4\sqrt3 + 8\sqrt3 - 6 = 10 + 4\sqrt3$ ✓`),
Q('P1.6-12', 4, R`Solve $x(\sqrt5 - 2) = \sqrt5 + 2$, giving $x$ in the form $a + b\sqrt5$. [[4]]`,
  [R`$x = \dfrac{\sqrt5 + 2}{\sqrt5 - 2}$.`, R`Multiply top and bottom by $\sqrt5 + 2$. Bottom: $5 - 4 = 1$.`],
  [R`|M1|$x = \frac{\sqrt5 + 2}{\sqrt5 - 2}$`, R`|M1|Multiplies by the conjugate`, R`|M1|Expands $(\sqrt5 + 2)^2$`, R`|A1|$9 + 4\sqrt5$`], R`$x = 9 + 4\sqrt5$`,
  R`1. $x = \dfrac{\sqrt5 + 2}{\sqrt5 - 2} \times \dfrac{\sqrt5 + 2}{\sqrt5 + 2}$
2. Bottom: $5 - 4 = 1$. Top: $5 + 4\sqrt5 + 4 = 9 + 4\sqrt5$.
3. $x = 9 + 4\sqrt5$.`),
Q('P1.6-13', 4, R`Given that $\dfrac{a + 2\sqrt2}{3 - \sqrt2} = b + \sqrt2$, where $a$ and $b$ are integers, find $a$ and $b$. [[4]]`,
  [R`Multiply both sides by $3 - \sqrt2$.`, R`$(b + \sqrt2)(3 - \sqrt2) = 3b - b\sqrt2 + 3\sqrt2 - 2$.`, R`Compare the $\sqrt2$ parts and the whole-number parts.`],
  [R`|M1|$a + 2\sqrt2 = (b + \sqrt2)(3 - \sqrt2)$`, R`|M1|Expands to $(3b - 2) + (3 - b)\sqrt2$`, R`|A1|$b = 1$`, R`|A1|$a = 1$`],
  R`$a = 1$, $b = 1$`,
  R`1. $a + 2\sqrt2 = (b + \sqrt2)(3 - \sqrt2) = (3b - 2) + (3 - b)\sqrt2$
2. $\sqrt2$ parts: $3 - b = 2$, so $b = 1$.
3. Whole parts: $a = 3b - 2 = 1$.

Check: $\dfrac{1 + 2\sqrt2}{3 - \sqrt2} = \dfrac{(1 + 2\sqrt2)(3 + \sqrt2)}{7} = \dfrac{7 + 7\sqrt2}{7} = 1 + \sqrt2$ ✓`),
Q('P1.6-14', 4, R`**(a)** Rationalise the denominator of $\dfrac{1}{\sqrt3 - \sqrt2}$. [[2]]

**(b)** Hence show that $\dfrac{1}{\sqrt3 - \sqrt2} - \dfrac{2}{\sqrt3}$ can be written as $\dfrac{\sqrt3}{3} + \sqrt2$. [[3]]`,
  [R`Conjugate: $\sqrt3 + \sqrt2$. Bottom: $3 - 2 = 1$.`, R`$\dfrac{2}{\sqrt3} = \dfrac{2\sqrt3}{3}$.`, R`$\sqrt3 - \frac23\sqrt3 = \frac13\sqrt3$.`],
  [R`(a)|M1|Multiplies by the conjugate`, R`(a)|A1|$\sqrt3 + \sqrt2$`, R`(b)|B1|$\frac{2}{\sqrt3} = \frac{2\sqrt3}{3}$`, R`(b)|M1|Collects the $\sqrt3$ terms`, R`(b)|A1|$\frac{\sqrt3}{3} + \sqrt2$ (cso)`],
  R`(a) $\sqrt3 + \sqrt2$`,
  R`**(a)** $\dfrac{\sqrt3 + \sqrt2}{3 - 2} = \sqrt3 + \sqrt2$

**(b)** $\sqrt3 + \sqrt2 - \dfrac{2\sqrt3}{3} = \dfrac{3\sqrt3 - 2\sqrt3}{3} + \sqrt2 = \dfrac{\sqrt3}{3} + \sqrt2$ $\blacksquare$`),
Q('P1.6-15', 5, R`**(a)** Show that $\dfrac{1}{1 + \sqrt2} = \sqrt2 - 1$. [[2]]

**(b)** Show that $(\sqrt2 - 1)^2 = 3 - 2\sqrt2$, and hence write $\dfrac{1}{(1 + \sqrt2)^4}$ in the form $a + b\sqrt2$. [[4]]

**(c)** Use your answer to (b) to explain why $\dfrac{1}{(1 + \sqrt2)^4}$ is close to, but not equal to, $\dfrac{1}{34}$. [[2]]`,
  [R`Rationalise: multiply by $\sqrt2 - 1$.`, R`$\dfrac{1}{(1 + \sqrt2)^4} = (\sqrt2 - 1)^4 = \big((\sqrt2 - 1)^2\big)^2$.`, R`$(3 - 2\sqrt2)^2 = 17 - 12\sqrt2$. Compare with $(17 + 12\sqrt2)(17 - 12\sqrt2) = 1$.`],
  [R`(a)|M1|Multiplies by $\frac{\sqrt2 - 1}{\sqrt2 - 1}$`, R`(a)|A1|Bottom $= 1$, giving $\sqrt2 - 1$ (cso)`, R`(b)|B1|$(\sqrt2 - 1)^2 = 3 - 2\sqrt2$`, R`(b)|M1|Uses $(\sqrt2 - 1)^4 = (3 - 2\sqrt2)^2$`, R`(b)|M1|Expands $(3 - 2\sqrt2)^2$`, R`(b)|A1|$17 - 12\sqrt2$`, R`(c)|M1|Value is $\frac{1}{17 + 12\sqrt2}$ with $12\sqrt2 \approx 16.97$`, R`(c)|A1|Denominator is just under $34$ and irrational, so close to but not equal to $\frac1{34}$`],
  R`(b) $17 - 12\sqrt2$`,
  R`**(a)** $\dfrac{\sqrt2 - 1}{(1 + \sqrt2)(\sqrt2 - 1)} = \dfrac{\sqrt2 - 1}{2 - 1} = \sqrt2 - 1$ $\blacksquare$

**(b)** $(\sqrt2 - 1)^2 = 2 - 2\sqrt2 + 1 = 3 - 2\sqrt2$.
By (a), $\dfrac{1}{(1 + \sqrt2)^4} = (\sqrt2 - 1)^4 = (3 - 2\sqrt2)^2 = 9 - 12\sqrt2 + 8 = 17 - 12\sqrt2$.

**(c)** $(17 - 12\sqrt2)(17 + 12\sqrt2) = 289 - 288 = 1$, so the value is $\dfrac{1}{17 + 12\sqrt2}$. Since $12\sqrt2 \approx 16.97$, the denominator is just under $34$, so the value is very close to $\frac1{34}$. But $17 + 12\sqrt2$ is irrational, so it can't equal $34$ exactly.`)
]
};
