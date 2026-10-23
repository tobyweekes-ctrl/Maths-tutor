/* Pure Mathematics Year 1 · Chapter 8 Binomial expansion (sections 8.1 to 8.5) */
BOOK_CHAPTERS.push({ id:'P08', book:'Pure Mathematics Year 1', label:'Chapter 8', title:'Binomial expansion', sections:[
  { id:'P8.1', num:'8.1', title:"Pascal's triangle" },
  { id:'P8.2', num:'8.2', title:'Factorial notation' },
  { id:'P8.3', num:'8.3', title:'The binomial expansion' },
  { id:'P8.4', num:'8.4', title:'Solving binomial problems' },
  { id:'P8.5', num:'8.5', title:'Binomial estimation' }
]});

CONTENT['P8.1'] = {
notes: R`
### Pascal's triangle
Each number is the sum of the two above it.

| $n$ | coefficients |
|---|---|
| 0 | 1 |
| 1 | 1 1 |
| 2 | 1 2 1 |
| 3 | 1 3 3 1 |
| 4 | 1 4 6 4 1 |
| 5 | 1 5 10 10 5 1 |
| 6 | 1 6 15 20 15 6 1 |

Row $n$ gives the coefficients in $(a + b)^n$. The powers of $a$ go **down** from $n$ to $0$ while the powers of $b$ go **up** from $0$ to $n$.

::: booklet
**In the formula booklet:** the binomial expansion of $(a + b)^n$. Pascal's triangle itself isn't, but it's quick to write out.
:::

### Worked example 1
Expand $(x + 2)^4$.
$$x^4 + 4x^3(2) + 6x^2(2^2) + 4x(2^3) + 2^4 = x^4 + 8x^3 + 24x^2 + 32x + 16$$

### Worked example 2: brackets round each term
Expand $(2 - 3x)^3$. Use row $1, 3, 3, 1$ with $a = 2$, $b = -3x$:
$$2^3 + 3(2^2)(-3x) + 3(2)(-3x)^2 + (-3x)^3 = 8 - 36x + 54x^2 - 27x^3$$

**The trap:** writing $-3x^2$ instead of $(-3x)^2 = 9x^2$. Put **brackets** round the whole term, including its sign, before raising it to a power.

### Watch out
- The signs alternate when $b$ is negative.
`,
questions: [
Q('P8.1-1', 1, R`Write down the row of Pascal's triangle that gives the coefficients of $(a + b)^5$. [[1]]`,
  [R`Start $1, 4, 6, 4, 1$ and add neighbours.`, R`There are $6$ numbers.`],
  [R`|B1|$1, 5, 10, 10, 5, 1$`], R`$1, 5, 10, 10, 5, 1$`,
  R`From $1, 4, 6, 4, 1$: $1$, $1 + 4$, $4 + 6$, $6 + 4$, $4 + 1$, $1$.`),
Q('P8.1-2', 1, R`Expand $(x + 1)^3$. [[1]]`,
  [R`Row $1, 3, 3, 1$.`, R`Powers of $1$ are all $1$.`],
  [R`|B1|$x^3 + 3x^2 + 3x + 1$`], R`$x^3 + 3x^2 + 3x + 1$`,
  R`Coefficients $1, 3, 3, 1$ with powers of $x$ going down.`),
Q('P8.1-3', 1, R`Expand $(a + b)^4$. [[1]]`,
  [R`Row $1, 4, 6, 4, 1$.`, R`Powers of $a$ go down, $b$ go up.`],
  [R`|B1|$a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$`], R`$a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$`,
  R`In each term the powers add up to $4$.`),
Q('P8.1-4', 2, R`Expand $(x + 2)^3$. [[2]]`,
  [R`$1, 3, 3, 1$.`, R`$x^3 + 3x^2(2) + 3x(4) + 8$.`],
  [R`|M1|Correct coefficients and powers`, R`|A1|$x^3 + 6x^2 + 12x + 8$`], R`$x^3 + 6x^2 + 12x + 8$`,
  R`$x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3$.`),
Q('P8.1-5', 2, R`Expand $(1 - x)^4$. [[2]]`,
  [R`$b = -x$.`, R`The signs alternate.`],
  [R`|M1|$1, 4, 6, 4, 1$ with alternating signs`, R`|A1|$1 - 4x + 6x^2 - 4x^3 + x^4$`], R`$1 - 4x + 6x^2 - 4x^3 + x^4$`,
  R`Odd powers of $(-x)$ are negative.`),
Q('P8.1-6', 2, R`Expand $(2x + 3)^3$. [[3]]`,
  [R`$a = 2x$, $b = 3$.`, R`$(2x)^3 = 8x^3$.`],
  [R`|M1|Row $1, 3, 3, 1$`, R`|M1|Powers of $2x$ and $3$`, R`|A1|$8x^3 + 36x^2 + 54x + 27$`], R`$8x^3 + 36x^2 + 54x + 27$`,
  R`$8x^3 + 3(4x^2)(3) + 3(2x)(9) + 27$.`),
Q('P8.1-7', 2, R`Find the coefficient of $x^2$ in the expansion of $(1 + 2x)^5$. [[2]]`,
  [R`Row $5$: the $x^2$ term uses the third number, $10$.`, R`$(2x)^2 = 4x^2$.`],
  [R`|M1|$10 \times (2x)^2$`, R`|A1|$40$`], R`$40$`,
  R`$10 \times 1^3 \times 4x^2 = 40x^2$.`),
Q('P8.1-8', 3, R`Expand $(2 - 3x)^3$. [[3]]`,
  [R`$b = -3x$; bracket it.`, R`$(-3x)^2 = 9x^2$ and $(-3x)^3 = -27x^3$.`],
  [R`|M1|Row $1, 3, 3, 1$`, R`|M1|Correct powers of $2$ and $-3x$`, R`|A1|$8 - 36x + 54x^2 - 27x^3$`], R`$8 - 36x + 54x^2 - 27x^3$`,
  R`$8 + 3(4)(-3x) + 3(2)(9x^2) + (-27x^3)$.`),
Q('P8.1-9', 3, R`Find the coefficient of $x^3$ in $(3 + x)^5$. [[2]]`,
  [R`Row $5$: $x^3$ goes with $10$.`, R`The matching power of $3$ is $3^2$.`],
  [R`|M1|$10 \times 3^2 \times x^3$`, R`|A1|$90$`], R`$90$`,
  R`The $x^3$ term is $\binom53 3^2 x^3 = 10 \times 9x^3 = 90x^3$.`),
Q('P8.1-10', 3, R`Expand $\left(x - \dfrac1x\right)^4$, simplifying each term. [[3]]`,
  [R`$a = x$, $b = -\frac1x$.`, R`Middle term $6x^2 \cdot \frac{1}{x^2} = 6$.`],
  [R`|M1|Row $1, 4, 6, 4, 1$ with alternating signs`, R`|M1|Simplifies powers of $x$`, R`|A1|$x^4 - 4x^2 + 6 - \frac{4}{x^2} + \frac{1}{x^4}$`], R`$x^4 - 4x^2 + 6 - \frac{4}{x^2} + \frac{1}{x^4}$`,
  R`$x^4 + 4x^3\left(-\frac1x\right) + 6x^2\left(\frac{1}{x^2}\right) + 4x\left(-\frac{1}{x^3}\right) + \frac{1}{x^4}$.`),
Q('P8.1-11', 3, R`The coefficient of $x$ in $(1 + kx)^4$ is $12$. Find $k$ and the coefficient of $x^2$. [[3]]`,
  [R`The $x$ term is $4kx$.`, R`The $x^2$ term is $6k^2x^2$.`],
  [R`|M1|$4k = 12$`, R`|A1|$k = 3$`, R`|A1|$54$`], R`$k = 3$; $54$`,
  R`$4k = 12$ gives $k = 3$, and the $x^2$ term is $6k^2x^2 = 6 \times 9x^2 = 54x^2$.`),
Q('P8.1-12', 4, R`Expand $(1 + x)(1 + 2x)^3$, simplifying fully. [[4]]`,
  [R`First expand $(1 + 2x)^3$.`, R`Then multiply each term by $1$ and by $x$.`],
  [R`|M1|$(1 + 2x)^3$ expanded`, R`|A1|$1 + 6x + 12x^2 + 8x^3$`, R`|M1|Multiplies by $(1 + x)$`, R`|A1|$1 + 7x + 18x^2 + 20x^3 + 8x^4$`], R`$1 + 7x + 18x^2 + 20x^3 + 8x^4$`,
  R`$(1 + 6x + 12x^2 + 8x^3) + (x + 6x^2 + 12x^3 + 8x^4)$.`),
Q('P8.1-13', 4, R`Find the term independent of $x$ in the expansion of $\left(x + \dfrac2x\right)^4$. [[3]]`,
  [R`It's the middle term.`, R`$6 \times x^2 \times \left(\frac2x\right)^2$.`],
  [R`|M1|Identifies the middle term`, R`|M1|$6x^2 \cdot \frac{4}{x^2}$`, R`|A1|$24$`], R`$24$`,
  R`The powers of $x$ cancel when there are equal numbers of $x$ and $\frac1x$.`),
Q('P8.1-14', 4, R`The coefficient of $x^2$ in $(1 + ax)^3$ is $48$, where $a > 0$. Find $a$ and the coefficient of $x^3$. [[3]]`,
  [R`$3a^2 = 48$.`, R`The $x^3$ coefficient is $a^3$.`],
  [R`|M1|$3a^2 = 48$`, R`|A1|$a = 4$`, R`|A1|$64$`], R`$a = 4$; $64$`,
  R`$a^2 = 16$ and $a > 0$.`),
Q('P8.1-15', 5, R`**(a)** Expand $(1 + x)^4$. [[1]]

**(b)** Hence write down the expansion of $(1 - x)^4$. [[1]]

**(c)** Show that $(1 + x)^4 + (1 - x)^4 = 2 + 12x^2 + 2x^4$. [[2]]

**(d)** Hence find the exact value of $1.1^4 + 0.9^4$. [[2]]

**(e)** Solve $(1 + x)^4 + (1 - x)^4 = 16$. [[3]]`,
  [R`In (c) the odd powers cancel.`, R`(e) is a quadratic in $x^2$.`],
  [R`(a)|B1|$1 + 4x + 6x^2 + 4x^3 + x^4$`, R`(b)|B1|$1 - 4x + 6x^2 - 4x^3 + x^4$`, R`(c)|M1|Adds`, R`(c)|A1|Odd powers cancel`, R`(d)|M1|$x = 0.1$`, R`(d)|A1|$2.1202$`, R`(e)|M1|$2x^4 + 12x^2 - 14 = 0$`, R`(e)|M1|$(x^2 + 7)(x^2 - 1) = 0$`, R`(e)|A1|$x = \pm1$`],
  R`(d) $2.1202$ (e) $x = \pm1$`,
  R`(d) $2 + 12(0.01) + 2(0.0001) = 2.1202$.

(e) $x^4 + 6x^2 - 7 = 0$, so $x^2 = 1$ ($x^2 = -7$ is impossible). Check: $2^4 + 0^4 = 16$.`)
]};

