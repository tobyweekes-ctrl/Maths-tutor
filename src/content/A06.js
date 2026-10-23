/* Statistics and Mechanics Year 1 · Chapter 6 Statistical distributions (sections 6.1 to 6.3) */
BOOK_CHAPTERS.push({ id:'A06', book:'Statistics & Mechanics Year 1', label:'Chapter 6', title:'Statistical distributions', sections:[
  { id:'A6.1', num:'6.1', title:'Probability distributions' },
  { id:'A6.2', num:'6.2', title:'The binomial distribution' },
  { id:'A6.3', num:'6.3', title:'Cumulative probabilities' }
]});
// Vertical-line chart of a discrete distribution: probs[i] is P(X = x0 + i).
// Bars are drawn at positions 1, 2, ... (labelled x0, x0 + 1, ...) so the y-axis sits clear of the first bar.
const A6bars = (label, probs, x0 = 0, y1 = null, col = 'var(--accent)') => Fig.graph({ label, x0: 0.2, x1: probs.length + 0.8, y0: 0, y1: y1 || Math.max(...probs) * 1.2,
  xlab: 'x', ylab: 'P(X = x)', xticks: probs.map((_, i) => [i + 1, String(x0 + i)]),
  yticks: [0.1, 0.2, 0.3, 0.4, 0.5].filter(v => v < (y1 || Math.max(...probs) * 1.2)).map(v => [v, String(v)]),
  segs: probs.map((p, i) => ({ x1: i + 1, y1: 0, x2: i + 1, y2: p, col, w: 7 })) });
const A6pmf = (n, p) => Array.from({ length: n + 1 }, (_, r) => { let c = 1; for (let k = 1; k <= r; k++) c = c * (n - r + k) / k; return c * p ** r * (1 - p) ** (n - r); });
FIGS['A6.1-dist'] = A6bars('Probability distribution with P(X = 1) = 0.1, P(X = 2) = 0.2, P(X = 3) = 0.3, P(X = 4) = 0.4', [0.1, 0.2, 0.3, 0.4], 1, 0.5);
FIGS['A6.2-b10'] = A6bars('The distribution of X ~ B(10, 0.3): the tallest bar is at x = 3, and the bars fall away on either side', A6pmf(10, 0.3), 0, 0.32);

