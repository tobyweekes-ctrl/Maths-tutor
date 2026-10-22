/* Pure Mathematics Year 1 · Chapter 1 Algebraic expressions (sections 1.1 to 1.3) */
BOOK_CHAPTERS.push({ id:'P01', book:'Pure Mathematics Year 1', label:'Chapter 1', title:'Algebraic expressions', sections:[
  { id:'P1.1', num:'1.1', title:'Index laws' },
  { id:'P1.2', num:'1.2', title:'Expanding brackets' },
  { id:'P1.3', num:'1.3', title:'Factorising' },
  { id:'P1.4', num:'1.4', title:'Negative and fractional indices' },
  { id:'P1.5', num:'1.5', title:'Surds' },
  { id:'P1.6', num:'1.6', title:'Rationalising denominators' }
]});

CONTENT['P1.1'] = {
notes: R`
### The index laws
> $$a^m \times a^n = a^{m+n} \qquad a^m \div a^n = a^{m-n} \qquad (a^m)^n = a^{mn} \qquad (ab)^n = a^nb^n$$

- **Multiplying** the same base: **add** the powers.
- **Dividing**: **subtract** the powers.
- **A power of a power**: **multiply** the powers.
- A bracket raised to a power: raise **every** factor inside, numbers included.

Numbers and letters are dealt with separately: $3x^2 \times 4x^5 = (3 \times 4)(x^2 \times x^5) = 12x^7$.

::: booklet
**Not in the formula booklet:** the index laws. You must know them.
:::

### Worked example 1
Simplify $\dfrac{10x^6y^3}{2x^2y}$.
1. Numbers: $10 \div 2 = 5$.
2. $x$: $x^{6-2} = x^4$. $y$: $y^{3-1} = y^2$ (remember $y = y^1$).
3. Answer: $5x^4y^2$.

### Worked example 2: the bracket trap
Simplify $(2x^3)^2$.
- Every factor inside is squared: $2^2 \times (x^3)^2 = 4x^6$.

**The trap:** writing $2x^6$ (forgetting to square the $2$) or $4x^5$ (adding instead of multiplying the powers).

### Watch out
- $x^3 + x^2$ can't be simplified: the index laws are for multiplying and dividing, not adding.
- A letter on its own has power $1$.
`,
questions: [
Q('P1.1-1', 1, R`Simplify $x^5 \times x^3$. [[1]]`,
  [R`Multiplying the same base: add the powers.`, R`$5 + 3 = 8$.`],
  [R`|B1|$x^8$`], R`$x^8$`,
  R`Same base, multiplying, so add the powers: $x^{5+3} = x^8$.`),
Q('P1.1-2', 1, R`Simplify $(y^4)^3$. [[1]]`,
  [R`A power of a power: multiply the powers.`, R`$4 \times 3 = 12$.`],
  [R`|B1|$y^{12}$`], R`$y^{12}$`,
  R`A power of a power, so multiply: $y^{4 \times 3} = y^{12}$.`),
Q('P1.1-3', 1, R`Simplify $12p^7 \div 3p^2$. [[2]]`,
  [R`Deal with the numbers and the letters separately.`, R`$12 \div 3$, then subtract the powers of $p$.`],
  [R`|B1|Coefficient $4$`, R`|B1|$p^5$`], R`$4p^5$`,
  R`1. **Numbers:** $12 \div 3 = 4$.
2. **Powers:** $p^{7-2} = p^5$.
3. So $12p^7 \div 3p^2 = 4p^5$.`),
Q('P1.1-4', 2, R`Simplify $(3a^2b)^3$. [[2]]`,
  [R`Every factor inside the bracket is cubed, including the $3$.`, R`$3^3 = 27$, $(a^2)^3 = a^6$, $b^3$.`],
  [R`|M1|Cubes each factor`, R`|A1|$27a^6b^3$`], R`$27a^6b^3$`,
  R`Cube every factor: $3^3 \times (a^2)^3 \times b^3 = 27a^6b^3$.`),
Q('P1.1-5', 2, R`Simplify $\dfrac{4x^5y^2}{2x^2y} \times 3xy^3$. [[3]]`,
  [R`Simplify the fraction first.`, R`$\dfrac{4x^5y^2}{2x^2y} = 2x^3y$. Then multiply by $3xy^3$, adding powers.`],
  [R`|M1|Divides correctly to get $2x^3y$`, R`|M1|Multiplies by $3xy^3$, adding powers`, R`|A1|$6x^4y^4$`], R`$6x^4y^4$`,
  R`1. **Fraction:** $\dfrac{4x^5y^2}{2x^2y} = 2x^{5-2}y^{2-1} = 2x^3y$
2. **Multiply:** $2x^3y \times 3xy^3 = 6x^{3+1}y^{1+3} = 6x^4y^4$`),
Q('P1.1-6', 2, R`Expand and simplify $x^2(3x^4 - 2x)$. [[2]]`,
  [R`Multiply each term in the bracket by $x^2$.`, R`$x^2 \times 3x^4 = 3x^6$ and $x^2 \times 2x = 2x^3$.`],
  [R`|M1|Multiplies both terms by $x^2$`, R`|A1|$3x^6 - 2x^3$`], R`$3x^6 - 2x^3$`,
  R`$x^2 \times 3x^4 - x^2 \times 2x = 3x^6 - 2x^3$. The two terms have different powers, so they don't combine.`),
Q('P1.1-7', 2, R`Simplify $(2x^3)^2 \times 5x$. [[2]]`,
  [R`$(2x^3)^2 = 4x^6$, squaring the $2$ as well.`, R`Then multiply by $5x$.`],
  [R`|M1|$(2x^3)^2 = 4x^6$`, R`|A1|$20x^7$`], R`$20x^7$`,
  R`1. $(2x^3)^2 = 2^2 \times x^6 = 4x^6$
2. $4x^6 \times 5x = 20x^7$`),
Q('P1.1-8', 3, R`Simplify fully $\dfrac{6x^5 + 9x^3}{3x^2}$. [[3]]`,
  [R`Split the fraction: divide **each** term on top by $3x^2$.`, R`$\dfrac{6x^5}{3x^2} + \dfrac{9x^3}{3x^2}$.`],
  [R`|M1|Divides each term by $3x^2$`, R`|A1|$2x^3$`, R`|A1|$+3x$`], R`$2x^3 + 3x$`,
  R`1. **Split:** $\dfrac{6x^5}{3x^2} + \dfrac{9x^3}{3x^2}$
2. **Each term:** $2x^3 + 3x$

**Trap:** cancelling only one term, e.g. $\dfrac{6x^5 + 9x^3}{3x^2} = 2x^3 + 9x^3$.`),
Q('P1.1-9', 3, R`The integers $a$ and $b$ satisfy $2^a \times 2^b = 2^{10}$ and $\dfrac{(2^a)^2}{2^b} = 2^8$. Find $a$ and $b$. [[4]]`,
  [R`Turn each equation into an equation in the powers.`, R`$a + b = 10$ and $2a - b = 8$.`, R`Add the equations.`],
  [R`|M1|$a + b = 10$`, R`|M1|$2a - b = 8$`, R`|M1|Solves simultaneously`, R`|A1|$a = 6$, $b = 4$`], R`$a = 6$, $b = 4$`,
  R`1. $2^a \times 2^b = 2^{a+b}$, so $a + b = 10$.
2. $\dfrac{(2^a)^2}{2^b} = \dfrac{2^{2a}}{2^b} = 2^{2a - b}$, so $2a - b = 8$.
3. **Add:** $3a = 18$, so $a = 6$ and $b = 4$.`),
Q('P1.1-10', 3, R`Write $8^x \times 4^{x+1}$ as a single power of $2$. [[3]]`,
  [R`$8 = 2^3$ and $4 = 2^2$.`, R`$8^x = 2^{3x}$ and $4^{x+1} = 2^{2(x+1)}$.`],
  [R`|M1|Writes $8^x = 2^{3x}$ or $4^{x+1} = 2^{2x+2}$`, R`|M1|Adds the powers`, R`|A1|$2^{5x+2}$`], R`$2^{5x+2}$`,
  R`1. $8^x = (2^3)^x = 2^{3x}$ and $4^{x+1} = (2^2)^{x+1} = 2^{2x+2}$.
2. **Multiply, adding the powers:** $2^{3x + 2x + 2} = 2^{5x+2}$`),
Q('P1.1-11', 3, R`Solve $3^{2x} \times 9 = 27^x$. [[3]]`,
  [R`Write everything as a power of $3$.`, R`$9 = 3^2$ and $27^x = 3^{3x}$.`],
  [R`|M1|Writes each term as a power of $3$`, R`|M1|$2x + 2 = 3x$`, R`|A1|$x = 2$`], R`$x = 2$`,
  R`1. **Same base:** $3^{2x} \times 3^2 = 3^{3x}$, so $3^{2x+2} = 3^{3x}$.
2. **Equate powers:** $2x + 2 = 3x$, so $x = 2$.

Check: $3^4 \times 9 = 729 = 27^2$ ✓`),
Q('P1.1-12', 4, R`**(a)** Write $4^x$ as a power of $2$. [[1]]

**(b)** Hence solve $2^{x+1} = 4^{x-1}$. [[3]]

**(c)** Solve $8^y = 2^{y+4}$. [[2]]`,
  [R`$4 = 2^2$.`, R`For (b): $4^{x-1} = 2^{2x-2}$. Equal powers of $2$ means equal indices.`, R`For (c): $8^y = 2^{3y}$.`],
  [R`(a)|B1|$2^{2x}$`, R`(b)|M1|$4^{x-1} = 2^{2(x-1)}$`, R`(b)|M1|$x + 1 = 2x - 2$`, R`(b)|A1|$x = 3$`, R`(c)|M1|$3y = y + 4$`, R`(c)|A1|$y = 2$`],
  R`(a) $2^{2x}$ (b) $x = 3$ (c) $y = 2$`,
  R`**(a)** $4^x = (2^2)^x = 2^{2x}$

**(b)** $4^{x-1} = 2^{2x-2}$, so $2^{x+1} = 2^{2x-2}$ and $x + 1 = 2x - 2$, giving $x = 3$.

**(c)** $8^y = 2^{3y}$, so $3y = y + 4$ and $y = 2$.`),
Q('P1.1-13', 4, R`Simplify fully $\dfrac{(3x^2y)^3 \times 2xy^2}{9x^4y^3}$. [[4]]`,
  [R`Expand the bracket first: $(3x^2y)^3 = 27x^6y^3$.`, R`Multiply the top together, then divide numbers and powers separately.`],
  [R`|M1|$(3x^2y)^3 = 27x^6y^3$`, R`|M1|Numerator $54x^7y^5$`, R`|M1|Divides coefficients and subtracts powers`, R`|A1|$6x^3y^2$`], R`$6x^3y^2$`,
  R`1. **Bracket:** $(3x^2y)^3 = 27x^6y^3$
2. **Numerator:** $27x^6y^3 \times 2xy^2 = 54x^7y^5$
3. **Divide:** $\dfrac{54x^7y^5}{9x^4y^3} = 6x^3y^2$`),
Q('P1.1-14', 4, R`Given that $y = 2x^3$:

**(a)** express $y^2$ in terms of $x$ [[1]]

**(b)** express $\dfrac{y^3}{4x^2}$ in terms of $x$, in its simplest form [[2]]

**(c)** given also that $y^2 = 16x^2$ and $x > 0$, find the exact value of $x$. [[3]]`,
  [R`$y^2 = (2x^3)^2$.`, R`$y^3 = 8x^9$.`, R`For (c): $4x^6 = 16x^2$. Divide by $4x^2$ (allowed because $x > 0$).`],
  [R`(a)|B1|$4x^6$`, R`(b)|M1|$y^3 = 8x^9$`, R`(b)|A1|$2x^7$`, R`(c)|M1|$4x^6 = 16x^2$`, R`(c)|M1|$x^4 = 4$`, R`(c)|A1|$x = \sqrt2$`],
  R`(a) $4x^6$ (b) $2x^7$ (c) $x = \sqrt2$`,
  R`**(a)** $y^2 = (2x^3)^2 = 4x^6$

**(b)** $y^3 = 8x^9$, so $\dfrac{8x^9}{4x^2} = 2x^7$.

**(c)** $4x^6 = 16x^2$. Since $x > 0$, divide by $4x^2$: $x^4 = 4$, so $x^2 = 2$ and $x = \sqrt2$.`),
Q('P1.1-15', 5, R`**(a)** Show that $2^{n+2} - 2^n = 3 \times 2^n$. [[2]]

**(b)** Hence solve $2^{x+2} - 2^x = 96$. [[3]]

**(c)** Prove that $3^{n+1} + 3^n$ is a multiple of $4$ for every positive integer $n$. [[2]]`,
  [R`$2^{n+2} = 2^n \times 2^2$. Take out the common factor $2^n$.`, R`For (b): $3 \times 2^x = 96$.`, R`For (c): $3^{n+1} = 3 \times 3^n$. Factorise.`],
  [R`(a)|M1|$2^{n+2} = 4 \times 2^n$`, R`(a)|A1|$4 \times 2^n - 2^n = 3 \times 2^n$ (cso)`, R`(b)|M1|$3 \times 2^x = 96$`, R`(b)|M1|$2^x = 32$`, R`(b)|A1|$x = 5$`, R`(c)|M1|$3^n(3 + 1)$`, R`(c)|A1|$= 4 \times 3^n$, a multiple of $4$ (conclusion)`],
  R`(b) $x = 5$ (c) $3^{n+1} + 3^n = 4 \times 3^n$`,
  R`**(a)** $2^{n+2} = 2^n \times 2^2 = 4 \times 2^n$, so $2^{n+2} - 2^n = 4 \times 2^n - 2^n = 3 \times 2^n$. $\blacksquare$

**(b)** By (a), $3 \times 2^x = 96$, so $2^x = 32 = 2^5$ and $x = 5$.

**(c)** $3^{n+1} + 3^n = 3 \times 3^n + 3^n = 3^n(3 + 1) = 4 \times 3^n$. Since $3^n$ is an integer, this is a multiple of $4$. $\blacksquare$`)
]
};