CONTENT['P8.2'] = {
notes: R`
### Factorials
$n! = n \times (n - 1) \times \cdots \times 2 \times 1$, and $0! = 1$.

### Choosing
$$^nC_r = \binom{n}{r} = \frac{n!}{r!(n - r)!}$$
This is the number of ways of choosing $r$ objects from $n$, and it's entry $r$ (counting from $0$) in row $n$ of Pascal's triangle.

Useful facts: $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{2} = \frac{n(n - 1)}{2}$, and $\binom{n}{r} = \binom{n}{n - r}$.

::: booklet
**In the formula booklet:** $^nC_r = \dfrac{n!}{r!(n - r)!}$.
:::

### Worked example 1
Find $\binom{5}{2}$.
$$\frac{5!}{2!\,3!} = \frac{120}{2 \times 6} = 10$$
That matches row $5$: $1, 5, \mathbf{10}, 10, 5, 1$.

### Worked example 2: cancel first
Find $\binom{10}{3}$.
$$\frac{10!}{3!\,7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$

**The trap:** computing $\frac{10!}{3!}$ and forgetting the $7!$. Both factorials go on the bottom.

### Watch out
- Your calculator has an $^nC_r$ button; in algebra questions write out the formula.
`,
questions: [
Q('P8.2-1', 1, R`Evaluate $5!$. [[1]]`,
  [R`$5 \times 4 \times 3 \times 2 \times 1$.`, R`Multiply in order.`],
  [R`|B1|$120$`], R`$120$`,
  R`$5 \times 4 \times 3 \times 2 \times 1 = 120$.`),
Q('P8.2-2', 1, R`Evaluate $\dfrac{7!}{5!}$. [[1]]`,
  [R`Most of the factors cancel.`, R`$7 \times 6$.`],
  [R`|B1|$42$`], R`$42$`,
  R`$\frac{7 \times 6 \times 5!}{5!} = 42$.`),
Q('P8.2-3', 1, R`Evaluate $\binom{6}{2}$. [[1]]`,
  [R`$\frac{6 \times 5}{2}$.`, R`Or read row $6$ of Pascal's triangle.`],
  [R`|B1|$15$`], R`$15$`,
  R`$\frac{6!}{2!\,4!} = \frac{30}{2} = 15$.`),
Q('P8.2-4', 2, R`Evaluate $\binom{10}{3}$, showing your working. [[2]]`,
  [R`$\frac{10!}{3!\,7!}$.`, R`Cancel the $7!$.`],
  [R`|M1|$\frac{10 \times 9 \times 8}{3!}$`, R`|A1|$120$`], R`$120$`,
  R`$\frac{720}{6} = 120$.`),
Q('P8.2-5', 2, R`Show that $\binom{8}{3} = \binom{8}{5}$. [[2]]`,
  [R`$\binom{8}{3} = \frac{8!}{3!\,5!}$.`, R`$\binom{8}{5} = \frac{8!}{5!\,3!}$.`],
  [R`|M1|Writes both with factorials`, R`|A1|Both equal $\frac{8!}{3!\,5!} = 56$`], R`Both are $56$`,
  R`Choosing $3$ to take is the same as choosing $5$ to leave.`),
Q('P8.2-6', 2, R`Write $\dfrac{12!}{4!\,8!}$ in the form $\binom{n}{r}$ and evaluate it. [[2]]`,
  [R`$n = 12$, $r = 4$ (or $8$).`, R`$\frac{12 \times 11 \times 10 \times 9}{24}$.`],
  [R`|B1|$\binom{12}{4}$`, R`|B1|$495$`], R`$\binom{12}{4} = 495$`,
  R`$\frac{11\,880}{24} = 495$.`),
Q('P8.2-7', 2, R`Simplify $\dfrac{(n + 1)!}{n!}$, and use it to evaluate $\dfrac{10!}{9!}$. [[2]]`,
  [R`$(n + 1)! = (n + 1) \times n!$.`, R`Then $n = 9$.`],
  [R`|B1|$n + 1$`, R`|B1|$10$`], R`$n + 1$; $10$`,
  R`$\frac{(n + 1)n!}{n!} = n + 1$.`),
Q('P8.2-8', 3, R`Find $n$ such that $\binom{n}{2} = 28$. [[3]]`,
  [R`$\frac{n(n - 1)}{2} = 28$.`, R`$n^2 - n - 56 = 0$.`],
  [R`|M1|$\frac{n(n - 1)}{2} = 28$`, R`|M1|$(n - 8)(n + 7) = 0$`, R`|A1|$n = 8$`], R`$n = 8$`,
  R`$n$ must be a positive integer, so $n = 8$.`),
Q('P8.2-9', 3, R`Use the factorial formula to show that $\binom{n}{1} = n$ and $\binom{n}{2} = \dfrac{n(n - 1)}{2}$. [[2]]`,
  [R`$\frac{n!}{1!(n - 1)!}$.`, R`$\frac{n!}{2!(n - 2)!} = \frac{n(n - 1)}{2}$.`],
  [R`|B1|$\frac{n!}{(n - 1)!} = n$`, R`|B1|$\frac{n(n - 1)(n - 2)!}{2(n - 2)!}$`], R`Shown`,
  R`$n! = n(n - 1)(n - 2)!$, so the $(n - 2)!$ cancels.`),
Q('P8.2-10', 3, R`Use $^nC_r$ to find the coefficient of $x^4$ in $(1 + x)^9$. [[2]]`,
  [R`The coefficient is $\binom{9}{4}$.`, R`$\frac{9 \times 8 \times 7 \times 6}{24}$.`],
  [R`|M1|$\binom{9}{4}$`, R`|A1|$126$`], R`$126$`,
  R`$\frac{3024}{24} = 126$.`),
Q('P8.2-11', 3, R`Simplify $\dfrac{n!}{(n - 2)!}$. [[2]]`,
  [R`$n! = n(n - 1)(n - 2)!$.`, R`Cancel $(n - 2)!$.`],
  [R`|M1|Writes $n!$ as $n(n - 1)(n - 2)!$`, R`|A1|$n(n - 1)$`], R`$n(n - 1)$`,
  R`$\frac{n(n - 1)(n - 2)!}{(n - 2)!} = n(n - 1)$.`),
Q('P8.2-12', 4, R`Show that $\binom{n}{2} + \binom{n}{3} = \binom{n + 1}{3}$. [[4]]`,
  [R`$\frac{n(n - 1)}{2} + \frac{n(n - 1)(n - 2)}{6}$.`, R`Take out $\frac{n(n - 1)}{6}$.`],
  [R`|M1|Both in algebraic form`, R`|M1|Common denominator $6$`, R`|A1|$\frac{n(n - 1)(n + 1)}{6}$`, R`|A1|$= \binom{n + 1}{3}$`], R`Shown`,
  R`$\frac{n(n - 1)}{6}[3 + (n - 2)] = \frac{(n + 1)n(n - 1)}{6} = \frac{(n + 1)!}{3!(n - 2)!}$.`),
Q('P8.2-13', 4, R`Find $n$ such that $\binom{n}{3} = 2\binom{n}{2}$. [[3]]`,
  [R`$\frac{n(n - 1)(n - 2)}{6} = n(n - 1)$.`, R`Divide by $n(n - 1)$ (non-zero, since $n \ge 3$).`],
  [R`|M1|Writes both sides`, R`|M1|$\frac{n - 2}{6} = 1$`, R`|A1|$n = 8$`], R`$n = 8$`,
  R`Check: $\binom83 = 56 = 2 \times 28$.`),
Q('P8.2-14', 4, R`A team of $4$ is chosen from $9$ players. Find the number of possible teams, and explain why it equals the coefficient of $x^4$ in $(1 + x)^9$. [[2]]`,
  [R`$\binom94$.`, R`Each $x^4$ term comes from choosing which $4$ of the $9$ brackets give an $x$.`],
  [R`|B1|$126$`, R`|B1|Choosing $4$ brackets from $9$ to supply an $x$`], R`$126$`,
  R`Multiplying out $(1 + x)(1 + x)\cdots(1 + x)$, every way of picking $x$ from $4$ brackets gives one $x^4$.`),
Q('P8.2-15', 5, R`**(a)** Verify that $\binom73 = \binom63 + \binom62$. [[2]]

**(b)** Prove that $\binom{n}{r - 1} + \binom{n}{r} = \binom{n + 1}{r}$. [[4]]

**(c)** Explain how this result relates to Pascal's triangle. [[1]]`,
  [R`Common denominator $r!(n - r + 1)!$.`, R`$\frac{1}{(n - r + 1)!} \times (n - r + 1) = \frac{1}{(n - r)!}$.`],
  [R`(a)|M1|Evaluates each`, R`(a)|A1|$35 = 20 + 15$`, R`(b)|M1|Writes both in factorials`, R`(b)|M1|Common denominator $r!(n - r + 1)!$`, R`(b)|A1|Numerator $n![r + (n - r + 1)] = n!(n + 1)$`, R`(b)|A1|$= \frac{(n + 1)!}{r!(n + 1 - r)!}$`, R`(c)|B1|Each entry is the sum of the two above it`],
  R`(a) $35 = 20 + 15$`,
  R`(b) $\frac{n!}{(r - 1)!(n - r + 1)!} + \frac{n!}{r!(n - r)!} = \frac{n!\,r + n!\,(n - r + 1)}{r!(n - r + 1)!} = \frac{(n + 1)!}{r!(n + 1 - r)!}$.

(c) The two entries next to each other in row $n$ add to give the entry below them in row $n + 1$.`)
]};