CONTENT['A6.1'] = {
notes: R`
### Discrete random variables
A **random variable** $X$ takes numerical values by chance. It is **discrete** if it can only take particular values (such as $0, 1, 2, \dots$).

A **probability distribution** lists every value $x$ with its probability $P(X = x)$. It can be a table, or a **probability function** such as $P(X = x) = kx$.

The key fact: $\sum P(X = x) = 1$.

### Cumulative distribution function
$F(x) = P(X \le x)$: add up the probabilities up to and including $x$.

::: booklet
**Learn these:** $\sum P(X = x) = 1$ and $F(x) = P(X \le x)$.
:::

### Worked example 1
$P(X = x) = kx$ for $x = 1, 2, 3, 4$. Find $k$ and $P(X \ge 3)$.
- $k + 2k + 3k + 4k = 10k = 1$, so $k = \frac{1}{10}$.
- $P(X \ge 3) = \frac{3}{10} + \frac{4}{10} = \frac{7}{10}$.

[[fig:A6.1-dist]]

### Worked example 2: strict and non-strict inequalities
For the same $X$, find $P(1 < X \le 3)$.
- $1 < X$ means $X$ is $2$ or more, so $P(X = 2) + P(X = 3) = \frac{5}{10} = \frac12$.

**The trap:** including $X = 1$. Read "$<$" and "$\le$" carefully: they change which values you add.

### Watch out
- Check your table adds up to $1$.
- A probability function needs to say which values of $x$ it applies to.
`,
questions: [
Q('A6.1-1', 1, R`$X$ takes the values $1, 2, 3, 4$ with probabilities $0.1$, $0.3$, $k$ and $0.2$. Find $k$. [[1]]`,
  [R`The probabilities add up to $1$.`, R`$0.1 + 0.3 + 0.2 = 0.6$.`],
  [R`|B1|$k = 0.4$`], R`$0.4$`,
  R`$0.1 + 0.3 + k + 0.2 = 1$, so $k = 0.4$.`),
Q('A6.1-2', 1, R`For the distribution in question 1, find $P(X \ge 3)$. [[1]]`,
  [R`$X \ge 3$ means $3$ or $4$.`, R`$0.4 + 0.2$.`],
  [R`|B1|$0.6$`], R`$0.6$`,
  R`$P(X = 3) + P(X = 4) = 0.4 + 0.2 = 0.6$.`),
Q('A6.1-3', 1, R`$X$ is the score on a fair six-sided die. Find $P(X < 3)$. [[1]]`,
  [R`Each score has probability $\frac16$.`, R`$X < 3$ means $1$ or $2$.`],
  [R`|B1|$\frac13$`], R`$\frac13$`,
  R`$P(X = 1) + P(X = 2) = \frac16 + \frac16 = \frac13$.`),
Q('A6.1-4', 2, R`$P(X = x) = kx$ for $x = 1, 2, 3, 4$. Find $k$. [[2]]`,
  [R`Add $k + 2k + 3k + 4k$.`, R`Set the total equal to $1$.`],
  [R`|M1|$k + 2k + 3k + 4k = 1$`, R`|A1|$k = \frac{1}{10}$`], R`$\frac{1}{10}$`,
  R`$10k = 1$, so $k = \frac{1}{10}$.`),
Q('A6.1-5', 2, R`For $P(X = x) = \frac{x}{10}$, $x = 1, 2, 3, 4$, find $P(1 < X \le 3)$. [[1]]`,
  [R`$1 < X \le 3$ means $X = 2$ or $3$.`, R`$\frac{2}{10} + \frac{3}{10}$.`],
  [R`|B1|$\frac12$`], R`$\frac12$`,
  R`$P(X = 2) + P(X = 3) = \frac{5}{10} = \frac12$.`),
Q('A6.1-6', 2, R`Two fair coins are tossed and $X$ is the number of heads. Find the probability distribution of $X$. [[2]]`,
  [R`The outcomes are HH, HT, TH, TT.`, R`$X$ can be $0$, $1$ or $2$.`],
  [R`|M1|$X = 0, 1, 2$`, R`|A1|$P = \frac14, \frac12, \frac14$`], R`$P(X = 0) = \frac14$, $P(X = 1) = \frac12$, $P(X = 2) = \frac14$`,
  R`Of the $4$ equally likely outcomes, TT gives $0$ heads, HT and TH give $1$, and HH gives $2$. So $P(X = 0) = \frac14$, $P(X = 1) = \frac12$, $P(X = 2) = \frac14$.`),
Q('A6.1-7', 2, R`$X$ takes the values $0, 1, 2, 3$ with probabilities $2k$, $3k$, $k$ and $4k$. Find $k$ and $P(X \le 1)$. [[2]]`,
  [R`$10k = 1$.`, R`$P(X \le 1) = 2k + 3k$.`],
  [R`|B1|$k = 0.1$`, R`|B1|$P(X \le 1) = 0.5$`], R`$k = 0.1$, $P(X \le 1) = 0.5$`,
  R`$2k + 3k + k + 4k = 10k = 1$, so $k = 0.1$. $P(X \le 1) = 0.2 + 0.3 = 0.5$.`),
Q('A6.1-8', 3, R`$P(X = x) = k(x + 1)$ for $x = 0, 1, 2, 3, 4$. Find $k$ and $P(X \ge 3)$. [[3]]`,
  [R`$k(1 + 2 + 3 + 4 + 5) = 1$.`, R`$P(X \ge 3) = 4k + 5k$.`],
  [R`|M1|$15k = 1$`, R`|A1|$k = \frac{1}{15}$`, R`|A1|$P(X \ge 3) = \frac{9}{15} = \frac35$`], R`$k = \frac{1}{15}$, $P(X \ge 3) = \frac35$`,
  R`$k(1 + 2 + 3 + 4 + 5) = 15k = 1$, so $k = \frac{1}{15}$. $P(X \ge 3) = \frac{4 + 5}{15} = \frac35$.`),
Q('A6.1-9', 3, R`Two fair dice are rolled and $X$ is the difference between the scores (larger minus smaller). Find $P(X = 2)$ and $P(X \le 1)$. [[3]]`,
  [R`$X = 2$: pairs like $(1, 3)$ and $(3, 1)$.`, R`$X = 0$ has $6$ outcomes; $X = 1$ has $10$.`],
  [R`|M1|$8$ outcomes with difference $2$`, R`|A1|$P(X = 2) = \frac29$`, R`|A1|$P(X \le 1) = \frac{16}{36} = \frac49$`], R`$\frac29$ and $\frac49$`,
  R`Difference $2$: $(1,3), (2,4), (3,5), (4,6)$ and their reverses, $8$ outcomes: $\frac{8}{36} = \frac29$. Difference $0$: $6$ outcomes; difference $1$: $10$ outcomes. $P(X \le 1) = \frac{16}{36} = \frac49$.`),
Q('A6.1-10', 3, R`$X$ takes the values $1, 2, 3, 4$ with probabilities $0.2, 0.3, 0.4, 0.1$. Find $F(2)$ and $F(3)$, where $F$ is the cumulative distribution function. [[2]]`,
  [R`$F(x) = P(X \le x)$.`, R`Add up the probabilities.`],
  [R`|B1|$F(2) = 0.5$`, R`|B1|$F(3) = 0.9$`], R`$F(2) = 0.5$, $F(3) = 0.9$`,
  R`$F(2) = 0.2 + 0.3 = 0.5$ and $F(3) = 0.5 + 0.4 = 0.9$.`),
Q('A6.1-11', 3, R`$P(X = x) = kx$ for $x = 1, 2, 3$ and $P(X = x) = k(6 - x)$ for $x = 4, 5$. Find $k$ and $P(X = 3)$. [[3]]`,
  [R`List the probabilities: $k, 2k, 3k, 2k, k$.`, R`They add to $9k$.`],
  [R`|M1|$k + 2k + 3k + 2k + k = 1$`, R`|A1|$k = \frac19$`, R`|A1|$P(X = 3) = \frac13$`], R`$k = \frac19$, $P(X = 3) = \frac13$`,
  R`The probabilities are $k, 2k, 3k, 2k, k$, totalling $9k = 1$. So $k = \frac19$ and $P(X = 3) = 3k = \frac13$.`),
Q('A6.1-12', 4, R`$P(X = x) = \frac{k}{x}$ for $x = 1, 2, 3, 6$. Find $k$ and $P(X \le 2)$. [[3]]`,
  [R`$k\left(1 + \frac12 + \frac13 + \frac16\right) = 1$.`, R`The bracket equals $2$.`],
  [R`|M1|$k\left(1 + \frac12 + \frac13 + \frac16\right) = 1$`, R`|A1|$k = \frac12$`, R`|A1|$P(X \le 2) = \frac12 + \frac14 = \frac34$`], R`$k = \frac12$, $P(X \le 2) = \frac34$`,
  R`$1 + \frac12 + \frac13 + \frac16 = 2$, so $2k = 1$ and $k = \frac12$. $P(X \le 2) = \frac12 + \frac14 = \frac34$.`),
Q('A6.1-13', 4, R`$X$ takes the values $1, 2, 3, 4$ with probabilities $a$, $b$, $0.3$ and $0.2$. Given that $P(X = 1) = 1.5 \, P(X = 2)$, find $a$ and $b$. [[3]]`,
  [R`$a + b = 0.5$.`, R`$a = 1.5b$.`],
  [R`|M1|$a + b = 0.5$`, R`|M1|$1.5b + b = 0.5$`, R`|A1|$b = 0.2$, $a = 0.3$`], R`$a = 0.3$, $b = 0.2$`,
  R`The total is $1$, so $a + b = 0.5$. With $a = 1.5b$: $2.5b = 0.5$, $b = 0.2$ and $a = 0.3$.`),
Q('A6.1-14', 4, R`$X$ takes the values $1, 2, 3, 4$ with probabilities $0.2, 0.3, 0.4, 0.1$. Two independent observations of $X$ are taken. Find the probability that their sum is $4$. [[3]]`,
  [R`The pairs are $(1, 3)$, $(3, 1)$ and $(2, 2)$.`, R`Multiply for each pair, then add.`],
  [R`|M1|Pairs $(1,3), (3,1), (2,2)$`, R`|M1|$2(0.2)(0.4) + 0.3^2$`, R`|A1|$0.25$`], R`$0.25$`,
  R`$P = 0.2 \times 0.4 + 0.4 \times 0.2 + 0.3 \times 0.3 = 0.08 + 0.08 + 0.09 = 0.25$.`),
Q('A6.1-15', 5, R`A player rolls a fair die until they get a six, or until they have rolled three times. $X$ is the number of rolls. **(a)** Find the probability distribution of $X$. **(b)** Two players each play once, independently. Find the probability that they use the same number of rolls. [[5]]`,
  [R`$X = 3$ whenever the first two rolls aren't sixes.`, R`For (b), add $P(X = x)^2$ over all $x$.`],
  [R`(a)|B1|$P(X = 1) = \frac16$`, R`(a)|B1|$P(X = 2) = \frac{5}{36}$`, R`(a)|B1|$P(X = 3) = \frac{25}{36}$`, R`(b)|M1|$\left(\frac16\right)^2 + \left(\frac{5}{36}\right)^2 + \left(\frac{25}{36}\right)^2$`, R`(b)|A1|$\frac{343}{648}$`], R`(a) $\frac16, \frac{5}{36}, \frac{25}{36}$ (b) $\frac{343}{648}$`,
  R`**(a)** $P(X = 1) = \frac16$; $P(X = 2) = \frac56 \times \frac16 = \frac{5}{36}$; $X = 3$ if the first two rolls aren't sixes: $\frac{25}{36}$. (Check: $\frac{6 + 5 + 25}{36} = 1$.)
**(b)** $\frac{36}{1296} + \frac{25}{1296} + \frac{625}{1296} = \frac{686}{1296} = \frac{343}{648}$.`)
]};

