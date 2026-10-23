/* Pure Mathematics Year 2 · Chapter 1 Algebraic methods (sections 1.1 to 1.5) */
BOOK_CHAPTERS.push({ id:'Y2P01', book:'Pure Mathematics Year 2', label:'Chapter 1', title:'Algebraic methods', sections:[
  { id:'2P1.1', num:'1.1', title:'Proof by contradiction' },
  { id:'2P1.2', num:'1.2', title:'Algebraic fractions' },
  { id:'2P1.3', num:'1.3', title:'Partial fractions' },
  { id:'2P1.4', num:'1.4', title:'Repeated factors' },
  { id:'2P1.5', num:'1.5', title:'Algebraic division' }
]});

CONTENT['2P1.1'] = {
notes: R`
### The method
To prove a statement by **contradiction**:
1. Assume the statement is **false** (write down its negation carefully).
2. Use logical steps to reach something impossible: a **contradiction**.
3. Conclude that the assumption was wrong, so the statement is true.

### Useful negations
| Statement | Negation (your assumption) |
|---|---|
| $\sqrt2$ is irrational | $\sqrt2$ is rational, $\sqrt2 = \frac{a}{b}$ with $a, b$ integers with no common factor |
| There are infinitely many primes | There are finitely many primes |
| There is no largest even number | There is a largest even number $N$ |
| If $n^2$ is even, then $n$ is even | There is an $n$ with $n^2$ even but $n$ odd |

::: booklet
**Learn these:** the standard proofs that $\sqrt2$ is irrational and that there are infinitely many primes. They aren't in the formula booklet.
:::

### Worked example 1
Prove that $\sqrt2$ is irrational.
- Assume $\sqrt2 = \frac{a}{b}$ where $a$ and $b$ are integers with no common factors.
- Then $2b^2 = a^2$, so $a^2$ is even, so $a$ is even: $a = 2k$.
- So $2b^2 = 4k^2$, giving $b^2 = 2k^2$, so $b$ is even too.
- Then $a$ and $b$ share the factor $2$: a contradiction. So $\sqrt2$ is irrational.

### Worked example 2: infinitely many primes
Assume there are finitely many primes $p_1, p_2, \dots, p_n$. Let $N = p_1 p_2 \cdots p_n + 1$.
- $N$ leaves remainder $1$ when divided by every $p_i$, so none of them divides $N$.
- So either $N$ is prime or it has a prime factor not in the list. Either way there's a prime not on the list: a contradiction.

**The trap:** claiming "$N$ is prime". It need not be ($2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031 = 59 \times 509$). The argument only needs a prime **not on the list**.

### Watch out
- Finish with a conclusion: "this contradicts the assumption, so ...".
`,
questions: [
Q('2P1.1-1', 1, R`State the assumption you would make to prove by contradiction that there is no largest integer. [[1]]`,
  [R`Assume the opposite.`, R`Give it a name.`],
  [R`|B1|Assume there is a largest integer, $N$`], R`Assume there is a largest integer $N$`,
  R`Assume the opposite of the statement: there is a largest integer, $N$. (Then $N + 1$ is a larger integer, which is the contradiction.)`),
Q('2P1.1-2', 1, R`Write down the assumption needed to prove by contradiction that $\sqrt3$ is irrational. [[1]]`,
  [R`Irrational means it can't be written as a fraction.`, R`So assume it can, in lowest terms.`],
  [R`|B1|$\sqrt3 = \frac{a}{b}$ for integers $a, b$ with no common factors`], R`$\sqrt3 = \frac{a}{b}$, $a, b$ integers with no common factor`,
  R`Assume $\sqrt3$ is rational: $\sqrt3 = \frac{a}{b}$ where $a$ and $b$ are integers with no common factors ($b \ne 0$).`),
Q('2P1.1-3', 1, R`Write down the negation of the statement "If $n^2$ is odd, then $n$ is odd". [[1]]`,
  [R`The statement fails if there's a counter-example.`, R`What would that counter-example look like?`],
  [R`|B1|There is an integer $n$ such that $n^2$ is odd and $n$ is even`], R`Some $n$ has $n^2$ odd but $n$ even`,
  R`The negation is: there exists an integer $n$ for which $n^2$ is odd but $n$ is even.`),
Q('2P1.1-4', 2, R`Prove by contradiction that there is no largest even number. [[3]]`,
  [R`Assume there's a largest even number $N$.`, R`Look at $N + 2$.`],
  [R`|M1|Assume a largest even number $N$ exists`, R`|M1|$N + 2$ is even and greater than $N$`, R`|A1|Contradiction, so there is no largest even number`], R`Proof`,
  R`Assume there is a largest even number $N$. Then $N = 2k$ for some integer $k$, and $N + 2 = 2(k + 1)$ is also even, with $N + 2 > N$. This contradicts $N$ being the largest, so there is no largest even number.`),
Q('2P1.1-5', 2, R`Prove by contradiction that if $n^2$ is even, then $n$ is even. [[3]]`,
  [R`Assume $n^2$ is even but $n$ is odd.`, R`Write $n = 2k + 1$ and square it.`],
  [R`|M1|Assume $n^2$ even and $n = 2k + 1$`, R`|M1|$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$`, R`|A1|So $n^2$ is odd: contradiction, so $n$ is even`], R`Proof`,
  R`Assume $n^2$ is even but $n$ is odd, so $n = 2k + 1$. Then $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd. This contradicts $n^2$ being even, so $n$ must be even.`),
Q('2P1.1-6', 2, R`Prove that there are no integers $a$ and $b$ such that $2a + 4b = 7$. [[2]]`,
  [R`Assume there are.`, R`What can you say about $2a + 4b$?`],
  [R`|M1|Assume integers exist; $2a + 4b = 2(a + 2b)$ is even`, R`|A1|But $7$ is odd: contradiction`], R`Proof`,
  R`Assume such integers exist. Then $2a + 4b = 2(a + 2b)$ is even, but $7$ is odd. This is a contradiction, so no such integers exist.`),
Q('2P1.1-7', 2, R`Prove by contradiction that there is no smallest positive rational number. [[3]]`,
  [R`Assume there's a smallest, $\frac{a}{b}$.`, R`Halve it.`],
  [R`|M1|Assume a smallest positive rational $q = \frac{a}{b}$`, R`|M1|$\frac{q}{2} = \frac{a}{2b}$ is rational, positive and smaller`, R`|A1|Contradiction, so no smallest positive rational`], R`Proof`,
  R`Assume $q = \frac{a}{b}$ is the smallest positive rational number. Then $\frac{q}{2} = \frac{a}{2b}$ is rational, positive and smaller than $q$. This contradicts $q$ being the smallest, so there is none.`),
Q('2P1.1-8', 3, R`Prove by contradiction that $\sqrt2$ is irrational. [[5]]`,
  [R`Assume $\sqrt2 = \frac{a}{b}$ in lowest terms.`, R`Show both $a$ and $b$ must be even.`],
  [R`|B1|Assume $\sqrt2 = \frac{a}{b}$, $a, b$ integers with no common factor`, R`|M1|$a^2 = 2b^2$, so $a^2$ and hence $a$ is even`, R`|M1|$a = 2k$ gives $b^2 = 2k^2$`, R`|M1|So $b$ is even`, R`|A1|$a$ and $b$ share a factor $2$: contradiction, so $\sqrt2$ is irrational`], R`Proof`,
  R`Assume $\sqrt2 = \frac{a}{b}$ with $a, b$ integers having no common factor. Squaring, $a^2 = 2b^2$, so $a^2$ is even and therefore $a$ is even. Write $a = 2k$: then $4k^2 = 2b^2$, so $b^2 = 2k^2$ and $b$ is even. So $a$ and $b$ have a common factor $2$, contradicting the assumption. Hence $\sqrt2$ is irrational.`),
Q('2P1.1-9', 3, R`Given that if $n^2$ is a multiple of $3$ then $n$ is a multiple of $3$, prove that $\sqrt3$ is irrational. [[5]]`,
  [R`Follow the $\sqrt2$ proof with $3$ in place of $2$.`, R`$a^2 = 3b^2$.`],
  [R`|B1|Assume $\sqrt3 = \frac{a}{b}$ in lowest terms`, R`|M1|$a^2 = 3b^2$, so $3$ divides $a$`, R`|M1|$a = 3k$ gives $b^2 = 3k^2$`, R`|M1|So $3$ divides $b$`, R`|A1|Common factor $3$: contradiction`], R`Proof`,
  R`Assume $\sqrt3 = \frac{a}{b}$ with no common factors. Then $a^2 = 3b^2$, so $3$ divides $a^2$ and hence $a$. Write $a = 3k$: $9k^2 = 3b^2$, so $b^2 = 3k^2$ and $3$ divides $b$. So $a$ and $b$ share the factor $3$: a contradiction. Hence $\sqrt3$ is irrational.`),
Q('2P1.1-10', 3, R`Prove by contradiction that there are infinitely many prime numbers. [[4]]`,
  [R`Assume there are finitely many: $p_1, \dots, p_n$.`, R`Consider $N = p_1p_2\cdots p_n + 1$.`],
  [R`|B1|Assume finitely many primes $p_1, \dots, p_n$`, R`|M1|Let $N = p_1 p_2 \cdots p_n + 1$`, R`|M1|No $p_i$ divides $N$ (remainder $1$)`, R`|A1|So $N$ is prime or has a prime factor not in the list: contradiction`], R`Proof`,
  R`Assume there are only finitely many primes $p_1, \dots, p_n$. Let $N = p_1p_2\cdots p_n + 1$. Dividing $N$ by any $p_i$ leaves remainder $1$, so none of them is a factor of $N$. So $N$ is either prime itself or has a prime factor not in the list. Either way there is a prime not in the list: a contradiction.`),
Q('2P1.1-11', 3, R`Prove that there are no integers $a$ and $b$ for which $a^2 - 4b = 2$. [[4]]`,
  [R`Assume there are, and consider $a$ even and $a$ odd.`, R`$a^2 - 4b$ is either a multiple of $4$ or odd.`],
  [R`|B1|Assume integers $a, b$ exist`, R`|M1|$a$ even: $a^2 - 4b = 4k^2 - 4b$, a multiple of $4$, not $2$`, R`|M1|$a$ odd: $a^2$ is odd, so $a^2 - 4b$ is odd, not $2$`, R`|A1|Both cases give a contradiction`], R`Proof`,
  R`Assume integers $a, b$ satisfy $a^2 - 4b = 2$. If $a = 2k$, then $a^2 - 4b = 4(k^2 - b)$, a multiple of $4$, so it can't be $2$. If $a$ is odd, $a^2$ is odd and so $a^2 - 4b$ is odd, so it can't be $2$. Both cases contradict the assumption.`),
Q('2P1.1-12', 4, R`Prove by contradiction that for all real $x > 0$, $x + \frac1x \ge 2$. [[4]]`,
  [R`Assume $x + \frac1x < 2$ for some $x > 0$.`, R`Multiply by $x$ (positive) and rearrange.`],
  [R`|B1|Assume some $x > 0$ has $x + \frac1x < 2$`, R`|M1|Multiply by $x > 0$: $x^2 + 1 < 2x$`, R`|M1|$(x - 1)^2 < 0$`, R`|A1|Impossible since a square is never negative: contradiction`], R`Proof`,
  R`Assume there is an $x > 0$ with $x + \frac1x < 2$. Multiplying by $x > 0$ keeps the inequality: $x^2 + 1 < 2x$, so $(x - 1)^2 < 0$. A real square can't be negative, which is a contradiction. So $x + \frac1x \ge 2$ for all $x > 0$.`),
Q('2P1.1-13', 4, R`Prove that the product of a non-zero rational number and an irrational number is irrational. [[4]]`,
  [R`Let $q = \frac{a}{b} \ne 0$ and $x$ irrational, and assume $qx$ is rational.`, R`Then $x = \frac{qx}{q}$.`],
  [R`|B1|Assume $qx = \frac{c}{d}$ is rational, with $q = \frac{a}{b}$, $a \ne 0$`, R`|M1|$x = \frac{c}{d} \times \frac{b}{a} = \frac{bc}{ad}$`, R`|M1|$bc$ and $ad$ are integers with $ad \ne 0$`, R`|A1|So $x$ is rational: contradiction`], R`Proof`,
  R`Let $q = \frac{a}{b}$ with $a, b$ non-zero integers, and let $x$ be irrational. Assume $qx = \frac{c}{d}$ is rational. Then $x = \frac{c}{d} \cdot \frac{b}{a} = \frac{bc}{ad}$, a ratio of integers with $ad \ne 0$, so $x$ is rational. This contradicts $x$ being irrational.`),
Q('2P1.1-14', 4, R`Prove by contradiction that $\log_2 3$ is irrational. [[4]]`,
  [R`Assume $\log_2 3 = \frac{a}{b}$ with $a, b$ positive integers.`, R`Then $2^a = 3^b$.`],
  [R`|B1|Assume $\log_2 3 = \frac{a}{b}$, $a, b$ positive integers`, R`|M1|$3 = 2^{a/b}$, so $3^b = 2^a$`, R`|M1|$3^b$ is odd but $2^a$ is even (as $a \ge 1$)`, R`|A1|Contradiction, so $\log_2 3$ is irrational`], R`Proof`,
  R`$\log_2 3 > 0$, so assume $\log_2 3 = \frac{a}{b}$ with $a, b$ positive integers. Then $2^{a/b} = 3$, so $2^a = 3^b$. But $2^a$ is even and $3^b$ is odd, a contradiction. Hence $\log_2 3$ is irrational.`),
Q('2P1.1-15', 5, R`Prove by contradiction that there are no positive integers $x$ and $y$ such that $x^2 - y^2 = 1$. [[5]]`,
  [R`Factorise the difference of two squares.`, R`Two positive integers multiply to $1$ only if both are $1$.`],
  [R`|B1|Assume positive integers $x, y$ exist`, R`|M1|$(x - y)(x + y) = 1$`, R`|M1|$x + y$ is a positive integer, so $x + y = 1$ and $x - y = 1$`, R`|M1|Solving gives $x = 1$, $y = 0$`, R`|A1|$y = 0$ isn't positive: contradiction`], R`Proof`,
  R`Assume positive integers $x, y$ satisfy $x^2 - y^2 = 1$. Then $(x - y)(x + y) = 1$. Since $x + y$ is a positive integer, $x + y = 1$ and $x - y = 1$. Adding, $x = 1$ and so $y = 0$, which is not positive. This contradiction shows no such integers exist.`)
]};

