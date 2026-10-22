/* Pure Mathematics Year 1 · Chapter 3 Equations and inequalities (sections 3.1 to 3.4) */
BOOK_CHAPTERS.push({ id:'P03', book:'Pure Mathematics Year 1', label:'Chapter 3', title:'Equations and inequalities', sections:[
  { id:'P3.1', num:'3.1', title:'Linear simultaneous equations' },
  { id:'P3.2', num:'3.2', title:'Quadratic simultaneous equations' },
  { id:'P3.3', num:'3.3', title:'Simultaneous equations on graphs' },
  { id:'P3.4', num:'3.4', title:'Linear inequalities' },
  { id:'P3.5', num:'3.5', title:'Quadratic inequalities' },
  { id:'P3.6', num:'3.6', title:'Inequalities on graphs' },
  { id:'P3.7', num:'3.7', title:'Regions' }
]});
FIGS['P3.3-meet'] = Fig.graph({ label: 'The line y = x + 1 meeting the curve y = x squared minus 1 at two points', fns: [{ f: x => x * x - 1, label: 'y = x² − 1', lx: 3, ly: 8.5 }, { f: x => x + 1, label: 'y = x + 1', lx: 3, ly: 3.4 }],
  x0: -3, x1: 3, y0: -2, y1: 9, xticks: [[-1, '−1'], [2, '2']], yticks: [[3, '3']], points: [{ x: -1, y: 0, label: '(−1, 0)', dx: -26 }, { x: 2, y: 3, label: '(2, 3)', dx: -26 }] });

