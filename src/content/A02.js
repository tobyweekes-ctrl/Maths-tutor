/* Statistics and Mechanics Year 1 · Chapter 2 Measures of location and spread (sections 2.1 to 2.5) */
BOOK_CHAPTERS.push({ id:'A02', book:'Statistics & Mechanics Year 1', label:'Chapter 2', title:'Measures of location and spread', sections:[
  { id:'A2.1', num:'2.1', title:'Measures of central tendency' },
  { id:'A2.2', num:'2.2', title:'Other measures of location' },
  { id:'A2.3', num:'2.3', title:'Measures of spread' },
  { id:'A2.4', num:'2.4', title:'Variance and standard deviation' },
  { id:'A2.5', num:'2.5', title:'Coding' }
]});
FIGS['A2.2-interp'] = Fig.graph({ label: 'Linear interpolation for the median: the 20th value lies 12/14 of the way through the class 10 to 20, which has 14 values after the first 8, giving 18.6',
  x0: 6, x1: 24, y0: -1, y1: 3, xlab: '', ylab: '', h: 150,
  segs: [{ x1: 10, y1: 1, x2: 20, y2: 1, col: 'var(--ink)', w: 2 }, { x1: 10, y1: 0.7, x2: 10, y2: 1.3, col: 'var(--ink)' }, { x1: 20, y1: 0.7, x2: 20, y2: 1.3, col: 'var(--ink)' }, { x1: 18.57, y1: 0.6, x2: 18.57, y2: 1.4, col: 'var(--pen)', w: 2 }],
  texts: [{ x: 10, y: 0.2, label: '10' }, { x: 20, y: 0.2, label: '20' }, { x: 10, y: 1.9, label: '8th value' }, { x: 20, y: 1.9, label: '22nd value' }, { x: 18.57, y: 2.4, label: 'median ≈ 18.6', col: 'var(--pen)' }, { x: 14.3, y: 1.5, label: '12 of 14 values →', size: 11 }] });