CONTENT['A6.2'] = {
notes: R`
### When is it binomial?
$X \sim B(n, p)$ counts the number of successes when:
- there is a **fixed number** of trials, $n$
- each trial has **two outcomes** (success or failure)
- the probability of success, $p$, is **the same** for each trial
- the trials are **independent**.

### The formula
$$P(X = r) = \binom{n}{r} p^r (1 - p)^{n - r} \quad \text{for } r = 0, 1, \dots, n$$

[[fig:A6.2-b10]]

::: booklet
**Learn these:** the four conditions and the formula for $P(X = r)$. Your calculator can work out binomial probabilities directly.
:::

### Worked example 1
$X \sim B(10, 0.3)$. Find $P(X = 3)$.
$$P(X = 3) = \binom{10}{3}(0.3)^3(0.7)^7 = 120 \times 0.027 \times 0.08235 = 0.2668$$

### Worked example 2: don't forget $\binom{n}{r}$
**The trap:** writing $(0.3)^3(0.7)^7 = 0.00222$. That's the probability of one particular order, such as SSSFFFFFFF. There are $\binom{10}{3} = 120$ orders, and each has the same probability.

### Watch out
- When you criticise a binomial model, refer to the context: are the trials really independent, and is $p$ really constant?
- Give probabilities to $4$ significant figures unless told otherwise.
`,
questions: [
Q('A6.2-1', 1, R`$X \sim B(5, 0.5)$. Find $P(X = 5)$. [[1]]`,
  [R`All five must be successes.`, R`$0.5^5$.`],
  [R`|B1|$\frac{1}{32} = 0.03125$`], R`$0.03125$`,
  R`$P(X = 5) = 0.5^5 = \frac{1}{32} = 0.03125$.`),
Q('A6.2-2', 1, R`State two conditions needed for a binomial distribution to be a suitable model. [[2]]`,
  [R`Think about the trials.`, R`And the probability of success.`],
  [R`|B1|Fixed number of independent trials`, R`|B1|Two outcomes with constant probability of success`], R`Fixed number of independent trials; constant probability of success`,
  R`Any two of: a fixed number of trials; each trial has two outcomes; the probability of success is constant; the trials are independent.`),
Q('A6.2-3', 1, R`$X \sim B(6, 0.2)$. Find $P(X = 0)$. [[1]]`,
  [R`All six must be failures.`, R`$0.8^6$.`],
  [R`|B1|$0.2621$`], R`$0.2621$`,
  R`$P(X = 0) = 0.8^6 = 0.2621$.`),
Q('A6.2-4', 2, R`$X \sim B(10, 0.3)$. Find $P(X = 3)$. [[2]]`,
  [R`$\binom{10}{3} = 120$.`, R`Multiply by $0.3^3 \times 0.7^7$.`],
  [R`|M1|$\binom{10}{3}(0.3)^3(0.7)^7$`, R`|A1|$0.2668$`], R`$0.2668$`,
  R`$120 \times 0.027 \times 0.7^7 = 0.2668$.`),
Q('A6.2-5', 2, R`$X \sim B(8, 0.25)$. Find $P(X = 2)$. [[2]]`,
  [R`$\binom82 = 28$.`, R`$28 \times 0.25^2 \times 0.75^6$.`],
  [R`|M1|$\binom{8}{2}(0.25)^2(0.75)^6$`, R`|A1|$0.3115$`], R`$0.3115$`,
  R`$28 \times 0.0625 \times 0.75^6 = 0.3115$.`),
Q('A6.2-6', 2, R`Cards are dealt one at a time, without replacement, from a standard pack, and $X$ is the number of hearts in the first $10$ cards. Explain why $X$ is not binomial. [[1]]`,
  [R`What happens to the chance of a heart as cards are removed?`, R`Is $p$ constant?`],
  [R`|B1|Without replacement, the probability of a heart changes from card to card (the trials aren't independent)`], R`$p$ is not constant`,
  R`Because cards aren't replaced, the probability of a heart changes after each card, so the trials are not independent and $p$ is not constant.`),
Q('A6.2-7', 2, R`A fair die is rolled $12$ times and $X$ is the number of sixes. State the distribution of $X$ and find $P(X = 2)$. [[2]]`,
  [R`$n = 12$, $p = \frac16$.`, R`$\binom{12}{2} = 66$.`],
  [R`|B1|$X \sim B\left(12, \frac16\right)$`, R`|B1|$0.2961$`], R`$B\left(12, \frac16\right)$, $0.2961$`,
  R`$X \sim B\left(12, \frac16\right)$. $P(X = 2) = 66 \left(\frac16\right)^2\left(\frac56\right)^{10} = 0.2961$.`),
Q('A6.2-8', 3, R`$X \sim B(5, 0.4)$. Find $P(X \ge 4)$. [[3]]`,
  [R`$P(X = 4) + P(X = 5)$.`, R`$5 \times 0.4^4 \times 0.6 + 0.4^5$.`],
  [R`|M1|$P(X = 4) = 5(0.4)^4(0.6) = 0.0768$`, R`|M1|$P(X = 5) = 0.4^5 = 0.01024$`, R`|A1|$0.08704$`], R`$0.08704$`,
  R`$P(X = 4) = 0.0768$ and $P(X = 5) = 0.01024$, so $P(X \ge 4) = 0.08704$.`),
Q('A6.2-9', 3, R`$X \sim B(10, 0.1)$. Find the probability of at least one success. [[2]]`,
  [R`Use $1 - P(X = 0)$.`, R`$P(X = 0) = 0.9^{10}$.`],
  [R`|M1|$1 - 0.9^{10}$`, R`|A1|$0.6513$`], R`$0.6513$`,
  R`$P(X \ge 1) = 1 - 0.9^{10} = 1 - 0.3487 = 0.6513$.`),
Q('A6.2-10', 3, R`A student models the number of rainy days in a week as $B(7, 0.3)$. Give two reasons why this model may not be suitable. [[2]]`,
  [R`Is a rainy day independent of the day before?`, R`Is the chance of rain the same every day?`],
  [R`|B1|Days aren't independent: rain tends to come in spells`, R`|B1|The probability of rain may change from day to day (e.g. with the season or forecast)`], R`Days aren't independent; $p$ may vary`,
  R`Weather on consecutive days is linked, so the trials are not independent. The probability of rain is also unlikely to be exactly $0.3$ every day.`),
Q('A6.2-11', 3, R`$X \sim B(n, 0.5)$ and $P(X = 0) = \frac{1}{64}$. Find $n$. [[2]]`,
  [R`$P(X = 0) = 0.5^n$.`, R`$64 = 2^6$.`],
  [R`|M1|$0.5^n = \frac{1}{64}$`, R`|A1|$n = 6$`], R`$n = 6$`,
  R`$0.5^n = \frac{1}{2^n} = \frac{1}{64}$, so $n = 6$.`),
Q('A6.2-12', 4, R`$X \sim B(4, p)$ and $P(X = 0) = 0.0081$. Find $p$ and $P(X = 4)$. [[3]]`,
  [R`$(1 - p)^4 = 0.0081$.`, R`$0.3^4 = 0.0081$.`],
  [R`|M1|$(1 - p)^4 = 0.0081$`, R`|A1|$p = 0.7$`, R`|A1|$P(X = 4) = 0.7^4 = 0.2401$`], R`$p = 0.7$, $P(X = 4) = 0.2401$`,
  R`$(1 - p)^4 = 0.0081$, so $1 - p = 0.3$ and $p = 0.7$. Then $P(X = 4) = 0.7^4 = 0.2401$.`),
Q('A6.2-13', 4, R`$X \sim B(n, 0.2)$. Find the smallest $n$ for which $P(X \ge 1) > 0.9$. [[4]]`,
  [R`$1 - 0.8^n > 0.9$.`, R`So $0.8^n < 0.1$: use logs.`],
  [R`|M1|$1 - 0.8^n > 0.9$`, R`|M1|$0.8^n < 0.1$`, R`|M1|$n > \frac{\log 0.1}{\log 0.8} = 10.3$`, R`|A1|$n = 11$`], R`$n = 11$`,
  R`$0.8^n < 0.1$ gives $n \log 0.8 < \log 0.1$. Since $\log 0.8 < 0$, the inequality flips: $n > 10.3$. The smallest whole number is $n = 11$.`),
Q('A6.2-14', 4, R`Each seed in a packet germinates with probability $0.85$, independently. A packet holds $10$ seeds. **(a)** Find the probability that exactly $9$ seeds in a packet germinate. **(b)** $5$ packets are planted. Find the probability that exactly $2$ of them have exactly $9$ seeds germinating. [[5]]`,
  [R`For (a), $X \sim B(10, 0.85)$.`, R`For (b), each packet is a trial with $p$ from (a): $Y \sim B(5, 0.3474)$.`],
  [R`(a)|M1|$10(0.85)^9(0.15)$`, R`(a)|A1|$0.3474$`, R`(b)|B1|$Y \sim B(5, 0.3474)$`, R`(b)|M1|$\binom52(0.3474)^2(0.6526)^3$`, R`(b)|A1|$0.3354$`], R`(a) $0.3474$ (b) $0.3354$`,
  R`**(a)** $P(X = 9) = 10 \times 0.85^9 \times 0.15 = 0.3474$.
**(b)** $Y \sim B(5, 0.3474)$: $P(Y = 2) = 10 \times 0.3474^2 \times 0.6526^3 = 0.3354$.`),
Q('A6.2-15', 5, R`$X \sim B(12, p)$, where $0 < p < 1$, and $P(X = 1) = P(X = 2)$. **(a)** Find $p$. **(b)** Find $P(X = 0)$. [[5]]`,
  [R`$12p(1 - p)^{11} = 66p^2(1 - p)^{10}$.`, R`Divide both sides by $p(1 - p)^{10}$.`],
  [R`(a)|M1|$12p(1 - p)^{11} = 66p^2(1 - p)^{10}$`, R`(a)|M1|$12(1 - p) = 66p$`, R`(a)|A1|$p = \frac{2}{13}$`, R`(b)|M1|$\left(\frac{11}{13}\right)^{12}$`, R`(b)|A1|$0.1347$`], R`(a) $p = \frac{2}{13}$ (b) $0.1347$`,
  R`**(a)** $\binom{12}{1}p(1 - p)^{11} = \binom{12}{2}p^2(1 - p)^{10}$. Dividing by $p(1 - p)^{10}$ (non-zero): $12(1 - p) = 66p$, so $78p = 12$ and $p = \frac{2}{13}$.
**(b)** $P(X = 0) = \left(\frac{11}{13}\right)^{12} = 0.1347$.`)
]};