CONTENT['P1.2'] = {
notes: R`
### Single brackets
Multiply **every** term inside by the term outside: $3x(2x - 5) = 6x^2 - 15x$.

### Two brackets
Multiply each term in the first bracket by each term in the second:
> $$(a + b)(c + d) = ac + ad + bc + bd$$

Then collect like terms. For example $(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$.

### Three brackets
Multiply two of them first, then multiply the answer by the third.

### Useful results
> $$(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2$$

::: booklet
**Not in the formula booklet:** these expansions. Learn them, especially the difference of two squares.
:::

### Worked example 1
Expand $(2x - 1)(x + 4)$.
1. $2x \cdot x + 2x \cdot 4 - 1 \cdot x - 1 \cdot 4 = 2x^2 + 8x - x - 4$
2. Collect: $2x^2 + 7x - 4$.

### Worked example 2: squaring a bracket
Expand $(x - 3)^2$.
- $(x - 3)(x - 3) = x^2 - 3x - 3x + 9 = x^2 - 6x + 9$

**The trap:** writing $x^2 - 9$ or $x^2 + 9$. Squaring a bracket always gives a middle term.

### Watch out
- Negative times negative is positive: $(-3)(-5) = +15$.
- When a minus sign is in front of a bracket, it changes every sign inside: $-(x - 4) = -x + 4$.
`,
questions: [
Q('P1.2-1', 1, R`Expand $4x(3x - 2)$. [[2]]`,
  [R`Multiply each term inside by $4x$.`, R`$4x \times 3x$ and $4x \times (-2)$.`],
  [R`|M1|Multiplies both terms`, R`|A1|$12x^2 - 8x$`], R`$12x^2 - 8x$`,
  R`$4x \times 3x = 12x^2$ and $4x \times (-2) = -8x$, so $4x(3x - 2) = 12x^2 - 8x$.`),
Q('P1.2-2', 1, R`Expand and simplify $(x + 4)(x + 6)$. [[2]]`,
  [R`Four multiplications: $x \cdot x$, $x \cdot 6$, $4 \cdot x$, $4 \cdot 6$.`, R`Collect the $x$ terms.`],
  [R`|M1|Four correct terms`, R`|A1|$x^2 + 10x + 24$`], R`$x^2 + 10x + 24$`,
  R`$x^2 + 6x + 4x + 24 = x^2 + 10x + 24$`),
Q('P1.2-3', 1, R`Expand and simplify $3(x - 2) - 2(x - 5)$. [[2]]`,
  [R`Be careful: $-2 \times (-5) = +10$.`, R`$3x - 6 - 2x + 10$.`],
  [R`|M1|Expands both brackets with correct signs`, R`|A1|$x + 4$`], R`$x + 4$`,
  R`1. $3(x - 2) = 3x - 6$ and $-2(x - 5) = -2x + 10$.
2. Collect: $3x - 2x - 6 + 10 = x + 4$.`),
Q('P1.2-4', 2, R`Expand and simplify $(2x - 3)(x + 5)$. [[2]]`,
  [R`$2x \cdot x$, $2x \cdot 5$, $-3 \cdot x$, $-3 \cdot 5$.`, R`$10x - 3x = 7x$.`],
  [R`|M1|Four terms, at least three correct`, R`|A1|$2x^2 + 7x - 15$`], R`$2x^2 + 7x - 15$`,
  R`$2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15$`),
Q('P1.2-5', 2, R`Expand and simplify $(3x - 2)^2$. [[2]]`,
  [R`$(3x - 2)^2 = (3x - 2)(3x - 2)$.`, R`The middle term is $2 \times 3x \times (-2)$.`],
  [R`|M1|Writes as two brackets or uses $(a - b)^2$`, R`|A1|$9x^2 - 12x + 4$`], R`$9x^2 - 12x + 4$`,
  R`$(3x - 2)(3x - 2) = 9x^2 - 6x - 6x + 4 = 9x^2 - 12x + 4$`),
Q('P1.2-6', 2, R`Expand and simplify $(x + 7)(x - 7)$. [[1]]`,
  [R`This is a difference of two squares.`, R`The $x$ terms cancel.`],
  [R`|B1|$x^2 - 49$`], R`$x^2 - 49$`,
  R`$x^2 - 7x + 7x - 49 = x^2 - 49$. This is the pattern $(a + b)(a - b) = a^2 - b^2$.`),
Q('P1.2-7', 2, R`Expand and simplify $(x + 2)(x^2 - 3x + 4)$. [[3]]`,
  [R`Multiply each of $x$ and $2$ by every term in the second bracket: six terms.`, R`Then collect the $x^2$ terms and the $x$ terms.`],
  [R`|M1|Six terms, at least five correct`, R`|A1|Collects terms correctly`, R`|A1|$x^3 - x^2 - 2x + 8$`], R`$x^3 - x^2 - 2x + 8$`,
  R`1. $x(x^2 - 3x + 4) = x^3 - 3x^2 + 4x$
2. $2(x^2 - 3x + 4) = 2x^2 - 6x + 8$
3. Add: $x^3 - x^2 - 2x + 8$`),
Q('P1.2-8', 3, R`Expand and simplify $(x + 1)(x - 2)(x + 3)$. [[3]]`,
  [R`Multiply two of the brackets first.`, R`$(x + 1)(x - 2) = x^2 - x - 2$. Now multiply by $(x + 3)$.`],
  [R`|M1|Multiplies two brackets correctly`, R`|M1|Multiplies by the third`, R`|A1|$x^3 + 2x^2 - 5x - 6$`], R`$x^3 + 2x^2 - 5x - 6$`,
  R`1. $(x + 1)(x - 2) = x^2 - x - 2$
2. $(x^2 - x - 2)(x + 3) = x^3 + 3x^2 - x^2 - 3x - 2x - 6 = x^3 + 2x^2 - 5x - 6$`),
Q('P1.2-9', 3, R`Show that $(2x + 1)^2 - (x - 3)^2 \equiv 3x^2 + 10x - 8$. [[3]]`,
  [R`Expand each square separately.`, R`$(2x + 1)^2 = 4x^2 + 4x + 1$ and $(x - 3)^2 = x^2 - 6x + 9$. Subtract the whole of the second.`],
  [R`|M1|Expands $(2x + 1)^2$`, R`|M1|Expands $(x - 3)^2$ and subtracts with brackets`, R`|A1|$3x^2 + 10x - 8$ (cso)`], R`$3x^2 + 10x - 8$`,
  R`$(4x^2 + 4x + 1) - (x^2 - 6x + 9) = 3x^2 + 10x - 8$ $\blacksquare$

Watch the signs: $-(x^2 - 6x + 9) = -x^2 + 6x - 9$.`),
Q('P1.2-10', 3, R`Given that $(x + a)(x + 5) \equiv x^2 + bx - 15$, find the values of the constants $a$ and $b$. [[3]]`,
  [R`Expand the left side: $x^2 + (a + 5)x + 5a$.`, R`Compare the constant terms first.`],
  [R`|M1|Expands to $x^2 + (5 + a)x + 5a$`, R`|A1|$a = -3$`, R`|A1|$b = 2$`], R`$a = -3$, $b = 2$`,
  R`1. **Expand:** $x^2 + 5x + ax + 5a = x^2 + (5 + a)x + 5a$
2. **Constants:** $5a = -15$, so $a = -3$.
3. **$x$ terms:** $b = 5 + a = 2$.`),
Q('P1.2-11', 3, R`A rectangle has length $(2x + 3)$ cm and width $(x - 1)$ cm. A square of side $x$ cm is removed from it. Show that the area left is $(x^2 + x - 3)$ cm². [[3]]`,
  [R`Area of rectangle $= (2x + 3)(x - 1)$.`, R`Subtract the square's area, $x^2$.`],
  [R`|M1|$(2x + 3)(x - 1)$`, R`|A1|$2x^2 + x - 3$`, R`|A1|Subtracts $x^2$ to get $x^2 + x - 3$ (cso)`], R`$x^2 + x - 3$`,
  R`1. Rectangle: $(2x + 3)(x - 1) = 2x^2 - 2x + 3x - 3 = 2x^2 + x - 3$
2. Remove the square: $2x^2 + x - 3 - x^2 = x^2 + x - 3$ cm² $\blacksquare$`),
Q('P1.2-12', 4, R`**(a)** Expand and simplify $(x - 2)^3$. [[3]]

**(b)** Hence find the coefficient of $x^2$ in the expansion of $(x - 2)^3(x + 1)$. [[2]]`,
  [R`$(x - 2)^3 = (x - 2)^2(x - 2)$ with $(x - 2)^2 = x^2 - 4x + 4$.`, R`For (b) you don't need the whole expansion. Which products give $x^2$?`],
  [R`(a)|M1|$(x - 2)^2 = x^2 - 4x + 4$`, R`(a)|M1|Multiplies by $(x - 2)$`, R`(a)|A1|$x^3 - 6x^2 + 12x - 8$`, R`(b)|M1|$-6x^2 \times 1 + 12x \times x$`, R`(b)|A1|$6$`],
  R`(a) $x^3 - 6x^2 + 12x - 8$ (b) $6$`,
  R`**(a)** $(x - 2)^2 = x^2 - 4x + 4$, then $(x^2 - 4x + 4)(x - 2) = x^3 - 2x^2 - 4x^2 + 8x + 4x - 8 = x^3 - 6x^2 + 12x - 8$.

**(b)** $(x^3 - 6x^2 + 12x - 8)(x + 1)$. The $x^2$ terms come from $-6x^2 \times 1$ and $12x \times x$: $-6x^2 + 12x^2 = 6x^2$. The coefficient is $6$.`),
Q('P1.2-13', 4, R`Given that $(ax - 3)(2x + b) \equiv 6x^2 + cx - 15$, find the values of the constants $a$, $b$ and $c$. [[4]]`,
  [R`Expand: $2ax^2 + abx - 6x - 3b$.`, R`Compare the $x^2$ terms and the constants first.`, R`Then $c = ab - 6$.`],
  [R`|M1|Expands to $2ax^2 + (ab - 6)x - 3b$`, R`|A1|$a = 3$`, R`|A1|$b = 5$`, R`|A1|$c = 9$`],
  R`$a = 3$, $b = 5$, $c = 9$`,
  R`1. **Expand:** $(ax - 3)(2x + b) = 2ax^2 + abx - 6x - 3b = 2ax^2 + (ab - 6)x - 3b$
2. **$x^2$ terms:** $2a = 6$, so $a = 3$.
3. **Constants:** $-3b = -15$, so $b = 5$.
4. **$x$ terms:** $c = ab - 6 = 15 - 6 = 9$.`),
Q('P1.2-14', 4, R`Show that $(n + 1)^2 - (n - 1)^2 = 4n$, and hence show that the difference between the squares of two consecutive **odd** numbers is always a multiple of $8$. [[5]]`,
  [R`Expand both squares and subtract.`, R`Two consecutive odd numbers can be written $2k - 1$ and $2k + 1$. Use the result with $n = 2k$.`],
  [R`|M1|Expands both squares`, R`|A1|$4n$ (cso)`, R`|M1|Writes consecutive odd numbers as $2k - 1$ and $2k + 1$`, R`|M1|Uses the result with $n = 2k$`, R`|A1|$8k$, a multiple of $8$ (conclusion)`],
  R`$(2k+1)^2 - (2k-1)^2 = 8k$`,
  R`1. $(n^2 + 2n + 1) - (n^2 - 2n + 1) = 4n$ $\blacksquare$
2. Two consecutive odd numbers are $2k - 1$ and $2k + 1$ for some integer $k$. With $n = 2k$:
$(2k + 1)^2 - (2k - 1)^2 = 4(2k) = 8k$, which is a multiple of $8$. $\blacksquare$`),
Q('P1.2-15', 5, R`The expression $(x^2 + px + 2)(x^2 - 3x + q)$ has no $x^3$ term and no $x$ term when expanded.

**(a)** Find the values of $p$ and $q$. [[5]]

**(b)** Hence find the coefficient of $x^2$. [[2]]`,
  [R`You only need the terms that make $x^3$ and $x$.`, R`$x^3$: $x^2 \cdot (-3x) + px \cdot x^2$. $x$: $px \cdot q + 2 \cdot (-3x)$.`, R`Set each coefficient to zero.`],
  [R`(a)|M1|$x^3$ coefficient $p - 3$`, R`(a)|A1|$p = 3$`, R`(a)|M1|$x$ coefficient $pq - 6$`, R`(a)|M1|Sets $pq - 6 = 0$ with their $p$`, R`(a)|A1|$q = 2$`, R`(b)|M1|$x^2$ terms: $q - 3p + 2$`, R`(b)|A1|$-5$`],
  R`(a) $p = 3$, $q = 2$ (b) $-5$`,
  R`**(a)**
1. **$x^3$ terms:** $x^2(-3x) + px(x^2) = (p - 3)x^3$. No $x^3$ term, so $p = 3$.
2. **$x$ terms:** $px(q) + 2(-3x) = (pq - 6)x$. No $x$ term, so $3q = 6$ and $q = 2$.

**(b)** **$x^2$ terms:** $x^2(q) + px(-3x) + 2(x^2) = (q - 3p + 2)x^2 = (2 - 9 + 2)x^2 = -5x^2$. The coefficient is $-5$.`)
]
};