CONTENT['P8.3'] = {
notes: R`
### The binomial expansion
$$(a + b)^n = a^n + \binom{n}{1}a^{n - 1}b + \binom{n}{2}a^{n - 2}b^2 + \cdots + \binom{n}{r}a^{n - r}b^r + \cdots + b^n$$
For $(1 + x)^n$ this is
$$1 + nx + \frac{n(n - 1)}{2!}x^2 + \frac{n(n - 1)(n - 2)}{3!}x^3 + \cdots$$
The **general term** is $\binom{n}{r}a^{n - r}b^r$.

::: booklet
**In the formula booklet:** $(a + b)^n = a^n + {}^nC_1 a^{n-1}b + {}^nC_2 a^{n-2}b^2 + \cdots + b^n$, for positive integers $n$.
:::

### Worked example 1
Find the first four terms of $(1 + 2x)^8$ in ascending powers of $x$.
$$1 + 8(2x) + 28(2x)^2 + 56(2x)^3 = 1 + 16x + 112x^2 + 448x^3$$

### Worked example 2: a constant that isn't 1
Find the first three terms of $\left(3 - \frac{x}{2}\right)^6$.
$$3^6 + 6(3^5)\left(-\tfrac{x}{2}\right) + 15(3^4)\left(-\tfrac{x}{2}\right)^2 = 729 - 729x + \tfrac{1215}{4}x^2$$

**The trap:** forgetting to raise $3$ to the matching power, or writing $\frac{x^2}{2}$ for $\left(\frac{x}{2}\right)^2 = \frac{x^2}{4}$.

### Watch out
- "Ascending powers" means $1, x, x^2, \ldots$ in that order.
- To find one particular term, use the general term instead of expanding everything.
`,
questions: [
Q('P8.3-1', 1, R`Find the first three terms, in ascending powers of $x$, of $(1 + x)^{10}$. [[2]]`,
  [R`$1 + nx + \frac{n(n - 1)}{2}x^2$.`, R`$\frac{10 \times 9}{2} = 45$.`],
  [R`|M1|Correct binomial coefficients`, R`|A1|$1 + 10x + 45x^2$`], R`$1 + 10x + 45x^2$`,
  R`$\binom{10}{1} = 10$, $\binom{10}{2} = 45$.`),
Q('P8.3-2', 1, R`Find the first three terms of $(1 + 3x)^5$. [[2]]`,
  [R`$b = 3x$.`, R`$\binom52 (3x)^2 = 10 \times 9x^2$.`],
  [R`|M1|Uses $(3x)^r$`, R`|A1|$1 + 15x + 90x^2$`], R`$1 + 15x + 90x^2$`,
  R`$1 + 5(3x) + 10(9x^2)$.`),
Q('P8.3-3', 1, R`Find the first three terms of $(1 - x)^7$. [[2]]`,
  [R`$b = -x$.`, R`$\binom72 = 21$.`],
  [R`|M1|Alternating signs`, R`|A1|$1 - 7x + 21x^2$`], R`$1 - 7x + 21x^2$`,
  R`$1 + 7(-x) + 21(-x)^2$.`),
Q('P8.3-4', 2, R`Find the first three terms of $(2 + x)^6$. [[3]]`,
  [R`$2^6 + 6(2^5)x + 15(2^4)x^2$.`, R`$2^6 = 64$.`],
  [R`|B1|$64$`, R`|M1|$6 \times 32x$ and $15 \times 16x^2$`, R`|A1|$64 + 192x + 240x^2$`], R`$64 + 192x + 240x^2$`,
  R`$64 + 192x + 240x^2$.`),
Q('P8.3-5', 2, R`Find the first four terms of $(1 - 2x)^6$. [[3]]`,
  [R`$b = -2x$.`, R`$\binom63 (-2x)^3 = 20 \times (-8x^3)$.`],
  [R`|M1|Binomial coefficients $1, 6, 15, 20$`, R`|M1|Powers of $-2x$`, R`|A1|$1 - 12x + 60x^2 - 160x^3$`], R`$1 - 12x + 60x^2 - 160x^3$`,
  R`$1 + 6(-2x) + 15(4x^2) + 20(-8x^3)$.`),
Q('P8.3-6', 2, R`Find the first three terms of $(3 - x)^5$. [[3]]`,
  [R`$3^5 = 243$.`, R`$5(3^4)(-x)$ and $10(3^3)x^2$.`],
  [R`|B1|$243$`, R`|M1|Next two terms`, R`|A1|$243 - 405x + 270x^2$`], R`$243 - 405x + 270x^2$`,
  R`$5 \times 81 = 405$, $10 \times 27 = 270$.`),
Q('P8.3-7', 2, R`Find the coefficient of $x^3$ in $(2 + 3x)^5$. [[2]]`,
  [R`General term $\binom5r 2^{5 - r}(3x)^r$ with $r = 3$.`, R`$10 \times 4 \times 27$.`],
  [R`|M1|$\binom53 2^2 3^3$`, R`|A1|$1080$`], R`$1080$`,
  R`$10 \times 4 \times 27 = 1080$.`),
Q('P8.3-8', 3, R`Find the first three terms of $\left(2 - \dfrac{x}{4}\right)^8$. [[3]]`,
  [R`$2^8 = 256$.`, R`$\left(-\frac{x}{4}\right)^2 = \frac{x^2}{16}$.`],
  [R`|B1|$256$`, R`|M1|$8(2^7)\left(-\frac{x}{4}\right)$ and $28(2^6)\frac{x^2}{16}$`, R`|A1|$256 - 256x + 112x^2$`], R`$256 - 256x + 112x^2$`,
  R`$8 \times 128 \times \frac14 = 256$; $28 \times 64 \times \frac{1}{16} = 112$.`),
Q('P8.3-9', 3, R`Find the coefficient of $x^5$ in $\left(1 + \dfrac{x}{2}\right)^9$. [[2]]`,
  [R`$\binom95 \left(\frac12\right)^5$.`, R`$\binom95 = 126$.`],
  [R`|M1|$126 \times \frac{1}{32}$`, R`|A1|$\frac{63}{16}$`], R`$\frac{63}{16}$`,
  R`$\frac{126}{32} = \frac{63}{16}$.`),
Q('P8.3-10', 3, R`Write down the first three terms of $(1 + x)^n$ in terms of $n$, where $n > 2$ is an integer. [[2]]`,
  [R`$\binom{n}{1} = n$.`, R`$\binom{n}{2} = \frac{n(n - 1)}{2}$.`],
  [R`|B1|$1 + nx$`, R`|B1|$+ \frac{n(n - 1)}{2}x^2$`], R`$1 + nx + \frac{n(n - 1)}{2}x^2$`,
  R`This form is in the formula booklet.`),
Q('P8.3-11', 3, R`The coefficient of $x^2$ in $(3 + kx)^5$ is $270$. Find the possible values of $k$. [[3]]`,
  [R`$\binom52 3^3 k^2$.`, R`$270k^2 = 270$.`],
  [R`|M1|$10 \times 27 \times k^2$`, R`|M1|$270k^2 = 270$`, R`|A1|$k = \pm1$`], R`$k = \pm1$`,
  R`$\binom52 3^3 (kx)^2 = 270k^2x^2$, so $270k^2 = 270$ and $k^2 = 1$.`),
Q('P8.3-12', 4, R`Find the term independent of $x$ in $\left(2x - \dfrac1x\right)^6$. [[3]]`,
  [R`General term $\binom6r (2x)^{6 - r}\left(-\frac1x\right)^r$.`, R`Independent of $x$ when $6 - r = r$, so $r = 3$.`],
  [R`|M1|General term`, R`|M1|$r = 3$`, R`|A1|$-160$`], R`$-160$`,
  R`$20 \times 8x^3 \times \left(-\frac{1}{x^3}\right) = -160$.`),
Q('P8.3-13', 4, R`Find the coefficients of $x$ and $x^2$ in the expansion of $(1 + 2x)^5(1 - x)^3$. [[4]]`,
  [R`$(1 + 2x)^5 = 1 + 10x + 40x^2 + \cdots$ and $(1 - x)^3 = 1 - 3x + 3x^2 - x^3$.`, R`Collect $x^2$: $40 \cdot 1 + 10 \cdot (-3) + 1 \cdot 3$.`],
  [R`|M1|Both expansions to $x^2$`, R`|M1|Collects terms`, R`|A1|$x$: $7$`, R`|A1|$x^2$: $13$`], R`$x$: $7$; $x^2$: $13$`,
  R`$x$: $10 - 3 = 7$. $x^2$: $40 - 30 + 3 = 13$.`),
Q('P8.3-14', 4, R`Find the coefficient of $x^3$ in $\left(x^2 - \dfrac2x\right)^6$. [[3]]`,
  [R`General term $\binom6r (x^2)^{6 - r}\left(-\frac2x\right)^r = \binom6r (-2)^r x^{12 - 3r}$.`, R`$12 - 3r = 3$.`],
  [R`|M1|General term`, R`|M1|$r = 3$`, R`|A1|$-160$`], R`$-160$`,
  R`$\binom63(-2)^3 = 20 \times (-8) = -160$.`),
Q('P8.3-15', 5, R`**(a)** Find the first four terms, in ascending powers of $x$, of $(1 + kx)^7$, in terms of $k$. [[2]]

**(b)** The coefficient of $x^2$ is $6$ times the coefficient of $x$. Find $k$, given $k \ne 0$. [[2]]

**(c)** Find the coefficient of $x^3$. [[1]]

**(d)** Find the coefficient of $x^2$ in $(2 - x)(1 + kx)^7$. [[3]]`,
  [R`$1 + 7kx + 21k^2x^2 + 35k^3x^3$.`, R`For (d): $2 \times (x^2$ coefficient$) - 1 \times (x$ coefficient$)$.`],
  [R`(a)|M1|Binomial coefficients $7, 21, 35$`, R`(a)|A1|$1 + 7kx + 21k^2x^2 + 35k^3x^3$`, R`(b)|M1|$21k^2 = 42k$`, R`(b)|A1|$k = 2$`, R`(c)|B1|$280$`, R`(d)|M1|Uses $14$ and $84$`, R`(d)|M1|$2(84) - 14$`, R`(d)|A1|$154$`],
  R`(b) $k = 2$ (c) $280$ (d) $154$`,
  R`(b) $21k^2 = 6 \times 7k$, so $k = 2$. (c) $35 \times 8 = 280$. (d) $(1 + 2x)^7 = 1 + 14x + 84x^2 + \cdots$; the $x^2$ terms of $(2 - x)(\ldots)$ are $2 \times 84x^2$ and $-x \times 14x$: $168 - 14 = 154$.`)
]};

