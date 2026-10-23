/* Pure Mathematics Year 1 · Chapter 7 Algebraic methods (sections 7.1 to 7.5) */
BOOK_CHAPTERS.push({ id:'P07', book:'Pure Mathematics Year 1', label:'Chapter 7', title:'Algebraic methods', sections:[
  { id:'P7.1', num:'7.1', title:'Algebraic fractions' },
  { id:'P7.2', num:'7.2', title:'Dividing polynomials' },
  { id:'P7.3', num:'7.3', title:'The factor theorem' },
  { id:'P7.4', num:'7.4', title:'Mathematical proof' },
  { id:'P7.5', num:'7.5', title:'Methods of proof' }
]});
FIGS['P7.3-roots'] = Fig.graph({ label: 'y = x³ + x² − 4x − 4 = (x − 2)(x + 1)(x + 2): each factor gives a root, at −2, −1 and 2', x0: -3, x1: 3, y0: -8, y1: 10,
  fns: [{ f: x => x ** 3 + x * x - 4 * x - 4 }], points: [{ x: -2, y: 0, label: '−2', dx: -10, dy: -12 }, { x: -1, y: 0, label: '−1', dx: 10, dy: -12 }, { x: 2, y: 0, label: '2', dx: 10, dy: 14 }, { x: 0, y: -4, label: '(0, −4)', dx: 30, dy: 4 }] });

CONTENT['P7.1'] = {
notes: R`
### Simplifying
1. **Factorise** the numerator and the denominator fully.
2. **Cancel** common **factors** (whole brackets), never single terms.

### Dividing
To divide by a fraction, multiply by its reciprocal, then factorise and cancel.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Simplify $\dfrac{x^2 + 7x + 12}{x^2 + 3x}$.
$$\frac{(x + 3)(x + 4)}{x(x + 3)} = \frac{x + 4}{x}$$

### Worked example 2: a hidden minus sign
Simplify $\dfrac{x^2 - 9}{3 - x}$.
- $3 - x = -(x - 3)$, so $\dfrac{(x - 3)(x + 3)}{-(x - 3)} = -(x + 3)$.

**The trap:** cancelling terms, as in $\frac{x + 6}{x + 2} = 3$. You can only cancel a factor that multiplies the **whole** numerator and the **whole** denominator.

### Watch out
- Take out common numerical factors first: $2x^2 - 8 = 2(x - 2)(x + 2)$.
- $4x^2 - 1$ is a difference of two squares: $(2x - 1)(2x + 1)$.
`,
questions: [
Q('P7.1-1', 1, R`Simplify $\dfrac{4x^3 + 6x}{2x}$. [[1]]`,
  [R`Divide each term by $2x$.`, R`$\frac{4x^3}{2x} = 2x^2$.`],
  [R`|B1|$2x^2 + 3$`], R`$2x^2 + 3$`,
  R`$\frac{4x^3}{2x} + \frac{6x}{2x} = 2x^2 + 3$.`),
Q('P7.1-2', 1, R`Simplify $\dfrac{x^2 - 4}{x + 2}$. [[1]]`,
  [R`Difference of two squares.`, R`$(x - 2)(x + 2)$.`],
  [R`|B1|$x - 2$`], R`$x - 2$`,
  R`$\frac{(x - 2)(x + 2)}{x + 2} = x - 2$.`),
Q('P7.1-3', 1, R`Simplify $\dfrac{x^2 + 5x + 6}{x + 3}$. [[2]]`,
  [R`Factorise the top.`, R`$(x + 2)(x + 3)$.`],
  [R`|M1|$(x + 2)(x + 3)$`, R`|A1|$x + 2$`], R`$x + 2$`,
  R`$\frac{(x + 2)(x + 3)}{x + 3} = x + 2$.`),
Q('P7.1-4', 2, R`Simplify $\dfrac{x^2 - 2x - 15}{x^2 - 25}$. [[2]]`,
  [R`Top: $(x - 5)(x + 3)$.`, R`Bottom: $(x - 5)(x + 5)$.`],
  [R`|M1|Both factorised`, R`|A1|$\frac{x + 3}{x + 5}$`], R`$\frac{x + 3}{x + 5}$`,
  R`$\frac{(x - 5)(x + 3)}{(x - 5)(x + 5)}$: cancel $(x - 5)$.`),
Q('P7.1-5', 2, R`Simplify $\dfrac{2x^2 + 7x + 3}{4x^2 - 1}$. [[3]]`,
  [R`$2x^2 + 7x + 3 = (2x + 1)(x + 3)$.`, R`$4x^2 - 1 = (2x - 1)(2x + 1)$.`],
  [R`|M1|Numerator factorised`, R`|M1|Denominator factorised`, R`|A1|$\frac{x + 3}{2x - 1}$`], R`$\frac{x + 3}{2x - 1}$`,
  R`$\frac{(2x + 1)(x + 3)}{(2x - 1)(2x + 1)}$: cancel $(2x + 1)$.`),
Q('P7.1-6', 2, R`Simplify $\dfrac{x^2 - 9}{3 - x}$. [[2]]`,
  [R`$3 - x = -(x - 3)$.`, R`Then cancel $(x - 3)$.`],
  [R`|M1|$\frac{(x - 3)(x + 3)}{-(x - 3)}$`, R`|A1|$-(x + 3)$ or $-x - 3$`], R`$-x - 3$`,
  R`$\frac{(x - 3)(x + 3)}{-(x - 3)} = -(x + 3)$.`),
Q('P7.1-7', 2, R`Simplify $\dfrac{6x^3 + 3x^2 - 9x}{3x}$, and factorise your answer. [[2]]`,
  [R`Divide each term by $3x$.`, R`$2x^2 + x - 3$.`],
  [R`|B1|$2x^2 + x - 3$`, R`|B1|$(2x + 3)(x - 1)$`], R`$2x^2 + x - 3 = (2x + 3)(x - 1)$`,
  R`$\frac{6x^3}{3x} + \frac{3x^2}{3x} - \frac{9x}{3x} = 2x^2 + x - 3$.`),
Q('P7.1-8', 3, R`Simplify $\dfrac{x^3 - 4x}{x^2 + x - 6}$. [[3]]`,
  [R`Top: $x(x - 2)(x + 2)$.`, R`Bottom: $(x + 3)(x - 2)$.`],
  [R`|M1|$x(x - 2)(x + 2)$`, R`|M1|$(x + 3)(x - 2)$`, R`|A1|$\frac{x(x + 2)}{x + 3}$`], R`$\frac{x(x + 2)}{x + 3}$`,
  R`$\frac{x(x - 2)(x + 2)}{(x + 3)(x - 2)}$: cancel $(x - 2)$.`),
Q('P7.1-9', 3, R`Simplify $\dfrac{2x^2 - 8}{x^2 + 4x + 4}$. [[3]]`,
  [R`Take out $2$: $2(x^2 - 4)$.`, R`The bottom is $(x + 2)^2$.`],
  [R`|M1|$2(x - 2)(x + 2)$`, R`|M1|$(x + 2)^2$`, R`|A1|$\frac{2(x - 2)}{x + 2}$`], R`$\frac{2(x - 2)}{x + 2}$`,
  R`Cancel one $(x + 2)$.`),
Q('P7.1-10', 3, R`Write $\dfrac{3x^2 - 11x - 4}{x^2 - 16}$ in the form $\dfrac{ax + b}{x + c}$. [[3]]`,
  [R`$3x^2 - 11x - 4 = (3x + 1)(x - 4)$.`, R`$x^2 - 16 = (x - 4)(x + 4)$.`],
  [R`|M1|Numerator factorised`, R`|M1|Denominator factorised`, R`|A1|$\frac{3x + 1}{x + 4}$`], R`$\frac{3x + 1}{x + 4}$`,
  R`Cancel $(x - 4)$: $a = 3$, $b = 1$, $c = 4$.`),
Q('P7.1-11', 3, R`Simplify $\dfrac{x^2 + 3x}{x^2 - 9} \div \dfrac{x}{x - 3}$. [[3]]`,
  [R`Multiply by $\frac{x - 3}{x}$.`, R`Factorise everything.`],
  [R`|M1|Multiplies by the reciprocal`, R`|M1|$\frac{x(x + 3)}{(x - 3)(x + 3)} \times \frac{x - 3}{x}$`, R`|A1|$1$`], R`$1$`,
  R`Every factor cancels, leaving $1$ (for $x \ne 0, \pm3$).`),
Q('P7.1-12', 4, R`$\dfrac{x^2 + ax - 12}{x^2 - 16}$ simplifies to $\dfrac{x - 3}{x - 4}$. Find $a$. [[3]]`,
  [R`The denominator is $(x - 4)(x + 4)$, so $(x + 4)$ must have cancelled.`, R`The numerator is $(x - 3)(x + 4)$.`],
  [R`|M1|Denominator $(x - 4)(x + 4)$`, R`|M1|Numerator $(x - 3)(x + 4)$`, R`|A1|$a = 1$`], R`$a = 1$`,
  R`$(x - 3)(x + 4) = x^2 + x - 12$.`),
Q('P7.1-13', 4, R`Show that $\dfrac{4x^2 - 9}{2x^2 + x - 3} = \dfrac{2x - 3}{x - 1}$. [[3]]`,
  [R`$4x^2 - 9 = (2x - 3)(2x + 3)$.`, R`$2x^2 + x - 3 = (2x + 3)(x - 1)$.`],
  [R`|M1|Numerator factorised`, R`|M1|Denominator factorised`, R`|A1|Cancels $(2x + 3)$ to the given answer`], R`Shown`,
  R`$\frac{(2x - 3)(2x + 3)}{(2x + 3)(x - 1)} = \frac{2x - 3}{x - 1}$.`),
Q('P7.1-14', 4, R`Simplify $\dfrac{x^4 - 1}{x^3 + x}$. [[3]]`,
  [R`$x^4 - 1 = (x^2 - 1)(x^2 + 1)$.`, R`$x^3 + x = x(x^2 + 1)$.`],
  [R`|M1|$(x^2 - 1)(x^2 + 1)$`, R`|M1|$x(x^2 + 1)$`, R`|A1|$\frac{x^2 - 1}{x}$`], R`$\frac{x^2 - 1}{x}$`,
  R`Cancel $(x^2 + 1)$. (Also fine: $\frac{(x - 1)(x + 1)}{x}$.)`),
Q('P7.1-15', 5, R`**(a)** Factorise $2x^3 + 5x^2 - 3x$ fully. [[2]]

**(b)** Hence simplify $\dfrac{2x^3 + 5x^2 - 3x}{4x^2 - 1}$. [[2]]

**(c)** Hence solve $\dfrac{2x^3 + 5x^2 - 3x}{4x^2 - 1} = 2$. [[4]]`,
  [R`$x(2x^2 + 5x - 3) = x(2x - 1)(x + 3)$.`, R`For (c), use the simplified form and multiply by $(2x + 1)$.`],
  [R`(a)|M1|Takes out $x$`, R`(a)|A1|$x(2x - 1)(x + 3)$`, R`(b)|M1|$(2x - 1)(2x + 1)$`, R`(b)|A1|$\frac{x(x + 3)}{2x + 1}$`, R`(c)|M1|$x^2 + 3x = 2(2x + 1)$`, R`(c)|M1|$x^2 - x - 2 = 0$`, R`(c)|A1|$x = 2$ or $x = -1$`, R`(c)|A1|Both valid, as neither is $\pm\frac12$`],
  R`(a) $x(2x - 1)(x + 3)$ (b) $\frac{x(x + 3)}{2x + 1}$ (c) $x = 2$ or $x = -1$`,
  R`(c) $x^2 + 3x = 4x + 2$, so $(x - 2)(x + 1) = 0$. The original fraction is undefined at $x = \pm\frac12$, so both answers are valid.`)
]};

