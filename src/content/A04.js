/* Statistics and Mechanics Year 1 · Chapter 4 Correlation (sections 4.1 and 4.2) */
BOOK_CHAPTERS.push({ id:'A04', book:'Statistics & Mechanics Year 1', label:'Chapter 4', title:'Correlation', sections:[
  { id:'A4.1', num:'4.1', title:'Correlation' },
  { id:'A4.2', num:'4.2', title:'Linear regression' }
]});
// Scatter diagram: pts is a list of [x, y].
const A4sc = ({ label, pts, x0 = 0, x1 = 10, y0 = 0, y1 = 10, xlab = 'x', ylab = 'y', xt = 2, yt = 2, texts = [], fns = [] }) => {
  const ticks = (a, b, s) => { const t = []; for (let v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) if (Math.abs(v) > 1e-9) t.push([v, String(+v.toFixed(2))]); return t; };
  return Fig.graph({ label, x0, x1, y0, y1, xlab, ylab, xticks: ticks(x0, x1, xt), yticks: ticks(y0, y1, yt), points: pts.map(([x, y]) => ({ x, y })), texts, fns });
};
FIGS['A4.1-types'] = A4sc({ label: 'Scatter diagram showing strong positive correlation: the points rise from left to right close to a straight line',
  pts: [[1, 2.1], [2, 2.9], [3, 3.2], [4, 4.4], [5, 4.8], [6, 6.1], [7, 6.5], [8, 7.9]], x1: 9, y1: 9 });
FIGS['A4.2-line'] = A4sc({ label: 'Scatter diagram of test score against hours of revision with the regression line y = 12.5 + 3.2x drawn through the points',
  pts: [[1, 16], [2, 19.5], [3, 21], [4, 26.5], [5, 28], [6, 31], [7, 35.5], [8, 37]], x1: 9, y1: 45, yt: 10, xt: 1, xlab: 'hours, x', ylab: 'score, y',
  fns: [{ f: x => 12.5 + 3.2 * x, from: 0.5, to: 8.8 }] });

