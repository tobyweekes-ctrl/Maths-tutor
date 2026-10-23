/* Statistics and Mechanics Year 1 · Chapter 7 Hypothesis testing (sections 7.1 to 7.4) */
BOOK_CHAPTERS.push({ id:'A07', book:'Statistics & Mechanics Year 1', label:'Chapter 7', title:'Hypothesis testing', sections:[
  { id:'A7.1', num:'7.1', title:'Hypothesis testing' },
  { id:'A7.2', num:'7.2', title:'Finding critical values' },
  { id:'A7.3', num:'7.3', title:'One-tailed tests' },
  { id:'A7.4', num:'7.4', title:'Two-tailed tests' }
]});
// Bar chart of B(n, p) with the critical region (x <= lo or x >= hi) picked out in a second colour.
const A7cr = (label, n, p, lo, hi, xmax = n) => {
  const pr = []; for (let r = 0; r <= xmax; r++){ let c = 1; for (let k = 1; k <= r; k++) c = c * (n - r + k) / k; pr.push(c * p ** r * (1 - p) ** (n - r)); }
  const top = Math.max(...pr) * 1.25;
  return Fig.graph({ label, x0: -0.2, x1: xmax + 1.2, y0: 0, y1: top, xlab: 'x', ylab: 'P(X = x)', h: 210,
    xticks: pr.map((_, r) => [r + 1, String(r)]).filter((_, r) => r % 2 === 0 || xmax <= 12),
    segs: pr.map((q, r) => ({ x1: r + 1, y1: 0, x2: r + 1, y2: q, w: 6, col: (lo != null && r <= lo) || (hi != null && r >= hi) ? 'var(--pen)' : 'var(--accent)' })),
    texts: [{ x: xmax * 0.8, y: top * 0.85, label: 'critical region in red', col: 'var(--pen)', size: 11 }] });
};
FIGS['A7.2-lower'] = A7cr('X ~ B(20, 0.3). The critical region X ≤ 2 is shown in red at the left-hand end; its total probability is 0.0355', 20, 0.3, 2, null, 14);
FIGS['A7.4-two'] = A7cr('X ~ B(20, 0.4) with a two-tailed critical region: X ≤ 3 and X ≥ 13 in red at both ends', 20, 0.4, 3, 13, 18);

