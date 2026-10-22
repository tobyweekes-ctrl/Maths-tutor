/* 7.7 Modelling with trigonometric functions */
FIGS['7.7-tide'] = Fig.graph({ label: 'Graph of the tide model D = 6 + 2.5 sin(30t) over 24 hours, with the line D = 7', xlab: 't (hours)', ylab: 'D (m)',
  fns: [{ f: t => 6 + 2.5 * Math.sin(30 * t * DEG), label: 'D = 6 + 2.5 sin(30t)°', lx: 24, ly: 9.3 }],
  x0: 0, x1: 24, y0: 0, y1: 10, xticks: [[3, '3'], [6, '6'], [9, '9'], [12, '12'], [15, '15'], [18, '18'], [21, '21'], [24, '24']], yticks: [[3.5, '3.5'], [6, '6'], [8.5, '8.5']],
  hlines: [{ y: 7, label: 'D = 7' }], points: [{ x: 3, y: 8.5, label: 'high tide', dx: 4 }, { x: 9, y: 3.5, label: 'low tide', dy: 14 }] });

CONTENT['7.7'] = {
notes: R`
### Real things that repeat
Tides, Ferris wheels, daily temperatures and pendulums all go up and down regularly. They are modelled with functions like
> $$y = a + b\sin(\omega t + \varepsilon) \qquad\text{or}\qquad y = a + R\cos(\omega t - \alpha)$$

### Reading the model
| Feature | How to find it |
|---|---|
| Middle (mean) value | $a$ |
| Amplitude | $b$ or $R$ |
| Maximum / minimum | $a + R$ and $a - R$ |
| Period | $\frac{360^\circ}{\omega}$ (degrees) or $\frac{2\pi}{\omega}$ (radians) |

If the model is written as $a + p\cos\omega t + q\sin\omega t$, first write it as $a + R\cos(\omega t - \alpha)$ (section 7.5).

[[fig:7.7-tide]]

### Building a model from data
If you know the maximum, the minimum and the time for one cycle:
- $a = \dfrac{\max + \min}{2}$ (the middle value)
- amplitude $= \dfrac{\max - \min}{2}$
- $\omega = \dfrac{360^\circ}{\text{period}}$

**Tides** around the UK repeat about every $12.4$ hours, so $\omega = \frac{360}{12.4} \approx 29.0$, not $30$.

### What does $\alpha$ mean?
In $a + R\sin(\omega t + \alpha)$, $\alpha$ shifts the graph sideways: it moves the time of the first maximum. A maximum happens when $\omega t + \alpha = 90^\circ$, so the first one is at $t = \dfrac{90 - \alpha}{\omega}$.

### Thresholds over several cycles
"For how long is the depth above $7$ m in a day?" Solve for **every** time in the interval, then add up the time spent above the line in each cycle. A sketch like the one above stops you missing a cycle.

::: booklet
**Not in the formula booklet:** anything specific to modelling. You need the $R$ form (section 7.5) and solving equations (section 7.4).
:::

### Worked example 1
The height of a Ferris wheel seat is $h = 12 - 10\cos(18t)^\circ$ metres, $t$ minutes after boarding.
- Lowest height: $12 - 10 = 2$ m, at $t = 0$.
- Highest height: $12 + 10 = 22$ m, when $18t = 180$, i.e. $t = 10$ minutes.
- Period: $\frac{360}{18} = 20$ minutes for one full turn.

### Worked example 2: minutes are not decimals
Using the same Ferris wheel, $h = 12 - 10\cos(18t)^\circ$: when is the seat first $17$ m high?
1. $12 - 10\cos(18t) = 17$, so $\cos(18t) = -\frac12$.
2. $18t = 120^\circ$, so $t = 6.67$ minutes.
3. $0.67$ of a minute is $0.667 \times 60 = 40$ seconds, so the answer is **6 minutes 40 seconds**.

**The trap:** writing "6 minutes 67 seconds". Convert the decimal part by multiplying by $60$. Also check your calculator is in **degrees** when the model uses $^\circ$.

### Answering in context
- Turn values of $t$ into real times ("$t = 5.21$ h" means 05:13).
- Include units.
- Typical **limitations**: the real pattern changes over time (weather, seasons), the amplitude may not stay constant, or the model ignores other factors.
`,
questions: [
{ id:'7.7-1', stars:3,
solFig: FIGS['7.7-tide'],
q: R`The depth of water, $D$ metres, at a harbour entrance is modelled by
$$D = 6 + 2.5\sin(30t)^\circ, \qquad 0 \le t < 12,$$
where $t$ is the number of hours after midnight.

**(a)** Find the maximum depth and the time at which it occurs. [[2]]

**(b)** Find the times, to the nearest minute, when the depth is $7$ m. [[4]]

**(c)** A boat can only enter when the depth is at least $7$ m. Find how long the boat can enter for, in hours and minutes. [[2]]`,
hints: [
  R`Maximum when $\sin(30t) = 1$, i.e. $30t = 90$.`,
  R`Solve $\sin(30t) = 0.4$ with $0 \le 30t < 360$, then divide by $30$.`,
  R`Convert decimal hours to minutes by multiplying the decimal part by $60$.`
],
scheme: [
  ['(a)', 'B1', R`$8.5$ m`],
  ['(a)', 'B1', R`$t = 3$, i.e. 03:00`],
  ['(b)', 'M1', R`$\sin(30t)^\circ = 0.4$`],
  ['(b)', 'A1', R`$30t = 23.58^\circ,\ 156.42^\circ$`],
  ['(b)', 'M1', R`Divides by 30: $t = 0.786,\ 5.214$`],
  ['(b)', 'A1', R`00:47 and 05:13`],
  ['(c)', 'M1', R`$5.214 - 0.786$`],
  ['(c)', 'A1', R`$4.43$ h, i.e. 4 hours 26 minutes`]
],
answer: R`(a) $8.5$ m at 03:00 (b) 00:47 and 05:13 (c) 4 h 26 min`,
sol: R`
**(a)** The largest value of $\sin$ is $1$, so $D_{\max} = 6 + 2.5 = 8.5$ m. This happens when $30t = 90$, so $t = 3$: at **03:00**.

**(b)** $6 + 2.5\sin(30t) = 7$, so $\sin(30t) = 0.4$.
$0 \le t < 12$ means $0 \le 30t < 360$.
$30t = 23.578^\circ$ or $180 - 23.578 = 156.422^\circ$, so $t = 0.786$ or $t = 5.214$.
$0.786$ h $= 47$ min and $0.214$ h $= 13$ min, giving **00:47** and **05:13**.

**(c)** Between those times the depth is above 7 m (it peaks at 03:00). Duration $= 5.214 - 0.786 = 4.428$ h $\approx$ **4 hours 26 minutes**.`
},
{ id:'7.7-2', stars:4,
q: R`The temperature, $T\ ^\circ\text{C}$, inside a greenhouse is modelled by
$$T = 20 + 3\cos(15t)^\circ - 4\sin(15t)^\circ, \qquad 0 \le t < 24,$$
where $t$ is the time in hours after midnight.

**(a)** Express $3\cos(15t)^\circ - 4\sin(15t)^\circ$ in the form $R\cos(15t + \alpha)^\circ$, where $R > 0$ and $0 < \alpha < 90$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Find the maximum temperature and the time of day at which it occurs, to the nearest minute. [[3]]

**(c)** Find the minimum temperature and the time at which it occurs. [[2]]

**(d)** Give one reason why this model may not be suitable for predicting the temperature next month. [[1]]`,
hints: [
  R`$R\cos\alpha = 3$ and $R\sin\alpha = 4$.`,
  R`Maximum when $\cos(15t + 53.13) = 1$. Within the interval that means $15t + 53.13 = 360$, not $0$.`,
  R`Minimum when $15t + 53.13 = 180$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 5$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac43$`],
  ['(a)', 'A1', R`$\alpha = 53.13$`],
  ['(b)', 'B1', R`$T_{\max} = 25\ ^\circ$C`],
  ['(b)', 'M1', R`$15t + 53.13 = 360$`],
  ['(b)', 'A1', R`$t = 20.46$, i.e. 20:27`],
  ['(c)', 'B1', R`$T_{\min} = 15\ ^\circ$C`],
  ['(c)', 'B1', R`$t = 8.46$, i.e. 08:27`],
  ['(d)', 'B1', R`Any sensible limitation, e.g. temperatures change with the seasons, or weather and heating aren't modelled`]
],
answer: R`(a) $5\cos(15t + 53.13)^\circ$ (b) $25\ ^\circ$C at 20:27 (c) $15\ ^\circ$C at 08:27 (d) e.g. seasonal change`,
sol: R`
**(a)** $R\cos(15t + \alpha) = R\cos15t\cos\alpha - R\sin15t\sin\alpha$. So $R\cos\alpha = 3$ and $R\sin\alpha = 4$, giving $R = 5$ and $\tan\alpha = \frac43$, so $\alpha = 53.13$.

**(b)** $T = 20 + 5\cos(15t + 53.13)$. Maximum $= 25\ ^\circ$C when $\cos(\ldots) = 1$.
As $0 \le t < 24$, the angle $15t + 53.13$ runs from $53.13$ to $413.13$, so set $15t + 53.13 = 360$, giving $t = 20.458$. $0.458 \times 60 = 27$ min, so **20:27**.

**(c)** Minimum $= 15\ ^\circ$C when $15t + 53.13 = 180$, giving $t = 8.458$: **08:27**.

**(d)** For example: average temperatures change month to month with the seasons, or the model ignores weather such as cloudy days.`
},
{ id:'7.7-3', stars:1,
q: R`The height, $h$ metres, of a seat on a Ferris wheel is modelled by $h = 25 - 23\cos(12t)^\circ$, where $t$ is the time in minutes. Write down the maximum and minimum heights of the seat. [[2]]`,
hints: [
  R`$\cos$ lies between $-1$ and $1$.`,
  R`$h$ is greatest when $\cos(12t) = -1$.`
],
scheme: [
  ['', 'B1', R`Maximum $48$ m`],
  ['', 'B1', R`Minimum $2$ m`]
],
answer: R`Maximum $48$ m, minimum $2$ m`,
sol: R`
- **Maximum:** when $\cos(12t) = -1$, $h = 25 + 23 = 48$ m.
- **Minimum:** when $\cos(12t) = 1$, $h = 25 - 23 = 2$ m.`
},
{ id:'7.7-4', stars:1,
q: R`For the model $h = 25 - 23\cos(12t)^\circ$, where $t$ is in minutes, find the time taken for one complete revolution of the wheel. [[1]]`,
hints: [
  R`One revolution is one full cycle of the $\cos$ function.`,
  R`Period $= \dfrac{360}{12}$.`
],
scheme: [
  ['', 'B1', R`$30$ minutes`]
],
answer: R`$30$ minutes`,
sol: R`
One revolution is one cycle, when $12t$ increases by $360^\circ$. So the period is $\dfrac{360}{12} = 30$ minutes.`
},
{ id:'7.7-5', stars:1,
q: R`The depth of water in a harbour is modelled by $D = 5 + 2\sin(30t)^\circ$, where $t$ is hours after midnight. Write down the depth at midnight and the amplitude of the model. [[2]]`,
hints: [
  R`At midnight $t = 0$, and $\sin0^\circ = 0$.`,
  R`The amplitude is the number multiplying $\sin$.`
],
scheme: [
  ['', 'B1', R`$5$ m at midnight`],
  ['', 'B1', R`Amplitude $2$ m`]
],
answer: R`$5$ m; amplitude $2$ m`,
sol: R`
- **At $t = 0$:** $D = 5 + 2\sin0^\circ = 5$ m.
- **Amplitude:** $2$ m, so the depth varies between $3$ m and $7$ m.`
},
{ id:'7.7-6', stars:2,
q: R`The temperature, $T\ ^\circ$C, in an office over a day is modelled by $T = a + b\sin(15t)^\circ$, where $t$ is hours after midnight and $b > 0$. The maximum temperature is $24\ ^\circ$C and the minimum is $10\ ^\circ$C.

Find $a$ and $b$, and the period of the model. [[3]]`,
hints: [
  R`$a$ is halfway between the maximum and minimum.`,
  R`$b$ is half the difference between them.`,
  R`Period $= \dfrac{360}{15}$.`
],
scheme: [
  ['', 'B1', R`$a = 17$`],
  ['', 'B1', R`$b = 7$`],
  ['', 'B1', R`Period $24$ hours`]
],
answer: R`$a = 17$, $b = 7$, period $24$ hours`,
sol: R`
1. **Middle value:** $a = \dfrac{24 + 10}{2} = 17$
2. **Amplitude:** $b = \dfrac{24 - 10}{2} = 7$
3. **Period:** $\dfrac{360}{15} = 24$ hours, which makes sense for a daily pattern.`
},
{ id:'7.7-7', stars:2,
q: R`For the Ferris wheel model $h = 25 - 23\cos(12t)^\circ$, where $t$ is in minutes, find the first time at which the seat is $37$ m above the ground. Give your answer in minutes to 3 significant figures. [[4]]`,
hints: [
  R`Rearrange to get $\cos(12t)$ on its own.`,
  R`$\cos(12t) = -\frac{12}{23}$. The first solution is $\cos^{-1}\left(-\frac{12}{23}\right)$.`
],
scheme: [
  ['', 'M1', R`$25 - 23\cos(12t) = 37$`],
  ['', 'A1', R`$\cos(12t) = -\frac{12}{23}$`],
  ['', 'M1', R`$12t = \cos^{-1}\left(-\frac{12}{23}\right) = 121.4^\circ$`],
  ['', 'A1', R`$t = 10.1$ minutes`]
],
answer: R`$t = 10.1$ minutes`,
sol: R`
1. **Rearrange:** $23\cos(12t) = 25 - 37 = -12$, so $\cos(12t) = -\frac{12}{23}$.
2. **Solve:** $12t = \cos^{-1}\left(-\frac{12}{23}\right) = 121.45^\circ$ (this is the first, smallest solution).
3. **Divide by 12:** $t = 10.1$ minutes.`
},
{ id:'7.7-8', stars:2,
q: R`The depth of water, $D$ metres, at a beach is modelled by $D = 4 + 1.5\cos(kt)^\circ$, where $t$ is the time in hours after a high tide. The tide repeats every $12.4$ hours.

**(a)** Find $k$, to 3 significant figures. [[2]]

**(b)** Find the least depth and the first time after high tide at which it occurs, in hours and minutes. [[2]]`,
hints: [
  R`Period $= \dfrac{360}{k} = 12.4$.`,
  R`The least depth is when $\cos(kt) = -1$, i.e. $kt = 180^\circ$: half a period.`
],
scheme: [
  ['(a)', 'M1', R`$\dfrac{360}{k} = 12.4$`],
  ['(a)', 'A1', R`$k = 29.0$`],
  ['(b)', 'B1', R`Least depth $2.5$ m`],
  ['(b)', 'B1', R`$6.2$ hours = $6$ hours $12$ minutes after high tide`]
],
answer: R`(a) $k = 29.0$ (b) $2.5$ m, $6$ h $12$ min after high tide`,
sol: R`
**(a)** $\dfrac{360}{k} = 12.4$, so $k = \dfrac{360}{12.4} = 29.03 = 29.0$ (3 s.f.).

**(b)** Least depth $= 4 - 1.5 = 2.5$ m, when $kt = 180^\circ$, which is half a period: $t = 6.2$ hours $= 6$ hours $12$ minutes after high tide.`
},
{ id:'7.7-9', stars:2,
q: R`The number of hours of daylight in a UK town, $H$, is modelled by $H = 12 + 4.5\sin(0.986d - 80)^\circ$, where $d$ is the day of the year ($d = 1$ on 1 January).

**(a)** Find the maximum number of hours of daylight. [[1]]

**(b)** Find the day number on which the maximum occurs. [[2]]

**(c)** Explain why the number $0.986$ is used in the model. [[1]]`,
hints: [
  R`The maximum is when $\sin(\ldots) = 1$.`,
  R`$0.986d - 80 = 90$.`,
  R`Work out $\dfrac{360}{365}$.`
],
scheme: [
  ['(a)', 'B1', R`$16.5$ hours`],
  ['(b)', 'M1', R`$0.986d - 80 = 90$`],
  ['(b)', 'A1', R`$d = 172$`],
  ['(c)', 'B1', R`$\frac{360}{365} \approx 0.986$, so the period is one year (365 days)`]
],
answer: R`(a) $16.5$ hours (b) day $172$ (c) period of one year`,
sol: R`
**(a)** $12 + 4.5 = 16.5$ hours.

**(b)** $0.986d - 80 = 90$, so $d = \dfrac{170}{0.986} = 172.4$: day $172$, which is around 21 June, the longest day.

**(c)** $\dfrac{360}{365} = 0.986$, so the angle increases by $360^\circ$ over $365$ days. That makes the period one year.`
},
{ id:'7.7-10', stars:3,
solFig: Fig.graph({ label: 'Graph of D = 5 + 3 sin(30t) over 24 hours with the line D = 6.5', xlab: 't (hours)', ylab: 'D (m)',
  fns: [{ f: t => 5 + 3 * Math.sin(30 * t * DEG), label: 'D = 5 + 3 sin(30t)°', lx: 24, ly: 8.8 }], x0: 0, x1: 24, y0: 0, y1: 9.5,
  xticks: [[1, '1'], [5, '5'], [12, '12'], [13, '13'], [17, '17'], [24, '24']], yticks: [[2, '2'], [5, '5'], [8, '8']], hlines: [{ y: 6.5, label: 'D = 6.5' }],
  points: [{ x: 1, y: 6.5 }, { x: 5, y: 6.5 }, { x: 13, y: 6.5 }, { x: 17, y: 6.5 }] }),
q: R`The depth of water, $D$ metres, in a channel is modelled by $D = 5 + 3\sin(30t)^\circ$, where $t$ is hours after midnight, for $0 \le t < 24$. A ferry needs a depth of at least $6.5$ m.

**(a)** Find all the times in the 24 hours when the depth is exactly $6.5$ m. [[4]]

**(b)** Find the total time in the 24 hours when the ferry can use the channel. [[2]]`,
hints: [
  R`$\sin(30t) = \frac12$, with $0 \le 30t < 720^\circ$ (two full cycles).`,
  R`$30t = 30^\circ, 150^\circ, 390^\circ, 510^\circ$.`,
  R`The depth is above $6.5$ m between the first pair of times and between the second pair.`
],
scheme: [
  ['(a)', 'M1', R`$\sin(30t) = \frac12$`],
  ['(a)', 'M1', R`Uses $0 \le 30t < 720^\circ$`],
  ['(a)', 'A1', R`$30t = 30^\circ, 150^\circ, 390^\circ, 510^\circ$`],
  ['(a)', 'A1', R`01:00, 05:00, 13:00, 17:00`],
  ['(b)', 'M1', R`Adds the two intervals above the line`],
  ['(b)', 'A1', R`$8$ hours`]
],
answer: R`(a) 01:00, 05:00, 13:00, 17:00 (b) $8$ hours`,
sol: R`
**(a)**
1. $5 + 3\sin(30t) = 6.5$, so $\sin(30t) = \frac12$.
2. $0 \le t < 24$ means $0 \le 30t < 720^\circ$: two full cycles.
3. $30t = 30^\circ, 150^\circ, 390^\circ, 510^\circ$, so $t = 1, 5, 13, 17$.
4. The times are **01:00, 05:00, 13:00 and 17:00**.

**(b)** The depth is at least $6.5$ m from 01:00 to 05:00 and from 13:00 to 17:00 (the high tides are at 03:00 and 15:00). Total: $4 + 4 = 8$ hours.`
},
{ id:'7.7-11', stars:3,
q: R`The height, $h$ metres, of a seat on a Ferris wheel is $h = 25 - 23\cos(12t)^\circ$, where $t$ is minutes after the seat passes its lowest point.

**(a)** Find the height of the seat after $4$ minutes. [[1]]

**(b)** Find how long, in each revolution, the seat is more than $36.5$ m above the ground. [[4]]

**(c)** State one assumption made in this model. [[1]]`,
hints: [
  R`For (a), substitute $t = 4$ with your calculator in degrees.`,
  R`For (b), $\cos(12t) = -\frac12$ gives $12t = 120^\circ$ or $240^\circ$ in the first revolution.`
],
scheme: [
  ['(a)', 'B1', R`$9.61$ m`],
  ['(b)', 'M1', R`$\cos(12t) = -\frac12$`],
  ['(b)', 'A1', R`$12t = 120^\circ, 240^\circ$`],
  ['(b)', 'M1', R`$t = 10$ and $20$, finds the difference`],
  ['(b)', 'A1', R`$10$ minutes`],
  ['(c)', 'B1', R`For example: the wheel turns at a constant speed`]
],
answer: R`(a) $9.61$ m (b) $10$ minutes (c) e.g. constant speed`,
sol: R`
**(a)** $h = 25 - 23\cos48^\circ = 25 - 23(0.6691) = 9.61$ m.

**(b)**
1. $25 - 23\cos(12t) = 36.5$, so $\cos(12t) = -\frac12$.
2. In one revolution ($0 \le 12t < 360^\circ$): $12t = 120^\circ$ or $240^\circ$, so $t = 10$ or $20$.
3. The seat is above $36.5$ m between these times (it is highest at $t = 15$), for $10$ minutes.

**(c)** For example: the wheel turns at a constant speed and never stops to let people on or off.`
},
{ id:'7.7-12', stars:3,
q: R`At a harbour, the depth of water reaches a maximum of $9.2$ m at 03:00 and a minimum of $2.8$ m at 09:00 the same morning. The depth is modelled by $D = a + b\cos(kt)^\circ$, where $t$ is the time in hours after 03:00.

**(a)** Find $a$, $b$ and $k$. [[4]]

**(b)** Use the model to find the depth at 07:00. [[2]]`,
hints: [
  R`A $\cos$ model has its maximum at $t = 0$, which matches 03:00.`,
  R`From maximum to minimum is half a cycle, so the period is $12$ hours.`,
  R`At 07:00, $t = 4$.`
],
scheme: [
  ['(a)', 'B1', R`$a = 6$`],
  ['(a)', 'B1', R`$b = 3.2$`],
  ['(a)', 'M1', R`Period $= 2 \times 6 = 12$ hours`],
  ['(a)', 'A1', R`$k = 30$`],
  ['(b)', 'M1', R`Substitutes $t = 4$`],
  ['(b)', 'A1', R`$4.4$ m`]
],
answer: R`(a) $a = 6$, $b = 3.2$, $k = 30$ (b) $4.4$ m`,
sol: R`
**(a)**
1. **Middle value:** $a = \dfrac{9.2 + 2.8}{2} = 6$
2. **Amplitude:** $b = \dfrac{9.2 - 2.8}{2} = 3.2$. It's positive because $\cos$ starts at its maximum when $t = 0$, matching high water at 03:00.
3. **Period:** maximum to minimum takes $6$ hours, half a cycle, so the period is $12$ hours and $k = \dfrac{360}{12} = 30$.

**(b)** At 07:00, $t = 4$: $D = 6 + 3.2\cos120^\circ = 6 - 1.6 = 4.4$ m.`
},
{ id:'7.7-13', stars:4,
solFig: Fig.graph({ label: 'Graph of T = 18 + 4 sin(15t + 60) over 24 hours with the line T = 20', xlab: 't (hours)', ylab: 'T (°C)',
  fns: [{ f: t => 18 + 2 * Math.sin(15 * t * DEG) + 2 * Math.sqrt(3) * Math.cos(15 * t * DEG), label: 'T', lx: 24, ly: 21.5 }], x0: 0, x1: 24, y0: 12, y1: 24,
  xticks: [[2, '2'], [6, '6'], [14, '14'], [22, '22'], [24, '24']], yticks: [[14, '14'], [18, '18'], [20, '20'], [22, '22']], hlines: [{ y: 20, label: 'T = 20' }],
  points: [{ x: 2, y: 22, label: 'max', dx: 16 }, { x: 6, y: 20 }, { x: 22, y: 20 }] }),
q: R`The temperature, $T\ ^\circ$C, in a room is modelled by
$$T = 18 + 2\sin(15t)^\circ + 2\sqrt3\cos(15t)^\circ, \qquad 0 \le t < 24,$$
where $t$ is hours after midnight.

**(a)** Express $2\sin(15t)^\circ + 2\sqrt3\cos(15t)^\circ$ in the form $R\sin(15t + \alpha)^\circ$, where $R > 0$ and $0 < \alpha < 90$. [[3]]

**(b)** Find the maximum temperature and the time at which it occurs. [[2]]

**(c)** Find the times of day when the temperature is $20\ ^\circ$C. [[3]]`,
hints: [
  R`$R\cos\alpha = 2$ and $R\sin\alpha = 2\sqrt3$.`,
  R`Maximum when $15t + 60 = 90$.`,
  R`For (c), $\sin(15t + 60) = \frac12$ with $60 \le 15t + 60 < 420$.`
],
scheme: [
  ['(a)', 'B1', R`$R = 4$`],
  ['(a)', 'M1', R`$\tan\alpha = \sqrt3$`],
  ['(a)', 'A1', R`$4\sin(15t + 60)^\circ$`],
  ['(b)', 'B1', R`$22\ ^\circ$C`],
  ['(b)', 'B1', R`At 02:00`],
  ['(c)', 'M1', R`$\sin(15t + 60) = \frac12$`],
  ['(c)', 'M1', R`$15t + 60 = 150$ or $390$, using the shifted interval`],
  ['(c)', 'A1', R`06:00 and 22:00`]
],
answer: R`(a) $4\sin(15t + 60)^\circ$ (b) $22\ ^\circ$C at 02:00 (c) 06:00 and 22:00`,
sol: R`
**(a)** $R\cos\alpha = 2$, $R\sin\alpha = 2\sqrt3$, so $R = \sqrt{4 + 12} = 4$ and $\tan\alpha = \sqrt3$, $\alpha = 60$. So the expression is $4\sin(15t + 60)^\circ$.

**(b)** $T = 18 + 4\sin(15t + 60)$. The maximum is $22\ ^\circ$C, when $15t + 60 = 90$, so $t = 2$: at **02:00**.

**(c)**
1. $18 + 4\sin(15t + 60) = 20$, so $\sin(15t + 60) = \frac12$.
2. **Interval:** $60 \le 15t + 60 < 420$.
3. $15t + 60 = 150$ or $390$ (the value $30$ is too small), so $t = 6$ or $t = 22$: **06:00 and 22:00**.`
},
{ id:'7.7-14', stars:4,
q: R`A student models the depth of water, $D$ metres, at a harbour with $D = 5 + 2\sin(30t)^\circ$, where $t$ is hours after midnight. Records show that high tides actually happen every $12.4$ hours.

**(a)** Explain why the model needs refining. [[1]]

**(b)** Suggest a refined model of the form $D = 5 + 2\sin(kt)^\circ$, giving $k$ to 3 significant figures. [[2]]

**(c)** Use your refined model to find the time of the second high tide after midnight. [[3]]

**(d)** Interpret the numbers $5$ and $2$ in the context of the model. [[2]]`,
hints: [
  R`What is the period of the original model?`,
  R`Period $= \dfrac{360}{k} = 12.4$.`,
  R`High tide when $kt = 90^\circ$ or $450^\circ$. The second one uses $450^\circ$.`
],
scheme: [
  ['(a)', 'B1', R`The model's period is $\frac{360}{30} = 12$ hours, not $12.4$ hours`],
  ['(b)', 'M1', R`$k = \dfrac{360}{12.4}$`],
  ['(b)', 'A1', R`$D = 5 + 2\sin(29.0t)^\circ$`],
  ['(c)', 'M1', R`$kt = 450^\circ$`],
  ['(c)', 'A1', R`$t = 15.5$ hours`],
  ['(c)', 'A1', R`15:30`],
  ['(d)', 'B1', R`$5$ m is the mean (middle) depth`],
  ['(d)', 'B1', R`$2$ m is the amplitude: the depth rises and falls $2$ m from the mean`]
],
answer: R`(b) $D = 5 + 2\sin(29.0t)^\circ$ (c) 15:30 (d) see solution`,
sol: R`
**(a)** The period of $\sin(30t)^\circ$ is $\frac{360}{30} = 12$ hours, but the real tides repeat every $12.4$ hours, so the model drifts further out every day.

**(b)** $k = \dfrac{360}{12.4} = 29.03$, so $D = 5 + 2\sin(29.0t)^\circ$.

**(c)** High tide when $\sin(kt) = 1$: $kt = 90^\circ$ (first) or $450^\circ$ (second). Using the exact $k = \frac{360}{12.4}$: $t = \dfrac{450 \times 12.4}{360} = 15.5$ hours, which is **15:30**.

**(d)** $5$ m is the mean depth, halfway between high and low water. $2$ m is the amplitude: the depth rises to $7$ m and falls to $3$ m.`
},
{ id:'7.7-15', stars:5,
q: R`Two buoys bob up and down on the sea. The height of buoy $A$ above its mean position, in metres, is
$$y = 3\sin(30t)^\circ + 4\cos(30t)^\circ,$$
and the height of buoy $B$ is $z = 5\sin(30t)^\circ$, where $t$ is in hours.

**(a)** Express $y$ in the form $R\sin(30t + \alpha)^\circ$, where $R > 0$ and $0 < \alpha < 90$. Give $\alpha$ to 2 decimal places. [[3]]

**(b)** Find the first time after $t = 0$ at which buoy $A$ is at its lowest point. [[2]]

**(c)** Find the first time after $t = 0$ at which the two buoys are at the same height. [[4]]`,
hints: [
  R`$R\cos\alpha = 3$, $R\sin\alpha = 4$.`,
  R`Lowest point when $30t + \alpha = 270^\circ$.`,
  R`For (c), set $3\sin(30t) + 4\cos(30t) = 5\sin(30t)$ and collect terms. You'll get a $\tan$ equation.`
],
scheme: [
  ['(a)', 'B1', R`$R = 5$`],
  ['(a)', 'M1', R`$\tan\alpha = \frac43$`],
  ['(a)', 'A1', R`$y = 5\sin(30t + 53.13)^\circ$`],
  ['(b)', 'M1', R`$30t + 53.13 = 270$`],
  ['(b)', 'A1', R`$t = 7.23$ hours`],
  ['(c)', 'M1', R`Sets $y = z$`],
  ['(c)', 'M1', R`Collects terms: $4\cos(30t) = 2\sin(30t)$`],
  ['(c)', 'A1', R`$\tan(30t) = 2$`],
  ['(c)', 'A1', R`$t = 2.11$ hours`]
],
answer: R`(a) $5\sin(30t + 53.13)^\circ$ (b) $7.23$ hours (c) $2.11$ hours`,
sol: R`
**(a)** $R\cos\alpha = 3$, $R\sin\alpha = 4$, so $R = 5$ and $\alpha = 53.13$. So $y = 5\sin(30t + 53.13)^\circ$.

**(b)** Lowest point: $\sin(30t + 53.13) = -1$, so $30t + 53.13 = 270$ and $t = \dfrac{216.87}{30} = 7.23$ hours.

**(c)**
1. **Same height:** $3\sin(30t) + 4\cos(30t) = 5\sin(30t)$
2. **Collect:** $4\cos(30t) = 2\sin(30t)$, so $\tan(30t) = 2$.
3. **First positive solution:** $30t = \tan^{-1}2 = 63.43^\circ$, so $t = 2.11$ hours.

**The insight:** both buoys have the same amplitude ($5$ m) and period, but $A$ is ahead of $B$ by $53.13^\circ$ of phase. Setting the two expressions equal is quicker than comparing graphs.`
}
]
};
