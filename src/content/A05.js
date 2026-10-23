/* Statistics and Mechanics Year 1 · Chapter 5 Probability (sections 5.1 to 5.4) */
BOOK_CHAPTERS.push({ id:'A05', book:'Statistics & Mechanics Year 1', label:'Chapter 5', title:'Probability', sections:[
  { id:'A5.1', num:'5.1', title:'Calculating probabilities' },
  { id:'A5.2', num:'5.2', title:'Venn diagrams' },
  { id:'A5.3', num:'5.3', title:'Mutually exclusive and independent events' },
  { id:'A5.4', num:'5.4', title:'Tree diagrams' }
]});
FIGS['A5.2-ex'] = Fig.venn({ label: 'Venn diagram: football only 13, both 5, tennis only 7, neither 5', sets: ['F', 'T'], values: { F: '13', FT: '5', T: '7', out: '5' } });
FIGS['A5.4-ex'] = Fig.tree({ label: 'Tree diagram for two counters drawn without replacement from 4 red and 6 blue', first: [{ label: 'R', p: '4/10' }, { label: 'B', p: '6/10' }],
  second: [[{ label: 'R', p: '3/9' }, { label: 'B', p: '6/9' }], [{ label: 'R', p: '4/9' }, { label: 'B', p: '5/9' }]], outcomes: [['12/90', '24/90'], ['24/90', '30/90']] });
const A5v = Fig.venn({ label: 'Venn diagram: A only 7, both 3, B only 5, neither 5', values: { A: '7', AB: '3', B: '5', out: '5' } });