CONTENT['2P1.2'] = {
notes: R`
### Working with algebraic fractions
Algebraic fractions follow the same rules as number fractions.
- **Simplify:** factorise the numerator and denominator fully, then cancel **common factors** (not terms).
- **Multiply:** factorise, cancel, then multiply across.
- **Divide:** multiply by the reciprocal of the second fraction.
- **Add or subtract:** use a common denominator, ideally the lowest one.

::: booklet
**Learn these:** factorise first, and cancel only whole factors. These rules aren't in the formula booklet.
:::

### Worked example 1
Simplify $\dfrac{x^2 + 5x + 6}{x^2 - 4}$.
$$\frac{(x + 2)(x + 3)}{(x + 2)(x - 2)} = \frac{x + 3}{x - 2}$$

### Worked example 2: cancel factors, not terms
Simplify $\dfrac{2x^2 + 6x}{4x}$.
$$\frac{2x(x + 3)}{4x} = \frac{x + 3}{2}$$

**The trap:** cancelling the $x$ from "$6x$" with the $x$ in "$4x$" to get $\frac{2x^2 + 6}{4}$. You can only cancel a factor of the **whole** numerator and the **whole** denominator.

### Watch out
- When solving an equation with fractions, multiply through by the common denominator and check your answers don't make any denominator zero.
`,
questions: [
Q('2P1.2-1', 1, R`Simplify $\dfrac{x^2 - 9}{x + 3}$. [[1]]`,
  [R`Difference of two squares.`, R`$(x - 3)(x + 3)$.`],
  [R`|B1|$x - 3$`], R`$x - 3$`,
  R`$\frac{(x - 3)(x + 3)}{x + 3} = x - 3$.`),
Q('2P1.2-2', 1, R`Simplify $\dfrac{2x^2 + 6x}{4x}$. [[1]]`,
  [R`Factorise the numerator.`, R`$2x(x + 3)$.`],
  [R`|B1|$\frac{x + 3}{2}$`], R`$\frac{x + 3}{2}$`,
  R`$\frac{2x(x + 3)}{4x} = \frac{x + 3}{2}$.`),
Q('2P1.2-3', 1, R`Simplify $\dfrac{3}{x} \times \dfrac{x^2}{6}$. [[1]]`,
  [R`Multiply across.`, R`$\frac{3x^2}{6x}$.`],
  [R`|B1|$\frac{x}{2}$`], R`$\frac{x}{2}$`,
  R`$\frac{3x^2}{6x} = \frac{x}{2}$.`),
Q('2P1.2-4', 2, R`Simplify $\dfrac{x^2 + 5x + 6}{x^2 - 4}$. [[2]]`,
  [R`Factorise both.`, R`$(x + 2)$ is common.`],
  [R`|M1|$\frac{(x + 2)(x + 3)}{(x + 2)(x - 2)}$`, R`|A1|$\frac{x + 3}{x - 2}$`], R`$\frac{x + 3}{x - 2}$`,
  R`$\frac{(x + 2)(x + 3)}{(x + 2)(x - 2)} = \frac{x + 3}{x - 2}$.`),
Q('2P1.2-5', 2, R`Write $\dfrac{1}{x + 1} + \dfrac{2}{x - 1}$ as a single fraction. [[2]]`,
  [R`Common denominator $(x + 1)(x - 1)$.`, R`$(x - 1) + 2(x + 1)$.`],
  [R`|M1|$\frac{(x - 1) + 2(x + 1)}{(x + 1)(x - 1)}$`, R`|A1|$\frac{3x + 1}{(x + 1)(x - 1)}$`], R`$\frac{3x + 1}{(x + 1)(x - 1)}$`,
  R`$\frac{x - 1 + 2x + 2}{(x + 1)(x - 1)} = \frac{3x + 1}{(x + 1)(x - 1)}$.`),
Q('2P1.2-6', 2, R`Simplify $\dfrac{x^2 - 1}{x + 2} \div \dfrac{x + 1}{x^2 + 2x}$. [[3]]`,
  [R`Multiply by the reciprocal.`, R`Factorise: $(x - 1)(x + 1)$ and $x(x + 2)$.`],
  [R`|M1|$\frac{x^2 - 1}{x + 2} \times \frac{x^2 + 2x}{x + 1}$`, R`|M1|$\frac{(x - 1)(x + 1)}{x + 2} \times \frac{x(x + 2)}{x + 1}$`, R`|A1|$x(x - 1)$`], R`$x(x - 1)$`,
  R`$\frac{(x - 1)(x + 1)}{x + 2} \times \frac{x(x + 2)}{x + 1} = x(x - 1)$.`),
Q('2P1.2-7', 2, R`Write $\dfrac{3}{x - 2} - \dfrac{1}{x}$ as a single fraction. [[2]]`,
  [R`Common denominator $x(x - 2)$.`, R`$3x - (x - 2)$.`],
  [R`|M1|$\frac{3x - (x - 2)}{x(x - 2)}$`, R`|A1|$\frac{2x + 2}{x(x - 2)}$`], R`$\frac{2(x + 1)}{x(x - 2)}$`,
  R`$\frac{3x - x + 2}{x(x - 2)} = \frac{2x + 2}{x(x - 2)} = \frac{2(x + 1)}{x(x - 2)}$.`),
Q('2P1.2-8', 3, R`Simplify $\dfrac{2x^2 - x - 3}{x^2 - 1}$. [[3]]`,
  [R`$2x^2 - x - 3 = (2x - 3)(x + 1)$.`, R`$x^2 - 1 = (x - 1)(x + 1)$.`],
  [R`|M1|$(2x - 3)(x + 1)$`, R`|M1|$(x - 1)(x + 1)$`, R`|A1|$\frac{2x - 3}{x - 1}$`], R`$\frac{2x - 3}{x - 1}$`,
  R`$\frac{(2x - 3)(x + 1)}{(x - 1)(x + 1)} = \frac{2x - 3}{x - 1}$.`),
Q('2P1.2-9', 3, R`Write $\dfrac{x}{x + 2} + \dfrac{4}{x^2 - 4}$ as a single fraction in its simplest form. [[3]]`,
  [R`$x^2 - 4 = (x + 2)(x - 2)$.`, R`Multiply the first fraction by $\frac{x - 2}{x - 2}$.`],
  [R`|M1|Common denominator $(x + 2)(x - 2)$`, R`|M1|$\frac{x(x - 2) + 4}{(x + 2)(x - 2)}$`, R`|A1|$\frac{x^2 - 2x + 4}{(x + 2)(x - 2)}$`], R`$\frac{x^2 - 2x + 4}{x^2 - 4}$`,
  R`$\frac{x(x - 2) + 4}{(x + 2)(x - 2)} = \frac{x^2 - 2x + 4}{x^2 - 4}$. The numerator has no real factors, so this is the simplest form.`),
Q('2P1.2-10', 3, R`Solve $\dfrac{2}{x + 1} + \dfrac{1}{x - 2} = 1$. [[4]]`,
  [R`Multiply through by $(x + 1)(x - 2)$.`, R`You get a quadratic.`],
  [R`|M1|$2(x - 2) + (x + 1) = (x + 1)(x - 2)$`, R`|A1|$x^2 - 4x + 1 = 0$`, R`|M1|Quadratic formula`, R`|A1|$x = 2 \pm \sqrt3$`], R`$x = 2 \pm \sqrt3$`,
  R`$3x - 3 = x^2 - x - 2$, so $x^2 - 4x + 1 = 0$ and $x = 2 \pm \sqrt3$. Neither makes a denominator zero.`),
Q('2P1.2-11', 3, R`Simplify $\dfrac{x^3 - 8}{x^2 - 4}$. [[3]]`,
  [R`$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.`, R`Cancel $(x - 2)$.`],
  [R`|M1|$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$`, R`|M1|$x^2 - 4 = (x - 2)(x + 2)$`, R`|A1|$\frac{x^2 + 2x + 4}{x + 2}$`], R`$\frac{x^2 + 2x + 4}{x + 2}$`,
  R`$x = 2$ is a root of $x^3 - 8$, so $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$. Cancelling $(x - 2)$ gives $\frac{x^2 + 2x + 4}{x + 2}$.`),
Q('2P1.2-12', 4, R`Show that $\dfrac{x + 4}{x^2 - x - 2} - \dfrac{2}{x - 2} = -\dfrac{1}{x + 1}$. [[4]]`,
  [R`$x^2 - x - 2 = (x - 2)(x + 1)$.`, R`Common denominator $(x - 2)(x + 1)$.`],
  [R`|M1|$x^2 - x - 2 = (x - 2)(x + 1)$`, R`|M1|$\frac{x + 4 - 2(x + 1)}{(x - 2)(x + 1)}$`, R`|A1|$\frac{2 - x}{(x - 2)(x + 1)}$`, R`|A1|$= -\frac{1}{x + 1}$`], R`Shown`,
  R`$\frac{x + 4 - 2x - 2}{(x - 2)(x + 1)} = \frac{2 - x}{(x - 2)(x + 1)} = \frac{-(x - 2)}{(x - 2)(x + 1)} = -\frac{1}{x + 1}$.`),
Q('2P1.2-13', 4, R`Given $f(x) = 1 - \dfrac{3}{x + 2} + \dfrac{3}{(x + 2)^2}$, show that $f(x) = \dfrac{x^2 + x + 1}{(x + 2)^2}$. [[4]]`,
  [R`Common denominator $(x + 2)^2$.`, R`$(x + 2)^2 - 3(x + 2) + 3$.`],
  [R`|M1|Common denominator $(x + 2)^2$`, R`|M1|$\frac{(x + 2)^2 - 3(x + 2) + 3}{(x + 2)^2}$`, R`|M1|Expands $x^2 + 4x + 4 - 3x - 6 + 3$`, R`|A1|$\frac{x^2 + x + 1}{(x + 2)^2}$`], R`Shown`,
  R`$f(x) = \frac{(x + 2)^2 - 3(x + 2) + 3}{(x + 2)^2} = \frac{x^2 + 4x + 4 - 3x - 6 + 3}{(x + 2)^2} = \frac{x^2 + x + 1}{(x + 2)^2}$.`),
Q('2P1.2-14', 4, R`Simplify $\dfrac{\frac1x - \frac1y}{x - y}$. [[3]]`,
  [R`Write the top as one fraction.`, R`$\frac{y - x}{xy}$.`],
  [R`|M1|$\frac1x - \frac1y = \frac{y - x}{xy}$`, R`|M1|$\frac{y - x}{xy(x - y)}$`, R`|A1|$-\frac{1}{xy}$`], R`$-\frac{1}{xy}$`,
  R`$\frac{y - x}{xy} \div (x - y) = \frac{-(x - y)}{xy(x - y)} = -\frac{1}{xy}$.`),
Q('2P1.2-15', 5, R`$f(x) = \dfrac{4x^2 - 9}{2x^2 + x - 3}$. **(a)** Express $f(x)$ in its simplest form. **(b)** Hence solve $f(x) = 3$. [[5]]`,
  [R`$4x^2 - 9 = (2x - 3)(2x + 3)$ and $2x^2 + x - 3 = (2x + 3)(x - 1)$.`, R`Then $2x - 3 = 3(x - 1)$.`],
  [R`(a)|M1|$(2x - 3)(2x + 3)$`, R`(a)|M1|$(2x + 3)(x - 1)$`, R`(a)|A1|$\frac{2x - 3}{x - 1}$`, R`(b)|M1|$2x - 3 = 3(x - 1)$`, R`(b)|A1|$x = 0$`], R`(a) $\frac{2x - 3}{x - 1}$ (b) $x = 0$`,
  R`**(a)** $\frac{(2x - 3)(2x + 3)}{(2x + 3)(x - 1)} = \frac{2x - 3}{x - 1}$.
**(b)** $2x - 3 = 3x - 3$ gives $x = 0$, which is allowed ($x \ne 1, -\frac32$).`)
]};

