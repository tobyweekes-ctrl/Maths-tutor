/* 5.2 Inclined planes */
FIGS['5.2-weight'] = Fig.slope({ deg: 30, angleLabel: 'α', label: 'Weight split into components along and into the slope', forces: [{ dir: 'weight', label: 'mg', len: 74 }, { dir: 'normal', label: 'R', len: 52 }] });
FIGS['5.2-ex1'] = Fig.slope({ deg: 22.6, angleLabel: 'α', label: 'Particle sliding down a smooth slope', forces: [{ dir: 'weight', label: '2g' }, { dir: 'normal', label: 'R' }], motion: 'slides down' });
FIGS['5.2-ex2'] = Fig.slope({ deg: 30, label: 'Particle held on a smooth slope by a horizontal force P', forces: [{ dir: 'weight', label: '3g' }, { dir: 'normal', label: 'R' }, { dir: 'horiz', label: 'P', len: 62 }] });

CONTENT['5.2'] = {
notes: R`
### Choose sensible axes
On a slope, resolve **parallel** to the plane and **perpendicular** to it, not horizontally and vertically. Then the normal reaction and any motion each lie along one axis.

### Weight on a slope at angle $\alpha$
> $$\text{down the slope: } mg\sin\alpha \qquad \text{into the slope: } mg\cos\alpha$$

[[fig:5.2-weight]]

With no other perpendicular forces, $R = mg\cos\alpha$.

### Forces that aren't parallel to the slope
A **horizontal** force $P$ on a slope at angle $\alpha$ has
- a component $P\cos\alpha$ **up the slope**
- a component $P\sin\alpha$ **into the slope**, which increases $R$

A force $P$ at angle $\beta$ **above the slope** has $P\cos\beta$ up the slope and $P\sin\beta$ **away from** the slope, which decreases $R$.

### Exact ratios for special slopes
Exam questions often give $\tan\alpha$ as a fraction. Use the right-angled triangle, and keep the exact values instead of a rounded angle.

| $\tan\alpha$ | $\frac34$ | $\frac{5}{12}$ | $\frac{7}{24}$ |
|---|---|---|---|
| $\sin\alpha$ | $\frac35$ | $\frac{5}{13}$ | $\frac{7}{25}$ |
| $\cos\alpha$ | $\frac45$ | $\frac{12}{13}$ | $\frac{24}{25}$ |

### Moving on a smooth slope
With only the weight along the slope, the acceleration is $g\sin\alpha$, down the slope, whichever way the particle is moving. A particle projected **up** the slope decelerates at $g\sin\alpha$, stops, then slides back. Use the suvat equations along the slope.

::: booklet
**In the formula booklet:** the suvat equations. **Learn:** $mg\sin\alpha$ along and $mg\cos\alpha$ into the slope, and that $R$ is found by resolving perpendicular to the slope.
:::

### Worked example 1
A $2$ kg particle slides down a smooth plane inclined at $\alpha$, where $\tan\alpha = \frac{5}{12}$.

[[fig:5.2-ex1]]

- From the table, $\sin\alpha = \frac{5}{13}$ and $\cos\alpha = \frac{12}{13}$.
- Parallel, $F = ma$: $2g\cdot\frac5{13} = 2a$, so $a = 3.77$ m s$^{-2}$.
- Perpendicular: $R = 2g\cdot\frac{12}{13} = 18.1$ N.

### Worked example 2: R is not always $mg\cos\alpha$
A $3$ kg particle is held at rest on a smooth plane inclined at $30^\circ$ by a horizontal force $P$.

[[fig:5.2-ex2]]

- Parallel: $P\cos30^\circ = 3g\sin30^\circ$, so $P = 3g\tan30^\circ = 17.0$ N.
- Perpendicular: $R = 3g\cos30^\circ + P\sin30^\circ = 25.46 + 8.49 = 33.9$ N.

**The trap:** writing $R = 3g\cos30^\circ = 25.5$ N. The horizontal force also pushes into the slope.

### Watch out
- Smooth means no friction.
- Draw a clear force diagram first, with the weight acting vertically down.
- The angle between the weight and the "into the plane" direction equals the slope angle $\alpha$.
`,
questions: [
{ id:'5.2-1', stars:2,
fig: Fig.slope({ deg: 30, label: 'Particle released on a smooth slope at 30 degrees', forces: [{ dir: 'weight', label: '3g' }, { dir: 'normal', label: 'R' }], motion: 'slides down' }),
q: R`A particle of mass $3$ kg is released from rest on a smooth plane inclined at $30^\circ$ to the horizontal.

**(a)** Find the acceleration of the particle. [[2]]

**(b)** Find the normal reaction between the particle and the plane. [[2]]

**(c)** Find the speed of the particle $2$ seconds after release. [[2]]`,
hints: [
  R`Along the plane the only force is $3g\sin30^\circ$.`,
  R`Perpendicular: $R = 3g\cos30^\circ$.`,
  R`Constant acceleration from rest, so use $v = u + at$.`
],
scheme: [
  ['(a)', 'M1', R`$3g\sin30^\circ = 3a$`],
  ['(a)', 'A1', R`$a = 4.9$ m s$^{-2}$`],
  ['(b)', 'M1', R`$R = 3g\cos30^\circ$`],
  ['(b)', 'A1', R`$R = 25.5$ N`],
  ['(c)', 'M1', R`$v = 0 + 4.9\times2$`],
  ['(c)', 'A1', R`$9.8$ m s$^{-1}$`]
],
answer: R`(a) $4.9$ m s$^{-2}$ (b) $25.5$ N (c) $9.8$ m s$^{-1}$`,
sol: R`
**(a)** Parallel to the plane, $F = ma$: $3g\sin30^\circ = 3a$, so $a = g\sin30^\circ = 4.9$ m s$^{-2}$.

**(b)** Perpendicular: $R = 3g\cos30^\circ = 29.4 \times 0.866 = 25.5$ N.

**(c)** $v = u + at = 0 + 4.9 \times 2 = 9.8$ m s$^{-1}$.`
},
{ id:'5.2-2', stars:3,
fig: Fig.slope({ deg: 36.87, angleLabel: 'α', label: 'Particle held on a smooth slope by a horizontal force P', forces: [{ dir: 'weight', label: '2g' }, { dir: 'normal', label: 'R' }, { dir: 'horiz', label: 'P', len: 62 }] }),
q: R`A particle of mass $2$ kg is held in equilibrium on a smooth plane inclined at angle $\alpha$ to the horizontal, where $\tan\alpha = \frac34$, by a **horizontal** force of magnitude $P$ N.

**(a)** Find $P$. [[3]]

**(b)** Find the normal reaction. [[3]]`,
hints: [
  R`$\tan\alpha = \frac34$ gives $\sin\alpha = \frac35$, $\cos\alpha = \frac45$.`,
  R`Parallel to the plane: $P\cos\alpha$ (up the slope) balances $2g\sin\alpha$ (down the slope).`,
  R`Perpendicular: $R = 2g\cos\alpha + P\sin\alpha$. The horizontal force pushes the particle into the plane.`
],
scheme: [
  ['(a)', 'M1', R`Resolves parallel to the plane, both terms`],
  ['(a)', 'A1', R`$P\cos\alpha = 2g\sin\alpha$`],
  ['(a)', 'A1', R`$P = 14.7$ N`],
  ['(b)', 'M1', R`Resolves perpendicular, three terms`],
  ['(b)', 'A1', R`$R = 2g\cos\alpha + P\sin\alpha$`],
  ['(b)', 'A1', R`$R = 24.5$ N`]
],
answer: R`(a) $P = 14.7$ N (b) $R = 24.5$ N`,
sol: R`
**(a)** Parallel to the plane: $P\cos\alpha = 2g\sin\alpha$, so $P\cdot\frac45 = 19.6\cdot\frac35$, giving $P = 19.6\times\frac34 = 14.7$ N.

**(b)** Perpendicular: $R = 2g\cos\alpha + P\sin\alpha = 19.6\cdot\frac45 + 14.7\cdot\frac35 = 15.68 + 8.82 = 24.5$ N.`
},
{ id:'5.2-3', stars:2,
fig: Fig.slope({ deg: 25, label: 'Particle pulled up a smooth slope by a 20 N force', forces: [{ dir: 'weight', label: '1.5g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: '20 N', len: 70 }] }),
q: R`A particle of mass $1.5$ kg is pulled up a smooth plane inclined at $25^\circ$ to the horizontal by a force of $20$ N acting parallel to the plane.

**(a)** Find the acceleration of the particle. [[4]]

**(b)** The particle starts from rest. Find its speed after it has moved $3$ m up the plane. [[2]]`,
hints: [
  R`Up the slope: $20$ N. Down the slope: $1.5g\sin25^\circ$.`,
  R`For (b), use $v^2 = u^2 + 2as$.`
],
scheme: [
  ['(a)', 'M1', R`$F = ma$ parallel to the plane`],
  ['(a)', 'A1', R`One side correct`],
  ['(a)', 'A1', R`$20 - 1.5g\sin25^\circ = 1.5a$`],
  ['(a)', 'A1', R`$a = 9.19$ m s$^{-2}$`],
  ['(b)', 'M1', R`$v^2 = 0 + 2(9.19)(3)$`],
  ['(b)', 'A1', R`$v = 7.43$ m s$^{-1}$`]
],
answer: R`(a) $9.19$ m s$^{-2}$ (b) $7.43$ m s$^{-1}$`,
sol: R`
**(a)** Up the plane, $F = ma$: $20 - 1.5g\sin25^\circ = 1.5a$
$20 - 6.212 = 1.5a$, so $a = 9.19$ m s$^{-2}$.

**(b)** $v^2 = u^2 + 2as = 0 + 2(9.192)(3) = 55.15$, so $v = 7.43$ m s$^{-1}$.`
},
{ id:'5.2-4', stars:1,
fig: Fig.slope({ deg: 20, label: 'Particle on a smooth slope at 20 degrees', forces: [{ dir: 'weight', label: '4g' }, { dir: 'normal', label: 'R' }] }),
q: R`A particle of mass $4$ kg rests on a smooth plane inclined at $20^\circ$ to the horizontal. Find the component of its weight acting down the plane and the normal reaction. [[2]]`,
hints: [
  R`Down the plane: $mg\sin\alpha$.`,
  R`Normal reaction: $R = mg\cos\alpha$, since nothing else acts perpendicular to the plane.`
],
scheme: [
  ['', 'B1', R`$4g\sin20^\circ = 13.4$ N`],
  ['', 'B1', R`$R = 4g\cos20^\circ = 36.8$ N`]
],
answer: R`$13.4$ N down the plane; $R = 36.8$ N`,
sol: R`
1. **Down the plane:** $4g\sin20^\circ = 39.2 \times 0.3420 = 13.4$ N.
2. **Normal reaction:** resolving perpendicular to the plane, $R = 4g\cos20^\circ = 39.2 \times 0.9397 = 36.8$ N.`
},
{ id:'5.2-5', stars:1,
fig: Fig.slope({ deg: 16.26, angleLabel: 'α', label: 'Particle sliding down a smooth slope with tan alpha = 7/24', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }], motion: 'slides down' }),
q: R`A particle slides down a smooth plane inclined at angle $\alpha$, where $\tan\alpha = \frac{7}{24}$. Find its acceleration. [[2]]`,
hints: [
  R`A $7$-$24$-$25$ triangle gives $\sin\alpha = \frac{7}{25}$.`,
  R`On a smooth slope, $a = g\sin\alpha$. The mass cancels.`
],
scheme: [
  ['', 'M1', R`$mg\sin\alpha = ma$ with $\sin\alpha = \frac{7}{25}$`],
  ['', 'A1', R`$a = 2.74$ m s$^{-2}$`]
],
answer: R`$2.74$ m s$^{-2}$`,
sol: R`
1. **Exact ratio:** $\tan\alpha = \frac7{24}$, so the hypotenuse is $25$ and $\sin\alpha = \frac{7}{25}$.
2. **$F = ma$ down the plane:** $mg\sin\alpha = ma$, so $a = 9.8 \times \frac{7}{25} = 2.744 = 2.74$ m s$^{-2}$.`
},
{ id:'5.2-6', stars:1,
fig: Fig.slope({ deg: 35, label: 'Particle held by a force P parallel to a smooth slope', forces: [{ dir: 'weight', label: '6g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'P' }] }),
q: R`A particle of mass $6$ kg is held at rest on a smooth plane inclined at $35^\circ$ by a force $P$ acting up the plane, parallel to it. Find $P$. [[2]]`,
hints: [
  R`Resolve parallel to the plane.`,
  R`$P$ balances the weight component $6g\sin35^\circ$.`
],
scheme: [
  ['', 'M1', R`$P = 6g\sin35^\circ$`],
  ['', 'A1', R`$P = 33.7$ N`]
],
answer: R`$P = 33.7$ N`,
sol: R`
**Resolving parallel to the plane:** $P = 6g\sin35^\circ = 58.8 \times 0.5736 = 33.7$ N.`
},
{ id:'5.2-7', stars:2,
fig: Fig.slope({ deg: 24.1, angleLabel: 'α', label: 'Particle held by a 20 N force on a smooth slope of unknown angle', forces: [{ dir: 'weight', label: '5g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: '20 N' }] }),
q: R`A particle of mass $5$ kg is held at rest on a smooth plane by a force of $20$ N acting up the plane, parallel to it. Find the angle the plane makes with the horizontal, and the normal reaction. [[4]]`,
hints: [
  R`Parallel to the plane: $20 = 5g\sin\alpha$.`,
  R`Then $R = 5g\cos\alpha$.`
],
scheme: [
  ['', 'M1', R`$5g\sin\alpha = 20$`],
  ['', 'A1', R`$\alpha = 24.1^\circ$`],
  ['', 'M1', R`$R = 5g\cos\alpha$`],
  ['', 'A1', R`$R = 44.7$ N`]
],
answer: R`$\alpha = 24.1^\circ$, $R = 44.7$ N`,
sol: R`
1. **Parallel to the plane:** $5g\sin\alpha = 20$, so $\sin\alpha = \frac{20}{49} = 0.4082$ and $\alpha = 24.1^\circ$.
2. **Perpendicular:** $R = 5g\cos\alpha = 49 \times 0.9129 = 44.7$ N.`
},
{ id:'5.2-8', stars:2,
fig: Fig.slope({ deg: 30, label: 'Particle projected up a smooth slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }], motion: 'projected up at 7 m/s' }),
q: R`A particle is projected up a smooth plane inclined at $30^\circ$ with speed $7$ m s$^{-1}$.

**(a)** Find its deceleration. [[1]]

**(b)** Find how far it travels up the plane before coming to rest. [[2]]

**(c)** Find the total time from projection until it returns to its starting point. [[2]]`,
hints: [
  R`Only $mg\sin30^\circ$ acts along the slope, so the deceleration is $g\sin30^\circ$.`,
  R`At the highest point $v = 0$: use $v^2 = u^2 + 2as$.`,
  R`The plane is smooth, so the journey down mirrors the journey up and takes the same time.`
],
scheme: [
  ['(a)', 'B1', R`$4.9$ m s$^{-2}$`],
  ['(b)', 'M1', R`$0 = 7^2 - 2(4.9)s$`],
  ['(b)', 'A1', R`$s = 5$ m`],
  ['(c)', 'M1', R`Time up $= \dfrac{7}{4.9}$, doubled`],
  ['(c)', 'A1', R`$2.86$ s`]
],
answer: R`(a) $4.9$ m s$^{-2}$ (b) $5$ m (c) $2.86$ s`,
sol: R`
**(a)** Along the plane, $mg\sin30^\circ = ma$, so $a = g\sin30^\circ = 4.9$ m s$^{-2}$, acting down the plane.

**(b)** Up the plane: $u = 7$, $v = 0$, $a = -4.9$. $v^2 = u^2 + 2as$ gives $0 = 49 - 9.8s$, so $s = 5$ m.

**(c)** Time up: $v = u + at$, $0 = 7 - 4.9t$, so $t = 1.429$ s. The plane is smooth, so the motion down takes the same time. Total $= 2.86$ s.`
},
{ id:'5.2-9', stars:3,
fig: Fig.slope({ deg: 25, label: 'Particle held on a smooth slope by a force at 15 degrees to the slope', forces: [{ dir: 'weight', label: '3g' }, { dir: 'normal', label: 'R' }, { dir: { rel: 15 }, label: 'P', len: 66, relLabel: '15°' }] }),
q: R`A particle of mass $3$ kg is held in equilibrium on a smooth plane inclined at $25^\circ$ to the horizontal by a force $P$ N. The force acts at $15^\circ$ **above** the line of greatest slope, as shown. Find $P$ and the normal reaction. [[6]]`,
hints: [
  R`Parallel to the plane: only $P\cos15^\circ$ acts up the slope.`,
  R`Perpendicular: $P\sin15^\circ$ acts **away** from the plane, so $R + P\sin15^\circ = 3g\cos25^\circ$.`
],
scheme: [
  ['', 'M1', R`Resolves parallel to the plane`],
  ['', 'A1', R`$P\cos15^\circ = 3g\sin25^\circ$`],
  ['', 'A1', R`$P = 12.9$ N`],
  ['', 'M1', R`Resolves perpendicular, three terms`],
  ['', 'A1', R`$R + P\sin15^\circ = 3g\cos25^\circ$`],
  ['', 'A1', R`$R = 23.3$ N`]
],
answer: R`$P = 12.9$ N, $R = 23.3$ N`,
sol: R`
1. **Parallel:** $P\cos15^\circ = 3g\sin25^\circ = 29.4 \times 0.4226 = 12.42$, so $P = \dfrac{12.42}{0.9659} = 12.9$ N.
2. **Perpendicular:** the force pulls slightly away from the plane: $R + P\sin15^\circ = 3g\cos25^\circ$.
$R = 26.65 - 12.86 \times 0.2588 = 26.65 - 3.33 = 23.3$ N.`
},
{ id:'5.2-10', stars:3,
fig: Fig.slope({ deg: 36.87, angleLabel: 'α', label: 'Particle pushed up a smooth slope by a horizontal 30 N force', forces: [{ dir: 'weight', label: '2g' }, { dir: 'normal', label: 'R' }, { dir: 'horiz', label: '30 N', len: 62 }], motion: 'moves up' }),
q: R`A particle of mass $2$ kg is pushed up a smooth plane inclined at $\alpha$ to the horizontal, where $\tan\alpha = \frac34$, by a horizontal force of $30$ N.

**(a)** Find the acceleration of the particle. [[3]]

**(b)** Find the normal reaction. [[3]]`,
hints: [
  R`$\sin\alpha = \frac35$, $\cos\alpha = \frac45$.`,
  R`Up the slope: $30\cos\alpha - 2g\sin\alpha = 2a$.`,
  R`Perpendicular: $R = 2g\cos\alpha + 30\sin\alpha$.`
],
scheme: [
  ['(a)', 'M1', R`$F = ma$ parallel to the plane`],
  ['(a)', 'A1', R`$30\cos\alpha - 2g\sin\alpha = 2a$`],
  ['(a)', 'A1', R`$a = 6.12$ m s$^{-2}$`],
  ['(b)', 'M1', R`Resolves perpendicular, three terms`],
  ['(b)', 'A1', R`$R = 2g\cos\alpha + 30\sin\alpha$`],
  ['(b)', 'A1', R`$R = 33.7$ N`]
],
answer: R`(a) $6.12$ m s$^{-2}$ (b) $33.7$ N`,
sol: R`
**(a)** Up the plane: $30 \times \frac45 - 2g \times \frac35 = 2a$, so $24 - 11.76 = 2a$ and $a = 6.12$ m s$^{-2}$.

**(b)** Perpendicular: $R = 2g \times \frac45 + 30 \times \frac35 = 15.68 + 18 = 33.7$ N.`
},
{ id:'5.2-11', stars:3,
fig: Fig.slope({ deg: 40, label: 'Particle sliding from rest down a smooth slope 8 m long', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }], motion: '8 m to the bottom' }),
q: R`A particle is released from rest at the top of a smooth slope of length $8$ m, inclined at $40^\circ$ to the horizontal.

**(a)** Find its speed at the bottom of the slope. [[3]]

**(b)** Find the time it takes to reach the bottom. [[2]]

**(c)** State one modelling assumption you have made, and how it affects your answer to (a). [[1]]`,
hints: [
  R`$a = g\sin40^\circ$ down the slope.`,
  R`Use $v^2 = u^2 + 2as$ with $u = 0$ and $s = 8$.`
],
scheme: [
  ['(a)', 'M1', R`$a = g\sin40^\circ = 6.30$`],
  ['(a)', 'M1', R`$v^2 = 0 + 2(6.30)(8)$`],
  ['(a)', 'A1', R`$v = 10.0$ m s$^{-1}$`],
  ['(b)', 'M1', R`$v = u + at$ or $s = \frac12at^2$`],
  ['(b)', 'A1', R`$t = 1.59$ s`],
  ['(c)', 'B1', R`For example: no air resistance, so the real speed would be a little lower`]
],
answer: R`(a) $10.0$ m s$^{-1}$ (b) $1.59$ s (c) see solution`,
sol: R`
**(a)** $a = g\sin40^\circ = 9.8 \times 0.6428 = 6.299$ m s$^{-2}$. Then $v^2 = 0 + 2(6.299)(8) = 100.8$, so $v = 10.0$ m s$^{-1}$.

**(b)** $v = u + at$: $10.04 = 6.299t$, so $t = 1.59$ s.

**(c)** For example: there is no air resistance (or the slope is perfectly smooth). In reality there would be some resistance, so the speed at the bottom would be **less** than $10.0$ m s$^{-1}$.`
},
{ id:'5.2-12', stars:4,
fig: Fig.slope({ deg: 19.1, angleLabel: 'α', label: 'Particle released on a smooth slope of unknown angle', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }], motion: 'slides 10 m in 2.5 s' }),
q: R`A particle is released from rest on a smooth plane inclined at angle $\alpha$. It slides $10$ m down the plane in $2.5$ s.

**(a)** Find its acceleration. [[2]]

**(b)** Find $\alpha$. [[2]]

**(c)** A particle of mass $1.5$ kg is placed on the same plane. A force $P$ acting up the plane, parallel to it, makes it accelerate **up** the plane at $1.2$ m s$^{-2}$. Find $P$. [[3]]

**(d)** Find the normal reaction on the $1.5$ kg particle. [[1]]`,
hints: [
  R`Use $s = ut + \frac12at^2$ with $u = 0$.`,
  R`On a smooth plane $a = g\sin\alpha$.`,
  R`For (c): $P - 1.5g\sin\alpha = 1.5 \times 1.2$. Notice $g\sin\alpha$ is the acceleration from (a).`
],
scheme: [
  ['(a)', 'M1', R`$10 = \frac12a(2.5)^2$`],
  ['(a)', 'A1', R`$a = 3.2$ m s$^{-2}$`],
  ['(b)', 'M1', R`$g\sin\alpha = 3.2$`],
  ['(b)', 'A1', R`$\alpha = 19.1^\circ$`],
  ['(c)', 'M1', R`$F = ma$ up the plane, three terms`],
  ['(c)', 'A1', R`$P - 1.5g\sin\alpha = 1.5(1.2)$`],
  ['(c)', 'A1', R`$P = 6.6$ N`],
  ['(d)', 'B1', R`$R = 1.5g\cos\alpha = 13.9$ N`]
],
answer: R`(a) $3.2$ m s$^{-2}$ (b) $19.1^\circ$ (c) $6.6$ N (d) $13.9$ N`,
sol: R`
**(a)** $s = ut + \frac12at^2$: $10 = \frac12a(6.25)$, so $a = 3.2$ m s$^{-2}$.

**(b)** Smooth plane: $g\sin\alpha = 3.2$, so $\sin\alpha = 0.3265$ and $\alpha = 19.1^\circ$.

**(c)** Up the plane: $P - 1.5g\sin\alpha = 1.5 \times 1.2$. Since $g\sin\alpha = 3.2$, this is $P - 4.8 = 1.8$, so $P = 6.6$ N.

**(d)** $R = 1.5g\cos\alpha = 14.7 \times 0.9452 = 13.9$ N.`
},
{ id:'5.2-13', stars:4,
fig: Fig.slope({ deg: 20, label: 'Box pulled up a smooth slope by a rope at 30 degrees to the slope', forces: [{ dir: 'weight', label: '10g' }, { dir: 'normal', label: 'R' }, { dir: { rel: 30 }, label: '60 N', len: 70, relLabel: '30°' }], motion: 'moves up' }),
q: R`A box of mass $10$ kg is pulled up a smooth slope inclined at $20^\circ$ to the horizontal by a rope. The rope makes an angle of $30^\circ$ with the slope, and the tension is $60$ N.

**(a)** Find the acceleration of the box. [[3]]

**(b)** Find the normal reaction. [[3]]

**(c)** Find the greatest tension the rope could have before the box lifts off the slope. [[2]]`,
hints: [
  R`Parallel: $60\cos30^\circ$ up the slope, $10g\sin20^\circ$ down.`,
  R`Perpendicular: the rope pulls **away** from the slope: $R + 60\sin30^\circ = 10g\cos20^\circ$.`,
  R`The box lifts off when $R = 0$.`
],
scheme: [
  ['(a)', 'M1', R`$F = ma$ parallel, using $60\cos30^\circ$`],
  ['(a)', 'A1', R`$60\cos30^\circ - 10g\sin20^\circ = 10a$`],
  ['(a)', 'A1', R`$a = 1.84$ m s$^{-2}$`],
  ['(b)', 'M1', R`Resolves perpendicular, three terms`],
  ['(b)', 'A1', R`$R + 60\sin30^\circ = 10g\cos20^\circ$`],
  ['(b)', 'A1', R`$R = 62.1$ N`],
  ['(c)', 'M1', R`Sets $R = 0$: $T\sin30^\circ = 10g\cos20^\circ$`],
  ['(c)', 'A1', R`$T = 184$ N`]
],
answer: R`(a) $1.84$ m s$^{-2}$ (b) $62.1$ N (c) $184$ N`,
sol: R`
**(a)** Up the slope: $60\cos30^\circ - 10g\sin20^\circ = 10a$, so $51.96 - 33.52 = 10a$ and $a = 1.84$ m s$^{-2}$.

**(b)** Perpendicular: $R + 60\sin30^\circ = 10g\cos20^\circ$, so $R = 92.09 - 30 = 62.1$ N.

**(c)** The box leaves the slope when $R = 0$: $T\sin30^\circ = 92.09$, so $T = 184$ N.`
},
{ id:'5.2-14', stars:4,
fig: Fig.slope({ deg: 16.26, angleLabel: 'α', label: 'Particle projected up a smooth slope from A', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }], motion: 'projected up from A at 14 m/s' }),
q: R`A particle is projected from point $A$ up a smooth plane inclined at $\alpha$, where $\tan\alpha = \frac{7}{24}$, with speed $14$ m s$^{-1}$. It comes to rest at $B$.

**(a)** Find the time taken to reach $B$. [[3]]

**(b)** Find the distance $AB$. [[2]]

**(c)** Find the particle's speed when it is $20$ m from $A$ on its way back down. [[3]]`,
hints: [
  R`$\sin\alpha = \frac{7}{25}$, so the deceleration is $g \times \frac{7}{25}$.`,
  R`At $B$, $v = 0$.`,
  R`For (c), take $u = 14$ and $s = 20$ from $A$. The acceleration is the same both ways on a smooth plane, so $v^2 = u^2 + 2as$ gives the speed at that point whichever way it is moving.`
],
scheme: [
  ['(a)', 'B1', R`Deceleration $g\sin\alpha = 2.744$ m s$^{-2}$`],
  ['(a)', 'M1', R`$0 = 14 - 2.744t$`],
  ['(a)', 'A1', R`$t = 5.10$ s`],
  ['(b)', 'M1', R`$0 = 14^2 - 2(2.744)s$`],
  ['(b)', 'A1', R`$AB = 35.7$ m`],
  ['(c)', 'M1', R`Correct suvat with $s = 20$ from $A$, or $15.7$ m from $B$`],
  ['(c)', 'A1', R`$v^2 = 86.2$`],
  ['(c)', 'A1', R`$v = 9.29$ m s$^{-1}$`]
],
answer: R`(a) $5.10$ s (b) $35.7$ m (c) $9.29$ m s$^{-1}$`,
sol: R`
**(a)** $\sin\alpha = \frac7{25}$, so the deceleration is $9.8 \times \frac7{25} = 2.744$ m s$^{-2}$. $0 = 14 - 2.744t$ gives $t = 5.10$ s.

**(b)** $0 = 14^2 - 2(2.744)s$, so $s = \dfrac{196}{5.488} = 35.7$ m.

**(c)** From $B$ the particle slides back $35.71 - 20 = 15.71$ m from rest: $v^2 = 2(2.744)(15.71) = 86.2$, so $v = 9.29$ m s$^{-1}$.

Quicker: from $A$, $v^2 = 14^2 - 2(2.744)(20) = 86.2$ gives the same speed, because the plane is smooth.`
},
{ id:'5.2-15', stars:5,
fig: Fig.slope({ deg: 25, angleLabel: 'α', label: 'Particle held by a force P at angle theta above a smooth slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }, { dir: { rel: 30 }, label: 'P', len: 66, relLabel: 'θ' }] }),
q: R`A particle of mass $m$ is held in equilibrium on a smooth plane inclined at $\alpha$ to the horizontal by a force $P$ acting at an angle $\theta$ above the line of greatest slope, where $0 \le \theta < 90^\circ$.

**(a)** Show that $P = \dfrac{mg\sin\alpha}{\cos\theta}$ and $R = mg(\cos\alpha - \sin\alpha\tan\theta)$. [[4]]

**(b)** Find, in terms of $m$, $g$ and $\alpha$, the least possible value of $P$, and state its direction. [[2]]

**(c)** Find the range of values of $\theta$ for which the particle stays in contact with the plane. Give your answer in terms of $\alpha$. [[3]]`,
hints: [
  R`Resolve parallel: $P\cos\theta = mg\sin\alpha$. Resolve perpendicular: $R + P\sin\theta = mg\cos\alpha$.`,
  R`$P$ is least when $\cos\theta$ is greatest.`,
  R`Contact needs $R > 0$. Use $\dfrac{\cos\alpha}{\sin\alpha} = \tan(90^\circ - \alpha)$.`
],
scheme: [
  ['(a)', 'M1', R`Resolves parallel to the plane`],
  ['(a)', 'A1', R`$P = \dfrac{mg\sin\alpha}{\cos\theta}$`],
  ['(a)', 'M1', R`Resolves perpendicular and substitutes $P$`],
  ['(a)', 'A1', R`$R = mg(\cos\alpha - \sin\alpha\tan\theta)$ (cso)`],
  ['(b)', 'M1', R`$\cos\theta$ is greatest when $\theta = 0$`],
  ['(b)', 'A1', R`Least $P = mg\sin\alpha$, acting up the line of greatest slope`],
  ['(c)', 'M1', R`Requires $R > 0$`],
  ['(c)', 'M1', R`$\tan\theta < \dfrac{\cos\alpha}{\sin\alpha} = \tan(90^\circ - \alpha)$`],
  ['(c)', 'A1', R`$0 \le \theta < 90^\circ - \alpha$`]
],
answer: R`(b) $mg\sin\alpha$, parallel to the plane (c) $0 \le \theta < 90^\circ - \alpha$`,
sol: R`
**(a)**
1. **Parallel:** $P\cos\theta = mg\sin\alpha$, so $P = \dfrac{mg\sin\alpha}{\cos\theta}$.
2. **Perpendicular:** $R + P\sin\theta = mg\cos\alpha$, so $R = mg\cos\alpha - \dfrac{mg\sin\alpha}{\cos\theta}\sin\theta = mg(\cos\alpha - \sin\alpha\tan\theta)$.

**(b)** $P = \dfrac{mg\sin\alpha}{\cos\theta}$ is least when $\cos\theta$ is as large as possible, which is $1$ at $\theta = 0$. So the least force is $mg\sin\alpha$, pushing straight up the line of greatest slope.

**(c)** In contact means $R > 0$: $\cos\alpha > \sin\alpha\tan\theta$, so $\tan\theta < \dfrac{\cos\alpha}{\sin\alpha} = \tan(90^\circ - \alpha)$.
$\tan$ is increasing on $0 \le \theta < 90^\circ$, so $0 \le \theta < 90^\circ - \alpha$.

**Check:** at $\theta = 90^\circ - \alpha$ the force is vertical, and it would have to hold up the whole weight, so $R = 0$. Any steeper and it lifts the particle off.`
}
]
};