CONTENT['A2.1'] = {
notes: R`
### Averages
- **Mean:** $\bar{x} = \dfrac{\sum x}{n}$, or $\dfrac{\sum fx}{\sum f}$ from a frequency table.
- **Median:** the middle value of the ordered data.
- **Mode:** the most common value (the only average for qualitative data).

### Finding the median of $n$ values
Work out $\frac{n}{2}$. If it's a whole number, the median is halfway between that value and the next. If not, round **up** to find its position.

### Which average?
- The mean uses every value but is affected by **extreme values**.
- The median isn't affected by extreme values.
- The mode suits qualitative data or data with a clear most common value.

::: booklet
**Learn these:** $\bar{x} = \frac{\sum x}{n}$ and $\bar{x} = \frac{\sum fx}{\sum f}$. Don't rely on the formula booklet for the averages.
:::

### Worked example 1
Find the mean and median of $x$: $0, 1, 2, 3, 4$ with frequencies $5, 8, 10, 4, 3$.
- $\sum f = 30$, $\sum fx = 0 + 8 + 20 + 12 + 12 = 52$, so $\bar{x} = 1.73$.
- $\frac{30}{2} = 15$: the median is halfway between the $15$th and $16$th values. Cumulative frequencies $5, 13, 23$: both are $2$, so the median is $2$.

### Worked example 2: combining groups
Group $A$ has $20$ students with mean $64$; group $B$ has $30$ with mean $70$. Find the overall mean.
$$\frac{20 \times 64 + 30 \times 70}{50} = \frac{1280 + 2100}{50} = 67.6$$

**The trap:** averaging the two means: $\frac{64 + 70}{2} = 67$. That ignores the group sizes.

### Watch out
- With grouped data, the mean is an **estimate** (use midpoints).
`,
questions: [
Q('A2.1-1', 1, R`Find the mean of $3, 7, 8, 10, 12$. [[1]]`,
  [R`Add them up.`, R`Divide by $5$.`],
  [R`|B1|$8$`], R`$8$`,
  R`$\sum x = 3 + 7 + 8 + 10 + 12 = 40$, so $\bar{x} = \frac{40}{5} = 8$.`),
Q('A2.1-2', 1, R`Find the median of $4, 9, 2, 7, 5, 8$. [[1]]`,
  [R`Order them first.`, R`$2, 4, 5, 7, 8, 9$: halfway between the $3$rd and $4$th.`],
  [R`|B1|$6$`], R`$6$`,
  R`$\frac{5 + 7}{2} = 6$.`),
Q('A2.1-3', 1, R`Find the mode of $2, 3, 3, 5, 7, 3, 5$. [[1]]`,
  [R`Which value appears most often?`, R`Count each value.`],
  [R`|B1|$3$`], R`$3$`,
  R`$3$ appears three times; $5$ twice.`),
Q('A2.1-4', 2, R`The table shows the number of pets $x$ owned by $30$ students: $x = 0, 1, 2, 3, 4$ with frequencies $5, 8, 10, 4, 3$. Find the mean and the median. [[3]]`,
  [R`$\sum fx = 52$.`, R`Median: $15$th and $16$th values.`],
  [R`|M1|$\frac{\sum fx}{\sum f}$`, R`|A1|$1.73$`, R`|B1|Median $2$`], R`Mean $1.73$; median $2$`,
  R`$\frac{52}{30} = 1.73$. Cumulative frequencies $5, 13, 23$: the $15$th and $16$th values are both $2$.`),
Q('A2.1-5', 2, R`$12$ values have $\sum x = 456$. Find the mean. A $13$th value of $51$ is added; find the new mean. [[2]]`,
  [R`$\frac{456}{12}$.`, R`$\frac{456 + 51}{13}$.`],
  [R`|B1|$38$`, R`|B1|$39$`], R`$38$; $39$`,
  R`$\frac{507}{13} = 39$.`),
Q('A2.1-6', 2, R`Group $A$: $20$ students, mean mark $64$. Group $B$: $30$ students, mean mark $70$. Find the mean mark of all $50$ students. [[2]]`,
  [R`Total marks for each group.`, R`$20 \times 64 + 30 \times 70$.`],
  [R`|M1|$\frac{1280 + 2100}{50}$`, R`|A1|$67.6$`], R`$67.6$`,
  R`$\frac{3380}{50} = 67.6$.`),
Q('A2.1-7', 2, R`House prices in a street (in £000s) are $180, 195, 205, 210, 220, 950$. State, with a reason, which average best represents a typical price. [[2]]`,
  [R`Look at $950$.`, R`Which average isn't affected by an extreme value?`],
  [R`|B1|The median`, R`|B1|$950$ is an extreme value that would distort the mean`], R`Median`,
  R`The mean is $326.7$, higher than five of the six prices; the median, $207.5$, is typical.`),
Q('A2.1-8', 3, R`Estimate the mean from the grouped data: $0 \le x < 10$: $4$; $10 \le x < 20$: $9$; $20 \le x < 30$: $5$; $30 \le x < 50$: $2$. [[3]]`,
  [R`Midpoints $5, 15, 25, 40$.`, R`$\frac{\sum fx}{\sum f}$.`],
  [R`|B1|Midpoints`, R`|M1|$\frac{20 + 135 + 125 + 80}{20}$`, R`|A1|$18$`], R`$18$`,
  R`$\frac{360}{20} = 18$.`),
Q('A2.1-9', 3, R`The mean of five numbers is $12$. Four of them are $8, 10, 13, 15$. Find the fifth. [[2]]`,
  [R`Total $5 \times 12 = 60$.`, R`Subtract the known four.`],
  [R`|M1|$60 - 46$`, R`|A1|$14$`], R`$14$`,
  R`$8 + 10 + 13 + 15 = 46$.`),
Q('A2.1-10', 3, R`A survey records favourite colours. Explain which average should be used, and why the mean can't be. [[2]]`,
  [R`Colours aren't numbers.`, R`Which average works with categories?`],
  [R`|B1|The mode`, R`|B1|The data are qualitative, so you can't add them up`], R`Mode`,
  R`You can't find the "mean colour"; the most popular colour is the mode.`),
Q('A2.1-11', 3, R`$x = 1, 2, 3, 4, 5$ with frequencies $2, k, 6, 4, 3$. The mean is $3$. Find $k$. [[3]]`,
  [R`$\sum fx = 51 + 2k$, $\sum f = 15 + k$.`, R`$51 + 2k = 3(15 + k)$.`],
  [R`|M1|$\sum fx$ and $\sum f$`, R`|M1|$51 + 2k = 45 + 3k$`, R`|A1|$k = 6$`], R`$k = 6$`,
  R`$2 + 2k + 18 + 16 + 15 = 51 + 2k$.`),
Q('A2.1-12', 4, R`$x = 10, 11, 12, 13, 14$ with frequencies $3, 7, 9, 6, 5$. Find the median and the mean. [[3]]`,
  [R`$n = 30$: median halfway between the $15$th and $16$th.`, R`$\sum fx = 363$.`],
  [R`|M1|Cumulative frequencies $3, 10, 19$`, R`|A1|Median $12$`, R`|A1|Mean $12.1$`], R`Median $12$; mean $12.1$`,
  R`Both the $15$th and $16$th values are $12$. $\frac{363}{30} = 12.1$.`),
Q('A2.1-13', 4, R`$10$ values have mean $15$. The value $24$ is removed. Find the new mean. [[2]]`,
  [R`Total $150$.`, R`$\frac{150 - 24}{9}$.`],
  [R`|M1|$\frac{126}{9}$`, R`|A1|$14$`], R`$14$`,
  R`$\frac{126}{9} = 14$.`),
Q('A2.1-14', 4, R`In a class of $20$, the $12$ boys have mean score $5.5$ and the whole class has mean $6.1$. Find the girls' mean score. [[3]]`,
  [R`Class total $122$; boys' total $66$.`, R`Girls: $56$ over $8$.`],
  [R`|M1|$20 \times 6.1 = 122$`, R`|M1|$122 - 66 = 56$`, R`|A1|$7$`], R`$7$`,
  R`Total of all $20$: $20 \times 6.1 = 122$. Boys' total: $12 \times 5.5 = 66$. Girls' total $56$ over $8$ girls: mean $7$.`),
Q('A2.1-15', 5, R`The daily sunshine (hours) on $10$ days was: $0.0, 2.3, 5.1, 6.8, 7.2, 7.5, 8.0, 9.4, 10.2, 11.5$.

**(a)** Find the mean. [[2]]

**(b)** Find the median. [[2]]

**(c)** Explain which better represents a typical day. [[1]]

**(d)** An $11$th day is added and the mean becomes $7.0$. Find the sunshine on that day. [[2]]`,
  [R`$\sum x = 68.0$.`, R`$11 \times 7.0 - 68.0$.`],
  [R`(a)|M1|$\frac{68.0}{10}$`, R`(a)|A1|$6.8$`, R`(b)|M1|Halfway between the $5$th and $6$th`, R`(b)|A1|$7.35$`, R`(c)|B1|Median: the $0.0$ day pulls the mean down`, R`(d)|M1|$77 - 68$`, R`(d)|A1|$9.0$ hours`],
  R`(a) $6.8$ (b) $7.35$ (d) $9.0$`,
  R`(b) $\frac{7.2 + 7.5}{2} = 7.35$.

(d) $11 \times 7.0 = 77$, so the new day has $77 - 68 = 9.0$ hours.`)
]};