CONTENT['P3.1'] = {
notes: R`
### Two methods
Two equations in two unknowns can be solved by:
- **Elimination:** multiply the equations so one variable has the same coefficient, then add or subtract.
- **Substitution:** rearrange one equation for one variable and substitute into the other.

### Elimination example
$3x + 2y = 8$ and $5x - 2y = 24$. Add: $8x = 32$, so $x = 4$. Then $12 + 2y = 8$, so $y = -2$.

### Check your answer
Substitute both values into the equation you **didn't** use to find the second one.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Solve $2x + 3y = 12$ and $3x - y = 7$.
1. Multiply the second by $3$: $9x - 3y = 21$.
2. Add to the first: $11x = 33$, so $x = 3$. Then $y = 3x - 7 = 2$.

### Worked example 2: subtract the whole equation
Solve $4x + 3y = 10$ and $4x - y = 6$.
- Subtract: $(4x + 3y) - (4x - y) = 10 - 6$, so $4y = 4$ and $y = 1$, $x = \frac{6 + 1}{4} = \frac74$.

**The trap:** writing $3y - y = 2y$. Subtracting $-y$ gives $+y$, so it's $3y + y = 4y$.

### Watch out
- Line the equations up with $x$, $y$ and the constant in columns before eliminating.
`,
questions: [
Q('P3.1-1', 1, R`Solve $x + y = 10$ and $x - y = 4$. [[2]]`,
  [R`Add the equations to remove $y$.`, R`$2x = 14$.`],
  [R`|M1|Adds or subtracts`, R`|A1|$x = 7$, $y = 3$`], R`$x = 7$, $y = 3$`,
  R`Adding: $2x = 14$, so $x = 7$ and $y = 3$.`),
Q('P3.1-2', 1, R`Solve $y = 2x - 1$ and $3x + y = 14$. [[2]]`,
  [R`Substitute $y = 2x - 1$.`, R`$3x + 2x - 1 = 14$.`],
  [R`|M1|Substitutes`, R`|A1|$x = 3$, $y = 5$`], R`$x = 3$, $y = 5$`,
  R`$5x - 1 = 14$, so $x = 3$ and $y = 5$.`),
Q('P3.1-3', 1, R`Solve $2x + y = 7$ and $2x - 3y = -5$. [[2]]`,
  [R`Subtract to remove $x$.`, R`$4y = 12$.`],
  [R`|M1|Subtracts`, R`|A1|$x = 2$, $y = 3$`], R`$x = 2$, $y = 3$`,
  R`Subtracting: $y - (-3y) = 7 - (-5)$, so $4y = 12$, $y = 3$, then $x = 2$.`),
Q('P3.1-4', 2, R`Solve $3x + 4y = 18$ and $2x - 3y = -5$. [[3]]`,
  [R`Make the $x$ coefficients equal: multiply by $2$ and $3$.`, R`$6x + 8y = 36$ and $6x - 9y = -15$.`],
  [R`|M1|Equates coefficients`, R`|A1|$y = 3$`, R`|A1|$x = 2$`], R`$x = 2$, $y = 3$`,
  R`Subtract: $17y = 51$, so $y = 3$; then $3x + 12 = 18$, $x = 2$.`),
Q('P3.1-5', 2, R`Solve $5x - 2y = 1$ and $3x + 4y = 37$. [[3]]`,
  [R`Double the first to get $-4y$.`, R`$10x - 4y = 2$; add.`],
  [R`|M1|Eliminates a variable`, R`|A1|$x = 3$`, R`|A1|$y = 7$`], R`$x = 3$, $y = 7$`,
  R`$10x - 4y = 2$ plus $3x + 4y = 37$: $13x = 39$, $x = 3$, then $y = 7$.`),
Q('P3.1-6', 2, R`Two cinema tickets and three drinks cost £$29$. One ticket and two drinks cost £$16$. Find the cost of a ticket and of a drink. [[3]]`,
  [R`$2t + 3d = 29$ and $t + 2d = 16$.`, R`Double the second and subtract.`],
  [R`|M1|Forms both equations`, R`|M1|Solves`, R`|A1|Ticket £$10$, drink £$3$`], R`Ticket £10, drink £3`,
  R`$2t + 3d = 29$ and $2t + 4d = 32$: subtract, $d = 3$, then $t = 16 - 6 = 10$.`),
Q('P3.1-7', 2, R`Solve $\dfrac{x}{2} + y = 5$ and $x - \dfrac{y}{3} = 3$. [[3]]`,
  [R`Clear the fractions first.`, R`$x + 2y = 10$ and $3x - y = 9$.`],
  [R`|M1|Clears fractions`, R`|M1|Solves`, R`|A1|$x = 4$, $y = 3$`], R`$x = 4$, $y = 3$`,
  R`$x + 2y = 10$ and $3x - y = 9$. Double the second: $6x - 2y = 18$; add: $7x = 28$, $x = 4$, $y = 3$.`),
Q('P3.1-8', 3, R`The line $y = mx + c$ passes through $(2, 5)$ and $(-1, -4)$. Find $m$ and $c$. [[3]]`,
  [R`Substitute each point: two equations.`, R`$5 = 2m + c$ and $-4 = -m + c$.`],
  [R`|M1|Both equations`, R`|A1|$m = 3$`, R`|A1|$c = -1$`], R`$m = 3$, $c = -1$`,
  R`$5 = 2m + c$ and $-4 = -m + c$. Subtract: $9 = 3m$, so $m = 3$ and $c = -1$.`),
Q('P3.1-9', 3, R`Solve $3(x + y) = 2(x - y) + 11$ and $x + 2y = 1$. [[3]]`,
  [R`Simplify the first: $x + 5y = 11$.`, R`Subtract the second.`],
  [R`|M1|$x + 5y = 11$`, R`|A1|$y = \frac{10}{3}$`, R`|A1|$x = -\frac{17}{3}$`], R`$x = -\frac{17}{3}$, $y = \frac{10}{3}$`,
  R`1. $3x + 3y = 2x - 2y + 11$, so $x + 5y = 11$.
2. Subtract $x + 2y = 1$: $3y = 10$, $y = \frac{10}{3}$.
3. $x = 1 - \frac{20}{3} = -\frac{17}{3}$.`),
Q('P3.1-10', 3, R`The equations $2x + ky = 4$ and $x - 3y = 1$ have no solution. Find $k$, and explain what this means geometrically. [[3]]`,
  [R`No solution means the lines are parallel.`, R`Rewrite each as $y = \ldots$ and compare gradients.`],
  [R`|M1|Compares gradients or coefficients`, R`|A1|$k = -6$`, R`|B1|The lines are parallel (and distinct), so never meet`], R`$k = -6$`,
  R`Gradients: $-\frac2k$ and $\frac13$. Parallel when $-\frac2k = \frac13$, so $k = -6$. Then the equations are $2x - 6y = 4$ ($x - 3y = 2$) and $x - 3y = 1$: parallel lines, never meeting.`),
Q('P3.1-11', 3, R`A number has two digits. The digits add to $11$. Reversing the digits makes the number $27$ bigger. Find the number. [[4]]`,
  [R`Let the number be $10a + b$.`, R`$a + b = 11$ and $10b + a = 10a + b + 27$.`],
  [R`|M1|$a + b = 11$`, R`|M1|$9b - 9a = 27$`, R`|M1|Solves`, R`|A1|$47$`], R`$47$`,
  R`$a + b = 11$ and $b - a = 3$, so $b = 7$, $a = 4$: the number is $47$ (and $74 - 47 = 27$ ✓).`),
Q('P3.1-12', 4, R`Solve the simultaneous equations
$$x + y + z = 6, \quad 2x - y + z = 3, \quad x + 2y - z = 2.$$ [[5]]`,
  [R`Eliminate $z$ from two different pairs.`, R`Adding the first and third: $2x + 3y = 8$. Adding the second and third: $3x + y = 5$.`],
  [R`|M1|Eliminates $z$ from one pair`, R`|M1|Eliminates $z$ from another pair`, R`|A1|$2x + 3y = 8$ and $3x + y = 5$`, R`|A1|$x = 1$, $y = 2$`, R`|A1|$z = 3$`],
  R`$x = 1$, $y = 2$, $z = 3$`,
  R`1. (1) + (3): $2x + 3y = 8$. (2) + (3): $3x + y = 5$.
2. From the second, $y = 5 - 3x$; then $2x + 15 - 9x = 8$, $x = 1$, $y = 2$.
3. $z = 6 - 1 - 2 = 3$.`),
Q('P3.1-13', 4, R`At a café, $3$ coffees and $2$ cakes cost £$13.50$, and $2$ coffees and $3$ cakes cost £$13$. Find the cost of $1$ coffee and $1$ cake, without finding each price first. Then find each price. [[4]]`,
  [R`Add the equations: $5$ coffees and $5$ cakes.`, R`Subtract: coffee minus cake.`],
  [R`|M1|Adds: $5c + 5k = 26.5$`, R`|A1|£$5.30$`, R`|M1|Subtracts: $c - k = 0.5$`, R`|A1|Coffee £$2.90$, cake £$2.40$`],
  R`£5.30; coffee £2.90, cake £2.40`,
  R`1. Add: $5c + 5k = 26.5$, so $c + k = 5.30$.
2. Subtract: $c - k = 0.50$.
3. So $c = 2.90$ and $k = 2.40$.`),
Q('P3.1-14', 4, R`Find the values of $a$ and $b$ such that $x = 2$, $y = -1$ is a solution of both $ax + by = 7$ and $bx - ay = 4$. [[4]]`,
  [R`Substitute: $2a - b = 7$ and $2b + a = 4$.`, R`Solve for $a$ and $b$.`],
  [R`|M1|Substitutes into both`, R`|A1|$2a - b = 7$ and $a + 2b = 4$`, R`|M1|Solves`, R`|A1|$a = \frac{18}{5}$, $b = \frac15$`], R`$a = \frac{18}{5}$, $b = \frac15$`,
  R`$2a - b = 7$ and $a + 2b = 4$. Double the first: $4a - 2b = 14$; add: $5a = 18$, $a = \frac{18}5$, then $b = 2a - 7 = \frac15$.`),
Q('P3.1-15', 5, R`The equations $x + 2y = 3$ and $3x + ky = c$ are given.

**(a)** Find the value of $k$ for which the equations do not have a unique solution. [[2]]

**(b)** For this $k$, find the value of $c$ for which there are infinitely many solutions, and explain why. [[2]]

**(c)** For $k = 2$, solve the equations in terms of $c$, and find $c$ so that $x = y$. [[4]]`,
  [R`No unique solution: the lines are parallel, so $\frac31 = \frac k2$.`, R`Infinitely many: the same line, so the second equation is $3$ times the first.`, R`For (c), subtract to eliminate $y$.`],
  [R`(a)|M1|Parallel: $\frac{k}{2} = 3$`, R`(a)|A1|$k = 6$`, R`(b)|A1|$c = 9$`, R`(b)|B1|Then the second equation is $3\times$ the first: the same line`, R`(c)|M1|$3x + 2y = c$ minus $x + 2y = 3$`, R`(c)|A1|$x = \frac{c - 3}{2}$`, R`(c)|A1|$y = \frac{9 - c}{4}$`, R`(c)|A1|$c = 5$`],
  R`(a) $k = 6$ (b) $c = 9$ (c) $x = \frac{c-3}{2}$, $y = \frac{9-c}{4}$; $c = 5$`,
  R`**(a)** The lines are parallel when $\frac{3}{1} = \frac{k}{2}$, so $k = 6$.

**(b)** With $k = 6$, $3x + 6y = 3(x + 2y) = 9$ is the same line when $c = 9$: every point on it is a solution.

**(c)** Subtract: $2x = c - 3$, so $x = \frac{c - 3}{2}$. Then $2y = 3 - x = \frac{9 - c}{2}$, $y = \frac{9 - c}{4}$.
$x = y$: $2(c - 3) = 9 - c$, so $3c = 15$, $c = 5$ (then $x = y = 1$ ✓).`)
]
};

