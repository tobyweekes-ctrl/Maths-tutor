/* Statistics and Mechanics Year 1 · Chapter 3 Representations of data (sections 3.1 to 3.5) */
BOOK_CHAPTERS.push({ id:'A03', book:'Statistics & Mechanics Year 1', label:'Chapter 3', title:'Representations of data', sections:[
  { id:'A3.1', num:'3.1', title:'Outliers' },
  { id:'A3.2', num:'3.2', title:'Box plots' },
  { id:'A3.3', num:'3.3', title:'Cumulative frequency' },
  { id:'A3.4', num:'3.4', title:'Histograms' },
  { id:'A3.5', num:'3.5', title:'Comparing data' }
]});
// A cumulative frequency polygon through the given points, as a function for Fig.graph.
const cfLine = pts => x => {
  if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
  for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) return pts[i - 1][1] + (x - pts[i - 1][0]) / (pts[i][0] - pts[i - 1][0]) * (pts[i][1] - pts[i - 1][1]);
  return NaN;
};
FIGS['A3.2-ex'] = Fig.boxplot({ label: 'Box plot of the 12 test marks: whiskers end at 15 and 28, with outliers at 4 and 41 drawn as crosses',
  boxes: [{ label: 'Marks', min: 15, q1: 17.5, med: 21.5, q3: 25.5, max: 28, outliers: [4, 41] }], x0: 0, x1: 45,
  ticks: [[0, '0'], [10, '10'], [20, '20'], [30, '30'], [40, '40']] });
FIGS['A3.3-ex'] = Fig.graph({ label: 'Cumulative frequency polygon for the journey times, with the median read off at a cumulative frequency of 20',
  x0: 0, x1: 42, y0: 0, y1: 42, xlab: 'time (min)', ylab: 'cf',
  xticks: [[10, '10'], [20, '20'], [30, '30'], [40, '40']], yticks: [[10, '10'], [20, '20'], [30, '30'], [40, '40']],
  fns: [{ f: cfLine([[0, 0], [10, 4], [20, 16], [30, 34], [40, 40]]) }],
  points: [{ x: 10, y: 4 }, { x: 20, y: 16 }, { x: 30, y: 34 }, { x: 40, y: 40 }],
  segs: [{ x1: 0, y1: 20, x2: 22.2, y2: 20, dash: true, col: 'var(--pen)' }, { x1: 22.2, y1: 20, x2: 22.2, y2: 0, dash: true, col: 'var(--pen)' }],
  texts: [{ x: 26, y: 5, label: 'median ≈ 22.2', col: 'var(--pen)' }] });