CONTENT['A2.2'] = {
notes: R`
### Quartiles and percentiles
- **Lower quartile** $Q_1$: $25\%$ of the data lie below it.
- **Upper quartile** $Q_3$: $75\%$ lie below it.
- **Percentiles:** the $90$th percentile has $90\%$ below it.

### Ungrouped data (Edexcel method)
- $Q_1$: find $\frac{n}{4}$. Not a whole number: round **up**. Whole number: halfway between that value and the next.
- $Q_3$: the same with $\frac{3n}{4}$.

### Grouped data: linear interpolation
Find the position ($\frac{n}{2}$ for the median, $\frac{n}{4}$ for $Q_1$, and so on). Assume the values are spread evenly through the class:
$$\text{value} = \text{lower boundary} + \frac{\text{position} - \text{cf before}}{\text{class frequency}} \times \text{class width}$$

[[fig:A2.2-interp]]

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
Find the quartiles of $3, 5, 6, 8, 9, 12, 15, 17$.
- $\frac{n}{4} = 2$: $Q_1 = \frac{5 + 6}{2} = 5.5$. $\frac{n}{2} = 4$: $Q_2 = 8.5$. $\frac{3n}{4} = 6$: $Q_3 = \frac{12 + 15}{2} = 13.5$.

### Worked example 2: interpolation
$0$–$10$: $8$; $10$–$20$: $14$; $20$–$30$: $10$; $30$–$40$: $8$ ($n = 40$). Estimate the median.
- Position $20$. The first $8$ values are below $10$, so we need $12$ of the $14$ in $10$–$20$: $10 + \frac{12}{14} \times 10 = 18.6$.

**The trap:** using $\frac{n + 1}{2}$ for grouped data, or using the class limits instead of the true boundaries.

### Watch out
- Interpolation gives an **estimate**: it assumes the data are evenly spread within each class.
`,
questions: [
Q('A2.2-1', 1, R`Find $Q_1$, $Q_2$ and $Q_3$ for $3, 5, 6, 8, 9, 12, 15, 17$. [[3]]`,
  [R`$n = 8$: $\frac{n}{4} = 2$, $\frac{n}{2} = 4$, $\frac{3n}{4} = 6$.`, R`Whole numbers: average with the next value.`],
  [R`|B1|$Q_1 = 5.5$`, R`|B1|$Q_2 = 8.5$`, R`|B1|$Q_3 = 13.5$`], R`$5.5$, $8.5$, $13.5$`,
  R`$\frac{5 + 6}{2}$, $\frac{8 + 9}{2}$, $\frac{12 + 15}{2}$.`),
Q('A2.2-2', 1, R`For $11$ ordered values, which value is the median? [[1]]`,
  [R`$\frac{11}{2} = 5.5$.`, R`Round up.`],
  [R`|B1|The $6$th`], R`The $6$th value`,
  R`$5.5$ isn't a whole number, so round up to $6$.`),
Q('A2.2-3', 1, R`For $15$ ordered values, which value is the lower quartile? [[1]]`,
  [R`$\frac{15}{4} = 3.75$.`, R`Round up.`],
  [R`|B1|The $4$th`], R`The $4$th value`,
  R`$3.75$ rounds up to $4$.`),
Q('A2.2-4', 2, R`Find the quartiles of $2, 4, 4, 5, 7, 8, 9, 10, 12, 13, 15$. [[3]]`,
  [R`$n = 11$: positions $2.75$, $5.5$, $8.25$.`, R`Round up each.`],
  [R`|B1|$Q_1 = 4$ ($3$rd)`, R`|B1|$Q_2 = 8$ ($6$th)`, R`|B1|$Q_3 = 12$ ($9$th)`], R`$4$, $8$, $12$`,
  R`Positions $3$, $6$ and $9$.`),
Q('A2.2-5', 2, R`$0 \le x < 10$: $8$; $10 \le x < 20$: $14$; $20 \le x < 30$: $10$; $30 \le x < 40$: $8$. Estimate the median. [[3]]`,
  [R`$\frac{n}{2} = 20$.`, R`$10 + \frac{12}{14} \times 10$.`],
  [R`|B1|Position $20$, in $10$–$20$`, R`|M1|$10 + \frac{12}{14} \times 10$`, R`|A1|$18.6$`], R`$18.6$`,
  R`The first $8$ values are below $10$; we need $12$ more of the $14$.`, { solFig: FIGS['A2.2-interp'] }),
Q('A2.2-6', 2, R`For the same data, estimate the lower quartile. [[2]]`,
  [R`$\frac{n}{4} = 10$.`, R`$10 + \frac{2}{14} \times 10$.`],
  [R`|M1|$10 + \frac{2}{14} \times 10$`, R`|A1|$11.4$`], R`$11.4$`,
  R`$8$ values are below $10$, so we need $2$ more of the $14$ in that class.`),
Q('A2.2-7', 2, R`For the same data, estimate the upper quartile. [[2]]`,
  [R`$\frac{3n}{4} = 30$.`, R`$22$ values are below $20$.`],
  [R`|M1|$20 + \frac{8}{10} \times 10$`, R`|A1|$28$`], R`$28$`,
  R`We need $8$ of the $10$ values in $20$–$30$.`),
Q('A2.2-8', 3, R`For the same data, estimate the $90$th percentile. [[3]]`,
  [R`$0.9 \times 40 = 36$.`, R`$32$ values are below $30$.`],
  [R`|B1|Position $36$`, R`|M1|$30 + \frac{4}{8} \times 10$`, R`|A1|$35$`], R`$35$`,
  R`$4$ of the $8$ values in $30$–$40$.`),
Q('A2.2-9', 3, R`For the same data, estimate the $10$th percentile. [[2]]`,
  [R`$0.1 \times 40 = 4$.`, R`In the first class.`],
  [R`|M1|$0 + \frac{4}{8} \times 10$`, R`|A1|$5$`], R`$5$`,
  R`$4$ of the $8$ values in $0$–$10$.`),
Q('A2.2-10', 3, R`Times (minutes): $0 \le t < 5$: $6$; $5 \le t < 10$: $10$; $10 \le t < 20$: $12$; $20 \le t < 40$: $2$. Estimate the median. [[3]]`,
  [R`$n = 30$, position $15$.`, R`$6$ below $5$; class width $5$.`],
  [R`|B1|Position $15$, in $5$–$10$`, R`|M1|$5 + \frac{9}{10} \times 5$`, R`|A1|$9.5$`], R`$9.5$`,
  R`We need $9$ of the $10$ values in $5$–$10$.`),
Q('A2.2-11', 3, R`Explain why a median found by interpolation is only an estimate. [[2]]`,
  [R`What do we know about values inside a class?`, R`What do we assume?`],
  [R`|B1|The exact values within each class are unknown`, R`|B1|Interpolation assumes they're evenly spread through the class`], R`It assumes an even spread`,
  R`If the values bunch up at one end of the class, the true median differs.`),
Q('A2.2-12', 4, R`$x = 0, 1, 2, 3, 4$ with frequencies $4, 9, 11, 8, 8$. Find the quartiles. [[3]]`,
  [R`$n = 40$: positions $10$, $20$, $30$ are whole numbers.`, R`Cumulative: $4, 13, 24, 32, 40$.`],
  [R`|B1|$Q_1 = 1$`, R`|B1|$Q_2 = 2$`, R`|B1|$Q_3 = 3$`], R`$1$, $2$, $3$`,
  R`The $10$th and $11$th values are $1$; the $20$th and $21$st are $2$; the $30$th and $31$st are $3$.`),
Q('A2.2-13', 4, R`Masses (kg): $50 \le m < 60$: $5$; $60 \le m < 65$: $12$; $65 \le m < 70$: $15$; $70 \le m < 80$: $8$. Estimate the median. [[3]]`,
  [R`$n = 40$, position $20$.`, R`$17$ below $65$.`],
  [R`|B1|Position $20$, in $65$–$70$`, R`|M1|$65 + \frac{3}{15} \times 5$`, R`|A1|$66$ kg`], R`$66$ kg`,
  R`$3$ of the $15$ values in a class of width $5$.`),
Q('A2.2-14', 4, R`For the same mass data, estimate the $80$th percentile. [[2]]`,
  [R`Position $32$.`, R`Cumulative frequency $32$ at $70$.`],
  [R`|M1|Position $0.8 \times 40 = 32$`, R`|A1|$70$ kg`], R`$70$ kg`,
  R`Exactly $32$ values are below $70$, so $P_{80} = 70$.`),
Q('A2.2-15', 5, R`The lengths of $60$ leaves (cm): $2 \le l < 4$: $6$; $4 \le l < 6$: $18$; $6 \le l < 8$: $22$; $8 \le l < 12$: $14$.

**(a)** Estimate the median. [[2]]

**(b)** Estimate the lower quartile. [[2]]

**(c)** Estimate the upper quartile. [[2]]

**(d)** Estimate the number of leaves longer than $10$ cm. [[2]]`,
  [R`Positions $30$, $15$ and $45$.`, R`Cumulative frequencies $6, 24, 46, 60$.`],
  [R`(a)|M1|$6 + \frac{6}{22} \times 2$`, R`(a)|A1|$6.55$`, R`(b)|M1|$4 + \frac{9}{18} \times 2$`, R`(b)|A1|$5$`, R`(c)|M1|$6 + \frac{21}{22} \times 2$`, R`(c)|A1|$7.91$`, R`(d)|M1|Half the $8$–$12$ class`, R`(d)|A1|$7$`],
  R`(a) $6.55$ (b) $5$ (c) $7.91$ (d) $7$`,
  R`(d) Assuming the $14$ leaves are spread evenly over $8$–$12$, half of them are above $10$.`)
]};

