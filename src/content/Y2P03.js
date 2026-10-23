/* Pure Mathematics Year 2 · Chapter 3 Sequences and series (sections 3.1 to 3.8) */
BOOK_CHAPTERS.push({ id:'Y2P03', book:'Pure Mathematics Year 2', label:'Chapter 3', title:'Sequences and series', sections:[
  { id:'2P3.1', num:'3.1', title:'Arithmetic sequences' },
  { id:'2P3.2', num:'3.2', title:'Arithmetic series' },
  { id:'2P3.3', num:'3.3', title:'Geometric sequences' },
  { id:'2P3.4', num:'3.4', title:'Geometric series' },
  { id:'2P3.5', num:'3.5', title:'Sum to infinity' },
  { id:'2P3.6', num:'3.6', title:'Sigma notation' },
  { id:'2P3.7', num:'3.7', title:'Recurrence relations' },
  { id:'2P3.8', num:'3.8', title:'Modelling with series' }
]});
// Plot of the first terms of a sequence as points.
const Y2seq = (label, terms, y0, y1, step) => Fig.graph({ label, x0: 0, x1: terms.length + 1, y0, y1, xlab: 'n', ylab: 'uₙ',
  xticks: terms.map((_, i) => [i + 1, String(i + 1)]), yticks: (() => { const r = []; for (let v = Math.ceil(y0 / step) * step; v <= y1; v += step) if (v) r.push([v, String(v)]); return r; })(),
  points: terms.map((t, i) => ({ x: i + 1, y: t })) });
FIGS['2P3.1-seq'] = Y2seq('The arithmetic sequence 5, 8, 11, 14, 17, 20: the points lie on a straight line with gradient 3', [5, 8, 11, 14, 17, 20], 0, 22, 5);
FIGS['2P3.5-conv'] = Fig.graph({ label: 'Partial sums of 8 + 4 + 2 + ... approach the sum to infinity 16', x0: 0, x1: 9, y0: 0, y1: 18, xlab: 'n', ylab: 'Sₙ',
  xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(v => [v, String(v)]), yticks: [[4, '4'], [8, '8'], [12, '12'], [16, '16']], hlines: [{ y: 16, label: 'S∞ = 16' }],
  points: [8, 12, 14, 15, 15.5, 15.75, 15.875, 15.9375].map((s, i) => ({ x: i + 1, y: s })) });

CONTENT['2P3.1'] = {
notes: R`
### Arithmetic sequences
An **arithmetic sequence** increases by the same amount, the **common difference** $d$, each time. With first term $a$:
$$u_n = a + (n - 1)d$$
- Given two terms, write two equations and solve for $a$ and $d$.
- Three consecutive terms $x, y, z$ are arithmetic when $y - x = z - y$, that is $2y = x + z$.

[[fig:2P3.1-seq]]

::: booklet
**In the formula booklet:** the arithmetic series formula. The $n$th term $u_n = a + (n - 1)d$ isn't given, so learn it.
:::

### Worked example 1
The $3$rd term is $11$ and the $8$th is $31$. Find $a$ and $d$.
- $a + 2d = 11$ and $a + 7d = 31$. Subtracting, $5d = 20$, so $d = 4$ and $a = 3$.

### Worked example 2: counting terms
How many terms are in $6, 11, 16, \dots, 201$?
- $6 + 5(n - 1) = 201$, so $5(n - 1) = 195$ and $n = 40$.

**The trap:** working out $\frac{201 - 6}{5} = 39$ and stopping. That counts the **gaps** between terms; there's one more term than gaps.

### Watch out
- "First term greater than ..." needs an inequality and the next whole number.
`,
questions: [
Q('2P3.1-1', 1, R`Find the $20$th term of $5, 8, 11, \dots$ [[1]]`,
  [R`$a = 5$, $d = 3$.`, R`$5 + 19 \times 3$.`],
  [R`|B1|$62$`], R`$62$`,
  R`$u_{20} = 5 + 19 \times 3 = 62$.`, { fig: FIGS['2P3.1-seq'] }),
Q('2P3.1-2', 1, R`Find the $n$th term of $7, 3, -1, \dots$ [[1]]`,
  [R`$d = -4$.`, R`$7 - 4(n - 1)$.`],
  [R`|B1|$u_n = 11 - 4n$`], R`$11 - 4n$`,
  R`$u_n = 7 - 4(n - 1) = 11 - 4n$.`),
Q('2P3.1-3', 1, R`Is $100$ a term of $4, 7, 10, \dots$? Explain. [[1]]`,
  [R`$u_n = 3n + 1$.`, R`Is $n$ a whole number?`],
  [R`|B1|Yes: $3n + 1 = 100$ gives $n = 33$`], R`Yes, the $33$rd term`,
  R`$u_n = 3n + 1 = 100$ gives $n = 33$, a whole number, so $100$ is the $33$rd term.`),
Q('2P3.1-4', 2, R`The $3$rd term of an arithmetic sequence is $11$ and the $8$th term is $31$. Find the first term and the common difference. [[2]]`,
  [R`$a + 2d = 11$ and $a + 7d = 31$.`, R`Subtract.`],
  [R`|M1|$a + 2d = 11$ and $a + 7d = 31$`, R`|A1|$d = 4$, $a = 3$`], R`$a = 3$, $d = 4$`,
  R`Subtracting: $5d = 20$, so $d = 4$ and $a = 11 - 8 = 3$.`),
Q('2P3.1-5', 2, R`How many terms are there in the sequence $6, 11, 16, \dots, 201$? [[2]]`,
  [R`$6 + 5(n - 1) = 201$.`, R`Don't forget the first term.`],
  [R`|M1|$6 + 5(n - 1) = 201$`, R`|A1|$40$`], R`$40$`,
  R`$5(n - 1) = 195$, so $n - 1 = 39$ and $n = 40$.`),
Q('2P3.1-6', 2, R`Find the first term of $7, 13, 19, \dots$ that is greater than $200$. [[2]]`,
  [R`$u_n = 6n + 1 > 200$.`, R`$n > 33.2$.`],
  [R`|M1|$6n + 1 > 200$`, R`|A1|$n = 34$, term $205$`], R`$205$`,
  R`$6n + 1 > 200$ gives $n > 33.2$, so $n = 34$ and the term is $205$.`),
Q('2P3.1-7', 2, R`The terms $k$, $2k + 1$ and $5k - 6$ are consecutive terms of an arithmetic sequence. Find $k$. [[3]]`,
  [R`Middle term: $2(2k + 1) = k + (5k - 6)$.`, R`Solve.`],
  [R`|M1|$(2k + 1) - k = (5k - 6) - (2k + 1)$`, R`|M1|$k + 1 = 3k - 7$`, R`|A1|$k = 4$`], R`$k = 4$`,
  R`Equal differences: $k + 1 = 3k - 7$, so $k = 4$ (terms $4, 9, 14$).`),
Q('2P3.1-8', 3, R`In an arithmetic sequence, $u_5 = 17$ and $u_{12} = 45$. Find $u_{20}$. [[3]]`,
  [R`$7d = 28$.`, R`Then $a$.`],
  [R`|M1|$a + 4d = 17$ and $a + 11d = 45$`, R`|A1|$d = 4$, $a = 1$`, R`|A1|$u_{20} = 77$`], R`$77$`,
  R`$7d = 28$, so $d = 4$ and $a = 1$. $u_{20} = 1 + 19 \times 4 = 77$.`),
Q('2P3.1-9', 3, R`Sequence $A$ is $3, 7, 11, \dots$ and sequence $B$ is $100, 94, 88, \dots$ Find the smallest $n$ for which the $n$th term of $A$ is greater than the $n$th term of $B$. [[3]]`,
  [R`$A$: $4n - 1$. $B$: $106 - 6n$.`, R`$4n - 1 > 106 - 6n$.`],
  [R`|B1|$4n - 1$ and $106 - 6n$`, R`|M1|$10n > 107$`, R`|A1|$n = 11$`], R`$n = 11$`,
  R`$4n - 1 > 106 - 6n$ gives $n > 10.7$, so $n = 11$ ($43 > 40$).`),
Q('2P3.1-10', 3, R`A starting salary of £$24\,000$ rises by £$1200$ each year. In which year does the salary first exceed £$35\,000$? [[3]]`,
  [R`$24\,000 + 1200(n - 1) > 35\,000$.`, R`$n - 1 > 9.17$.`],
  [R`|M1|$24\,000 + 1200(n - 1) > 35\,000$`, R`|M1|$n - 1 > 9.17$`, R`|A1|Year $11$`], R`Year $11$`,
  R`$1200(n - 1) > 11\,000$, so $n - 1 > 9.17$ and $n = 11$ (salary £$36\,000$).`),
Q('2P3.1-11', 3, R`Show that $\log a$, $\log ab$, $\log ab^2$ are consecutive terms of an arithmetic sequence, and state the common difference. [[2]]`,
  [R`Use $\log xy = \log x + \log y$.`, R`Find the differences.`],
  [R`|M1|$\log ab - \log a = \log b$ and $\log ab^2 - \log ab = \log b$`, R`|A1|Equal differences; $d = \log b$`], R`$d = \log b$`,
  R`$\log ab = \log a + \log b$ and $\log ab^2 = \log a + 2\log b$, so each difference is $\log b$.`),
Q('2P3.1-12', 4, R`$2x + 1$, $4x - 3$ and $3x + 4$ are consecutive terms of an arithmetic sequence. Find $x$ and the common difference. [[3]]`,
  [R`$2(4x - 3) = (2x + 1) + (3x + 4)$.`, R`$8x - 6 = 5x + 5$.`],
  [R`|M1|$2(4x - 3) = 5x + 5$`, R`|A1|$x = \frac{11}{3}$`, R`|A1|$d = \frac{10}{3}$`], R`$x = \frac{11}{3}$, $d = \frac{10}{3}$`,
  R`$8x - 6 = 5x + 5$ gives $x = \frac{11}{3}$. The terms are $\frac{25}{3}, \frac{35}{3}, \frac{45}{3}$, so $d = \frac{10}{3}$.`),
Q('2P3.1-13', 4, R`Show that $\ln 3$, $\ln 9$, $\ln 27, \dots$ is arithmetic, and find its $n$th term. [[2]]`,
  [R`$\ln 3^k = k\ln 3$.`, R`$d = \ln 3$.`],
  [R`|M1|Terms are $\ln 3, 2\ln 3, 3\ln 3$`, R`|A1|$u_n = n\ln 3$`], R`$u_n = n\ln 3$`,
  R`$\ln 9 = 2\ln 3$ and $\ln 27 = 3\ln 3$, so each term increases by $\ln 3$ and $u_n = n\ln 3$.`),
Q('2P3.1-14', 4, R`In an arithmetic sequence, $u_3 + u_7 = 30$ and $u_{10} = 32$. Find $a$ and $d$. [[4]]`,
  [R`$(a + 2d) + (a + 6d) = 30$.`, R`$a + 9d = 32$.`],
  [R`|M1|$2a + 8d = 30$`, R`|M1|$a + 9d = 32$`, R`|A1|$d = 3.4$`, R`|A1|$a = 1.4$`], R`$a = 1.4$, $d = 3.4$`,
  R`$a = 15 - 4d$, so $15 + 5d = 32$, giving $d = 3.4$ and $a = 1.4$.`),
Q('2P3.1-15', 5, R`In an arithmetic sequence, the sum of the $2$nd and $5$th terms is $25$ and the product of the $1$st and $3$rd terms is $55$. Find the two possible pairs of values of $a$ and $d$. [[5]]`,
  [R`$2a + 5d = 25$ and $a(a + 2d) = 55$.`, R`Substitute $a = \frac{25 - 5d}{2}$.`],
  [R`|M1|$2a + 5d = 25$`, R`|M1|$a(a + 2d) = 55$`, R`|M1|$d^2 - 30d + 81 = 0$`, R`|A1|$d = 3$, $a = 5$`, R`|A1|$d = 27$, $a = -55$`], R`$a = 5, d = 3$ or $a = -55, d = 27$`,
  R`$a = \frac{25 - 5d}{2}$ and $a + 2d = \frac{25 - d}{2}$, so $(25 - 5d)(25 - d) = 220$, giving $5d^2 - 150d + 405 = 0$, i.e. $d^2 - 30d + 81 = 0$. So $d = 3$ ($a = 5$) or $d = 27$ ($a = -55$).`)
]};