CONTENT['A4.1'] = {
notes: R`
### Bivariate data and scatter diagrams
**Bivariate data** are pairs of values $(x, y)$ for two variables. A **scatter diagram** plots each pair as a point.
- The **explanatory** (independent) variable goes on the $x$-axis. It's the one you control or that you think affects the other.
- The **response** (dependent) variable goes on the $y$-axis.

### Correlation
Correlation describes how close the points are to a straight line.
- **Positive correlation:** as $x$ increases, $y$ tends to increase.
- **Negative correlation:** as $x$ increases, $y$ tends to decrease.
- **No correlation:** no linear pattern.

Describe the **strength** too: strong if the points are close to a line, weak if they're widely scattered.

[[fig:A4.1-types]]

::: booklet
**Learn this:** correlation doesn't imply causation. Two variables can be correlated because both depend on a third.
:::

### Worked example 1
The diagram above shows the hours of sunshine $x$ and the number of ice creams sold $y$ on $8$ days. Describe and interpret the correlation.
- Strong positive correlation.
- On sunnier days, more ice creams tend to be sold.

### Worked example 2: correlation isn't causation
Across towns, the number of churches and the number of crimes show strong positive correlation. Does building churches cause crime?

**The trap:** concluding that one causes the other. Bigger towns have more churches **and** more crime. Population is a third variable that drives both.

### Distinct groups
If the points form two separate clusters (for example, children and adults), a single correlation for all the points can be misleading. Look at each group separately.

### Watch out
- Always interpret correlation **in context**.
- A curved pattern isn't linear correlation, so a straight line model isn't suitable.
`,
questions: [
Q('A4.1-1', 1, R`Describe the correlation shown in the scatter diagram. [[1]]`,
  [R`Do the points rise or fall from left to right?`, R`How close are they to a line?`],
  [R`|B1|Strong positive correlation`], R`Strong positive correlation`,
  R`The points rise from left to right and lie close to a straight line, so there is strong positive correlation.`,
  { fig: FIGS['A4.1-types'] }),
Q('A4.1-2', 1, R`A teacher records the number of hours each student revised and their test score. Which is the explanatory variable? [[1]]`,
  [R`Which variable might affect the other?`, R`The explanatory variable goes on the $x$-axis.`],
  [R`|B1|Hours of revision`], R`Hours of revision`,
  R`The number of hours revised is likely to affect the test score, not the other way round, so hours of revision is the explanatory variable.`),
Q('A4.1-3', 1, R`The age of a car and its value show negative correlation. Interpret this in context. [[1]]`,
  [R`Negative: as one goes up, the other tends to go down.`, R`Use the words "age" and "value".`],
  [R`|B1|Older cars tend to be worth less`], R`Older cars tend to be worth less`,
  R`As the age of a car increases, its value tends to decrease: older cars tend to be worth less.`),
Q('A4.1-4', 2, R`The scatter diagram shows $8$ pairs of values. One point doesn't fit the pattern. Write down its coordinates and describe the correlation of the other points. [[2]]`,
  [R`Look for the point far from the others' trend.`, R`The rest rise steadily.`],
  [R`|B1|$(6, 2)$`, R`|B1|The rest show strong positive correlation`], R`$(6, 2)$; the rest show strong positive correlation`,
  R`Seven points rise steadily from left to right; the point $(6, 2)$ is well below their trend. The other points show strong positive correlation.`,
  { fig: A4sc({ label: 'Scatter diagram: points (1, 3), (2, 4.5), (3, 5), (4, 6.5), (5, 7), (6, 2), (7, 9), (8, 10)', pts: [[1, 3], [2, 4.5], [3, 5], [4, 6.5], [5, 7], [6, 2], [7, 9], [8, 10]], x1: 9, y1: 11 }) }),
Q('A4.1-5', 2, R`Across $20$ towns, the number of shops and the number of crimes reported show strong positive correlation. A councillor says "Shops cause crime." Comment on this claim. [[2]]`,
  [R`Correlation doesn't prove causation.`, R`What else could make both numbers large?`],
  [R`|B1|Correlation doesn't imply causation`, R`|B1|Both are likely to depend on a third variable, such as the town's population`], R`Not justified: both probably depend on population`,
  R`Correlation does not show that one causes the other. Larger towns are likely to have more shops and more crime, so population is a third variable linking them.`),
Q('A4.1-6', 2, R`The scatter diagram shows two separate groups of points. Explain why describing the correlation of all the points together could be misleading. [[2]]`,
  [R`Look within each group.`, R`Is there a pattern inside either cluster?`],
  [R`|B1|Overall the points suggest positive correlation`, R`|B1|But within each group there is little or no correlation, so the groups should be considered separately`], R`Together they look positively correlated, but neither group is`,
  R`Taken together, the points appear to show positive correlation, but that comes only from the gap between the two groups. Within each group there is little or no correlation, so each group should be analysed separately.`,
  { fig: A4sc({ label: 'Two clusters of points: one around (3, 3) and one around (8, 8), each with no clear pattern', pts: [[2, 3], [2.5, 2.2], [3, 3.6], [3.5, 2.5], [4, 3.1], [7, 8.2], [7.5, 7.1], [8, 7.9], [8.5, 7.3], [9, 8.4]], x1: 10, y1: 10 }) }),
Q('A4.1-7', 2, R`Describe the type and strength of correlation shown. [[2]]`,
  [R`Is the overall trend up or down?`, R`Are the points close to a line?`],
  [R`|B1|Negative`, R`|B1|Weak`], R`Weak negative correlation`,
  R`Overall $y$ tends to decrease as $x$ increases, so the correlation is negative. The points are widely scattered about any line, so it is weak.`,
  { fig: A4sc({ label: 'Scatter diagram: points drift downwards but are widely scattered', pts: [[1, 6], [2, 7.5], [3, 4.5], [4, 7], [5, 4], [6, 6.5], [7, 3.5], [8, 5.5]], x1: 9, y1: 9 }) }),
Q('A4.1-8', 3, R`The table shows the hours $x$ that $8$ students revised and their test scores $y$: $(1, 12), (2, 15), (3, 21), (4, 20), (5, 26), (6, 30), (7, 29), (8, 35)$. Draw a scatter diagram and describe and interpret the correlation. [[3]]`,
  [R`Hours on the $x$-axis.`, R`Interpret in terms of revision and scores.`],
  [R`|B1|Points plotted correctly`, R`|B1|Strong positive correlation`, R`|B1|Students who revised for longer tended to score higher`], R`Strong positive correlation: more revision, higher scores`,
  R`The points rise steadily from left to right, close to a straight line: strong positive correlation. Students who revised for longer tended to get higher scores.`,
  { solFig: A4sc({ label: 'Scatter diagram of the 8 students: scores rise from 12 to 35 as hours go from 1 to 8', pts: [[1, 12], [2, 15], [3, 21], [4, 20], [5, 26], [6, 30], [7, 29], [8, 35]], x1: 9, y1: 40, yt: 10, xt: 1, xlab: 'hours, x', ylab: 'score, y' }) }),
Q('A4.1-9', 3, R`Over $10$ winter weeks, the mean outdoor temperature and a household's heating cost show strong negative correlation. **(a)** Interpret this. **(b)** Is it reasonable to say colder weather causes higher costs? [[2]]`,
  [R`Negative correlation: colder weeks have higher costs.`, R`Is there a sensible reason why?`],
  [R`(a)|B1|In colder weeks the heating cost tends to be higher`, R`(b)|B1|Yes, it's plausible: colder weather means more heating is used (the correlation alone doesn't prove it, but there's a clear reason)`], R`(a) colder weeks cost more (b) plausible, though correlation alone doesn't prove it`,
  R`**(a)** As the temperature falls, the heating cost tends to rise.
**(b)** A causal link is plausible here, because heating is used more when it is cold. But the correlation on its own does not prove it: you need the explanation in context as well.`),
Q('A4.1-10', 3, R`Explain why a straight-line model would not be suitable for the data shown. [[2]]`,
  [R`What shape do the points make?`, R`Correlation measures how close points are to a straight line.`],
  [R`|B1|The points follow a curve (they fall then rise)`, R`|B1|So there's a non-linear relationship and a straight line won't fit`], R`The points follow a curve, not a line`,
  R`The points fall and then rise, following a curve. The relationship is not linear, so a straight line would fit poorly even though $x$ and $y$ are clearly related.`,
  { fig: A4sc({ label: 'Points following a U-shaped curve with lowest point near x = 5', pts: [[1, 16.5], [2, 9], [3, 4.5], [4, 1], [5, 0.3], [6, 1.2], [7, 4], [8, 9.5], [9, 15.8]], x1: 10, y1: 18, yt: 4 }) }),
Q('A4.1-11', 3, R`In a primary school, shoe size and reading score show strong positive correlation. Explain why this doesn't mean big feet improve reading. [[2]]`,
  [R`What else changes across a primary school?`, R`Think about age.`],
  [R`|B1|Correlation doesn't imply causation`, R`|B1|Older children have bigger feet and read better: age is the third variable`], R`Age affects both`,
  R`Correlation does not show cause. Older pupils tend to have larger feet and also read better, so age links the two variables.`),
Q('A4.1-12', 4, R`Six pairs of values are $(1, 3), (2, 5), (3, 7), (4, 19), (5, 11), (6, 13)$. **(a)** Identify the value that was probably recorded incorrectly. **(b)** Suggest what it should have been. **(c)** Describe the correlation once it is corrected. [[3]]`,
  [R`Look at how $y$ goes up as $x$ goes up by $1$.`, R`The others fit $y = 2x + 1$.`],
  [R`(a)|B1|$(4, 19)$`, R`(b)|B1|Probably $9$, since the others fit $y = 2x + 1$`, R`(c)|B1|Perfect (very strong) positive correlation`], R`(a) $(4, 19)$ (b) $9$ (c) perfect positive correlation`,
  R`**(a)** Every other point fits $y = 2x + 1$; $(4, 19)$ doesn't.
**(b)** It should probably be $2(4) + 1 = 9$, so the $1$ and $9$ may have been mistyped as $19$.
**(c)** All six points then lie on a straight line with positive gradient: perfect positive correlation.`),
Q('A4.1-13', 4, R`The diagram shows the age $x$ (years) and price $y$ (£ thousands) of $5$ used cars of model $A$ and $5$ of model $B$. **(a)** Describe the correlation for model $A$. **(b)** Explain why one line for all $10$ cars would not be sensible. [[3]]`,
  [R`Look at each model separately.`, R`Model $B$ costs much more at every age.`],
  [R`(a)|B1|Strong negative correlation: older cars of model $A$ cost less`, R`(b)|B1|The two models form separate groups`, R`(b)|B1|Model $B$ is dearer at every age, so a single line would fit neither model`], R`(a) strong negative (b) the models are two distinct groups`,
  R`**(a)** Strong negative correlation: older model $A$ cars tend to be cheaper.
**(b)** The two models form two distinct groups, with model $B$ about £$12\,000$ dearer at every age. One line through all the points would lie between the groups and fit neither.`,
  { fig: A4sc({ label: 'Two sets of points falling with age: model A from 15 to 8, model B from 30 to 20', pts: [[1, 15], [2, 13], [3, 11.5], [4, 10], [5, 8], [1, 30], [2, 27], [3, 25], [4, 22], [5, 20]], x1: 6, y1: 35, xt: 1, yt: 5, xlab: 'age', ylab: 'price', texts: [{ x: 4.7, y: 12, label: 'Model A' }, { x: 4.7, y: 25, label: 'Model B' }] }) }),
Q('A4.1-14', 4, R`A researcher finds strong positive correlation between daily hours of sunshine and ice-cream sales, and writes "Sunshine causes ice-cream sales to rise." **(a)** Is the claim supported by the correlation alone? **(b)** Give a reason why the claim may be reasonable. [[2]]`,
  [R`What does correlation measure?`, R`Is there a sensible mechanism?`],
  [R`(a)|B1|No: correlation alone doesn't show causation`, R`(b)|B1|People are more likely to buy ice cream in warm, sunny weather, so there's a plausible causal link`], R`(a) No (b) there is a sensible reason people buy more when sunny`,
  R`**(a)** No. Correlation only shows that the two variables tend to rise together.
**(b)** There is a plausible explanation: people buy more ice cream when it's sunny and warm. The causal claim comes from that reasoning, not from the correlation.`),
Q('A4.1-15', 5, R`A café records the midday temperature $x$ °C and the number of cold drinks sold $y$ on $8$ days: $(10, 52), (12, 58), (14, 63), (16, 70), (18, 30), (20, 82), (22, 88), (24, 95)$. **(a)** Draw a scatter diagram. **(b)** Identify the point that doesn't fit and suggest a reason. **(c)** Describe the correlation of the other points. **(d)** The owner says "Higher temperatures make people buy more cold drinks." Comment. [[5]]`,
  [R`Plot temperature on the $x$-axis.`, R`One day has far fewer sales than its neighbours.`],
  [R`(a)|B1|Points plotted correctly`, R`(b)|B1|$(18, 30)$`, R`(b)|B1|E.g. the café closed early, or sales were recorded wrongly`, R`(c)|B1|Strong positive correlation`, R`(d)|B1|Correlation alone doesn't prove causation, but the claim is plausible in context`], R`(b) $(18, 30)$ (c) strong positive (d) plausible, but correlation alone doesn't prove it`,
  R`**(a)** See the diagram.
**(b)** $(18, 30)$: the others rise steadily, and about $76$ sales would be expected. Perhaps the café closed early that day, or the number was recorded incorrectly.
**(c)** The other seven points show strong positive correlation: hotter days, more cold drinks sold.
**(d)** The correlation is consistent with the claim and there is an obvious reason for it, but correlation on its own does not prove causation.`,
  { solFig: A4sc({ label: 'Scatter of cold drinks against temperature: seven points rising from 52 to 95, and one low point at (18, 30)', pts: [[10, 52], [12, 58], [14, 63], [16, 70], [18, 30], [20, 82], [22, 88], [24, 95]], x0: 8, x1: 26, y1: 100, yt: 20, xlab: 'temperature', ylab: 'drinks' }) })
]};