CONTENT['A2.3'] = {
notes: R`
### Measures of spread
- **Range** $=$ largest $-$ smallest. Easy, but affected by extreme values.
- **Interquartile range** $= Q_3 - Q_1$: the spread of the middle $50\%$. Not affected by extreme values.
- **Interpercentile range:** e.g. the $10$th to $90$th percentile range, the spread of the middle $80\%$.

::: booklet
**Not in the formula booklet:** these definitions.
:::

### Worked example 1
Find the range and IQR of $3, 5, 6, 8, 9, 12, 15, 17$.
- Range $17 - 3 = 14$. $Q_1 = 5.5$, $Q_3 = 13.5$, so IQR $= 8$.

### Worked example 2: comparing data sets
Town $A$: median $22$, IQR $6$. Town $B$: median $25$, IQR $11$ (ages of shoppers).
- On average, shoppers in $B$ are older (higher median), and their ages are more varied (larger IQR).

**The trap:** comparing just the numbers. Always interpret in context: "older on average", "more varied ages".

### Watch out
- The IQR uses the same quartile rules as 2.2.
`,
questions: [
Q('A2.3-1', 1, R`Find the range of $4, 9, 2, 15, 7$. [[1]]`,
  [R`Largest minus smallest.`, R`$15 - 2$.`],
  [R`|B1|$13$`], R`$13$`,
  R`Range $=$ largest $-$ smallest $= 15 - 2 = 13$.`),
Q('A2.3-2', 1, R`A data set has $Q_1 = 12$ and $Q_3 = 27$. Find the interquartile range. [[1]]`,
  [R`$Q_3 - Q_1$.`, R`$27 - 12$.`],
  [R`|B1|$15$`], R`$15$`,
  R`IQR $= Q_3 - Q_1 = 27 - 12 = 15$.`),
Q('A2.3-3', 1, R`Give one advantage of the interquartile range over the range. [[1]]`,
  [R`What happens if there's one extreme value?`, R`The IQR ignores the top and bottom quarters.`],
  [R`|B1|It isn't affected by extreme values`], R`Not affected by extreme values`,
  R`The IQR measures the spread of the middle $50\%$, so outliers don't change it.`),
Q('A2.3-4', 2, R`Find the interquartile range of $3, 5, 6, 8, 9, 12, 15, 17$. [[2]]`,
  [R`$Q_1 = 5.5$, $Q_3 = 13.5$.`, R`Subtract.`],
  [R`|M1|Both quartiles`, R`|A1|$8$`], R`$8$`,
  R`From 2.2, $Q_1 = 5.5$ and $Q_3 = 13.5$, so IQR $= 13.5 - 5.5 = 8$.`),
Q('A2.3-5', 2, R`For a set of data, $P_{10} = 5$ and $P_{90} = 35$. Find the $10$th to $90$th interpercentile range, and say what it measures. [[2]]`,
  [R`$P_{90} - P_{10}$.`, R`Which part of the data lies between them?`],
  [R`|B1|$30$`, R`|B1|The spread of the middle $80\%$`], R`$30$`,
  R`$P_{90} - P_{10} = 35 - 5 = 30$: the spread of the middle $80\%$ of the data.`),
Q('A2.3-6', 2, R`Find the IQR of $2, 4, 4, 5, 7, 8, 9, 10, 12, 13, 15$. [[2]]`,
  [R`$Q_1 = 4$, $Q_3 = 12$.`, R`See 2.2.`],
  [R`|M1|Both quartiles`, R`|A1|$8$`], R`$8$`,
  R`$Q_1 = 4$ (3rd value) and $Q_3 = 12$ (9th value), so IQR $= 12 - 4 = 8$.`),
Q('A2.3-7', 2, R`Shoppers' ages: Town $A$ median $22$, IQR $6$; Town $B$ median $25$, IQR $11$. Compare the ages. [[2]]`,
  [R`Compare the medians.`, R`Compare the IQRs.`],
  [R`|B1|Shoppers in $B$ are older on average (higher median)`, R`|B1|Ages in $B$ are more varied (larger IQR)`], R`$B$ older and more varied`,
  R`Each comparison should be in context.`),
Q('A2.3-8', 3, R`For the grouped data $0$–$10$: $8$; $10$–$20$: $14$; $20$–$30$: $10$; $30$–$40$: $8$, estimate the interquartile range. [[3]]`,
  [R`$Q_1 = 11.43$ and $Q_3 = 28$ (see 2.2).`, R`Subtract.`],
  [R`|M1|$Q_1$`, R`|M1|$Q_3$`, R`|A1|$16.6$`], R`$16.6$`,
  R`$28 - 11.43 = 16.57$.`),
Q('A2.3-9', 3, R`Why might the $10$th to $90$th interpercentile range be preferred to the range? [[1]]`,
  [R`What does it leave out?`, R`Extreme values.`],
  [R`|B1|It ignores the most extreme $10\%$ at each end, so outliers have little effect`], R`Less affected by outliers`,
  R`It still covers $80\%$ of the data, more than the IQR.`),
Q('A2.3-10', 3, R`A data set has range $20$ and smallest value $8$. A new value of $35$ is added. Find the new range. [[2]]`,
  [R`The old largest value is $28$.`, R`$35$ is now the largest.`],
  [R`|M1|Old largest $28$`, R`|A1|$27$`], R`$27$`,
  R`The largest value was $8 + 20 = 28$; the new largest is $35$, so the range is $35 - 8 = 27$.`),
Q('A2.3-11', 3, R`$x = 0, 1, 2, 3, 4$ with frequencies $4, 9, 11, 8, 8$. Find the IQR. [[2]]`,
  [R`$Q_1 = 1$, $Q_3 = 3$ (see 2.2).`, R`Subtract.`],
  [R`|M1|Quartiles`, R`|A1|$2$`], R`$2$`,
  R`$n = 40$: $Q_1$ is between the $10$th and $11$th values ($1$), $Q_3$ between the $30$th and $31$st ($3$). IQR $= 3 - 1 = 2$.`),
Q('A2.3-12', 4, R`Masses: $50$–$60$: $5$; $60$–$65$: $12$; $65$–$70$: $15$; $70$–$80$: $8$. Estimate the IQR. [[4]]`,
  [R`$Q_1$: position $10$, in $60$–$65$.`, R`$Q_3$: position $30$, in $65$–$70$.`],
  [R`|M1|$60 + \frac{5}{12} \times 5$`, R`|A1|$Q_1 = 62.08$`, R`|A1|$Q_3 = 65 + \frac{13}{15} \times 5 = 69.33$`, R`|A1|$7.25$`], R`$7.25$`,
  R`$69.33 - 62.08 = 7.25$.`),
Q('A2.3-13', 4, R`For the grouped data $0$–$10$: $8$; $10$–$20$: $14$; $20$–$30$: $10$; $30$–$40$: $8$, estimate the $5$th to $95$th interpercentile range. [[3]]`,
  [R`$P_5$: position $2$; $P_{95}$: position $38$.`, R`$P_{95}$ is in $30$–$40$.`],
  [R`|B1|$P_5 = 2.5$`, R`|B1|$P_{95} = 30 + \frac{6}{8} \times 10 = 37.5$`, R`|A1|$35$`], R`$35$`,
  R`$P_5$: $\frac{5}{100} \times 40 = 2$nd value, $0 + \frac{2}{8} \times 10 = 2.5$. $P_{95}$: $38$th value, $30 + \frac{38 - 32}{8} \times 10 = 37.5$. Range $37.5 - 2.5 = 35$.`),
Q('A2.3-14', 4, R`Two classes take a test. Class $X$: median $58$, IQR $10$, range $45$. Class $Y$: median $58$, IQR $22$, range $40$. Compare the classes, and explain why the ranges might be misleading. [[3]]`,
  [R`Same median.`, R`Which measure of spread ignores extremes?`],
  [R`|B1|Same average performance`, R`|B1|$Y$'s middle $50\%$ is much more spread out`, R`|B1|The range depends on one or two extreme marks (e.g. one very low score in $X$)`], R`See solution`,
  R`The IQR suggests $Y$ is more varied, even though its range is smaller.`),
Q('A2.3-15', 5, R`Daily rainfall (mm) at a station over $40$ days: $0 \le r < 2$: $22$; $2 \le r < 5$: $9$; $5 \le r < 10$: $6$; $10 \le r < 20$: $3$.

**(a)** Estimate the median. [[2]]

**(b)** Estimate the interquartile range. [[4]]

**(c)** Explain why the IQR is a better measure of spread than the range here. [[2]]`,
  [R`Positions $20$, $10$ and $30$.`, R`Cumulative frequencies $22, 31, 37, 40$.`],
  [R`(a)|M1|$0 + \frac{20}{22} \times 2$`, R`(a)|A1|$1.82$ mm`, R`(b)|M1|$Q_1 = \frac{10}{22} \times 2 = 0.909$`, R`(b)|M1|$Q_3 = 2 + \frac{8}{9} \times 3 = 4.667$`, R`(b)|A1|Both correct`, R`(b)|A1|IQR $3.76$ mm`, R`(c)|B1|A few very wet days stretch the range`, R`(c)|B1|The IQR isn't affected by them`],
  R`(a) $1.82$ mm (b) $3.76$ mm`,
  R`(b) $4.667 - 0.909 = 3.76$.`)
]};