CONTENT['P3.2'] = {
notes: R`
### One linear, one quadratic
1. Rearrange the **linear** equation for one variable.
2. Substitute into the quadratic.
3. Solve the quadratic.
4. Substitute each answer back into the **linear** equation to find the other variable.

There are usually **two pairs** of solutions.

::: booklet
**Not in the formula booklet:** this method.
:::

### Worked example 1
Solve $x + y = 5$ and $x^2 + y^2 = 13$.
1. $y = 5 - x$, so $x^2 + (5 - x)^2 = 13$, which gives $2x^2 - 10x + 12 = 0$.
2. $x^2 - 5x + 6 = 0$, so $x = 2$ or $3$.
3. Pairs: $(2, 3)$ and $(3, 2)$.

### Worked example 2: pair the answers correctly
Solve $y = 2x - 1$ and $xy = 3$.
- $x(2x - 1) = 3$, so $2x^2 - x - 3 = 0$ and $(2x - 3)(x + 1) = 0$.
- $x = \frac32$, $y = 2$; or $x = -1$, $y = -3$.

**The trap:** listing $x = \frac32, -1$ and $y = 2, -3$ without saying which goes with which. Write them as coordinate pairs.

### Watch out
- Substitute back into the **linear** equation: the quadratic can give extra, wrong pairings.
`,
questions: [
Q('P3.2-1', 1, R`Solve $y = x + 1$ and $y = x^2 - 1$. [[3]]`,
  [R`Set $x + 1 = x^2 - 1$.`, R`$x^2 - x - 2 = 0$.`],
  [R`|M1|$x^2 - x - 2 = 0$`, R`|A1|$x = 2$, $x = -1$`, R`|A1|$(2, 3)$ and $(-1, 0)$`], R`$(2, 3)$ and $(-1, 0)$`,
  R`$x^2 - x - 2 = (x - 2)(x + 1) = 0$, so $x = 2$, $y = 3$ or $x = -1$, $y = 0$.`),
Q('P3.2-2', 1, R`Solve $y = 3x$ and $y = x^2 + 2$. [[3]]`,
  [R`$x^2 + 2 = 3x$.`, R`$x^2 - 3x + 2 = 0$.`],
  [R`|M1|$x^2 - 3x + 2 = 0$`, R`|A1|$x = 1$, $x = 2$`, R`|A1|$(1, 3)$ and $(2, 6)$`], R`$(1, 3)$ and $(2, 6)$`,
  R`$(x - 1)(x - 2) = 0$: $(1, 3)$ and $(2, 6)$.`),
Q('P3.2-3', 1, R`Solve $x + y = 4$ and $xy = 3$. [[3]]`,
  [R`$y = 4 - x$.`, R`$x(4 - x) = 3$.`],
  [R`|M1|$x^2 - 4x + 3 = 0$`, R`|A1|$x = 1$, $x = 3$`, R`|A1|$(1, 3)$ and $(3, 1)$`], R`$(1, 3)$ and $(3, 1)$`,
  R`$x^2 - 4x + 3 = 0$, so $x = 1$, $y = 3$ or $x = 3$, $y = 1$.`),
Q('P3.2-4', 2, R`Solve $x + y = 5$ and $x^2 + y^2 = 13$. [[4]]`,
  [R`$y = 5 - x$.`, R`$2x^2 - 10x + 12 = 0$.`],
  [R`|M1|Substitutes $y = 5 - x$`, R`|A1|$x^2 - 5x + 6 = 0$`, R`|A1|$x = 2$ or $3$`, R`|A1|$(2, 3)$ and $(3, 2)$`], R`$(2, 3)$ and $(3, 2)$`,
  R`$x^2 + (5 - x)^2 = 13$, so $2x^2 - 10x + 12 = 0$, $x^2 - 5x + 6 = 0$: $x = 2$, $y = 3$ or $x = 3$, $y = 2$.`),
Q('P3.2-5', 2, R`Solve $y = 2x - 1$ and $xy = 3$. [[4]]`,
  [R`$x(2x - 1) = 3$.`, R`$(2x - 3)(x + 1) = 0$.`],
  [R`|M1|$2x^2 - x - 3 = 0$`, R`|M1|Solves`, R`|A1|$x = \frac32$, $y = 2$`, R`|A1|$x = -1$, $y = -3$`], R`$\left(\frac32, 2\right)$ and $(-1, -3)$`,
  R`$2x^2 - x - 3 = 0$, $(2x - 3)(x + 1) = 0$: $x = \frac32$, $y = 2$; $x = -1$, $y = -3$.`),
Q('P3.2-6', 2, R`Solve $x - 2y = 1$ and $x^2 - 4y^2 = 5$. [[4]]`,
  [R`$x = 1 + 2y$.`, R`Or: $x^2 - 4y^2 = (x - 2y)(x + 2y)$, so $x + 2y = 5$.`],
  [R`|M1|Substitutes or factorises`, R`|A1|$x + 2y = 5$ or $4y + 1 = 5$`, R`|A1|$y = 1$`, R`|A1|$x = 3$`], R`$x = 3$, $y = 1$`,
  R`$(x - 2y)(x + 2y) = 5$ and $x - 2y = 1$, so $x + 2y = 5$. Adding: $2x = 6$, $x = 3$, $y = 1$. (Only one pair here.)`),
Q('P3.2-7', 2, R`Solve $y = x^2 - 3x + 4$ and $y = 2x - 2$. [[4]]`,
  [R`$x^2 - 3x + 4 = 2x - 2$.`, R`$x^2 - 5x + 6 = 0$.`],
  [R`|M1|$x^2 - 5x + 6 = 0$`, R`|A1|$x = 2$, $3$`, R`|A1|$y = 2$`, R`|A1|$y = 4$`], R`$(2, 2)$ and $(3, 4)$`,
  R`$x^2 - 5x + 6 = 0$, so $x = 2$ or $3$; $y = 2x - 2$ gives $(2, 2)$ and $(3, 4)$.`),
Q('P3.2-8', 3, R`Solve $2x + y = 3$ and $x^2 + xy + y^2 = 7$. [[5]]`,
  [R`$y = 3 - 2x$.`, R`$x^2 + x(3 - 2x) + (3 - 2x)^2 = 7$.`, R`It simplifies to $3x^2 - 9x + 2 = 0$.`],
  [R`|M1|Substitutes $y = 3 - 2x$`, R`|A1|$3x^2 - 9x + 2 = 0$`, R`|M1|Quadratic formula`, R`|A1|$x = \frac{9 \pm \sqrt{57}}{6}$`, R`|A1|$y = 3 - 2x = \frac{\mp\sqrt{57}}{3}$`],
  R`$x = \frac{9 \pm \sqrt{57}}{6}$, $y = \mp\frac{\sqrt{57}}{3}$`,
  R`1. $x^2 + 3x - 2x^2 + 9 - 12x + 4x^2 = 7$, so $3x^2 - 9x + 2 = 0$.
2. $x = \dfrac{9 \pm \sqrt{81 - 24}}{6} = \dfrac{9 \pm \sqrt{57}}{6}$.
3. $y = 3 - 2x = 3 - \dfrac{9 \pm \sqrt{57}}{3} = \mp\dfrac{\sqrt{57}}{3}$ (the signs pair opposite ways).`),
Q('P3.2-9', 3, R`Find the points where the line $y = x + 2$ meets the circle $x^2 + y^2 = 10$. [[4]]`,
  [R`$x^2 + (x + 2)^2 = 10$.`, R`$2x^2 + 4x - 6 = 0$.`],
  [R`|M1|Substitutes`, R`|A1|$x^2 + 2x - 3 = 0$`, R`|A1|$x = 1$ or $-3$`, R`|A1|$(1, 3)$ and $(-3, -1)$`], R`$(1, 3)$ and $(-3, -1)$`,
  R`$2x^2 + 4x - 6 = 0$, $x^2 + 2x - 3 = 0$: $x = 1$, $y = 3$; $x = -3$, $y = -1$.`),
Q('P3.2-10', 3, R`A rectangle has perimeter $22$ cm and area $28$ cm². Find its dimensions. [[4]]`,
  [R`$2l + 2w = 22$ and $lw = 28$.`, R`$w = 11 - l$.`],
  [R`|M1|Both equations`, R`|M1|$l(11 - l) = 28$`, R`|A1|$l^2 - 11l + 28 = 0$`, R`|A1|$7$ cm by $4$ cm`], R`$7$ cm by $4$ cm`,
  R`$l + w = 11$, $lw = 28$: $l^2 - 11l + 28 = 0$, $(l - 4)(l - 7) = 0$. So $7$ cm by $4$ cm.`),
Q('P3.2-11', 3, R`Solve $y - x = 1$ and $x^2 + 3xy = 10$. [[5]]`,
  [R`$y = x + 1$.`, R`$x^2 + 3x(x + 1) = 10$, so $4x^2 + 3x - 10 = 0$.`],
  [R`|M1|Substitutes`, R`|A1|$4x^2 + 3x - 10 = 0$`, R`|M1|$(4x - 5)(x + 2) = 0$`, R`|A1|$x = \frac54$, $y = \frac94$`, R`|A1|$x = -2$, $y = -1$`],
  R`$\left(\frac54, \frac94\right)$ and $(-2, -1)$`,
  R`$4x^2 + 3x - 10 = 0$, $(4x - 5)(x + 2) = 0$: $x = \frac54$, $y = \frac94$; $x = -2$, $y = -1$.`),
Q('P3.2-12', 4, R`Solve $3x - y = 1$ and $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{3}{2}$, where $x, y \ne 0$. [[5]]`,
  [R`Multiply the second by $2xy$: $2y + 2x = 3xy$.`, R`Substitute $y = 3x - 1$.`],
  [R`|M1|$2x + 2y = 3xy$`, R`|M1|Substitutes $y = 3x - 1$`, R`|A1|$9x^2 - 11x + 2 = 0$`, R`|A1|$x = 1$, $y = 2$`, R`|A1|$x = \frac29$, $y = -\frac13$`],
  R`$(1, 2)$ and $\left(\frac29, -\frac13\right)$`,
  R`1. $2y + 2x = 3xy$. With $y = 3x - 1$: $2(3x - 1) + 2x = 3x(3x - 1)$, so $8x - 2 = 9x^2 - 3x$.
2. $9x^2 - 11x + 2 = 0$, $(9x - 2)(x - 1) = 0$.
3. $x = 1$, $y = 2$; $x = \frac29$, $y = -\frac13$.`),
Q('P3.2-13', 4, R`The sum of two numbers is $9$ and the sum of their squares is $53$. Find the numbers, and the difference of their cubes. [[5]]`,
  [R`$a + b = 9$, $a^2 + b^2 = 53$.`, R`$a^2 + (9 - a)^2 = 53$.`],
  [R`|M1|Forms the equations`, R`|M1|Substitutes`, R`|A1|$a^2 - 9a + 14 = 0$`, R`|A1|$2$ and $7$`, R`|A1|$7^3 - 2^3 = 335$`], R`$2$ and $7$; $335$`,
  R`$2a^2 - 18a + 28 = 0$, $a^2 - 9a + 14 = 0$, so the numbers are $2$ and $7$. $343 - 8 = 335$.`),
Q('P3.2-14', 4, R`The line $y = 2x + k$ meets the curve $y = x^2 + 1$ at exactly one point. Find $k$, and the point. [[4]]`,
  [R`$x^2 - 2x + 1 - k = 0$.`, R`Exactly one point: discriminant $= 0$.`],
  [R`|M1|$x^2 - 2x + (1 - k) = 0$`, R`|M1|$4 - 4(1 - k) = 0$`, R`|A1|$k = 0$`, R`|A1|$(1, 2)$`], R`$k = 0$; the point $(1, 2)$`,
  R`$x^2 - 2x + 1 - k = 0$ has one root when $4 - 4(1 - k) = 0$, so $k = 0$. Then $(x - 1)^2 = 0$: $x = 1$, $y = 2$.`),
Q('P3.2-15', 5, R`**(a)** Solve $x + y = 3$ and $x^3 + y^3 = 9$. [[5]]

**(b)** Hence, using $x^3 + y^3 = (x + y)^3 - 3xy(x + y)$, show how to find $xy$ directly, and check your answer to (a). [[3]]`,
  [R`$y = 3 - x$; expand $(3 - x)^3$.`, R`It becomes $9x^2 - 27x + 18 = 0$.`, R`For (b): $9 = 27 - 9xy$.`],
  [R`(a)|M1|Substitutes $y = 3 - x$`, R`(a)|M1|Expands $(3 - x)^3$`, R`(a)|A1|$x^2 - 3x + 2 = 0$`, R`(a)|A1|$x = 1$, $y = 2$`, R`(a)|A1|$x = 2$, $y = 1$`, R`(b)|M1|$9 = 27 - 9xy$`, R`(b)|A1|$xy = 2$`, R`(b)|A1|Matches $(1)(2) = 2$`],
  R`(a) $(1, 2)$ and $(2, 1)$ (b) $xy = 2$`,
  R`**(a)** $x^3 + 27 - 27x + 9x^2 - x^3 = 9$, so $9x^2 - 27x + 18 = 0$ and $x^2 - 3x + 2 = 0$: $x = 1$, $y = 2$ or $x = 2$, $y = 1$.

**(b)** $9 = 3^3 - 3xy(3) = 27 - 9xy$, so $xy = 2$. With $x + y = 3$ and $xy = 2$, the numbers are the roots of $t^2 - 3t + 2 = 0$: $1$ and $2$ ✓`)
]
};