CONTENT['A7.1'] = {
notes: R`
### The language of hypothesis tests
A **hypothesis test** uses a sample to decide whether there is evidence that a population parameter, here a probability $p$, has a different value from the one claimed.
- **Null hypothesis $H_0$:** the claim being tested. It always has an equals sign, e.g. $H_0: p = 0.3$.
- **Alternative hypothesis $H_1$:** what you suspect instead.
  - One-tailed: $H_1: p > 0.3$ or $H_1: p < 0.3$
  - Two-tailed: $H_1: p \ne 0.3$
- **Test statistic:** the value from the sample, e.g. the number of successes $X$. Under $H_0$, $X \sim B(n, 0.3)$.
- **Significance level $\alpha$:** how unlikely a result must be (assuming $H_0$ is true) before you reject $H_0$.

### Using probabilities (p-values)
Work out the probability of the observed value **or anything more extreme** in the direction of $H_1$. If it's less than $\alpha$, reject $H_0$.

::: booklet
**Learn these:** hypotheses are always about the parameter $p$, never about $X$. Write the conclusion in the context of the question.
:::

### Worked example 1
A coin is suspected of being biased towards heads. In $20$ tosses there are $15$ heads. Test at the $5\%$ level.
- $H_0: p = 0.5$, $H_1: p > 0.5$. Under $H_0$, $X \sim B(20, 0.5)$.
- $P(X \ge 15) = 1 - P(X \le 14) = 0.0207 < 0.05$.
- Reject $H_0$. There is evidence that the coin is biased towards heads.

### Worked example 2: the probability of what?
**The trap:** using $P(X = 15) = 0.0148$. You must include everything at least as extreme as the result, so use $P(X \ge 15)$.

### Watch out
- Reject $H_0$ or don't reject it. Never say "accept $H_1$" or "prove".
- The conclusion needs context, e.g. "there is evidence that the coin is biased towards heads".
`,
questions: [
Q('A7.1-1', 1, R`A coin is suspected of being biased towards heads. Write down suitable hypotheses for a test, where $p$ is the probability of a head. [[2]]`,
  [R`$H_0$ has an equals sign.`, R`Biased towards heads means $p$ is bigger.`],
  [R`|B1|$H_0: p = 0.5$`, R`|B1|$H_1: p > 0.5$`], R`$H_0: p = 0.5$, $H_1: p > 0.5$`,
  R`$H_0: p = 0.5$ (the coin is fair) and $H_1: p > 0.5$ (biased towards heads).`),
Q('A7.1-2', 1, R`A test is carried out at the $5\%$ significance level. Explain what this means. [[1]]`,
  [R`It's about how unlikely a result needs to be.`, R`Assume $H_0$ is true.`],
  [R`|B1|$H_0$ is rejected if the result (or a more extreme one) has probability less than $5\%$ when $H_0$ is true`], R`Reject $H_0$ if the probability of the result is under $5\%$, assuming $H_0$`,
  R`If $H_0$ is true, the probability of getting a result at least as extreme as the one observed must be less than $5\%$ for $H_0$ to be rejected. So there is at most a $5\%$ chance of wrongly rejecting a true $H_0$.`),
Q('A7.1-3', 1, R`A researcher wants to test whether the proportion of people who cycle to work **has changed** from $0.12$. Should the test be one-tailed or two-tailed? [[1]]`,
  [R`"Changed" could mean up or down.`, R`Which symbol goes in $H_1$?`],
  [R`|B1|Two-tailed: $H_1: p \ne 0.12$`], R`Two-tailed`,
  R`"Changed" doesn't say which direction, so the test is two-tailed with $H_1: p \ne 0.12$.`),
Q('A7.1-4', 2, R`A die is rolled $60$ times to test whether it's biased against sixes. State the test statistic and its distribution if the die is fair. [[2]]`,
  [R`What do you count?`, R`$n = 60$, $p = \frac16$.`],
  [R`|B1|$X$, the number of sixes`, R`|B1|$X \sim B\left(60, \frac16\right)$`], R`$X$ = number of sixes, $X \sim B\left(60, \frac16\right)$`,
  R`The test statistic is $X$, the number of sixes in $60$ rolls. If the die is fair, $X \sim B\left(60, \frac16\right)$.`),
Q('A7.1-5', 2, R`A manufacturer claims that $10\%$ of its bulbs are faulty. A customer believes the figure is higher. Write down suitable hypotheses. [[2]]`,
  [R`$p$ is the proportion faulty.`, R`Higher means $>$.`],
  [R`|B1|$H_0: p = 0.1$`, R`|B1|$H_1: p > 0.1$`], R`$H_0: p = 0.1$, $H_1: p > 0.1$`,
  R`$H_0: p = 0.1$ and $H_1: p > 0.1$, where $p$ is the probability that a bulb is faulty.`),
Q('A7.1-6', 2, R`Explain why hypotheses are written in terms of $p$ rather than $X$. [[1]]`,
  [R`What is $p$?`, R`What is $X$?`],
  [R`|B1|$p$ is the population parameter being tested; $X$ is just the result from the sample`], R`The hypotheses are about the population parameter $p$`,
  R`The test is about the population, and $p$ is the population parameter. $X$ is a statistic calculated from one sample.`),
Q('A7.1-7', 2, R`Explain the meaning of **(a)** the critical region **(b)** the critical value. [[2]]`,
  [R`It's a set of values of the test statistic.`, R`The critical value is on the boundary.`],
  [R`(a)|B1|The values of the test statistic that would lead to rejecting $H_0$`, R`(b)|B1|The first value (boundary) inside the critical region`], R`(a) the values that lead to rejecting $H_0$ (b) its boundary value`,
  R`**(a)** The critical region is the set of values of the test statistic for which $H_0$ would be rejected.
**(b)** The critical value is the first value that falls inside the critical region.`),
Q('A7.1-8', 3, R`Under $H_0$, $X \sim B(20, 0.3)$, and $H_1: p > 0.3$. The observed value is $x = 10$. Carry out the test at the $5\%$ level. [[3]]`,
  [R`Find $P(X \ge 10)$.`, R`$1 - P(X \le 9)$.`],
  [R`|M1|$P(X \ge 10) = 1 - P(X \le 9)$`, R`|A1|$0.0480$`, R`|A1|$0.0480 < 0.05$, so reject $H_0$: evidence that $p > 0.3$`], R`$P(X \ge 10) = 0.0480 < 0.05$: reject $H_0$`,
  R`$P(X \ge 10) = 1 - 0.9520 = 0.0480$. This is less than $0.05$, so reject $H_0$: there is evidence that $p > 0.3$.`),
Q('A7.1-9', 3, R`Under $H_0$, $X \sim B(15, 0.4)$, and $H_1: p < 0.4$. The observed value is $x = 2$. Carry out the test at the $5\%$ level. [[3]]`,
  [R`Lower tail: find $P(X \le 2)$.`, R`Compare with $0.05$.`],
  [R`|M1|$P(X \le 2)$`, R`|A1|$0.0271$`, R`|A1|$0.0271 < 0.05$, so reject $H_0$: evidence that $p < 0.4$`], R`$P(X \le 2) = 0.0271$: reject $H_0$`,
  R`$P(X \le 2) = 0.0271 < 0.05$, so reject $H_0$. There is evidence that $p < 0.4$.`),
Q('A7.1-10', 3, R`In a test of whether a coin is biased towards heads, $H_0$ is rejected. Write a conclusion in context. [[1]]`,
  [R`Don't say "proved".`, R`Mention the coin and heads.`],
  [R`|B1|There is evidence that the coin is biased towards heads`], R`There is evidence that the coin is biased towards heads`,
  R`"There is evidence, at the given significance level, that the coin is biased towards heads." Not "the coin is definitely biased".`),
Q('A7.1-11', 3, R`A student rejects $H_0$ at the $5\%$ level and writes "This proves the coin is biased." Explain why this is wrong. [[2]]`,
  [R`Could a fair coin give this result?`, R`What does $5\%$ represent?`],
  [R`|B1|A fair coin could still give such an extreme result, just with probability under $5\%$`, R`|B1|So the test gives evidence, not proof`], R`It's evidence, not proof: a fair coin could still give the result`,
  R`The result would be unlikely (probability under $5\%$) if the coin were fair, but not impossible. The test gives evidence against $H_0$; it can't prove it false.`),
Q('A7.1-12', 4, R`Under $H_0$, $X \sim B(12, 0.4)$, and $H_1: p > 0.4$. The observed value is $x = 8$. Carry out the test at the $5\%$ level. [[3]]`,
  [R`$P(X \ge 8) = 1 - P(X \le 7)$.`, R`Compare with $0.05$.`],
  [R`|M1|$P(X \ge 8) = 1 - P(X \le 7)$`, R`|A1|$0.0573$`, R`|A1|$0.0573 > 0.05$: don't reject $H_0$, insufficient evidence that $p > 0.4$`], R`$0.0573 > 0.05$: don't reject $H_0$`,
  R`$P(X \ge 8) = 1 - 0.9427 = 0.0573$. This is more than $0.05$, so there is insufficient evidence to reject $H_0$.`),
Q('A7.1-13', 4, R`For the test in question 12, would the conclusion change at the $10\%$ level? Explain. [[2]]`,
  [R`Compare $0.0573$ with $0.10$.`, R`The probability doesn't change; the threshold does.`],
  [R`|B1|$0.0573 < 0.10$`, R`|B1|So $H_0$ would be rejected: evidence that $p > 0.4$ at $10\%$`], R`Yes: $0.0573 < 0.1$, so reject $H_0$`,
  R`Yes. $0.0573 < 0.10$, so at the $10\%$ level $H_0$ would be rejected: there would be evidence that $p > 0.4$.`),
Q('A7.1-14', 4, R`$15\%$ of a company's parcels arrive late. After a change of courier, none of $25$ parcels arrive late. Test, at the $5\%$ level, whether the proportion of late parcels has decreased. [[3]]`,
  [R`$H_1: p < 0.15$; $X \sim B(25, 0.15)$.`, R`$P(X = 0) = 0.85^{25}$.`],
  [R`|B1|$H_0: p = 0.15$, $H_1: p < 0.15$`, R`|M1|$P(X \le 0) = 0.85^{25} = 0.0172$`, R`|A1|$0.0172 < 0.05$: reject $H_0$, evidence fewer parcels are late`], R`$0.0172 < 0.05$: evidence the proportion has decreased`,
  R`$H_0: p = 0.15$, $H_1: p < 0.15$, $X \sim B(25, 0.15)$. $P(X \le 0) = 0.85^{25} = 0.0172 < 0.05$, so reject $H_0$: there is evidence that the proportion of late parcels has decreased.`),
Q('A7.1-15', 5, R`A shop claims that $15\%$ of customers buy a newspaper. The manager thinks the figure is higher. In a random sample of $25$ customers, $7$ buy a newspaper. **(a)** Write down suitable hypotheses. **(b)** Test the claim at the $5\%$ level. **(c)** State, with a reason, whether the conclusion would change at the $10\%$ level. [[6]]`,
  [R`$X \sim B(25, 0.15)$ under $H_0$.`, R`Find $P(X \ge 7)$.`],
  [R`(a)|B1|$H_0: p = 0.15$, $H_1: p > 0.15$`, R`(b)|M1|$X \sim B(25, 0.15)$`, R`(b)|M1|$P(X \ge 7) = 1 - P(X \le 6)$`, R`(b)|A1|$0.0695$`, R`(b)|A1|$0.0695 > 0.05$: insufficient evidence that more than $15\%$ buy a newspaper`, R`(c)|B1|$0.0695 < 0.1$, so at $10\%$ $H_0$ would be rejected`], R`(b) $0.0695 > 0.05$: don't reject (c) yes, reject at $10\%$`,
  R`**(a)** $H_0: p = 0.15$, $H_1: p > 0.15$.
**(b)** Under $H_0$, $X \sim B(25, 0.15)$. $P(X \ge 7) = 1 - 0.9305 = 0.0695 > 0.05$. Don't reject $H_0$: there is insufficient evidence that more than $15\%$ of customers buy a newspaper.
**(c)** Yes: $0.0695 < 0.10$, so at the $10\%$ level there would be evidence that the proportion is higher.`)
]};