CONTENT['2P3.2'] = {
notes: R`
### Arithmetic series
The sum of the first $n$ terms of an arithmetic sequence is
$$S_n = \frac{n}{2}\left(2a + (n - 1)d\right) = \frac{n}{2}(a + l)$$
where $l$ is the last term.

**Proof:** write $S_n$ forwards and backwards and add: each pair sums to $a + l$, and there are $n$ pairs, so $2S_n = n(a + l)$.

::: booklet
**In the formula booklet:** $S_n = \frac12 n\{2a + (n - 1)d\}$. You may be asked to prove it, so learn the proof.
:::

### Worked example 1
Find $3 + 7 + 11 + \dots$ to $20$ terms.
$$S_{20} = 10(6 + 19 \times 4) = 820$$

### Worked example 2: how many terms?
Find the least $n$ for which $3 + 7 + 11 + \dots$ to $n$ terms exceeds $500$.
- $S_n = \frac{n}{2}(6 + 4(n - 1)) = n(2n + 1) > 500$.
- $2n^2 + n - 500 = 0$ has positive root $15.6$, so $n = 16$.

**The trap:** rounding $15.6$ down to $15$. $S_{15} = 465$, which isn't enough.

### Watch out
- $u_n = S_n - S_{n - 1}$ links a term to the sums.
`,
questions: [
Q('2P3.2-1', 1, R`Find $1 + 2 + 3 + \dots + 100$. [[1]]`,
  [R`$\frac{n}{2}(a + l)$.`, R`$50 \times 101$.`],
  [R`|B1|$5050$`], R`$5050$`,
  R`$\frac{100}{2}(1 + 100) = 5050$.`),
Q('2P3.2-2', 1, R`Find the sum of the first $20$ terms of $3, 7, 11, \dots$ [[2]]`,
  [R`$a = 3$, $d = 4$, $n = 20$.`, R`$10(6 + 76)$.`],
  [R`|M1|$\frac{20}{2}(2 \times 3 + 19 \times 4)$`, R`|A1|$820$`], R`$820$`,
  R`$S_{20} = 10(6 + 76) = 820$.`),
Q('2P3.2-3', 1, R`Find $2 + 5 + 8 + \dots + 62$. [[2]]`,
  [R`Number of terms: $2 + 3(n - 1) = 62$.`, R`$n = 21$.`],
  [R`|M1|$n = 21$`, R`|A1|$\frac{21}{2}(2 + 62) = 672$`], R`$672$`,
  R`$3(n - 1) = 60$ gives $n = 21$, so the sum is $\frac{21}{2} \times 64 = 672$.`),
Q('2P3.2-4', 2, R`Find the sum of the odd numbers from $1$ to $99$. [[2]]`,
  [R`$50$ terms.`, R`$\frac{50}{2}(1 + 99)$.`],
  [R`|M1|$n = 50$`, R`|A1|$2500$`], R`$2500$`,
  R`There are $50$ odd numbers, so the sum is $25 \times 100 = 2500$.`),
Q('2P3.2-5', 2, R`Prove that the sum of the first $n$ terms of an arithmetic series is $\frac{n}{2}\left(2a + (n - 1)d\right)$. [[4]]`,
  [R`Write the sum forwards and backwards.`, R`Add the two lines.`],
  [R`|B1|$S_n = a + (a + d) + \dots + (a + (n - 1)d)$`, R`|M1|$S_n = (a + (n - 1)d) + \dots + a$`, R`|M1|Adding: $2S_n = n(2a + (n - 1)d)$`, R`|A1|$S_n = \frac{n}{2}(2a + (n - 1)d)$`], R`Proof`,
  R`$S_n = a + (a + d) + \dots + [a + (n - 1)d]$. Reversed: $S_n = [a + (n - 1)d] + \dots + a$. Adding term by term, each of the $n$ pairs is $2a + (n - 1)d$, so $2S_n = n[2a + (n - 1)d]$ and $S_n = \frac{n}{2}[2a + (n - 1)d]$.`),
Q('2P3.2-6', 2, R`Find, in terms of $n$, the sum of the first $n$ terms of $5 + 9 + 13 + \dots$ [[2]]`,
  [R`$a = 5$, $d = 4$.`, R`Simplify.`],
  [R`|M1|$\frac{n}{2}(10 + 4(n - 1))$`, R`|A1|$n(2n + 3)$`], R`$n(2n + 3)$`,
  R`$\frac{n}{2}(4n + 6) = n(2n + 3)$.`),
Q('2P3.2-7', 2, R`Find the least $n$ for which $3 + 7 + 11 + \dots$ to $n$ terms exceeds $500$. [[3]]`,
  [R`$S_n = n(2n + 1)$.`, R`Solve $2n^2 + n - 500 > 0$.`],
  [R`|M1|$n(2n + 1) > 500$`, R`|M1|Positive root $15.6$`, R`|A1|$n = 16$`], R`$16$`,
  R`$2n^2 + n - 500 = 0$ gives $n = 15.6$, so $n = 16$ ($S_{16} = 528$, $S_{15} = 465$).`),
Q('2P3.2-8', 3, R`An arithmetic series has first term $2$ and $S_{10} = 155$. Find the common difference. [[2]]`,
  [R`$5(4 + 9d) = 155$.`, R`$9d = 27$.`],
  [R`|M1|$5(4 + 9d) = 155$`, R`|A1|$d = 3$`], R`$d = 3$`,
  R`$4 + 9d = 31$, so $d = 3$.`),
Q('2P3.2-9', 3, R`Find the sum of the multiples of $3$ between $100$ and $200$. [[3]]`,
  [R`$102, 105, \dots, 198$.`, R`How many terms?`],
  [R`|M1|First $102$, last $198$`, R`|M1|$n = 33$`, R`|A1|$4950$`], R`$4950$`,
  R`$102 + 3(n - 1) = 198$ gives $n = 33$. Sum $= \frac{33}{2}(102 + 198) = 4950$.`),
Q('2P3.2-10', 3, R`Sam saves £$20$ in the first month and £$5$ more each month than the month before. How much has Sam saved after $2$ years? [[3]]`,
  [R`$n = 24$, $a = 20$, $d = 5$.`, R`$12(40 + 115)$.`],
  [R`|B1|$n = 24$`, R`|M1|$\frac{24}{2}(40 + 23 \times 5)$`, R`|A1|£$1860$`], R`£$1860$`,
  R`$S_{24} = 12(40 + 115) = 1860$.`),
Q('2P3.2-11', 3, R`The sum of the first $n$ terms of a series is $S_n = 3n^2 + 2n$. Find an expression for the $n$th term. [[3]]`,
  [R`$u_n = S_n - S_{n - 1}$.`, R`Expand $3(n - 1)^2 + 2(n - 1)$.`],
  [R`|M1|$u_n = S_n - S_{n - 1}$`, R`|M1|$3n^2 + 2n - [3(n - 1)^2 + 2(n - 1)]$`, R`|A1|$6n - 1$`], R`$u_n = 6n - 1$`,
  R`$S_{n - 1} = 3n^2 - 4n + 1$, so $u_n = 3n^2 + 2n - 3n^2 + 4n - 1 = 6n - 1$.`),
Q('2P3.2-12', 4, R`An arithmetic series has $a = 30$ and $d = -2$. Find the greatest value of $S_n$. [[4]]`,
  [R`Add terms while they're positive.`, R`$u_n = 32 - 2n$.`],
  [R`|M1|$u_n = 32 - 2n \ge 0$ for $n \le 16$`, R`|A1|$u_{16} = 0$`, R`|M1|$S_{15} = \frac{15}{2}(30 + 2)$`, R`|A1|$240$`], R`$240$`,
  R`Terms are positive up to $u_{15} = 2$, and $u_{16} = 0$. So the maximum is $S_{15} = S_{16} = \frac{15}{2}(30 + 2) = 240$.`),
Q('2P3.2-13', 4, R`For an arithmetic series, $S_4 = 26$ and $S_8 = 100$. Find $a$ and $d$. [[4]]`,
  [R`$2(2a + 3d) = 26$ and $4(2a + 7d) = 100$.`, R`Subtract.`],
  [R`|M1|$2a + 3d = 13$`, R`|M1|$2a + 7d = 25$`, R`|A1|$d = 3$`, R`|A1|$a = 2$`], R`$a = 2$, $d = 3$`,
  R`Subtracting: $4d = 12$, $d = 3$, and $2a = 4$, $a = 2$.`),
Q('2P3.2-14', 4, R`How many terms of $5 + 8 + 11 + \dots$ are needed to give a sum of $1455$? [[4]]`,
  [R`$\frac{n}{2}(10 + 3(n - 1)) = 1455$.`, R`$3n^2 + 7n - 2910 = 0$.`],
  [R`|M1|$\frac{n}{2}(3n + 7) = 1455$`, R`|M1|$3n^2 + 7n - 2910 = 0$`, R`|M1|Solves`, R`|A1|$n = 30$`], R`$30$`,
  R`$3n^2 + 7n - 2910 = 0$ factorises as $(n - 30)(3n + 97) = 0$, so $n = 30$.`),
Q('2P3.2-15', 5, R`A loan is repaid in monthly instalments. The first is £$50$ and each one is £$10$ more than the one before. **(a)** Find the total repaid in the first $30$ months. **(b)** Find the month in which the total repaid first exceeds £$3000$. [[6]]`,
  [R`$S_n = \frac{n}{2}(100 + 10(n - 1)) = 5n^2 + 45n$.`, R`For (b), $5n^2 + 45n > 3000$.`],
  [R`(a)|M1|$\frac{30}{2}(100 + 290)$`, R`(a)|A1|£$5850$`, R`(b)|M1|$5n^2 + 45n > 3000$`, R`(b)|M1|$n^2 + 9n - 600 > 0$`, R`(b)|M1|Positive root $20.4$`, R`(b)|A1|Month $21$`], R`(a) £$5850$ (b) month $21$`,
  R`**(a)** $15(100 + 290) = 5850$.
**(b)** $S_n = 5n^2 + 45n > 3000$ gives $n^2 + 9n - 600 > 0$, with positive root $20.4$. So month $21$ ($S_{20} = 2900$, $S_{21} = 3150$).`)
]};