CONTENT['P3.3'] = {
notes: R`
### Solutions as intersections
The solutions of simultaneous equations are the coordinates of the points where their graphs **intersect**.

[[fig:P3.3-meet]]

### How many intersections?
For a line and a curve, substitute to get a quadratic, then look at the discriminant:
| $b^2 - 4ac$ | The line... |
|---|---|
| $> 0$ | crosses the curve at two points |
| $= 0$ | touches the curve (it's a **tangent**) |
| $< 0$ | misses the curve |

::: booklet
**Not in the formula booklet:** this link between the discriminant and intersections.
:::

### Worked example 1
Does $y = x - 3$ meet $y = x^2 + x$?
- $x^2 + x = x - 3$ gives $x^2 + 3 = 0$: discriminant $-12 < 0$. No intersection.

### Worked example 2: rearrange before using $b^2 - 4ac$
Find $k$ so that $y = kx - 1$ is a tangent to $y = x^2 + 3$.
1. $x^2 + 3 = kx - 1$, so $x^2 - kx + 4 = 0$.
2. Tangent: $k^2 - 16 = 0$, so $k = \pm4$.

**The trap:** using $b = k$ instead of $b = -k$. It doesn't matter here because $b$ is squared, but read the coefficients from the **rearranged** equation.

### Watch out
- When asked to "sketch and show", label each intersection with its coordinates.
`,
questions: [
Q('P3.3-1', 1, R`How many times does $y = 2x + 1$ meet $y = x^2 + 2$? Give a reason. [[2]]`,
  [R`$x^2 - 2x + 1 = 0$.`, R`Discriminant $4 - 4$.`],
  [R`|M1|$x^2 - 2x + 1 = 0$ and its discriminant`, R`|A1|Once (discriminant $0$): a tangent`], R`Once; the line is a tangent`,
  R`$x^2 + 2 = 2x + 1$ gives $x^2 - 2x + 1 = 0$, with discriminant $0$: one point, $(1, 3)$. The line touches the curve.`),
Q('P3.3-2', 1, R`Find the points where $y = x$ meets $y = x^2 - 2$. [[2]]`,
  [R`$x^2 - x - 2 = 0$.`, R`Factorise.`],
  [R`|M1|$(x - 2)(x + 1) = 0$`, R`|A1|$(2, 2)$ and $(-1, -1)$`], R`$(2, 2)$ and $(-1, -1)$`,
  R`$x^2 - x - 2 = 0$: $x = 2$ or $-1$, giving $(2, 2)$ and $(-1, -1)$.`),
Q('P3.3-3', 1, R`Show that $y = -x - 4$ does not meet $y = x^2$. [[2]]`,
  [R`$x^2 + x + 4 = 0$.`, R`Discriminant $1 - 16$.`],
  [R`|M1|$x^2 + x + 4 = 0$`, R`|A1|$1 - 16 < 0$, so no intersection`], R`Discriminant $-15 < 0$`,
  R`$x^2 + x + 4 = 0$ has discriminant $1 - 16 = -15 < 0$, so there's no real solution and the graphs don't meet.`),
Q('P3.3-4', 2, R`Find the values of $c$ for which $y = 3x + c$ is a tangent to $y = x^2 + x$. [[3]]`,
  [R`$x^2 - 2x - c = 0$.`, R`Discriminant $= 0$.`],
  [R`|M1|$x^2 - 2x - c = 0$`, R`|M1|$4 + 4c = 0$`, R`|A1|$c = -1$`], R`$c = -1$`,
  R`$x^2 + x = 3x + c$, so $x^2 - 2x - c = 0$; tangent when $4 + 4c = 0$, $c = -1$.`),
Q('P3.3-5', 2, R`Find the range of $k$ for which $y = k$ meets $y = x^2 - 4x + 1$ at two points. [[3]]`,
  [R`The curve's minimum is $-3$.`, R`Or: $x^2 - 4x + 1 - k = 0$ with discriminant $> 0$.`],
  [R`|M1|$x^2 - 4x + (1 - k) = 0$`, R`|M1|$16 - 4(1 - k) > 0$`, R`|A1|$k > -3$`], R`$k > -3$`,
  R`$16 - 4(1 - k) > 0$, so $12 + 4k > 0$, $k > -3$. (The horizontal line must be above the minimum $(2, -3)$.)`),
Q('P3.3-6', 2, R`Find the coordinates where the line $x + y = 6$ meets the curve $y = x^2 - 6x + 10$. [[4]]`,
  [R`$y = 6 - x$.`, R`$x^2 - 5x + 4 = 0$.`],
  [R`|M1|Substitutes`, R`|A1|$x^2 - 5x + 4 = 0$`, R`|A1|$x = 1$, $4$`, R`|A1|$(1, 5)$ and $(4, 2)$`], R`$(1, 5)$ and $(4, 2)$`,
  R`$6 - x = x^2 - 6x + 10$, so $x^2 - 5x + 4 = 0$: $x = 1$ or $4$, giving $(1, 5)$ and $(4, 2)$.`),
Q('P3.3-7', 2, R`The line $y = mx$ is a tangent to $y = x^2 + 9$. Find the possible values of $m$. [[3]]`,
  [R`$x^2 - mx + 9 = 0$.`, R`$m^2 - 36 = 0$.`],
  [R`|M1|$x^2 - mx + 9 = 0$`, R`|M1|$m^2 - 36 = 0$`, R`|A1|$m = \pm6$`], R`$m = \pm6$`,
  R`$m^2 - 36 = 0$, so $m = \pm6$: two tangents through the origin, touching at $(3, 18)$ and $(-3, 18)$.`),
Q('P3.3-8', 3, R`Show that the line $y = 4x - 5$ is a tangent to the curve $y = x^2 - 1$, and find the point of contact. [[4]]`,
  [R`$x^2 - 4x + 4 = 0$.`, R`A repeated root means a tangent.`],
  [R`|M1|$x^2 - 4x + 4 = 0$`, R`|A1|Discriminant $0$, so a tangent`, R`|M1|$(x - 2)^2 = 0$`, R`|A1|$(2, 3)$`], R`Touches at $(2, 3)$`,
  R`$x^2 - 1 = 4x - 5$ gives $x^2 - 4x + 4 = (x - 2)^2 = 0$: a repeated root, so the line is a tangent. It touches at $x = 2$, $y = 3$.`),
Q('P3.3-9', 3, R`Find the set of values of $k$ for which $y = x + k$ meets $x^2 + y^2 = 8$ at two distinct points. [[4]]`,
  [R`$x^2 + (x + k)^2 = 8$.`, R`$2x^2 + 2kx + k^2 - 8 = 0$; discriminant $> 0$.`],
  [R`|M1|$2x^2 + 2kx + k^2 - 8 = 0$`, R`|M1|$4k^2 - 8(k^2 - 8) > 0$`, R`|A1|$k^2 < 16$`, R`|A1|$-4 < k < 4$`], R`$-4 < k < 4$`,
  R`$4k^2 - 8k^2 + 64 > 0$, so $64 > 4k^2$, $k^2 < 16$: $-4 < k < 4$.`),
Q('P3.3-10', 3, R`The curves $y = x^2 - 3x + 2$ and $y = 2 + x - x^2$ meet at $A$ and $B$. Find $A$ and $B$. [[4]]`,
  [R`Set them equal: $2x^2 - 4x = 0$.`, R`$2x(x - 2) = 0$.`],
  [R`|M1|$2x^2 - 4x = 0$`, R`|A1|$x = 0$, $x = 2$`, R`|A1|$(0, 2)$`, R`|A1|$(2, 0)$`], R`$(0, 2)$ and $(2, 0)$`,
  R`$x^2 - 3x + 2 = 2 + x - x^2$ gives $2x^2 - 4x = 0$, so $x = 0$ or $2$: points $(0, 2)$ and $(2, 0)$.`),
Q('P3.3-11', 3, R`Show that the line $2y = x + 4$ and the curve $y = \dfrac{x^2}{8} + \dfrac52$ meet at exactly one point, and find it. [[4]]`,
  [R`$\frac{x + 4}{2} = \frac{x^2}{8} + \frac52$. Multiply by $8$.`, R`$4x + 16 = x^2 + 20$.`],
  [R`|M1|Substitutes and clears fractions`, R`|A1|$x^2 - 4x + 4 = 0$`, R`|A1|Discriminant $0$: exactly one point`, R`|A1|$(2, 3)$`], R`$(2, 3)$`,
  R`1. $y = \frac{x + 4}{2}$, so $\dfrac{x + 4}{2} = \dfrac{x^2}{8} + \dfrac52$.
2. Multiply by $8$: $4x + 16 = x^2 + 20$, so $x^2 - 4x + 4 = 0$.
3. Discriminant $16 - 16 = 0$: one point. $(x - 2)^2 = 0$ gives $x = 2$, $y = 3$.`),
Q('P3.3-12', 4, R`The line $y = kx + 2$ meets the curve $y = x^2 - x + 3$.

**(a)** Show that the $x$-coordinates of the intersections satisfy $x^2 - (k + 1)x + 1 = 0$. [[2]]

**(b)** Find the values of $k$ for which the line is a tangent, and the points of contact. [[4]]`,
  [R`Set the expressions equal.`, R`Tangent: $(k + 1)^2 - 4 = 0$.`],
  [R`(a)|M1|$x^2 - x + 3 = kx + 2$`, R`(a)|A1|Rearranges (cso)`, R`(b)|M1|$(k + 1)^2 = 4$`, R`(b)|A1|$k = 1$ or $k = -3$`, R`(b)|A1|$k = 1$: $(1, 3)$`, R`(b)|A1|$k = -3$: $(-1, 5)$`],
  R`(b) $k = 1$ at $(1, 3)$; $k = -3$ at $(-1, 5)$`,
  R`**(a)** $x^2 - x + 3 = kx + 2$, so $x^2 - (k + 1)x + 1 = 0$. $\blacksquare$

**(b)** Tangent: $(k + 1)^2 - 4 = 0$, so $k + 1 = \pm2$, $k = 1$ or $-3$.
- $k = 1$: $x^2 - 2x + 1 = 0$, $x = 1$, $y = 3$.
- $k = -3$: $x^2 + 2x + 1 = 0$, $x = -1$, $y = 5$.`),
Q('P3.3-13', 4, R`The line $y = mx - 3$ passes through $(0, -3)$. Find the range of values of $m$ for which it does **not** meet the curve $y = x^2 + 1$. [[4]]`,
  [R`$x^2 - mx + 4 = 0$.`, R`No meeting: $m^2 - 16 < 0$.`],
  [R`|M1|$x^2 - mx + 4 = 0$`, R`|M1|$m^2 - 16 < 0$`, R`|A1|Critical values $\pm4$`, R`|A1|$-4 < m < 4$`], R`$-4 < m < 4$`,
  R`$x^2 + 1 = mx - 3$ gives $x^2 - mx + 4 = 0$. No real roots when $m^2 < 16$: $-4 < m < 4$.`),
Q('P3.3-14', 4, R`Find the equations of the two tangents to $y = x^2$ that pass through the point $(1, -3)$. [[5]]`,
  [R`A line through $(1, -3)$: $y = m(x - 1) - 3$.`, R`$x^2 - mx + m + 3 = 0$; discriminant $= 0$.`, R`$m^2 - 4m - 12 = 0$.`],
  [R`|M1|$y = m(x - 1) - 3$`, R`|M1|$x^2 - mx + (m + 3) = 0$`, R`|M1|$m^2 - 4(m + 3) = 0$`, R`|A1|$m = 6$ or $m = -2$`, R`|A1|$y = 6x - 9$ and $y = -2x - 1$`],
  R`$y = 6x - 9$ and $y = -2x - 1$`,
  R`1. $y = m(x - 1) - 3$. Meeting $y = x^2$: $x^2 - mx + m + 3 = 0$.
2. Tangent: $m^2 - 4m - 12 = 0$, so $(m - 6)(m + 2) = 0$.
3. $y = 6x - 9$ (touching at $(3, 9)$) and $y = -2x - 1$ (touching at $(-1, 1)$).`),
Q('P3.3-15', 5, R`The line $L$ has equation $y = x + c$ and the curve $C$ has equation $y = x^2 - 3x + 6$.

**(a)** Find the value of $c$ for which $L$ is a tangent to $C$. [[3]]

**(b)** For this $c$, find the point of contact $P$. [[2]]

**(c)** The line $y = x + 7$ meets $C$ at $A$ and $B$. Show that the midpoint of $AB$ has the same $x$-coordinate as $P$, and explain why. [[4]]`,
  [R`$x^2 - 4x + 6 - c = 0$, discriminant zero.`, R`For (c): $x^2 - 4x - 1 = 0$. The sum of the roots tells you the midpoint.`, R`Every line with gradient $1$ gives $x^2 - 4x + (6 - c) = 0$: the roots always add to $4$.`],
  [R`(a)|M1|$x^2 - 4x + 6 - c = 0$`, R`(a)|M1|$16 - 4(6 - c) = 0$`, R`(a)|A1|$c = 2$`, R`(b)|M1|$(x - 2)^2 = 0$`, R`(b)|A1|$P(2, 4)$`, R`(c)|M1|$x^2 - 4x - 1 = 0$`, R`(c)|M1|Roots $2 \pm \sqrt5$`, R`(c)|A1|Midpoint $x = 2$`, R`(c)|B1|Lines of gradient $1$ all give $x^2 - 4x + \ldots = 0$, whose roots are symmetric about $x = 2$`],
  R`(a) $c = 2$ (b) $P(2, 4)$`,
  R`**(a)** $x^2 - 3x + 6 = x + c$ gives $x^2 - 4x + (6 - c) = 0$. Tangent: $16 - 4(6 - c) = 0$, so $c = 2$.

**(b)** $x^2 - 4x + 4 = 0$, $x = 2$, $y = 4$: $P(2, 4)$.

**(c)** $x^2 - 4x - 1 = 0$ gives $x = 2 \pm \sqrt5$. The midpoint has $x = 2$, the same as $P$.
Any line $y = x + c$ gives $x^2 - 4x + (6 - c) = 0$, whose roots are $2 \pm \sqrt{c - 2}$: always symmetric about $x = 2$. So the midpoints of all these parallel chords lie on $x = 2$, through $P$.`)
]
};