CONTENT['A7.2'] = {
notes: R`
### Critical regions
Instead of finding a probability for each result, you can find the **critical region** in advance: all the values that would lead you to reject $H_0$.
- **Lower tail** ($H_1: p < p_0$): the largest $c$ with $P(X \le c) \le \alpha$. The region is $X \le c$.
- **Upper tail** ($H_1: p > p_0$): the smallest $c$ with $P(X \ge c) \le \alpha$. The region is $X \ge c$.
- **Two-tailed:** put $\frac{\alpha}{2}$ in each tail.

The **actual significance level** is the probability of landing in the critical region when $H_0$ is true. It's usually a little less than $\alpha$, because $X$ is discrete.

::: booklet
**Learn these:** $P(X \ge c) = 1 - P(X \le c - 1)$, and the actual significance level is $P(\text{in critical region})$.
:::

### Worked example 1
$X \sim B(20, 0.3)$, $H_1: p < 0.3$, $5\%$ level.
- $P(X \le 2) = 0.0355$ and $P(X \le 3) = 0.1071$.
- $0.0355 \le 0.05$ but $0.1071 > 0.05$, so the critical region is $X \le 2$.
- Actual significance level: $0.0355$, or $3.55\%$.

[[fig:A7.2-lower]]

### Worked example 2: the upper tail
$X \sim B(10, 0.5)$, $H_1: p > 0.5$, $5\%$ level.
- $P(X \ge 9) = 1 - P(X \le 8) = 0.0107$; $P(X \ge 8) = 1 - P(X \le 7) = 0.0547$.
- Critical region: $X \ge 9$.

**The trap:** choosing $X \ge 8$ because $0.0547$ is "closest to $5\%$". The probability in the critical region must not exceed $\alpha$.

### Watch out
- Show the two probabilities either side of the boundary.
- Write the region with an inequality, e.g. $X \le 2$.
`,
questions: [
Q('A7.2-1', 1, R`$X \sim B(20, 0.3)$ and $H_1: p < 0.3$. Given $P(X \le 2) = 0.0355$ and $P(X \le 3) = 0.1071$, find the critical region at the $5\%$ level. [[1]]`,
  [R`Lower tail: the largest $c$ with $P(X \le c) \le 0.05$.`, R`$0.1071$ is too big.`],
  [R`|B1|$X \le 2$`], R`$X \le 2$`,
  R`$P(X \le 2) = 0.0355 \le 0.05$ but $P(X \le 3) > 0.05$, so the critical region is $X \le 2$.`),
Q('A7.2-2', 1, R`For the test in question 1, write down the actual significance level. [[1]]`,
  [R`It's the probability of the critical region.`, R`$P(X \le 2)$.`],
  [R`|B1|$0.0355$`], R`$0.0355$ ($3.55\%$)`,
  R`The actual significance level is $P(X \le 2) = 0.0355$, or $3.55\%$.`),
Q('A7.2-3', 1, R`For the test in question 1, write down the critical value. [[1]]`,
  [R`It's the boundary of the critical region.`, R`The region is $X \le 2$.`],
  [R`|B1|$2$`], R`$2$`,
  R`The critical region is $X \le 2$, so the critical value is $2$.`),
Q('A7.2-4', 2, R`$X \sim B(10, 0.5)$ and $H_1: p > 0.5$. Find the critical region at the $5\%$ level. [[2]]`,
  [R`Upper tail: the smallest $c$ with $P(X \ge c) \le 0.05$.`, R`Try $P(X \ge 8)$ and $P(X \ge 9)$.`],
  [R`|M1|$P(X \ge 9) = 0.0107$, $P(X \ge 8) = 0.0547$`, R`|A1|$X \ge 9$`], R`$X \ge 9$`,
  R`$P(X \ge 9) = 1 - P(X \le 8) = 0.0107 \le 0.05$, but $P(X \ge 8) = 0.0547 > 0.05$. The critical region is $X \ge 9$.`),
Q('A7.2-5', 2, R`$X \sim B(25, 0.2)$ and $H_1: p < 0.2$. Find the critical region at the $10\%$ level. [[2]]`,
  [R`Find $P(X \le 2)$ and $P(X \le 3)$.`, R`The region must have probability at most $0.1$.`],
  [R`|M1|$P(X \le 2) = 0.0982$, $P(X \le 3) = 0.2340$`, R`|A1|$X \le 2$`], R`$X \le 2$`,
  R`$P(X \le 2) = 0.0982 \le 0.10$ and $P(X \le 3) = 0.2340 > 0.10$, so the critical region is $X \le 2$.`),
Q('A7.2-6', 2, R`$X \sim B(30, 0.4)$ and $H_1: p > 0.4$. Find the critical region at the $5\%$ level. [[2]]`,
  [R`Upper tail: try $P(X \ge 16)$ and $P(X \ge 17)$.`, R`$P(X \ge 17) = 1 - P(X \le 16)$.`],
  [R`|M1|$P(X \ge 17) = 0.0481$, $P(X \ge 16) = 0.0971$`, R`|A1|$X \ge 17$`], R`$X \ge 17$`,
  R`$P(X \ge 17) = 0.0481 \le 0.05$ and $P(X \ge 16) = 0.0971 > 0.05$, so the critical region is $X \ge 17$.`),
Q('A7.2-7', 2, R`$X \sim B(20, 0.15)$ and $H_1: p > 0.15$. Find the critical region at the $1\%$ level. [[2]]`,
  [R`Upper tail with $\alpha = 0.01$.`, R`Try $P(X \ge 7)$ and $P(X \ge 8)$.`],
  [R`|M1|$P(X \ge 8) = 0.0059$, $P(X \ge 7) = 0.0219$`, R`|A1|$X \ge 8$`], R`$X \ge 8$`,
  R`$P(X \ge 8) = 0.0059 \le 0.01$ but $P(X \ge 7) = 0.0219 > 0.01$. The critical region is $X \ge 8$.`),
Q('A7.2-8', 3, R`$X \sim B(20, 0.4)$ and $H_1: p \ne 0.4$. Find the critical region at the $10\%$ level, with the probability in each tail as close as possible to $5\%$ without exceeding it, and find the actual significance level. [[4]]`,
  [R`Use $5\%$ in each tail.`, R`Lower: $P(X \le 3)$; upper: $P(X \ge 13)$.`],
  [R`|M1|Lower tail: $P(X \le 3) = 0.0160$, $P(X \le 4) = 0.0510$`, R`|M1|Upper tail: $P(X \ge 13) = 0.0210$, $P(X \ge 12) = 0.0565$`, R`|A1|$X \le 3$ or $X \ge 13$`, R`|A1|Actual level $0.0370$`], R`$X \le 3$ or $X \ge 13$; actual level $0.0370$`,
  R`Lower tail: $P(X \le 3) = 0.0160$ and $P(X \le 4) = 0.0510$, so $X \le 3$. Upper tail: $P(X \ge 13) = 0.0210$ and $P(X \ge 12) = 0.0565$, so $X \ge 13$. Actual significance level $= 0.0160 + 0.0210 = 0.0370$.`,
  { solFig: FIGS['A7.4-two'] }),
Q('A7.2-9', 3, R`$X \sim B(40, 0.25)$ and $H_1: p < 0.25$. Find the critical region at the $5\%$ level and the actual significance level. [[3]]`,
  [R`Try $P(X \le 5)$ and $P(X \le 6)$.`, R`The actual level is $P$(critical region).`],
  [R`|M1|$P(X \le 5) = 0.0433$, $P(X \le 6) = 0.0962$`, R`|A1|$X \le 5$`, R`|A1|$0.0433$`], R`$X \le 5$; actual level $0.0433$`,
  R`$P(X \le 5) = 0.0433 \le 0.05$ and $P(X \le 6) = 0.0962 > 0.05$, so the critical region is $X \le 5$ and the actual significance level is $0.0433$.`),
Q('A7.2-10', 3, R`$X \sim B(50, 0.1)$ and $H_1: p > 0.1$. Find the critical region at the $5\%$ level and the actual significance level. [[3]]`,
  [R`Try $P(X \ge 9)$ and $P(X \ge 10)$.`, R`$P(X \ge 10) = 1 - P(X \le 9)$.`],
  [R`|M1|$P(X \ge 10) = 0.0245$, $P(X \ge 9) = 0.0579$`, R`|A1|$X \ge 10$`, R`|A1|$0.0245$`], R`$X \ge 10$; actual level $0.0245$`,
  R`$P(X \ge 10) = 0.0245 \le 0.05$ and $P(X \ge 9) = 0.0579 > 0.05$. Critical region $X \ge 10$, actual significance level $0.0245$.`),
Q('A7.2-11', 3, R`For the test in question 10, state the conclusion if the observed value is **(a)** $9$ **(b)** $12$. [[2]]`,
  [R`Is the value in $X \ge 10$?`, R`Inside the region: reject $H_0$.`],
  [R`(a)|B1|$9$ isn't in the critical region: don't reject $H_0$`, R`(b)|B1|$12$ is in the critical region: reject $H_0$, evidence that $p > 0.1$`], R`(a) don't reject (b) reject`,
  R`**(a)** $9$ is outside the critical region, so there is insufficient evidence to reject $H_0$.
**(b)** $12$ is inside it, so reject $H_0$: there is evidence that $p > 0.1$.`),
Q('A7.2-12', 4, R`$X \sim B(30, 0.5)$ and $H_1: p \ne 0.5$. Find the critical region at the $5\%$ level and the actual significance level. [[4]]`,
  [R`$2.5\%$ in each tail.`, R`By symmetry, the tails mirror each other.`],
  [R`|M1|$P(X \le 9) = 0.0214$, $P(X \le 10) = 0.0494$`, R`|A1|$X \le 9$`, R`|A1|$X \ge 21$ (by symmetry)`, R`|A1|Actual level $0.0428$`], R`$X \le 9$ or $X \ge 21$; actual level $0.0428$`,
  R`Lower tail: $P(X \le 9) = 0.0214 \le 0.025$ and $P(X \le 10) = 0.0494 > 0.025$, so $X \le 9$. With $p = 0.5$ the distribution is symmetric, so the upper tail is $X \ge 21$. Actual level $= 2 \times 0.0214 = 0.0428$.`),
Q('A7.2-13', 4, R`A test of $H_0: p = 0.2$ against $H_1: p < 0.2$ is carried out at the $5\%$ level with a sample of size $n$. Find the smallest $n$ for which $X = 0$ is in the critical region. [[3]]`,
  [R`$X = 0$ is in the region if $P(X = 0) \le 0.05$.`, R`$0.8^n \le 0.05$.`],
  [R`|M1|$0.8^n \le 0.05$`, R`|M1|$n \ge \frac{\log 0.05}{\log 0.8} = 13.4$`, R`|A1|$n = 14$`], R`$n = 14$`,
  R`$P(X = 0) = 0.8^n \le 0.05$ gives $n \ge \frac{\log 0.05}{\log 0.8} = 13.4$, so the smallest $n$ is $14$.`),
Q('A7.2-14', 4, R`$X \sim B(25, 0.3)$ and $H_1: p \ne 0.3$. Find the critical region at the $5\%$ level and the actual significance level. [[4]]`,
  [R`$2.5\%$ in each tail.`, R`Lower: $P(X \le 2)$; upper: $P(X \ge 13)$.`],
  [R`|M1|$P(X \le 2) = 0.0090$, $P(X \le 3) = 0.0332$`, R`|M1|$P(X \ge 13) = 0.0175$, $P(X \ge 12) = 0.0442$`, R`|A1|$X \le 2$ or $X \ge 13$`, R`|A1|Actual level $0.0264$`], R`$X \le 2$ or $X \ge 13$; actual level $0.0264$`,
  R`Lower: $P(X \le 2) = 0.0090$ and $P(X \le 3) = 0.0332 > 0.025$, so $X \le 2$. Upper: $P(X \ge 13) = 0.0175$ and $P(X \ge 12) = 0.0442 > 0.025$, so $X \ge 13$. Actual level $= 0.00896 + 0.01747 = 0.0264$.`),
Q('A7.2-15', 5, R`$X \sim B(40, 0.35)$ and $H_1: p \ne 0.35$. **(a)** Find the critical region at the $10\%$ level. **(b)** Find the actual significance level. **(c)** The observed value is $19$. State the conclusion. [[6]]`,
  [R`$5\%$ in each tail.`, R`Lower: $P(X \le 8)$; upper: $P(X \ge 20)$.`],
  [R`(a)|M1|$P(X \le 8) = 0.0303$, $P(X \le 9) = 0.0644$`, R`(a)|M1|$P(X \ge 20) = 0.0363$, $P(X \ge 19) = 0.0699$`, R`(a)|A1|$X \le 8$ or $X \ge 20$`, R`(b)|B1|$0.0666$`, R`(c)|M1|$19$ is not in the critical region`, R`(c)|A1|Insufficient evidence that $p \ne 0.35$`], R`(a) $X \le 8$ or $X \ge 20$ (b) $0.0666$ (c) don't reject $H_0$`,
  R`**(a)** Lower: $P(X \le 8) = 0.0303$, $P(X \le 9) = 0.0644 > 0.05$: $X \le 8$. Upper: $P(X \ge 20) = 0.0363$, $P(X \ge 19) = 0.0699 > 0.05$: $X \ge 20$.
**(b)** $0.0303 + 0.0363 = 0.0666$.
**(c)** $19$ is not in the critical region, so there is insufficient evidence that $p$ differs from $0.35$.`)
]};