CONTENT['2P3.3'] = {
notes: R`
### Geometric sequences
A **geometric sequence** is multiplied by the same **common ratio** $r$ each time:
$$u_n = ar^{n - 1}$$
- Divide two terms to find $r$: $\frac{u_5}{u_2} = r^3$.
- Three consecutive terms $x, y, z$ are geometric when $\frac{y}{x} = \frac{z}{y}$, that is $y^2 = xz$.
- Use logarithms to find $n$ when it's in the power.

::: booklet
**Learn this:** $u_n = ar^{n - 1}$. (The booklet gives the geometric series formulae.)
:::

### Worked example 1
$u_2 = 12$ and $u_5 = 324$. Find $a$ and $r$.
- $\frac{ar^4}{ar} = r^3 = 27$, so $r = 3$ and $a = 4$.

### Worked example 2: using logs
Find the first term of $2, 6, 18, \dots$ that exceeds $1000$.
- $2 \times 3^{n - 1} > 1000$, so $3^{n - 1} > 500$ and $n - 1 > \frac{\ln 500}{\ln 3} = 5.66$.
- So $n = 7$, and the term is $2 \times 3^6 = 1458$.

**The trap:** forgetting to flip the inequality when dividing by the log of a number less than $1$ (for example when $r = 0.5$, $\ln 0.5 < 0$).

### Watch out
- With $r^2 = 9$, consider both $r = 3$ and $r = -3$.
`,
questions: [
Q('2P3.3-1', 1, R`Find the $10$th term of $3, 6, 12, \dots$ [[1]]`,
  [R`$a = 3$, $r = 2$.`, R`$3 \times 2^9$.`],
  [R`|B1|$1536$`], R`$1536$`,
  R`$u_{10} = 3 \times 2^9 = 1536$.`),
Q('2P3.3-2', 1, R`Find the common ratio of $81, 27, 9, \dots$ [[1]]`,
  [R`Divide a term by the one before.`, R`$\frac{27}{81}$.`],
  [R`|B1|$\frac13$`], R`$\frac13$`,
  R`$r = \frac{27}{81} = \frac13$.`),
Q('2P3.3-3', 1, R`Write down the $n$th term of $5, -10, 20, \dots$ [[1]]`,
  [R`$r = -2$.`, R`$ar^{n - 1}$.`],
  [R`|B1|$5(-2)^{n - 1}$`], R`$5(-2)^{n - 1}$`,
  R`$a = 5$ and $r = -2$, so $u_n = 5(-2)^{n - 1}$.`),
Q('2P3.3-4', 2, R`In a geometric sequence $u_2 = 12$ and $u_5 = 324$. Find $a$ and $r$. [[2]]`,
  [R`$r^3 = \frac{324}{12}$.`, R`$r = 3$.`],
  [R`|M1|$r^3 = 27$`, R`|A1|$r = 3$, $a = 4$`], R`$a = 4$, $r = 3$`,
  R`$r^3 = 27$ gives $r = 3$, and $a = \frac{12}{3} = 4$.`),
Q('2P3.3-5', 2, R`Find the first term of $2, 6, 18, \dots$ that exceeds $1000$. [[3]]`,
  [R`$2 \times 3^{n - 1} > 1000$.`, R`Take logs.`],
  [R`|M1|$3^{n - 1} > 500$`, R`|M1|$n - 1 > \frac{\ln 500}{\ln 3} = 5.66$`, R`|A1|$n = 7$; term $1458$`], R`$1458$ (the $7$th term)`,
  R`$n - 1 > 5.66$ so $n = 7$, giving $2 \times 3^6 = 1458$.`),
Q('2P3.3-6', 2, R`$x$, $x + 6$ and $9x$ are consecutive terms of a geometric sequence with $x > 0$. Find $x$. [[3]]`,
  [R`$(x + 6)^2 = x \times 9x$.`, R`Square root both sides (positive).`],
  [R`|M1|$(x + 6)^2 = 9x^2$`, R`|M1|$x + 6 = 3x$`, R`|A1|$x = 3$`], R`$x = 3$`,
  R`$(x + 6)^2 = 9x^2$, and since everything is positive, $x + 6 = 3x$, so $x = 3$ (terms $3, 9, 27$).`),
Q('2P3.3-7', 2, R`A car worth £$20\,000$ loses $15\%$ of its value each year. Find its value after $5$ years. [[2]]`,
  [R`Multiply by $0.85$ each year.`, R`$20\,000 \times 0.85^5$.`],
  [R`|M1|$20\,000 \times 0.85^5$`, R`|A1|£$8874$`], R`£$8874$`,
  R`$20\,000 \times 0.85^5 = 8874.11$, so about £$8874$.`),
Q('2P3.3-8', 3, R`In a geometric sequence, $u_3 = 20$ and $u_6 = 1.28$. Find $a$ and $r$. [[3]]`,
  [R`$r^3 = \frac{1.28}{20}$.`, R`$r = 0.4$.`],
  [R`|M1|$r^3 = 0.064$`, R`|A1|$r = 0.4$`, R`|A1|$a = 125$`], R`$a = 125$, $r = 0.4$`,
  R`$r^3 = 0.064$, so $r = 0.4$ and $a = \frac{20}{0.16} = 125$.`),
Q('2P3.3-9', 3, R`Find the first term of $512, 256, 128, \dots$ that is less than $1$. [[2]]`,
  [R`$512 \times 0.5^{n - 1} < 1$.`, R`$512 = 2^9$.`],
  [R`|M1|$2^{9} \times 2^{-(n - 1)} < 1$`, R`|A1|$n = 11$, term $0.5$`], R`$0.5$ (the $11$th term)`,
  R`$2^{10 - n} < 1$ needs $n > 10$, so $n = 11$: the term is $0.5$.`),
Q('2P3.3-10', 3, R`A population of $5000$ grows by $3\%$ each year. After how many complete years does it first exceed $8000$? [[3]]`,
  [R`$5000 \times 1.03^n > 8000$.`, R`$n > \frac{\ln 1.6}{\ln 1.03}$.`],
  [R`|M1|$1.03^n > 1.6$`, R`|M1|$n > 15.9$`, R`|A1|$16$ years`], R`$16$ years`,
  R`$n > \frac{\ln 1.6}{\ln 1.03} = 15.9$, so after $16$ years.`),
Q('2P3.3-11', 3, R`In a geometric sequence, $u_2 = -6$ and $u_4 = -54$. Find the possible values of $a$ and $r$. [[3]]`,
  [R`$r^2 = 9$.`, R`Two cases.`],
  [R`|M1|$r^2 = 9$`, R`|A1|$r = 3$, $a = -2$`, R`|A1|$r = -3$, $a = 2$`], R`$r = 3, a = -2$ or $r = -3, a = 2$`,
  R`$r^2 = \frac{-54}{-6} = 9$. If $r = 3$, $a = -2$; if $r = -3$, $a = 2$.`),
Q('2P3.3-12', 4, R`$k$, $k + 2$ and $k + 6$ are consecutive terms of a geometric sequence. Find $k$ and the common ratio. [[3]]`,
  [R`$(k + 2)^2 = k(k + 6)$.`, R`The $k^2$ terms cancel.`],
  [R`|M1|$(k + 2)^2 = k(k + 6)$`, R`|A1|$k = 2$`, R`|A1|$r = 2$`], R`$k = 2$, $r = 2$`,
  R`$k^2 + 4k + 4 = k^2 + 6k$, so $k = 2$; the terms are $2, 4, 8$ with $r = 2$.`),
Q('2P3.3-13', 4, R`$u_n = 3 \times 2^n$. Which term is equal to $3072$? [[2]]`,
  [R`$2^n = 1024$.`, R`$2^{10} = 1024$.`],
  [R`|M1|$2^n = 1024$`, R`|A1|$n = 10$`], R`The $10$th term`,
  R`$3 \times 2^n = 3072$ gives $2^n = 1024$, so $n = 10$.`),
Q('2P3.3-14', 4, R`The $1$st, $3$rd and $7$th terms of an arithmetic sequence with $d \ne 0$ are the first three terms of a geometric sequence. Find the common ratio. [[4]]`,
  [R`$(a + 2d)^2 = a(a + 6d)$.`, R`You'll find $a = 2d$.`],
  [R`|M1|$(a + 2d)^2 = a(a + 6d)$`, R`|M1|$4d^2 = 2ad$`, R`|A1|$a = 2d$`, R`|A1|$r = 2$`], R`$r = 2$`,
  R`$a^2 + 4ad + 4d^2 = a^2 + 6ad$, so $4d^2 = 2ad$ and $a = 2d$ (as $d \ne 0$). Then $r = \frac{a + 2d}{a} = \frac{4d}{2d} = 2$.`),
Q('2P3.3-15', 5, R`£$3000$ is invested at $4\%$ compound interest per year. **(a)** Find its value after $10$ years. **(b)** Find how many complete years it takes for the investment to double. **(c)** Compare the value after $10$ years with $4\%$ simple interest. [[6]]`,
  [R`$3000 \times 1.04^{10}$.`, R`$1.04^n \ge 2$.`],
  [R`(a)|M1|$3000 \times 1.04^{10}$`, R`(a)|A1|£$4440.73$`, R`(b)|M1|$n \ge \frac{\ln 2}{\ln 1.04} = 17.7$`, R`(b)|A1|$18$ years`, R`(c)|M1|Simple: $3000 + 10 \times 120 = 4200$`, R`(c)|A1|Compound is £$240.73$ more`], R`(a) £$4440.73$ (b) $18$ years (c) £$240.73$ more`,
  R`**(a)** $3000 \times 1.04^{10} = 4440.73$.
**(b)** $1.04^n \ge 2$ gives $n \ge 17.7$, so $18$ years.
**(c)** Simple interest gives $3000 + 1200 = 4200$, so compound interest gives £$240.73$ more.`)
]};