CONTENT['P1.3'] = {
notes: R`
### What factorising means
Factorising is the reverse of expanding: write an expression as a product.
1. **Take out the highest common factor** first: $6x^2 + 9x = 3x(2x + 3)$.
2. Then look for a pattern.

### Quadratics $x^2 + bx + c$
Find two numbers that **multiply** to $c$ and **add** to $b$: $x^2 + 7x + 12 = (x + 3)(x + 4)$.

### Quadratics $ax^2 + bx + c$
Find two numbers that multiply to $ac$ and add to $b$, split the middle term, then factorise in pairs. For $2x^2 + 7x + 3$: $ac = 6$, numbers $6$ and $1$:
$2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.

### Difference of two squares
> $$a^2 - b^2 = (a + b)(a - b)$$

For example $9x^2 - 25 = (3x + 5)(3x - 5)$.

::: booklet
**Not in the formula booklet:** any factorising methods.
:::

### Worked example 1
Factorise $x^2 - 2x - 15$: multiply to $-15$, add to $-2$: $-5$ and $3$. So $(x - 5)(x + 3)$.

### Worked example 2: factorise fully
Factorise fully $2x^3 - 18x$.
1. Common factor: $2x(x^2 - 9)$.
2. Difference of two squares: $2x(x + 3)(x - 3)$.

**The trap:** stopping at $2x(x^2 - 9)$. "Fully" means keep going until nothing more factorises.

### Watch out
- Always check by expanding your answer.
- $x^2 + 9$ does **not** factorise (it's a sum of squares).
`,
questions: [
Q('P1.3-1', 1, R`Factorise $5x^2 - 15x$. [[1]]`,
  [R`Find the highest common factor of both terms.`, R`Both terms contain $5$ and $x$.`],
  [R`|B1|$5x(x - 3)$`], R`$5x(x - 3)$`,
  R`The HCF is $5x$: $5x^2 - 15x = 5x(x - 3)$. Check: $5x \cdot x - 5x \cdot 3$ ✓`),
Q('P1.3-2', 1, R`Factorise $x^2 + 8x + 15$. [[2]]`,
  [R`Two numbers that multiply to $15$ and add to $8$.`, R`$3$ and $5$.`],
  [R`|M1|$(x \pm 3)(x \pm 5)$`, R`|A1|$(x + 3)(x + 5)$`], R`$(x + 3)(x + 5)$`,
  R`$3 \times 5 = 15$ and $3 + 5 = 8$, so $x^2 + 8x + 15 = (x + 3)(x + 5)$.`),
Q('P1.3-3', 1, R`Factorise $x^2 - 64$. [[1]]`,
  [R`It's a difference of two squares.`, R`$64 = 8^2$.`],
  [R`|B1|$(x + 8)(x - 8)$`], R`$(x + 8)(x - 8)$`,
  R`$x^2 - 8^2 = (x + 8)(x - 8)$.`),
Q('P1.3-4', 2, R`Factorise $x^2 - x - 20$. [[2]]`,
  [R`Multiply to $-20$, add to $-1$.`, R`$-5$ and $4$.`],
  [R`|M1|Correct pair of numbers`, R`|A1|$(x - 5)(x + 4)$`], R`$(x - 5)(x + 4)$`,
  R`$-5 \times 4 = -20$ and $-5 + 4 = -1$, so $(x - 5)(x + 4)$.`),
Q('P1.3-5', 2, R`Factorise $3x^2 + 10x - 8$. [[2]]`,
  [R`$ac = 3 \times (-8) = -24$. Two numbers that multiply to $-24$ and add to $10$.`, R`$12$ and $-2$: split $10x$ into $12x - 2x$.`],
  [R`|M1|Splits the middle term or uses a correct method`, R`|A1|$(3x - 2)(x + 4)$`], R`$(3x - 2)(x + 4)$`,
  R`1. $ac = -24$; $12 \times (-2) = -24$ and $12 - 2 = 10$.
2. $3x^2 + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4) = (3x - 2)(x + 4)$`),
Q('P1.3-6', 2, R`Factorise $16x^2 - 49y^2$. [[2]]`,
  [R`Both terms are squares.`, R`$16x^2 = (4x)^2$ and $49y^2 = (7y)^2$.`],
  [R`|M1|Recognises $(4x)^2 - (7y)^2$`, R`|A1|$(4x + 7y)(4x - 7y)$`], R`$(4x + 7y)(4x - 7y)$`,
  R`$(4x)^2 - (7y)^2 = (4x + 7y)(4x - 7y)$`),
Q('P1.3-7', 2, R`Factorise fully $3x^2 - 12$. [[2]]`,
  [R`Take out the common factor $3$ first.`, R`$x^2 - 4$ is a difference of two squares.`],
  [R`|M1|$3(x^2 - 4)$`, R`|A1|$3(x + 2)(x - 2)$`], R`$3(x + 2)(x - 2)$`,
  R`$3x^2 - 12 = 3(x^2 - 4) = 3(x + 2)(x - 2)$.`),
Q('P1.3-8', 3, R`Factorise fully $x^3 - 5x^2 + 6x$. [[3]]`,
  [R`Every term has a factor $x$.`, R`$x(x^2 - 5x + 6)$, then factorise the quadratic.`],
  [R`|M1|$x(x^2 - 5x + 6)$`, R`|M1|Factorises the quadratic`, R`|A1|$x(x - 2)(x - 3)$`], R`$x(x - 2)(x - 3)$`,
  R`1. $x^3 - 5x^2 + 6x = x(x^2 - 5x + 6)$
2. $x^2 - 5x + 6 = (x - 2)(x - 3)$, so the answer is $x(x - 2)(x - 3)$.`),
Q('P1.3-9', 3, R`Factorise fully $2x^4 - 32$. [[3]]`,
  [R`Common factor $2$: $2(x^4 - 16)$.`, R`$x^4 - 16 = (x^2)^2 - 4^2$, a difference of two squares. Then one of the factors factorises again.`],
  [R`|M1|$2(x^4 - 16)$`, R`|M1|$(x^2 + 4)(x^2 - 4)$`, R`|A1|$2(x^2 + 4)(x + 2)(x - 2)$`], R`$2(x^2 + 4)(x + 2)(x - 2)$`,
  R`1. $2x^4 - 32 = 2(x^4 - 16)$
2. $x^4 - 16 = (x^2 + 4)(x^2 - 4)$
3. $x^2 - 4 = (x + 2)(x - 2)$, but $x^2 + 4$ doesn't factorise.

So $2x^4 - 32 = 2(x^2 + 4)(x + 2)(x - 2)$.`),
Q('P1.3-10', 3, R`Factorise $6x^2 - 7x - 3$. [[2]]`,
  [R`$ac = -18$. Multiply to $-18$, add to $-7$.`, R`$-9$ and $2$.`],
  [R`|M1|Correct method`, R`|A1|$(3x + 1)(2x - 3)$`], R`$(3x + 1)(2x - 3)$`,
  R`1. $ac = -18$: $-9 \times 2 = -18$ and $-9 + 2 = -7$.
2. $6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3)$`),
Q('P1.3-11', 3, R`Factorise $x^4 - 10x^2 + 9$ completely. [[3]]`,
  [R`Treat it as a quadratic in $x^2$: let $u = x^2$.`, R`$u^2 - 10u + 9 = (u - 1)(u - 9)$.`, R`Each factor is a difference of two squares.`],
  [R`|M1|$(x^2 - 1)(x^2 - 9)$`, R`|M1|Factorises each difference of two squares`, R`|A1|$(x + 1)(x - 1)(x + 3)(x - 3)$`], R`$(x + 1)(x - 1)(x + 3)(x - 3)$`,
  R`1. With $u = x^2$: $u^2 - 10u + 9 = (u - 1)(u - 9)$, so $(x^2 - 1)(x^2 - 9)$.
2. Each is a difference of two squares: $(x + 1)(x - 1)(x + 3)(x - 3)$.`),
Q('P1.3-12', 4, R`**(a)** Factorise $x^2 - 4x - 21$. [[1]]

**(b)** Hence factorise fully $3x^3 - 12x^2 - 63x$. [[2]]

**(c)** Hence simplify $\dfrac{3x^3 - 12x^2 - 63x}{x^2 - 49}$. [[2]]`,
  [R`Multiply to $-21$, add to $-4$.`, R`For (b), take out $3x$ first.`, R`For (c), factorise the denominator and cancel the common factor.`],
  [R`(a)|B1|$(x - 7)(x + 3)$`, R`(b)|M1|$3x(x^2 - 4x - 21)$`, R`(b)|A1|$3x(x - 7)(x + 3)$`, R`(c)|M1|$x^2 - 49 = (x + 7)(x - 7)$ and cancels $(x - 7)$`, R`(c)|A1|$\dfrac{3x(x + 3)}{x + 7}$`],
  R`(a) $(x - 7)(x + 3)$ (b) $3x(x - 7)(x + 3)$ (c) $\dfrac{3x(x + 3)}{x + 7}$`,
  R`**(a)** $-7 \times 3 = -21$ and $-7 + 3 = -4$: $(x - 7)(x + 3)$.

**(b)** $3x^3 - 12x^2 - 63x = 3x(x^2 - 4x - 21) = 3x(x - 7)(x + 3)$.

**(c)** $\dfrac{3x(x - 7)(x + 3)}{(x + 7)(x - 7)} = \dfrac{3x(x + 3)}{x + 7}$`),
Q('P1.3-13', 4, R`Without a calculator, use factorising to work out

**(a)** $87^2 - 13^2$ [[2]]

**(b)** $\dfrac{2023^2 - 2021^2}{4}$ [[3]]`,
  [R`$a^2 - b^2 = (a + b)(a - b)$.`, R`$87 + 13 = 100$ and $87 - 13 = 74$.`],
  [R`(a)|M1|$(87 + 13)(87 - 13)$`, R`(a)|A1|$7400$`, R`(b)|M1|$(2023 + 2021)(2023 - 2021)$`, R`(b)|A1|$4044 \times 2$`, R`(b)|A1|$2022$`],
  R`(a) $7400$ (b) $2022$`,
  R`**(a)** $87^2 - 13^2 = (87 + 13)(87 - 13) = 100 \times 74 = 7400$

**(b)** $2023^2 - 2021^2 = (4044)(2) = 8088$, and $\dfrac{8088}{4} = 2022$.`),
Q('P1.3-14', 4, R`**(a)** Factorise $n^3 - n$ completely. [[2]]

**(b)** Hence explain why $n^3 - n$ is always a multiple of $6$ for every integer $n$. [[3]]`,
  [R`$n(n^2 - 1)$, then a difference of two squares.`, R`$(n - 1)n(n + 1)$ is the product of three consecutive integers.`, R`Among three consecutive integers, one is a multiple of $3$ and at least one is even.`],
  [R`(a)|M1|$n(n^2 - 1)$`, R`(a)|A1|$(n - 1)n(n + 1)$`, R`(b)|B1|Three consecutive integers`, R`(b)|B1|One is a multiple of $3$ and one is even`, R`(b)|B1|So the product is a multiple of $2 \times 3 = 6$`],
  R`(a) $(n - 1)n(n + 1)$`,
  R`**(a)** $n^3 - n = n(n^2 - 1) = n(n - 1)(n + 1)$

**(b)** $(n - 1)n(n + 1)$ is the product of three consecutive integers. One of any three consecutive integers is a multiple of $3$, and at least one of them is even. So the product has factors $2$ and $3$, and is a multiple of $6$.`),
Q('P1.3-15', 5, R`**(a)** Show that $x^2 + 2xy + y^2 - 9$ can be written as a difference of two squares, and hence factorise it. [[3]]

**(b)** Hence, or otherwise, factorise $a^2 - b^2 + 4b - 4$. [[4]]`,
  [R`$x^2 + 2xy + y^2 = (x + y)^2$.`, R`For (b), group $-b^2 + 4b - 4 = -(b^2 - 4b + 4) = -(b - 2)^2$.`, R`Then $a^2 - (b - 2)^2$.`],
  [R`(a)|M1|$(x + y)^2 - 9$`, R`(a)|M1|$(x + y)^2 - 3^2$`, R`(a)|A1|$(x + y + 3)(x + y - 3)$`, R`(b)|M1|Groups as $a^2 - (b^2 - 4b + 4)$`, R`(b)|M1|$b^2 - 4b + 4 = (b - 2)^2$`, R`(b)|M1|Difference of two squares`, R`(b)|A1|$(a + b - 2)(a - b + 2)$`],
  R`(a) $(x + y + 3)(x + y - 3)$ (b) $(a + b - 2)(a - b + 2)$`,
  R`**(a)** $x^2 + 2xy + y^2 = (x + y)^2$, so the expression is $(x + y)^2 - 3^2 = (x + y + 3)(x + y - 3)$.

**(b)**
1. **Group:** $a^2 - (b^2 - 4b + 4) = a^2 - (b - 2)^2$
2. **Difference of two squares:** $\big(a + (b - 2)\big)\big(a - (b - 2)\big) = (a + b - 2)(a - b + 2)$

Check with $a = 3$, $b = 1$: $9 - 1 + 4 - 4 = 8$ and $(2)(4) = 8$ ✓`)
]
};