CONTENT['A7.3'] = {
notes: R`
### Carrying out a one-tailed test
1. Define $p$ and write $H_0$ and $H_1$.
2. State the distribution of $X$ under $H_0$.
3. Either find the probability of the result or something more extreme, or find the critical region.
4. Compare with the significance level.
5. Write a conclusion **in context**.

::: booklet
**Learn this:** for $H_1: p > p_0$ use $P(X \ge x)$; for $H_1: p < p_0$ use $P(X \le x)$, where $x$ is the observed value.
:::

### Worked example 1
A seed company claims $90\%$ of its seeds germinate. In a sample of $20$, only $15$ germinate. Test, at the $5\%$ level, whether the claim is too high.
- $H_0: p = 0.9$, $H_1: p < 0.9$; $X \sim B(20, 0.9)$.
- $P(X \le 15) = 0.0432 < 0.05$.
- Reject $H_0$: there is evidence that fewer than $90\%$ of the seeds germinate.

### Worked example 2: which tail?
In the same example, a student works out $P(X \ge 15) = 0.9887$.

**The trap:** the alternative hypothesis is $p < 0.9$, so "more extreme" means **fewer** seeds germinating. Use $P(X \le 15)$.

### Watch out
- Use the original significance level for a one-tailed test; don't halve it.
- Say "insufficient evidence" rather than "$H_0$ is true".
`,
questions: [
Q('A7.3-1', 1, R`In an upper-tail test at the $5\%$ level, $P(X \ge 8) = 0.032$ for the observed value $8$. State whether $H_0$ should be rejected. [[1]]`,
  [R`Compare with $0.05$.`, R`Smaller: reject.`],
  [R`|B1|$0.032 < 0.05$, so reject $H_0$`], R`Reject $H_0$`,
  R`$0.032 < 0.05$, so the result is significant and $H_0$ is rejected.`),
Q('A7.3-2', 1, R`In a one-tailed test at the $5\%$ level, the probability of the observed result or something more extreme is $0.08$. State the conclusion. [[1]]`,
  [R`Compare with $0.05$.`, R`Larger: don't reject.`],
  [R`|B1|$0.08 > 0.05$: don't reject $H_0$`], R`Don't reject $H_0$`,
  R`$0.08 > 0.05$, so there is insufficient evidence to reject $H_0$.`),
Q('A7.3-3', 1, R`A test of whether a die is biased towards sixes gives a result that is not significant. Write a conclusion in context. [[1]]`,
  [R`Don't say "the die is fair".`, R`Talk about evidence.`],
  [R`|B1|Insufficient evidence that the die is biased towards sixes`], R`There is insufficient evidence that the die is biased towards sixes`,
  R`"There is insufficient evidence that the die is biased towards sixes." You can't conclude it is definitely fair.`),
Q('A7.3-4', 2, R`A coin is tossed $20$ times and lands heads $15$ times. Test, at the $5\%$ level, whether it's biased towards heads. [[3]]`,
  [R`$H_1: p > 0.5$; $X \sim B(20, 0.5)$.`, R`Find $P(X \ge 15)$.`],
  [R`|B1|$H_0: p = 0.5$, $H_1: p > 0.5$`, R`|M1|$P(X \ge 15) = 1 - P(X \le 14) = 0.0207$`, R`|A1|$0.0207 < 0.05$: evidence the coin is biased towards heads`], R`$0.0207 < 0.05$: evidence of bias towards heads`,
  R`$H_0: p = 0.5$, $H_1: p > 0.5$, $X \sim B(20, 0.5)$. $P(X \ge 15) = 0.0207 < 0.05$, so reject $H_0$: there is evidence that the coin is biased towards heads.`),
Q('A7.3-5', 2, R`A die is rolled $30$ times and shows a six only once. Test, at the $5\%$ level, whether the die is biased against sixes. [[3]]`,
  [R`$H_1: p < \frac16$; $X \sim B\left(30, \frac16\right)$.`, R`Find $P(X \le 1)$.`],
  [R`|B1|$H_0: p = \frac16$, $H_1: p < \frac16$`, R`|M1|$P(X \le 1) = 0.0295$`, R`|A1|$0.0295 < 0.05$: evidence the die is biased against sixes`], R`$0.0295 < 0.05$: evidence of bias against sixes`,
  R`$H_0: p = \frac16$, $H_1: p < \frac16$. Under $H_0$, $P(X \le 1) = \left(\frac56\right)^{30} + 30\left(\frac16\right)\left(\frac56\right)^{29} = 0.0295 < 0.05$. Reject $H_0$: there is evidence the die is biased against sixes.`),
Q('A7.3-6', 2, R`A company claims $90\%$ of its seeds germinate. In a sample of $20$, $15$ germinate. Test at the $5\%$ level whether the claim is too high. [[3]]`,
  [R`$H_1: p < 0.9$.`, R`Find $P(X \le 15)$ for $B(20, 0.9)$.`],
  [R`|B1|$H_0: p = 0.9$, $H_1: p < 0.9$`, R`|M1|$P(X \le 15) = 0.0432$`, R`|A1|$0.0432 < 0.05$: evidence that fewer than $90\%$ germinate`], R`$0.0432 < 0.05$: the claim is too high`,
  R`$H_0: p = 0.9$, $H_1: p < 0.9$, $X \sim B(20, 0.9)$. $P(X \le 15) = 0.0432 < 0.05$, so reject $H_0$: there is evidence that the germination rate is less than $90\%$.`),
Q('A7.3-7', 2, R`In question 4, explain why the test uses $P(X \ge 15)$ rather than $P(X = 15)$. [[1]]`,
  [R`What counts as "at least as extreme"?`, R`$16$ heads would be even stronger evidence.`],
  [R`|B1|You need the probability of a result at least as extreme as the one observed, which includes $15, 16, \dots, 20$`], R`It must include all results at least as extreme`,
  R`The test asks how likely a result at least as extreme as $15$ heads is under $H_0$. That includes $15, 16, \dots, 20$ heads, so you use $P(X \ge 15)$. Any single value has a small probability, so $P(X = 15)$ on its own would be misleading.`),
Q('A7.3-8', 3, R`$H_0: p = 0.2$ and $H_1: p > 0.2$, with a sample of $25$. **(a)** Find the critical region at the $5\%$ level. **(b)** The observed value is $8$. State the conclusion. [[4]]`,
  [R`$X \sim B(25, 0.2)$; upper tail.`, R`Try $P(X \ge 9)$ and $P(X \ge 8)$.`],
  [R`(a)|M1|$P(X \ge 9) = 0.0468$, $P(X \ge 8) = 0.1091$`, R`(a)|A1|$X \ge 9$`, R`(b)|M1|$8$ is not in the critical region`, R`(b)|A1|Insufficient evidence that $p > 0.2$`], R`(a) $X \ge 9$ (b) don't reject $H_0$`,
  R`**(a)** $P(X \ge 9) = 0.0468 \le 0.05$ and $P(X \ge 8) = 0.1091 > 0.05$: critical region $X \ge 9$.
**(b)** $8$ is not in the critical region, so there is insufficient evidence that $p > 0.2$.`),
Q('A7.3-9', 3, R`$20\%$ of a town's residents are thought to own an electric car. In a sample of $15$ residents, $6$ own one. Test, at the $5\%$ level, whether the proportion is higher than $20\%$. [[3]]`,
  [R`$X \sim B(15, 0.2)$; find $P(X \ge 6)$.`, R`$1 - P(X \le 5)$.`],
  [R`|B1|$H_0: p = 0.2$, $H_1: p > 0.2$`, R`|M1|$P(X \ge 6) = 0.0611$`, R`|A1|$0.0611 > 0.05$: insufficient evidence that more than $20\%$ own one`], R`$0.0611 > 0.05$: don't reject $H_0$`,
  R`$P(X \ge 6) = 1 - 0.9389 = 0.0611 > 0.05$. Don't reject $H_0$: there is insufficient evidence that more than $20\%$ of residents own an electric car.`),
Q('A7.3-10', 3, R`$20\%$ of a bus company's journeys run late. After a new timetable is introduced, $3$ of $40$ journeys run late. Test, at the $5\%$ level, whether the proportion of late journeys has fallen. [[4]]`,
  [R`$H_1: p < 0.2$.`, R`$X \sim B(40, 0.2)$; find $P(X \le 3)$.`],
  [R`|B1|$H_0: p = 0.2$, $H_1: p < 0.2$`, R`|M1|$X \sim B(40, 0.2)$`, R`|A1|$P(X \le 3) = 0.0285$`, R`|A1|$< 0.05$: evidence that fewer journeys run late`], R`$0.0285 < 0.05$: evidence of improvement`,
  R`$H_0: p = 0.2$, $H_1: p < 0.2$. Under $H_0$, $P(X \le 3) = 0.0285 < 0.05$. Reject $H_0$: there is evidence that the proportion of late journeys has fallen.`),
Q('A7.3-11', 3, R`$H_0: p = 0.3$, $H_1: p < 0.3$, with $n = 50$. Find the critical region at the $5\%$ level, and state the conclusion if $9$ successes are observed. [[3]]`,
  [R`Try $P(X \le 9)$ and $P(X \le 10)$.`, R`Is $9$ inside the region?`],
  [R`|M1|$P(X \le 9) = 0.0402$, $P(X \le 10) = 0.0789$`, R`|A1|$X \le 9$`, R`|A1|$9$ is in the region: reject $H_0$, evidence that $p < 0.3$`], R`$X \le 9$; reject $H_0$`,
  R`$P(X \le 9) = 0.0402$ and $P(X \le 10) = 0.0789 > 0.05$, so the critical region is $X \le 9$. The observed $9$ lies in it, so reject $H_0$: there is evidence that $p < 0.3$.`),
Q('A7.3-12', 4, R`$25\%$ of people prefer brand $A$. After an advertising campaign, $9$ of a random sample of $20$ people prefer brand $A$. **(a)** Find the critical region for a test at the $5\%$ level of whether the proportion has increased. **(b)** State the actual significance level. **(c)** State the conclusion. [[5]]`,
  [R`$X \sim B(20, 0.25)$; upper tail.`, R`Try $P(X \ge 9)$ and $P(X \ge 8)$.`],
  [R`(a)|B1|$H_0: p = 0.25$, $H_1: p > 0.25$`, R`(a)|M1|$P(X \ge 9) = 0.0409$, $P(X \ge 8) = 0.1018$`, R`(a)|A1|$X \ge 9$`, R`(b)|B1|$0.0409$`, R`(c)|B1|$9$ is in the region: evidence the proportion has increased`], R`(a) $X \ge 9$ (b) $0.0409$ (c) reject $H_0$`,
  R`**(a)** $P(X \ge 9) = 0.0409 \le 0.05$ and $P(X \ge 8) = 0.1018 > 0.05$, so the critical region is $X \ge 9$.
**(b)** $0.0409$.
**(c)** $9$ is in the critical region, so reject $H_0$: there is evidence that the proportion preferring brand $A$ has increased.`),
Q('A7.3-13', 4, R`In $30$ trials of a game with $P(\text{win}) = 0.25$, a player wins $12$ times. Test at the $5\%$ level whether the player wins more often than $25\%$ of the time, and comment on the result. [[4]]`,
  [R`$X \sim B(30, 0.25)$; find $P(X \ge 12)$.`, R`It's very close to $0.05$.`],
  [R`|B1|$H_0: p = 0.25$, $H_1: p > 0.25$`, R`|M1|$P(X \ge 12) = 1 - P(X \le 11)$`, R`|A1|$0.0507 > 0.05$: don't reject $H_0$`, R`|B1|The result is only just not significant, so more data would help`], R`$0.0507 > 0.05$: just not significant`,
  R`$P(X \ge 12) = 1 - 0.9493 = 0.0507$, which is just above $0.05$. There is insufficient evidence at the $5\%$ level that the player wins more often than $25\%$ of the time. The result is borderline, so a larger sample would be worthwhile.`),
Q('A7.3-14', 4, R`$15\%$ of the items from a process are faulty. A new process is tried and a sample of $60$ items is checked. **(a)** Find the critical region for a test at the $5\%$ level of whether the proportion of faulty items has decreased. **(b)** $4$ items are faulty. State the conclusion. [[5]]`,
  [R`$X \sim B(60, 0.15)$; lower tail.`, R`Try $P(X \le 4)$ and $P(X \le 5)$.`],
  [R`(a)|B1|$H_0: p = 0.15$, $H_1: p < 0.15$`, R`(a)|M1|$P(X \le 4) = 0.0424$, $P(X \le 5) = 0.0968$`, R`(a)|A1|$X \le 4$`, R`(b)|M1|$4$ is in the critical region`, R`(b)|A1|Evidence the new process has fewer faulty items`], R`(a) $X \le 4$ (b) reject $H_0$`,
  R`**(a)** $P(X \le 4) = 0.0424$ and $P(X \le 5) = 0.0968 > 0.05$: critical region $X \le 4$.
**(b)** $4$ is in the critical region, so reject $H_0$: there is evidence that the proportion of faulty items has decreased.`),
Q('A7.3-15', 5, R`It is claimed that $10\%$ of patients have a certain allergy. A doctor thinks the figure is higher and checks $30$ patients. **(a)** Find the critical region for a test at the $5\%$ level. **(b)** State the actual significance level. **(c)** $6$ patients have the allergy. State the conclusion. **(d)** State the smallest number of patients with the allergy that would support the doctor's belief. [[6]]`,
  [R`$X \sim B(30, 0.1)$; upper tail.`, R`Try $P(X \ge 7)$ and $P(X \ge 6)$.`],
  [R`(a)|B1|$H_0: p = 0.1$, $H_1: p > 0.1$`, R`(a)|M1|$P(X \ge 7) = 0.0258$, $P(X \ge 6) = 0.0732$`, R`(a)|A1|$X \ge 7$`, R`(b)|B1|$0.0258$`, R`(c)|B1|$6$ not in region: insufficient evidence the figure is higher`, R`(d)|B1|$7$`], R`(a) $X \ge 7$ (b) $0.0258$ (c) don't reject (d) $7$`,
  R`**(a)** $P(X \ge 7) = 0.0258 \le 0.05$ but $P(X \ge 6) = 0.0732 > 0.05$, so the critical region is $X \ge 7$.
**(b)** $0.0258$.
**(c)** $6$ is not in the critical region: there is insufficient evidence that more than $10\%$ have the allergy.
**(d)** $7$, the critical value.`)
]};