CONTENT['P7.2'] = {
notes: R`
### Long division of polynomials
Divide a cubic by $(x \pm p)$ just like long division of numbers:
1. Divide the leading term: $x^3 \div x = x^2$.
2. Multiply back, subtract, bring down the next term.
3. Repeat until nothing (or a constant remainder) is left.

The answer is the **quotient**. If something is left over, it's the **remainder**.

::: booklet
**Not in the formula booklet:** polynomial division.
:::

### Worked example 1
Divide $x^3 + 2x^2 - 5x - 6$ by $(x + 1)$.
1. $x^3 \div x = x^2$: subtract $x^2(x + 1) = x^3 + x^2$, leaving $x^2 - 5x$.
2. $x^2 \div x = x$: subtract $x(x + 1)$, leaving $-6x - 6$.
3. $-6x \div x = -6$: subtract $-6(x + 1)$, leaving $0$.

Quotient $x^2 + x - 6 = (x + 3)(x - 2)$, so $x^3 + 2x^2 - 5x - 6 = (x + 1)(x + 3)(x - 2)$.

### Worked example 2: a missing term
Divide $x^3 - 7x + 6$ by $(x - 2)$.
- Write it as $x^3 + 0x^2 - 7x + 6$. Dividing gives $x^2 + 2x - 3$, remainder $0$.

**The trap:** leaving out the $0x^2$. The columns then misalign and every later step goes wrong.

### Watch out
- Check: (divisor) $\times$ (quotient) $+$ (remainder) should give back the original.
`,
questions: [
Q('P7.2-1', 1, R`Divide $x^3 + 3x^2 + 3x + 1$ by $(x + 1)$. [[2]]`,
  [R`$x^3 \div x = x^2$.`, R`Then $2x^2 \div x = 2x$.`],
  [R`|M1|Long division`, R`|A1|$x^2 + 2x + 1$`], R`$x^2 + 2x + 1$`,
  R`It's $(x + 1)^3$, so the quotient is $(x + 1)^2 = x^2 + 2x + 1$.`),
Q('P7.2-2', 1, R`Divide $x^3 - 2x^2 - x + 2$ by $(x - 1)$. [[2]]`,
  [R`$x^3 \div x = x^2$; subtract $x^3 - x^2$.`, R`Leaves $-x^2 - x + 2$.`],
  [R`|M1|Long division`, R`|A1|$x^2 - x - 2$`], R`$x^2 - x - 2$`,
  R`Check: $(x - 1)(x^2 - x - 2) = x^3 - 2x^2 - x + 2$.`),
Q('P7.2-3', 1, R`Divide $2x^3 + 3x^2 - 2x$ by $(x + 2)$. [[2]]`,
  [R`$2x^3 \div x = 2x^2$.`, R`Subtract $2x^3 + 4x^2$, leaving $-x^2 - 2x$.`],
  [R`|M1|Long division`, R`|A1|$2x^2 - x$`], R`$2x^2 - x$`,
  R`$(x + 2)(2x^2 - x) = 2x^3 + 3x^2 - 2x$.`),
Q('P7.2-4', 2, R`Divide $x^3 - 7x + 6$ by $(x - 2)$, and hence factorise $x^3 - 7x + 6$ fully. [[3]]`,
  [R`Include $0x^2$.`, R`Then factorise the quotient.`],
  [R`|M1|Uses $0x^2$`, R`|A1|$x^2 + 2x - 3$`, R`|A1|$(x - 2)(x + 3)(x - 1)$`], R`$(x - 2)(x + 3)(x - 1)$`,
  R`Quotient $x^2 + 2x - 3 = (x + 3)(x - 1)$.`),
Q('P7.2-5', 2, R`Find the quotient and remainder when $x^3 + 2x^2 - 3x + 4$ is divided by $(x - 1)$. [[3]]`,
  [R`$x^3 \div x = x^2$, then $3x^2 \div x = 3x$.`, R`After $3x$, $0x + 4$ is left.`],
  [R`|M1|Long division`, R`|A1|Quotient $x^2 + 3x$`, R`|A1|Remainder $4$`], R`Quotient $x^2 + 3x$, remainder $4$`,
  R`$(x - 1)(x^2 + 3x) = x^3 + 2x^2 - 3x$, so the remainder is $4$.`),
Q('P7.2-6', 2, R`Divide $3x^3 - 5x^2 - 4x + 4$ by $(x - 2)$, and factorise the quotient. [[3]]`,
  [R`$3x^3 \div x = 3x^2$.`, R`$3x^2 + x - 2 = (3x - 2)(x + 1)$.`],
  [R`|M1|Long division`, R`|A1|$3x^2 + x - 2$`, R`|A1|$(3x - 2)(x + 1)$`], R`$3x^2 + x - 2 = (3x - 2)(x + 1)$`,
  R`Check: $(x - 2)(3x^2 + x - 2) = 3x^3 - 5x^2 - 4x + 4$.`),
Q('P7.2-7', 2, R`Divide $x^4 - 1$ by $(x - 1)$. [[2]]`,
  [R`Write $x^4 + 0x^3 + 0x^2 + 0x - 1$.`, R`Each step brings down a $0$.`],
  [R`|M1|Uses zero terms`, R`|A1|$x^3 + x^2 + x + 1$`], R`$x^3 + x^2 + x + 1$`,
  R`$(x - 1)(x^3 + x^2 + x + 1) = x^4 - 1$.`),
Q('P7.2-8', 3, R`Show that $x^3 + 4x^2 + x - 6 = (x + 2)(x^2 + bx + c)$, finding $b$ and $c$, and hence factorise fully. [[3]]`,
  [R`Divide by $(x + 2)$.`, R`$x^2 + 2x - 3$.`],
  [R`|M1|Divides or compares coefficients`, R`|A1|$b = 2$, $c = -3$`, R`|A1|$(x + 2)(x + 3)(x - 1)$`], R`$b = 2$, $c = -3$; $(x + 2)(x + 3)(x - 1)$`,
  R`Comparing constants: $2c = -6$, $c = -3$; $x^2$ terms: $b + 2 = 4$, $b = 2$.`),
Q('P7.2-9', 3, R`Divide $2x^3 + x^2 - 13x + 6$ by $(x - 2)$. Hence solve $2x^3 + x^2 - 13x + 6 = 0$. [[4]]`,
  [R`Quotient $2x^2 + 5x - 3$.`, R`$(2x - 1)(x + 3)$.`],
  [R`|M1|Long division`, R`|A1|$2x^2 + 5x - 3$`, R`|M1|Factorises`, R`|A1|$x = 2$, $\frac12$, $-3$`], R`$x = 2$, $\frac12$, $-3$`,
  R`$(x - 2)(2x - 1)(x + 3) = 0$.`),
Q('P7.2-10', 3, R`Find the quotient and remainder when $x^3 - 3x^2 - 2$ is divided by $(x - 3)$. [[3]]`,
  [R`$x^3 - 3x^2 = x^2(x - 3)$.`, R`Then $0x - 2$ is left.`],
  [R`|M1|Long division with a $0x$ term`, R`|A1|Quotient $x^2$`, R`|A1|Remainder $-2$`], R`Quotient $x^2$, remainder $-2$`,
  R`$x^3 - 3x^2 - 2 = x^2(x - 3) - 2$.`),
Q('P7.2-11', 3, R`Divide $6x^3 + 7x^2 - 1$ by $(2x + 1)$ and factorise the quotient. [[3]]`,
  [R`$6x^3 \div 2x = 3x^2$.`, R`Then $4x^2 \div 2x = 2x$, then $-2x \div 2x = -1$.`],
  [R`|M1|Long division`, R`|A1|$3x^2 + 2x - 1$`, R`|A1|$(3x - 1)(x + 1)$`], R`$3x^2 + 2x - 1 = (3x - 1)(x + 1)$`,
  R`$(2x + 1)(3x^2 + 2x - 1) = 6x^3 + 7x^2 - 1$.`),
Q('P7.2-12', 4, R`When $x^3 + ax^2 + bx - 6$ is divided by $(x - 1)$, the quotient is $x^2 + 4x + 6$ and the remainder is $0$. Find $a$ and $b$. [[3]]`,
  [R`Multiply back: $(x - 1)(x^2 + 4x + 6)$.`, R`Compare coefficients.`],
  [R`|M1|Expands $(x - 1)(x^2 + 4x + 6)$`, R`|A1|$a = 3$`, R`|A1|$b = 2$`], R`$a = 3$, $b = 2$`,
  R`$x^3 + 4x^2 + 6x - x^2 - 4x - 6 = x^3 + 3x^2 + 2x - 6$.`),
Q('P7.2-13', 4, R`Divide $x^4 + x^3 - 7x^2 - x + 6$ by $(x - 2)$, and hence factorise it completely. [[4]]`,
  [R`The quotient is a cubic: $x^3 + 3x^2 - x - 3$.`, R`Factorise the cubic by grouping.`],
  [R`|M1|Long division`, R`|A1|$x^3 + 3x^2 - x - 3$`, R`|M1|$x^2(x + 3) - (x + 3)$`, R`|A1|$(x - 2)(x + 3)(x - 1)(x + 1)$`], R`$(x - 2)(x + 3)(x - 1)(x + 1)$`,
  R`$x^3 + 3x^2 - x - 3 = (x + 3)(x^2 - 1)$.`),
Q('P7.2-14', 4, R`Find the quotient and remainder when $2x^3 - 3x^2 + 4x - 5$ is divided by $(x + 1)$. [[4]]`,
  [R`$2x^3 \div x = 2x^2$; subtract $2x^3 + 2x^2$.`, R`Continue: $-5x$, then $9$.`],
  [R`|M1|Long division`, R`|A1|$2x^2 - 5x + 9$`, R`|A1|Remainder $-14$`, R`|B1|Check by multiplying back`], R`Quotient $2x^2 - 5x + 9$, remainder $-14$`,
  R`$(x + 1)(2x^2 - 5x + 9) = 2x^3 - 3x^2 + 4x + 9$, and $9 - 14 = -5$.`),
Q('P7.2-15', 5, R`$f(x) = 2x^3 - 7x^2 - 17x + 10$.

**(a)** Divide $f(x)$ by $(x - 5)$. [[3]]

**(b)** Hence factorise $f(x)$ completely. [[2]]

**(c)** Hence solve $f(x - 1) = 0$. [[3]]`,
  [R`Quotient $2x^2 + 3x - 2$.`, R`For (c), replace $x$ by $x - 1$ in each factor.`],
  [R`(a)|M1|Long division`, R`(a)|A1|$2x^2 + 3x$`, R`(a)|A1|$2x^2 + 3x - 2$`, R`(b)|M1|Factorises the quadratic`, R`(b)|A1|$(x - 5)(2x - 1)(x + 2)$`, R`(c)|M1|$(x - 6)(2x - 3)(x + 1) = 0$`, R`(c)|A1|Roots of $f$ increased by $1$`, R`(c)|A1|$x = 6$, $\frac32$, $-1$`],
  R`(a) $2x^2 + 3x - 2$ (b) $(x - 5)(2x - 1)(x + 2)$ (c) $x = 6$, $\frac32$, $-1$`,
  R`(c) $f(x - 1) = 0$ when $x - 1 = 5$, $\frac12$ or $-2$, so $x = 6$, $\frac32$ or $-1$. (A translation $1$ to the right.)`)
]};