CONTENT['2P1.3'] = {
notes: R`
### Partial fractions
A fraction with a product of **distinct linear factors** in the denominator can be split into separate fractions:
$$\frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$$
1. Write the identity $px + q \equiv A(x - b) + B(x - a)$.
2. **Substitute** values of $x$ that make a bracket zero, to find $A$ and $B$. (Or compare coefficients.)

Three factors work the same way, with $A$, $B$ and $C$.

::: booklet
**Learn this method.** Partial fractions are used later for integration and binomial expansions.
:::

### Worked example 1
Express $\dfrac{5}{(x + 1)(x - 4)}$ in partial fractions.
- $5 \equiv A(x - 4) + B(x + 1)$.
- $x = 4$: $5 = 5B$, so $B = 1$. $x = -1$: $5 = -5A$, so $A = -1$.
- $\dfrac{5}{(x + 1)(x - 4)} = -\dfrac{1}{x + 1} + \dfrac{1}{x - 4}$.

### Worked example 2: a factor like $2x - 1$
Express $\dfrac{7x}{(2x - 1)(x + 3)}$ in partial fractions.
- $7x \equiv A(x + 3) + B(2x - 1)$.
- $x = \frac12$: $3.5 = 3.5A$, so $A = 1$. $x = -3$: $-21 = -7B$, so $B = 3$.
- $\dfrac{1}{2x - 1} + \dfrac{3}{x + 3}$.

**The trap:** substituting $x = 1$ (instead of $x = \frac12$) to "clear" $2x - 1$. Choose the value that makes the bracket **zero**.

### Watch out
- Check your answer by recombining, or by substituting a value such as $x = 0$ into both sides.
`,
questions: [
Q('2P1.3-1', 1, R`Express $\dfrac{5}{(x + 1)(x - 4)}$ in partial fractions. [[2]]`,
  [R`$5 \equiv A(x - 4) + B(x + 1)$.`, R`Substitute $x = 4$ and $x = -1$.`],
  [R`|M1|$5 \equiv A(x - 4) + B(x + 1)$ and substitutes`, R`|A1|$-\frac{1}{x + 1} + \frac{1}{x - 4}$`], R`$-\frac{1}{x + 1} + \frac{1}{x - 4}$`,
  R`$x = 4$: $B = 1$. $x = -1$: $5 = -5A$, so $A = -1$.`),
Q('2P1.3-2', 1, R`Express $\dfrac{3x + 1}{(x - 1)(x + 1)}$ in partial fractions. [[2]]`,
  [R`$3x + 1 \equiv A(x + 1) + B(x - 1)$.`, R`$x = 1$ and $x = -1$.`],
  [R`|M1|Substitutes $x = 1$ and $x = -1$`, R`|A1|$\frac{2}{x - 1} + \frac{1}{x + 1}$`], R`$\frac{2}{x - 1} + \frac{1}{x + 1}$`,
  R`$x = 1$: $4 = 2A$, $A = 2$. $x = -1$: $-2 = -2B$, $B = 1$.`),
Q('2P1.3-3', 1, R`Express $\dfrac{x + 7}{(x + 1)(x + 3)}$ in partial fractions. [[2]]`,
  [R`$x + 7 \equiv A(x + 3) + B(x + 1)$.`, R`$x = -1$ and $x = -3$.`],
  [R`|M1|Substitutes $x = -1$ and $x = -3$`, R`|A1|$\frac{3}{x + 1} - \frac{2}{x + 3}$`], R`$\frac{3}{x + 1} - \frac{2}{x + 3}$`,
  R`$x = -1$: $6 = 2A$, $A = 3$. $x = -3$: $4 = -2B$, $B = -2$.`),
Q('2P1.3-4', 2, R`Express $\dfrac{6x - 4}{x^2 - 4}$ in partial fractions. [[3]]`,
  [R`$x^2 - 4 = (x - 2)(x + 2)$.`, R`$6x - 4 \equiv A(x + 2) + B(x - 2)$.`],
  [R`|B1|$(x - 2)(x + 2)$`, R`|M1|Substitutes $x = 2$ and $x = -2$`, R`|A1|$\frac{2}{x - 2} + \frac{4}{x + 2}$`], R`$\frac{2}{x - 2} + \frac{4}{x + 2}$`,
  R`$x = 2$: $8 = 4A$, $A = 2$. $x = -2$: $-16 = -4B$, $B = 4$.`),
Q('2P1.3-5', 2, R`Express $\dfrac{7x}{(2x - 1)(x + 3)}$ in partial fractions. [[3]]`,
  [R`$7x \equiv A(x + 3) + B(2x - 1)$.`, R`Use $x = \frac12$ and $x = -3$.`],
  [R`|M1|$7x \equiv A(x + 3) + B(2x - 1)$`, R`|M1|Substitutes $x = \frac12$ and $x = -3$`, R`|A1|$\frac{1}{2x - 1} + \frac{3}{x + 3}$`], R`$\frac{1}{2x - 1} + \frac{3}{x + 3}$`,
  R`$x = \frac12$: $3.5 = 3.5A$, $A = 1$. $x = -3$: $-21 = -7B$, $B = 3$.`),
Q('2P1.3-6', 2, R`Express $\dfrac{4}{x(x - 2)(x + 2)}$ in partial fractions. [[4]]`,
  [R`$4 \equiv A(x - 2)(x + 2) + Bx(x + 2) + Cx(x - 2)$.`, R`Use $x = 0, 2, -2$.`],
  [R`|M1|Correct identity`, R`|A1|$A = -1$`, R`|A1|$B = \frac12$`, R`|A1|$C = \frac12$`], R`$-\frac1x + \frac{1}{2(x - 2)} + \frac{1}{2(x + 2)}$`,
  R`$x = 0$: $4 = -4A$, $A = -1$. $x = 2$: $4 = 8B$, $B = \frac12$. $x = -2$: $4 = 8C$, $C = \frac12$.`),
Q('2P1.3-7', 2, R`Express $\dfrac{5x + 1}{(x - 1)(x + 2)}$ in partial fractions. [[2]]`,
  [R`$5x + 1 \equiv A(x + 2) + B(x - 1)$.`, R`$x = 1$ and $x = -2$.`],
  [R`|M1|Substitutes $x = 1$ and $x = -2$`, R`|A1|$\frac{2}{x - 1} + \frac{3}{x + 2}$`], R`$\frac{2}{x - 1} + \frac{3}{x + 2}$`,
  R`$x = 1$: $6 = 3A$, $A = 2$. $x = -2$: $-9 = -3B$, $B = 3$.`),
Q('2P1.3-8', 3, R`Express $\dfrac{3x^2 + 2x - 2}{x(x - 1)(x + 2)}$ in partial fractions. [[4]]`,
  [R`$3x^2 + 2x - 2 \equiv A(x - 1)(x + 2) + Bx(x + 2) + Cx(x - 1)$.`, R`Use $x = 0, 1, -2$.`],
  [R`|M1|Correct identity`, R`|A1|$A = 1$`, R`|A1|$B = 1$`, R`|A1|$C = 1$`], R`$\frac1x + \frac{1}{x - 1} + \frac{1}{x + 2}$`,
  R`$x = 0$: $-2 = -2A$, $A = 1$. $x = 1$: $3 = 3B$, $B = 1$. $x = -2$: $6 = 6C$, $C = 1$.`),
Q('2P1.3-9', 3, R`Show that $\dfrac{2}{r(r + 2)} \equiv \dfrac1r - \dfrac{1}{r + 2}$. [[2]]`,
  [R`Find $A$ and $B$, or recombine the right-hand side.`, R`$\frac{(r + 2) - r}{r(r + 2)}$.`],
  [R`|M1|$\frac{(r + 2) - r}{r(r + 2)}$`, R`|A1|$= \frac{2}{r(r + 2)}$`], R`Shown`,
  R`$\frac1r - \frac{1}{r + 2} = \frac{(r + 2) - r}{r(r + 2)} = \frac{2}{r(r + 2)}$.`),
Q('2P1.3-10', 3, R`Express $\dfrac{x + 13}{x^2 + x - 6}$ in partial fractions. [[3]]`,
  [R`$x^2 + x - 6 = (x + 3)(x - 2)$.`, R`$x + 13 \equiv A(x - 2) + B(x + 3)$.`],
  [R`|B1|$(x + 3)(x - 2)$`, R`|M1|Substitutes $x = 2$ and $x = -3$`, R`|A1|$-\frac{2}{x + 3} + \frac{3}{x - 2}$`], R`$\frac{3}{x - 2} - \frac{2}{x + 3}$`,
  R`$x = 2$: $15 = 5B$, $B = 3$. $x = -3$: $10 = -5A$, $A = -2$.`),
Q('2P1.3-11', 3, R`$\dfrac{ax + b}{(x + 1)(x - 2)} \equiv \dfrac{3}{x + 1} + \dfrac{2}{x - 2}$. Find $a$ and $b$. [[2]]`,
  [R`Recombine the right-hand side.`, R`$3(x - 2) + 2(x + 1)$.`],
  [R`|M1|$3(x - 2) + 2(x + 1)$`, R`|A1|$a = 5$, $b = -4$`], R`$a = 5$, $b = -4$`,
  R`$3(x - 2) + 2(x + 1) = 5x - 4$, so $a = 5$ and $b = -4$.`),
Q('2P1.3-12', 4, R`$f(x) = \dfrac{4x + 5}{(2x + 1)(x + 2)}$. **(a)** Express $f(x)$ in partial fractions. **(b)** Hence, or otherwise, solve $f(x) = 1$. [[5]]`,
  [R`Use $x = -\frac12$ and $x = -2$.`, R`For (b), multiply out: $4x + 5 = (2x + 1)(x + 2)$.`],
  [R`(a)|M1|$4x + 5 \equiv A(x + 2) + B(2x + 1)$`, R`(a)|A1|$A = 2$`, R`(a)|A1|$B = 1$`, R`(b)|M1|$2x^2 + x - 3 = 0$`, R`(b)|A1|$x = 1$ or $x = -\frac32$`], R`(a) $\frac{2}{2x + 1} + \frac{1}{x + 2}$ (b) $x = 1, -\frac32$`,
  R`**(a)** $x = -\frac12$: $3 = 1.5A$, $A = 2$. $x = -2$: $-3 = -3B$, $B = 1$.
**(b)** $4x + 5 = 2x^2 + 5x + 2$, so $2x^2 + x - 3 = (2x + 3)(x - 1) = 0$: $x = 1$ or $x = -\frac32$.`),
Q('2P1.3-13', 4, R`Express $\dfrac{4x^2 + 4x + 8}{(x + 1)(x - 1)(x + 3)}$ in partial fractions. [[4]]`,
  [R`Use $x = -1$, $1$ and $-3$.`, R`$4x^2 + 4x + 8 \equiv A(x - 1)(x + 3) + B(x + 1)(x + 3) + C(x + 1)(x - 1)$.`],
  [R`|M1|Correct identity`, R`|A1|$A = -2$`, R`|A1|$B = 2$`, R`|A1|$C = 4$`], R`$-\frac{2}{x + 1} + \frac{2}{x - 1} + \frac{4}{x + 3}$`,
  R`$x = -1$: $8 = -4A$, $A = -2$. $x = 1$: $16 = 8B$, $B = 2$. $x = -3$: $32 = 8C$, $C = 4$.`),
Q('2P1.3-14', 4, R`Express $\dfrac{2}{r(r + 2)}$ in partial fractions, and hence evaluate $\dfrac{2}{1 \times 3} + \dfrac{2}{2 \times 4} + \dfrac{2}{3 \times 5} + \dfrac{2}{4 \times 6}$. [[3]]`,
  [R`$\frac1r - \frac{1}{r + 2}$.`, R`Most terms cancel.`],
  [R`|B1|$\frac1r - \frac{1}{r + 2}$`, R`|M1|$1 + \frac12 - \frac15 - \frac16$`, R`|A1|$\frac{17}{15}$`], R`$\frac{17}{15}$`,
  R`The sum is $\left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \left(\frac13 - \frac15\right) + \left(\frac14 - \frac16\right) = 1 + \frac12 - \frac15 - \frac16 = \frac{17}{15}$.`),
Q('2P1.3-15', 5, R`**(a)** Express $\dfrac{2}{r(r + 2)}$ in partial fractions. **(b)** Show that $\displaystyle\sum_{r=1}^{n} \frac{2}{r(r + 2)} = \frac32 - \frac{1}{n + 1} - \frac{1}{n + 2}$. **(c)** Hence find the sum for $n = 10$ as a fraction. [[6]]`,
  [R`Write out the first few and last few terms.`, R`Only $1$, $\frac12$, $-\frac{1}{n + 1}$ and $-\frac{1}{n + 2}$ survive.`],
  [R`(a)|B1|$\frac1r - \frac{1}{r + 2}$`, R`(b)|M1|Writes terms $\left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \dots$`, R`(b)|M1|Identifies cancelling`, R`(b)|A1|$1 + \frac12 - \frac{1}{n + 1} - \frac{1}{n + 2}$`, R`(c)|M1|$\frac32 - \frac{1}{11} - \frac{1}{12}$`, R`(c)|A1|$\frac{175}{132}$`], R`(c) $\frac{175}{132}$`,
  R`**(a)** $\frac1r - \frac{1}{r + 2}$.
**(b)** The sum is $\left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \left(\frac13 - \frac15\right) + \cdots + \left(\frac1{n - 1} - \frac{1}{n + 1}\right) + \left(\frac1n - \frac{1}{n + 2}\right)$. Every $-\frac1k$ cancels with a later $+\frac1k$ except the last two, leaving $1 + \frac12 - \frac{1}{n + 1} - \frac{1}{n + 2}$.
**(c)** $\frac32 - \frac{1}{11} - \frac{1}{12} = \frac{198 - 12 - 11}{132} = \frac{175}{132}$.`)
]};