FIGS['A3.4-ex'] = Fig.histogram({ label: 'Histogram of the times: frequency densities 2, 5, 3 and 1 for the classes 0 to 5, 5 to 10, 10 to 20 and 20 to 40',
  bars: [{ lo: 0, hi: 5, fd: 2 }, { lo: 5, hi: 10, fd: 5 }, { lo: 10, hi: 20, fd: 3 }, { lo: 20, hi: 40, fd: 1 }],
  x0: 0, x1: 40, y1: 6, xticks: [[0, '0'], [5, '5'], [10, '10'], [20, '20'], [30, '30'], [40, '40']], yticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']], xlab: 'time (s)' });
const A3cf = Fig.graph({ label: 'Cumulative frequency polygon for 120 times through (0, 0), (10, 15), (20, 45), (30, 90), (40, 110) and (50, 120)',
  x0: 0, x1: 52, y0: 0, y1: 125, xlab: 'time (min)', ylab: 'cf',
  xticks: [[10, '10'], [20, '20'], [30, '30'], [40, '40'], [50, '50']], yticks: [[20, '20'], [40, '40'], [60, '60'], [80, '80'], [100, '100'], [120, '120']],
  fns: [{ f: cfLine([[0, 0], [10, 15], [20, 45], [30, 90], [40, 110], [50, 120]]) }],
  points: [{ x: 10, y: 15 }, { x: 20, y: 45 }, { x: 30, y: 90 }, { x: 40, y: 110 }, { x: 50, y: 120 }] });
const A3hist = Fig.histogram({ label: 'Histogram with frequency densities 1.2, 4, 5.6, 2 and 0.5 for the classes 0 to 10, 10 to 15, 15 to 20, 20 to 30 and 30 to 50',
  bars: [{ lo: 0, hi: 10, fd: 1.2 }, { lo: 10, hi: 15, fd: 4 }, { lo: 15, hi: 20, fd: 5.6 }, { lo: 20, hi: 30, fd: 2 }, { lo: 30, hi: 50, fd: 0.5 }],
  x0: 0, x1: 50, y1: 6, xticks: [[0, '0'], [10, '10'], [15, '15'], [20, '20'], [30, '30'], [50, '50']], yticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6']], xlab: 'length (cm)' });

CONTENT['A3.1'] = {
notes: R`
### What is an outlier?
An **outlier** is a value that is very different from the rest of the data. A question will always tell you which rule to use. The two common ones are:
- **Quartile rule:** an outlier is below $Q_1 - k(Q_3 - Q_1)$ or above $Q_3 + k(Q_3 - Q_1)$. Usually $k = 1.5$.
- **Standard deviation rule:** an outlier is more than $k$ standard deviations from the mean, so outside $\bar{x} \pm k\sigma$.

### Cleaning data
An outlier can be an **error** (a typing slip, a broken instrument) or a **genuine** extreme value. Only remove it if it can't be genuine. Removing values to tidy the data up is bad statistics.

::: booklet
**Learn these:** the two outlier rules above. The question gives you $k$, but you need to know how to use it.
:::

### Worked example 1
For a data set $Q_1 = 20$ and $Q_3 = 32$. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Is $55$ an outlier?
- $\text{IQR} = 12$, so $1.5 \times 12 = 18$.
- Limits: $20 - 18 = 2$ and $32 + 18 = 50$.
- $55 > 50$, so $55$ is an outlier.

### Worked example 2: variance, not standard deviation
A data set has mean $40$ and **variance** $36$. Outliers are more than $2$ standard deviations from the mean. Is $51$ an outlier?
- $\sigma = \sqrt{36} = 6$, so the limits are $40 \pm 12$: $28$ and $52$.
- $51$ is inside the limits, so it's **not** an outlier.

**The trap:** using $36$ as the standard deviation gives limits of $-32$ and $112$, and nothing would ever be an outlier.

### Watch out
- Check **both** ends: values below the lower limit are outliers too.
- Say what you'd do with the outlier and why, in context.
`,
questions: [
Q('A3.1-1', 1, R`For a set of data, $Q_1 = 15$ and $Q_3 = 23$. An outlier is more than $1.5 \times$ the interquartile range beyond the quartiles. Find the limits beyond which a value is an outlier. [[2]]`,
  [R`Find the IQR first.`, R`$1.5 \times 8 = 12$.`],
  [R`|M1|$\text{IQR} = 8$ and $1.5 \times 8 = 12$`, R`|A1|$3$ and $35$`], R`Below $3$ or above $35$`,
  R`$\text{IQR} = 23 - 15 = 8$, and $1.5 \times 8 = 12$. Lower limit $15 - 12 = 3$; upper limit $23 + 12 = 35$.`),
Q('A3.1-2', 1, R`A data set has mean $50$ and standard deviation $4$. An outlier is more than $3$ standard deviations from the mean. Is $63$ an outlier? [[2]]`,
  [R`$3\sigma = 12$.`, R`The limits are $50 \pm 12$.`],
  [R`|M1|$50 \pm 3 \times 4$`, R`|A1|Limits $38$ and $62$, so $63$ is an outlier`], R`Yes: the limits are $38$ and $62$`,
  R`$3 \times 4 = 12$, so the limits are $38$ and $62$. Since $63 > 62$, it is an outlier.`),
Q('A3.1-3', 1, R`Give one reason why an outlier might be removed from a data set, and one reason why it should be kept. [[2]]`,
  [R`Could the value be a mistake?`, R`Could the value be real?`],
  [R`|B1|Remove it if it's an error, e.g. recorded or typed incorrectly, or impossible in context`, R`|B1|Keep it if it's a genuine value: removing real data distorts the results`], R`Remove an error; keep a genuine extreme value`,
  R`An outlier caused by an error (a misread instrument, a typing slip, an impossible value) should be removed or corrected. A genuine extreme value is part of the data and removing it would bias the results.`),
Q('A3.1-4', 2, R`Here are $9$ values: $3, 7, 8, 9, 10, 11, 12, 14, 30$. An outlier is more than $1.5 \times \text{IQR}$ beyond the quartiles. Find any outliers. [[3]]`,
  [R`$\frac94 = 2.25$, so $Q_1$ is the $3$rd value.`, R`$\frac{27}{4} = 6.75$, so $Q_3$ is the $7$th value.`],
  [R`|M1|$Q_1 = 8$, $Q_3 = 12$`, R`|M1|Limits $8 - 6 = 2$ and $12 + 6 = 18$`, R`|A1|$30$ is the only outlier`], R`$30$`,
  R`$Q_1 = 8$, $Q_3 = 12$, so $\text{IQR} = 4$ and $1.5 \times 4 = 6$. The limits are $2$ and $18$. Only $30$ lies outside them.`),
Q('A3.1-5', 2, R`For some data, $Q_1 = 42$ and $Q_3 = 58$. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Which of $15, 20, 85, 90$ are outliers? [[3]]`,
  [R`$\text{IQR} = 16$.`, R`$1.5 \times 16 = 24$.`],
  [R`|M1|$1.5 \times 16 = 24$`, R`|A1|Limits $18$ and $82$`, R`|A1|$15$, $85$ and $90$`], R`$15$, $85$ and $90$`,
  R`$1.5 \times 16 = 24$, so the limits are $42 - 24 = 18$ and $58 + 24 = 82$. $15 < 18$, while $85$ and $90$ are above $82$. $20$ is not an outlier.`),
Q('A3.1-6', 2, R`A data set has mean $12.4$ and variance $6.25$. An outlier is more than $2$ standard deviations from the mean. Which of $7, 8, 17, 18$ are outliers? [[3]]`,
  [R`Square root the variance.`, R`$\sigma = 2.5$, so the limits are $12.4 \pm 5$.`],
  [R`|M1|$\sigma = \sqrt{6.25} = 2.5$`, R`|M1|Limits $7.4$ and $17.4$`, R`|A1|$7$ and $18$`], R`$7$ and $18$`,
  R`$\sigma = 2.5$, so the limits are $12.4 - 5 = 7.4$ and $12.4 + 5 = 17.4$. $7 < 7.4$ and $18 > 17.4$ are outliers; $8$ and $17$ are not.`),
Q('A3.1-7', 2, R`The heights, in metres, of some adult women are recorded as $1.62, 1.58, 16.4, 1.71, 1.66$. Explain how the data should be cleaned. [[2]]`,
  [R`Is every value possible?`, R`Where might a decimal point have gone?`],
  [R`|B1|$16.4$ m is impossible for a human height, so it's an error`, R`|B1|Remove it (or correct it, probably to $1.64$ m) before analysing`], R`$16.4$ is an error: remove or correct it`,
  R`No adult is $16.4$ m tall, so it must be a recording error (most likely $1.64$ with the decimal point in the wrong place). Remove it, or correct it if the true value is known, before working out any statistics.`),
Q('A3.1-8', 3, R`Ten values have $\sum x = 300$ and $\sum x^2 = 9300$. An outlier is more than $2$ standard deviations from the mean. Decide whether $18$ and $40$ are outliers. [[4]]`,
  [R`$\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2$.`, R`$\sigma = \sqrt{30}$.`],
  [R`|M1|$\bar{x} = 30$`, R`|M1|$\sigma^2 = 930 - 900 = 30$, $\sigma = 5.48$`, R`|M1|Limits $30 \pm 2(5.48)$: $19.0$ and $41.0$`, R`|A1|$18$ is an outlier; $40$ is not`], R`$18$ is an outlier; $40$ is not`,
  R`$\bar{x} = 30$, $\sigma^2 = \frac{9300}{10} - 30^2 = 30$, so $\sigma = 5.477$. The limits are $30 \pm 10.95$, which is $19.05$ and $40.95$. $18 < 19.05$, so it is an outlier; $40$ lies inside the limits.`),
Q('A3.1-9', 3, R`For a data set $Q_3 = 26$, and the upper outlier limit, using $Q_3 + 1.5 \times \text{IQR}$, is $41$. Find $Q_1$ and the lower outlier limit. [[3]]`,
  [R`$1.5 \times \text{IQR} = 41 - 26$.`, R`So $\text{IQR} = 10$.`],
  [R`|M1|$26 + 1.5(26 - Q_1) = 41$`, R`|A1|$Q_1 = 16$`, R`|A1|Lower limit $16 - 15 = 1$`], R`$Q_1 = 16$, lower limit $1$`,
  R`$1.5 \times \text{IQR} = 15$, so $\text{IQR} = 10$ and $Q_1 = 26 - 10 = 16$. The lower limit is $16 - 15 = 1$.`),
Q('A3.1-10', 3, R`Eight values have mean $20$. One of them, $48$, is an error and is removed. **(a)** Find the mean of the remaining values. **(b)** State the effect on the standard deviation. [[3]]`,
  [R`The total of all eight is $160$.`, R`$48$ is far from the mean, so think about spread.`],
  [R`(a)|M1|$\frac{160 - 48}{7}$`, R`(a)|A1|$16$`, R`(b)|B1|It decreases, since $48$ was far from the other values`], R`(a) $16$ (b) it decreases`,
  R`**(a)** The total is $8 \times 20 = 160$, so the remaining total is $112$ and the mean is $\frac{112}{7} = 16$.
**(b)** $48$ was a long way from the rest, so removing it reduces the spread: the standard deviation decreases.`),
Q('A3.1-11', 3, R`Here are $11$ values: $5, 12, 14, 15, 16, 18, 19, 21, 22, 40, 60$. An outlier is more than $1.5 \times \text{IQR}$ beyond the quartiles. Find any outliers. [[4]]`,
  [R`$\frac{11}{4} = 2.75$, so $Q_1$ is the $3$rd value.`, R`$\frac{33}{4} = 8.25$, so $Q_3$ is the $9$th value.`],
  [R`|M1|Using positions $3$ and $9$`, R`|A1|$Q_1 = 14$, $Q_3 = 22$`, R`|M1|Limits $14 - 12 = 2$ and $22 + 12 = 34$`, R`|A1|$40$ and $60$`], R`$40$ and $60$`,
  R`$Q_1 = 14$ and $Q_3 = 22$, so $\text{IQR} = 8$ and $1.5 \times 8 = 12$. The limits are $2$ and $34$. $40$ and $60$ are outliers; $5$ is not.`),
Q('A3.1-12', 4, R`Twelve values have $\sum x = 480$ and $\sum x^2 = 19\,600$. The value $58$ is found to be an error and is removed. Find the mean and standard deviation of the remaining $11$ values. [[5]]`,
  [R`Take $58$ off $\sum x$ and $58^2$ off $\sum x^2$.`, R`New $\sum x = 422$, new $\sum x^2 = 16\,236$.`],
  [R`|M1|$\sum x = 480 - 58 = 422$`, R`|M1|$\sum x^2 = 19\,600 - 3364 = 16\,236$`, R`|A1|$\bar{x} = 38.4$`, R`|M1|$\sigma^2 = \frac{16\,236}{11} - 38.36^2$`, R`|A1|$\sigma = 2.06$`], R`Mean $38.4$, sd $2.06$`,
  R`New $\sum x = 422$ and $\sum x^2 = 16\,236$. Mean $= \frac{422}{11} = 38.36$. Variance $= \frac{16\,236}{11} - 38.36^2 = 1476 - 1471.77 = 4.23$, so $\sigma = 2.06$.`),
Q('A3.1-13', 4, R`For a data set $Q_1 = 30$ and $Q_3 = 45$. An outlier is a value below $Q_1 - k \times \text{IQR}$ or above $Q_3 + k \times \text{IQR}$. The value $75$ is an outlier but the value $10$ is not. Find the range of possible values of $k$. [[4]]`,
  [R`$\text{IQR} = 15$.`, R`Write one inequality for each value.`],
  [R`|M1|$45 + 15k < 75$`, R`|A1|$k < 2$`, R`|M1|$30 - 15k \le 10$`, R`|A1|$\frac43 \le k < 2$`], R`$\frac43 \le k < 2$`,
  R`$75$ is an outlier: $45 + 15k < 75$, so $k < 2$. $10$ is not: $30 - 15k \le 10$, so $k \ge \frac43$. Together, $\frac43 \le k < 2$.`),
Q('A3.1-14', 4, R`The table shows $60$ values: $0 \le x < 20$: $10$; $20 \le x < 30$: $15$; $30 \le x < 40$: $20$; $40 \le x < 60$: $15$. The largest value is $95$. Use interpolation to estimate the quartiles, and decide whether $95$ is an outlier, using $1.5 \times \text{IQR}$ beyond the quartiles. [[4]]`,
  [R`Cumulative frequencies are $10, 25, 45, 60$.`, R`$Q_1$ is at position $15$ and $Q_3$ at position $45$.`],
  [R`|M1|$Q_1 = 20 + \frac{5}{15} \times 10$`, R`|A1|$Q_1 = 23.3$`, R`|M1|$Q_3 = 40$ and upper limit $40 + 1.5(16.7)$`, R`|A1|Limit $65$, so $95$ is an outlier`], R`$Q_1 = 23.3$, $Q_3 = 40$; $95 > 65$, so it is an outlier`,
  R`$Q_1$ is at position $15$: $20 + \frac{5}{15} \times 10 = 23.3$. $Q_3$ is at position $45$, the end of the $30$ to $40$ class, so $Q_3 = 40$. $\text{IQR} = 16.7$ and the upper limit is $40 + 1.5 \times 16.7 = 65$. $95 > 65$, so it is an outlier.`),
Q('A3.1-15', 5, R`Twenty values have mean $15$ and standard deviation $3$. An outlier is more than $2$ standard deviations from the mean. **(a)** Show that the value $27$ is an outlier. It is found that $27$ was recorded in error and should have been $17$. **(b)** Find the corrected mean and standard deviation. [[6]]`,
  [R`$\sum x^2 = n(\sigma^2 + \bar{x}^2)$.`, R`Swap $27$ for $17$ in both sums.`],
  [R`(a)|B1|Limits $9$ and $21$; $27 > 21$`, R`(b)|M1|$\sum x = 300$, $\sum x^2 = 20(9 + 225) = 4680$`, R`(b)|M1|New sums $290$ and $4680 - 729 + 289 = 4240$`, R`(b)|A1|Mean $14.5$`, R`(b)|M1|$\sigma^2 = \frac{4240}{20} - 14.5^2$`, R`(b)|A1|$\sigma = 1.32$`], R`(b) Mean $14.5$, sd $1.32$`,
  R`**(a)** The limits are $15 \pm 6$, which is $9$ and $21$. $27 > 21$, so it is an outlier.
**(b)** $\sum x = 300$ and $\sum x^2 = 20(3^2 + 15^2) = 4680$. Correcting: $\sum x = 290$ and $\sum x^2 = 4680 - 27^2 + 17^2 = 4240$. Mean $= 14.5$; variance $= 212 - 210.25 = 1.75$, so $\sigma = 1.32$.`)
]};

CONTENT['A3.2'] = {
notes: R`
### Drawing a box plot
A box plot shows five values: the lowest value, $Q_1$, the median, $Q_3$ and the highest value.
- The **box** runs from $Q_1$ to $Q_3$, with a line at the median.
- The **whiskers** go out to the lowest and highest values that are **not** outliers.
- Outliers are marked with a cross.

[[fig:A3.2-ex]]

### Reading a box plot
- $25\%$ of the data lies in each section: below $Q_1$, $Q_1$ to median, median to $Q_3$, above $Q_3$.
- The width of the box is the interquartile range.

::: booklet
**Learn these:** a box plot shows the five-number summary, and $50\%$ of the data lies inside the box.
:::

### Worked example 1
Draw a box plot for $4, 15, 17, 18, 20, 21, 22, 23, 25, 26, 28, 41$, marking outliers more than $1.5 \times \text{IQR}$ beyond the quartiles.
- $n = 12$: $Q_1$ is halfway between the $3$rd and $4$th values, $17.5$. The median is $21.5$ and $Q_3 = 25.5$.
- $\text{IQR} = 8$, so the limits are $17.5 - 12 = 5.5$ and $25.5 + 12 = 37.5$.
- $4$ and $41$ are outliers. The whiskers end at $15$ and $28$. This is the box plot above.

### Worked example 2: where the whisker stops
In the same example, the upper whisker ends at $28$, the largest value that is not an outlier.

**The trap:** drawing the whisker to $37.5$, the outlier limit. No data value is $37.5$, so the whisker must not go there.

### Watch out
- Draw box plots on a scale, and label the axis.
- When you compare box plots, compare a measure of location (the median) and a measure of spread (the IQR), in context.
`,
questions: [
Q('A3.2-1', 1, R`The box plot shows some test marks. Find the median and the interquartile range. [[2]]`,
  [R`The line in the box is the median.`, R`$\text{IQR}$ is the width of the box.`],
  [R`|B1|Median $24$`, R`|B1|$\text{IQR} = 30 - 18 = 12$`], R`Median $24$, IQR $12$`,
  R`The median is the line inside the box, $24$. The box runs from $18$ to $30$, so $\text{IQR} = 12$.`,
  { fig: Fig.boxplot({ label: 'Box plot of marks: lowest 10, lower quartile 18, median 24, upper quartile 30, highest 42', boxes: [{ label: 'Marks', min: 10, q1: 18, med: 24, q3: 30, max: 42 }], x0: 0, x1: 50, ticks: [[0, '0'], [10, '10'], [20, '20'], [30, '30'], [40, '40'], [50, '50']] }) }),
Q('A3.2-2', 1, R`A box plot has lowest value $5$, $Q_1 = 12$, median $15$, $Q_3 = 20$ and highest value $28$, with no outliers. Find the range and the interquartile range. [[2]]`,
  [R`Range: highest minus lowest.`, R`IQR: $Q_3 - Q_1$.`],
  [R`|B1|Range $23$`, R`|B1|IQR $8$`], R`Range $23$, IQR $8$`,
  R`Range $= 28 - 5 = 23$; $\text{IQR} = 20 - 12 = 8$.`),
Q('A3.2-3', 1, R`What does a cross drawn beyond the whisker of a box plot represent? [[1]]`,
  [R`It's a special kind of value.`, R`Think about section 3.1.`],
  [R`|B1|An outlier`], R`An outlier`,
  R`A cross marks an outlier: a value outside the outlier limits, which the whisker doesn't reach.`),
Q('A3.2-4', 2, R`Find the five-number summary of $2, 5, 6, 8, 9, 11, 12, 14, 15, 17, 20$ and show there are no outliers, using $1.5 \times \text{IQR}$ beyond the quartiles. [[3]]`,
  [R`$n = 11$: $Q_1$ is the $3$rd value and $Q_3$ the $9$th.`, R`The median is the $6$th value.`],
  [R`|M1|$Q_1 = 6$, median $11$, $Q_3 = 15$`, R`|A1|Lowest $2$, highest $20$`, R`|B1|Limits $-7.5$ and $28.5$, so no outliers`], R`$2, 6, 11, 15, 20$; no outliers`,
  R`Five-number summary: $2, 6, 11, 15, 20$. $\text{IQR} = 9$, so the limits are $6 - 13.5 = -7.5$ and $15 + 13.5 = 28.5$. Every value lies inside, so there are no outliers.`,
  { solFig: Fig.boxplot({ label: 'Box plot from 2 to 20 with box from 6 to 15 and median 11', boxes: [{ label: 'Data', min: 2, q1: 6, med: 11, q3: 15, max: 20 }], x0: 0, x1: 25, ticks: [[0, '0'], [5, '5'], [10, '10'], [15, '15'], [20, '20'], [25, '25']] }) }),
Q('A3.2-5', 2, R`A data set has $Q_1 = 20$ and $Q_3 = 30$. Its two largest values are $38$ and $52$. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Explain where the upper whisker should end. [[2]]`,
  [R`Work out the upper limit.`, R`It's $30 + 15 = 45$.`],
  [R`|B1|Upper limit $45$, so $52$ is an outlier`, R`|B1|The whisker ends at $38$, the largest value that isn't an outlier`], R`At $38$, with a cross at $52$`,
  R`The upper limit is $30 + 1.5 \times 10 = 45$. $52$ is an outlier and is drawn as a cross. The whisker ends at $38$, the largest value that is not an outlier.`),
Q('A3.2-6', 2, R`The box plots show the times, in seconds, taken by boys and girls to complete a puzzle. Compare the two distributions. [[4]]`,
  [R`Compare the medians.`, R`Compare the IQRs.`],
  [R`|B1|Girls' median $54$ is higher than boys' $50$`, R`|B1|So on average girls took longer`, R`|B1|Girls' IQR $12$ is smaller than boys' $16$`, R`|B1|So girls' times were more consistent`], R`Girls took longer on average (median $54$ v $50$) and were more consistent (IQR $12$ v $16$)`,
  R`The girls' median ($54$ s) is higher than the boys' ($50$ s), so on average the girls took longer. The girls' IQR is $60 - 48 = 12$ s and the boys' is $58 - 42 = 16$ s, so the girls' times were less spread out, that is, more consistent.`,
  { fig: Fig.boxplot({ label: 'Two box plots. Boys: 30, 42, 50, 58, 70. Girls: 35, 48, 54, 60, 72', boxes: [{ label: 'Boys', min: 30, q1: 42, med: 50, q3: 58, max: 70 }, { label: 'Girls', min: 35, q1: 48, med: 54, q3: 60, max: 72 }], x0: 20, x1: 80, ticks: [[20, '20'], [30, '30'], [40, '40'], [50, '50'], [60, '60'], [70, '70'], [80, '80']], xlab: 'time (s)' }) }),
Q('A3.2-7', 2, R`The box plot in question 1 shows the marks of $80$ students. Estimate how many students scored more than $18$, and how many scored more than $24$. [[2]]`,
  [R`$18$ is $Q_1$.`, R`$24$ is the median.`],
  [R`|B1|$75\%$ of $80 = 60$`, R`|B1|$50\%$ of $80 = 40$`], R`$60$ and $40$`,
  R`$18$ is the lower quartile, so about $75\%$ of $80$, which is $60$ students, scored more. $24$ is the median, so about $40$ scored more.`),
Q('A3.2-8', 3, R`For a data set, $Q_1 = 34$, median $40$ and $Q_3 = 46$. The three smallest values are $12, 17, 20$ and the three largest are $63, 66, 71$. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Find the outliers and state where each whisker ends. [[4]]`,
  [R`$1.5 \times 12 = 18$.`, R`The limits are $16$ and $64$.`],
  [R`|M1|Limits $34 - 18 = 16$ and $46 + 18 = 64$`, R`|A1|Outliers $12$, $66$, $71$`, R`|B1|Lower whisker ends at $17$`, R`|B1|Upper whisker ends at $63$`], R`Outliers $12, 66, 71$; whiskers end at $17$ and $63$`,
  R`$\text{IQR} = 12$, so the limits are $16$ and $64$. Outliers: $12$, $66$ and $71$. The whiskers end at the most extreme values that are not outliers: $17$ and $63$.`,
  { solFig: Fig.boxplot({ label: 'Box plot with whiskers from 17 to 63, box 34 to 46, median 40, crosses at 12, 66 and 71', boxes: [{ label: 'Data', min: 17, q1: 34, med: 40, q3: 46, max: 63, outliers: [12, 66, 71] }], x0: 0, x1: 80, ticks: [[0, '0'], [20, '20'], [40, '40'], [60, '60'], [80, '80']] }) }),
Q('A3.2-9', 3, R`In race $A$, $120$ runners had $Q_1 = 25$ min, median $29$ min and $Q_3 = 34$ min. In race $B$ the median time was $25$ min. Estimate how many runners in race $A$ were faster than the median runner in race $B$. Explain your answer. [[2]]`,
  [R`Faster means less time.`, R`$25$ is race $A$'s lower quartile.`],
  [R`|M1|$25$ min is $Q_1$ for race $A$, so $25\%$ were faster`, R`|A1|About $30$ runners`], R`About $30$`,
  R`Race $B$'s median, $25$ min, equals race $A$'s lower quartile. About a quarter of race $A$'s runners took less time: $\frac14 \times 120 = 30$.`),
Q('A3.2-10', 3, R`Twelve test marks are $4, 15, 17, 18, 20, 21, 22, 23, 25, 26, 28, 41$. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Find the quartiles and the outliers, and state where the whiskers end. [[5]]`,
  [R`$n = 12$, so the quartile positions $3$, $6$ and $9$ are whole numbers: average with the next value.`, R`$Q_1 = \frac{17 + 18}{2}$.`],
  [R`|M1|Averaging the $3$rd/$4$th, $6$th/$7$th, $9$th/$10$th values`, R`|A1|$17.5$, $21.5$, $25.5$`, R`|M1|Limits $5.5$ and $37.5$`, R`|A1|Outliers $4$ and $41$`, R`|B1|Whiskers end at $15$ and $28$`], R`$Q_1 = 17.5$, median $21.5$, $Q_3 = 25.5$; outliers $4$ and $41$; whiskers $15$ to $28$`,
  R`$Q_1 = 17.5$, median $= 21.5$, $Q_3 = 25.5$. $\text{IQR} = 8$, so the limits are $17.5 - 12 = 5.5$ and $25.5 + 12 = 37.5$. Outliers are $4$ and $41$, so the whiskers end at $15$ and $28$.`,
  { solFig: FIGS['A3.2-ex'] }),
Q('A3.2-11', 3, R`A box plot shows $Q_1 = 25$, $Q_3 = 40$, an upper whisker ending at $60$ and a single outlier at $70$. Outliers were defined as more than $1.5 \times \text{IQR}$ above $Q_3$. Show that the diagram is consistent with this rule. [[3]]`,
  [R`Find the upper limit.`, R`$40 + 22.5$.`],
  [R`|M1|$1.5 \times 15 = 22.5$`, R`|A1|Upper limit $62.5$`, R`|A1|$60 < 62.5 < 70$, so $60$ isn't an outlier and $70$ is`], R`Upper limit $62.5$: $60$ is inside it, $70$ is beyond it`,
  R`$\text{IQR} = 15$, so the upper limit is $40 + 22.5 = 62.5$. $60$ is below the limit, so the whisker can end there, and $70$ is above it, so it is correctly drawn as an outlier.`),
Q('A3.2-12', 4, R`The box plots show test scores for two classes. Class $A$ has an outlier at $20$; its lower whisker ends at $38$. **(a)** Find the IQR of each class. **(b)** Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Would a score of $36$ in class $A$ have been an outlier? **(c)** Compare the two classes. [[5]]`,
  [R`Read the quartiles from each box.`, R`Class $A$'s lower limit is $50 - 27$.`],
  [R`(a)|B1|$A$: $18$, $B$: $17$`, R`(b)|M1|$50 - 1.5 \times 18 = 23$`, R`(b)|A1|$36 > 23$, so not an outlier`, R`(c)|B1|$B$'s median $62$ is higher than $A$'s $60$, so $B$ did better on average`, R`(c)|B1|IQRs are similar ($18$ v $17$), so the spreads are similar`], R`(a) $18$, $17$ (b) no (c) $B$ higher on average; similar spread`,
  R`**(a)** Class $A$: $68 - 50 = 18$. Class $B$: $72 - 55 = 17$.
**(b)** The lower limit for class $A$ is $50 - 27 = 23$. $36 > 23$, so it would not be an outlier.
**(c)** Class $B$'s median ($62$) is higher than class $A$'s ($60$), so class $B$ scored higher on average. The IQRs are almost the same, so the spread of the middle half of scores is similar.`,
  { fig: Fig.boxplot({ label: 'Class A: outlier 20, whiskers 38 to 85, box 50 to 68, median 60. Class B: 45, 55, 62, 72, 90', boxes: [{ label: 'Class A', min: 38, q1: 50, med: 60, q3: 68, max: 85, outliers: [20] }, { label: 'Class B', min: 45, q1: 55, med: 62, q3: 72, max: 90 }], x0: 10, x1: 100, ticks: [[10, '10'], [30, '30'], [50, '50'], [70, '70'], [90, '90']], xlab: 'score' }) }),
Q('A3.2-13', 4, R`For a data set $Q_1 = 3x$ and $Q_3 = 5x$. The upper outlier limit, $Q_3 + 1.5 \times \text{IQR}$, is $56$. Find $x$, the quartiles and the lower outlier limit. [[3]]`,
  [R`$\text{IQR} = 2x$.`, R`$5x + 3x = 56$.`],
  [R`|M1|$5x + 1.5(2x) = 56$`, R`|A1|$x = 7$: $Q_1 = 21$, $Q_3 = 35$`, R`|A1|Lower limit $21 - 21 = 0$`], R`$x = 7$, $Q_1 = 21$, $Q_3 = 35$, lower limit $0$`,
  R`$5x + 3x = 8x = 56$, so $x = 7$. $Q_1 = 21$, $Q_3 = 35$, $\text{IQR} = 14$, and the lower limit is $21 - 21 = 0$.`),
Q('A3.2-14', 4, R`The table summarises $80$ values: $0 \le x < 10$: $8$; $10 \le x < 20$: $22$; $20 \le x < 30$: $30$; $30 \le x < 60$: $20$. The smallest value is $2$ and the largest is $58$. **(a)** Use interpolation to estimate the median and quartiles. **(b)** Decide whether $58$ is an outlier, using $1.5 \times \text{IQR}$ above $Q_3$. [[5]]`,
  [R`Cumulative frequencies $8, 30, 60, 80$.`, R`Positions $20$, $40$ and $60$.`],
  [R`(a)|M1|$Q_1 = 10 + \frac{12}{22} \times 10$`, R`(a)|A1|$Q_1 = 15.5$`, R`(a)|A1|Median $23.3$, $Q_3 = 30$`, R`(b)|M1|$30 + 1.5 \times 14.5$`, R`(b)|A1|Limit $51.8$, so $58$ is an outlier`], R`(a) $15.5$, $23.3$, $30$ (b) yes, limit $51.8$`,
  R`**(a)** $Q_1$ (position $20$): $10 + \frac{12}{22} \times 10 = 15.5$. Median (position $40$): $20 + \frac{10}{30} \times 10 = 23.3$. $Q_3$ (position $60$) is the end of the $20$ to $30$ class, so $Q_3 = 30$.
**(b)** $\text{IQR} = 14.5$, so the limit is $30 + 21.8 = 51.8$. $58 > 51.8$, so $58$ is an outlier.`),
Q('A3.2-15', 5, R`The box plot shows journey times, in minutes. The same data have mean $25.4$ and standard deviation $6.2$. **(a)** Use the rule "more than $2$ standard deviations from the mean" to decide whether the longest time is an outlier. **(b)** Decide using the rule "more than $1.5 \times \text{IQR}$ beyond the quartiles" instead. **(c)** Explain why the median may be a better average than the mean here. [[6]]`,
  [R`Read the quartiles and the longest time from the plot.`, R`$25.4 + 12.4$.`],
  [R`(a)|M1|$25.4 + 2 \times 6.2$`, R`(a)|A1|$37.8$, and $41 > 37.8$, so it is an outlier`, R`(b)|M1|$28 + 1.5 \times 7$`, R`(b)|A1|$38.5$, and $41 > 38.5$, so it is an outlier`, R`(c)|B1|The outlier pulls the mean up`, R`(c)|B1|The median isn't affected by extreme values`], R`(a) yes, limit $37.8$ (b) yes, limit $38.5$ (c) the median isn't affected by the outlier`,
  R`**(a)** The upper limit is $25.4 + 12.4 = 37.8$. The longest time, $41$, is above it, so it is an outlier.
**(b)** $\text{IQR} = 28 - 21 = 7$, so the limit is $28 + 10.5 = 38.5$. $41 > 38.5$, so it is again an outlier.
**(c)** The outlier at $41$ pulls the mean upwards. The median is not affected by extreme values, so it better represents a typical journey.`,
  { fig: Fig.boxplot({ label: 'Box plot of journey times: 14, 21, 24, 28, 41', boxes: [{ label: 'Time', min: 14, q1: 21, med: 24, q3: 28, max: 41 }], x0: 10, x1: 45, ticks: [[10, '10'], [20, '20'], [30, '30'], [40, '40']], xlab: 'time (min)' }) })
]};

CONTENT['A3.3'] = {
notes: R`
### Cumulative frequency
The **cumulative frequency** is a running total of the frequencies. To draw a cumulative frequency diagram:
- plot each running total against the **upper class boundary**
- start at the lower boundary of the first class, with cumulative frequency $0$
- join the points with straight lines or a smooth curve.

### Estimating from the graph
For $n$ values, read across at:
- $\frac{n}{2}$ for the median
- $\frac{n}{4}$ and $\frac{3n}{4}$ for the quartiles
- $\frac{p}{100}n$ for the $p$th percentile.

If the points are joined with straight lines, this is exactly the same as linear interpolation.

::: booklet
**Learn these:** plot at upper class boundaries, and read at $\frac{n}{4}$, $\frac{n}{2}$, $\frac{3n}{4}$ for grouped data.
:::

### Worked example 1
Journey times: $0 < t \le 10$: $4$; $10 < t \le 20$: $12$; $20 < t \le 30$: $18$; $30 < t \le 40$: $6$.
- Cumulative frequencies: $4, 16, 34, 40$. Plot $(10, 4)$, $(20, 16)$, $(30, 34)$, $(40, 40)$, starting from $(0, 0)$.
- Median at $20$: $20 + \frac{4}{18} \times 10 = 22.2$ min.
- $Q_1$ at $10$: $10 + \frac{6}{12} \times 10 = 15$. $Q_3$ at $30$: $20 + \frac{14}{18} \times 10 = 27.8$.

[[fig:A3.3-ex]]

### Worked example 2: "more than"
Estimate how many journeys took **more than** $25$ min.
- Cumulative frequency at $25$: $16 + \frac{5}{10} \times 18 = 25$.
- So $40 - 25 = 15$ journeys took more than $25$ minutes.

**The trap:** giving $25$. The graph tells you how many are **less than** a value; subtract from the total for "more than".

### Watch out
- Never plot at the midpoints. That's for frequency polygons.
- Your answers are **estimates**, because the data are grouped.
`,
questions: [
Q('A3.3-1', 1, R`The frequencies of five classes are $5, 9, 14, 8, 4$. Write down the cumulative frequencies. [[1]]`,
  [R`Keep a running total.`, R`$5$, then $5 + 9$, ...`],
  [R`|B1|$5, 14, 28, 36, 40$`], R`$5, 14, 28, 36, 40$`,
  R`Running totals: $5$, $5 + 9 = 14$, $14 + 14 = 28$, $28 + 8 = 36$, $36 + 4 = 40$.`),
Q('A3.3-2', 1, R`The class $20 < t \le 30$ has cumulative frequency $28$. State the point you'd plot on a cumulative frequency diagram for this class. [[1]]`,
  [R`Use the upper class boundary.`, R`$t = 30$.`],
  [R`|B1|$(30, 28)$`], R`$(30, 28)$`,
  R`Cumulative frequency is plotted against the upper class boundary, so the point is $(30, 28)$.`),
Q('A3.3-3', 1, R`A cumulative frequency diagram shows $80$ values. At what cumulative frequencies would you read off the lower quartile, the median and the upper quartile? [[1]]`,
  [R`Use $\frac{n}{4}$, $\frac{n}{2}$, $\frac{3n}{4}$.`, R`$n = 80$.`],
  [R`|B1|$20$, $40$, $60$`], R`$20$, $40$, $60$`,
  R`$\frac{80}{4} = 20$, $\frac{80}{2} = 40$ and $\frac{3 \times 80}{4} = 60$.`),
Q('A3.3-4', 2, R`The masses, $m$ g, of $60$ apples are: $0 < m \le 20$: $6$; $20 < m \le 40$: $14$; $40 < m \le 60$: $24$; $60 < m \le 80$: $16$. Estimate the median. [[2]]`,
  [R`Cumulative frequencies $6, 20, 44, 60$.`, R`The median is the $30$th value, in the $40$ to $60$ class.`],
  [R`|M1|$40 + \frac{10}{24} \times 20$`, R`|A1|$48.3$ g`], R`$48.3$ g`,
  R`The $30$th value lies in the $40$ to $60$ class, $10$ values in: $40 + \frac{10}{24} \times 20 = 48.3$ g.`),
Q('A3.3-5', 2, R`For the apples in question 4, estimate the interquartile range. [[3]]`,
  [R`$Q_1$ is at position $15$; $Q_3$ at position $45$.`, R`$Q_3$ is $1$ value into the last class.`],
  [R`|M1|$Q_1 = 20 + \frac{9}{14} \times 20 = 32.9$`, R`|M1|$Q_3 = 60 + \frac{1}{16} \times 20 = 61.25$`, R`|A1|$\text{IQR} = 28.4$ g`], R`$28.4$ g`,
  R`$Q_1 = 20 + \frac{9}{14} \times 20 = 32.86$. $Q_3 = 60 + \frac{1}{16} \times 20 = 61.25$. $\text{IQR} = 28.4$ g.`),
Q('A3.3-6', 2, R`For the apples in question 4, estimate how many have a mass of more than $50$ g. [[2]]`,
  [R`Find the cumulative frequency at $50$ first.`, R`$50$ is halfway through the $40$ to $60$ class.`],
  [R`|M1|cf at $50$: $20 + \frac12 \times 24 = 32$`, R`|A1|$60 - 32 = 28$`], R`$28$`,
  R`$50$ is halfway through the $40$ to $60$ class, so about $12$ of its $24$ apples are below $50$ g. The cumulative frequency at $50$ is $32$, so about $60 - 32 = 28$ apples are heavier.`),
Q('A3.3-7', 2, R`The cumulative frequency polygon shows the times taken by $120$ people to complete a task. Estimate the median. [[2]]`,
  [R`Read across at $60$.`, R`$60$ lies between the points $(20, 45)$ and $(30, 90)$.`],
  [R`|M1|$20 + \frac{15}{45} \times 10$`, R`|A1|$23.3$ min`], R`$23.3$ min`,
  R`The median is at a cumulative frequency of $60$, between $(20, 45)$ and $(30, 90)$: $20 + \frac{15}{45} \times 10 = 23.3$ min.`,
  { fig: A3cf }),
Q('A3.3-8', 3, R`Using the polygon in question 7, estimate the $10$th to $90$th percentile range. [[3]]`,
  [R`The $10$th percentile is at $12$; the $90$th at $108$.`, R`$12$ lies in the first section; $108$ between $(30, 90)$ and $(40, 110)$.`],
  [R`|M1|$P_{10} = \frac{12}{15} \times 10 = 8$`, R`|M1|$P_{90} = 30 + \frac{18}{20} \times 10 = 39$`, R`|A1|$31$ min`], R`$31$ min`,
  R`$P_{10}$ at $12$: $0 + \frac{12}{15} \times 10 = 8$. $P_{90}$ at $108$: $30 + \frac{18}{20} \times 10 = 39$. The range is $39 - 8 = 31$ min.`,
  { fig: A3cf }),
Q('A3.3-9', 3, R`Using the polygon in question 7, the slowest $20\%$ of people are given extra training. Estimate the time above which a person is given extra training. [[2]]`,
  [R`The slowest $20\%$ are above the $80$th percentile.`, R`$0.8 \times 120 = 96$.`],
  [R`|M1|Reading at $96$: $30 + \frac{6}{20} \times 10$`, R`|A1|$33$ min`], R`$33$ min`,
  R`The slowest $20\%$ are above the $80$th percentile, at a cumulative frequency of $96$, between $(30, 90)$ and $(40, 110)$: $30 + \frac{6}{20} \times 10 = 33$ min.`,
  { fig: A3cf }),
Q('A3.3-10', 3, R`For the apples in question 4, estimate how many have a mass between $30$ g and $70$ g. [[3]]`,
  [R`Find the cumulative frequency at $30$ and at $70$.`, R`Subtract.`],
  [R`|M1|cf at $30$: $6 + \frac12 \times 14 = 13$`, R`|M1|cf at $70$: $44 + \frac12 \times 16 = 52$`, R`|A1|$39$`], R`$39$`,
  R`At $30$: $6 + 7 = 13$. At $70$: $44 + 8 = 52$. So about $52 - 13 = 39$ apples.`),
Q('A3.3-11', 3, R`The polygon in question 7 has quickest time $2$ min and slowest $49$ min. Estimate the quartiles, and describe the box plot. [[3]]`,
  [R`$Q_1$ at $30$, $Q_3$ at $90$.`, R`$(30, 90)$ is one of the plotted points.`],
  [R`|M1|$Q_1 = 10 + \frac{15}{30} \times 10 = 15$`, R`|A1|$Q_3 = 30$`, R`|B1|Box plot: $2$, $15$, $23.3$, $30$, $49$`], R`$Q_1 = 15$, $Q_3 = 30$; box plot $2, 15, 23.3, 30, 49$`,
  R`$Q_1$ at $30$: $10 + \frac{15}{30} \times 10 = 15$. $Q_3$ at $90$: the point $(30, 90)$ gives $Q_3 = 30$. With median $23.3$, the box plot shows $2, 15, 23.3, 30, 49$.`,
  { fig: A3cf, solFig: Fig.boxplot({ label: 'Box plot 2, 15, 23.3, 30, 49', boxes: [{ label: 'Time', min: 2, q1: 15, med: 23.3, q3: 30, max: 49 }], x0: 0, x1: 50, ticks: [[0, '0'], [10, '10'], [20, '20'], [30, '30'], [40, '40'], [50, '50']], xlab: 'time (min)' }) }),
Q('A3.3-12', 4, R`Values are grouped: $0 \le x < 10$: $8$; $10 \le x < 20$: $12$; $20 \le x < 30$: $f$; $30 \le x < 40$: $6$. Using interpolation, the median is $21.5$. Find $f$. [[4]]`,
  [R`$n = 26 + f$, so the median is at $\frac{26 + f}{2}$.`, R`$21.5$ is $0.15$ of the way through the $20$ to $30$ class.`],
  [R`|M1|cf at $21.5$ is $20 + 0.15f$`, R`|M1|$20 + 0.15f = \frac{26 + f}{2}$`, R`|M1|$0.35f = 7$`, R`|A1|$f = 20$`], R`$f = 20$`,
  R`The median position is $\frac{26 + f}{2} = 13 + 0.5f$. Interpolating, $21.5$ corresponds to $20 + \frac{1.5}{10}f = 20 + 0.15f$. So $20 + 0.15f = 13 + 0.5f$, giving $0.35f = 7$ and $f = 20$.`),
Q('A3.3-13', 4, R`For the apples in question 4, the heaviest apple is $79$ g. Outliers are more than $1.5 \times \text{IQR}$ beyond the quartiles. Decide whether the heaviest apple is an outlier. [[4]]`,
  [R`Use $Q_1 = 32.9$ and $Q_3 = 61.25$ from question 5.`, R`$1.5 \times 28.4$.`],
  [R`|M1|$Q_1 = 32.9$, $Q_3 = 61.25$`, R`|M1|$61.25 + 1.5 \times 28.4$`, R`|A1|Limit $103.8$`, R`|A1|$79 < 103.8$, so not an outlier`], R`No: the upper limit is about $104$`,
  R`$Q_1 = 32.86$ and $Q_3 = 61.25$, so $\text{IQR} = 28.39$. The upper limit is $61.25 + 42.59 = 103.8$. $79 < 103.8$, so it is not an outlier.`),
Q('A3.3-14', 4, R`The quiz scores of $60$ people are: $10$–$14$: $12$; $15$–$19$: $18$; $20$–$29$: $24$; $30$–$49$: $6$. Scores are whole numbers. Estimate the median and the quartiles. [[4]]`,
  [R`Use class boundaries: $9.5$, $14.5$, $19.5$, $29.5$, $49.5$.`, R`Cumulative frequencies $12, 30, 54, 60$.`],
  [R`|M1|Using boundaries $9.5, 14.5, 19.5, 29.5$`, R`|A1|$Q_1 = 14.5 + \frac{3}{18} \times 5 = 15.3$`, R`|A1|Median $= 19.5$`, R`|A1|$Q_3 = 19.5 + \frac{15}{24} \times 10 = 25.75$`], R`$Q_1 = 15.3$, median $19.5$, $Q_3 = 25.75$`,
  R`The classes run $9.5$–$14.5$, $14.5$–$19.5$, $19.5$–$29.5$, $29.5$–$49.5$. $Q_1$ (position $15$): $14.5 + \frac{3}{18} \times 5 = 15.3$. Median (position $30$) is the end of the second class, $19.5$. $Q_3$ (position $45$): $19.5 + \frac{15}{24} \times 10 = 25.75$.`),
Q('A3.3-15', 5, R`For the apples in question 4: **(a)** estimate the median **(b)** estimate the mean **(c)** estimate how many apples are heavier than $65$ g. [[6]]`,
  [R`Use midpoints $10, 30, 50, 70$ for the mean.`, R`For (c), find the cumulative frequency at $65$.`],
  [R`(a)|M1|$40 + \frac{10}{24} \times 20$`, R`(a)|A1|$48.3$ g`, R`(b)|M1|$\frac{60 + 420 + 1200 + 1120}{60}$`, R`(b)|A1|$46.7$ g`, R`(c)|M1|cf at $65$: $44 + \frac14 \times 16 = 48$`, R`(c)|A1|$12$`], R`(a) $48.3$ g (b) $46.7$ g (c) $12$`,
  R`**(a)** $40 + \frac{10}{24} \times 20 = 48.3$ g.
**(b)** $\sum fx = 6(10) + 14(30) + 24(50) + 16(70) = 2800$, so $\bar{x} = \frac{2800}{60} = 46.7$ g.
**(c)** $65$ is a quarter of the way through the last class: cf $= 44 + 4 = 48$, so about $60 - 48 = 12$ apples.`)
]};

CONTENT['A3.4'] = {
notes: R`
### Histograms
Histograms show **continuous** grouped data. The **area** of each bar is proportional to the frequency:
$$\text{frequency density} = \frac{\text{frequency}}{\text{class width}}$$
so a bar's height is its frequency density, and $\text{frequency} = \text{frequency density} \times \text{class width}$.

If the scale isn't $1$ unit of area per value, find the constant $k$ from one bar: $\text{frequency} = k \times \text{area}$.

[[fig:A3.4-ex]]

### Frequency polygons
Join the **midpoints** of the tops of the bars with straight lines.

::: booklet
**Learn this:** $\text{frequency density} = \frac{\text{frequency}}{\text{class width}}$.
:::

### Worked example 1
Times: $0$–$5$: $10$; $5$–$10$: $25$; $10$–$20$: $30$; $20$–$40$: $20$.
- Frequency densities: $\frac{10}{5} = 2$, $\frac{25}{5} = 5$, $\frac{30}{10} = 3$, $\frac{20}{20} = 1$. This is the histogram above.
- Estimate the number between $15$ and $30$: $\frac{5}{10} \times 30 + \frac{10}{20} \times 20 = 15 + 10 = 25$.

### Worked example 2: area, not height
On a histogram, the bar for $10$–$20$ is $2$ cm wide and $6$ cm tall and represents $24$ people. How many people does a bar of area $9$ cm² represent?
- $12$ cm² represents $24$ people, so $1$ cm² represents $2$ people.
- $9$ cm² represents $18$ people.

**The trap:** saying "height $6$ means $24$ people, so each cm of height is $4$ people". Height means nothing on its own when the widths differ.

### Watch out
- Use the class boundaries: for whole-number data $5$–$9$, the boundaries are $4.5$ and $9.5$.
- The tallest bar has the highest frequency **density**, not necessarily the highest frequency.
`,
questions: [
Q('A3.4-1', 1, R`The class $10 \le x < 15$ has frequency $20$. Find its frequency density. [[1]]`,
  [R`Divide by the class width.`, R`Width $5$.`],
  [R`|B1|$4$`], R`$4$`,
  R`The class width is $15 - 10 = 5$, so the frequency density is $\frac{20}{5} = 4$.`),
Q('A3.4-2', 1, R`On a histogram, the class $20 \le x < 40$ has frequency density $1.5$. Find its frequency. [[1]]`,
  [R`Frequency $=$ density $\times$ width.`, R`Width $20$.`],
  [R`|B1|$30$`], R`$30$`,
  R`The class width is $20$, so the frequency is $1.5 \times 20 = 30$.`),
Q('A3.4-3', 1, R`Lengths are recorded to the nearest centimetre. State the class boundaries and class width for the class $5$–$9$ cm. [[1]]`,
  [R`A length of $9.4$ cm would be recorded as $9$.`, R`Go half a unit either side.`],
  [R`|B1|$4.5$ and $9.5$; width $5$`], R`$4.5$ to $9.5$, width $5$`,
  R`Values recorded to the nearest whole number have boundaries half a unit beyond the stated limits: $4.5$ and $9.5$, so the width is $5$. (Ages are different: someone aged $9$ can be up to almost $10$, so ages $5$–$9$ have boundaries $5$ and $10$.)`),
Q('A3.4-4', 2, R`Times, in seconds: $0 \le t < 5$: $10$; $5 \le t < 10$: $25$; $10 \le t < 20$: $30$; $20 \le t < 40$: $20$. Find the frequency density for each class. [[2]]`,
  [R`Widths $5, 5, 10, 20$.`, R`Divide each frequency by its width.`],
  [R`|M1|Frequency $\div$ class width`, R`|A1|$2, 5, 3, 1$`], R`$2, 5, 3, 1$`,
  R`$\frac{10}{5} = 2$, $\frac{25}{5} = 5$, $\frac{30}{10} = 3$, $\frac{20}{20} = 1$.`,
  { solFig: FIGS['A3.4-ex'] }),
Q('A3.4-5', 2, R`The histogram shows the lengths of some fish. Find the frequency of each class and the total number of fish. [[2]]`,
  [R`Frequency $=$ density $\times$ width.`, R`The widths are $10, 5, 5, 10, 20$.`],
  [R`|M1|Density $\times$ width: $12, 20, 28, 20, 10$`, R`|A1|Total $90$`], R`$12, 20, 28, 20, 10$; total $90$`,
  R`$1.2 \times 10 = 12$, $4 \times 5 = 20$, $5.6 \times 5 = 28$, $2 \times 10 = 20$, $0.5 \times 20 = 10$. Total $90$.`,
  { fig: A3hist }),
Q('A3.4-6', 2, R`Using the histogram in question 5, estimate the number of fish with lengths between $12$ cm and $25$ cm. [[2]]`,
  [R`Take $\frac35$ of the $10$–$15$ class.`, R`And half of the $20$–$30$ class.`],
  [R`|M1|$\frac35 \times 20 + 28 + \frac12 \times 20$`, R`|A1|$50$`], R`$50$`,
  R`$12$ to $15$: $3 \times 4 = 12$. $15$ to $20$: $28$. $20$ to $25$: $5 \times 2 = 10$. Total $50$.`,
  { fig: A3hist }),
Q('A3.4-7', 2, R`A frequency polygon is drawn on the histogram in question 4. Write down the coordinates of the points that are joined. [[2]]`,
  [R`Use the midpoints of the classes.`, R`The heights are the frequency densities.`],
  [R`|B1|$x$-values $2.5, 7.5, 15, 30$`, R`|B1|$(2.5, 2), (7.5, 5), (15, 3), (30, 1)$`], R`$(2.5, 2), (7.5, 5), (15, 3), (30, 1)$`,
  R`The polygon joins the midpoints of the tops of the bars: $(2.5, 2)$, $(7.5, 5)$, $(15, 3)$, $(30, 1)$.`),
Q('A3.4-8', 3, R`On a histogram, the bar for $10 \le x < 20$ is $2$ cm wide and $6$ cm tall, and represents $24$ people. The class $20 \le x < 25$ has $18$ people. Find the width and height of its bar. [[3]]`,
  [R`$10$ units of $x$ take $2$ cm.`, R`$12$ cm² represents $24$ people.`],
  [R`|B1|Width $1$ cm`, R`|M1|$1$ cm² represents $2$ people, so $18$ people need $9$ cm²`, R`|A1|Height $9$ cm`], R`$1$ cm wide, $9$ cm tall`,
  R`$10$ units is $2$ cm, so $5$ units is $1$ cm. The first bar has area $12$ cm² for $24$ people, so $1$ cm² is $2$ people. $18$ people need $9$ cm², and with width $1$ cm the height is $9$ cm.`),
Q('A3.4-9', 3, R`Using the histogram in question 5, estimate the median length. [[2]]`,
  [R`The median is the $45$th value.`, R`Cumulative frequencies $12, 32, 60, \dots$`],
  [R`|M1|$15 + \frac{13}{28} \times 5$`, R`|A1|$17.3$ cm`], R`$17.3$ cm`,
  R`The $45$th value is in the $15$–$20$ class, $13$ values in: $15 + \frac{13}{28} \times 5 = 17.3$ cm.`,
  { fig: A3hist }),
Q('A3.4-10', 3, R`Using the histogram in question 5, estimate the mean and standard deviation of the lengths. [[4]]`,
  [R`Midpoints $5, 12.5, 17.5, 25, 40$.`, R`$\sum fx = 1700$ and $\sum fx^2 = 40\,500$.`],
  [R`|M1|$\sum fx = 1700$`, R`|A1|$\bar{x} = 18.9$ cm`, R`|M1|$\sigma^2 = \frac{40\,500}{90} - 18.89^2$`, R`|A1|$\sigma = 9.65$ cm`], R`Mean $18.9$ cm, sd $9.65$ cm`,
  R`$\sum fx = 12(5) + 20(12.5) + 28(17.5) + 20(25) + 10(40) = 1700$, so $\bar{x} = 18.9$. $\sum fx^2 = 300 + 3125 + 8575 + 12\,500 + 16\,000 = 40\,500$, so $\sigma^2 = 450 - 356.8 = 93.2$ and $\sigma = 9.65$ cm.`,
  { fig: A3hist }),
Q('A3.4-11', 3, R`On a histogram, the bar for $0 \le x < 10$ has height $3$ units and represents a frequency of $15$. The bar for $10 \le x < 25$ has height $4$ units. Find the frequency it represents. [[3]]`,
  [R`Compare areas, not heights.`, R`Area $30$ represents $15$.`],
  [R`|M1|First area $30$ represents $15$, so frequency $= \frac12 \times \text{area}$`, R`|M1|Second area $15 \times 4 = 60$`, R`|A1|$30$`], R`$30$`,
  R`The first bar has area $10 \times 3 = 30$ for a frequency of $15$, so frequency $= \frac12 \times$ area. The second bar has area $60$, so it represents $30$.`),
Q('A3.4-12', 4, R`$60$ values are grouped: $0$–$10$: $8$; $10$–$20$: $x$; $20$–$40$: $16$; $40$–$50$: $y$. On the histogram, the bar for $10$–$20$ has frequency density $1.8$. **(a)** Find $x$ and $y$. **(b)** Estimate the number of values greater than $35$. [[4]]`,
  [R`$x = 1.8 \times 10$.`, R`For (b), take a quarter of the $20$–$40$ class.`],
  [R`(a)|B1|$x = 18$`, R`(a)|B1|$y = 60 - 42 = 18$`, R`(b)|M1|$\frac{5}{20} \times 16 + 18$`, R`(b)|A1|$22$`], R`(a) $x = 18$, $y = 18$ (b) $22$`,
  R`**(a)** $x = 1.8 \times 10 = 18$ and $y = 60 - 8 - 18 - 16 = 18$.
**(b)** $35$ to $40$ is a quarter of the $20$–$40$ class: $4$ values. Add the $18$ in the last class: $22$.`),
Q('A3.4-13', 4, R`Using the histogram in question 5, estimate the interquartile range of the lengths. [[4]]`,
  [R`$Q_1$ at position $22.5$; $Q_3$ at $67.5$.`, R`Cumulative frequencies $12, 32, 60, 80, 90$.`],
  [R`|M1|$Q_1 = 10 + \frac{10.5}{20} \times 5$`, R`|A1|$12.625$`, R`|M1|$Q_3 = 20 + \frac{7.5}{20} \times 10 = 23.75$`, R`|A1|$\text{IQR} = 11.1$ cm`], R`$11.1$ cm`,
  R`$Q_1 = 10 + \frac{10.5}{20} \times 5 = 12.625$. $Q_3 = 20 + \frac{7.5}{20} \times 10 = 23.75$. $\text{IQR} = 11.1$ cm.`,
  { fig: A3hist }),
Q('A3.4-14', 4, R`A histogram has frequency densities: $0$–$4$: $3$; $4$–$6$: $9$; $6$–$10$: $5$; $10$–$20$: $0.8$. **(a)** Find the total frequency. **(b)** Estimate how many values are less than $7$. **(c)** Estimate the median. [[5]]`,
  [R`Frequencies $12, 18, 20, 8$.`, R`The median is at position $29$.`],
  [R`(a)|B1|$58$`, R`(b)|M1|$12 + 18 + 1 \times 5$`, R`(b)|A1|$35$`, R`(c)|M1|$4 + \frac{17}{18} \times 2$`, R`(c)|A1|$5.89$`], R`(a) $58$ (b) $35$ (c) $5.89$`,
  R`**(a)** Frequencies $12, 18, 20, 8$: total $58$.
**(b)** $12 + 18 + (7 - 6) \times 5 = 35$.
**(c)** The $29$th value is in the $4$–$6$ class, $17$ values in: $4 + \frac{17}{18} \times 2 = 5.89$.`),
Q('A3.4-15', 5, R`On a histogram, $1$ cm across represents $5$ units of $x$. The bars are: $0$–$10$: height $2$ cm; $10$–$15$: $6$ cm; $15$–$25$: $4$ cm; $25$–$40$: $1$ cm. The total frequency is $105$. **(a)** Find the frequency of each class. **(b)** Estimate the mean. **(c)** Estimate the median. [[7]]`,
  [R`Bar widths are $2, 1, 2, 3$ cm, so the areas are $4, 6, 8, 3$ cm².`, R`$21$ cm² represents $105$ values.`],
  [R`(a)|M1|Areas $4, 6, 8, 3$`, R`(a)|M1|$1$ cm² represents $5$ values`, R`(a)|A1|$20, 30, 40, 15$`, R`(b)|M1|$\frac{20(5) + 30(12.5) + 40(20) + 15(32.5)}{105}$`, R`(b)|A1|$16.8$`, R`(c)|M1|$15 + \frac{2.5}{40} \times 10$`, R`(c)|A1|$15.6$`], R`(a) $20, 30, 40, 15$ (b) $16.8$ (c) $15.6$`,
  R`**(a)** The widths are $2, 1, 2, 3$ cm, so the areas are $4, 6, 8, 3$: $21$ cm² in total for $105$ values, so $1$ cm² is $5$ values. Frequencies $20, 30, 40, 15$.
**(b)** $\sum fx = 100 + 375 + 800 + 487.5 = 1762.5$, so the mean is $\frac{1762.5}{105} = 16.8$.
**(c)** The median is at position $52.5$, in the $15$–$25$ class, $2.5$ values in: $15 + \frac{2.5}{40} \times 10 = 15.6$.`)
]};

CONTENT['A3.5'] = {
notes: R`
### How to compare
Compare **one measure of location** and **one measure of spread**, and say what each means **in context**.
- Use the **median and IQR** when there are outliers or the data are uneven: they aren't affected by extreme values.
- Use the **mean and standard deviation** when the data are fairly even with no outliers: they use every value.
- Don't use the range to compare spread if there might be outliers.

::: booklet
**Learn this:** a full comparison has two statements, one about the average and one about the spread, each in context.
:::

### Worked example 1
Group $A$: mean $62$, sd $8$. Group $B$: mean $58$, sd $12$ (test marks).
- Group $A$ has the higher mean, so on average group $A$ scored higher.
- Group $A$ has the smaller standard deviation, so its marks were more consistent.

### Worked example 2: saying too much
Route $X$ has median journey $24$ min; route $Y$ has median $28$ min. A student writes: "Every journey on route $X$ is quicker than on route $Y$."

**The trap:** a median compares typical values only. Many journeys on route $X$ could still be slower than some on route $Y$. Write: "On average, journeys on route $X$ are quicker."

### Watch out
- Always quote the values you're comparing.
- "More consistent" means smaller spread.
`,
questions: [
Q('A3.5-1', 1, R`A data set has some extreme values. Which measures of location and spread should be used to compare it with another data set? [[1]]`,
  [R`Which measures aren't affected by extreme values?`, R`Think about quartiles.`],
  [R`|B1|Median and interquartile range`], R`Median and IQR`,
  R`The median and interquartile range, because they are not affected by extreme values.`),
Q('A3.5-2', 1, R`Machine $A$ fills bags with mean $24$ g and standard deviation $3$ g; machine $B$ has mean $24$ g and standard deviation $6$ g. Which machine is more consistent? [[1]]`,
  [R`Consistent means small spread.`, R`Compare the standard deviations.`],
  [R`|B1|$A$, because its standard deviation is smaller`], R`Machine $A$`,
  R`Machine $A$: its standard deviation is smaller, so its masses vary less.`),
Q('A3.5-3', 1, R`Town $A$ has a median daily rainfall of $3.2$ mm and town $B$ has $4.1$ mm. Make one comparison in context. [[1]]`,
  [R`Which median is larger?`, R`Say what that means for rain.`],
  [R`|B1|On average town $B$ had more rain per day`], R`Town $B$ is wetter on average`,
  R`Town $B$ has the higher median, so on average town $B$ had more rainfall per day.`),
Q('A3.5-4', 2, R`Group $A$'s test marks have mean $62$ and standard deviation $8$. Group $B$'s have mean $58$ and standard deviation $12$. Compare the two groups. [[2]]`,
  [R`Compare the means.`, R`Compare the standard deviations.`],
  [R`|B1|$A$ scored higher on average (mean $62 > 58$)`, R`|B1|$A$'s marks were more consistent (sd $8 < 12$)`], R`$A$ scored higher on average and more consistently`,
  R`Group $A$ had the higher mean ($62$ v $58$), so on average scored higher. Group $A$ had the smaller standard deviation ($8$ v $12$), so its marks were more consistent.`),
Q('A3.5-5', 2, R`Data set $A$ is $5, 7, 8, 9, 11$ and data set $B$ is $2, 6, 8, 10, 14$. Find the mean and standard deviation of each, and compare them. [[4]]`,
  [R`Both totals are $40$.`, R`$\sum x^2$ is $340$ for $A$ and $400$ for $B$.`],
  [R`|M1|Both means $8$`, R`|A1|sd $A = 2$, sd $B = 4$`, R`|B1|Same average`, R`|B1|$B$ is more spread out`], R`Both means $8$; sd $2$ and $4$: same average, $B$ more spread out`,
  R`Both means are $\frac{40}{5} = 8$. $A$: $\sigma^2 = \frac{340}{5} - 64 = 4$, so $\sigma = 2$. $B$: $\sigma^2 = \frac{400}{5} - 64 = 16$, so $\sigma = 4$. The averages are the same, but $B$ is twice as spread out.`),
Q('A3.5-6', 2, R`Bulbs from factory $X$ have median lifetime $520$ hours and IQR $60$ hours. Bulbs from factory $Y$ have median $495$ hours and IQR $30$ hours. Compare the bulbs. [[2]]`,
  [R`Compare medians.`, R`Compare IQRs.`],
  [R`|B1|$X$'s bulbs last longer on average (median $520 > 495$)`, R`|B1|$Y$'s lifetimes are more consistent (IQR $30 < 60$)`], R`$X$ lasts longer on average; $Y$ is more consistent`,
  R`Factory $X$ has the higher median, so its bulbs last longer on average. Factory $Y$ has the smaller IQR, so its lifetimes are more consistent.`),
Q('A3.5-7', 2, R`For $10$ plants grown in soil $A$, the heights $x$ cm give $\sum x = 150$ and $\sum x^2 = 2340$. Plants in soil $B$ have mean $17$ cm and standard deviation $2$ cm. Compare the heights. [[3]]`,
  [R`$\bar{x} = 15$.`, R`$\sigma^2 = 234 - 225$.`],
  [R`|M1|Mean $15$, $\sigma^2 = 234 - 225 = 9$`, R`|A1|sd $3$`, R`|B1|Soil $B$ plants taller on average and more consistent`], R`$A$: mean $15$, sd $3$; $B$ taller on average and less varied`,
  R`For soil $A$: $\bar{x} = 15$ cm and $\sigma^2 = 234 - 225 = 9$, so $\sigma = 3$ cm. Soil $B$'s plants are taller on average ($17 > 15$) and their heights vary less ($2 < 3$).`),
Q('A3.5-8', 3, R`Seven salaries, in £000s, are $18, 20, 21, 22, 24, 25, 90$. **(a)** Find the mean and the median. **(b)** Explain which better represents a typical salary. [[3]]`,
  [R`The total is $220$.`, R`The median is the $4$th value.`],
  [R`(a)|B1|Mean $31.4$ (£$31\,400$)`, R`(a)|B1|Median $22$ (£$22\,000$)`, R`(b)|B1|The median: the mean is pulled up by the extreme value $90$`], R`(a) mean £$31\,400$, median £$22\,000$ (b) the median`,
  R`**(a)** Mean $= \frac{220}{7} = 31.4$, so £$31\,400$. Median $= 22$, so £$22\,000$.
**(b)** The median. Six of the seven salaries are below the mean, which is pulled up by the extreme value of £$90\,000$.`),
Q('A3.5-9', 3, R`For $20$ cyclists in group $A$, times $x$ minutes are coded with $y = x - 100$, giving $\sum y = 60$ and $\sum y^2 = 1000$. Group $B$ has mean $101$ min and standard deviation $8$ min. Compare the groups. [[4]]`,
  [R`$\bar{y} = 3$, so $\bar{x} = 103$.`, R`Subtracting $100$ doesn't change the standard deviation.`],
  [R`|M1|$\bar{y} = 3$, $\sigma_y^2 = 50 - 9 = 41$`, R`|A1|$\bar{x} = 103$, $\sigma_x = 6.40$`, R`|B1|Group $B$ faster on average ($101 < 103$)`, R`|B1|Group $A$ more consistent ($6.40 < 8$)`], R`$A$: mean $103$, sd $6.40$; $B$ quicker on average, $A$ more consistent`,
  R`$\bar{y} = 3$ and $\sigma_y^2 = \frac{1000}{20} - 9 = 41$, so $\sigma_y = 6.40$. Then $\bar{x} = 103$ min and $\sigma_x = 6.40$ min. Group $B$ was quicker on average, but group $A$'s times were more consistent.`),
Q('A3.5-10', 3, R`$40$ times from group $P$ are: $0$–$10$: $5$; $10$–$20$: $15$; $20$–$30$: $20$. Group $Q$ has median $18$ and IQR $15$. Estimate the median and IQR of group $P$ and compare the two groups. [[4]]`,
  [R`Positions $10$, $20$, $30$.`, R`Cumulative frequencies $5, 20, 40$.`],
  [R`|M1|Median $= 20$ (end of the second class)`, R`|A1|$Q_1 = 13.3$, $Q_3 = 25$, IQR $11.7$`, R`|B1|$P$ has the higher median, so longer times on average`, R`|B1|$P$ has the smaller IQR, so more consistent`], R`$P$: median $20$, IQR $11.7$; $P$ longer on average and more consistent`,
  R`Median (position $20$) is the end of the second class: $20$. $Q_1 = 10 + \frac{5}{15} \times 10 = 13.3$; $Q_3 = 20 + \frac{10}{20} \times 10 = 25$; $\text{IQR} = 11.7$. Group $P$ has a higher median ($20$ v $18$) and a smaller IQR ($11.7$ v $15$): longer times on average but more consistent.`),
Q('A3.5-11', 3, R`Class $A$'s marks have range $60$ and IQR $10$. Class $B$'s have range $40$ and IQR $18$. A student says "Class $A$'s marks are more spread out, because their range is bigger." Comment on this. [[2]]`,
  [R`What can make a range large?`, R`Look at the IQRs.`],
  [R`|B1|The range is affected by extreme values / outliers`, R`|B1|The IQR shows class $A$'s middle $50\%$ is less spread out than class $B$'s`], R`Not valid: the range is affected by outliers; by IQR, $A$ is less spread out`,
  R`The range depends only on the two most extreme marks, so one outlier can make it large. The IQR, which ignores extreme values, shows class $A$'s middle half of marks ($10$) is less spread out than class $B$'s ($18$).`),
Q('A3.5-12', 4, R`The number of complaints per day at shop $A$ over $30$ days was: $0$: $6$ days; $1$: $10$; $2$: $8$; $3$: $4$; $4$: $2$. Shop $B$ had mean $2.1$ and standard deviation $0.9$. Find the mean and standard deviation for shop $A$, and compare the shops. [[5]]`,
  [R`$\sum fx = 46$.`, R`$\sum fx^2 = 110$.`],
  [R`|M1|$\sum fx = 46$, mean $1.53$`, R`|M1|$\sigma^2 = \frac{110}{30} - 1.533^2$`, R`|A1|sd $1.15$`, R`|B1|Shop $A$ had fewer complaints on average`, R`|B1|Shop $A$'s daily numbers varied more`], R`Shop $A$: mean $1.53$, sd $1.15$; fewer on average but more variable`,
  R`$\sum fx = 10 + 16 + 12 + 8 = 46$, so the mean is $1.53$. $\sum fx^2 = 10 + 32 + 36 + 32 = 110$, so $\sigma^2 = 3.667 - 2.351 = 1.316$ and $\sigma = 1.15$. Shop $A$ had fewer complaints on average ($1.53 < 2.1$), but its daily numbers varied more ($1.15 > 0.9$).`),
Q('A3.5-13', 4, R`Ten journey times on route $A$, in minutes, are $12, 14, 15, 15, 16, 17, 18, 19, 21, 45$. Route $B$ has median $15$ and IQR $7$. **(a)** Find the median and IQR for route $A$. **(b)** Show that $45$ is an outlier, using $1.5 \times \text{IQR}$ beyond the quartiles. **(c)** Compare the routes. [[5]]`,
  [R`$n = 10$: the median is halfway between the $5$th and $6$th values.`, R`$Q_1$ at position $2.5$, so the $3$rd value.`],
  [R`(a)|B1|Median $16.5$`, R`(a)|B1|$Q_1 = 15$, $Q_3 = 19$, IQR $4$`, R`(b)|B1|Limit $19 + 6 = 25 < 45$`, R`(c)|B1|Route $B$ quicker on average ($15 < 16.5$)`, R`(c)|B1|Route $A$ more consistent (IQR $4 < 7$)`], R`(a) median $16.5$, IQR $4$ (b) limit $25$ (c) $B$ quicker on average, $A$ more consistent`,
  R`**(a)** Median $= \frac{16 + 17}{2} = 16.5$. $Q_1$ is the $3$rd value, $15$; $Q_3$ is the $8$th value, $19$. $\text{IQR} = 4$.
**(b)** The upper limit is $19 + 1.5 \times 4 = 25$, and $45 > 25$.
**(c)** Route $B$ has the lower median, so it is quicker on average. Route $A$ has the smaller IQR, so its times are more consistent. Medians and IQRs are the right measures to use here because of the outlier.`),
Q('A3.5-14', 4, R`Class $A$ ($12$ students) has mean mark $60$ and standard deviation $5$. Class $B$ ($18$ students) has mean $65$ and standard deviation $4$. Find the mean and standard deviation of all $30$ marks. [[5]]`,
  [R`$\sum x^2 = n(\sigma^2 + \bar{x}^2)$ for each class.`, R`Add the totals, then use the formula for all $30$.`],
  [R`|M1|$\sum x = 720 + 1170 = 1890$`, R`|A1|Mean $63$`, R`|M1|$\sum x^2 = 12(3625) + 18(4241) = 119\,838$`, R`|M1|$\sigma^2 = \frac{119\,838}{30} - 63^2$`, R`|A1|$\sigma = 5.06$`], R`Mean $63$, sd $5.06$`,
  R`$\sum x = 720 + 1170 = 1890$, so the mean is $63$. $\sum x^2 = 12(25 + 3600) + 18(16 + 4225) = 43\,500 + 76\,338 = 119\,838$. $\sigma^2 = 3994.6 - 3969 = 25.6$, so $\sigma = 5.06$.`),
Q('A3.5-15', 5, R`Two machines fill bags of flour that should contain $500$ g. For $10$ bags from machine $A$, $\sum x = 5010$ and $\sum x^2 = 2\,510\,050$. For $12$ bags from machine $B$, $\sum (x - 500) = 30$ and $\sum (x - 500)^2 = 150$. **(a)** Find the mean and standard deviation for machine $A$. **(b)** Find the mean and standard deviation for machine $B$. **(c)** Recommend a machine, giving reasons. [[8]]`,
  [R`For $B$, work in $y = x - 500$ and add $500$ back to the mean only.`, R`Think about being close to $500$ and consistent.`],
  [R`(a)|B1|Mean $501$ g`, R`(a)|M1|$\sigma^2 = 251\,005 - 501^2$`, R`(a)|A1|sd $2$ g`, R`(b)|B1|Mean $502.5$ g`, R`(b)|M1|$\sigma^2 = 12.5 - 2.5^2$`, R`(b)|A1|sd $2.5$ g`, R`(c)|B1|$A$'s mean is closer to $500$ g`, R`(c)|B1|$A$ is also more consistent, so choose $A$`], R`(a) $501$ g, $2$ g (b) $502.5$ g, $2.5$ g (c) machine $A$`,
  R`**(a)** Mean $= 501$ g. $\sigma^2 = \frac{2\,510\,050}{10} - 501^2 = 251\,005 - 251\,001 = 4$, so $\sigma = 2$ g.
**(b)** With $y = x - 500$: $\bar{y} = 2.5$ and $\sigma_y^2 = 12.5 - 6.25 = 6.25$. So the mean is $502.5$ g and $\sigma = 2.5$ g.
**(c)** Machine $A$: its mean is closer to $500$ g and its standard deviation is smaller, so its bags are closer to the target and more consistent.`)
]};