CONTENT['P7.3'] = {
notes: R`
### The factor theorem
For a polynomial $f(x)$:
- if $f(p) = 0$, then $(x - p)$ is a factor
- if $(x - p)$ is a factor, then $f(p) = 0$.

More generally, $(ax - b)$ is a factor if $f\!\left(\frac{b}{a}\right) = 0$.

### Factorising a cubic
1. Try $x = \pm1, \pm2, \pm3, \ldots$ (factors of the constant term) until $f(p) = 0$.
2. Divide by $(x - p)$ to get a quadratic.
3. Factorise the quadratic.

::: booklet
**Not in the formula booklet:** the factor theorem.
:::

### Worked example 1
Show that $(x - 2)$ is a factor of $f(x) = x^3 + x^2 - 4x - 4$, and factorise $f(x)$ fully.
1. $f(2) = 8 + 4 - 8 - 4 = 0$, so $(x - 2)$ is a factor.
2. $f(x) = (x - 2)(x^2 + 3x + 2) = (x - 2)(x + 1)(x + 2)$.

[[fig:P7.3-roots]]

### Worked example 2: a factor like $(2x - 1)$
Show that $(2x - 1)$ is a factor of $2x^3 + x^2 - 5x + 2$.
- Test $x = \frac12$: $2 \cdot \frac18 + \frac14 - \frac52 + 2 = \frac14 + \frac14 - \frac52 + 2 = 0$. ✓

**The trap:** testing $f(1)$ or $f(-\frac12)$. Set the factor equal to zero: $2x - 1 = 0$ gives $x = \frac12$.

### Watch out
- In a "show that" question, end with a sentence: "$f(2) = 0$, so $(x - 2)$ is a factor."
- Unknown coefficients: each known factor gives one equation.
`,
questions: [
Q('P7.3-1', 1, R`Show that $(x - 1)$ is a factor of $x^3 - 6x^2 + 11x - 6$. [[1]]`,
  [R`Find $f(1)$.`, R`$1 - 6 + 11 - 6$.`],
  [R`|B1|$f(1) = 0$, so $(x - 1)$ is a factor`], R`$f(1) = 0$`,
  R`$f(1) = 1 - 6 + 11 - 6 = 0$.`),
Q('P7.3-2', 1, R`Show that $(x + 2)$ is a factor of $x^3 + 8$. [[1]]`,
  [R`Test $x = -2$.`, R`$(-2)^3 = -8$.`],
  [R`|B1|$f(-2) = -8 + 8 = 0$, so it's a factor`], R`$f(-2) = 0$`,
  R`$x + 2 = 0$ when $x = -2$, and $f(-2) = 0$.`),
Q('P7.3-3', 1, R`Determine whether $(x - 3)$ is a factor of $x^3 - 2x^2 - 5x + 6$. [[1]]`,
  [R`Find $f(3)$.`, R`$27 - 18 - 15 + 6$.`],
  [R`|B1|$f(3) = 0$, so yes`], R`Yes, $f(3) = 0$`,
  R`$f(3) = 27 - 18 - 15 + 6 = 0$.`),
Q('P7.3-4', 2, R`Show that $(x + 1)$ is a factor of $x^3 - 3x - 2$, and factorise fully. [[3]]`,
  [R`$f(-1) = -1 + 3 - 2$.`, R`Quotient $x^2 - x - 2$.`],
  [R`|B1|$f(-1) = 0$`, R`|M1|$(x + 1)(x^2 - x - 2)$`, R`|A1|$(x + 1)^2(x - 2)$`], R`$(x + 1)^2(x - 2)$`,
  R`$x^2 - x - 2 = (x + 1)(x - 2)$.`),
Q('P7.3-5', 2, R`Show that $(2x - 1)$ is a factor of $2x^3 + x^2 - 5x + 2$, and factorise fully. [[3]]`,
  [R`Test $x = \frac12$.`, R`Divide to get $x^2 + x - 2$.`],
  [R`|B1|$f\!\left(\frac12\right) = 0$`, R`|M1|$(2x - 1)(x^2 + x - 2)$`, R`|A1|$(2x - 1)(x + 2)(x - 1)$`], R`$(2x - 1)(x + 2)(x - 1)$`,
  R`$\frac14 + \frac14 - \frac52 + 2 = 0$.`),
Q('P7.3-6', 2, R`$(x - 2)$ is a factor of $x^3 + kx^2 - 4x + 4$. Find $k$. [[2]]`,
  [R`$f(2) = 0$.`, R`$8 + 4k - 8 + 4 = 0$.`],
  [R`|M1|$f(2) = 0$`, R`|A1|$k = -1$`], R`$k = -1$`,
  R`$f(2) = 8 + 4k - 8 + 4 = 4k + 4 = 0$, so $k = -1$.`),
Q('P7.3-7', 2, R`$(x + 3)$ is a factor of $2x^3 + ax^2 - 7x + 6$. Find $a$. [[2]]`,
  [R`$f(-3) = 0$.`, R`$-54 + 9a + 21 + 6$.`],
  [R`|M1|$f(-3) = 0$`, R`|A1|$a = 3$`], R`$a = 3$`,
  R`$f(-3) = -54 + 9a + 21 + 6 = 9a - 27 = 0$, so $a = 3$.`),
Q('P7.3-8', 3, R`Factorise $x^3 - 7x - 6$ fully. [[3]]`,
  [R`Try $x = -1$.`, R`Quotient $x^2 - x - 6$.`],
  [R`|B1|$f(-1) = 0$`, R`|M1|$(x + 1)(x^2 - x - 6)$`, R`|A1|$(x + 1)(x - 3)(x + 2)$`], R`$(x + 1)(x - 3)(x + 2)$`,
  R`$f(-1) = -1 + 7 - 6 = 0$.`),
Q('P7.3-9', 3, R`Solve $x^3 - 4x^2 + x + 6 = 0$. [[4]]`,
  [R`Try $x = -1$.`, R`Quotient $x^2 - 5x + 6$.`],
  [R`|B1|$f(-1) = 0$`, R`|M1|Divides`, R`|A1|$(x + 1)(x - 2)(x - 3)$`, R`|A1|$x = -1$, $2$, $3$`], R`$x = -1$, $2$, $3$`,
  R`$f(-1) = -1 - 4 - 1 + 6 = 0$.`),
Q('P7.3-10', 3, R`Factorise $2x^3 - 5x^2 - 4x + 3$ fully. [[4]]`,
  [R`Try $x = 3$.`, R`Quotient $2x^2 + x - 1$.`],
  [R`|B1|$f(3) = 0$`, R`|M1|Divides by $(x - 3)$`, R`|A1|$2x^2 + x - 1$`, R`|A1|$(x - 3)(2x - 1)(x + 1)$`], R`$(x - 3)(2x - 1)(x + 1)$`,
  R`$f(3) = 54 - 45 - 12 + 3 = 0$.`),
Q('P7.3-11', 3, R`$(x - 1)$ and $(x + 2)$ are factors of $x^3 + ax^2 + bx - 6$. Find $a$ and $b$, and the third factor. [[4]]`,
  [R`$f(1) = 0$ and $f(-2) = 0$.`, R`$a + b = 5$ and $2a - b = 7$.`],
  [R`|M1|$a + b = 5$`, R`|M1|$4a - 2b = 14$`, R`|A1|$a = 4$, $b = 1$`, R`|A1|$(x + 3)$`], R`$a = 4$, $b = 1$; $(x + 3)$`,
  R`$f(-2) = -8 + 4a - 2b - 6 = 0$. Third factor: the constants multiply to $-6$, so $(-1)(2)(c) = -6$ gives $(x + 3)$.`),
Q('P7.3-12', 4, R`$f(x) = x^3 + px^2 + qx + 12$. $(x + 2)$ is a factor and $f(1) = 6$.

**(a)** Find $p$ and $q$. [[3]]

**(b)** Factorise $f(x)$ fully. [[2]]`,
  [R`$f(-2) = 0$: $4p - 2q = -4$.`, R`$f(1) = 6$: $p + q = -7$.`],
  [R`(a)|M1|Two equations`, R`(a)|M1|Solves`, R`(a)|A1|$p = -3$, $q = -4$`, R`(b)|M1|Divides or groups`, R`(b)|A1|$(x - 3)(x - 2)(x + 2)$`], R`(a) $p = -3$, $q = -4$ (b) $(x - 3)(x - 2)(x + 2)$`,
  R`(a) $2p - q = -2$ and $p + q = -7$: $3p = -9$. (b) $x^3 - 3x^2 - 4x + 12 = x^2(x - 3) - 4(x - 3)$.`),
Q('P7.3-13', 4, R`Solve $x^3 - 3x^2 - 3x + 1 = 0$, giving exact answers. [[4]]`,
  [R`Try $x = -1$.`, R`Quotient $x^2 - 4x + 1$: use the formula.`],
  [R`|B1|$f(-1) = 0$`, R`|M1|$(x + 1)(x^2 - 4x + 1)$`, R`|M1|Quadratic formula`, R`|A1|$x = -1$, $2 \pm \sqrt3$`], R`$x = -1$, $2 \pm \sqrt3$`,
  R`$x = \frac{4 \pm \sqrt{12}}{2} = 2 \pm \sqrt3$.`),
Q('P7.3-14', 4, R`$f(x) = x^3 - 2x^2 + x - 2$. Show that $(x - 2)$ is a factor, and hence show that $f(x) = 0$ has exactly one real root. [[4]]`,
  [R`$f(2) = 8 - 8 + 2 - 2$.`, R`The quotient is $x^2 + 1$.`],
  [R`|B1|$f(2) = 0$`, R`|M1|$(x - 2)(x^2 + 1)$`, R`|M1|$x^2 + 1 = 0$ has no real roots`, R`|A1|Only root $x = 2$`], R`Only real root $x = 2$`,
  R`$f(x) = x^2(x - 2) + (x - 2) = (x - 2)(x^2 + 1)$, and $x^2 + 1 > 0$.`),
Q('P7.3-15', 5, R`$f(x) = 6x^3 + ax^2 + bx + 6$. $(x - 3)$ and $(2x - 1)$ are both factors of $f(x)$.

**(a)** Find $a$ and $b$. [[4]]

**(b)** Factorise $f(x)$ completely. [[2]]

**(c)** Solve $f(x) = 0$. [[2]]`,
  [R`$f(3) = 0$ and $f\!\left(\frac12\right) = 0$.`, R`$3a + b = -56$ and $a + 2b = -27$.`],
  [R`(a)|M1|$f(3) = 0$`, R`(a)|M1|$f\!\left(\frac12\right) = 0$`, R`(a)|M1|Solves`, R`(a)|A1|$a = -17$, $b = -5$`, R`(b)|M1|$(x - 3)(2x - 1)(3x + 2)$`, R`(b)|A1|Correct`, R`(c)|M1|Sets factors to $0$`, R`(c)|A1|$x = 3$, $\frac12$, $-\frac23$`],
  R`(a) $a = -17$, $b = -5$ (b) $(x - 3)(2x - 1)(3x + 2)$ (c) $3$, $\frac12$, $-\frac23$`,
  R`(a) $f(3) = 162 + 9a + 3b + 6 = 0$ gives $3a + b = -56$. $f(\frac12) = \frac34 + \frac{a}{4} + \frac{b}{2} + 6 = 0$ gives $a + 2b = -27$. Then $b = -56 - 3a$, $a - 112 - 6a = -27$, $a = -17$, $b = -5$.

(b) The third factor: $6x^3$ needs $(3x + \ldots)$, and the constants give $(-3)(-1)(c) = 6$, so $(3x + 2)$.`)
]};