CONTENT['A7.4'] = {
notes: R`
### Two-tailed tests
Use a two-tailed test when $H_1$ says only that $p$ has **changed**: $H_1: p \ne p_0$.
- Split the significance level: $\frac{\alpha}{2}$ in each tail.
- With the probability method, compare the probability of the result (in the tail it falls in) with $\frac{\alpha}{2}$.
- Decide which tail by comparing the observed value with the expected value $np_0$.

[[fig:A7.4-two]]

::: booklet
**Learn this:** in a two-tailed test at level $\alpha$, each tail has probability at most $\frac{\alpha}{2}$.
:::

### Worked example 1
$X \sim B(20, 0.35)$ under $H_0$, $H_1: p \ne 0.35$, $10\%$ level, observed $x = 3$.
- Expected value $20 \times 0.35 = 7$, and $3 < 7$, so use the lower tail.
- $P(X \le 3) = 0.0444 < 0.05$.
- Reject $H_0$: there is evidence that $p$ has changed.

### Worked example 2: halving
A coin is tossed $20$ times and lands heads $14$ times. Test at the $10\%$ level whether it's biased.
- $H_1: p \ne 0.5$. $P(X \ge 14) = 0.0577$.
- Compare with $0.05$: $0.0577 > 0.05$, so don't reject $H_0$.

**The trap:** comparing $0.0577$ with $0.10$ and rejecting. In a two-tailed test, each tail gets only half of the significance level.

### Watch out
- The conclusion should say "changed" (or "biased"), not "increased" or "decreased".
`,
questions: [
Q('A7.4-1', 1, R`A two-tailed test is carried out at the $5\%$ level. What is the maximum probability allowed in each tail? [[1]]`,
  [R`Split the level between the tails.`, R`Half of $5\%$.`],
  [R`|B1|$2.5\%$`], R`$0.025$`,
  R`The $5\%$ is split equally: $2.5\%$ in each tail.`),
Q('A7.4-2', 1, R`Write down hypotheses to test whether a coin is biased, where $p$ is the probability of a head. [[1]]`,
  [R`Biased in either direction.`, R`Two-tailed.`],
  [R`|B1|$H_0: p = 0.5$, $H_1: p \ne 0.5$`], R`$H_0: p = 0.5$, $H_1: p \ne 0.5$`,
  R`$H_0: p = 0.5$ and $H_1: p \ne 0.5$, because "biased" could be in either direction.`),
Q('A7.4-3', 1, R`In a two-tailed test at the $5\%$ level, the probability in the relevant tail is $0.03$. State the conclusion. [[1]]`,
  [R`Compare with $0.025$.`, R`$0.03 > 0.025$.`],
  [R`|B1|$0.03 > 0.025$: don't reject $H_0$`], R`Don't reject $H_0$`,
  R`Each tail is allowed $0.025$. Since $0.03 > 0.025$, there is insufficient evidence to reject $H_0$.`),
Q('A7.4-4', 2, R`$X \sim B(20, 0.35)$ under $H_0$, and $H_1: p \ne 0.35$. The observed value is $3$. Carry out the test at the $10\%$ level. [[3]]`,
  [R`Expected value $7$, so use the lower tail.`, R`Compare $P(X \le 3)$ with $0.05$.`],
  [R`|M1|Lower tail as $3 < 7$`, R`|A1|$P(X \le 3) = 0.0444$`, R`|A1|$0.0444 < 0.05$: reject $H_0$, evidence that $p$ has changed`], R`$0.0444 < 0.05$: reject $H_0$`,
  R`$np = 7$ and $3 < 7$, so use the lower tail. $P(X \le 3) = 0.0444 < 0.05$. Reject $H_0$: there is evidence that $p \ne 0.35$.`),
Q('A7.4-5', 2, R`A coin is tossed $20$ times and lands heads $14$ times. Test, at the $10\%$ level, whether the coin is biased. [[3]]`,
  [R`$H_1: p \ne 0.5$; compare with $0.05$.`, R`Find $P(X \ge 14)$.`],
  [R`|B1|$H_0: p = 0.5$, $H_1: p \ne 0.5$`, R`|M1|$P(X \ge 14) = 0.0577$`, R`|A1|$0.0577 > 0.05$: insufficient evidence that the coin is biased`], R`$0.0577 > 0.05$: no evidence of bias`,
  R`$H_0: p = 0.5$, $H_1: p \ne 0.5$. $P(X \ge 14) = 1 - P(X \le 13) = 0.0577$. This is more than $0.05$ (half of $10\%$), so there is insufficient evidence that the coin is biased.`),
Q('A7.4-6', 2, R`$X \sim B(25, 0.2)$ under $H_0$, and $H_1: p \ne 0.2$. The observed value is $1$. Carry out the test at the $5\%$ level. [[3]]`,
  [R`Expected value $5$: lower tail.`, R`Compare $P(X \le 1)$ with $0.025$.`],
  [R`|M1|$P(X \le 1)$`, R`|A1|$0.0274$`, R`|A1|$0.0274 > 0.025$: don't reject $H_0$`], R`$0.0274 > 0.025$: don't reject $H_0$`,
  R`$P(X \le 1) = 0.8^{25} + 25(0.2)(0.8)^{24} = 0.0274$. This is more than $0.025$, so there is insufficient evidence that $p$ has changed.`),
Q('A7.4-7', 2, R`$X \sim B(25, 0.2)$ under $H_0$, and $H_1: p \ne 0.2$. Explain how to decide which tail to use when the observed value is $9$. [[1]]`,
  [R`Work out the expected value.`, R`$25 \times 0.2$.`],
  [R`|B1|$E(X) = 5$ and $9 > 5$, so use the upper tail, $P(X \ge 9)$`], R`$9 > 5 = np$, so the upper tail`,
  R`Under $H_0$ the expected value is $np = 5$. Since $9$ is above $5$, use the upper tail and find $P(X \ge 9)$.`),
Q('A7.4-8', 3, R`$X \sim B(20, 0.3)$ and $H_1: p \ne 0.3$. Find the critical region at the $5\%$ level and the actual significance level. [[4]]`,
  [R`$2.5\%$ per tail.`, R`Lower: $P(X \le 1)$; upper: $P(X \ge 11)$.`],
  [R`|M1|$P(X \le 1) = 0.0076$, $P(X \le 2) = 0.0355$`, R`|M1|$P(X \ge 11) = 0.0171$, $P(X \ge 10) = 0.0480$`, R`|A1|$X \le 1$ or $X \ge 11$`, R`|A1|Actual level $0.0248$`], R`$X \le 1$ or $X \ge 11$; actual level $0.0248$`,
  R`Lower: $P(X \le 1) = 0.0076$ but $P(X \le 2) = 0.0355 > 0.025$, so $X \le 1$. Upper: $P(X \ge 11) = 0.0171$ but $P(X \ge 10) = 0.0480 > 0.025$, so $X \ge 11$. Actual level $= 0.0076 + 0.0171 = 0.0248$.`),
Q('A7.4-9', 3, R`$X \sim B(25, 0.3)$ under $H_0$, and $H_1: p \ne 0.3$. The observed value is $11$. Carry out the test at the $10\%$ level. [[3]]`,
  [R`Expected $7.5$: upper tail.`, R`Compare $P(X \ge 11)$ with $0.05$.`],
  [R`|M1|$P(X \ge 11) = 1 - P(X \le 10)$`, R`|A1|$0.0978$`, R`|A1|$0.0978 > 0.05$: don't reject $H_0$`], R`$0.0978 > 0.05$: don't reject $H_0$`,
  R`$np = 7.5$ and $11 > 7.5$, so use the upper tail. $P(X \ge 11) = 0.0978 > 0.05$: insufficient evidence that $p$ has changed.`),
Q('A7.4-10', 3, R`$X \sim B(40, 0.5)$ and $H_1: p \ne 0.5$. Find the critical region at the $5\%$ level and the actual significance level. [[4]]`,
  [R`Symmetric distribution.`, R`Try $P(X \le 13)$ and $P(X \le 14)$.`],
  [R`|M1|$P(X \le 13) = 0.0192$, $P(X \le 14) = 0.0403$`, R`|A1|$X \le 13$`, R`|A1|$X \ge 27$`, R`|A1|Actual level $0.0385$`], R`$X \le 13$ or $X \ge 27$; actual level $0.0385$`,
  R`$P(X \le 13) = 0.0192 \le 0.025$ and $P(X \le 14) = 0.0403 > 0.025$, so the lower region is $X \le 13$. By symmetry the upper region is $X \ge 27$. Actual level $= 2 \times 0.0192 = 0.0385$.`),
Q('A7.4-11', 3, R`Last year $30\%$ of students travelled to college by bus. This year, $5$ of a random sample of $30$ students do. Test, at the $10\%$ level, whether the proportion has changed. [[4]]`,
  [R`$H_1: p \ne 0.3$; expected $9$.`, R`Compare $P(X \le 5)$ with $0.05$.`],
  [R`|B1|$H_0: p = 0.3$, $H_1: p \ne 0.3$`, R`|M1|$P(X \le 5)$ for $B(30, 0.3)$`, R`|A1|$0.0766$`, R`|A1|$0.0766 > 0.05$: insufficient evidence the proportion has changed`], R`$0.0766 > 0.05$: no evidence of change`,
  R`$H_0: p = 0.3$, $H_1: p \ne 0.3$. $P(X \le 5) = 0.0766$. Each tail is allowed $0.05$, and $0.0766 > 0.05$, so there is insufficient evidence that the proportion has changed.`),
Q('A7.4-12', 4, R`$X \sim B(50, 0.2)$ and $H_1: p \ne 0.2$. Find the critical region at the $10\%$ level and the actual significance level. [[4]]`,
  [R`$5\%$ per tail.`, R`Lower: $P(X \le 5)$; upper: $P(X \ge 16)$.`],
  [R`|M1|$P(X \le 5) = 0.0480$, $P(X \le 6) = 0.1034$`, R`|M1|$P(X \ge 16) = 0.0308$, $P(X \ge 15) = 0.0607$`, R`|A1|$X \le 5$ or $X \ge 16$`, R`|A1|Actual level $0.0788$`], R`$X \le 5$ or $X \ge 16$; actual level $0.0788$`,
  R`Lower: $P(X \le 5) = 0.0480$, $P(X \le 6) = 0.1034$: $X \le 5$. Upper: $P(X \ge 16) = 0.0308$, $P(X \ge 15) = 0.0607$: $X \ge 16$. Actual level $= 0.0480 + 0.0308 = 0.0788$.`),
Q('A7.4-13', 4, R`$30\%$ of customers used to choose the vegetarian option. After a menu change, $16$ of $40$ customers choose it. Test at the $5\%$ level whether the proportion has changed. [[4]]`,
  [R`Expected $12$: upper tail.`, R`Compare $P(X \ge 16)$ with $0.025$.`],
  [R`|B1|$H_0: p = 0.3$, $H_1: p \ne 0.3$`, R`|M1|$P(X \ge 16) = 1 - P(X \le 15)$`, R`|A1|$0.1151$`, R`|A1|$0.1151 > 0.025$: insufficient evidence of a change`], R`$0.1151 > 0.025$: no evidence of a change`,
  R`$H_0: p = 0.3$, $H_1: p \ne 0.3$, $X \sim B(40, 0.3)$. $16 > 12$, so use the upper tail: $P(X \ge 16) = 0.1151 > 0.025$. There is insufficient evidence that the proportion has changed.`),
Q('A7.4-14', 4, R`$X \sim B(30, 0.25)$ and $H_1: p \ne 0.25$. **(a)** Find the critical region at the $5\%$ level. **(b)** Find the actual significance level. **(c)** State the conclusion if $13$ successes are observed. [[5]]`,
  [R`$2.5\%$ per tail.`, R`Lower: $P(X \le 2)$; upper: $P(X \ge 13)$.`],
  [R`(a)|M1|$P(X \le 2) = 0.0106$, $P(X \le 3) = 0.0374$`, R`(a)|M1|$P(X \ge 13) = 0.0216$, $P(X \ge 12) = 0.0507$`, R`(a)|A1|$X \le 2$ or $X \ge 13$`, R`(b)|B1|$0.0322$`, R`(c)|B1|$13$ is in the region: evidence that $p \ne 0.25$`], R`(a) $X \le 2$ or $X \ge 13$ (b) $0.0322$ (c) reject $H_0$`,
  R`**(a)** Lower: $P(X \le 2) = 0.0106$ and $P(X \le 3) = 0.0374 > 0.025$: $X \le 2$. Upper: $P(X \ge 13) = 0.0216$ and $P(X \ge 12) = 0.0507 > 0.025$: $X \ge 13$.
**(b)** $0.0106 + 0.0216 = 0.0322$.
**(c)** $13$ is in the critical region, so reject $H_0$: there is evidence that $p$ has changed.`),
Q('A7.4-15', 5, R`$40\%$ of voters supported a party at the last election. In a poll of $60$ voters, $16$ support it. **(a)** Find the critical region for a two-tailed test at the $10\%$ level. **(b)** Find the actual significance level. **(c)** Carry out the test. [[7]]`,
  [R`$X \sim B(60, 0.4)$, $5\%$ per tail.`, R`Lower: $P(X \le 17)$; upper: $P(X \ge 31)$.`],
  [R`(a)|B1|$H_0: p = 0.4$, $H_1: p \ne 0.4$`, R`(a)|M1|$P(X \le 17) = 0.0413$, $P(X \le 18) = 0.0719$`, R`(a)|M1|$P(X \ge 31) = 0.0445$, $P(X \ge 30) = 0.0746$`, R`(a)|A1|$X \le 17$ or $X \ge 31$`, R`(b)|B1|$0.0858$`, R`(c)|M1|$16$ is in the critical region`, R`(c)|A1|Evidence that support has changed`], R`(a) $X \le 17$ or $X \ge 31$ (b) $0.0858$ (c) reject $H_0$`,
  R`**(a)** Lower: $P(X \le 17) = 0.0413$ and $P(X \le 18) = 0.0719 > 0.05$: $X \le 17$. Upper: $P(X \ge 31) = 0.0445$ and $P(X \ge 30) = 0.0746 > 0.05$: $X \ge 31$.
**(b)** $0.0413 + 0.0445 = 0.0858$.
**(c)** $16$ lies in the critical region, so reject $H_0$: there is evidence that the level of support has changed.`)
]};