CONTENT['A5.1'] = {
notes: R`
### Equally likely outcomes
When all outcomes are equally likely,
$$P(\text{event}) = \frac{\text{number of outcomes in the event}}{\text{total number of outcomes}}$$

### Useful facts
- Probabilities lie between $0$ and $1$, and the probabilities of all possible outcomes add up to $1$.
- $P(\text{not } A) = 1 - P(A)$.
- **Expected frequency** $= $ number of trials $\times$ probability.
- **Sample space diagrams** list every outcome of two experiments, such as two dice.

::: booklet
**Learn these:** $P(A') = 1 - P(A)$ and the probabilities of all outcomes sum to $1$.
:::

### Worked example 1
Two fair dice are rolled. Find the probability that the total is $7$.
- There are $6 \times 6 = 36$ equally likely outcomes.
- Totals of $7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, so $6$ outcomes.
- $P = \frac{6}{36} = \frac16$.

### Worked example 2: at least one
Two fair dice are rolled. Find the probability of at least one six.
- $P(\text{no sixes}) = \frac{25}{36}$, because each die has $5$ non-sixes.
- $P(\text{at least one six}) = 1 - \frac{25}{36} = \frac{11}{36}$.

**The trap:** adding $\frac16 + \frac16 = \frac13$. That counts the outcome $(6, 6)$ twice.

### Watch out
- For "at least one", use $1 - P(\text{none})$.
- Leave answers as exact fractions or decimals, not rounded values.
`,
questions: [
Q('A5.1-1', 1, R`A bag contains $5$ red, $3$ blue and $2$ green counters. One is taken at random. Find $P(\text{blue})$. [[1]]`,
  [R`How many counters are there in total?`, R`$3$ out of $10$.`],
  [R`|B1|$\frac{3}{10}$`], R`$\frac{3}{10}$`,
  R`There are $10$ counters and $3$ are blue, so $P(\text{blue}) = \frac{3}{10}$.`),
Q('A5.1-2', 1, R`For the bag in question 1, find $P(\text{not red})$. [[1]]`,
  [R`$P(\text{red}) = \frac{5}{10}$.`, R`Subtract from $1$.`],
  [R`|B1|$\frac12$`], R`$\frac12$`,
  R`$P(\text{red}) = \frac{5}{10}$, so $P(\text{not red}) = 1 - \frac12 = \frac12$.`),
Q('A5.1-3', 1, R`The probability of winning a game is $0.35$. The game is played $200$ times. How many wins would you expect? [[1]]`,
  [R`Expected frequency $=$ trials $\times$ probability.`, R`$200 \times 0.35$.`],
  [R`|B1|$70$`], R`$70$`,
  R`Expected number of wins $= 200 \times 0.35 = 70$.`),
Q('A5.1-4', 2, R`Two fair dice are rolled. Find the probability that the total is $8$. [[2]]`,
  [R`There are $36$ outcomes.`, R`List the pairs with total $8$.`],
  [R`|M1|$(2,6), (3,5), (4,4), (5,3), (6,2)$`, R`|A1|$\frac{5}{36}$`], R`$\frac{5}{36}$`,
  R`The pairs $(2,6), (3,5), (4,4), (5,3), (6,2)$ give $5$ of the $36$ outcomes, so $P = \frac{5}{36}$.`),
Q('A5.1-5', 2, R`Two fair dice are rolled and the scores multiplied. Find the probability that the product is even. [[2]]`,
  [R`The product is odd only if both scores are odd.`, R`$P(\text{both odd}) = \frac{9}{36}$.`],
  [R`|M1|$1 - \frac{9}{36}$`, R`|A1|$\frac34$`], R`$\frac34$`,
  R`The product is odd only when both scores are odd: $3 \times 3 = 9$ outcomes. So $P(\text{even}) = 1 - \frac{9}{36} = \frac34$.`),
Q('A5.1-6', 2, R`In a sixth form, Year 12 has $18$ students who study maths and $22$ who don't; Year 13 has $25$ who do and $15$ who don't. A student is chosen at random. Find **(a)** $P(\text{studies maths})$ **(b)** $P(\text{Year 13 and studies maths})$. [[2]]`,
  [R`There are $80$ students altogether.`, R`$18 + 25$ study maths.`],
  [R`(a)|B1|$\frac{43}{80}$`, R`(b)|B1|$\frac{25}{80} = \frac{5}{16}$`], R`(a) $\frac{43}{80}$ (b) $\frac{5}{16}$`,
  R`**(a)** $43$ of the $80$ students study maths: $\frac{43}{80}$.
**(b)** $25$ are in Year 13 and study maths: $\frac{25}{80} = \frac{5}{16}$.`),
Q('A5.1-7', 2, R`A biased die has $P(1) = P(2) = P(3) = P(4) = P(5) = 0.15$. Find $P(6)$. [[2]]`,
  [R`The probabilities add to $1$.`, R`$5 \times 0.15 = 0.75$.`],
  [R`|M1|$1 - 5(0.15)$`, R`|A1|$0.25$`], R`$0.25$`,
  R`The probabilities sum to $1$: $P(6) = 1 - 0.75 = 0.25$.`),
Q('A5.1-8', 3, R`A spinner lands on $A$, $B$, $C$ or $D$ with probabilities $x$, $2x$, $3x$ and $0.4$. Find $x$. [[2]]`,
  [R`Add them up and set equal to $1$.`, R`$6x + 0.4 = 1$.`],
  [R`|M1|$x + 2x + 3x + 0.4 = 1$`, R`|A1|$x = 0.1$`], R`$x = 0.1$`,
  R`$6x + 0.4 = 1$, so $6x = 0.6$ and $x = 0.1$.`),
Q('A5.1-9', 3, R`A fair spinner numbered $1$ to $4$ and a fair spinner numbered $1$ to $3$ are spun. Find the probability that the two scores differ by exactly $1$. [[3]]`,
  [R`There are $12$ outcomes.`, R`List them in a sample space.`],
  [R`|M1|$12$ equally likely outcomes`, R`|M1|$(1,2), (2,1), (2,3), (3,2), (4,3)$`, R`|A1|$\frac{5}{12}$`], R`$\frac{5}{12}$`,
  R`There are $4 \times 3 = 12$ outcomes. Those with difference $1$ are $(1,2), (2,1), (2,3), (3,2), (4,3)$: $5$ of them. $P = \frac{5}{12}$.`),
Q('A5.1-10', 3, R`Two fair dice are rolled. Find the probability of getting at least one six. [[2]]`,
  [R`Use $1 - P(\text{no sixes})$.`, R`$P(\text{no sixes}) = \frac{25}{36}$.`],
  [R`|M1|$1 - \frac{25}{36}$`, R`|A1|$\frac{11}{36}$`], R`$\frac{11}{36}$`,
  R`$P(\text{no sixes}) = \frac56 \times \frac56 = \frac{25}{36}$, so $P(\text{at least one six}) = \frac{11}{36}$.`),
Q('A5.1-11', 3, R`A drawing pin is dropped $400$ times and lands point up $132$ times. **(a)** Estimate the probability that it lands point up. **(b)** Estimate how many times it would land point up in $50$ drops. [[2]]`,
  [R`Use the relative frequency.`, R`Then multiply by $50$.`],
  [R`(a)|B1|$0.33$`, R`(b)|B1|$16.5$, so about $16$ or $17$`], R`(a) $0.33$ (b) about $16.5$`,
  R`**(a)** $\frac{132}{400} = 0.33$.
**(b)** $50 \times 0.33 = 16.5$, so about $16$ or $17$ times.`),
Q('A5.1-12', 4, R`Two fair dice are rolled. Find the probability that the total is a prime number. [[3]]`,
  [R`The prime totals are $2, 3, 5, 7, 11$.`, R`Count the ways for each.`],
  [R`|M1|Primes $2, 3, 5, 7, 11$`, R`|M1|$1 + 2 + 4 + 6 + 2 = 15$ ways`, R`|A1|$\frac{5}{12}$`], R`$\frac{5}{12}$`,
  R`Totals $2, 3, 5, 7, 11$ can be made in $1, 2, 4, 6, 2$ ways: $15$ outcomes. $P = \frac{15}{36} = \frac{5}{12}$.`),
Q('A5.1-13', 4, R`A bag contains $4$ red counters and some blue ones. When $3$ more red counters are added, the probability of picking a red counter becomes $\frac12$. How many blue counters are there? [[3]]`,
  [R`After adding, there are $7$ red.`, R`Red must be half of all the counters.`],
  [R`|M1|$\frac{7}{7 + b} = \frac12$`, R`|M1|$14 = 7 + b$`, R`|A1|$b = 7$`], R`$7$`,
  R`With $7$ red and $b$ blue, $\frac{7}{7 + b} = \frac12$, so $7 + b = 14$ and $b = 7$.`),
Q('A5.1-14', 4, R`Three fair coins are tossed. Find **(a)** $P(\text{exactly two heads})$ **(b)** $P(\text{at least one head})$. [[3]]`,
  [R`There are $8$ outcomes.`, R`HHT, HTH, THH have exactly two heads.`],
  [R`(a)|M1|$8$ outcomes, $3$ with exactly two heads`, R`(a)|A1|$\frac38$`, R`(b)|B1|$1 - \frac18 = \frac78$`], R`(a) $\frac38$ (b) $\frac78$`,
  R`**(a)** Of the $8$ outcomes, HHT, HTH and THH have exactly two heads: $\frac38$.
**(b)** Only TTT has no heads, so $1 - \frac18 = \frac78$.`),
Q('A5.1-15', 5, R`Two fair dice are rolled and $X$ is the larger of the two scores (or the common score if they're equal). Find **(a)** $P(X = 4)$ **(b)** $P(X \le 4)$ **(c)** $P(X = 6)$. [[5]]`,
  [R`$X \le 4$ means both dice show $4$ or less.`, R`$P(X = 4) = P(X \le 4) - P(X \le 3)$.`],
  [R`(a)|M1|Outcomes with max $4$: $(4,1), \dots, (4,4), (1,4), (2,4), (3,4)$`, R`(a)|A1|$\frac{7}{36}$`, R`(b)|M1|Both dice $\le 4$: $16$ outcomes`, R`(b)|A1|$\frac49$`, R`(c)|B1|$1 - \frac{25}{36} = \frac{11}{36}$`], R`(a) $\frac{7}{36}$ (b) $\frac49$ (c) $\frac{11}{36}$`,
  R`**(a)** $X = 4$: one die shows $4$ and the other $4$ or less: $(4,1)$–$(4,4)$ and $(1,4), (2,4), (3,4)$, so $7$ outcomes: $\frac{7}{36}$.
**(b)** Both dice show $4$ or less: $4 \times 4 = 16$ outcomes, so $\frac{16}{36} = \frac49$.
**(c)** $P(X \le 5) = \frac{25}{36}$, so $P(X = 6) = \frac{11}{36}$.`)
]};