CONTENT['2P1.4'] = {
notes: R`
### Repeated linear factors
If the denominator has a **repeated** factor $(x - a)^2$, include a term for each power:
$$\frac{px^2 + qx + r}{(x - a)^2(x - b)} \equiv \frac{A}{x - a} + \frac{B}{(x - a)^2} + \frac{C}{x - b}$$
- Substitute $x = a$ and $x = b$ to find $B$ and $C$.
- Then **compare coefficients** (often of $x^2$) or substitute another value, such as $x = 0$, to find $A$.

::: booklet
**Learn this form.** A repeated factor needs two fractions: one over $(x - a)$ and one over $(x - a)^2$.
:::

### Worked example 1
Express $\dfrac{1}{x(x + 1)^2}$ in partial fractions.
- $1 \equiv A(x + 1)^2 + Bx(x + 1) + Cx$.
- $x = 0$: $A = 1$. $x = -1$: $1 = -C$, so $C = -1$.
- $x^2$ terms: $0 = A + B$, so $B = -1$.
- $\dfrac1x - \dfrac{1}{x + 1} - \dfrac{1}{(x + 1)^2}$.

### Worked example 2: missing a term
A student writes $\dfrac{9}{(x - 1)(x + 2)^2} \equiv \dfrac{A}{x - 1} + \dfrac{B}{(x + 2)^2}$.

**The trap:** leaving out the $\dfrac{C}{x + 2}$ term. With only two constants the identity can't hold for every $x$. The correct answer is $\dfrac{1}{x - 1} - \dfrac{1}{x + 2} - \dfrac{3}{(x + 2)^2}$.

### Watch out
- Multiply each term by exactly what's needed to make the common denominator.
`,
questions: [
Q('2P1.4-1', 1, R`Express $\dfrac{x + 3}{(x + 1)^2}$ in partial fractions. [[2]]`,
  [R`$x + 3 \equiv A(x + 1) + B$.`, R`$x = -1$ gives $B$.`],
  [R`|M1|$x + 3 \equiv A(x + 1) + B$`, R`|A1|$\frac{1}{x + 1} + \frac{2}{(x + 1)^2}$`], R`$\frac{1}{x + 1} + \frac{2}{(x + 1)^2}$`,
  R`Comparing $x$ terms: $A = 1$. $x = -1$: $B = 2$.`),
Q('2P1.4-2', 1, R`Write down the form of the partial fractions of $\dfrac{2x}{(x - 1)^2(x + 2)}$. [[1]]`,
  [R`A repeated factor gives two terms.`, R`Three constants altogether.`],
  [R`|B1|$\frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 2}$`], R`$\frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 2}$`,
  R`The repeated factor $(x - 1)^2$ needs terms over $(x - 1)$ and $(x - 1)^2$, plus one over $(x + 2)$.`),
Q('2P1.4-3', 1, R`Express $\dfrac{3x - 1}{(x - 1)^2}$ in partial fractions. [[2]]`,
  [R`$3x - 1 \equiv A(x - 1) + B$.`, R`$A = 3$.`],
  [R`|M1|$3x - 1 \equiv A(x - 1) + B$`, R`|A1|$\frac{3}{x - 1} + \frac{2}{(x - 1)^2}$`], R`$\frac{3}{x - 1} + \frac{2}{(x - 1)^2}$`,
  R`Comparing $x$ terms, $A = 3$. $x = 1$: $B = 2$.`),
Q('2P1.4-4', 2, R`Express $\dfrac{1}{x(x + 1)^2}$ in partial fractions. [[3]]`,
  [R`$1 \equiv A(x + 1)^2 + Bx(x + 1) + Cx$.`, R`Compare $x^2$ terms for $B$.`],
  [R`|M1|Correct identity`, R`|A1|$A = 1$, $C = -1$`, R`|A1|$B = -1$`], R`$\frac1x - \frac{1}{x + 1} - \frac{1}{(x + 1)^2}$`,
  R`$x = 0$: $A = 1$. $x = -1$: $C = -1$. $x^2$: $0 = A + B$, so $B = -1$.`),
Q('2P1.4-5', 2, R`Express $\dfrac{x^2 + 1}{x(x - 1)^2}$ in partial fractions. [[3]]`,
  [R`$x^2 + 1 \equiv A(x - 1)^2 + Bx(x - 1) + Cx$.`, R`$x = 0$ and $x = 1$ first.`],
  [R`|M1|Correct identity`, R`|A1|$A = 1$, $C = 2$`, R`|A1|$B = 0$`], R`$\frac1x + \frac{2}{(x - 1)^2}$`,
  R`$x = 0$: $A = 1$. $x = 1$: $C = 2$. $x^2$: $1 = A + B$, so $B = 0$. So the fraction is $\frac1x + \frac{2}{(x - 1)^2}$.`),
Q('2P1.4-6', 2, R`Express $\dfrac{2x + 5}{(x + 2)^2}$ in partial fractions. [[2]]`,
  [R`$2x + 5 \equiv A(x + 2) + B$.`, R`$A = 2$.`],
  [R`|M1|$2x + 5 \equiv A(x + 2) + B$`, R`|A1|$\frac{2}{x + 2} + \frac{1}{(x + 2)^2}$`], R`$\frac{2}{x + 2} + \frac{1}{(x + 2)^2}$`,
  R`$A = 2$, then $x = -2$: $B = 1$.`),
Q('2P1.4-7', 2, R`Express $\dfrac{9}{(x - 1)(x + 2)^2}$ in partial fractions. [[3]]`,
  [R`$9 \equiv A(x + 2)^2 + B(x - 1)(x + 2) + C(x - 1)$.`, R`$x = 1$, $x = -2$, then compare $x^2$.`],
  [R`|M1|Correct identity`, R`|A1|$A = 1$, $C = -3$`, R`|A1|$B = -1$`], R`$\frac{1}{x - 1} - \frac{1}{x + 2} - \frac{3}{(x + 2)^2}$`,
  R`$x = 1$: $9 = 9A$, $A = 1$. $x = -2$: $9 = -3C$, $C = -3$. $x^2$: $0 = A + B$, $B = -1$.`),
Q('2P1.4-8', 3, R`Express $\dfrac{4x^2 + x - 9}{(x + 1)^2(x - 2)}$ in partial fractions. [[4]]`,
  [R`$4x^2 + x - 9 \equiv A(x + 1)(x - 2) + B(x - 2) + C(x + 1)^2$.`, R`$x = 2$ and $x = -1$ first.`],
  [R`|M1|Correct identity`, R`|A1|$C = 1$`, R`|A1|$B = 2$`, R`|A1|$A = 3$`], R`$\frac{3}{x + 1} + \frac{2}{(x + 1)^2} + \frac{1}{x - 2}$`,
  R`$x = 2$: $9 = 9C$, $C = 1$. $x = -1$: $-6 = -3B$, $B = 2$. $x^2$: $4 = A + C$, $A = 3$.`),
Q('2P1.4-9', 3, R`Express $\dfrac{x^2 - 3x - 2}{x^2(x + 1)}$ in partial fractions. [[4]]`,
  [R`$\frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 1}$.`, R`$x = 0$ and $x = -1$, then compare $x^2$.`],
  [R`|M1|$x^2 - 3x - 2 \equiv Ax(x + 1) + B(x + 1) + Cx^2$`, R`|A1|$B = -2$`, R`|A1|$C = 2$`, R`|A1|$A = -1$`], R`$-\frac1x - \frac{2}{x^2} + \frac{2}{x + 1}$`,
  R`$x = 0$: $B = -2$. $x = -1$: $2 = C$. $x^2$: $1 = A + C$, so $A = -1$.`),
Q('2P1.4-10', 3, R`Show that $\dfrac{2x^2 + 3}{x(x + 1)^2} \equiv \dfrac3x - \dfrac{1}{x + 1} - \dfrac{5}{(x + 1)^2}$. [[4]]`,
  [R`Find $A$, $B$, $C$ or recombine.`, R`$x = 0$ gives $A = 3$.`],
  [R`|M1|$2x^2 + 3 \equiv A(x + 1)^2 + Bx(x + 1) + Cx$`, R`|A1|$A = 3$`, R`|A1|$C = -5$`, R`|A1|$B = -1$`], R`Shown`,
  R`$x = 0$: $A = 3$. $x = -1$: $5 = -C$, $C = -5$. $x^2$: $2 = A + B$, $B = -1$. These match.`),
Q('2P1.4-11', 3, R`Express $\dfrac{x + 1}{(2x - 1)^2}$ in partial fractions. [[3]]`,
  [R`$x + 1 \equiv A(2x - 1) + B$.`, R`Compare $x$ terms: $2A = 1$.`],
  [R`|M1|$x + 1 \equiv A(2x - 1) + B$`, R`|A1|$A = \frac12$`, R`|A1|$B = \frac32$`], R`$\frac{1}{2(2x - 1)} + \frac{3}{2(2x - 1)^2}$`,
  R`$2A = 1$ gives $A = \frac12$. $x = \frac12$: $B = \frac32$.`),
Q('2P1.4-12', 4, R`Express $\dfrac{5x + 3}{(x + 1)^2(x + 3)}$ in partial fractions. [[4]]`,
  [R`$5x + 3 \equiv A(x + 1)(x + 3) + B(x + 3) + C(x + 1)^2$.`, R`$x = -3$, $x = -1$, then compare $x^2$.`],
  [R`|M1|Correct identity`, R`|A1|$C = -3$`, R`|A1|$B = -1$`, R`|A1|$A = 3$`], R`$\frac{3}{x + 1} - \frac{1}{(x + 1)^2} - \frac{3}{x + 3}$`,
  R`$x = -3$: $-12 = 4C$, $C = -3$. $x = -1$: $-2 = 2B$, $B = -1$. $x^2$: $0 = A + C$, $A = 3$.`),
Q('2P1.4-13', 4, R`Express $\dfrac{12}{(x + 1)(x - 1)^2}$ in partial fractions, and check your answer by substituting $x = 3$. [[4]]`,
  [R`$12 \equiv A(x - 1)^2 + B(x + 1)(x - 1) + C(x + 1)$.`, R`At $x = 3$ both sides should be $0.75$.`],
  [R`|M1|Correct identity`, R`|A1|$A = 3$, $C = 6$`, R`|A1|$B = -3$`, R`|B1|Check: $\frac34 - \frac32 + \frac64 = 0.75 = \frac{12}{16}$`], R`$\frac{3}{x + 1} - \frac{3}{x - 1} + \frac{6}{(x - 1)^2}$`,
  R`$x = -1$: $12 = 4A$, $A = 3$. $x = 1$: $12 = 2C$, $C = 6$. $x^2$: $0 = A + B$, $B = -3$. Check at $x = 3$: $\frac34 - \frac32 + \frac32 = \frac34 = \frac{12}{4 \times 4}$.`),
Q('2P1.4-14', 4, R`Find the constants $A$, $B$ and $C$ such that $\dfrac{18}{(x - 2)(x + 1)^2} \equiv \dfrac{A}{x - 2} + \dfrac{B}{x + 1} + \dfrac{C}{(x + 1)^2}$. [[4]]`,
  [R`$18 \equiv A(x + 1)^2 + B(x - 2)(x + 1) + C(x - 2)$.`, R`$x = 2$, $x = -1$, then compare $x^2$.`],
  [R`|M1|Correct identity`, R`|A1|$A = 2$`, R`|A1|$C = -6$`, R`|A1|$B = -2$`], R`$A = 2$, $B = -2$, $C = -6$`,
  R`$x = 2$: $18 = 9A$, $A = 2$. $x = -1$: $18 = -3C$, $C = -6$. $x^2$: $0 = A + B$, $B = -2$.`),
Q('2P1.4-15', 5, R`$f(x) = \dfrac{18}{(x - 2)(x + 1)^2}$. **(a)** Express $f(x)$ in partial fractions. **(b)** Use your answer to find $f(5)$, and check it against the original form. **(c)** Find $f(0)$. [[6]]`,
  [R`See question 14.`, R`$f(5) = \frac{18}{3 \times 36}$.`],
  [R`(a)|M1|Correct identity`, R`(a)|A1|$A = 2$, $C = -6$`, R`(a)|A1|$B = -2$`, R`(b)|M1|$\frac23 - \frac26 - \frac{6}{36}$`, R`(b)|A1|$\frac16$, matching $\frac{18}{108}$`, R`(c)|B1|$-9$`], R`(a) $\frac{2}{x - 2} - \frac{2}{x + 1} - \frac{6}{(x + 1)^2}$ (b) $\frac16$ (c) $-9$`,
  R`**(a)** $\frac{2}{x - 2} - \frac{2}{x + 1} - \frac{6}{(x + 1)^2}$.
**(b)** $\frac23 - \frac13 - \frac16 = \frac16$, and $\frac{18}{3 \times 36} = \frac16$.
**(c)** $f(0) = \frac{18}{(-2)(1)} = -9$ (or $-1 - 2 - 6 = -9$).`)
]};