CONTENT['P7.4'] = {
notes: R`
### Proof by deduction
Start from known facts and use logical steps to reach the result. To prove something works **for all** values, a few examples are **not** enough.

### Useful forms
- An even number is $2n$; an odd number is $2n + 1$ ($n$ an integer).
- Consecutive integers: $n$, $n + 1$, $n + 2$.
- To show $f(x) > 0$ for all $x$, **complete the square**.
- To prove an identity, start from one side and work to the other. Don't work on both at once.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Prove that $(n + 1)^2 - (n - 1)^2$ is a multiple of $4$ for all integers $n$.
$$(n^2 + 2n + 1) - (n^2 - 2n + 1) = 4n$$
$4n$ is a multiple of $4$ since $n$ is an integer. $\blacksquare$

### Worked example 2: proving an inequality
Prove that $x^2 - 6x + 10 > 0$ for all real $x$.
- $x^2 - 6x + 10 = (x - 3)^2 + 1$.
- $(x - 3)^2 \ge 0$, so $(x - 3)^2 + 1 \ge 1 > 0$. $\blacksquare$

**The trap:** substituting a few values ($x = 0, 1, 2$) and saying "it's always positive". That's evidence, not a proof.

### Watch out
- Finish with a concluding statement linking back to what you were asked to prove.
`,
questions: [
Q('P7.4-1', 1, R`Prove that the sum of two consecutive integers is odd. [[2]]`,
  [R`Call them $n$ and $n + 1$.`, R`Their sum is $2n + 1$.`],
  [R`|M1|$n + (n + 1) = 2n + 1$`, R`|A1|$2n$ is even, so $2n + 1$ is odd`], R`$n + (n + 1) = 2n + 1$, which is odd`,
  R`$2n$ is even for any integer $n$, and one more than an even number is odd.`),
Q('P7.4-2', 1, R`Prove that $(x + 3)^2 - (x - 3)^2 \equiv 12x$. [[2]]`,
  [R`Expand both brackets.`, R`$(x^2 + 6x + 9) - (x^2 - 6x + 9)$.`],
  [R`|M1|Expands both`, R`|A1|$= 12x$`], R`Shown`,
  R`$x^2 + 6x + 9 - x^2 + 6x - 9 = 12x$.`),
Q('P7.4-3', 1, R`Prove that the product of two odd numbers is odd. [[2]]`,
  [R`Use $2m + 1$ and $2n + 1$.`, R`Expand and take out a factor of $2$.`],
  [R`|M1|$(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1$`, R`|A1|$= 2(2mn + m + n) + 1$, which is odd`], R`$2(2mn + m + n) + 1$`,
  R`Use different letters so the two odd numbers can be different.`),
Q('P7.4-4', 2, R`Prove that $x^2 + 4x + 7 > 0$ for all real values of $x$. [[2]]`,
  [R`Complete the square.`, R`$(x + 2)^2 + 3$.`],
  [R`|M1|$(x + 2)^2 + 3$`, R`|A1|$(x + 2)^2 \ge 0$, so the expression is at least $3 > 0$`], R`$(x + 2)^2 + 3 \ge 3$`,
  R`A square is never negative, so $(x + 2)^2 + 3 \ge 3$.`),
Q('P7.4-5', 2, R`Prove that the sum of any three consecutive integers is a multiple of $3$. [[2]]`,
  [R`$n + (n + 1) + (n + 2)$.`, R`$3n + 3$.`],
  [R`|M1|$3n + 3$`, R`|A1|$= 3(n + 1)$, a multiple of $3$`], R`$3(n + 1)$`,
  R`$n + 1$ is an integer, so $3(n + 1)$ is a multiple of $3$.`),
Q('P7.4-6', 2, R`Prove that $(2n + 1)^2 - (2n - 1)^2$ is a multiple of $8$ for all integers $n$. [[2]]`,
  [R`Expand, or use the difference of two squares.`, R`$(4n)(2)$.`],
  [R`|M1|Expands or factorises`, R`|A1|$8n$, a multiple of $8$`], R`$8n$`,
  R`Difference of two squares: $[(2n + 1) - (2n - 1)][(2n + 1) + (2n - 1)] = 2 \times 4n = 8n$.`),
Q('P7.4-7', 2, R`Prove that $(x - 2)(x^2 + 2x + 4) \equiv x^3 - 8$. [[2]]`,
  [R`Expand the left-hand side.`, R`The middle terms cancel.`],
  [R`|M1|$x^3 + 2x^2 + 4x - 2x^2 - 4x - 8$`, R`|A1|$= x^3 - 8$`], R`Shown`,
  R`Start from the left and simplify to the right.`),
Q('P7.4-8', 3, R`Prove that $n^2 - n$ is even for every integer $n$. [[3]]`,
  [R`$n^2 - n = n(n - 1)$.`, R`Two consecutive integers: one of them is even.`],
  [R`|M1|$n(n - 1)$`, R`|M1|Consecutive integers, one of which is even`, R`|A1|So the product is even`], R`$n(n - 1)$ is a product of consecutive integers`,
  R`Of $n - 1$ and $n$, one is even, so their product is a multiple of $2$.`),
Q('P7.4-9', 3, R`$A(1, 1)$, $B(4, 5)$ and $C(5, -2)$. Prove that triangle $ABC$ is right-angled. [[3]]`,
  [R`Find the gradients of the sides.`, R`$m_{AB} = \frac43$, $m_{AC} = -\frac34$.`],
  [R`|M1|Gradients of $AB$ and $AC$`, R`|M1|Product $-1$`, R`|A1|So $AB \perp AC$: right angle at $A$`], R`Right angle at $A$`,
  R`$\frac43 \times \left(-\frac34\right) = -1$.`),
Q('P7.4-10', 3, R`Prove that $x^2 - 2xy + 2y^2 \ge 0$ for all real $x$ and $y$. [[3]]`,
  [R`$x^2 - 2xy + y^2 = (x - y)^2$.`, R`Then $+ y^2$.`],
  [R`|M1|$(x - y)^2 + y^2$`, R`|A1|Both squares $\ge 0$`, R`|A1|So the sum $\ge 0$`], R`$(x - y)^2 + y^2 \ge 0$`,
  R`Each square is non-negative, so their sum is too.`),
Q('P7.4-11', 3, R`Prove that $2x^2 - 8x + 11 > 0$ for all real $x$, and state its least value. [[3]]`,
  [R`$2(x^2 - 4x) + 11$.`, R`$2(x - 2)^2 + 3$.`],
  [R`|M1|$2(x - 2)^2 + 3$`, R`|A1|$\ge 3 > 0$`, R`|B1|Least value $3$ (at $x = 2$)`], R`$2(x - 2)^2 + 3$; least value $3$`,
  R`$2(x - 2)^2 - 8 + 11 = 2(x - 2)^2 + 3$.`),
Q('P7.4-12', 4, R`Prove that if $a$ and $b$ are positive and $a \ne b$, then $\dfrac{a}{b} + \dfrac{b}{a} > 2$. [[4]]`,
  [R`Start from $(a - b)^2 > 0$.`, R`Divide by $ab > 0$.`],
  [R`|M1|$(a - b)^2 > 0$ since $a \ne b$`, R`|M1|$a^2 + b^2 > 2ab$`, R`|M1|Divides by $ab > 0$`, R`|A1|$\frac{a}{b} + \frac{b}{a} > 2$`], R`Shown`,
  R`$a^2 - 2ab + b^2 > 0$, so $a^2 + b^2 > 2ab$. Dividing by the positive $ab$ keeps the inequality: $\frac ab + \frac ba > 2$.`),
Q('P7.4-13', 4, R`Prove that $x^3 - x$ is divisible by $6$ for every integer $x$. [[4]]`,
  [R`$x^3 - x = (x - 1)x(x + 1)$.`, R`Three consecutive integers.`],
  [R`|M1|$(x - 1)x(x + 1)$`, R`|M1|Among three consecutive integers, one is a multiple of $3$`, R`|M1|At least one is even`, R`|A1|So the product is divisible by $2 \times 3 = 6$`], R`$(x - 1)x(x + 1)$ is divisible by $2$ and $3$`,
  R`Since $2$ and $3$ have no common factor, a number divisible by both is divisible by $6$.`),
Q('P7.4-14', 4, R`Prove that the line $x + y = 4$ is a tangent to the circle $x^2 + y^2 = 8$. [[4]]`,
  [R`Substitute $y = 4 - x$.`, R`Show there is exactly one solution.`],
  [R`|M1|$x^2 + (4 - x)^2 = 8$`, R`|A1|$2x^2 - 8x + 8 = 0$`, R`|M1|$(x - 2)^2 = 0$, or discriminant $0$`, R`|A1|One point of contact $(2, 2)$, so a tangent`], R`Touches at $(2, 2)$`,
  R`$x^2 - 4x + 4 = 0$ has a repeated root, so the line meets the circle once.`),
Q('P7.4-15', 5, R`**(a)** Prove that $x^2 + 6x + 13 \ge 4$ for all real $x$. [[2]]

**(b)** Hence prove that $\dfrac{1}{x^2 + 6x + 13} \le \dfrac14$ for all real $x$. [[2]]

**(c)** Prove that $(x^2 + 6x + 13)(y^2 - 2y + 5) \ge 16$ for all real $x$ and $y$. [[4]]`,
  [R`$(x + 3)^2 + 4$.`, R`$y^2 - 2y + 5 = (y - 1)^2 + 4$.`],
  [R`(a)|M1|$(x + 3)^2 + 4$`, R`(a)|A1|$\ge 4$`, R`(b)|M1|Both sides positive, so taking reciprocals reverses the inequality`, R`(b)|A1|$\le \frac14$`, R`(c)|M1|$(y - 1)^2 + 4$`, R`(c)|A1|$\ge 4$`, R`(c)|M1|Product of two positive numbers each $\ge 4$`, R`(c)|A1|$\ge 16$`],
  R`Shown`,
  R`(a) $(x + 3)^2 \ge 0$, so $(x + 3)^2 + 4 \ge 4$.

(b) The expression is at least $4$, so it's positive; for positive numbers, a larger number has a smaller reciprocal.

(c) Each factor is at least $4$ (and positive), so the product is at least $4 \times 4 = 16$.`)
]};