CONTENT['A5.2'] = {
notes: R`
### Venn diagrams
A Venn diagram shows events as circles inside a rectangle (the sample space). Each region holds a number of outcomes or a probability.
- $A \cap B$: **$A$ and $B$** (the overlap).
- $A \cup B$: **$A$ or $B$ or both** (everything inside either circle).
- $A'$: **not $A$** (everything outside circle $A$).

### Filling in a Venn diagram
Start in the **middle** and work outwards. Then
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

::: booklet
**Learn these:** the notation $\cap$, $\cup$, $'$, and $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
:::

### Worked example 1
Of $30$ students, $18$ play football, $12$ play tennis and $5$ play both.
- Both: $5$. Football only: $18 - 5 = 13$. Tennis only: $12 - 5 = 7$.
- Neither: $30 - 13 - 5 - 7 = 5$.
- $P(\text{neither}) = \frac{5}{30} = \frac16$.

[[fig:A5.2-ex]]

### Worked example 2: start in the middle
In the same example, a student writes $18$ in the "football" part of the circle and $12$ in the "tennis" part.

**The trap:** $18$ includes the $5$ who play both. Writing $18$ and $12$ outside the overlap counts those $5$ students twice, giving $35$ players from only $30$ students.

### Watch out
- Check that all the regions add to the total (or to $1$).
- $A \cap B'$ means "$A$ but not $B$": the part of $A$ outside $B$.
`,
questions: [
Q('A5.2-1', 1, R`The Venn diagram shows the numbers of students in two clubs, $A$ and $B$. A student is chosen at random. Find $P(A)$. [[1]]`,
  [R`Add up everything inside circle $A$.`, R`The total is $20$.`],
  [R`|B1|$\frac{10}{20} = \frac12$`], R`$\frac12$`,
  R`Circle $A$ contains $7 + 3 = 10$ of the $20$ students: $P(A) = \frac12$.`,
  { fig: A5v }),
Q('A5.2-2', 1, R`Using the Venn diagram, find $P(A \cap B)$. [[1]]`,
  [R`$\cap$ means "and": the overlap.`, R`$3$ out of $20$.`],
  [R`|B1|$\frac{3}{20}$`], R`$\frac{3}{20}$`,
  R`The overlap contains $3$ students, so $P(A \cap B) = \frac{3}{20}$.`,
  { fig: A5v }),
Q('A5.2-3', 1, R`Using the Venn diagram, find $P(A')$. [[1]]`,
  [R`$A'$ is everything outside circle $A$.`, R`$5 + 5$.`],
  [R`|B1|$\frac{10}{20} = \frac12$`], R`$\frac12$`,
  R`Outside $A$ there are $5$ (in $B$ only) and $5$ (neither): $\frac{10}{20} = \frac12$.`,
  { fig: A5v }),
Q('A5.2-4', 2, R`Using the Venn diagram, find **(a)** $P(A \cup B)$ **(b)** $P(A' \cap B')$. [[2]]`,
  [R`$A \cup B$: anything inside either circle.`, R`$A' \cap B'$: outside both.`],
  [R`(a)|B1|$\frac{15}{20} = \frac34$`, R`(b)|B1|$\frac{5}{20} = \frac14$`], R`(a) $\frac34$ (b) $\frac14$`,
  R`**(a)** $7 + 3 + 5 = 15$, so $P(A \cup B) = \frac34$.
**(b)** $5$ are in neither: $\frac14$.`,
  { fig: A5v }),
Q('A5.2-5', 2, R`Of $40$ people, $22$ like tea, $25$ like coffee and $12$ like both. Draw a Venn diagram and find the number who like neither. [[3]]`,
  [R`Start with $12$ in the middle.`, R`Tea only $10$, coffee only $13$.`],
  [R`|B1|$12$ in the overlap`, R`|M1|Tea only $10$, coffee only $13$`, R`|A1|Neither $5$`], R`$5$`,
  R`Both: $12$. Tea only: $22 - 12 = 10$. Coffee only: $25 - 12 = 13$. Neither: $40 - 35 = 5$.`,
  { solFig: Fig.venn({ label: 'Venn diagram: tea only 10, both 12, coffee only 13, neither 5', sets: ['T', 'C'], values: { T: '10', TC: '12', C: '13', out: '5' } }) }),
Q('A5.2-6', 2, R`$P(A) = 0.5$, $P(B) = 0.4$ and $P(A \cap B) = 0.15$. Find $P(A \cup B)$. [[2]]`,
  [R`Use the addition rule.`, R`$0.5 + 0.4 - 0.15$.`],
  [R`|M1|$0.5 + 0.4 - 0.15$`, R`|A1|$0.75$`], R`$0.75$`,
  R`$P(A \cup B) = 0.5 + 0.4 - 0.15 = 0.75$.`),
Q('A5.2-7', 2, R`With $P(A) = 0.5$, $P(B) = 0.4$ and $P(A \cap B) = 0.15$, find **(a)** $P(A \cap B')$ **(b)** $P(A' \cap B')$. [[2]]`,
  [R`$A \cap B'$ is the part of $A$ outside $B$.`, R`$A' \cap B'$ is outside both circles.`],
  [R`(a)|B1|$0.35$`, R`(b)|B1|$0.25$`], R`(a) $0.35$ (b) $0.25$`,
  R`**(a)** $0.5 - 0.15 = 0.35$.
**(b)** $1 - P(A \cup B) = 1 - 0.75 = 0.25$.`,
  { solFig: Fig.venn({ label: 'Venn diagram: A only 0.35, both 0.15, B only 0.25, neither 0.25', values: { A: '0.35', AB: '0.15', B: '0.25', out: '0.25' } }) }),
Q('A5.2-8', 3, R`The Venn diagram shows how many of $50$ students study French ($F$), German ($G$) and Spanish ($S$). A student is chosen at random. Find **(a)** the number who study none of them **(b)** $P(\text{exactly two languages})$ **(c)** $P(F)$. [[3]]`,
  [R`Add all the numbers shown.`, R`Exactly two: the three regions where just two circles overlap.`],
  [R`(a)|B1|$50 - 44 = 6$`, R`(b)|B1|$\frac{5 + 4 + 2}{50} = \frac{11}{50}$`, R`(c)|B1|$\frac{22}{50} = \frac{11}{25}$`], R`(a) $6$ (b) $\frac{11}{50}$ (c) $\frac{11}{25}$`,
  R`**(a)** The numbers inside the circles add to $10 + 8 + 12 + 5 + 4 + 2 + 3 = 44$, so $6$ study none.
**(b)** Exactly two: $5 + 4 + 2 = 11$, so $\frac{11}{50}$.
**(c)** $F$: $10 + 5 + 4 + 3 = 22$, so $\frac{22}{50} = \frac{11}{25}$.`,
  { fig: Fig.venn({ label: 'Three-set Venn diagram: F only 10, G only 8, S only 12, F and G only 5, F and S only 4, G and S only 2, all three 3', sets: ['F', 'G', 'S'], values: { F: '10', G: '8', S: '12', FG: '5', FS: '4', GS: '2', FGS: '3' } }) }),
Q('A5.2-9', 3, R`$P(A) = 0.6$, $P(B) = 0.3$ and $P(A \cup B) = 0.7$. Find $P(A \cap B)$. [[2]]`,
  [R`Rearrange the addition rule.`, R`$0.7 = 0.6 + 0.3 - P(A \cap B)$.`],
  [R`|M1|$0.7 = 0.6 + 0.3 - P(A \cap B)$`, R`|A1|$0.2$`], R`$0.2$`,
  R`$P(A \cap B) = 0.6 + 0.3 - 0.7 = 0.2$.`),
Q('A5.2-10', 3, R`The Venn diagram shows probabilities. Find $x$ and $P(B)$. [[3]]`,
  [R`All the probabilities add to $1$.`, R`$0.3 + x + 0.25 + 2x = 1$.`],
  [R`|M1|$0.55 + 3x = 1$`, R`|A1|$x = 0.15$`, R`|B1|$P(B) = 0.4$`], R`$x = 0.15$, $P(B) = 0.4$`,
  R`$0.3 + x + 0.25 + 2x = 1$, so $3x = 0.45$ and $x = 0.15$. $P(B) = 0.15 + 0.25 = 0.4$.`,
  { fig: Fig.venn({ label: 'Venn diagram: A only 0.3, both x, B only 0.25, neither 2x', values: { A: '0.3', AB: 'x', B: '0.25', out: '2x' } }) }),
Q('A5.2-11', 3, R`Write down, in set notation, the region shaded in the Venn diagram. [[1]]`,
  [R`It's inside $A$ ...`, R`... but outside $B$.`],
  [R`|B1|$A \cap B'$`], R`$A \cap B'$`,
  R`The shaded region is inside $A$ but not inside $B$: $A \cap B'$.`,
  { fig: Fig.venn({ label: 'Venn diagram with the part of A outside B shaded', shade: ['A'] }) }),
Q('A5.2-12', 4, R`The Venn diagram shows the numbers of $100$ people who use three apps, $A$, $B$ and $C$. Find $x$ and the probability that a person chosen at random uses app $B$. [[4]]`,
  [R`All the regions add to $100$.`, R`$12 + 15 + 9 + x + 6 + 4 + 3 + 2x = 100$.`],
  [R`|M1|$49 + 3x = 100$`, R`|A1|$x = 17$`, R`|M1|$B$: $15 + 17 + 4 + 3$`, R`|A1|$\frac{39}{100}$`], R`$x = 17$, $P(B) = 0.39$`,
  R`$12 + 15 + 9 + x + 6 + 4 + 3 + 2x = 49 + 3x = 100$, so $x = 17$. Circle $B$ holds $15 + 17 + 4 + 3 = 39$ people: $P(B) = 0.39$.`,
  { fig: Fig.venn({ label: 'Three-set Venn diagram: A only 12, B only 15, C only 9, A and B only x, A and C only 6, B and C only 4, all three 3, none 2x', sets: ['A', 'B', 'C'], values: { A: '12', B: '15', C: '9', AB: 'x', AC: '6', BC: '4', ABC: '3', out: '2x' } }) }),
Q('A5.2-13', 4, R`$P(A) = 0.45$, $P(B') = 0.6$ and $P(A' \cap B') = 0.3$. Find $P(A \cap B)$. [[4]]`,
  [R`$P(B) = 0.4$.`, R`$P(A \cup B) = 1 - 0.3$.`],
  [R`|B1|$P(B) = 0.4$`, R`|B1|$P(A \cup B) = 0.7$`, R`|M1|$0.7 = 0.45 + 0.4 - P(A \cap B)$`, R`|A1|$0.15$`], R`$0.15$`,
  R`$P(B) = 1 - 0.6 = 0.4$ and $P(A \cup B) = 1 - 0.3 = 0.7$. So $P(A \cap B) = 0.45 + 0.4 - 0.7 = 0.15$.`),
Q('A5.2-14', 4, R`Of $60$ students, $35$ have a dog, $28$ have a cat and $10$ have neither. **(a)** How many have both? **(b)** Find the probability that a student chosen at random has exactly one of the two pets. [[4]]`,
  [R`$50$ students have at least one.`, R`$35 + 28 - \text{both} = 50$.`],
  [R`(a)|M1|$35 + 28 - b = 50$`, R`(a)|A1|$13$`, R`(b)|M1|Dog only $22$, cat only $15$`, R`(b)|A1|$\frac{37}{60}$`], R`(a) $13$ (b) $\frac{37}{60}$`,
  R`**(a)** $60 - 10 = 50$ have at least one pet, so $35 + 28 - b = 50$ and $b = 13$.
**(b)** Dog only: $22$; cat only: $15$. $P = \frac{37}{60}$.`),
Q('A5.2-15', 5, R`$80$ tourists were asked whether they visited a castle ($C$), a museum ($M$) and a park ($P$). $30$ visited $C$, $36$ visited $M$ and $40$ visited $P$; $12$ visited $C$ and $M$, $14$ visited $M$ and $P$, $10$ visited $C$ and $P$, and $5$ visited all three. **(a)** Draw a Venn diagram. **(b)** Find the probability that a tourist chosen at random visited exactly one place. **(c)** Find the probability that they visited at least two. [[6]]`,
  [R`Start with $5$ in the middle.`, R`$C$ and $M$ only: $12 - 5 = 7$.`],
  [R`(a)|B1|$5$ in the centre; $7, 9, 5$ in the two-set regions`, R`(a)|M1|$C$ only $13$, $M$ only $15$, $P$ only $21$`, R`(a)|A1|None: $5$`, R`(b)|M1|$13 + 15 + 21 = 49$`, R`(b)|A1|$\frac{49}{80}$`, R`(c)|B1|$\frac{7 + 9 + 5 + 5}{80} = \frac{13}{40}$`], R`(b) $\frac{49}{80}$ (c) $\frac{13}{40}$`,
  R`**(a)** All three: $5$. Two only: $C \cap M$: $7$, $M \cap P$: $9$, $C \cap P$: $5$. One only: $C$: $30 - 7 - 5 - 5 = 13$; $M$: $36 - 7 - 9 - 5 = 15$; $P$: $40 - 9 - 5 - 5 = 21$. Inside the circles: $75$, so $5$ visited none.
**(b)** $13 + 15 + 21 = 49$: $\frac{49}{80}$.
**(c)** $7 + 9 + 5 + 5 = 26$: $\frac{26}{80} = \frac{13}{40}$.`,
  { solFig: Fig.venn({ label: 'Three-set Venn diagram: C only 13, M only 15, P only 21, C and M only 7, M and P only 9, C and P only 5, all three 5, none 5', sets: ['C', 'M', 'P'], values: { C: '13', M: '15', P: '21', CM: '7', MP: '9', CP: '5', CMP: '5', out: '5' } }) })
]};