CONTENT['2P3.4'] = {
notes: R`
### Geometric series
The sum of the first $n$ terms of a geometric sequence is
$$S_n = \frac{a(1 - r^n)}{1 - r} = \frac{a(r^n - 1)}{r - 1} \qquad (r \ne 1)$$

**Proof:** $S_n = a + ar + \dots + ar^{n - 1}$ and $rS_n = ar + \dots + ar^n$. Subtracting, $S_n - rS_n = a - ar^n$.

::: booklet
**In the formula booklet:** $S_n = \frac{a(1 - r^n)}{1 - r}$. You may be asked to prove it.
:::

### Worked example 1
Find $3 + 6 + 12 + \dots$ to $6$ terms.
$$S_6 = \frac{3(2^6 - 1)}{2 - 1} = 189$$

### Worked example 2: least $n$
Find the least $n$ for which $S_n > 1000$ when $a = 3$ and $r = 1.5$.
- $\frac{3(1.5^n - 1)}{0.5} > 1000$, so $1.5^n > 167.7$ and $n > 12.6$.
- So $n = 13$.

**The trap:** mixing up the two versions of the formula and getting a negative sum. Use $\frac{a(r^n - 1)}{r - 1}$ when $r > 1$.

### Watch out
- When $r$ is negative, brackets matter: $(-3)^{10}$, not $-3^{10}$.
`,
questions: [
Q('2P3.4-1', 1, R`Find $1 + 2 + 4 + \dots + 2^9$. [[1]]`,
  [R`$10$ terms, $r = 2$.`, R`$2^{10} - 1$.`],
  [R`|B1|$1023$`], R`$1023$`,
  R`$\frac{2^{10} - 1}{2 - 1} = 1023$.`),
Q('2P3.4-2', 1, R`Find the sum of the first $6$ terms of $3, 6, 12, \dots$ [[2]]`,
  [R`$a = 3$, $r = 2$.`, R`$3(2^6 - 1)$.`],
  [R`|M1|$\frac{3(2^6 - 1)}{2 - 1}$`, R`|A1|$189$`], R`$189$`,
  R`$S_6 = 3 \times 63 = 189$.`),
Q('2P3.4-3', 1, R`Find the sum of the first $5$ terms of $16, 8, 4, \dots$ [[2]]`,
  [R`$r = \frac12$.`, R`$\frac{16(1 - \frac{1}{32})}{\frac12}$.`],
  [R`|M1|$\frac{16(1 - 0.5^5)}{0.5}$`, R`|A1|$31$`], R`$31$`,
  R`$S_5 = 32\left(1 - \frac{1}{32}\right) = 31$ (that is, $16 + 8 + 4 + 2 + 1$).`),
Q('2P3.4-4', 2, R`Prove that the sum of the first $n$ terms of a geometric series is $\dfrac{a(1 - r^n)}{1 - r}$. [[4]]`,
  [R`Write $S_n$ and $rS_n$.`, R`Subtract.`],
  [R`|B1|$S_n = a + ar + \dots + ar^{n - 1}$`, R`|M1|$rS_n = ar + ar^2 + \dots + ar^n$`, R`|M1|$S_n - rS_n = a - ar^n$`, R`|A1|$S_n = \frac{a(1 - r^n)}{1 - r}$`], R`Proof`,
  R`$S_n = a + ar + \dots + ar^{n - 1}$ and $rS_n = ar + \dots + ar^{n - 1} + ar^n$. Subtracting, all but two terms cancel: $(1 - r)S_n = a(1 - r^n)$, so $S_n = \frac{a(1 - r^n)}{1 - r}$ for $r \ne 1$.`),
Q('2P3.4-5', 2, R`Find the sum of the first $10$ terms of $2, -6, 18, \dots$ [[2]]`,
  [R`$r = -3$.`, R`$(-3)^{10} = 59\,049$.`],
  [R`|M1|$\frac{2(1 - (-3)^{10})}{1 - (-3)}$`, R`|A1|$-29\,524$`], R`$-29\,524$`,
  R`$S_{10} = \frac{2(1 - 59\,049)}{4} = -29\,524$.`),
Q('2P3.4-6', 2, R`A salary of £$30\,000$ rises by $2\%$ each year. Find the total earned over $10$ years, to the nearest £$1000$. [[3]]`,
  [R`Geometric with $a = 30\,000$, $r = 1.02$.`, R`$\frac{30\,000(1.02^{10} - 1)}{0.02}$.`],
  [R`|B1|$r = 1.02$`, R`|M1|$\frac{30\,000(1.02^{10} - 1)}{0.02}$`, R`|A1|£$328\,000$`], R`£$328\,000$`,
  R`$S_{10} = \frac{30\,000(1.02^{10} - 1)}{0.02} = 328\,491.63$, about £$328\,000$.`),
Q('2P3.4-7', 2, R`How many terms of $5 + 10 + 20 + \dots$ give a sum of $5115$? [[2]]`,
  [R`$5(2^n - 1) = 5115$.`, R`$2^n = 1024$.`],
  [R`|M1|$5(2^n - 1) = 5115$`, R`|A1|$n = 10$`], R`$10$`,
  R`$2^n - 1 = 1023$, so $2^n = 1024$ and $n = 10$.`),
Q('2P3.4-8', 3, R`A geometric series has $a = 3$ and $r = 1.5$. Find the least $n$ for which $S_n > 1000$. [[3]]`,
  [R`$\frac{3(1.5^n - 1)}{0.5} > 1000$.`, R`$1.5^n > 167.7$.`],
  [R`|M1|$6(1.5^n - 1) > 1000$`, R`|M1|$n > \frac{\ln 167.67}{\ln 1.5} = 12.6$`, R`|A1|$n = 13$`], R`$13$`,
  R`$1.5^n > 167.67$ gives $n > 12.6$, so $n = 13$.`),
Q('2P3.4-9', 3, R`A geometric series has $S_3 = 7$ and $S_6 = 63$. Find $a$ and $r$. [[4]]`,
  [R`$\frac{S_6}{S_3} = \frac{1 - r^6}{1 - r^3} = 1 + r^3$.`, R`$1 + r^3 = 9$.`],
  [R`|M1|$\frac{S_6}{S_3} = 1 + r^3$`, R`|M1|$1 + r^3 = 9$`, R`|A1|$r = 2$`, R`|A1|$a = 1$`], R`$a = 1$, $r = 2$`,
  R`$\frac{1 - r^6}{1 - r^3} = 1 + r^3 = 9$, so $r = 2$. Then $a(2^3 - 1) = 7$ gives $a = 1$.`),
Q('2P3.4-10', 3, R`One grain of rice is placed on the first square of a chessboard, two on the second, four on the third, and so on. Find the number of grains on the first $20$ squares. [[2]]`,
  [R`$a = 1$, $r = 2$, $n = 20$.`, R`$2^{20} - 1$.`],
  [R`|M1|$\frac{2^{20} - 1}{2 - 1}$`, R`|A1|$1\,048\,575$`], R`$1\,048\,575$`,
  R`$S_{20} = 2^{20} - 1 = 1\,048\,575$.`),
Q('2P3.4-11', 3, R`Find the sum of the first $8$ terms of the geometric series with $a = 50$ and $r = 0.9$. [[2]]`,
  [R`$\frac{50(1 - 0.9^8)}{0.1}$.`, R`$0.9^8 = 0.430$.`],
  [R`|M1|$\frac{50(1 - 0.9^8)}{1 - 0.9}$`, R`|A1|$285$`], R`$285$ ($3$ s.f.)`,
  R`$S_8 = 500(1 - 0.4305) = 284.8$, about $285$.`),
Q('2P3.4-12', 4, R`A geometric series has $r = 3$ and $S_4 = 520$. Find the first term. [[2]]`,
  [R`$\frac{a(3^4 - 1)}{2} = 520$.`, R`$40a = 520$.`],
  [R`|M1|$\frac{a(81 - 1)}{2} = 520$`, R`|A1|$a = 13$`], R`$13$`,
  R`$40a = 520$, so $a = 13$.`),
Q('2P3.4-13', 4, R`Evaluate $1 + 1.1 + 1.1^2 + \dots + 1.1^9$. [[3]]`,
  [R`$10$ terms, $a = 1$, $r = 1.1$.`, R`$\frac{1.1^{10} - 1}{0.1}$.`],
  [R`|B1|$n = 10$`, R`|M1|$\frac{1.1^{10} - 1}{0.1}$`, R`|A1|$15.9$`], R`$15.9$`,
  R`$\frac{1.1^{10} - 1}{0.1} = 15.94$.`),
Q('2P3.4-14', 4, R`Job $A$ pays £$25\,000$ in year $1$, rising by £$1500$ a year. Job $B$ pays £$25\,000$ in year $1$, rising by $5\%$ a year. Which pays more in total over $10$ years, and by how much? [[5]]`,
  [R`$A$ is arithmetic; $B$ is geometric.`, R`Compare the two totals.`],
  [R`|M1|$A$: $5(50\,000 + 9 \times 1500)$`, R`|A1|£$317\,500$`, R`|M1|$B$: $\frac{25\,000(1.05^{10} - 1)}{0.05}$`, R`|A1|£$314\,447$`, R`|A1|$A$ pays about £$3050$ more`], R`Job $A$, by about £$3050$`,
  R`$A$: $5(50\,000 + 13\,500) = 317\,500$. $B$: $\frac{25\,000(1.05^{10} - 1)}{0.05} = 314\,447$. Job $A$ pays about £$3053$ more over $10$ years.`),
Q('2P3.4-15', 5, R`A ball is dropped from a height of $10$ m. After each bounce it rises to $60\%$ of the height it fell from. Find the total distance it travels before it hits the ground for the $5$th time. [[5]]`,
  [R`$10$ m down, then up and down for each bounce.`, R`Bounces: $6, 3.6, 2.16, 1.296$.`],
  [R`|B1|First drop $10$ m`, R`|M1|Bounce heights $6, 3.6, 2.16, 1.296$`, R`|M1|$10 + 2 \times \frac{6(1 - 0.6^4)}{0.4}$`, R`|M1|$= 10 + 2 \times 13.056$`, R`|A1|$36.1$ m`], R`$36.1$ m`,
  R`After the first drop of $10$ m, there are $4$ up-and-down bounces before the $5$th impact. Their heights sum to $\frac{6(1 - 0.6^4)}{0.4} = 13.056$. Total $= 10 + 2 \times 13.056 = 36.1$ m.`)
]};