CONTENT['P7.5'] = {
notes: R`
### Proof by exhaustion
Split the problem into a **finite** set of cases that cover every possibility, and prove each case. Common splits:
- $n$ even ($2k$) or odd ($2k + 1$)
- $n = 3k$, $3k + 1$ or $3k + 2$ (or $3k - 1$)
- the last digit of a number: $0$ to $9$.

### Disproof by counter-example
To show a statement is **false**, one example where it fails is enough.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Prove that $n^2 + 3n + 1$ is odd for every positive integer $n$.
- $n$ even: $n^2$ and $3n$ are even, so the sum is even $+$ even $+ 1$: **odd**.
- $n$ odd: $n^2$ and $3n$ are both odd, so odd $+$ odd $= $ even, and even $+ 1$ is **odd**.

Every integer is even or odd, so the result holds for all $n$. $\blacksquare$

### Worked example 2: a counter-example
Disprove: "$n^2 + n + 41$ is prime for every positive integer $n$."
- $n = 40$: $1600 + 40 + 41 = 1681 = 41^2$, which isn't prime.

**The trap:** checking $n = 1, 2, \ldots, 10$ (all prime) and concluding the statement is true. Many cases working doesn't make it true; one failure makes it false.

### Watch out
- State clearly that your cases cover **every** possibility.
- For a counter-example, show the calculation and say why it breaks the statement.
`,
questions: [
Q('P7.5-1', 1, R`Find a counter-example to the statement "every odd number is prime". [[1]]`,
  [R`Think of an odd number with factors.`, R`Try $9$.`],
  [R`|B1|E.g. $9 = 3 \times 3$ is odd but not prime`], R`E.g. $9$`,
  R`$9$ is odd and $9 = 3 \times 3$, so it isn't prime. (Also $1$, $15$, $21$, …)`),
Q('P7.5-2', 1, R`Disprove the statement "the sum of two primes is always even". [[1]]`,
  [R`Is every prime odd?`, R`Use the prime $2$.`],
  [R`|B1|E.g. $2 + 3 = 5$, which is odd`], R`E.g. $2 + 3 = 5$`,
  R`$2$ is an even prime, so $2 +$ (odd prime) is odd.`),
Q('P7.5-3', 1, R`Prove by exhaustion that none of the integers from $90$ to $96$ inclusive is prime. [[2]]`,
  [R`Check each number in turn.`, R`Find a factor of each.`],
  [R`|M1|Considers every number $90$ to $96$`, R`|A1|$90, 92, 94, 96$ even; $91 = 7 \times 13$; $93 = 3 \times 31$; $95 = 5 \times 19$`], R`Each has a factor other than $1$ and itself`,
  R`All seven cases are covered, and each has a non-trivial factor.`),
Q('P7.5-4', 2, R`Disprove: "if $n$ is a positive integer, then $2^n - 1$ is prime." [[2]]`,
  [R`Try small values of $n$.`, R`$n = 4$.`],
  [R`|M1|Tests values`, R`|A1|$n = 4$: $15 = 3 \times 5$, not prime`], R`$n = 4$ gives $15$`,
  R`$n = 1$ gives $1$ (not prime either). $n = 2, 3$ give $3$, $7$; $n = 4$ gives $15$.`),
Q('P7.5-5', 2, R`Disprove: "$(a + b)^2 = a^2 + b^2$ for all real $a$ and $b$." [[2]]`,
  [R`Choose simple non-zero values.`, R`$a = b = 1$.`],
  [R`|M1|Substitutes values`, R`|A1|$a = b = 1$: $4 \ne 2$`], R`$a = b = 1$: $4 \ne 2$`,
  R`$(1 + 1)^2 = 4$ but $1^2 + 1^2 = 2$. (In fact $(a + b)^2 = a^2 + 2ab + b^2$.)`),
Q('P7.5-6', 2, R`Prove that $n^2 + n$ is even for all positive integers $n$, by considering $n$ odd and $n$ even. [[3]]`,
  [R`$n = 2k$: $4k^2 + 2k$.`, R`$n = 2k + 1$: $4k^2 + 6k + 2$.`],
  [R`|M1|$n = 2k$: $2(2k^2 + k)$, even`, R`|M1|$n = 2k + 1$: $2(2k^2 + 3k + 1)$, even`, R`|A1|All integers are even or odd, so true for all $n$`], R`Even in both cases`,
  R`$(2k + 1)^2 + (2k + 1) = 4k^2 + 4k + 1 + 2k + 1 = 4k^2 + 6k + 2$.`),
Q('P7.5-7', 2, R`Disprove: "if $x^2 > 9$, then $x > 3$." [[2]]`,
  [R`Think about negative numbers.`, R`$x = -4$.`],
  [R`|M1|Considers a negative value`, R`|A1|$x = -4$: $16 > 9$ but $-4 < 3$`], R`$x = -4$`,
  R`$x^2 > 9$ means $x > 3$ **or** $x < -3$.`),
Q('P7.5-8', 3, R`Prove that the last digit of a square number is never $2$, $3$, $7$ or $8$. [[3]]`,
  [R`The last digit of $n^2$ depends only on the last digit of $n$.`, R`Square $0$ to $9$.`],
  [R`|M1|Considers last digits $0$ to $9$`, R`|A1|Squares end in $0, 1, 4, 9, 6, 5, 6, 9, 4, 1$`, R`|A1|None is $2$, $3$, $7$, $8$`], R`Last digits of squares: $0, 1, 4, 5, 6, 9$`,
  R`$0^2 = 0$, $1^2 = 1$, $2^2 = 4$, $3^2 = 9$, $4^2 = 16$, $5^2 = 25$, $6^2 = 36$, $7^2 = 49$, $8^2 = 64$, $9^2 = 81$.`),
Q('P7.5-9', 3, R`Prove that $n^2 - 2$ is never divisible by $4$ for any integer $n$. [[4]]`,
  [R`Consider $n = 2k$ and $n = 2k + 1$.`, R`Find the remainder on division by $4$ in each case.`],
  [R`|M1|$n = 2k$: $4k^2 - 2$`, R`|A1|Remainder $2$`, R`|M1|$n = 2k + 1$: $4k^2 + 4k - 1$`, R`|A1|Remainder $3$; so never divisible by $4$`], R`Remainder $2$ or $3$`,
  R`$4k^2 - 2 = 4(k^2 - 1) + 2$; $4k^2 + 4k - 1 = 4(k^2 + k - 1) + 3$.`),
Q('P7.5-10', 3, R`Disprove: "$n^2 - n + 11$ is prime for all positive integers $n$." [[2]]`,
  [R`Look for a value that makes every term a multiple of $11$.`, R`$n = 11$.`],
  [R`|M1|Chooses a value that works`, R`|A1|$n = 11$: $121 = 11^2$, not prime`], R`$n = 11$ gives $121$`,
  R`$11^2 - 11 + 11 = 121$.`),
Q('P7.5-11', 3, R`Prove that the square of any integer is either a multiple of $3$ or one more than a multiple of $3$. [[4]]`,
  [R`Every integer is $3k$, $3k + 1$ or $3k - 1$.`, R`Square each.`],
  [R`|M1|Three cases`, R`|A1|$(3k)^2 = 3(3k^2)$`, R`|A1|$(3k \pm 1)^2 = 3(3k^2 \pm 2k) + 1$`, R`|A1|Conclusion covering all integers`], R`$9k^2$ or $3(3k^2 \pm 2k) + 1$`,
  R`$(3k \pm 1)^2 = 9k^2 \pm 6k + 1$.`),
Q('P7.5-12', 4, R`Prove that the cube of any integer is a multiple of $9$, or one more, or one less than a multiple of $9$. [[4]]`,
  [R`Use $3k$, $3k + 1$, $3k - 1$.`, R`$(3k \pm 1)^3 = 27k^3 \pm 27k^2 + 9k \pm 1$.`],
  [R`|M1|Three cases`, R`|A1|$(3k)^3 = 9(3k^3)$`, R`|A1|$(3k \pm 1)^3 = 9(3k^3 \pm 3k^2 + k) \pm 1$`, R`|A1|Conclusion`], R`$9m$, $9m + 1$ or $9m - 1$`,
  R`Expand with the binomial pattern: $(a \pm 1)^3 = a^3 \pm 3a^2 + 3a \pm 1$ with $a = 3k$.`),
Q('P7.5-13', 4, R`Prove that there are no positive integers $x$ and $y$ with $x^2 - y^2 = 2$. [[4]]`,
  [R`$(x - y)(x + y) = 2$.`, R`With positive integers, $x + y > x - y$, and both are integers.`],
  [R`|M1|$(x - y)(x + y) = 2$`, R`|M1|Only factor pair: $x - y = 1$, $x + y = 2$`, R`|A1|$x = \frac32$, not an integer`, R`|A1|So no solutions`], R`No integer solutions`,
  R`$x + y$ is a positive integer, so $x - y$ is positive too. The only way to write $2$ as a product of positive integers with the larger second is $1 \times 2$, giving $x = \frac32$, $y = \frac12$: not integers.`),
Q('P7.5-14', 4, R`A student claims that $3^n + 2$ is prime for every positive integer $n$. Disprove the claim. [[3]]`,
  [R`Work through $n = 1, 2, 3, \ldots$.`, R`$n = 5$.`],
  [R`|M1|Tests values: $5, 11, 29, 83$ are prime`, R`|M1|$n = 5$: $245$`, R`|A1|$245 = 5 \times 49$, not prime`], R`$n = 5$ gives $245 = 5 \times 49$`,
  R`$3^5 + 2 = 243 + 2 = 245$.`),
Q('P7.5-15', 5, R`**(a)** Explain why every prime $p > 3$ can be written as $6k + 1$ or $6k - 1$ for some integer $k$. [[2]]

**(b)** Hence show that $p^2 - 1 = 12k(3k \pm 1)$. [[2]]

**(c)** Hence prove that $p^2 - 1$ is a multiple of $24$ for every prime $p > 3$. [[2]]

**(d)** Show that the result fails for $p = 3$. [[1]]`,
  [R`Every integer is $6k$, $6k \pm 1$, $6k \pm 2$ or $6k + 3$.`, R`For (c), show $k(3k \pm 1)$ is always even.`],
  [R`(a)|M1|Lists the forms $6k$, $6k \pm 1$, $6k \pm 2$, $6k + 3$`, R`(a)|A1|$6k$, $6k \pm 2$ are even and $6k + 3$ is a multiple of $3$, so a prime $> 3$ is $6k \pm 1$`, R`(b)|M1|$(6k \pm 1)^2 - 1 = 36k^2 \pm 12k$`, R`(b)|A1|$= 12k(3k \pm 1)$`, R`(c)|M1|If $k$ is even, done; if $k$ is odd, $3k \pm 1$ is even`, R`(c)|A1|So $k(3k \pm 1)$ is even and $p^2 - 1$ is a multiple of $24$`, R`(d)|B1|$3^2 - 1 = 8$, not a multiple of $24$`],
  R`Shown; $p = 3$ gives $8$`,
  R`(a) Numbers of the form $6k$, $6k + 2$, $6k + 4$ are even, and $6k + 3 = 3(2k + 1)$. A prime greater than $3$ is neither even nor a multiple of $3$, so it is $6k + 1$ or $6k + 5 = 6(k + 1) - 1$.

(c) $12 \times$ (an even number) is a multiple of $24$.

(d) $p = 3$ is not of the form $6k \pm 1$, so the argument doesn't apply.`)
]};