CONTENT['A5.3'] = {
notes: R`
### Mutually exclusive events
Events are **mutually exclusive** if they can't happen at the same time. Their circles don't overlap.
$$P(A \cap B) = 0 \qquad P(A \cup B) = P(A) + P(B)$$

### Independent events
Events are **independent** if one happening doesn't change the probability of the other.
$$P(A \cap B) = P(A) \times P(B)$$
To **test** for independence, work out both sides and compare.

::: booklet
**Learn these:** $P(A \cup B) = P(A) + P(B)$ for mutually exclusive events and $P(A \cap B) = P(A)P(B)$ for independent events.
:::

### Worked example 1
$P(A) = 0.4$, $P(B) = 0.5$ and $P(A \cap B) = 0.2$. Are $A$ and $B$ independent?
- $P(A) \times P(B) = 0.4 \times 0.5 = 0.2 = P(A \cap B)$.
- So yes, $A$ and $B$ are independent.

### Worked example 2: not the same thing
$A$ and $B$ are mutually exclusive, with $P(A) = 0.3$ and $P(B) = 0.4$. Find $P(A \cap B)$.
- Mutually exclusive means they can't both happen, so $P(A \cap B) = 0$.

**The trap:** multiplying to get $0.12$. That's the rule for independent events. Two mutually exclusive events with non-zero probabilities can never be independent: if one happens, the other definitely can't.

### Watch out
- Show the calculation when you test for independence. A statement on its own scores nothing.
- If $A$ and $B$ are independent, so are $A$ and $B'$.
`,
questions: [
Q('A5.3-1', 1, R`$A$ and $B$ are mutually exclusive, with $P(A) = 0.25$ and $P(B) = 0.4$. Find $P(A \cup B)$. [[1]]`,
  [R`Mutually exclusive: just add.`, R`$0.25 + 0.4$.`],
  [R`|B1|$0.65$`], R`$0.65$`,
  R`For mutually exclusive events, $P(A \cup B) = 0.25 + 0.4 = 0.65$.`),
Q('A5.3-2', 1, R`$A$ and $B$ are independent, with $P(A) = 0.3$ and $P(B) = 0.5$. Find $P(A \cap B)$. [[1]]`,
  [R`Independent: multiply.`, R`$0.3 \times 0.5$.`],
  [R`|B1|$0.15$`], R`$0.15$`,
  R`For independent events, $P(A \cap B) = 0.3 \times 0.5 = 0.15$.`),
Q('A5.3-3', 1, R`A die is rolled. $A$ is "an even number" and $B$ is "a $5$". Are $A$ and $B$ mutually exclusive? Explain. [[1]]`,
  [R`Can both happen at once?`, R`$5$ is odd.`],
  [R`|B1|Yes: $5$ isn't even, so they can't happen together`], R`Yes`,
  R`Yes. A $5$ is odd, so the score can't be both even and $5$: $P(A \cap B) = 0$.`),
Q('A5.3-4', 2, R`$P(A) = 0.4$, $P(B) = 0.25$ and $P(A \cap B) = 0.1$. Determine whether $A$ and $B$ are independent. [[2]]`,
  [R`Work out $P(A) \times P(B)$.`, R`Compare it with $P(A \cap B)$.`],
  [R`|M1|$0.4 \times 0.25 = 0.1$`, R`|A1|Equal to $P(A \cap B)$, so independent`], R`Independent`,
  R`$P(A)P(B) = 0.4 \times 0.25 = 0.1 = P(A \cap B)$, so $A$ and $B$ are independent.`),
Q('A5.3-5', 2, R`$A$ and $B$ are independent, with $P(A) = 0.6$ and $P(B) = 0.3$. Find $P(A \cup B)$. [[2]]`,
  [R`First find $P(A \cap B)$.`, R`Then use the addition rule.`],
  [R`|M1|$P(A \cap B) = 0.18$`, R`|A1|$P(A \cup B) = 0.6 + 0.3 - 0.18 = 0.72$`], R`$0.72$`,
  R`$P(A \cap B) = 0.6 \times 0.3 = 0.18$, so $P(A \cup B) = 0.6 + 0.3 - 0.18 = 0.72$.`),
Q('A5.3-6', 2, R`$A$ and $B$ are mutually exclusive, with $P(A) = 0.35$ and $P(A \cup B) = 0.8$. Find $P(B)$. [[1]]`,
  [R`$P(A \cup B) = P(A) + P(B)$.`, R`$0.8 - 0.35$.`],
  [R`|B1|$0.45$`], R`$0.45$`,
  R`$P(B) = P(A \cup B) - P(A) = 0.8 - 0.35 = 0.45$.`),
Q('A5.3-7', 2, R`Of $50$ students, $20$ play an instrument ($A$), $15$ sing in the choir ($B$) and $6$ do both. Determine whether $A$ and $B$ are independent. [[3]]`,
  [R`Convert to probabilities.`, R`$P(A) = 0.4$, $P(B) = 0.3$.`],
  [R`|M1|$P(A) = 0.4$, $P(B) = 0.3$, $P(A \cap B) = 0.12$`, R`|M1|$0.4 \times 0.3 = 0.12$`, R`|A1|Equal, so independent`], R`Independent`,
  R`$P(A) = \frac{20}{50} = 0.4$, $P(B) = 0.3$ and $P(A \cap B) = \frac{6}{50} = 0.12$. Since $0.4 \times 0.3 = 0.12$, $A$ and $B$ are independent.`),
Q('A5.3-8', 3, R`$A$ and $B$ are independent, with $P(A) = 0.4$ and $P(A \cup B) = 0.7$. Find $P(B)$. [[3]]`,
  [R`Let $P(B) = p$, so $P(A \cap B) = 0.4p$.`, R`$0.7 = 0.4 + p - 0.4p$.`],
  [R`|M1|$P(A \cap B) = 0.4p$`, R`|M1|$0.7 = 0.4 + p - 0.4p$`, R`|A1|$p = 0.5$`], R`$0.5$`,
  R`$0.7 = 0.4 + p - 0.4p = 0.4 + 0.6p$, so $0.6p = 0.3$ and $p = 0.5$.`),
Q('A5.3-9', 3, R`A fair die is rolled. $A$ is "a score of $5$ or more" and $B$ is "an even score". Show that $A$ and $B$ are independent. [[3]]`,
  [R`$A = \{5, 6\}$ and $B = \{2, 4, 6\}$.`, R`$A \cap B = \{6\}$.`],
  [R`|B1|$P(A) = \frac13$, $P(B) = \frac12$`, R`|B1|$P(A \cap B) = \frac16$`, R`|B1|$\frac13 \times \frac12 = \frac16$, so independent`], R`$\frac13 \times \frac12 = \frac16 = P(A \cap B)$`,
  R`$P(A) = \frac26 = \frac13$, $P(B) = \frac12$ and $A \cap B = \{6\}$, so $P(A \cap B) = \frac16$. Since $\frac13 \times \frac12 = \frac16$, they are independent.`),
Q('A5.3-10', 3, R`$A$ and $B$ are mutually exclusive, and $P(A) > 0$ and $P(B) > 0$. Explain why $A$ and $B$ can't be independent. [[2]]`,
  [R`What is $P(A \cap B)$?`, R`What is $P(A) \times P(B)$?`],
  [R`|B1|$P(A \cap B) = 0$`, R`|B1|But $P(A)P(B) > 0$, so $P(A \cap B) \ne P(A)P(B)$`], R`$P(A \cap B) = 0$ but $P(A)P(B) > 0$`,
  R`Mutually exclusive means $P(A \cap B) = 0$. But $P(A) \times P(B)$ is positive, so $P(A \cap B) \ne P(A)P(B)$: they are not independent. (If $A$ happens, $B$ definitely can't.)`),
Q('A5.3-11', 3, R`$A$, $B$ and $C$ are mutually exclusive, and one of them must happen. $P(A) = 0.2$ and $P(B) = 2P(C)$. Find $P(B)$ and $P(C)$. [[3]]`,
  [R`$P(A) + P(B) + P(C) = 1$.`, R`$0.2 + 3P(C) = 1$.`],
  [R`|M1|$0.2 + 2c + c = 1$`, R`|A1|$P(C) = \frac{4}{15}$`, R`|A1|$P(B) = \frac{8}{15}$`], R`$P(B) = \frac{8}{15}$, $P(C) = \frac{4}{15}$`,
  R`$0.2 + 3c = 1$, so $c = \frac{0.8}{3} = \frac{4}{15}$. Then $P(B) = \frac{8}{15}$.`),
Q('A5.3-12', 4, R`$A$ and $B$ are independent, $P(A) = x$, $P(B) = x + 0.2$ and $P(A \cap B) = 0.15$. Find $x$. [[4]]`,
  [R`$x(x + 0.2) = 0.15$.`, R`Solve the quadratic and reject the negative root.`],
  [R`|M1|$x(x + 0.2) = 0.15$`, R`|M1|$x^2 + 0.2x - 0.15 = 0$`, R`|A1|$x = 0.3$ or $-0.5$`, R`|A1|$x = 0.3$, as a probability can't be negative`], R`$x = 0.3$`,
  R`$x^2 + 0.2x - 0.15 = 0$ factorises as $(x - 0.3)(x + 0.5) = 0$. A probability can't be negative, so $x = 0.3$.`),
Q('A5.3-13', 4, R`The Venn diagram shows probabilities, and $A$ and $B$ are independent. Find $p$ and $q$. [[4]]`,
  [R`All regions add to $1$: $p + q = 0.5$.`, R`Independence: $p = (0.2 + p)(p + q)$.`],
  [R`|M1|$0.2 + p + q + 0.3 = 1$, so $P(B) = 0.5$`, R`|M1|$p = (0.2 + p) \times 0.5$`, R`|A1|$p = 0.2$`, R`|A1|$q = 0.3$`], R`$p = 0.2$, $q = 0.3$`,
  R`The regions sum to $1$, so $p + q = 0.5$, which is $P(B)$. Independence gives $p = (0.2 + p) \times 0.5$, so $0.5p = 0.1$ and $p = 0.2$. Then $q = 0.3$.`,
  { fig: Fig.venn({ label: 'Venn diagram: A only 0.2, both p, B only q, neither 0.3', values: { A: '0.2', AB: 'p', B: 'q', out: '0.3' } }) }),
Q('A5.3-14', 4, R`$A$ and $B$ are independent, $P(A) = 0.3$ and $P(A' \cap B') = 0.42$. Find **(a)** $P(B)$ **(b)** the probability that exactly one of $A$ and $B$ happens. [[4]]`,
  [R`$A'$ and $B'$ are also independent: $0.7 \times P(B') = 0.42$.`, R`Exactly one: $P(A \cap B') + P(A' \cap B)$.`],
  [R`(a)|M1|$0.7 \times P(B') = 0.42$`, R`(a)|A1|$P(B) = 0.4$`, R`(b)|M1|$0.3 \times 0.6 + 0.7 \times 0.4$`, R`(b)|A1|$0.46$`], R`(a) $0.4$ (b) $0.46$`,
  R`**(a)** $P(A')P(B') = 0.42$, so $P(B') = \frac{0.42}{0.7} = 0.6$ and $P(B) = 0.4$.
**(b)** $0.3 \times 0.6 + 0.7 \times 0.4 = 0.18 + 0.28 = 0.46$.`),
Q('A5.3-15', 5, R`$P(A) = 0.2$, $P(B) = 0.3$ and $P(C) = 0.5$. $A$ and $B$ are mutually exclusive; $A$ and $C$ are independent; $B$ and $C$ are independent. Find **(a)** $P(A \cup C)$ **(b)** $P((A \cup B) \cap C)$ **(c)** the probability that none of $A$, $B$, $C$ happens. [[6]]`,
  [R`Since $A$ and $B$ don't overlap, $P((A \cup B) \cap C) = P(A \cap C) + P(B \cap C)$.`, R`For (c), find $P(A \cup B \cup C)$ using (b).`],
  [R`(a)|M1|$0.2 + 0.5 - 0.2 \times 0.5$`, R`(a)|A1|$0.6$`, R`(b)|M1|$0.1 + 0.15$`, R`(b)|A1|$0.25$`, R`(c)|M1|$P(A \cup B \cup C) = 0.5 + 0.5 - 0.25 = 0.75$`, R`(c)|A1|$0.25$`], R`(a) $0.6$ (b) $0.25$ (c) $0.25$`,
  R`**(a)** $P(A \cap C) = 0.1$, so $P(A \cup C) = 0.2 + 0.5 - 0.1 = 0.6$.
**(b)** $A$ and $B$ don't overlap, so $P((A \cup B) \cap C) = P(A \cap C) + P(B \cap C) = 0.1 + 0.15 = 0.25$.
**(c)** $P(A \cup B) = 0.5$, so $P(A \cup B \cup C) = 0.5 + 0.5 - 0.25 = 0.75$, and $P(\text{none}) = 0.25$.`)
]};