CONTENT['A6.3'] = {
notes: R`
### Cumulative probabilities
Your calculator (or statistical tables) gives $P(X \le x)$ for $X \sim B(n, p)$. Write every other probability in terms of $P(X \le \dots)$:
- $P(X < x) = P(X \le x - 1)$
- $P(X > x) = 1 - P(X \le x)$
- $P(X \ge x) = 1 - P(X \le x - 1)$
- $P(a \le X \le b) = P(X \le b) - P(X \le a - 1)$

::: booklet
**Learn these:** the four conversions above. Because $X$ only takes whole numbers, "$< 6$" is the same as "$\le 5$".
:::

### Worked example 1
$X \sim B(20, 0.4)$. Find $P(X \le 7)$ and $P(X \ge 10)$.
- $P(X \le 7) = 0.4159$.
- $P(X \ge 10) = 1 - P(X \le 9) = 1 - 0.7553 = 0.2447$.

### Worked example 2: off by one
$X \sim B(20, 0.4)$. Find $P(X > 9)$.
- $P(X > 9) = 1 - P(X \le 9) = 0.2447$, the same as $P(X \ge 10)$.

**The trap:** writing $P(X > 9) = 1 - P(X \le 8)$. That includes $X = 9$, which isn't more than $9$.

### Watch out
- Write the conversion line before you use the calculator: it's where the method marks are.
- Read whether a question says "more than" or "at least".
`,
questions: [
Q('A6.3-1', 1, R`$X \sim B(20, 0.4)$. Write $P(X < 6)$ in the form $P(X \le a)$. [[1]]`,
  [R`$X$ takes whole numbers only.`, R`Less than $6$ means $5$ or less.`],
  [R`|B1|$P(X \le 5)$`], R`$P(X \le 5)$`,
  R`$X$ is a whole number, so $X < 6$ is the same as $X \le 5$.`),
Q('A6.3-2', 1, R`Write $P(X \ge 8)$ in terms of a cumulative probability. [[1]]`,
  [R`Take away everything below $8$.`, R`Below $8$ means $\le 7$.`],
  [R`|B1|$1 - P(X \le 7)$`], R`$1 - P(X \le 7)$`,
  R`$P(X \ge 8) = 1 - P(X < 8) = 1 - P(X \le 7)$.`),
Q('A6.3-3', 1, R`$X \sim B(10, 0.5)$. Find $P(X \le 3)$. [[1]]`,
  [R`Use the binomial cumulative function on your calculator.`, R`$n = 10$, $p = 0.5$, $x = 3$.`],
  [R`|B1|$0.1719$`], R`$0.1719$`,
  R`$P(X \le 3) = \frac{1 + 10 + 45 + 120}{1024} = \frac{176}{1024} = 0.1719$.`),
Q('A6.3-4', 2, R`$X \sim B(20, 0.4)$. Find **(a)** $P(X \le 7)$ **(b)** $P(X \ge 10)$. [[2]]`,
  [R`(a) is a direct calculator value.`, R`(b) is $1 - P(X \le 9)$.`],
  [R`(a)|B1|$0.4159$`, R`(b)|B1|$1 - 0.7553 = 0.2447$`], R`(a) $0.4159$ (b) $0.2447$`,
  R`**(a)** $0.4159$.
**(b)** $1 - P(X \le 9) = 1 - 0.7553 = 0.2447$.`),
Q('A6.3-5', 2, R`$X \sim B(15, 0.3)$. Find $P(3 \le X \le 7)$. [[2]]`,
  [R`$P(X \le 7) - P(X \le 2)$.`, R`$0.9500 - 0.1268$.`],
  [R`|M1|$P(X \le 7) - P(X \le 2)$`, R`|A1|$0.8232$`], R`$0.8232$`,
  R`$P(X \le 7) - P(X \le 2) = 0.9500 - 0.1268 = 0.8232$.`),
Q('A6.3-6', 2, R`$X \sim B(25, 0.2)$. Find $P(X > 6)$. [[2]]`,
  [R`$1 - P(X \le 6)$.`, R`$P(X \le 6) = 0.7800$.`],
  [R`|M1|$1 - P(X \le 6)$`, R`|A1|$0.2200$`], R`$0.2200$`,
  R`$P(X > 6) = 1 - P(X \le 6) = 1 - 0.7800 = 0.2200$.`),
Q('A6.3-7', 2, R`$X \sim B(30, 0.1)$. Find $P(X < 4)$. [[1]]`,
  [R`$P(X < 4) = P(X \le 3)$.`, R`Use your calculator.`],
  [R`|B1|$0.6474$`], R`$0.6474$`,
  R`$P(X < 4) = P(X \le 3) = 0.6474$.`),
Q('A6.3-8', 3, R`$20\%$ of the plates made in a factory are chipped. A box contains $40$ plates. Find the probability that more than $10$ are chipped. State a necessary assumption. [[3]]`,
  [R`$X \sim B(40, 0.2)$.`, R`More than $10$: $1 - P(X \le 10)$.`],
  [R`|M1|$X \sim B(40, 0.2)$, $1 - P(X \le 10)$`, R`|A1|$0.1608$`, R`|B1|Plates are chipped independently of each other`], R`$0.1608$`,
  R`$X \sim B(40, 0.2)$: $P(X > 10) = 1 - P(X \le 10) = 1 - 0.8392 = 0.1608$. This assumes plates are chipped independently with constant probability $0.2$.`),
Q('A6.3-9', 3, R`$X \sim B(20, 0.35)$. Find the largest value of $a$ such that $P(X \le a) < 0.1$. [[2]]`,
  [R`Try values: $P(X \le 3)$, $P(X \le 4)$.`, R`$P(X \le 4) = 0.1182$.`],
  [R`|M1|$P(X \le 3) = 0.0444$, $P(X \le 4) = 0.1182$`, R`|A1|$a = 3$`], R`$a = 3$`,
  R`$P(X \le 3) = 0.0444 < 0.1$ but $P(X \le 4) = 0.1182 > 0.1$, so $a = 3$.`),
Q('A6.3-10', 3, R`$X \sim B(12, 0.6)$. Find $P(X \ge 9)$. [[3]]`,
  [R`$1 - P(X \le 8)$.`, R`Or use $Y = 12 - X \sim B(12, 0.4)$ and $P(Y \le 3)$.`],
  [R`|M1|$1 - P(X \le 8)$`, R`|M1|$1 - 0.7747$`, R`|A1|$0.2253$`], R`$0.2253$`,
  R`$P(X \ge 9) = 1 - P(X \le 8) = 1 - 0.7747 = 0.2253$. (Equivalently, the number of failures $Y \sim B(12, 0.4)$ and $P(Y \le 3) = 0.2253$.)`),
Q('A6.3-11', 3, R`$X \sim B(20, 0.3)$. Use cumulative probabilities to find $P(X = 5)$. [[2]]`,
  [R`$P(X = 5) = P(X \le 5) - P(X \le 4)$.`, R`$0.4164 - 0.2375$.`],
  [R`|M1|$P(X \le 5) - P(X \le 4)$`, R`|A1|$0.1789$`], R`$0.1789$`,
  R`$P(X = 5) = 0.4164 - 0.2375 = 0.1789$.`),
Q('A6.3-12', 4, R`$X \sim B(50, 0.3)$. Find the smallest value of $b$ such that $P(X > b) < 0.05$. [[3]]`,
  [R`$P(X > b) = 1 - P(X \le b)$.`, R`You need $P(X \le b) > 0.95$.`],
  [R`|M1|$P(X \le b) > 0.95$`, R`|M1|$P(X \le 19) = 0.9152$, $P(X \le 20) = 0.9522$`, R`|A1|$b = 20$`], R`$b = 20$`,
  R`You need $P(X \le b) > 0.95$. $P(X \le 19) = 0.9152$ and $P(X \le 20) = 0.9522$, so $b = 20$: $P(X > 20) = 0.0478$.`),
Q('A6.3-13', 4, R`$15\%$ of people are left-handed. A class has $30$ students. **(a)** Find the probability that between $3$ and $7$ inclusive are left-handed. **(b)** Find the probability that this happens in all of $4$ such classes. [[4]]`,
  [R`$X \sim B(30, 0.15)$: $P(X \le 7) - P(X \le 2)$.`, R`For (b), raise (a) to the power $4$.`],
  [R`(a)|M1|$P(X \le 7) - P(X \le 2)$`, R`(a)|A1|$0.9302 - 0.1514 = 0.7788$`, R`(b)|M1|$0.7788^4$`, R`(b)|A1|$0.3679$`], R`(a) $0.7788$ (b) $0.3679$`,
  R`**(a)** $P(3 \le X \le 7) = 0.9302 - 0.1514 = 0.7788$.
**(b)** The classes are independent, so $0.7788^4 = 0.3679$.`),
Q('A6.3-14', 4, R`$X \sim B(25, 0.45)$. Find $P(10 < X < 15)$. [[3]]`,
  [R`$10 < X < 15$ means $11 \le X \le 14$.`, R`$P(X \le 14) - P(X \le 10)$.`],
  [R`|M1|$11 \le X \le 14$`, R`|M1|$P(X \le 14) - P(X \le 10)$`, R`|A1|$0.9040 - 0.3843 = 0.5198$`], R`$0.5198$`,
  R`$P(10 < X < 15) = P(11 \le X \le 14) = P(X \le 14) - P(X \le 10) = 0.9040 - 0.3843 = 0.5198$.`),
Q('A6.3-15', 5, R`$5\%$ of items made by a machine are faulty. A sample of $20$ items is taken from each batch, and the batch is rejected if more than $2$ items in the sample are faulty. **(a)** Find the probability that a batch is rejected. **(b)** Find the probability that, out of $10$ batches, at most one is rejected. [[6]]`,
  [R`$X \sim B(20, 0.05)$; rejected if $X > 2$.`, R`For (b), $Y \sim B(10, 0.0755)$.`],
  [R`(a)|M1|$X \sim B(20, 0.05)$`, R`(a)|M1|$1 - P(X \le 2)$`, R`(a)|A1|$0.0755$`, R`(b)|B1|$Y \sim B(10, 0.0755)$`, R`(b)|M1|$P(Y = 0) + P(Y = 1)$`, R`(b)|A1|$0.8287$`], R`(a) $0.0755$ (b) $0.8287$`,
  R`**(a)** $P(X > 2) = 1 - P(X \le 2) = 1 - 0.9245 = 0.0755$.
**(b)** $Y \sim B(10, 0.0755)$: $P(Y \le 1) = 0.9245^{10} + 10(0.0755)(0.9245)^9 = 0.8287$ (using the unrounded value from (a)).`)
]};