CONTENT['P8.4'] = {
notes: R`
### Finding unknowns
When a coefficient is given, write it in terms of the unknowns and form an equation. Two coefficients give two equations.

::: booklet
**In the formula booklet:** the binomial expansion.
:::

### Worked example 1
In $(1 + ax)^n$ the coefficients of $x$ and $x^2$ are $12$ and $60$. Find $a$ and $n$.
1. $na = 12$ and $\frac{n(n - 1)}{2}a^2 = 60$.
2. Write the second as $\frac{(na)(n - 1)a}{2} = 60$: $6(n - 1)a = 60$, so $(n - 1)a = 10$.
3. $na - a = 10$, so $12 - a = 10$: $a = 2$, $n = 6$.

### Worked example 2: remember the other power
The coefficient of $x$ in $(a + 2x)^5$ is $160$, where $a > 0$. Find $a$.
- The $x$ term is $\binom51 a^4(2x) = 10a^4x$.
- $10a^4 = 160$, so $a^4 = 16$ and $a = 2$.

**The trap:** writing the $x$ term as $5(2x)$ and forgetting $a^4$. Every term has a power of $a$ **and** a power of $b$.

### Watch out
- If $n$ must be a positive integer, reject other solutions.
- Dividing one equation by another often removes an unknown quickly.
`,
questions: [
Q('P8.4-1', 1, R`The coefficient of $x$ in $(1 + ax)^6$ is $18$. Find $a$. [[1]]`,
  [R`The $x$ term is $6ax$.`, R`$6a = 18$.`],
  [R`|B1|$a = 3$`], R`$a = 3$`,
  R`The $x$ term is $\binom61(ax) = 6ax$, so $6a = 18$ and $a = 3$.`),
Q('P8.4-2', 1, R`The coefficient of $x^2$ in $(1 + x)^n$ is $15$. Find $n$. [[2]]`,
  [R`$\frac{n(n - 1)}{2} = 15$.`, R`$n(n - 1) = 30$.`],
  [R`|M1|$\frac{n(n - 1)}{2} = 15$`, R`|A1|$n = 6$`], R`$n = 6$`,
  R`$n^2 - n - 30 = 0$, $(n - 6)(n + 5) = 0$, and $n > 0$.`),
Q('P8.4-3', 1, R`The coefficient of $x$ in $(2 + bx)^4$ is $-96$. Find $b$. [[2]]`,
  [R`$4 \times 2^3 \times b$.`, R`$32b = -96$.`],
  [R`|M1|$32b = -96$`, R`|A1|$b = -3$`], R`$b = -3$`,
  R`$\binom41 2^3 b = 32b$.`),
Q('P8.4-4', 2, R`The coefficient of $x^2$ in $(1 + ax)^5$ is $40$, where $a > 0$. Find $a$. [[2]]`,
  [R`$10a^2 = 40$.`, R`Take the positive root.`],
  [R`|M1|$10a^2 = 40$`, R`|A1|$a = 2$`], R`$a = 2$`,
  R`The $x^2$ term is $\binom52(ax)^2 = 10a^2x^2$; $a^2 = 4$ and $a > 0$, so $a = 2$.`),
Q('P8.4-5', 2, R`The coefficient of $x^3$ in $(1 + kx)^8$ is $448$. Find $k$. [[2]]`,
  [R`$\binom83 = 56$.`, R`$56k^3 = 448$.`],
  [R`|M1|$56k^3 = 448$`, R`|A1|$k = 2$`], R`$k = 2$`,
  R`The $x^3$ term is $\binom83(kx)^3 = 56k^3x^3$; $k^3 = 8$, so $k = 2$.`),
Q('P8.4-6', 2, R`The coefficient of $x^2$ in $(a + x)^5$ is $80$. Find $a$. [[2]]`,
  [R`$\binom52 a^3 = 10a^3$.`, R`$a^3 = 8$.`],
  [R`|M1|$10a^3 = 80$`, R`|A1|$a = 2$`], R`$a = 2$`,
  R`The $x^2$ term is $\binom52 a^3x^2 = 10a^3x^2$; $a^3 = 8$, so $a = 2$.`),
Q('P8.4-7', 2, R`The coefficient of $x$ in $(3 + x)^n$ is $405$. Show that $n = 5$ satisfies this, and explain why no other positive integer does. [[2]]`,
  [R`The coefficient is $n \times 3^{n - 1}$.`, R`It increases with $n$.`],
  [R`|B1|$5 \times 3^4 = 405$`, R`|B1|$n \times 3^{n - 1}$ is increasing, so only one $n$ works`], R`$5 \times 81 = 405$`,
  R`$n = 4$ gives $108$ and $n = 6$ gives $1458$; the values increase with $n$.`),
Q('P8.4-8', 3, R`In $(1 + ax)^n$ the coefficients of $x$ and $x^2$ are $15$ and $90$. Find $a$ and $n$. [[4]]`,
  [R`$na = 15$ and $\frac{n(n - 1)}{2}a^2 = 90$.`, R`$\frac{(na)(n - 1)a}{2} = 90$ gives $(n - 1)a = 12$.`],
  [R`|M1|Both equations`, R`|M1|Eliminates`, R`|A1|$a = 3$`, R`|A1|$n = 5$`], R`$a = 3$, $n = 5$`,
  R`$\frac{15(n - 1)a}{2} = 90$, so $(n - 1)a = 12$; $na - a = 12$ gives $a = 3$, then $n = 5$.`),
Q('P8.4-9', 3, R`Find the ratio of the coefficient of $x^2$ to the coefficient of $x^3$ in $(2 + x)^6$. [[3]]`,
  [R`$x^2$: $15 \times 2^4$.`, R`$x^3$: $20 \times 2^3$.`],
  [R`|B1|$240$`, R`|B1|$160$`, R`|B1|$3 : 2$`], R`$240 : 160 = 3 : 2$`,
  R`$15 \times 16 = 240$ and $20 \times 8 = 160$.`),
Q('P8.4-10', 3, R`The coefficient of $x^2$ in $(1 + 2x)^n$ is $40$. Find $n$. [[3]]`,
  [R`$\frac{n(n - 1)}{2} \times 4 = 40$.`, R`$n(n - 1) = 20$.`],
  [R`|M1|$2n(n - 1) = 40$`, R`|M1|$n^2 - n - 20 = 0$`, R`|A1|$n = 5$`], R`$n = 5$`,
  R`$(n - 5)(n + 4) = 0$ and $n$ is a positive integer.`),
Q('P8.4-11', 3, R`In $(1 + px)^9$, where $p \ne 0$, the coefficients of $x^2$ and $x^3$ are equal. Find $p$. [[3]]`,
  [R`$36p^2 = 84p^3$.`, R`Divide by $p^2$.`],
  [R`|M1|$\binom92 p^2 = \binom93 p^3$`, R`|M1|$36 = 84p$`, R`|A1|$p = \frac37$`], R`$p = \frac37$`,
  R`$p = \frac{36}{84} = \frac37$.`),
Q('P8.4-12', 4, R`$(a + bx)^5 = 32 - 240x + cx^2 + \cdots$. Find $a$, $b$ and $c$. [[4]]`,
  [R`$a^5 = 32$.`, R`$5a^4b = -240$.`],
  [R`|B1|$a = 2$`, R`|M1|$5 \times 16 \times b = -240$`, R`|A1|$b = -3$`, R`|A1|$c = 10 \times 8 \times 9 = 720$`], R`$a = 2$, $b = -3$, $c = 720$`,
  R`$c = \binom52 a^3 b^2 = 10 \times 8 \times 9$.`),
Q('P8.4-13', 4, R`In the expansion of $(1 + x)^n$, the coefficients of $x^2$ and $x^3$ are in the ratio $1 : 2$. Find $n$. [[4]]`,
  [R`$\binom{n}{3} \div \binom{n}{2} = \frac{n - 2}{3}$.`, R`Set that equal to $2$.`],
  [R`|M1|Both coefficients`, R`|M1|Ratio $\frac{n - 2}{3}$`, R`|M1|$\frac{n - 2}{3} = 2$`, R`|A1|$n = 8$`], R`$n = 8$`,
  R`$\frac{n(n - 1)(n - 2)/6}{n(n - 1)/2} = \frac{n - 2}{3} = 2$. Check: $\binom82 = 28$, $\binom83 = 56$.`),
Q('P8.4-14', 4, R`In the expansion of $(1 + ax)(1 - 2x)^5$, the coefficient of $x$ is $-7$. Find $a$ and the coefficient of $x^2$. [[4]]`,
  [R`$(1 - 2x)^5 = 1 - 10x + 40x^2 + \cdots$.`, R`$x$: $a - 10$.`],
  [R`|M1|Expansion to $x^2$`, R`|M1|$a - 10 = -7$`, R`|A1|$a = 3$`, R`|A1|$x^2$: $40 + 3(-10) = 10$`], R`$a = 3$; $10$`,
  R`$x^2$ terms: $1 \times 40x^2$ and $ax \times (-10x)$.`),
Q('P8.4-15', 5, R`**(a)** Find the first four terms of $\left(1 + \dfrac{x}{4}\right)^8$ in ascending powers of $x$. [[3]]

**(b)** In the expansion of $(a + bx)\left(1 + \dfrac{x}{4}\right)^8$, the coefficients of $x$ and $x^2$ are $5$ and $\frac{11}{2}$. Find $a$ and $b$. [[4]]

**(c)** Find the coefficient of $x^3$. [[1]]`,
  [R`$1 + 2x + \frac74 x^2 + \frac78 x^3$.`, R`$x$: $2a + b$. $x^2$: $\frac74 a + 2b$.`],
  [R`(a)|M1|Coefficients $8, 28, 56$`, R`(a)|M1|Powers of $\frac14$`, R`(a)|A1|$1 + 2x + \frac74 x^2 + \frac78 x^3$`, R`(b)|M1|$2a + b = 5$`, R`(b)|M1|$\frac74 a + 2b = \frac{11}{2}$`, R`(b)|M1|Solves`, R`(b)|A1|$a = 2$, $b = 1$`, R`(c)|B1|$\frac72$`],
  R`(a) $1 + 2x + \frac74 x^2 + \frac78 x^3$ (b) $a = 2$, $b = 1$ (c) $\frac72$`,
  R`(a) $28 \times \frac{1}{16} = \frac74$, $56 \times \frac{1}{64} = \frac78$.

(b) $b = 5 - 2a$; $\frac74 a + 10 - 4a = \frac{11}{2}$ gives $-\frac94 a = -\frac92$, $a = 2$.

(c) $2 \times \frac78 + 1 \times \frac74 = \frac72$.`)
]};