CONTENT['A5.4'] = {
notes: R`
### Tree diagrams
A tree diagram shows two or more experiments one after the other.
- The probabilities on each set of branches add up to $1$.
- **Multiply** along the branches to find the probability of a path.
- **Add** the probabilities of different paths.

### With and without replacement
- **With replacement:** the second set of branches is the same as the first.
- **Without replacement:** the second branches change, because there's one fewer item.

::: booklet
**Learn these:** multiply along branches, add between paths.
:::

### Worked example 1
A bag has $4$ red and $6$ blue counters. One is taken, replaced, and a second is taken. Find $P(\text{one of each colour})$.
- $P(RB) = 0.4 \times 0.6 = 0.24$, and $P(BR) = 0.6 \times 0.4 = 0.24$.
- $P(\text{one of each}) = 0.48$.

### Worked example 2: without replacement
This time the first counter **isn't** replaced. Find $P(\text{both red})$.
- $P(RR) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$.

[[fig:A5.4-ex]]

**The trap:** using $\frac{4}{10}$ again on the second branch. After one red is taken, only $3$ of the $9$ counters left are red.

### Watch out
- "At least one" is often quickest as $1 - P(\text{none})$.
- Label every branch with its outcome and probability.
`,
questions: [
Q('A5.4-1', 1, R`A fair coin is tossed twice. Find $P(\text{two heads})$. [[1]]`,
  [R`Multiply along the branches.`, R`$\frac12 \times \frac12$.`],
  [R`|B1|$\frac14$`], R`$\frac14$`,
  R`$P(HH) = \frac12 \times \frac12 = \frac14$.`),
Q('A5.4-2', 1, R`The probability that it rains on any day is $0.3$, independently of other days. Find the probability that it rains on both Monday and Tuesday. [[1]]`,
  [R`Independent: multiply.`, R`$0.3 \times 0.3$.`],
  [R`|B1|$0.09$`], R`$0.09$`,
  R`$0.3 \times 0.3 = 0.09$.`),
Q('A5.4-3', 1, R`Use the tree diagram to find $P(A \text{ and } B)$. [[1]]`,
  [R`Follow the $A$ branch then the $B$ branch.`, R`$0.6 \times 0.7$.`],
  [R`|B1|$0.42$`], R`$0.42$`,
  R`Multiply along the branches: $0.6 \times 0.7 = 0.42$.`,
  { fig: Fig.tree({ label: 'Tree diagram: A with probability 0.6 then B 0.7 or not B 0.3; not A 0.4 then B 0.2 or not B 0.8', first: [{ label: 'A', p: '0.6' }, { label: "A'", p: '0.4' }], second: [[{ label: 'B', p: '0.7' }, { label: "B'", p: '0.3' }], [{ label: 'B', p: '0.2' }, { label: "B'", p: '0.8' }]] }) }),
Q('A5.4-4', 2, R`A bag contains $5$ red and $3$ green counters. A counter is taken, replaced, and a second is taken. Find **(a)** $P(\text{both green})$ **(b)** $P(\text{one of each colour})$. [[3]]`,
  [R`With replacement, both draws have $P(G) = \frac38$.`, R`One of each: $RG$ or $GR$.`],
  [R`(a)|B1|$\frac{9}{64}$`, R`(b)|M1|$2 \times \frac58 \times \frac38$`, R`(b)|A1|$\frac{15}{32}$`], R`(a) $\frac{9}{64}$ (b) $\frac{15}{32}$`,
  R`**(a)** $\frac38 \times \frac38 = \frac{9}{64}$.
**(b)** $\frac58 \times \frac38 + \frac38 \times \frac58 = \frac{30}{64} = \frac{15}{32}$.`),
Q('A5.4-5', 2, R`A bag contains $5$ red and $3$ green counters. Two are taken without replacement. Find $P(\text{both red})$. [[2]]`,
  [R`After one red is taken, $4$ of $7$ are red.`, R`$\frac58 \times \frac47$.`],
  [R`|M1|$\frac58 \times \frac47$`, R`|A1|$\frac{5}{14}$`], R`$\frac{5}{14}$`,
  R`$\frac58 \times \frac47 = \frac{20}{56} = \frac{5}{14}$.`),
Q('A5.4-6', 2, R`The probability of passing a test at the first attempt is $0.8$. Anyone who fails takes a resit, which they pass with probability $0.6$. Find the probability of passing within two attempts. [[2]]`,
  [R`Pass first time, or fail then pass.`, R`$0.8 + 0.2 \times 0.6$.`],
  [R`|M1|$0.8 + 0.2 \times 0.6$`, R`|A1|$0.92$`], R`$0.92$`,
  R`$P = 0.8 + 0.2 \times 0.6 = 0.8 + 0.12 = 0.92$.`,
  { solFig: Fig.tree({ label: 'Tree diagram: pass 0.8; fail 0.2 then pass resit 0.6 or fail 0.4', first: [{ label: 'Pass', p: '0.8' }, { label: 'Fail', p: '0.2' }], second: [[], [{ label: 'Pass', p: '0.6' }, { label: 'Fail', p: '0.4' }]] }) }),
Q('A5.4-7', 2, R`Use the tree diagram to find the probability of exactly one success ($S$) in the two trials. [[2]]`,
  [R`$SF$ or $FS$.`, R`$0.7 \times 0.2 + 0.3 \times 0.5$.`],
  [R`|M1|$0.7 \times 0.2 + 0.3 \times 0.5$`, R`|A1|$0.29$`], R`$0.29$`,
  R`$P(SF) = 0.7 \times 0.2 = 0.14$ and $P(FS) = 0.3 \times 0.5 = 0.15$, so $P = 0.29$.`,
  { fig: Fig.tree({ label: 'Tree diagram: S 0.7 then S 0.8 or F 0.2; F 0.3 then S 0.5 or F 0.5', first: [{ label: 'S', p: '0.7' }, { label: 'F', p: '0.3' }], second: [[{ label: 'S', p: '0.8' }, { label: 'F', p: '0.2' }], [{ label: 'S', p: '0.5' }, { label: 'F', p: '0.5' }]] }) }),
Q('A5.4-8', 3, R`A bag contains $6$ red and $4$ blue balls. Two are taken without replacement. Find the probability that at least one is blue. [[3]]`,
  [R`Use $1 - P(\text{both red})$.`, R`$P(RR) = \frac{6}{10} \times \frac59$.`],
  [R`|M1|$P(RR) = \frac{6}{10} \times \frac59 = \frac13$`, R`|M1|$1 - \frac13$`, R`|A1|$\frac23$`], R`$\frac23$`,
  R`$P(\text{both red}) = \frac{6}{10} \times \frac59 = \frac{30}{90} = \frac13$, so $P(\text{at least one blue}) = \frac23$.`),
Q('A5.4-9', 3, R`The probability that it rains on a given day is $0.4$. If it rains, the probability that a bus is late is $0.2$; if it doesn't rain, it is $0.05$. Find the probability that the bus is late. [[3]]`,
  [R`Draw a tree: rain first, then late.`, R`Add the two "late" paths.`],
  [R`|M1|$0.4 \times 0.2 = 0.08$`, R`|M1|$0.6 \times 0.05 = 0.03$`, R`|A1|$0.11$`], R`$0.11$`,
  R`$P(\text{late}) = 0.4 \times 0.2 + 0.6 \times 0.05 = 0.08 + 0.03 = 0.11$.`,
  { solFig: Fig.tree({ label: 'Tree diagram: rain 0.4 then late 0.2 or on time 0.8; dry 0.6 then late 0.05 or on time 0.95', first: [{ label: 'Rain', p: '0.4' }, { label: 'Dry', p: '0.6' }], second: [[{ label: 'Late', p: '0.2' }, { label: 'On time', p: '0.8' }], [{ label: 'Late', p: '0.05' }, { label: 'On time', p: '0.95' }]] }) }),
Q('A5.4-10', 3, R`A fair die is rolled twice. Use a tree diagram with branches "six" and "not six" to find the probability of at least one six. [[2]]`,
  [R`Only "not six, not six" has no six.`, R`$1 - \frac56 \times \frac56$.`],
  [R`|M1|$1 - \left(\frac56\right)^2$`, R`|A1|$\frac{11}{36}$`], R`$\frac{11}{36}$`,
  R`$P(\text{no six}) = \frac{25}{36}$, so $P(\text{at least one six}) = \frac{11}{36}$.`),
Q('A5.4-11', 3, R`A bag contains $3$ red and $x$ blue counters. A counter is taken, replaced, and a second is taken. The probability that both are red is $\frac{9}{64}$. Find $x$. [[3]]`,
  [R`$\left(\frac{3}{3 + x}\right)^2 = \frac{9}{64}$.`, R`Square root both sides.`],
  [R`|M1|$\left(\frac{3}{3 + x}\right)^2 = \frac{9}{64}$`, R`|M1|$\frac{3}{3 + x} = \frac38$`, R`|A1|$x = 5$`], R`$x = 5$`,
  R`$\frac{3}{3 + x} = \frac38$, so $3 + x = 8$ and $x = 5$.`),
Q('A5.4-12', 4, R`A bag contains $n$ counters, $2$ of which are red. Two counters are taken without replacement. The probability that both are red is $\frac{1}{15}$. Find $n$. [[4]]`,
  [R`$\frac2n \times \frac{1}{n - 1} = \frac{1}{15}$.`, R`$n(n - 1) = 30$.`],
  [R`|M1|$\frac{2}{n} \times \frac{1}{n - 1} = \frac{1}{15}$`, R`|M1|$n^2 - n - 30 = 0$`, R`|A1|$(n - 6)(n + 5) = 0$`, R`|A1|$n = 6$`], R`$n = 6$`,
  R`$\frac{2}{n(n - 1)} = \frac{1}{15}$, so $n^2 - n - 30 = 0$, which factorises as $(n - 6)(n + 5) = 0$. $n$ must be positive, so $n = 6$.`),
Q('A5.4-13', 4, R`An archer hits a target with probability $0.7$ on each shot, independently. She takes three shots. Find the probability that she hits exactly twice. [[3]]`,
  [R`The miss could be on shot $1$, $2$ or $3$.`, R`Each path has probability $0.7^2 \times 0.3$.`],
  [R`|M1|$0.7 \times 0.7 \times 0.3 = 0.147$`, R`|M1|$3$ paths`, R`|A1|$0.441$`], R`$0.441$`,
  R`The paths HHM, HMH and MHH each have probability $0.7^2 \times 0.3 = 0.147$, so $P = 3 \times 0.147 = 0.441$.`),
Q('A5.4-14', 4, R`Ali and Bea take turns to throw a ball at a target, Ali first. Each hits with probability $0.4$, independently. The first to hit wins, and each person has at most two throws. Find the probability that Ali wins. [[4]]`,
  [R`Ali wins on his first throw, or on his second after both miss once.`, R`$0.4 + 0.6 \times 0.6 \times 0.4$.`],
  [R`|M1|Ali wins on throw $1$: $0.4$`, R`|M1|Ali, Bea miss, then Ali hits: $0.6 \times 0.6 \times 0.4$`, R`|A1|$0.144$`, R`|A1|Total $0.544$`], R`$0.544$`,
  R`Ali can win with his first throw ($0.4$), or with his second after he and Bea both miss: $0.6 \times 0.6 \times 0.4 = 0.144$. Total $0.544$.`),
Q('A5.4-15', 5, R`A factory has two machines. Machine $X$ makes $60\%$ of the items and $3\%$ of its items are faulty; machine $Y$ makes the rest and $5\%$ of its items are faulty. **(a)** Find the probability that a randomly chosen item is faulty. **(b)** Find the probability that an item comes from $Y$ and isn't faulty. **(c)** Two items are chosen independently. Find the probability that exactly one is faulty. [[6]]`,
  [R`Draw a tree: machine first, then faulty or not.`, R`For (c), use your answer to (a) for each item.`],
  [R`(a)|M1|$0.6 \times 0.03 + 0.4 \times 0.05$`, R`(a)|A1|$0.038$`, R`(b)|M1|$0.4 \times 0.95$`, R`(b)|A1|$0.38$`, R`(c)|M1|$2 \times 0.038 \times 0.962$`, R`(c)|A1|$0.0731$`], R`(a) $0.038$ (b) $0.38$ (c) $0.0731$`,
  R`**(a)** $0.6 \times 0.03 + 0.4 \times 0.05 = 0.018 + 0.02 = 0.038$.
**(b)** $0.4 \times 0.95 = 0.38$.
**(c)** $2 \times 0.038 \times 0.962 = 0.0731$ (to $3$ s.f.).`,
  { solFig: Fig.tree({ label: 'Tree diagram: X 0.6 then faulty 0.03 or fine 0.97; Y 0.4 then faulty 0.05 or fine 0.95', first: [{ label: 'X', p: '0.6' }, { label: 'Y', p: '0.4' }], second: [[{ label: 'Faulty', p: '0.03' }, { label: 'Fine', p: '0.97' }], [{ label: 'Faulty', p: '0.05' }, { label: 'Fine', p: '0.95' }]] }) })
]};