CONTENT['A4.2'] = {
notes: R`
### The regression line
The **regression line of $y$ on $x$** is the straight line of best fit, written
$$y = a + bx$$
- $b$ is the **gradient**: the change in $y$ for each increase of $1$ in $x$.
- $a$ is the **intercept**: the value of $y$ when $x = 0$. It may have no sensible meaning in context.
- The line always passes through the mean point $(\bar{x}, \bar{y})$.

### Using the line
- Use it to estimate $y$ from $x$ only. ($y$ is the response variable.)
- **Interpolation:** estimating within the range of the data. This is reliable.
- **Extrapolation:** estimating outside the range. This is unreliable, because the pattern may not continue.

::: booklet
**Learn these:** $y = a + bx$, and that the line passes through $(\bar{x}, \bar{y})$.
:::

### Worked example 1
For $8$ students, hours of revision $x$ ($1$ to $8$) and test score $y$ give the regression line $y = 12.5 + 3.2x$.
- **Interpret $3.2$:** each extra hour of revision is linked to about $3.2$ more marks.
- **Estimate for $5$ hours:** $y = 12.5 + 3.2(5) = 28.5$. This is reliable, because $5$ is inside the data range.

[[fig:A4.2-line]]

### Worked example 2: extrapolation
Use the same line to estimate the score of a student who revised for $30$ hours.
- $12.5 + 3.2(30) = 108.5$ marks, which may be more than the test is out of.
- $30$ hours is far outside the range $1$ to $8$, so the estimate is unreliable.

**The trap:** quoting $108.5$ as if it were a sensible prediction.

### Coded data
If $p = \frac{x - c}{d}$ and $q = \frac{y - e}{f}$, then substitute both into the line for $q$ on $p$ and rearrange to get $y$ in terms of $x$.

### Watch out
- Interpret $a$ and $b$ **in context**, with units.
- Don't use the line of $y$ on $x$ to estimate $x$ from $y$.
`,
questions: [
Q('A4.2-1', 1, R`The regression line of $y$ on $x$ is $y = 4 + 2.5x$. Estimate $y$ when $x = 6$. [[1]]`,
  [R`Substitute $x = 6$.`, R`$2.5 \times 6 = 15$.`],
  [R`|B1|$19$`], R`$19$`,
  R`$y = 4 + 2.5 \times 6 = 4 + 15 = 19$.`),
Q('A4.2-2', 1, R`For a group of students, the regression line of test score $y$ on hours of revision $x$ is $y = 30 + 2.5x$. Interpret the value $2.5$. [[1]]`,
  [R`It's the gradient.`, R`What happens to $y$ when $x$ goes up by $1$?`],
  [R`|B1|Each extra hour of revision is linked to $2.5$ more marks`], R`Each extra hour adds about $2.5$ marks`,
  R`$2.5$ is the gradient: for each extra hour of revision, the score tends to increase by about $2.5$ marks.`),
Q('A4.2-3', 1, R`A regression line was found from data with $x$ between $10$ and $50$. Explain whether it is sensible to use it to estimate $y$ when $x = 70$. [[1]]`,
  [R`Is $70$ inside the data range?`, R`Estimating outside the range is called extrapolation.`],
  [R`|B1|No: $70$ is outside the range, so it's extrapolation and unreliable`], R`No, it's extrapolation`,
  R`$x = 70$ is outside the range of the data ($10$ to $50$). This is extrapolation, so the estimate is unreliable: the pattern may not continue.`),
Q('A4.2-4', 2, R`The amount of water $w$ litres a plant uses in a day is modelled by $w = 0.8 + 0.35t$, where $t$ °C is the temperature. **(a)** Estimate $w$ when $t = 20$. **(b)** Interpret the value $0.35$. [[2]]`,
  [R`Substitute $t = 20$.`, R`$0.35$ is the gradient.`],
  [R`(a)|B1|$7.8$ litres`, R`(b)|B1|Each extra degree increases water use by about $0.35$ litres`], R`(a) $7.8$ litres (b) $0.35$ litres more per extra °C`,
  R`**(a)** $w = 0.8 + 0.35 \times 20 = 7.8$ litres.
**(b)** For each $1$ °C rise in temperature, the plant uses about $0.35$ litres more water per day.`),
Q('A4.2-5', 2, R`A regression line $y = a + 1.5x$ is found from data with $\bar{x} = 12$ and $\bar{y} = 40$. Find $a$. [[2]]`,
  [R`The line passes through $(\bar{x}, \bar{y})$.`, R`$40 = a + 1.5 \times 12$.`],
  [R`|M1|$40 = a + 1.5(12)$`, R`|A1|$a = 22$`], R`$a = 22$`,
  R`The line passes through $(12, 40)$, so $40 = a + 18$ and $a = 22$.`),
Q('A4.2-6', 2, R`The cost $c$ (£) of a taxi ride lasting $m$ minutes is modelled by $c = 2.5 + 0.4m$. Interpret the values $2.5$ and $0.4$ in context. [[2]]`,
  [R`$2.5$ is the cost when $m = 0$.`, R`$0.4$ is the extra cost per minute.`],
  [R`|B1|£$2.50$ is a fixed charge at the start`, R`|B1|Each minute adds about $40$p`], R`£$2.50$ fixed charge; $40$p per minute`,
  R`$2.5$ is the cost when $m = 0$: a fixed charge of £$2.50$. $0.4$ is the gradient: each extra minute adds about £$0.40$.`),
Q('A4.2-7', 2, R`The regression line of mass $y$ kg on height $x$ cm for some adults is $y = -90 + 0.95x$. Explain why it shouldn't be used to estimate a person's height from their mass. [[1]]`,
  [R`Which variable is the response?`, R`The line is designed to estimate one variable from the other.`],
  [R`|B1|It's the line of $y$ on $x$, so it estimates mass from height, not height from mass`], R`It's designed to estimate $y$ from $x$ only`,
  R`This is the regression line of $y$ on $x$: it is designed to estimate mass from height. To estimate height from mass you would need the regression line of $x$ on $y$, which is generally a different line.`),
Q('A4.2-8', 3, R`Data are coded using $p = x - 100$ and $q = \frac{y}{10}$. The regression line of $q$ on $p$ is $q = 2 + 0.5p$. Find the regression line of $y$ on $x$. [[3]]`,
  [R`Substitute both codes into the line.`, R`$\frac{y}{10} = 2 + 0.5(x - 100)$.`],
  [R`|M1|$\frac{y}{10} = 2 + 0.5(x - 100)$`, R`|M1|$y = 20 + 5(x - 100)$`, R`|A1|$y = 5x - 480$`], R`$y = 5x - 480$`,
  R`$\frac{y}{10} = 2 + 0.5(x - 100)$, so $y = 20 + 5x - 500 = 5x - 480$.`),
Q('A4.2-9', 3, R`The regression line $y = 3.1 + 1.8x$ was found from data with $x$ between $5$ and $20$. **(a)** Estimate $y$ when $x = 12$. **(b)** Comment on the reliability of your estimate. **(c)** Comment on using the line when $x = 40$. [[3]]`,
  [R`$1.8 \times 12 = 21.6$.`, R`Compare each $x$ with the range $5$ to $20$.`],
  [R`(a)|B1|$24.7$`, R`(b)|B1|Reliable: $12$ is inside the range (interpolation)`, R`(c)|B1|Unreliable: $40$ is outside the range (extrapolation)`], R`(a) $24.7$ (b) reliable (c) unreliable`,
  R`**(a)** $y = 3.1 + 1.8 \times 12 = 24.7$.
**(b)** $12$ is within the data range, so this is interpolation and reliable.
**(c)** $40$ is well outside the range, so this would be extrapolation and unreliable.`),
Q('A4.2-10', 3, R`For $10$ pairs of data, $\sum x = 60$ and $\sum y = 210$. The regression line of $y$ on $x$ has gradient $2.4$. Find its equation. [[3]]`,
  [R`Find $\bar{x}$ and $\bar{y}$.`, R`The line passes through $(6, 21)$.`],
  [R`|B1|$\bar{x} = 6$, $\bar{y} = 21$`, R`|M1|$21 = a + 2.4(6)$`, R`|A1|$y = 6.6 + 2.4x$`], R`$y = 6.6 + 2.4x$`,
  R`$\bar{x} = 6$ and $\bar{y} = 21$. The line passes through $(6, 21)$: $21 = a + 14.4$, so $a = 6.6$, giving $y = 6.6 + 2.4x$.`),
Q('A4.2-11', 3, R`The regression line $y = 5 + 2.8x$ is used to estimate $y$ when $x = 8$. The actual value recorded at $x = 8$ was $30$. By how much does the line under-estimate it? [[2]]`,
  [R`Find the estimate first.`, R`Subtract it from $30$.`],
  [R`|M1|Estimate $5 + 2.8(8) = 27.4$`, R`|A1|$2.6$`], R`$2.6$`,
  R`The line gives $5 + 22.4 = 27.4$. The actual value is $30$, so the line under-estimates it by $2.6$.`),
Q('A4.2-12', 4, R`Sales $y$ (thousands) of a product are recorded for years $x$, coded using $t = \frac{x - 1990}{5}$. The regression line of $y$ on $t$ is $y = 12.4 + 3.6t$. **(a)** Find the regression line of $y$ on $x$. **(b)** Estimate the sales in $2005$. [[4]]`,
  [R`Substitute $t = \frac{x - 1990}{5}$.`, R`For $2005$, $t = 3$.`],
  [R`(a)|M1|$y = 12.4 + 3.6 \times \frac{x - 1990}{5}$`, R`(a)|M1|$y = 12.4 + 0.72(x - 1990)$`, R`(a)|A1|$y = 0.72x - 1420.4$`, R`(b)|B1|$23.2$ thousand`], R`(a) $y = 0.72x - 1420.4$ (b) $23\,200$`,
  R`**(a)** $y = 12.4 + 0.72(x - 1990) = 0.72x - 1432.8 + 12.4 = 0.72x - 1420.4$.
**(b)** $t = \frac{15}{5} = 3$, so $y = 12.4 + 10.8 = 23.2$: about $23\,200$ sales.`),
Q('A4.2-13', 4, R`For adults with heights $x$ between $150$ cm and $190$ cm, the regression line of mass $y$ kg on height is $y = -90 + 0.95x$. **(a)** Estimate the mass of a person $175$ cm tall. **(b)** Interpret $0.95$. **(c)** Explain why the line shouldn't be used for a child $90$ cm tall. [[3]]`,
  [R`$0.95 \times 175 = 166.25$.`, R`Is $90$ in the range?`],
  [R`(a)|B1|$76.25$ kg`, R`(b)|B1|Each extra cm of height is linked to about $0.95$ kg more mass`, R`(c)|B1|$90$ cm is outside the range: extrapolation (it gives a negative mass)`], R`(a) $76.25$ kg (b) $0.95$ kg per cm (c) extrapolation`,
  R`**(a)** $y = -90 + 0.95 \times 175 = 76.25$ kg.
**(b)** Each extra centimetre of height is linked to about $0.95$ kg extra mass.
**(c)** $90$ cm is far outside the range $150$ to $190$. The line would give $-4.5$ kg, which is impossible: extrapolation is unreliable.`),
Q('A4.2-14', 4, R`For $8$ pairs of data, $\sum x = 48$ and $\sum y = 312$. The regression line of $y$ on $x$ is $y = a + 4.5x$. **(a)** Find $a$. **(b)** Estimate $y$ when $x = 7$. **(c)** Explain why the line can be used for this estimate if the $x$ values range from $2$ to $10$. [[4]]`,
  [R`$\bar{x} = 6$, $\bar{y} = 39$.`, R`Use $(\bar{x}, \bar{y})$.`],
  [R`(a)|M1|$39 = a + 4.5(6)$`, R`(a)|A1|$a = 12$`, R`(b)|B1|$43.5$`, R`(c)|B1|$7$ is inside the data range, so it's interpolation`], R`(a) $12$ (b) $43.5$ (c) interpolation`,
  R`**(a)** $\bar{x} = 6$, $\bar{y} = 39$, so $39 = a + 27$ and $a = 12$.
**(b)** $y = 12 + 4.5 \times 7 = 43.5$.
**(c)** $x = 7$ lies within $2$ to $10$, so this is interpolation and the estimate is reasonably reliable.`),
Q('A4.2-15', 5, R`The mass $x$ g and length $y$ mm of some springs are coded using $m = \frac{x - 50}{10}$ and $l = y - 200$. The regression line of $l$ on $m$ is $l = 4 + 1.2m$. The masses range from $40$ g to $100$ g. **(a)** Find the regression line of $y$ on $x$. **(b)** Estimate the length when the mass is $75$ g. **(c)** Interpret the gradient of your line. **(d)** Comment on using the line for a mass of $200$ g. [[7]]`,
  [R`Substitute both codes: $y - 200 = 4 + 1.2 \times \frac{x - 50}{10}$.`, R`Simplify to $y = a + bx$.`],
  [R`(a)|M1|$y - 200 = 4 + 1.2 \times \frac{x - 50}{10}$`, R`(a)|M1|$y = 204 + 0.12(x - 50)$`, R`(a)|A1|$y = 198 + 0.12x$`, R`(b)|M1|$198 + 0.12(75)$`, R`(b)|A1|$207$ mm`, R`(c)|B1|Each extra gram increases the length by about $0.12$ mm`, R`(d)|B1|$200$ g is outside $40$ to $100$ g: extrapolation, so unreliable`], R`(a) $y = 198 + 0.12x$ (b) $207$ mm (c) $0.12$ mm per gram (d) unreliable`,
  R`**(a)** $y - 200 = 4 + 0.12(x - 50)$, so $y = 204 + 0.12x - 6 = 198 + 0.12x$.
**(b)** $y = 198 + 9 = 207$ mm.
**(c)** Each extra gram of mass is linked to an extra $0.12$ mm of length.
**(d)** $200$ g is well outside the range of masses ($40$ to $100$ g). This would be extrapolation, and the spring might stretch differently or even break, so the estimate is unreliable.`)
]};