CONTENT['A2.4'] = {
notes: R`
### Variance and standard deviation
$$\sigma^2 = \frac{\sum (x - \bar{x})^2}{n} = \frac{\sum x^2}{n} - \bar{x}^2 \qquad \sigma = \sqrt{\sigma^2}$$
For a frequency table, use $\frac{\sum fx^2}{\sum f} - \bar{x}^2$. The standard deviation is in the same units as the data.

Some textbooks write $S_{xx} = \sum x^2 - \frac{\left(\sum x\right)^2}{n}$, so $\sigma^2 = \frac{S_{xx}}{n}$.

::: booklet
**In the formula booklet:** $\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}} = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$, and the frequency versions.
:::

### Worked example 1
Find the standard deviation of $3, 5, 7, 9, 11$.
- $\bar{x} = 7$, $\sum x^2 = 285$, $\sigma^2 = \frac{285}{5} - 49 = 8$, $\sigma = 2.83$.

### Worked example 2: from a frequency table
$x = 1, 2, 3, 4$ with $f = 3, 5, 8, 4$.
1. $\sum f = 20$, $\sum fx = 53$, $\sum fx^2 = 159$.
2. $\bar{x} = 2.65$; $\sigma^2 = \frac{159}{20} - 2.65^2 = 0.9275$, so $\sigma = 0.963$.

**The trap:** using $\frac{\sum fx^2}{\sum f}$ without subtracting $\bar{x}^2$, or squaring $\sum fx$ instead of summing $fx^2$.

### Watch out
- Keep $\bar{x}$ unrounded when you square it.
`,
questions: [
Q('A2.4-1', 1, R`Find the variance of $2, 4, 6$. [[2]]`,
  [R`$\bar{x} = 4$, $\sum x^2 = 56$.`, R`$\frac{56}{3} - 16$.`],
  [R`|M1|$\frac{\sum x^2}{n} - \bar{x}^2$`, R`|A1|$\frac83$`], R`$\frac83$`,
  R`$\frac{56}{3} - 16 = \frac83 \approx 2.67$.`),
Q('A2.4-2', 1, R`A data set has variance $9$. Find the standard deviation. [[1]]`,
  [R`$\sigma = \sqrt{\sigma^2}$.`, R`$\sqrt9$.`],
  [R`|B1|$3$`], R`$3$`,
  R`The standard deviation is the square root of the variance.`),
Q('A2.4-3', 1, R`$n = 10$, $\sum x = 50$, $\sum x^2 = 290$. Find the mean and the standard deviation. [[2]]`,
  [R`$\bar{x} = 5$.`, R`$\sigma^2 = 29 - 25$.`],
  [R`|B1|$\bar{x} = 5$`, R`|B1|$\sigma = 2$`], R`$5$; $2$`,
  R`$\sigma^2 = \frac{290}{10} - 5^2 = 4$.`),
Q('A2.4-4', 2, R`Find the standard deviation of $3, 5, 7, 9, 11$. [[3]]`,
  [R`$\bar{x} = 7$, $\sum x^2 = 285$.`, R`$\sigma^2 = 57 - 49$.`],
  [R`|M1|$\sum x^2 = 285$`, R`|M1|$\sigma^2 = 8$`, R`|A1|$2.83$`], R`$2.83$`,
  R`$\bar{x} = 7$; $\sum (x - \bar{x})^2 = 16 + 4 + 0 + 4 + 16 = 40$; $\sigma = \sqrt{\frac{40}{5}} = \sqrt8 = 2.83$.`),
Q('A2.4-5', 2, R`$x = 1, 2, 3, 4$ with frequencies $3, 5, 8, 4$. Find the mean and standard deviation. [[3]]`,
  [R`$\sum fx = 53$, $\sum fx^2 = 159$.`, R`$\sigma^2 = \frac{159}{20} - 2.65^2$.`],
  [R`|B1|$\bar{x} = 2.65$`, R`|M1|$\frac{159}{20} - 2.65^2$`, R`|A1|$0.963$`], R`$2.65$; $0.963$`,
  R`$7.95 - 7.0225 = 0.9275$, $\sigma = 0.963$.`),
Q('A2.4-6', 2, R`$n = 10$, $\sum x = 120$, $\sum x^2 = 1580$. Find the standard deviation. [[2]]`,
  [R`$\bar{x} = 12$.`, R`$\sigma^2 = 158 - 144$.`],
  [R`|M1|$\sigma^2 = 14$`, R`|A1|$3.74$`], R`$3.74$`,
  R`$\bar{x} = 12$; $\sigma^2 = \frac{1580}{10} - 12^2 = 158 - 144 = 14$, so $\sigma = \sqrt{14} = 3.74$.`),
Q('A2.4-7', 2, R`Two data sets have the same mean. One has standard deviation $2$, the other $8$. Describe the difference. [[1]]`,
  [R`What does a larger SD mean?`, R`Spread about the mean.`],
  [R`|B1|The second is much more spread out about the mean`], R`The second is more spread out`,
  R`On average, values in the second set are further from the mean.`),
Q('A2.4-8', 3, R`Estimate the mean and standard deviation: $0 \le x < 10$: $4$; $10 \le x < 20$: $6$; $20 \le x < 30$: $10$. [[4]]`,
  [R`Midpoints $5, 15, 25$.`, R`$\sum fx = 360$, $\sum fx^2 = 7700$.`],
  [R`|B1|Midpoints`, R`|B1|$\bar{x} = 18$`, R`|M1|$\frac{7700}{20} - 18^2 = 61$`, R`|A1|$7.81$`], R`Mean $18$; SD $7.81$`,
  R`$\sigma = \sqrt{61} = 7.81$.`),
Q('A2.4-9', 3, R`$n = 5$, $\sum x = 40$, $\sum x^2 = 340$. Find $S_{xx}$, the variance and the standard deviation. [[3]]`,
  [R`$S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n}$.`, R`$340 - \frac{1600}{5}$.`],
  [R`|B1|$S_{xx} = 20$`, R`|B1|$\sigma^2 = 4$`, R`|B1|$\sigma = 2$`], R`$20$; $4$; $2$`,
  R`$\sigma^2 = \frac{S_{xx}}{n} = \frac{20}{5} = 4$.`),
Q('A2.4-10', 3, R`Four values have mean $10$ and standard deviation $2$. A fifth value of $10$ is added. Find the new standard deviation. [[4]]`,
  [R`$\sum x = 40$, $\sum x^2 = 4(4 + 100) = 416$.`, R`New: $\sum x = 50$, $\sum x^2 = 516$, $n = 5$.`],
  [R`|M1|$\sum x^2 = 416$`, R`|M1|New totals`, R`|M1|$\frac{516}{5} - 10^2$`, R`|A1|$1.79$`], R`$1.79$`,
  R`$103.2 - 100 = 3.2$, so $\sigma = 1.79$. Adding a value at the mean reduces the spread.`),
Q('A2.4-11', 3, R`Group $1$: $n = 5$, $\sum x = 30$, $\sum x^2 = 200$. Group $2$: $n = 5$, $\sum x = 45$, $\sum x^2 = 425$. Find the mean and standard deviation of the combined group. [[4]]`,
  [R`Add the totals.`, R`$n = 10$, $\sum x = 75$, $\sum x^2 = 625$.`],
  [R`|M1|Combined totals`, R`|A1|$\bar{x} = 7.5$`, R`|M1|$62.5 - 56.25$`, R`|A1|$\sigma = 2.5$`], R`$7.5$; $2.5$`,
  R`Combined: $n = 10$, $\sum x = 75$, $\sum x^2 = 625$. Mean $7.5$; $\sigma^2 = 62.5 - 56.25 = 6.25$, so $\sigma = 2.5$.`),
Q('A2.4-12', 4, R`The values $4, 6, 8, x$ have mean $7$. Find $x$ and the variance. [[3]]`,
  [R`$18 + x = 28$.`, R`$\sum x^2 = 16 + 36 + 64 + 100$.`],
  [R`|B1|$x = 10$`, R`|M1|$\frac{216}{4} - 49$`, R`|A1|$5$`], R`$x = 10$; variance $5$`,
  R`$4 + 6 + 8 + x = 28$, so $x = 10$. Squared deviations $9 + 1 + 1 + 9 = 20$, variance $\frac{20}{4} = 5$.`),
Q('A2.4-13', 4, R`For the data $2, 4, 4, 4, 5, 5, 7, 9$, the mean is $5$ and the standard deviation is $2$. How many values lie within one standard deviation of the mean? [[3]]`,
  [R`Between $3$ and $7$.`, R`Count them.`],
  [R`|B1|Interval $3$ to $7$`, R`|M1|Counts values`, R`|A1|$6$`], R`$6$`,
  R`$4, 4, 4, 5, 5, 7$ lie in $[3, 7]$.`),
Q('A2.4-14', 4, R`Explain why the standard deviation is often more useful than the variance for describing spread. [[2]]`,
  [R`Think about units.`, R`Variance has squared units.`],
  [R`|B1|The SD is in the same units as the data`, R`|B1|The variance is in squared units, which are harder to interpret`], R`Same units as the data`,
  R`E.g. for heights in cm, the variance is in cm² but the SD is in cm.`),
Q('A2.4-15', 5, R`$20$ values have $\sum x = 340$ and $\sum x^2 = 6100$.

**(a)** Find the mean and standard deviation. [[3]]

**(b)** One value of $17$ is removed. Find the new mean and standard deviation. [[4]]

**(c)** Explain why the standard deviation increased. [[1]]`,
  [R`$\bar{x} = 17$, $\sigma^2 = 305 - 289$.`, R`New: $n = 19$, $\sum x = 323$, $\sum x^2 = 5811$.`],
  [R`(a)|B1|$\bar{x} = 17$`, R`(a)|M1|$\sigma^2 = 16$`, R`(a)|A1|$\sigma = 4$`, R`(b)|B1|Mean still $17$`, R`(b)|M1|$\sum x^2 = 6100 - 289$`, R`(b)|M1|$\frac{5811}{19} - 289$`, R`(b)|A1|$\sigma = 4.10$`, R`(c)|B1|A value at the mean (zero deviation) was removed, so the average squared deviation went up`],
  R`(a) $17$, $4$ (b) $17$, $4.10$`,
  R`(b) $\frac{5811}{19} = 305.84$; $305.84 - 289 = 16.84$, $\sigma = 4.10$.`)
]};