CONTENT['P8.5'] = {
notes: R`
### Estimating with an expansion
If $x$ is small, $x^2$, $x^3$, … are much smaller, so the first few terms of $(1 + x)^n$ give a good approximation.

To estimate a number like $1.02^{10}$:
1. Write it in the form of your expansion: $(1 + x)^{10}$ with $x = 0.02$.
2. Substitute into the first few terms.

::: booklet
**In the formula booklet:** the binomial expansion.
:::

### Worked example 1
Use the first four terms of $(1 + x)^{10}$ to estimate $1.02^{10}$.
$$1 + 10(0.02) + 45(0.02)^2 + 120(0.02)^3 = 1 + 0.2 + 0.018 + 0.00096 = 1.21896$$
(The true value is $1.21899\ldots$)

### Worked example 2: choose $x$ carefully
$\left(1 - \frac{x}{2}\right)^{10} = 1 - 5x + \frac{45}{4}x^2 - \cdots$. Use it to estimate $0.995^{10}$.
1. Solve $1 - \frac{x}{2} = 0.995$: $x = 0.01$.
2. $1 - 0.05 + \frac{45}{4}(0.0001) = 0.951125$.

**The trap:** substituting $x = 0.995$ or $x = 0.005$. Set the **bracket** equal to the number and solve for $x$.

### Watch out
- The smaller $x$ is, the better the estimate.
- Percentage error $= \dfrac{|\text{estimate} - \text{true}|}{\text{true}} \times 100$.
`,
questions: [
Q('P8.5-1', 1, R`Using $(1 + x)^5 \approx 1 + 5x + 10x^2$, estimate $1.01^5$. [[2]]`,
  [R`$x = 0.01$.`, R`$10x^2 = 0.001$.`],
  [R`|M1|$x = 0.01$`, R`|A1|$1.051$`], R`$1.051$`,
  R`$1 + 0.05 + 0.001 = 1.051$.`),
Q('P8.5-2', 1, R`Explain why the first few terms of $(1 + x)^n$ give a good approximation when $x$ is small. [[1]]`,
  [R`What happens to $x^3$ when $x = 0.01$?`, R`Higher powers shrink very fast.`],
  [R`|B1|Higher powers of $x$ are very small, so the later terms hardly change the value`], R`The ignored terms are tiny`,
  R`For $x = 0.01$, $x^3 = 0.000001$: the terms left out are negligible.`),
Q('P8.5-3', 1, R`You want to estimate $0.97^6$ using the expansion of $(1 - x)^6$. What value of $x$ should you use? [[1]]`,
  [R`$1 - x = 0.97$.`, R`Solve for $x$.`],
  [R`|B1|$x = 0.03$`], R`$x = 0.03$`,
  R`Set the bracket equal to the number: $1 - x = 0.97$, so $x = 0.03$.`),
Q('P8.5-4', 2, R`Expand $(1 + 2x)^6$ up to the $x^2$ term, and use it to estimate $1.02^6$. [[3]]`,
  [R`$1 + 12x + 60x^2$.`, R`$1 + 2x = 1.02$ gives $x = 0.01$.`],
  [R`|B1|$1 + 12x + 60x^2$`, R`|M1|$x = 0.01$`, R`|A1|$1.126$`], R`$1 + 12x + 60x^2$; $1.126$`,
  R`$1 + 0.12 + 0.006 = 1.126$.`),
Q('P8.5-5', 2, R`Expand $(1 - x)^8$ up to the $x^2$ term, and use it to estimate $0.99^8$. [[3]]`,
  [R`$1 - 8x + 28x^2$.`, R`$x = 0.01$.`],
  [R`|B1|$1 - 8x + 28x^2$`, R`|M1|$x = 0.01$`, R`|A1|$0.9228$`], R`$0.9228$`,
  R`$1 - 0.08 + 0.0028 = 0.9228$.`),
Q('P8.5-6', 2, R`Find the first three terms of $(2 + x)^5$, and use them to estimate $2.01^5$. [[3]]`,
  [R`$32 + 80x + 80x^2$.`, R`$x = 0.01$.`],
  [R`|B1|$32 + 80x + 80x^2$`, R`|M1|$x = 0.01$`, R`|A1|$32.808$`], R`$32.808$`,
  R`$32 + 0.8 + 0.008 = 32.808$.`),
Q('P8.5-7', 2, R`The estimate of $0.99^8$ from the first three terms of $(1 - x)^8$ is $0.9228$. Find the percentage error, to $2$ significant figures. [[2]]`,
  [R`Find $0.99^8$ on a calculator.`, R`$\frac{|0.9228 - 0.99^8|}{0.99^8} \times 100$.`],
  [R`|M1|$0.99^8 = 0.922744\ldots$`, R`|A1|$0.0060\%$`], R`$0.0060\%$`,
  R`$\frac{0.0000553}{0.922745} \times 100 \approx 0.0060\%$.`),
Q('P8.5-8', 3, R`Expand $\left(1 - \dfrac{x}{2}\right)^{10}$ up to the $x^2$ term, and use it to estimate $0.995^{10}$. [[4]]`,
  [R`$1 - 5x + \frac{45}{4}x^2$.`, R`$1 - \frac{x}{2} = 0.995$ gives $x = 0.01$.`],
  [R`|M1|Coefficients $10$ and $45$ with powers of $\frac12$`, R`|A1|$1 - 5x + \frac{45}{4}x^2$`, R`|M1|$x = 0.01$`, R`|A1|$0.951125$`], R`$0.951125$`,
  R`$1 - 0.05 + 0.001125 = 0.951125$.`),
Q('P8.5-9', 3, R`Find the first three terms of $(3 + x)^4$ and use them to estimate $3.1^4$. Compare with the exact value. [[3]]`,
  [R`$81 + 108x + 54x^2$.`, R`$x = 0.1$.`],
  [R`|B1|$81 + 108x + 54x^2$`, R`|A1|$92.34$`, R`|B1|Exact $92.3521$; the estimate is a little low`], R`$92.34$ (exact $92.3521$)`,
  R`$81 + 10.8 + 0.54 = 92.34$. The missing terms are $12x^3 + x^4 = 0.0121$.`),
Q('P8.5-10', 3, R`Find the first four terms of $\left(1 + \dfrac{x}{5}\right)^{10}$, and use them to estimate $1.02^{10}$. [[4]]`,
  [R`$1 + 2x + \frac95 x^2 + \frac{24}{25}x^3$.`, R`$1 + \frac{x}{5} = 1.02$ gives $x = 0.1$.`],
  [R`|M1|Coefficients $10, 45, 120$`, R`|A1|$1 + 2x + \frac95 x^2 + \frac{24}{25}x^3$`, R`|M1|$x = 0.1$`, R`|A1|$1.21896$`], R`$1.21896$`,
  R`$45 \times \frac{1}{25} = \frac95$, $120 \times \frac{1}{125} = \frac{24}{25}$. Then $1 + 0.2 + 0.018 + 0.00096$.`),
Q('P8.5-11', 3, R`Use the first three terms of $(1 + x)^{10}$ with $x = 1$ to estimate $2^{10}$, and explain why the estimate is so poor. [[2]]`,
  [R`$1 + 10 + 45$.`, R`Is $x = 1$ small?`],
  [R`|B1|$56$, but $2^{10} = 1024$`, R`|B1|$x = 1$ isn't small, so the later terms are not negligible`], R`$56$ (true $1024$)`,
  R`With $x = 1$ every power of $x$ is $1$, and the large later coefficients ($120$, $210$, $252$, …) all matter.`),
Q('P8.5-12', 4, R`Expand $(1 - 3x)^5$ up to the $x^2$ term. Use it to estimate $0.97^5$, and find the percentage error to $2$ significant figures. [[4]]`,
  [R`$1 - 15x + 90x^2$.`, R`$1 - 3x = 0.97$ gives $x = 0.01$.`],
  [R`|B1|$1 - 15x + 90x^2$`, R`|M1|$x = 0.01$`, R`|A1|$0.859$`, R`|A1|$0.031\%$`], R`$0.859$; $0.031\%$`,
  R`$1 - 0.15 + 0.009 = 0.859$. $0.97^5 = 0.858734\ldots$, so the error is $\frac{0.000266}{0.858734} \times 100 \approx 0.031\%$.`),
Q('P8.5-13', 4, R`$(1 + kx)^6 = 1 + 3x + px^2 + \cdots$.

**(a)** Find $k$ and $p$. [[2]]

**(b)** Use your expansion to estimate $1.005^6$. [[2]]`,
  [R`$6k = 3$.`, R`$1 + kx = 1.005$.`],
  [R`(a)|B1|$k = \frac12$`, R`(a)|B1|$p = \frac{15}{4}$`, R`(b)|M1|$x = 0.01$`, R`(b)|A1|$1.030375$`], R`(a) $k = \frac12$, $p = \frac{15}{4}$ (b) $1.030375$`,
  R`(a) $p = 15k^2 = \frac{15}{4}$. (b) $1 + \frac{x}{2} = 1.005$ gives $x = 0.01$: $1 + 0.03 + 0.000375$.`),
Q('P8.5-14', 4, R`Expand $(2 - x)^7$ up to the $x^2$ term and use it to estimate $1.99^7$. [[4]]`,
  [R`$128 - 448x + 672x^2$.`, R`$x = 0.01$.`],
  [R`|B1|$128$`, R`|M1|$-7(64)x + 21(32)x^2$`, R`|A1|$128 - 448x + 672x^2$`, R`|A1|$123.5872$`], R`$123.5872$`,
  R`$128 - 4.48 + 0.0672 = 123.5872$.`),
Q('P8.5-15', 5, R`**(a)** Find the first four terms of $\left(1 - \dfrac{x}{10}\right)^{12}$ in ascending powers of $x$. [[3]]

**(b)** Use your answer with a suitable value of $x$ to estimate $0.99^{12}$. [[2]]

**(c)** Find the percentage error in your estimate, to $2$ significant figures. [[2]]

**(d)** State the value of $x$ you would use to estimate $0.98^{12}$, and explain why that estimate would be less accurate. [[1]]`,
  [R`$1 - 1.2x + 0.66x^2 - 0.22x^3$.`, R`$1 - \frac{x}{10} = 0.99$ gives $x = 0.1$.`],
  [R`(a)|M1|Coefficients $12, 66, 220$`, R`(a)|M1|Powers of $-\frac{1}{10}$`, R`(a)|A1|$1 - 1.2x + 0.66x^2 - 0.22x^3$`, R`(b)|M1|$x = 0.1$`, R`(b)|A1|$0.88638$`, R`(c)|M1|$0.99^{12} = 0.886384\ldots$`, R`(c)|A1|$0.00055\%$`, R`(d)|B1|$x = 0.2$; larger $x$, so the ignored terms are bigger`],
  R`(a) $1 - 1.2x + 0.66x^2 - 0.22x^3$ (b) $0.88638$ (c) $0.00055\%$ (d) $x = 0.2$`,
  R`(b) $1 - 0.12 + 0.0066 - 0.00022 = 0.88638$.

(c) $0.99^{12} = 0.8863848717\ldots$; error $\frac{0.0000049}{0.886385} \times 100 \approx 0.00055\%$.`)
]};