CONTENT['2P3.5'] = {
notes: R`
### Sum to infinity
When $|r| < 1$, $r^n \to 0$ as $n \to \infty$, so the series **converges** to
$$S_\infty = \frac{a}{1 - r}$$
If $|r| \ge 1$ the series diverges and has no sum to infinity.

[[fig:2P3.5-conv]]

::: booklet
**In the formula booklet:** $S_\infty = \frac{a}{1 - r}$ for $|r| < 1$. Always state the condition.
:::

### Worked example 1
Find the sum to infinity of $9 - 3 + 1 - \dots$
- $r = -\frac13$, and $|r| < 1$. $S_\infty = \frac{9}{1 + \frac13} = 6.75$.

### Worked example 2: two unknowns
The second term is $6$ and $S_\infty = 27$. Find $r$.
- $ar = 6$ and $\frac{a}{1 - r} = 27$, so $\frac{6}{r} = 27(1 - r)$, giving $9r^2 - 9r + 2 = 0$.
- $r = \frac13$ or $r = \frac23$. Both have $|r| < 1$, so both are valid ($a = 18$ or $a = 9$).

**The trap:** rejecting a root without checking. Only reject values with $|r| \ge 1$.

### Watch out
- For a series in $x$, such as $1 + 2x + 4x^2 + \dots$, the condition becomes $|2x| < 1$.
`,
questions: [
Q('2P3.5-1', 1, R`Find the sum to infinity of $8 + 4 + 2 + \dots$ [[1]]`,
  [R`$r = \frac12$.`, R`$\frac{8}{1 - 0.5}$.`],
  [R`|B1|$16$`], R`$16$`,
  R`$S_\infty = \frac{8}{0.5} = 16$.`, { fig: FIGS['2P3.5-conv'] }),
Q('2P3.5-2', 1, R`State the condition for a geometric series to have a sum to infinity. [[1]]`,
  [R`What must happen to $r^n$?`, R`It must tend to $0$.`],
  [R`|B1|$|r| < 1$`], R`$|r| < 1$`,
  R`The common ratio must satisfy $|r| < 1$, i.e. $-1 < r < 1$.`),
Q('2P3.5-3', 1, R`Find the sum to infinity of $9 - 3 + 1 - \dots$ [[1]]`,
  [R`$r = -\frac13$.`, R`$\frac{9}{1 + \frac13}$.`],
  [R`|B1|$6.75$`], R`$\frac{27}{4}$`,
  R`$S_\infty = \frac{9}{\frac43} = \frac{27}{4}$.`),
Q('2P3.5-4', 2, R`A geometric series has first term $5$ and sum to infinity $20$. Find the common ratio. [[2]]`,
  [R`$\frac{5}{1 - r} = 20$.`, R`$1 - r = \frac14$.`],
  [R`|M1|$\frac{5}{1 - r} = 20$`, R`|A1|$r = \frac34$`], R`$\frac34$`,
  R`$1 - r = \frac{5}{20}$, so $r = \frac34$.`),
Q('2P3.5-5', 2, R`A geometric series has common ratio $0.25$ and sum to infinity $60$. Find the first term. [[2]]`,
  [R`$\frac{a}{0.75} = 60$.`, R`$a = 45$.`],
  [R`|M1|$\frac{a}{1 - 0.25} = 60$`, R`|A1|$a = 45$`], R`$45$`,
  R`$a = 60 \times 0.75 = 45$.`),
Q('2P3.5-6', 2, R`Write $0.\dot{3} = 0.333\dots$ as a geometric series and find its sum. [[2]]`,
  [R`$\frac{3}{10} + \frac{3}{100} + \dots$`, R`$r = \frac{1}{10}$.`],
  [R`|M1|$a = \frac{3}{10}$, $r = \frac{1}{10}$`, R`|A1|$\frac13$`], R`$\frac13$`,
  R`$S_\infty = \frac{0.3}{1 - 0.1} = \frac{0.3}{0.9} = \frac13$.`),
Q('2P3.5-7', 2, R`Use a geometric series to write $0.4545\dots$ (recurring) as a fraction in its simplest form. [[2]]`,
  [R`$\frac{45}{100} + \frac{45}{10\,000} + \dots$`, R`$r = \frac{1}{100}$.`],
  [R`|M1|$\frac{0.45}{1 - 0.01}$`, R`|A1|$\frac{5}{11}$`], R`$\frac{5}{11}$`,
  R`$\frac{0.45}{0.99} = \frac{45}{99} = \frac{5}{11}$.`),
Q('2P3.5-8', 3, R`The sum to infinity of a geometric series is four times its first term. Find the common ratio. [[2]]`,
  [R`$\frac{a}{1 - r} = 4a$.`, R`$1 - r = \frac14$.`],
  [R`|M1|$\frac{a}{1 - r} = 4a$`, R`|A1|$r = \frac34$`], R`$\frac34$`,
  R`Dividing by $a$: $\frac{1}{1 - r} = 4$, so $r = \frac34$.`),
Q('2P3.5-9', 3, R`A geometric series has second term $6$ and sum to infinity $27$. Find the possible values of $r$ and $a$. [[4]]`,
  [R`$ar = 6$ and $\frac{a}{1 - r} = 27$.`, R`$9r^2 - 9r + 2 = 0$.`],
  [R`|M1|$\frac{6}{r} = 27(1 - r)$`, R`|M1|$9r^2 - 9r + 2 = 0$`, R`|A1|$r = \frac13$, $a = 18$`, R`|A1|$r = \frac23$, $a = 9$`], R`$r = \frac13, a = 18$ or $r = \frac23, a = 9$`,
  R`$27r^2 - 27r + 6 = 0$, so $(3r - 1)(3r - 2) = 0$. Both satisfy $|r| < 1$: $r = \frac13$ ($a = 18$) or $r = \frac23$ ($a = 9$).`),
Q('2P3.5-10', 3, R`A ball is dropped from $10$ m, and each bounce reaches $60\%$ of the previous height. Assuming it bounces indefinitely, find the total distance travelled. [[3]]`,
  [R`$10$ m, then $2 \times (6 + 3.6 + \dots)$.`, R`$\frac{6}{1 - 0.6} = 15$.`],
  [R`|M1|Bounce heights form a geometric series, $a = 6$, $r = 0.6$`, R`|M1|$10 + 2 \times \frac{6}{0.4}$`, R`|A1|$40$ m`], R`$40$ m`,
  R`$10 + 2 \times 15 = 40$ m.`),
Q('2P3.5-11', 3, R`For which values of $x$ does $1 + 2x + 4x^2 + \dots$ converge? Give its sum in terms of $x$. [[3]]`,
  [R`$r = 2x$.`, R`$|2x| < 1$.`],
  [R`|B1|$r = 2x$`, R`|B1|$|x| < \frac12$`, R`|B1|$\frac{1}{1 - 2x}$`], R`$-\frac12 < x < \frac12$; $\frac{1}{1 - 2x}$`,
  R`The ratio is $2x$, so it converges for $|2x| < 1$, i.e. $-\frac12 < x < \frac12$, with sum $\frac{1}{1 - 2x}$.`),
Q('2P3.5-12', 4, R`For the series $1 + \frac12 + \frac14 + \dots$, find the least $n$ for which $S_\infty - S_n < 0.01$. [[3]]`,
  [R`$S_\infty - S_n = 2(0.5)^n$.`, R`$2^n > 200$.`],
  [R`|M1|$S_\infty - S_n = 2 \times 0.5^n$`, R`|M1|$2^n > 200$`, R`|A1|$n = 8$`], R`$8$`,
  R`$S_\infty = 2$ and $S_n = 2(1 - 0.5^n)$, so the difference is $2 \times 0.5^n < 0.01$, i.e. $2^n > 200$: $n = 8$.`),
Q('2P3.5-13', 4, R`For which values of $x$ does $1 + \frac{x - 1}{2} + \left(\frac{x - 1}{2}\right)^2 + \dots$ converge? Find the sum when $x = 2$. [[3]]`,
  [R`$\left|\frac{x - 1}{2}\right| < 1$.`, R`At $x = 2$, $r = \frac12$.`],
  [R`|M1|$|x - 1| < 2$`, R`|A1|$-1 < x < 3$`, R`|B1|Sum $2$`], R`$-1 < x < 3$; $2$`,
  R`$|x - 1| < 2$ gives $-1 < x < 3$. At $x = 2$, $r = \frac12$, so the sum is $\frac{1}{1 - 0.5} = 2$.`),
Q('2P3.5-14', 4, R`A geometric series has $S_\infty = 3S_3$. Find $r$. [[3]]`,
  [R`$\frac{a}{1 - r} = \frac{3a(1 - r^3)}{1 - r}$.`, R`$1 = 3(1 - r^3)$.`],
  [R`|M1|$\frac{a}{1 - r} = 3 \times \frac{a(1 - r^3)}{1 - r}$`, R`|M1|$r^3 = \frac23$`, R`|A1|$r = 0.874$`], R`$0.874$`,
  R`$1 = 3(1 - r^3)$, so $r^3 = \frac23$ and $r = 0.874$, which satisfies $|r| < 1$.`),
Q('2P3.5-15', 5, R`In a geometric series, $u_2 = 12$ and $u_5 = 1.5$. **(a)** Find $r$ and $a$. **(b)** Find $S_\infty$. **(c)** Find the least $n$ for which $S_n > 47.9$. [[6]]`,
  [R`$r^3 = \frac{1.5}{12}$.`, R`$48(1 - 0.5^n) > 47.9$.`],
  [R`(a)|M1|$r^3 = 0.125$`, R`(a)|A1|$r = 0.5$, $a = 24$`, R`(b)|B1|$48$`, R`(c)|M1|$48(1 - 0.5^n) > 47.9$`, R`(c)|M1|$0.5^n < 0.00208$`, R`(c)|A1|$n = 9$`], R`(a) $r = 0.5$, $a = 24$ (b) $48$ (c) $9$`,
  R`**(a)** $r^3 = 0.125$, so $r = 0.5$ and $a = 24$.
**(b)** $S_\infty = \frac{24}{0.5} = 48$.
**(c)** $0.5^n < \frac{0.1}{48}$, so $n > \frac{\ln(0.1/48)}{\ln 0.5} = 8.9$ and $n = 9$. (Dividing by $\ln 0.5 < 0$ flips the inequality.)`)
]};