CONTENT['2P1.5'] = {
notes: R`
### Improper fractions
An algebraic fraction is **improper** if the degree of the numerator is **greater than or equal to** the degree of the denominator. Before splitting into partial fractions, divide:
$$\frac{F(x)}{G(x)} = Q(x) + \frac{R(x)}{G(x)}$$
where the remainder $R(x)$ has a lower degree than $G(x)$.

Use algebraic long division, or write $F(x) \equiv Q(x)G(x) + R(x)$ and compare coefficients.

::: booklet
**Learn this:** divide first if the fraction is improper, then use partial fractions on the remainder.
:::

### Worked example 1
Write $\dfrac{x^2 + 3x + 5}{x + 1}$ in the form $Ax + B + \dfrac{C}{x + 1}$.
- $x^2 + 3x + 5 = (x + 1)(x + 2) + 3$.
- So it equals $x + 2 + \dfrac{3}{x + 1}$.

### Worked example 2: equal degrees
Express $\dfrac{3x^2 - x - 2}{x^2 - 1}$ in partial fractions.
- Degrees are equal, so divide: $3x^2 - x - 2 = 3(x^2 - 1) + (1 - x)$.
- $\dfrac{1 - x}{(x - 1)(x + 1)} = -\dfrac{1}{x + 1}$.
- Answer: $3 - \dfrac{1}{x + 1}$.

**The trap:** writing $\dfrac{A}{x - 1} + \dfrac{B}{x + 1}$ straight away. With equal degrees there must be a constant term, so no values of $A$ and $B$ can work.

### Watch out
- Check by multiplying back out.
`,
questions: [
Q('2P1.5-1', 1, R`Write $\dfrac{x^2 + 3x + 5}{x + 1}$ in the form $Ax + B + \dfrac{C}{x + 1}$. [[2]]`,
  [R`Divide $x^2 + 3x + 5$ by $x + 1$.`, R`$(x + 1)(x + 2) = x^2 + 3x + 2$.`],
  [R`|M1|$x^2 + 3x + 5 = (x + 1)(x + 2) + 3$`, R`|A1|$x + 2 + \frac{3}{x + 1}$`], R`$x + 2 + \frac{3}{x + 1}$`,
  R`$(x + 1)(x + 2) = x^2 + 3x + 2$, leaving remainder $3$. So $x + 2 + \frac{3}{x + 1}$.`),
Q('2P1.5-2', 1, R`Write $\dfrac{2x + 7}{x + 2}$ in the form $A + \dfrac{B}{x + 2}$. [[1]]`,
  [R`$2x + 7 = 2(x + 2) + 3$.`, R`Divide each part.`],
  [R`|B1|$2 + \frac{3}{x + 2}$`], R`$2 + \frac{3}{x + 2}$`,
  R`$2x + 7 = 2(x + 2) + 3$, so $\frac{2x + 7}{x + 2} = 2 + \frac{3}{x + 2}$.`),
Q('2P1.5-3', 1, R`Explain why $\dfrac{x^2 + 1}{x^2 - 4}$ is an improper fraction. [[1]]`,
  [R`Compare the degrees.`, R`Both are $2$.`],
  [R`|B1|The numerator's degree ($2$) is not less than the denominator's ($2$)`], R`Degree of numerator ≥ degree of denominator`,
  R`The numerator and denominator both have degree $2$. A fraction is improper when the numerator's degree is greater than or equal to the denominator's.`),
Q('2P1.5-4', 2, R`Divide $x^3 + 2x^2 - x + 3$ by $x - 1$, writing the answer as a quotient plus a remainder over $x - 1$. [[2]]`,
  [R`Long division.`, R`The remainder is $f(1)$.`],
  [R`|M1|Quotient $x^2 + 3x + 2$`, R`|A1|$x^2 + 3x + 2 + \frac{5}{x - 1}$`], R`$x^2 + 3x + 2 + \frac{5}{x - 1}$`,
  R`$(x - 1)(x^2 + 3x + 2) = x^3 + 2x^2 - x - 2$, remainder $5$. So $x^2 + 3x + 2 + \frac{5}{x - 1}$.`),
Q('2P1.5-5', 2, R`Express $\dfrac{x^2 + 4}{x^2 - 1}$ in partial fractions. [[3]]`,
  [R`$x^2 + 4 = (x^2 - 1) + 5$.`, R`Then split $\frac{5}{(x - 1)(x + 1)}$.`],
  [R`|M1|$1 + \frac{5}{x^2 - 1}$`, R`|M1|$5 \equiv A(x + 1) + B(x - 1)$`, R`|A1|$1 + \frac{5}{2(x - 1)} - \frac{5}{2(x + 1)}$`], R`$1 + \frac{5}{2(x - 1)} - \frac{5}{2(x + 1)}$`,
  R`$\frac{x^2 + 4}{x^2 - 1} = 1 + \frac{5}{(x - 1)(x + 1)}$. $x = 1$: $A = \frac52$; $x = -1$: $B = -\frac52$.`),
Q('2P1.5-6', 2, R`Express $\dfrac{3x^2 - x - 2}{x^2 - 1}$ in partial fractions. [[3]]`,
  [R`$3x^2 - x - 2 = 3(x^2 - 1) + (1 - x)$.`, R`$\frac{1 - x}{(x - 1)(x + 1)}$ simplifies.`],
  [R`|M1|$3 + \frac{1 - x}{x^2 - 1}$`, R`|M1|$\frac{-(x - 1)}{(x - 1)(x + 1)}$`, R`|A1|$3 - \frac{1}{x + 1}$`], R`$3 - \frac{1}{x + 1}$`,
  R`$3x^2 - x - 2 = 3(x^2 - 1) + 1 - x$, and $\frac{1 - x}{(x - 1)(x + 1)} = -\frac{1}{x + 1}$, giving $3 - \frac{1}{x + 1}$.`),
Q('2P1.5-7', 2, R`Write $\dfrac{2x^2 + 3x + 4}{x + 1}$ in the form $Ax + B + \dfrac{C}{x + 1}$. [[2]]`,
  [R`$(x + 1)(2x + 1) = 2x^2 + 3x + 1$.`, R`Remainder $3$.`],
  [R`|M1|$(x + 1)(2x + 1) + 3$`, R`|A1|$2x + 1 + \frac{3}{x + 1}$`], R`$2x + 1 + \frac{3}{x + 1}$`,
  R`$2x^2 + 3x + 4 = (x + 1)(2x + 1) + 3$, so $2x + 1 + \frac{3}{x + 1}$.`),
Q('2P1.5-8', 3, R`Express $\dfrac{x^3 - 2x^2 + 4}{x^2 - 1}$ in the form $Ax + B + \dfrac{C}{x - 1} + \dfrac{D}{x + 1}$. [[4]]`,
  [R`$x^3 - 2x^2 + 4 = (x^2 - 1)(x - 2) + (x + 2)$.`, R`Then split $\frac{x + 2}{(x - 1)(x + 1)}$.`],
  [R`|M1|Quotient $x - 2$`, R`|A1|Remainder $x + 2$`, R`|M1|$x + 2 \equiv C(x + 1) + D(x - 1)$`, R`|A1|$x - 2 + \frac{3}{2(x - 1)} - \frac{1}{2(x + 1)}$`], R`$x - 2 + \frac{3}{2(x - 1)} - \frac{1}{2(x + 1)}$`,
  R`$(x^2 - 1)(x - 2) = x^3 - 2x^2 - x + 2$, leaving $x + 2$. $x = 1$: $C = \frac32$. $x = -1$: $D = -\frac12$.`),
Q('2P1.5-9', 3, R`Express $\dfrac{x^2 + 6x + 1}{(x + 2)(x + 3)}$ in partial fractions. [[4]]`,
  [R`The degrees are equal: $x^2 + 6x + 1 = (x^2 + 5x + 6) + (x - 5)$.`, R`Split $\frac{x - 5}{(x + 2)(x + 3)}$.`],
  [R`|M1|$1 + \frac{x - 5}{(x + 2)(x + 3)}$`, R`|M1|$x - 5 \equiv A(x + 3) + B(x + 2)$`, R`|A1|$A = -7$`, R`|A1|$B = 8$`], R`$1 - \frac{7}{x + 2} + \frac{8}{x + 3}$`,
  R`$x^2 + 6x + 1 = (x + 2)(x + 3) + (x - 5)$. $x = -2$: $A = -7$. $x = -3$: $-8 = -B$, $B = 8$.`),
Q('2P1.5-10', 3, R`Given $\dfrac{4x^2 + 5x + 3}{2x^2 + 5x + 2} \equiv A + \dfrac{B}{2x + 1} + \dfrac{C}{x + 2}$, find $A$, $B$ and $C$. [[4]]`,
  [R`$A = 2$, leaving $-5x - 1$.`, R`$2x^2 + 5x + 2 = (2x + 1)(x + 2)$.`],
  [R`|B1|$A = 2$`, R`|M1|Remainder $-5x - 1 \equiv B(x + 2) + C(2x + 1)$`, R`|A1|$B = 1$`, R`|A1|$C = -3$`], R`$A = 2$, $B = 1$, $C = -3$`,
  R`$4x^2 + 5x + 3 - 2(2x^2 + 5x + 2) = -5x - 1$. $x = -2$: $9 = -3C$, $C = -3$. $x = -\frac12$: $1.5 = 1.5B$, $B = 1$.`),
Q('2P1.5-11', 3, R`Simplify $\dfrac{x^3 + 1}{x + 1}$. [[2]]`,
  [R`$x = -1$ is a root of $x^3 + 1$.`, R`Divide.`],
  [R`|M1|$x^3 + 1 = (x + 1)(x^2 - x + 1)$`, R`|A1|$x^2 - x + 1$`], R`$x^2 - x + 1$`,
  R`$(x + 1)(x^2 - x + 1) = x^3 + 1$, so the fraction simplifies to $x^2 - x + 1$ (with no remainder).`),
Q('2P1.5-12', 4, R`Express $\dfrac{x^3 + x^2 - 5x + 8}{x^2 + x - 6}$ in the form $Ax + B + \dfrac{C}{x + 3} + \dfrac{D}{x - 2}$. [[5]]`,
  [R`Divide: quotient $x$, remainder $x + 8$.`, R`$x^2 + x - 6 = (x + 3)(x - 2)$.`],
  [R`|M1|Quotient $x$`, R`|A1|Remainder $x + 8$, so $A = 1$, $B = 0$`, R`|M1|$x + 8 \equiv C(x - 2) + D(x + 3)$`, R`|A1|$C = -1$`, R`|A1|$D = 2$`], R`$x - \frac{1}{x + 3} + \frac{2}{x - 2}$`,
  R`$x(x^2 + x - 6) = x^3 + x^2 - 6x$, leaving $x + 8$. $x = 2$: $10 = 5D$, $D = 2$. $x = -3$: $5 = -5C$, $C = -1$.`),
Q('2P1.5-13', 4, R`Show that $\dfrac{2x^2 - 3x + 5}{(x - 1)^2} \equiv 2 + \dfrac{1}{x - 1} + \dfrac{4}{(x - 1)^2}$. [[4]]`,
  [R`$2x^2 - 3x + 5 = 2(x - 1)^2 + (x + 3)$.`, R`Then $x + 3 = (x - 1) + 4$.`],
  [R`|M1|Divides: $2(x^2 - 2x + 1)$`, R`|A1|Remainder $x + 3$`, R`|M1|$x + 3 \equiv A(x - 1) + B$`, R`|A1|$A = 1$, $B = 4$`], R`Shown`,
  R`$2x^2 - 3x + 5 - 2(x^2 - 2x + 1) = x + 3 = (x - 1) + 4$. So the fraction is $2 + \frac{1}{x - 1} + \frac{4}{(x - 1)^2}$.`),
Q('2P1.5-14', 4, R`Divide $6x^3 + 7x^2 - x + 2$ by $2x + 1$. [[3]]`,
  [R`First term: $3x^2$.`, R`Then $2x$, then $-\frac32$.`],
  [R`|M1|Long division`, R`|A1|Quotient $3x^2 + 2x - \frac32$`, R`|A1|Remainder $\frac72$`], R`$3x^2 + 2x - \frac32 + \frac{7}{2(2x + 1)}$`,
  R`$(2x + 1)\left(3x^2 + 2x - \frac32\right) = 6x^3 + 7x^2 - x - \frac32$, leaving $\frac72$. So $3x^2 + 2x - \frac32 + \frac{7}{2(2x + 1)}$.`),
Q('2P1.5-15', 5, R`$f(x) = \dfrac{x^3 + 2}{x(x + 1)}$. **(a)** Show that $f(x) = x - 1 + \dfrac{2}{x} - \dfrac{1}{x + 1}$. **(b)** Check your answer by finding $f(1)$ both ways. **(c)** Solve $f(x) = x - 1$. [[7]]`,
  [R`Divide by $x^2 + x$: quotient $x - 1$, remainder $x + 2$.`, R`For (c), $\frac2x = \frac{1}{x + 1}$.`],
  [R`(a)|M1|$x^3 + 2 = (x^2 + x)(x - 1) + (x + 2)$`, R`(a)|M1|$x + 2 \equiv A(x + 1) + Bx$`, R`(a)|A1|$A = 2$, $B = -1$`, R`(b)|B1|$f(1) = \frac32$ both ways`, R`(c)|M1|$\frac2x - \frac{1}{x + 1} = 0$`, R`(c)|M1|$2(x + 1) = x$`, R`(c)|A1|$x = -2$`], R`(c) $x = -2$`,
  R`**(a)** $(x^2 + x)(x - 1) = x^3 - x$, so the remainder is $x + 2$. $x + 2 \equiv A(x + 1) + Bx$: $x = 0$ gives $A = 2$; $x = -1$ gives $B = -1$.
**(b)** $\frac{3}{2} = 0 + 2 - \frac12$.
**(c)** $\frac2x = \frac{1}{x + 1}$, so $2x + 2 = x$ and $x = -2$.`)
]};