CONTENT['P3.4'] = {
notes: R`
### Solving linear inequalities
Solve them like equations, with one extra rule:
> **Multiplying or dividing by a negative number reverses the inequality sign.**

$-3x > 12$ gives $x < -4$.

### Set notation
- $\{x : x > 2\}$ means "all $x$ such that $x > 2$".
- $\{x : 1 < x < 5\}$ for a range between two values.
- $\{x : x < -1\} \cup \{x : x > 3\}$ ("or": either part).
- $\cap$ means "and": both conditions at once.

### Combining inequalities
For two conditions, draw both on a number line and find the overlap.

::: booklet
**Not in the formula booklet:** set notation. You may be asked to give answers in it.
:::

### Worked example 1
Solve $5 - 2x \le 11$: $-2x \le 6$, so $x \ge -3$ (sign reversed).

### Worked example 2: both conditions
Find the values of $x$ that satisfy $3x - 1 > 5$ **and** $2x + 3 < 15$.
1. $x > 2$ and $x < 6$.
2. Overlap: $2 < x < 6$, or $\{x : 2 < x < 6\}$.

**The trap:** giving $x > 2$ or $x < 6$ separately, which covers every number. "And" means the overlap.

### Watch out
- $\le$ and $\ge$ include the end value; use a solid dot on a number line. $<$ and $>$ don't; use an open circle.
`,
questions: [
Q('P3.4-1', 1, R`Solve $3x + 4 > 19$. [[1]]`,
  [R`Subtract $4$, then divide by $3$.`, R`$3x > 15$.`],
  [R`|B1|$x > 5$`], R`$x > 5$`,
  R`$3x > 15$, so $x > 5$.`),
Q('P3.4-2', 1, R`Solve $7 - 2x \le 1$. [[2]]`,
  [R`$-2x \le -6$.`, R`Dividing by $-2$ reverses the sign.`],
  [R`|M1|$-2x \le -6$`, R`|A1|$x \ge 3$`], R`$x \ge 3$`,
  R`$-2x \le -6$; divide by $-2$ and reverse: $x \ge 3$.`),
Q('P3.4-3', 1, R`Solve $2(x - 3) < x + 1$. [[2]]`,
  [R`Expand: $2x - 6 < x + 1$.`, R`Collect $x$ terms.`],
  [R`|M1|$2x - 6 < x + 1$`, R`|A1|$x < 7$`], R`$x < 7$`,
  R`$2x - 6 < x + 1$, so $x < 7$.`),
Q('P3.4-4', 2, R`Solve $\dfrac{x + 5}{3} \ge 2x - 5$. [[3]]`,
  [R`Multiply by $3$ (positive, so no change).`, R`$x + 5 \ge 6x - 15$.`],
  [R`|M1|Multiplies by $3$`, R`|M1|$-5x \ge -20$`, R`|A1|$x \le 4$`], R`$x \le 4$`,
  R`$x + 5 \ge 6x - 15$, so $20 \ge 5x$ and $x \le 4$.`),
Q('P3.4-5', 2, R`Find the set of values of $x$ for which $2x - 1 > 3$ and $5 - x > 0$, giving your answer in set notation. [[3]]`,
  [R`$x > 2$ and $x < 5$.`, R`The overlap.`],
  [R`|B1|$x > 2$`, R`|B1|$x < 5$`, R`|B1|$\{x : 2 < x < 5\}$`], R`$\{x : 2 < x < 5\}$`,
  R`$2x > 4$ gives $x > 2$; $x < 5$. Both: $\{x : 2 < x < 5\}$.`),
Q('P3.4-6', 2, R`Solve $-4 < 2x + 6 \le 10$. [[2]]`,
  [R`Do the same thing to all three parts.`, R`Subtract $6$, then divide by $2$.`],
  [R`|M1|$-10 < 2x \le 4$`, R`|A1|$-5 < x \le 2$`], R`$-5 < x \le 2$`,
  R`$-10 < 2x \le 4$, so $-5 < x \le 2$.`),
Q('P3.4-7', 2, R`Find the integers $n$ for which $3n - 2 > 4$ and $2n + 1 \le 11$. [[3]]`,
  [R`$n > 2$ and $n \le 5$.`, R`List the integers.`],
  [R`|B1|$n > 2$`, R`|B1|$n \le 5$`, R`|B1|$3, 4, 5$`], R`$3, 4, 5$`,
  R`$n > 2$ and $n \le 5$: the integers $3$, $4$, $5$.`),
Q('P3.4-8', 3, R`Find the set of values of $x$ for which $3(x + 2) > 4x - 1$ or $x - 8 > 2$. Give your answer in set notation. [[3]]`,
  [R`$x < 7$ or $x > 10$.`, R`"Or" means the union.`],
  [R`|B1|$x < 7$`, R`|B1|$x > 10$`, R`|B1|$\{x : x < 7\} \cup \{x : x > 10\}$`], R`$\{x : x < 7\} \cup \{x : x > 10\}$`,
  R`$3x + 6 > 4x - 1$ gives $x < 7$; $x > 10$. Either: $\{x : x < 7\} \cup \{x : x > 10\}$.`),
Q('P3.4-9', 3, R`A rectangle has length $(2x + 1)$ cm and width $(x - 2)$ cm. Its perimeter is less than $40$ cm. Find the range of possible values of $x$. [[4]]`,
  [R`Both sides must be positive: $x > 2$.`, R`$2(2x + 1) + 2(x - 2) < 40$.`],
  [R`|M1|Perimeter inequality`, R`|A1|$6x - 2 < 40$, so $x < 7$`, R`|B1|$x > 2$ for a positive width`, R`|A1|$2 < x < 7$`], R`$2 < x < 7$`,
  R`Perimeter $= 6x - 2 < 40$, so $x < 7$. The width $x - 2$ must be positive, so $x > 2$. So $2 < x < 7$.`),
Q('P3.4-10', 3, R`Solve $\dfrac{3 - 2x}{4} < \dfrac{x}{3} + 1$. [[3]]`,
  [R`Multiply by $12$.`, R`$9 - 6x < 4x + 12$.`],
  [R`|M1|Multiplies by $12$`, R`|M1|$-10x < 3$`, R`|A1|$x > -\frac{3}{10}$`], R`$x > -\frac{3}{10}$`,
  R`$3(3 - 2x) < 4x + 12$, so $9 - 6x < 4x + 12$, $-10x < 3$, $x > -\frac3{10}$.`),
Q('P3.4-11', 3, R`A phone plan costs £$12$ a month plus $5$p per text. Another costs £$20$ a month with unlimited texts. Find how many texts a month make the second plan cheaper. [[3]]`,
  [R`$12 + 0.05t > 20$.`, R`$t > 160$.`],
  [R`|M1|$12 + 0.05t > 20$`, R`|A1|$t > 160$`, R`|A1|At least $161$ texts`], R`$161$ or more texts`,
  R`The second plan is cheaper when $12 + 0.05t > 20$, so $t > 160$: **161 or more** texts a month.`),
Q('P3.4-12', 4, R`Find the set of values of $k$ for which the solution of $3x + k = 2(x - 1)$ is positive and less than $5$. [[4]]`,
  [R`Solve for $x$ in terms of $k$: $x = -k - 2$.`, R`$0 < -k - 2 < 5$.`],
  [R`|M1|$x = -k - 2$`, R`|M1|$0 < -k - 2 < 5$`, R`|A1|$k < -2$ and $k > -7$`, R`|A1|$-7 < k < -2$`], R`$-7 < k < -2$`,
  R`$3x + k = 2x - 2$, so $x = -k - 2$. Then $0 < -k - 2 < 5$: $2 < -k < 7$, i.e. $-7 < k < -2$.`),
Q('P3.4-13', 4, R`Find the set of values of $x$ for which $\dfrac{2x - 1}{3} - \dfrac{x + 2}{4} > \dfrac{x}{6}$. [[4]]`,
  [R`Multiply by $12$.`, R`$4(2x - 1) - 3(x + 2) > 2x$.`],
  [R`|M1|Multiplies by $12$`, R`|A1|$8x - 4 - 3x - 6 > 2x$`, R`|M1|Collects terms`, R`|A1|$x > \frac{10}{3}$`], R`$x > \frac{10}{3}$`,
  R`$8x - 4 - 3x - 6 > 2x$, so $3x > 10$, $x > \frac{10}{3}$.`),
Q('P3.4-14', 4, R`The lengths $4$, $x$ and $x + 2$ are the sides of a triangle. Use the triangle inequality to find the range of possible values of $x$. [[4]]`,
  [R`Each side must be less than the sum of the other two.`, R`Three inequalities: $4 < x + (x + 2)$, $x < 4 + x + 2$, $x + 2 < 4 + x$.`],
  [R`|M1|At least two triangle inequalities`, R`|A1|$4 < 2x + 2$, so $x > 1$`, R`|A1|The other two are always true`, R`|A1|$x > 1$`], R`$x > 1$`,
  R`1. $4 < 2x + 2$ gives $x > 1$.
2. $x < x + 6$ and $x + 2 < x + 4$ are always true.
3. So $x > 1$.`),
Q('P3.4-15', 5, R`The integers $a$ and $b$ satisfy $2 \le a \le 5$ and $-3 \le b \le 1$.

**(a)** Find the greatest and least possible values of $a - b$. [[2]]

**(b)** Find the greatest and least possible values of $ab$. [[3]]

**(c)** Find the greatest possible value of $\dfrac{b}{a}$, and explain why the answer to (b) is not just (greatest $a$) $\times$ (greatest $b$). [[3]]`,
  [R`$a - b$ is largest with $a$ big and $b$ small.`, R`For $ab$, check the corners: $b$ can be negative.`, R`$\frac ba$ is largest when $b$ is positive and $a$ small.`],
  [R`(a)|B1|Greatest $5 - (-3) = 8$`, R`(a)|B1|Least $2 - 1 = 1$`, R`(b)|M1|Tests the extreme pairs`, R`(b)|A1|Greatest $5$ (at $5 \times 1$)`, R`(b)|A1|Least $-15$ (at $5 \times (-3)$)`, R`(c)|B1|Greatest $\frac12$`, R`(c)|B1|At $b = 1$, $a = 2$`, R`(c)|B1|With negative values, multiplying large numbers can give the most negative product`],
  R`(a) $8$ and $1$ (b) $5$ and $-15$ (c) $\frac12$`,
  R`**(a)** Greatest: $5 - (-3) = 8$. Least: $2 - 1 = 1$.

**(b)** The extremes come from the corner values: $2 \times (-3) = -6$, $2 \times 1 = 2$, $5 \times (-3) = -15$, $5 \times 1 = 5$. Greatest $5$, least $-15$.

**(c)** $\frac ba$ is largest with $b$ positive and $a$ as small as possible: $\frac12$. In (b) the greatest $ab$ happens to be $5 \times 1$, but the least uses the greatest $a$ with the most negative $b$: with negative numbers, "biggest times biggest" doesn't give every extreme.`)
]
};
