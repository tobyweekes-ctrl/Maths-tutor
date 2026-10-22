/* 5.1 Resolving forces */
FIGS['5.1-components'] = Fig.particle({ label: 'A force F at angle theta split into components', angles: [{ from: 0, to: 35, label: 'θ', r: 40 }], ref: true,
  forces: [{ deg: 35, label: 'F', len: 92 }, { deg: 0, label: 'F cos θ', len: 75 }, { deg: 90, label: 'F sin θ', len: 52 }] });
FIGS['5.1-crate'] = Fig.ground({ label: 'Crate pulled by a rope at 30 degrees', angles: [{ from: 0, to: 30, label: '30°' }],
  forces: [{ deg: 30, label: '40 N', len: 80 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: '8g', len: 50, weight: true }] });
FIGS['5.1-vertical'] = Fig.hanging({ label: 'Particle on a string at 20 degrees to the vertical, pulled by a horizontal force', weightLabel: 'mg',
  strings: [{ deg: 110, label: 'T' }], extra: [{ deg: 0, label: '5 N' }], angles: [{ from: 90, to: 110, label: '20°', r: 40 }] });

CONTENT['5.1'] = {
notes: R`
### Splitting a force into components
A force $F$ at angle $\theta$ to a direction has
> $$\text{component along that direction} = F\cos\theta \qquad \text{component perpendicular} = F\sin\theta$$

[[fig:5.1-components]]

The component **next to** the angle gets $\cos$. If you are unsure, sketch the right-angled triangle.

### Resultant of several forces
1. Resolve every force horizontally ($\rightarrow$) and vertically ($\uparrow$).
2. Add the components: total $X$ and total $Y$.
3. Magnitude $= \sqrt{X^2 + Y^2}$. Direction $= \tan^{-1}\left(\frac{Y}{X}\right)$, measured from the positive $x$-direction. Always sketch it: if $X$ is negative the resultant points left, and the calculator's angle needs adjusting.

In vector form, a force of $F$ at $\theta$ above $\mathbf i$ is $(F\cos\theta)\mathbf i + (F\sin\theta)\mathbf j$. To add forces in $\mathbf i$, $\mathbf j$ form, add the $\mathbf i$ parts and the $\mathbf j$ parts separately.

### Equilibrium
A particle in equilibrium is at rest or moving at constant velocity. The resultant is zero, so
> $$\text{Resolving } (\rightarrow):\ \text{sum} = 0 \qquad \text{Resolving } (\uparrow):\ \text{sum} = 0$$

In vector form: the forces add up to $0\mathbf i + 0\mathbf j$.

### Moving particles
Resolve in the **direction of motion** and use $F = ma$. Resolve **perpendicular to the motion** with total $0$ (there's no acceleration that way), which usually gives the normal reaction $R$.

::: booklet
**Not in the formula booklet, so learn these:** $F\cos\theta$ and $F\sin\theta$ for components, $|\mathbf F| = \sqrt{X^2+Y^2}$, and $F = ma$ in each direction. The value $g = 9.8$ m s$^{-2}$ is given in the instructions on the front of each paper.
:::

### Worked example 1
A crate of mass $8$ kg rests on smooth horizontal ground. A rope pulls it with tension $40$ N at $30^\circ$ above the horizontal.

[[fig:5.1-crate]]

- $(\rightarrow)$, $F = ma$: $40\cos30^\circ = 8a$, so $a = 4.33$ m s$^{-2}$.
- $(\uparrow)$: $R + 40\sin30^\circ = 8g$, so $R = 78.4 - 20 = 58.4$ N.

### Worked example 2: the angle is given from the vertical
A particle hangs on a light string. A horizontal force of $5$ N holds it in equilibrium with the string at $20^\circ$ to the **vertical**. Find the tension and the mass.

[[fig:5.1-vertical]]

**The trap:** the angle is measured from the vertical, so the vertical part of $T$ is $T\cos20^\circ$, not $T\sin20^\circ$.
- $(\rightarrow)$: $T\sin20^\circ = 5$, so $T = 14.6$ N.
- $(\uparrow)$: $T\cos20^\circ = mg$, so $m = \dfrac{14.62\cos20^\circ}{9.8} = 1.40$ kg.

### Watch out
- Use $g = 9.8$ m s$^{-2}$. When your answer uses $g = 9.8$, give it to 2 or 3 significant figures.
- Write "Resolving $(\rightarrow)$" or "R($\uparrow$)" before each equation. Examiners look for it.
- Check which line each angle is measured from before choosing $\sin$ or $\cos$.
`,
questions: [
{ id:'5.1-1', stars:2,
fig: Fig.particle({ label: 'Forces of 8 N and 5 N at 60 degrees', angles: [{ from: 0, to: 60, label: '60°' }], forces: [{ deg: 0, label: '8 N', len: 90 }, { deg: 60, label: '5 N', len: 66 }] }),
q: R`Two forces act on a particle. One has magnitude $8$ N and acts in the direction of the positive $x$-axis. The other has magnitude $5$ N and acts at $60^\circ$ above the positive $x$-axis.

**(a)** Find the horizontal and vertical components of the resultant force. [[2]]

**(b)** Find the magnitude of the resultant force. [[2]]

**(c)** Find the angle the resultant makes with the positive $x$-axis. [[2]]`,
hints: [
  R`Horizontal: $8 + 5\cos60^\circ$. Vertical: $0 + 5\sin60^\circ$.`,
  R`Use Pythagoras for the magnitude, then $\tan^{-1}\left(\frac{Y}{X}\right)$ for the angle.`
],
scheme: [
  ['(a)', 'M1', R`Resolves both forces: $8 + 5\cos60^\circ$ and $5\sin60^\circ$`],
  ['(a)', 'A1', R`$10.5$ N and $4.33$ N`],
  ['(b)', 'M1', R`$\sqrt{10.5^2 + 4.33^2}$`],
  ['(b)', 'A1', R`$11.4$ N`],
  ['(c)', 'M1', R`$\tan^{-1}\left(\dfrac{4.33}{10.5}\right)$`],
  ['(c)', 'A1', R`$22.4^\circ$`]
],
answer: R`(a) $10.5$ N, $4.33$ N (b) $11.4$ N (c) $22.4^\circ$`,
sol: R`
**(a)** $X = 8 + 5\cos60^\circ = 8 + 2.5 = 10.5$ N and $Y = 5\sin60^\circ = 4.330$ N.

**(b)** $|F| = \sqrt{10.5^2 + 4.330^2} = \sqrt{129} = 11.4$ N (3 s.f.)

**(c)** $\theta = \tan^{-1}\left(\dfrac{4.330}{10.5}\right) = 22.4^\circ$ above the positive $x$-axis.`
},
{ id:'5.1-2', stars:3,
fig: Fig.hanging({ label: 'Particle held by two strings at 30 and 60 degrees to the horizontal', weightLabel: '4g', strings: [{ deg: 150, label: 'T₁', angleLabel: '30°' }, { deg: 60, label: 'T₂', angleLabel: '60°' }] }),
q: R`A particle of mass $4$ kg hangs in equilibrium, held by two light inextensible strings. One string makes an angle of $30^\circ$ with the horizontal and has tension $T_1$ N. The other makes an angle of $60^\circ$ with the horizontal, on the other side, and has tension $T_2$ N. Find $T_1$ and $T_2$. [[6]]`,
hints: [
  R`Resolve horizontally: the horizontal parts of the two tensions must balance.`,
  R`Resolve vertically: the vertical parts of the tensions balance the weight $4g$.`,
  R`From the horizontal equation, $T_2 = \sqrt3\,T_1$. Substitute into the vertical equation.`
],
scheme: [
  ['', 'M1', R`Resolves horizontally`],
  ['', 'A1', R`$T_1\cos30^\circ = T_2\cos60^\circ$`],
  ['', 'M1', R`Resolves vertically, three terms`],
  ['', 'A1', R`$T_1\sin30^\circ + T_2\sin60^\circ = 4g$`],
  ['', 'M1', R`Solves the simultaneous equations`],
  ['', 'A1', R`$T_1 = 19.6$ N, $T_2 = 33.9$ N`]
],
answer: R`$T_1 = 19.6$ N, $T_2 = 33.9$ N`,
sol: R`
1. **Resolving $(\rightarrow)$:** $T_1\cos30^\circ = T_2\cos60^\circ$, so $\frac{\sqrt3}{2}T_1 = \frac12 T_2$ and $T_2 = \sqrt3\,T_1$.
2. **Resolving $(\uparrow)$:** $T_1\sin30^\circ + T_2\sin60^\circ = 4g = 39.2$
3. **Substitute:** $\frac12T_1 + \sqrt3T_1\cdot\frac{\sqrt3}{2} = \frac12T_1 + \frac32T_1 = 2T_1 = 39.2$
4. So $T_1 = 19.6$ N and $T_2 = 19.6\sqrt3 = 33.9$ N (3 s.f.).`
},
{ id:'5.1-3', stars:2,
fig: Fig.ground({ label: 'Box pulled by a rope at 20 degrees', angles: [{ from: 0, to: 20, label: '20°' }], forces: [{ deg: 20, label: '30 N', len: 80 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: '5g', len: 50, weight: true }] }),
q: R`A box of mass $5$ kg is pulled along a smooth horizontal floor by a rope inclined at $20^\circ$ above the horizontal. The tension in the rope is $30$ N.

**(a)** Find the acceleration of the box. [[3]]

**(b)** Find the normal reaction between the box and the floor. [[3]]`,
hints: [
  R`Only the horizontal part of the tension, $30\cos20^\circ$, makes the box accelerate.`,
  R`Vertically there is no acceleration: $R + 30\sin20^\circ = 5g$.`
],
scheme: [
  ['(a)', 'M1', R`$F = ma$ horizontally using $30\cos20^\circ$`],
  ['(a)', 'A1', R`$30\cos20^\circ = 5a$`],
  ['(a)', 'A1', R`$a = 5.64$ m s$^{-2}$`],
  ['(b)', 'M1', R`Resolves vertically, three terms`],
  ['(b)', 'A1', R`$R + 30\sin20^\circ = 5g$`],
  ['(b)', 'A1', R`$R = 38.7$ N`]
],
answer: R`(a) $5.64$ m s$^{-2}$ (b) $38.7$ N`,
sol: R`
**(a)** $(\rightarrow)$, $F = ma$: $30\cos20^\circ = 5a$, so $a = \dfrac{28.19}{5} = 5.64$ m s$^{-2}$.

**(b)** $(\uparrow)$: $R + 30\sin20^\circ = 5g$, so $R = 49 - 10.26 = 38.7$ N.

The rope lifts the box slightly, so $R$ is **less** than the weight.`
},
{ id:'5.1-4', stars:1,
fig: Fig.particle({ label: 'A 20 N force at 30 degrees above the horizontal', ref: true, angles: [{ from: 0, to: 30, label: '30°', r: 40 }], forces: [{ deg: 30, label: '20 N', len: 90 }] }),
q: R`A force of magnitude $20$ N acts at $30^\circ$ above the horizontal. Find its horizontal and vertical components. [[2]]`,
hints: [
  R`The component next to the $30^\circ$ angle uses $\cos$.`,
  R`Horizontal: $20\cos30^\circ$. Vertical: $20\sin30^\circ$.`
],
scheme: [
  ['', 'B1', R`Horizontal component $20\cos30^\circ = 17.3$ N`],
  ['', 'B1', R`Vertical component $20\sin30^\circ = 10$ N`]
],
answer: R`Horizontal $17.3$ N, vertical $10$ N`,
sol: R`
1. **Horizontal:** the horizontal is next to the $30^\circ$ angle, so use $\cos$: $20\cos30^\circ = 20 \times 0.8660 = 17.3$ N.
2. **Vertical:** $20\sin30^\circ = 20\times0.5 = 10$ N.`
},
{ id:'5.1-5', stars:1,
fig: Fig.particle({ label: 'The force 6i plus 8j', ref: true, angles: [{ from: 0, to: 53.13, label: 'θ', r: 36 }], forces: [{ deg: 53.13, label: '6i + 8j', len: 92 }] }),
q: R`A force is given by $(6\mathbf i + 8\mathbf j)$ N. Find its magnitude and the angle it makes with $\mathbf i$. [[2]]`,
hints: [
  R`Magnitude: $\sqrt{6^2 + 8^2}$.`,
  R`Angle with $\mathbf i$: $\tan^{-1}\left(\frac{8}{6}\right)$.`
],
scheme: [
  ['', 'B1', R`$|\mathbf F| = \sqrt{36 + 64} = 10$ N`],
  ['', 'B1', R`Angle $= \tan^{-1}\frac86 = 53.1^\circ$`]
],
answer: R`$10$ N at $53.1^\circ$ to $\mathbf i$`,
sol: R`
1. **Magnitude:** $|\mathbf F| = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$ N.
2. **Direction:** both parts are positive, so the force points up and to the right. $\theta = \tan^{-1}\left(\frac86\right) = 53.1^\circ$ above $\mathbf i$.`
},
{ id:'5.1-6', stars:1,
fig: Fig.particle({ label: 'Three forces on a particle in equilibrium', forces: [{ deg: -33.7, label: '3i − 2j', len: 74 }, { deg: 141.3, label: '−5i + 4j', len: 84 }, { deg: -45, label: 'F', len: 54 }] }),
q: R`A particle is in equilibrium under the forces $(3\mathbf i - 2\mathbf j)$ N, $(-5\mathbf i + 4\mathbf j)$ N and $\mathbf F$ N. Find $\mathbf F$. [[2]]`,
hints: [
  R`In equilibrium the three forces add up to zero.`,
  R`$\mathbf F = -\big[(3\mathbf i - 2\mathbf j) + (-5\mathbf i + 4\mathbf j)\big]$.`
],
scheme: [
  ['', 'M1', R`Sets the sum of the three forces equal to $\mathbf 0$`],
  ['', 'A1', R`$\mathbf F = (2\mathbf i - 2\mathbf j)$ N`]
],
answer: R`$\mathbf F = (2\mathbf i - 2\mathbf j)$ N`,
sol: R`
1. **Equilibrium:** $(3\mathbf i - 2\mathbf j) + (-5\mathbf i + 4\mathbf j) + \mathbf F = \mathbf 0$
2. **Add the known forces:** $-2\mathbf i + 2\mathbf j$.
3. **So** $\mathbf F = 2\mathbf i - 2\mathbf j$ N. It exactly cancels the other two.`
},
{ id:'5.1-7', stars:2,
fig: Fig.particle({ label: 'Three forces in equilibrium', forces: [{ deg: 56.3, label: '2i + 3j', len: 72 }, { deg: -53.1, label: 'ai − 4j', len: 76 }, { deg: 168.7, label: '−5i + bj', len: 86 }] }),
q: R`A particle is in equilibrium under the three forces $(2\mathbf i + 3\mathbf j)$ N, $(a\mathbf i - 4\mathbf j)$ N and $(-5\mathbf i + b\mathbf j)$ N.

**(a)** Find the values of $a$ and $b$. [[3]]

**(b)** Find the magnitude of the third force. [[1]]`,
hints: [
  R`The $\mathbf i$ parts add to zero, and so do the $\mathbf j$ parts.`,
  R`$\mathbf i$: $2 + a - 5 = 0$. $\mathbf j$: $3 - 4 + b = 0$.`
],
scheme: [
  ['(a)', 'M1', R`Sets the $\mathbf i$ and $\mathbf j$ components each equal to $0$`],
  ['(a)', 'A1', R`$a = 3$`],
  ['(a)', 'A1', R`$b = 1$`],
  ['(b)', 'B1ft', R`$\sqrt{(-5)^2 + 1^2} = \sqrt{26} = 5.10$ N`]
],
answer: R`(a) $a = 3$, $b = 1$ (b) $5.10$ N`,
sol: R`
**(a)** In equilibrium the resultant is $\mathbf 0$.
- $\mathbf i$: $2 + a - 5 = 0$, so $a = 3$.
- $\mathbf j$: $3 - 4 + b = 0$, so $b = 1$.

**(b)** The third force is $(-5\mathbf i + \mathbf j)$ N, with magnitude $\sqrt{25 + 1} = \sqrt{26} = 5.10$ N.`
},
{ id:'5.1-8', stars:2,
fig: Fig.particle({ label: 'Two forces whose resultant points up and to the left', ref: true, forces: [{ deg: 164, label: '−7i + 2j', len: 92 }, { deg: 59, label: '3i + 5j', len: 74 }] }),
q: R`Two forces, $(-7\mathbf i + 2\mathbf j)$ N and $(3\mathbf i + 5\mathbf j)$ N, act on a particle.

**(a)** Find the resultant force in the form $p\mathbf i + q\mathbf j$. [[1]]

**(b)** Find the magnitude of the resultant. [[2]]

**(c)** Find the angle the resultant makes with the positive $\mathbf i$ direction. [[2]]`,
hints: [
  R`Add the $\mathbf i$ parts and the $\mathbf j$ parts.`,
  R`The resultant is $-4\mathbf i + 7\mathbf j$, which points up and to the **left**. Sketch it before using $\tan^{-1}$.`,
  R`$\tan^{-1}\left(\frac74\right)$ is the angle with the **negative** $\mathbf i$ direction. Subtract it from $180^\circ$.`
],
scheme: [
  ['(a)', 'B1', R`$-4\mathbf i + 7\mathbf j$`],
  ['(b)', 'M1', R`$\sqrt{(-4)^2 + 7^2}$`],
  ['(b)', 'A1', R`$\sqrt{65} = 8.06$ N`],
  ['(c)', 'M1', R`$\tan^{-1}\frac74 = 60.3^\circ$ used with a correct sketch`],
  ['(c)', 'A1', R`$180^\circ - 60.3^\circ = 119.7^\circ$`]
],
answer: R`(a) $-4\mathbf i + 7\mathbf j$ (b) $8.06$ N (c) $119.7^\circ$`,
sol: R`
**(a)** $(-7 + 3)\mathbf i + (2 + 5)\mathbf j = -4\mathbf i + 7\mathbf j$

**(b)** $\sqrt{16 + 49} = \sqrt{65} = 8.06$ N

**(c)** **Sketch first.** The $\mathbf i$ part is negative and the $\mathbf j$ part positive, so the resultant points up and to the left (the second quadrant).
$\tan^{-1}\left(\frac74\right) = 60.3^\circ$ is the angle between the resultant and the **negative** $\mathbf i$ direction.
The angle with the positive $\mathbf i$ direction is $180^\circ - 60.3^\circ = 119.7^\circ$.

A calculator giving $\tan^{-1}\left(\frac{7}{-4}\right) = -60.3^\circ$ is the classic wrong answer here.`
},
{ id:'5.1-9', stars:3,
fig: Fig.hanging({ label: 'Particle on a string at 25 degrees to the vertical, held by a horizontal force P', weightLabel: '0.5g', strings: [{ deg: 115, label: 'T' }], extra: [{ deg: 0, label: 'P' }], angles: [{ from: 90, to: 115, label: '25°', r: 42 }] }),
q: R`A particle of mass $0.5$ kg hangs on a light inextensible string. A horizontal force of magnitude $P$ N holds it in equilibrium with the string at $25^\circ$ to the vertical. Find the tension in the string and the value of $P$. [[6]]`,
hints: [
  R`The angle is measured from the **vertical**, so the vertical part of the tension is $T\cos25^\circ$.`,
  R`Resolving vertically: $T\cos25^\circ = 0.5g$. Resolving horizontally: $P = T\sin25^\circ$.`
],
scheme: [
  ['', 'M1', R`Resolves vertically with the tension resolved`],
  ['', 'A1', R`$T\cos25^\circ = 0.5g$`],
  ['', 'M1', R`Resolves horizontally`],
  ['', 'A1', R`$P = T\sin25^\circ$`],
  ['', 'A1', R`$T = 5.41$ N`],
  ['', 'A1', R`$P = 2.28$ N`]
],
answer: R`$T = 5.41$ N, $P = 2.28$ N`,
sol: R`
1. **Resolving $(\uparrow)$:** the string is $25^\circ$ from the vertical, so its vertical part is $T\cos25^\circ$:
$$T\cos25^\circ = 0.5 \times 9.8 = 4.9 \quad\Rightarrow\quad T = \frac{4.9}{\cos25^\circ} = 5.41 \text{ N}$$
2. **Resolving $(\rightarrow)$:** $P = T\sin25^\circ = 5.407 \times 0.4226 = 2.28$ N.

Check: $\dfrac{P}{0.5g} = \tan25^\circ$, which gives the same $P$.`
},
{ id:'5.1-10', stars:3,
fig: Fig.particle({ label: 'Two forces with a resultant parallel to i plus j', ref: true, forces: [{ deg: -33.7, label: '3i − 2j', len: 76 }, { deg: 104, label: 'pi + 4j', len: 76 }] }),
q: R`Two forces, $\mathbf F_1 = (3\mathbf i - 2\mathbf j)$ N and $\mathbf F_2 = (p\mathbf i + 4\mathbf j)$ N, act on a particle of mass $2$ kg. Their resultant is parallel to $(\mathbf i + \mathbf j)$.

**(a)** Find the value of $p$. [[3]]

**(b)** Find the magnitude of the resultant. [[2]]

**(c)** Find the magnitude of the particle's acceleration. [[1]]`,
hints: [
  R`Find the resultant in terms of $p$.`,
  R`A vector parallel to $\mathbf i + \mathbf j$ has equal $\mathbf i$ and $\mathbf j$ parts.`,
  R`Resultant $= (3 + p)\mathbf i + 2\mathbf j$, so $3 + p = 2$.`
],
scheme: [
  ['(a)', 'M1', R`Resultant $(3+p)\mathbf i + 2\mathbf j$`],
  ['(a)', 'M1', R`Uses parallel to $\mathbf i + \mathbf j$: $3 + p = 2$`],
  ['(a)', 'A1', R`$p = -1$`],
  ['(b)', 'M1', R`$\sqrt{2^2 + 2^2}$`],
  ['(b)', 'A1', R`$2\sqrt2 = 2.83$ N`],
  ['(c)', 'B1ft', R`$a = \dfrac{2.83}{2} = 1.41$ m s$^{-2}$`]
],
answer: R`(a) $p = -1$ (b) $2.83$ N (c) $1.41$ m s$^{-2}$`,
sol: R`
**(a)** Resultant $= (3 + p)\mathbf i + (-2 + 4)\mathbf j = (3 + p)\mathbf i + 2\mathbf j$.
Parallel to $\mathbf i + \mathbf j$ means the two parts are equal: $3 + p = 2$, so $p = -1$.

**(b)** The resultant is $2\mathbf i + 2\mathbf j$, with magnitude $\sqrt{8} = 2\sqrt2 = 2.83$ N.

**(c)** $F = ma$: $a = \dfrac{2\sqrt2}{2} = \sqrt2 = 1.41$ m s$^{-2}$.`
},
{ id:'5.1-11', stars:3,
fig: Fig.particle({ label: 'Weight 12 N held by a horizontal string and a force P at angle theta', ref: true, angles: [{ from: 0, to: 67.4, label: 'θ', r: 36 }], forces: [{ deg: 67.4, label: 'P', len: 86 }, { deg: 180, label: '5 N', len: 60 }, { deg: 270, label: '12 N', len: 70, weight: true }] }),
q: R`A particle of weight $12$ N is held in equilibrium by a horizontal string with tension $5$ N and a force $P$ N acting at an angle $\theta$ above the horizontal, as shown. Find $P$ and $\theta$. [[6]]`,
hints: [
  R`Resolve horizontally and vertically to get two equations.`,
  R`$P\cos\theta = 5$ and $P\sin\theta = 12$.`,
  R`Divide to get $\tan\theta$, or square and add to get $P$.`
],
scheme: [
  ['', 'M1', R`Resolves horizontally`],
  ['', 'A1', R`$P\cos\theta = 5$`],
  ['', 'M1', R`Resolves vertically`],
  ['', 'A1', R`$P\sin\theta = 12$`],
  ['', 'A1', R`$P = 13$ N`],
  ['', 'A1', R`$\theta = 67.4^\circ$`]
],
answer: R`$P = 13$ N, $\theta = 67.4^\circ$`,
sol: R`
1. **Resolving $(\rightarrow)$:** $P\cos\theta = 5$
2. **Resolving $(\uparrow)$:** $P\sin\theta = 12$
3. **Square and add:** $P^2(\cos^2\theta + \sin^2\theta) = 25 + 144 = 169$, so $P = 13$ N.
4. **Divide:** $\tan\theta = \frac{12}{5}$, so $\theta = 67.4^\circ$.`
},
{ id:'5.1-12', stars:4,
fig: Fig.particle({ label: 'Three forces on a 4 kg particle that accelerates', forces: [{ deg: -56.3, label: '2i − 3j', len: 66 }, { deg: 60.9, label: '5i + 9j', len: 92 }, { deg: 80.5, label: 'pi + qj', len: 60 }] }),
q: R`A particle of mass $4$ kg is acted on by three forces, $(2\mathbf i - 3\mathbf j)$ N, $(5\mathbf i + 9\mathbf j)$ N and $(p\mathbf i + q\mathbf j)$ N. The particle accelerates at $(2\mathbf i + 3\mathbf j)$ m s$^{-2}$.

**(a)** Find $p$ and $q$. [[4]]

**(b)** Find the magnitude of the third force and the angle it makes with $\mathbf j$. [[2]]

**(c)** The particle starts from rest. Find its speed after $3$ seconds. [[2]]`,
hints: [
  R`Use $\mathbf F = m\mathbf a$ with vectors: the resultant equals $4(2\mathbf i + 3\mathbf j)$.`,
  R`$\mathbf i$: $2 + 5 + p = 8$. $\mathbf j$: $-3 + 9 + q = 12$.`,
  R`For (c), $\mathbf v = \mathbf u + \mathbf a t$, then find its magnitude.`
],
scheme: [
  ['(a)', 'M1', R`Uses $\mathbf F = m\mathbf a$ with the resultant of all three forces`],
  ['(a)', 'A1', R`$(7 + p)\mathbf i + (6 + q)\mathbf j = 8\mathbf i + 12\mathbf j$`],
  ['(a)', 'A1', R`$p = 1$`],
  ['(a)', 'A1', R`$q = 6$`],
  ['(b)', 'B1ft', R`$\sqrt{37} = 6.08$ N`],
  ['(b)', 'B1ft', R`$\tan^{-1}\frac16 = 9.46^\circ$ to $\mathbf j$`],
  ['(c)', 'M1', R`$\mathbf v = 3(2\mathbf i + 3\mathbf j) = 6\mathbf i + 9\mathbf j$`],
  ['(c)', 'A1', R`$\sqrt{117} = 10.8$ m s$^{-1}$`]
],
answer: R`(a) $p = 1$, $q = 6$ (b) $6.08$ N at $9.46^\circ$ to $\mathbf j$ (c) $10.8$ m s$^{-1}$`,
sol: R`
**(a)** $\mathbf F = m\mathbf a$: $(2 + 5 + p)\mathbf i + (-3 + 9 + q)\mathbf j = 4(2\mathbf i + 3\mathbf j) = 8\mathbf i + 12\mathbf j$.
So $7 + p = 8$, giving $p = 1$, and $6 + q = 12$, giving $q = 6$.

**(b)** The third force is $\mathbf i + 6\mathbf j$: magnitude $\sqrt{1 + 36} = \sqrt{37} = 6.08$ N.
It is mostly in the $\mathbf j$ direction. The angle with $\mathbf j$ is $\tan^{-1}\left(\frac16\right) = 9.46^\circ$.

**(c)** $\mathbf v = \mathbf u + \mathbf a t = \mathbf 0 + 3(2\mathbf i + 3\mathbf j) = 6\mathbf i + 9\mathbf j$.
Speed $= \sqrt{36 + 81} = \sqrt{117} = 10.8$ m s$^{-1}$.`
},
{ id:'5.1-13', stars:4,
fig: Fig.hanging({ label: 'Particle held by strings AP at 30 degrees and BP at 45 degrees to the ceiling', weightLabel: 'mg', strings: [{ deg: 150, label: '20 N', angleLabel: '30°' }, { deg: 45, label: 'T', angleLabel: '45°' }] }),
q: R`A particle $P$ of mass $m$ kg hangs in equilibrium from two light inextensible strings $AP$ and $BP$, where $A$ and $B$ are fixed to a horizontal ceiling. $AP$ makes an angle of $30^\circ$ with the ceiling and $BP$ makes an angle of $45^\circ$ with the ceiling. The tension in $AP$ is $20$ N.

**(a)** Find the tension in $BP$. [[3]]

**(b)** Find $m$. [[3]]

**(c)** Explain what is meant by modelling the strings as **light** and **inextensible**. [[2]]`,
hints: [
  R`Resolve horizontally first: $20\cos30^\circ = T\cos45^\circ$.`,
  R`Then resolve vertically: $20\sin30^\circ + T\sin45^\circ = mg$.`
],
scheme: [
  ['(a)', 'M1', R`Resolves horizontally`],
  ['(a)', 'A1', R`$20\cos30^\circ = T\cos45^\circ$`],
  ['(a)', 'A1', R`$T = 10\sqrt6 = 24.5$ N`],
  ['(b)', 'M1', R`Resolves vertically, three terms`],
  ['(b)', 'A1', R`$20\sin30^\circ + T\sin45^\circ = 9.8m$`],
  ['(b)', 'A1', R`$m = 2.79$`],
  ['(c)', 'B1', R`Light: the string has no mass, so the tension is the same all along it`],
  ['(c)', 'B1', R`Inextensible: the string does not stretch, so its length (and the angles) stay fixed`]
],
answer: R`(a) $24.5$ N (b) $m = 2.79$ (c) see solution`,
sol: R`
**(a)** **Resolving $(\rightarrow)$:** $20\cos30^\circ = T\cos45^\circ$, so $T = \dfrac{20 \times 0.8660}{0.7071} = 24.5$ N (exactly $10\sqrt6$).

**(b)** **Resolving $(\uparrow)$:** $20\sin30^\circ + T\sin45^\circ = mg$
$10 + 24.49 \times 0.7071 = 10 + 17.32 = 27.32$, so $m = \dfrac{27.32}{9.8} = 2.79$.

**(c)**
- **Light:** the string's mass is ignored, so the tension is the same throughout the string.
- **Inextensible:** the string doesn't stretch, so the angles in the diagram stay as given.`
},
{ id:'5.1-14', stars:4,
fig: Fig.particle({ label: 'Forces of 5 N, 8 N and 6 N at 0, 120 and 240 degrees', ref: true, angles: [{ from: 0, to: 120, label: '120°', r: 30 }], forces: [{ deg: 0, label: '5 N', len: 70 }, { deg: 120, label: '8 N', len: 90 }, { deg: 240, label: '6 N', len: 78 }] }),
q: R`Three forces act on a particle: $5$ N in the direction of $\mathbf i$, $8$ N at $120^\circ$ to $\mathbf i$, and $6$ N at $240^\circ$ to $\mathbf i$ (angles measured anticlockwise from $\mathbf i$).

**(a)** Find the magnitude of the resultant and the angle it makes with $\mathbf i$. [[7]]

**(b)** A fourth force is added so that the particle is in equilibrium. Write it in the form $a\mathbf i + b\mathbf j$. [[1]]`,
hints: [
  R`Resolve each force: $\mathbf i$ part $F\cos\theta$, $\mathbf j$ part $F\sin\theta$, using the angle from $\mathbf i$.`,
  R`$X = 5 + 8\cos120^\circ + 6\cos240^\circ$ and $Y = 8\sin120^\circ + 6\sin240^\circ$.`,
  R`$X$ comes out negative and $Y$ positive. Sketch it before finding the angle.`
],
scheme: [
  ['(a)', 'M1', R`Resolves all three forces in the $\mathbf i$ direction`],
  ['(a)', 'A1', R`$X = 5 - 4 - 3 = -2$`],
  ['(a)', 'M1', R`Resolves all three forces in the $\mathbf j$ direction`],
  ['(a)', 'A1', R`$Y = 4\sqrt3 - 3\sqrt3 = \sqrt3$`],
  ['(a)', 'M1', R`$\sqrt{X^2 + Y^2}$`],
  ['(a)', 'A1', R`$\sqrt7 = 2.65$ N`],
  ['(a)', 'A1', R`$180^\circ - \tan^{-1}\frac{\sqrt3}{2} = 139.1^\circ$`],
  ['(a)', 'B1ft', R`$(2\mathbf i - \sqrt3\,\mathbf j)$ N`]
],
answer: R`(a) $2.65$ N at $139.1^\circ$ to $\mathbf i$ (b) $(2\mathbf i - \sqrt3\,\mathbf j)$ N`,
sol: R`
**(a)**
1. **$\mathbf i$ direction:** $X = 5 + 8\cos120^\circ + 6\cos240^\circ = 5 - 4 - 3 = -2$
2. **$\mathbf j$ direction:** $Y = 8\sin120^\circ + 6\sin240^\circ = 4\sqrt3 - 3\sqrt3 = \sqrt3$
3. **Magnitude:** $\sqrt{(-2)^2 + (\sqrt3)^2} = \sqrt7 = 2.65$ N
4. **Direction:** $X < 0$ and $Y > 0$, so the resultant points up and to the left. $\tan^{-1}\left(\frac{\sqrt3}{2}\right) = 40.9^\circ$ from the negative $\mathbf i$ direction, so the angle with $\mathbf i$ is $180^\circ - 40.9^\circ = 139.1^\circ$.

**(b)** The fourth force must cancel the resultant: $2\mathbf i - \sqrt3\,\mathbf j$ N.`
},
{ id:'5.1-15', stars:5,
fig: Fig.particle({ label: 'A 6 N force along i and a 10 N force at angle theta', ref: true, angles: [{ from: 0, to: 60, label: 'θ' }], forces: [{ deg: 0, label: '6 N', len: 70 }, { deg: 60, label: '10 N', len: 92 }] }),
q: R`A particle is acted on by a force of $6$ N in the direction of $\mathbf i$ and a force of $10$ N at an angle $\theta$ to $\mathbf i$, where $0^\circ \le \theta \le 180^\circ$.

**(a)** Given that the resultant has magnitude $14$ N, find $\theta$. [[5]]

**(b)** Find the least possible magnitude of the resultant and the value of $\theta$ that gives it. [[2]]

**(c)** For the value of $\theta$ in (a), find the angle between the resultant and $\mathbf i$. [[2]]`,
hints: [
  R`The resultant is $(6 + 10\cos\theta)\mathbf i + 10\sin\theta\,\mathbf j$.`,
  R`Square and add, then use $\sin^2\theta + \cos^2\theta = 1$: you get $|\mathbf R|^2 = 136 + 120\cos\theta$.`,
  R`The least value of $136 + 120\cos\theta$ is when $\cos\theta = -1$.`
],
scheme: [
  ['(a)', 'M1', R`Resultant $(6 + 10\cos\theta)\mathbf i + 10\sin\theta\,\mathbf j$`],
  ['(a)', 'M1', R`Squares and adds the components`],
  ['(a)', 'A1', R`$|\mathbf R|^2 = 136 + 120\cos\theta$, using $\sin^2\theta + \cos^2\theta = 1$`],
  ['(a)', 'M1', R`Sets $136 + 120\cos\theta = 196$`],
  ['(a)', 'A1', R`$\theta = 60^\circ$`],
  ['(b)', 'M1', R`Uses $\cos\theta = -1$`],
  ['(b)', 'A1', R`Least magnitude $4$ N, when $\theta = 180^\circ$`],
  ['(c)', 'M1', R`$\tan^{-1}\left(\dfrac{10\sin60^\circ}{6 + 10\cos60^\circ}\right)$`],
  ['(c)', 'A1', R`$38.2^\circ$`]
],
answer: R`(a) $\theta = 60^\circ$ (b) $4$ N when $\theta = 180^\circ$ (c) $38.2^\circ$`,
sol: R`
**(a)**
1. **Components:** $\mathbf R = (6 + 10\cos\theta)\mathbf i + 10\sin\theta\,\mathbf j$
2. **Square and add:** $|\mathbf R|^2 = 36 + 120\cos\theta + 100\cos^2\theta + 100\sin^2\theta = 136 + 120\cos\theta$
3. **Set equal to $14^2$:** $136 + 120\cos\theta = 196$, so $\cos\theta = \frac12$ and $\theta = 60^\circ$.

**(b)** $|\mathbf R|^2 = 136 + 120\cos\theta$ is least when $\cos\theta = -1$: $|\mathbf R|^2 = 16$, so the least magnitude is $4$ N at $\theta = 180^\circ$. That makes sense: the forces then point in opposite directions.

**(c)** With $\theta = 60^\circ$: $\mathbf R = 11\mathbf i + 5\sqrt3\,\mathbf j$. The angle with $\mathbf i$ is $\tan^{-1}\left(\frac{8.660}{11}\right) = 38.2^\circ$.`
}
]
};