CONTENT['A2.5'] = {
notes: R`
### Coding
Coding transforms data to make calculations easier. If $y = \dfrac{x - a}{b}$:
$$\bar{y} = \frac{\bar{x} - a}{b} \qquad \sigma_y = \frac{\sigma_x}{b}$$
- **Adding or subtracting** a constant shifts the mean but **doesn't change** the spread.
- **Multiplying or dividing** scales both the mean and the standard deviation.

::: booklet
**Not in the formula booklet:** coding rules.
:::

### Worked example 1
Data are coded with $y = \frac{x - 100}{10}$. For $10$ values, $\sum y = 25$ and $\sum y^2 = 105$. Find $\bar{x}$ and $\sigma_x$.
1. $\bar{y} = 2.5$, so $\bar{x} = 10(2.5) + 100 = 125$.
2. $\sigma_y^2 = 10.5 - 6.25 = 4.25$, $\sigma_y = 2.06$, so $\sigma_x = 10 \times 2.06 = 20.6$.

### Worked example 2: undo in the right order
If $y = 2x + 3$, $\bar{x} = 5$ and $\sigma_x = 1.5$, then $\bar{y} = 13$ and $\sigma_y = 3$.

**The trap:** adding the constant to the standard deviation ($\sigma_y = 2 \times 1.5 + 3$). Adding a constant moves the data but doesn't spread it out.

### Watch out
- To recover $x$ from $y$, rearrange: $x = by + a$.
`,
questions: [
Q('A2.5-1', 1, R`Data are coded with $y = x - 50$. Given $\bar{y} = 3$, find $\bar{x}$. [[1]]`,
  [R`$x = y + 50$.`, R`Means follow the same rule.`],
  [R`|B1|$53$`], R`$53$`,
  R`$\bar{x} = \bar{y} + 50 = 53$.`),
Q('A2.5-2', 1, R`Data are coded with $y = \frac{x}{10}$. Given $\sigma_y = 1.2$, find $\sigma_x$. [[1]]`,
  [R`$x = 10y$.`, R`Multiply the SD by $10$.`],
  [R`|B1|$12$`], R`$12$`,
  R`$\sigma_x = 10\sigma_y$.`),
Q('A2.5-3', 1, R`Data are coded with $y = \frac{x - 20}{5}$. Given $\bar{y} = 2.4$, find $\bar{x}$. [[1]]`,
  [R`$x = 5y + 20$.`, R`$5(2.4) + 20$.`],
  [R`|B1|$32$`], R`$32$`,
  R`$\bar{y} = \frac{\bar{x} - 20}{5}$, so $\bar{x} = 5 \times 2.4 + 20 = 32$.`),
Q('A2.5-4', 2, R`Data are coded with $y = \frac{x - 100}{10}$. For $10$ values, $\sum y = 25$ and $\sum y^2 = 105$. Find $\bar{x}$ and $\sigma_x$. [[4]]`,
  [R`$\bar{y} = 2.5$; $\sigma_y^2 = 10.5 - 6.25$.`, R`Then decode.`],
  [R`|B1|$\bar{y} = 2.5$`, R`|B1|$\bar{x} = 125$`, R`|M1|$\sigma_y = \sqrt{4.25}$`, R`|A1|$\sigma_x = 20.6$`], R`$125$; $20.6$`,
  R`$\sigma_y = 2.062$, so $\sigma_x = 20.6$.`),
Q('A2.5-5', 2, R`$y = 2x + 3$. Given $\bar{x} = 5$ and $\sigma_x = 1.5$, find $\bar{y}$ and $\sigma_y$. [[2]]`,
  [R`$\bar{y} = 2\bar{x} + 3$.`, R`$\sigma_y = 2\sigma_x$.`],
  [R`|B1|$13$`, R`|B1|$3$`], R`$13$; $3$`,
  R`The $+3$ affects the mean only.`),
Q('A2.5-6', 2, R`Temperatures have mean $15$ °C and standard deviation $4$ °C. Using $F = 1.8C + 32$, find the mean and standard deviation in °F. [[2]]`,
  [R`Mean: $1.8 \times 15 + 32$.`, R`SD: $1.8 \times 4$.`],
  [R`|B1|$59$ °F`, R`|B1|$7.2$ °F`], R`$59$; $7.2$`,
  R`The $+32$ doesn't change the spread.`),
Q('A2.5-7', 2, R`Explain why adding $10$ to every value doesn't change the standard deviation. [[1]]`,
  [R`What happens to each distance from the mean?`, R`The mean also goes up by $10$.`],
  [R`|B1|Every value and the mean shift by $10$, so the deviations from the mean are unchanged`], R`Deviations are unchanged`,
  R`The data move along without spreading out.`),
Q('A2.5-8', 3, R`Use the coding $y = x - 1000$ to find the mean and standard deviation of $1002, 1005, 1008, 1001, 1004$. [[4]]`,
  [R`Coded values $2, 5, 8, 1, 4$.`, R`$\sum y^2 = 110$.`],
  [R`|B1|$\bar{y} = 4$`, R`|B1|$\bar{x} = 1004$`, R`|M1|$\sigma_y^2 = 22 - 16 = 6$`, R`|A1|$\sigma_x = 2.45$`], R`$1004$; $2.45$`,
  R`$\sigma_x = \sigma_y = \sqrt6$.`),
Q('A2.5-9', 3, R`$y = \frac{x - 30}{2}$. For $12$ values, $\sum y = 48$ and $\sum y^2 = 300$. Find $\bar{x}$ and $\sigma_x$. [[4]]`,
  [R`$\bar{y} = 4$, $\sigma_y^2 = 25 - 16$.`, R`$x = 2y + 30$.`],
  [R`|B1|$\bar{y} = 4$`, R`|B1|$\bar{x} = 38$`, R`|M1|$\sigma_y = 3$`, R`|A1|$\sigma_x = 6$`], R`$38$; $6$`,
  R`$\sigma_x = 2\sigma_y = 6$.`),
Q('A2.5-10', 3, R`Masses $x$ grams are coded by $y = \frac{x - 200}{10}$. Explain what a coded value of $y = 3$ means, and find the original mass. [[2]]`,
  [R`$x = 10y + 200$.`, R`$30 + 200$.`],
  [R`|B1|$x = 10y + 200$`, R`|B1|$230$ g`], R`$230$ g`,
  R`$y = 3$ means $30$ g above $200$ g.`),
Q('A2.5-11', 3, R`Data have mean $50$ and standard deviation $8$. Find the coding $y = \frac{x - a}{b}$ that gives coded data with mean $0$ and standard deviation $1$. [[2]]`,
  [R`$\frac{50 - a}{b} = 0$.`, R`$\frac{8}{b} = 1$.`],
  [R`|B1|$a = 50$`, R`|B1|$b = 8$`], R`$y = \frac{x - 50}{8}$`,
  R`Subtract the mean, then divide by the SD.`),
Q('A2.5-12', 4, R`Times $t$ (seconds) are grouped and coded with $y = \frac{t - 45}{10}$, using class midpoints. The coded results are $\sum f = 40$, $\sum fy = 12$, $\sum fy^2 = 58$. Estimate the mean and standard deviation of $t$. [[4]]`,
  [R`$\bar{y} = 0.3$; $\sigma_y^2 = 1.45 - 0.09$.`, R`$t = 10y + 45$.`],
  [R`|B1|$\bar{y} = 0.3$`, R`|B1|$\bar{t} = 48$`, R`|M1|$\sigma_y = \sqrt{1.36}$`, R`|A1|$\sigma_t = 11.7$`], R`$48$ s; $11.7$ s`,
  R`$\sigma_y = 1.166$, so $\sigma_t = 11.7$.`),
Q('A2.5-13', 4, R`Data are coded with $y = \frac{x - a}{b}$, where $b > 0$. Given $\bar{y} = 3$, $\sigma_y = 2$, $\bar{x} = 41$ and $\sigma_x = 8$, find $a$ and $b$. [[3]]`,
  [R`$\sigma_x = b\sigma_y$.`, R`$\bar{x} = b\bar{y} + a$.`],
  [R`|M1|$8 = 2b$`, R`|A1|$b = 4$`, R`|A1|$a = 29$`], R`$a = 29$, $b = 4$`,
  R`$\sigma_y = \frac{\sigma_x}{b}$, so $2 = \frac{8}{b}$ and $b = 4$. Then $3 = \frac{41 - a}{4}$, so $a = 29$.`),
Q('A2.5-14', 4, R`For $25$ values, $\sum (x - 20) = 50$ and $\sum (x - 20)^2 = 300$. Find the mean and standard deviation of $x$. [[3]]`,
  [R`Let $y = x - 20$: $\bar{y} = 2$.`, R`$\sigma_y^2 = 12 - 4$.`],
  [R`|B1|$\bar{x} = 22$`, R`|M1|$\sigma_y^2 = 8$`, R`|A1|$2.83$`], R`$22$; $2.83$`,
  R`$\sigma_x = \sigma_y = \sqrt8$.`),
Q('A2.5-15', 5, R`Daily mean temperatures $x$ °C over $20$ days are coded with $y = 10x - 150$. The coded totals are $\sum y = 90$ and $\sum y^2 = 2410$.

**(a)** Find $\bar{y}$ and $\sigma_y$. [[3]]

**(b)** Hence find $\bar{x}$ and $\sigma_x$. [[3]]

**(c)** Convert your answers to (b) into °F using $F = 1.8x + 32$. [[2]]`,
  [R`$\bar{y} = 4.5$; $\sigma_y^2 = 120.5 - 20.25$.`, R`$x = \frac{y + 150}{10}$.`],
  [R`(a)|B1|$\bar{y} = 4.5$`, R`(a)|M1|$\sigma_y^2 = 100.25$`, R`(a)|A1|$\sigma_y = 10.01$`, R`(b)|M1|$x = \frac{y + 150}{10}$`, R`(b)|A1|$\bar{x} = 15.45$`, R`(b)|A1|$\sigma_x = 1.00$`, R`(c)|B1|Mean $59.8$ °F`, R`(c)|B1|SD $1.80$ °F`],
  R`(a) $4.5$, $10.0$ (b) $15.45$ °C, $1.00$ °C (c) $59.8$ °F, $1.80$ °F`,
  R`(b) $\bar{x} = \frac{4.5 + 150}{10} = 15.45$; $\sigma_x = \frac{10.01}{10} = 1.001$.

(c) $1.8 \times 15.45 + 32 = 59.81$; $1.8 \times 1.001 = 1.80$.`)
]};