CONTENT['2P3.6'] = {
notes: R`
### Sigma notation
$$\sum_{r=1}^{n} f(r) = f(1) + f(2) + \dots + f(n)$$
- Write out the first few terms to see whether the series is arithmetic or geometric.
- The number of terms in $\sum_{r=a}^{b}$ is $b - a + 1$.
- $\sum_{r=1}^{n} 1 = n$, and $\sum_{r=k}^{n} f(r) = \sum_{r=1}^{n} f(r) - \sum_{r=1}^{k - 1} f(r)$.

::: booklet
**Learn this:** expand the sigma to identify $a$, $d$ (or $r$) and $n$, then use the series formulae from the booklet.
:::

### Worked example 1
Evaluate $\sum_{r=1}^{20} (3r - 1)$.
- Terms $2, 5, 8, \dots, 59$: arithmetic with $n = 20$.
- Sum $= \frac{20}{2}(2 + 59) = 610$.

### Worked example 2: not starting at $1$
Evaluate $\sum_{r=5}^{15} (4r + 2)$.
- First term $22$, last term $62$, and there are $15 - 5 + 1 = 11$ terms.
- Sum $= \frac{11}{2}(22 + 62) = 462$.

**The trap:** using $15 - 5 = 10$ terms. Both end values are included.

### Watch out
- $\sum 2^r$ is geometric; $\sum 2r$ is arithmetic.
`,
questions: [
Q('2P3.6-1', 1, R`Evaluate $\displaystyle\sum_{r=1}^{5} r^2$. [[1]]`,
  [R`$1 + 4 + 9 + 16 + 25$.`, R`Add them.`],
  [R`|B1|$55$`], R`$55$`,
  R`$1 + 4 + 9 + 16 + 25 = 55$.`),
Q('2P3.6-2', 1, R`Evaluate $\displaystyle\sum_{r=1}^{4} (2r + 1)$. [[1]]`,
  [R`$3 + 5 + 7 + 9$.`, R`Add.`],
  [R`|B1|$24$`], R`$24$`,
  R`$3 + 5 + 7 + 9 = 24$.`),
Q('2P3.6-3', 1, R`Write $3 + 6 + 9 + \dots + 30$ in sigma notation. [[1]]`,
  [R`The terms are $3r$.`, R`$r$ goes from $1$ to $10$.`],
  [R`|B1|$\sum_{r=1}^{10} 3r$`], R`$\sum_{r=1}^{10} 3r$`,
  R`Each term is $3r$, from $r = 1$ to $r = 10$: $\sum_{r=1}^{10} 3r$.`),
Q('2P3.6-4', 2, R`Evaluate $\displaystyle\sum_{r=1}^{20} (3r - 1)$. [[2]]`,
  [R`Arithmetic: $2, 5, \dots, 59$.`, R`$\frac{20}{2}(2 + 59)$.`],
  [R`|M1|$a = 2$, $l = 59$, $n = 20$`, R`|A1|$610$`], R`$610$`,
  R`The terms are $2, 5, 8, \dots, 59$: an arithmetic series with $20$ terms. Sum $= \frac{20}{2}(2 + 59) = 610$.`),
Q('2P3.6-5', 2, R`Evaluate $\displaystyle\sum_{r=1}^{8} 2^r$. [[2]]`,
  [R`Geometric: $a = 2$, $r = 2$.`, R`$2(2^8 - 1)$.`],
  [R`|M1|$\frac{2(2^8 - 1)}{2 - 1}$`, R`|A1|$510$`], R`$510$`,
  R`$2 + 4 + \dots + 256 = 2(256 - 1) = 510$.`),
Q('2P3.6-6', 2, R`Evaluate $\displaystyle\sum_{r=5}^{15} (4r + 2)$. [[2]]`,
  [R`$11$ terms, from $22$ to $62$.`, R`$\frac{11}{2}(22 + 62)$.`],
  [R`|M1|$11$ terms, first $22$, last $62$`, R`|A1|$462$`], R`$462$`,
  R`$\frac{11}{2}(22 + 62) = 462$.`),
Q('2P3.6-7', 2, R`Evaluate $\displaystyle\sum_{r=1}^{\infty} 3(0.5)^r$. [[2]]`,
  [R`First term $1.5$, $r = 0.5$.`, R`$\frac{1.5}{0.5}$.`],
  [R`|M1|$a = 1.5$, $r = 0.5$`, R`|A1|$3$`], R`$3$`,
  R`$S_\infty = \frac{1.5}{1 - 0.5} = 3$.`),
Q('2P3.6-8', 3, R`Show that $\displaystyle\sum_{r=1}^{n} (2r + 3) = n^2 + 4n$. [[2]]`,
  [R`$a = 5$, $d = 2$.`, R`$\frac{n}{2}(10 + 2(n - 1))$.`],
  [R`|M1|$\frac{n}{2}(2 \times 5 + 2(n - 1))$`, R`|A1|$n(n + 4) = n^2 + 4n$`], R`Shown`,
  R`$\frac{n}{2}(2n + 8) = n(n + 4) = n^2 + 4n$.`),
Q('2P3.6-9', 3, R`Given $\displaystyle\sum_{r=1}^{n} (5r - 2) = 1010$, find $n$. [[3]]`,
  [R`$\frac{n}{2}(3 + 5n - 2) = \frac{n(5n + 1)}{2}$.`, R`$5n^2 + n - 2020 = 0$.`],
  [R`|M1|$\frac{n}{2}(5n + 1) = 1010$`, R`|M1|$5n^2 + n - 2020 = 0$`, R`|A1|$n = 20$`], R`$20$`,
  R`$(n - 20)(5n + 101) = 0$, so $n = 20$.`),
Q('2P3.6-10', 3, R`Evaluate $\displaystyle\sum_{r=1}^{10} 5 \times 3^{r - 1}$. [[2]]`,
  [R`$a = 5$, $r = 3$.`, R`$\frac{5(3^{10} - 1)}{2}$.`],
  [R`|M1|$\frac{5(3^{10} - 1)}{3 - 1}$`, R`|A1|$147\,620$`], R`$147\,620$`,
  R`$\frac{5(59\,049 - 1)}{2} = 147\,620$.`),
Q('2P3.6-11', 3, R`Evaluate $\displaystyle\sum_{r=11}^{30} (2r - 1)$. [[3]]`,
  [R`$\sum_{r=1}^{n}(2r - 1) = n^2$.`, R`$30^2 - 10^2$.`],
  [R`|M1|$\sum_{1}^{30} - \sum_{1}^{10}$`, R`|M1|$900 - 100$`, R`|A1|$800$`], R`$800$`,
  R`The sum of the first $n$ odd numbers is $n^2$, so $900 - 100 = 800$.`),
Q('2P3.6-12', 4, R`Find the largest value of $k$ for which $\displaystyle\sum_{r=1}^{k} (100 - 3r) > 0$. [[3]]`,
  [R`$\frac{k}{2}(97 + 100 - 3k)$.`, R`$k(197 - 3k) > 0$.`],
  [R`|M1|$\frac{k}{2}(197 - 3k)$`, R`|M1|$197 - 3k > 0$`, R`|A1|$k = 65$`], R`$65$`,
  R`$\frac{k}{2}(197 - 3k) > 0$ needs $k < 65.7$, so $k = 65$.`),
Q('2P3.6-13', 4, R`Evaluate $\displaystyle\sum_{r=1}^{\infty} \left(\frac23\right)^r$. [[2]]`,
  [R`$a = \frac23$, $r = \frac23$.`, R`$\frac{2/3}{1/3}$.`],
  [R`|M1|$\frac{2/3}{1 - 2/3}$`, R`|A1|$2$`], R`$2$`,
  R`$S_\infty = \frac{2/3}{1/3} = 2$.`),
Q('2P3.6-14', 4, R`Evaluate $\displaystyle\sum_{r=1}^{10} \ln(2^r)$, giving your answer in the form $k\ln 2$ and as a decimal. [[3]]`,
  [R`$\ln 2^r = r\ln 2$.`, R`$\ln 2 \times (1 + \dots + 10)$.`],
  [R`|M1|$\ln 2^r = r \ln 2$`, R`|A1|$55\ln 2$`, R`|A1|$38.1$`], R`$55\ln 2 = 38.1$`,
  R`$\sum r\ln 2 = 55\ln 2 = 38.1$.`),
Q('2P3.6-15', 5, R`**(a)** Show that $\displaystyle\sum_{r=1}^{n} (3^r + 2r) = \frac{3^{n + 1} - 3}{2} + n(n + 1)$. **(b)** Hence evaluate $\displaystyle\sum_{r=1}^{5} (3^r + 2r)$, and check by adding the terms. [[5]]`,
  [R`Split into a geometric and an arithmetic sum.`, R`$\sum 3^r = \frac{3(3^n - 1)}{2}$.`],
  [R`(a)|M1|Splits the sum`, R`(a)|M1|$\sum 3^r = \frac{3(3^n - 1)}{2}$`, R`(a)|A1|$\sum 2r = n(n + 1)$`, R`(b)|M1|$\frac{3^6 - 3}{2} + 30$`, R`(b)|A1|$393$`], R`(b) $393$`,
  R`**(a)** $\sum 3^r = \frac{3(3^n - 1)}{3 - 1} = \frac{3^{n + 1} - 3}{2}$ and $\sum 2r = 2 \times \frac{n(n + 1)}{2} = n(n + 1)$.
**(b)** $\frac{729 - 3}{2} + 30 = 363 + 30 = 393$. Check: $5 + 13 + 33 + 89 + 253 = 393$.`)
]};

CONTENT['2P3.7'] = {
notes: R`
### Recurrence relations
A **recurrence relation** defines each term from the one before, e.g. $u_{n+1} = 2u_n + 1$, $u_1 = 3$. You need a starting value.

Sequences can be:
- **increasing:** $u_{n+1} > u_n$ for all $n$
- **decreasing:** $u_{n+1} < u_n$ for all $n$
- **periodic:** the terms repeat; the **order** is the length of the repeat.

If a sequence converges to a limit $L$, then $L$ satisfies $L = f(L)$.

::: booklet
**Learn these:** generate terms one at a time, and for an increasing sequence show $u_{n+1} - u_n > 0$.
:::

### Worked example 1
$u_{n+1} = 3u_n - k$, $u_1 = 2$ and $u_3 = 11$. Find $k$.
- $u_2 = 6 - k$ and $u_3 = 3(6 - k) - k = 18 - 4k = 11$, so $k = 1.75$.

### Worked example 2: periodic sequences
$u_{n+1} = 5 - u_n$, $u_1 = 2$. Find $\sum_{r=1}^{20} u_r$.
- The terms go $2, 3, 2, 3, \dots$, so the sequence is periodic with order $2$.
- $20$ terms make $10$ pairs, each summing to $5$: total $50$.

**The trap:** treating it as arithmetic. Check the pattern by writing out several terms.

### Watch out
- Use $u_{n+1}$ in terms of $u_n$, not $u_n$ in terms of $n$, unless you've found a formula.
`,
questions: [
Q('2P3.7-1', 1, R`$u_{n+1} = 2u_n + 1$, $u_1 = 3$. Find $u_2$ and $u_3$. [[1]]`,
  [R`$u_2 = 2(3) + 1$.`, R`$u_3 = 2(7) + 1$.`],
  [R`|B1|$u_2 = 7$, $u_3 = 15$`], R`$7$, $15$`,
  R`$u_2 = 7$ and $u_3 = 15$.`),
Q('2P3.7-2', 1, R`$u_{n+1} = u_n + 4$, $u_1 = 2$. Find a formula for $u_n$. [[1]]`,
  [R`It's arithmetic with $d = 4$.`, R`$2 + 4(n - 1)$.`],
  [R`|B1|$u_n = 4n - 2$`], R`$u_n = 4n - 2$`,
  R`Arithmetic with $a = 2$, $d = 4$: $u_n = 4n - 2$.`),
Q('2P3.7-3', 1, R`$u_{n+1} = -u_n$, $u_1 = 1$. Describe the sequence. [[1]]`,
  [R`Write out a few terms.`, R`$1, -1, 1, \dots$`],
  [R`|B1|Periodic with order $2$`], R`Periodic, order $2$`,
  R`The terms are $1, -1, 1, -1, \dots$: periodic with order $2$.`),
Q('2P3.7-4', 2, R`$u_{n+1} = 3u_n - k$, $u_1 = 2$ and $u_3 = 11$. Find $k$. [[3]]`,
  [R`$u_2 = 6 - k$.`, R`$u_3 = 3(6 - k) - k$.`],
  [R`|M1|$u_2 = 6 - k$`, R`|M1|$u_3 = 18 - 4k = 11$`, R`|A1|$k = 1.75$`], R`$k = 1.75$`,
  R`$18 - 4k = 11$ gives $k = \frac74$.`),
Q('2P3.7-5', 2, R`$u_{n+1} = \dfrac{1}{1 - u_n}$, $u_1 = 2$. Show that the sequence is periodic and state its order. [[2]]`,
  [R`$u_2 = \frac{1}{1 - 2}$.`, R`Keep going until you get back to $2$.`],
  [R`|M1|$u_2 = -1$, $u_3 = \frac12$, $u_4 = 2$`, R`|A1|Periodic with order $3$`], R`Order $3$`,
  R`$u_2 = -1$, $u_3 = \frac{1}{2}$, $u_4 = \frac{1}{1 - 1/2} = 2 = u_1$. So it repeats every $3$ terms.`),
Q('2P3.7-6', 2, R`$u_{n+1} = u_n + 3$, $u_1 = 5$. Find $\displaystyle\sum_{r=1}^{4} u_r$. [[2]]`,
  [R`$5, 8, 11, 14$.`, R`Add.`],
  [R`|M1|$5, 8, 11, 14$`, R`|A1|$38$`], R`$38$`,
  R`$5 + 8 + 11 + 14 = 38$.`),
Q('2P3.7-7', 2, R`$u_{n+1} = 0.5u_n + 4$, $u_1 = 2$. Find $u_2$ and $u_3$. [[2]]`,
  [R`$u_2 = 1 + 4$.`, R`$u_3 = 2.5 + 4$.`],
  [R`|B1|$u_2 = 5$`, R`|B1|$u_3 = 6.5$`], R`$5$, $6.5$`,
  R`$u_2 = 0.5(2) + 4 = 5$, $u_3 = 0.5(5) + 4 = 6.5$.`),
Q('2P3.7-8', 3, R`The sequence $u_{n+1} = 0.5u_n + 4$ converges to a limit $L$. Find $L$. [[2]]`,
  [R`$L = 0.5L + 4$.`, R`Solve.`],
  [R`|M1|$L = 0.5L + 4$`, R`|A1|$L = 8$`], R`$8$`,
  R`$0.5L = 4$, so $L = 8$.`),
Q('2P3.7-9', 3, R`$u_{n+1} = ku_n + 2$, $u_1 = 1$ and $u_3 = 14$. Find the possible values of $k$. [[3]]`,
  [R`$u_2 = k + 2$, $u_3 = k(k + 2) + 2$.`, R`$k^2 + 2k - 12 = 0$.`],
  [R`|M1|$u_3 = k^2 + 2k + 2$`, R`|M1|$k^2 + 2k - 12 = 0$`, R`|A1|$k = -1 \pm \sqrt{13}$`], R`$k = 2.61$ or $-4.61$`,
  R`$k^2 + 2k + 2 = 14$ gives $k = -1 \pm \sqrt{13}$: $2.61$ or $-4.61$.`),
Q('2P3.7-10', 3, R`$u_n = 2n^2 - 5n$. Show that the sequence is increasing. [[3]]`,
  [R`Find $u_{n+1} - u_n$.`, R`$4n - 3$.`],
  [R`|M1|$u_{n+1} - u_n = 2(n + 1)^2 - 5(n + 1) - (2n^2 - 5n)$`, R`|A1|$= 4n - 3$`, R`|A1|$> 0$ for all $n \ge 1$, so increasing`], R`$u_{n+1} - u_n = 4n - 3 > 0$`,
  R`$u_{n+1} - u_n = 4n + 2 - 5 = 4n - 3$, which is positive for $n \ge 1$. So the sequence is increasing.`),
Q('2P3.7-11', 3, R`$u_{n+1} = 5 - u_n$, $u_1 = 2$. Find $\displaystyle\sum_{r=1}^{20} u_r$. [[3]]`,
  [R`$2, 3, 2, 3, \dots$`, R`Each pair sums to $5$.`],
  [R`|M1|Terms $2, 3, 2, 3, \dots$`, R`|M1|$10$ pairs`, R`|A1|$50$`], R`$50$`,
  R`Periodic with order $2$; $10$ pairs of $5$ give $50$.`),
Q('2P3.7-12', 4, R`$u_{n+2} = -u_n$ with $u_1 = 1$ and $u_2 = 2$. Find $\displaystyle\sum_{r=1}^{100} u_r$. [[3]]`,
  [R`$1, 2, -1, -2, 1, 2, \dots$`, R`Each block of $4$ sums to $0$.`],
  [R`|M1|Terms $1, 2, -1, -2$ repeat`, R`|M1|$25$ blocks of $4$`, R`|A1|$0$`], R`$0$`,
  R`The sequence repeats $1, 2, -1, -2$ with order $4$, and each block sums to $0$. $100 = 25 \times 4$, so the sum is $0$.`),
Q('2P3.7-13', 4, R`$u_{n+1} = 3u_n - 2$, $u_1 = 2$. Show that $u_n = 3^{n - 1} + 1$ fits both the recurrence and the first term. [[3]]`,
  [R`Check $n = 1$.`, R`Substitute into $3u_n - 2$.`],
  [R`|B1|$3^0 + 1 = 2 = u_1$`, R`|M1|$3(3^{n - 1} + 1) - 2$`, R`|A1|$= 3^n + 1 = u_{n+1}$`], R`Shown`,
  R`$3^0 + 1 = 2$ ✓. And $3(3^{n - 1} + 1) - 2 = 3^n + 1$, which is the formula with $n + 1$ in place of $n$ ✓.`),
Q('2P3.7-14', 4, R`A fish population is modelled by $P_{n+1} = 1.2P_n - 300$, where $P_1 = 2000$. Find $P_2$, $P_3$ and $P_4$. [[3]]`,
  [R`$P_2 = 2400 - 300$.`, R`Keep going.`],
  [R`|B1|$P_2 = 2100$`, R`|B1|$P_3 = 2220$`, R`|B1|$P_4 = 2364$`], R`$2100$, $2220$, $2364$`,
  R`$P_2 = 2100$, $P_3 = 2520 - 300 = 2220$, $P_4 = 2664 - 300 = 2364$.`),
Q('2P3.7-15', 5, R`$u_{n+1} = au_n + b$, with $u_1 = 4$, $u_2 = 7$ and $u_3 = 13$. **(a)** Find $a$ and $b$. **(b)** Find $u_4$ and $u_5$. **(c)** Find $\displaystyle\sum_{r=1}^{5} u_r$. [[6]]`,
  [R`$7 = 4a + b$ and $13 = 7a + b$.`, R`Subtract.`],
  [R`(a)|M1|$4a + b = 7$ and $7a + b = 13$`, R`(a)|A1|$a = 2$`, R`(a)|A1|$b = -1$`, R`(b)|B1|$u_4 = 25$`, R`(b)|B1|$u_5 = 49$`, R`(c)|B1|$98$`], R`(a) $a = 2$, $b = -1$ (b) $25$, $49$ (c) $98$`,
  R`**(a)** Subtracting: $3a = 6$, $a = 2$, $b = -1$.
**(b)** $u_4 = 2(13) - 1 = 25$; $u_5 = 49$.
**(c)** $4 + 7 + 13 + 25 + 49 = 98$.`)
]};

CONTENT['2P3.8'] = {
notes: R`
### Choosing a model
- "Increases by **the same amount**" (e.g. £$500$ a year): **arithmetic**.
- "Increases by **the same percentage**" (e.g. $3\%$ a year): **geometric**, with $r = 1.03$.
- A **total** over several years is a **series**; a value **in** a particular year is a **term**.

### Criticising a model
Real situations rarely follow a model exactly. Say why: pay rises may not be constant, populations can't grow forever, and so on.

::: booklet
**Learn this:** decide first whether the question wants a term (one year) or a sum (a total).
:::

### Worked example 1
Sales are $400$ in year $1$ and grow by $5\%$ each year. Find the total sales over $10$ years.
$$S_{10} = \frac{400(1.05^{10} - 1)}{0.05} = 5031$$

### Worked example 2: term or sum?
In the same model, find the sales **in** year $10$.
$$u_{10} = 400 \times 1.05^9 = 621$$

**The trap:** using $1.05^{10}$ for the $10$th year. Year $1$ is $400 \times 1.05^0$, so year $n$ uses $1.05^{n - 1}$.

### Watch out
- Read whether interest is added before or after a deposit.
`,
questions: [
Q('2P3.8-1', 1, R`A salary starts at £$20\,000$ and rises by £$1000$ each year. Find the salary in year $5$. [[1]]`,
  [R`$a = 20\,000$, $d = 1000$.`, R`$20\,000 + 4 \times 1000$.`],
  [R`|B1|£$24\,000$`], R`£$24\,000$`,
  R`$u_5 = 20\,000 + 4 \times 1000 = 24\,000$.`),
Q('2P3.8-2', 1, R`Sales are $400$ in year $1$ and grow by $5\%$ each year. Find the sales in year $3$. [[1]]`,
  [R`$400 \times 1.05^2$.`, R`Year $3$ has two increases.`],
  [R`|B1|$441$`], R`$441$`,
  R`$400 \times 1.05^2 = 441$.`),
Q('2P3.8-3', 1, R`A quantity increases by $3\%$ each year. Should it be modelled by an arithmetic or a geometric sequence? [[1]]`,
  [R`Is the increase a fixed amount or a fixed percentage?`, R`Percentage means multiply.`],
  [R`|B1|Geometric, with $r = 1.03$`], R`Geometric`,
  R`A constant percentage increase multiplies by $1.03$ each year, so it is geometric.`),
Q('2P3.8-4', 2, R`For the salary in question 1, find the total earned over the first $10$ years. [[2]]`,
  [R`Arithmetic series.`, R`$5(40\,000 + 9000)$.`],
  [R`|M1|$\frac{10}{2}(2 \times 20\,000 + 9 \times 1000)$`, R`|A1|£$245\,000$`], R`£$245\,000$`,
  R`$5(40\,000 + 9000) = 245\,000$.`),
Q('2P3.8-5', 2, R`For the sales in question 2, find the total sales over the first $10$ years. [[2]]`,
  [R`Geometric series, $r = 1.05$.`, R`$\frac{400(1.05^{10} - 1)}{0.05}$.`],
  [R`|M1|$\frac{400(1.05^{10} - 1)}{0.05}$`, R`|A1|$5031$`], R`$5031$`,
  R`$S_{10} = 8000(1.05^{10} - 1) = 5031$.`),
Q('2P3.8-6', 2, R`A runner runs $2$ km on day $1$ and $0.5$ km more each day than the day before. On which day does she first run $10$ km? [[2]]`,
  [R`$2 + 0.5(n - 1) = 10$.`, R`$n - 1 = 16$.`],
  [R`|M1|$2 + 0.5(n - 1) = 10$`, R`|A1|Day $17$`], R`Day $17$`,
  R`$0.5(n - 1) = 8$, so $n = 17$.`),
Q('2P3.8-7', 2, R`For the runner in question 6, find the total distance run in the first $17$ days. [[2]]`,
  [R`$\frac{17}{2}(2 + 10)$.`, R`Arithmetic series.`],
  [R`|M1|$\frac{17}{2}(2 + 10)$`, R`|A1|$102$ km`], R`$102$ km`,
  R`$\frac{17}{2} \times 12 = 102$ km.`),
Q('2P3.8-8', 3, R`A colony of $50$ bacteria doubles every hour. After how many complete hours does it first exceed one million? [[3]]`,
  [R`$50 \times 2^n > 10^6$.`, R`$2^n > 20\,000$.`],
  [R`|M1|$50 \times 2^n > 1\,000\,000$`, R`|M1|$n > \frac{\ln 20\,000}{\ln 2} = 14.3$`, R`|A1|$15$ hours`], R`$15$ hours`,
  R`$2^n > 20\,000$ gives $n > 14.3$, so after $15$ hours.`),
Q('2P3.8-9', 3, R`Amir pays £$100$ into a savings account at the start of each month. Interest of $0.5\%$ is added at the end of each month. Find the balance at the end of $12$ months. [[4]]`,
  [R`The first £$100$ earns interest $12$ times; the last earns it once.`, R`$100(1.005 + 1.005^2 + \dots + 1.005^{12})$.`],
  [R`|M1|Recognises a geometric series`, R`|M1|$a = 100 \times 1.005$, $r = 1.005$, $n = 12$`, R`|M1|$\frac{100.5(1.005^{12} - 1)}{0.005}$`, R`|A1|£$1239.72$`], R`£$1239.72$`,
  R`Balance $= 100(1.005 + \dots + 1.005^{12}) = \frac{100.5(1.005^{12} - 1)}{0.005} = 1239.72$.`),
Q('2P3.8-10', 3, R`A model assumes a salary rises by £$1000$ every year for $40$ years. Give one criticism of the model. [[1]]`,
  [R`Is that realistic?`, R`Think about promotions, inflation or job changes.`],
  [R`|B1|Pay rises are unlikely to stay exactly constant for $40$ years (e.g. inflation, promotions, job changes)`], R`Constant rises are unrealistic`,
  R`Pay rises are unlikely to be exactly the same every year for $40$ years: inflation, promotions or changing jobs would all affect them.`),
Q('2P3.8-11', 3, R`A patient takes $10$ mg of a drug each day. By the next dose, $30\%$ of the drug in the body remains. Find the amount in the body just after the $n$th dose, and the long-term amount just after a dose. [[3]]`,
  [R`$10 + 10(0.3) + 10(0.3)^2 + \dots$`, R`As $n \to \infty$, $0.3^n \to 0$.`],
  [R`|M1|$10(1 + 0.3 + \dots + 0.3^{n - 1})$`, R`|A1|$\frac{10(1 - 0.3^n)}{0.7}$ mg`, R`|A1|$14.3$ mg`], R`$\frac{10(1 - 0.3^n)}{0.7}$; $14.3$ mg`,
  R`Just after the $n$th dose: $\frac{10(1 - 0.3^n)}{0.7}$ mg. In the long run this tends to $\frac{10}{0.7} = 14.3$ mg.`),
Q('2P3.8-12', 4, R`Job $A$ starts at £$30\,000$ and rises by £$1500$ each year. Job $B$ starts at £$28\,000$ and rises by $6\%$ each year. **(a)** Which pays more in year $8$? **(b)** Which pays more in total over the first $8$ years? [[5]]`,
  [R`$A$: $30\,000 + 7 \times 1500$; $B$: $28\,000 \times 1.06^7$.`, R`Totals use the series formulae.`],
  [R`(a)|M1|$A$: £$40\,500$; $B$: $28\,000 \times 1.06^7$`, R`(a)|A1|$B$ (£$42\,102$)`, R`(b)|M1|$A$: $4(60\,000 + 10\,500)$`, R`(b)|M1|$B$: $\frac{28\,000(1.06^8 - 1)}{0.06}$`, R`(b)|A1|$A$: £$282\,000$ v $B$: £$277\,129$, so $A$`], R`(a) $B$ (b) $A$`,
  R`**(a)** $A$: £$40\,500$; $B$: $28\,000 \times 1.06^7 = 42\,102$. $B$ pays more in year $8$.
**(b)** $A$: $4(60\,000 + 10\,500) = 282\,000$. $B$: $\frac{28\,000(1.06^8 - 1)}{0.06} = 277\,129$. $A$ pays more in total.`),
Q('2P3.8-13', 4, R`Prize money of £$1000$ is shared between $5$ prizes forming an arithmetic sequence. The first prize is £$300$. Find the five prizes. [[3]]`,
  [R`$\frac52(600 + 4d) = 1000$.`, R`$d$ is negative.`],
  [R`|M1|$\frac52(600 + 4d) = 1000$`, R`|A1|$d = -50$`, R`|A1|£$300, 250, 200, 150, 100$`], R`£$300, 250, 200, 150, 100$`,
  R`$600 + 4d = 400$, so $d = -50$: prizes £$300$, £$250$, £$200$, £$150$, £$100$.`),
Q('2P3.8-14', 4, R`A tree grows $1.2$ m in its first year. Each year after that it grows $80\%$ of the previous year's growth. **(a)** Find its height after $10$ years (starting from $0$). **(b)** Show that it never reaches $6$ m. [[4]]`,
  [R`Geometric: $a = 1.2$, $r = 0.8$.`, R`$S_\infty = \frac{1.2}{0.2}$.`],
  [R`(a)|M1|$\frac{1.2(1 - 0.8^{10})}{0.2}$`, R`(a)|A1|$5.36$ m`, R`(b)|M1|$S_\infty = \frac{1.2}{1 - 0.8} = 6$`, R`(b)|A1|Every $S_n < S_\infty = 6$, so it never reaches $6$ m`], R`(a) $5.36$ m`,
  R`**(a)** $6(1 - 0.8^{10}) = 5.36$ m.
**(b)** $S_\infty = 6$, and $S_n = 6(1 - 0.8^n) < 6$ for every $n$, so the height never reaches $6$ m.`),
Q('2P3.8-15', 5, R`A factory makes $5000$ units in year $1$, and output rises by $4\%$ each year. **(a)** Find the output in year $5$. **(b)** Find the total output over the first $10$ years. **(c)** Find the first year in which the total output since the start exceeds $100\,000$ units. [[7]]`,
  [R`$u_5 = 5000 \times 1.04^4$.`, R`(c): $\frac{5000(1.04^n - 1)}{0.04} > 100\,000$.`],
  [R`(a)|M1|$5000 \times 1.04^4$`, R`(a)|A1|$5849$`, R`(b)|M1|$\frac{5000(1.04^{10} - 1)}{0.04}$`, R`(b)|A1|$60\,031$`, R`(c)|M1|$1.04^n > 1.8$`, R`(c)|M1|$n > \frac{\ln 1.8}{\ln 1.04} = 14.99$`, R`(c)|A1|Year $15$`], R`(a) $5849$ (b) $60\,031$ (c) year $15$`,
  R`**(a)** $5000 \times 1.04^4 = 5849$.
**(b)** $125\,000(1.04^{10} - 1) = 60\,031$.
**(c)** $1.04^n > 1.8$ gives $n > 14.99$, so year $15$.`)
]};
